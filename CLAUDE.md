# Chainflip Docs Portal

## Stack
- **Framework:** Next.js 15 (App Router) + Nextra 4.3.0
- **React:** 19.1.2
- **CSS:** Tailwind CSS 4
- **Package manager:** pnpm
- **Deploy:** Vercel

## Commands
```bash
pnpm dev          # Start dev server → localhost:3000
pnpm build        # next build + sitemap + pagefind index
```

## Project Structure
```
app/
  _meta.global.tsx        # Global navigation metadata (sidebar/nav config)
  _components/            # App-level React components
  brokers/                # Broker docs section
  lp/                     # Liquidity provider docs section
  validators/             # Validator docs section
  protocol/               # Protocol docs section
  lending/                # Lending docs section
  layout.tsx              # Root layout
components/               # Shared components (slider, table, toggle-visibility-section, video, icons)
mdx-components.tsx        # MDX component overrides
next.config.ts            # Nextra + Next.js config (SVG/SVGR, LaTeX, redirects)
```

## Conventions

### MDX Pages
Every `.mdx` page **must** have front matter:
```mdx
---
title: Page Title
description: Page description.
---
```

### Navigation
- Edit `app/_meta.global.tsx` to add/reorder pages in the sidebar.

### SVG Icons
- Icons live in `components/icons/` and are imported via `@svgr/webpack`.
- Use `?svgr` query param for SVGR imports; plain imports use Next.js image loader.

### Styling
- Use Tailwind CSS 4 utility classes.
- Global styles in `app/globals.css` and `app/page.css`.

## Notes
- ESLint is disabled during builds (`ignoreDuringBuilds: true`) — lint locally before pushing.
- LaTeX is supported via MathJax (Nextra config) and KaTeX (Next.js config).
- OG image generation at `/og` route using page `title` from front matter.
- `postbuild` runs `next-sitemap` then `pagefind` to build the search index.
