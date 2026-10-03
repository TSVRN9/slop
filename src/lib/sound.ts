type Cue = 'correct' | 'pass' | 'tick' | 'go' | 'end'

let ctx: AudioContext | null = null
let enabled = true

export function setSoundEnabled(on: boolean) {
  enabled = on
}

/** Must be called from a user gesture so iOS lets the AudioContext start. */
export function unlockAudio() {
  try {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    ctx ??= new AC()
    if (ctx.state === 'suspended') void ctx.resume()
  } catch {
    ctx = null
  }
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', gain = 0.2) {
  if (!ctx) return
  const t0 = ctx.currentTime + start
  const osc = ctx.createOscillator()
  const g = ctx.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(ctx.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}

const VIBRATION: Record<Cue, number | number[]> = {
  correct: 60,
  pass: [30, 40, 30],
  tick: 15,
  go: 120,
  end: [200, 80, 200],
}

export function play(cue: Cue) {
  try {
    navigator.vibrate?.(VIBRATION[cue])
  } catch {
    // ignore
  }
  if (!enabled || !ctx) return
  switch (cue) {
    case 'correct':
      tone(660, 0, 0.12, 'triangle')
      tone(990, 0.1, 0.18, 'triangle')
      break
    case 'pass':
      tone(300, 0, 0.12, 'sawtooth', 0.12)
      tone(220, 0.1, 0.2, 'sawtooth', 0.12)
      break
    case 'tick':
      tone(880, 0, 0.06, 'square', 0.08)
      break
    case 'go':
      tone(523, 0, 0.1, 'triangle')
      tone(784, 0.1, 0.25, 'triangle')
      break
    case 'end':
      tone(784, 0, 0.18, 'triangle')
      tone(659, 0.18, 0.18, 'triangle')
      tone(523, 0.36, 0.4, 'triangle')
      break
  }
}
