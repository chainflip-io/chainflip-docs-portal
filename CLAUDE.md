# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm i            # Install dependencies
pnpm dev          # Start dev server (localhost:3000, uses Turbopack)
pnpm build        # Production build (includes sitemap + Pagefind search indexing)
pnpm start        # Start production server
pnpm lint         # Run oxlint
pnpm format       # Format code with oxfmt
pnpm format:check # Check formatting without writing
```

## Architecture

### Tech Stack

- **Next.js 15** with App Router
- **Nextra 4** documentation framework with nextra-theme-docs
- **React 19**, **TypeScript** (strict mode)
- **Tailwind CSS 4** via PostCSS
- **Pagefind** for client-side search (indexed at build time)

### Content Structure

All documentation is MDX files organized under `/app`:

- `/app/protocol/` - Core protocol docs
- `/app/brokers/` - Broker integration guides
- `/app/lp/` - Liquidity provider docs
- `/app/validators/` - Validator node guides
- `/app/lending/` - Lending protocol docs

### Key Files

- `/app/_meta.global.tsx` - Navigation structure for all pages
- `/app/layout.tsx` - Root layout with Nextra theme config
- `/mdx-components.tsx` - Custom MDX component overrides
- `/next.config.ts` - Nextra setup, LaTeX support (MathJax), SVG handling via @svgr/webpack

### Components

- `/app/_components/` - Page-specific components (features, social cards, themed images)
- `/components/` - Shared components (video embeds, toggle sections, file trees)
- `/components/icons/` - SVG icons auto-converted to React components

## Adding Documentation

1. Create MDX file in appropriate `/app` subdirectory
2. Include front matter at the top:
   ```
   ---
   title: Page Title
   description: Description for SEO
   ---
   ```
3. Update `/app/_meta.global.tsx` to add navigation entry

## Configuration Notes

- SVG files in `/components/icons/` are auto-converted to React components
- LaTeX/math supported via MathJax renderer
- `defaultShowCopyCode: true` for all code blocks
- ESLint is ignored during builds (`ignoreDuringBuilds: true`)
- Path alias: `@components/*` maps to `components/*`
