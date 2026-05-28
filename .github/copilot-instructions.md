# Copilot instructions

## Project commands

- Install dependencies: `npm install`
- Start local development: `npm run dev` (Vite is pinned to `127.0.0.1`)
- Build for production: `npm run build`
- Preview the production build: `npm run preview` (also pinned to `127.0.0.1`)
- There is currently no test runner or lint script in `package.json`, so do not assume `npm test`, `npm run lint`, or a single-test command exist in this repository.

## High-level architecture

- This is a single-page React 19 + Vite portfolio. `src/main.tsx` mounts `App` and imports the global CSS bundle from `src/styles/index.css`.
- `src/App.tsx` composes one long-scrolling page: `SiteHeader` plus `HeroSection`, `AboutSection`, `ProjectsSection`, `SkillsSection`, and `ContactSection`. Navigation is done with in-page anchors, not a router.
- Most site content lives in `src/data/portfolio.ts`. The sections are largely presentational and render `profile`, `navItems`, `aboutParagraphs`, `strengths`, `projects`, and `skills` from that file.
- Shared content types live in `src/types/portfolio.ts`. The `Strength` type stores a `LucideIcon`, and `AboutSection` renders those icons dynamically from the data file.
- Components are organized by role under `src/components/layout`, `src/components/sections`, and `src/components/ui`. `SectionHeading`, `ButtonLink`, and `SocialLinks` are the main shared building blocks.
- Styling is plain global CSS split by concern: `tokens.css`, `base.css`, `layout.css`, `ui.css`, `sections.css`, and `responsive.css`. `src/styles/index.css` controls the import order, so keep new styles in the matching file and preserve that order.

## Key conventions

- Keep visible copy, navigation labels, and section IDs in Spanish. If a section ID changes, update the matching `navItems` entry in `src/data/portfolio.ts` so header links still work.
- Prefer changing portfolio content in `src/data/portfolio.ts` instead of hardcoding strings inside section components. If the shape of that content changes, update `src/types/portfolio.ts` first.
- Reuse the shared UI helpers before creating custom section-specific buttons or headings.
- Stick to the existing design-token system in `src/styles/tokens.css` for colors, borders, shadows, and focus styles instead of introducing one-off values.
- Responsive layout changes and reduced-motion handling belong in `src/styles/responsive.css`; keep desktop-first styles in the other CSS files.
- Several visual accents depend on structure-specific CSS such as `nth-child(...)` styling in `sections.css` and `ui.css`. Preserve the current markup patterns when adding or reordering cards, tags, or skills.
