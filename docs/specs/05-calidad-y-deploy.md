# Spec 05 — Calidad y deploy

> Estado: vigente. Fuente de verdad de verificación, performance, accesibilidad y publicación.
> Última actualización: 2026-11-04.

## 1. Definición de terminado

Una tarea se considera terminada cuando:

- [ ] Cumple el spec funcional correspondiente.
- [ ] `npm run check` pasa sin errores.
- [ ] `npm run build` pasa sin errores.
- [ ] No hay `any` ni `@ts-ignore`.
- [ ] No hay imports sin usar.
- [ ] No hay links anidados.
- [ ] La UI es responsive y navegable por teclado.
- [ ] El contenido nuevo está en inglés y tipado.
- [ ] La documentación afectada está actualizada en español.
- [ ] `MEMORY.md` registra el estado y la última consulta.

## 2. Comandos de verificación

```bash
npm run check      # ESLint + TypeScript
npm run build      # build de producción
npm run start      # servir el build
```

Reglas:

- No se cierra una tarea con warnings nuevos de ESLint.
- No se aceptan errores de TypeScript.
- Si el build falla por una API de Next.js 16, se consulta `node_modules/next/dist/docs/` antes de improvisar.

## 3. Calidad de código

- TypeScript `strict`.
- Server Components por defecto; `"use client"` requiere justificación.
- Contenido tipado con `satisfies`.
- Lógica de selección en `src/lib/`.
- Componentes sin datos hardcodeados duplicados.
- Nombres de archivos en `kebab-case`; componentes en `PascalCase`.
- Sin dependencias nuevas sin justificación en `MEMORY.md` y en el spec afectado.

## 4. Performance

Objetivos:

- Sitio completamente estático en producción.
- Sin fetching de datos en cliente.
- Sin JavaScript de terceros.
- Fuentes con `display: "swap"` y subsets `latin`.
- Imágenes con `next/image`, `sizes` correcto y formatos modernos.
- Peso de imagen recomendado menor a 400 KB.
- Lighthouse objetivo: performance ≥ 95 y accesibilidad ≥ 95 en la home (no bloqueante, sí deseable).

Reglas:

- No agregar librerías de animación, estado global ni UI kits.
- Preferir CSS y APIs nativas.
- Evitar imágenes por encima del fold sin `priority`.
- No cargar imágenes que no se muestran.

## 5. Accesibilidad

- Un solo `h1` por página y jerarquía sin saltos.
- Skip link al contenido principal.
- Foco visible con outline de acento.
- Navegación completa por teclado.
- Contraste AA para texto normal y etiquetas pequeñas.
- `aria-label` en navegaciones y regiones.
- Iconos decorativos con `aria-hidden`.
- Imágenes con `alt` significativo o vacío si son decorativas.
- Enlaces externos con `target="_blank"` y `rel="noreferrer"`.
- `prefers-reduced-motion` respetado.
- Sin información comunicada solo por color.

## 6. Responsive

- Mobile first.
- Sin scroll horizontal en 320 px, 375 px, 768 px, 1024 px y 1440 px.
- Menú desktop oculto por debajo de `md`; menú mobile funcional sin JavaScript.
- Targets táctiles de al menos 44 px en acciones principales.
- Tipografía con `clamp` en titulares grandes.

## 7. SEO

- `metadataBase` configurado con `NEXT_PUBLIC_SITE_URL`.
- Títulos y descripciones únicos.
- Canonical por página.
- Open Graph y Twitter card.
- Sitemap y robots.
- JSON-LD `Person` válido.
- `lang="en"` en el documento.
- 404 con status correcto.

## 8. Seguridad

- Sin autenticación, base de datos ni endpoints de escritura.
- Sin formularios que persistan datos.
- Sin secretos en el repositorio.
- `.env*` ignorado salvo `.env.example`.
- El control de acceso es el acceso al repositorio y a Vercel.
- Cualquier futura edición desde el navegador requiere un spec nuevo con auth, base de datos y revisión de seguridad.

## 9. Variables de entorno

| Variable | Requerida | Descripción |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Sí en producción | URL pública sin barra final. Se usa en canonical, sitemap, robots, OG y JSON-LD. |

Fallback local: `https://genaro-cravero.vercel.app`.

## 10. Deploy en Vercel

Pasos:

1. Crear repositorio en GitHub y subir el proyecto.
2. Importar el repositorio en Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output: automático de Next.js.
6. Definir `NEXT_PUBLIC_SITE_URL` con el dominio final.
7. Deploy.
8. Verificar `/`, `/projects`, un detalle de proyecto, `/sitemap.xml`, `/robots.txt` y la OG image.
9. Configurar dominio propio si corresponde.

Reglas:

- No se publica con contenido de ejemplo.
- No se publica sin `NEXT_PUBLIC_SITE_URL` correcta.
- Cada deploy debe pasar el build sin warnings nuevos.

## 11. Checklist previo a publicar

- [ ] Reemplazar `Studio Name` y `Company Name`.
- [ ] Reemplazar `Ember Protocol` y `Hollow Circuit`.
- [ ] Reemplazar `Degree Title`, `University Name`, `Certification Name` e `Issuing Organization`.
- [ ] Revisar links de proyectos.
- [ ] Revisar perfiles de GitHub y LinkedIn.
- [ ] Definir `NEXT_PUBLIC_SITE_URL`.
- [ ] Verificar OG image y favicon.
- [ ] Verificar 404.
- [ ] Verificar navegación por teclado.
- [ ] Verificar mobile real.
- [ ] Ejecutar `npm run check` y `npm run build`.

## 12. Limitaciones conocidas

- El menú mobile con `<details>` no se cierra solo al navegar.
- No hay tests automatizados.
- Los slugs de proyecto inexistentes responden 404, pero el contenido del 404 se renderiza en el cliente porque la ruta dinámica usa Cache Components.
- `partialPrefetching` está desactivado: con el fallback de Partial Prefetching, un slug inexistente respondía 200.
- No hay analytics.
- No hay internacionalización.
- No hay CV descargable.

## 13. Proceso de cambio

1. Identificar el spec afectado.
2. Actualizar el spec con el nuevo contrato y la justificación.
3. Implementar.
4. Verificar con `npm run check` y `npm run build`.
5. Registrar el estado en `MEMORY.md`.
