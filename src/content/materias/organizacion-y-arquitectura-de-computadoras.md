---
nombre: "Organización y Arquitectura de Computadoras"
code: "01476"
resumen: "Manual de representación numérica, lógica digital, CPU, memoria, buses, ensamblador 8086, interrupciones y GPU, con talleres resueltos y hojas de consulta."
---

## Cómo estudiar Organización y Arquitectura de Computadoras

Esta materia conecta dos preguntas: **cómo se representa la información** y **cómo una máquina ejecuta operaciones sobre ella**. El recorrido no consiste en memorizar nombres de piezas. Hay que poder seguir un dato desde sus bits hasta un registro, una dirección de memoria, una instrucción, un resultado y las condiciones que permiten interpretarlo correctamente.

El manual sigue el material accesible del aula [Organización y Arquitectura de Computadoras · 01476 · 2025-1C](https://plataformaed.unnoba.edu.ar/course/view.php?id=9991). Se obtuvieron los **37 PDF visibles, 991 páginas**, además de una presentación de 14 diapositivas sobre interrupciones y 25 archivos de ejemplos de ensamblador/texto. La descarga completa de esos PDF se realizó antes de redactar. Se extrajo el texto de todos; se leyeron consignas de los cuatro TP, cronogramas y secciones relevantes de teoría y ejemplos, con inspección visual de seis páginas seleccionadas con diagramas y tablas. No se afirma haber auditado individualmente todas las páginas del manual Intel, todas las figuras, videos o bibliografía externa.

No se encontró un programa independiente descargable entre los recursos accesibles. La cobertura se contrasta con las ocho clases teóricas T1–T8, los TP1–TP4 y los tres cronogramas obtenidos. Las diez unidades de este manual son **agrupaciones editoriales para estudiar**, no una numeración oficial del programa. Se incluyen lógica, SoP, PoS y Karnaugh porque aparecen en el cronograma de Pergamino. Los cronogramas de Junín presentan el recorrido práctico en dos evaluaciones históricas; sus fechas no se ofrecen como calendario vigente.

### Cómo trabajar cada capítulo

Leé primero el contrato de los datos: ancho, codificación, escala y unidades. Reconstruí el ejemplo sin mirar su resultado; después resolvé la práctica y compará con las respuestas justificadas. En ensamblador, anotá registros de entrada, registros modificados, memoria válida y estado de la pila. Una rutina que funciona para tres positivos puede fallar con longitud cero o con todos los valores negativos.

Cada capítulo incorpora una hoja de fórmulas, reglas y procedimientos; cada unidad reúne las de sus capítulos; el formulario general permite consultar todo desde un único acceso. En los temas de programación, la hoja contiene contratos y reglas de instrucciones, en lugar de inventar ecuaciones donde no ayudan. Los talleres finales combinan temas y desarrollan problemas originales. La cantidad de páginas no sustituye la capacidad de resolver consignas nuevas.

### Convenciones y entorno de ejecución

Usamos bit, byte de ocho bits y word de dieciséis bits cuando hablamos del 8086. BSS significa binario sin signo; SyM, signo y magnitud; Ca1 y Ca2, complementos a uno y a dos. En punto fijo siempre se declara el ancho total y la cantidad de bits fraccionarios. Los literales hexadecimales terminan en h, los binarios en b; cuando se escribe código con sintaxis Intel se agrega un cero inicial a un hexadecimal que comienza con letra.

El ensamblador es de 16 bits, con convenciones MASM/EMU8086 y servicios DOS cuando se indica. No se presenta como código ejecutable directamente en una consola moderna de Windows. Los fragmentos comprobados se ensamblaron y ejecutaron en un entorno de prueba de CPU de 16 bits; las funciones de DOS se explican por sus contratos y no se confunden con esa prueba de CPU. Los ejemplos de hardware de las diapositivas son históricos, sin atribuir sus especificaciones a todos los equipos actuales.

### Qué se revisó y qué queda pendiente

Se comprobaron cálculos de conversiones, formato de punto fijo, IEEE 754, direcciones, campos de caché, rendimiento y lógica. Se ejecutaron fragmentos de suma, copia, conteo de bits, máximo por pila, longitud acotada y banderas con casos extremos. Las fuentes y el alcance de las pruebas se documentan al final. La revisión académica docente permanece pendiente; la suficiencia para una evaluación se contrasta resolviendo los TP y atendiendo los criterios de la cátedra.

## Formulario general de Organización y Arquitectura de Computadoras

Esta recopilación conserva las condiciones de uso. Para comprender una relación y practicar su aplicación, volvé al capítulo correspondiente.

### Capítulo 1 · Bits, información y sistemas posicionales

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Patrones de n bits | $2^n$ | n entero no negativo; contar patrones no equivale siempre a contar valores distintos. |
| Capacidad | posiciones × bits por posición | Convertir a bytes dividiendo por ocho; distinguir unidad direccionable. |
| Unidades | 1 KiB = 1024 B; 1 kB = 1000 B | B significa byte; b significa bit. |

### Capítulo 2 · Conversión entre bases y fracciones binarias

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema posicional | $x=\sum_i d_i b^i$ | Base b entera mayor que uno; dígitos entre cero y b−1, con exponentes negativos para fracciones. |
| Agrupación | hexadecimal: 4 bits; octal: 3 bits | Agrupar desde la coma hacia cada extremo; completar con ceros donde no se cambie el valor. |
| Fracción finita en binario | denominador reducido potencia de dos | Criterio para racionales; no convierte 1/10 en una expansión finita. |

### Capítulo 3 · Enteros sin signo, signo y magnitud y complementos

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| BSS | $0\le x\le2^n-1$ | Todos los pesos son positivos. |
| Ca2 | $x=U$ si U<2ⁿ⁻¹; $x=U-2^n$ en otro caso | U es el patrón interpretado sin signo, con ancho n. |
| SyM y Ca1 | $-(2^{n-1}-1)\le x\le2^{n-1}-1$ | Dos patrones de cero; 2ⁿ−1 valores distintos. |
| Exceso K | $x=U-K$ | Rango −K a 2ⁿ−1−K si no hay patrones reservados. |

### Capítulo 4 · Ancho de palabra, extensión y conversiones de representación

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ampliar BSS | anteponer ceros | Conserva el valor sin signo. |
| Ampliar Ca2 | repetir el bit de signo | No aplicar como regla universal a SyM ni exceso. |
| 8086 | CBW: AL→AX por signo; CWD: AX→DX:AX por signo | Las cargas de AL no limpian AH por sí mismas. |
| Reducir ancho | comprobar rango antes de recortar | Conservar bits bajos da congruencia modular, no necesariamente igualdad del valor. |

### Capítulo 5 · Aritmética de ancho fijo y banderas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Resultado de suma | $R=(A+B)\bmod2^n$ | Los n bits bajos no informan solos si hubo desbordamiento. |
| CF | suma: acarreo; resta: préstamo sin signo | En resta, CF=1 si A<B como patrones BSS. |
| OF | suma: igual signo de entradas y signo distinto de salida | Para Ca2; en resta: signos de entradas diferentes y salida con signo distinto de A. |
| ZF y SF | ZF: resultado cero; SF: bit superior | SF no sustituye por sí sola una comparación menor con signo; INC y DEC preservan CF. |

### Capítulo 6 · Punto fijo: escala, cuantización y operaciones

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Punto fijo Ca2 | $x=I2^{-f}$; $\Delta=2^{-f}$ | n bits totales; f fraccionarios; I entero Ca2. |
| Rango | $[-2^{n-1-f},2^{n-1-f}-2^{-f}]$ | Indicar si la notación Q incluye el signo antes de usarla. |
| Cuantización | $\vert e\vert \le\Delta/2$ al más próximo | Sin desbordamiento ni saturación; truncamiento hacia cero tiene error menor que Δ. |
| Producto | $x_1x_2=I_1I_2\cdot2^{-(f_1+f_2)}$ | Ampliar el producto y reescalar con política de redondeo explícita. |

### Capítulo 7 · IEEE 754: codificar y decodificar punto flotante

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Normal binary32 | $(-1)^s(1+F/2^{23})2^{E-127}$ | 1≤E≤254; signo 1 bit, E 8 bits, F 23 bits. |
| Subnormal binary32 | $(-1)^s(F/2^{23})2^{-126}$ | E=0, F≠0; no hay uno implícito. |
| Especiales | E=0, F=0: cero; E=255, F=0: infinito; E=255, F≠0: NaN | El signo permite dos ceros; NaN no es un valor ordenado ordinario. |
| Mínimos positivos | normal: $2^{-126}$; subnormal: $2^{-149}$ | Son umbrales distintos de binary32. |

### Capítulo 8 · Redondeo, errores y algoritmos con flotantes

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Espaciado normal binary32 | $2^{e-23}$ en $[2^e,2^{e+1})$ | e es exponente real no sesgado; no aplicar a subnormales. |
| Error absoluto y relativo | $\vert \hat x-x\vert $; $\vert \hat x-x\vert /\vert x\vert $ | Relativo definido de esta forma solo si x≠0. |
| Comparación tolerante | $\vert a-b\vert \le\max(\epsilon_a,\epsilon_r\max(\vert a\vert ,\vert b\vert ))$ | Elegir tolerancias por el problema; no reemplaza pruebas de estabilidad. |
| Empate al par | elegir el retenido de bit final par | Regla de redondeo, no truncamiento automático. |

### Capítulo 9 · Álgebra de Boole, compuertas y máscaras

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| De Morgan | $\overline{ab}=\bar a+\bar b$; $\overline{a+b}=\bar a\bar b$ | + significa OR, producto AND; no aritmética entera. |
| Máscara bit k | consultar AND 2ᵏ; activar OR 2ᵏ; invertir XOR 2ᵏ | Para limpiar, AND con complemento de la máscara al ancho del dato. |
| Extraer campo | $(x\gg k)\mathbin{\&}(2^w-1)$ | w bits, desplazamiento lógico de un patrón sin signo. |
| TEST | AND sin guardar resultado | En 8086 actualiza condiciones; NOT no actualiza flags. |

### Capítulo 10 · Circuitos combinacionales, SoP, PoS y Karnaugh

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| SoP | OR de minterminos donde F=1 | En cada mintermino: variable directa para entrada uno, complementada para cero. |
| PoS | AND de maxterminos donde F=0 | En cada maxtermino: variable directa para entrada cero, complementada para uno. |
| Karnaugh | grupos de 1,2,4,8… celdas adyacentes | Orden Gray; se permite envolver bordes y superponer; diagonales no son adyacentes. |
| Multiplexor | k selectores eligen entre 2ᵏ entradas | Caso completo; no confundir selectores con entradas de datos. |

### Capítulo 11 · Organización, arquitectura y programa almacenado

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arquitectura | contrato visible para software | ISA, registros, formatos y reglas; diferenciar de implementación. |
| Von Neumann y Harvard | compartir o separar memorias/caminos de instrucciones y datos | Los sistemas reales pueden combinar rasgos por nivel. |
| Programa almacenado | los bits se interpretan según el contexto de ejecución | Dirección y contenido no son el mismo objeto. |

### Capítulo 12 · CPU, microoperaciones y ciclo de instrucción

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Búsqueda conceptual | MAR←PC; MDR←Mem[MAR]; IR←MDR | Modelo educativo; los registros internos concretos dependen del diseño. |
| Continuación | PC←PC+longitud de instrucción | En una traza de direcciones por bytes no se suma siempre uno. |
| Control | microoperaciones ≠ instrucciones del usuario | El control puede implementarse cableado, microprogramado o mediante combinaciones. |
| Pipeline | solapa etapas de instrucciones distintas | Dependencias, recursos y cambios de flujo pueden introducir burbujas. |

### Capítulo 13 · Rendimiento: frecuencia, CPI y límites de la mejora

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tiempo CPU | $T=N\cdot CPI/f$ | N instrucciones ejecutadas; f ciclos/s; CPI promedio de esa carga. |
| CPI ponderado | $CPI=\sum_i p_i CPI_i$ | pᵢ son fracciones de instrucciones ejecutadas y suman uno. |
| Amdahl | $S=1/((1-p)+p/s)$ | p fracción del tiempo original mejorada; mismo trabajo y costos restantes constantes. |
| Pipeline ideal | $T=(k+n-1)\tau$ | k etapas balanceadas, n instrucciones independientes, sin burbujas; frente a nkτ sin solapamiento. |

### Capítulo 14 · ISA, CISC, RISC y codificación de instrucciones

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Campos de registro | r bits identifican hasta 2ʳ registros | No determina la longitud de toda la instrucción. |
| ISA | opcode + operandos según formatos admitidos | Dirección efectiva, inmediato y contenido de registro son objetos distintos. |
| CISC/RISC | tendencias de diseño, no una fórmula de rendimiento | Comparar tiempo del mismo trabajo, no solo cantidad de instrucciones. |

### Capítulo 15 · Memoria, direccionamiento, endian y organización física

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Capacidad direccionable | $2^a\cdot w$ bits | a bits de dirección, unidad direccionable de w bits; para bytes w=8. |
| Little endian | byte menos significativo en dirección menor | No invierte bits dentro del byte ni la secuencia de una cadena. |
| Chips | bancos por profundidad × chips en paralelo por ancho | Aclarar selección de byte si el sistema direcciona por bytes. |
| SRAM/DRAM | ambas volátiles; DRAM necesita refresco | No confundir acceso aleatorio con contenido aleatorio. |

### Capítulo 16 · Caché: localidad, mapeo y trazas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conjuntos | $S=C/(BA)$ | C capacidad de datos en bytes, B bytes/bloque, A vías. |
| Campos | offset=log₂B; índice=log₂S; etiqueta=resto | Tamaños potencia de dos y direccionamiento por bytes. |
| Tiempo medio | $AMAT=t_h+mp$ | p penalización adicional; m tasa de fallos; definir si la penalización incluye el acceso inicial. |
| Dos niveles | $AMAT=t_1+m_1(t_2+m_2p_M)$ | m₂ tasa local de fallos de L2; no sustituir una tasa global sin convertirla. |

### Capítulo 17 · Memoria virtual, almacenamiento y RAID

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paginación | dirección física = marco × tamaño de página + offset | La traducción conserva offset; tamaño de página potencia de dos facilita partición. |
| Transferencia ideal | $T=L+N/BW$ | L latencia fija, N bytes, BW bytes/s; sin colas ni otros costos no modelados. |
| RAID nominal | RAID0: ND; RAID1 de espejo completo: D; RAID5: (N−1)D; RAID6: (N−2)D | Discos iguales D, organización indicada y sin reservas; redundancia no es backup. |
| Paridad XOR | $P=A\oplus B\oplus C$ | Recuperar B con P XOR A XOR C; no es suma con acarreo. |

### Capítulo 18 · Buses, arbitraje y transferencias

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tasa bruta | $BW=Wqf$ bits/s | W bits/transferencia, q transferencias/ciclo, f ciclos/s. |
| Tasa efectiva | bytes útiles / tiempo total | Incluir direcciones, arbitraje, esperas y protocolo si no están ya descontados. |
| Síncrono/asíncrono | reloj común / coordinación por protocolo de solicitud y respuesta | Ambos requieren reglas temporales; asíncrono no significa sin tiempos. |
| Arbitraje | decide qué solicitante usa el recurso compartido | Evaluar prioridad y equidad; las prioridades fijas pueden provocar inanición. |

### Capítulo 19 · Entrada/salida: sondeo, interrupciones y DMA

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sondeo | ocupación ideal ≈ costo por consulta / período | Antes de sumar costo de transferencias o interferencia de otras tareas. |
| Interrupción | notificación + guardado de estado + atención + retorno | Hardware y manejador comparten la responsabilidad de preservar contexto. |
| DMA | configurar bloque, transferir sin copiar cada dato por CPU | No elimina preparación, arbitraje, notificación ni problemas de coherencia. |

### Capítulo 20 · 8086: registros, segmentos y estructura de un programa

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección física 8086 | $16\cdot segmento+offset$ | Espacio físico original de 20 bits; tratar alias y límite del bus. |
| Mitades | AX = 256·AH + AL | Una carga en AL no limpia AH; análogo para BX, CX y DX. |
| Segmentos | CS:IP código; DS datos; SS:SP pila | Son selecciones por contexto e instrucción, no permisos de memoria protegida. |
| Terminar DOS | AX=4C00h; INT 21h | Guardar resultados antes: AX se reutiliza para el servicio. |

### Capítulo 21 · Variables, operandos y modos de direccionamiento 8086

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arreglo | dirección de elemento = base + índice × tamaño | DB ocupa 1 byte; DW ocupa 2; índice inicial cero en los ejemplos. |
| Modos 8086 | BX/BP + SI/DI + desplazamiento, en combinaciones válidas | No [AX], [BX+BP] ni [SI+DI] en los modos ordinarios del 8086. |
| Segmento por defecto | dirección con BP usa SS; datos ordinarios restantes suelen usar DS | Puede existir prefijo explícito; las instrucciones de cadena tienen sus reglas. |
| Dirección frente a dato | OFFSET/LEA obtienen desplazamiento; MOV desde memoria lee contenido | El tamaño del operando debe quedar determinado. |

### Capítulo 22 · Comparaciones, saltos y bucles con invariantes

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | JE: ZF=1; JNE: ZF=0 | CMP calcula condiciones de resta sin guardar el resultado. |
| Comparación BSS | JB: CF=1; JA: CF=0 y ZF=0 | JAE: CF=0; JBE: CF=1 o ZF=1. |
| Comparación Ca2 | JL: SF≠OF; JG: ZF=0 y SF=OF | JGE: SF=OF; JLE: ZF=1 o SF≠OF. |
| LOOP | CX←CX−1; salta si CX≠0 | No cambia flags; comprobar CX=0 antes si el arreglo puede estar vacío. |

### Capítulo 23 · Arreglos, cadenas y tratamiento de casos límite

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud y capacidad | cadena cero: capacidad ≥ longitud + 1 | Terminado en cero y terminado en dólar son formatos distintos. |
| Máximo | inicializar con primer elemento en arreglo no vacío | Inicializar en cero falla para arreglos de negativos; definir resultado para vacío. |
| Contar palabras | incrementar solo al pasar de separador a carácter de palabra | Definir separadores y estado inicial fuera; probar espacios repetidos y cadena vacía. |

### Capítulo 24 · Operaciones de bits, multiplicación y división en 8086

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conteo de bits | SHR saca bit a CF; ADC acumula carry | Recorrer ancho acordado y preservar registros prometidos. |
| Exponente binary32 por bytes | E=((b 3 AND 7Fh)<<1) OR (b 2>>7) | b 0 es byte de dirección menor en little endian; devuelve exponente sesgado. |
| MUL | byte: AL×operando→AX; word: AX×operando→DX:AX | Sin signo; las formas originales de IMUL tienen semántica con signo. |
| DIV | byte: AX/divisor→AL cociente, AH resto; word: DX:AX/divisor→AX y DX | Preparar parte alta; IDIV requiere extensión de signo; cero o cociente fuera de rango produce error. |

### Capítulo 25 · Pila, CALL, RET y parámetros

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| PUSH/POP word | PUSH baja SP en 2; POP lo sube en 2 | Pila 8086 de words, LIFO, almacenada little endian. |
| Marco cercano | BP+0 BP anterior; BP+2 IP retorno; BP+4 último parámetro word | Tras PUSH BP / MOV BP, SP; llamadas lejanas u otro prólogo cambian el esquema. |
| RET n | recupera retorno y retira n bytes de parámetros | No limpiar otra vez en el llamador si ya se usó esa convención. |
| Contrato | entradas, salidas, registros preservados y precondiciones | No restaurar el valor viejo del registro que debe devolver el resultado. |

### Capítulo 26 · Subrutinas de cadenas y diseño de interfaces seguras

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud acotada | examinar como máximo la capacidad legible | Distinguir longitud cero válida de ausencia de terminador. |
| Concatenación | capacidad destino ≥ L1+L2+1 | Cadenas cero, regiones válidas y política de solapamiento definida. |
| Composición | preservar entradas aún necesarias y resultados intermedios | Una segunda llamada puede sobrescribir el registro de salida de la primera. |

### Capítulo 27 · Interrupciones 8086 y servicios de DOS

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Servicio DOS | AH selecciona función; INT 21h la invoca | 01h lee con eco; 02h muestra DL; 09h usa DS:DX terminado en dólar. |
| Buffer 0Ah | capacidad, conteo, caracteres y CR | Conteo excluye CR; reservar el área declarada, incluido CR; no pasar metadata a 09h. |
| Vector 8086 | entrada tipo t en dirección física 4t | Cada entrada guarda IP y CS; la entrada no es necesariamente el comienzo del manejador. |
| Retorno de interrupción | IRET restaura IP, CS y FLAGS | No equivale a RET cercano; los registros generales requieren preservación por software. |

### Capítulo 28 · Multiprocesadores, coherencia y modelos de paralelismo

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paralelismo fijo | $S_N=1/((1-p)+p/N)$; eficiencia=Sₙ/N | Modelo ideal sin costos de comunicación; p fracción de tiempo paralelizable. |
| MESI | M modificado; E exclusivo limpio; S compartido limpio; I inválido | Protocolo conceptual de líneas; coherencia no garantiza atomicidad de una secuencia. |
| UMA/NUMA | uniformidad / dependencia del acceso con la ubicación de memoria | Un espacio compartido no implica igual latencia para todos los accesos. |
| SMT | hilos arquitectónicos comparten recursos de un núcleo | No equivale a duplicar físicamente todos sus recursos. |

### Capítulo 29 · GPU, memoria y costo de transferencias

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| GPU extremo a extremo | T = preparación + transferencias + kernel + sincronización necesaria | Amortizar datos reutilizados; no comparar solo un tramo contra toda la CPU. |
| Intensidad | I = operaciones / bytes transferidos del nivel definido | No mezclar bytes de distintos niveles de memoria al aplicar un techo. |
| Límite simplificado | $P\le\min(P_{pico},BW\cdot I)$ | Modelo Roofline como límite; control, latencia y ocupación pueden reducir rendimiento. |
| SIMT | hilos organizados y coordinados por grupos de ejecución | La divergencia puede disminuir eficiencia; no asumir sincronización implícita universal. |

### Capítulo 30 · Imágenes, filtros y pipeline gráfico

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Imagen sin compresión | $N=W\cdot H\cdot C\cdot b$ bytes | C canales de b bytes; excluye cabeceras, stride adicional y compresión. |
| Canal intercalado | offset = b·[C(rW+c)+k] | r fila, c columna, k canal, índices desde cero; ajustar si hay stride o formato planar. |
| Filtro local | suma de productos de vecindad por kernel | Distinguir convolución de correlación; definir bordes y saturación. |
| Paralelizar salida | leer entrada estable y escribir destino independiente | Evitar actualizar datos que otros hilos todavía necesitan como entrada original. |

### Capítulo 31 · Taller integrador de representación y rendimiento

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Protocolo de conversión | decodificar → comprobar rango → codificar → verificar | Indicar formato y escala; una escritura hexadecimal no define por sí sola el tipo. |
| Suma de n bytes BSS | máximo 255n | Elegir ancho del acumulador según el máximo permitido, no el promedio observado. |
| Comparación de mejoras | calcular tiempo con N, CPI y f nuevos | Una reducción de CPI no garantiza menor tiempo si aumenta N. |

### Capítulo 32 · Taller integrador de memoria y programas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Traza de memoria | dirección efectiva → física → campos de caché → contenido | La etiqueta válida decide hit; el contenido depende de bytes y endian. |
| Pila comprobable | SP tras retorno = SP antes de parámetros | Bajo convenio completo y rutina que no deja datos pendientes. |
| Validación | casos normales + vacío + extremos + ambas ramas + datos inválidos | Pruebas de CPU no equivalen a ejecutar DOS ni todos los programas en EMU8086. |

## Capítulo 1 · Bits, información y sistemas posicionales

### Qué representa una computadora

Un bit es una variable que puede tomar dos valores distinguibles. No es por sí mismo un número positivo, un signo ni una instrucción. La secuencia `01000001` puede interpretarse como el entero 65, el carácter A en ASCII o parte de una instrucción. La interpretación depende del formato, del tamaño y de la operación que la utiliza. Esta separación entre **patrón almacenado** y **valor interpretado** explica la mayoría de los problemas de representación.

Con n bits hay $2^n$ patrones diferentes: para cada posición hay dos elecciones independientes. Eso no implica que siempre puedan almacenarse los números de 0 a $2^n-1$: ese es el rango de una codificación particular, binario sin signo. Si se reserva un patrón para una condición especial, o dos patrones para cero, cambia el conjunto de valores representables. Antes de convertir un número, escribí siempre el contrato: cantidad de bits, codificación, unidad y significado.

Un byte contiene ocho bits. Una palabra es una unidad natural de una arquitectura: en el 8086 tiene 16 bits, pero no es universalmente sinónimo de dos bytes. En este manual, las directivas `DB` y `DW` corresponden a byte y word de 16 bits en el entorno 8086. Un campo puede ocupar varios bytes sin ser una palabra nativa del procesador.

### El peso de cada posición

En base b, con dígitos $d_i$ entre 0 y b−1, el valor es $\sum_i d_i b^i$. La posición de la derecha en la parte entera tiene peso 1; las siguientes, b, b², etc. Para una fracción, las posiciones a la derecha de la coma tienen pesos b⁻¹, b⁻², etc. La base describe el sistema de escritura; no altera el número.

Por ejemplo, $(2301)_4=2\cdot64+3\cdot16+0\cdot4+1=177$. La escritura `2304` no es válida en base cuatro porque el dígito 4 no pertenece al alfabeto permitido. En hexadecimal se agregan A, B, C, D, E y F para los valores 10 a 15. Que A sea una letra al escribir no la convierte en texto ASCII: en un numeral hexadecimal ocupa el papel de dígito.

Los ceros a la izquierda no cambian el valor sin signo, pero sí explicitan el ancho: `0011` y `11` valen tres, aunque el primero documenta cuatro bits. En cambio, agregar un cero a la derecha multiplica por la base cuando no se mueve la coma. En fracciones, agregar ceros al final no cambia el valor.

### Capacidad y unidades

Las unidades decimales y binarias no son intercambiables: 1 kB son 1000 bytes y 1 KiB son 1024 bytes; 1 MB son $10^6$ bytes y 1 MiB son $2^{20}$. Una capacidad de 8 GiB corresponde a $2^{33}$ bytes, no a $2^{33}$ bits. Para convertirla a bits hay que multiplicar por ocho. Un enlace medido en Mb/s expresa millones de bits por segundo; para obtener un máximo ideal en MB/s se divide por ocho, antes de considerar protocolos.

**Ejemplo desarrollado.** Una imagen de 640×480 píxeles usa tres canales de un byte por píxel. Sin compresión, cabeceras ni alineación, necesita $640\cdot480\cdot3=921600$ bytes, equivalentes a 900 KiB. No son 900 kB. Si se almacena un canal alfa adicional, pasa a 1.228.800 bytes. La resolución de la imagen y los bits por píxel son factores diferentes.

### Práctica razonada

**1.1.** ¿Cuántos identificadores diferentes permiten doce bits? **Respuesta:** 4096. Si se reserva el cero como identificador inválido, quedan 4095 utilizables, aunque siguen existiendo 4096 patrones.

**1.2.** Interpretá $(102)_3$. **Respuesta:** $1\cdot9+0\cdot3+2=11$. No se suman los dígitos sin ponderar.

**1.3.** Una memoria tiene 2 Ki posiciones de 16 bits. ¿Capacidad? **Respuesta:** 2048×16 bits = 4096 bytes = 4 KiB. La cantidad de posiciones y el ancho de cada posición deben multiplicarse.

**1.4.** ¿Por qué un byte no tiene un único valor decimal? **Respuesta:** primero hay que indicar su codificación; `11111111` vale 255 sin signo y −1 en complemento a dos de ocho bits.

### Hoja de fórmulas y relaciones del capítulo 1

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Patrones de n bits | $2^n$ | n entero no negativo; contar patrones no equivale siempre a contar valores distintos. |
| Capacidad | posiciones × bits por posición | Convertir a bytes dividiendo por ocho; distinguir unidad direccionable. |
| Unidades | 1 KiB = 1024 B; 1 kB = 1000 B | B significa byte; b significa bit. |

## Capítulo 2 · Conversión entre bases y fracciones binarias

### De una escritura a su valor

Para pasar a decimal se desarrolla la suma de pesos. $(101101.011)_2=32+8+4+1+1/4+1/8=45.375$. La primera posición fraccionaria vale un medio, aunque su dígito sea cero. Omitir ese lugar y mover los restantes cambia el número.

Para convertir un entero no negativo desde decimal a base b, dividimos sucesivamente por b y guardamos los restos. El primer resto es el dígito menos significativo, por lo que se leen en orden inverso. La división funciona porque $N=bq+r$, con $0\le r<b$: r determina la última cifra y q contiene las anteriores.

**Ejemplo.** Para 173 en base dos, los cocientes sucesivos son 86, 43, 21, 10, 5, 2, 1 y 0, con restos 1, 0, 1, 1, 0, 1, 0 y 1. Invirtiéndolos resulta `10101101`. Se comprueba mediante $128+32+8+4+1=173$. Una conversión no termina al escribir una cadena: volver al valor original es una comprobación barata y útil.

### El puente hexadecimal

Como $16=2^4$, cada dígito hexadecimal corresponde exactamente a cuatro bits. Para convertir un entero binario se agrupa de derecha a izquierda y se completa con ceros por la izquierda. `10101101` se separa `1010 1101` y se escribe ADh. En la parte fraccionaria se agrupa desde la coma hacia la derecha, completando al final: `.101` equivale a `.1010`, luego `.A` hexadecimal. Para octal se usan grupos de tres bits porque $8=2^3$.

En sintaxis Intel habitual, un hexadecimal que comienza con letra necesita un cero inicial: `0ADh`. Ese cero ayuda al ensamblador a reconocer un número en vez de un identificador; no agrega un byte al operando. No hay que confundir notación de código con orden de bytes en memoria, que se estudia más adelante.

### Fracciones: multiplicaciones sucesivas

Para una fracción $0\le x<1$, multiplicamos por la base. La parte entera de bx es el próximo dígito; se continúa con su parte fraccionaria. Los dígitos se leen en el mismo orden en que aparecen. Para 0.625: 0.625×2=1.25 da 1; 0.25×2=0.5 da 0; 0.5×2=1 da 1. Así $0.625=(0.101)_2$.

Para 0.1 decimal, los restos se repiten y obtenemos $0.000110011\ldots_2$. La repetición no es un fallo de la computadora: un racional tiene expansión finita en base dos solo cuando, reducida la fracción, su denominador es una potencia de dos. 1/10 contiene un factor cinco que no puede eliminarse multiplicando por potencias de dos. A la inversa, 3/8 tiene tres posiciones binarias exactas.

### Elegir cuántos dígitos conservar

Si cortamos una fracción positiva después de f bits, el error de truncamiento es menor que $2^{-f}$. Para redondeo al más próximo, el error absoluto es como máximo media unidad del último lugar, salvo condiciones de saturación o desborde. Si hay empate, debe indicarse la regla; aquí usaremos empate al par cuando corresponda. La precisión es una propiedad del formato, no de la cantidad de dígitos que se imprimen después.

**Ejemplo.** 0.1 con ocho bits fraccionarios queda 0.00011001 por truncamiento: $25/256=0.09765625$. Al redondear se elige $26/256=0.1015625$, cuyo error 0.0015625 es menor. La cadena no se interpreta como el entero 26 hasta explicar que su escala es 1/256.

### Práctica razonada

**2.1.** Convertí 45.375 a hexadecimal. **Respuesta:** 2Dh para la parte entera y .6 para la fracción; resultado 2D.6h. En binario es `0010 1101.0110`.

**2.2.** ¿Es exacto 7/20 con seis bits fraccionarios? **Respuesta:** no, el denominador reducido tiene factor cinco. El valor escalado es 22.4; truncar produce 22/64=0.34375 y redondear al más próximo también elige 22.

**2.3.** Convertí 3AFh a decimal. **Respuesta:** $3\cdot256+10\cdot16+15=943$. Los dígitos A y F valen 10 y 15.

**2.4.** ¿Se pueden agrupar tres bits para ir a hexadecimal? **Respuesta:** no. Los grupos deben corresponder a potencias de la base de destino: cuatro bits por dígito hexadecimal.

### Hoja de fórmulas y relaciones del capítulo 2

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema posicional | $x=\sum_i d_i b^i$ | Base b entera mayor que uno; dígitos entre cero y b−1, con exponentes negativos para fracciones. |
| Agrupación | hexadecimal: 4 bits; octal: 3 bits | Agrupar desde la coma hacia cada extremo; completar con ceros donde no se cambie el valor. |
| Fracción finita en binario | denominador reducido potencia de dos | Criterio para racionales; no convierte 1/10 en una expansión finita. |

## Capítulo 3 · Enteros sin signo, signo y magnitud y complementos

### Cinco interpretaciones que no deben mezclarse

En **binario sin signo (BSS)**, todos los bits contribuyen con peso positivo. Con n bits, el rango es $0\le x\le2^n-1$. En **signo y magnitud (SyM)**, el bit más alto indica signo y los restantes almacenan la magnitud. Hay dos ceros, `00000000` y `10000000` en ocho bits, y rango de −127 a 127. La existencia de 256 patrones no da 256 valores distintos.

En **complemento a uno (Ca1)**, un número negativo se forma invirtiendo todos los bits de la representación positiva. +37 en ocho bits es `00100101`, por lo que −37 es `11011010`. También hay dos ceros y rango −127 a 127. Invertir no es sumar uno: esa operación adicional pertenece a otra codificación.

En **complemento a dos (Ca2)**, los positivos se escriben como BSS y los negativos como $2^n-|x|$. Una forma operativa es invertir y sumar uno al ancho fijado. Para −37: `00100101` → `11011010` → `11011011`. El rango es $-2^{n-1}\le x\le2^{n-1}-1$. El patrón de mayor peso tiene peso negativo: $x=-b_{n-1}2^{n-1}+\sum_{i=0}^{n-2}b_i2^i$.

Esta última ecuación es la manera más segura de decodificar un patrón negativo. `10000000` vale −128, no «menos cero». Su opuesto +128 no es representable con ocho bits en Ca2. Por eso negar el mínimo puede dejar el mismo patrón y activar desbordamiento en la operación correspondiente.

### Exceso o sesgo

En una codificación por exceso K almacenamos el entero sin signo $U=x+K$ y decodificamos $x=U-K$. El rango es de −K a $2^n-1-K$. Para exceso 127 en ocho bits, el rango es −127 a 128; cero se almacena como 127 (`01111111`). El bit superior no puede interpretarse directamente como signo: su papel surge de restar el sesgo. En IEEE 754 se usa este tipo de idea para el campo de exponente, pero algunos patrones quedan reservados y el rango efectivo debe tratarse aparte.

### Un patrón, varios valores

El patrón `11011011` vale 219 en BSS, −91 en SyM, −36 en Ca1, −37 en Ca2 y 92 en exceso 127. No es una contradicción. El almacenamiento es el mismo y la función de decodificación cambia. Una respuesta de conversión que solo entregue `11011011` sin indicar formato está incompleta.

**Ejemplo inverso.** Representar −90 en ocho bits: SyM usa signo 1 y magnitud 90 = `1011010`, por lo que resulta `11011010`; Ca1 invierte `01011010` y da `10100101`; Ca2 agrega uno y da `10100110`; exceso 127 guarda 37 y da `00100101`. BSS no permite negativos. Cada solución debe verificarse usando la regla de decodificación correspondiente.

### Práctica razonada

**3.1.** ¿En qué formatos de ocho bits puede representarse −128? **Respuesta:** Ca2; no en BSS, SyM, Ca1 ni exceso 127. Este último comienza en −127.

**3.2.** Decodificá `11111111`. **Respuesta:** 255 en BSS; −127 en SyM; cero negativo en Ca1; −1 en Ca2; 128 en exceso 127.

**3.3.** Codificá +100 en Ca2. **Respuesta:** `01100100`; el primer bit debe ser cero. El número cabe porque 100≤127.

**3.4.** ¿Cuántos valores distintos hay en Ca1 de ocho bits? **Respuesta:** 255, desde −127 a 127. Los 256 patrones incluyen dos representaciones del cero.

### Hoja de fórmulas y relaciones del capítulo 3

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| BSS | $0\le x\le2^n-1$ | Todos los pesos son positivos. |
| Ca2 | $x=U$ si U<2ⁿ⁻¹; $x=U-2^n$ en otro caso | U es el patrón interpretado sin signo, con ancho n. |
| SyM y Ca1 | $-(2^{n-1}-1)\le x\le2^{n-1}-1$ | Dos patrones de cero; 2ⁿ−1 valores distintos. |
| Exceso K | $x=U-K$ | Rango −K a 2ⁿ−1−K si no hay patrones reservados. |

## Capítulo 4 · Ancho de palabra, extensión y conversiones de representación

### Extender no es cambiar el valor

Una operación trabaja con un número definido de bits. Si un dato BSS de ocho bits pasa a dieciséis, se agregan ceros por la izquierda: FFh pasa a 00FFh y conserva 255. Si un dato Ca2 negativo pasa a dieciséis, se repite el bit de signo: FFh pasa a FFFFh y conserva −1. Esta segunda operación se llama **extensión de signo**.

Su justificación es aritmética: si el patrón original U representa $U-2^n$, el nuevo patrón al anteponer m−n unos vale $U+(2^m-2^n)$ sin signo. Al interpretarlo en Ca2 de m bits se resta $2^m$ y vuelve a obtenerse $U-2^n$. Agregar ceros a un negativo no conserva su valor: 80h significa −128 en Ca2 de ocho bits y 0080h significa +128 en dieciséis.

No todas las codificaciones se extienden igual. En SyM se conserva el signo y se amplía la magnitud insertando ceros después del signo. En exceso hay que decodificar y recodificar si cambia el sesgo. Extensión de signo no es una receta universal aplicable a cualquier representación.

### Reducir el ancho exige comprobar el rango

Para pasar de dieciséis a ocho bits no basta con borrar el byte alto y afirmar que el número sigue siendo el mismo. En BSS debe estar entre 0 y 255. En Ca2 debe estar entre −128 y 127. El patrón 012Ch representa 300; conservar solo 2Ch produce 44, que es congruente con 300 módulo 256 pero no igual como entero.

**Ejemplo.** −90 en Ca2 de dieciséis bits es FFA6h. El byte alto contiene solo la extensión del signo del byte bajo, por lo que puede reducirse a A6h sin cambiar el valor. En cambio 00A6h representa +166 y no cabe en Ca2 de ocho bits: truncarlo lo convertiría en −90. La misma operación física de corte tiene consecuencias diferentes según el origen.

En ensamblador 8086, `CBW` extiende AL a AX por signo, y `CWD` extiende AX a DX:AX por signo. Para ampliar un byte sin signo a AX puede ponerse AH en cero. `MOV AL, dato` no limpia AH. Si AX antes valía AB00h y luego cargamos AL con 5, AX queda AB05h, no 0005h. Esa persistencia del byte alto genera errores en sumas y divisiones.

### Un protocolo para convertir sin adivinar

Primero fijá el formato de origen, decodificá el valor y comprobá si entra en el formato de destino. Después codificá con las reglas de destino. Convertir SyM a Ca2 no es invertir siempre: un positivo no se modifica, y para un negativo hay que separar magnitud y signo. Convertir una escritura hexadecimal a binario no cambia de codificación numérica, solo cambia la notación de los mismos bits.

### Práctica razonada

**4.1.** Extendé 9Ah de ocho a dieciséis bits. **Respuesta:** 009Ah si es BSS; FF9Ah si es Ca2. Los valores son +154 y −102, respectivamente.

**4.2.** ¿Puede reducirse FF7Fh a Ca2 de ocho bits? **Respuesta:** no. En dieciséis bits vale −129, fuera del rango. El corte deja 7Fh, que vale +127.

**4.3.** AL contiene F0h y AH contiene 12h. ¿Qué hace CBW? **Respuesta:** AL representa −16 en Ca2 de ocho bits; AX termina FFF0h. La instrucción redefine AH según el signo de AL.

**4.4.** ¿Se necesita extender signo para copiar una cadena ASCII? **Respuesta:** no. Sus bytes son códigos de caracteres, no operandos enteros con signo. Hay que preservar los códigos y el terminador definidos por el formato de cadena.

### Hoja de fórmulas y relaciones del capítulo 4

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ampliar BSS | anteponer ceros | Conserva el valor sin signo. |
| Ampliar Ca2 | repetir el bit de signo | No aplicar como regla universal a SyM ni exceso. |
| 8086 | CBW: AL→AX por signo; CWD: AX→DX:AX por signo | Las cargas de AL no limpian AH por sí mismas. |
| Reducir ancho | comprobar rango antes de recortar | Conservar bits bajos da congruencia modular, no necesariamente igualdad del valor. |

## Formulario de la Unidad 1 · Representaciones y ancho de palabra

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 1

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Patrones de n bits | $2^n$ | n entero no negativo; contar patrones no equivale siempre a contar valores distintos. |
| Capacidad | posiciones × bits por posición | Convertir a bytes dividiendo por ocho; distinguir unidad direccionable. |
| Unidades | 1 KiB = 1024 B; 1 kB = 1000 B | B significa byte; b significa bit. |

### Capítulo 2

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema posicional | $x=\sum_i d_i b^i$ | Base b entera mayor que uno; dígitos entre cero y b−1, con exponentes negativos para fracciones. |
| Agrupación | hexadecimal: 4 bits; octal: 3 bits | Agrupar desde la coma hacia cada extremo; completar con ceros donde no se cambie el valor. |
| Fracción finita en binario | denominador reducido potencia de dos | Criterio para racionales; no convierte 1/10 en una expansión finita. |

### Capítulo 3

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| BSS | $0\le x\le2^n-1$ | Todos los pesos son positivos. |
| Ca2 | $x=U$ si U<2ⁿ⁻¹; $x=U-2^n$ en otro caso | U es el patrón interpretado sin signo, con ancho n. |
| SyM y Ca1 | $-(2^{n-1}-1)\le x\le2^{n-1}-1$ | Dos patrones de cero; 2ⁿ−1 valores distintos. |
| Exceso K | $x=U-K$ | Rango −K a 2ⁿ−1−K si no hay patrones reservados. |

### Capítulo 4

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ampliar BSS | anteponer ceros | Conserva el valor sin signo. |
| Ampliar Ca2 | repetir el bit de signo | No aplicar como regla universal a SyM ni exceso. |
| 8086 | CBW: AL→AX por signo; CWD: AX→DX:AX por signo | Las cargas de AL no limpian AH por sí mismas. |
| Reducir ancho | comprobar rango antes de recortar | Conservar bits bajos da congruencia modular, no necesariamente igualdad del valor. |

## Capítulo 5 · Aritmética de ancho fijo y banderas

### Lo que calcula el circuito y lo que interpreta el programa

Un sumador de n bits entrega los n bits bajos del resultado: $R=(A+B)\bmod2^n$. El bit adicional informa acarreo. En ocho bits, 250+20=270 produce 14 en el resultado almacenado y acarreo 1. Si interpretamos los operandos como Ca2, esos mismos patrones son −6 y +20, y el resultado +14 es correcto sin desbordamiento con signo.

Por eso **carry y overflow no son sinónimos**. CF informa acarreo en suma y préstamo en resta, útil para aritmética sin signo. OF informa que el resultado matemático con signo no entra en el rango Ca2. ZF se activa cuando todos los bits del resultado son cero. SF copia su bit superior; no demuestra por sí sola que una comparación con signo sea menor.

### Desbordamiento de suma y resta

En suma Ca2, hay overflow cuando los operandos tienen el mismo signo y el resultado tiene el opuesto. 100+40 se almacena como 140 = 8Ch, que interpretado con signo vale −116: OF=1, CF=0, SF=1 y ZF=0. En cambio −100+(−40) produce 74h, +116, con OF=1 y CF=1. CF puede acompañar a OF o no.

En resta $R=(A-B)\bmod2^n$, CF=1 si A<B al interpretar ambos sin signo. Para OF, los signos de A y B deben ser distintos y el signo del resultado debe diferir del de A. `80h - 01h` da 7Fh: como BSS es 128−1=127 sin préstamo; como Ca2 es −128−1=−129, que no cabe. Por tanto CF=0 y OF=1.

**Tabla de traza en ocho bits.**

| Operación | Resultado | CF | OF | SF | ZF |
|---|---|---:|---:|---:|---:|
| FFh + 01h | 00h | 1 | 0 | 0 | 1 |
| 7Fh + 01h | 80h | 0 | 1 | 1 | 0 |
| 00h − 01h | FFh | 1 | 0 | 1 | 0 |
| 80h − 01h | 7Fh | 0 | 1 | 0 | 0 |

El tipo de instrucción determina qué banderas se actualizan. En 8086, `INC` y `DEC` actualizan varias banderas aritméticas pero preservan CF. `MOV` no calcula banderas. Antes de usar un salto condicional hay que preguntar qué instrucción produjo el estado que se está consultando.

### Ca1 y la vuelta del acarreo

En complemento a uno, al sumar se reincorpora el acarreo final al bit menos significativo. Para +5 y −3 en ocho bits: 05h+FCh=101h. Se conserva 01h y se agrega el acarreo: 02h, que vale +2. El procedimiento de Ca2 descarta el acarreo y usa otra codificación de −3, FDh. Mezclar el patrón de Ca1 con la regla de Ca2 produce una unidad de error.

### Práctica razonada

**5.1.** Calculá 70h+F1h. **Respuesta:** 61h, CF=1, OF=0, SF=0, ZF=0. En BSS 112+241 excede 255; en Ca2 112−15=97 cabe.

**5.2.** Calculá 80h+80h. **Respuesta:** 00h, CF=1, OF=1, SF=0, ZF=1. Que el patrón sea cero no demuestra que la suma matemática haya sido cero.

**5.3.** ¿Puede determinarse CF después de `INC AX` conociendo solo AX final? **Respuesta:** no. CF conserva su valor anterior; hace falta el estado previo.

**5.4.** ¿Cuándo es correcto el resultado de una suma de enteros? **Respuesta:** para BSS, cuando no hay acarreo final; para Ca2, cuando OF=0. El criterio depende de la interpretación solicitada.

### Hoja de fórmulas y relaciones del capítulo 5

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Resultado de suma | $R=(A+B)\bmod2^n$ | Los n bits bajos no informan solos si hubo desbordamiento. |
| CF | suma: acarreo; resta: préstamo sin signo | En resta, CF=1 si A<B como patrones BSS. |
| OF | suma: igual signo de entradas y signo distinto de salida | Para Ca2; en resta: signos de entradas diferentes y salida con signo distinto de A. |
| ZF y SF | ZF: resultado cero; SF: bit superior | SF no sustituye por sí sola una comparación menor con signo; INC y DEC preservan CF. |

## Capítulo 6 · Punto fijo: escala, cuantización y operaciones

### Guardar un entero y acordar una escala

En punto fijo, la coma no se almacena como un campo móvil. Se acuerda una cantidad f de bits fraccionarios y el entero almacenado I se interpreta como $x=I\,2^{-f}$. Si I es Ca2 de n bits, el rango es $[-2^{n-1-f},\,2^{n-1-f}-2^{-f}]$. La resolución es $\Delta=2^{-f}$: la distancia entre representaciones consecutivas.

Las notaciones Qm.f no son uniformes entre textos: a veces m incluye el signo y a veces no. Para evitar ambigüedad escribiremos explícitamente **n bits totales, f bits fraccionarios, entero Ca2**. Si el enunciado dice «un bit de signo, nueve enteros y seis fraccionarios» aún debe aclararse la codificación del signo: SyM y Ca2 no tienen exactamente el mismo rango. El TP también usa un formato de ocho bits con cinco posiciones antes de la coma y tres después en Ca2; allí las cinco incluyen el bit de peso negativo.

### Codificación y error

Con ocho bits Ca2 y tres fraccionarios, el rango es −16 a 15.875 y el paso es 0.125. Para codificar −3.375 calculamos I=−3.375×8=−27, que en ocho bits es E5h. Decodificar E5h como entero Ca2 da −27 y dividir por ocho recupera el valor. No se pone simplemente «un signo seguido de la parte entera».

Para 2.1, I ideal sería 16.8. Truncar hacia cero elige 16 y produce 2; redondear al más próximo elige 17 y produce 2.125. La precisión no mejora imprimiendo más decimales: solo ciertos valores pertenecen a la grilla. Con redondeo al más próximo, el error de cuantización absoluto es a lo sumo Δ/2, siempre que no haya desborde ni saturación. Con truncamiento hacia cero es menor que Δ.

### Sumar, multiplicar y dividir

Para sumar enteros escalados con el mismo f, se suman sus códigos I y se conserva la escala. Si las escalas difieren, primero deben alinearse. Sumar códigos de 1/8 y 1/64 sin convertir unidades equivale a sumar centímetros y metros como si fueran iguales.

En multiplicación, $x_1x_2=(I_1I_2)2^{-(f_1+f_2)}$. El producto necesita normalmente más bits. Para volver a f posiciones hay que reescalar y redondear, comprobando el rango final. **Ejemplo:** 1.5 y −2.25, ambos con f=4, tienen códigos 24 y −36. El producto entero es −864 y su escala 1/256; vale −3.375. Para f=4, el código correcto es −54. El corrimiento aritmético de un negativo y el truncamiento hacia cero pueden diferir si se descartan unos; la política debe declararse.

Para dividir conservando f bits, un procedimiento es ampliar antes el numerador: $I_R\approx (I_A2^f)/I_B$. Debe reservarse ancho para el numerador ampliado y tratar la división por cero. No se arregla el desborde después de haber perdido los bits altos.

### Práctica razonada

**6.1.** Decodificá D8h en ocho bits Ca2 con f=3. **Respuesta:** 216−256=−40; −40/8=−5.

**6.2.** Codificá 5.625 con f=3. **Respuesta:** I=45=2Dh; es exacto porque 5.625×8 es entero.

**6.3.** ¿Cabe 16 en ese formato? **Respuesta:** no; el máximo es 15.875. Convertirlo a 80h lo interpretaría como −16, no como una aproximación razonable a +16.

**6.4.** ¿Qué ocurre al aumentar f manteniendo n? **Respuesta:** mejora la resolución pero se reduce el rango. No se obtiene precisión gratis: se redistribuyen posiciones de una palabra finita.

### Hoja de fórmulas y relaciones del capítulo 6

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Punto fijo Ca2 | $x=I2^{-f}$; $\Delta=2^{-f}$ | n bits totales; f fraccionarios; I entero Ca2. |
| Rango | $[-2^{n-1-f},2^{n-1-f}-2^{-f}]$ | Indicar si la notación Q incluye el signo antes de usarla. |
| Cuantización | $\vert e\vert \le\Delta/2$ al más próximo | Sin desbordamiento ni saturación; truncamiento hacia cero tiene error menor que Δ. |
| Producto | $x_1x_2=I_1I_2\cdot2^{-(f_1+f_2)}$ | Ampliar el producto y reescalar con política de redondeo explícita. |

## Capítulo 7 · IEEE 754: codificar y decodificar punto flotante

![Los campos de signo, exponente y fracción de binary32](/planos-de-estudio/img/arquitectura/ieee754.svg)


### Una significación y una escala variables

Punto flotante representa números de la forma signo × significando × potencia de una base. En **binary32**, el formato de precisión simple trabajado en el aula, hay un bit s de signo, ocho bits E de exponente y 23 bits F de fracción. El campo E tiene sesgo 127. No se debe llamar «mantisa de 23 bits» a toda la precisión: en números normales se supone un 1 inicial, por lo que el significando tiene 24 bits de precisión binaria.

Para $1\le E\le254$, el valor es $(-1)^s(1+F/2^{23})2^{E-127}$. La fórmula no corresponde a E=0 ni a E=255. El campo F se interpreta como entero sin signo; F/2²³ forma la fracción binaria que se agrega al uno implícito.

### Codificación completa de un caso exacto

Queremos representar −13.25. Su magnitud binaria es `1101.01`; al mover la coma queda $1.10101_2\cdot2^3$. Entonces s=1; el exponente almacenado es 3+127=130=`10000010`; la fracción es `10101000000000000000000`. Al reunir los campos obtenemos `11000001010101000000000000000000`, hexadecimal C1540000h.

La separación en campos precede a agrupar de cuatro en cuatro. Si se agregan ceros para «completar» el exponente equivocado después de convertir a hexadecimal, se modifica la posición de la fracción. La comprobación inversa extrae s, E y F y reconstruye −13.25. En memoria little endian, esos cuatro bytes se almacenan `00 00 54 C1`, lo cual no cambia la palabra lógica C1540000h.

### Ceros, subnormales y valores especiales

Con E=0 y F=0 se representa cero, con ambos signos posibles. Con E=0 y F distinto de cero se usa $(-1)^s(F/2^{23})2^{-126}$: no hay 1 implícito. Esto permite valores menores que el mínimo normal, a costa de menor precisión relativa. El mínimo positivo subnormal es $2^{-149}$; el mínimo positivo normal es $2^{-126}$.

Con E=255 y F=0 se representan infinitos. Con E=255 y F distinto de cero se representa NaN, que expresa una condición de «no número». No es un número grande ni debe ordenarse como uno. El detalle de excepciones, indicadores y propagación depende de la operación y del entorno; distinguir patrón de almacenamiento y resultado de comparación sigue siendo esencial.

El máximo finito positivo es $(2-2^{-23})2^{127}$. Decir que el mayor exponente es 128 porque 255−127=128 ignora que E=255 está reservado. Del mismo modo, el mínimo normal no se calcula usando E=0 en la fórmula normal.

### Decodificación sin herramientas opacas

Para 3F400000h, s=0, E=126 y la fracción representa 0.5. Por tanto $(1+0.5)2^{-1}=0.75$. Para 00000001h, E=0 y F=1: es $2^{-149}$. Para 80000000h, s=1 y ambos campos restantes son cero: es cero negativo, no el mínimo entero Ca2 de 32 bits. El mismo patrón puede pertenecer a formatos muy diferentes.

### Práctica razonada

**7.1.** Codificá 6.5. **Respuesta:** $110.1_2=1.101_2\cdot2^2$; s=0, E=129 y fracción .101. Resultado 40D00000h.

**7.2.** Decodificá C0200000h. **Respuesta:** signo negativo, E=128 y significando 1.25; valor −2.5.

**7.3.** Clasificá 7F800000h y 7FC00000h. **Respuesta:** infinito positivo y NaN, respectivamente. En el segundo la fracción no es cero.

**7.4.** ¿Qué conserva cambiar solo el bit de signo? **Respuesta:** la magnitud para números finitos y el tipo de patrón especial. Es una transformación de bits; no convierte una codificación de entero a flotante.

### Hoja de fórmulas y relaciones del capítulo 7

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Normal binary32 | $(-1)^s(1+F/2^{23})2^{E-127}$ | 1≤E≤254; signo 1 bit, E 8 bits, F 23 bits. |
| Subnormal binary32 | $(-1)^s(F/2^{23})2^{-126}$ | E=0, F≠0; no hay uno implícito. |
| Especiales | E=0, F=0: cero; E=255, F=0: infinito; E=255, F≠0: NaN | El signo permite dos ceros; NaN no es un valor ordenado ordinario. |
| Mínimos positivos | normal: $2^{-126}$; subnormal: $2^{-149}$ | Son umbrales distintos de binary32. |

## Capítulo 8 · Redondeo, errores y algoritmos con flotantes

### Precisión no es cantidad de decimales fijos

En un intervalo de números normales $[2^e,2^{e+1})$, los binary32 consecutivos están separados por $2^{e-23}$. Al crecer el exponente, aumenta el espaciado absoluto. Cerca de 1, el siguiente número es $1+2^{-23}$; cerca de $2^{24}$, el espaciado es 2. Un formato flotante distribuye resolución relativa aproximadamente constante entre normales, no resolución absoluta constante.

El redondeo al más próximo con empate al par elige el representable más cercano; en un empate, el de último bit retenido par. En torno a 1, la mitad de la distancia al siguiente valor es $2^{-24}$. La expresión «épsilon de máquina» se usa con convenciones diferentes; aquí distinguimos distancia entre 1 y el siguiente binary32 ($2^{-23}$) y cota relativa de redondeo usual para normales ($2^{-24}$). No aplicamos esa cota sin cuidado a subnormales.

### Por qué 0.1 repetido no es una cuenta decimal exacta

0.1 no tiene expansión binaria finita. Se almacena una aproximación y cada suma puede volver a redondearse. Un bucle que suma 0.1 hasta que x sea exactamente 1.1 depende de alcanzar el mismo patrón de bits que el literal 1.1. No es una condición de terminación confiable. En el ejemplo del TP, con los flotantes habituales de Python, los valores pasan de aproximadamente 1.0999999999999999 a 1.2; no corresponde ejecutar indefinidamente el bucle para «ver cuándo termina».

Una solución, si se necesitan once pasos, es contar con enteros y calcular x=k/10 en cada iteración. Si se compara una magnitud medida o un resultado numérico, puede usarse $|a-b|\le\max(\varepsilon_{abs},\varepsilon_{rel}\max(|a|,|b|))$, con tolerancias elegidas según el problema. No hay una tolerancia universal que convierta cualquier algoritmo en correcto. Para importes decimales exactos conviene usar una representación decimal o enteros escalados; para fracciones exactas puede usarse numerador y denominador, aceptando su costo y crecimiento.

### No asociatividad y cancelación

La suma matemática es asociativa, pero la suma con redondeo finito puede no serlo. En binary32, sea a=$2^{24}$, b=1 y c=−$2^{24}$. Al evaluar (a+b)+c, a+b empata entre representables y redondea a a; el resultado es 0. Al evaluar a+(b+c), b+c=−16777215 es representable y el resultado es 1. El orden de acumulación importa.

La cancelación ocurre al restar cantidades cercanas: los primeros dígitos se eliminan y el error previo puede dominar las cifras restantes. Para calcular $\sqrt{x+1}-\sqrt{x}$ con x grande, la expresión equivalente $1/(\sqrt{x+1}+\sqrt{x})$ puede evitar parte de la pérdida por sustracción. Esa transformación exige que los denominadores y raíces existan. No elimina todos los errores, pero cambia cómo se propagan.

### Medir el error

El error absoluto es $|\hat x-x|$ y el relativo es ese valor dividido por |x| cuando x≠0. Un error absoluto de 0.001 puede ser insignificante para un millón y enorme para 0.00001. Para un resultado exactamente cero, el error relativo no está definido de esa manera; conviene una cota absoluta. También debe separarse error de representación, error aritmético y error del modelo físico o del dato de entrada.

### Práctica razonada

**8.1.** ¿Cuál es el espaciado binary32 entre $2^{10}$ y $2^{11}$? **Respuesta:** $2^{10-23}=2^{-13}$. No es $2^{-23}$ en todos los intervalos.

**8.2.** Un valor real 3 se aproxima por 2.99. **Respuesta:** error absoluto 0.01, relativo 0.01/3≈0.003333. Hay que distinguir razón de porcentaje: es aproximadamente 0.3333 %.

**8.3.** ¿Comparar con `==` siempre es incorrecto? **Respuesta:** no. Puede ser adecuado para patrones especiales o valores construidos exactamente. El problema es usarlo como criterio numérico sin analizar cómo se calcularon los operandos.

**8.4.** ¿Más bits arreglan un algoritmo inestable? **Respuesta:** pueden retrasar el problema, pero no sustituyen un análisis del condicionamiento y de las operaciones que amplifican errores.

### Hoja de fórmulas y relaciones del capítulo 8

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Espaciado normal binary32 | $2^{e-23}$ en $[2^e,2^{e+1})$ | e es exponente real no sesgado; no aplicar a subnormales. |
| Error absoluto y relativo | $\vert \hat x-x\vert $; $\vert \hat x-x\vert /\vert x\vert $ | Relativo definido de esta forma solo si x≠0. |
| Comparación tolerante | $\vert a-b\vert \le\max(\epsilon_a,\epsilon_r\max(\vert a\vert ,\vert b\vert ))$ | Elegir tolerancias por el problema; no reemplaza pruebas de estabilidad. |
| Empate al par | elegir el retenido de bit final par | Regla de redondeo, no truncamiento automático. |

## Formulario de la Unidad 2 · Aritmética y números reales

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 5

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Resultado de suma | $R=(A+B)\bmod2^n$ | Los n bits bajos no informan solos si hubo desbordamiento. |
| CF | suma: acarreo; resta: préstamo sin signo | En resta, CF=1 si A<B como patrones BSS. |
| OF | suma: igual signo de entradas y signo distinto de salida | Para Ca2; en resta: signos de entradas diferentes y salida con signo distinto de A. |
| ZF y SF | ZF: resultado cero; SF: bit superior | SF no sustituye por sí sola una comparación menor con signo; INC y DEC preservan CF. |

### Capítulo 6

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Punto fijo Ca2 | $x=I2^{-f}$; $\Delta=2^{-f}$ | n bits totales; f fraccionarios; I entero Ca2. |
| Rango | $[-2^{n-1-f},2^{n-1-f}-2^{-f}]$ | Indicar si la notación Q incluye el signo antes de usarla. |
| Cuantización | $\vert e\vert \le\Delta/2$ al más próximo | Sin desbordamiento ni saturación; truncamiento hacia cero tiene error menor que Δ. |
| Producto | $x_1x_2=I_1I_2\cdot2^{-(f_1+f_2)}$ | Ampliar el producto y reescalar con política de redondeo explícita. |

### Capítulo 7

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Normal binary32 | $(-1)^s(1+F/2^{23})2^{E-127}$ | 1≤E≤254; signo 1 bit, E 8 bits, F 23 bits. |
| Subnormal binary32 | $(-1)^s(F/2^{23})2^{-126}$ | E=0, F≠0; no hay uno implícito. |
| Especiales | E=0, F=0: cero; E=255, F=0: infinito; E=255, F≠0: NaN | El signo permite dos ceros; NaN no es un valor ordenado ordinario. |
| Mínimos positivos | normal: $2^{-126}$; subnormal: $2^{-149}$ | Son umbrales distintos de binary32. |

### Capítulo 8

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Espaciado normal binary32 | $2^{e-23}$ en $[2^e,2^{e+1})$ | e es exponente real no sesgado; no aplicar a subnormales. |
| Error absoluto y relativo | $\vert \hat x-x\vert $; $\vert \hat x-x\vert /\vert x\vert $ | Relativo definido de esta forma solo si x≠0. |
| Comparación tolerante | $\vert a-b\vert \le\max(\epsilon_a,\epsilon_r\max(\vert a\vert ,\vert b\vert ))$ | Elegir tolerancias por el problema; no reemplaza pruebas de estabilidad. |
| Empate al par | elegir el retenido de bit final par | Regla de redondeo, no truncamiento automático. |

## Capítulo 9 · Álgebra de Boole, compuertas y máscaras

### Operaciones sobre valores lógicos y sobre palabras

Una variable booleana toma 0 o 1. AND produce 1 cuando ambos operandos son 1; OR cuando al menos uno lo es; NOT invierte; XOR produce 1 cuando son distintos. En una palabra binaria estas operaciones se aplican independientemente a cada posición. `1010 AND 1100 = 1000`, mientras que `1010 XOR 1100 = 0110`.

La tabla de verdad de una función enumera su resultado para cada combinación de entradas. Con n variables tiene $2^n$ filas. Es la especificación completa de un circuito combinacional ideal: las salidas dependen de las entradas actuales, sin memoria de estados anteriores. Un registro o flip-flop incorpora estado y requiere un modelo secuencial con reloj, habilitación u otras señales; no se describe únicamente con una tabla de entradas instantáneas.

Las identidades permiten transformar circuitos conservando su función. Por ejemplo, $x+xy=x$ por absorción. Aquí + significa OR y el producto significa AND; no son aritmética entera. Por De Morgan, $\overline{xy}=\bar x+\bar y$ y $\overline{x+y}=\bar x\bar y$. El complemento de una expresión requiere cambiar el operador y complementar cada componente; negar solo un término no conserva la función.

### Aplicaciones concretas de máscaras

Para consultar el bit k usamos una máscara con un único 1, $M=2^k$. Si `x AND M` es distinto de cero, ese bit estaba activo. Para activarlo sin afectar los otros usamos OR; para limpiarlo usamos AND con la máscara complementada al ancho; para invertirlo usamos XOR. El ancho importa: el complemento de 00001000 en ocho bits es 11110111, no una secuencia infinita de unos que deba almacenarse sin límite.

**Ejemplo desarrollado.** x=B6h=`10110110`. Limpiar el bit 2 usa FBh=`11111011`: B6h AND FBh=B2h. Activar el bit 0 da B7h. Invertir el bit 7 usa 80h: B6h XOR 80h=36h. Ninguna de esas operaciones equivale en general a sumar o restar la máscara: la aritmética puede propagar acarreo hacia otros bits.

En 8086, `TEST destino, mascara` calcula banderas como un AND sin guardar el resultado. Es útil para preguntar por bits sin destruir el dato. Las operaciones lógicas actualizan ZF y SF y limpian CF y OF; no conviene esperar que preserven un carry de una suma previa. `NOT`, en cambio, no actualiza banderas en 8086. No se puede deducir el comportamiento de flags solo por la categoría coloquial «instrucción lógica».

### Campos y desplazamientos

Para extraer un campo de w bits que comienza en la posición k se calcula $(x\gg k)\mathbin{\&}(2^w-1)$, suponiendo desplazamiento lógico sobre un entero sin signo de ancho suficiente. El signo IEEE 754 está en el bit 31 y el exponente en los bits 30 a 23. En un 8086 no existe un registro general de 32 bits; la extracción debe repartirse entre bytes o palabras. El manual de ensamblador desarrolla esa implementación en vez de usar registros modernos inexistentes.

### Práctica razonada

**9.1.** ¿Cómo saber si un entero sin signo es impar? **Respuesta:** consultar su bit cero con máscara 1. Una división por dos no es necesaria para esta propiedad.

**9.2.** Simplificá $a\bar b+ab$. **Respuesta:** $a(\bar b+b)=a$. Ambos casos de b cubren todas las posibilidades cuando a=1.

**9.3.** ¿XOR de una palabra consigo misma? **Respuesta:** todos los bits quedan cero. Cada par de bits iguales produce cero.

**9.4.** ¿Puede OR limpiar un bit? **Respuesta:** no; solo conserva o activa. Para limpiar selectivamente se usa AND con cero en las posiciones a limpiar.

### Hoja de fórmulas y relaciones del capítulo 9

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| De Morgan | $\overline{ab}=\bar a+\bar b$; $\overline{a+b}=\bar a\bar b$ | + significa OR, producto AND; no aritmética entera. |
| Máscara bit k | consultar AND 2ᵏ; activar OR 2ᵏ; invertir XOR 2ᵏ | Para limpiar, AND con complemento de la máscara al ancho del dato. |
| Extraer campo | $(x\gg k)\mathbin{\&}(2^w-1)$ | w bits, desplazamiento lógico de un patrón sin signo. |
| TEST | AND sin guardar resultado | En 8086 actualiza condiciones; NOT no actualiza flags. |

## Capítulo 10 · Circuitos combinacionales, SoP, PoS y Karnaugh

### De la especificación al circuito

Una **suma de productos (SoP)** combina con OR términos que son AND de literales. La forma canónica toma un mintermino por cada fila donde la función vale 1. Un mintermino contiene todas las variables, directas cuando la entrada vale 1 y complementadas cuando vale 0. Para tres variables A, B, C, la fila 101 corresponde a $A\bar BC$.

Un **producto de sumas (PoS)** combina con AND términos OR. Su forma canónica toma un maxtermino por cada fila donde la función vale 0. Allí una entrada cero aparece directa y una entrada uno aparece complementada, porque queremos que el término OR completo sea cero en esa fila. Invertir la convención produce la función complementaria o una especificación incorrecta.

Estas formas son procedimientos de construcción, no promesas de circuito mínimo. Minimizar significa encontrar una expresión equivalente con un costo menor según un criterio: cantidad de literales, compuertas, niveles o retardo. Un circuito con menos símbolos no necesariamente es el mejor físicamente si cambian fan-in, carga o tecnología.

### Un mapa se lee por adyacencia lógica

El mapa de Karnaugh reordena las filas para que celdas adyacentes difieran en una única variable. Por eso los encabezados usan código Gray, como 00, 01, 11, 10, en lugar de orden binario corriente. Los grupos tienen tamaños potencia de dos; deben ser rectángulos con adyacencia por bordes y pueden envolver los extremos del mapa. La diagonal no cuenta como adyacencia.

Para minimizar SoP agrupamos unos; las variables que cambian dentro del grupo desaparecen y las que permanecen fijas forman el término. Es válido superponer grupos si ayuda. Todos los unos deben quedar cubiertos y no se incluyen ceros obligatorios. Un «no importa» puede tratarse como cero o uno para simplificar solo si la especificación realmente permite ambas salidas en ese caso. No puede asignarse libremente a una combinación que el sistema sí debe manejar.

**Ejemplo desarrollado.** Sea $F(A,B,C)=\Sigma m(1,3,5,7)$. Las cuatro filas tienen C=1 mientras A y B recorren todas sus combinaciones. El grupo de cuatro elimina A y B: F=C. La forma canónica tenía cuatro productos de tres literales, pero la función solo necesita conectar la entrada C a la salida. Verificar las ocho filas confirma el resultado.

Otro caso: $F=\Sigma m(0,1,2,3,6,7)$. Las primeras cuatro celdas forman $\bar A$ y las celdas 2,3,6,7 forman B. La expresión mínima es $\bar A+B$. En PoS puede verse que solo se anula cuando A=1 y B=0, independientemente de C. Ambas representaciones permiten comprobar el mismo comportamiento.

### Bloques que aparecen en una CPU

Un multiplexor selecciona una entrada de datos según líneas de selección; con k selectores puede elegir entre $2^k$ entradas en el caso completo. Un decodificador transforma un código en líneas de selección, como elegir un registro para escritura. Un sumador completo recibe dos bits y carry de entrada: la suma es XOR de los tres; el carry se activa si al menos dos son 1. Encadenarlos permite sumar palabras, aunque el acarreo puede introducir retardo.

No debe confundirse un multiplexor con un bus capaz de que todos transmitan simultáneamente. Las señales de control determinan quién entrega datos y quién los captura. Ese vínculo entre función lógica y transferencia temporal prepara el estudio del camino de datos.

### Práctica razonada

**10.1.** Simplificá $F=\Sigma m(2,3,6,7)$ para A, B, C. **Respuesta:** F=B; A y C varían dentro del grupo de cuatro.

**10.2.** ¿Cuántos selectores necesita un multiplexor 8 a 1? **Respuesta:** tres. Hay ocho combinaciones de tres bits.

**10.3.** ¿Se pueden agrupar tres unos? **Respuesta:** no como un único grupo de Karnaugh; los tamaños permitidos son 1,2,4,8, etc. Pueden cubrirse con grupos válidos superpuestos.

**10.4.** ¿Una minimización está demostrada por un dibujo? **Respuesta:** debe comprobarse que la expresión coincide con la tabla en todos los casos obligatorios; el dibujo ayuda a construirla, pero los errores de orden Gray siguen siendo posibles.

### Hoja de fórmulas y relaciones del capítulo 10

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| SoP | OR de minterminos donde F=1 | En cada mintermino: variable directa para entrada uno, complementada para cero. |
| PoS | AND de maxterminos donde F=0 | En cada maxtermino: variable directa para entrada cero, complementada para uno. |
| Karnaugh | grupos de 1,2,4,8… celdas adyacentes | Orden Gray; se permite envolver bordes y superponer; diagonales no son adyacentes. |
| Multiplexor | k selectores eligen entre 2ᵏ entradas | Caso completo; no confundir selectores con entradas de datos. |

## Formulario de la Unidad 3 · Lógica digital

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 9

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| De Morgan | $\overline{ab}=\bar a+\bar b$; $\overline{a+b}=\bar a\bar b$ | + significa OR, producto AND; no aritmética entera. |
| Máscara bit k | consultar AND 2ᵏ; activar OR 2ᵏ; invertir XOR 2ᵏ | Para limpiar, AND con complemento de la máscara al ancho del dato. |
| Extraer campo | $(x\gg k)\mathbin{\&}(2^w-1)$ | w bits, desplazamiento lógico de un patrón sin signo. |
| TEST | AND sin guardar resultado | En 8086 actualiza condiciones; NOT no actualiza flags. |

### Capítulo 10

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| SoP | OR de minterminos donde F=1 | En cada mintermino: variable directa para entrada uno, complementada para cero. |
| PoS | AND de maxterminos donde F=0 | En cada maxtermino: variable directa para entrada cero, complementada para uno. |
| Karnaugh | grupos de 1,2,4,8… celdas adyacentes | Orden Gray; se permite envolver bordes y superponer; diagonales no son adyacentes. |
| Multiplexor | k selectores eligen entre 2ᵏ entradas | Caso completo; no confundir selectores con entradas de datos. |

## Capítulo 11 · Organización, arquitectura y programa almacenado

![Comparación funcional de accesos Von Neumann y Harvard](/planos-de-estudio/img/arquitectura/arquitecturas.svg)


### Qué conoce el programador y cómo se implementa

La arquitectura describe propiedades visibles del sistema para el software: instrucciones, registros, tipos de datos, modos de direccionamiento y reglas de comportamiento. La organización describe cómo se construye esa arquitectura: caminos de datos, buses internos, memorias y técnicas de control. Dos procesadores pueden ejecutar la misma ISA y tener distinta cantidad de unidades funcionales, distinta caché y distinto rendimiento.

Esta distinción evita concluir que un cambio de frecuencia obliga a recompilar todos los programas. También evita el error inverso: dos equipos con igual frecuencia no necesariamente ejecutan el mismo programa ni tardan lo mismo. Hay capas: una aplicación usa interfaces del sistema operativo; el compilador traduce a una ISA; la microarquitectura ejecuta instrucciones mediante operaciones internas. Un lenguaje de alto nivel no corresponde uno a uno con instrucciones de máquina.

### Von Neumann y Harvard

El modelo de programa almacenado permite que instrucciones y datos residan en memoria. En una descripción Von Neumann clásica comparten memoria y camino de acceso. La CPU busca una instrucción, la decodifica, obtiene los operandos y realiza la operación. El valor de una celda no indica por sí mismo si es dato o instrucción; el contexto de uso lo decide.

La arquitectura Harvard separa memorias o espacios y caminos de instrucciones y datos. Esto puede permitir accesos simultáneos y anchos diferentes. Sin embargo, separar las cachés L1 de datos e instrucciones no obliga a que toda la memoria principal tenga espacios independientes: los sistemas reales pueden combinar rasgos y se habla de variantes Harvard modificadas. Una clasificación de un diagrama no basta para describir cada nivel de un equipo.

**Recorrido desarrollado.** Supongamos una máquina educativa con instrucciones `LOAD R0,[100]`, `ADD R0,[102]` y `STORE [104],R0`. Si las celdas contienen 7 y 9, la primera instrucción transfiere 7 al registro; la segunda obtiene 9 y la ALU forma 16; la tercera escribe 16 en memoria. Las direcciones 100,102 y 104 nombran ubicaciones; 7,9 y 16 son contenidos. El incremento de dos direcciones es una decisión de este ejemplo con palabras de dos bytes, no una regla universal.

### El cuello de botella es un recurso compartido

Si instrucciones y datos compiten por el mismo canal, su demanda conjunta puede limitar la tasa de ejecución. Agregar frecuencia a la ALU no resuelve una espera permanente por memoria. Cachés, prelectura y caminos separados intentan reducir esa competencia, pero requieren medir el comportamiento real. La noción de cuello de botella se refiere a un recurso y una carga concretos, no a una etiqueta que haga siempre superior una arquitectura.

Los microcontroladores integran CPU, memoria y periféricos para controlar sistemas. No son simplemente «CPU más lentas»: sus restricciones pueden priorizar costo, consumo, temporización y conexión a dispositivos. Tampoco todo dispositivo embebido adopta Harvard ni todo computador general una implementación puramente Von Neumann.

### Práctica razonada

**11.1.** Dos CPU ejecutan el mismo binario pero una tiene más caché. **Respuesta:** pueden compartir ISA y diferir en organización. El aumento de caché no asegura una aceleración para cualquier carga.

**11.2.** ¿Una instrucción en memoria es físicamente diferente de un dato? **Respuesta:** puede usar las mismas celdas y los mismos bits; la CPU la interpreta como instrucción cuando la busca siguiendo el flujo de ejecución.

**11.3.** ¿Por qué separar memoria de instrucciones puede ayudar? **Respuesta:** permite atender accesos que competirían por un camino único, siempre que el diseño y la carga aprovechen esa independencia.

**11.4.** ¿Un diagrama funcional indica todos los tiempos? **Respuesta:** no. Para calcular rendimiento hacen falta latencias, anchos, frecuencias y patrón de acceso.

### Hoja de fórmulas y relaciones del capítulo 11

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arquitectura | contrato visible para software | ISA, registros, formatos y reglas; diferenciar de implementación. |
| Von Neumann y Harvard | compartir o separar memorias/caminos de instrucciones y datos | Los sistemas reales pueden combinar rasgos por nivel. |
| Programa almacenado | los bits se interpretan según el contexto de ejecución | Dirección y contenido no son el mismo objeto. |

## Capítulo 12 · CPU, microoperaciones y ciclo de instrucción

### Un estado que cambia de forma controlada

La CPU contiene registros, una unidad aritmética y lógica y una unidad de control, además de los componentes que cada implementación agregue. Un registro guarda temporalmente bits; la ALU opera sobre ellos; el control decide qué transferencias y operaciones se habilitan. Una operación de alto nivel se descompone en pasos más pequeños llamados microoperaciones.

En una máquina educativa, el contador de programa PC indica la próxima instrucción; IR guarda la instrucción obtenida; MAR contiene una dirección de memoria y MDR los datos transferidos. Esos nombres son útiles para razonar, pero no todos son registros visibles de la ISA ni deben confundirse con los registros AX, BX, etc. El 8086 usa CS:IP para localizar instrucciones; llamarlo PC es una abstracción funcional.

### Búsqueda, decodificación, ejecución y retorno al ciclo

Una secuencia conceptual de búsqueda puede escribirse: MAR←PC; MDR←Mem[MAR]; IR←MDR; PC←PC+L, donde L es la longitud de la instrucción. Luego se decodifica el opcode y se identifican los operandos. Una instrucción puede necesitar cálculos de dirección o lecturas adicionales. Tras ejecutar, se actualiza el estado y se decide la siguiente búsqueda.

El orden exacto, el solapamiento y el momento interno de incremento dependen de la implementación. Un salto cambia el próximo destino arquitectónico; no debe «incrementarse otra vez a mano» su destino en una traza. Una llamada guarda la dirección de la instrucción posterior para poder regresar. En una ISA con instrucciones de longitud variable, sumar siempre uno al IP es incorrecto si se pretende una dirección de bytes exacta.

**Ejemplo de camino de datos.** Para sumar un operando de memoria al acumulador: se calcula su dirección; se lee la memoria; la ALU recibe el acumulador y el dato leído; se almacena la suma en el acumulador; se actualizan las banderas definidas. Si MAR recibe accidentalmente el contenido en vez de la dirección, se termina leyendo otra celda. Las flechas de una traza deben nombrar tanto origen como destino, no solo el número que «aparece».

### Control cableado y microprogramado

El control cableado genera señales mediante lógica secuencial y combinacional. El microprogramado usa palabras de control almacenadas en una memoria de control para secuenciar microoperaciones. Una microinstrucción no es necesariamente una instrucción del programa del usuario. La ISA puede mantenerse mientras cambian estas decisiones internas.

Los registros de estado contienen banderas e información de control. Algunas condiciones se actualizan por una operación; otras requieren instrucciones específicas. Una interrupción necesita preservar suficiente estado para retomar la ejecución, pero los mecanismos concretos de guardado automático y guardado por software deben distinguirse. En el 8086 no se guardan automáticamente todos los registros generales al aceptar una interrupción.

### Introducción a segmentación de ejecución

Un pipeline divide el procesamiento en etapas que pueden trabajar sobre instrucciones diferentes al mismo tiempo. No significa que una instrucción individual tarde un solo ciclo, ni que las instrucciones dejen de tener dependencias. Las esperas por datos, conflictos de recursos y cambios de flujo introducen burbujas. Un pipeline ideal es un modelo límite, útil si se declaran sus supuestos y no se usa para prometer rendimiento universal.

### Práctica razonada

**12.1.** ¿Puede cambiar IR sin que cambie la memoria del programa? **Respuesta:** sí, al buscar la próxima instrucción se reemplaza su contenido por otro valor leído.

**12.2.** ¿MAR guarda siempre un operando? **Respuesta:** guarda una dirección; el operando leído se representa en MDR u otro registro de datos según el modelo.

**12.3.** ¿Una instrucción equivale a una microoperación? **Respuesta:** no necesariamente. Puede requerir muchas transferencias y operaciones internas.

**12.4.** ¿Qué dato permite volver de una llamada? **Respuesta:** la dirección de continuación, además del estado que el convenio de la subrutina exija conservar.

### Hoja de fórmulas y relaciones del capítulo 12

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Búsqueda conceptual | MAR←PC; MDR←Mem[MAR]; IR←MDR | Modelo educativo; los registros internos concretos dependen del diseño. |
| Continuación | PC←PC+longitud de instrucción | En una traza de direcciones por bytes no se suma siempre uno. |
| Control | microoperaciones ≠ instrucciones del usuario | El control puede implementarse cableado, microprogramado o mediante combinaciones. |
| Pipeline | solapa etapas de instrucciones distintas | Dependencias, recursos y cambios de flujo pueden introducir burbujas. |

## Capítulo 13 · Rendimiento: frecuencia, CPI y límites de la mejora

### El tiempo es la medida que queremos explicar

Para una carga dada, el tiempo de CPU puede modelarse como $T=N\,CPI/f$, donde N es la cantidad de instrucciones ejecutadas, CPI los ciclos promedio por instrucción y f la frecuencia en ciclos por segundo. La expresión se obtiene de multiplicar instrucciones por ciclos/instrucción y por segundos/ciclo. Las unidades permiten descubrir errores: una frecuencia de 3 GHz equivale a $3\cdot10^9$ ciclos por segundo, no a tres segundos por instrucción.

El CPI promedio debe ponderarse por instrucciones **ejecutadas**, no por cantidad de tipos en la ISA. Si 50 % tienen CPI=1, 30 % CPI=2 y 20 % CPI=4, el promedio es $0.5+0.6+0.8=1.9$. Promediar (1+2+4)/3 supondría una distribución diferente. Los saltos, accesos a memoria y dependencias pueden cambiar el CPI efectivo entre programas en la misma CPU.

**Comparación desarrollada.** Un programa ejecuta 1200 millones de instrucciones, CPI=1.5 y f=3 GHz: T=0.6 s. Otra compilación ejecuta 900 millones, CPI=2 y f=2.5 GHz: T=0.72 s. La primera termina antes aunque ejecute más instrucciones. Si se informa «la segunda tiene menos instrucciones» sin el resto de variables, no se ha demostrado una mejora.

### Latencia, throughput y métricas parciales

La latencia es el tiempo de una tarea; throughput es la cantidad de tareas completadas por unidad de tiempo. Un servidor puede procesar muchas peticiones simultáneamente y aun así tener una latencia alta para cada una. MIPS mide millones de instrucciones por segundo y depende del tipo de instrucciones; MFLOPS o GFLOPS cuentan operaciones de punto flotante bajo una definición. Compararlos entre programas diferentes sin considerar el trabajo realizado puede premiar una implementación ineficiente.

Los conjuntos de pruebas permiten comparar cargas definidas, pero no existe un resultado único que prediga todos los usos. Deben registrarse programa, entrada, compilador, opciones y condiciones de medición. Los ejemplos de hardware de las diapositivas son contextos históricos, no recomendaciones actuales de compra ni especificaciones universales de x86 o ARM.

### La parte que no mejora sigue costando

La ley de Amdahl modela una mejora aplicada a la fracción p del tiempo original con un factor s: $S=1/((1-p)+p/s)$. Supone el mismo trabajo, una descomposición de tiempos válida y que la mejora no cambie los demás costos. Si p=0.8 y s=4, el tiempo nuevo es 0.2+0.2=0.4 del original, por lo que S=2.5. Hacer infinitamente rápida esa parte deja un límite 1/(1−p)=5.

No debe usarse p como porcentaje de líneas de código ni de cantidad de instrucciones sin ponderar sus tiempos. Tampoco se omite la sobrecarga de comunicación al paralelizar. Si esa sobrecarga crece, el modelo simple sobreestima la mejora.

### Pipeline ideal y sus supuestos

Con k etapas balanceadas de duración τ y n instrucciones independientes, un modelo ideal tarda $(k+n-1)\tau$ frente a $nk\tau$ sin solapamiento. Para k=5 y n=20, los tiempos son 24τ y 100τ: aceleración aproximada 4.167, menor que cinco por llenado y vaciado. Si las etapas no están balanceadas, el período está limitado por la más lenta y por los registros entre etapas. Las burbujas agregan ciclos; no se «promedian» fuera de la cuenta.

### Práctica razonada

**13.1.** N=$4\cdot10^8$, CPI=2, f=2 GHz. **Respuesta:** 0.4 s.

**13.2.** Se acelera el 60 % del tiempo por tres. **Respuesta:** S=1/(0.4+0.2)=1.6667. El 40 % restante limita el resultado.

**13.3.** ¿Duplicar f siempre divide T por dos? **Respuesta:** solo si N y CPI efectivo permanecen constantes y se está midiendo el tiempo de CPU del modelo. Las esperas externas pueden no escalar.

**13.4.** ¿Qué mejora una caché? **Respuesta:** puede reducir ciclos de espera por accesos; su efecto debe incorporarse al CPI o al modelo de memoria, evitando contar dos veces la misma penalización.

### Hoja de fórmulas y relaciones del capítulo 13

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tiempo CPU | $T=N\cdot CPI/f$ | N instrucciones ejecutadas; f ciclos/s; CPI promedio de esa carga. |
| CPI ponderado | $CPI=\sum_i p_i CPI_i$ | pᵢ son fracciones de instrucciones ejecutadas y suman uno. |
| Amdahl | $S=1/((1-p)+p/s)$ | p fracción del tiempo original mejorada; mismo trabajo y costos restantes constantes. |
| Pipeline ideal | $T=(k+n-1)\tau$ | k etapas balanceadas, n instrucciones independientes, sin burbujas; frente a nkτ sin solapamiento. |

## Capítulo 14 · ISA, CISC, RISC y codificación de instrucciones

### El contrato de ejecución

Una ISA define qué instrucciones existen, cómo se codifican, qué operandos aceptan y qué cambios de estado producen. Incluye registros visibles, tamaños de datos, modos de direccionamiento y condiciones de excepción relevantes. El ensamblador es una notación simbólica para expresar instrucciones y directivas; el programa ensamblador traduce esa notación. La misma palabra se usa para el lenguaje y para la herramienta, pero sus funciones son distintas.

Una instrucción suele contener un código de operación y campos para identificar registros, direcciones, desplazamientos o constantes. La cantidad de bytes depende de la ISA y de los operandos. En un formato educativo de 16 bits con opcode de cuatro bits quedan doce para otros campos; si usa dos registros entre ocho posibles, cada registro requiere tres bits y restan seis. Esta cuenta no describe el formato real completo del 8086: ilustra la competencia por espacio dentro de una palabra.

### Operando inmediato, registro y memoria

Un inmediato es un valor incluido en la propia instrucción. Un registro nombra un almacenamiento interno. Un operando de memoria requiere una dirección efectiva. `MOV AX,1000h` carga el número 1000h; `MOV AX,[1000h]` lee el contenido de memoria en un desplazamiento que, con el segmento correspondiente, localiza los bytes. Cambiar corchetes altera el significado aunque la cifra escrita sea la misma.

Los modos de direccionamiento permiten calcular direcciones con registros base, índices y desplazamientos. Cada ISA restringe qué combinaciones admite. La libertad de escribir una fórmula matemática no garantiza que exista una codificación para ella. El ensamblador puede rechazar un modo o expandir ciertas construcciones; para razonar sobre rendimiento hay que conocer qué instrucciones reales se emiten.

### CISC y RISC como tendencias de diseño

CISC suele asociarse a instrucciones complejas, diversidad de modos y formatos de longitud variable; RISC a instrucciones regulares, operaciones simples y organización de carga/almacenamiento con abundantes registros. Son tendencias históricas, no reglas que permitan afirmar que toda instrucción RISC tarda un ciclo o que todo procesador CISC es lento. Las implementaciones modernas combinan técnicas, y varias ISA tienen extensiones que matizan las descripciones iniciales.

Una instrucción compleja puede traducirse internamente a operaciones más simples. Un compilador para una ISA regular puede necesitar más instrucciones para expresar la misma operación. El tiempo final depende de N, CPI, frecuencia y memoria; el nombre de la familia no reemplaza esa medición. x86 y ARM no deben compararse por un único producto comercial de una diapositiva.

### Un ejemplo de carga, cálculo y almacenamiento

Para expresar `c=a+b`, una ISA de carga/almacenamiento puede leer a en R1, b en R2, sumar en R3 y escribir c. En 8086 puede cargarse a en AX, sumarse b desde memoria y guardarse AX en c, dentro de las restricciones de operandos. La diferencia en cantidad de instrucciones no basta para decidir cuál es más rápida: se necesita el costo de cada una, el comportamiento de memoria y el resto del programa.

### Práctica razonada

**14.1.** ¿Una instrucción que suma dos registros necesita leer memoria de datos? **Respuesta:** no por sus operandos, aunque la búsqueda de la propia instrucción y otras condiciones pueden acceder a memoria.

**14.2.** Si hay 32 registros, ¿cuántos bits los identifican? **Respuesta:** cinco, porque $2^5=32$.

**14.3.** ¿Un mismo ejecutable funciona por tener ambos equipos 64 bits? **Respuesta:** no necesariamente. Deben coincidir ISA, ABI y entorno esperado, entre otros requisitos.

**14.4.** ¿ISA y microarquitectura son intercambiables? **Respuesta:** no. La primera especifica comportamiento visible; la segunda implementa ese comportamiento con decisiones concretas.

### Hoja de fórmulas y relaciones del capítulo 14

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Campos de registro | r bits identifican hasta 2ʳ registros | No determina la longitud de toda la instrucción. |
| ISA | opcode + operandos según formatos admitidos | Dirección efectiva, inmediato y contenido de registro son objetos distintos. |
| CISC/RISC | tendencias de diseño, no una fórmula de rendimiento | Comparar tiempo del mismo trabajo, no solo cantidad de instrucciones. |

## Formulario de la Unidad 4 · Arquitectura y CPU

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 11

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arquitectura | contrato visible para software | ISA, registros, formatos y reglas; diferenciar de implementación. |
| Von Neumann y Harvard | compartir o separar memorias/caminos de instrucciones y datos | Los sistemas reales pueden combinar rasgos por nivel. |
| Programa almacenado | los bits se interpretan según el contexto de ejecución | Dirección y contenido no son el mismo objeto. |

### Capítulo 12

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Búsqueda conceptual | MAR←PC; MDR←Mem[MAR]; IR←MDR | Modelo educativo; los registros internos concretos dependen del diseño. |
| Continuación | PC←PC+longitud de instrucción | En una traza de direcciones por bytes no se suma siempre uno. |
| Control | microoperaciones ≠ instrucciones del usuario | El control puede implementarse cableado, microprogramado o mediante combinaciones. |
| Pipeline | solapa etapas de instrucciones distintas | Dependencias, recursos y cambios de flujo pueden introducir burbujas. |

### Capítulo 13

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tiempo CPU | $T=N\cdot CPI/f$ | N instrucciones ejecutadas; f ciclos/s; CPI promedio de esa carga. |
| CPI ponderado | $CPI=\sum_i p_i CPI_i$ | pᵢ son fracciones de instrucciones ejecutadas y suman uno. |
| Amdahl | $S=1/((1-p)+p/s)$ | p fracción del tiempo original mejorada; mismo trabajo y costos restantes constantes. |
| Pipeline ideal | $T=(k+n-1)\tau$ | k etapas balanceadas, n instrucciones independientes, sin burbujas; frente a nkτ sin solapamiento. |

### Capítulo 14

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Campos de registro | r bits identifican hasta 2ʳ registros | No determina la longitud de toda la instrucción. |
| ISA | opcode + operandos según formatos admitidos | Dirección efectiva, inmediato y contenido de registro son objetos distintos. |
| CISC/RISC | tendencias de diseño, no una fórmula de rendimiento | Comparar tiempo del mismo trabajo, no solo cantidad de instrucciones. |

## Capítulo 15 · Memoria, direccionamiento, endian y organización física

![Jerarquía conceptual de registros, cachés, RAM y almacenamiento](/planos-de-estudio/img/arquitectura/jerarquia.svg)


### Dirección, contenido y unidad direccionable

Una dirección identifica una unidad direccionable; esa unidad no tiene por qué ser siempre un byte en cualquier máquina. En un sistema direccionado por bytes con a bits de dirección se identifican $2^a$ bytes. Si las posiciones son palabras de w bits, la capacidad total es $2^a w$ bits. Confundir ancho del bus de datos con cantidad de direcciones produce capacidades incorrectas.

Un bus de datos de 16 bits puede transferir dos bytes en ciertas condiciones, pero un procesador puede seguir usando direcciones de byte. En el 8086, las direcciones físicas tienen veinte bits y el espacio físico es de 1 MiB. La anchura de sus registros generales es dieciséis bits; ambas características conviven gracias al mecanismo de segmentación.

### Little endian y big endian

Un valor de varios bytes necesita una regla para distribuir sus bytes en direcciones sucesivas. Little endian guarda el byte menos significativo en la dirección menor; big endian guarda primero el más significativo. Para 1234h, little endian almacena 34h y 12h. El valor lógico no se vuelve 3412h: esa sería una lectura con una interpretación diferente del orden.

**Ejemplo desarrollado.** La palabra 89ABCDEFh se almacena en little endian como EF CD AB 89. Si se lee el byte de dirección base+2 se obtiene ABh. Si se lee la word de dos bytes desde base+1 se obtiene ABCDh bajo la misma convención. La interpretación del bloque exige indicar tamaño y dirección inicial; leer cuatro bytes y leer dos bytes desde una posición intermedia son operaciones distintas.

El orden de bytes no invierte los bits dentro de cada byte. Tampoco invierte automáticamente una cadena de caracteres: «CASA» se almacena como los códigos de C, A, S, A en su secuencia de posiciones. Solo al empaquetarla y reinterpretarla como entero multibyte entra en juego endian.

### RAM, ROM y tecnologías

SRAM utiliza celdas que mantienen su estado mientras reciben alimentación sin refresco periódico; DRAM almacena información mediante carga y necesita refresco. Ambas son volátiles. DRAM permite alta densidad y se utiliza habitualmente para memoria principal; SRAM se usa en cachés y otras memorias rápidas. «Aleatorio» en RAM se refiere a acceso por dirección, no a que el contenido sea impredecible.

ROM y sus variantes permiten conservar información sin energía bajo distintas posibilidades de programación o borrado. Flash es no volátil y se organiza con restricciones de programación y borrado; no equivale a una RAM simplemente más lenta. NOR y NAND tienen organizaciones y usos diferentes. Los tiempos y la resistencia a escrituras dependen de la tecnología y del dispositivo concreto: el manual usa propiedades de organización, no cifras comerciales supuestamente permanentes.

### Construir una memoria con chips

Si cada chip tiene 1K posiciones de ocho bits y queremos 4K×16 bits, hacen falta dos chips en paralelo para el ancho de palabra y cuatro bancos para la profundidad: ocho chips en total. Diez líneas seleccionan una posición dentro de cada chip y dos seleccionan el banco, para doce bits de dirección de palabra. La capacidad es 8192 bytes. Si se exige direccionamiento por byte, también hay que definir selección de byte dentro de cada palabra; no basta reciclar el mismo diagrama sin aclararlo.

### Práctica razonada

**15.1.** Un espacio direccionado por bytes tiene 24 bits de dirección. **Respuesta:** 16 MiB de espacio direccionable; la RAM realmente instalada puede ser menor.

**15.2.** En memoria aparecen 78h,56h en direcciones crecientes. **Respuesta:** como word little endian valen 5678h. Como dos caracteres o dos bytes independientes su interpretación es otra.

**15.3.** ¿Un registro de 32 bits implica 4 GiB de memoria? **Respuesta:** no. El tamaño de registros, el ancho de direcciones y la memoria instalada son conceptos diferentes.

**15.4.** ¿SRAM es no volátil porque no necesita refresco? **Respuesta:** no. No necesitar refresco periódico no significa conservar el contenido sin alimentación.

### Hoja de fórmulas y relaciones del capítulo 15

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Capacidad direccionable | $2^a\cdot w$ bits | a bits de dirección, unidad direccionable de w bits; para bytes w=8. |
| Little endian | byte menos significativo en dirección menor | No invierte bits dentro del byte ni la secuencia de una cadena. |
| Chips | bancos por profundidad × chips en paralelo por ancho | Aclarar selección de byte si el sistema direcciona por bytes. |
| SRAM/DRAM | ambas volátiles; DRAM necesita refresco | No confundir acceso aleatorio con contenido aleatorio. |

## Capítulo 16 · Caché: localidad, mapeo y trazas

![Campos de dirección de una caché por conjuntos](/planos-de-estudio/img/arquitectura/cache-campos.svg)


### Mantener cerca lo que se vuelve a usar

La localidad temporal indica que un dato o instrucción usado recientemente puede volver a usarse pronto. La espacial indica que pueden necesitarse direcciones cercanas. Una caché aprovecha ambas almacenando bloques de memoria en líneas. Un acierto encuentra el bloque solicitado; un fallo obliga a obtenerlo de un nivel inferior. Traer un bloque completo puede ayudar con accesos vecinos, aunque también ocupa espacio y consume ancho de banda.

La capacidad de datos no incluye necesariamente etiquetas y bits de estado. Para una caché de C bytes, bloques de B bytes y A vías, hay $S=C/(BA)$ conjuntos. En direccionamiento por bytes y tamaños potencia de dos, el desplazamiento ocupa $\log_2B$ bits y el índice $\log_2S$; los restantes forman la etiqueta. Un acceso acierta solo si la línea correspondiente está válida y su etiqueta coincide.

### Mapeo directo, asociativo y por conjuntos

En mapeo directo cada bloque de memoria tiene una única línea posible. Para el bloque q, la línea es q módulo S y la etiqueta el cociente entero q/S. La simplicidad tiene un costo: dos bloques muy usados pueden competir aunque haya otras líneas sin utilizar. En totalmente asociativa el bloque puede ocupar cualquier línea; hay más libertad y más comparación. El mapeo por conjuntos es un término intermedio: cada bloque elige un conjunto y puede ocupar cualquiera de sus vías.

**Ejemplo de campos.** Direcciones de 16 bits, caché de 256 bytes, bloques de 16 bytes y dos vías: S=8 conjuntos; desplazamiento de cuatro bits, índice de tres y etiqueta de nueve. Para 1234h: bloque 123h, desplazamiento 4, conjunto 3 y etiqueta 24h. El byte solicitado es el quinto del bloque, contando desde cero.

### Traza que muestra conflictos

Consideremos una caché inicialmente vacía de cuatro líneas directas y bloques de un elemento. La secuencia de bloques 0,4,0,4,1,1 produce fallo, fallo, fallo, fallo, fallo, acierto. Los bloques 0 y 4 compiten por la línea cero; 1 usa otra. Hay un acierto de seis accesos. En una caché de dos vías con igual capacidad, 0 y 4 pueden coexistir en el mismo conjunto y la secuencia produce fallo, fallo, acierto, acierto, fallo, acierto. La tasa de aciertos pasa de 1/6 a 3/6 para esta carga, no para todas las posibles.

Una traza se resuelve anotando por acceso: dirección, bloque, conjunto, etiquetas presentes, hit/miss y modificación del estado. Saltarse la etiqueta y mirar solo el índice genera falsos aciertos. La política de reemplazo importa cuando un conjunto está lleno; LRU elige la vía menos recientemente usada, no la más antigua desde su carga si fue accedida después.

### Escrituras y penalizaciones

Write-through propaga escrituras al siguiente nivel; write-back marca la línea sucia y difiere esa escritura hasta que corresponda. Write-allocate trae una línea en un fallo de escritura; no-write-allocate escribe sin cargarla en ese caso. Son dos decisiones diferentes, aunque existan combinaciones habituales. Una expulsión de línea sucia puede agregar tráfico y latencia.

Con hit time $t_h$, tasa de fallos m y penalización adicional p, $AMAT=t_h+mp$. Si p ya incluye el acceso inicial hay que ajustar la definición para no contarlo dos veces. Para $t_h=2$ ns, m=0.05 y p=80 ns, AMAT=6 ns. En dos niveles, si $m_2$ es tasa local de fallos de L2: $AMAT=t_1+m_1(t_2+m_2p_M)$. Una tasa global de fallos no se sustituye como si fuera local.

### Práctica razonada

**16.1.** C=4 KiB, B=32 bytes y A=4. **Respuesta:** 32 conjuntos; cinco bits de offset y cinco de índice. Con direcciones de 32 bits quedan 22 de etiqueta.

**16.2.** ¿Puede fallar una caché con espacio libre? **Respuesta:** sí, por primer acceso o porque el mapeo restringe el conjunto donde cabe el bloque.

**16.3.** ¿Una línea sucia está corrupta? **Respuesta:** no. Contiene una versión modificada aún no propagada; su tratamiento debe preservar el dato correcto.

**16.4.** ¿Un bloque mayor siempre mejora? **Respuesta:** puede explotar localidad espacial, pero reduce la cantidad de líneas y aumenta costo de transferencia y contaminación.

### Hoja de fórmulas y relaciones del capítulo 16

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conjuntos | $S=C/(BA)$ | C capacidad de datos en bytes, B bytes/bloque, A vías. |
| Campos | offset=log₂B; índice=log₂S; etiqueta=resto | Tamaños potencia de dos y direccionamiento por bytes. |
| Tiempo medio | $AMAT=t_h+mp$ | p penalización adicional; m tasa de fallos; definir si la penalización incluye el acceso inicial. |
| Dos niveles | $AMAT=t_1+m_1(t_2+m_2p_M)$ | m₂ tasa local de fallos de L2; no sustituir una tasa global sin convertirla. |

## Capítulo 17 · Memoria virtual, almacenamiento y RAID

### Espacio de direcciones y memoria física

La memoria virtual separa las direcciones usadas por un programa de las ubicaciones físicas. En paginación se divide el espacio en páginas y la RAM en marcos del mismo tamaño. La tabla de páginas traduce número de página a marco y contiene estado o permisos. El desplazamiento dentro de la página se conserva. Un TLB guarda traducciones recientes para evitar consultar la tabla en cada acceso; no almacena el dato del programa como lo hace una caché de datos.

Con páginas de 4 KiB, el desplazamiento ocupa doce bits. La dirección virtual 12345h se divide en página 12h y offset 345h. Si la tabla la asigna al marco ABh, la dirección física es AB345h. La suma no es marco+offset sin escalar: el marco nombra un bloque completo de 4096 bytes.

Un fallo de TLB requiere obtener una traducción; no implica por sí mismo que la página esté ausente de RAM. Un fallo de página requiere intervención del sistema operativo y puede deberse a ausencia u otras condiciones de acceso según el sistema. No todos los fallos se arreglan trayendo datos de disco: un acceso prohibido debe tratarse de otra manera. Este tema es una introducción que conecta las direcciones lógicas y físicas de las diapositivas; los mecanismos detallados se profundizan en Sistemas Operativos.

### Latencia y ancho de banda del almacenamiento

Un HDD necesita localizar el dato mediante movimiento mecánico y rotación, además de transferirlo. Un SSD no usa ese movimiento, pero tiene controladores, bloques de flash y restricciones de escritura. El tiempo de una operación puede modelarse como latencia fija más tamaño dividido por tasa de transferencia, si el modelo es apropiado. Duplicar el ancho de banda ayuda poco en operaciones diminutas dominadas por la latencia.

**Ejemplo.** Una solicitud de 4 KiB con latencia de 0.1 ms y transferencia a 400 MB/s agrega aproximadamente 0.01024 ms de transferencia: total 0.11024 ms. Es un modelo simplificado sin colas ni cachés; no corresponde concluir que un dispositivo real siempre sostendrá ese tiempo. Muchas solicitudes simultáneas pueden cambiar throughput y latencia por espera.

### RAID organiza redundancia y paralelismo

RAID0 distribuye datos sin redundancia; aumenta capacidad agregada y puede paralelizar, pero la pérdida de un miembro puede comprometer el conjunto. RAID1 mantiene copias espejo. RAID5 distribuye datos y una paridad equivalente por banda; con N discos iguales de capacidad D, la capacidad útil nominal es (N−1)D y puede tolerar un fallo de disco bajo sus supuestos. RAID6 usa dos paridades y permite dos fallos, con capacidad (N−2)D. RAID10 combina espejos y distribución.

Estas cuentas no incluyen metadatos, reservas ni diferencias de tamaño. En RAID10, tolerar dos fallos depende de que no destruyan las dos copias del mismo espejo. Una redundancia no reemplaza una copia de seguridad: un borrado, un error lógico o un ataque puede propagarse a todas las copias activas.

La paridad puede ilustrarse con XOR: P=A XOR B XOR C. Si se pierde B, B=P XOR A XOR C. Esa reconstrucción opera sobre bloques de bits, no sobre una suma decimal con acarreo. El costo de mantener paridad en escrituras pequeñas influye en el rendimiento y no aparece en la simple fórmula de capacidad.

### Práctica razonada

**17.1.** Dirección virtual de 32 bits y páginas de 4 KiB. **Respuesta:** veinte bits de número de página y doce de desplazamiento; el número de marcos depende de la memoria física.

**17.2.** Cinco discos de 2 TB en RAID5. **Respuesta:** 8 TB nominales útiles antes de reservas y metadatos, con tolerancia a un fallo de disco.

**17.3.** ¿Un TLB miss es un cache miss de datos? **Respuesta:** son búsquedas diferentes; puede faltar la traducción aunque el bloque de datos esté en caché.

**17.4.** Si A=1010, B=0110 y C=1100, ¿P? **Respuesta:** 0000. Con P, A y C se reconstruye B=0110; paridad cero no significa que los datos sean todos cero.

### Hoja de fórmulas y relaciones del capítulo 17

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paginación | dirección física = marco × tamaño de página + offset | La traducción conserva offset; tamaño de página potencia de dos facilita partición. |
| Transferencia ideal | $T=L+N/BW$ | L latencia fija, N bytes, BW bytes/s; sin colas ni otros costos no modelados. |
| RAID nominal | RAID0: ND; RAID1 de espejo completo: D; RAID5: (N−1)D; RAID6: (N−2)D | Discos iguales D, organización indicada y sin reservas; redundancia no es backup. |
| Paridad XOR | $P=A\oplus B\oplus C$ | Recuperar B con P XOR A XOR C; no es suma con acarreo. |

## Formulario de la Unidad 5 · Memorias

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 15

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Capacidad direccionable | $2^a\cdot w$ bits | a bits de dirección, unidad direccionable de w bits; para bytes w=8. |
| Little endian | byte menos significativo en dirección menor | No invierte bits dentro del byte ni la secuencia de una cadena. |
| Chips | bancos por profundidad × chips en paralelo por ancho | Aclarar selección de byte si el sistema direcciona por bytes. |
| SRAM/DRAM | ambas volátiles; DRAM necesita refresco | No confundir acceso aleatorio con contenido aleatorio. |

### Capítulo 16

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conjuntos | $S=C/(BA)$ | C capacidad de datos en bytes, B bytes/bloque, A vías. |
| Campos | offset=log₂B; índice=log₂S; etiqueta=resto | Tamaños potencia de dos y direccionamiento por bytes. |
| Tiempo medio | $AMAT=t_h+mp$ | p penalización adicional; m tasa de fallos; definir si la penalización incluye el acceso inicial. |
| Dos niveles | $AMAT=t_1+m_1(t_2+m_2p_M)$ | m₂ tasa local de fallos de L2; no sustituir una tasa global sin convertirla. |

### Capítulo 17

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paginación | dirección física = marco × tamaño de página + offset | La traducción conserva offset; tamaño de página potencia de dos facilita partición. |
| Transferencia ideal | $T=L+N/BW$ | L latencia fija, N bytes, BW bytes/s; sin colas ni otros costos no modelados. |
| RAID nominal | RAID0: ND; RAID1 de espejo completo: D; RAID5: (N−1)D; RAID6: (N−2)D | Discos iguales D, organización indicada y sin reservas; redundancia no es backup. |
| Paridad XOR | $P=A\oplus B\oplus C$ | Recuperar B con P XOR A XOR C; no es suma con acarreo. |

## Capítulo 18 · Buses, arbitraje y transferencias

### Datos, direcciones y control

Un sistema de interconexión transporta datos y las señales necesarias para identificarlos y coordinarlos. En el modelo de bus clásico se distinguen líneas de datos, direcciones y control. El emisor no solo coloca un número: también debe indicar destino, tipo de operación y momento de validez. Que una línea sea físicamente compartida exige reglas para evitar que dos dispositivos conduzcan valores incompatibles al mismo tiempo.

Un bus de direcciones de a bits puede distinguir $2^a$ posiciones en un modelo simple. Su anchura no determina por sí sola cuántos bytes se transfieren en un ciclo. El bus de datos describe el ancho de transferencia, y el protocolo determina si los bits de dirección y datos viajan por líneas separadas o multiplexadas en el tiempo.

### Temporización y arbitraje

En un bus síncrono, las transferencias se coordinan con un reloj y reglas de ciclo; pueden existir estados de espera. En uno asíncrono se usan señales de solicitud y reconocimiento para acordar cada transferencia. «Asíncrono» no significa sin temporización: significa que no se depende de un único reloj común para delimitar todos los pasos.

Cuando varios maestros solicitan el recurso, el arbitraje decide quién lo usa. Puede ser centralizado o distribuido, con prioridades fijas, rotación u otras políticas. Una prioridad fija puede dar baja latencia a un dispositivo pero causar inanición de otro si la demanda superior no cesa. La política debe evaluarse por prioridad, equidad, costo y tiempo de acceso.

### Ancho de banda ideal y efectivo

Si una interfaz transfiere W bits por transferencia y realiza r transferencias por segundo, su tasa bruta es Wr bits/s. Para una señal con frecuencia f y q transferencias por ciclo, r=qf. Debe distinguirse reloj de tasa de transferencias: una interfaz de doble transferencia no requiere duplicar su frecuencia para duplicar esa tasa ideal.

**Ejemplo.** Un enlace de 32 bits a 100 millones de transferencias por segundo mueve 400 MB/s brutos. Si cada operación dedica un ciclo a dirección y cuatro a datos de cuatro bytes, sin solapamiento, transfiere 16 bytes en cinco ciclos:320 MB/s. La eficiencia es 80 %. Si existen esperas, cabeceras o arbitraje adicional, el rendimiento baja. No se agregan descuentos dos veces si una tasa ya fue informada como efectiva.

### Jerarquía y punto a punto

Un bus compartido puede limitarse por contención y carga eléctrica al agregar dispositivos. Una jerarquía separa tráfico local y periférico mediante puentes. Los enlaces punto a punto y las estructuras conmutadas permiten caminos dedicados o simultáneos, aunque siguen existiendo límites de los nodos y de la red. PCI y PCI Express ilustran una transición de organización; no es correcto describir PCIe simplemente como el mismo bus paralelo con mayor frecuencia.

Las figuras de las clases muestran northbridge y southbridge y distintas generaciones de integración. Se estudian para comprender qué funciones se interconectan, sin afirmar que todos los equipos actuales mantengan esos bloques como chips separados. La ubicación del controlador de memoria o de otras funciones puede variar entre diseños.

### Práctica razonada

**18.1.** Un bus de 64 bits entrega 200 millones de transferencias/s. **Respuesta:** 12.8 Gbit/s o 1.6 GB/s brutos.

**18.2.** ¿Qué ocurre si dos maestros transmiten al mismo tiempo sin protocolo? **Respuesta:** se puede producir contención y valores inválidos; el arbitraje evita tratar el medio como si hubiera un único emisor permanente.

**18.3.** ¿Ancho de banda alto garantiza latencia baja? **Respuesta:** no. Preparar una transferencia o esperar turno puede dominar el tiempo de una solicitud pequeña.

**18.4.** ¿Direcciones de 32 bits implican un bus de datos de 32 bits? **Respuesta:** no. Son dimensiones independientes del diseño.

### Hoja de fórmulas y relaciones del capítulo 18

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tasa bruta | $BW=Wqf$ bits/s | W bits/transferencia, q transferencias/ciclo, f ciclos/s. |
| Tasa efectiva | bytes útiles / tiempo total | Incluir direcciones, arbitraje, esperas y protocolo si no están ya descontados. |
| Síncrono/asíncrono | reloj común / coordinación por protocolo de solicitud y respuesta | Ambos requieren reglas temporales; asíncrono no significa sin tiempos. |
| Arbitraje | decide qué solicitante usa el recurso compartido | Evaluar prioridad y equidad; las prioridades fijas pueden provocar inanición. |

## Capítulo 19 · Entrada/salida: sondeo, interrupciones y DMA

![Separación entre configuración y transferencia DMA](/planos-de-estudio/img/arquitectura/dma.svg)


### Un dispositivo no es una celda de memoria ordinaria

Un módulo de E/S adapta las diferencias entre CPU y periféricos: velocidad, formato, señales de control y tratamiento de errores. Expone registros de datos, control y estado. Escribir en uno puede iniciar una operación; leer otro puede consumir un dato o reconocer un evento. Por eso dos accesos idénticos no necesariamente tienen el mismo efecto ni pueden reordenarse libremente.

En E/S mapeada en memoria se usan direcciones del espacio de memoria para esos registros; en E/S aislada existe un espacio de puertos y operaciones específicas. El 8086 permite `IN` y `OUT` para puertos, además de otras decisiones del sistema. Ejecutar `INT 21h` para pedir un servicio DOS no es lo mismo que acceder directamente al puerto de un dispositivo: el sistema operativo interviene como capa de software.

### Sondeo y espera activa

Con E/S programada, el procesador comprueba el estado y realiza las transferencias. Si repite una consulta hasta que el dispositivo esté listo, hace espera activa. Es simple y puede ser adecuado en ciertos sistemas, pero consume ciclos que podrían dedicarse a otra tarea.

**Ejemplo de costo.** Sondear cada 50 μs, con un costo de 2 μs por sondeo, ocupa idealmente el 4 % del tiempo de CPU aunque no lleguen datos. Ese costo no incluye la transferencia cuando se detecta un evento. Si los eventos llegan justo después de una consulta, la latencia de detección se aproxima al período; para llegadas uniformes, el promedio ideal es la mitad. No se debe confundir ese promedio con una garantía de tiempo máximo bajo cargas reales.

### E/S por interrupciones

El procesador inicia una operación y continúa trabajando. Cuando el dispositivo requiere atención, solicita una interrupción. La CPU acepta la solicitud en un punto permitido, preserva el estado definido por la arquitectura y transfiere control al manejador. El manejador debe guardar los registros adicionales que usa, atender el dispositivo y reconocer la condición según el protocolo, antes de retornar.

No se acepta necesariamente a mitad de una instrucción ni «de inmediato» en sentido absoluto. Influyen límites de instrucción, prioridad, máscaras y secciones críticas. El 8086 dispone de INTR enmascarable y NMI no enmascarable por IF; sus detalles no equivalen a tener una línea física independiente por cada posible interrupción de software. Los controladores de interrupciones de una plataforma agregan su propia organización.

Una rutina de interrupción debe ser corta y preservar lo que el programa interrumpido necesita. La CPU no salva automáticamente AX, BX, CX y todos los demás. «Transparente para el programa» es un objetivo logrado por hardware y software en conjunto, no una propiedad que dispense de guardar registros.

### DMA mueve el bloque, pero no elimina todo trabajo de CPU

En acceso directo a memoria, un controlador transfiere datos entre dispositivo y memoria sin que la CPU copie cada unidad mediante instrucciones. La CPU configura dirección, longitud y dirección de transferencia, y luego suele recibir una notificación. El DMA compite por interconexión o memoria y puede requerir coordinación con cachés.

Si un bloque de 4096 bytes se copia por CPU y cada byte requiere diez ciclos a 1 GHz, el tiempo de copia ideal es 40.96 μs, ignorando esperas. Un DMA con 8 μs de preparación y una tasa de 200 MB/s necesita 20.48 μs de transferencia más preparación. El tiempo transcurrido y el tiempo ocupado de CPU son métricas distintas: el DMA puede liberar CPU durante la transferencia, pero no hace cero la latencia ni el costo de configuración.

### Práctica razonada

**19.1.** ¿Qué diferencia un registro de estado de uno de datos? **Respuesta:** uno describe condiciones y el otro transporta contenido; sus efectos de lectura y escritura dependen del dispositivo.

**19.2.** ¿DMA vuelve innecesaria la coherencia? **Respuesta:** no. Si CPU y dispositivo ven copias diferentes de una región hay que aplicar las reglas de coherencia o mantenimiento correspondientes.

**19.3.** ¿Interrupciones siempre ganan al sondeo? **Respuesta:** no. Tasas muy altas pueden hacer costosa la atención por evento; existen decisiones de diseño y técnicas híbridas.

**19.4.** ¿Un programa DOS controla directamente el teclado cuando llama a un servicio? **Respuesta:** no necesariamente. Puede leer un buffer gestionado por el sistema y sus manejadores.

### Hoja de fórmulas y relaciones del capítulo 19

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sondeo | ocupación ideal ≈ costo por consulta / período | Antes de sumar costo de transferencias o interferencia de otras tareas. |
| Interrupción | notificación + guardado de estado + atención + retorno | Hardware y manejador comparten la responsabilidad de preservar contexto. |
| DMA | configurar bloque, transferir sin copiar cada dato por CPU | No elimina preparación, arbitraje, notificación ni problemas de coherencia. |

## Formulario de la Unidad 6 · Interconexión y entrada/salida

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 18

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Tasa bruta | $BW=Wqf$ bits/s | W bits/transferencia, q transferencias/ciclo, f ciclos/s. |
| Tasa efectiva | bytes útiles / tiempo total | Incluir direcciones, arbitraje, esperas y protocolo si no están ya descontados. |
| Síncrono/asíncrono | reloj común / coordinación por protocolo de solicitud y respuesta | Ambos requieren reglas temporales; asíncrono no significa sin tiempos. |
| Arbitraje | decide qué solicitante usa el recurso compartido | Evaluar prioridad y equidad; las prioridades fijas pueden provocar inanición. |

### Capítulo 19

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sondeo | ocupación ideal ≈ costo por consulta / período | Antes de sumar costo de transferencias o interferencia de otras tareas. |
| Interrupción | notificación + guardado de estado + atención + retorno | Hardware y manejador comparten la responsabilidad de preservar contexto. |
| DMA | configurar bloque, transferir sin copiar cada dato por CPU | No elimina preparación, arbitraje, notificación ni problemas de coherencia. |

## Capítulo 20 · 8086: registros, segmentos y estructura de un programa

![Cálculo de una dirección física con segmento y desplazamiento](/planos-de-estudio/img/arquitectura/segmentos.svg)


### El modelo que usaremos para programar

Los ejemplos de esta unidad usan ensamblador Intel de 16 bits, con convenciones MASM/EMU8086 como las de la cátedra. No son programas x86-64 para ejecutar directamente desde Windows o Linux. Las directivas `.MODEL`, `.DATA`, `.CODE`, `DB`, `DW` y `PROC` describen organización para el ensamblador; no todas se convierten en instrucciones ejecutadas por la CPU.

AX, BX, CX y DX son registros generales de 16 bits y permiten acceder a sus mitades: AH/AL, BH/BL, CH/CL y DH/DL. SI y DI son índices; BP y SP participan en acceso a pila y parámetros. CS, DS, SS y ES son registros de segmento. IP identifica la próxima posición de instrucción dentro del segmento de código. FLAGS contiene condiciones y control. No existen EAX ni registros de 64 bits en el 8086 original.

Si AX=1234h, AH=12h y AL=34h. Modificar AL cambia solo los ocho bits bajos; AH conserva su valor. Cargar AH con una función DOS también cambia AX completo, aunque AL se mantenga inicialmente. Una rutina no puede prometer conservar AX si libremente modifica AH.

### Dirección física en modo real

En el 8086, una dirección segmento:desplazamiento se calcula como $16\cdot segmento+desplazamiento$, con espacio físico de 20 bits. Para 1234h:0020h resulta 12360h. Hay alias: 1235h:0010h llega al mismo lugar. Un segmento no es una página protegida con permisos; su dirección base está alineada a 16 bytes y el desplazamiento tiene 16 bits.

Para el 8086 original, el bus físico de 20 bits limita la dirección al rango de 1 MiB; si la suma supera FFFFFh se descartan los bits que no salen al bus. Los detalles posteriores de A20 y de otros modos de CPU no deben proyectarse sin aclaración sobre este modelo histórico. En los ejemplos ordinarios evitamos desbordar ese espacio.

### Un programa mínimo y sus contratos

```asm
.MODEL SMALL
.STACK 100h
.DATA
resultado DW ?
.CODE
inicio:
    mov ax, @data
    mov ds, ax
    mov ax, 5
    add ax, 7
    mov resultado, ax
    mov ax, 4C00h
    int 21h
END inicio
```

El segmento de datos debe inicializarse antes de acceder a `resultado`. `MOV DS,@data` no es una forma de carga inmediata admitida por la CPU; se usa un registro general intermedio. El resultado se almacena antes de reemplazar AX por 4C00h para terminar. Si se inspecciona AX después de esa carga, ya no contiene doce, aunque la memoria `resultado` sí.

El cargador y el formato ejecutable intervienen en la configuración de segmentos y pila. `.MODEL SMALL` no significa que el programa use un único byte ni que las direcciones sean números absolutos conocidos desde cualquier entorno. Los ejemplos COM con `ORG 100h` tienen otra organización y no deben mezclarse mecánicamente con el esqueleto EXE anterior.

### Práctica razonada

**20.1.** AX=ABCDh y luego `MOV AL,12h`. **Respuesta:** AX=AB12h; AH no se limpió.

**20.2.** Calculá la dirección física de 2000h:0030h. **Respuesta:** 20030h. El segmento se multiplica por 16, no por 65536.

**20.3.** ¿DS e IP identifican normalmente la próxima instrucción? **Respuesta:** no; el par de búsqueda es CS:IP. DS se usa por defecto en numerosos accesos a datos.

**20.4.** ¿Por qué guardar el resultado antes de terminar? **Respuesta:** la terminación usa AX para el servicio y código de salida, por lo que observar un registro al final sin considerar esas instrucciones puede llevar a una conclusión falsa.

### Hoja de fórmulas y relaciones del capítulo 20

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección física 8086 | $16\cdot segmento+offset$ | Espacio físico original de 20 bits; tratar alias y límite del bus. |
| Mitades | AX = 256·AH + AL | Una carga en AL no limpia AH; análogo para BX, CX y DX. |
| Segmentos | CS:IP código; DS datos; SS:SP pila | Son selecciones por contexto e instrucción, no permisos de memoria protegida. |
| Terminar DOS | AX=4C00h; INT 21h | Guardar resultados antes: AX se reutiliza para el servicio. |

## Capítulo 21 · Variables, operandos y modos de direccionamiento 8086

### Declarar tamaño y reservar espacio

`DB` reserva bytes y `DW` palabras de dos bytes. `DW 1234h` ocupa dos posiciones consecutivas con 34h y 12h, por little endian. `DB 5 DUP(0)` reserva cinco bytes inicializados a cero; `DW ?` reserva una palabra sin prometer un valor inicial. El nombre de una variable representa una ubicación con un tipo de dato para el ensamblador, no una celda cuyo tamaño se adapta automáticamente al valor que queremos guardar.

```asm
.DATA
edad    DB 20
total   DW 300
tabla   DB 4, 7, 9, 2
salida  DB 4 DUP(0)
```

`MOV AL,tabla[2]` lee el tercer byte. `MOV AX,total` lee la word. `MOV BX,OFFSET tabla` carga la dirección relativa, no los primeros elementos. Para copiar de memoria a memoria con un MOV ordinario usamos un registro intermedio: `MOV AL,tabla[2]` y `MOV salida[0],AL`. Las instrucciones de cadenas constituyen casos específicos, por lo que no debe generalizarse «ninguna instrucción puede transferir entre dos ubicaciones de memoria» a toda la ISA.

### Direcciones efectivas admitidas

El 8086 permite accesos mediante BX, BP, SI o DI, un desplazamiento, y combinaciones base+índice: BX+SI, BX+DI, BP+SI y BP+DI. Pueden agregarse desplazamientos. No acepta cualquier suma de registros: `[AX]`, `[BX+BP]` o `[SI+DI]` no son modos ordinarios codificables de esa arquitectura. En direcciones que contienen BP, el segmento por defecto es SS; en los otros casos de datos habituales es DS. Puede usarse un prefijo explícito si se necesita otra selección.

**Ejemplo desarrollado.** DS=2000h, BX=0100h, SI=0003h. `MOV DL,[BX+SI+2]` calcula desplazamiento 0105h y dirección física 20105h. Si esa celda contiene 7Ah, DL pasa a 7Ah. La dirección no se suma al contenido ni se carga automáticamente en DL. Si la operación fuera `LEA DX,[BX+SI+2]`, DX recibiría el desplazamiento 0105h sin leer el dato.

### Tamaño de operando y ambigüedad

`MOV BYTE PTR [BX],1` indica que se escribe un byte; `MOV WORD PTR [BX],1` escribe dos, primero 01h y luego 00h. Cuando el otro operando es un registro, su tamaño puede resolver la ambigüedad, como `MOV [BX],AX`. Los operandos de MOV ordinario deben tener tamaños compatibles: no hay una copia automática de byte a word con extensión de signo por escribir `MOV AX,AL`.

Una dirección de un arreglo de words avanza dos bytes por elemento. El elemento de índice i está en base+2i, con índice inicial cero. Si usamos SI como desplazamiento en bytes hay que aumentarlo de dos en dos; si lo usamos como índice de elementos, debe multiplicarse antes de construir la dirección. La arquitectura 8086 no tiene el escalado general `[base+indice*4]` de modos x86 posteriores.

### Práctica razonada

**21.1.** Se declara `v DW 1000h,2000h`. ¿Qué byte hay en v+2? **Respuesta:** 00h, el byte bajo de 2000h; en v+3 está 20h.

**21.2.** ¿Qué diferencia OFFSET de leer una variable? **Respuesta:** OFFSET produce un desplazamiento; leer la variable obtiene su contenido. Se usan para pasar dirección y valor, respectivamente.

**21.3.** BP=0100h, SS=3000h, DS=2000h. ¿Base por defecto de `[BP+4]`? **Respuesta:** SS, luego dirección física 30104h.

**21.4.** ¿Es válido `MOV [BX],[SI]` como copia ordinaria? **Respuesta:** no. Hay dos operandos de memoria en una forma que MOV ordinario no admite; hay que usar un registro o una instrucción de cadena apropiada con sus propios contratos.

### Hoja de fórmulas y relaciones del capítulo 21

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arreglo | dirección de elemento = base + índice × tamaño | DB ocupa 1 byte; DW ocupa 2; índice inicial cero en los ejemplos. |
| Modos 8086 | BX/BP + SI/DI + desplazamiento, en combinaciones válidas | No [AX], [BX+BP] ni [SI+DI] en los modos ordinarios del 8086. |
| Segmento por defecto | dirección con BP usa SS; datos ordinarios restantes suelen usar DS | Puede existir prefijo explícito; las instrucciones de cadena tienen sus reglas. |
| Dirección frente a dato | OFFSET/LEA obtienen desplazamiento; MOV desde memoria lee contenido | El tamaño del operando debe quedar determinado. |

## Capítulo 22 · Comparaciones, saltos y bucles con invariantes

### CMP no guarda la diferencia

`CMP A,B` actualiza banderas como si realizara A−B, sin modificar A ni B. El salto siguiente debe corresponder a la interpretación de esos operandos. Para igualdad, `JE/JZ` usa ZF=1 y `JNE/JNZ` ZF=0. Para sin signo, `JB` consulta CF=1, `JAE` CF=0, `JA` CF=0 y ZF=0, y `JBE` CF=1 o ZF=1. Para Ca2, `JL` usa SF≠OF y `JGE` SF=OF; `JG` además exige ZF=0 y `JLE` admite ZF=1.

**Caso que distingue significados.** Comparar 80h con 01h da 7Fh: CF=0, OF=1, SF=0 y ZF=0. Sin signo,128 es mayor que 1; con signo,−128 es menor que 1. `JA` y `JL` pueden ser verdaderos después del mismo CMP porque responden a preguntas distintas. Usar `JS` como sustituto universal de `JL` falla precisamente cuando hubo overflow en la resta conceptual.

### Estructuras de control

```asm
; Entrada: AX y BX, enteros Ca2 de 16 bits
; Salida: DX = máximo; AX y BX se conservan
    mov dx, ax
    cmp ax, bx
    jge listo
    mov dx, bx
listo:
```

La elección de `JGE` documenta que los valores tienen signo. Si se tratara de cantidades sin signo se usaría `JAE`. El caso de igualdad ya queda cubierto sin una rama adicional. Las etiquetas nombran posiciones del código, no variables de datos.

### LOOP y el caso vacío

`LOOP etiqueta` decrementa CX y salta si el nuevo CX es distinto de cero, sin modificar las banderas. Si CX comienza en cero y se entra de todas formas en el cuerpo, se decrementa a FFFFh y se repite una enorme cantidad de veces. Por eso un recorrido cuya longitud puede ser cero debe comprobarse antes, por ejemplo con `JCXZ fin`. No es suficiente suponer que el nombre LOOP se comporta como un `for` de un lenguaje de alto nivel.

```asm
; DS:SI apunta a CX bytes; suma BSS exacta en AX
; Precondición: CX <= 257, para que 255*CX <= 65535
    xor ax, ax
    jcxz fin
ciclo:
    xor dx, dx
    mov dl, [si]
    add ax, dx
    inc si
    loop ciclo
fin:
```

El byte se amplía sin signo poniendo DH=0. El invariante dice que, tras k iteraciones, AX contiene la suma de los primeros k elementos, SI apunta al siguiente y CX contiene los pendientes. La inicialización establece el caso k=0; cada paso incorpora exactamente un elemento; la salida con CX=0 implica que se procesó todo. Sin esa explicación, el código puede «parecer correcto» y aun fallar por un ancho insuficiente.

### No destruir las banderas antes del salto

Entre CMP y el salto debe evitarse una instrucción que cambie las condiciones que se consultarán. `INC` altera ZF, SF y OF; un salto de igualdad después de incrementar un índice ya no compara necesariamente los operandos originales. `MOV` no cambia flags, pero preservar el significado del código sigue siendo importante para mantenerlo comprensible.

### Práctica razonada

**22.1.** ¿Qué salto sigue a `CMP AL,'9'` para detectar un código ASCII mayor? **Respuesta:** JA si se comparan bytes sin signo; no JG por costumbre.

**22.2.** ¿LOOP puede usarse con longitud cero sin prueba inicial? **Respuesta:** no si el cuerpo se ejecuta antes de LOOP. Hace falta una salida previa.

**22.3.** ¿Cuántas iteraciones realiza un bucle con CX=3 y LOOP al final? **Respuesta:** tres si no se modifica CX dentro y no hay otras salidas.

**22.4.** ¿Dónde se comprueba el desborde de una suma acumulada? **Respuesta:** inmediatamente después de ADD, antes de que otra instrucción reemplace las banderas, y usando CF u OF según la interpretación.

### Hoja de fórmulas y relaciones del capítulo 22

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | JE: ZF=1; JNE: ZF=0 | CMP calcula condiciones de resta sin guardar el resultado. |
| Comparación BSS | JB: CF=1; JA: CF=0 y ZF=0 | JAE: CF=0; JBE: CF=1 o ZF=1. |
| Comparación Ca2 | JL: SF≠OF; JG: ZF=0 y SF=OF | JGE: SF=OF; JLE: ZF=1 o SF≠OF. |
| LOOP | CX←CX−1; salta si CX≠0 | No cambia flags; comprobar CX=0 antes si el arreglo puede estar vacío. |

## Capítulo 23 · Arreglos, cadenas y tratamiento de casos límite

### Longitud, capacidad y terminador son contratos diferentes

Un arreglo con longitud explícita permite procesar bytes de cualquier valor, incluido cero. Una cadena terminada en cero usa ese valor como centinela y necesita reservar una posición para él. Una cadena DOS para función 09h termina en `$`, por lo que puede contener ceros pero no mostrar un signo dólar como carácter ordinario mediante ese servicio. Ninguna rutina puede descubrir por magia cuál de esos formatos recibió.

La longitud cuenta elementos válidos; la capacidad cuenta posiciones reservadas. Para una cadena de capacidad N con terminador cero, la cantidad máxima de caracteres es N−1. El terminador no forma parte de la longitud textual. Al copiar o concatenar hay que probar que el destino tiene espacio antes de escribir. Si los bloques se solapan, la dirección del recorrido importa: una copia ingenua hacia adelante puede destruir datos aún no leídos.

### Copia por longitud

```asm
; Entrada: DS:SI origen, DS:DI destino, CX longitud en bytes
; Precondición: regiones válidas, capacidad suficiente y sin solapamiento
    jcxz copia_fin
copia_uno:
    mov al, [si]
    mov [di], al
    inc si
    inc di
    loop copia_uno
copia_fin:
```

Se usa el mismo segmento DS en ambos accesos ordinarios. No hay que afirmar que DI siempre implica ES: eso depende de la instrucción; `MOVSB` sí tiene convenciones específicas de origen y destino, mientras el MOV ordinario anterior usa DS por defecto. El invariante es que los primeros k bytes del destino coinciden con los k originales y ambos punteros avanzaron k posiciones.

### Máximo y la trampa de inicializar en cero

Para un arreglo no vacío de enteros con signo, inicializar el máximo con cero falla si todos los elementos son negativos. La inicialización correcta toma el primer elemento y recorre los restantes, o usa una cota inferior conocida del tipo con un tratamiento claro del vacío. Un arreglo vacío no tiene máximo ordinario; la interfaz debe devolver un estado de error o exigir longitud positiva.

**Ejemplo de traza.** Para words Ca2 −7,−3,−12, el máximo comienza −7; comparar −3 lo actualiza y comparar −12 lo conserva. Usar JA como si fueran sin signo cambia el orden: FFF4h y FFF9h son grandes como BSS, aunque negativos como Ca2. Antes de elegir una instrucción de salto se define el tipo lógico de los elementos.

### Contar palabras mediante estados

Contar espacios y sumar uno falla con cadena vacía, espacios iniciales, finales y repetidos. Una solución mantiene un estado «fuera de palabra» o «dentro de palabra». Al encontrar un carácter no separador desde fuera se incrementa el conteo y se entra. Al encontrar un separador se sale. En «  uno   dos » hay dos transiciones de entrada y por tanto dos palabras.

La definición de separador debe darse: aquí solo el espacio ASCII 20h, salvo que se amplíe explícitamente a tabulaciones u otros códigos. Una rutina para bytes ASCII no procesa por sí misma caracteres Unicode de varias unidades. El objetivo es dominar el algoritmo bajo un contrato pequeño y verificable.

### Práctica razonada

**23.1.** Un destino de diez bytes recibe una cadena terminada en cero. **Respuesta:** admite como máximo nueve caracteres más el cero.

**23.2.** ¿Cuántas palabras tiene «   » bajo la definición anterior? **Respuesta:** cero; nunca se entra en una palabra.

**23.3.** Se copian bytes desde 100h a 101h en la misma región hacia adelante. **Respuesta:** el primer byte escrito puede reemplazar el segundo original antes de leerlo; hace falta una estrategia de copia que respete el solapamiento.

**23.4.** ¿Por qué un centinela requiere una precondición? **Respuesta:** si el terminador no aparece en la región válida, el recorrido sigue leyendo fuera de los datos. Una longitud máxima permite acotar el acceso y detectar formato inválido.

### Hoja de fórmulas y relaciones del capítulo 23

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud y capacidad | cadena cero: capacidad ≥ longitud + 1 | Terminado en cero y terminado en dólar son formatos distintos. |
| Máximo | inicializar con primer elemento en arreglo no vacío | Inicializar en cero falla para arreglos de negativos; definir resultado para vacío. |
| Contar palabras | incrementar solo al pasar de separador a carácter de palabra | Definir separadores y estado inicial fuera; probar espacios repetidos y cadena vacía. |

## Capítulo 24 · Operaciones de bits, multiplicación y división en 8086

### Contar unos conservando el dato

El TP combina campos numéricos y operaciones de bits. Una rutina de población de un byte puede desplazar una copia ocho veces y sumar el bit que sale por CF. Debe recorrer exactamente ocho bits o tener una condición alternativa justificada. Si el contrato promete conservar AL, se salva AX antes de modificarlo.

```asm
; Entrada: AL; salida: CX = cantidad de unos; conserva AX y BX
contarUnosByte PROC
    push ax
    push bx
    xor cx, cx
    mov bl, 8
cuenta_bit:
    shr al, 1
    adc cx, 0
    dec bl
    jnz cuenta_bit
    pop bx
    pop ax
    ret
contarUnosByte ENDP
```

SHR coloca el bit desplazado en CF y ADC suma ese carry. DEC conserva CF en 8086, pero en este código la captura se hace inmediatamente, antes de depender de ello. BL cuenta iteraciones; CX acumula unos. Al finalizar AX y BX se restauran, y CX queda entre 0 y 8. Para una word puede contarse cada byte y sumar los dos resultados, cuidando que la primera llamada no pierda la mitad alta ni el primer conteo.

### Extraer el exponente de un binary32 en memoria

Si los cuatro bytes little endian son b 0, b 1, b 2, b 3, el exponente almacenado es $((b3\mathbin{\&}7Fh)\ll1)\,|\,(b2\gg7)$. El bit de signo se invierte haciendo XOR 80h sobre b 3. No se debe invertir el bit superior de b 0 por confundir el orden lógico de la palabra con el de memoria.

En 8086 original los desplazamientos se expresan con cuenta 1 o en CL; no conviene introducir un inmediato 7 como si todos los ensambladores lo codificaran para 8086. Puede implementarse el corrimiento de b 2 cargando CL=7 y preservando CX si el llamador lo necesita. La extracción devuelve E sesgado; para obtener el exponente matemático de un normal hay que restar 127, y los patrones especiales requieren clasificación.

### Productos y cocientes tienen operandos implícitos

`MUL r/m8` multiplica AL por un byte sin signo y deja el producto en AX. `MUL r/m16` usa AX y devuelve DX:AX. IMUL interpreta con signo en sus formas originales correspondientes. No se puede escribir cualquier forma de tres operandos moderna y asumir que pertenece al 8086. Los bits altos no deben descartarse antes de decidir si el resultado cabe en el tamaño deseado.

`DIV r/m8` divide AX entre el byte: cociente en AL y resto en AH. `DIV r/m16` divide DX:AX entre la word: cociente en AX y resto en DX. Si se quiere dividir un valor BSS de 16 bits por una word, primero se pone DX=0; si se quiere dividir un entero Ca2 en AX con IDIV, se extiende signo con CWD. Un divisor cero o un cociente que no cabe produce error de división; no es un resultado modular como en ADD.

**Ejemplo desarrollado.** Para 1234 entre 10 sin signo: AX=1234, DX=0 y BX=10; después de DIV BX, AX=123 y DX=4. Si DX contenía un valor anterior no nulo, el dividendo habría sido mucho mayor. En división con signo, −1234/10 produce cociente−123 y resto−4 en la convención de truncamiento hacia cero; CWD prepara DX:AX correctamente.

### Práctica razonada

**24.1.** ¿Cuántos unos tiene B6h? **Respuesta:** cinco, porque `10110110` contiene cinco posiciones activas.

**24.2.** ¿Qué bytes cambian al invertir el signo de C1540000h? **Respuesta:** solo el último byte en memoria little endian, C1h pasa a 41h; el valor se vuelve +13.25.

**24.3.** ¿Por qué `XOR DX,DX` antes de DIV word? **Respuesta:** para que el dividendo sea el entero BSS de AX y no una combinación con residuos previos en DX.

**24.4.** ¿Qué hace SAR con un negativo impar? **Respuesta:** conserva signo y aproxima hacia menos infinito al desplazar, lo que puede diferir de IDIV por una potencia de dos, que trunca hacia cero. No se sustituyen sin analizar redondeo.

### Hoja de fórmulas y relaciones del capítulo 24

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conteo de bits | SHR saca bit a CF; ADC acumula carry | Recorrer ancho acordado y preservar registros prometidos. |
| Exponente binary32 por bytes | E=((b 3 AND 7Fh)<<1) OR (b 2>>7) | b 0 es byte de dirección menor en little endian; devuelve exponente sesgado. |
| MUL | byte: AL×operando→AX; word: AX×operando→DX:AX | Sin signo; las formas originales de IMUL tienen semántica con signo. |
| DIV | byte: AX/divisor→AL cociente, AH resto; word: DX:AX/divisor→AX y DX | Preparar parte alta; IDIV requiere extensión de signo; cero o cociente fuera de rango produce error. |

## Capítulo 25 · Pila, CALL, RET y parámetros

![Ubicación de retorno y parámetros en un marco de pila cercano](/planos-de-estudio/img/arquitectura/pila.svg)


### La pila es memoria con una disciplina

La pila usa SS:SP para localizar su tope. En las operaciones word del 8086, PUSH decrementa SP en dos y escribe una palabra; POP lee una palabra y aumenta SP en dos. Crece hacia desplazamientos menores. El orden de bytes sigue siendo little endian, pero el orden de apilado es LIFO: lo último que se apila es lo primero que se recupera. Son dos reglas distintas que deben mantenerse simultáneamente.

Supongamos SP=0100h. `PUSH AX` con AX=1234h deja SP=00FEh y los bytes 34h,12h en SS:00FEh y SS:00FFh. Luego `PUSH BX` con BX=ABCDh deja SP=00FCh y bytes CDh, ABh. El siguiente POP obtiene ABCDh. No se cambia el valor de AX por haberlo apilado: se copia su contenido a memoria.

En 8086 original PUSH y POP ordinarios trabajan con words, no con bytes. No existe `PUSH AL`; puede ampliarse el dato a una word o usar otra estrategia. Tampoco se debe usar PUSH de un inmediato como si fuera una instrucción original 8086: los ejemplos pasan primero el valor a un registro.

### Llamadas cercanas y dirección de retorno

Un CALL cercano apila el IP de continuación y transfiere control a la subrutina. RET cercano recupera ese IP. No se guarda automáticamente el resto de registros. Un salto JMP no deja una dirección de retorno, por lo que no puede reemplazar libremente a CALL. Las llamadas lejanas guardan más estado y cambian el esquema de offsets; los ejemplos siguientes son exclusivamente cercanos.

El convenio de una rutina debe declarar entradas, salidas, registros modificados y precondiciones. Si devuelve AX, no debe restaurar su valor antiguo al final mediante POP AX: eso borraría el resultado. Si promete conservar BX, debe guardarlo o evitar modificarlo. Las banderas también pueden formar parte del contrato, aunque muchas rutinas las dejan indefinidas para el llamador.

### Marco con BP

Al entrar hacemos `PUSH BP` y `MOV BP,SP`. Desde ese punto, `[BP]` contiene BP anterior y `[BP+2]` la dirección de retorno cercana. El último parámetro apilado está en `[BP+4]`; el anterior en `[BP+6]`. El orden depende del llamador. BP permanece fijo mientras otros PUSH y POP mueven SP, por lo que permite localizar parámetros establemente.

```asm
; Entrada por pila: el llamador apila a y después b, ambos Ca2 word
; Salida AX=max(a,b). Conserva BP y BX. Limpieza a cargo de la rutina.
mayorPila PROC
    push bp
    mov bp, sp
    push bx
    mov ax, [bp+6]       ; a
    mov bx, [bp+4]       ; b
    cmp ax, bx
    jge mayor_fin
    mov ax, bx
mayor_fin:
    pop bx
    pop bp
    ret 4
mayorPila ENDP
```

RET4 recupera la dirección de retorno y además retira cuatro bytes de parámetros. El llamador no debe volver a sumarle cuatro a SP ni hacer dos POP para retirarlos: la limpieza duplicada consume otros datos. La alternativa es RET sin operando y limpieza por el llamador; ambas son válidas si se acuerdan y no se mezclan.

**Traza completa.** SP inicial 0200h. Se apila a=−7 y queda 01FEh; se apila b=−3 y queda 01FCh; CALL deja 01FAh con retorno; PUSH BP deja 01F8h y BP=01F8h. Por tanto a está en BP+6 yb en BP+4. PUSH BX baja SP a 01F6h sin cambiar BP. La rutina devuelve−3 en AX, restaura BX y BP y RET4 deja SP otra vez 0200h. Esta igualdad de SP inicial y final es parte de la verificación.

### Pasar un valor o su dirección

Si se apila una word, la rutina recibe su valor. Si se apila OFFSET variable, recibe una dirección relativa y debe desreferenciarla usando el segmento acordado. Una dirección relativa de 16 bits no incluye el segmento: el convenio suele asumir DS compartido para estos ejercicios. Para un arreglo se pasan dirección y longitud; ambos tienen papeles diferentes.

Una subrutina recursiva necesita una instancia de sus datos de ejecución por llamada, normalmente en registros salvados o variables locales de pila. Usar una única variable global temporal puede destruir el estado de una llamada anterior. El análisis de pila también debe considerar capacidad reservada y profundidad de llamadas, no solo que los primeros pasos «entren».

### Práctica razonada

**25.1.** Se apilan OFFSET origen y luego longitud. Tras el prólogo, ¿dónde está longitud? **Respuesta:** BP+4; origen está en BP+6 para llamada cercana y parámetros word.

**25.2.** ¿Qué ocurre si se hace POP antes de guardar BP para leer el parámetro? **Respuesta:** se puede consumir la dirección de retorno en lugar del parámetro y romper RET.

**25.3.** Una rutina hace PUSH SI y PUSH DI. ¿Orden de restauración? **Respuesta:** POP DI y POP SI; debe invertirse el orden.

**25.4.** ¿RET4 retira cuatro palabras? **Respuesta:** no, cuatro bytes además del retorno cercano. En este convenio son dos parámetros de 16 bits.

### Hoja de fórmulas y relaciones del capítulo 25

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| PUSH/POP word | PUSH baja SP en 2; POP lo sube en 2 | Pila 8086 de words, LIFO, almacenada little endian. |
| Marco cercano | BP+0 BP anterior; BP+2 IP retorno; BP+4 último parámetro word | Tras PUSH BP / MOV BP, SP; llamadas lejanas u otro prólogo cambian el esquema. |
| RET n | recupera retorno y retira n bytes de parámetros | No limpiar otra vez en el llamador si ya se usó esa convención. |
| Contrato | entradas, salidas, registros preservados y precondiciones | No restaurar el valor viejo del registro que debe devolver el resultado. |

## Capítulo 26 · Subrutinas de cadenas y diseño de interfaces seguras

### Longitud con límite explícito

Una rutina `longString` puede recorrer hasta encontrar cero, pero solo es correcta bajo la precondición de que el terminador exista dentro de memoria válida. Para evitar lecturas ilimitadas conviene recibir capacidad. La interfaz de este ejemplo usa DS:SI como inicio y CX como máximo de bytes legibles. Devuelve AX=longitud si aparece cero y DX=0; si no aparece dentro del límite, devuelve DX=1 y AX=cantidad examinada. Conserva SI y CX. Las banderas no forman parte de su contrato.

```asm
longitudAcotada PROC
    push si
    push cx
    xor ax, ax
    xor dx, dx
    jcxz sin_cero
buscar_cero:
    cmp byte ptr [si], 0
    je longitud_fin
    inc ax
    inc si
    loop buscar_cero
sin_cero:
    mov dx, 1
longitud_fin:
    pop cx
    pop si
    ret
longitudAcotada ENDP
```

Con capacidad cero no se lee ningún byte y se informa que no se encontró terminador. Con la cadena vacía `[0]` y capacidad al menos uno se devuelve cero con éxito. Si la memoria contiene A, B, C,0 y capacidad tres, se informa error y longitud tres: el cero existe, pero no pertenece a la región que la rutina tiene permiso lógico de leer. Esta distinción importa para revisar casos límite.

### Conteo de palabras sin sumar espacios

Una cadena terminada en cero puede recorrerse guardando un estado de un bit: fuera o dentro de una palabra. Si el carácter es espacio se pone fuera. Si no lo es y se estaba fuera, se suma una palabra y se pasa a dentro. Si ya se estaba dentro, se continúa sin sumar. En cadenas con separadores distintos debe definirse una función de clasificación, no agregar comparaciones improvisadas que olviden algún caso.

**Traza.** Para `" a  bc "`: el primer espacio mantiene fuera y conteo 0; a entra y conteo 1; los dos espacios vuelven y mantienen fuera; b entra y conteo 2; c mantiene dentro; el espacio final sale. Resultado 2. Para una cadena vacía el primer byte es cero y no se ejecuta transición alguna. La especificación permite verificar el algoritmo independientemente de su traducción a saltos.

### Concatenación y tamaño necesario

Si str 1 tiene longitud L1 y str 2 longitud L2, el destino necesita al menos L1+L2+1 bytes para formato terminado en cero. Se localiza el cero de str 1, se copian los L2 caracteres de str 2 sobre ese lugar y finalmente se copia el terminador. La capacidad es una precondición o un parámetro verificado; no puede inferirse de la longitud actual de str 1. Un arreglo con espacio para «ANA\0» no tiene automáticamente lugar para agregar otro apellido.

Si origen y destino se solapan hay que definir comportamiento y procedimiento. Para ejercicios iniciales conviene exigir regiones no superpuestas. Esa restricción debe aparecer en el contrato, no descubrirse cuando una prueba concreta duplica caracteres.

### Una rutina componible preserva lo necesario

Un contador de bits para una word puede llamar dos veces al contador de byte. Para ello debe preservar el valor original o la mitad que aún falta, y guardar el primer conteo antes de que la segunda llamada vuelva a poner CX en cero. Un esquema es salvar AX y BX, copiar AX a BX, contar AL, guardar CX, mover BH a AL, contar de nuevo y sumar el conteo guardado. El convenio del contador de byte del capítulo 24 conserva AX y BX, lo que facilita la composición; cambiar ese convenio sin revisar al llamador rompe el programa aunque ambas rutinas aisladas parezcan razonables.

### Práctica razonada

**26.1.** Una cadena de longitud 7 se concatena con otra de longitud 5. **Respuesta:** hacen falta 13 bytes en el destino, incluido el cero final.

**26.2.** `longitudAcotada` recibe bytes A,0, X y capacidad 2. **Respuesta:** AX=1, DX=0; no necesita examinar X.

**26.3.** ¿Puede una rutina devolver una dirección en AX y prometer conservar AX? **Respuesta:** no, salvo que la dirección ya coincida siempre con el valor de entrada; el contrato sería contradictorio en el caso general.

**26.4.** ¿Por qué probar longitud cero y uno? **Respuesta:** revelan accesos antes de la comprobación, errores de terminación y suposiciones ocultas sobre la presencia de un primer elemento.

### Hoja de fórmulas y relaciones del capítulo 26

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud acotada | examinar como máximo la capacidad legible | Distinguir longitud cero válida de ausencia de terminador. |
| Concatenación | capacidad destino ≥ L1+L2+1 | Cadenas cero, regiones válidas y política de solapamiento definida. |
| Composición | preservar entradas aún necesarias y resultados intermedios | Una segunda llamada puede sobrescribir el registro de salida de la primera. |

## Formulario de la Unidad 7 · Programación 8086

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 20

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección física 8086 | $16\cdot segmento+offset$ | Espacio físico original de 20 bits; tratar alias y límite del bus. |
| Mitades | AX = 256·AH + AL | Una carga en AL no limpia AH; análogo para BX, CX y DX. |
| Segmentos | CS:IP código; DS datos; SS:SP pila | Son selecciones por contexto e instrucción, no permisos de memoria protegida. |
| Terminar DOS | AX=4C00h; INT 21h | Guardar resultados antes: AX se reutiliza para el servicio. |

### Capítulo 21

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Arreglo | dirección de elemento = base + índice × tamaño | DB ocupa 1 byte; DW ocupa 2; índice inicial cero en los ejemplos. |
| Modos 8086 | BX/BP + SI/DI + desplazamiento, en combinaciones válidas | No [AX], [BX+BP] ni [SI+DI] en los modos ordinarios del 8086. |
| Segmento por defecto | dirección con BP usa SS; datos ordinarios restantes suelen usar DS | Puede existir prefijo explícito; las instrucciones de cadena tienen sus reglas. |
| Dirección frente a dato | OFFSET/LEA obtienen desplazamiento; MOV desde memoria lee contenido | El tamaño del operando debe quedar determinado. |

### Capítulo 22

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | JE: ZF=1; JNE: ZF=0 | CMP calcula condiciones de resta sin guardar el resultado. |
| Comparación BSS | JB: CF=1; JA: CF=0 y ZF=0 | JAE: CF=0; JBE: CF=1 o ZF=1. |
| Comparación Ca2 | JL: SF≠OF; JG: ZF=0 y SF=OF | JGE: SF=OF; JLE: ZF=1 o SF≠OF. |
| LOOP | CX←CX−1; salta si CX≠0 | No cambia flags; comprobar CX=0 antes si el arreglo puede estar vacío. |

### Capítulo 23

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud y capacidad | cadena cero: capacidad ≥ longitud + 1 | Terminado en cero y terminado en dólar son formatos distintos. |
| Máximo | inicializar con primer elemento en arreglo no vacío | Inicializar en cero falla para arreglos de negativos; definir resultado para vacío. |
| Contar palabras | incrementar solo al pasar de separador a carácter de palabra | Definir separadores y estado inicial fuera; probar espacios repetidos y cadena vacía. |

### Capítulo 24

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Conteo de bits | SHR saca bit a CF; ADC acumula carry | Recorrer ancho acordado y preservar registros prometidos. |
| Exponente binary32 por bytes | E=((b 3 AND 7Fh)<<1) OR (b 2>>7) | b 0 es byte de dirección menor en little endian; devuelve exponente sesgado. |
| MUL | byte: AL×operando→AX; word: AX×operando→DX:AX | Sin signo; las formas originales de IMUL tienen semántica con signo. |
| DIV | byte: AX/divisor→AL cociente, AH resto; word: DX:AX/divisor→AX y DX | Preparar parte alta; IDIV requiere extensión de signo; cero o cociente fuera de rango produce error. |

### Capítulo 25

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| PUSH/POP word | PUSH baja SP en 2; POP lo sube en 2 | Pila 8086 de words, LIFO, almacenada little endian. |
| Marco cercano | BP+0 BP anterior; BP+2 IP retorno; BP+4 último parámetro word | Tras PUSH BP / MOV BP, SP; llamadas lejanas u otro prólogo cambian el esquema. |
| RET n | recupera retorno y retira n bytes de parámetros | No limpiar otra vez en el llamador si ya se usó esa convención. |
| Contrato | entradas, salidas, registros preservados y precondiciones | No restaurar el valor viejo del registro que debe devolver el resultado. |

### Capítulo 26

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Longitud acotada | examinar como máximo la capacidad legible | Distinguir longitud cero válida de ausencia de terminador. |
| Concatenación | capacidad destino ≥ L1+L2+1 | Cadenas cero, regiones válidas y política de solapamiento definida. |
| Composición | preservar entradas aún necesarias y resultados intermedios | Una segunda llamada puede sobrescribir el registro de salida de la primera. |

## Capítulo 27 · Interrupciones 8086 y servicios de DOS

### Interrupción y función son números distintos

En el TP4, expresiones como «uso de Int 01h» para leer teclado deben entenderse como una referencia a la **función 01h de INT 21h**. El número de interrupción se codifica en la instrucción INT; la función de este conjunto de servicios se selecciona en AH. Por ejemplo, para leer un carácter con eco se escribe `MOV AH,01h` seguido de `INT 21h`. Ejecutar `INT 01h` invoca otro vector y no representa ese servicio DOS.

El 8086 usa una tabla de 256 vectores a partir de dirección física cero, con cuatro bytes por entrada: IP de destino y CS de destino. La entrada de tipo t comienza en 4t. Para 21h, el desplazamiento de la entrada es 84h. Esa entrada contiene un puntero: la CPU no empieza a ejecutar necesariamente el manejador en 84h.

Una interrupción guarda FLAGS, CS e IP de retorno en la pila y transfiere control según el vector; IRET recupera IP, CS y FLAGS. El manejador preserva los registros generales que requiera su contrato. IF controla la aceptación de interrupciones externas enmascarables, no impide ejecutar una instrucción INT de software como si fueran el mismo mecanismo de habilitación. Un RET cercano no sustituye a IRET porque no restaura la misma estructura de pila.

### Servicios básicos y sus parámetros

| Función en AH | Solicitud con INT 21h | Datos de entrada o salida |
|---|---|---|
| 01h | Leer carácter con eco | Devuelve código en AL |
| 02h | Mostrar carácter | Código en DL |
| 09h | Mostrar cadena terminada en `$` | Dirección en DS:DX |
| 0Ah | Leer línea en buffer DOS | Estructura en DS:DX |
| 4Ch | Terminar proceso | Código de salida en AL |

Estos ejemplos dependen de un entorno DOS o de una emulación que implemente los servicios. No se ejecutan directamente como llamadas de sistema de Windows de 64 bits. Tampoco garantizan conservar cualquier registro no mencionado sin consultar el contrato del servicio concreto. En rutinas propias se salva explícitamente lo que se promete al llamador.

### Programa completo de entrada y eco de un carácter

```asm
.MODEL SMALL
.STACK 100h
.DATA
mensaje DB 'Ingrese un caracter: $'
.CODE
inicio:
    mov ax, @data
    mov ds, ax
    mov dx, OFFSET mensaje
    mov ah, 09h
    int 21h
    mov ah, 01h
    int 21h               ; AL contiene el carácter leído
    mov bl, al            ; conservarlo antes de otros servicios
    mov dl, 13
    mov ah, 02h
    int 21h
    mov dl, 10
    mov ah, 02h
    int 21h
    mov dl, bl
    mov ah, 02h
    int 21h
    mov ax, 4C00h
    int 21h
END inicio
```

Se usan CR=13 y LF=10 para retorno de carro y nueva línea en el entorno del ejemplo. El servicio 01h ya hace eco durante la lectura; la salida posterior es una segunda presentación, en otra línea. Si se pretende entrada sin eco debe seleccionarse otro servicio y documentarlo, en vez de atribuir a 01h un comportamiento diferente.

### Buffer de función 0Ah y terminación correcta

El primer byte indica la capacidad del área de caracteres incluyendo el retorno de carro; el segundo recibe la cantidad efectiva de caracteres sin contar CR; a partir del tercero aparecen los caracteres y el CR final. Para admitir hasta 30 caracteres ordinarios puede reservarse `buffer DB 31,0,31 DUP(0)`. El conteo máximo ordinario es 30, dejando una posición para CR.

Para convertirlo a cadena terminada en cero se toma la longitud L de `buffer[1]` y se reemplaza `buffer[2+L]`, donde quedó CR, por cero. Para usar 09h podría colocarse `$`, pero entonces un dólar introducido por el usuario interrumpiría la impresión. Una salida por longitud o por caracteres maneja mejor datos arbitrarios bajo el conjunto de códigos permitido. No se puede pasar el buffer completo directamente a 09h: sus primeros bytes son metadata y no existe necesariamente un terminador dólar.

### Práctica razonada

**27.1.** ¿Cómo mostrar el dígito numérico 7? **Respuesta:** convertirlo a ASCII sumando el código de'0', cargar DL con'7', AH con 02h y llamar INT 21h. Enviar el byte 07h no imprime el glifo 7.

**27.2.** ¿Por qué una rutina que recibe el carácter en AL debe copiarlo antes de usar AX para otra cosa? **Respuesta:** AH y AL forman el mismo registro AX; cargas y servicios pueden cambiar ese estado.

**27.3.** ¿Qué diferencia tienen CALL e INT en la pila? **Respuesta:** en las llamadas cercanas del manual se apila un IP; la interrupción guarda un marco con FLAGS, CS e IP. Sus retornos no son intercambiables.

**27.4.** Buffer con primer byte 5: ¿capacidad de texto ordinario? **Respuesta:** hasta cuatro caracteres más CR en el esquema enseñado; la cuenta retornada excluye CR.

### Hoja de fórmulas y relaciones del capítulo 27

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Servicio DOS | AH selecciona función; INT 21h la invoca | 01h lee con eco; 02h muestra DL; 09h usa DS:DX terminado en dólar. |
| Buffer 0Ah | capacidad, conteo, caracteres y CR | Conteo excluye CR; reservar el área declarada, incluido CR; no pasar metadata a 09h. |
| Vector 8086 | entrada tipo t en dirección física 4t | Cada entrada guarda IP y CS; la entrada no es necesariamente el comienzo del manejador. |
| Retorno de interrupción | IRET restaura IP, CS y FLAGS | No equivale a RET cercano; los registros generales requieren preservación por software. |

## Formulario de la Unidad 8 · Interrupciones y servicios DOS

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 27

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Servicio DOS | AH selecciona función; INT 21h la invoca | 01h lee con eco; 02h muestra DL; 09h usa DS:DX terminado en dólar. |
| Buffer 0Ah | capacidad, conteo, caracteres y CR | Conteo excluye CR; reservar el área declarada, incluido CR; no pasar metadata a 09h. |
| Vector 8086 | entrada tipo t en dirección física 4t | Cada entrada guarda IP y CS; la entrada no es necesariamente el comienzo del manejador. |
| Retorno de interrupción | IRET restaura IP, CS y FLAGS | No equivale a RET cercano; los registros generales requieren preservación por software. |

## Capítulo 28 · Multiprocesadores, coherencia y modelos de paralelismo

### Paralelismo en varios niveles

Un pipeline solapa etapas de instrucciones; varias unidades pueden ejecutar operaciones independientes; varios núcleos ejecutan hilos; varias computadoras cooperan por una red. Son niveles diferentes. La clasificación de Flynn distingue flujos de instrucciones y datos: SISD, SIMD, MISD y MIMD. Sirve para organizar ideas, pero un sistema real puede combinar una CPU MIMD multinúcleo con unidades SIMD y una GPU.

En un multiprocesador de memoria compartida, los núcleos acceden a un espacio de memoria común. En un multicomputador, cada nodo posee memoria propia y la comunicación suele requerir mensajes. La separación no equivale a «cerca» frente a«lejos» físicamente: define cómo se comparte y se comunica el estado. Un clúster puede ofrecer servicios unificados sin que todos sus bytes sean memoria local con la misma latencia.

### UMA, NUMA, hilos y recursos compartidos

En un modelo UMA se busca tiempo de acceso uniforme a las regiones de memoria; en NUMA el costo depende de qué nodo almacena el dato y qué procesador lo solicita. Colocar trabajo y datos relacionados en el mismo nodo puede mejorar localidad. «Accesible» no significa «igual de rápido».

SMT permite que varios hilos arquitectónicos compartan recursos de un núcleo. Puede aprovechar ciclos que un hilo dejaría ociosos, pero no duplica automáticamente ALU, cachés y puertos. Dos hilos pueden competir por esos mismos recursos. Un núcleo físico y una CPU lógica no se deben sumar como capacidades equivalentes sin conocer la organización y la carga.

### Coherencia de caché no es sincronización del algoritmo

Si dos núcleos guardan copias de una línea y uno la modifica, los demás no deben seguir observando indefinidamente una copia obsoleta bajo el protocolo de coherencia. MESI usa estados Modificado, Exclusivo, Compartido eInválido. M indica que la copia está modificada y la memoria inferior puede estar desactualizada; E que es una copia limpia exclusiva; S que puede haber varias copias limpias; I que no se puede usar.

Una secuencia educativa: A lee una línea que nadie más tiene y queda E; B la lee y ambas pasan S; A escribe y obtiene propiedad invalidando la copia de B, quedando M. Si B vuelve a leer, debe obtener el valor reciente mediante el protocolo y las transiciones correspondientes. La implementación puede requerir transferencia de datos y actualización de niveles inferiores; no se confunde una tabla conceptual MESI con todo el detalle de cada procesador.

La coherencia de una línea no vuelve atómica una secuencia «leer x, sumar uno, escribir x». Dos hilos pueden leer 0 y ambos escribir 1: se pierde una actualización. La sincronización mediante operaciones atómicas o exclusión protege el algoritmo. También hay **falso compartimiento**: dos variables distintas en la misma línea pueden causar invalidaciones aunque cada hilo escriba solo su variable.

### Aceleración y trabajo serial

ParaN procesadores y fracción paralelizable p, el límite ideal de Amdahl es $S_N=1/((1-p)+p/N)$, antes de comunicación y sincronización. Si p=0.9 y N=8, S≈4.706, no 8. La eficiencia es S/N≈0.588. Añadir procesadores sin cambiar el algoritmo puede reducir la utilización relativa. Un modelo de tamaño de problema creciente responde a otra pregunta y no debe mezclarse con esta cuenta de trabajo fijo.

### Práctica razonada

**28.1.** ¿DosCPU que acceden a RAM común necesitan tratar copias en caché? **Respuesta:** sí, si existen; el espacio compartido no elimina las copias locales.

**28.2.** ¿MESI garantiza que un contador `x=x+1` sea seguro entre hilos? **Respuesta:** no, la operación compuesta necesita atomicidad o sincronización.

**28.3.** p=0.75 y N=4. **Respuesta:** S=1/(0.25+0.1875)≈2.286; eficiencia≈0.5714.

**28.4.** ¿Un hilo puede ralentizar aotro en SMT? **Respuesta:** sí, comparten recursos y pueden competir por caché, ancho debanda o unidades de ejecución.

### Hoja de fórmulas y relaciones del capítulo 28

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paralelismo fijo | $S_N=1/((1-p)+p/N)$; eficiencia=Sₙ/N | Modelo ideal sin costos de comunicación; p fracción de tiempo paralelizable. |
| MESI | M modificado; E exclusivo limpio; S compartido limpio; I inválido | Protocolo conceptual de líneas; coherencia no garantiza atomicidad de una secuencia. |
| UMA/NUMA | uniformidad / dependencia del acceso con la ubicación de memoria | Un espacio compartido no implica igual latencia para todos los accesos. |
| SMT | hilos arquitectónicos comparten recursos de un núcleo | No equivale a duplicar físicamente todos sus recursos. |

## Capítulo 29 · GPU, memoria y costo de transferencias

### Muchas operaciones similares frente a una dependencia larga

UnaCPU de propósito general prioriza baja latencia y capacidad de ejecutar flujos variados con control complejo. UnaGPU dedica gran cantidad de recursos a sostener muchas operaciones sobre datos en paralelo. No es correcto afirmar que toda GPU es «más rápida» en términos absolutos. Una secuencia estrictamente dependiente tiene poco trabajo simultáneo, aunque haya miles de unidades disponibles.

En el modelo CUDA, un kernel ejecuta numerosas instancias organizadas en hilos, bloques y una grilla. Los bloques se asignan a multiprocesadores; los hilos se agrupan para emitir trabajo. Las diapositivas usan Fermi como ejemplo histórico. Sus cantidades de núcleos, planificadores y memorias no describen automáticamente toda GPU posterior. El detalle actual de ejecución se contrasta con la documentación oficial de NVIDIA enlazada en las fuentes.

### SIMT y divergencia

SIMT presenta muchos hilos escalares de un programa mientras el hardware coordina grupos de ejecución. Cuando los hilos de un grupo toman ramas distintas puede reducirse la eficiencia: no todas las vías realizan trabajo útil al mismo tiempo. La organización y la planificación concretas dependen de la generación; el modelo de estudio no supone sincronización implícita universal entre instrucciones de hilos diferentes.

Si los datos permiten que cada salida se calcule independientemente, el paralelismo es claro. En cambio, una dependencia entre etapas requiere barreras, descomposición de kernels uotros mecanismos con alcance adecuado. Una barrera de bloque no sincroniza todos los bloques de la grilla. Intentar una espera activa global puede bloquear el progreso si algunos bloques aún no tienen recursos para ejecutarse.

### La memoria puede dominar el tiempo

Registros, memoria compartida del bloque, cachés y memoria global tienen alcances y costos diferentes. La memoria llamada «local» en un modelo de programación no siempre significa una celda física rápida junto a cada hilo. Las solicitudes cercanas de hilos vecinos pueden combinarse eficientemente en transacciones; los accesos dispersos pueden requerir más transferencias. La localidad del algoritmo sigue importando en una GPU.

En una GPU dedicada, mover datos entre host y dispositivo tiene un costo. En una integrada puede compartirse memoria física, pero persisten reglas de acceso, coherencia y sincronización según el sistema. «Memoria compartida» debe interpretarse en contexto: la memoria compartida CUDA de un bloque no es lo mismo que RAM compartida entre CPU y GPU.

**Modelo desarrollado.** UnaCPU tarda 120 ms. El kernel GPU tarda 10 ms, pero copiar entrada cuesta 18 ms, traer salida 12 ms y lanzar 2 ms. El total 42 ms da aceleración 120/42≈2.857, no 12. Si diez operaciones consecutivas reutilizan los mismos datos y solo se copia al principio y al final, la amortización puede cambiar mucho. Debe contarse el trabajo completo que la aplicación necesita, no solo el tramo más favorable.

### Intensidad aritmética

La intensidad aritmética I es operaciones por byte transferido desde el nivel de memoria definido. Un límite simplificado del modelo Roofline es $P\le\min(P_{pico},BW\cdot I)$. ConBW=200 GB/s e I=0.5 operaciones/byte, el techo de memoria es 100 Goperaciones/s aunque el techo de cómputo sea mayor. Es un modelo de límites, no una garantía alcanzable:control, latencias y ocupación también pueden restringir.

### Práctica razonada

**29.1.** ¿Por qué medir solo el kernel puede engañar? **Respuesta:** la aplicación necesita preparar, transferir y sinc ronizar datos; esos tiempos pueden dominar el beneficio.

**29.2.** ¿Toda rama condicional es mala? **Respuesta:** no. Importa si los hilos coordinados divergen y qué trabajo se evita o agrega. Eliminar ramas puede aumentar operaciones inútiles.

**29.3.** I=2 operaciones/byte y BW=50 GB/s. **Respuesta:** techo de memoria 100 Goperaciones/s bajo esas unidades y ese nivel de transferencia.

**29.4.** ¿Más hilos siempre aceleran? **Respuesta:** pueden ocultar latencia hasta ciertos límites, pero también consumir registros, memoria y recursos de planificación. Se evalúa la ocupación y el trabajo efectivo.

### Hoja de fórmulas y relaciones del capítulo 29

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| GPU extremo a extremo | T = preparación + transferencias + kernel + sincronización necesaria | Amortizar datos reutilizados; no comparar solo un tramo contra toda la CPU. |
| Intensidad | I = operaciones / bytes transferidos del nivel definido | No mezclar bytes de distintos niveles de memoria al aplicar un techo. |
| Límite simplificado | $P\le\min(P_{pico},BW\cdot I)$ | Modelo Roofline como límite; control, latencia y ocupación pueden reducir rendimiento. |
| SIMT | hilos organizados y coordinados por grupos de ejecución | La divergencia puede disminuir eficiencia; no asumir sincronización implícita universal. |

## Capítulo 30 · Imágenes, filtros y pipeline gráfico

![Ejemplo de filtro local de una imagen con promedio uniforme](/planos-de-estudio/img/arquitectura/filtro.svg)


### Representar una imagen es definir datos y formato

Una imagen digital puede organizarse como una matriz de altura H y ancho W. Un píxel contiene uno o más canales;cada canal tiene una codificación y profundidad. RGB de ocho bits por canal requiere tres bytes por píxel en un modelo sin relleno nicompresión. La profundidad no cambia cuántos píxeles hay: cambia cuántos valores puede adoptar cada canal.

En orden por filas, el índice lineal del píxel(r, c) es rW+c. ParaC canales de un byte, el desplazamiento de su canal k es $C(rW+c)+k$. Esta fórmula supone r entre 0 y H−1, c entre 0 y W−1 y canales intercalados. Un formato planar, una imagen con stride mayor que W·C o con otra organización necesita otra cuenta. No se extrapola la fórmula sin mirar el almacenamiento.

### Filtro local: no es multiplicación matricial ordinaria

Un filtro con kernel K toma una vecindad alrededor de cada posición y forma una suma ponderada. La convolución discreta invierte el kernel respecto de sus índices; muchas implementaciones de imágenes usan correlación cruzada sin invertirlo. Para kernels simétricos coinciden, por lo que ciertos ejemplos ocultan la diferencia. Conviene explicar qué convención se usa antes de comparar salidas.

**Ejemplo desarrollado.** Para un suavizado 3×3 uniforme, el kernel tiene nueve pesos 1/9. Si una vecindad contiene filas(10,20,30),(20,30,40),(30,40,50), la suma es 270 y el resultado central 30. Un filtro de realce con centro 5 y vecinos superior, inferior, izquierdo, derecho de peso−1 produce $5\cdot30-20-40-20-40=30$ en esa misma vecindad. No se multiplican dos matrices completas por la regla de filas por columnas:se desplaza el kernel y se calcula una combinación local.

En los bordes faltan vecinos. Debe elegirse recorte, relleno, copia de borde, reflexión uotra política. Una salida negativa o mayor que 255 no puede guardarse en un byte BSS sin definir saturación, reescalado uotra transformación. Dejar que se desborde módulo 256 no es una forma neutral de dibujar el resultado.

### Paralelizar el filtro

Cada salida puede calcularse en paralelo si todas leen de una entrada inmutable. Si se escribe sobre la entrada y otro hilo lee ese lugar, se mezcla imagen original con valores ya filtrados. La solución habitual es un destino separado o algoritmo cuidadosamente diseñado. La independencia matemática de las salidas presupone qué versión de los datos de entrada se usa.

Para un kernel 3×3 y una imagen W×H, sin contar bordes, hay aproximadamente 9 lecturas de pesos/productos por salida. Reutilizar vecindades puede reducir tráfico efectivo. La memoria compartida de un bloque puede cargar un mosaico con halo para reutilizar datos, pero exige sincronización correcta y tratar los límites. Un ejemplo conceptual de GPU no necesita inventar un programa CUDA no comprobado para explicar ese ahorro.

### Del modelo 3D a los píxeles

El pipeline gráfico transforma vértices, forma primitivas, recorta y proyecta, rasteriza y procesa fragmentos, entre otras etapas de una API concreta. Un fragmento es un candidato a contribuir a un píxel, no necesariamente el color final escrito. Pruebas de profundidad y mezcla pueden descartar o combinar resultados. Un shader no es una GPU completa;es un programa que participa en una etapa.

La rasterización y el trazado derayos son enfoques distintos que pueden combinarse en sistemas reales. Las diapositivas presentan el pipeline para relacionar paralelismo y gráficos;el objetivo del curso es comprender flujos, datos y recursos, sin convertir modelos históricos en afirmaciones de todas las implementaciones actuales.

### Práctica razonada

**30.1.** Imagen 1920×1080 RGBA de un byte por canal. **Respuesta:**8.294.400 bytes sin cabeceras, compresión nirelleno adicional.

**30.2.** Píxel(2,3), W=10, C=3, canal 1. **Respuesta:** desplazamiento$3(2\cdot10+3)+1=70$ bytes bajo el formato intercalado definido.

**30.3.** ¿Un filtro puede escribirse en el mismo arreglo? **Respuesta:** depende del algoritmo;la implementación paralela ingenua introduce dependencias y resultados que varían con el orden de ejecución.

**30.4.** ¿Qué falta si dos implementaciones discrepan solo en bordes? **Respuesta:** verificar políticas de borde, orientación del kernel, redondeo y saturación antes de atribuirlo aerror de hardware.

### Hoja de fórmulas y relaciones del capítulo 30

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Imagen sin compresión | $N=W\cdot H\cdot C\cdot b$ bytes | C canales de b bytes; excluye cabeceras, stride adicional y compresión. |
| Canal intercalado | offset = b·[C(rW+c)+k] | r fila, c columna, k canal, índices desde cero; ajustar si hay stride o formato planar. |
| Filtro local | suma de productos de vecindad por kernel | Distinguir convolución de correlación; definir bordes y saturación. |
| Paralelizar salida | leer entrada estable y escribir destino independiente | Evitar actualizar datos que otros hilos todavía necesitan como entrada original. |

## Formulario de la Unidad 9 · Paralelismo y GPU

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 28

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Paralelismo fijo | $S_N=1/((1-p)+p/N)$; eficiencia=Sₙ/N | Modelo ideal sin costos de comunicación; p fracción de tiempo paralelizable. |
| MESI | M modificado; E exclusivo limpio; S compartido limpio; I inválido | Protocolo conceptual de líneas; coherencia no garantiza atomicidad de una secuencia. |
| UMA/NUMA | uniformidad / dependencia del acceso con la ubicación de memoria | Un espacio compartido no implica igual latencia para todos los accesos. |
| SMT | hilos arquitectónicos comparten recursos de un núcleo | No equivale a duplicar físicamente todos sus recursos. |

### Capítulo 29

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| GPU extremo a extremo | T = preparación + transferencias + kernel + sincronización necesaria | Amortizar datos reutilizados; no comparar solo un tramo contra toda la CPU. |
| Intensidad | I = operaciones / bytes transferidos del nivel definido | No mezclar bytes de distintos niveles de memoria al aplicar un techo. |
| Límite simplificado | $P\le\min(P_{pico},BW\cdot I)$ | Modelo Roofline como límite; control, latencia y ocupación pueden reducir rendimiento. |
| SIMT | hilos organizados y coordinados por grupos de ejecución | La divergencia puede disminuir eficiencia; no asumir sincronización implícita universal. |

### Capítulo 30

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Imagen sin compresión | $N=W\cdot H\cdot C\cdot b$ bytes | C canales de b bytes; excluye cabeceras, stride adicional y compresión. |
| Canal intercalado | offset = b·[C(rW+c)+k] | r fila, c columna, k canal, índices desde cero; ajustar si hay stride o formato planar. |
| Filtro local | suma de productos de vecindad por kernel | Distinguir convolución de correlación; definir bordes y saturación. |
| Paralelizar salida | leer entrada estable y escribir destino independiente | Evitar actualizar datos que otros hilos todavía necesitan como entrada original. |

## Capítulo 31 · Taller integrador de representación y rendimiento

### Problema A · Un dato que cambia de formato

Se quiere almacenar la temperatura −23.375 en un equipo. Compararemos tres decisiones de representación: Ca2 entero de ocho bits, punto fijo Ca2 de dieciséis bits con seis posiciones fraccionarias y binary32. La pregunta no es solo «cuáles son los bits», sino qué error y qué rango introduce cada decisión.

En entero Ca2 no puede guardarse la fracción. Si se acuerda truncamiento hacia cero se obtiene −23, patrón E9h, con error absoluto 0.375. No puede llamarse representación exacta de −23.375. El rango −128 a 127 no soluciona la ausencia de posiciones fraccionarias.

En punto fijo, el entero escalado es $I=-23.375\cdot64=-1496$. Su codificación en dieciséis bits es $65536-1496=64040=$ FA28h. Al decodificar, 64040−65536=−1496 y dividir por 64 devuelve −23.375 exactamente. El formato tiene rango −512 a 511.984375 y paso 1/64. La parte fraccionaria 0.375 tiene denominador 8, compatible con los seis bits disponibles.

Para binary32, $23.375=10111.011_2=1.0111011_2\cdot2^4$. El signo es 1; E=131; la fracción comienza 0111011 y se completa a 23 bits. La palabra es C1BB0000h. El valor es exacto en este caso porque la expansión cabe en el significando. En memoria little endian:00 00 BB C1. Que ambos formatos sean exactos para este dato no significa que tengan el mismo rango o espaciado para otros.

**Comprobación adicional.** Si el software recibe los bytes 28 FA, debe saber que son una word punto fijo con f=6. Interpretarlos como entero Ca2 produce −1496; interpretarlos como dos caracteres no produce una temperatura. El protocolo entre componentes debe transportar o fijar esa información de formato.

### Problema B · La misma suma, dos preguntas

A=9Dh y B=72h, ancho ocho bits. Como enteros sin signo,157+114=271; se almacena 0Fh y CF=1. Como Ca2, A=−99 y B=114; la suma matemática es 15 y cabe, por lo que OF=0. SF=0 y ZF=0. La cuenta demuestra por qué mirar solo CF no decide si una operación con signo fue válida.

Ahora A−B:157−114=43=2Bh, sin préstamo, CF=0. En Ca2 se está calculando −99−114=−213, fuera del rango; el patrón 43 no es ese resultado, OF=1. El signo del patrón es positivo y SF=0. Para decidir si A<B con signo tras CMP, SF≠OF es verdadero. Para sin signo, CF=1 es falso. La comparación correcta depende del dominio.

### Problema C · Error de escala y desbordamiento

Un sensor entrega I=107 con escala 1/8, valor 13.375. Otro entrega J=336 con escala 1/64, valor 5.25. Sumar 107+336=443 no tiene significado común mientras no se alineen las escalas. Podemos llevar I a escala 1/64: I′=856; I′+J=1192, valor 18.625. Se requieren suficientes bits para ese entero. O bien llevar J a escala 1/8: J′=42 y sumar 149.

Si el destino es Ca2 de ocho bits con f=3,149 no cabe: el máximo es 127, equivalente a 15.875. Conservar el byte 95h lo interpreta como−107 y devuelve−13.375. El problema no es un error pequeño de redondeo, sino un desbordamiento de rango. Un sistema debe definir detección y tratamiento: ampliar formato, rechazar, saturar u otra política explícita.

### Problema D · Una mejora que empeora otra variable

Un programa tiene dos clases:70 % de instrucciones de un ciclo y 30 % de cuatro ciclos. N=$10^9$ y f=2 GHz. CPI=1.9 y T=0.95 s. Una transformación reduce las instrucciones complejas a 20 % del nuevo total, pero N pasa a$1.2\cdot10^9$. CPI nuevo=1.6 y T=0.96 s. La mejora del CPI no compensa el aumento de instrucciones: el programa queda ligeramente más lento.

La pregunta correcta es qué tiempo completa el mismo trabajo. Si una medición incluyera E/S o esperas externas habría que agregar esas partes según su modelo. No se mezclan porcentajes calculados sobre el tiempo viejo con proporciones de instrucciones nuevas sin explicar su origen.

### Práctica de transferencia con respuestas

**31.1.** Convertí −7.625 a punto fijo de ocho bits con f=3. **Respuesta:** I=−61, código C3h; está dentro del rango y es exacto.

**31.2.** Repetí con −17. **Respuesta:** no cabe en ese formato, aunque su parte fraccionaria sea cero. La comprobación de rango precede a recortar bits.

**31.3.** Un bloque consume 30 % del tiempo original y se acelera por diez. **Respuesta:** el tiempo nuevo es 0.7+0.03=0.73, aceleración≈1.3699. La fracción no mejorada domina.

**31.4.** ¿Qué decisión de formato usar para una suma de mil valores BSS de byte? **Respuesta:** el máximo es 255000, por lo que una word de 16 bits no alcanza; hacen falta al menos 18 bits sin signo para el resultado exacto. El valor típico observado no reemplaza esa cota si se exige garantía para todas las entradas.

### Hoja de fórmulas y relaciones del capítulo 31

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Protocolo de conversión | decodificar → comprobar rango → codificar → verificar | Indicar formato y escala; una escritura hexadecimal no define por sí sola el tipo. |
| Suma de n bytes BSS | máximo 255n | Elegir ancho del acumulador según el máximo permitido, no el promedio observado. |
| Comparación de mejoras | calcular tiempo con N, CPI y f nuevos | Una reducción de CPI no garantiza menor tiempo si aumenta N. |

## Capítulo 32 · Taller integrador de memoria y programas

### Problema A · Seguir una carga hasta el dato

Supongamos DS=2000h, BX=0120h, SI=0004h y memoria con los bytes 78h y 56h en las posiciones físicas 20126h y 20127h. La instrucción `MOV AX,[BX+SI+2]` forma primero el desplazamiento 0126h; después la dirección física 20126h; finalmente lee la word little endian 5678h. Hay tres objetos: expresión de dirección, dirección resultante y contenido.

Si un sistema educativo usa además una caché física de 256 bytes, bloques 16 y dos vías, la dirección 20126h corresponde al bloque 2012h, offset 6, conjunto 2 y etiqueta 402h. El ejemplo supone un campo de dirección suficientemente ancho; la fórmula de partición debe ajustarse al ancho completo, no reutilizar los nueve bits de etiqueta del ejemplo de 16 bits del capítulo 16. Una dirección física de 20 bits deja 13 bits de etiqueta con ese mismo índice y desplazamiento.

Para decidir hit/miss todavía falta el estado de caché: no alcanza conocer el conjunto. Debe existir allí una vía válida con etiqueta 402h. Si no existe, se trae el bloque correspondiente y se aplica la política de reemplazo. La CPU obtiene la word a partir de los bytes del bloque, sin que el nombre de la variable forme parte de la memoria física.

### Problema B · Diseñar una suma con contrato comprobable

Se pide sumar hasta 257 bytes BSS sin perder el resultado. El máximo es 257×255=65535, por lo que AX de 16 bits alcanza. Para 258 bytes, el máximo 65790 excede ese rango. Si la longitud es arbitraria, la solución debe ampliar el acumulador o detectar carry; no es correcto asumir que los datos «normalmente son pequeños».

La rutina del capítulo 22 devuelve cero para longitud cero y usa un byte ampliado sin signo antes de ADD. Su contrato permite comprobar longitudes 0,1 y 257, y arreglos de ceros, de 255 y mixtos. La prueba del máximo no sustituye probar la lógica del bucle, pero demuestra que no hay un caso de desbordamiento válido bajo las precondiciones.

El TP también pide sumar bytes dejando el resultado en AL. Allí puede estar solicitándose el resultado modular de ocho bits, o puede haber una restricción no escrita sobre la suma. Antes de prometer «suma exacta» hay que aclararlo. Para un arreglo de veinte valores de 10 a 29, la suma matemática es 390 y AL conservaría 134. Además, terminar el programa con `MOV AX,4C00h` vuelve a cambiar AL: debe inspeccionarse antes o almacenar el resultado. Son dos pérdidas diferentes: modularidad aritmética y posterior reutilización de registro.

### Problema C · Verificar una rutina de pila

Un llamador apila OFFSET datos y luego longitud, ambas words, e invoca una rutina cercana. Tras `PUSH BP / MOV BP,SP`, longitud está en BP+4 y dirección en BP+6. Si la rutina usa SI, CX y BX y promete conservarlos, los salva después de fijar BP y los restaura en orden inverso. Si acaba con RET4, el llamador no hace limpieza adicional.

Para comprobarla se observa SP antes de los parámetros y después de retornar; deben coincidir. Se eligen valores distintivos iniciales para los registros preservados, de modo que una restauración equivocada no pase inadvertida porque todos valían cero. También se prueba con negativos si el cálculo usa Ca2: datos positivos solamente no detectan una selección incorrecta de JA frente a JG.

### Problema D · De una línea de texto a una salida válida

El buffer DOS de 0Ah se declara con capacidad 31, conteo 0 y 31 posiciones de caracteres. El usuario escribe «HOLA» y Enter. Queda conteo 4 y los bytes de texto H, O, L, A, CR desdeoffset 2. Para mostrar por caracteres se recorren exactamente cuatro bytes; no se imprime el byte de capacidad ni el conteo. Para convertirlo a cadena cero se escribe 0 sobre el CR. Si se decide usar 09h se requiere `$` y se acepta la restricción de que ese carácter delimita la salida.

La rutina debe reservar siempre una posición para el terminador que elija. Si recibe un destino de capacidad N y lee carácter por carácter, puede almacenar como máximo N−1 antes del cero. Al llegar al límite debe definir si deja de leer, descarta hasta Enter o informa truncamiento; una política incompleta puede dejar caracteres pendientes que luego confundan la siguiente lectura.

### Una sesión de depuración que produce evidencia

Antes de ejecutar, anotá entrada, salida esperada y precondiciones. Durante la ejecución observá registros, memoria, banderas y SP en puntos elegidos. Después compará contra la especificación, no solo contra que el programa «no se colgó». Un resultado visible en pantalla puede estar bien mientras la pila quedó dañada para la próxima llamada.

Para aritmética de representaciones pequeñas se pueden recorrer todos los patrones y comparar con un modelo matemático independiente. Para ensamblador conviene probar casos que ejerciten ambas ramas, vacío, un elemento, extremos y datos inválidos. Las pruebas de este manual ejecutan fragmentos de 16 bits bajo un emulador de CPU; los servicios DOS se explican y revisan con sus contratos, pero esa prueba de CPU no equivale a haber ejecutado un sistema DOS completo ni todos los archivos de la cátedra en EMU8086.

### Práctica final con criterios de corrección

**32.1.** ¿Qué observación distingue dirección de contenido en el problema A? **Respuesta:** AX debe quedar 5678h, no 0126h ni 20126h; la dirección se usa para leer.

**32.2.** ¿Una prueba con diez bytes cero demuestra que un acumulador byte alcanza? **Respuesta:** no. La capacidad se demuestra con la cota de todas las entradas permitidas y el código con pruebas de comportamiento.

**32.3.** ¿Puede una captura de consola demostrar que RET4 está bien? **Respuesta:** no por sí sola. Hay que inspeccionar SP y el retorno, y comprobar qué convención de parámetros usa el llamador.

**32.4.** ¿Qué falta antes de estudiar solo de memoria las instrucciones? **Respuesta:** poder reconstruir los contratos de datos, direcciones, tamaños y estado; esas relaciones explican por qué una instrucción es apropiada en cada problema.

### Hoja de fórmulas y relaciones del capítulo 32

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Traza de memoria | dirección efectiva → física → campos de caché → contenido | La etiqueta válida decide hit; el contenido depende de bytes y endian. |
| Pila comprobable | SP tras retorno = SP antes de parámetros | Bajo convenio completo y rutina que no deja datos pendientes. |
| Validación | casos normales + vacío + extremos + ambas ramas + datos inválidos | Pruebas de CPU no equivalen a ejecutar DOS ni todos los programas en EMU8086. |

## Formulario de la Unidad 10 · Integración y depuración

Agrupación editorial de consulta. Las condiciones y los contratos pertenecen a las relaciones; no deben omitirse al aplicar una fórmula o una instrucción.

### Capítulo 31

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Protocolo de conversión | decodificar → comprobar rango → codificar → verificar | Indicar formato y escala; una escritura hexadecimal no define por sí sola el tipo. |
| Suma de n bytes BSS | máximo 255n | Elegir ancho del acumulador según el máximo permitido, no el promedio observado. |
| Comparación de mejoras | calcular tiempo con N, CPI y f nuevos | Una reducción de CPI no garantiza menor tiempo si aumenta N. |

### Capítulo 32

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Traza de memoria | dirección efectiva → física → campos de caché → contenido | La etiqueta válida decide hit; el contenido depende de bytes y endian. |
| Pila comprobable | SP tras retorno = SP antes de parámetros | Bajo convenio completo y rutina que no deja datos pendientes. |
| Validación | casos normales + vacío + extremos + ambas ramas + datos inválidos | Pruebas de CPU no equivalen a ejecutar DOS ni todos los programas en EMU8086. |

## Fuentes, cobertura y revisión

### Matriz contra los materiales del aula 2025

| Recurso o eje identificado | Desarrollo del manual | Alcance |
|---|---|---|
| TP1: sistemas posicionales, BSS, SyM, Ca1, Ca2 y exceso | Capítulos 1–4, taller 31 | Conversiones, rangos y contratos; ejercicios originales con respuestas |
| TP2: aritmética digital, punto fijo e IEEE 754 | Capítulos 5–8 y taller 31 | Banderas, escalas, redondeo, especiales y errores numéricos |
| Cronograma Pergamino: lógica, máscaras, SoP, PoS y Karnaugh | Capítulos 9–10 | Desarrollo original para el eje identificado en el cronograma |
| T1: Von Neumann y Harvard | Capítulo 11 | Programa almacenado, interconexión y distinciones de arquitectura |
| T2: procesador y métricas | Capítulos 12–13 | Microoperaciones, ciclo, pipeline y evaluación de tiempo |
| T3: ISA, CISC y RISC | Capítulo 14 | Contrato de instrucciones y comparación sin generalizaciones comerciales |
| T4: memorias | Capítulos 15–17 | Endian, tecnologías, jerarquía, caché, almacenamiento y RAID; paginación introductoria |
| T5 y T6: buses y E/S | Capítulos 18–19 | Temporización, arbitraje, sondeo, interrupciones y DMA |
| TP3: 8086, memoria, bucles, máscaras, subrutinas y parámetros | Capítulos 20–26 y taller 32 | Contratos, código original, trazas de pila y pruebas de fragmentos |
| TP4: interrupciones y servicios de E/S | Capítulo 27 y taller 32 | INT 21h, funciones, buffers, límites y diferencias con interrupciones hardware |
| T7: multiprocesadores y multicomputadores | Capítulo 28 | Flynn, UMA/NUMA, MESI, SMT, límites y condiciones de sincronización |
| T8: GPU e imágenes | Capítulos 29–30 | Modelo de ejecución, memoria, costo completo, filtros y pipeline gráfico |

### Procedencia y lecturas complementarias

La fuente principal es el aula institucional enlazada al comienzo, edición 2025-1C. Incluye nueve PDF de teoría T1–T8 (T2 tiene un archivo adicional de métricas), los cuatro TP, soluciones publicadas, clases complementarias, guía de ensamblador, tablas y el manual Intel, además de tres cronogramas. La bibliografía que los TP recomiendan incluye Murdocca y Heuring, Stallings y la guía de ensamblador de la cátedra. Se registra esa recomendación sin afirmar que se leyeron completos esos libros.

El manual **The 8086 Family User's Manual, Intel, octubre de 1979**, descargado del aula, se consultó como referencia primaria para el modelo histórico y las instrucciones. Para las precisiones sobre ejecución GPU se consultaron las secciones [Writing SIMT Kernels](https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/writing-cuda-kernels.html) y [Advanced Kernel Programming](https://docs.nvidia.com/cuda/cuda-programming-guide/03-advanced/advanced-kernel-programming.html) de la documentación oficial de NVIDIA. Las figuras del manual son originales y esquemáticas; no reproducen capturas del material del aula.

### Aclaraciones que evitan errores de estudio

La formulación «Int 01h» usada para lectura en una consigna del TP4 se explica aquí como función 01h de INT 21h. Se distingue también qué estado guarda automáticamente el procesador en una interrupción y qué debe preservar el manejador. La capacidad del buffer 0Ah incluye lugar para CR, mientras el conteo devuelto lo excluye. Se diferencia un resultado modular en AL de una suma exacta que necesita más bits, y se advierte que cargar AX con 4C00h para terminar reemplaza el valor que allí hubiera.

Las codificaciones y resultados de soluciones breves se comprueban con sus rangos y supuestos. La explicación no trata un ejemplo impreso como autoridad suficiente para omitir una condición. Los temas adicionales de paginación, cotas de rendimiento, seguridad de buffers y cuantización se integran como desarrollos conceptuales para entender los recursos; no se atribuyen como nuevas exigencias formales de un programa no obtenido.

### Estado de revisión

Los controles automáticos comprueban resultados seleccionados y ejecución de fragmentos, no demuestran la corrección universal de cada oración ni reemplazan la revisión docente. No se ejecutaron todos los programas de la cátedra, no se auditó íntegramente el manual Intel de 208 páginas y no se revisaron todas las grabaciones. Para completar la preparación, resolvé los TP originales y compará el alcance con las indicaciones de la comisión y de la edición en la que cursás.
