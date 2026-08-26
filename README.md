# Rahul & Kiran — Wedding Invitation

A single-page, scroll-driven wedding invitation built with React, Vite, and
GSAP. No routing, no backend — one continuous animated invitation from
temple landing to venue details.

Since no photography or illustrated artwork was supplied for this build,
every visual element (temple arch, pillars, lotus, foliage, gopuram
silhouette) is hand-drawn inline SVG themed to the palette below, rather
than placeholder stock imagery. Swap in real artwork/photography using the
guide further down whenever it's ready.

## Getting started

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── assets/         # place real photography/artwork here once supplied
├── components/
│   ├── common/      # SectionWrapper, OrnamentalFrame, motifs/ (SVG artwork)
│   ├── landing/      # Section 1 — temple + parallax + foreground trees
│   ├── invitation/   # Section 2 — invitation card + events
│   ├── couple/       # Section 3 — flying-leaf reveal + couple photo
│   └── venue/        # Section 4 — venue details + QR + maps
├── animations/      # GSAP ScrollTrigger logic, grouped per section
├── config/          # all editable content lives here
├── hooks/           # useScrollAnimation, useReducedMotion, useMediaQuery
└── styles/          # variables, typography, globals, responsive
```

## Customizing content

Everything a wedding planner would need to change lives in `src/config/` —
no animation or component code needs to change.

| What to change | File |
| --- | --- |
| Bride / groom names, parents, grandparents, invitation wording | `src/config/wedding.js` |
| Event list (Mehendi, Sangeet, Wedding, Reception, ...) | `src/config/events.js` |
| Reception venue name, address, date/time, Google Maps link | `src/config/venue.js` |
| Animation tuning constants (leaf counts, parallax strength) | `src/config/theme.js` |

The **QR code** and the **"Open in Google Maps"** button both read from
`venue.googleMapsUrl` — updating that one field repoints both.

## Replacing the couple photo

No photograph was provided, so Section 3 shows an elegant initials
placeholder (`src/components/couple/CouplePhoto.jsx`). To use a real photo:

1. Add the image to `src/assets/couple/` (e.g. `couple-photo.webp`).
2. In `CouplePhoto.jsx`, import it and pass it through, or simpler: set
   `wedding.couplePhotoSrc` in `src/config/wedding.js` to the imported path.
3. Prefer WebP/AVIF and keep the file under ~300KB — it's revealed above the
   fold of Section 3.

## Replacing temple artwork

The temple, pillars, lotus, and foliage are all SVG components in
`src/components/common/motifs/`. If real illustrated/photographed temple
layers become available:

1. Place them in `src/assets/temple/`, `src/assets/backgrounds/`, etc.
   (folders already exist under `src/assets/`).
2. Swap the relevant motif component's `<svg>` for an `<img>`/`<picture>`
   pointing at the new asset, keeping the same wrapping `<div>` so the
   parallax/animation refs still target the right element.
3. Keep layers separate (background / midground / foreground) rather than
   flattening them into one image — that's what makes the parallax and the
   foreground tree sway work.

## Changing colors & fonts

- Colors: `src/styles/variables.css` — a single set of named custom
  properties (`--teal-deep`, `--magenta-silk`, `--gold-foil`, etc.) that
  every component reads from.
- Fonts: `src/styles/typography.css` defines `--font-display` (Cinzel) and
  `--font-body` (Cormorant Garamond). The `<link>` tags loading them live in
  `index.html`.

## Accessibility & performance notes

- Respects `prefers-reduced-motion`: the flying-leaf reveal, parallax, and
  entrance animations are skipped entirely, and all content renders fully
  visible without them.
- Animations use `transform`, `opacity`, and `clip-path` only — no layout
  thrashing, and GSAP contexts are reverted on unmount to avoid duplicate
  ScrollTriggers.
- Lenis smooth scrolling is disabled on mobile and for reduced-motion users
  in favor of native scrolling.

## Deployment

`npm run build` outputs a static `dist/` folder — deploy it to any static
host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).
