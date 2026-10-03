import type { CSSProperties } from 'react'
import type { Deck } from '../data/decks'
import type { RoundEntry } from '../types'

interface Props {
  deck: Deck
  entries: RoundEntry[]
  onAgain: () => void
  onHome: () => void
}

export default function Results({ deck, entries, onAgain, onHome }: Props) {
  const score = entries.filter((e) => e.result === 'correct').length
  return (
    <main className="page results" style={{ '--deck': deck.color } as CSSProperties}>
      <div className="results-head">
        <p className="muted">
          {deck.emoji} {deck.name}
        </p>
        <h1>
          You got <span className="results-score">{score}</span>
        </h1>
        <p className="muted">
          {entries.length - score} passed · {entries.length} seen
        </p>
      </div>

      {entries.length > 0 ? (
        <ul className="results-list">
          {entries.map((e, i) => (
            <li key={i} className={e.result}>
              <span aria-hidden>{e.result === 'correct' ? '✓' : '✗'}</span>
              <span className="w">{e.word}</span>
              <span className="sr-only">{e.result === 'correct' ? 'correct' : 'passed'}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted center">No cards played this round.</p>
      )}

      <div className="actions">
        <button className="big-btn" onClick={onAgain}>
          Play again
        </button>
        <button className="ghost-btn" onClick={onHome}>
          All decks
        </button>
      </div>
    </main>
  )
}
