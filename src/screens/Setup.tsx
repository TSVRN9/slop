import { useState, type CSSProperties } from 'react'
import type { Deck } from '../data/decks'
import { enterGameMode, requestMotionPermission, type MotionStatus } from '../lib/device'
import { unlockAudio } from '../lib/sound'
import type { Settings } from '../lib/storage'
import { clock } from '../lib/clock'

const DURATIONS = [30, 60, 90, 120]

interface Props {
  deck: Deck
  settings: Settings
  onSettings: (s: Settings) => void
  onBack: () => void
  onEdit: () => void
  onStart: (motion: MotionStatus) => void
}

export default function Setup({ deck, settings, onSettings, onBack, onEdit, onStart }: Props) {
  const [starting, setStarting] = useState(false)

  const start = async () => {
    if (starting) return
    setStarting(true)
    // All of this needs to run inside the tap gesture.
    unlockAudio()
    const motion = await requestMotionPermission()
    void enterGameMode()
    setStarting(false)
    onStart(motion)
  }

  return (
    <main className="page setup" style={{ '--deck': deck.color } as CSSProperties}>
      <nav className="topbar">
        <button className="icon-btn" onClick={onBack} aria-label="Back to decks">
          ←
        </button>
        {deck.custom && (
          <button className="text-btn" onClick={onEdit}>
            Edit deck
          </button>
        )}
      </nav>

      <div className="index-card deck-card deck-hero" style={{ viewTransitionName: `deck-${deck.id}` }}>
        <span className="deck-emoji" aria-hidden>
          {deck.emoji}
        </span>
        <h1 className="deck-name">{deck.name}</h1>
        <p>{deck.description}</p>
        <p className="deck-count">{deck.cards.length} cards</p>
      </div>

      <fieldset className="chips">
        <legend>Round length</legend>
        {DURATIONS.map((d) => (
          <label key={d} className={`chip ${settings.duration === d ? 'on' : ''}`}>
            <input
              type="radio"
              name="duration"
              value={d}
              checked={settings.duration === d}
              onChange={() => onSettings({ ...settings, duration: d })}
            />
            {clock(d)}
          </label>
        ))}
      </fieldset>

      <label className="toggle">
        <input
          type="checkbox"
          checked={settings.sound}
          onChange={(e) => onSettings({ ...settings, sound: e.target.checked })}
        />
        <span>Sound effects</span>
      </label>

      <button className="btn btn-play" onClick={start} disabled={starting}>
        Play
      </button>
      <p className="soft small">Turn off rotation lock before you start.</p>
    </main>
  )
}
