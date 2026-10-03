import { useState, type CSSProperties } from 'react'
import type { Deck } from '../data/decks'
import { enterGameMode, requestMotionPermission } from '../lib/device'
import { unlockAudio } from '../lib/sound'
import type { Settings } from '../lib/storage'

const DURATIONS = [30, 60, 90, 120]

interface Props {
  deck: Deck
  settings: Settings
  onSettings: (s: Settings) => void
  onBack: () => void
  onEdit: () => void
  onStart: (tiltAvailable: boolean) => void
}

export default function Setup({ deck, settings, onSettings, onBack, onEdit, onStart }: Props) {
  const [starting, setStarting] = useState(false)

  const start = async () => {
    if (starting) return
    setStarting(true)
    // All of this needs to run inside the tap gesture.
    unlockAudio()
    const permission = await requestMotionPermission()
    void enterGameMode()
    setStarting(false)
    onStart(permission === 'granted')
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

      <div className="setup-hero">
        <span className="setup-emoji" aria-hidden>
          {deck.emoji}
        </span>
        <h1>{deck.name}</h1>
        <p>{deck.description}</p>
        <p className="muted">{deck.cards.length} cards</p>
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
            {d}s
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

      <button className="big-btn" onClick={start} disabled={starting}>
        Play
      </button>
      <p className="muted small">
        Tip: rotate your phone sideways and turn off rotation lock for the best view.
      </p>
    </main>
  )
}
