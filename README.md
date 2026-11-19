# nathanfisher.space

Personal portfolio of Nathan Fisher: researcher, self-taught programmer, game developer.

**Live:** https://www.nathanfisher.space

Built with [Astro](https://astro.build) and Tailwind CSS v4, deployed on Vercel. Hand-written, no themes or page builders.

## Run it locally

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # production build to dist/
npm run og      # regenerate the social preview image + home-screen icon
```

## Where things live

| What | Where |
|---|---|
| All text: entries, skills, links | `src/data/site.ts` |
| Colors and fonts | `@theme` in `src/styles/global.css` |
| Hero (wind, particles, scroll morph) | `src/components/Hero.astro` |
| Research / Work lists | `src/components/Index.astro` |
| Skills → proof links | `src/components/Skills.astro` |
| Photos | `src/assets/photos/<entry-id>/` |

Pushing to `main` deploys automatically.

Built with Claude Code. See `CLAUDE.md` for project conventions and `SESSION_NOTES.md` for the work log.
