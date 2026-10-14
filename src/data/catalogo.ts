// Catálogo de carreras por escuela y área. El id coincide con el nombre del archivo
// en src/content/carreras/ cuando la carrera ya tiene contenido.
export type CarreraMeta = { id: string; code: string; nombre: string };
export type Area = { nombre: string; carreras: CarreraMeta[] };
export type Escuela = { nombre: string; completo: string; areas: Area[] };

export const ESCUELAS: Escuela[] = [
  { nombre: 'Tecnología', completo: 'Escuela de Tecnología', areas: [
    { nombre: 'Diseño', carreras: [
      { id: 'diseno-indumentaria', code: 'DIT', nombre: 'Licenciatura en Diseño de Indumentaria y Textil' },
      { id: 'diseno-grafico', code: 'LDG', nombre: 'Licenciatura en Diseño Gráfico' },
      { id: 'diseno-industrial', code: 'LDI', nombre: 'Licenciatura en Diseño Industrial' },
    ]},
    { nombre: 'Informática', carreras: [
      { id: 'analista-sistemas', code: 'ASI', nombre: 'Analista de Sistemas' },
      { id: 'informatica', code: 'INF', nombre: 'Ingeniería en Informática' },
      { id: 'lic-sistemas', code: 'LSI', nombre: 'Licenciatura en Sistemas' },
      { id: 'tec-multiplataforma', code: 'TDM', nombre: 'Tecnicatura en Diseño y Desarrollo de Aplicaciones Multiplataforma' },
    ]},
    { nombre: 'Ingeniería', carreras: [
      { id: 'ing-industrial', code: 'IIN', nombre: 'Ingeniería Industrial' },
      { id: 'ing-mecanica', code: 'IME', nombre: 'Ingeniería Mecánica' },
      { id: 'tec-mantenimiento', code: 'TMI', nombre: 'Tecnicatura en Mantenimiento Industrial' },
    ]},
  ]},
  { nombre: 'ECANA', completo: 'Escuela de Ciencias Agrarias, Naturales y Ambientales', areas: [
    { nombre: 'Agronomía', carreras: [{ id: 'ing-agronomica', code: 'IAG', nombre: 'Ingeniería Agronómica' }] },
    { nombre: 'Alimentos', carreras: [
      { id: 'ing-alimentos', code: 'IAL', nombre: 'Ingeniería en Alimentos' },
      { id: 'tec-alimentos', code: 'TPA', nombre: 'Tecnicatura Universitaria en Producción de Alimentos' },
    ]},
    { nombre: 'Genética', carreras: [{ id: 'lic-genetica', code: 'LGE', nombre: 'Licenciatura en Genética' }] },
  ]},
  { nombre: 'Económicas y Jurídicas', completo: 'Escuela de Ciencias Económicas y Jurídicas', areas: [
    { nombre: 'Económicas', carreras: [
      { id: 'contador', code: 'CPN', nombre: 'Contador Público' },
      { id: 'administracion', code: 'LAD', nombre: 'Licenciatura en Administración' },
      { id: 'tec-pymes', code: 'TGP', nombre: 'Tecnicatura en Gestión de PyMEs' },
      { id: 'tec-gestion-publica', code: 'TGU', nombre: 'Tecnicatura en Gestión Pública' },
    ]},
    { nombre: 'Jurídicas', carreras: [{ id: 'abogacia', code: 'ABG', nombre: 'Abogacía' }] },
  ]},
  { nombre: 'Desarrollo Humano', completo: 'Instituto Académico de Desarrollo Humano', areas: [
    { nombre: 'Salud', carreras: [
      { id: 'lic-enfermeria', code: 'LEN', nombre: 'Licenciatura en Enfermería' },
      { id: 'enfermeria-univ', code: 'EUN', nombre: 'Enfermería Universitaria' },
    ]},
  ]},
];

export const todasLasCarreras: CarreraMeta[] = ESCUELAS.flatMap((e) => e.areas.flatMap((a) => a.carreras));
