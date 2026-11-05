# Portfolio — Genaro Cravero

Portfolio personal de software developer, construido con Next.js, TypeScript y Tailwind CSS. Sitio estático, minimalista, en inglés y con tema oscuro permanente.

> **Contenido real cargado:** proyectos, experiencia y estudios ya tienen datos del dueño. Antes de publicar hay que revisar textos, alt de portadas y calidad de imágenes. El detalle está en [`MEMORY.md`](MEMORY.md).

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
6. Agregá `links` para el trailer y el acceso al proyecto (ver abajo).
7. Si tenés portada, guardala en `public/images/projects/` y completá `cover` (ver abajo).
8. Ejecutá `npm run check` y `npm run build`.

No hace falta tocar componentes: la home, el listado y el detalle se generan solos. Si hay slugs duplicados, portadas inválidas o links vacíos, el build falla.

#### Portadas

- Guardá la imagen en `public/images/projects/` con el slug como nombre: `my-game.jpg`, `my-game.webp` o `my-game.avif`.
- Formato 16:9, mínimo 1200 × 675, recomendado 1600 × 900. Las cards recortan a 4:3: dejá el sujeto centrado.
- Menos de 400 KB por imagen.
- Completá `cover` con `src` y `alt` en inglés. El `alt` describe lo que se ve; no repite solo el título.
- Si existe portada, se usa en la card, en el detalle y como imagen Open Graph del proyecto.

```ts
cover: {
  src: "/images/projects/my-game.jpg",
  alt: "Gameplay screenshot showing the energy routing puzzle",
},
```

#### Links (trailer, demo, repositorio)

Se muestran debajo del resumen, antes de la portada. Orden recomendado: trailer, acceso al proyecto, repositorio.

```ts
links: [
  { label: "Watch trailer", href: "https://youtube.com/watch?v=..." },
  { label: "Play on itch.io", href: "https://..." },
  { label: "GitHub", href: "https://github.com/..." },
],
```

- `label` en inglés y corto (`Watch trailer`, `Steam page`, `Play on itch.io`, `View live site`, `GitHub`).
- URLs externas con `https://`: abren en pestaña nueva con `rel="noreferrer"`.
- Rutas internas con `/`: usan `next/link`.
- No uses `#`, links vacíos ni links de relleno: el build falla.

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
