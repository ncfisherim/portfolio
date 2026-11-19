# ProjectAlpha — Portfolio Website

Personal portfolio site. Two goals: (1) ship a real, deeply customizable portfolio fast,
(2) use it as an exercise in finishing a project end-to-end with Claude Code.

@AGENTS.md

## Stack
- Astro (static output) + Tailwind CSS v4 (`src/styles/global.css`, imported in `src/layouts/Layout.astro`)
- Hosting: Vercel, auto-deploys from GitHub `main` (Vercel CLI not installed; not needed)
- Windows machine; Node 26, npm

## Commands
- `npm run dev` — local dev server (http://localhost:4321)
- `npm run build` — production build to `dist/`; run before every commit

## Conventions
- Every page uses `src/layouts/Layout.astro`
- Content (projects, bio, links) lives in data/content files, not hardcoded in markup, so it's editable without touching components
- Keep it hand-owned code: no page builders or heavy themes
- Commit after each working step with a clear message

## Phases
- [x] Phase 0 — Foundation: scaffold, git, GitHub repo, Vercel deploy of a placeholder
- [ ] Phase 1 — Content & structure: gather bio/projects/links, define sections and pages
- [ ] Phase 2 — Design: visual direction, typography, color, layout, dark mode
- [ ] Phase 3 — Build: implement pages/components with real content
- [ ] Phase 4 — Polish: responsive, accessibility, SEO/meta/OG images, performance
- [ ] Phase 5 — Launch: custom domain, analytics, final review
