# SPECS.md — Índice de especificaciones

> Contrato principal del proyecto. Los specs detallados viven en `docs/specs/` y son la fuente de verdad funcional y técnica.
> Última actualización: 2026-11-04.

## 1. Jerarquía documental

1. `docs/specs/*.md` — comportamiento esperado, modelo de contenido, diseño, rutas y calidad.
2. `AGENTS.md` — proceso, convenciones y reglas de los agentes.
3. `MEMORY.md` — estado actual, decisiones, pendientes y última consulta.
4. `README.md` — guía operativa para personas.

Si el código contradice un spec, el código es el bug. Si el negocio cambió, se actualiza el spec primero y luego el código.

## 2. Alcance del MVP

Sitio personal estático, en inglés, con estética oscura y minimalista, que presenta:

- About Me.
- Proyectos, con página de listado y detalle por proyecto.
- Experiencia.
- Skills.
- Studies and Certifications.
- Contacto (email, LinkedIn, GitHub).

El contenido se administra en archivos tipados versionados en Git. No hay CMS, autenticación, base de datos ni endpoints de escritura.

## 3. Especificaciones

| Documento | Contenido | Estado |
| --- | --- | --- |
| [`docs/specs/01-producto.md`](docs/specs/01-producto.md) | Visión, objetivos, alcance, user stories y criterios de aceptación. | Vigente |
| [`docs/specs/02-contenido.md`](docs/specs/02-contenido.md) | Modelo de datos, cómo agregar proyectos y experiencia, validaciones. | Vigente |
| [`docs/specs/03-diseno.md`](docs/specs/03-diseno.md) | Sistema de diseño, tokens, tipografía, componentes, motion y accesibilidad. | Vigente |
| [`docs/specs/04-rutas-y-paginas.md`](docs/specs/04-rutas-y-paginas.md) | Mapa de rutas, secciones, metadata, SEO y estados vacíos. | Vigente |
| [`docs/specs/05-calidad-y-deploy.md`](docs/specs/05-calidad-y-deploy.md) | Calidad, performance, checklist de deploy y limitaciones. | Vigente |

## 4. Requisitos no negociables

- El sitio está en inglés; la documentación en español.
- El negro es el color dominante.
- La estética es minimalista.
- El contenido solo lo puede modificar el dueño mediante Git.
- Agregar un proyecto o experiencia no requiere tocar componentes.
- El sitio debe ser estático, rápido y accesible.
- Sin dependencias innecesarias.
- Sin CMS, auth ni base de datos.

## 5. Criterios de aceptación globales

- [ ] `npm run check` pasa.
- [ ] `npm run build` pasa.
- [ ] La home incluye las seis secciones requeridas en el orden definido.
- [ ] Cada proyecto tiene una página de detalle generada estáticamente.
- [ ] El contenido se edita solo en `src/content/`.
- [ ] El diseño respeta los tokens y la estética definida.
- [ ] La navegación por teclado y el foco visible funcionan.
- [ ] El sitio es responsive en mobile, tablet y desktop.
- [ ] Metadata, sitemap, robots, JSON-LD y Open Graph están presentes.

## 6. Proceso de cambio

1. Identificar el spec afectado.
2. Actualizar el spec con el nuevo contrato y la justificación.
3. Implementar el cambio.
4. Verificar con `npm run check` y `npm run build`.
5. Registrar el cambio y el estado en `MEMORY.md`.

No se aceptan cambios de alcance que solo existan en el código.
