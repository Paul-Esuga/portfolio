# Paul Esuga: portfolio

Personal portfolio for Paul Esuga (24120112061), a Software Engineering student at Pan-Atlantic University, Lagos. It shows four projects with a dedicated case-study page for each, plus experience, education and an archive of the films, shows and music that shape his taste.

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

## Deploy (Netlify)

Import the repo at netlify.com. `netlify.toml` sets the build command (`npm run build`), the publish directory (`dist`) and a fallback to `index.html`, so links like `/work/probabli` work on refresh. If you rename the site or add a custom domain, update the two addresses in `index.html` so share previews work.

## Notes

- Client work is described without client names, reports or contract details.
- Stills and artwork belong to their respective owners and appear as personal references.
- Fonts: Fraunces (display, standing in for Recoleta) and Instrument Sans, loaded from Google Fonts.
