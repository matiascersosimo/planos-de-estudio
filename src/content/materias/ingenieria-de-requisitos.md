---
nombre: "Ingeniería de Requisitos"
code: "01478"
resumen: "Factibilidad, elicitación, análisis, especificación, validación, administración, ERS, casos de uso y pruebas."
---

## Cómo estudiar este manual y alcance de las fuentes

Este manual desarrolla los temas identificados en las dieciséis semanas del [aula de Ingeniería de Requisitos 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11079). Se verificaron las descripciones semanales y las referencias que presenta el aula. La lectura completa de los PDF y las grabaciones sigue pendiente: este documento es un **borrador de estudio original**, no una transcripción ni una certificación de cobertura total del programa. Los casos y las respuestas son propios; no corresponden a entregas oficiales.

La secuencia sugerida es comprender el problema, estudiar cómo obtener evidencia, transformar esa evidencia en requisitos, construir modelos y verificar que todo pueda evaluarse. No conviene empezar por una plantilla: una plantilla vacía no descubre qué necesita una organización.

Usaremos un caso continuo: **ReservaLab**, un sistema para reservar equipamiento de un laboratorio universitario. Participan estudiantes, docentes, responsables del laboratorio y personal que mantiene los equipos. El problema inicial es que las reservas se anotan en varias planillas y aparecen superposiciones. El objetivo de negocio es reducir esas superposiciones sin impedir el acceso a quienes necesitan el equipamiento.

Antes de avanzar, distinguí cuatro elementos: el problema observado, el objetivo buscado, el comportamiento exigido al sistema y una posible solución técnica. «Hay reservas superpuestas» es un problema. «Reducir las superposiciones» es un objetivo. «Rechazar reservas incompatibles» es un requisito candidato. «Usar una base de datos determinada» es una decisión técnica, salvo que una restricción real la imponga.

## El proceso de ingeniería de requisitos

La ingeniería de requisitos comprende actividades para descubrir, analizar, documentar, validar y mantener las necesidades y restricciones de un sistema. No termina cuando se escribe una lista: las necesidades cambian, aparecen contradicciones y una interpretación inicial puede resultar incorrecta.

Las actividades se retroalimentan. Una entrevista produce candidatos; el análisis detecta un conflicto; una reunión aclara la política; la especificación registra el acuerdo; la validación descubre un caso excepcional y obliga a revisar la entrevista. Por eso, representar el proceso como una única secuencia rígida oculta una parte importante del trabajo.

Los productos deben permitir responder: quién pidió algo, qué problema resuelve, qué significa exactamente, cómo se comprobará y qué otros elementos dependen de ello. Una buena documentación conserva la razón de las decisiones, además de su resultado.

En ReservaLab, «no debe haber superposiciones» todavía es ambiguo. ¿Una reserva bloquea un equipo específico o una categoría? ¿El tiempo de limpieza ocupa el recurso? ¿Los intervalos que se tocan se consideran superpuestos? ¿Una reserva cancelada bloquea? Cada pregunta muestra que comprender el dominio es parte del trabajo técnico.

### Actividad resuelta

Se recibe el pedido «queremos una aplicación moderna para reservar». Primero se pide un ejemplo de una falla reciente. Aparece una doble reserva de un osciloscopio. Luego se identifica su consecuencia: una práctica se suspendió. Se consulta cómo se decide la disponibilidad y quién puede autorizar excepciones. Finalmente se redacta un objetivo y se separan las preguntas abiertas de los requisitos acordados. El resultado inicial es una descripción verificable del problema, no una elección prematura de tecnología.

## Estudio de factibilidad y definición del alcance

La factibilidad estudia si conviene y si se puede realizar una propuesta bajo las condiciones del proyecto. Debe considerar capacidades técnicas, recursos económicos, funcionamiento organizacional y tiempo disponible. No basta demostrar que existe una tecnología capaz de resolver el problema: también deben existir medios para adoptarla, operarla y mantenerla.

En la dimensión técnica se analiza la integración con los sistemas existentes, conectividad, disponibilidad de datos y competencias del equipo. En la económica se comparan costos y beneficios bajo supuestos explícitos. En la operativa se estudia si los usuarios podrán incorporar el proceso. En la temporal se determina si el alcance puede entregarse dentro del plazo.

Una conclusión útil no dice simplemente «viable». Explica bajo qué condiciones lo es. ReservaLab podría ser técnicamente realizable, pero depender de una integración institucional que no estará disponible durante el cuatrimestre. Una alternativa es un prototipo que simule esa integración. Debe quedar claro que demostrar el flujo con datos simulados no equivale a completar la integración real.

El alcance define qué problemas se atenderán y qué responsabilidades quedan fuera. Para una primera entrega pueden incluirse consulta de disponibilidad, creación de reservas, cancelación y bloqueo de equipos en mantenimiento. Comprar equipos, facturar servicios externos o administrar inventarios completos pueden quedar fuera. Un elemento excluido debe registrarse para evitar expectativas incompatibles.

### Comparación de alternativas

| Alternativa | Beneficio | Costo o límite a investigar |
|---|---|---|
| Mantener una sola planilla compartida | Adopción rápida | Control de concurrencia y trazabilidad insuficientes |
| Adaptar una herramienta existente | Menor desarrollo propio | Encaje de políticas, integración y mantenimiento |
| Desarrollar ReservaLab | Control sobre las reglas específicas | Mayor esfuerzo y responsabilidad de operación |

La evaluación exige criterios comunes. Si una alternativa se juzga por costo inicial y otra por costo total, la comparación resulta engañosa. Los números hipotéticos deben identificarse como estimaciones y acompañarse de sus supuestos.

## Interesados, fuentes y técnicas de elicitación

Un interesado puede usar el sistema, financiarlo, administrarlo, regular su funcionamiento o verse afectado por él. No todos tienen la misma información ni los mismos objetivos. El responsable desea evitar conflictos, el estudiante necesita reservar rápido y mantenimiento requiere bloquear equipos. Entrevistar solamente a quien aprueba el proyecto deja necesidades sin explorar.

Las fuentes incluyen personas, formularios, procedimientos, sistemas anteriores, registros de incidentes y observación del trabajo. La triangulación consiste en contrastar fuentes: una entrevista puede describir el procedimiento formal mientras la observación revela cómo se resuelven las excepciones.

**Entrevistas.** Se preparan objetivos y preguntas abiertas. «Contame la última vez que una reserva salió mal» aporta más evidencia que «¿te parece bien que agreguemos un calendario?». Conviene separar hechos, opiniones y propuestas. Al terminar se devuelve un resumen para confirmar la interpretación.

**Observación.** Permite detectar acciones tácitas, interrupciones y diferencias entre la norma y la práctica. Hay que registrar contexto y límites: observar una mañana tranquila no demuestra qué sucede en una semana de exámenes.

**Cuestionarios.** Son útiles para recoger respuestas comparables de muchos participantes. Requieren preguntas claras, opciones coherentes y cuidado con conclusiones que excedan la muestra. Una preferencia mayoritaria no anula una necesidad crítica de una minoría.

**Talleres.** Reúnen a varios interesados para negociar términos y resolver conflictos. Necesitan facilitación y un registro de acuerdos, desacuerdos y responsables. Sin esos elementos pueden producir una conversación extensa sin decisiones utilizables.

**Prototipos y escenarios.** Hacen visibles interpretaciones. Mostrar cómo se cancelaría una reserva puede revelar que el equipo debe liberarse inmediatamente y que el usuario necesita una confirmación. Debe aclararse qué parte es ilustrativa y qué decisiones siguen abiertas.

### Guía de entrevista para ReservaLab

1. ¿Cómo se solicita hoy un equipo y qué información se registra?
2. ¿Qué condiciones hacen que una solicitud se rechace?
3. ¿Cómo se gestionan daños, mantenimiento y ausencias?
4. ¿Quién autoriza excepciones y cómo quedan documentadas?
5. ¿Qué significa que una reserva esté confirmada?
6. ¿Qué evidencia necesitarían para considerar mejorado el proceso?

Después de entrevistar, cada hallazgo debe tener fuente y fecha. «Todos quieren notificaciones» no es un hallazgo verificable si no se conoce quién lo afirmó y en qué contexto.

## Requisitos funcionales, de calidad y restricciones

Un requisito funcional describe un comportamiento o servicio. Un requisito no funcional puede expresar una cualidad, una restricción o una condición aplicable al sistema o a su proceso. La etiqueta es útil, pero no reemplaza una redacción evaluable. La seguridad, por ejemplo, puede originar tanto funciones de autorización como exigencias de protección y registro.

Un requisito debe expresar una obligación clara, con condiciones relevantes y un resultado observable. «El sistema será rápido y fácil» no permite acordar una prueba. «El 95 % de las consultas de disponibilidad finalizará en menos de dos segundos con cien sesiones concurrentes, bajo el conjunto de datos y entorno de prueba acordados» define un objetivo medible. Esos números son un **ejemplo didáctico**, no valores extraídos de la cátedra ni de mediciones reales.

### Catálogo inicial del caso

| ID | Requisito candidato | Cómo comprobarlo |
|---|---|---|
| RF-01 | Permitir consultar disponibilidad de un equipo por intervalo | Consultar un intervalo con y sin reservas |
| RF-02 | Rechazar una reserva cuyo intervalo se superponga con otra activa del mismo equipo | Intentar dos reservas incompatibles |
| RF-03 | Permitir al titular cancelar una reserva futura | Cancelar una reserva y consultar disponibilidad |
| RF-04 | Impedir reservar equipos bloqueados por mantenimiento | Intentar reservar durante un bloqueo |
| RC-01 | Satisfacer el objetivo de tiempo de respuesta bajo carga acordada | Ejecutar una prueba de carga reproducible |

Los términos «activa», «futura» y «superposición» necesitan definiciones. Si se usan intervalos semiabiertos, una reserva de 10 a 11 y otra de 11 a 12 no se superponen. Dos intervalos se superponen cuando el inicio de cada uno es anterior al final del otro. Si existe un tiempo de preparación adicional, la regla debe incorporarlo explícitamente.

Una regla de negocio existe en el dominio aunque todavía no haya software: «solo el responsable autoriza excepciones». Un requisito de software define cómo el sistema hace cumplir o apoya esa regla. Conservar ambos niveles permite discutir cambios organizacionales sin confundirlos con detalles de implementación.

## Análisis, negociación y prioridades

Analizar requisitos implica detectar vacíos, contradicciones, ambigüedades, duplicaciones y dependencias. Dos requisitos pueden ser claros individualmente y resultar incompatibles juntos: «todas las reservas son anónimas» y «cada reserva debe atribuirse a su responsable» necesitan una resolución explícita.

La prioridad debe considerar valor, riesgo, costo y dependencias. Una función poco visible puede ser imprescindible para otra de alto valor. Clasificar todo como obligatorio elimina la utilidad de la clasificación. Cuando se usa una técnica como MoSCoW, cada categoría debe tener un significado acordado para esa entrega.

En ReservaLab, consultar disponibilidad y evitar superposiciones forman parte del núcleo. Un panel con estadísticas históricas podría postergarse. Sin embargo, registrar ciertos eventos desde el comienzo puede ser necesario para construir esas estadísticas después: la dependencia debe analizarse antes de descartar el registro.

### Resolución de un conflicto

Los estudiantes piden cancelación hasta el último minuto; el responsable necesita anticipación para preparar los equipos. Se investiga cuánto tiempo necesita cada tipo de equipo y qué sucede ante una urgencia. Se propone una regla general y un procedimiento de excepción. Se valida con ambos actores. El acuerdo se documenta con su razón y sus efectos; no se resuelve escogiendo arbitrariamente la preferencia de una persona.

## Especificación y documento de requisitos

La especificación reúne requisitos con contexto suficiente para interpretarlos. Puede incluir propósito, alcance, glosario, descripción de usuarios, interfaces externas, funciones, cualidades, restricciones, supuestos y criterios de verificación. La organización debe facilitar localizar un requisito y modificarlo sin generar contradicciones.

El aula trabaja con material y plantillas denominadas IEEE 830. Aquí se usa esa referencia como **organización didáctica del curso**; no se afirma su vigencia normativa ni se reproduce el texto del estándar. La plantilla concreta de la cátedra debe contrastarse antes de preparar una entrega evaluada.

Un registro individual puede contener ID estable, título, descripción, fuente, justificación, prioridad, estado, versión, dependencias y criterio de aceptación. «Estable» significa que el identificador no cambia cada vez que se reordena el documento. Si RF-12 se elimina, reutilizar ese número para otro requisito rompe referencias anteriores.

### Fragmento de una mini ERS

**Propósito:** coordinar la reserva de equipamiento del laboratorio. **Alcance:** consulta, solicitud, cancelación y mantenimiento. **Usuarios:** estudiante, docente y responsable. **Supuesto pendiente:** disponibilidad del servicio institucional de identidad. **Restricción acordada para el prototipo:** trabajar con un catálogo controlado de equipos de ejemplo.

**RF-02, versión 1:** al confirmar una solicitud, el sistema deberá rechazarla si existe una reserva activa del mismo equipo con intervalo superpuesto. En el rechazo informará que el equipo no está disponible y no creará una nueva reserva activa. **Criterio:** ante una reserva de 10 a 11, una solicitud de 10:30 a 11:30 será rechazada; una de 11 a 12 será aceptable si no existe otra restricción.

Ese fragmento todavía necesita definir concurrencia, zona horaria y transiciones de estado si el sistema se desarrolla en producción. Es preferible registrar esas preguntas que esconderlas detrás de una frase aparentemente completa.

## Casos de uso y descripción del comportamiento

Un caso de uso describe cómo un actor interactúa con el sistema para alcanzar un objetivo. Un actor representa un rol externo: una persona puede actuar como docente y como responsable en contextos diferentes. El diagrama delimita actores y objetivos, pero la narrativa aporta condiciones, alternativas y resultados.

**Caso UC-01: Reservar equipo.** Actor principal: estudiante. Precondiciones: está identificado y habilitado para reservar. Disparador: solicita reservar un equipo. Resultado exitoso: queda una reserva confirmada con titular, equipo e intervalo. Garantía mínima: una solicitud fallida no genera una reserva activa.

Flujo principal:

1. El estudiante elige equipo e intervalo.
2. El sistema verifica la validez de los datos y las políticas aplicables.
3. El sistema muestra el detalle de la solicitud.
4. El estudiante confirma.
5. El sistema comprueba nuevamente la disponibilidad y registra la reserva de manera consistente.
6. El sistema informa el identificador y el estado de la reserva.

**Alternativa A:** si el intervalo es inválido, se informa el motivo y se permite corregirlo. **Alternativa B:** si aparece una reserva incompatible antes de confirmar, se rechaza sin sobrescribir la existente. **Alternativa C:** si el equipo está en mantenimiento, se informa la indisponibilidad.

La comprobación final de disponibilidad es importante: mostrar un calendario libre no garantiza que siga libre al confirmar. El requisito expresa la consistencia necesaria; la solución técnica concreta se decide después.

Las relaciones de inclusión, extensión y generalización deben usarse por su significado, no para hacer un diagrama más complejo. Una secuencia cronológica entre dos acciones no justifica por sí sola una relación de inclusión entre casos de uso.

## Validación, verificación y casos de prueba

Verificar un documento es revisar propiedades como claridad, consistencia y trazabilidad. Validar es comprobar con los interesados que representa las necesidades reales. Un documento perfectamente consistente puede describir una solución que nadie necesita. Ambas actividades se complementan.

Las revisiones pueden usar escenarios, listas de comprobación, prototipos y derivación de pruebas. Si no se puede proponer una prueba para un requisito, hay que investigar si falta precisión o si la evaluación requiere una técnica distinta, como una inspección documental.

Un caso de prueba contiene objetivo, requisito asociado, precondiciones, datos, pasos y resultado esperado. El resultado observado se registra al ejecutar; no se inventa al diseñar la prueba.

| Prueba | Situación | Resultado esperado |
|---|---|---|
| CP-01 | Reserva existente 10–11; solicitud 10:30–11:30 | Rechazo por superposición |
| CP-02 | Reserva existente 10–11; solicitud 11–12 | No rechazar por esa reserva |
| CP-03 | Solicitud con final anterior al inicio | Rechazo por intervalo inválido |
| CP-04 | Dos confirmaciones concurrentes del mismo intervalo | Como máximo una reserva activa compatible con la regla |
| CP-05 | Equipo bloqueado por mantenimiento | Rechazo por indisponibilidad |

La tabla representa diseño de pruebas, no resultados ejecutados. CP-04 requiere un entorno que permita controlar concurrencia y observar el estado final; dos clics manuales aislados no bastan para demostrar la propiedad.

## Administración, cambios y trazabilidad

La administración conserva requisitos a lo largo del proyecto. Incluye versiones, estados, responsables, líneas base y evaluación de cambios. Una línea base identifica un conjunto acordado; no significa que nunca pueda cambiar, sino que los cambios deben quedar controlados.

Una solicitud de cambio debe describir qué se propone y por qué. Después se estudia el impacto en requisitos, modelos, datos, interfaces, pruebas y planificación. La decisión se registra y, si se aprueba, se actualizan los elementos afectados.

Ejemplo: se solicita permitir que una reserva incluya varios equipos. Cambian el modelo de la reserva, las reglas de disponibilidad, las alternativas del caso de uso y los casos de prueba. Hay que decidir si se acepta parcialmente una solicitud cuando uno de los equipos no está disponible. Añadir simplemente un selector múltiple no resuelve esa política.

La trazabilidad relaciona necesidad, requisito, modelo y prueba. Para ReservaLab: incidente de doble reserva → objetivo de evitar superposiciones → RF-02 → UC-01 → CP-01, CP-02 y CP-04. Una matriz puede mostrar esas relaciones, pero su utilidad depende de mantenerlas cuando hay cambios.

## Trabajo integrador y autoevaluación con respuestas

Prepará una mini ERS para una biblioteca que reserva salas de estudio. Debe incluir alcance, interesados, preguntas de elicitación, ocho requisitos funcionales, cuatro requisitos de calidad o restricciones, dos casos de uso, seis pruebas y una matriz de trazabilidad. Elegí una política ambigua y presentá dos alternativas antes de justificar una decisión.

**1. ¿Por qué «usar una aplicación móvil» puede ser una solución prematura?** Porque todavía no explica qué problema se busca resolver ni demuestra que ese canal sea necesario. Puede convertirse en una restricción si existe una razón acordada y documentada.

**2. ¿Una entrevista basta para validar un requisito?** Puede aportar evidencia, pero no garantiza cobertura de todos los interesados ni consistencia con otros documentos. Hay que contrastar y resolver discrepancias.

**3. ¿Por qué «rápido» no es un criterio de aceptación?** Porque dos personas pueden interpretarlo de manera diferente. Deben acordarse medida, carga, datos y condiciones de observación.

**4. ¿Qué diferencia hay entre un caso de uso y una prueba?** El primero describe interacción orientada a un objetivo; la segunda define condiciones concretas y resultados esperados para comprobar propiedades.

**5. ¿Se puede validar sin implementar?** Sí, mediante revisión de requisitos, escenarios y prototipos, aunque ciertas propiedades requerirán mediciones sobre una implementación posterior.

**6. ¿Qué hay que revisar si cambia una regla de cancelación?** Requisitos, estados, mensajes, casos de uso, pruebas, documentación y cualquier integración que dependa de la regla.

**7. ¿Un requisito aprobado puede estar equivocado?** Sí. La aprobación documenta un acuerdo en un momento; nueva evidencia puede mostrar que el acuerdo era insuficiente o incorrecto.

## Fuentes y contraste pendiente

Se consultaron las descripciones visibles de las semanas del [aula 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11079), incluidas elicitación, requisitos funcionales y no funcionales, procesos de IR, validación y administración, documentación, casos de uso y pruebas. El aula referencia Pressman, Sommerville, Kendall y Kendall, Oliveros y Antonelli, y Schmuller. Esas referencias se registran como bibliografía indicada por el curso; no se afirma haber leído sus libros completos.

Pendiente: contrastar cada capítulo con los PDF, las guías didácticas, los ejemplos de ERS y la consigna del proyecto. Este estado evita presentar una guía original como si fuera el manual oficial de la asignatura.
