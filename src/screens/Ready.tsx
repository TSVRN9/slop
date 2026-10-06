import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { Deck } from '../data/decks'
import { useTilt } from '../hooks/useTilt'
import { useWakeLock } from '../hooks/useWakeLock'
import { requestMotionPermission, type MotionStatus } from '../lib/device'
import { play } from '../lib/sound'

interface Props {
  deck: Deck
  motion: MotionStatus
  onCancel: () => void
  onGo: (tiltAvailable: boolean) => void
}

const HOLD_MS = 700
const VERTICAL_TOLERANCE = 25
const SILENT_AFTER_MS = 1200

const PROBLEM: Record<Exclude<MotionStatus, 'granted'> | 'silent', string> = {
  denied:
    "Motion access is off for this site. Your browser remembers when you tap Don't Allow, so close it completely, open the game again, and tap Allow.",
  blocked:
    'Motion sensors are blocked for this site. Turn them on in site settings (tap the icon next to the address), then try again.',
  insecure: 'Tilt only works on the secure https:// version of this page.',
  unsupported: "This browser doesn't support tilt. Chrome or Safari usually does.",
  silent: "This phone or browser isn't sending tilt data. Chrome or Safari usually works.",
}

// Brave blocks motion sensors by default and never prompts.
const BRAVE_BLOCKED =
  'Brave blocks motion sensors by default. Open Settings, then Site settings, then Motion sensors, allow them, and try again.'

/** "Place on forehead" prompt followed by a 3-2-1 countdown. */
export default function Ready({ deck, motion: initialMotion, onCancel, onGo }: Props) {
  const [motion, setMotion] = useState(initialMotion)
  const [count, setCount] = useState<number | null>(null)
  // Bumped by "Try tilt again" so the no-data timer starts over.
  const [attempt, setAttempt] = useState(0)
  const [silentAttempt, setSilentAttempt] = useState(-1)
  const verticalSince = useRef<number | null>(null)
  const onGoRef = useRef(onGo)
  useEffect(() => {
    onGoRef.current = onGo
  })

  useWakeLock(true)

  const begin = () => setCount((c) => c ?? 3)

  const { sensorSeen } = useTilt({
    enabled: motion === 'granted' && count === null,
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
    if (motion !== 'granted' || sensorSeen) return
    const t = setTimeout(() => setSilentAttempt(attempt), SILENT_AFTER_MS)
    return () => clearTimeout(t)
  }, [motion, sensorSeen, attempt])

  const silent = !sensorSeen && silentAttempt === attempt
  const problem = motion !== 'granted' ? motion : silent ? 'silent' : null
  const tiltMode = problem === null
  const tiltRef = useRef(tiltMode)
  useEffect(() => {
    tiltRef.current = tiltMode
  })

  useEffect(() => {
    if (count === null) return
    if (count === 0) {
      play('go')
      onGoRef.current(tiltRef.current)
      return
    }
    play('tick')
    const t = setTimeout(() => setCount(count - 1), 1000)
    return () => clearTimeout(t)
  }, [count])

  const retry = async () => {
    const next = await requestMotionPermission()
    setAttempt((n) => n + 1)
    setMotion(next)
  }

  return (
    <main className="stage" style={{ '--deck': deck.color } as CSSProperties} onClick={begin}>
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
        <div className="index-card stage-card ready-card">
          <h1 className="card-title">{tiltMode ? 'Place on forehead' : 'Tap to start'}</h1>
          {tiltMode ? (
            <p>Screen facing out. Hold still to start, or tap.</p>
          ) : (
            <>
              <p>
                {problem === 'blocked' && 'brave' in navigator ? BRAVE_BLOCKED : PROBLEM[problem]}
              </p>
              <p>
                Until then, tap the right side when you get it and the left side to pass.
                <span className="keys"> On a keyboard, use ↓ and ↑.</span>
              </p>
              <div className="card-actions" onClick={(e) => e.stopPropagation()}>
                {problem === 'insecure' ? (
                  <a className="btn btn-small" href={location.href.replace(/^http:/, 'https:')}>
                    Open secure version
                  </a>
                ) : problem !== 'unsupported' ? (
                  <button className="btn btn-small" onClick={retry}>
                    Try tilt again
                  </button>
                ) : null}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="index-card stage-card">
          <span className="countdown" key={count}>
            {count}
          </span>
        </div>
      )}
      <p className="portrait-hint">↻ Turn your phone sideways</p>
    </main>
  )
}
