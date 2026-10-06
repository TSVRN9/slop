import { useEffect, useRef, useState } from 'react'
import { TiltDetector, pitchFromGravityZ, pitchFromOrientation, type TiltAction } from '../lib/tilt'

interface Options {
  enabled: boolean
  onAction?: (action: TiltAction) => void
  /** Called with the raw pitch (degrees) for every sensor sample. */
  onPitch?: (pitch: number) => void
}

/**
 * Subscribes to deviceorientation and turns tilts into correct/pass actions.
 * Falls back to the accelerometer (devicemotion) on phones whose orientation
 * events carry no data. Returns whether a working sensor has been seen.
 */
export function useTilt({ enabled, onAction, onPitch }: Options) {
  const [sensorSeen, setSensorSeen] = useState(false)
  const actionRef = useRef(onAction)
  const pitchRef = useRef(onPitch)
  useEffect(() => {
    actionRef.current = onAction
    pitchRef.current = onPitch
  })

  useEffect(() => {
    if (!enabled) return
    const detector = new TiltDetector()
    let seen = false
    let hasOrientation = false
    const feed = (pitch: number) => {
      if (!seen) {
        seen = true
        setSensorSeen(true)
      }
      pitchRef.current?.(pitch)
      const action = detector.update(pitch, performance.now())
      if (action) actionRef.current?.(action)
    }
    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return
      hasOrientation = true
      feed(pitchFromOrientation(e.beta, e.gamma))
    }
    const onMotion = (e: DeviceMotionEvent) => {
      const z = e.accelerationIncludingGravity?.z
      if (hasOrientation || z == null) return
      feed(pitchFromGravityZ(z))
    }
    window.addEventListener('deviceorientation', onOrientation)
    // Only for Android: WebKit reports gravity with the opposite sign, and iPhones
    // always have a gyroscope anyway.
    const useMotion = /Android/i.test(navigator.userAgent)
    if (useMotion) window.addEventListener('devicemotion', onMotion)
    return () => {
      window.removeEventListener('deviceorientation', onOrientation)
      if (useMotion) window.removeEventListener('devicemotion', onMotion)
    }
  }, [enabled])

  return { sensorSeen }
}
