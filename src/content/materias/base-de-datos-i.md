---
nombre: "Base de Datos I"
code: "01481"
resumen: "Modelado conceptual, entidades, atributos, relaciones, identificadores externos, jerarquías y transformación al esquema relacional."
---

## Alcance y recorrido de estudio

Este manual sigue los ejes identificados en [Base de Datos I 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11447): modelado conceptual, entidades y atributos, restricciones, relaciones, entidades débiles, identificadores externos, jerarquías, historia y transformación hacia esquemas lógicos y físicos. Se leyeron las descripciones visibles de las secciones de práctica y actividades. La revisión completa de los PDF, clases y programa continúa pendiente. Por eso se entrega como **borrador de estudio original**, con ejemplos propios y sin afirmar equivalencia total con el programa oficial.

El objetivo es aprender a justificar un modelo. Dibujar rectángulos y conectarlos no alcanza: hay que explicar qué significa cada elemento y qué situaciones admite o prohíbe. Una buena respuesta distingue lo que dice el enunciado, lo que se deduce y lo que todavía necesita consulta.

Usaremos una cooperativa ficticia que vende insumos. Tiene socios, productos, facturas y depósitos. Las facturas pueden incluir varios productos y cada depósito conserva existencias. El caso no reproduce el de la cátedra: permite practicar los mismos tipos de decisiones sin convertir el manual en una solución de una actividad evaluada.

## Datos, información y sistema de gestión

Una base de datos organiza datos relacionados según un modelo. Un sistema de gestión administra almacenamiento, consulta, modificaciones, restricciones y acceso concurrente. La aplicación utiliza esos servicios para resolver necesidades de los usuarios. Base de datos, gestor y aplicación son componentes distintos.

Una planilla puede contener datos útiles, pero repetir información en múltiples lugares produce problemas. Si el domicilio de un socio aparece en cada operación, una actualización parcial deja valores contradictorios. Si solo se registra un producto cuando se vende, no se puede incorporar al catálogo sin inventar una venta. Si al borrar la última venta se pierde el único registro de ese producto, se mezcla la existencia del producto con la de sus operaciones.

Estas situaciones muestran por qué hay que modelar los hechos antes de decidir cómo guardarlos. La redundancia no es siempre accidental ni siempre inadmisible: conservar el precio histórico de una venta tiene un propósito diferente de copiar el precio vigente del catálogo en todos los registros sin una política explícita.

### Tres niveles de decisión

El modelo conceptual describe el dominio: socios, facturas y relaciones. El modelo lógico lo expresa con las estructuras de un modelo de datos, por ejemplo relaciones, atributos y claves. El diseño físico concreta tipos, índices y decisiones de implementación para un gestor.

La terminología usada en las guías puede distribuir esas etapas de otra manera; se debe contrastar con la cátedra. Lo esencial es no confundir una necesidad del dominio con una característica accidental de una herramienta.

## Entidades y atributos

Una entidad representa un objeto o concepto distinguible del dominio. Un tipo de entidad reúne ocurrencias con propiedades comunes. «Socio» es un tipo; el socio con número 173 es una ocurrencia. Un atributo expresa una propiedad relevante, como nombre o fecha de incorporación.

El criterio para decidir qué modelar es el uso de la información. Una dirección puede ser un texto suficiente para enviar correspondencia, o necesitar calle, altura, localidad y código postal si se harán búsquedas o validaciones separadas. El modelo debe reflejar esas necesidades, sin descomponer por costumbre ni mantener una estructura opaca que impida las consultas requeridas.

### Clasificaciones útiles

Un atributo simple no se divide en componentes relevantes para el modelo; uno compuesto sí. Un atributo monovaluado admite un valor por ocurrencia; uno multivaluado puede admitir varios. Un atributo derivado se calcula a partir de otros datos; uno almacenado se conserva directamente.

La edad es un ejemplo de atributo derivable a partir de una fecha de nacimiento y una fecha de referencia. Guardarla como si fuera permanente genera envejecimiento de los datos. En cambio, la edad declarada al momento de un evento puede ser un hecho histórico y requerir almacenamiento propio.

La ausencia de un valor no significa automáticamente cero ni cadena vacía. «Desconocido», «todavía no informado» y «no aplicable» son estados diferentes del dominio, aunque una implementación simplificada use el mismo mecanismo para algunos. Si esa diferencia importa, debe modelarse.

### Ejemplo resuelto

Para SOCIO se proponen numeroSocio, nombre, fechaAlta y correo. Si cada socio puede registrar varios teléfonos, no conviene crear telefono1, telefono2 y telefono3: esa estructura impone un máximo artificial. Se modela el conjunto de teléfonos y luego se transforma en una relación dependiente del socio. Si solo se necesita un teléfono principal, la regla cambia y el modelo debe reflejarlo.

## Identificadores y restricciones de dominio

Un identificador permite distinguir una ocurrencia de las demás. Una clave candidata es un conjunto mínimo de atributos que identifica de forma única en el modelo relacional. «Mínimo» significa que no contiene atributos prescindibles para esa identificación. Se elige una candidata como primaria y las demás conservan su condición de claves alternativas.

Que los valores observados sean distintos no demuestra que un atributo sea identificador. Dos socios pueden llamarse igual aunque todavía no haya ocurrido. La unicidad debe derivar de una regla del dominio o de una decisión del sistema, no de una coincidencia de la muestra.

Una clave artificial facilita referencias, pero no reemplaza las restricciones del negocio. Si se asigna idSocio y existe un número de socio que debe ser único, esa unicidad también tiene que preservarse. De lo contrario, podrían existir dos filas con distintos IDs y el mismo número de socio.

El dominio especifica valores permitidos y su interpretación. Para cantidad vendida podría exigirse un entero positivo; para porcentaje de descuento, un valor entre cero y cien. Elegir un tipo numérico no garantiza por sí solo esas reglas.

### Error frecuente

«Toda columna llamada código es clave». El nombre no establece ninguna propiedad. Un código de producto puede ser único en toda la cooperativa, único dentro de un proveedor o repetirse entre versiones. Cada interpretación produce un identificador diferente.

## Relaciones, cardinalidad y participación

Una relación expresa una asociación entre ocurrencias. Su grado es la cantidad de tipos participantes: una relación binaria tiene dos; una ternaria tiene tres. También puede existir una relación recursiva, como un empleado que supervisa a otro empleado. En ese caso los roles distinguen los papeles de cada participación.

La cardinalidad máxima indica cuántas asociaciones son posibles; la participación mínima indica si la asociación es obligatoria u opcional. Para evitar ambigüedad conviene formular ambas direcciones en lenguaje natural antes de dibujar.

En nuestro caso: un socio puede tener cero o muchas facturas; cada factura corresponde a exactamente un socio. Que un socio pueda no tener facturas no significa que una factura pueda no tener socio. Son restricciones de extremos diferentes.

### Atributos de una relación

El precio acordado de un producto en una factura depende de esa venta, no solo del producto. La cantidad también pertenece al hecho de incluir un producto en determinada operación. Si se guarda cantidad como atributo de PRODUCTO, se confunden el catálogo y los movimientos.

Una asociación entre FACTURA y PRODUCTO suele requerir un detalle. Hay que preguntar si el mismo producto puede aparecer en más de un renglón de una factura. Si puede, el par factura-producto no identifica necesariamente cada línea. Un número de renglón dentro de la factura resuelve una necesidad distinta y debe justificarse con la regla correspondiente.

### Relaciones ternarias

Supongamos que se registra qué proveedor suministra cada producto a cada depósito. Reemplazar una relación ternaria por tres binarias puede perder la combinación concreta: saber que un proveedor trabaja con un producto y con un depósito no demuestra que suministre ese producto a ese depósito. La descomposición se justifica por las restricciones, no por una preferencia gráfica.

## Entidades débiles e identificadores externos

Una entidad débil necesita la identificación de otra entidad para completar su propio identificador. Dependencia de existencia y dependencia de identificación están relacionadas, pero no son equivalentes: que una factura necesite un socio no significa que se identifique necesariamente con la clave del socio.

Para LINEA_FACTURA, el número de renglón puede repetirse entre facturas. El renglón 1 de la factura 100 no es el mismo que el renglón 1 de la factura 101. Su identificación natural es el par (numeroFactura, numeroRenglon). La factura aporta una parte externa del identificador.

Un caso puede necesitar más de un propietario para identificar una ocurrencia. Por ejemplo, una existencia por producto y depósito puede identificarse con ambas claves. No debe inventarse un identificador externo doble por ver dos relaciones: primero se comprueba qué combinación distingue realmente la ocurrencia.

### Resolución paso a paso

Enunciado: cada factura posee renglones numerados desde uno, y cada renglón registra un producto y una cantidad. Primero se identifica FACTURA. Segundo se observa que numeroRenglon solo es único dentro de cada factura. Tercero se propone LINEA_FACTURA como dependiente en identificación. Cuarto se agrega la asociación con PRODUCTO. Finalmente se comprueba que dos renglones diferentes puedan referirse al mismo producto si el enunciado lo permite.

Una clave artificial para la línea puede agregarse en el diseño, pero la regla «no repetir el número de renglón en la misma factura» debe seguir representada.

## Jerarquías y especialización

Una jerarquía representa un tipo general y subtipos que comparten su identidad y propiedades comunes. Por ejemplo, PERSONA puede especializarse en PERSONA_FISICA y PERSONA_JURIDICA dentro de un modelo que necesite esa distinción. El subtipo hereda la identificación y puede incorporar atributos específicos.

Hay dos decisiones independientes. La cobertura determina si toda ocurrencia del supertipo debe pertenecer a algún subtipo. La exclusividad determina si puede pertenecer a más de uno. Una especialización puede ser total o parcial, y disjunta o solapada.

Si una persona puede ser simultáneamente cliente y proveedor, esos roles no deben hacerse disjuntos sin una regla que lo justifique. Si las categorías cambian con el tiempo, una clasificación permanente puede ser insuficiente y requerir historia.

No toda lista de categorías necesita una jerarquía. Si lo único que cambia es una etiqueta y no existen propiedades ni relaciones específicas, un atributo o una entidad de clasificación pueden ser más apropiados. La decisión se fundamenta en el dominio y en las operaciones requeridas.

## Historia y atributos derivados

El valor actual y la historia responden preguntas diferentes. «¿Cuál es el domicilio del socio?» puede resolverse con un valor vigente. «¿A qué domicilio se emitió una factura hace dos años?» necesita conservar el dato de la operación o una historia con vigencias.

Un diseño temporal puede incluir inicioVigencia y finVigencia. Debe definir si los extremos son inclusivos y si se permiten intervalos superpuestos para un mismo objeto. Guardar fechas sin esas reglas no garantiza una historia coherente.

El total de una factura puede derivarse de cantidades, precios y descuentos de sus líneas. Si se almacena también el total, hay que acordar cuándo se calcula, cómo se redondea y cómo se evita que contradiga al detalle. No basta declarar que es «derivado» si la implementación mantiene un valor separado.

### Ejemplo numérico

Una factura tiene dos líneas: tres unidades a 100 y dos unidades a 80. Sin impuestos ni descuentos, el total es 3 × 100 + 2 × 80 = 460. Si el precio vigente del primer producto cambia a 120, la factura histórica no debe pasar a 520. El precio de venta registrado pertenece al hecho histórico.

## Transformación al esquema relacional

Cada entidad fuerte se transforma normalmente en una relación con sus atributos y claves. Los atributos compuestos se expresan mediante los componentes necesarios. Los multivaluados requieren una relación separada que vincule al propietario con cada valor. Estas reglas deben adaptarse a las restricciones concretas del modelo.

En una relación uno a muchos, la clave del lado uno se incorpora como referencia en el lado muchos. Para FACTURA y SOCIO, FACTURA contiene numeroSocio. Si cada factura exige un socio, esa referencia no admite ausencia. La clave foránea asegura que el socio referenciado exista, pero por sí sola no demuestra todas las reglas de participación del modelo conceptual.

En una relación muchos a muchos se introduce una relación asociativa. Su clave debe estudiarse: puede ser la combinación de las claves participantes o necesitar más atributos si se permiten repeticiones del mismo par. Los atributos propios de la relación se incorporan allí.

En una relación uno a uno, la referencia debe acompañarse de una restricción de unicidad para representar el máximo uno. La ubicación de la referencia depende de participación y significado. Poner dos claves foráneas recíprocas no es una solución automática: puede introducir redundancia y problemas de consistencia.

### Esquema del caso continuo

```text
SOCIO(numeroSocio PK, nombre, fechaAlta, correo)
TELEFONO_SOCIO(numeroSocio PK FK -> SOCIO, telefono PK)
PRODUCTO(codigoProducto PK, descripcion, precioVigente)
FACTURA(numeroFactura PK, fecha, numeroSocio FK -> SOCIO)
LINEA_FACTURA(numeroFactura PK FK -> FACTURA,
              numeroRenglon PK,
              codigoProducto FK -> PRODUCTO,
              cantidad, precioUnitarioVenta)
DEPOSITO(codigoDeposito PK, nombre)
EXISTENCIA(codigoDeposito PK FK -> DEPOSITO,
           codigoProducto PK FK -> PRODUCTO,
           cantidadDisponible)
```

Aquí PK identifica los componentes de la clave primaria y FK una referencia. Una columna puede cumplir ambas funciones. La notación no indica todavía todos los dominios, nulabilidades ni políticas de borrado; deben documentarse en un diccionario de datos.

La clave de LINEA_FACTURA permite repetir un producto en dos renglones diferentes. Si el negocio lo prohíbe, se necesita además la unicidad del par (numeroFactura, codigoProducto). El esquema no debe imponer una de esas alternativas sin evidencia.

## Transformación de jerarquías

Una estrategia conserva una tabla para el supertipo y una por subtipo, con la clave de cada subtipo como referencia al supertipo. Facilita representar propiedades comunes y específicas. Sin restricciones adicionales, la mera existencia de esas tablas puede no asegurar cobertura total ni disyunción.

Otra estrategia usa una sola tabla con un discriminador y columnas específicas. Simplifica algunas consultas, pero puede producir valores ausentes y exige restricciones que hagan coherente el discriminador con los atributos. Una tercera usa tablas de tipos concretos, con duplicación de propiedades comunes y dificultades para referencias al conjunto general.

No hay una transformación universalmente superior. Hay que comparar integridad, consultas y costo de mantener las restricciones. En un examen, conviene explicar qué propiedad conceptual queda garantizada por la estructura y cuál requiere otro mecanismo.

## Diseño físico y diccionario de datos

El diccionario registra para cada atributo significado, tipo, tamaño o precisión, obligatoriedad, valores permitidos, clave y referencia. «Nombre: texto» puede ser insuficiente si no se acuerdan longitud, codificación y reglas de validación. Elegir longitudes arbitrarias demasiado cortas produce pérdida o rechazo de información legítima.

Para importes suele ser necesario un tipo decimal con precisión y escala adecuadas. La elección concreta depende del gestor y de los rangos requeridos. Para cantidades físicas puede necesitarse una unidad de medida; almacenar solo el número sin su significado deja ambiguo el dato.

Los índices ayudan a ciertas consultas y verificaciones, pero tienen costo de almacenamiento y actualización. Una clave conceptual no se define porque se quiera un índice, y un índice no debe confundirse con una regla de negocio. El diseño físico implementa el modelo: no corrige por sí solo un modelo equivocado.

El aula presenta CasER, herramientas de diagramación y MySQL Workbench. Para estudiar, el orden útil es: acordar el dominio, dibujar el modelo, transformar a relaciones, revisar restricciones y recién después concretar el esquema en la herramienta. La capacidad de una aplicación para generar tablas no demuestra que el modelo original sea correcto.

## Revisión del modelo mediante contraejemplos

La revisión mejora si intenta construir datos que el modelo permitiría pero el negocio rechaza. Probá una factura sin socio, dos renglones iguales en la misma factura, una referencia a un producto inexistente o una cantidad negativa. Después identificá qué restricción impediría cada caso.

También hay que buscar situaciones legítimas que el modelo prohíbe. ¿Puede existir un socio sin compras? ¿Un producto sin ventas? ¿Un depósito vacío? Si el negocio las admite, la estructura no debe obligar a inventar operaciones para registrarlas.

Finalmente se prueban consultas representativas: productos vendidos por socio, facturas con sus líneas, existencias por depósito e historial de precios de venta. Si una consulta depende de un dato que nunca se guardó, no se soluciona agregando una operación de consulta: falta un hecho en el modelo.

## Ejercicios con resolución orientativa

**1. Biblioteca.** Una persona puede tomar varios préstamos y un ejemplar puede prestarse muchas veces a lo largo del tiempo. ¿Alcanza una relación persona-ejemplar con clave compuesta por ambos? No, si la misma persona puede volver a pedir el mismo ejemplar. Debe distinguirse cada préstamo mediante un identificador o un conjunto de atributos cuya unicidad esté garantizada. La fecha por sí sola puede ser insuficiente.

**2. Pedidos y líneas.** Cada pedido numera sus líneas desde uno. ¿numeroLinea es clave global? No. La identificación depende del pedido. Una clave posible es (numeroPedido, numeroLinea). Si se agrega idLinea, la combinación anterior sigue necesitando unicidad si forma parte de la regla.

**3. Participación.** Un cliente puede no haber comprado, pero cada venta tiene un cliente. ¿La referencia cliente en VENTA admite ausencia? No según esa regla. En cambio, no es obligatorio que toda fila de CLIENTE aparezca en VENTA.

**4. Jerarquía.** Una persona puede ser estudiante y docente. ¿La especialización es disjunta? No, porque una misma ocurrencia puede pertenecer a ambos subtipos. La cobertura total solo puede decidirse si se sabe que no existen otras personas en el universo considerado.

**5. Historia.** Un proveedor cambia de nombre. ¿Las compras anteriores deben mostrar el nombre nuevo? Depende de qué hecho se pretende conservar. La referencia al proveedor actual y la denominación consignada en un documento histórico pueden ser datos diferentes. Hay que explicitar el requerimiento.

**6. Multivaluados.** ¿Por qué no crear cinco columnas para teléfonos? Porque impone un límite y complica búsquedas y restricciones. Una relación dependiente admite una cantidad variable y permite definir si un mismo número puede repetirse para el propietario.

**7. Claves.** Si A identifica una fila, ¿(A, B) es clave candidata? No si B es prescindible. El conjunto sigue identificando, pero no es mínimo. Esa diferencia permite distinguir superclave de candidata.

## Caso integrador para resolver

Diseñá una base para una cooperativa que además alquila maquinaria. Cada máquina tiene código, modelo y fechas de mantenimiento. Un socio puede realizar varios alquileres; cada alquiler incluye una o más máquinas y conserva la tarifa acordada. Se registran retiros y devoluciones, y una máquina no puede alquilarse durante mantenimiento.

Entregables: glosario; lista de reglas y preguntas abiertas; DER con mínimos y máximos; identificación de entidades dependientes; modelo relacional con claves; diccionario de datos; ejemplos válidos; contraejemplos; y una explicación de las restricciones que no quedan garantizadas por claves y referencias simples.

No supongas sin justificar si un alquiler permite devoluciones parciales, si una máquina puede retirarse varias veces dentro del mismo contrato o si las tarifas cambian durante el alquiler. Cada respuesta modifica qué hechos deben identificarse y conservarse.

## Fuentes y pendientes de validación

Se consultaron las secciones visibles de [práctica](https://plataformaed.unnoba.edu.ar/course/view.php?id=11447&section=3#tabs-tree-start), [herramientas](https://plataformaed.unnoba.edu.ar/course/view.php?id=11447&section=2#tabs-tree-start) y [actividades](https://plataformaed.unnoba.edu.ar/course/view.php?id=11447&section=4#tabs-tree-start). Allí se confirman modelado, identificadores externos, jerarquías, historia y obtención de esquemas con PK, CK, FK y nulabilidad. El aula referencia el libro de Bertone y Thomas; se registra como bibliografía del curso, sin afirmar su lectura completa.

Pendiente: verificar notación exacta, definiciones de cada etapa, reglas de transformación y alcance del programa con los PDF y clases. Las soluciones anteriores son didácticas y originales; no se presentan como respuestas oficiales de los casos evaluados.
