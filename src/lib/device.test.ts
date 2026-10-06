import { afterEach, describe, expect, it, vi } from 'vitest'
import { requestMotionPermission } from './device'

function stub({
  secure = true,
  orientation = true,
  prompt,
  sensors = {},
}: {
  secure?: boolean
  orientation?: boolean
  prompt?: () => Promise<'granted' | 'denied'>
  sensors?: Record<string, PermissionState>
}) {
  const win: Record<string, unknown> = { isSecureContext: secure }
  if (orientation) win.DeviceOrientationEvent = Object.assign(function () {}, { requestPermission: prompt })
  vi.stubGlobal('window', win)
  vi.stubGlobal('navigator', {
    permissions: {
      query: async ({ name }: { name: string }) => {
        if (!(name in sensors)) throw new TypeError('unknown permission')
        return { state: sensors[name] }
      },
    },
  })
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('requestMotionPermission', () => {
  it('reports unsupported without the API', async () => {
    stub({ orientation: false })
    expect(await requestMotionPermission()).toBe('unsupported')
  })

  it('reports insecure over http', async () => {
    stub({ secure: false })
    expect(await requestMotionPermission()).toBe('insecure')
  })

  it('passes through the iOS prompt answer', async () => {
    stub({ prompt: async () => 'granted' })
    expect(await requestMotionPermission()).toBe('granted')
    stub({ prompt: async () => 'denied' })
    expect(await requestMotionPermission()).toBe('denied')
    stub({ prompt: () => Promise.reject(new Error('NotAllowedError')) })
    expect(await requestMotionPermission()).toBe('denied')
  })

  it('reports blocked when a sensor is denied in site settings', async () => {
    stub({ sensors: { accelerometer: 'granted', gyroscope: 'denied' } })
    expect(await requestMotionPermission()).toBe('blocked')
    // Chrome's requestPermission() answers denied for the same setting
    stub({ prompt: async () => 'denied', sensors: { accelerometer: 'denied' } })
    expect(await requestMotionPermission()).toBe('blocked')
  })

  it('grants when sensors are allowed or the browser has no such permissions', async () => {
    stub({ sensors: { accelerometer: 'granted', gyroscope: 'granted' } })
    expect(await requestMotionPermission()).toBe('granted')
    stub({})
    expect(await requestMotionPermission()).toBe('granted')
  })
})
