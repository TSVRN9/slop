export type TiltAction = 'correct' | 'pass'

const DEG = Math.PI / 180

/**
 * Pitch of the screen relative to vertical, in degrees, from DeviceOrientation
 * beta/gamma. Uses the gravity component along the screen normal
 * (cos β · cos γ), so it is smooth through vertical and works in either
 * landscape direction.
 *
 *   +90  screen facing the ceiling (tilted up / back)
 *     0  screen vertical (phone on forehead)
 *   -90  screen facing the floor (tilted down / forward)
 */
export function pitchFromOrientation(beta: number, gamma: number): number {
  const z = Math.cos(beta * DEG) * Math.cos(gamma * DEG)
  return Math.asin(Math.max(-1, Math.min(1, z))) / DEG
}

export interface TiltDetectorOptions {
  /** Degrees past neutral that count as a tilt. */
  triggerAngle?: number
  /** Must come back within this many degrees of neutral to re-arm. */
  neutralAngle?: number
  /** Minimum time between two actions. */
  lockoutMs?: number
  /** Time spent sampling the neutral baseline before detection starts. */
  calibrationMs?: number
  /** Largest baseline offset accepted; beyond that we assume vertical. */
  maxBaseline?: number
}

/**
 * Turns a stream of pitch samples into discrete correct/pass actions with
 * hysteresis: after an action the phone must return to neutral before the
 * next one can fire, so holding a tilt never double-counts.
 */
export class TiltDetector {
  private readonly trigger: number
  private readonly neutral: number
  private readonly lockoutMs: number
  private readonly calibrationMs: number
  private readonly maxBaseline: number

  private startedAt: number | null = null
  private samples: number[] = []
  private baseline: number | null = null
  private armed = false
  private lastActionAt = -Infinity

  constructor(opts: TiltDetectorOptions = {}) {
    this.trigger = opts.triggerAngle ?? 35
    this.neutral = opts.neutralAngle ?? 15
    this.lockoutMs = opts.lockoutMs ?? 500
    this.calibrationMs = opts.calibrationMs ?? 300
    this.maxBaseline = opts.maxBaseline ?? 25
  }

  get calibrated(): boolean {
    return this.baseline !== null
  }

  get offset(): number {
    return this.baseline ?? 0
  }

  reset(): void {
    this.startedAt = null
    this.samples = []
    this.baseline = null
    this.armed = false
    this.lastActionAt = -Infinity
  }

  update(pitch: number, now: number): TiltAction | null {
    if (this.baseline === null) {
      if (this.startedAt === null) this.startedAt = now
      this.samples.push(pitch)
      if (now - this.startedAt < this.calibrationMs) return null
      const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length
      this.baseline = Math.abs(avg) <= this.maxBaseline ? avg : 0
      this.samples = []
    }

    const rel = pitch - this.baseline

    if (!this.armed) {
      if (Math.abs(rel) < this.neutral) this.armed = true
      return null
    }
    if (now - this.lastActionAt < this.lockoutMs) return null

    let action: TiltAction | null = null
    if (rel <= -this.trigger) action = 'correct'
    else if (rel >= this.trigger) action = 'pass'

    if (action) {
      this.armed = false
      this.lastActionAt = now
    }
    return action
  }
}
