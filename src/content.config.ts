import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Una materia = un archivo .md. Se escribe una sola vez y se reutiliza en todas las carreras.
// Sin contenido (solo frontmatter) se muestra como "Próximamente".
const materias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materias' }),
  schema: z.object({
    nombre: z.string(),
    code: z.string(),
    resumen: z.string().default(''),
  }),
});

// Una carrera con contenido = un archivo .md (el cuerpo es la introducción).
// El catálogo público incluye solo planes con al menos una guía disponible.
const carreras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/carreras' }),
  schema: z.object({
    planParcial: z.boolean().default(false),
    imagen: z.string().optional(), // ruta dentro de /public, ej: "img/informatica.jpg"
    planVersion: z.string(),
    fuentePlan: z.string().url(),
    paginaOficial: z.string().url(),
    consultaPlan: z.string(),
    archivoPlan: z.string(),
    datosPlan: z.string(),
    notaPlan: z.string().default(''),
    nombresEnPlan: z.record(z.string(), z.string()).default({}),
    opciones: z.record(z.string(), z.array(z.string())).default({}),
    plan: z.array(
      z.object({
        anio: z.string(),
        cuatrimestres: z.array(z.object({ nombre: z.string(), materias: z.array(z.string()) })),
      }),
    ),
  }),
});

export const collections = { materias, carreras };
