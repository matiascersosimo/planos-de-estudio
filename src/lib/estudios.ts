import { getCollection, type CollectionEntry } from 'astro:content';
import asignaturas from '../data/materias-oficiales.json';
import equivalencias from '../data/equivalencias-manuales.json';
import { ESCUELAS, todasLasCarreras } from '../data/catalogo';

export type Carrera = CollectionEntry<'carreras'>;

/** Incluye las alternativas publicadas, sin convertirlas en requisitos adicionales. */
export function idsDeCarrera(carrera: Carrera): Set<string> {
  return new Set([
    ...carrera.data.plan.flatMap(a => a.cuatrimestres.flatMap(q => q.materias)),
    ...Object.values(carrera.data.opciones).flat(),
  ]);
}

/** Los planes guardan referencias; el contenido existe solo en materias/*.md. */
export async function getEstudios() {
  const [carreras, manuales] = await Promise.all([getCollection('carreras'), getCollection('materias')]);
  const porId = new Map(manuales.map(m => [m.id, m]));
  const compartidos = new Map(equivalencias.map(e => [e.asignatura, e.manual]));
  if (compartidos.size !== equivalencias.length) throw new Error('Equivalencia de manual duplicada');
  for (const e of equivalencias) {
    if (!asignaturas.some(a => a.id === e.asignatura) || !porId.get(e.manual)?.body?.trim()) {
      throw new Error(`Equivalencia de manual inválida: ${e.asignatura}`);
    }
    if (porId.get(e.asignatura)?.body?.trim()) throw new Error(`La equivalencia duplicaría contenido: ${e.asignatura}`);
  }
  const codigos = new Set<string>();
  const materias = new Map(asignaturas.map(a => {
    if (codigos.has(a.code)) throw new Error(`Código institucional duplicado: ${a.code}`);
    codigos.add(a.code);
    const propio = porId.get(a.id);
    if (propio && propio.data.code !== a.code) throw new Error(`Código diferente en la guía ${a.id}`);
    const manualId = compartidos.get(a.id) ?? a.id;
    const manual = porId.get(manualId) ?? null;
    return [a.id, {
      id: a.id,
      manualId,
      data: { nombre: a.nombre, code: a.code, resumen: manual?.data.resumen ?? '' },
      manual,
      disponible: Boolean(manual?.body?.trim()),
    }] as const;
  }));
  for (const manual of manuales) {
    if (!materias.has(manual.id)) throw new Error(`Guía sin asignatura en el catálogo oficial: ${manual.id}`);
  }
  const fichas = carreras.map(entry => {
    const meta = todasLasCarreras.find(c => c.id === entry.id);
    if (!meta) throw new Error(`Carrera desconocida: ${entry.id}`);
    const ids = idsDeCarrera(entry);
    for (const id of ids) if (!materias.has(id)) throw new Error(`Referencia inexistente en ${entry.id}: ${id}`);
    const guias = new Set([...ids].filter(id => materias.get(id)!.disponible).map(id => materias.get(id)!.manualId)).size;
    return { ...meta, entry, guias };
  });
  const disponibles = fichas.filter(c => c.guias > 0);
  const activas = new Set(disponibles.map(c => c.id));
  const escuelas = ESCUELAS.map(e => ({ ...e, areas: e.areas
    .map(a => ({ ...a, carreras: a.carreras.filter(c => activas.has(c.id)) }))
    .filter(a => a.carreras.length > 0),
  })).filter(e => e.areas.length > 0);
  return { materias, fichas, disponibles, activas, escuelas };
}
