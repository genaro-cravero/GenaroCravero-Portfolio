# MEMORY.md

> Memoria operativa del proyecto. Se actualiza al finalizar cada tarea.
> Última actualización: 2026-11-04.

## 1. Resumen del estado

- **Estado:** MVP funcional y compilable. Sitio completo con contenido de ejemplo.
- **Stack:** Next.js 16.4.5, React 19.3, TypeScript 5, Tailwind CSS 4, Turbopack.
- **Deploy previsto:** Vercel.
- **Gestión de contenido:** archivos tipados versionados en Git. Sin CMS, auth ni base de datos.
- **Idioma del sitio:** inglés. **Documentación:** español.

## 2. Funcionalidades implementadas

- Home de una sola página con secciones:
  - Hero.
  - About con el texto profesional provisto por el dueño.
  - Selected work (proyectos destacados).
  - Experience.
  - Skills.
  - Studies and Certifications.
  - Contact con email, LinkedIn y GitHub.
- Header sticky con navegación desktop y menú mobile sin JavaScript.
- Footer con año dinámico cacheado, redes y volver arriba.
- Página `/projects` con grilla de todos los proyectos.
- Página dinámica `/projects/[slug]` generada estáticamente para cada proyecto.
- Detalle de proyecto con descripción, highlights, stack, rol, estado, links opcionales y siguiente proyecto.
- Capa de contenido tipada en `src/content/` con validación de slugs duplicados en build.
- Soporte opcional de portada por proyecto en `public/images/projects/` con `next/image`.
- Diseño oscuro minimalista con negro dominante y acento cálido.
- SEO:
  - Metadata global y por página.
  - Canonical URLs.
  - Open Graph image generada con `next/og`.
  - JSON-LD `Person` en la home.
  - `sitemap.xml` y `robots.txt`.
  - Favicon SVG.
- Responsive, accesible y compatible con `prefers-reduced-motion`.
- Documentación completa: `AGENTS.md`, `MEMORY.md`, `SPECS.md`, `docs/specs/` y `README.md`.
- Agentes de OpenCode: Orchestrator, Frontend Engineer, Content Engineer y QA Reviewer.

## 3. Contenido pendiente de reemplazo (CRÍTICO antes de publicar)

El sitio funciona, pero parte del contenido es de ejemplo para demostrar la estructura:

- [ ] **Experiencia:** reemplazar `Studio Name` y `Company Name` en `src/content/experience.ts` por empleos reales, fechas, ubicación y logros.
- [ ] **Proyectos:** reemplazar `Ember Protocol` y `Hollow Circuit` por proyectos reales en `src/content/projects.ts`. `Portfolio` puede quedarse como proyecto real.
- [ ] **Estudios:** reemplazar `Degree Title`, `University Name`, `Certification Name` e `Issuing Organization` en `src/content/studies.ts`.
- [ ] **Links de proyectos:** agregar URLs reales (demo, tienda, video, repositorio) en el campo `links`.
- [ ] **Portadas:** agregar imágenes reales en `public/images/projects/` y completar `cover` si se desea.
- [ ] **URL del sitio:** definir `NEXT_PUBLIC_SITE_URL` en Vercel con el dominio final. El fallback actual es `https://genaro-cravero.vercel.app`.
- [ ] **Redes:** verificar que los perfiles de GitHub y LinkedIn siguen siendo correctos.
- [ ] **Textos del hero y contacto:** revisar que la propuesta de valor y la disponibilidad reflejen la situación actual.

## 4. Decisiones que NO se cambian (sin consulta explícita)

- El contenido se administra en Git; no se agrega CMS, base de datos, auth ni panel de administración.
- Solo el dueño puede agregar contenido porque requiere acceso de escritura al repositorio.
- La interfaz y el contenido público están en inglés.
- Toda la documentación `.md` está en español.
- El negro es el color dominante; el acento es un único tono cálido (`#e2603a`).
- La estética es minimalista: sin sombras, sin gradientes llamativos, sin animaciones largas, sin UI kits.
- Next.js App Router + TypeScript + Tailwind CSS.
- Server Components por defecto.
- Sin dependencias nuevas sin justificación documentada.
- El sitio debe seguir siendo estático y rápido.

## 5. Estado técnico

- `npm run check` pasa: ESLint y TypeScript sin errores.
- `npm run build` pasa: 12 páginas generadas, sin errores.
- La home y las páginas de proyecto se prerenderizan como estáticas.
- Node local: v24.21.0. Node mínimo del proyecto: 20.9+.
- `cacheComponents` está activado.
- `partialPrefetching` está desactivado: con el fallback activo, un slug de proyecto inexistente respondía 200 en lugar de 404.
- `agentRules` está en `false` para conservar la documentación solo en español.
- El año del footer y la fecha del sitemap usan `getSiteTimestamp()` porque `new Date()` directo falla durante el prerender con Cache Components.
- Documentación completa: `AGENTS.md`, `MEMORY.md`, `SPECS.md`, `README.md` y cinco specs en `docs/specs/`.
- Agentes de OpenCode en `.opencode/agents/`: `orchestrator` (primary), `frontend-engineer`, `content-engineer` y `qa-reviewer` (subagents). `opencode.json` define `orchestrator` como agente por defecto.
- QA de layout con Edge headless/CDP en 1440, 1024, 768, 390 y 320 px: sin scroll horizontal, un solo `h1`, sin links anidados, sin imágenes sin `alt`, sin links externos sin `rel="noreferrer"`.
- QA HTTP: `/` 200, `/projects` 200, detalle 200, slug inexistente 404, ruta inexistente 404, `sitemap.xml` 200, `robots.txt` 200, `opengraph-image` 200 `image/png`.
- Todos los targets táctiles principales miden al menos 44 px de alto (header, menú mobile, CTAs, footer).

## 6. Errores y bugs conocidos

- No hay errores de build, lint o typecheck.
- El menú mobile usa `<details>`: no se cierra automáticamente al navegar. Es una limitación aceptada para evitar JavaScript.
- La ruta `/projects/[slug]` expone un fallback dinámico además de los paths estáticos (comportamiento de Cache Components). Los slugs inexistentes responden 404, pero el HTML inicial es el shell de error y el contenido del 404 se completa en el cliente.
- No se agregaron tests automatizados; la verificación es build + lint + typecheck + auditoría headless.

## 7. Backlog y mejoras posibles

- Reemplazar todo el contenido de ejemplo (prioridad alta).
- Agregar imágenes de portada optimizadas para cada proyecto.
- Agregar un CV descargable si se necesita.
- Evaluar analytics privacy-first (opcional, no implementado).
- Evaluar imágenes Open Graph específicas por proyecto.
- Evaluar `aria-current` en la navegación (requeriría un Client Component).
- Evaluar tests E2E con Playwright si el sitio crece.
- Configurar dominio propio en Vercel.

## 8. Cambios importantes

### 2026-11-04 — Creación del MVP

- Scaffold de Next.js 16 con App Router, TypeScript y Tailwind 4.
- Implementación completa de home, proyectos y detalle de proyecto.
- Capa de contenido tipada y validación de slugs.
- Sistema de diseño oscuro minimalista.
- SEO completo, sitemap, robots, OG image y JSON-LD.
- Documentación, specs y agentes.
- Se eliminó `dynamicParams = false` porque es incompatible con `cacheComponents`.
- Se agregó `getSiteTimestamp()` para evitar el uso de `new Date()` sin cache durante el prerender.
- Se desactivó `agentRules` para que Next.js no inyecte texto en inglés en `AGENTS.md`.

### 2026-11-04 — Cierre de documentación, agentes y QA

- Se crearon `docs/specs/04-rutas-y-paginas.md` y `docs/specs/05-calidad-y-deploy.md`.
- Se crearon los cuatro agentes de OpenCode en `.opencode/agents/` con frontmatter V2 y permisos por alcance.
- Se reescribió `README.md` en español con quick start, workflow de contenido y deploy.
- Se agrandaron los targets táctiles de header, menú mobile, CTAs y footer a 44 px mínimo.
- Se movió el canonical de la home desde el layout a la página para que el 404 no herede canonical.
- Se cambió el título del detalle inexistente a `Page not found`.
- Se desactivó `partialPrefetching`: los slugs inexistentes pasaban de 200 a 404 real.
- Se centralizó la imagen Open Graph y se agregaron `openGraph`/`twitter` por página para que el listado y el detalle tengan título e imagen propios.
- Se eliminó el `favicon.ico` por defecto de Next.js para que el sitio use `src/app/icon.svg`.
- Se inicializó el repositorio Git con un commit inicial en la rama `main`.
- Se auditó el sitio con Edge headless/CDP en cinco anchos y se verificaron estados HTTP, metadata, sitemap, robots, OG image y anclas.

## 9. Última consulta

- **Fecha:** 2026-11-04.
- **Pedido:** crear un portfolio de software developer minimalista, en inglés, con negro predominante, secciones de About, Projects, Experience, Skills, Studies and Certifications y Contact; contenido administrable solo por el dueño; estructura de agentes y documentación en español; specs como fuente de verdad.
- **Decisiones tomadas:** contenido versionado en Git y deploy en Vercel (confirmado por el usuario).
- **Resultado:** resuelto. MVP implementado, documentado y verificado con `npm run check`, `npm run build` y auditoría headless de layout, accesibilidad y SEO.
- **Pendiente del usuario:** reemplazar el contenido de ejemplo y definir la URL/dominio final antes de publicar.

## 10. Cómo actualizar esta memoria

1. Actualizar la fecha del encabezado.
2. Mover a “Funcionalidades implementadas” lo que se completó.
3. Actualizar “Contenido pendiente”, “Errores conocidos” y “Backlog”.
4. Registrar decisiones nuevas y cambios de arquitectura.
5. Reescribir “Última consulta” con el pedido más reciente y su estado.
