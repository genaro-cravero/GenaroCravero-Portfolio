# Portfolio — Genaro Cravero

Personal software developer portfolio built with Next.js, TypeScript and Tailwind CSS. A static, minimalist, English-only site with a permanent dark theme.

> **Real content loaded:** projects, experience and studies already hold the owner's data. Before publishing, review the copy, cover image `alt` text and image quality. Details live in [`MEMORY.md`](MEMORY.md).

## Stack

- Next.js 16.4 (App Router) + React 19
- Strict TypeScript
- Tailwind CSS 4 with `@tailwindcss/turbopack`
- Typed content versioned in Git
- Deploy target: Vercel

## Getting started

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # serve the build
npm run lint       # ESLint
npm run typecheck  # TypeScript without emitting
npm run check      # lint + typecheck
```

## Adding content

All content lives in `src/content/` and is typed in `src/content/types.ts`.

| File | Contents |
| --- | --- |
| `src/content/profile.ts` | Name, role, About, email, social links, focus, stack and metadata. |
| `src/content/projects.ts` | Portfolio projects. |
| `src/content/experience.ts` | Professional experience. |
| `src/content/skills.ts` | Skill groups. |
| `src/content/studies.ts` | Studies and certifications. |

### Adding a project

1. Open `src/content/projects.ts`.
2. Add an object to the `projects` array.
3. Use a unique `kebab-case` `slug`.
4. Fill in `title`, `summary`, `category`, `year`, `role`, `tech`, `description` and `highlights`.
5. Set `featured: true` if you want it on the home page.
6. Add `links` for the trailer and the project entry point (see below).
7. If you have cover art, save it in `public/images/projects/` and fill in `cover` (see below).
8. Run `npm run check` and `npm run build`.

No component changes are needed: the home page, the listing and the detail page are generated automatically. The build fails on duplicate slugs, invalid covers or empty links.

#### Covers

- Save the image in `public/images/projects/` using the slug as the file name: `my-game.jpg`, `my-game.webp` or `my-game.avif`.
- 16:9 format, at least 1200 × 675, 1600 × 900 recommended. Cards crop to 4:3, so keep the subject centered.
- Under 400 KB per image.
- Fill in `cover` with `src` and an English `alt`. The `alt` describes what is visible; it does not just repeat the title.
- If a cover exists, it is used on the card, on the detail page and as the project's Open Graph image.

```ts
cover: {
  src: "/images/projects/my-game.jpg",
  alt: "Gameplay screenshot showing the energy routing puzzle",
},
```

#### Links (trailer, demo, repository)

They render below the summary, before the cover. Recommended order: trailer, project entry point, repository.

```ts
links: [
  { label: "Watch trailer", href: "https://youtube.com/watch?v=..." },
  { label: "Play on itch.io", href: "https://..." },
  { label: "GitHub", href: "https://github.com/..." },
],
```

- `label` in English and short (`Watch trailer`, `Steam page`, `Play on itch.io`, `View live site`, `GitHub`).
- External URLs with `https://` open in a new tab with `rel="noreferrer"`.
- Internal paths with `/` use `next/link`.
- Do not use `#`, empty links or filler links: the build fails.

The full data model is documented in [`docs/specs/02-contenido.md`](docs/specs/02-contenido.md) (Spanish).

## Project structure

```text
.
├── AGENTS.md
├── MEMORY.md
├── SPECS.md
├── docs/specs/                 # functional and technical contract
├── opencode.json
├── .opencode/agents/           # orchestrator + subagents
├── src/
│   ├── app/                    # routes, metadata, SEO, global styles
│   ├── components/             # sections, site and UI primitives
│   ├── content/                # typed portfolio data
│   └── lib/                    # utilities and selectors
└── public/                     # static assets
```

## Documentation

This README is in English. The rest of the documentation is in Spanish; the code and all public content are in English.

- [`AGENTS.md`](AGENTS.md) — agent workflow and conventions.
- [`MEMORY.md`](MEMORY.md) — current state, pending work, decisions and latest request.
- [`SPECS.md`](SPECS.md) — spec index and global acceptance criteria.
- [`docs/specs/`](docs/specs/) — product, content, design, routes and quality.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Public URL without a trailing slash. Used by canonical, sitemap, robots, Open Graph and JSON-LD. |

There is an example in `.env.example`. The local fallback is `https://genaro-cravero.vercel.app`.

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import it into Vercel with the Next.js preset.
3. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
4. Deploy.
5. Verify `/`, `/projects`, one detail page, `/sitemap.xml`, `/robots.txt` and the Open Graph image.

Before publishing, go through the checklist in [`docs/specs/05-calidad-y-deploy.md`](docs/specs/05-calidad-y-deploy.md) (Spanish).
