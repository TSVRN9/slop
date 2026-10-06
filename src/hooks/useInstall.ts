import { useSyncExternalStore } from 'react'

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/** 'prompt': the browser can show its install dialog. 'ios': only Share → Add to Home Screen works. */
export type InstallMode = 'prompt' | 'ios' | null

// Chromium fires this once, possibly before React mounts, so catch it at module load.
let deferred: InstallPromptEvent | null = null
const listeners = new Set<() => void>()
const notify = () => listeners.forEach((l) => l())

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault() // we show our own button instead of the mini-infobar
  deferred = e as InstallPromptEvent
  notify()
})
window.addEventListener('appinstalled', () => {
  deferred = null
  notify()
})

const installed =
  matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true

const ios =
  /iPhone|iPad|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

function mode(): InstallMode {
  if (installed) return null
  if (deferred) return 'prompt'
  return ios ? 'ios' : null
}

export function useInstall() {
  const current = useSyncExternalStore((cb) => {
    listeners.add(cb)
    return () => listeners.delete(cb)
  }, mode)

  const install = async () => {
    if (!deferred) return
    await deferred.prompt()
    await deferred.userChoice
    deferred = null // a prompt event can only be used once
    notify()
  }

  return { mode: current, install }
}
