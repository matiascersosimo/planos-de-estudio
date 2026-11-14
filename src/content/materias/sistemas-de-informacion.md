---
nombre: "Sistemas de Información"
code: "00677"
resumen: "Información, componentes y clases de SI, desarrollo, planificación, gestión, seguridad, geolocalización, auditoría y peritaje."
---

## Alcance y recorrido de las cinco unidades

El [aula de Sistemas de Información 2025](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326) presenta cinco unidades: información; sistemas de información; desarrollo; gestión; auditoría y peritaje. Se consultaron sus temarios descriptivos. Este manual desarrolla esos ejes mediante explicaciones y casos originales; la lectura íntegra de las presentaciones, el programa PDF y las guías todavía está pendiente. Debe utilizarse como **borrador de estudio ampliado**, no como transcripción oficial ni como garantía de cobertura de un examen.

Para conectar las unidades usaremos **Red de Bibliotecas Horizonte**, una organización ficticia con tres sedes. Registra ejemplares, préstamos, devoluciones y reservas. Quiere reducir pérdidas, mejorar disponibilidad de información y decidir qué comprar. El ejemplo permite separar necesidades operativas, gestión y toma de decisiones.

Estudiar un sistema de información exige comprender datos, personas, procedimientos, tecnología y objetivos. La pregunta «¿qué programa usan?» es solo una parte del relevamiento. También interesa quién registra, quién verifica, quién decide y qué consecuencias tiene la información defectuosa.

## Unidad 1. Datos, información y conocimiento

Un dato es una representación de un hecho, medición o atributo. Adquiere valor informativo cuando se interpreta en un contexto y responde una necesidad. La secuencia «12, 15, 9» no permite decidir demasiado si no se sabe si representa préstamos, temperaturas o días de demora.

La información no es simplemente una gran cantidad de datos. Un informe de miles de filas puede ser menos útil que una síntesis que responde una pregunta concreta. Tampoco toda síntesis es buena: si elimina la distinción entre sedes, puede esconder que una de ellas concentra los problemas.

El conocimiento permite interpretar y actuar a partir de información, experiencia y criterios. Saber que aumentaron las reservas es información; comprender si se debe a una actividad especial o a un cambio sostenido de demanda requiere conocimiento del contexto y evidencia adicional.

### Ejemplo trabajado

La biblioteca registra diez devoluciones fuera de plazo. Para interpretar el dato se necesita conocer el período, total de préstamos, definición de vencimiento y política de renovaciones. Diez sobre veinte préstamos es una situación distinta de diez sobre mil. Además, un préstamo renovado correctamente no debería clasificarse como atrasado usando la fecha inicial sin actualizar.

Se calcula una tasa: devoluciones tardías del período divididas por devoluciones consideradas en ese mismo período, según una regla explícita. Si se cambia la regla, debe documentarse. Una cifra sin definición dificulta comparar resultados y puede producir decisiones equivocadas.

## Unidad 1. Cualidades y calidad de la información

La exactitud expresa correspondencia con los hechos relevantes; la completitud, disponibilidad de los datos necesarios; la consistencia, ausencia de contradicciones bajo las reglas del modelo; la oportunidad, disponibilidad cuando se necesita. También importan relevancia, comprensión, accesibilidad para quien corresponde y confiabilidad de las fuentes.

Estas cualidades pueden entrar en tensión. Un dato muy detallado que llega demasiado tarde no sirve para una decisión urgente. Un tablero sencillo puede facilitar comprensión y perder un matiz importante. La calidad debe evaluarse para un uso, no como una etiqueta universal independiente de las necesidades.

En Horizonte, un ejemplar puede figurar disponible mientras está prestado: falla de exactitud del estado o de actualización. Puede existir un préstamo sin fecha de vencimiento: falta un dato necesario. Dos sedes pueden usar distintos códigos para el mismo tipo de material: problema de consistencia semántica.

### Matriz de control de calidad

| Problema | Regla propuesta | Evidencia de control |
|---|---|---|
| Préstamo sin vencimiento | Todo préstamo activo tiene una fecha válida | Consulta de excepciones |
| Identificadores duplicados | Código de ejemplar único | Restricción y registro de rechazos |
| Estado desactualizado | Préstamo y disponibilidad cambian coherentemente | Reconciliación de estados |
| Informe tardío | Corte y disponibilidad acordados | Fecha de generación y recepción |

La regla no equivale a su aplicación. Un procedimiento escrito que nadie ejecuta no asegura calidad. Hace falta asignar responsables, observar errores y revisar si el control funciona.

### Causas y correcciones

Si un dato incorrecto se replica en varios informes, corregir cada informe a mano puede esconder la causa. Conviene identificar su origen, la transformación que lo propagó y los resultados afectados. A veces se necesita corregir el dato fuente; otras, el cálculo o la interpretación del indicador.

Una validación automática detecta ciertos errores, pero no todos. Una fecha puede tener formato válido y ser falsa. Por eso se combinan reglas, revisión y responsabilidad sobre el registro.

## Unidad 1. Información como patrimonio y manejo responsable

La información puede sostener operaciones, decisiones y continuidad de una organización. Su valor depende de que pueda localizarse, entenderse, protegerse y conservarse durante el tiempo adecuado. Un archivo guardado sin responsable ni contexto puede resultar inútil aunque todavía exista.

Conviene distinguir autoría, titularidad, custodia, responsabilidad de actualización y autorización de acceso. Que una persona administre un sistema no implica que deba consultar todos sus datos. Que un dato sea técnicamente accesible tampoco demuestra que su uso sea pertinente.

El tratamiento responsable requiere finalidad definida, acceso acorde a las tareas, información suficiente y prevención de usos indebidos. En el caso de la biblioteca, analizar circulación por categorías puede ayudar a comprar libros sin mostrar públicamente el historial individual de lectura.

Las exigencias legales concretas dependen de jurisdicción y contexto y no se desarrollan aquí. El manual presenta principios de análisis organizacional; no pretende reemplazar una evaluación jurídica de un sistema real.

### Caso de decisión

La dirección pide un listado nominal de todo lo leído por cada usuario para decidir compras. Se pregunta qué decisión necesita apoyar. Si alcanza con demanda agregada por tema, se prepara ese agregado y se limita el acceso al detalle. El razonamiento parte del propósito, en lugar de entregar todos los campos porque existen.

## Unidad 1. Arquitectura de la información

La arquitectura de la información organiza categorías, relaciones, nombres y recorridos para que las personas encuentren y comprendan lo que necesitan. No se reduce a elegir colores ni a definir servidores. Su problema central es cómo dar estructura y significado a la información disponible.

Para Horizonte se distinguen obra, edición y ejemplar. Una obra puede tener varias ediciones y cada edición varios ejemplares físicos. Si todo se llama «libro», las reservas y los informes pueden mezclar niveles y producir resultados ambiguos.

Un vocabulario compartido y un diccionario de datos ayudan a mantener el significado. El campo «disponible» debe precisar si significa presente en sede, no prestado, reservable o inmediatamente retirable. Las etiquetas de una interfaz deben coincidir con las reglas que representan.

La organización puede ofrecer varios recorridos: buscar por título, autor, tema o sede. Las categorías se diseñan según necesidades reales, no únicamente copiando las áreas internas de la organización. Un usuario no debería conocer el organigrama para encontrar una reserva.

## Unidad 2. Qué integra un sistema de información

Un sistema de información reúne componentes que capturan, procesan, almacenan y distribuyen información para apoyar actividades y decisiones. Incluye participantes, procedimientos, datos, procesos y contexto, junto con tecnologías cuando las hay. Puede existir un SI con registros en papel.

El sistema de software es un componente posible del SI. Si el programa permite registrar préstamos pero el personal realiza parte de las operaciones en cuadernos que nunca se concilian, el funcionamiento real supera lo que muestra la aplicación. El análisis debe abarcar ese circuito completo.

Entre los componentes tecnológicos aparecen hardware, software, comunicaciones y bases de datos. Las personas definen objetivos, registran, interpretan y actúan. Los procedimientos establecen cómo se realizan tareas y excepciones. Los procesos de negocio conectan esas tareas con resultados para usuarios y organización.

### Ejemplo de falla sociotécnica

La aplicación de Horizonte funciona, pero en horas de mucha demanda se anotan préstamos en papel para cargarlos después. Si la carga se omite, el catálogo muestra ejemplares disponibles que ya salieron. No basta mejorar la base de datos: hay que investigar tiempos de atención, conectividad, formularios y responsabilidades de conciliación.

Una mejora podría permitir registro rápido, trabajo temporal sin conexión con reglas de sincronización o un procedimiento de contingencia verificable. Cada alternativa debe evaluarse según sus efectos y complejidad.

## Unidad 2. Clases de sistemas y decisiones

Los sistemas transaccionales sostienen operaciones frecuentes: registrar un préstamo, devolver un ejemplar o cobrar un servicio cuando corresponda. Requieren consistencia y trazabilidad porque otros procesos dependen de sus registros.

Los sistemas de información para la gestión presentan resúmenes periódicos y excepciones: préstamos por sede, reservas pendientes o ejemplares no localizados. Los sistemas de apoyo a decisiones permiten explorar alternativas y escenarios. La clasificación describe propósitos; un producto puede combinar varias funciones.

Un reporte puede apoyar una decisión sin decidir automáticamente. Si la biblioteca quiere distribuir un presupuesto de compras, necesita combinar demanda, relevancia académica, estado de la colección y costos. Usar únicamente cantidad de préstamos puede perjudicar materiales necesarios para grupos pequeños.

### Comparación aplicada

| Necesidad | Información y función esperadas |
|---|---|
| Prestar un ejemplar | Estado actual, usuario habilitado y registro consistente |
| Controlar reservas atrasadas | Lista de excepciones con responsable y antigüedad |
| Planificar compras | Demanda agregada, disponibilidad, costo y criterios de prioridad |
| Evaluar una nueva sede | Escenarios de demanda, capacidad y recursos |

No todo problema estratégico requiere una herramienta sofisticada. A veces falta una definición compartida del indicador o una fuente confiable. La tecnología se selecciona después de comprender esa necesidad.

## Unidad 2. Gestión integrada, documentos y conocimiento

La gestión integrada busca coordinar información y procesos entre áreas. En lugar de mantener catálogos contradictorios, puede acordarse una fuente de referencia y reglas de actualización. Integrar no significa que todas las personas puedan cambiar todo ni que un único programa resuelva cualquier proceso.

Un gestor documental organiza documentos, versiones, metadatos y acceso. Un gestor de contenidos facilita crear y publicar contenido según flujos de trabajo. La gestión del conocimiento incorpora prácticas para conservar y compartir saberes: procedimientos, lecciones aprendidas, comunidades y criterios de resolución de problemas.

En Horizonte, un manual de catalogación necesita versión, responsable y fecha de revisión. Si cada sede usa una copia distinta sin identificador, publicar más documentos puede aumentar la confusión. El conocimiento tampoco se agota en documentos: la capacitación y el intercambio sobre casos difíciles siguen siendo necesarios.

El comercio electrónico articula información, transacciones, atención y procesos de cumplimiento cuando una organización ofrece intercambios por medios digitales. Un catálogo en línea no equivale por sí solo a resolver pedidos, disponibilidad y posventa. Este eje se incluye porque figura en el temario, sin asumir que deba incorporarse al caso de biblioteca.

## Unidad 3. Planificación y alineación organizacional

Planificar SI consiste en definir necesidades, prioridades, capacidades y una secuencia de acciones vinculada a los objetivos organizacionales. Un proyecto técnicamente interesante puede aportar poco si no atiende un problema relevante o si exige recursos que la organización no puede sostener.

El diagnóstico debe identificar sistemas existentes, responsables, fuentes de datos, interfaces, problemas y dependencias. Una propuesta se justifica con beneficios esperados, costos, riesgos y supuestos. «Digitalizar todo» no define por sí solo una prioridad ni un criterio de éxito.

Para Horizonte, el objetivo es reducir errores de disponibilidad. Se propone unificar registro de préstamos y devoluciones y establecer conciliación de contingencias. Un tablero de compras podría quedar para una fase posterior, porque sus resultados dependen de datos operativos confiables.

### Matriz de alineación

| Objetivo | Problema observado | Acción de SI | Evidencia de resultado |
|---|---|---|---|
| Mejorar disponibilidad | Devoluciones no registradas | Simplificar devolución y reconciliar excepciones | Menos discrepancias entre estado y ubicación |
| Evitar duplicación de compras | Catálogos separados | Identificación común de obras y ejemplares | Consultas conjuntas consistentes |
| Mejorar atención | Búsquedas lentas de reservas | Vista de pendientes por sede | Menor tiempo de resolución bajo carga comparable |

Los valores concretos de metas requieren una línea de base. Si no se mide antes, resulta difícil saber si una modificación produjo mejora y cuánto de esa mejora corresponde al cambio.

## Unidad 3. Diseño centrado en usuarios

El diseño basado en usuarios investiga tareas, contexto, conocimientos y obstáculos. Las personas pueden necesitar cosas distintas: el lector busca disponibilidad; el bibliotecario registra movimientos; la dirección analiza resultados. Un formulario único con todos los campos puede dificultar las tres actividades.

Se observan tareas reales, se recogen ejemplos y se prueban prototipos. La prueba debe pedir una tarea concreta y observar si puede completarse; preguntar solamente «¿te gusta?» aporta una evidencia limitada.

### Entradas y validaciones

Un diseño de entrada define datos necesarios, origen, formato, validación, mensajes y corrección de errores. En un préstamo se captura usuario y ejemplar, y se deriva o selecciona la política de vencimiento correspondiente. Si una fecha puede calcularse, debe evitarse pedirla manualmente sin necesidad.

Los mensajes tienen que permitir actuar: «No se pudo completar» es menos útil que explicar que el ejemplar figura prestado y ofrecer revisar su estado. El mensaje no debe revelar información personal innecesaria para esa tarea.

### Salidas, reportes e interfaces

Una salida se diseña según destinatario y propósito. Un lector necesita saber si puede retirar un material; un reporte de gestión necesita período, criterios, agregados y excepciones. Fecha de generación, unidad y definición del indicador evitan interpretaciones erróneas.

Un reporte que muestra «préstamos: 500» debe aclarar si cuenta operaciones, usuarios distintos o ejemplares distintos. Si una renovación se cuenta como nuevo préstamo en una sede y no en otra, la comparación requiere corregir o explicitar esa diferencia.

## Unidad 3. Implantación y gestión del cambio

Implantar incluye preparar datos, capacitar, definir soporte, planificar transición y comprobar que las operaciones puedan continuar. Instalar el programa es un paso, no el proceso completo. La nueva forma de trabajo puede modificar responsabilidades y hábitos.

La migración necesita reglas de correspondencia, identificación de duplicados y controles de integridad. Un total de filas coincidente no demuestra que los datos se hayan transformado bien. Hay que comprobar claves, vínculos, valores relevantes y muestras orientadas a casos difíciles.

Una transición puede realizarse de manera directa, por piloto, por etapas o con funcionamiento paralelo. Cada estrategia tiene costos y riesgos. El paralelo permite comparar, pero puede duplicar trabajo y producir divergencias si no se define qué sistema manda y cómo se concilian registros.

En Horizonte se prueba una sede antes de ampliar. Se acuerdan criterios de aceptación, procedimiento de contingencia y responsables de resolver incidentes. La decisión de avanzar depende de evidencia sobre funcionamiento y capacidad de soporte, no solo de que se haya cumplido una fecha de calendario.

## Unidad 4. Administración y control del SI

Gestionar un SI implica sostener calidad, disponibilidad, acceso y evolución. Requiere responsables de datos, operaciones, soporte y decisiones de cambio. Si una falla atraviesa varias áreas, debe existir un circuito de coordinación para evitar que cada una suponga que otra la resolverá.

El control compara funcionamiento con objetivos y reglas. Puede ser preventivo, detectivo o correctivo según su propósito. Una validación previene ciertos errores; una conciliación detecta diferencias; una restauración o corrección atiende un daño identificado. Ningún control aislado cubre todas las amenazas.

La gestión de cambios identifica qué se modifica, por qué, cómo se verifica y cómo se recupera el servicio si el resultado falla. Un cambio pequeño de definición de estado puede afectar reportes, automatizaciones y atención. Su impacto no se mide solo por cantidad de líneas de código.

### Datos operativos y análisis

Los datos usados para operar reflejan estados y movimientos. Un almacén analítico puede integrar información histórica y organizarla para consultas. Si se copian datos con demora, un tablero puede no representar el estado instantáneo. Es necesario indicar actualización y finalidad, en vez de prometer tiempo real sin evidencia.

Una transformación analítica debe ser reproducible y conservar definiciones. Si cambia cómo se calcula demanda insatisfecha, hay que evaluar la comparabilidad con períodos anteriores. Un gráfico puede ser visualmente correcto y semánticamente engañoso.

## Unidad 4. Privacidad, integridad y seguridad

Confidencialidad significa limitar divulgación a quienes corresponde; integridad, proteger coherencia y modificaciones autorizadas; disponibilidad, poder usar información y servicios cuando se necesitan. Un sistema puede cumplir una dimensión y fallar en otra: datos inaccesibles pueden seguir siendo confidenciales y, sin embargo, inutilizar la operación.

Se identifican activos, amenazas, vulnerabilidades e impactos. Después se seleccionan controles proporcionales al contexto. El análisis debe contemplar errores humanos, fallas técnicas y acciones deliberadas, sin asumir que todo incidente tiene origen malicioso.

En Horizonte, el rol de atención puede registrar préstamos sin acceder a informes personales ajenos a su tarea. Cambiar una política de vencimiento requiere otra autorización. Los permisos se revisan cuando cambian funciones, y las excepciones deben tener responsable.

### Continuidad y copias

Una copia de seguridad no demuestra recuperabilidad. Se necesita conocer qué contiene, cuándo se produjo y si puede restaurarse en un entorno adecuado. También hay que acordar cuánta información se toleraría perder y cuánto tiempo puede interrumpirse el servicio. Esos objetivos se definen con la operación y no se inventan desde el área técnica.

El procedimiento de contingencia debe evitar crear una segunda fuente de datos que nunca se reconcilia. Si durante una caída se registran préstamos en un formulario, hay que numerarlos, cargarlos después y comprobar que no queden duplicaciones o faltantes.

## Unidad 4. Sistemas de geolocalización

La geolocalización incorpora una referencia espacial a hechos u objetos. Puede apoyar distribución, búsqueda de sedes o seguimiento logístico. Debe distinguirse ubicación estimada de ubicación cierta y considerar precisión, fecha y frecuencia de actualización.

En una red de bibliotecas, mostrar sedes cercanas puede ser útil sin conservar un historial de movimientos de cada lector. La necesidad de una función no justifica recoger todos los datos que un dispositivo permita obtener.

Un punto en un mapa puede tener una demora de actualización o un margen de error. Para decisiones operativas, la interfaz debe comunicar esas limitaciones. Interpretar una última ubicación como posición actual garantizada puede producir errores.

Este apartado trata diseño y uso de información espacial; no formula requisitos legales ni recomendaciones técnicas para sistemas reales de seguimiento personal.

## Unidad 5. Auditoría de sistemas de información

La auditoría examina un objeto definido con criterios y evidencia, y comunica hallazgos y conclusiones dentro de un alcance. No consiste únicamente en buscar ataques ni en ejecutar una herramienta. Puede evaluar controles, procesos, calidad de datos y correspondencia entre lo establecido y lo realizado.

Un plan identifica objetivo, alcance, criterios, fuentes, procedimientos y límites. La evidencia debe permitir sostener el hallazgo. «El sistema parece inseguro» es una impresión; «tres cuentas de personas desvinculadas conservaban acceso durante la revisión» es una observación concreta que aún necesita contexto y criterio aplicable.

### Construcción de un hallazgo

En Horizonte existe un procedimiento que exige revisar permisos cuando cambia el puesto. Se examina una muestra y se encuentran accesos antiguos sin revisión registrada. El hallazgo debe diferenciar condición observada, criterio, posible causa e impacto. La recomendación puede proponer un circuito verificable de altas, cambios y bajas, con responsable y evidencia de cumplimiento.

Una muestra no autoriza a afirmar que todos los accesos están mal. El informe debe indicar qué se revisó y qué limitaciones impiden generalizar. También debe distinguir evidencia obtenida de hipótesis sobre causas que todavía no se confirmaron.

## Unidad 5. Peritaje e información como evidencia

El peritaje aporta análisis especializado sobre una cuestión concreta dentro de un contexto que puede requerir formalidades específicas. El temario relaciona el SI con su capacidad de aportar pruebas. Aquí se estudian conceptos generales de preservación, trazabilidad y límites de interpretación; no se proporcionan instrucciones jurídicas para una causa real.

Una captura de pantalla puede mostrar un resultado, pero no explica necesariamente su origen, integridad ni contexto. Un registro de eventos tampoco prueba por sí solo quién estaba físicamente detrás de una cuenta. La conclusión debe considerar cómo se generó la información, sus controles y las explicaciones alternativas.

Preservar implica evitar alteraciones indebidas, documentar obtención y mantener trazabilidad de transferencias y análisis. Las exigencias concretas de cadena de custodia y admisibilidad se verifican en el procedimiento correspondiente. No basta aplicar un hash y concluir que toda la evidencia es verdadera.

### Ejemplo conceptual

Se investiga por qué se modificó un préstamo. El SI conserva fecha, cuenta y valores anterior y posterior. Esos registros ayudan a reconstruir la operación, pero hay que considerar zona horaria, sincronización, permisos y posibilidad de cuentas compartidas. La conclusión rigurosa puede ser más limitada que la afirmación inicial «lo hizo tal persona».

## Caso integrador: disponibilidad contradictoria

Un lector consulta un ejemplar disponible, llega a la sede y no está. El diagnóstico recoge registro de préstamo, hora de actualización, contingencias y prácticas de atención. Se descubre que un préstamo se anotó en papel durante una caída y nunca se cargó.

Desde calidad de información se identifica una discrepancia entre estado y hecho real. Desde SI se consideran aplicación y procedimiento manual. Desde diseño se revisa la contingencia. Desde gestión se asignan responsables y conciliación. Desde auditoría se comprueba si el circuito acordado deja evidencia de ejecución.

La propuesta original incluye formularios de contingencia identificados, carga posterior controlada y un reporte de diferencias. También puede incorporar una advertencia de estado pendiente de conciliación cuando corresponda. Antes de implantar, se prueban casos normales, operaciones repetidas y cambios simultáneos.

Se evalúa la mejora con una definición estable de discrepancia y observaciones comparables. No se promete eliminación total de errores sin considerar el proceso completo. El resultado esperado es reducir incertidumbre y sostener una respuesta verificable.

## Autoevaluación con respuestas

**1. ¿Más datos significan más información útil?** No. Depende de contexto, calidad y necesidad. Un agregado pertinente puede apoyar mejor una decisión que una lista extensa sin significado.

**2. ¿Un SI necesita computadoras?** No necesariamente. Personas, procedimientos y registros pueden sostener un SI manual; la tecnología puede ampliar sus capacidades y también introducir dependencias.

**3. ¿Qué diferencia hay entre dato disponible y dato oportuno?** El primero puede existir y ser accesible; el segundo llega a tiempo para el uso previsto. Un informe recibido después de una decisión puede ser demasiado tardío.

**4. ¿Por qué no basta contar filas después de migrar?** Porque pueden coincidir cantidades y estar mal vínculos, fechas o significados. Se necesitan controles orientados al contenido y las reglas.

**5. ¿Un tablero reemplaza el control?** No. Deben existir referencia, interpretación, responsable y capacidad de actuar. Mostrar un indicador es solo parte del circuito.

**6. ¿La copia más reciente garantiza recuperación?** No. Hay que comprobar integridad, restauración, dependencias y correspondencia con objetivos de continuidad.

**7. ¿Todo hallazgo de auditoría demuestra un incidente?** No. Puede mostrar una debilidad o un incumplimiento sin evidencia de explotación o daño. Deben separarse ambos niveles.

**8. ¿Una cuenta identifica inequívocamente a una persona?** No por sí sola. Compartición, accesos y contexto pueden limitar esa inferencia.

### Trabajo práctico propuesto

Relevá un SI conocido y describí propósito, usuarios, entradas, transformaciones, almacenes, salidas y decisiones. Identificá tres fallas de calidad y sus efectos. Diseñá una mejora con plan de implantación, contingencia, controles y criterios de evaluación. Cerrá con un pequeño plan de auditoría que indique qué evidencia permitiría saber si la mejora se aplica.

## Fuentes y próximos contrastes

Temarios descriptivos consultados: [unidad 1](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326&section=1#tabs-tree-start), [unidad 2](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326&section=2#tabs-tree-start), [unidad 3](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326&section=3#tabs-tree-start), [unidad 4](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326&section=4#tabs-tree-start) y [unidad 5](https://plataformaed.unnoba.edu.ar/course/view.php?id=10326&section=5#tabs-tree-start).

Pendiente: contrastar taxonomías, profundidad, bibliografía y procedimientos de auditoría con las presentaciones completas. Los ejemplos son educativos, ficticios y no constituyen asesoramiento legal ni un diagnóstico de los sistemas de UNNOBA.
