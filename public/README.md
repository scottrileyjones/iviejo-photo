# Marketing Site — UI Kit

A click-thru prototype of the `iviejo.co` marketing site, built to demonstrate the design system in motion.

## Run

Open `index.html`. Everything is client-side React via Babel — no build step. Photography is placeholder (Unsplash CDN); swap for real Iviejo images before any production use.

## Screens

| Route | Component | Notes |
|---|---|---|
| `home` | `Hero` + `WorkGrid` | Full-bleed hero, then the filterable grid. |
| `work` | `WorkGrid` | Filterable grid alone (chip filter: all / portrait / still life / editorial). |
| `project:<id>` | `ProjectDetail` | Single project — hero image, metadata table, description, image grid with asymmetric spans. |
| `about` | `About` | Editorial about page — lede, two-column body, clients list, CTAs. |
| `journal` | (inline) | Placeholder. |
| `contact` | `Contact` | Booking form with select + submit-to-thank-you state. |

## Components

- **`Nav.jsx`** — sticky, frosted nav (bone @ 72% + backdrop-blur). Lucide-style hairline icons for search + account.
- **`Hero.jsx`** — full-bleed image with editorial display headline and stamp-style meta.
- **`WorkGrid.jsx`** — 12-col grid with asymmetric tile spans (7/5, 5/7, 6/6). Pill filter chips above. Hover: 1.02× zoom on the inner image, 800ms.
- **`ProjectDetail.jsx`** — large image hero, metadata table with hairline rows, asymmetric image grid below.
- **`About.jsx`** — display lede in column 2–7, image in column 9–12. Two-column body. Clients list as hairline-separated rows.
- **`Contact.jsx`** — underline form fields with small uppercase labels. Submit transitions to a thank-you state.
- **`Footer.jsx`** — large display wordmark, three columns of links, mono fine-print row.
- **`data.js`** — projects + image URLs. Globals: `window.IVIEJO_DATA = { PROJECTS, CATEGORIES, IMG }`.

## Coverage (intentionally partial)

This is a hi-fi visual recreation, not a real CMS. Not implemented: search, login, journal posts, cart (there is no store), responsive breakpoints below ~960px (the design is desktop-only for now). The `journal` route is a stub.

## How it differs from a "real" build

- Routing is a single `useState`, not a real router.
- Form submit is a no-op + local thank-you state.
- Images come from Unsplash by id, not a CMS.
- No accessibility audit — focus rings, skip-links, ARIA landmarks beyond the bare minimum still TODO.
