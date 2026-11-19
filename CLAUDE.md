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
- Privacy: never publish the phone number; resume PDFs are gitignored
- Commit after each working step with a clear message

## Phases
- [x] Phase 0 — Foundation: scaffold, git, GitHub repo, Vercel deploy of a placeholder
- [x] Phase 1 — Content & structure: content pulled from resume into `src/data/site.ts`
- [x] Phase 2 — Design (v2, "n = 1"): site as a small experiment — see Design below
- [x] Phase 3 — Build: single-page minimalist v1 (hero, about, work, experience, writing, toolkit, contact)
- [x] Phase 4 — Polish: sitemap, robots, canonical, OG image, JSON-LD, a11y, self-hosted fonts — Lighthouse 100/100/100/100
- [~] Phase 5 — Launch: domain live; analytics + final review pending

## Design ("n = 1", v2)
Concept: the site is a small study the visitor takes part in — drawn from Nathan's experiment-programming work (jsPsych, IAT, perception research).
- Signature: `src/components/ReactionTask.astro` — real 5-trial simple-RT task (random 0.9–2.5s foreperiod, false-start detection, event.timeStamp vs rAF onset). Optional; never gates content.
- Palette: lab-grey paper `#ecebe7`, experiment mid-grey stage `#808080`, one "kite orange" (`--color-kite` for graphics, `--color-kite-ink` for text). Auto light/dark.
- Type: Funnel Display (lede, summaries) + Funnel Sans (UI/body) + IBM Plex Mono only for real data (ms, years, stats). No decorative uppercase mono labels.
- Motif: the fixation cross `+` — logo, favicon, and the Index expand control (+ → ×).
- Structure: conversational lede whose links open Index entries → expandable Index (`<details>`) → Methods sentence → Contact (with copy button).
- Avoid template tropes: giant name hero, numbered section labels, tag pills, cards/bento, gradient, dark-only.
