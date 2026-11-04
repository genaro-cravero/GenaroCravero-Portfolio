# AGENTS.md

> Documento de funcionamiento de todos los agentes del proyecto.
> Última actualización: 2026-11-04.

## 1. Propósito

Este repositorio contiene el portfolio personal de Genaro Cravero, un sitio estático, minimalista y bilingüe a nivel de documentación: la interfaz y el contenido público están en inglés; toda la documentación y los archivos Markdown están en español.

El objetivo de este documento es que cualquier agente (o persona) pueda trabajar sin ambigüedades, respetando la arquitectura, el diseño y el flujo de contenido ya definidos.

## 2. Reglas de idioma

- **Todos los archivos `.md` se escriben en español.** Esto incluye `AGENTS.md`, `MEMORY.md`, `SPECS.md`, `README.md`, los specs de `docs/specs/` y cualquier documentación futura.
- **Todo el código se escribe en inglés.** Esto incluye nombres de archivos, componentes, funciones, variables, tipos, clases, comentarios de código, mensajes de error y contenido de los archivos de datos.
- **Todo el contenido visible del sitio está en inglés.** About, proyectos, experiencia, skills, estudios y contacto.
- Los mensajes de commit se escriben en inglés y siguen Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`).
- No se debe traducir código ni contenido público al español, ni documentación al inglés.

## 3. Fuentes de verdad y orden de prioridad

1. `docs/specs/*.md` — contrato funcional, de contenido, diseño, rutas y calidad.
2. `AGENTS.md` — proceso de trabajo y convenciones.
3. `MEMORY.md` — estado actual, pendientes, decisiones y última consulta.
4. `README.md` — guía rápida para personas.

Si hay conflicto entre documentos, gana el spec correspondiente. Si el código contradice un spec, el código es el bug, salvo que el spec se actualice primero con una justificación explícita.

**Ningún cambio de comportamiento se implementa sin un spec que lo respalde.** Si la tarea no está cubierta, el agente debe actualizar el spec antes de escribir código y registrar el cambio en `MEMORY.md`.

## 4. Stack y decisiones fijas

- Next.js 16.4 con App Router, React 19 y TypeScript estricto.
- Tailwind CSS 4 mediante `@tailwindcss/turbopack`.
- Contenido versionado en Git dentro de `src/content/`.
- Sin base de datos, sin CMS, sin autenticación y sin panel de administración.
- Sitio estático generado en build; deploy previsto en Vercel.
- Fuente de tipografía: Geist Sans y Geist Mono con `next/font`.
- Tema oscuro permanente: negro casi puro como color dominante y un único acento cálido.
- Sin librerías de animación, estado global, UI kits ni CSS-in-JS.

Estas decisiones no se cambian sin una consulta explícita del dueño del proyecto y una actualización de `docs/specs/01-producto.md`.

## 5. Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run start      # servir el build
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
npm run check      # lint + typecheck
```

Antes de cerrar cualquier tarea que toque UI, contenido o configuración, ejecutar `npm run check` y `npm run build`.

## 6. Estructura del proyecto

```text
.
├── AGENTS.md
├── MEMORY.md
├── SPECS.md
├── docs/specs/                 # contrato funcional y técnico
├── opencode.json               # configuración de OpenCode
├── .opencode/agents/           # definición de agentes y subagentes
├── src/
│   ├── app/                    # rutas, metadata, SEO, estilos globales
│   ├── components/
│   │   ├── projects/           # tarjeta y visual de proyecto
│   │   ├── sections/           # secciones de la home y contacto
│   │   ├── site/               # header, footer, container, section, JSON-LD
│   │   └── ui/                 # primitivas reutilizables
│   ├── content/                # datos tipados del portfolio
│   └── lib/                    # utilidades y selectores de contenido
└── public/                     # assets estáticos
```

## 7. Convenciones de código

### Arquitectura

- **Server Components por defecto.** Usar `"use client"` solo cuando sea imprescindible y justificarlo.
- El contenido se importa directamente desde `src/content/`. No hay fetching de datos en cliente.
- La lógica de selección y orden vive en `src/lib/`, no dentro de los componentes de presentación.
- Las páginas no deben contener datos duplicados: toda la información viene de `src/content/`.
- Usar `next/link` para navegación interna y `next/image` para imágenes.
- No anidar elementos interactivos (links dentro de links, botones dentro de links).

### TypeScript

- `strict` está activado. No usar `any` ni `@ts-ignore`.
- Los archivos de contenido usan `satisfies` con los tipos de `src/content/types.ts`.
- Los tipos se nombran en inglés y en PascalCase.
- Preferir tipos explícitos en APIs públicas de componentes.

### Nomenclatura

- Componentes y archivos de componentes: `PascalCase` para el componente, `kebab-case` para el archivo.
- Funciones y variables: `camelCase`.
- Constantes de contenido: `camelCase` (por ejemplo `skillGroups`).
- Slugs de proyectos: `kebab-case`, únicos y estables.

### Estilos

- Usar exclusivamente los tokens definidos en `src/app/globals.css` (`canvas`, `surface`, `line`, `ink`, `muted`, `faint`, `accent`).
- No introducir colores hex sueltos en componentes salvo que provengan de datos o metadata técnica.
- No usar sombras, gradientes llamativos, bordes redondeados decorativos ni animaciones largas.
- Mantener la estética minimalista: bordes finos, mucho aire, jerarquía tipográfica y un solo acento.
- Respetar `prefers-reduced-motion`.

### Accesibilidad

- HTML semántico y jerarquía de encabezados correcta.
- Todo control interactivo debe tener foco visible y nombre accesible.
- Los enlaces externos llevan `target="_blank"` y `rel="noreferrer"`.
- Las imágenes necesitan `alt` significativo; si son decorativas, `alt=""`.
- Contraste mínimo AA para texto normal y para etiquetas pequeñas.
- No comunicar información únicamente por color.

### Dependencias

- No agregar dependencias sin justificar el problema, el costo y la alternativa nativa en `MEMORY.md` y en el spec afectado.
- Preferir APIs nativas de Next.js, React y Tailwind antes que paquetes externos.

## 8. Contenido y propiedad

- Solo el dueño del repositorio puede agregar proyectos, experiencia, estudios o skills, porque el contenido se edita en archivos versionados y requiere acceso de escritura.
- El sitio no expone rutas de administración, formularios de carga ni endpoints de escritura.
- Agregar un proyecto no debe requerir tocar componentes: alcanza con editar `src/content/projects.ts` y, opcionalmente, sumar una imagen en `public/images/projects/`.
- Los slugs deben ser únicos. `src/lib/projects.ts` falla en build si detecta duplicados.

## 9. Flujo de trabajo de los agentes

### Orchestrator (principal)

1. Leer `AGENTS.md`, `MEMORY.md` y `SPECS.md` antes de empezar.
2. Leer el spec específico de la tarea.
3. Clasificar la tarea: contenido, frontend, QA o documentación.
4. Planificar y dividir el trabajo en pasos verificables.
5. Delegar en el subagente adecuado:
   - `content-engineer` para datos del portfolio y documentación de contenido.
   - `frontend-engineer` para componentes, páginas, estilos y SEO.
   - `qa-reviewer` para revisión final y verificación.
6. Revisar el resultado, ejecutar las verificaciones y corregir desvíos.
7. Actualizar `MEMORY.md` con el estado final y la última consulta.

### Reglas de delegación

- Una tarea de UI no se delega a `content-engineer` y una tarea de contenido no se delega a `frontend-engineer`.
- `qa-reviewer` nunca edita archivos; solo reporta hallazgos priorizados.
- El Orchestrator no cierra una tarea sin build y checks en verde.
- Si un subagente encuentra una ambigüedad de producto, debe detenerse y reportarla; no inventa requisitos.

### Actualización de la memoria

Al finalizar cada tarea, `MEMORY.md` debe reflejar:

- Qué se hizo.
- Qué se verificó.
- Qué quedó pendiente o roto.
- Qué decisiones se tomaron.
- La última consulta y si se resolvió.

## 10. Definición de terminado

Una tarea está terminada cuando:

- [ ] Cumple el spec correspondiente.
- [ ] `npm run check` pasa sin errores.
- [ ] `npm run build` pasa sin errores.
- [ ] No hay `any`, `@ts-ignore`, links anidados ni imports sin usar.
- [ ] La UI es responsive y accesible por teclado.
- [ ] El contenido nuevo está en inglés y tipado.
- [ ] La documentación afectada está actualizada en español.
- [ ] `MEMORY.md` registra el estado y la última consulta.

## 11. Notas específicas de Next.js 16

- La documentación versionada está en `node_modules/next/dist/docs/`. Consultarla antes de usar APIs nuevas.
- `params` y `searchParams` son Promises en páginas, layouts y metadata.
- `cacheComponents` está activado. No usar `dynamicParams = false`; es incompatible.
- `partialPrefetching` está desactivado para que los slugs no listados devuelvan 404 real. No reactivar sin verificar el status de `/projects/<slug-inexistente>`.
- En rutas dinámicas, el 404 responde con status correcto pero el contenido se completa en el cliente. Es una limitación aceptada de Cache Components.
- `new Date()` y `Date.now()` no se pueden usar directamente durante el prerender. Usar `getSiteTimestamp()` de `src/lib/time.ts`, que está cacheado.
- `generateStaticParams` debe devolver al menos un parámetro cuando hay rutas dinámicas.
- `agentRules` está desactivado en `next.config.ts` para evitar que Next.js agregue bloques en inglés a este archivo.
- No editar archivos generados: `.next/`, `next-env.d.ts`, `tsconfig.tsbuildinfo`.
