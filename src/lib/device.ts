export type MotionStatus = 'granted' | 'denied' | 'blocked' | 'insecure' | 'unsupported'

type PermissionedOrientationEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<'granted' | 'denied'>
}

/**
 * Must be called from a tap: iOS only shows its prompt inside a user gesture,
 * so requestPermission() is the first thing here that can suspend.
 * Chrome also has requestPermission(), but it just reports the "Motion
 * sensors" site setting, which the permissions query below can tell apart.
 */
export async function requestMotionPermission(): Promise<MotionStatus> {
  if (typeof window === 'undefined' || !('DeviceOrientationEvent' in window)) return 'unsupported'
  if (!window.isSecureContext) return 'insecure'
  const DOE = window.DeviceOrientationEvent as PermissionedOrientationEvent
  let prompted: MotionStatus | null = null
  if (typeof DOE.requestPermission === 'function') {
    try {
      prompted = (await DOE.requestPermission()) === 'granted' ? 'granted' : 'denied'
    } catch {
      prompted = 'denied'
    }
    if (prompted === 'granted') return prompted
  }
  // Only Chromium knows these names; Safari and Firefox throw.
  for (const name of ['accelerometer', 'gyroscope']) {
    try {
      const status = await navigator.permissions.query({ name: name as PermissionName })
      if (status.state === 'denied') return 'blocked'
    } catch {
      // unknown permission name
    }
  }
  return prompted ?? 'granted'
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
