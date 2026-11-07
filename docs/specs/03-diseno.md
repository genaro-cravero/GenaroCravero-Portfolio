# Spec 03 — Diseño

> Estado: vigente. Fuente de verdad visual y de interacción.
> Última actualización: 2026-11-07.

## 1. Concepto

“Quiet developer portfolio”: una presencia visual silenciosa, precisa y segura. El contenido manda; el diseño lo ordena. Sin decoración innecesaria, sin efectos que compitan con el trabajo.

Sensaciones buscadas:

- Profesional y sobrio.
- Técnico sin ser frío.
- Editorial, con mucho aire y tipografía protagonista.
- Oscuro, pero legible.
- Un único acento cálido que aparece con moderación.

La única ornamentación admitida es estructural: retícula de líneas de 1 px, marcas de esquina y etiquetas mono. No hay ilustraciones, imágenes decorativas, íconos ilustrados ni efectos de fondo.

## 2. Color

El negro es el color dominante. El acento es un rojo-naranja cálido (“ember”) usado en detalles mínimos: punto del hero, números de sección, líneas, hovers y foco.

| Token | Hex | Uso |
| --- | --- | --- |
| `canvas` | `#080807` | Fondo principal. |
| `surface` | `#0e0e0d` | Cards, menú mobile, superficies. |
| `surface-raised` | `#141412` | Hover de superficies. |
| `line` | `#1f1e1b` | Bordes y separadores. |
| `line-strong` | `#37342e` | Bordes en hover y detalles. |
| `ink` | `#f2f0eb` | Texto principal. |
| `muted` | `#aaa69e` | Texto secundario. |
| `faint` | `#85817a` | Etiquetas, metadatos y texto terciario. |
| `accent` | `#e2603a` | Acento único. |

Reglas:

- No agregar colores nuevos sin actualizar este spec.
- No usar el acento como fondo de bloques grandes.
- No usar gradientes como elemento decorativo principal.
- No usar sombras.
- El blanco puro no se usa como texto; el tono es cálido (`ink`).

## 3. Tipografía

- **Sans:** Geist Sans, para titulares y texto.
- **Mono:** Geist Mono, para etiquetas, números, metadatos y navegación.
- El sitio es dark-only; no hay toggle de tema.

Escala orientativa:

| Rol | Tamaño | Peso | Tracking |
| --- | --- | --- | --- |
| Hero H1 (nombre) | `clamp(2.5rem, 6.2vw, 4.25rem)` | 500 | `-0.04em` |
| Rol del hero | `1.1875rem` a `1.3125rem` | 400 | normal |
| H1 de página | `2.375rem` a `4.75rem` | 500 | `-0.045em` |
| Título de sección | `2rem` a `2.375rem` | 500 | `-0.035em` |
| CTA de contacto | `2.375rem` a `4rem` | 500 | `-0.04em` |
| Cuerpo | `0.9375rem` a `1.1875rem` | 400 | normal |
| About | `1.3125rem` a `1.5625rem` | 400 | normal |
| Etiqueta mono | `11px` | 500 | `0.14em` a `0.24em` |
| Texto auxiliar de card | `0.9375rem` | 400 | normal |

Reglas:

- La escala base de Tailwind se sobreescribe en `@theme` (`globals.css`) para subir cada paso entre 1 y 2 px: `xs` 13 px, `sm` 15 px, `base` 17 px, `lg` 19 px, `xl` 21 px, `2xl` 25 px, `3xl` 32 px, `4xl` 38 px, `5xl` 50 px, `6xl` 64 px, `7xl` 76 px. No asumir los valores por defecto de Tailwind al agregar clases.
- Ningún texto funcional baja de 11 px. Las etiquetas mono usan siempre 11 px; no hay tamaños de 9 o 10 px.

Reglas:

- Titulares con `text-balance`.
- El hero no usa un titular de marketing: el `h1` es el nombre y el rol va como línea secundaria, sin escala de cartel.
- El `h1` del hero usa `leading-[0.95]`.
- Párrafos con ancho máximo de lectura (`max-w-xl` o `max-w-2xl`). El párrafo del hero puede usar `max-w-md` para mantener la lectura corta.
- No usar más de tres tamaños de texto en una misma sección, sin contar las etiquetas mono de metadatos.
- Las etiquetas mono van en mayúsculas.

## 4. Layout

- Ancho máximo: `72rem` (`max-w-6xl`).
- Padding horizontal: `1.5rem` mobile, `2.5rem` desktop.
- Secciones: `5rem` vertical mobile, `7rem` desktop.
- Header: `4rem` de alto, sticky, con borde inferior.
- Separadores: bordes de `1px` con token `line`.
- Radios: solo el punto del hero, el logo y la marca circular del visual; el resto es recto.
- No usar cards con sombra; la jerarquía se logra con borde, fondo y espaciado.

Grillas:

- Proyectos en home: 1 columna mobile, 2 tablet, 3 desktop.
- Proyectos en `/projects`: 1 columna mobile, 2 desktop.
- About: 1 columna mobile, 2 columnas desktop con aside.
- Experiencia: período a la izquierda y contenido a la derecha en desktop.
- Skills: nombre de grupo a la izquierda y lista a la derecha en desktop.
- Estudios: dos columnas en desktop.

## 5. Componentes

### Hero

- Ocupa la primera pantalla de la home (`min-h` del viewport menos el header).
- Fondo con la retícula hairline enmascarada en radial (blanco al 3–4 % de opacidad), la misma textura del placeholder de proyecto. Es la única textura del sitio y no debe leerse como imagen ni reducir la legibilidad del texto que tiene encima.
- `h1` con el nombre de Genaro; debajo, el rol como línea secundaria con punto de acento.
- Propuesta breve en `muted` con ancho de lectura corto (`max-w-md`).
- Bloque inferior con borde: CTAs a proyectos y contacto, y stack en mono alineado a la derecha en desktop.
- Rail de metadatos desde `lg`: columna angosta alineada al borde derecho del contenido, separada con `border-l border-line`, con etiqueta mono `Focus` y `profile.focusAreas` en mono `faint`. No reemplaza al stack ni duplica el bloque inferior. Su borde termina justo en la regla inferior, que ocupa todo el ancho del contenido.
- Marcas de esquina en cruz (`+`) en `faint` a baja opacidad, en las esquinas superior izquierda e inferior derecha del bloque de contenido.
- Toda la decoración es `aria-hidden` y solo puede mostrar datos que ya existen en `src/content/`. No se inventan ubicación, disponibilidad ni fechas.

### Header

- Fondo `canvas` con 85% de opacidad y blur.
- Punto de acento antes del nombre.
- Navegación desktop en mono, mayúsculas, `faint`/`muted` y hover `ink`.
- Mobile: `<details>` con “Menu” y panel desplegable.

### Section

- Etiqueta numérica + línea + nombre.
- Título opcional en sans.
- Acción opcional a la derecha.
- Borde superior.
- Fondo `canvas`.

### ProjectCard

- Visual 4:3 con borde.
- Sin imagen: grilla sutil, círculo central y número grande en mono.
- Categoría arriba a la izquierda.
- Flecha arriba a la derecha.
- Línea de acento abajo a la izquierda que crece en hover.
- Título, año, resumen y stack debajo.
- Hover: borde más claro, título en acento, flecha en acento.
- Toda la card es un único link.

### ProjectVisual

- Placeholder abstracto, no simula una captura.
- Si hay `cover`, se usa `next/image` con `object-cover` y un zoom mínimo en hover.
- La portada del detalle se carga con `preload` porque suele ser el LCP.
- En detalle, proporción 16:9.
- En cards, proporción 4:3.

### ProjectLinks

- Fila de botones debajo del resumen del detalle, antes de la portada.
- Borde `line`, texto mono de 10 px en mayúsculas, hover `line-strong` e `ink`.
- Los links externos muestran `↗` y abren en pestaña nueva con `rel="noreferrer"`.
- Los links internos no abren pestaña nueva y usan `next/link`.
- Sin links, el bloque no se renderiza.

### Experience

- Lista ordenada con borde superior e inferior por ítem.
- Período en mono a la izquierda.
- Rol en sans, empresa y ubicación en mono.
- Highlights con guion de acento.
- Stack en mono.

### Skills

- Lista de definiciones con borde.
- Grupo en mono.
- Skills en texto plano separadas por espacio, sin pills.

### Studies

- Dos grupos: Education y Certifications.
- Cada ítem con título, institución y año.
- Borde inferior por ítem.

### Contact

- Titular grande con segunda línea en `muted`.
- Filas de contacto con borde inferior.
- Email, LinkedIn y GitHub.
- Hover en acento y flecha con desplazamiento mínimo.

### Footer

- Borde superior.
- Copyright, redes y “Back to top”.
- Mono, mayúsculas, `faint`.

## 6. Interacción y motion

- Duración estándar: 150–300 ms.
- Curva de entrada del hero: `cubic-bezier(0.22, 1, 0.36, 1)`, 700 ms.
- El hero aparece con `rise`: opacidad 0→1 y desplazamiento vertical de 1rem.
- Hovers: cambios de color, borde y desplazamientos de 1–2 px.
- La decoración del hero es estática: no tiene animación propia ni infinita.
- No hay animaciones de scroll.
- Respetar `prefers-reduced-motion`: sin animación de entrada y scroll instantáneo.

## 7. Responsive

Breakpoints de Tailwind:

- `sm`: 640 px.
- `md`: 768 px.
- `lg`: 1024 px.

Reglas:

- Mobile first.
- El menú desktop se oculta por debajo de `md`.
- El hero reduce el tamaño con `clamp`.
- El rail de metadatos del hero se oculta por debajo de `lg`.
- La retícula del hero se mantiene en todos los anchos, sin generar scroll.
- Las grillas colapsan a una columna.
- No hay scroll horizontal.
- Los targets táctiles deben tener al menos 44 px de alto cuando sean acciones principales.

## 8. Accesibilidad

- Contraste AA:
  - `ink` sobre `canvas`: alto.
  - `muted` sobre `canvas`: alto.
  - `faint` sobre `canvas`: mínimo AA para texto pequeño.
  - `accent` sobre `canvas`: suficiente para texto y foco.
- Foco visible con outline de acento y offset de 4 px.
- Skip link al contenido principal.
- Header con `nav` y `aria-label`.
- Secciones con `aria-labelledby`.
- Iconos decorativos con `aria-hidden`.
- Imágenes con `alt` significativo.
- Un solo `h1` por página.
- Jerarquía de encabezados sin saltos.
- No depender solo del color para comunicar estado.
- Enlaces externos con `rel="noreferrer"`.

## 9. Reglas visuales

- No usar imágenes de stock.
- No usar emojis en la interfaz.
- No usar más de un acento.
- No usar bordes redondeados grandes.
- No usar sombras.
- No usar animaciones infinitas.
- No usar carruseles.
- No usar gradientes llamativos.
- La retícula hairline del hero y del placeholder es la única textura permitida; no se agregan otras texturas ni patrones.
- La decoración no puede competir con el contenido: sin contraste alto, sin movimiento propio y sin texto nuevo.
- Si se agregan portadas, deben ser capturas reales o arte propio, no mockups genéricos.
