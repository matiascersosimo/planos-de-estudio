---
nombre: "Proceso de Software"
code: "01479"
resumen: "Etapas de desarrollo, participantes, ciclos de vida, trabajo en equipo, agilidad, Scrum, riesgos y documentación, con proyecto integrador."
---

## Recorrido y alcance de las fuentes

El [aula de Proceso de Software 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11445) organiza trece semanas que incluyen repaso de requisitos, etapas del desarrollo, participantes, trabajo en equipo, ciclos de vida, Scrum, riesgos y documentación. Se revisaron sus descripciones y recursos identificados. La lectura integral de los PDF y grabaciones sigue pendiente; este es un **manual de estudio en desarrollo**, con casos originales y cobertura que debe contrastarse con el programa.

Como complemento se consultaron el Manifiesto Ágil, una edición oficial de la Guía Scrum de noviembre de 2020 y la documentación de MkDocs. Se identifica la edición de Scrum para no mezclar reglas de distintas versiones ni atribuir a la cátedra una selección que todavía no se verificó.

Usaremos el proyecto ficticio **Turnos Horizonte**, destinado a coordinar reservas de salas en un centro de capacitación. Hoy existen planillas separadas, se superponen reservas y cuesta saber quién debe resolver excepciones. El proyecto tiene que mejorar ese proceso y mantener una operación comprensible para el personal.

El propósito del manual es aprender a justificar decisiones de proceso. No alcanza con enumerar modelos: hay que explicar qué problemas resuelve cada uno, qué supuestos exige, qué evidencia se produce y cómo se controla el resultado.

## Software, producto, proyecto y proceso

Un producto de software incluye capacidades utilizadas por personas y organizaciones, junto con elementos necesarios para operarlo y mantenerlo. Un proyecto es un esfuerzo temporal organizado para alcanzar un resultado. Un proceso describe actividades relacionadas, responsabilidades, entradas y productos de trabajo. Confundirlos lleva a tratar la entrega de código como si agotara todo el desarrollo.

Un producto puede evolucionar mediante varios proyectos y actividades de mantenimiento. Un proceso puede adaptarse a proyectos diferentes. La existencia de un calendario no demuestra que exista un proceso claro: también deben definirse criterios para decidir, coordinar y evaluar.

En Turnos Horizonte, el código de reservas es parte del producto. Migrar datos y capacitar usuarios son actividades del proyecto. El modo de revisar cambios, probar y aceptar entregas forma parte del proceso. La continuidad posterior puede requerir soporte y nuevas versiones.

### Artefactos y resultados

Un artefacto es un producto de trabajo, como una especificación, un modelo, una versión de software, un informe de pruebas o una guía. Su valor depende del uso: un documento extenso que nadie entiende puede aportar menos que una descripción breve pero suficiente para tomar una decisión.

El resultado buscado tampoco es simplemente «tener artefactos». Un informe de pruebas aporta evidencia sobre propiedades; no demuestra calidad si solo enumera pruebas que nunca se ejecutaron. Un prototipo ayuda a aprender; no es automáticamente una versión apta para operar.

## Etapas y actividades del desarrollo

Las actividades habituales incluyen comprender necesidades, especificar requisitos, diseñar, construir, verificar, validar, desplegar y evolucionar. Su orden e interacción dependen del enfoque. Pueden repetirse, solaparse o realizarse a distintos niveles de detalle.

El análisis del problema identifica objetivos, interesados y restricciones. La especificación expresa necesidades de manera interpretable. El diseño organiza una solución y sus responsabilidades. La construcción produce componentes e integración. Las pruebas y revisiones generan evidencia. El despliegue incorpora la solución al contexto de uso y la evolución responde a cambios y defectos.

### Ejemplo de una entrega completa

La capacidad «cancelar una reserva» comienza por definir quién puede cancelar, hasta cuándo y qué pasa con la disponibilidad. Después se diseña la interacción, se implementa el comportamiento, se verifica y se prepara su uso. Un botón que elimina una fila puede incumplir reglas o destruir historia; la actividad técnica necesita el contexto del requisito.

Una entrega pequeña puede recorrer todas esas actividades. Dividir el desarrollo en entregas no significa que una se dedique solo a requisitos, otra solo a interfaz y una última concentre toda la verificación. La distribución de actividades debe corresponder al resultado que se quiere obtener.

## Requisitos y relación con el proceso

Los requisitos describen necesidades, capacidades y restricciones que orientan el trabajo. El proceso debe permitir obtenerlos, revisarlos y administrarlos. Si cambia una regla, hay que estudiar su impacto en modelos, datos, código, pruebas y comunicación a usuarios.

Para Turnos Horizonte se acuerda que una reserva activa impide otra incompatible en la misma sala e intervalo. Aparecen preguntas: ¿los intervalos adyacentes se permiten?, ¿hay tiempo de preparación?, ¿qué sucede con mantenimiento? Esas preguntas no son retrasos ajenos al desarrollo: definen qué significa resolver correctamente el problema.

La trazabilidad conecta objetivos, requisitos, decisiones y evidencia. No tiene que convertirse en una burocracia desconectada del trabajo. Sirve cuando permite responder por qué existe una función o qué debe revisarse si cambia una política.

### Criterio de aceptación original

Para un intervalo reservado de 10 a 11, una solicitud de 10:30 a 11:30 debe rechazarse y no crear una reserva activa. Una de 11 a 12 puede ser válida si la política permite intervalos adyacentes y no existe otra restricción. Este ejemplo explicita supuestos; no es un resultado de pruebas ejecutadas.

## Participantes y responsabilidades

Intervienen usuarios, patrocinadores, responsables del producto, analistas, diseñadores, desarrolladores, personas dedicadas a calidad, operaciones y soporte, entre otros roles. Una persona puede cumplir varios roles, pero las responsabilidades no deben quedar implícitas por esa razón.

Un usuario conoce su tarea; un patrocinador puede decidir recursos; operaciones conoce restricciones de funcionamiento. Ninguna perspectiva cubre todo el problema. El proceso debe integrar conocimientos y resolver desacuerdos sin depender de que una persona adivine las prioridades de las demás.

### Matriz de interesados

| Participante | Interés | Información que aporta | Decisión que necesita |
|---|---|---|---|
| Recepción | Atender sin conflictos | Excepciones y trabajo cotidiano | Cómo registrar y corregir solicitudes |
| Docentes | Conseguir salas apropiadas | Necesidades de capacidad y horario | Qué opciones están disponibles |
| Coordinación | Usar recursos y prioridades | Políticas y objetivos | Qué excepciones autorizar |
| Soporte | Sostener operación | Dependencias y recuperación | Cómo atender incidentes |

La matriz debe actualizarse. Una persona con poco poder formal puede conocer un riesgo decisivo. Evaluar interesados no consiste en escuchar únicamente a quienes aprueban presupuesto.

## Trabajo en grupo y trabajo en equipo

Repartir tareas no garantiza integración. Un grupo puede producir partes independientes que no encajan; un equipo necesita objetivos compartidos, acuerdos de interacción y responsabilidad sobre el resultado conjunto. La coordinación consume esfuerzo y debe incorporarse al plan.

Los acuerdos de trabajo pueden definir cómo se registran decisiones, cuándo se revisan entregas, cómo se comunican bloqueos y qué significa terminar una tarea. Deben ser observables: «comunicarnos bien» es una intención; «registrar cambios de alcance con responsable y razón antes de incorporarlos a la entrega» es una práctica concreta.

La revisión entre pares ayuda a compartir conocimiento y detectar problemas. Su utilidad no depende de acumular comentarios, sino de evaluar aspectos relevantes. Un equipo puede acordar una revisión de coherencia funcional y otra técnica, evitando que una sustituya a la otra.

### Conflicto aplicado

Una persona modifica la política de cancelación porque cree que mejora la experiencia; otra desarrolla pruebas con la política anterior. La respuesta no debería limitarse a pedir más atención. Se identifica que faltó registrar y comunicar una decisión. Se corrige el producto y se mejora el circuito de cambio, con proporcionalidad al tamaño del proyecto.

## Ciclos de vida y criterios para elegir

Un modelo de ciclo de vida organiza la evolución del trabajo. Su elección depende de estabilidad de necesidades, riesgo, disponibilidad de usuarios, restricciones, tamaño y capacidad del equipo. No hay una etiqueta que garantice éxito independientemente de esas condiciones.

Un enfoque secuencial enfatiza avance entre etapas con productos de trabajo y decisiones de transición. Puede aportar claridad cuando existen acuerdos estables, pero descubrir tarde una interpretación incorrecta puede generar retrabajo amplio. Suponer que no puede haber ninguna revisión simplifica excesivamente el análisis.

Un enfoque iterativo revisa y mejora la solución mediante ciclos. Un enfoque incremental agrega capacidades utilizables por partes. Son conceptos distintos que pueden combinarse: se puede mejorar una capacidad existente y, en otra entrega, incorporar una nueva.

El prototipado reduce incertidumbre sobre interacción o viabilidad. Un prototipo descartable se usa para aprender; uno evolutivo se desarrolla hacia el producto bajo decisiones explícitas. Convertir sin revisión un experimento rápido en base de producción puede conservar limitaciones que eran aceptables únicamente para aprender.

Un enfoque guiado por riesgos ordena el trabajo para enfrentar incertidumbres relevantes. Si no se sabe si la integración con un servicio existente es posible, puede ser más valioso investigarla temprano que completar muchas pantallas que dependen de ella.

### Comparación de decisiones

| Situación | Pregunta relevante de proceso |
|---|---|
| Necesidades poco comprendidas | ¿Qué interacción o prototipo generará aprendizaje temprano? |
| Integración incierta | ¿Qué experimento puede reducir el riesgo antes de comprometer alcance? |
| Operación que no puede detenerse | ¿Cómo se desplegará y recuperará el servicio? |
| Entrega pequeña con usuarios disponibles | ¿Cómo se obtendrá retroalimentación frecuente? |
| Reglas y evidencias exigidas | ¿Cómo se conservarán decisiones y verificaciones? |

La elección se justifica explicando mecanismos. «Elegimos agilidad porque es moderna» no demuestra que el enfoque encaje con el problema.

## Planificación y descomposición del trabajo

Planificar organiza objetivos, resultados, dependencias y recursos bajo incertidumbre. No elimina la necesidad de revisar. Una estimación es una previsión con supuestos; un compromiso necesita considerar capacidad, prioridades y margen de decisión.

Dividir por tareas técnicas puede facilitar asignación, pero también ocultar si el usuario recibirá algo útil. Para Turnos Horizonte conviene identificar resultados observables: consultar disponibilidad, confirmar una reserva, cancelar y gestionar bloqueos. Cada resultado se descompone en trabajo de análisis, diseño, implementación y verificación según corresponda.

### Dependencias y camino de avance

Si confirmar una reserva requiere identidad institucional y esa integración no está disponible, hay una dependencia externa. El equipo puede definir un entorno de prueba y un adaptador simulado para aprender, pero debe comunicar que eso no completa la integración real.

Las tareas aparentemente paralelas pueden depender de decisiones comunes. Dos personas pueden trabajar a la vez en interfaz y almacenamiento si acuerdan un contrato; sin él, el paralelismo puede producir retrabajo. Planificar incluye decidir qué necesita acuerdo previo y qué puede explorarse de manera independiente.

### Seguimiento

El seguimiento compara resultados con lo previsto y explica diferencias. Contar tareas cerradas puede ser insuficiente si todas las difíciles quedan abiertas. Conviene observar capacidades verificadas, trabajo bloqueado y riesgos pendientes. No se debe confundir tiempo invertido con valor entregado.

## Agilidad: adaptación con disciplina

El Manifiesto Ágil prioriza colaboración, interacción y capacidad de responder a cambios, sin negar el valor de herramientas, planes o documentación. Su lectura no justifica trabajar sin acuerdos ni dejar conocimiento esencial sin registrar. La adaptación necesita retroalimentación útil y decisiones sobre prioridades. [Fuente: Manifiesto Ágil](https://agilemanifesto.org/iso/es/manifesto.html).

En Turnos Horizonte, una primera prueba con recepción revela que reservar por nombre de sala es confuso porque usan capacidades y equipamiento. El equipo revisa la interacción antes de completar todas las pantallas. Esa adaptación tiene una razón observable y debe conservar coherencia con los objetivos.

La documentación puede ser breve y suficiente. Un acuerdo claro sobre intervalos y una prueba reproducible evitan discusiones repetidas. Su valor no depende de cuántas páginas ocupe, sino de permitir comprender, operar y cambiar el producto.

## Scrum: marco de referencia y edición consultada

Según la Guía Scrum de noviembre de 2020, Scrum utiliza ciclos llamados Sprints y se apoya en transparencia, inspección y adaptación. El Scrum Team incluye Product Owner, Scrum Master y Developers. La guía describe un objetivo de producto, un objetivo de Sprint y una definición compartida de terminado.

Sus artefactos son Product Backlog, Sprint Backlog e Increment. Los eventos comprenden Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective dentro del Sprint. La revisión permite inspeccionar resultados y próximos pasos; la retrospectiva aborda mejoras del trabajo del equipo. No son la misma conversación.

La guía no prescribe historias de usuario, puntos ni una herramienta determinada. Esas prácticas pueden incorporarse, pero no deben confundirse con reglas obligatorias del marco. Esta síntesis usa esa edición identificada y requiere contrastar el vocabulario elegido por la cátedra. [Fuente: Guía Scrum 2020](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf).

## Actividad original: una entrega de reservas

El equipo de Turnos Horizonte selecciona como propósito permitir que recepción confirme una reserva sin superposiciones. Debe acordar qué demostración y evidencia permitirían evaluar ese resultado, con independencia de la herramienta de planificación utilizada.

Se divide el trabajo en aclarar intervalos, diseñar interacción, implementar persistencia y comprobar conflictos. Si una tarea se termina técnicamente pero no existe un flujo completo para usarla, debe evitarse presentar el propósito como alcanzado. El avance se comunica con su limitación concreta.

Al probar con una recepcionista aparece una excepción: ciertas salas necesitan preparación. El equipo registra el hallazgo, estudia su impacto y acuerda cómo tratarlo. La respuesta no debe ser agregarlo sin analizar ni rechazarlo automáticamente porque no apareció al principio.

Después de la entrega se revisa una dificultad de coordinación: las pruebas llegaron demasiado tarde porque el criterio no estaba acordado. Se propone escribir ejemplos de aceptación antes de implementar y comprobar en el siguiente ciclo si eso reduce retrabajo. La mejora incluye una observación futura que permita saber si ayudó.

Este caso es original y no una receta completa de implementación del marco Scrum. Su finalidad es ejercitar propósito, evidencia y aprendizaje.

## Gestión de riesgos

Un riesgo es una situación incierta que puede afectar objetivos. Se diferencia de un problema ya ocurrido: «podría no estar disponible el servicio de identidad» es un riesgo; «el servicio está caído y bloquea las pruebas» describe un problema actual.

Identificar riesgos exige expresar una causa o condición, el evento posible y su efecto. «Integración» es una categoría, no un riesgo suficientemente formulado. Una formulación útil sería: «Si no se obtiene acceso al entorno institucional antes de la validación, no podrá comprobarse el flujo de autenticación en condiciones reales».

El análisis considera probabilidad e impacto, además de proximidad, detectabilidad y dependencias cuando sean pertinentes. Las escalas ordinales ayudan a priorizar, pero sus números no son probabilidades automáticamente. Multiplicar dos etiquetas no transforma una clasificación subjetiva en un cálculo preciso.

### Registro de ejemplo

| Riesgo | Señal temprana | Respuesta propuesta | Responsable |
|---|---|---|---|
| Acceso tardío a identidad | No existe fecha confirmada del entorno | Investigar temprano y preparar prueba controlada | Coordinación técnica |
| Reglas de prioridad contradictorias | Interesados dan respuestas incompatibles | Taller y registro del acuerdo | Análisis funcional |
| Datos de salas incompletos | Equipamiento sin responsable de actualización | Relevamiento y validación del catálogo | Referente operativo |
| Conocimiento concentrado | Solo una persona sabe desplegar | Documentar y ensayar con otra persona | Equipo de desarrollo |

El registro debe revisarse: un riesgo puede desaparecer, materializarse o cambiar de prioridad. Mantener una lista sin responsables ni decisiones aporta poco control.

## Respuestas y contingencias

Evitar modifica el plan para eliminar la exposición; mitigar reduce probabilidad o impacto; transferir asigna parte de consecuencias mediante un acuerdo válido; aceptar reconoce una exposición con una decisión consciente. Las opciones dependen del contexto y no eliminan automáticamente toda responsabilidad.

Una contingencia describe qué se hará si se materializa una condición. Debe incluir disparador, autoridad y recursos. «Veremos qué hacer» no constituye una contingencia. Tampoco conviene preparar una alternativa que requiere los mismos recursos que el riesgo puede volver indisponibles.

### Cálculo didáctico

Se supone, solo para un ejercicio, una probabilidad de 0,25 de un retraso y un costo de retrabajo de 80 horas si ocurre. La exposición esperada bajo ese modelo simple es 0,25 × 80 = 20 horas. No significa que el proyecto vaya a perder exactamente veinte horas ni representa todos los efectos del riesgo.

Si una investigación de ocho horas reduce esa probabilidad estimada a 0,05, la exposición residual del mismo modelo sería cuatro horas. La comparación sugiere estudiar la mitigación, pero depende de que las probabilidades y costos tengan fundamento. Efectos graves o límites no negociables pueden exigir criterios adicionales al valor esperado.

## Calidad, verificación y validación

La calidad se construye mediante decisiones, prácticas y evidencia durante todo el proceso. No aparece únicamente al final cuando otra persona prueba. Requisitos ambiguos, diseño frágil o despliegue incompleto pueden causar fallas aunque el código supere ciertas pruebas.

La verificación examina correspondencia con especificaciones o criterios; la validación estudia si el resultado satisface necesidades en el uso previsto. En la práctica hay actividades que aportan a ambas y conviene explicar qué pregunta intenta responder cada una.

Para Turnos Horizonte se revisan reglas antes de implementar, se prueban unidades e integración y se realiza una demostración con tareas reales. Probar que se guardó una fila no valida que recepción pueda resolver una reserva excepcional. Del mismo modo, una demostración fluida no garantiza integridad ante solicitudes concurrentes.

### Evidencia y límites

Un registro de pruebas indica versión, entorno, datos, pasos, resultado esperado y observado. Si faltan, reproducir una falla puede ser difícil. Un resultado favorable solo cubre las condiciones examinadas; no autoriza a afirmar ausencia total de defectos.

Los ejemplos de pruebas de este manual son diseños educativos. No se presentan como resultados ejecutados del proyecto ficticio.

## Configuración y cambios

Gestionar configuración permite identificar versiones de código, datos de referencia, documentación y dependencias relevantes. Sin esa identificación, dos personas pueden discutir sobre comportamientos de versiones distintas y creer que una está equivocada.

Un cambio debe tener propósito, alcance e impacto entendibles. Se revisa qué afecta, cómo se comprobará y cómo se distribuirá. Una modificación de vocabulario en la interfaz puede necesitar actualizar manuales, ejemplos y capacitación si cambia el significado para el usuario.

En el caso de una nueva política de preparación de salas, se revisan cálculo de disponibilidad, mensajes, registros históricos y pruebas. También se decide cómo tratar reservas existentes. Un cambio de regla no debe reinterpretar silenciosamente operaciones anteriores si eso altera lo acordado.

Los procedimientos deben ser proporcionales. Un proyecto pequeño no necesita reproducir toda la estructura de una organización grande, pero sí conservar decisiones y versiones suficientes para trabajar con coherencia.

## Documentación útil y mantenimiento del conocimiento

La documentación tiene destinatario, tarea y momento de uso. Una guía de usuario explica cómo completar actividades; una guía de operación, cómo mantener el servicio; una referencia técnica, contratos y decisiones; un registro de cambios, diferencias relevantes entre versiones.

Se evita duplicar la misma regla en muchos lugares sin un responsable de actualización. Cuando la política cambia, hay que identificar sus referencias. Una documentación desactualizada puede ser peor que una ausencia explícita porque produce confianza en instrucciones incorrectas.

### Estructura propuesta

```text
documentacion/
  inicio.md
  usuario/
    reservas.md
    cancelaciones.md
  operacion/
    despliegue.md
    contingencias.md
  referencia/
    modelo-de-datos.md
    interfaces.md
  decisiones/
    politica-de-intervalos.md
```

La estructura es un ejemplo original: debe ajustarse al tamaño y las necesidades. Los nombres no garantizan que exista información útil. Cada página necesita un propósito claro y ejemplos revisados.

MkDocs es una herramienta para construir sitios de documentación a partir de Markdown y una configuración YAML. Su documentación describe vista previa y generación de archivos estáticos. El aula identifica una actividad de documentación con esta herramienta; aquí no se instala ni se afirma haber ejecutado el ejemplo. [Fuente: documentación oficial de MkDocs](https://www.mkdocs.org/).

## Caso integrador: decidir y revisar un proceso

Turnos Horizonte necesita una primera versión en un plazo acotado, con usuarios disponibles semanalmente y reglas todavía inciertas. La propuesta original utiliza entregas pequeñas, aclaración progresiva y pruebas con recepción. Se investiga temprano la integración institucional por su impacto sobre el uso real.

El primer resultado prioriza disponibilidad y confirmación. El segundo incorpora cancelaciones y bloqueos. Cada entrega necesita criterios de aceptación, documentación operativa suficiente y observación de errores. Esa secuencia es una hipótesis de plan, no una obligación derivada de un modelo de ciclo de vida.

Se registran riesgos y se acuerdan responsables de cambios. Si una integración sigue pendiente, se comunica qué está demostrado y qué no. El proyecto no se declara completo únicamente porque la interfaz funciona con datos de prueba.

Al final se evalúan objetivos, calidad, operación y aprendizaje. Se documentan limitaciones y trabajo restante. Un informe honesto puede reconocer que se logró un prototipo útil pero no una implantación completa; esa distinción permite decidir el siguiente paso.

## Autoevaluación con respuestas justificadas

**1. ¿Proceso y cronograma son sinónimos?** No. El cronograma ubica trabajo en el tiempo; el proceso también define actividades, productos, responsabilidades y criterios.

**2. ¿Iterar y agregar funcionalidades significan lo mismo?** No. Se puede iterar para mejorar lo existente sin agregar una capacidad nueva. Un incremento incorpora resultado adicional; ambas dinámicas pueden combinarse.

**3. ¿Por qué investigar una integración antes de terminar todas las pantallas?** Porque una incertidumbre de alto impacto puede invalidar supuestos del plan. Investigar temprano puede evitar trabajo dependiente inútil.

**4. ¿Un prototipo aprobado demuestra aptitud para producción?** No necesariamente. Puede validar interacción y dejar pendientes seguridad, concurrencia, recuperación o integración.

**5. ¿Un riesgo materializado sigue siendo solo riesgo?** Su ocurrencia se gestiona como problema o incidente actual; pueden quedar riesgos residuales y consecuencias inciertas.

**6. ¿Qué falla si todas las tareas están al 90 %?** Ese porcentaje puede ocultar ausencia de resultados utilizables y criterios inconsistentes. Conviene revisar qué capacidades están terminadas y comprobadas.

**7. ¿La documentación extensa garantiza conocimiento compartido?** No. Debe ser comprensible, pertinente, accesible y mantenerse. También se necesita comprobar que otras personas puedan usarla.

**8. ¿Un equipo que adapta prioridades puede prescindir de planificación?** No. Debe decidir objetivos y trabajo; la adaptación implica revisar decisiones con evidencia, no abandonar el plan sin explicación.

### Práctica para resolver

Elegí un proyecto pequeño y describí problema, interesados, objetivos y restricciones. Proponé dos alternativas de ciclo de vida y justificá una. Definí tres entregas, cinco riesgos, responsables y evidencias. Agregá un cambio inesperado y explicá cómo afecta plan, requisitos, verificación y documentación. Cerrá distinguiendo resultados comprobados de suposiciones.

## Fuentes y contraste pendiente

Temario principal: [aula UNNOBA 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11445), semanas 1–13. Complementos identificados: [Manifiesto Ágil](https://agilemanifesto.org/iso/es/manifesto.html), [Guía Scrum de noviembre de 2020](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf) y [MkDocs](https://www.mkdocs.org/).

Pendiente: lectura integral de las guías y presentaciones del aula, contraste de la taxonomía de ciclos de vida y riesgos, y verificación de ejemplos pedidos en los trabajos prácticos. Todos los planes, valores y situaciones de Turnos Horizonte son originales e hipotéticos.
