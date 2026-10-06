import { useState } from 'react'
import type { Deck } from '../data/decks'

interface Props {
  deck: Deck | null
  onCancel: () => void
  onSave: (deck: Deck) => void
  onDelete: (id: string) => void
}

const COLORS = ['#ec4899', '#f97316', '#14b8a6', '#6366f1', '#84cc16', '#ef4444']
const EMOJIS = ['🎉', '🧠', '🎵', '🏠', '🐾', '🍔', '🎮', '📺', '🌍', '💡']

export default function DeckEditor({ deck, onCancel, onSave, onDelete }: Props) {
  const [name, setName] = useState(deck?.name ?? '')
  const [emoji, setEmoji] = useState(deck?.emoji ?? EMOJIS[0])
  const [text, setText] = useState(deck?.cards.join('\n') ?? '')

  const cards = Array.from(
    new Set(
      text
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean),
    ),
  )
  const valid = name.trim().length > 0 && cards.length >= 2

  const save = () => {
    if (!valid) return
    onSave({
      id: deck?.id ?? `custom-${Date.now().toString(36)}`,
      name: name.trim(),
      emoji,
      color: deck?.color ?? COLORS[Math.floor(Math.random() * COLORS.length)],
      description: 'Custom deck',
      cards,
      custom: true,
    })
  }

  return (
    <main className="page editor">
      <nav className="topbar">
        <button className="icon-btn" onClick={onCancel} aria-label="Cancel">
          ←
        </button>
        <h1 className="topbar-title">{deck ? 'Edit deck' : 'New deck'}</h1>
      </nav>

      <label className="field">
        <span>Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Inside jokes"
          maxLength={40}
        />
      </label>

      <fieldset className="chips emoji-chips">
        <legend>Icon</legend>
        {EMOJIS.map((em) => (
          <label key={em} className={`chip ${emoji === em ? 'on' : ''}`}>
            <input
              type="radio"
              name="emoji"
              checked={emoji === em}
              onChange={() => setEmoji(em)}
            />
            {em}
          </label>
        ))}
      </fieldset>

      <label className="field">
        <span>Cards, one per line ({cards.length})</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          placeholder={'Grandma’s lasagna\nThe office printer\nKaraoke night'}
        />
      </label>

      <button className="btn btn-play" onClick={save} disabled={!valid}>
        Save deck
      </button>
      {!valid && <p className="soft small">Add a name and at least 2 cards.</p>}
      {deck && (
        <button
          className="btn btn-ghost danger"
          onClick={() => {
            if (confirm(`Delete “${deck.name}”?`)) onDelete(deck.id)
          }}
        >
          Delete deck
        </button>
      )}
    </main>
  )
}
