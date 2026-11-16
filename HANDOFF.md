# Handoff: Paul Esuga's portfolio

Read this first. It says what the project is, how Paul likes to work, what is done, and what is left. Put it at the repo root and keep it updated.

## 1. The project
Personal portfolio for **Paul Esuga** (4th-year BSc Software Engineering, Pan-Atlantic University, Lagos) for a university assignment. Repo: `https://github.com/Paul-Esuga/portfolio.git`.

**Assignment must-haves:** at least 3 projects shown prominently; a dedicated project detail page (overview, problem, contribution, features, screenshots or visuals, technologies, challenges, lessons); responsive on desktop, tablet and mobile; accessible; working links only; **regular commits and pushes over time** (the lecturer reads the history).

**Creative brief:** cinematic, editorial and understated, like a director's personal site. BoJack-style sunset atmosphere without cartoon or fan-page imagery. Few elements, excellent execution. Paul's film, TV, music and podcast taste is part of his identity.

## 2. How to work with Paul
- **One chunk at a time.** Each chunk is one reviewable commit, so he can commit and review as he goes.
- **Be concise.** He is token-conscious. Put detail in deliverables, not chat.
- **Give complete files**, not diffs. State exact paths and the git commands.
- **Test before handing over:** build, type-check, and screenshot at 1440, 768 and 390 widths plus reduced motion.
- **Never fabricate:** facts, links, metrics, screenshots. Mark placeholders clearly.
- **Confidentiality:** do not publish client names, client reports or SOW details. Do not commit CV, client documents or `.env` files. Never publish his phone number.
- **Git honesty:** no backdating, no squashing, no force-push. Paul runs the git commands himself.
- Ask all questions in one batch.

## 3. Stack and commands
Vite 6, React 19, TypeScript 5.8 (strict, `noUnusedLocals`), React Router 7 (BrowserRouter). Plain CSS with custom properties. No UI or animation libraries. `npm install`, `npm run dev`, `npm run build`. Codex's `package.json` scripts may carry a `--configLoader runner` flag, a sandbox workaround. Remove it if it fails on Paul's machine.

## 4. Design system (`src/styles/tokens.css`)
| Role | Token | Value |
|---|---|---|
| Ground | `--ground` | `#0a2227` |
| Deepest, text on light fills | `--abyss` | `#050f12` |
| Lifted teal card | `--lift` | `#164850` |
| Text | `--chalk` | `#f6ebd7` |
| The pop (CTAs, big fills) | `--flame` | `#ff6a3d` |
| Small accents | `--amber` | `#f5b13d` |
| Muted red | `--ember` | `#8a3322` |

Contrast is checked: chalk on ground 14.0, flame on ground 5.8, amber on ground 8.8. Legacy aliases (`--ink`, `--sun` and so on) still exist.
- **Type:** two families only. Display `"Recoleta", "Fraunces"` (Fraunces with the SOFT axis is the stand-in until Paul licenses Recoleta). Body Instrument Sans. Scale is 1.333 from a 17px base, as `--t--1` to `--t-7`.
- **Spacing:** 8px base, `--s-1` to `--s-10`. **Grid:** 4, 8 and 12 columns (`.container`, `.grid`). Breakpoints 640 and 1024.
- **Avoid:** all-caps eyebrows, 01/02 numbering, italic accent words, arrows on links, glows, grain, gradient backgrounds, identical card grids, purple/blue AI palettes. Paul rejected Omnitrix and Ben 10 visuals, glowing dots, "caution" labels and "filter the chaos" copy.
- A skill review (frontend-design, visual-hierarchy, color-system, typography-scale, spacing-system, layout-grid, responsive-design) drove these choices. If you run in Claude Code, read the installed skills again before changing the design.

## 5. File map
```
src/
  main.tsx, App.tsx          router, skip link, scroll manager (hash scroll, top on route change)
  content/                   ALL copy lives here
    site.ts                  name, email, links (empty = hidden), hero cards, nav, about, quote
    projects.ts              Project type + 4 projects (sections, gallery)
    archive.ts               archive reel tiles + text index
    experience.ts            roles, education, toolbox (from the CV)
    stills.ts / shots.ts     image imports (film stills / project screenshots)
  components/
    Hero3DSplit.tsx          sticky scroll hero (see 6)
    Nav.tsx                  fixed bar, sliding pill, active section
    About, WorkList, Experience, CraftBand, Archive, Contact, ProjectVisual, TextLift
  hooks/                     useScrollProgress, useParallax, useActiveSection, useReducedMotion
  pages/                     Home, ProjectPage (generic, by slug), NotFound
  styles/                    tokens.css, base.css, components.css
  assets/stills/*.webp       14 film stills and covers + 3 project images
```

## 6. Key interactions
- **Hero:** 380vh tall section, sticky 100vh stage. `useScrollProgress` sets CSS variables: `--intro` (name fades by p=.10), `--e` (split, p .12 to .42), per-panel `--f` (flip, panels start at p .30, .42, .54 and take .30 each). Three panels show slices of one Breaking Bad still, then flip (rotateY) to solid-colour faces with their own heading, text and link. At 1023px and below the panels stack as horizontal bands and flip on the X axis. Reduced motion: no pinned track, three plain cards.
- **Nav pill:** follows hover, focus and the active section. **Text lift:** per-character, word-safe; put `lift-host` on the link. **Parallax:** `.plx` layers with `inset:-12% 0`. **Archive:** native horizontal scroll with Previous/Next buttons.

## 7. Content sources and decisions
- Facts come from Paul's CV, the Probabli proposal, designs and a real dashboard screenshot, the SIBAS zip, and Datamellon/Herconomy documents. The chatbot client is described only as "a women's products platform": no name, SOW targets or internal detail. The cybersecurity page and experience list name no security clients (the CV does; Paul can choose to add them).
- **Probabli** (renamed from PredicPAU, slug `probabli`) is a **working demo** (10 markets, mock transactions, shown at PAU Financial Society Demo Day), not a live market. Its gallery has a real dashboard screenshot plus an early design labelled as such. The old landing-page design was dropped because it carried the old name and placeholder claims.
- **SIBAS:** Paul designed the database schema and set up the PostgreSQL database, implementing all relationships; the team built the Streamlit app. The page says exactly that.
- **Chatbot:** "built to show sources and handle follow-up questions" is confirmed by Paul as true of what he built.
- Never publish Paul's phone number (it is on the CV). Links in `site.ts`: LinkedIn and GitHub are set.

## 8. Done so far
1. Prototype and visual direction (Claude artifact), Codex scaffold, repo connected and pushed.
2. Design system: tokens and base (palette, type, spacing, grid).
3. Darker palette; scroll hero (split and flip, text per card); parallax sections; archive reel with 9 new stills; case-study layout; all hooks and components rebuilt and tested.
4. Real project content from the CV and documents; screenshot gallery on case studies; per-page document titles.
5. Probabli rename and real screenshot; SIBAS contribution; LinkedIn and GitHub links; **Experience section** (roles, education, toolbox) with its own nav item; nav fits down to 320px (short "PE" mark below 520px, mark hidden below 380px).

6. **Chunk 6, polish and QA:** accessibility pass (axe is clean on every route at 1440, 768, 390, 360, 320 and reduced motion); hero card links are now keyboard reachable (focus jumps the scroll to the point where all three cards are flipped; links were `visibility:hidden` before, which skipped them); h1 now comes first in reading order; skip link and route changes move focus to `<main>`; archive tile titles are `h3`; project-visual links are decorative duplicates (`aria-hidden`, `tabIndex=-1`); nav mark name fixed on small screens; `TextLift` has a real visually-hidden text; favicon (SVG sunset mark), apple-touch icon, meta description, Open Graph and Twitter tags, theme colour; `og.png` share card; `mavi.webp` 273 KB to 157 KB; `vercel.json` (SPA rewrite, immutable asset caching); README.

7. **Chunk 7, carousel and work covers:** the archive is now a centred carousel (one frame fills most of the screen, neighbours peek on both sides, scroll-snap, depth and parallax driven by scroll, drag, arrow keys, Previous/Next, progress bar, click a neighbour to bring it in). Fleabag is dropped from the reel (still in the text index). The "illustrative concept" tiles are gone: `ProjectVisual.tsx` is replaced by `ProjectCover.tsx`. Probabli and SIBAS use their real screenshots on a coloured ground; the cybersecurity and chatbot tiles are type-led cards that use only facts already on the CV and pages (no mock UI). Each project has a `cover` field in `projects.ts`.

8. **Chunk 9, covers, interlude, content and speed:** work covers now show images exactly as they are, in a chalk border with a hard offset shadow (flame or amber), with no coloured background (`ProjectCover.tsx`; `Cover` is `shot` or `stack` in `projects.ts`). Cybersecurity has three real scan screenshots (the target address and a client page title are pixelated), stacked on the home tile and shown with captions on its page. The chatbot cover and gallery use Paul's AWS architecture diagram; its Technologies text and stack now mention API Gateway, DynamoDB and Titan embeddings, read from that diagram. Challenges and lessons added for the chatbot and SIBAS from Paul's own points (lessons are drafted wording, to be confirmed by Paul). New `Interlude.tsx` between Work and Experience: two pinned prints (Ted Mosby still, SpongeBob "get a job" soup) with one line of copy and a slight parallax. Ben 10 still added to the archive reel. Performance: parallax images are lazy `<img>` instead of CSS backgrounds, the hero image is preloaded, Google Fonts CSS no longer blocks first paint, `robots.txt` added (the SPA fallback was serving HTML for it, which Lighthouse flagged), security headers in `netlify.toml`. First-load transfer fell from 367 KB to 180 KB in a local test.

Lighthouse on the live site (Paul's run, with browser extensions active, so it was unreliable): mobile 32, desktop 39 performance; 100 accessibility; 73 best practices; 92 SEO. A local profile at 4x CPU slowdown showed about 170 ms blocking time, so most of the gap is extensions (Grammarly appears in the report). Re-run in an incognito window before judging.

## 9. To do (in priority order)
1. **Re-run Lighthouse in an incognito window** (extensions disabled) on the live URL, mobile and desktop, and fix anything real that remains.
2. **Content:** Paul to confirm the drafted lessons and the SIBAS contribution wording; the two cybersecurity challenge bullets and its lesson were written by an earlier agent, not from Paul's words, so confirm or replace them; real SIBAS app screenshot when Paul has one.
3. **Images:** SIBAS currently uses the ERD; swap in an app screenshot when available. Unused files that can be removed: `src/assets/stills/fleabag.webp`, `predicLanding.webp`, `bj.webp`, `himym.webp`, and `vercel.json`.
4. **Repo hygiene:** confirm `.gitignore` has `reference-private/`, `*.docx`, `*.pdf`, `.env*` (see `gitignore-additions.txt` in the chunk 6 zip); final tidy commit.
5. **Optional polish:** the hero image is a CSS background set from React, so the browser finds it late (LCP). Consider rendering it as an `<img fetchpriority="high">`. Retune hero timing or card colours if Paul asks.

## 10. Known issues
- Several stills are upscaled from about 650px sources and look soft full-bleed.
- The Fraunces stand-in will change slightly if Recoleta is installed.
- Tested in Chromium via Playwright only (no Safari or Firefox). The hero uses 3D transforms with `backface-visibility`, so check Safari on a real device.
- The keyboard reveal on hero links uses `scrollTo({behavior:'instant'})`, because the page has `scroll-behavior:smooth` and `'auto'` would animate.

## 11. QA recipe
`npm run build`, then `npx vite preview --port 4173` (start it detached, in the same command as the tests, or it may be killed), then Playwright at 1440x900, 768x1024, 390x800, 360x780 and `reduced_motion='reduce'`. Check no horizontal overflow (`documentElement.scrollWidth`), no page errors, hero stages at scroll fractions 0, .25, .5, .8, 1 of `#top`.height minus viewport height, every route (`/`, `/work/<slug>` for all four, a bad slug), and that the nav fits at 320px.

## 12. Decisions made
Deploy target: **Netlify**, live at https://polite-shortbread-5563c6.netlify.app (Vercel blocked Paul with a 2FA prompt he never set up; `vercel.json` is unused and can be removed). Config is `netlify.toml` (build, publish `dist`, SPA fallback). Security page: **sectors only, no client names** (it currently names none; it says payments, cloud and API security, and microfinance). Open: any real Probabli screens beyond the dashboard?
