import type { CSSProperties } from 'react'
import type { Deck } from '../data/decks'

interface Props {
  decks: Deck[]
  onPick: (deck: Deck) => void
  onCreate: () => void
}

export default function Home({ decks, onPick, onCreate }: Props) {
  return (
    <main className="page home">
      <header className="home-header">
        <h1 className="logo">
          Heads<span>Up!</span>
        </h1>
        <p className="tagline">Phone on your forehead. Friends give clues. Tilt to play.</p>
      </header>

      <section className="deck-grid" aria-label="Decks">
        {decks.map((deck) => (
          <button
            key={deck.id}
            className="deck-card"
            style={{ '--deck': deck.color } as CSSProperties}
            onClick={() => onPick(deck)}
          >
            <span className="deck-emoji" aria-hidden>
              {deck.emoji}
            </span>
            <span className="deck-name">{deck.name}</span>
            <span className="deck-count">{deck.cards.length} cards</span>
          </button>
        ))}
        <button className="deck-card deck-new" onClick={onCreate}>
          <span className="deck-emoji" aria-hidden>
            ＋
          </span>
          <span className="deck-name">Make your own</span>
          <span className="deck-count">Custom deck</span>
        </button>
      </section>

      <section className="how">
        <h2>How to play</h2>
        <ol>
          <li>Pick a deck and hold the phone sideways on your forehead, screen facing out.</li>
          <li>Your friends shout clues, act, or sing to help you guess the word.</li>
          <li>
            <strong className="c-correct">Tilt down</strong> when you get it,{' '}
            <strong className="c-pass">tilt up</strong> to pass.
          </li>
        </ol>
      </section>
    </main>
  )
}
