# Spec 04 — Rutas y páginas

> Estado: vigente. Fuente de verdad del mapa de rutas, la composición de páginas y el SEO.
> Última actualización: 2026-11-05.

## 1. Mapa de rutas

| Ruta | Tipo | Render | Archivo |
| --- | --- | --- | --- |
| `/` | Home de una sola página | Estático | `src/app/page.tsx` |
| `/projects` | Listado completo de proyectos | Estático | `src/app/projects/page.tsx` |
| `/projects/[slug]` | Detalle de proyecto | Estático por `generateStaticParams` | `src/app/projects/[slug]/page.tsx` |
| `/_not-found` | 404 | Estático | `src/app/not-found.tsx` |
| `/opengraph-image` | Imagen Open Graph | Generada | `src/app/opengraph-image.tsx` |
| `/icon.svg` | Favicon | Estático | `src/app/icon.svg` |
| `/sitemap.xml` | Sitemap | Generado | `src/app/sitemap.ts` |
| `/robots.txt` | Robots | Generado | `src/app/robots.ts` |

No existen rutas de administración, autenticación, API de escritura ni formularios con backend.

## 2. Home (`/`)

Composición exacta, en este orden:

1. `Hero` — nombre como `h1`, rol, propuesta breve, CTAs y stack principal.
2. `AboutSection` — texto de About provisto por el dueño + foco + stack.
3. `SelectedWorkSection` — hasta tres proyectos destacados.
4. `ExperienceSection` — experiencia ordenada por año de inicio descendente.
5. `SkillsSection` — grupos de skills.
6. `StudiesSection` — educación y certificaciones en dos columnas.
7. `ContactSection` — email, LinkedIn y GitHub.

Reglas:

- Anclas estables: `#about`, `#work`, `#experience`, `#skills`, `#studies`, `#contact`.
- Un solo `h1` en el hero y su contenido es el nombre de Genaro.
- El rol se muestra como línea secundaria; no hay titular de marketing ni frase de efecto.
- Las secciones usan `aria-labelledby` con el id del encabezado.
- Los CTAs del hero apuntan a `/projects` y `/#contact`.
- La home no debe contener datos duplicados: todo viene de `src/content/`.

## 3. Listado de proyectos (`/projects`)

Contenido:

- Encabezado de página con etiqueta, `h1` y descripción breve.
- Grilla con todos los proyectos ordenados por año descendente y título ascendente.
- Cada card enlaza a `/projects/[slug]`.
- Estado vacío: mensaje “Projects are being prepared. Check back soon.”
- Enlace de vuelta a la home.

Reglas:

- Una columna en mobile, dos en desktop.
- El `h1` no repite el nombre del sitio.
- Canonical: `/projects`.

## 4. Detalle de proyecto (`/projects/[slug]`)

Contenido:

1. Enlace de vuelta a `/projects`.
2. Cabecera con categoría, año, título, resumen y links opcionales (trailer, demo, repositorio, tienda).
3. Visual (portada o placeholder).
4. Descripción en párrafos.
5. Highlights.
6. Aside con año, rol, estado opcional y stack.
7. Navegación al siguiente proyecto (circular sobre el listado ordenado).

Reglas:

- `generateStaticParams` devuelve un parámetro por proyecto.
- Un slug inexistente llama a `notFound()` y responde con status 404. El HTML inicial es el shell de error de Next.js; el contenido del 404 se completa en el cliente.
- `partialPrefetching` está desactivado para que los params no listados devuelvan un 404 real en lugar de un 200 con shell parcial.
- Metadata propia con `title`, `description`, canonical y Open Graph `article`.
- Los links se muestran en la cabecera, debajo del resumen, antes de la portada.
- Si hay `cover`, la metadata Open Graph y Twitter usa la URL absoluta de la portada; si no, usa la imagen OG generada.
- El visual usa proporción 16:9 y `sizes` adecuado.
- Los links externos abren en pestaña nueva con `rel="noreferrer"`.
- No se usa `dynamicParams = false`: es incompatible con `cacheComponents`.

## 5. Navegación

- Header sticky de `4rem` con nombre, navegación desktop y menú mobile.
- Navegación principal: About (`/#about`), Projects (`/projects`), Experience (`/#experience`), Contact (`/#contact`).
- Footer con copyright, GitHub, LinkedIn y “Back to top”.
- Todo enlace interno usa `next/link`.
- No se anidan elementos interactivos.

## 6. Metadata

### Global (`src/app/layout.tsx`)

- `metadataBase` con `siteUrl`.
- Título: `{name} — {role}` con template `%s — {name}`.
- Descripción, keywords, autor, creador y publisher desde `profile`.
- Canonical `/`.
- Open Graph `website`, locale `en_US`, `siteName`.
- Twitter `summary_large_image`.
- `viewport` con `themeColor: #080807` y `colorScheme: dark`.

### Por página

- `/projects`: título `Projects`, descripción y canonical.
- `/projects/[slug]`: título del proyecto, resumen, canonical y Open Graph.
- 404: título `Page not found`.

## 7. Datos estructurados

- La home incluye JSON-LD `Person`.
- Campos: `name`, `jobTitle`, `description`, `email`, `url`, `sameAs`, `knowsAbout`.
- `sameAs` se arma con los socials que empiezan con `http`.
- `knowsAbout` combina stack y áreas de foco sin duplicados.

## 8. Sitemap y robots

- `sitemap.xml` incluye home, `/projects` y cada proyecto.
- `lastModified` usa `getSiteTimestamp()`.
- Frecuencias: `monthly` para home y listado, `yearly` para proyectos.
- `robots.txt` permite todo y declara el sitemap.

## 9. Open Graph image

- Generada con `next/og`, 1200 × 630.
- Fondo `#080807`, nombre, rol y dominio.
- Debe mantenerse legible en recortes sociales.
- No incluye texto en español.

## 10. Estados y errores

| Caso | Comportamiento |
| --- | --- |
| Sin proyectos | `/projects` muestra estado vacío; la home oculta la grilla o muestra el mismo mensaje. |
| Proyecto inexistente | 404 con enlace a la home. |
| Proyecto sin links | La sección de links no se renderiza. |
| Proyecto sin portada | Se usa el visual abstracto CSS. |
| Proyecto sin estado | El campo no aparece en el aside. |
| Experiencia sin fin | Se muestra `Present`. |
| Estudios sin certificaciones | La columna se omite. |

## 11. Criterios de aceptación

- [ ] Todas las rutas del mapa existen y compilan.
- [ ] Cada proyecto tiene una página estática generada.
- [ ] La home respeta el orden de secciones.
- [ ] Las anclas funcionan desde el header y el footer.
- [ ] La metadata es única por página.
- [ ] Sitemap, robots, OG image y JSON-LD están presentes.
- [ ] No hay rutas de administración ni endpoints de escritura.
