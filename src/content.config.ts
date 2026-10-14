import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Una materia = un archivo .md. Se escribe una sola vez y se reutiliza en todas las carreras.
// Sin contenido (solo frontmatter) se muestra como "Próximamente".
const materias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materias' }),
  schema: z.object({
    nombre: z.string(),
    code: z.string(),
    resumen: z.string(),
  }),
});

// Una carrera con contenido = un archivo .md (el cuerpo es la introducción).
// Las carreras sin archivo siguen apareciendo en el catálogo como "Próximamente".
const carreras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/carreras' }),
  schema: z.object({
    planParcial: z.boolean().default(false),
    imagen: z.string().optional(), // ruta dentro de /public, ej: "img/informatica.jpg"
    plan: z.array(
      z.object({
        anio: z.string(),
        cuatrimestres: z.array(z.object({ nombre: z.string(), materias: z.array(z.string()) })),
      }),
    ),
  }),
});

export const collections = { materias, carreras };
