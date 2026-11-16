# Planos de estudio

Un espacio para estudiar, comprender y practicar, organizado por carrera y por materia.

**Planos de estudio** es un proyecto personal de **Matias Gabriel Cersosimo** que reúne guías de estudio y planes de carreras de la Universidad Nacional del Noroeste de la Provincia de Buenos Aires (UNNOBA). La propuesta es acercar el material a quien está aprendiendo: conectar las ideas, explicar las decisiones y ofrecer un recorrido que pueda seguirse a un ritmo propio.

**[Visitar el sitio](https://matiascersosimo.github.io/planos-de-estudio/)**

## Una forma de acompañar el estudio

Una fórmula puede servir para recordar un tema. Aprenderlo requiere entender qué significa, cuándo se puede usar y cómo llegar a una respuesta con ella.

Ese es el criterio que guía el desarrollo y la revisión de los manuales:

- **Empezar por la base.** Recuperar los conocimientos previos necesarios antes de avanzar hacia conceptos nuevos.
- **Mostrar el razonamiento.** Explicar por qué se elige un método y desarrollar los pasos intermedios de los ejemplos.
- **Practicar con autonomía creciente.** Pasar de un ejercicio acompañado a otro con pistas y, finalmente, a una resolución propia.
- **Comprobar lo aprendido.** Incluir respuestas razonadas, condiciones de validez y formas de detectar errores.
- **Consultar sin perder el contexto.** Reunir fórmulas y conceptos en hojas por capítulo, por unidad y en un formulario general.

La profundidad del material importa más que la cantidad de temas publicados. El proyecto sigue creciendo tanto con nuevas materias como con la revisión de las guías existentes.

## Qué ofrece el sitio

- Navegación por carrera, plan de estudios y materia, con acceso a las guías disponibles.
- Un lector con índice, búsqueda de capítulos y opción de lectura continua.
- Registro de secciones estudiadas y posibilidad de retomar la lectura. El progreso se guarda en el navegador, sin una cuenta adicional.
- Ejemplos resueltos, ejercicios, gráficos y material de consulta según la materia.
- Ejemplos de código descargables en las guías de programación que los incluyen.

Las carreras que comparten una materia consultan un mismo manual. Así, las mejoras llegan a todos sus lectores y el contenido se mantiene en un solo lugar. Los planes permiten distinguir las materias con guía de las que todavía están pendientes.

## Diseño y lectura

La identidad visual toma referencias de la arquitectura industrial y el brutalismo: fondo gris, tipografía marcada, líneas simples y una paleta contenida. La organización por capítulos busca que cada sesión de estudio tenga un punto de entrada claro, tanto en computadora como en celular.

## Desarrollo local

El sitio está construido con [Astro](https://astro.build/), TypeScript y contenido en Markdown. Las expresiones matemáticas se muestran con KaTeX.

Con Node.js y npm instalados:

```bash
npm install
npm run dev
```

Abrí [localhost:4321/planos-de-estudio/](http://localhost:4321/planos-de-estudio/).

Para compilar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

### Organización del repositorio

| Ruta | Contenido |
|---|---|
| `src/content/materias/` | Manuales de estudio en Markdown. |
| `src/content/carreras/` | Planes y referencias de cada carrera. |
| `src/data/` | Catálogo, asignaturas, equivalencias de manuales y datos del sitio. |
| `src/pages/` | Páginas y rutas del sitio. |
| `src/styles/` | Estilos de la interfaz y del lector. |
| `public/` | Gráficos, ejemplos descargables y copias de consulta de los planes. |

La publicación se realiza en GitHub Pages mediante el workflow del repositorio al enviar cambios a `master`.

## Autor y contacto

**Matias Gabriel Cersosimo**

[contacto@matiascersosimo.com](mailto:contacto@matiascersosimo.com)

Si encontrás un error, un paso que necesita más explicación o un tema que sería útil incorporar, podés escribirme indicando la materia y el capítulo. Esas observaciones ayudan a mejorar el recorrido para quienes estudien después.

Planos de estudio es una iniciativa estudiantil independiente, sin afiliación oficial con la universidad. Las guías son material de apoyo; para programas vigentes, correlatividades y condiciones de cursada corresponde consultar las fuentes institucionales y las indicaciones de cada cátedra.
