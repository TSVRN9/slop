import type { Deck } from '../data/decks'

const KEY = 'headsup.customDecks.v1'
const SETTINGS_KEY = 'headsup.settings.v1'

export function loadCustomDecks(): Deck[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (d): d is Deck =>
        d && typeof d.id === 'string' && typeof d.name === 'string' && Array.isArray(d.cards),
    )
  } catch {
    return []
  }
}

export function saveCustomDecks(decks: Deck[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(decks))
  } catch {
    // storage unavailable (private mode etc.) — custom decks just won't persist
  }
}

export interface Settings {
  duration: number
  sound: boolean
}

export const DEFAULT_SETTINGS: Settings = { duration: 60, sound: true }

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (!raw) return DEFAULT_SETTINGS
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) }
  } catch {
    return DEFAULT_SETTINGS
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s))
  } catch {
    // ignore
  }
}
