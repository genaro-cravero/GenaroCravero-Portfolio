# Spec 01 — Producto

> Estado: vigente. Fuente de verdad del alcance funcional.
> Última actualización: 2026-11-05.

## 1. Visión

Crear un portfolio personal que presente de forma clara, rápida y creíble el perfil de Genaro Cravero como software developer con foco en Unity, C# y videojuegos, sin descuidar su experiencia en aplicaciones web con React, Node.js y Next.js.

El sitio debe sentirse como una herramienta de trabajo, no como una plantilla genérica: tipografía cuidada, mucho espacio, contenido directo y una identidad visual oscura y minimalista.

## 2. Problema que resuelve

Un reclutador, estudio o colaborador necesita entender en pocos segundos:

- Quién es Genaro.
- Qué sabe hacer.
- Qué construyó.
- Dónde trabajó.
- Cómo contactarlo.

El portfolio concentra esa información en una experiencia corta, navegable y sin ruido.

## 3. Audiencia

- Reclutadores técnicos y de talento.
- Estudios de videojuegos y equipos de producto.
- Posibles clientes o colaboradores freelance.
- Colegas developers que quieren ver trabajo y contacto.

## 4. Objetivos

1. Presentar el perfil profesional con claridad en la home.
2. Mostrar proyectos con suficiente contexto para evaluar el trabajo.
3. Mostrar experiencia, skills y estudios de forma escaneable.
4. Facilitar el contacto por email, LinkedIn o GitHub.
5. Permitir que el dueño agregue proyectos y experiencia sin tocar componentes.
6. Mantener una experiencia rápida, accesible y visualmente consistente.

## 5. No objetivos

- No es un blog.
- No es una red social.
- No es un CMS multiusuario.
- No tiene registro, login ni panel de administración.
- No tiene base de datos ni endpoints de escritura.
- No tiene internacionalización ni selector de idioma.
- No tiene e-commerce, pagos ni descargas pagas.
- No tiene comentarios ni formulario de contacto con backend.

## 6. Restricciones

- El sitio público está en inglés.
- La documentación está en español.
- El contenido se versiona en Git y solo el dueño puede editarlo.
- El deploy objetivo es Vercel.
- El sitio debe ser estático siempre que sea posible.
- La estética debe ser minimalista y el negro debe predominar.

## 7. User stories y criterios de aceptación

### US-01 — Entender el perfil

**Como** visitante, **quiero** ver quién es Genaro y a qué se dedica en la primera pantalla, **para** decidir si vale la pena seguir explorando.

Criterios:

- [ ] El hero muestra el nombre como `h1`, el rol como línea secundaria y una propuesta breve.
- [ ] El nombre es el elemento dominante del hero; no hay titular de marketing de gran escala.
- [ ] Hay un CTA hacia proyectos y otro hacia contacto.
- [ ] La home incluye el texto de About provisto por el dueño.
- [ ] El stack principal es visible sin hacer scroll excesivo.

### US-02 — Explorar proyectos

**Como** visitante, **quiero** ver una selección de proyectos y entrar al detalle de cada uno, **para** evaluar la calidad y el tipo de trabajo.

Criterios:

- [ ] La home muestra proyectos destacados.
- [ ] Existe `/projects` con todos los proyectos.
- [ ] Cada proyecto tiene una página `/projects/[slug]`.
- [ ] El detalle incluye resumen, descripción, highlights, rol, año, stack y estado.
- [ ] Los links externos, si existen, se abren en una pestaña nueva.
- [ ] Agregar un proyecto solo requiere editar `src/content/projects.ts`.

### US-03 — Revisar experiencia y formación

**Como** reclutador, **quiero** ver experiencia, skills y estudios, **para** validar el background profesional.

Criterios:

- [ ] Experience muestra rol, empresa, período, resumen, logros y tecnologías.
- [ ] Skills está agrupado por categoría.
- [ ] Studies and Certifications separa educación de certificaciones.
- [ ] La información es escaneable en mobile y desktop.

### US-04 — Contactar

**Como** visitante, **quiero** contactar a Genaro, **para** iniciar una conversación profesional.

Criterios:

- [ ] El email es un enlace `mailto:`.
- [ ] LinkedIn y GitHub están enlazados y son accesibles.
- [ ] El footer repite los accesos sociales.
- [ ] No hay formularios ni backend de contacto.

### US-05 — Administrar contenido

**Como** dueño del portfolio, **quiero** agregar proyectos y experiencia editando archivos, **para** mantener el sitio actualizado sin infraestructura extra.

Criterios:

- [ ] Todo el contenido vive en `src/content/`.
- [ ] Los tipos están definidos en `src/content/types.ts`.
- [ ] Los slugs duplicados fallan en build con un mensaje claro.
- [ ] El orden de proyectos y experiencia se calcula automáticamente.
- [ ] Las imágenes opcionales viven en `public/images/projects/`.

### US-06 — Navegar con accesibilidad

**Como** visitante que usa teclado o lector de pantalla, **quiero** navegar el sitio sin barreras, **para** acceder a la información.

Criterios:

- [ ] Hay un skip link.
- [ ] El foco es visible en todos los controles.
- [ ] Los encabezados siguen una jerarquía lógica.
- [ ] Los enlaces tienen nombres accesibles.
- [ ] Se respeta `prefers-reduced-motion`.
- [ ] El contraste cumple AA.

## 8. Alcance del MVP

Incluido:

- Home con seis secciones.
- Listado y detalle de proyectos.
- Contenido tipado y editable por Git.
- Metadata y SEO técnico.
- Diseño responsive.
- Documentación y agentes.

Fuera del MVP:

- CMS o panel admin.
- Autenticación.
- Base de datos.
- Formulario de contacto.
- Blog.
- Analytics.
- Tests E2E.

## 9. Métricas de éxito

- Build de producción sin errores.
- Lighthouse de performance y accesibilidad ≥ 95 en la home (objetivo, no bloqueante).
- Sin errores de consola en producción.
- Tiempo de lectura del perfil menor a 2 minutos.
- Contacto accesible en un clic desde cualquier sección.

## 10. Riesgos y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| El contenido de ejemplo se publica por error. | `MEMORY.md` lo marca como pendiente crítico y el README lo advierte. |
| El sitio se vuelve pesado por imágenes. | `next/image`, formatos modernos y portadas opcionales. |
| Se agrega un CMS por comodidad y se rompe la simplicidad. | Decisión fija documentada en `AGENTS.md`; requiere consulta explícita. |
| La estética se degrada con colores o efectos nuevos. | Tokens cerrados y spec de diseño. |
| El contenido se desactualiza. | Workflow de edición simple y `MEMORY.md` como estado. |

## 11. Evolución futura

- Portadas reales por proyecto.
- OG images por proyecto.
- CV descargable.
- Dominio propio.
- Analytics privacy-first.
- Tests E2E si crece la cantidad de páginas.
