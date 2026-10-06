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
  const passed = entries.length - score
  return (
    <main className="page results" style={{ '--deck': deck.color } as CSSProperties}>
      <header className="results-head">
        <h1 className="results-score">{score} right</h1>
        <p className="soft">{passed} passed</p>
      </header>

      <div className="index-card results-card">
        <h2 className="card-head">
          <span aria-hidden>{deck.emoji}</span> {deck.name}
        </h2>
        {entries.length > 0 ? (
          <ul className="results-list">
            {entries.map((e, i) => (
              <li key={i} className={e.result}>
                <span className="mark" aria-hidden>
                  {e.result === 'correct' ? '✓' : '✗'}
                </span>
                <span className="w">{e.word}</span>
                <span className="sr-only">{e.result === 'correct' ? 'correct' : 'passed'}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="results-empty">No cards played this round.</p>
        )}
      </div>

      <div className="actions">
        <button className="btn btn-play" onClick={onAgain}>
          Play again
        </button>
        <button className="btn btn-ghost" onClick={onHome}>
          All decks
        </button>
      </div>
    </main>
  )
}
