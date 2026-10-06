import { describe, expect, it } from 'vitest'
import { TiltDetector, pitchFromGravityZ, pitchFromOrientation } from './tilt'

describe('pitchFromOrientation', () => {
  it('is +90 face up, -90 face down, 0 vertical', () => {
    expect(pitchFromOrientation(0, 0)).toBeCloseTo(90)
    expect(pitchFromOrientation(180, 0)).toBeCloseTo(-90)
    expect(pitchFromOrientation(90, 0)).toBeCloseTo(0)
    // landscape on forehead, either direction
    expect(pitchFromOrientation(0, 90)).toBeCloseTo(0)
    expect(pitchFromOrientation(0, -90)).toBeCloseTo(0)
  })

  it('handles landscape tilts in both rotations', () => {
    // landscape-left, screen tilted toward the ceiling by 40°
    expect(pitchFromOrientation(0, 50)).toBeCloseTo(40)
    expect(pitchFromOrientation(0, -50)).toBeCloseTo(40)
    // past vertical toward the floor (iOS reports beta flipped to 180)
    expect(pitchFromOrientation(180, 50)).toBeCloseTo(-40)
    expect(pitchFromOrientation(-180, -50)).toBeCloseTo(-40)
  })
})

describe('pitchFromGravityZ', () => {
  it('matches the orientation pitch convention', () => {
    expect(pitchFromGravityZ(9.81)).toBeCloseTo(90)
    expect(pitchFromGravityZ(-9.81)).toBeCloseTo(-90)
    expect(pitchFromGravityZ(0)).toBeCloseTo(0)
    expect(pitchFromGravityZ(9.81 * Math.sin((40 * Math.PI) / 180))).toBeCloseTo(40)
    // noisy readings above 1 g clamp instead of returning NaN
    expect(pitchFromGravityZ(11)).toBeCloseTo(90)
  })
})

function feed(d: TiltDetector, seq: Array<[number, number]>) {
  return seq.map(([p, t]) => d.update(p, t)).filter(Boolean)
}

describe('TiltDetector', () => {
  it('calibrates then detects correct and pass', () => {
    const d = new TiltDetector()
    const out = feed(d, [
      [0, 0], [0, 100], [0, 200], [0, 300], // calibration
      [0, 400], // armed
      [-50, 500], // correct
      [0, 1100],
      [50, 1200], // pass
    ])
    expect(out).toEqual(['correct', 'pass'])
  })

  it('does not double count a held tilt', () => {
    const d = new TiltDetector()
    const out = feed(d, [
      [0, 0], [0, 350], [-60, 400], [-60, 1000], [-60, 2000], [-20, 2500], [-60, 3000],
    ])
    expect(out).toEqual(['correct'])
  })

  it('re-arms only when back near neutral', () => {
    const d = new TiltDetector()
    const out = feed(d, [[0, 0], [0, 350], [-60, 400], [-5, 1000], [-60, 1100]])
    expect(out).toEqual(['correct', 'correct'])
  })

  it('applies a baseline offset from calibration', () => {
    const d = new TiltDetector()
    // head tilted back: resting pitch +20
    const out = feed(d, [[20, 0], [20, 350], [-20, 400], [20, 1000], [50, 1100]])
    expect(d.offset).toBeCloseTo(20)
    expect(out).toEqual(['correct'])
  })

  it('respects lockout', () => {
    const d = new TiltDetector({ lockoutMs: 1000 })
    const out = feed(d, [[0, 0], [0, 350], [-60, 400], [0, 500], [60, 600], [0, 1300], [60, 1500]])
    expect(out).toEqual(['correct', 'pass'])
  })
})
