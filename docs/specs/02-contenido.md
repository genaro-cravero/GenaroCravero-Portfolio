# Spec 02 — Contenido

> Estado: vigente. Fuente de verdad del modelo de datos y del workflow de edición.
> Última actualización: 2026-11-05.

## 1. Principios

- El contenido es código versionado, no datos de una base de datos.
- Agregar contenido no debe requerir tocar componentes ni estilos.
- Todo el contenido visible está en inglés.
- Los comentarios de los archivos de datos están en inglés.
- La documentación que explica cómo editar está en español.
- Solo el dueño del repositorio puede modificar el contenido, porque requiere acceso de escritura.

## 2. Archivos

| Archivo | Responsabilidad |
| --- | --- |
| `src/content/types.ts` | Tipos compartidos del contenido. |
| `src/content/profile.ts` | Nombre, rol, about, email, redes, foco, stack y metadata. |
| `src/content/projects.ts` | Proyectos del portfolio. |
| `src/content/experience.ts` | Experiencia profesional. |
| `src/content/skills.ts` | Grupos de skills. |
| `src/content/studies.ts` | Estudios y certificaciones. |

Los selectores y el orden viven en `src/lib/projects.ts`, `src/lib/format.ts` y `src/lib/site.ts`.

## 3. Tipos

### Profile

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | `string` | Sí | Nombre completo. |
| `role` | `string` | Sí | Rol profesional corto. |
| `tagline` | `string` | Sí | Propuesta breve que se muestra en el hero. |
| `about` | `string` | Sí | Texto de About Me. |
| `email` | `string` | Sí | Email de contacto. |
| `socials` | `SocialLink[]` | Sí | GitHub, LinkedIn y email. |
| `focusAreas` | `string[]` | Sí | Áreas de foco. |
| `stack` | `string[]` | Sí | Stack principal. |
| `description` | `string` | Sí | Descripción SEO del sitio. |
| `keywords` | `string[]` | Sí | Keywords de metadata. |

### SocialLink

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `label` | `string` | Nombre visible. |
| `href` | `string` | URL o `mailto:`. |
| `handle` | `string` | Texto secundario visible. |

### Project

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `slug` | `string` | Sí | Identificador único en kebab-case. |
| `title` | `string` | Sí | Título del proyecto. |
| `summary` | `string` | Sí | Resumen corto para cards y metadata. |
| `category` | `string` | Sí | Categoría visible (por ejemplo `Game Development`). |
| `year` | `number` | Sí | Año de finalización o estado actual. |
| `role` | `string` | Sí | Rol del autor en el proyecto. |
| `status` | `string` | No | Estado visible (`Live`, `Released`, `In development`). |
| `featured` | `boolean` | No | Si aparece en la home. |
| `tech` | `string[]` | Sí | Tecnologías usadas. |
| `description` | `string[]` | Sí | Párrafos del detalle. |
| `highlights` | `string[]` | Sí | Logros o puntos técnicos clave. |
| `links` | `ProjectLink[]` | No | Demo, repositorio, video o tienda. |
| `cover` | `ProjectCover` | No | Imagen de portada. |

### ProjectLink

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `label` | `string` | Texto visible. |
| `href` | `string` | URL externa o interna. |

### ProjectCover

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `src` | `string` | Ruta pública, por ejemplo `/images/projects/ember.jpg`. |
| `alt` | `string` | Texto alternativo significativo. |

### ExperienceEntry

| Campo | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `company` | `string` | Sí | Empresa o estudio. |
| `role` | `string` | Sí | Puesto. |
| `startYear` | `number` | Sí | Año de inicio. |
| `endYear` | `number` | No | Año de fin. Si falta, se muestra `Present`. |
| `location` | `string` | No | Ubicación o modalidad. |
| `summary` | `string` | Sí | Descripción corta del rol. |
| `highlights` | `string[]` | Sí | Logros y responsabilidades. |
| `tech` | `string[]` | No | Tecnologías del rol. |

### SkillGroup

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `title` | `string` | Nombre del grupo. |
| `skills` | `string[]` | Skills del grupo. |

### Study

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `type` | `"degree" \| "certification"` | Define la columna visual. |
| `title` | `string` | Título del estudio o certificación. |
| `institution` | `string` | Universidad u organización emisora. |
| `year` | `string` | Año visible. |
| `href` | `string` | Enlace opcional de verificación. |

## 4. Cómo agregar un proyecto

1. Abrir `src/content/projects.ts`.
2. Agregar un objeto al array `projects`.
3. Elegir un `slug` único en kebab-case.
4. Completar `title`, `summary`, `category`, `year`, `role`, `tech`, `description` y `highlights`.
5. Marcar `featured: true` si debe aparecer en la home.
6. Si hay imagen, guardarla en `public/images/projects/` y completar `cover`.
7. Ejecutar `npm run check` y `npm run build`.

Ejemplo:

```ts
{
  slug: "my-game",
  title: "My Game",
  summary: "A short description used on cards and metadata.",
  category: "Game Development",
  year: 2026,
  role: "Gameplay Programmer",
  status: "Released",
  featured: true,
  tech: ["Unity", "C#"],
  description: [
    "First paragraph of the project detail.",
    "Second paragraph of the project detail.",
  ],
  highlights: [
    "Built the gameplay systems.",
    "Improved performance.",
  ],
  links: [
    { label: "Play", href: "https://example.com" },
  ],
  cover: {
    src: "/images/projects/my-game.jpg",
    alt: "My Game gameplay screenshot",
  },
}
```

Reglas:

- No repetir slugs. El build falla si hay duplicados.
- `summary` debe poder leerse solo, sin el detalle.
- `description` y `highlights` deben estar en inglés.
- No usar links vacíos ni `#`.
- Si no hay links reales, omitir el campo.

## 5. Cómo agregar experiencia

1. Abrir `src/content/experience.ts`.
2. Agregar un objeto al array.
3. Usar `endYear` solo si el rol terminó.
4. Escribir 2 a 4 highlights orientados a impacto.
5. Ejecutar `npm run check`.

El orden es automático: año de inicio descendente.

## 6. Cómo agregar estudios o certificaciones

1. Abrir `src/content/studies.ts`.
2. Agregar un objeto con `type: "degree"` o `type: "certification"`.
3. Completar `title`, `institution` y `year`.
4. Agregar `href` solo si existe una URL pública de verificación.

## 7. Cómo agregar skills

1. Abrir `src/content/skills.ts`.
2. Agregar el skill al grupo existente o crear un grupo nuevo.
3. Mantener grupos cortos y legibles.

## 8. Imágenes

- Ubicación: `public/images/projects/`.
- Formato recomendado: JPG, PNG o WebP.
- Tamaño recomendado: 1600 × 1200 para cards y 1920 × 1080 para detalle.
- Peso recomendado: menor a 400 KB por imagen.
- Siempre completar `alt` en inglés.
- Sin `cover`, el sitio muestra un visual abstracto generado con CSS.

## 9. Validaciones

- `slug` único y no vacío.
- `year` numérico y razonable.
- `tech` y `highlights` no vacíos.
- `cover.src` debe empezar con `/images/projects/`.
- `cover.alt` obligatorio si hay `cover`.
- Enlaces externos con `https://`.
- Sin contenido en español en los datos.

## 10. Propiedad y seguridad

- No hay endpoints de escritura.
- No hay formularios que persistan datos.
- No hay autenticación.
- El control de acceso es el acceso al repositorio y a Vercel.
- Si se necesita edición desde el navegador en el futuro, eso constituye un cambio de producto y requiere un spec nuevo, auth, base de datos y una revisión de seguridad.
