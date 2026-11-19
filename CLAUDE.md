# ProjectAlpha — Portfolio Website

Personal portfolio site. Two goals: (1) ship a real, deeply customizable portfolio fast,
(2) use it as an exercise in finishing a project end-to-end with Claude Code.

@AGENTS.md

## Stack
- Astro (static output) + Tailwind CSS v4 (`src/styles/global.css`, imported in `src/layouts/Layout.astro`)
- Hosting: Vercel, auto-deploys from GitHub `main` (Vercel CLI not installed; not needed)
- Domain: https://www.nathanfisher.space (bought via Vercel, Vercel DNS; apex redirects to www)
- Windows machine; Node 26, npm

## Commands
- `npm run dev` — local dev server (http://localhost:4321)
- `npm run build` — production build to `dist/`; run before every commit
- `npm run og` — regenerate `public/og.png` + `public/apple-touch-icon.png` from `scripts/og-image.html` (headless Edge)

## Conventions
- Every page uses `src/layouts/Layout.astro`
- Content (projects, bio, links) lives in data/content files, not hardcoded in markup, so it's editable without touching components
- Keep it hand-owned code: no page builders or heavy themes
- Design tokens (fonts, colors, light/dark) live in `@theme` in `src/styles/global.css`
- Privacy: never publish the phone number.
- Photos: `src/assets/photos/<entry-id>/`, referenced from `media` in site.ts, rendered with astro:assets <Image> (lazy, responsive WebP). Before committing a photo: view it, strip EXIF/GPS and resize with sharp (originals go to gitignored `_originals/`). Never publish third-party figures or face-database images — `src/assets/photos/research/` is gitignored for that reason until replaced with Nathan's own screenshots. PDFs are gitignored except `public/nathan-fisher-resume.pdf` (phone-free copy, linked from nav + Contact) — check any replacement PDF for a phone number before committing
- Commit after each working step with a clear message

## Phases
- [x] Phase 0 — Foundation: scaffold, git, GitHub repo, Vercel deploy of a placeholder
- [x] Phase 1 — Content & structure: content pulled from resume into `src/data/site.ts`
- [x] Phase 2 — Design (v2, "n = 1"): site as a small experiment — see Design below
- [x] Phase 3 — Build: single-page minimalist v1 (hero, about, work, experience, writing, toolkit, contact)
- [x] Phase 4 — Polish: sitemap, robots, canonical, OG image, JSON-LD, a11y, self-hosted fonts — Lighthouse 100/100/100/100
- [~] Phase 5 — Launch: domain live; analytics + final review pending

## Design (v3)
Lab-grey + kite-orange minimalism; the name is the hero. History: v2 had a reaction-time "study" and an intro paragraph — both removed by Nathan as too gimmicky / wordy. Don't reintroduce them.
- Hero (`src/components/Hero.astro`): just the name, centered in the first screen.
  - Wind: gusts sweep left→right as waves of font weight (Funnel Display wght 300–800, base 340). Cursor acts as wind; on phones a finger does too, including while scrolling (uses touchstart/touchmove, since pointer events get cancelled once a scroll starts). Pointer effect stays live while p < 0.7. Fast scroll kicks up a gust. Paused off-screen / hidden tab.
  - Particles: canvas of faint wind streaks (a few kite-orange) drifting left→right behind the name at a steady per-streak speed; they wrap from the right edge back to the left. Gusts are shared with the letters but only STRETCH streaks (+ small forward surge) — never change their drift speed, which made them clump on phones. Pointer scatters them. Fade out as the name docks.
  - Bursts: click (desktop) or tap (phone; detected from touchstart/touchend with <12px movement and <350ms, so scrolls never fire one) anywhere in the hero → a ring of sparks + shockwave on nearby streaks + weight pulse on nearby letters. Links/buttons (scroll cue) excluded. Site-wide cursors (global.css): solid kite-orange rounded arrow, and a matching orange pointing hand on links/buttons/summary/skills/cue.
  - Morph: on scroll the name scales linearly into the fixed header slot `[data-header-name]` and cross-fades into it at the end (pixel-aligned).
  - `prefers-reduced-motion`: no wind, no particles, no scaling (cross-fade only).
  - Performance rule: in the frame loop and scroll handler, do ALL layout reads (scrollY, getBoundingClientRect, offsetLeft) first, then style writes. Reading after writing forced ~1s of reflow before this was fixed.
  - Docking reads the name's live left edge (it is centered and its width changes with weight) — keep that, or docking drifts.
  - Scroll cue: just "see my work" (lowercase, muted, no +) gently bobbing up and down at the bottom of the hero, links to #research, fades out on scroll. Bob is off under reduced motion.
- Palette: lab-grey paper `#ecebe7`, one "kite orange" (`--color-kite` graphics, `--color-kite-ink` text). Auto light/dark.
- Section headings (Research Experience, Work Experience, Skills, Contact) are kite-ink with a 2px kite rule — 2px, not 1px: a 1px rule on a half-pixel blurs to grey on standard-DPI screens. Entry titles stay ink.
- Type: Funnel Display (name, summaries) + Funnel Sans (UI/body) + IBM Plex Mono only for real data (years, stats). No decorative uppercase mono labels.
- Motif: the `+` — Index expand control (+ → ×), accent on the home-screen icon.
- Favicon (`public/favicon.svg`): custom "wind-blown N" path (thin left stem → heavy right stem), on a 4-unit grid for crisp 16px; ink on light tabs, paper on dark tabs via an in-SVG media query. Home-screen icon = same N on lab grey + orange + (`scripts/og-image.html`, `npm run og`).
- Structure: Hero → Research Experience → Work Experience (both `Index.astro`, expandable `<details>`; entries pick a list via `section` in site.ts) → Skills (grouped; each skill links to its proof entries via `proof` ids, and a jump highlights its `evidence` phrases inside those entries — phrases must match entry text word-for-word; one gust on scroll-in) → Contact (with copy button).
- Avoid template tropes: numbered section labels, tag pills, cards/bento, gradients, dark-only.
