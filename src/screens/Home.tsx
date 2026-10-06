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
        <h1 className="logo">Heads Up!</h1>
        <p className="soft">Hold the phone to your forehead and guess the word from your friends' clues.</p>
      </header>

      <section className="deck-grid" aria-label="Decks">
        {decks.map((deck) => (
          <button
            key={deck.id}
            className="index-card deck-card"
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
        <button className="deck-new" onClick={onCreate}>
          <span aria-hidden>+</span> New deck
        </button>
      </section>

      <section className="how">
        <h2>How to play</h2>
        <ol>
          <li>Pick a deck. Hold the phone sideways on your forehead, screen facing out.</li>
          <li>Your friends shout clues, act, or sing until you guess the word.</li>
          <li>
            <strong className="c-correct">Tilt down</strong> when you get it,{' '}
            <strong className="c-pass">tilt up</strong> to pass.
          </li>
        </ol>
      </section>
    </main>
  )
}
