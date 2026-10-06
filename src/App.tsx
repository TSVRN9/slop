import { useCallback, useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { BUILT_IN_DECKS, type Deck } from './data/decks'
import { exitGameMode, type MotionStatus } from './lib/device'
import { setSoundEnabled } from './lib/sound'
import {
  loadCustomDecks,
  loadSettings,
  saveCustomDecks,
  saveSettings,
  type Settings,
} from './lib/storage'
import type { RoundEntry } from './types'
import Home from './screens/Home'
import Setup from './screens/Setup'
import Ready from './screens/Ready'
import Play from './screens/Play'
import Results from './screens/Results'
import DeckEditor from './screens/DeckEditor'

type Screen =
  | { name: 'home' }
  | { name: 'setup'; deck: Deck }
  | { name: 'edit'; deck: Deck | null }
  | { name: 'ready'; deck: Deck; motion: MotionStatus }
  | { name: 'play'; deck: Deck; tiltAvailable: boolean }
  | { name: 'results'; deck: Deck; entries: RoundEntry[] }

/** Swap screens inside a view transition where supported, so a deck card morphs between screens. */
function withTransition(update: () => void) {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    update()
    return
  }
  document.startViewTransition(() => flushSync(update))
}

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' })
  const [customDecks, setCustomDecks] = useState<Deck[]>(loadCustomDecks)
  const [settings, setSettings] = useState<Settings>(loadSettings)

  useEffect(() => {
    saveSettings(settings)
    setSoundEnabled(settings.sound)
  }, [settings])

  useEffect(() => {
    saveCustomDecks(customDecks)
  }, [customDecks])

  const goHome = useCallback(() => {
    void exitGameMode()
    withTransition(() => setScreen({ name: 'home' }))
  }, [])

  const saveDeck = (deck: Deck) => {
    setCustomDecks((ds) => {
      const i = ds.findIndex((d) => d.id === deck.id)
      return i === -1 ? [...ds, deck] : ds.map((d) => (d.id === deck.id ? deck : d))
    })
    setScreen({ name: 'setup', deck })
  }

  const deleteDeck = (id: string) => {
    setCustomDecks((ds) => ds.filter((d) => d.id !== id))
    setScreen({ name: 'home' })
  }

  switch (screen.name) {
    case 'home':
      return (
        <Home
          decks={[...BUILT_IN_DECKS, ...customDecks]}
          onPick={(deck) => withTransition(() => setScreen({ name: 'setup', deck }))}
          onCreate={() => setScreen({ name: 'edit', deck: null })}
        />
      )
    case 'edit':
      return (
        <DeckEditor
          deck={screen.deck}
          onCancel={() => setScreen(screen.deck ? { name: 'setup', deck: screen.deck } : { name: 'home' })}
          onSave={saveDeck}
          onDelete={deleteDeck}
        />
      )
    case 'setup':
      return (
        <Setup
          deck={screen.deck}
          settings={settings}
          onSettings={setSettings}
          onBack={goHome}
          onEdit={() => setScreen({ name: 'edit', deck: screen.deck })}
          onStart={(motion) => setScreen({ name: 'ready', deck: screen.deck, motion })}
        />
      )
    case 'ready':
      return (
        <Ready
          deck={screen.deck}
          motion={screen.motion}
          onCancel={() => {
            void exitGameMode()
            setScreen({ name: 'setup', deck: screen.deck })
          }}
          onGo={(tiltAvailable) => setScreen({ name: 'play', deck: screen.deck, tiltAvailable })}
        />
      )
    case 'play':
      return (
        <Play
          deck={screen.deck}
          duration={settings.duration}
          tiltAvailable={screen.tiltAvailable}
          onQuit={() => {
            void exitGameMode()
            setScreen({ name: 'setup', deck: screen.deck })
          }}
          onFinish={(entries) => {
            void exitGameMode()
            setScreen({ name: 'results', deck: screen.deck, entries })
          }}
        />
      )
    case 'results':
      return (
        <Results
          deck={screen.deck}
          entries={screen.entries}
          onAgain={() => setScreen({ name: 'setup', deck: screen.deck })}
          onHome={goHome}
        />
      )
  }
}
