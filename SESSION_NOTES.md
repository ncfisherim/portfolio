# Session notes

A running log of work on the portfolio. Newest session first.
For the rules Claude Code follows in this project, see `CLAUDE.md`.

---

## Session 1 — Nov 18–19, 2026

**Live site:** https://www.nathanfisher.space · **Repo:** https://github.com/ncfisherim/portfolio (public)
**Result:** went from an empty folder to a launched, custom-designed portfolio in one session — 28 commits, Lighthouse 100/100/100/100 on desktop and mobile.

### What we built, in order

1. **Foundation (Phase 0).** Astro + Tailwind project, git, public GitHub repo, Vercel auto-deploys on every push to `main`.
2. **v1 from the résumé.** Content pulled from the résumé PDF into `src/data/site.ts`. Phone number kept off the site and the PDF kept out of git.
3. **Custom domain.** Bought `nathanfisher.space` through Vercel; `nathanfisher.space` redirects to `www`.
4. **Polish (Phase 4).** Sitemap, robots.txt, canonical URL, structured data (Person), social preview image, favicon, 404 page, skip link, keyboard focus styles, self-hosted fonts, inlined CSS.
5. **Redesign v2 — "n = 1".** v1 looked like a template ("beginner told AI to make a website"). Researched what makes portfolios read as AI-made and redesigned around Nathan's own story: lab-grey palette, one kite-orange accent, Funnel Display/Sans + IBM Plex Mono, and an interactive reaction-time study in the hero.
6. **v3 — the name is the hero.** Removed the study (felt gimmicky) and the intro paragraph. The hero became just the name, with:
   - **Wind:** gusts ripple through the letters as waves of font weight; the cursor (and a finger on phones, even while scrolling) acts as wind.
   - **Particles:** faint wind streaks drift behind the name; gusts stretch them.
   - **Bursts:** click or tap the hero for a particle burst.
   - **Scroll morph:** the name shrinks and docks into the header as you scroll.
   - **Scroll cue:** a drifting `+` at the bottom.
7. **Content structure.** Research Experience (first) and Work Experience as expandable entries (`+` → `×`), with company names as headlines.
8. **Skills that point to their proof.** Hover a skill to highlight the entries where it was used; click/tap to jump there, open them, and highlight the exact supporting phrases.
9. **Media and links.** Black-and-white kitesurfing photo, Blender screenshot, "Read the paper" link at the top of the research entry, phone-free résumé PDF, LinkedIn.
10. **Details.** Orange section headings, "wind-blown N" favicon, orange arrow + hand cursors, 404 page "This page blew away."

### Decisions worth remembering
- **Privacy:** the phone number never appears on the site or in git. PDFs are gitignored except `public/nathan-fisher-resume.pdf`. Photo originals live in `_originals/`, which is gitignored, and photos have their metadata stripped before they're committed.
- **Copyright:** the two research images (the race-lightness illusion and a face-stimulus grid) were **held back**. They appear to be published figures showing real people from face databases. `src/assets/photos/research/` is gitignored until they're replaced with my own screenshots.
- **One accent color.** Orange marks structure and interaction (headings, `×`, highlights, cursor), never content.
- **Motion respects "reduce motion"** and pauses off-screen to save battery.

### How to change things (cheat sheet)
| To change… | Edit |
|---|---|
| Any text: entries, bullets, skills, links | `src/data/site.ts` |
| Which phrases a skill highlights | `evidence` on that skill in `site.ts` (must match the entry text word-for-word) |
| Colors and fonts | `@theme` at the top of `src/styles/global.css` |
| Hero motion (gust strength/frequency, particle count, bursts) | `src/components/Hero.astro` |
| Add a photo | Drop it in `src/assets/photos/<entry-id>/`, then ask Claude to clean it and add it |
| Update the résumé | Replace `public/nathan-fisher-resume.pdf` (check that it has no phone number) |
| Social card / home-screen icon | `scripts/og-image.html`, then run `npm run og` |
| Favicon | `public/favicon.svg` |

Commands: `npm run dev` (local preview at http://localhost:4321) · `npm run build` · `git push` deploys.

### Open items / next steps
1. **Decide the target role.** The résumé reads as clinical/academic research coordinator; the site reads as a generalist. Pick a direction and tune the wording.
2. **Research visuals:** replace the held-back images with a screenshot of my own experiment (the `Implicit-Racial-Bias-Experiment` repo) or my Expo poster.
3. **jsPsychSheet** (my library on GitHub) could become its own Research entry, and the experiment repos could be linked as "Source code ↗".
4. **GitHub profile** shows the name "Charles" with an empty bio. Fix it, or confirm it's intentional.
5. **Video Game Development:** add a game title, GIF or itch.io link.
6. **Credit the photographer** of the kitesurfing shot, if known.
7. Optional: Vercel Web Analytics, Google Search Console, a case-study page for the research project, a print-styled `/resume` page.
8. `README.md` is still Astro's default. Replace it with a short project README.

### What I learned about working with Claude Code
- **`CLAUDE.md` is the project's memory.** Stack, rules and design decisions written there carry over to every future session.
- **Discuss first, then build.** The best changes came from talking through options before Claude made anything.
- **Ask it to verify, not just build.** It took screenshots at phone and desktop sizes, ran Lighthouse, and simulated clicks and taps. That's how the phone particle-clumping bug and a mid-frame layout performance bug were caught and fixed.
- **Small, specific requests** ("swap these bullets", "rename this") ship in about a minute each; bigger ideas are worth a discussion round first.
