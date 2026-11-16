# Paul Esuga: portfolio

Personal portfolio for Paul Esuga, a Software Engineering student at Pan-Atlantic University, Lagos. It shows four projects with a dedicated case-study page for each, plus experience, education and an archive of the films, shows and music that shape his taste.

Built for a university assignment. Responsive from 320px to desktop, keyboard accessible, and it respects reduced-motion settings.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build locally
```

## Stack

Vite 6, React 19, TypeScript (strict), React Router 7. Plain CSS with custom properties. No UI or animation libraries.

## Where things live

| Path | What it holds |
|---|---|
| `src/content/` | All copy: site details, projects, experience, archive. Edit text here. |
| `src/styles/tokens.css` | Palette, type scale, spacing, grid. |
| `src/components/` | Hero, nav, sections. |
| `src/pages/` | Home, the generic project page, 404. |
| `src/assets/stills/` | Film stills, album art and project screenshots. |
| `public/` | Favicon, touch icon and share-preview image. |

`HANDOFF.md` has the design decisions, interaction notes and remaining work.

## Deploy (Vercel)

Import the repo at vercel.com. The framework preset is Vite, the build command is `npm run build` and the output directory is `dist`. `vercel.json` sends every path to `index.html`, so links like `/work/probabli` work on refresh. After the first deploy, replace `YOUR-SITE.vercel.app` in `index.html` with the real address so share previews work.

## Notes

- Client work is described without client names, reports or contract details.
- Stills and artwork belong to their respective owners and appear as personal references.
- Fonts: Fraunces (display, standing in for Recoleta) and Instrument Sans, loaded from Google Fonts.
