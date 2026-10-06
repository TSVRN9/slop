// Offline support. Install caches the page and every asset it links to; after
// that everything is served from cache and refreshed in the background, so a
// new deploy shows up on the next launch.
// ponytail: one cache that only grows; old hashed assets stay until CACHE changes.
const CACHE = 'heads-up-v1'
const PAGE = self.registration.scope

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      const res = await fetch(PAGE, { cache: 'no-cache' })
      const html = await res.clone().text()
      await cache.put(PAGE, res)
      const assets = [...html.matchAll(/(?:src|href)="(\.\/[^"]+)"/g)].map((m) => m[1])
      await cache.addAll(assets)
    })(),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith('http')) return
  // Every navigation is the one-page app, whatever the query string.
  const key = request.mode === 'navigate' ? PAGE : request
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const cached = await cache.match(key)
      const network = fetch(request).then((res) => {
        if (res.ok) void cache.put(key, res.clone())
        return res
      })
      if (!cached) return network
      event.waitUntil(network.catch(() => {}))
      return cached
    })(),
  )
})
