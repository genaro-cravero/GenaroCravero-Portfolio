# MEMORY.md

> Memoria operativa del proyecto. Se actualiza al finalizar cada tarea.
> Última actualización: 2026-11-06.

## 1. Resumen del estado

- **Estado:** MVP funcional y compilable. Contenido real cargado en proyectos, experiencia, estudios y skills.
- **Stack:** Next.js 16.4.5, React 19.3, TypeScript 5, Tailwind CSS 4, Turbopack.
- **Deploy previsto:** Vercel.
- **Gestión de contenido:** archivos tipados versionados en Git. Sin CMS, auth ni base de datos.
- **Idioma del sitio:** inglés. **Documentación:** español.

## 2. Funcionalidades implementadas

- Home de una sola página con secciones:
  - Hero con el nombre como `h1`, el rol como línea secundaria, `profile.tagline`, CTAs, stack y decoración estructural (retícula hairline, rail de `focusAreas` y marcas de esquina).
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
- Links de proyecto (trailer, demo, repositorio o tienda) visibles en la cabecera del detalle, antes de la portada; externos con `rel="noreferrer"`, internos con `next/link`.
- Capa de contenido tipada en `src/content/` con validación de slugs duplicados en build.
- Soporte opcional de portada por proyecto en `public/images/projects/` con `next/image`: card 4:3, detalle 16:9 y Open Graph propio cuando existe.
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

El sitio funciona, pero parte del contenido sigue siendo de ejemplo:

- [x] **Experiencia:** contenido real cargado en `src/content/experience.ts` (2026-11-05). Confirmar si Sismo Games sigue vigente: hoy tiene `endYear: 2026` y el sitio muestra `2022 — 2026` en lugar de `Present`.
- [x] **Proyectos:** contenido real cargado en `src/content/projects.ts` (2026-11-05); el listado pasó de 3 a 9 páginas generadas.
- [x] **Estudios:** contenido real cargado en `src/content/studies.ts` (2026-11-05).
- [x] **Links de proyectos:** trailer, demo, tienda y repositorio cargados para cada proyecto (2026-11-05).
- [x] **Portadas:** ocho imágenes cargadas en `public/images/projects/` y conectadas con `cover` (2026-11-05).
- [ ] **Alt de portadas:** hoy son genéricos (`"<Title> cover art"`); reemplazarlos por descripciones reales cuando se revisen las imágenes.
- [ ] **Calidad de imágenes:** `skinwalker.jpg` mide 460 × 215 (se verá borrosa), `hexperiment.png` es casi cuadrada y `depuro.png` / `heroes-de-la-gripe.png` pesan más de 1 MB. Reemplazar por 1600 × 900 centradas y menos de 400 KB.
- [ ] **URL del sitio:** definir `NEXT_PUBLIC_SITE_URL` en Vercel con el dominio final. El fallback actual es `https://genaro-cravero.vercel.app`.
- [ ] **Redes:** verificar que los perfiles de GitHub y LinkedIn siguen siendo correctos.
- [ ] **Textos del hero y contacto:** revisar que `profile.tagline`, el rol y la disponibilidad reflejen la situación actual.
- [ ] **Revisión editorial del contenido real:** el dueño debe dar el visto bueno antes de publicar; hay fechas y afirmaciones que no se pueden verificar desde el repositorio.

## 4. Decisiones que NO se cambian (sin consulta explícita)

- El contenido se administra en Git; no se agrega CMS, base de datos, auth ni panel de administración.
- Solo el dueño puede agregar contenido porque requiere acceso de escritura al repositorio.
- La interfaz y el contenido público están en inglés.
- Toda la documentación `.md` está en español, salvo `README.md`, que está en inglés por pedido explícito del dueño (2026-11-06).
- El negro es el color dominante; el acento es un único tono cálido (`#e2603a`).
- La estética es minimalista: sin sombras, sin gradientes llamativos, sin animaciones largas, sin UI kits.
- La única ornamentación admitida es estructural: retícula hairline, marcas de esquina y etiquetas mono. Sin ilustraciones ni imágenes decorativas (2026-11-06).
- Next.js App Router + TypeScript + Tailwind CSS.
- Server Components por defecto.
- Sin dependencias nuevas sin justificación documentada.
- El sitio debe seguir siendo estático y rápido.

## 5. Estado técnico

- `npm run check` pasa: ESLint y TypeScript sin errores.
- `npm run build` pasa: 18 rutas generadas (home, listado, 9 proyectos, 404, assets y metadata), sin errores.
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
- QA del hero decorado con Edge/Chrome headless y CDP en 1440, 1280, 1024, 900, 768, 390 y 320 px: sin scroll horizontal, rail visible solo desde `lg`, cruces sin solapar glifos ni capturar clicks, borde del rail alineado al píxel con la regla inferior y `faint` sobre `canvas` en 5.17:1.
- `.vs/` (índice local de Visual Studio) está en `.gitignore`: Tailwind lo escaneaba como fuente y su archivo bloqueado hacía fallar el build de Turbopack (`os error 32`).

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
- Evaluar `calc(100svh - 4rem - 1px)` en el hero: hoy mide 1 px más que el viewport porque el header suma su borde inferior.
- Pulir el stack del hero a 320 px: el separador `·` puede quedar colgando al final de la primera línea.
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

### 2026-11-05 — Rediseño del hero

- Se actualizaron los specs `01-producto.md`, `03-diseno.md` y `04-rutas-y-paginas.md`: el `h1` es el nombre y el rol va como línea secundaria.
- `src/components/sections/hero.tsx`: se eliminó el titular de marketing “Interactive software, built with intent.” y el eyebrow que duplicaba el rol.
- Nuevo `h1`: “Genaro Cravero” con `clamp(2.5rem, 6vw, 4rem)`, peso 500 y tracking `-0.04em`.
- El rol “Software Developer” pasó a párrafo secundario con punto de acento; se conservaron la propuesta breve, los CTAs y el stack.
- El bloque inferior pasó de grilla a `flex` para equilibrar el contenido más corto en desktop.
- Se agregó `.vs/` a `.gitignore` porque Tailwind escaneaba el índice bloqueado de Visual Studio y Turbopack fallaba con `os error 32`.
- Se agregó `tagline` al tipo `Profile` y a `profile.ts`; el hero ahora consume `profile.tagline` en lugar de texto hardcodeado.
- Se incorporó el contenido real que el dueño había dejado en el working tree (experiencia, estudios, skills y keywords) y se corrigieron erratas objetivas (`Rafaela`, `Environment`, `MongoDB`) y la indentación de esos archivos.
- El hero usa `aria-labelledby="hero-heading"` con `id` en el `h1`, como el resto de las secciones.

### 2026-11-05 — Portadas y links de proyectos

- Los links de cada proyecto se movieron a la cabecera del detalle, debajo del resumen y antes de la portada, para que el trailer o el acceso al proyecto se vean sin scroll.
- Los links internos ahora usan `next/link`; los externos abren en pestaña nueva con `rel="noreferrer"`.
- La portada del detalle se carga con `preload` (sucesor de `priority` en Next.js 16) por ser el LCP.
- Si el proyecto tiene `cover`, esa imagen se usa como Open Graph y Twitter image con URL absoluta; si no, se mantiene la imagen OG generada.
- `src/lib/projects.ts` valida en build que la portada viva en `/images/projects/`, tenga extensión permitida y `alt` no vacío; también rechaza links con `label`/`href` vacíos o `#`.
- Se creó `public/images/projects/` con `.gitkeep` y se documentó el flujo de portadas y links en `README.md` y `docs/specs/02-contenido.md`.
- Prueba de humo con una portada y links temporales: el detalle renderizó la imagen optimizada, el `preload`, los links y el `og:image` absoluto; luego se revirtió el contenido de prueba.

### 2026-11-05 — Contenido real de proyectos

- El dueño reemplazó los proyectos de ejemplo por 9 proyectos reales, con ocho portadas y links a trailers, demos, tiendas y repositorios.
- Se corrigieron los `cover.src`, que apuntaban a `../../public/images/projects/...`; ahora usan rutas públicas absolutas `/images/projects/...`. La validación de build los rechazaba.
- Se corrigió el link de Umbral, que no tenía esquema (`youtube.com/...`), y se normalizaron labels (`GitHub`, `Live site`), erratas y formato del archivo.
- El `next start` que estaba corriendo servía el build anterior: hubo que reconstruir y reiniciar. `next start` no recarga contenido; para iterar hay que usar `npm run dev` o volver a construir.
- Verificado en producción local: home con las tres portadas destacadas, detalle con links en la cabecera, imagen optimizada con `preload` y `og:image` absoluto por proyecto.

### 2026-11-06 — README en inglés

- El dueño pidió pasar `README.md` a inglés. Se reescribió completo manteniendo la estructura y el contenido.
- Se documentó la excepción en `AGENTS.md`, `SPECS.md`, `docs/specs/01-producto.md`, `docs/specs/02-contenido.md` y `docs/specs/05-calidad-y-deploy.md`, para que la regla de documentación en español siga siendo coherente.
- No se tocó código ni contenido del sitio.

### 2026-11-06 — Decoración estructural del hero

- El dueño pidió que el hero “no se sienta tan vacío”; se ofrecieron tres direcciones y eligió “retícula técnica + datos” con intensidad “muy sutil”.
- Se actualizó el contrato antes de tocar código: `docs/specs/03-diseno.md` (§1, §5 Hero, §6, §7, §9), `docs/specs/04-rutas-y-paginas.md` (§2) y `docs/specs/01-producto.md` (US-01). La decoración permitida ahora es solo estructural y no puede mostrar datos inventados.
- `src/app/globals.css`: `.project-grid` pasó a `.hairline-grid` para compartir una única textura entre el hero y el placeholder de proyecto. Mismos valores (1 px, blanco al 4.5 %, `2.5rem`, máscara radial).
- `src/components/sections/hero.tsx`: capa de retícula enmascarada con `aria-hidden` y `pointer-events-none`; rail de `profile.focusAreas` desde `lg` con `border-l`, etiqueta mono `Focus` y hairlines; marcas de esquina `+` en `faint` al 50 % en las esquinas superior izquierda e inferior derecha; el bloque de CTAs salió de la columna para que la regla horizontal vuelva a medir todo el ancho y el borde del rail cierre contra ella sin formar una T.
- El rail va `aria-hidden` porque `focusAreas` ya se lee en About: no se pierde información y no se duplica en el orden de lectura.
- Sin dependencias nuevas, sin `"use client"`, sin contenido nuevo ni cambios en `src/content/`.
- Verificado: `npm run check` y `npm run build` en verde (18 rutas); geometría del rail y la regla coincidiendo al píxel en 1440 y 1024; sin scroll horizontal de 1440 a 320 px.

## 9. Última consulta

- **Fecha:** 2026-11-06.
- **Pedido:** “No me convence el hero. Agregale unas decoraciones para que no se sienta tan vacío y triste”.
- **Decisión tomada:** se mantiene la estética minimalista y se admite únicamente decoración estructural (retícula hairline, rail mono de focus areas y marcas de esquina). El dueño eligió esa dirección y la intensidad “muy sutil” sobre dos alternativas.
- **Resultado:** resuelto. Specs actualizados, hero implementado, QA sin hallazgos P1/P2, `npm run check` y `npm run build` en verde.
- **Pendiente del usuario:** mirar el resultado en el navegador y confirmar que la intensidad y la altura del rail son las buscadas; ajustar es cambiar opacidades o el ancho del rail. Siguen vigentes los pendientes de contenido e imágenes de la sección 3.

## 10. Cómo actualizar esta memoria

1. Actualizar la fecha del encabezado.
2. Mover a “Funcionalidades implementadas” lo que se completó.
3. Actualizar “Contenido pendiente”, “Errores conocidos” y “Backlog”.
4. Registrar decisiones nuevas y cambios de arquitectura.
5. Reescribir “Última consulta” con el pedido más reciente y su estado.
