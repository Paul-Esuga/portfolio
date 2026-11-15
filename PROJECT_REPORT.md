# Project handoff report

## Stack and commands

- Vite 6.4.6, React/React DOM 19.3.1, TypeScript 5.8.3, React Router DOM 7.18.5; Node v22.20.0.
- `npm install`, `npm run dev`, `npm run build`, `npm run preview`.
- Google Fonts: Fraunces and Instrument Sans. Recoleta remains first in the display stack for future licensing. No animation or UI library.

## File tree

```text
.
├── .gitignore
├── index.html
├── package.json / package-lock.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts
├── PROJECT_REPORT.md
└── src
    ├── App.tsx, main.tsx, vite-env.d.ts
    ├── assets/stills/{bb,bj,ent,himym,tdkr}.{jpg,webp}
    ├── components/{About,Archive,Contact,CraftBand,Grain,Hero3DSplit,Nav,ProjectVisual,TextLift,WorkList}.tsx
    ├── content/{archive,projects,site}.ts
    ├── hooks/{useParallax,useReducedMotion,useReveal,useScrollProgress}.ts
    ├── pages/{Home,NotFound,ProjectPage}.tsx
    └── styles/{base,components,tokens}.css
```

| Path | Purpose; exports/props | Approx. lines |
|---|---|---:|
| `src/main.tsx`, `src/App.tsx` | BrowserRouter bootstrap; route table, scroll on route/hash changes | 8 / 3 |
| `src/pages/Home.tsx` | Composes homepage sections | 2 |
| `src/pages/ProjectPage.tsx` | Generic case study by slug, optional gallery, list parsing | 3 |
| `src/pages/NotFound.tsx` | Styled 404 | 3 |
| `src/components/Nav.tsx` | Anchor nav, active and sliding pill, keyboard focus | 6 |
| `src/components/Hero3DSplit.tsx` | Sticky hero split, scroll progress and reduced motion | 6 |
| `src/components/About.tsx`, `WorkList.tsx` | About and selected work | 5 / 8 |
| `src/components/ProjectVisual.tsx` | Four illustrative project visual types | 9 |
| `src/components/CraftBand.tsx`, `Archive.tsx`, `Contact.tsx` | Quote, archive, closing credits | 5 / 8 / 5 |
| `src/components/Grain.tsx`, `TextLift.tsx` | Decorative grain and character lift | 1 / 2 |
| `src/content/site.ts` | Site-wide copy and labels | 14 |
| `src/content/projects.ts` | Project records and `Project` type | 8 |
| `src/content/archive.ts` | Archive records and `ArchiveGroup` / `ArchiveItem` types | 9 |
| `src/hooks/*.ts` | `useScrollProgress`, `useParallax`, `useReveal`, `useReducedMotion` | 2–4 each |
| `src/styles/tokens.css`, `base.css`, `components.css` | Tokens, reset/accessibility, component and responsive rules | 1 / 1 / 12 |
| `src/assets/stills/*.webp` | Used by hero (bb), about (tdkr), craft band (bj), archive peek (bj, himym, bb), contact (ent) | — |
| `src/assets/stills/*.jpg` | Optimized JPEG counterparts; WebP versions are imported by the app | — |
| Root config files | Vite/React, TypeScript, dependencies, ignore rules | — |

Type definitions:

```ts
type Project = {
  slug: string; number: string; title: string;
  status: 'Concept · in development' | 'Professional experience' | 'Professional work' | 'Completed';
  role: string; stack: string[]; summary: string;
  visual: 'pred' | 'sec' | 'bot' | 'tab';
  sections: { heading: string; body: string[] }[];
  gallery?: { src: string; alt: string; caption: string }[];
};
type ArchiveItem = { title: string; key?: string; artist?: string };
type ArchiveGroup = { category: string; items: ArchiveItem[] };
```

Copy is in `src/content/site.ts`, `projects.ts`, and `archive.ts`. Placeholder challenge/lesson items for the chatbot and classroom project are empty and therefore omitted from their pages. LinkedIn and GitHub values are empty, so neither link renders.

## Design and behavior

- Colors: ink `#120c0a`, cream `#efe3cf`, sun `#d9692f`, brick `#6e2a1f`; dim and divider use cream at 62% and 16% opacity.
- Fonts: `"Recoleta", "Fraunces", Georgia, serif` and `"Instrument Sans", system-ui, sans-serif`. Main padding `clamp(20px, 5vw, 72px)`. Display type uses responsive clamps from 40px section titles up to 138px hero text. Breakpoints: 860px tablet and 520px mobile.
- Hero: 280vh scroll track; 3 panels with 20vw max horizontal drift, 5vh vertical offset, 160px depth and 34° rotation. Headline opacity bottoms at .55 and a lower dark scrim protects contrast. Reduced motion removes the split movement.
- Nav pill: 500ms cubic-bezier transition; follows hover/focus and active section. Home anchors scroll in place; project-page anchors return to `/#section`. Route changes without a hash go to top.
- Text lift: staggered 22ms per character, 550ms ease; hover/focus. Reveal uses IntersectionObserver at .12 threshold. Parallax amounts are .08–.1. Reduced motion disables these effects.
- Archive peek updates on hover, keyboard focus, and click/tap; Ben 10 remains without an image. Decorative layers use `aria-hidden`; meaningful stills have accessible labels.

## Assets

Stills were extracted from the supplied HTML because the expected stills folder was missing. All were resized to 1600px wide and encoded at quality 82, in both WebP and JPEG. Dimensions: bb 1600×898; bj 1600×1065; ent 1600×898; himym 1600×1196; tdkr 1600×898. The app imports the WebP files so Vite hashes them. No original still files were supplied separately.

## QA and gaps

- `npm install` completed. `npx tsc -b` and `npx vite build --configLoader runner` passed after the final TextLift change. The package scripts use Vite’s runner config loader to avoid the sandbox’s parent-directory access failure. No lint script is configured.
- Browser checks: project route `/work/pau-predictions` rendered all seven required sections; `/work/ai-chatbot` rendered its five nonempty sections. The home nav reached Work and set the pill active. At 1440, 768, and 390 widths, document width did not exceed viewport width. All five still assets were present in computed background styles. Desktop and mobile hero screenshots were visually checked; the case study screenshot view was narrow, though its DOM bounds spanned the full viewport, so its visual layout could not be confirmed from that capture.
- The supplied “PDF” is actually a Word document container with a `.pdf` suffix. Its text was used only to check details; the site follows the prototype copy. Project content intentionally stays as supplied and may need later expansion.
- Git was initialized because the workspace had no repository or history. `git add` was denied because `.git` is read-only in this environment; the required escalation review failed before execution. There are no commits yet, so the requested commit log is unavailable. No prior history was rewritten.

## Most useful files to request in full

`src/content/projects.ts`, `src/content/site.ts`, `src/components/Hero3DSplit.tsx`, `src/components/Nav.tsx`, `src/pages/ProjectPage.tsx`, `src/components/ProjectVisual.tsx`, `src/styles/components.css`, `src/hooks/useScrollProgress.ts`.
