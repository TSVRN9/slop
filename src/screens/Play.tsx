import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import type { Deck } from '../data/decks'
import { useTilt } from '../hooks/useTilt'
import { useWakeLock } from '../hooks/useWakeLock'
import { clock } from '../lib/clock'
import { shuffle } from '../lib/shuffle'
import { play } from '../lib/sound'
import type { TiltAction } from '../lib/tilt'
import type { RoundEntry } from '../types'

interface Props {
  deck: Deck
  duration: number
  tiltAvailable: boolean
  onQuit: () => void
  onFinish: (entries: RoundEntry[]) => void
}

const FLASH_MS = 650

/**
 * Type size in cqi that fits the text on the card. The longest word must fit on
 * one line (condensed caps run about 0.55em per letter across 90cqi), and the
 * whole text must fit the ruled area, roughly 90 x 35cqi.
 */
const fit = (text: string) => {
  const longest = Math.max(4, ...text.split(/\s+/).map((w) => w.length))
  return Math.min(24, 160 / longest, Math.sqrt(3000 / (0.55 * text.length)))
}
const TIMES_UP_MS = 1600

export default function Play({ deck, duration, tiltAvailable, onQuit, onFinish }: Props) {
  const cards = useMemo(() => shuffle(deck.cards), [deck])
  const [index, setIndex] = useState(0)
  const [flash, setFlash] = useState<TiltAction | null>(null)
  const [remaining, setRemaining] = useState(duration)
  const [over, setOver] = useState(false)
  const [score, setScore] = useState(0)

  const entries = useRef<RoundEntry[]>([])
  const busy = useRef(false)
  const endAt = useRef(0)
  const finishRef = useRef(onFinish)
  useEffect(() => {
    finishRef.current = onFinish
  })

  useWakeLock(true)

  const finished = useRef(false)
  const finishTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    setOver(true)
    play('end')
    finishTimer.current = setTimeout(() => finishRef.current(entries.current), TIMES_UP_MS)
  }, [])
  useEffect(() => () => clearTimeout(finishTimer.current), [])

  // Timer
  useEffect(() => {
    endAt.current = performance.now() + duration * 1000
    let lastSecond = duration
    const id = setInterval(() => {
      const left = Math.max(0, Math.ceil((endAt.current - performance.now()) / 1000))
      if (left !== lastSecond) {
        lastSecond = left
        setRemaining(left)
        if (left > 0 && left <= 5) play('tick')
      }
    }, 100)
    return () => clearInterval(id)
  }, [duration])

  useEffect(() => {
    if (remaining === 0 && !over) finish()
  }, [remaining, over, finish])

  const act = useCallback(
    (result: TiltAction) => {
      if (busy.current || over) return
      busy.current = true
      entries.current.push({ word: cards[index], result })
      if (result === 'correct') setScore((n) => n + 1)
      setFlash(result)
      play(result)
      setTimeout(() => {
        setFlash(null)
        busy.current = false
        if (index + 1 >= cards.length) finish()
        else setIndex(index + 1)
      }, FLASH_MS)
    },
    [cards, index, over, finish],
  )

  useTilt({ enabled: tiltAvailable && !over, onAction: act })

  // Keyboard fallback
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        act('correct')
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        act('pass')
      } else if (e.key === 'Escape') {
        onQuit()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [act, onQuit])

  const onTap = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    act(e.clientX - rect.left > rect.width / 2 ? 'correct' : 'pass')
  }

  let className = 'stage play'
  if (over) className += ' is-over'
  else if (flash) className += ` is-${flash}`

  const word = cards[index]
  return (
    <main
      className={className}
      style={{ '--deck': deck.color } as CSSProperties}
      onPointerDown={onTap}
    >
      <button
        className="icon-btn stage-close"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onQuit}
        aria-label="Quit round"
      >
        ✕
      </button>
      <div className={`chip-stat timer ${remaining <= 5 ? 'low' : ''}`} aria-label="Time left">
        {clock(remaining)}
      </div>
      <div className="chip-stat score" aria-label="Score">
        ✓ {score}
      </div>

      {!tiltAvailable && !over && (
        <>
          <span className="tap-zone left" aria-hidden>
            ✗
          </span>
          <span className="tap-zone right" aria-hidden>
            ✓
          </span>
        </>
      )}

      {over ? (
        <div className="index-card stage-card" key="over">
          <p className="card-word">Time's up</p>
        </div>
      ) : (
        <div className={`index-card stage-card ${flash ? `out-${flash}` : ''}`} key={index}>
          <p className="card-word" style={{ '--fit': fit(word) } as CSSProperties}>
            {word}
          </p>
        </div>
      )}
      <p className="verdict" aria-live="polite">
        {over ? '' : flash === 'correct' ? 'Got it' : flash === 'pass' ? 'Pass' : ''}
      </p>
    </main>
  )
}
