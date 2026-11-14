# Planos de estudio

Guías de estudio con Astro. Desarrollo: `npm install`, `npm run dev`. Compilación: `npm run build`. Dirección local: http://localhost:4321/planos-de-estudio/.

## Organización y fuentes

- `src/data/catalogo.ts`: identidad de las 21 carreras del catálogo del proyecto.
- `src/content/carreras/*.md`: plan por carrera, versión, fuente institucional, fecha, nombres locales y alternativas de optativas.
- `src/data/materias-oficiales.json`: registro de 589 códigos de asignatura o requisito de los 20 planes consultados; es metadata, no son 589 manuales.
- `src/content/materias/*.md`: una sola fuente Markdown por materia; hay 45 archivos existentes, 12 con contenido.
- `src/lib/estudios.ts`: cruza planes y manuales, valida referencias y calcula disponibilidad para toda la web.
- `public/planes/`: copias imprimibles HTML y datos JSON de cada versión.
- `Externo/planes-estudio-unnoba-2026-11-14/`: originales HTML descargados, fuentes y huellas SHA-256.

Se consultaron las versiones enlazadas desde https://elegi.unnoba.edu.ar/ el 2026-11-14. Las alternativas se conservan dentro de su requisito, sin convertirlas en materias obligatorias adicionales. Las copias locales no incluyen correlatividades; consultar la fuente oficial para condiciones académicas.

Enfermería Universitaria enlaza el mismo plan P0286-2 de la Licenciatura. Se conserva la referencia con una nota explícita, sin atribuir el plan completo de cinco años al título de tres años.

## Materias compartidas

La identidad se determina por código institucional. Cada carrera referencia el mismo id de asignatura y conserva su denominación local. No se fusionan códigos diferentes por similitud de nombre sin verificar una equivalencia oficial.

El manual se genera una sola vez en `/materias/<id>/`. Las direcciones anteriores `/<carrera>/<id>/` redirigen a esa página y mantienen consulta y fragmento del capítulo. El progreso se guarda por id de materia en el navegador.

Para escribir una guía, buscar el código en `materias-oficiales.json` y crear o completar `src/content/materias/<id>.md` usando exactamente ese id y código. El frontmatter contiene `nombre`, `code` (texto entre comillas para conservar ceros iniciales) y `resumen`. Los encabezados `##` forman las secciones del lector. Para una asignatura nueva, agregar su registro único y referenciarlo desde los períodos del plan correspondiente. Los nombres locales se guardan en `nombresEnPlan`; las alternativas se guardan en `opciones`.

## Visibilidad

Una carrera aparece en portada, buscador y menú cuando alguna asignatura de su plan, incluidas alternativas, tiene un Markdown con cuerpo de contenido. Los archivos con solo frontmatter no cuentan. Actualmente se muestran 9 carreras; las otras 12 conservan sus planes pero no generan páginas públicas vacías. Al completar una guía se recalcula la disponibilidad en el siguiente build.

Cada carrera permite consultar el plan completo o activar «Mostrar solo materias con guía». Las materias pendientes se identifican sin enlaces a manuales vacíos.

## Publicación

La base es `/planos-de-estudio/`. Antes de publicar en GitHub Pages, configurar `site` y `base` en `astro.config.mjs` y revisar el correo en `src/data/site.ts`. El workflow existente publica al enviar cambios a `main`; esta revisión no publica ni envía cambios al remoto.


## Actualización · Equivalencia de Física II

El usuario confirmó el 2026-11-14 que Física II (01295) y Física II para Informática (01487) comparten contenido. `src/data/equivalencias-manuales.json` registra esa indicación y ambas asignaturas abren el único manual `fisica-ii-para-informatica.md`. Se conservan los nombres y códigos originales de cada plan, las descargas oficiales y el progreso del lector por manual. Esta confirmación de contenido no se presenta como resolución institucional de acreditación. Ingeniería Industrial, Ingeniería Mecánica e Ingeniería en Alimentos pasan de 4 a 5 guías disponibles; continúan siendo 12 manuales únicos y 9 carreras visibles. Ahora se generan 50 redirecciones de compatibilidad.
