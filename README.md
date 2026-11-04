# Portfolio — Genaro Cravero

Portfolio personal de software developer, construido con Next.js, TypeScript y Tailwind CSS. Sitio estático, minimalista, en inglés y con tema oscuro permanente.

> **Contenido de ejemplo:** los proyectos, la experiencia y los estudios actuales son placeholders para demostrar la estructura. Antes de publicar hay que reemplazarlos. El detalle está en [`MEMORY.md`](MEMORY.md).

## Stack

- Next.js 16.4 (App Router) + React 19
- TypeScript estricto
- Tailwind CSS 4 con `@tailwindcss/turbopack`
- Contenido tipado versionado en Git
- Deploy previsto en Vercel

## Empezar

Requisitos: Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

El sitio queda en [http://localhost:3000](http://localhost:3000).

## Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
npm run check      # lint + typecheck
```

## Cómo agregar contenido

Todo el contenido vive en `src/content/` y está tipado en `src/content/types.ts`.

| Archivo | Qué contiene |
| --- | --- |
| `src/content/profile.ts` | Nombre, rol, About, email, redes, foco, stack y metadata. |
| `src/content/projects.ts` | Proyectos del portfolio. |
| `src/content/experience.ts` | Experiencia profesional. |
| `src/content/skills.ts` | Grupos de skills. |
| `src/content/studies.ts` | Estudios y certificaciones. |

### Agregar un proyecto

1. Abrí `src/content/projects.ts`.
2. Agregá un objeto al array `projects`.
3. Usá un `slug` único en `kebab-case`.
4. Completá `title`, `summary`, `category`, `year`, `role`, `tech`, `description` y `highlights`.
5. Marcá `featured: true` si querés que aparezca en la home.
6. Si tenés portada, guardala en `public/images/projects/` y completá `cover` con `src` y `alt` en inglés.
7. Ejecutá `npm run check` y `npm run build`.

No hace falta tocar componentes: la home, el listado y el detalle se generan solos. Si hay slugs duplicados, el build falla.

El detalle completo del modelo de datos está en [`docs/specs/02-contenido.md`](docs/specs/02-contenido.md).

## Estructura

```text
.
├── AGENTS.md
├── MEMORY.md
├── SPECS.md
├── docs/specs/                 # contrato funcional y técnico
├── opencode.json
├── .opencode/agents/           # orchestrator + subagentes
├── src/
│   ├── app/                    # rutas, metadata, SEO, estilos globales
│   ├── components/             # secciones, site y primitivas de UI
│   ├── content/                # datos tipados del portfolio
│   └── lib/                    # utilidades y selectores
└── public/                     # assets estáticos
```

## Documentación

La documentación está en español; el código y el contenido público, en inglés.

- [`AGENTS.md`](AGENTS.md) — funcionamiento y convenciones de los agentes.
- [`MEMORY.md`](MEMORY.md) — estado actual, pendientes, decisiones y última consulta.
- [`SPECS.md`](SPECS.md) — índice de specs y criterios de aceptación globales.
- [`docs/specs/`](docs/specs/) — producto, contenido, diseño, rutas y calidad.

## Variables de entorno

| Variable | Requerida | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sí en producción | URL pública sin barra final. Se usa en canonical, sitemap, robots, Open Graph y JSON-LD. |

Hay un ejemplo en `.env.example`. El fallback local es `https://genaro-cravero.vercel.app`.

## Deploy en Vercel

1. Subí el repositorio a GitHub.
2. Importalo en Vercel con el preset de Next.js.
3. Definí `NEXT_PUBLIC_SITE_URL` con el dominio final.
4. Deploy.
5. Verificá `/`, `/projects`, un detalle, `/sitemap.xml`, `/robots.txt` y la imagen Open Graph.

Antes de publicar, revisá el checklist de [`docs/specs/05-calidad-y-deploy.md`](docs/specs/05-calidad-y-deploy.md).
