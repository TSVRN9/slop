import { useEffect, useRef, useState } from 'react'
import { TiltDetector, pitchFromOrientation, type TiltAction } from '../lib/tilt'

interface Options {
  enabled: boolean
  onAction?: (action: TiltAction) => void
  /** Called with the raw pitch (degrees) for every sensor sample. */
  onPitch?: (pitch: number) => void
}

/**
 * Subscribes to deviceorientation and turns tilts into correct/pass actions.
 * Returns whether a working orientation sensor has been seen.
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
    const handler = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return
      if (!seen) {
        seen = true
        setSensorSeen(true)
      }
      const pitch = pitchFromOrientation(e.beta, e.gamma)
      pitchRef.current?.(pitch)
      const action = detector.update(pitch, performance.now())
      if (action) actionRef.current?.(action)
    }
    window.addEventListener('deviceorientation', handler)
    return () => window.removeEventListener('deviceorientation', handler)
  }, [enabled])

  return { sensorSeen }
}
