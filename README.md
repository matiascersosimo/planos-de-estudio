# Planos de estudio

Guías de estudio por carrera y por materia. Hecho con [Astro](https://astro.build).

## Correr en local

```bash
npm install
npm run dev      # http://localhost:4321/planos-de-estudio/
npm run build    # genera /dist
```

## Cómo se organiza

```
src/
  content/
    materias/     # un .md por materia (se escribe una sola vez)
    carreras/     # un .md por carrera con contenido: plan en el frontmatter, intro en el cuerpo
  data/
    catalogo.ts   # escuelas > áreas > carreras (todas, tengan o no contenido)
    site.ts       # nombre del sitio y mail de contacto
  pages/          # rutas: /, /[carrera]/, /[carrera]/[materia]/, /acerca/, /contacto/
  styles/global.css
```

## Agregar una materia

Crear `src/content/materias/algebra-1.md`:

```md
---
nombre: Álgebra I
code: MAT-02
resumen: Matrices, sistemas lineales y espacios vectoriales.
---

## Primer tema
Contenido en Markdown. Los `##` arman la tabla de contenidos.
```

Sin contenido (solo el frontmatter) aparece como "Próximamente".

## Ubicarla en una carrera

En `src/content/carreras/<id-de-carrera>.md`, agregar el id (nombre del archivo) de la materia en el cuatrimestre que corresponda:

```yaml
plan:
  - anio: 1º año
    cuatrimestres:
      - nombre: 1º cuatrimestre
        materias: [analisis-1, algebra-1]
```

Si la misma materia está en varias carreras, se escribe una sola vez y cada carrera la referencia por id. La página de la materia muestra "También forma parte de: ..." automáticamente.

## Sumar una carrera con contenido

1. Verificar que exista en `src/data/catalogo.ts` (todas las de la UNNOBA ya están).
2. Crear `src/content/carreras/<id>.md` con `plan` y una introducción.
3. Opcional: imagen propia en `public/img/` y `imagen: img/archivo.jpg` en el frontmatter (si no, se usa la ilustración por defecto).

Las carreras sin archivo muestran "Ayudanos a completar el sitio" con el contacto.

## Publicar en GitHub Pages

1. En `astro.config.mjs` cambiar `site` (tu usuario) y `base` (nombre del repo).
2. Subir a GitHub y en Settings → Pages elegir "GitHub Actions" como fuente.
3. Cada push a `main` publica solo (`.github/workflows/deploy.yml`).

Antes de publicar, cambiar el mail en `src/data/site.ts`.
