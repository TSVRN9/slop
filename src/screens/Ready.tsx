import { useEffect, useRef, useState } from 'react'
import { useTilt } from '../hooks/useTilt'
import { useWakeLock } from '../hooks/useWakeLock'
import { play } from '../lib/sound'

interface Props {
  tiltAvailable: boolean
  onCancel: () => void
  onGo: () => void
}

const HOLD_MS = 700
const VERTICAL_TOLERANCE = 25

/** "Place on forehead" prompt followed by a 3-2-1 countdown. */
export default function Ready({ tiltAvailable, onCancel, onGo }: Props) {
  const [count, setCount] = useState<number | null>(null)
  const [noSensor, setNoSensor] = useState(!tiltAvailable)
  const verticalSince = useRef<number | null>(null)
  const onGoRef = useRef(onGo)
  useEffect(() => {
    onGoRef.current = onGo
  })

  useWakeLock(true)

  const begin = () => setCount((c) => c ?? 3)

  const { sensorSeen } = useTilt({
    enabled: tiltAvailable && count === null,
    onPitch: (pitch) => {
      const now = performance.now()
      if (Math.abs(pitch) < VERTICAL_TOLERANCE) {
        verticalSince.current ??= now
        if (now - verticalSince.current > HOLD_MS) begin()
      } else {
        verticalSince.current = null
      }
    },
  })

  useEffect(() => {
    if (!tiltAvailable || sensorSeen) return
    const t = setTimeout(() => setNoSensor(true), 1200)
    return () => clearTimeout(t)
  }, [tiltAvailable, sensorSeen])

  useEffect(() => {
    if (count === null) return
    if (count === 0) {
      play('go')
      onGoRef.current()
      return
    }
    play('tick')
    const t = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  const tiltMode = tiltAvailable && !noSensor

  return (
    <main className="stage ready" onClick={begin}>
      <button
        className="icon-btn stage-close"
        onClick={(e) => {
          e.stopPropagation()
          onCancel()
        }}
        aria-label="Cancel"
      >
        ✕
      </button>
      {count === null ? (
        <div className="ready-prompt">
          <div className="forehead" aria-hidden>
            📱
          </div>
          <h1>{tiltMode ? 'Place on forehead' : 'Tap to start'}</h1>
          {tiltMode ? (
            <p>Hold the phone sideways, screen facing out. We’ll start when it’s steady — or tap.</p>
          ) : (
            <p>
              No motion sensor available, so use taps: <strong>right side = correct</strong>,{' '}
              <strong>left side = pass</strong>. On a keyboard use ↓ / ↑.
            </p>
          )}
          <p className="portrait-hint">↻ Turn your phone sideways</p>
        </div>
      ) : (
        <div className="countdown" key={count}>
          {count}
        </div>
      )}
    </main>
  )
}
