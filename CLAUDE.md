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
- [x] Phase 2 — Design: serif/mono minimalist, teal accent, auto light/dark
- [x] Phase 3 — Build: single-page minimalist v1 (hero, about, work, experience, writing, toolkit, contact)
- [x] Phase 4 — Polish: sitemap, robots, canonical, OG image, JSON-LD, a11y, self-hosted fonts — Lighthouse 100/100/100/100
- [~] Phase 5 — Launch: domain live; analytics + final review pending
