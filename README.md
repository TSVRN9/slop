# Heads Up! (web clone)

A mobile-first, tilt-controlled guessing party game built with React + Vite. Runs entirely in the browser and deploys as a static site to GitHub Pages.

## How to play

1. Pick a deck (or make your own) and tap **Play**.
2. Hold the phone sideways on your forehead, screen facing out. The countdown starts once it's steady.
3. Friends give clues. **Tilt down** (screen toward the floor) for correct, **tilt up** (screen toward the ceiling) to pass.

No motion sensor? Tap the right half of the screen for correct and the left half to pass, or use ↓ / ↑ on a keyboard.

> iOS asks for motion access the first time you tap Play. Tilt needs HTTPS, which GitHub Pages provides.

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

## How tilt detection works

`src/lib/tilt.ts` turns `deviceorientation` β/γ into the screen's pitch from vertical (`asin(cos β · cos γ)`). This reads the same in either landscape direction and doesn't jump when the phone passes vertical. A small state machine calibrates a neutral baseline, fires at ±35°, and won't fire again until the phone is back within 15° of neutral, so holding a tilt never counts twice.
