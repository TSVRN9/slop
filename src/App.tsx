import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
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

  // The deck list comes back where you left it; every other screen starts at the top.
  // Layout effect, so it lands before a view transition's snapshot.
  const homeScroll = useRef(0)
  const leaveHome = (next: () => void) => {
    homeScroll.current = window.scrollY
    next()
  }
  useLayoutEffect(() => {
    window.scrollTo(0, screen.name === 'home' ? homeScroll.current : 0)
  }, [screen])

  const goHome = useCallback(() => {
    void exitGameMode()
    withTransition(() => setScreen({ name: 'home' }))
  }, [])

  /** What each screen's back or close button does. Android's back gesture does the same. */
  const back = () => {
    switch (screen.name) {
      case 'home':
        return
      case 'setup':
        return goHome()
      case 'edit':
        return setScreen(screen.deck ? { name: 'setup', deck: screen.deck } : { name: 'home' })
      case 'ready':
      case 'play':
        void exitGameMode()
        return setScreen({ name: 'setup', deck: screen.deck })
      case 'results':
        return setScreen({ name: 'setup', deck: screen.deck })
    }
  }
  const backRef = useRef(back)
  useEffect(() => {
    backRef.current = back
  })

  // Off the home screen, keep exactly one history entry for the system back gesture to pop.
  // Popping it runs back(); on the home screen there's none, so back leaves the app.
  const trapped = useRef(false)
  const skipPop = useRef(false)
  useEffect(() => {
    const atHome = screen.name === 'home'
    if (!atHome && !trapped.current) {
      history.pushState(null, '')
      trapped.current = true
    } else if (atHome && trapped.current) {
      // Reached home through the UI: drop the leftover entry without acting on it.
      trapped.current = false
      skipPop.current = true
      history.back()
    }
  }, [screen])
  useEffect(() => {
    history.scrollRestoration = 'manual'
    const onPop = () => {
      if (skipPop.current) {
        skipPop.current = false
        return
      }
      trapped.current = false
      backRef.current()
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
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
          onPick={(deck) => leaveHome(() => withTransition(() => setScreen({ name: 'setup', deck })))}
          onCreate={() => leaveHome(() => setScreen({ name: 'edit', deck: null }))}
        />
      )
    case 'edit':
      return (
        <DeckEditor
          deck={screen.deck}
          onCancel={back}
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
          onBack={back}
          onEdit={() => setScreen({ name: 'edit', deck: screen.deck })}
          onStart={(motion) => setScreen({ name: 'ready', deck: screen.deck, motion })}
        />
      )
    case 'ready':
      return (
        <Ready
          deck={screen.deck}
          motion={screen.motion}
          onCancel={back}
          onGo={(tiltAvailable) => setScreen({ name: 'play', deck: screen.deck, tiltAvailable })}
        />
      )
    case 'play':
      return (
        <Play
          deck={screen.deck}
          duration={settings.duration}
          tiltAvailable={screen.tiltAvailable}
          onQuit={back}
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
