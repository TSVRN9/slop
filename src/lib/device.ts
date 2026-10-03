export type MotionPermission = 'granted' | 'denied' | 'unsupported'

type IOSOrientationEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

/**
 * iOS 13+ requires an explicit permission prompt, triggered from a user
 * gesture, before deviceorientation events are delivered. Elsewhere events
 * just flow (or never arrive on desktops without a sensor).
 */
export async function requestMotionPermission(): Promise<MotionPermission> {
  if (typeof window === 'undefined' || !('DeviceOrientationEvent' in window)) return 'unsupported'
  const DOE = window.DeviceOrientationEvent as IOSOrientationEvent
  if (typeof DOE.requestPermission !== 'function') return 'granted'
  try {
    return (await DOE.requestPermission()) === 'granted' ? 'granted' : 'denied'
  } catch {
    return 'denied'
  }
}

/** Best effort: fullscreen + landscape lock. Silently ignored where unsupported (iOS). */
export async function enterGameMode(): Promise<void> {
  try {
    const el = document.documentElement
    if (!document.fullscreenElement && el.requestFullscreen) {
      await el.requestFullscreen({ navigationUI: 'hide' })
    }
  } catch {
    // ignore
  }
  try {
    const orientation = screen.orientation as ScreenOrientation & {
      lock?: (o: string) => Promise<void>
    }
    await orientation.lock?.('landscape')
  } catch {
    // ignore
  }
}

export async function exitGameMode(): Promise<void> {
  try {
    screen.orientation?.unlock?.()
  } catch {
    // ignore
  }
  try {
    if (document.fullscreenElement) await document.exitFullscreen()
  } catch {
    // ignore
  }
}
