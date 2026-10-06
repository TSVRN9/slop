# Heads Up! (web clone)

A mobile-first, tilt-controlled guessing party game built with React + Vite. Runs entirely in the browser and deploys as a static site to GitHub Pages.

## How to play

1. Pick a deck (or make your own) and tap **Play**.
2. Hold the phone sideways on your forehead, screen facing out. The countdown starts once it's steady.
3. Friends give clues. **Tilt down** (screen toward the floor) for correct, **tilt up** (screen toward the ceiling) to pass.

No motion sensor? Tap the right half of the screen for correct and the left half to pass, or use ↓ / ↑ on a keyboard.

If tilt doesn't work, the start screen says why: motion access was denied (iOS remembers "Don't Allow" until you fully close the browser), motion sensors are blocked in site settings (Android Chrome, and Brave on Android by default with no prompt), the page was opened over plain http, or the phone isn't sending tilt data.

> Tilt only works over HTTPS. On GitHub Pages with a custom domain, turn on **Settings → Pages → Enforce HTTPS**, or people who type the bare domain land on http and get no motion events.

## Development

```sh
pnpm install
pnpm dev       # local dev server
pnpm test      # unit tests (tilt detection)
pnpm lint
pnpm build     # outputs to dist/
```

To try tilt on a phone during development, run `pnpm dev --host` and open the URL over HTTPS (for example through a tunnel). iOS won't send motion events over plain HTTP.

## Deploying to GitHub Pages

`.github/workflows/pages.yml` builds and deploys on every push to `main`. Turn it on once under **Settings → Pages → Build and deployment → Source: GitHub Actions**. The build uses relative asset paths, so it works under `https://<user>.github.io/<repo>/` without extra configuration.

## Installing (PWA)

The site is an installable app. Chromium browsers (Chrome, Edge, Samsung Internet, Brave) show an **Install** button on the deck list; on iPhone the button explains Share → Add to Home Screen. `public/sw.js` caches the page and its assets on first visit, so the game works offline afterwards; it serves from cache and refreshes in the background, so a deploy shows up on the next launch.

Icons are rendered from the SVGs in `public/`:

```sh
cd public
rsvg-convert -w 192 icon.svg -o icon-192.png
rsvg-convert -w 512 icon.svg -o icon-512.png
rsvg-convert -w 512 icon-maskable.svg -o icon-maskable-512.png
rsvg-convert -w 180 icon-maskable.svg -o apple-touch-icon.png
```

## How tilt detection works

`src/lib/tilt.ts` turns `deviceorientation` β/γ into the screen's pitch from vertical (`asin(cos β · cos γ)`). This reads the same in either landscape direction and doesn't jump when the phone passes vertical. A small state machine calibrates a neutral baseline, fires at ±35°, and won't fire again until the phone is back within 15° of neutral, so holding a tilt never counts twice.

Some Android phones have no gyroscope and send orientation events with empty values. On Android the game then reads the same pitch from the accelerometer (`devicemotion`'s gravity along the screen normal). iOS reports that vector with the opposite sign, so the fallback stays off there.
