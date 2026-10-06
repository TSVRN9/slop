import { describe, expect, it } from 'vitest'
import { BUILT_IN_DECKS } from './decks'

describe('built-in decks', () => {
  it('have unique ids', () => {
    const ids = BUILT_IN_DECKS.map((d) => d.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(BUILT_IN_DECKS.map((d) => [d.id, d] as const))('%s has clean, unique cards', (_, deck) => {
    const seen = new Set<string>()
    for (const card of deck.cards) {
      expect(card.length, card).toBeLessThanOrEqual(45)
      expect(card, card).not.toMatch(/[—–“”‘’]/)
      const key = card.toLowerCase()
      expect(seen.has(key), `duplicate: ${card}`).toBe(false)
      seen.add(key)
    }
  })
})
