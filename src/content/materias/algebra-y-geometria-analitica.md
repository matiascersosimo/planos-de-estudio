---
nombre: "Álgebra y Geometría Analítica"
code: "01292"
resumen: "Curso guiado desde los primeros cálculos con matrices hasta la diagonalización: explicaciones paso a paso, ejemplos, práctica gradual, geometría y formularios."
---

## Cómo empezar: una guía para aprender, paso a paso

Este manual está pensado para **aprender la materia por primera vez**. No necesitás llegar sabiendo matrices, espacios vectoriales o autovalores. Sí vamos a utilizar operaciones con números, ecuaciones sencillas y coordenadas; la sección siguiente las recupera con ejemplos. Cuando aparezca una idea nueva, primero se trabaja en un caso pequeño, después se explica la regla y finalmente se usa con menos ayuda. Si una notación resulta extraña, detenete en su significado antes de intentar memorizarla.

El recorrido sigue los seis ejes del programa de Álgebra y Geometría Analítica, código 01292, disponibles en el [aula de UNNOBA, edición 2025-2C](https://plataformaed.unnoba.edu.ar/course/view.php?id=10607). Las seis unidades son una organización editorial de esos ejes; los dos talleres finales integran lo aprendido. La guía es única y se comparte entre las carreras que refieren a esta materia. Los contenidos y ejemplos están redactados para este sitio; los materiales originales de la cátedra permanecen como fuentes, no se redistribuyen aquí.

### Cómo usar las ayudas

**Primera pasada: con acompañamiento.** Leé el primer ejemplo y escribí cada operación en papel. No alcanza con pensar “se entiende”: tapá la línea siguiente y anticipá qué harías. Si aparece una fracción, conservá el valor exacto. Cuando llegues al control, compará tu cuenta con la condición inicial, no solo con el número final.

**Segunda pasada: con una pista.** Elegí un ejercicio cercano y anotá primero qué pide, qué datos hay y qué herramienta responde a esa pregunta. Por ejemplo: para pertenencia a un generado, buscás coeficientes; para núcleo, igualás la salida a cero; para imagen, preguntás qué salidas se alcanzan. Estas preguntas se parecen, pero no son intercambiables.

**Tercera pasada: sin plantilla.** Resolvé la práctica antes de mirar su respuesta. Si fallás, localizá la primera diferencia: lectura del dato, elección del método, operación aritmética o interpretación. Volvé al paso que corresponda. Los ejercicios de los capítulos y los talleres tienen respuestas razonadas para que puedas hacer esa comparación. No se proponen tiempos rígidos: necesitás avanzar cuando podés reconstruir el procedimiento, no cuando terminás de leer una pantalla.

### Un mapa para no perderse

Los capítulos 1–5 enseñan el lenguaje de matrices y determinantes; 6–8 resuelven y modelizan sistemas. Los capítulos 9–14 llevan las ecuaciones a rectas, planos y cónicas. Los capítulos 15–24 explican por qué esas cuentas tienen una estructura común: subespacios, bases, coordenadas y proyecciones. Los capítulos 25–28 estudian las reglas que transforman vectores; 29–32 buscan bases donde esas reglas se simplifican. Los talleres 33–34 reúnen decisiones de varias unidades.

El formulario de cada capítulo sirve **después** del desarrollo. El de cada unidad permite repasar sus relaciones y el general reúne todas las consultas. Las tablas incluyen condiciones porque una fórmula aplicada fuera de ellas puede dar un resultado sin sentido. Usá el índice del lector para volver a un tema; el botón de fórmulas del capítulo lleva directamente a su hoja.

### Fuentes, alcance y revisión

Antes de redactar se reunieron los 57 PDF accesibles identificados, con 298 páginas, y siete archivos de ejemplos de Maxima. Se extrajo su texto; se inspeccionaron visualmente las 17 páginas de los seis trabajos prácticos escaneados y una página del programa. La lectura de teoría y soluciones fue selectiva por tema; no se presenta como auditoría individual de cada página. El programa enlazado tiene portada de 2025-1C, aunque está alojado en el aula 2025-2C. Los cronogramas y parciales históricos no se presentan como reglas o fechas vigentes.

El recurso externo de preparación del final devolvió una página 404 de Google Drive. Tampoco se afirma haber revisado todos los videos, enlaces externos de Junín ni la bibliografía completa. La cobertura se contrasta con el programa, los seis TP y los apuntes disponibles. Se señala una errata verificable del TP6 en el capítulo 29. Los ejemplos se comprobaron con aritmética exacta independiente y se revisó su presentación web; **la revisión académica docente sigue pendiente**. Para preparar una evaluación, completá también los TP y atendé las indicaciones de tu cátedra.

## Herramientas previas: números, ecuaciones y notación

### Signos y paréntesis

Restar un número es sumar su opuesto. Por eso $3-(-2)=3+2=5$. En un producto, dos signos negativos dan positivo: $(-2)(-3)=6$; un solo negativo da negativo. Los paréntesis muestran qué operación se hace primero. En $2(3-5)$, calculamos $3-5=-2$ y después multiplicamos: $-4$. Distribuir da lo mismo, $2\cdot3-2\cdot5=6-10=-4$.

Cuando una resta afecta una suma completa, cambia el signo de **todos** sus términos: $a-(b-c)=a-b+c$. Es una fuente frecuente de errores al restar filas o ecuaciones. Practicá con números: $5-(2-3)=5-(-1)=6$, igual que $5-2+3$. Si escribieras $5-2-3$, obtendrías otro resultado.

### Fracciones sin calculadora

Una fracción $a/b$ exige $b\ne0$. Para sumar, usá un denominador común: $1/2+1/3=3/6+2/6=5/6$. Para multiplicar, multiplicá numeradores y denominadores: $(2/3)(3/5)=6/15=2/5$. Para dividir por una fracción no nula, multiplicá por su inversa: $(2/3)/(4/5)=(2/3)(5/4)=5/6$.

Podés cancelar **factores** comunes, no términos de una suma: $2x/(2y)=x/y$ si $y\ne0$, pero $(x+2)/(y+2)$ no se simplifica a $x/y$. Antes de cancelar, preguntá si el número multiplica todo el numerador y todo el denominador. En Gauss aparecen muchas fracciones; conservarlas exactas permite distinguir un cero real de un pequeño error de redondeo.

### Despejar una ecuación

Resolver $2x+3=11$ significa encontrar un número que vuelva verdadera la igualdad. Restamos tres en ambos lados: $2x=8$. Dividimos ambos por dos: $x=4$. Comprobamos $2\cdot4+3=11$. No es una regla mágica de “pasar cambiando signo”; son operaciones iguales a ambos lados que preservan la igualdad.

En $ax=b$, si $a\ne0$, $x=b/a$. Si $a=0$, no se puede dividir: la ecuación es $0=b$. Con $b=0$, cualquier $x$ funciona; con $b\ne0$, ninguno. Esta pequeña distinción explica más adelante las ramas de los sistemas con parámetros.

### Potencias, raíces y cuadrados completos

$x^2$ significa $x\cdot x$; no significa $2x$. La identidad $(x+y)^2=x^2+2xy+y^2$ aparece al distribuir los dos factores. La raíz $\sqrt a$ para $a\ge0$ es la raíz **no negativa**. Resolver $x^2=9$ da $x=3$ o $x=-3$, mientras que el símbolo $\sqrt9$ designa tres. Para reales, $\sqrt{x^2}=|x|$, pues una longitud no puede ser negativa.

Completar cuadrados usa $(x+h)^2=x^2+2hx+h^2$. En $x^2+4x$, la mitad de cuatro es dos y su cuadrado cuatro: $x^2+4x=(x+2)^2-4$. Desarrollar el lado derecho lo comprueba. Esta técnica permitirá reconocer los centros y radios de las cónicas.

### Coordenadas, conjuntos y cuantificadores

La pareja $(2,-1)$ identifica dos componentes en orden. En el plano puede representar el punto situado dos unidades a la derecha y una hacia abajo. En el espacio usamos ternas. La notación $\mathbb R^n$ reúne las listas de $n$ números reales. Una columna y una fila contienen datos ordenados, pero sus tamaños matriciales son distintos: por eso a veces escribimos $(2,-1)^T$ para destacar la columna.

$v\in S$ significa “$v$ pertenece a $S$”; $S\subseteq V$, que todo elemento de $S$ está en $V$. La expresión $S=\{(x,y):y=2x\}$ se lee “el conjunto de parejas que cumplen $y=2x$”. El símbolo $\forall$ significa “para todo”; $\exists$, “existe al menos uno”. Una definición universal se demuestra para un elemento general; para refutarla basta un contraejemplo.

El signo $\Rightarrow$ indica implicación y $\iff$ equivalencia en ambos sentidos. Por ejemplo, “$x=0$ implica $x^2=0$” es una implicación; en números reales también vale la recíproca. En cambio, $x=1\Rightarrow x^2=1$, pero $x^2=1$ no obliga $x=1$, pues también sirve $-1$. Distinguir un criterio suficiente de uno necesario ayuda a leer los teoremas sin exagerar sus conclusiones.

### Comprobación antes de comenzar

1. Calcular $2-3(-2)$. **Control:** ocho; primero se multiplica y luego se resta el negativo.
2. Resolver $3x-2=7$. **Control:** sumar dos, dividir por tres: $x=3$; sustituir confirma.
3. Calcular $1/2-3/4$. **Control:** $2/4-3/4=-1/4$.
4. ¿$(2,4)$ pertenece a $y=2x$? **Control:** sí, porque cuatro es dos veces dos.
5. Resolver $x^2=4$. **Control:** $x=\pm2$, dos soluciones, no una.
6. Refutar “si $x^2=1$, entonces $x=1$”. **Control:** $x=-1$ satisface la hipótesis y no la conclusión.

Si alguna respuesta no sale, repetí la explicación inmediata anterior con otros números antes de seguir. No es un obstáculo ajeno a la materia: estas operaciones son los pasos pequeños con los que construiremos las ideas nuevas.

## 1. Matrices: datos, índices y estructura

### Empezar desde cero: cómo leer y calcular una entrada

Antes de usar letras generales, imaginá una tabla de dos filas: $(1,2,3)$ arriba y $(4,5,6)$ abajo. Se lee de izquierda a derecha dentro de cada fila. Para buscar $a_{23}$, el primer número te lleva a la segunda fila y el segundo a la tercera columna: el valor es seis. El tamaño de la tabla es $2\times3$, en ese orden.

Probemos una suma pequeña: $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ y $B=\begin{pmatrix}5&0\\-1&2\end{pmatrix}$. Para la primera entrada sumamos $1+5=6$. A su derecha, $2+0=2$. Abajo, $3+(-1)=2$ y $4+2=6$. El resultado es $\begin{pmatrix}6&2\\2&6\end{pmatrix}$. No se suman todos los números juntos: cada posición conserva su lugar.

**Ahora probá vos:** ¿qué entrada cambia si aumentás solo $b_{21}$ en tres? **Control:** únicamente la entrada $(2,1)$ de la suma aumenta en tres. Si esta lectura todavía cuesta, dibujá una cuadrícula y numerá primero sus filas y columnas; la notación posterior es una forma breve de describir esa misma acción.

### Desarrollo del tema

Una matriz es una tabla rectangular de escalares. Escribimos $A=(a_{ij})\in M_{m\times n}(\mathbb R)$: $m$ cuenta filas y $n$ columnas; $a_{ij}$ está en la fila $i$, columna $j$. El orden de los índices importa. La igualdad de matrices exige el mismo tamaño e igualdad entrada por entrada. Una matriz puede representar datos, un sistema o una transformación, pero esa interpretación debe declararse: una misma tabla numérica admite usos distintos.

La fila $i$ es una matriz $1\times n$; la columna $j$, una matriz $m\times1$. Una submatriz se obtiene conservando determinadas filas y columnas, en su orden. Una matriz cuadrada tiene $m=n$; su diagonal principal reúne los $a_{ii}$. Es diagonal si todas las entradas fuera de esa diagonal son cero; escalar si además todos los elementos diagonales coinciden. La identidad $I_n$ es la diagonal con unos. Una triangular superior tiene ceros debajo de la diagonal; una inferior, encima. La matriz nula tiene todas sus entradas cero, pero su tamaño sigue siendo parte del dato.

### Operar sin perder el significado

La suma se define solo para matrices del mismo tamaño: $(A+B)_{ij}=a_{ij}+b_{ij}$. El producto por un escalar es $(cA)_{ij}=ca_{ij}$. Se cumplen asociatividad y conmutatividad de la suma, distributividad y existencia de opuesto. El elemento neutro es la matriz nula del tamaño correspondiente. Esto permite escribir $A-B=A+(-1)B$ y resolver igualdades aditivas sin ambigüedad.

Por ejemplo, si dos sucursales venden dos productos durante tres días, sus registros pueden ser matrices $2\times3$. Sumarlos tiene sentido si las filas identifican los mismos productos y las columnas los mismos días. Que dos tablas tengan igual tamaño es una condición matemática; que midan magnitudes compatibles es una condición del modelo. Sumar precios con cantidades no produce ventas aunque la operación esté definida numéricamente.

### Ejemplo resuelto

Sean

$$
A=\begin{pmatrix}1&-2&0\\3&4&5\end{pmatrix},\qquad B=\begin{pmatrix}2&1&-1\\0&-3&2\end{pmatrix}.
$$

Para resolver $2X-A=B$, primero aislamos $2X=A+B$ y dividimos por el escalar no nulo $2$:

$$
X=\frac12\begin{pmatrix}3&-1&-1\\3&1&7\end{pmatrix}.
$$

La verificación es entrada por entrada: en la posición $(2,3)$, $2(7/2)-5=2=b_{23}$. No se puede sumar a estas matrices una matriz $3\times2$, aunque tenga también seis entradas.

### Práctica con respuestas razonadas

1. Una matriz tiene cuatro filas y dos columnas. ¿Dónde está $a_{24}$? **Respuesta:** no existe: la segunda coordenada del índice supera el número de columnas. Sí existe $a_{42}$.
2. Resolver $3X+2A=5A$. **Respuesta:** $3X=3A$, de donde $X=A$. Solo se dividió por el número $3$; no se utilizó ninguna inversa matricial.
3. ¿Toda matriz diagonal es escalar? **Respuesta:** no; $\operatorname{diag}(1,2)$ es diagonal y sus entradas diagonales difieren. Toda escalar sí es diagonal.
4. Si $cA=0$ con $c\ne0$, justificar $A=0$. **Respuesta:** cada entrada satisface $ca_{ij}=0$; en $\mathbb R$ se divide por $c$. Si $c=0$, no se puede concluir nada sobre $A$.


### Hoja de fórmulas del capítulo 1

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | $A=B\iff a_{ij}=b_{ij}$ | Mismo tamaño; todos los índices. |
| Suma | $(A+B)_{ij}=a_{ij}+b_{ij}$ | Matrices del mismo tamaño. |
| Escalar | $(cA)_{ij}=ca_{ij}$ | El escalar multiplica todas las entradas. |

## 2. Producto matricial y transposición

![Un producto como combinación de columnas](/planos-de-estudio/img/algebra/columnas.svg)

### Primer producto, sin saltar la cuenta

Necesitás saber sumar y multiplicar números con signo. La regla nueva es elegir qué números se combinan. Con $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$ y $B=\begin{pmatrix}2&0\\1&5\end{pmatrix}$, calcularemos la entrada superior izquierda del producto.

1. Señalá la primera fila de $A$: $(1,2)$.
2. Señalá la primera columna de $B$: $(2,1)^T$.
3. Multiplicá las parejas en el mismo orden: $1\cdot2$ y $2\cdot1$.
4. Sumá: $2+2=4$.

Para la entrada superior derecha mantenemos la fila y cambiamos de columna: $1\cdot0+2\cdot5=10$. Abajo obtenemos $3\cdot2+4\cdot1=10$ y $3\cdot0+4\cdot5=20$. Por tanto $AB=\begin{pmatrix}4&10\\10&20\end{pmatrix}$.

**Intento acompañado:** calculá la primera entrada de $BA$ antes de seguir. **Control:** se usa $(2,0)$ con $(1,3)^T$, dando dos. La diferencia con cuatro ya prueba que el orden importa. Dibujar una flecha desde la fila a la columna ayuda al principio; después el algoritmo se vuelve familiar.

### Desarrollo del tema

El producto $AB$ existe cuando el número de columnas de $A$ coincide con el de filas de $B$. Si $A$ es $m\times n$ y $B$ es $n\times p$, el resultado es $m\times p$ y

$$
(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}.
$$

Cada entrada combina una fila de $A$ con una columna de $B$. Este producto está diseñado para representar composición de operaciones lineales. Por eso el orden no es intercambiable: primero actúa $B$ sobre una columna $x$ y después $A$, de modo que $A(Bx)=(AB)x$.

Otra lectura es muy útil: la columna $j$ de $AB$ es $A$ por la columna $j$ de $B$. En particular, $Ax$ es la combinación de las columnas de $A$ cuyos coeficientes son las componentes de $x$. Esta observación reaparecerá al estudiar sistemas, imagen y rango.

### Ejemplo: el orden cambia el resultado

Con $A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$ y $B=\begin{pmatrix}2&0\\3&1\end{pmatrix}$:

$$
AB=\begin{pmatrix}8&2\\3&1\end{pmatrix},\qquad BA=\begin{pmatrix}2&4\\3&7\end{pmatrix}.
$$

Ambos productos están definidos y son distintos. En general, tampoco se puede cancelar un factor: de $AB=AC$ se obtiene $A(B-C)=0$, pero una matriz no nula puede anular vectores no nulos. Por ejemplo, $\operatorname{diag}(1,0)\operatorname{diag}(0,1)=0$, aunque ningún factor es cero. Esta es la razón por la que no se trasladan automáticamente las reglas de números reales a matrices.

Se cumplen asociatividad del producto, distributividad y $AI_n=A$, $I_mA=A$ para $A\in M_{m\times n}$. Para matrices cuadradas, $A^0=I$ y $A^{r+s}=A^rA^s$. La fórmula $(A+B)^2=A^2+AB+BA+B^2$ solo se reduce a $A^2+2AB+B^2$ si $AB=BA$.

### Transponer: intercambiar filas y columnas

La transpuesta $A^T$ satisface $(A^T)_{ij}=a_{ji}$. Se verifica $(A^T)^T=A$, $(A+B)^T=A^T+B^T$, $(cA)^T=cA^T$ y, crucialmente, $(AB)^T=B^TA^T$. Para demostrar la última, la entrada $(i,j)$ del lado izquierdo es $\sum_k a_{jk}b_{ki}$, que coincide con la del derecho. El orden se invierte porque también se invierten las dimensiones intermedias.

Una matriz es simétrica si $A^T=A$ y antisimétrica si $A^T=-A$. En el caso real, una antisimétrica tiene diagonal cero: $a_{ii}=-a_{ii}$. Toda matriz cuadrada real se descompone como

$$
A=\frac{A+A^T}{2}+\frac{A-A^T}{2},
$$

con una parte simétrica y otra antisimétrica; ambas están determinadas de manera única.

### Práctica con respuestas razonadas

1. $A$ es $2\times3$ y $B$ es $3\times4$. Indicar tamaños de $AB$, $BA$ y $(AB)^T$. **Respuesta:** $2\times4$; $BA$ no está definido; $4\times2$.
2. ¿$A^TA$ siempre es simétrica? **Respuesta:** sí: $(A^TA)^T=A^TA$, incluso si $A$ es rectangular.
3. Dar dos matrices no nulas cuyo producto sea cero. **Respuesta:** las diagonales del ejemplo anterior; cada una conserva una coordenada distinta.
4. ¿Es antisimétrica $\begin{pmatrix}0&3\\-3&0\end{pmatrix}$? **Respuesta:** sí: su transpuesta es su opuesta. Sus elementos fuera de la diagonal no necesitan ser cero.


### Hoja de fórmulas del capítulo 2

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Producto | $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ | $A:m\times n$, $B:n\times p$; resultado $m\times p$. |
| Transpuesta | $(AB)^T=B^TA^T$ | Invertir el orden de los factores. |
| Partes | $A=(A+A^T)/2+(A-A^T)/2$ | Matriz real cuadrada; parte simétrica y antisimétrica. |

## 3. Inversa y ecuaciones matriciales

### Antes de invertir: entender qué se está deshaciendo

Si una máquina multiplica un número por dos, deshacerla significa dividir por dos. En dos coordenadas, $A=\operatorname{diag}(2,3)$ transforma $(x,y)$ en $(2x,3y)$. Para recuperar la entrada de la salida $(a,b)$ hacemos $(a/2,b/3)$: esa nueva regla tiene matriz $\operatorname{diag}(1/2,1/3)$ y es la inversa.

Aplicalo a la salida $(8,15)$. Primero recuperás $x=8/2=4$; después $y=15/3=5$. Al volver a aplicar $A$, aparece $(8,15)$: este viaje de ida y vuelta es el significado de $AA^{-1}=I$.

¿Qué ocurre con $C=\operatorname{diag}(2,0)$? Todas las entradas $(4,y)$ producen $(8,0)$. La salida borró la segunda coordenada; no hay una regla que recupere de manera única un dato que se perdió. Por eso $C$ no tiene inversa.

**Tu turno:** ¿puede $C$ producir $(8,1)$? **Control:** no, su segunda salida siempre es cero. Estas dos fallas, varias entradas para una salida y salidas imposibles, explican por qué necesitaremos estudiar núcleo e imagen.

### Desarrollo del tema

Una matriz cuadrada $A$ es invertible si existe $A^{-1}$ tal que $AA^{-1}=A^{-1}A=I$. La inversa deshace la acción de $A$. No es una matriz de recíprocos de entradas ni se escribe como una división ambigua por $A$. Es única: si $B$ y $C$ son inversas, entonces $B=B(AC)=(BA)C=C$.

Si $A$ y $B$ son invertibles del mismo orden, $(AB)^{-1}=B^{-1}A^{-1}$: el producto $ABB^{-1}A^{-1}$ se reduce a $I$. También $(A^T)^{-1}=(A^{-1})^T$ y $(cA)^{-1}=c^{-1}A^{-1}$ si $c\ne0$. La inversa de una suma no se distribuye. Incluso con números $1/(1+1)\ne1+1$, de modo que no hay motivo para esperar esa propiedad en matrices.

### Cálculo por Gauss–Jordan

Se escribe la matriz aumentada $[A\mid I]$ y se aplican las mismas operaciones elementales a ambos bloques. Si el izquierdo se transforma en $I$, el derecho es $A^{-1}$. Cada operación es reversible y equivale a multiplicar a izquierda por una matriz elemental: de $EA=I$ se obtiene precisamente la operación que deshace $A$. Si falta un pivote, no existe inversa.

Para $A=\begin{pmatrix}1&2\\1&3\end{pmatrix}$, restar la primera fila a la segunda produce

$$
\left[\begin{array}{cc|cc}1&2&1&0\\0&1&-1&1\end{array}\right].
$$

Restando dos veces la segunda fila a la primera, el bloque derecho queda $\begin{pmatrix}3&-2\\-1&1\end{pmatrix}$. La multiplicación directa en ambos órdenes confirma la inversa.

### Resolver respetando el lado

De $AX=B$ se obtiene $X=A^{-1}B$; de $XA=B$, $X=BA^{-1}$. Si $AXB=C$ y ambos factores exteriores son invertibles, $X=A^{-1}CB^{-1}$. No se mueve ningún factor a través de otro: se multiplica a izquierda o derecha y se usa asociatividad.

Por ejemplo, $AX^T=B$ implica $X^T=A^{-1}B$, luego $X=(A^{-1}B)^T=B^T(A^{-1})^T$. Si $B=I$ y $A$ es la anterior, $X=\begin{pmatrix}3&-1\\-2&1\end{pmatrix}$. Verificamos sustituyendo $X^T$ en la ecuación original, no en una ecuación intermedia mal transpuesta.

La falta de inversa no significa automáticamente que una ecuación no tenga solución: $\operatorname{diag}(1,0)x=(1,0)^T$ tiene infinitas, mientras que con término independiente $(1,1)^T$ no tiene ninguna. El método general será Gauss; la inversa es una herramienta para un caso particular.

### Práctica con respuestas razonadas

1. Resolver $2AX=B$ con $A$ invertible. **Respuesta:** $X=\frac12A^{-1}B$; el escalar se puede desplazar, los factores matriciales no.
2. Si $AB$ es invertible y $A,B$ son cuadrados del mismo orden, ¿son invertibles? **Respuesta:** sí; por determinantes, $\det A\det B\ne0$. La hipótesis cuadrada es esencial: $(1\ 0)(1\ 0)^T=(1)$ no hace invertibles a los factores rectangulares en el sentido anterior.
3. ¿Una fila nula permite inversa? **Respuesta:** no, pues la misma fila de $AA^{-1}$ sería nula y no podría coincidir con la identidad.
4. Justificar la cancelación $AB=AC\Rightarrow B=C$ si $A$ es invertible. **Respuesta:** multiplicar ambos miembros a izquierda por $A^{-1}$. Sin esa hipótesis la conclusión falla.


### Hoja de fórmulas del capítulo 3

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Inversa | $AA^{-1}=A^{-1}A=I$ | Matriz cuadrada invertible. |
| Producto inverso | $(AB)^{-1}=B^{-1}A^{-1}$ | Ambos factores cuadrados invertibles. |
| Ecuación | $AXB=C\Rightarrow X=A^{-1}CB^{-1}$ | Respetar los lados; inversas existentes. |

## 4. Determinantes: definición y desarrollo

### Una primera cuenta y lo que significa su cero

Para una matriz $2\times2$, empezá con un recorrido fijo: multiplicá la diagonal que va de arriba a izquierda hacia abajo a derecha; después la otra; finalmente restá **primer producto menos segundo**. Con $\begin{pmatrix}2&1\\3&4\end{pmatrix}$, la cuenta es $2\cdot4-1\cdot3=8-3=5$. Si invertís el orden de la resta, cambiás el signo.

Ahora mirá $\begin{pmatrix}1&2\\2&4\end{pmatrix}$. Sale $1\cdot4-2\cdot2=0$. Las columnas $(1,2)$ y $(2,4)$ apuntan en la misma dirección; cualquier combinación cae sobre una recta. El área del paralelogramo que deberían formar se aplastó a cero. Esta es la idea que el determinante generaliza.

**Para practicar con una sola dificultad nueva:** calculá el determinante de $\begin{pmatrix}1&-2\\3&4\end{pmatrix}$. **Control:** $4-(-6)=10$. Los paréntesis son importantes: restar un producto negativo suma. Una vez que esta cuenta sea clara, pasá a los menores de orden tres; cada menor vuelve a ser un cálculo de este tipo.

### Desarrollo del tema

El determinante asocia un escalar a cada matriz cuadrada. No está definido para matrices rectangulares en esta materia. En orden dos,

$$
\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.
$$

Geométricamente mide el factor de área con orientación del mapa lineal de matriz $A$; en orden tres, el de volumen orientado. Un determinante cero indica que el espacio se aplasta en una dimensión menor. El valor absoluto mide el factor de área o volumen; el signo informa si se conserva o invierte la orientación.

Una definición general suma sobre todas las permutaciones $\sigma$ de $\{1,\ldots,n\}$:

$$
\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i=1}^n a_{i,\sigma(i)}.
$$

Cada producto elige exactamente una entrada de cada fila y de cada columna. El signo es positivo para permutaciones pares y negativo para impares. Esta definición fundamenta las propiedades; para calcular conviene explotar ceros y operaciones elementales.

### Menores, cofactores y expansión

El menor $M_{ij}$ es el determinante de la matriz obtenida al borrar fila $i$ y columna $j$; el cofactor es $C_{ij}=(-1)^{i+j}M_{ij}$. La expansión por la fila $i$ es $\det A=\sum_j a_{ij}C_{ij}$; por la columna $j$, $\det A=\sum_i a_{ij}C_{ij}$. El tablero de signos empieza $+,-,+$ en la primera fila y alterna en las siguientes. Se puede elegir cualquier fila o columna, preferentemente con muchos ceros.

Para

$$
A=\begin{pmatrix}1&2&0\\0&3&4\\2&0&5\end{pmatrix},
$$

expandimos por la primera fila:

$$
\det A=1(3\cdot5-4\cdot0)-2(0\cdot5-4\cdot2)=15+16=31.
$$

El término de la segunda columna tiene signo negativo; el menor mismo es $-8$. Confundir menor con cofactor cambiaría el resultado. La regla de Sarrus ofrece la misma cuenta en orden tres, pero **no se extiende a orden cuatro** repitiendo diagonales.

Para una triangular, solo contribuye el producto de la diagonal: $\det A=a_{11}\cdots a_{nn}$. Es una consecuencia de la definición, pues toda otra selección contiene un cero. Así, una triangular con diagonal $2,-1,3$ tiene determinante $-6$ aunque sus otras entradas sean grandes.

### Práctica con respuestas razonadas

1. Hallar $\det\begin{pmatrix}2&3\\4&6\end{pmatrix}$. **Respuesta:** $12-12=0$. Las columnas son proporcionales y no generan área.
2. Calcular $C_{12}$ de la matriz $3\times3$ del ejemplo. **Respuesta:** el menor es $-8$ y $(-1)^3=-1$, por lo que $C_{12}=8$.
3. ¿Qué determinante tiene una diagonal con entradas $1,0,7$? **Respuesta:** cero; no importa el valor de las otras dos entradas.
4. Comparar $\det A$ y $\det A^T$. **Respuesta:** son iguales. La definición por permutaciones intercambia el papel de filas y columnas sin cambiar la suma.


### Hoja de fórmulas del capítulo 4

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden dos | $\det A=ad-bc$ | $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. |
| Cofactor | $C_{ij}=(-1)^{i+j}M_{ij}$ | Borrar fila y columna del menor. |
| Expansión | $\det A=\sum_j a_{ij}C_{ij}$ | Una fila fija; también vale por columna. |
| Triangular | $\det A=\prod_i a_{ii}$ | Triangular superior o inferior. |

## 5. Propiedades, adjunta e invertibilidad

### Seguir una operación y registrar su efecto

Vamos a calcular $\det\begin{pmatrix}1&2\\3&5\end{pmatrix}$ por eliminación. La meta es fabricar un cero debajo de la primera entrada, porque una triangular se resuelve multiplicando su diagonal.

La segunda fila empieza con tres y la primera con uno. Restar tres veces la primera a la segunda produce $(3,5)-3(1,2)=(0,-1)$. La nueva matriz es $\begin{pmatrix}1&2\\0&-1\end{pmatrix}$. Esta clase de operación **no cambia** el determinante: el resultado es $1\cdot(-1)=-1$. La fórmula directa $1\cdot5-2\cdot3$ lo confirma.

Si en vez de eso intercambiás las filas, el determinante cambia de signo. Si multiplicás solo la primera fila por dos, cambia por un factor dos. Escribí al margen una cuenta de esos factores; no intentes recordarlos al final.

**Ahora decidí antes de calcular:** si multiplicás todas las entradas de una matriz $2\times2$ por dos, ¿qué factor aparece? **Control:** cuatro, pues se multiplicaron dos filas. Esta distinción evita confundir una operación sobre una fila con una operación sobre toda la matriz.

### Desarrollo del tema

El determinante es lineal en **una fila a la vez**, manteniendo las otras fijas; cambia de signo al intercambiar dos filas y vale cero si dos filas coinciden. De estas propiedades se desprenden las reglas de eliminación: intercambiar filas multiplica el determinante por $-1$; multiplicar una fila por $c$ lo multiplica por $c$; sumar a una fila un múltiplo de otra no lo cambia. Las mismas reglas valen por columnas.

No se debe confundir linealidad en una fila con $\det(A+B)=\det A+\det B$, identidad que es falsa en general. Tampoco $\det(cA)=c\det A$: se multiplican **las $n$ filas**, por lo que $\det(cA)=c^n\det A$.

### Ejemplo por eliminación y parámetro

En la matriz del capítulo anterior, hacemos $F_3\leftarrow F_3-2F_1$, obteniendo tercera fila $(0,-4,5)$. Luego $F_3\leftarrow F_3+\frac43F_2$ produce $(0,0,31/3)$. No hubo intercambio ni escalado de una fila completa: el determinante sigue siendo $1\cdot3\cdot31/3=31$.

En $A_t=\begin{pmatrix}1&2\\t&4\end{pmatrix}$, $\det A_t=4-2t$. Por ello es invertible exactamente cuando $t\ne2$. No se debe reemplazar inmediatamente la segunda fila por $(0,1)$ dividiendo por $4-2t$, porque esa operación perdería el caso singular que hay que analizar aparte.

### Adjunta y fórmula de la inversa

La adjunta clásica es la **transpuesta de la matriz de cofactores**, $\operatorname{adj}(A)=(C_{ij})^T$. Se cumple

$$
A\operatorname{adj}(A)=\operatorname{adj}(A)A=(\det A)I.
$$

Las entradas diagonales de ese producto son expansiones del determinante; las otras son expansiones de una matriz con dos filas o columnas iguales y valen cero. Si $\det A\ne0$, dividir la igualdad por ese escalar da $A^{-1}=\operatorname{adj}(A)/\det A$. Para orden dos resulta

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
$$

No hay fórmula válida mediante esta división cuando $ad-bc=0$.

La propiedad $\det(AB)=\det A\det B$ implica $\det(A^{-1})=1/\det A$ y explica que un producto de matrices cuadradas sea invertible precisamente cuando lo son sus factores. También muestra por qué un determinante cero impide inversa: si $AA^{-1}=I$, sus determinantes darían $0=1$.

### Práctica con respuestas razonadas

1. Si $A$ es $3\times3$ y $\det A=5$, calcular $\det(-2A^T)$. **Respuesta:** $(-2)^3\det A=-40$.
2. Se intercambian dos filas y luego se multiplica una fila por $3$. **Respuesta:** el nuevo determinante es $-3\det A$. Sumar además otra fila no cambiaría ese valor.
3. Obtener $A_t^{-1}$. **Respuesta:** para $t\ne2$, $\frac1{4-2t}\begin{pmatrix}4&-2\\-t&1\end{pmatrix}$. Multiplicar permite verificar tanto numerador como denominador.
4. Refutar la aditividad del determinante. **Respuesta:** para $A=B=I_2$, $\det(A+B)=4$, mientras que $\det A+\det B=2$.


### Hoja de fórmulas del capítulo 5

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Escalado total | $\det(cA)=c^n\det A$ | $A$ de orden $n$; no es escalar una sola fila. |
| Producto | $\det(AB)=\det A\det B$ | Matrices cuadradas del mismo orden. |
| Adjunta | $A^{-1}=\operatorname{adj}(A)/\det A$ | Solo si $\det A\ne0$; adjunta transpuesta de cofactores. |
| Operaciones | $F_i\leftarrow F_i+cF_j$ conserva $\det A$ | $i\ne j$; intercambio cambia signo, escalado de una fila aporta su factor. |

## Hoja de fórmulas de unidad 1: Matrices y determinantes

Estas relaciones se comprenden y practican en los capítulos 1–5. Revisá las condiciones antes de aplicarlas.

### 1. Matrices: datos, índices y estructura

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | $A=B\iff a_{ij}=b_{ij}$ | Mismo tamaño; todos los índices. |
| Suma | $(A+B)_{ij}=a_{ij}+b_{ij}$ | Matrices del mismo tamaño. |
| Escalar | $(cA)_{ij}=ca_{ij}$ | El escalar multiplica todas las entradas. |

### 2. Producto matricial y transposición

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Producto | $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ | $A:m\times n$, $B:n\times p$; resultado $m\times p$. |
| Transpuesta | $(AB)^T=B^TA^T$ | Invertir el orden de los factores. |
| Partes | $A=(A+A^T)/2+(A-A^T)/2$ | Matriz real cuadrada; parte simétrica y antisimétrica. |

### 3. Inversa y ecuaciones matriciales

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Inversa | $AA^{-1}=A^{-1}A=I$ | Matriz cuadrada invertible. |
| Producto inverso | $(AB)^{-1}=B^{-1}A^{-1}$ | Ambos factores cuadrados invertibles. |
| Ecuación | $AXB=C\Rightarrow X=A^{-1}CB^{-1}$ | Respetar los lados; inversas existentes. |

### 4. Determinantes: definición y desarrollo

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden dos | $\det A=ad-bc$ | $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. |
| Cofactor | $C_{ij}=(-1)^{i+j}M_{ij}$ | Borrar fila y columna del menor. |
| Expansión | $\det A=\sum_j a_{ij}C_{ij}$ | Una fila fija; también vale por columna. |
| Triangular | $\det A=\prod_i a_{ii}$ | Triangular superior o inferior. |

### 5. Propiedades, adjunta e invertibilidad

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Escalado total | $\det(cA)=c^n\det A$ | $A$ de orden $n$; no es escalar una sola fila. |
| Producto | $\det(AB)=\det A\det B$ | Matrices cuadradas del mismo orden. |
| Adjunta | $A^{-1}=\operatorname{adj}(A)/\det A$ | Solo si $\det A\ne0$; adjunta transpuesta de cofactores. |
| Operaciones | $F_i\leftarrow F_i+cF_j$ conserva $\det A$ | $i\ne j$; intercambio cambia signo, escalado de una fila aporta su factor. |

## 6. Sistemas lineales y eliminación de Gauss

### Tu primer sistema por eliminación

Una ecuación como $x+y=5$ admite muchas parejas: $(0,5),(1,4),(2,3)$. El sistema añade condiciones que deben cumplirse al mismo tiempo. Tomemos además $x-y=1$. Buscamos una pareja que satisfaga ambas.

Si sumamos las ecuaciones, $y+(-y)$ se cancela y queda $2x=6$. Dividimos por dos: $x=3$. Volvemos a cualquiera de las ecuaciones originales; en $x+y=5$, reemplazamos $x$ por tres y obtenemos $y=2$. Finalmente comprobamos: $3+2=5$ y $3-2=1$.

En la matriz aumentada esto se registra como $[1\ 1\mid5]$ y $[1\ -1\mid1]$. La barra separa coeficientes de resultados; no es una división. Las operaciones de Gauss son una manera ordenada de repetir la misma eliminación sin reescribir las letras en cada paso.

**Con ayuda:** resolvé $x+y=4$, $x-y=2$ sumando primero. **Control:** $2x=6$, así que $x=3$ y $y=1$. No avances a sistemas de tres incógnitas hasta poder explicar por qué se canceló una de las dos y por qué se reemplaza después.

### Desarrollo del tema

Un sistema lineal de $m$ ecuaciones en $n$ incógnitas se escribe $Ax=b$. La matriz $A$ reúne coeficientes, $x$ es una columna de incógnitas y $b$ el término independiente. Es lineal porque las incógnitas aparecen a primera potencia, sin multiplicarse entre sí. Los coeficientes pueden depender de un parámetro fijo: $kx+y=1$ sigue siendo lineal en $x,y$.

Una solución debe satisfacer **todas** las ecuaciones simultáneamente. Dos sistemas son equivalentes si tienen exactamente el mismo conjunto solución. Las operaciones elementales preservan esa equivalencia: intercambiar ecuaciones; multiplicar una ecuación por un escalar no nulo; sumar a una ecuación un múltiplo de otra. Son reversibles, y esa reversibilidad justifica el método. Se opera sobre la matriz aumentada $[A\mid b]$, incluyendo siempre la última columna.

Una matriz escalonada tiene filas nulas al final y cada pivote aparece a la derecha del pivote de la fila anterior; debajo de cada pivote hay ceros. En la forma reducida, cada pivote vale uno y es la única entrada no nula de su columna. Gauss llega a una forma escalonada y luego sustituye hacia atrás; Gauss–Jordan continúa eliminando por encima de los pivotes.

### Ejemplo completo

Consideremos

$$
\begin{cases}x+2y-z=1,\\2x+5y+z=4,\\-x-y+2z=0.\end{cases}
$$

Con $F_2\leftarrow F_2-2F_1$ y $F_3\leftarrow F_3+F_1$, las dos últimas ecuaciones quedan $y+3z=2$, $y+z=1$. Restando la segunda de la tercera se obtiene $-2z=-1$. Entonces $z=1/2$, $y=1/2$ y $x=1/2$. Sustituir en las tres ecuaciones confirma $(1/2,1/2,1/2)$.

En cambio, el sistema $x+2y-z=1$, $2x+4y-2z=2$ tiene una sola ecuación independiente. Tomando $y=s$, $z=t$:

$$
(x,y,z)=(1,0,0)+s(-2,1,0)+t(1,0,1).
$$

Los parámetros son reales e independientes. Si la segunda constante fuera $3$, al restar dos veces la primera ecuación aparecería $0=1$, contradicción: no habría solución. Una fila nula completa representa una igualdad redundante; una fila con coeficientes cero y constante no nula representa incompatibilidad.

### Práctica con respuestas razonadas

1. Resolver $x+y=3$, $x-y=1$. **Respuesta:** sumar da $2x=4$; luego $x=2$, $y=1$.
2. Resolver $x+y+z=0$, $2x+2y+2z=0$. **Respuesta:** $(x,y,z)=s(-1,1,0)+t(-1,0,1)$; dos incógnitas libres, no tres.
3. ¿Una ecuación adicional siempre reduce las soluciones? **Respuesta:** no; si es consecuencia de las anteriores, no cambia el conjunto. Si contradice una consecuencia, lo vuelve vacío.
4. ¿Por qué no multiplicar una fila por cero? **Respuesta:** se pierde información y no se puede deshacer la operación. $x=1$ se convertiría en $0=0$, que admite todos los reales.


### Hoja de fórmulas del capítulo 6

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema | $Ax=b$ | $m$ ecuaciones, $n$ incógnitas; $A:m\times n$. |
| Contradicción | $[0\ \cdots\ 0\mid c],\ c\ne0$ | Implica incompatibilidad. |
| Operaciones válidas | Intercambiar; escalar por no cero; sumar múltiplo de otra fila | Se aplica también al término independiente. |

## 7. Rango, clasificación y parámetros

![Un corte, una coincidencia y una contradicción en el plano](/planos-de-estudio/img/algebra/sistemas.svg)

### Reconocer las tres situaciones antes del rango

Imaginá dos ecuaciones como dos rectas del plano. $x+y=2$ y $x-y=0$ se cortan una vez: solución única $(1,1)$. $x+y=2$ y $2x+2y=4$ describen la misma recta: infinitas parejas. $x+y=2$ y $2x+2y=5$ son paralelas distintas: ninguna pareja satisface ambas.

La eliminación traduce esas imágenes a cuentas. En el segundo caso, restar dos veces la primera ecuación a la segunda da $0=0$: la condición era repetida. En el tercero da $0=1$: contradicción. Un pivote representa una condición independiente, por eso contarlos permite generalizar esta lectura a más incógnitas.

Un parámetro es un dato cuyo valor todavía no fijamos. En $(k-1)y=1$ debemos preguntar primero si $k-1$ es cero. Si no lo es, $y=1/(k-1)$. Si $k=1$, la ecuación es $0=1$ y no admite solución. Esas ramas no son un detalle agregado: responden a problemas distintos dentro de una misma familia.

**Probá la variación:** ¿qué cambia en $(k-1)y=0$? **Control:** para $k\ne1$, $y=0$; para $k=1$, cualquier $y$ sirve. La misma expresión que antes daba incompatibilidad ahora deja libertad.

### Desarrollo del tema

El rango de una matriz es el número de pivotes de su forma escalonada; más adelante lo reconoceremos como dimensión de sus columnas o filas. El criterio de Rouché–Frobenius compara $r=\operatorname{rg}A$ con $\operatorname{rg}[A\mid b]$. Si difieren, el sistema es incompatible. Si coinciden, es compatible; tiene solución única si $r=n$ e infinitas soluciones reales si $r<n$. En ese último caso hay $n-r$ parámetros libres.

La justificación se ve en la reducción: un pivote en la última columna significa una contradicción; si no lo hay, cada columna de incógnita sin pivote aporta un parámetro. El número de ecuaciones originales no decide por sí solo la clasificación. Puede haber veinte ecuaciones redundantes y tres incógnitas libres. Una matriz rectangular también puede producir solución única si sus columnas son independientes y el término independiente es compatible.

### Ejemplo con todas las ramas

Estudiemos, para $k,b\in\mathbb R$,

$$
\begin{cases}x+y+z=1,\\x+ky+z=1,\\x+y+kz=b.\end{cases}
$$

Restando la primera ecuación a las otras:

$$
(k-1)y=0,\qquad (k-1)z=b-1.
$$

**Si $k\ne1$**, los tres pivotes son no nulos. Por tanto $y=0$, $z=(b-1)/(k-1)$ y $x=(k-b)/(k-1)$. Es compatible determinado para cualquier $b$.

**Si $k=1$**, no se puede usar esa expresión por división. La última ecuación reducida es $0=b-1$. Si $b=1$, solo queda $x+y+z=1$, luego hay dos parámetros: $(1-s-t,s,t)$. Los rangos valen uno. Si $b\ne1$, el rango aumentado es dos y el de coeficientes uno: incompatible. Clasificar incluye estas tres ramas, no solo una fórmula con un denominador.

### Método para problemas nuevos

Primero simplificá mediante operaciones que sean válidas para todos los parámetros. Cada vez que aparezca un posible pivote $f(k)$, separá $f(k)=0$ de $f(k)\ne0$ antes de dividir. Conservá las restricciones de cada rama y verificá que cubran todos los valores sin superponerse contradictoriamente. Si hay varios parámetros, una condición puede ser una curva, como $ab=1$, y no un único número.

La regla de Cramer vale para $n$ ecuaciones y $n$ incógnitas con determinante no nulo: $x_i=\det A_i/\det A$, donde se reemplaza la columna $i$ por $b$. Es una fórmula de solución en el caso regular; no clasifica por sí sola todos los casos singulares. Gauss suele ser más económico y más informativo.

### Práctica con respuestas razonadas

1. Clasificar $x+y=1$, $x+ky=2$. **Respuesta:** si $k\ne1$, $y=1/(k-1)$ y $x=(k-2)/(k-1)$; si $k=1$, al restar queda $0=1$ y no hay solución.
2. Una matriz aumentada de un sistema de cuatro incógnitas tiene rango dos, igual al de coeficientes. **Respuesta:** compatible indeterminado con dos parámetros reales.
3. ¿Puede un sistema $5\times2$ tener solución única? **Respuesta:** sí, si ambos rangos son dos; por ejemplo, dos ecuaciones independientes y tres consecuencias.
4. ¿$\det A=0$ implica incompatibilidad? **Respuesta:** no; para $b=0$ siempre existe la solución cero. El determinante solo descarta la unicidad en el caso cuadrado singular.


### Hoja de fórmulas del capítulo 7

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Compatibilidad | $\operatorname{rg}A=\operatorname{rg}[A\mid b]$ | Necesaria y suficiente. |
| Unicidad | $r=n$ | Sistema compatible; $n$ número de incógnitas. |
| Libertad | $n-r$ parámetros | Sistema real compatible con $r<n$. |
| Cramer | $x_i=\det A_i/\det A$ | Sistema cuadrado con determinante no nulo. |

## 8. Sistemas homogéneos y modelización

### Pasar de una historia a ecuaciones

Antes de usar Gauss hay que decidir qué significan las incógnitas. Comprás cuadernos de dos precios: pequeños a dos unidades monetarias y grandes a tres. En total son cinco cuadernos y cuestan doce. Definí $x$ como cantidad de pequeños e $y$ como cantidad de grandes. Escribí las unidades junto a los datos para no mezclar cantidades con dinero.

El total de objetos da $x+y=5$. El costo da $2x+3y=12$. Multiplicá la primera ecuación por dos: $2x+2y=10$. Restala de la segunda: $y=2$. Volvé al total: $x=3$. El control tiene dos partes: tres más dos son cinco objetos; $2\cdot3+3\cdot2=12$ es el costo correcto. Además, ambas cantidades son enteras no negativas, como exige esta historia.

**Con menos ayuda:** cambiá el costo total a once, manteniendo cinco objetos. **Control:** queda $y=1,x=4$. Si el costo fuera dieciséis, el sistema daría $y=6,x=-1$: cuenta algebraicamente coherente, compra imposible. Aprender a modelizar incluye revisar si las soluciones tienen sentido fuera del papel.

### Desarrollo del tema

Un sistema homogéneo es $Ax=0$. Siempre admite la solución trivial $x=0$ y nunca es incompatible. Si $A$ tiene $n$ columnas y rango $r$, su conjunto solución tiene $n-r$ parámetros. Cuando $r<n$ hay soluciones no triviales. Esto incluye cualquier sistema homogéneo con más incógnitas que ecuaciones, pues $r\le m<n$.

Si $x_p$ es una solución particular de $Ax=b$, toda otra solución es $x_p+v$ con $Av=0$. En efecto, $A(x-x_p)=b-b=0$, y recíprocamente $A(x_p+v)=b$. Por eso la solución de un sistema compatible es una traslación del conjunto solución homogéneo. Si $b\ne0$, no es en general un subespacio: no contiene al vector cero.

### Ejemplo homogéneo y no homogéneo

Para $A=\begin{pmatrix}1&1&1\\0&1&-1\end{pmatrix}$, las ecuaciones homogéneas dan $y=z=t$, $x=-2t$. Su solución es $t(-2,1,1)$. Con $b=(3,1)^T$ obtenemos $y=1+t$, $z=t$, $x=2-2t$:

$$
x=(2,1,0)+t(-2,1,1).
$$

La dirección de todas las soluciones es la misma del sistema homogéneo. Cambiar $b$ desplaza la recta, sin cambiar el núcleo de $A$.

### Construir un modelo de mezcla

Se quieren diez litros de una mezcla al $30\%$ utilizando líquidos al $20\%$ y al $50\%$, suponiendo volúmenes aditivos y concentraciones volumétricas comparables. Sean $x,y$ los litros de cada líquido. La conservación de volumen da $x+y=10$; la de soluto, $0{,}2x+0{,}5y=3$. Restando $0{,}2$ veces la primera ecuación queda $0{,}3y=1$, luego $y=10/3$ y $x=20/3$.

El control no termina en Gauss: ambas cantidades son no negativas, suman diez y aportan $4/3+5/3=3$ litros de soluto. Si se pidiera una concentración del $70\%$, el sistema algebraico daría una cantidad negativa de uno de los líquidos. Esa solución sería única como ecuación, pero físicamente inviable. El contexto añade restricciones que no están contenidas en la palabra “lineal”.

### Práctica con respuestas razonadas

1. Si $A$ es $3\times5$, justificar una solución homogénea no trivial. **Respuesta:** $\operatorname{rg}A\le3$, por tanto hay al menos dos variables libres.
2. ¿La suma de dos soluciones de $Ax=b$ vuelve a ser solución? **Respuesta:** su imagen es $2b$; solo se garantiza si $b=0$. La diferencia de dos soluciones sí pertenece siempre al homogéneo.
3. Mezclar al $20\%$ y al $50\%$ para obtener concentración $c$. ¿Qué condición física se requiere? **Respuesta:** $0{,}2\le c\le0{,}5$ para cantidades no negativas; es un promedio ponderado de las concentraciones iniciales.
4. Un sistema homogéneo cuadrado tiene determinante no nulo. **Respuesta:** su única solución es cero; multiplicar por $A^{-1}$ lo demuestra.


### Hoja de fórmulas del capítulo 8

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Homogéneo | $Ax=0$ | Siempre compatible; no trivial si rango menor que número de columnas. |
| Solución completa | $x=x_p+v,\quad v\in\ker A$ | $x_p$ solución particular del sistema compatible. |
| Control de modelo | Conservación y restricciones del contexto | Revisar unidades, no negatividad e integralidad si corresponden. |

## Hoja de fórmulas de unidad 2: Sistemas lineales

Estas relaciones se comprenden y practican en los capítulos 6–8. Revisá las condiciones antes de aplicarlas.

### 6. Sistemas lineales y eliminación de Gauss

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema | $Ax=b$ | $m$ ecuaciones, $n$ incógnitas; $A:m\times n$. |
| Contradicción | $[0\ \cdots\ 0\mid c],\ c\ne0$ | Implica incompatibilidad. |
| Operaciones válidas | Intercambiar; escalar por no cero; sumar múltiplo de otra fila | Se aplica también al término independiente. |

### 7. Rango, clasificación y parámetros

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Compatibilidad | $\operatorname{rg}A=\operatorname{rg}[A\mid b]$ | Necesaria y suficiente. |
| Unicidad | $r=n$ | Sistema compatible; $n$ número de incógnitas. |
| Libertad | $n-r$ parámetros | Sistema real compatible con $r<n$. |
| Cramer | $x_i=\det A_i/\det A$ | Sistema cuadrado con determinante no nulo. |

### 8. Sistemas homogéneos y modelización

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Homogéneo | $Ax=0$ | Siempre compatible; no trivial si rango menor que número de columnas. |
| Solución completa | $x=x_p+v,\quad v\in\ker A$ | $x_p$ solución particular del sistema compatible. |
| Control de modelo | Conservación y restricciones del contexto | Revisar unidades, no negatividad e integralidad si corresponden. |

## 9. Vectores y rectas en el plano y el espacio

![El parámetro recorre una recta desde su punto inicial](/planos-de-estudio/img/algebra/recta.svg)

### Entender un parámetro como una instrucción de movimiento

En la recta $X=(1,2)+t(3,-1)$ empezamos en $(1,2)$. Si $t=1$, avanzamos tres unidades en $x$ y bajamos una en $y$: llegamos a $(4,1)$. Si $t=2$, hacemos dos veces ese desplazamiento y llegamos a $(7,0)$. Si $t=-1$, caminamos en sentido contrario y llegamos a $(-2,3)$. Dejar que $t$ recorra todos los reales dibuja la recta completa.

Para comprobar si $(10,-1)$ pertenece, no elegimos parámetros independientes para cada coordenada. De $1+3t=10$ resulta $t=3$; ahora verificamos $2-t=-1$, que sí se cumple. El mismo valor debe funcionar en todas las coordenadas.

**Intento propio:** ¿pertenece $(4,0)$? **Control:** la primera coordenada exige $t=1$, pero entonces la segunda es uno, no cero. Por tanto no pertenece. Si necesitás verlo, marcá primero los puntos de $t=0,1,2$ en una hoja; el vector dirección describe el mismo salto entre puntos consecutivos.

### Desarrollo del tema

Un punto identifica una posición; un vector representa un desplazamiento. Si $P=(p_1,p_2,p_3)$ y $Q=(q_1,q_2,q_3)$, $\overrightarrow{PQ}=Q-P$. La suma de un punto y un vector produce otro punto; la diferencia de dos puntos produce un vector. Mantener esta distinción evita confundir una recta que pasa por el origen con una recta desplazada.

El producto escalar usual es $u\cdot v=\sum_i u_iv_i$ y la longitud es $\|u\|=\sqrt{u\cdot u}$. Para vectores no nulos, $\cos\theta=(u\cdot v)/(\|u\|\|v\|)$. Dos vectores son perpendiculares cuando su producto es cero. Son paralelos si uno es múltiplo del otro. El vector cero no tiene dirección ni ángulo definido, aunque su producto escalar con cualquier vector sea cero.

En $\mathbb R^3$, $u\times v=(u_2v_3-u_3v_2,u_3v_1-u_1v_3,u_1v_2-u_2v_1)$ es perpendicular a ambos. Su norma es el área del paralelogramo; vale cero exactamente si los vectores son dependientes. El producto mixto $u\cdot(v\times w)$ mide volumen orientado y se anula si los tres vectores son coplanares.

### Ecuaciones de una recta

Una recta que pasa por $P$ con dirección $d\ne0$ se describe como $X=P+td$, $t\in\mathbb R$. En coordenadas son ecuaciones paramétricas. Si todas las componentes de $d$ son no nulas, se puede escribir la ecuación simétrica $(x-p_1)/d_1=(y-p_2)/d_2=(z-p_3)/d_3$. Cuando una componente vale cero se conserva la coordenada constante: **no se divide por cero**.

Por ejemplo, la recta por $P=(1,2,-1)$ y $Q=(3,2,5)$ tiene dirección $(2,0,6)$, que se puede simplificar a $(1,0,3)$. Sus ecuaciones son $x=1+t$, $y=2$, $z=-1+3t$, o $y=2$, $(x-1)=(z+1)/3$. Para probar que $(2,2,2)$ pertenece, encontramos $t=1$ y verificamos las tres coordenadas. $(2,2,3)$ no pertenece aunque coincidan las dos primeras.

En el plano, una normal $n=(a,b)\ne0$ da $a(x-p_1)+b(y-p_2)=0$. Una dirección compatible es $(-b,a)$. La forma $y=mx+c$ no cubre rectas verticales; la implícita $ax+by=c$ sí.

### Práctica con respuestas razonadas

1. Recta por $(0,1)$ perpendicular a la normal $(2,-3)$. **Respuesta:** $2x-3(y-1)=0$; una dirección es $(3,2)$.
2. ¿Cambiar $d$ por $-2d$ cambia la recta? **Respuesta:** no, porque el parámetro recorre todos los reales; cambia su parametrización.
3. Hallar una normal al plano generado por $(1,0,1)$ y $(0,1,1)$. **Respuesta:** su producto vectorial es $(-1,-1,1)$ y tiene producto escalar cero con ambos.
4. ¿Dos rectas con direcciones no paralelas siempre se cortan? **Respuesta:** en el plano sí; en el espacio pueden ser alabeadas, como se estudiará en el capítulo 11.


### Hoja de fórmulas del capítulo 9

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección | $\overrightarrow{PQ}=Q-P$ | Dos puntos distintos para definir una recta. |
| Recta | $X=P+td,\ t\in\mathbb R$ | $d\ne0$; componente cero implica coordenada constante. |
| Ángulo | $\cos\theta=(u\cdot v)/(\|u\|\|v\|)$ | Vectores no nulos, producto usual. |
| Normal | $n=u\times v$ | En $\mathbb R^3$; no nula si las direcciones son LI. |

## 10. Planos y sus representaciones

### De una ecuación a puntos de un plano

La ecuación $x+y+z=1$ relaciona tres coordenadas. Si elegimos $y=0,z=0$, obliga $x=1$; aparece $(1,0,0)$. Si elegimos $y=1,z=0$, obtenemos $(0,1,0)$. Podemos elegir libremente dos coordenadas y la tercera queda determinada: esa libertad doble corresponde a un plano.

Para escribir todos los puntos sin enumerarlos, llamamos $s$ a la elección de $y$ y $t$ a la de $z$. Despejamos $x=1-s-t$. El resultado $(1-s-t,s,t)$ se separa en un punto fijo $(1,0,0)$ y dos desplazamientos $s(-1,1,0)+t(-1,0,1)$. Ahora se ve cómo moverse dentro del plano desde un punto inicial.

**Tu turno con una pista:** parametrizá $x+2y+z=3$ eligiendo $y=s,z=t$. **Control:** $(3-2s-t,s,t)=(3,0,0)+s(-2,1,0)+t(-1,0,1)$. Las direcciones hacen variar las coordenadas sin alterar el valor de la ecuación. Sustituirlas con constante cero comprueba que son paralelas al plano.

### Desarrollo del tema

Un plano del espacio queda definido por un punto $P$ y dos direcciones independientes $u,v$:

$$
X=P+su+tv,\qquad s,t\in\mathbb R.
$$

Si las direcciones son paralelas, esa expresión describe una recta, no un plano. Una normal no nula es $n=u\times v$, y la representación implícita es $n\cdot(X-P)=0$. En coordenadas, $ax+by+cz=d$, con $(a,b,c)\ne0$. Los coeficientes $a,b,c$ forman una normal; no son un punto del plano.

Las dos representaciones son equivalentes: toda combinación de $u,v$ es perpendicular a $n$, y el conjunto de vectores perpendiculares a una normal no nula en $\mathbb R^3$ tiene dos grados de libertad. Para pasar de implícita a paramétrica se eligen dos variables libres y se despeja otra cuyo coeficiente sea no nulo.

### Ejemplo: tres puntos

Tomemos $P=(1,0,0)$, $Q=(0,1,0)$, $R=(0,0,1)$. Las direcciones $Q-P=(-1,1,0)$ y $R-P=(-1,0,1)$ son independientes. Su producto vectorial es $(1,1,1)$. La ecuación es $x+y+z=1$ y una parametrización, $(1-s-t,s,t)$. Sustituirla en la ecuación confirma que todos sus puntos pertenecen. Recíprocamente, cualquier punto que cumpla la ecuación se obtiene eligiendo $s=y,t=z$.

Con tres puntos alineados no hay un único plano: sus diferencias son dependientes y el producto vectorial se anula. La expresión $0=0$ resultante no es “la ecuación del plano”; indica que el procedimiento no determinó una normal.

### Intersección de dos planos

Para $2x-y+z=1$ y $x+y-z=2$, sumar da $3x=3$, luego $x=1$ y $y-z=1$. Su intersección es

$$
(x,y,z)=(1,1,0)+t(0,1,1).
$$

Las normales $(2,-1,1)$ y $(1,1,-1)$ no son paralelas; su producto vectorial es $(0,3,3)$, paralelo a la dirección encontrada. Dos planos con normales no paralelas se cortan en una recta. Si las normales son paralelas, hay que comparar también las constantes para distinguir planos coincidentes de paralelos distintos.

### Práctica con respuestas razonadas

1. Plano por $(1,2,3)$ con normal $(0,1,-1)$. **Respuesta:** $y-z=-1$. La coordenada $x$ queda libre; no implica ausencia de plano.
2. Comparar $x+2y-z=4$ y $2x+4y-2z=8$. **Respuesta:** coinciden porque toda la ecuación fue multiplicada por dos. Con constante $9$ serían paralelos distintos.
3. ¿El plano $x+y+z=1$ contiene al vector cero como punto? **Respuesta:** no; por eso su conjunto de puntos no es un subespacio de $\mathbb R^3$.
4. Encontrar dos direcciones del plano $2x+y-z=0$. **Respuesta:** $(-1,2,0)$ y $(1,0,2)$; ambas tienen producto cero con $(2,1,-1)$ y son independientes.


### Hoja de fórmulas del capítulo 10

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano paramétrico | $X=P+su+tv$ | $u,v$ independientes. |
| Plano implícito | $n\cdot(X-P)=0$ | Normal $n\ne0$. |
| Corte de planos | Dirección $n_1\times n_2$ | Normales no paralelas; hallar además un punto común. |

## 11. Posiciones relativas y distancias

### Cómo elegir una distancia y no solo una fórmula

La distancia es la longitud del recorrido más corto entre conjuntos. Para un punto y un plano, ese recorrido sigue la normal; cualquier inclinación añade un desplazamiento lateral. Empezá con $P=(1,2,5)$ y el plano $z=2$. El punto más próximo es $(1,2,2)$: mantiene las coordenadas horizontales y corrige solo la altura. La distancia es tres.

La normal del plano es $(0,0,1)$ y su ecuación se escribe $(0,0,1)\cdot X=2$. La fórmula general da $|5-2|/1=3$, reproduciendo la imagen sencilla. Para un plano inclinado se hace lo mismo en dirección de su normal, aunque el pie ya no conserve dos coordenadas.

**Primer control:** ¿por qué hay valor absoluto? Porque un punto al otro lado del plano puede dar residuo negativo, pero una longitud no puede ser negativa. **Segundo control:** si multiplicás toda la ecuación del plano por dos, se duplican numerador y norma de la normal; la distancia no cambia.

**Probá:** distancia de $(0,0,-1)$ al mismo plano. **Control:** $|-1-2|=3$. Está al otro lado, a la misma distancia.

### Desarrollo del tema

Para dos rectas $L_1=P+tu$ y $L_2=Q+sv$ se estudia primero si $u,v$ son paralelos. Si lo son, basta comprobar si $Q-P$ es múltiplo de $u$: en ese caso coinciden; de lo contrario son paralelas distintas. Si no lo son, resolvemos $P+tu=Q+sv$. Una solución da un punto de corte. Si el sistema es incompatible, las rectas son alabeadas: no son paralelas y tampoco se cortan. En el espacio esa posibilidad es esencial.

Una recta $X=P+td$ frente a un plano $n\cdot X=c$ se analiza sustituyendo:

$$
t(n\cdot d)=c-n\cdot P.
$$

Si $n\cdot d\ne0$, hay un corte único. Si es cero, la recta es paralela al plano: está contenida si $n\cdot P=c$ y es exterior si no. El paralelismo de la dirección por sí solo no decide contención.

### Distancia punto–plano y pie perpendicular

Para $\Pi:n\cdot X=c$, la distancia de $P$ es $|n\cdot P-c|/\|n\|$. El pie es

$$
H=P-\frac{n\cdot P-c}{\|n\|^2}n.
$$

Se obtiene buscando $H=P-\alpha n$ e imponiendo $n\cdot H=c$. Así se demuestra la fórmula y se controla el signo. Para $P=(2,1,3)$ y $\Pi:x+2y+2z=5$, el residuo es $5$ y $\|n\|=3$. Resultan distancia $5/3$ y $H=(13/9,-1/9,17/9)$. Verificamos $13/9-2/9+34/9=5$ y que $P-H$ es paralelo a la normal.

La distancia de $P$ a la recta $Q+td$ se obtiene proyectando $P-Q$ sobre $d$; el residuo perpendicular tiene norma mínima. En $\mathbb R^3$ también vale $\|(P-Q)\times d\|/\|d\|$. Entre rectas no paralelas del espacio, la distancia es $|(Q-P)\cdot(u\times v)|/\|u\times v\|$. Para paralelas se usa la fórmula punto–recta, porque el denominador anterior se anula.

### Ejemplo de rectas alabeadas

Sean $L_1=(t,0,0)$ y $L_2=(0,1+s,1)$. Sus direcciones $(1,0,0)$ y $(0,1,0)$ son perpendiculares, pero la tercera coordenada impide un punto común. El producto mixto tiene valor absoluto uno y el producto vectorial norma uno: la distancia es uno. Los puntos más próximos son $(0,0,0)$ y $(0,0,1)$, tomando $t=0,s=-1$. La perpendicularidad de direcciones no equivale a intersección.

### Práctica con respuestas razonadas

1. Cortar $(x,y,z)=(1,0,0)+t(1,1,1)$ con $z=2$. **Respuesta:** $t=2$, punto $(3,2,2)$.
2. Distancia del origen al plano $3x+4y=10$. **Respuesta:** $10/5=2$; la falta de $z$ no cambia la norma de la normal $(3,4,0)$.
3. Distancia de $(1,2,3)$ al eje $x$. **Respuesta:** $\sqrt{2^2+3^2}=\sqrt{13}$; el pie es $(1,0,0)$.
4. ¿Qué significa producto mixto cero para dos rectas no paralelas? **Respuesta:** son coplanares y se cortan; la distancia entre ellas es cero.


### Hoja de fórmulas del capítulo 11

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Recta–plano | $t(n\cdot d)=c-n\cdot P$ | Corte único si coeficiente no nulo; si cero, comparar residuo. |
| Punto–plano | $d(P,\Pi)=\lvert n\cdot P-c\rvert/\|n\|$ | $\Pi:n\cdot X=c$, normal no nula. |
| Pie en plano | $H=P-(n\cdot P-c)n/\|n\|^2$ | Producto usual. |
| Punto–recta | $d(P,L)=\|(P-Q)\times u\|/\|u\|$ | En espacio; $L=Q+tu$, $u\ne0$. |
| Rectas no paralelas | $d=\lvert(Q-P)\cdot(u\times v)\rvert/\|u\times v\|$ | En $\mathbb R^3$; para paralelas usar punto–recta. |

## 12. Circunferencia y completado de cuadrados

![Centro, radio y tangente de una circunferencia](/planos-de-estudio/img/algebra/circunferencia.svg)

### Completar un cuadrado con una cuenta visible

La identidad $(x-h)^2=x^2-2hx+h^2$ permite reconocer una expresión al revés. En $x^2-6x$, la mitad del coeficiente de $x$ es $-3$. Su cuadrado es nueve. Por tanto $x^2-6x=(x-3)^2-9$. Comprobalo desarrollando el lado derecho: el $+9$ y el $-9$ se cancelan.

Tomemos $x^2+y^2-6x+2y+6=0$. Reemplazamos cada grupo: $(x-3)^2-9+(y+1)^2-1+6=0$. Sumamos las constantes, $-9-1+6=-4$, y las pasamos al otro lado. Queda $(x-3)^2+(y+1)^2=4$. El centro es $(3,-1)$, no $(3,1)$, porque la distancia usa $y-(-1)$. El radio es dos, la raíz de cuatro.

**Con ayuda:** hacé lo mismo con $x^2+y^2+4x-2y=0$. **Control:** $(x+2)^2+(y-1)^2=5$, centro $(-2,1)$ y radio $\sqrt5$. No se suma una constante a un lado de la igualdad sin compensarla; escribir ambos términos evita esa pérdida.

### Desarrollo del tema

Una circunferencia es el lugar de puntos cuya distancia a un centro $C=(h,k)$ es una constante $r>0$. Al elevar al cuadrado la definición se obtiene

$$
(x-h)^2+(y-k)^2=r^2.
$$

La ecuación general es $x^2+y^2+Dx+Ey+F=0$, con $h=-D/2$, $k=-E/2$ y $r^2=(D^2+E^2)/4-F$. Si $r^2=0$ queda un punto; si $r^2<0$, no hay puntos reales. Para reconocer una circunferencia en una ecuación multiplicada por una constante, los coeficientes de $x^2$ e $y^2$ deben ser iguales y no nulos, y no debe haber término $xy$.

Completar cuadrados se basa en $x^2+Dx=(x+D/2)^2-D^2/4$. Cada término que se agrega dentro del cuadrado debe compensarse. En

$$
x^2+y^2-4x+6y-12=0
$$

reagrupamos $x^2-4x=(x-2)^2-4$ y $y^2+6y=(y+3)^2-9$. Queda $(x-2)^2+(y+3)^2=25$: centro $(2,-3)$ y radio $5$.

### Tangencia e intersecciones

La tangente en un punto $P$ de la circunferencia es perpendicular al radio $P-C$. En el ejemplo, $P=(2,2)$ pertenece y el radio es $(0,5)$, luego la tangente es $y=2$. En general, $(P-C)\cdot(X-P)=0$. El punto debe pertenecer; aplicar la fórmula a un punto exterior no produce una tangente en ese punto.

Para cortar con una recta, se parametriza esta y se sustituye en la ecuación. Aparece una cuadrática en el parámetro: discriminante positivo significa dos cortes; cero, tangencia; negativo, ausencia de cortes reales. Con $y=1$ en la circunferencia anterior, $(x-2)^2+16=25$ da $x=-1,5$. Con $y=3$, se obtendría $(x-2)^2=-11$, por lo que no hay corte.

Para dos circunferencias, restar sus ecuaciones elimina $x^2+y^2$ y deja una recta si no tienen el mismo centro. Se corta esa recta con una de ellas y se verifica en ambas. Si son concéntricas, la resta es una igualdad de constantes: coinciden o no tienen puntos comunes.

### Práctica con respuestas razonadas

1. Clasificar $x^2+y^2+2x-4y+5=0$. **Respuesta:** $(x+1)^2+(y-2)^2=0$, un punto $(-1,2)$, no una circunferencia de radio positivo.
2. Circunferencia con centro $(1,-1)$ por $(4,3)$. **Respuesta:** radio $\sqrt{9+16}=5$; ecuación $(x-1)^2+(y+1)^2=25$.
3. Tangente a $x^2+y^2=25$ en $(3,4)$. **Respuesta:** $3(x-3)+4(y-4)=0$, es decir $3x+4y=25$.
4. Cortar $x^2+y^2=5$ y $(x-2)^2+y^2=5$. **Respuesta:** al restar, $x=1$; luego $y=\pm2$. Ambos puntos verifican las dos ecuaciones.


### Hoja de fórmulas del capítulo 12

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Circunferencia | $(x-h)^2+(y-k)^2=r^2$ | $r>0$; si cero, punto; si negativo el cuadrado, conjunto vacío. |
| Centro general | $h=-D/2,\ k=-E/2$ | Ecuación $x^2+y^2+Dx+Ey+F=0$. |
| Radio | $r^2=(D^2+E^2)/4-F$ | Clasificar antes de tomar raíz. |
| Tangente | $(P-C)\cdot(X-P)=0$ | $P$ pertenece a la circunferencia de radio positivo. |

## 13. Elipse: definición, ejes y reconstrucción

![Semiejes y focos de una elipse](/planos-de-estudio/img/algebra/elipse.svg)

### Leer una elipse antes de nombrar todos sus elementos

Empezá con $x^2/9+y^2/4=1$. Si fijamos $y=0$, queda $x^2=9$: los cortes horizontales son $x=\pm3$. Si fijamos $x=0$, obtenemos $y=\pm2$. Esto ya permite dibujar un óvalo de centro cero, más ancho que alto. Los denominadores son cuadrados de longitudes: nueve significa semieje tres, no nueve.

El semieje mayor es tres y el menor dos. Para los focos usamos $c^2=3^2-2^2=5$, así que están en $(\pm\sqrt5,0)$. Se ubican sobre el eje más largo y dentro de la elipse. La suma de distancias a ellos vale seis.

**Tu primer dibujo trasladado:** reemplazá $x$ por $x-1$ e $y$ por $y+2$. El centro se mueve a $(1,-2)$ y las longitudes no cambian. Los vértices horizontales pasan a $(-2,-2)$ y $(4,-2)$.

**Control antes de avanzar:** para $x^2/4+y^2/9=1$, el eje mayor es vertical. No asociamos automáticamente la letra $a$ con $x$; primero vemos cuál semieje es mayor.

### Desarrollo del tema

La elipse es el lugar de puntos cuya suma de distancias a dos focos distintos es constante $2a$, mayor que la distancia focal $2c$. Si el centro es $(h,k)$ y el eje mayor es horizontal, los focos son $(h\pm c,k)$ y la ecuación es

$$
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1,\qquad b^2=a^2-c^2>0.
$$

El semieje mayor $a$ es el más grande, cualquiera sea la letra usada en una ecuación. Sus vértices principales son $(h\pm a,k)$ y los extremos del eje menor $(h,k\pm b)$. Si el eje mayor es vertical se intercambian los papeles de las coordenadas. La excentricidad $e=c/a$ satisface $0<e<1$; el caso $c=0$ es la circunferencia.

### De la definición a la ecuación

Con centro en el origen y focos $(\pm c,0)$, sean $r_-=\sqrt{(x+c)^2+y^2}$ y $r_+=\sqrt{(x-c)^2+y^2}$. La definición es $r_-+r_+=2a$. Además $r_-^2-r_+^2=4cx$, por lo que $(r_--r_+)2a=4cx$. Sumando y restando obtenemos $r_-=a+cx/a$, $r_+=a-cx/a$. Al cuadrar la primera igualdad, cancelar $2cx$ y reagrupar, resulta $(a^2-c^2)x^2/a^2+y^2=a^2-c^2$. Dividir por $b^2=a^2-c^2$ da la ecuación canónica. Recíprocamente, esa ecuación implica $|x|\le a$ y, como $a>c$, ambos valores $a\pm cx/a$ son positivos: recuperamos las distancias sin introducir ramas ajenas.

### Ejemplo completo

En $9(x-1)^2+25(y+2)^2=225$, dividir por $225$ da

$$
\frac{(x-1)^2}{25}+\frac{(y+2)^2}{9}=1.
$$

Centro $(1,-2)$; $a=5$, $b=3$, eje mayor horizontal; $c=\sqrt{25-9}=4$. Los focos son $(-3,-2)$ y $(5,-2)$; vértices $(-4,-2)$ y $(6,-2)$; extremos menores $(1,-5)$ y $(1,1)$; excentricidad $4/5$. En el extremo menor $(1,1)$, ambas distancias focales son cinco y suman diez, tal como exige la definición.

Reconstruir una elipse exige datos suficientes. Centro y focos fijan $c$, pero no $a$: para cada $a>c$ existe una elipse distinta. Un punto adicional puede fijar $a$ a través de la suma de sus distancias a los focos, siempre que esa suma sea mayor que $2c$. Si se dan “dos vértices”, hay que aclarar de qué eje son; no se deben forzar datos incompatibles.

### Práctica con respuestas razonadas

1. Elementos de $x^2/9+y^2/25=1$. **Respuesta:** eje mayor vertical, $a=5,b=3,c=4$; focos $(0,\pm4)$ y vértices principales $(0,\pm5)$.
2. Focos $(\pm3,0)$ y semieje mayor cinco. **Respuesta:** $b^2=25-9=16$; $x^2/25+y^2/16=1$.
3. ¿Focos y centro determinan una única elipse? **Respuesta:** no; para focos $(\pm3,0)$ sirven, por ejemplo, $a=4$ y $a=5$, con distintos valores de $b$.
4. ¿El denominador mayor marca siempre el eje mayor? **Respuesta:** sí en la forma canónica con ambos términos positivos e igualada a uno; primero hay que normalizar la ecuación.


### Hoja de fórmulas del capítulo 13

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Elipse horizontal | $(x-h)^2/a^2+(y-k)^2/b^2=1$ | $a>b>0$; para vertical intercambiar coordenadas. |
| Focos | $c^2=a^2-b^2$ | Eje mayor; focos a distancia $c$ del centro. |
| Excentricidad | $e=c/a$ | $0<e<1$ para focos distintos; cero es circunferencia. |
| Definición | $d(P,F_1)+d(P,F_2)=2a$ | $a>c$; centro y focos solos no fijan $a$. |

## 14. Hipérbola, asíntotas y clasificación de cónicas

![Ramas, vértices y asíntotas de una hipérbola](/planos-de-estudio/img/algebra/hiperbola.svg)

### Reconocer dos ramas y entender las asíntotas

Miremos $x^2/9-y^2/4=1$. Si $y=0$, obtenemos $x=\pm3$: son dos puntos de inicio de las ramas. Si $x=0$, queda $-y^2/4=1$, sin solución real. La curva abre hacia izquierda y derecha; no cruza el eje vertical.

Despejar $y^2$ da $y^2=4(x^2/9-1)$. Para tener puntos reales se requiere $x^2\ge9$, es decir $|x|\ge3$. Al alejarnos mucho del centro, el término constante pesa cada vez menos respecto de $x^2$, y las ramas se aproximan a las rectas $y=\pm2x/3$. Esta es la idea de asíntota; no quiere decir que la curva sea una recta ni que alcance esa recta en un punto lejano.

**Con ayuda:** en $y^2/9-x^2/4=1$, buscá los cortes poniendo una coordenada cero. **Control:** hay cortes $(0,\pm3)$ y no hay cortes con el eje $x$. Las ramas son verticales y las asíntotas $y=\pm3x/2$. El signo positivo decide la apertura; el tamaño de los denominadores no cumple aquí el mismo papel que en la elipse.

### Desarrollo del tema

Una hipérbola es el lugar de puntos para los que el valor absoluto de la diferencia de distancias a dos focos es $2a$, con $0<a<c$. Para centro $(h,k)$ y eje transversal horizontal:

$$
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1,\qquad c^2=a^2+b^2.
$$

Sus focos son $(h\pm c,k)$; vértices $(h\pm a,k)$; excentricidad $c/a>1$. La coordenada del término **positivo** determina la dirección de apertura. Si el positivo es el término en $y$, las ramas son verticales. El número $b$ no representa un vértice real sobre el eje conjugado.

Las asíntotas de la forma horizontal son $y-k=\pm(b/a)(x-h)$. Se obtienen igualando a cero la parte cuadrática tras trasladar el centro. Indican la dirección a la que se aproximan las ramas, pero no pertenecen a la hipérbola: al sustituirlas en la ecuación canónica el lado izquierdo vale cero, no uno.

### Ejemplo y control focal

Para $(x-2)^2/9-(y+1)^2/16=1$, tenemos centro $(2,-1)$, $a=3,b=4,c=5$. Los focos son $(-3,-1)$ y $(7,-1)$; vértices $(-1,-1)$ y $(5,-1)$; asíntotas $y+1=\pm\frac43(x-2)$. En el vértice $(5,-1)$ las distancias focales son ocho y dos; su diferencia es seis, igual a $2a$.

### De la ecuación general a la geometría

Sin término $xy$, agrupamos cuadrados y completamos. Por ejemplo, $4x^2-9y^2-8x-36y-68=0$ se transforma en $4(x-1)^2-9(y+2)^2=36$, luego $(x-1)^2/9-(y+2)^2/4=1$. La hipérbola tiene $a=3,b=2,c=\sqrt{13}$. El término independiente final decide también degeneraciones: $x^2-y^2=0$ es el par de rectas $y=\pm x$, no una hipérbola no degenerada.

Con ambos cuadrados del mismo signo puede haber elipse, punto o conjunto vacío según la constante. Con signos opuestos y constante no nula hay hipérbola. Si aparece $xy$, los ejes pueden estar rotados: la diagonalización ortogonal del capítulo 32 permite eliminar ese término. La clasificación completa incluye parábolas, pero el programa y el TP3 obtenidos se concentran en circunferencia, elipse e hipérbola; aquí no se presenta la parábola como un eje obligatorio de esa edición.

### Práctica con respuestas razonadas

1. Elementos de $y^2/16-x^2/9=1$. **Respuesta:** eje transversal vertical, $a=4,b=3,c=5$; vértices $(0,\pm4)$, focos $(0,\pm5)$ y asíntotas $y=\pm4x/3$.
2. Clasificar $x^2+4y^2+1=0$. **Respuesta:** conjunto vacío real, pues una suma de cuadrados no puede valer $-1$.
3. Clasificar $x^2-y^2=4$. **Respuesta:** dividir por cuatro da hipérbola horizontal con $a=b=2,c=2\sqrt2$.
4. ¿Centro y asíntotas determinan la hipérbola? **Respuesta:** no; fijan el cociente $b/a$, pero no la escala. $x^2-y^2=1$ y $x^2-y^2=4$ comparten asíntotas.


### Hoja de fórmulas del capítulo 14

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Hipérbola horizontal | $(x-h)^2/a^2-(y-k)^2/b^2=1$ | $a,b>0$; término positivo decide apertura. |
| Focos | $c^2=a^2+b^2$ | $c>a$, excentricidad mayor que uno. |
| Asíntotas horizontales | $y-k=\pm(b/a)(x-h)$ | No son parte de la hipérbola no degenerada. |
| Definición | $\lvert d(P,F_1)-d(P,F_2)\rvert=2a$ | $0<a<c$. |

## Hoja de fórmulas de unidad 3: Geometría analítica

Estas relaciones se comprenden y practican en los capítulos 9–14. Revisá las condiciones antes de aplicarlas.

### 9. Vectores y rectas en el plano y el espacio

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección | $\overrightarrow{PQ}=Q-P$ | Dos puntos distintos para definir una recta. |
| Recta | $X=P+td,\ t\in\mathbb R$ | $d\ne0$; componente cero implica coordenada constante. |
| Ángulo | $\cos\theta=(u\cdot v)/(\|u\|\|v\|)$ | Vectores no nulos, producto usual. |
| Normal | $n=u\times v$ | En $\mathbb R^3$; no nula si las direcciones son LI. |

### 10. Planos y sus representaciones

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano paramétrico | $X=P+su+tv$ | $u,v$ independientes. |
| Plano implícito | $n\cdot(X-P)=0$ | Normal $n\ne0$. |
| Corte de planos | Dirección $n_1\times n_2$ | Normales no paralelas; hallar además un punto común. |

### 11. Posiciones relativas y distancias

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Recta–plano | $t(n\cdot d)=c-n\cdot P$ | Corte único si coeficiente no nulo; si cero, comparar residuo. |
| Punto–plano | $d(P,\Pi)=\lvert n\cdot P-c\rvert/\|n\|$ | $\Pi:n\cdot X=c$, normal no nula. |
| Pie en plano | $H=P-(n\cdot P-c)n/\|n\|^2$ | Producto usual. |
| Punto–recta | $d(P,L)=\|(P-Q)\times u\|/\|u\|$ | En espacio; $L=Q+tu$, $u\ne0$. |
| Rectas no paralelas | $d=\lvert(Q-P)\cdot(u\times v)\rvert/\|u\times v\|$ | En $\mathbb R^3$; para paralelas usar punto–recta. |

### 12. Circunferencia y completado de cuadrados

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Circunferencia | $(x-h)^2+(y-k)^2=r^2$ | $r>0$; si cero, punto; si negativo el cuadrado, conjunto vacío. |
| Centro general | $h=-D/2,\ k=-E/2$ | Ecuación $x^2+y^2+Dx+Ey+F=0$. |
| Radio | $r^2=(D^2+E^2)/4-F$ | Clasificar antes de tomar raíz. |
| Tangente | $(P-C)\cdot(X-P)=0$ | $P$ pertenece a la circunferencia de radio positivo. |

### 13. Elipse: definición, ejes y reconstrucción

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Elipse horizontal | $(x-h)^2/a^2+(y-k)^2/b^2=1$ | $a>b>0$; para vertical intercambiar coordenadas. |
| Focos | $c^2=a^2-b^2$ | Eje mayor; focos a distancia $c$ del centro. |
| Excentricidad | $e=c/a$ | $0<e<1$ para focos distintos; cero es circunferencia. |
| Definición | $d(P,F_1)+d(P,F_2)=2a$ | $a>c$; centro y focos solos no fijan $a$. |

### 14. Hipérbola, asíntotas y clasificación de cónicas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Hipérbola horizontal | $(x-h)^2/a^2-(y-k)^2/b^2=1$ | $a,b>0$; término positivo decide apertura. |
| Focos | $c^2=a^2+b^2$ | $c>a$, excentricidad mayor que uno. |
| Asíntotas horizontales | $y-k=\pm(b/a)(x-h)$ | No son parte de la hipérbola no degenerada. |
| Definición | $\lvert d(P,F_1)-d(P,F_2)\rvert=2a$ | $0<a<c$. |

## 15. Grupos y espacios vectoriales

### Qué quiere decir “vector” cuando no hay una flecha

No hace falta imaginar una flecha para empezar. En esta materia, un vector es un objeto que se puede sumar y escalar siguiendo ciertas reglas. Los polinomios $p=1+x$ y $q=2-x$ se suman coeficiente a coeficiente: $p+q=3$. Multiplicar $p$ por dos da $2+2x$. Estas operaciones se parecen a las de parejas numéricas, porque sus coeficientes pueden representarse como $(1,1)$ y $(2,-1)$.

La pregunta por un espacio vectorial es si esas operaciones permanecen dentro del conjunto y obedecen los axiomas. En los polinomios de grado a lo sumo uno, sumar dos no produce grado dos y escalar tampoco; además están el cero y los opuestos. En los de grado exactamente uno, $(1+x)+(1-x)=2$ sale del conjunto. La diferencia de una palabra en la definición cambia la respuesta.

**Práctica acompañada:** ¿está el polinomio cero en $P_1$? **Control:** sí; nuestra convención es grado menor o igual que uno, incluyendo cero. ¿Y en el conjunto de polinomios exactamente de grado uno? No. Este control sencillo debe hacerse antes de intentar demostrar todos los axiomas.

### Desarrollo del tema

Un grupo es un conjunto con una operación interna asociativa, un elemento neutro y un inverso para cada elemento. Es abeliano si además la operación es conmutativa. Por ejemplo, $(\mathbb R,+)$ es un grupo abeliano, con neutro cero e inverso $-x$. Los reales con multiplicación no forman un grupo porque cero no tiene inverso; los reales no nulos sí. Las matrices invertibles de orden fijo forman un grupo multiplicativo, generalmente no abeliano.

Un espacio vectorial $V$ sobre un cuerpo $\mathbb K$ tiene una suma y una multiplicación por escalares. Bajo la suma es un grupo abeliano. Además, para escalares $\alpha,\beta$ y vectores $u,v$:

$$
\alpha(u+v)=\alpha u+\alpha v,\quad(\alpha+\beta)v=\alpha v+\beta v,\quad\alpha(\beta v)=(\alpha\beta)v,\quad1v=v.
$$

Estas reglas no son etiquetas: permiten deducir $0v=0_V$, $\alpha0_V=0_V$ y $(-1)v=-v$. Por ejemplo, $0v=(0+0)v=0v+0v$; sumando el opuesto de $0v$ se concluye $0v=0_V$. El cero escalar y el vector cero son objetos distintos aunque se escriban igual cuando el contexto es claro.

### Ejemplos y dimensión prevista

$\mathbb R^n$, las matrices $M_{m\times n}(\mathbb R)$ y los polinomios $P_n$ con coeficientes reales y grado **menor o igual que $n$** son espacios con operaciones usuales. El polinomio cero está incluido en $P_n$. El conjunto de polinomios de grado exactamente $n$ no es un espacio: no contiene al cero y la suma puede bajar el grado.

$\mathbb C$ es espacio sobre $\mathbb C$ y también sobre $\mathbb R$, pero el cuerpo cambia sus posibilidades de combinación: sobre $\mathbb C$, $i=i\cdot1$; sobre $\mathbb R$, $1$ e $i$ son independientes. La dimensión será uno o dos, respectivamente. Siempre se debe indicar el cuerpo cuando no sea evidente.

### Ejemplo de estructura que falla

En $V=\mathbb R^2$, definamos artificialmente $u\oplus v=u+v+(1,0)$ y conservemos la multiplicación usual por escalares. La suma tiene neutro $(-1,0)$, pero eso no basta para un espacio: $0\cdot v=(0,0)$ no es su neutro aditivo. También falla la distributividad: con $u=v=(0,0)$, $2(u\oplus v)=(2,0)$ mientras que $2u\oplus2v=(1,0)$. Basta exhibir un axioma incumplido. La conclusión no depende de que los elementos parezcan vectores conocidos.

### Práctica con respuestas razonadas

1. ¿Los enteros son un espacio sobre $\mathbb R$ con operaciones usuales? **Respuesta:** no, $\frac12\cdot1$ no es entero: falla el cierre por escalares.
2. ¿Matrices simétricas de orden dos son estables por suma y escalares? **Respuesta:** sí; transponer la suma o el múltiplo conserva la simetría. El criterio de subespacio formalizará esto.
3. ¿Las matrices invertibles forman un espacio vectorial? **Respuesta:** no: no contienen la matriz cero ni son cerradas por suma, pues $I+(-I)=0$.
4. Probar unicidad del neutro aditivo. **Respuesta:** si $e,f$ son neutros, $e=e+f=f$; una identidad elemental sostiene la notación del vector cero.


### Hoja de fórmulas del capítulo 15

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Grupo abeliano | Suma interna, asociativa y conmutativa; neutro y opuestos | Primera estructura de un espacio vectorial. |
| Distributividad | $\alpha(u+v)=\alpha u+\alpha v$ | Junto a las demás reglas de escalares. |
| Polinomios | $P_n=\{p:\deg p\le n\}\cup\{0\}$ | Sobre el cuerpo declarado; no grado exactamente $n$. |

## 16. Subespacios, suma e intersección

### Una prueba de subespacio escrita sin adivinar

Sea $S=\{(x,y):y=2x\}$. Primero escribimos cualquier elemento como $(t,2t)$. **Cero:** con $t=0$ aparece $(0,0)$. **Suma:** si $u=(a,2a)$ y $v=(b,2b)$, entonces $u+v=(a+b,2(a+b))$, que vuelve a tener la forma requerida. **Escalar:** $cu=(ca,2ca)$ también la tiene. Hemos probado el cierre para valores generales, no para tres ejemplos particulares.

Comparemos con $H=\{(x,y):y=2x+1\}$. El cero no pertenece, porque $0\ne1$. Ya alcanza para concluir que no es subespacio. No hace falta completar las otras pruebas para descartar la propiedad. Geométricamente ambas son rectas, pero solo la primera pasa por el origen.

**Con una pista:** analizá $x+y=0$ en $\mathbb R^2$ escribiendo $(t,-t)$. **Control:** el mismo esquema prueba que es subespacio. Para $x+y=2$, el test del cero lo descarta. Una guía de decisión útil es: si creés que sí, demostrá cierre general; si creés que no, buscá un contraejemplo o un axioma que falle.

### Desarrollo del tema

Un subconjunto $S\subseteq V$ es subespacio si con las operaciones heredadas es un espacio vectorial sobre el mismo cuerpo. Basta verificar tres condiciones: contiene a $0_V$; es cerrado por suma; es cerrado por multiplicación escalar. Equivalentemente, es no vacío y $\alpha u+\beta v\in S$ para cualesquiera $u,v\in S$ y escalares. La condición debe probarse para elementos generales: revisar tres ejemplos numéricos no demuestra cierre universal.

Todo conjunto solución de un sistema homogéneo es subespacio, pues $A(\alpha u+\beta v)=\alpha Au+\beta Av=0$. Un plano $x+y+z=0$ lo es; el plano paralelo $x+y+z=1$ no contiene al cero. La unión de dos subespacios no es en general subespacio: los ejes coordenados contienen $(1,0)$ y $(0,1)$, pero su unión no contiene $(1,1)$.

### Intersección y suma

La intersección $S\cap T$ siempre es subespacio: cualquier combinación de dos elementos comunes permanece tanto en $S$ como en $T$. La suma es $S+T=\{s+t:s\in S,t\in T\}$; contiene a ambos y es el menor subespacio que los contiene. No debe confundirse con la unión.

En $\mathbb R^3$, sean $S=\{x+y+z=0\}$ y $T=\{x-y=0\}$. Para la intersección imponemos ambas condiciones: $x=y=t$, $z=-2t$. Por tanto $S\cap T=\operatorname{span}\{(1,1,-2)\}$. Una base de $S$ es $(-1,1,0),(-1,0,1)$ y una de $T$ es $(1,1,0),(0,0,1)$. Sus generadores reunidos abarcan todo $\mathbb R^3$, de modo que $S+T=\mathbb R^3$.

La suma es directa, escrita $S\oplus T$, cuando $S\cap T=\{0\}$. Entonces la descomposición $v=s+t$ es única: si $s+t=s'+t'$, se tiene $s-s'=t'-t\in S\cap T$, luego ambos son cero. Recíprocamente, un elemento común no nulo produce dos descomposiciones del mismo vector.

Por ejemplo, el plano $S$ anterior y $L=\operatorname{span}\{(1,1,0)\}$ tienen intersección cero: $t+t=0$ obliga $t=0$. Su suma es directa y llena $\mathbb R^3$. Para descomponer $(a,b,c)$, el componente sobre $L$ es $t(1,1,0)$ con $t=(a+b+c)/2$, pues al restarlo queda suma de coordenadas cero.

### Práctica con respuestas razonadas

1. ¿$\{(x,y):xy=0\}$ es subespacio? **Respuesta:** no; es la unión de los ejes, y falla el cierre por suma.
2. ¿$\{(x,y):x\ge0\}$ es subespacio? **Respuesta:** no; $(1,0)$ pertenece y su múltiplo por $-1$ no.
3. Hallar intersección de $\operatorname{span}(1,0)$ y $\operatorname{span}(1,1)$. **Respuesta:** solo cero, porque $(a,0)=(b,b)$ exige $a=b=0$.
4. Probar que matrices antisimétricas forman subespacio. **Respuesta:** cero pertenece y $(\alpha A+\beta B)^T=-\alpha A-\beta B$ si $A^T=-A$, $B^T=-B$.


### Hoja de fórmulas del capítulo 16

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Subespacio | $\alpha u+\beta v\in S$ para $u,v\in S$ | Además $S$ no vacío; operaciones heredadas. |
| Suma | $S+T=\{s+t:s\in S,t\in T\}$ | No confundir con unión. |
| Suma directa | $S\cap T=\{0\}$ | Equivale a descomposición única en $S+T$. |

## 17. Combinaciones lineales e independencia

### Qué significa construir un vector con otros

Con $u=(1,0)$ y $v=(0,1)$, la combinación $3u+2v$ produce $(3,2)$. Los números tres y dos indican cuánto aportar de cada dirección. Para construir $(a,b)$ usamos $au+bv$; por eso estas dos direcciones generan el plano completo.

Si solo tenemos $u=(1,0)$ y $w=(2,0)$, cualquier combinación es $(\alpha+2\beta,0)$. Nunca aparece segunda componente distinta de cero: solo generamos el eje horizontal. Además hay redundancia: $2u-w=0$ es una combinación nula con coeficientes no todos cero. Eso es dependencia lineal.

**Intento con ayuda:** con $u=(1,1)$ y $v=(1,-1)$, construir $(4,2)$. Planteá $\alpha+\beta=4$ y $\alpha-\beta=2$. **Control:** sumar da $2\alpha=6$, luego $\alpha=3,\beta=1$. Para saber si la construcción es única, resolvé el mismo sistema con ceros a derecha: solo admite ambos coeficientes cero. Esa es la conexión entre independencia y ausencia de formas distintas de construir lo mismo.

### Desarrollo del tema

Una combinación lineal de $v_1,\ldots,v_k$ es $\alpha_1v_1+\cdots+\alpha_kv_k$. Su conjunto de todas las combinaciones, $\operatorname{span}\{v_1,\ldots,v_k\}$, es un subespacio: contiene al cero y sumar o escalar combinaciones produce nuevas combinaciones. Es el menor subespacio que contiene a los generadores. Para decidir si $w$ pertenece se plantea $\alpha_1v_1+\cdots+\alpha_kv_k=w$, que es un sistema lineal en los coeficientes.

La familia es linealmente independiente (LI) si la única combinación que da cero tiene todos los coeficientes cero. Es dependiente (LD) si existe alguna combinación nula con al menos un coeficiente no nulo. El vector cero dentro de una familia la vuelve dependiente. Dos vectores no nulos son dependientes exactamente cuando son proporcionales; con tres o más no basta revisar pares: $(1,0),(0,1),(1,1)$ son dependientes aunque ninguno sea múltiplo de otro.

### Ejemplo con pertenencia y dependencia

Sean $v_1=(1,0,1)$, $v_2=(0,1,1)$ y $v_3=(1,1,2)$. Como $v_3=v_1+v_2$, la familia de tres es LD y el tercer vector no añade nada al generado. Para $w=(a,b,c)$, la combinación $sv_1+tv_2=(s,t,s+t)$ muestra que $w$ pertenece exactamente cuando $c=a+b$. Si pertenece, sus coeficientes respecto de los dos primeros son únicos: $s=a,t=b$. Respecto de los tres, dejan de ser únicos, pues se puede sumar cualquier múltiplo de la relación $v_1+v_2-v_3=0$.

El criterio matricial coloca los vectores como columnas de $A$. Entonces la independencia equivale a que $A\alpha=0$ tenga solo la solución trivial, o a que haya pivote en cada columna. Para $n$ vectores de $\mathbb R^n$ equivale a determinante no nulo. Si la matriz no es cuadrada, se usa rango, no un determinante inexistente.

### Familias con parámetros

Para $(1,1)$ y $(1,k)$, la matriz de columnas tiene determinante $k-1$. Son LI si $k\ne1$ y LD si $k=1$. La condición tiene interpretación: en el caso singular los dos vectores coinciden. En espacios de polinomios se igualan coeficientes: $a(1+x)+b(1-x)=0$ implica $a+b=0$ y $a-b=0$, luego $a=b=0$. Evaluar en unos pocos puntos puede servir, pero hay que justificar que son suficientes para el grado considerado.

### Práctica con respuestas razonadas

1. ¿$(1,0,0),(0,1,0),(1,1,0)$ generan $\mathbb R^3$? **Respuesta:** no; toda combinación tiene tercera coordenada cero. Su generado es un plano de dimensión dos.
2. Probar LI de $1,x,x^2$ en $P_2$. **Respuesta:** un polinomio idénticamente nulo tiene todos sus coeficientes nulos; no se trata de que valga cero en un solo punto.
3. ¿Una subfamilia de una familia LI es LI? **Respuesta:** sí; una relación no trivial en la subfamilia se extendería con ceros a la familia y la contradiría.
4. ¿Añadir un vector del generado cambia el subespacio? **Respuesta:** no; sus combinaciones ya estaban disponibles. Sí vuelve dependiente una familia inicialmente LI.


### Hoja de fórmulas del capítulo 17

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Generado | $\operatorname{span}\{v_i\}=\{\sum_i\alpha_iv_i\}$ | Todas las combinaciones finitas. |
| Independencia | $\sum_i\alpha_iv_i=0\Rightarrow\alpha_i=0$ para todo $i$ | No basta independencia por pares. |
| Criterio matricial | $\ker A=\{0\}$ | Vectores como columnas; pivote en cada columna. |

## 18. Bases, dimensión y extracción de generadores

### De generadores redundantes a una base

Imaginá tres instrucciones de movimiento en el plano: $u=(1,0)$, $v=(0,1)$ y $w=(1,1)$. Las tres permiten llegar a cualquier punto, pero la tercera no es necesaria: $w=u+v$. Una base conserva direcciones suficientes y elimina redundancias. Aquí $(u,v)$ es base, mientras que $(u,v,w)$ genera pero no es base.

Para justificar las dos condiciones por separado: $(a,b)=au+bv$ prueba generación; si $\alpha u+\beta v=0$, la primera coordenada obliga $\alpha=0$ y la segunda $\beta=0$, lo que prueba independencia. Una de estas pruebas no sustituye a la otra cuando todavía no conocemos la dimensión.

**Con ayuda:** ¿$(u,w)$ también es base? **Control:** sí. Dado $(a,b)$, escribimos $(a-b)u+bw$. La relación $\alpha u+\beta w=0$ da $\beta=0$ por la segunda coordenada y luego $\alpha=0$. Por eso las bases no son únicas, aunque todas tengan el mismo número de elementos. La dimensión cuenta direcciones independientes necesarias, no la cantidad de vectores que alguien haya listado.

### Desarrollo del tema

Una base es una familia ordenada de vectores que genera todo el espacio y es LI. Las dos condiciones garantizan que cada vector se escribe de manera **existente y única** como combinación de la base. Generar asegura existencia; si hubiera dos expresiones, al restarlas aparecería una relación nula, y la independencia asegura que los coeficientes coinciden.

La dimensión de un espacio finitamente generado es la cantidad de vectores de cualquiera de sus bases. El hecho de que todas tengan igual cantidad se fundamenta en el lema de intercambio: una familia LI no puede tener más elementos que una familia generadora. Aplicándolo en ambos sentidos a dos bases se obtiene igualdad. En un espacio de dimensión $n$, $n$ vectores LI ya forman base y $n$ generadores también. Menos de $n$ no generan; más de $n$ son dependientes.

Las bases canónicas son $e_1,\ldots,e_n$ para $\mathbb R^n$, los monomios $1,x,\ldots,x^n$ para $P_n$ y las matrices $E_{ij}$ con un único uno para $M_{m\times n}$. Por ello sus dimensiones son $n$, $n+1$ y $mn$, respectivamente. El subespacio cero tiene dimensión cero y base vacía, no la familia formada por el vector cero.

### Extraer una base sin cambiar el espacio

Colocamos generadores como columnas y reducimos por filas. Las posiciones de columnas pivote indican qué **columnas de la matriz original** conservar. Las operaciones por filas preservan las relaciones entre columnas, pero pueden mover el subespacio que esas columnas ocupan dentro del espacio ambiente.

Para $v_1=(1,0,1)$, $v_2=(0,1,1)$, $v_3=(1,1,2)$, la reducida de la matriz de columnas es

$$
\begin{pmatrix}1&0&1\\0&1&1\\0&0&0\end{pmatrix}.
$$

Las columnas pivote son primera y segunda: una base del generado es $v_1,v_2$. Tomar en cambio $(1,0,0),(0,1,0)$ de la reducida daría otro plano y sería un error. Para el **espacio fila**, las filas no nulas de una forma escalonada sí son una base, porque las operaciones reemplazan filas por combinaciones reversibles de las originales.

Si se pide una base que contenga ciertos vectores, primero comprobamos que esos vectores sean LI. Después añadimos candidatos del espacio y conservamos solo los que aumenten el rango. Una familia dependiente no puede quedar contenida en una base.

### Práctica con respuestas razonadas

1. Base y dimensión de matrices simétricas $2\times2$. **Respuesta:** $E_{11},E_{12}+E_{21},E_{22}$; dimensión tres, pues $\begin{pmatrix}a&b\\b&c\end{pmatrix}$ tiene tres parámetros independientes.
2. Completar $(1,1,0),(0,1,1)$ a una base de $\mathbb R^3$. **Respuesta:** añadir $(0,0,1)$; el determinante de las tres columnas es uno.
3. Si $S,T$ son subespacios finitos, ¿cuánto vale $\dim(S+T)$? **Respuesta:** $\dim S+\dim T-\dim(S\cap T)$. Los vectores de una base de la intersección se contaban dos veces; se completa esa base dentro de ambos subespacios.
4. Aplicar esa identidad a dos planos distintos por el origen de $\mathbb R^3$. **Respuesta:** su intersección es una recta y la suma tiene dimensión $2+2-1=3$.


### Hoja de fórmulas del capítulo 18

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Base | Genera y es LI | Existencia y unicidad de coordenadas. |
| Dimensiones | $\dim P_n=n+1,\quad\dim M_{m\times n}=mn$ | Operaciones usuales y cuerpo fijado. |
| Suma de subespacios | $\dim(S+T)=\dim S+\dim T-\dim(S\cap T)$ | Dimensiones finitas. |
| Extracción | Columnas pivote de la matriz original | Las filas no nulas escalonadas sirven para el espacio fila. |

## 19. Coordenadas y cambio de base

### El mismo vector con distintas instrucciones

En la base habitual $E=((1,0),(0,1))$, la pareja $(4,2)$ ya nos dice cuatro pasos horizontales y dos verticales. Si cambiamos las direcciones de referencia a $B=((1,1),(1,-1))$, los números que indican cuánto caminar cambian.

Buscamos $\alpha(1,1)+\beta(1,-1)=(4,2)$. La primera coordenada da $\alpha+\beta=4$ y la segunda $\alpha-\beta=2$. Sumando, $\alpha=3$; reemplazando, $\beta=1$. Entonces $[v]_B=(3,1)^T$. Esto no dice que $v$ se haya movido a $(3,1)$: dice cómo construir el mismo $(4,2)$ con otras direcciones.

Para comprobarlo, reconstruí: tres veces $(1,1)$ más una vez $(1,-1)$ es $(3,3)+(1,-1)=(4,2)$. Esta reconstrucción debe acompañar tus primeras cuentas de coordenadas.

**Probá con la misma base:** encontrar las coordenadas de $(2,0)$. **Control:** $(1,1)^T$, porque la suma de los dos vectores de base es $(2,0)$. Escribir el subíndice $B$ evita confundir esa columna de instrucciones con las coordenadas canónicas del punto.

### Desarrollo del tema

Si $B=(b_1,\ldots,b_n)$ es una base ordenada, las coordenadas $[v]_B=(\alpha_1,\ldots,\alpha_n)^T$ satisfacen $v=\sum_i\alpha_ib_i$. El vector geométrico y su columna de coordenadas no son lo mismo: las coordenadas cambian al cambiar la base. También importa el orden; intercambiar $b_1$ y $b_2$ intercambia las primeras coordenadas.

En $\mathbb R^n$, escribimos $S_B=(b_1\ \cdots\ b_n)$. Entonces $v=S_B[v]_B$ y $[v]_B=S_B^{-1}v$. La inversa existe precisamente porque las columnas son una base. Para convertir de $B$ a $C$:

$$
[v]_C=P_{C\leftarrow B}[v]_B,\qquad P_{C\leftarrow B}=S_C^{-1}S_B.
$$

La columna $j$ de esta matriz es $[b_j]_C$. La flecha indica destino y origen; evita memorizar nombres de “matriz de paso” cuya convención puede variar entre textos. La inversa es $P_{B\leftarrow C}$ y las conversiones se componen siguiendo las flechas.

### Ejemplo resuelto en ambas direcciones

Sean $B=((1,1),(1,-1))$, $C=((1,0),(1,1))$ y $v=(4,2)$. Resolver $v=\alpha(1,1)+\beta(1,-1)$ da $\alpha=3,\beta=1$, por lo que $[v]_B=(3,1)^T$. En $C$, $v=\gamma(1,0)+\delta(1,1)$ implica $\delta=2,\gamma=2$: $[v]_C=(2,2)^T$.

Las matrices son

$$
S_B=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\quad S_C=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad P_{C\leftarrow B}=\begin{pmatrix}0&2\\1&-1\end{pmatrix}.
$$

Multiplicar esta última por $(3,1)^T$ da $(2,2)^T$, como debía. Una comprobación independiente es reconstruir $v$ en ambas bases. No alcanza con obtener una matriz invertible: podría estar convirtiendo en el sentido opuesto.

### Polinomios y matrices como vectores

En $P_2$, fijemos $B=(1,1+x,x^2)$. Para $p=2+3x-x^2$, igualar coeficientes en $a+b(1+x)+cx^2$ da $b=3,c=-1,a=-1$. Entonces $[p]_B=(-1,3,-1)^T$. Aunque $p$ no sea una flecha, el procedimiento es el mismo. Para matrices se igualan entradas, o se usan coordenadas respecto de una base $E_{ij}$ con orden declarado.

### Práctica con respuestas razonadas

1. Con la base $B$ del ejemplo, hallar $[(1,0)]_B$. **Respuesta:** $(1/2,1/2)^T$, pues la semisuma de los vectores de $B$ es $(1,0)$.
2. ¿La matriz de cambio de una base a sí misma es siempre $I$? **Respuesta:** sí, porque $[b_j]_B=e_j$.
3. Si $[v]_B=(0,0)$, ¿puede $v$ ser no nulo? **Respuesta:** no; la combinación tiene coeficientes cero, en cualquier base.
4. Convertir de $B$ a $D$ pasando por $C$. **Respuesta:** $P_{D\leftarrow B}=P_{D\leftarrow C}P_{C\leftarrow B}$. El orden se comprueba aplicando ambas matrices a $[v]_B$.


### Hoja de fórmulas del capítulo 19

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Reconstrucción | $v=S_B[v]_B$ | Columnas de $S_B$ son los vectores de $B$ en la base canónica. |
| Cambio | $[v]_C=P_{C\leftarrow B}[v]_B$ | La columna $j$ es $[b_j]_C$. |
| Matriz de cambio | $P_{C\leftarrow B}=S_C^{-1}S_B$ | Bases del mismo espacio y misma representación de referencia. |
| Inversión | $P_{B\leftarrow C}=P_{C\leftarrow B}^{-1}$ | Cambio en sentido contrario. |

## 20. Rango, nulidad y espacios de una matriz

### Reconocer qué pregunta responde cada espacio

Usaremos $A=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}$. La entrada tiene tres números y la salida dos: $A(x,y,z)^T=(x+z,y+z)^T$. El núcleo pregunta qué entradas dan salida cero. De $x+z=0,y+z=0$ elegimos $z=t$ y obtenemos $t(-1,-1,1)$. Esa familia vive en $\mathbb R^3$.

La imagen pregunta qué salidas pueden lograrse. Para una salida deseada $(a,b)$, elegí la entrada $(a,b,0)$. Funciona para cualquier pareja; por tanto la imagen es $\mathbb R^2$. La imagen no se calcula igualando la salida a cero: esa operación respondía a otra pregunta.

Hay dos direcciones independientes de salida, así que el rango es dos. Hay una dirección de entrada que se pierde, así que la nulidad es uno. La suma $2+1=3$ cuenta las tres dimensiones del **dominio**.

**Control propio:** ¿la entrada $(0,0,1)$ está en el núcleo? **Respuesta:** no; produce $(1,1)$. Que la tercera variable se pueda elegir libremente en un sistema no significa que el tercer vector canónico pertenezca al núcleo; las otras coordenadas deben compensarla.

### Desarrollo del tema

Para $A\in M_{m\times n}$, el espacio columna $\operatorname{Col}A$ es el generado por sus columnas en $\mathbb R^m$; el espacio fila está en $\mathbb R^n$; el núcleo o espacio nulo es $\ker A=\{x\in\mathbb R^n:Ax=0\}$. El rango es la dimensión del espacio columna y coincide con la del espacio fila, pues ambas cuentan pivotes. La nulidad es la dimensión del núcleo y vale $n-r$.

La identidad rango–nulidad para matrices es $\operatorname{rg}A+\dim\ker A=n$. El número relevante es el de columnas, es decir, las coordenadas de entrada. No debe reemplazarse por el número de filas cuando la matriz es rectangular. El sistema $Ax=b$ es compatible exactamente cuando $b\in\operatorname{Col}A$; esto conecta la clasificación de Gauss con el lenguaje de subespacios.

### Ejemplo con tres espacios distintos

Sea

$$
A=\begin{pmatrix}1&2&1\\0&1&1\\1&3&2\end{pmatrix}.
$$

La tercera fila es la suma de las primeras. Una forma reducida es $\begin{pmatrix}1&0&-1\\0&1&1\\0&0&0\end{pmatrix}$. Hay dos pivotes y rango dos. Las columnas originales primera y segunda forman una base de la imagen: $(1,0,1),(2,1,3)$. Las primeras dos filas de la reducida forman una base del espacio fila: $(1,0,-1),(0,1,1)$.

Para el núcleo, $x-z=0$, $y+z=0$ dan $\ker A=\operatorname{span}\{(1,-1,1)\}$. Se verifica directamente $A(1,-1,1)^T=0$. Para un término independiente $b=(b_1,b_2,b_3)$, la relación entre filas exige $b_3=b_1+b_2$; esta condición también describe el plano columna. Si se cumple, hay un parámetro libre.

### Teoremas de invertibilidad reunidos

Para una matriz cuadrada de orden $n$, son equivalentes: determinante no nulo; rango $n$; núcleo cero; columnas LI; columnas generadoras de $\mathbb R^n$; inversa existente; solución única de $Ax=b$ para todo $b$. Cada equivalencia expresa que no se pierde información ni se deja fuera ninguna dirección de salida. En matrices rectangulares se separan estas propiedades: una aplicación de $\mathbb R^2$ a $\mathbb R^3$ puede ser inyectiva y no llenar todo el destino.

### Práctica con respuestas razonadas

1. Una matriz $4\times6$ tiene rango tres. **Respuesta:** su nulidad es $6-3=3$; su imagen es un subespacio tridimensional de $\mathbb R^4$.
2. ¿$\operatorname{rg}A=\operatorname{rg}A^T$? **Respuesta:** sí; transponer intercambia espacio fila y columna, cuyas dimensiones coinciden.
3. Para la matriz del ejemplo, decidir si $(1,2,4)$ está en la imagen. **Respuesta:** no, porque $4\ne1+2$; el sistema correspondiente es incompatible.
4. ¿Una matriz $2\times3$ puede tener núcleo cero? **Respuesta:** no; su rango es a lo sumo dos y su nulidad al menos uno.


### Hoja de fórmulas del capítulo 20

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Rango–nulidad | $\operatorname{rg}A+\dim\ker A=n$ | $n$ número de columnas. |
| Imagen | $\operatorname{Col}A=\operatorname{span}\{\text{columnas de }A\}$ | Subespacio del espacio de salida $\mathbb R^m$. |
| Compatibilidad geométrica | $Ax=b$ compatible $\iff b\in\operatorname{Col}A$ | La solución, si existe, es particular más núcleo. |

## 21. Producto interior, normas y ángulos

### Calcular primero el producto usual

Con $u=(1,2)$ y $v=(3,-1)$, multiplicamos componentes correspondientes y sumamos: $u\cdot v=1\cdot3+2\cdot(-1)=1$. Es un número, no otro vector. Para la norma de $u$, hacemos el producto consigo mismo: $u\cdot u=1+4=5$, y después raíz, $\|u\|=\sqrt5$. No confundas norma con norma cuadrada.

Si $w=(2,-1)$, $u\cdot w=2-2=0$. Esto indica perpendicularidad en el producto usual. Dibujar las dos flechas desde el origen ayuda a relacionar la cuenta con el ángulo recto. El producto cero puede salir de una cancelación entre términos positivos y negativos; no exige que cada producto de componentes sea cero.

**Variación con ayuda:** si cambiamos el producto a $\langle u,v\rangle=2u_1v_1+u_2v_2$, los mismos $u,w$ dan $4-2=2$. Ya no son ortogonales para esa nueva medición. Antes de aplicar fórmulas de norma o proyección, identificá qué producto se ha declarado. En polinomios, una integral o una suma de evaluaciones puede ocupar ese papel.

### Desarrollo del tema

Un producto interior real asigna a $u,v$ un número $\langle u,v\rangle$ y satisface simetría, linealidad en cada variable y positividad definida: $\langle v,v\rangle\ge0$, con igualdad solo si $v=0$. Estas condiciones permiten definir $\|v\|=\sqrt{\langle v,v\rangle}$ y $d(u,v)=\|u-v\|$. La ortogonalidad es $\langle u,v\rangle=0$; depende del producto elegido, no únicamente de las coordenadas de los vectores.

El producto usual en $\mathbb R^n$ es $u^Tv$. Otro ejemplo es $u^TGv$ con $G$ simétrica definida positiva. Para $G=\operatorname{diag}(2,1)$ se obtiene $2u_1v_1+u_2v_2$. La forma $u_1v_1-u_2v_2$ es simétrica y bilineal, pero no es producto interior: sobre $(0,1)$ da $-1$.

### Cauchy–Schwarz y desigualdad triangular

Si $v\ne0$, la positividad de $\|u-tv\|^2$ para $t=\langle u,v\rangle/\|v\|^2$ da

$$
0\le\|u\|^2-\frac{\langle u,v\rangle^2}{\|v\|^2},
$$

de donde $|\langle u,v\rangle|\le\|u\|\|v\|$. Si $v=0$, la desigualdad también vale. La igualdad ocurre cuando los vectores son dependientes. Luego $\|u+v\|^2=\|u\|^2+2\langle u,v\rangle+\|v\|^2\le(\|u\|+\|v\|)^2$, lo que prueba la desigualdad triangular. Cauchy–Schwarz garantiza que el cociente usado para definir $\cos\theta$ cae entre $-1$ y uno.

### Productos en polinomios y matrices

En $P_2$, $\langle p,q\rangle=\int_{-1}^{1}p(x)q(x)\,dx$ es producto interior. La positividad definida se justifica porque un polinomio no nulo es continuo y su cuadrado es estrictamente positivo en algún intervalo. También sirve la suma de evaluaciones en tres puntos distintos para $P_2$: un polinomio de grado a lo sumo dos que se anula en tres puntos distintos debe ser cero. Con solo dos puntos, esa afirmación falla.

En matrices reales, $\langle A,B\rangle=\operatorname{tr}(A^TB)=\sum_{ij}a_{ij}b_{ij}$ es el producto de Frobenius. En $\mathbb C$ considerado como espacio **real**, $\operatorname{Re}(z\overline w)$ es producto interior. Para tratar $\mathbb C$ como espacio complejo se requiere la versión hermitiana, con conjugación y sesquilinealidad: no debe exigírsele bilinealidad compleja a la fórmula real.

### Práctica con respuestas razonadas

1. Con $G=\operatorname{diag}(2,1)$, hallar norma de $(1,2)$. **Respuesta:** $\sqrt{2+4}=\sqrt6$, no $\sqrt5$.
2. ¿$p(0)q(0)+p(1)q(1)$ es producto interior en $P_2$? **Respuesta:** no: $p=x(x-1)$ no es cero y tiene “norma” cuadrada cero.
3. Probar producto interior por evaluaciones en $P_3$ usando $0,1,2,3$. **Respuesta:** simetría y bilinealidad son inmediatas; si la suma de cuatro cuadrados es cero, las cuatro evaluaciones son cero y el polinomio de grado a lo sumo tres es nulo.
4. Calcular $\langle1,x\rangle$ y $\|x\|^2$ con la integral anterior. **Respuesta:** cero y $2/3$, por integrar una función impar y $x^2$, respectivamente.


### Hoja de fórmulas del capítulo 21

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Norma inducida | $\|v\|=\sqrt{\langle v,v\rangle}$ | Producto interior declarado. |
| Cauchy–Schwarz | $\lvert\langle u,v\rangle\rvert\le\|u\|\|v\|$ | Igualdad si los vectores son dependientes. |
| Distancia | $d(u,v)=\|u-v\|$ | Depende del producto interior. |
| Producto ponderado | $\langle u,v\rangle=u^TGv$ | $G$ real simétrica definida positiva. |

## 22. Ortogonalidad, proyección y complemento

![Proyección y residuo perpendicular sobre una dirección](/planos-de-estudio/img/algebra/proyeccion.svg)

### Una proyección con una imagen sencilla

Si tenés $v=(3,2)$ y querés su parte horizontal, el resultado es $(3,0)$ y sobra $(0,2)$. Ese sobrante es vertical, es decir, perpendicular al eje horizontal. Una proyección sobre una recta inclinada hace lo mismo, usando otra dirección.

Para $S=\operatorname{span}(1,1)$, buscamos un punto $p=(c,c)$ de esa recta. El residuo es $v-p=(3-c,2-c)$. Exigimos que sea perpendicular a la dirección $(1,1)$: $(3-c)+(2-c)=0$. Así, $5-2c=0$, $c=5/2$ y $p=(5/2,5/2)$. El residuo $(1/2,-1/2)$ tiene producto cero con $(1,1)$.

No elegimos el coeficiente por parecido visual: resolvimos la condición que caracteriza el pie perpendicular. La fórmula general que aparece después abrevia exactamente esa ecuación.

**Con una pista:** proyectá $(2,0)$ sobre la misma recta. **Control:** $p=(1,1)$, residuo $(1,-1)$. Para comprobar distancia mínima, cualquier otro punto de la recta añade un desplazamiento perpendicular al residuo y, por Pitágoras, aumenta su norma.

### Desarrollo del tema

Una familia es ortogonal si sus elementos son perpendiculares dos a dos; es ortonormal si además cada uno tiene norma uno. Una familia ortogonal de vectores **no nulos** es LI: si $\sum_i\alpha_iu_i=0$, tomar producto con $u_j$ deja $\alpha_j\|u_j\|^2=0$, luego $\alpha_j=0$. La hipótesis no nulos es necesaria. Normalizar una familia arbitraria no la vuelve ortogonal; solo cambia longitudes.

### Proyectar sobre una dirección o un subespacio

Para $u\ne0$, buscamos $p=cu$ tal que $v-p$ sea perpendicular a $u$. La ecuación $\langle v-cu,u\rangle=0$ da $c=\langle v,u\rangle/\|u\|^2$. Si $u_1,\ldots,u_k$ es una base ortogonal de $S$:

$$
\operatorname{proj}_S v=\sum_{i=1}^k\frac{\langle v,u_i\rangle}{\|u_i\|^2}u_i.
$$

Con base ortonormal los denominadores valen uno. No se debe usar esta suma sin denominadores para una base cualquiera, ni la fórmula ortogonal con una base no ortogonal.

Por ejemplo, para $v=(3,1)$ y $S=\operatorname{span}(1,1)$, la proyección es $\frac{4}{2}(1,1)=(2,2)$. El residuo $(1,-1)$ es perpendicular a $S$, y la distancia es $\sqrt2$. Para cualquier otro $s\in S$, el teorema de Pitágoras da $\|v-s\|^2=\|v-p\|^2+\|p-s\|^2\ge\|v-p\|^2$. Por eso la proyección es el único punto más próximo.

### Complemento ortogonal

$S^\perp=\{v:\langle v,s\rangle=0\text{ para todo }s\in S\}$ es subespacio. Basta imponer la ortogonalidad frente a una base de $S$, porque el producto es lineal. En dimensión finita, $V=S\oplus S^\perp$ y $\dim S+\dim S^\perp=\dim V$. La intersección es cero: un vector común es perpendicular a sí mismo y, por positividad, debe ser cero.

Para el plano $S=\{x+y+z=0\}$ con producto usual, $S^\perp=\operatorname{span}(1,1,1)$. Entonces la proyección de $v=(1,2,3)$ sobre $S^\perp$ es $(2,2,2)$ y sobre $S$ es $(-1,0,1)$. Ambos componentes suman $v$ y son perpendiculares.

Si $U$ tiene columnas independientes que generan $S$ en el producto usual, una fórmula alternativa es $p=U(U^TU)^{-1}U^Tv$. Se obtiene imponiendo $U^T(v-Uc)=0$. La matriz $U^TU$ es invertible porque $c^TU^TUc=\|Uc\|^2>0$ para $c\ne0$. Esta derivación aclara sus hipótesis y la vincula con sistemas de ecuaciones.

### Práctica con respuestas razonadas

1. Proyectar $(2,3)$ sobre el eje $x$. **Respuesta:** $(2,0)$; residuo $(0,3)$ y distancia tres.
2. Hallar $S^\perp$ para $S=\operatorname{span}(1,2,0)$ en $\mathbb R^3$. **Respuesta:** $x+2y=0$, con base $(-2,1,0),(0,0,1)$.
3. ¿Un vector nulo puede normalizarse? **Respuesta:** no; se dividiría por norma cero. Tampoco pertenece a una base ortonormal.
4. Si $v\in S$, hallar su proyección. **Respuesta:** es $v$ y el residuo es cero; la distancia mínima al subespacio es cero.


### Hoja de fórmulas del capítulo 22

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Proyección sobre vector | $p=\langle v,u\rangle u/\|u\|^2$ | $u\ne0$. |
| Proyección sobre subespacio | $p=\sum_i\langle v,q_i\rangle q_i$ | Los $q_i$ forman base ortonormal del subespacio. |
| Complemento | $V=S\oplus S^\perp$ | Producto interior, dimensión finita. |
| Distancia mínima | $d(v,S)=\|v-\operatorname{proj}_S v\|$ | La proyección es el único punto más próximo. |

## 23. Gram–Schmidt: construir una base ortonormal

**Punto de partida.** Ya sabemos sumar vectores, multiplicarlos por números y calcular un producto interior. Ahora tenemos una base cuyos vectores no son perpendiculares y queremos otra que genere el mismo espacio, pero facilite calcular proyecciones y coordenadas. No cambiaremos el espacio: cambiaremos sus direcciones de referencia.

### Una primera construcción con todos los pasos

Tomemos $v_1=(1,1,0)$ y $v_2=(1,0,1)$ en el producto usual. No son ortogonales, porque $v_1\cdot v_2=1$. El primer vector se conserva: $u_1=v_1$. Para corregir el segundo, le quitamos exactamente la parte que apunta en dirección de $u_1$.

1. Calculamos el numerador de la proyección: $v_2\cdot u_1=1\cdot1+0\cdot1+1\cdot0=1$.
2. Calculamos su denominador: $u_1\cdot u_1=1+1+0=2$.
3. La parte paralela es $\frac12u_1=(1/2,1/2,0)$.
4. Restamos esa parte: $u_2=v_2-\frac12u_1=(1/2,-1/2,1)$.
5. Controlamos la finalidad del paso: $u_1\cdot u_2=1/2-1/2+0=0$.

Ahora la familia es ortogonal, pero no ortonormal. Las normas son $\sqrt2$ y $\sqrt{3/2}$. Al dividir cada vector por su propia norma obtenemos

$$
q_1=\frac{(1,1,0)}{\sqrt2},\qquad q_2=\frac{(1,-1,2)}{\sqrt6}.
$$

Para escribir $q_2$ con enteros en el numerador multiplicamos previamente $u_2$ por dos; esto no cambia su dirección, y la normalización compensa el cambio de longitud.

### Añadir un tercer vector

Con $v_3=(0,1,1)$, hay que quitar las componentes en **las dos direcciones ya construidas**. Usamos los $u_i$ ortogonales:

$$
u_3=v_3-\frac{v_3\cdot u_1}{u_1\cdot u_1}u_1-\frac{v_3\cdot u_2}{u_2\cdot u_2}u_2.
$$

Los coeficientes son $1/2$ y $1/3$, respectivamente. Sustituir da $u_3=(-2/3,2/3,2/3)$, y al normalizar resulta $q_3=(-1,1,1)/\sqrt3$. Los tres productos cruzados son cero y cada norma es uno. Como partimos de tres vectores LI de $\mathbb R^3$, construimos una base ortonormal de todo el espacio.

El procedimiento general es $u_k=v_k-\sum_{j<k}\langle v_k,u_j\rangle u_j/\|u_j\|^2$. Si aparece un vector cero, el vector de entrada era combinación de los anteriores: no se puede normalizar, pero se puede omitir para extraer una base. Para una familia LI esto no ocurre. Cada $u_k$ es combinación de los primeros $v_i$, y cada $v_k$ se recupera sumando $u_k$ y proyecciones anteriores; esa doble inclusión prueba que el generado se conserva.

### El mismo método en polinomios

Con producto $\int_{-1}^1pq$ y entrada $1,x,x^2$, conservamos $u_1=1$. Como $\int_{-1}^1x=0$, $u_2=x$. Para $x^2$, su proyección sobre $1$ tiene coeficiente $(2/3)/2=1/3$; sobre $x$ es cero porque $x^3$ es impar. Queda $u_3=x^2-1/3$. Sus normas cuadradas son $2,2/3,8/45$. Dividir por sus raíces da una base ortonormal de $P_2$. Los vectores aquí son polinomios y el producto no es el de sus coeficientes.

### Práctica gradual con respuestas

1. **Con ayuda:** comenzar con $(1,0),(1,1)$. ¿Qué se resta al segundo? **Respuesta:** la proyección $(1,0)$; queda $(0,1)$. Ya tienen norma uno.
2. **Con una pista:** entrada $(1,1),(2,2)$. Buscar el segundo residuo. **Respuesta:** la proyección es el segundo vector completo; el residuo cero detecta dependencia.
3. **Autónomo:** normalizar $(1,-1,2)$. **Respuesta:** su norma es $\sqrt6$; dividir por ella conserva su dirección y produce norma uno.
4. **Explicar:** ¿por qué no restar proyecciones sobre los $v_i$ originales? **Respuesta:** si no son ortogonales, una corrección puede volver a introducir componente en una dirección ya eliminada; la fórmula usa las direcciones ortogonales construidas.


### Hoja de fórmulas del capítulo 23

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Gram–Schmidt | $u_k=v_k-\sum_{j<k}\langle v_k,u_j\rangle u_j/\|u_j\|^2$ | Entrada LI; usar producto y vectores ortogonales construidos. |
| Normalización | $q_k=u_k/\|u_k\|$ | Solo residuos no nulos. |
| Control | $\langle q_i,q_j\rangle=\delta_{ij}$ | Comprobar generado y ortonormalidad. |

## 24. Integración de espacios: de ecuaciones a una base útil

Este capítulo muestra un recorrido completo. La dificultad habitual es decidir por dónde empezar cuando un ejercicio pide varias cosas juntas. Separaremos tres preguntas: **qué vectores pertenecen**, **con qué pocos vectores se construyen todos** y **qué base hace cómodas las cuentas**.

Consideremos $S=\{(x,y,z)\in\mathbb R^3:x+y+z=0\}$. Antes de buscar una base, leemos la condición: la suma de las tres componentes debe ser cero. Por ejemplo, $(1,-1,0)$ pertenece y $(1,1,1)$ no. La ecuación es homogénea, de modo que $S$ es subespacio; no es necesario repetir todos los axiomas de un espacio desde cero.

### Paso 1: parametrizar sin perder soluciones

La ecuación tiene tres incógnitas y permite despejar una. Elegimos $y=s,z=t$, con $s,t$ libres. Entonces $x=-s-t$, y

$$
(-s-t,s,t)=s(-1,1,0)+t(-1,0,1).
$$

La igualdad muestra dos cosas distintas: cada vector de $S$ es combinación de esos dos y cada combinación satisface la ecuación. Por eso los vectores generan **exactamente** $S$, no solo una parte. Para independencia, si $a(-1,1,0)+b(-1,0,1)=0$, la segunda coordenada da $a=0$ y la tercera $b=0$. Tenemos una base y $\dim S=2$.

### Paso 2: ortogonalizar la base

Tomamos $u_1=(-1,1,0)$ y quitamos de $v_2=(-1,0,1)$ su proyección sobre $u_1$. El producto es uno y la norma cuadrada dos, de modo que $u_2=(-1/2,-1/2,1)$. Podemos usar el múltiplo $w_2=(-1,-1,2)$ para evitar fracciones. Su producto con $u_1$ es $1-1=0$ y ambos siguen en $S$. Normalizando:

$$
q_1=\frac{(-1,1,0)}{\sqrt2},\qquad q_2=\frac{(-1,-1,2)}{\sqrt6}.
$$

La base ortonormal no se adivina: se obtiene a partir de la parametrización y una corrección geométrica.

### Paso 3: proyectar un vector que no pertenece

Sea $v=(1,2,3)$. Como la suma vale seis, $v\notin S$. Calculamos $v\cdot q_1=1/\sqrt2$ y $v\cdot q_2=3/\sqrt6$. Entonces

$$
p=\frac1{\sqrt2}q_1+\frac3{\sqrt6}q_2=(-1,0,1).
$$

Comprobamos $p\in S$ y $v-p=(2,2,2)$ perpendicular a ambos generadores. La distancia de $v$ al plano es $\|v-p\|=2\sqrt3$. La fórmula punto–plano da $|1+2+3|/\sqrt3=2\sqrt3$, un control independiente.

### Paso 4: distinguir coordenadas y proyección

Como $v\notin S$, no tiene coordenadas en la base de $S$. Sí las tiene $p$: $(1/\sqrt2,3/\sqrt6)^T$ en la base ortonormal. Esos números se obtienen por productos interiores porque la base es ortonormal. En la base original $((-1,1,0),(-1,0,1))$, las coordenadas de $p=(-1,0,1)$ son $(0,1)^T$. La diferencia entre ambas columnas no es una contradicción: representan el mismo vector en bases distintas.

### Práctica gradual con respuestas

1. Repetir el paso de pertenencia para $(2,-3,1)$. **Respuesta:** pertenece porque suma cero; coordenadas en la base original $(-3,1)^T$.
2. Proyectar $(1,1,1)$ sobre $S$. **Respuesta:** cero, porque ya está en la dirección normal; su distancia es $\sqrt3$.
3. Hallar una base ortonormal de $S^\perp$. **Respuesta:** $((1,1,1)/\sqrt3)$; se puede añadir a $q_1,q_2$ para una base ortonormal de $\mathbb R^3$.
4. ¿Todo plano tiene base como espacio vectorial? **Respuesta:** solo los planos por el origen son subespacios con las operaciones usuales; un plano desplazado se describe por un punto y una base de sus direcciones.


### Hoja de fórmulas del capítulo 24

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano de estudio | $S=\{x+y+z=0\}$ | Base $(-1,1,0),(-1,0,1)$. |
| Descomposición | $v=\operatorname{proj}_S v+\operatorname{proj}_{S^\perp}v$ | Producto usual en el ejemplo; componentes perpendiculares. |
| Coordenadas ortonormales | $[p]_Q=(\langle p,q_i\rangle)_i$ | Solo si $p\in S$ y $Q$ es base ortonormal de $S$. |

## Hoja de fórmulas de unidad 4: Espacios vectoriales y producto interior

Estas relaciones se comprenden y practican en los capítulos 15–24. Revisá las condiciones antes de aplicarlas.

### 15. Grupos y espacios vectoriales

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Grupo abeliano | Suma interna, asociativa y conmutativa; neutro y opuestos | Primera estructura de un espacio vectorial. |
| Distributividad | $\alpha(u+v)=\alpha u+\alpha v$ | Junto a las demás reglas de escalares. |
| Polinomios | $P_n=\{p:\deg p\le n\}\cup\{0\}$ | Sobre el cuerpo declarado; no grado exactamente $n$. |

### 16. Subespacios, suma e intersección

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Subespacio | $\alpha u+\beta v\in S$ para $u,v\in S$ | Además $S$ no vacío; operaciones heredadas. |
| Suma | $S+T=\{s+t:s\in S,t\in T\}$ | No confundir con unión. |
| Suma directa | $S\cap T=\{0\}$ | Equivale a descomposición única en $S+T$. |

### 17. Combinaciones lineales e independencia

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Generado | $\operatorname{span}\{v_i\}=\{\sum_i\alpha_iv_i\}$ | Todas las combinaciones finitas. |
| Independencia | $\sum_i\alpha_iv_i=0\Rightarrow\alpha_i=0$ para todo $i$ | No basta independencia por pares. |
| Criterio matricial | $\ker A=\{0\}$ | Vectores como columnas; pivote en cada columna. |

### 18. Bases, dimensión y extracción de generadores

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Base | Genera y es LI | Existencia y unicidad de coordenadas. |
| Dimensiones | $\dim P_n=n+1,\quad\dim M_{m\times n}=mn$ | Operaciones usuales y cuerpo fijado. |
| Suma de subespacios | $\dim(S+T)=\dim S+\dim T-\dim(S\cap T)$ | Dimensiones finitas. |
| Extracción | Columnas pivote de la matriz original | Las filas no nulas escalonadas sirven para el espacio fila. |

### 19. Coordenadas y cambio de base

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Reconstrucción | $v=S_B[v]_B$ | Columnas de $S_B$ son los vectores de $B$ en la base canónica. |
| Cambio | $[v]_C=P_{C\leftarrow B}[v]_B$ | La columna $j$ es $[b_j]_C$. |
| Matriz de cambio | $P_{C\leftarrow B}=S_C^{-1}S_B$ | Bases del mismo espacio y misma representación de referencia. |
| Inversión | $P_{B\leftarrow C}=P_{C\leftarrow B}^{-1}$ | Cambio en sentido contrario. |

### 20. Rango, nulidad y espacios de una matriz

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Rango–nulidad | $\operatorname{rg}A+\dim\ker A=n$ | $n$ número de columnas. |
| Imagen | $\operatorname{Col}A=\operatorname{span}\{\text{columnas de }A\}$ | Subespacio del espacio de salida $\mathbb R^m$. |
| Compatibilidad geométrica | $Ax=b$ compatible $\iff b\in\operatorname{Col}A$ | La solución, si existe, es particular más núcleo. |

### 21. Producto interior, normas y ángulos

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Norma inducida | $\|v\|=\sqrt{\langle v,v\rangle}$ | Producto interior declarado. |
| Cauchy–Schwarz | $\lvert\langle u,v\rangle\rvert\le\|u\|\|v\|$ | Igualdad si los vectores son dependientes. |
| Distancia | $d(u,v)=\|u-v\|$ | Depende del producto interior. |
| Producto ponderado | $\langle u,v\rangle=u^TGv$ | $G$ real simétrica definida positiva. |

### 22. Ortogonalidad, proyección y complemento

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Proyección sobre vector | $p=\langle v,u\rangle u/\|u\|^2$ | $u\ne0$. |
| Proyección sobre subespacio | $p=\sum_i\langle v,q_i\rangle q_i$ | Los $q_i$ forman base ortonormal del subespacio. |
| Complemento | $V=S\oplus S^\perp$ | Producto interior, dimensión finita. |
| Distancia mínima | $d(v,S)=\|v-\operatorname{proj}_S v\|$ | La proyección es el único punto más próximo. |

### 23. Gram–Schmidt: construir una base ortonormal

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Gram–Schmidt | $u_k=v_k-\sum_{j<k}\langle v_k,u_j\rangle u_j/\|u_j\|^2$ | Entrada LI; usar producto y vectores ortogonales construidos. |
| Normalización | $q_k=u_k/\|u_k\|$ | Solo residuos no nulos. |
| Control | $\langle q_i,q_j\rangle=\delta_{ij}$ | Comprobar generado y ortonormalidad. |

### 24. Integración de espacios: de ecuaciones a una base útil

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano de estudio | $S=\{x+y+z=0\}$ | Base $(-1,1,0),(-1,0,1)$. |
| Descomposición | $v=\operatorname{proj}_S v+\operatorname{proj}_{S^\perp}v$ | Producto usual en el ejemplo; componentes perpendiculares. |
| Coordenadas ortonormales | $[p]_Q=(\langle p,q_i\rangle)_i$ | Solo si $p\in S$ y $Q$ es base ortonormal de $S$. |

## 25. Transformaciones lineales: aprender a leer una regla

Una transformación es una función: recibe un elemento de un conjunto de entrada y devuelve uno del conjunto de salida. En $T:\mathbb R^2\to\mathbb R^3$, la entrada tiene dos componentes y la salida tres; eso no impide linealidad. Para ser lineal debe respetar combinaciones:

$$
T(\alpha u+\beta v)=\alpha T(u)+\beta T(v).
$$

Esto equivale a conservar sumas y productos por escalares. La propiedad incluye $T(0)=0$, pero esta última por sí sola no basta.

### Primera lectura paso a paso

Sea $T(x,y)=(x+2y,3x-y,x)$. Para calcular $T(2,-1)$, sustituimos $x=2$, $y=-1$ en **cada** componente: $T(2,-1)=(0,7,2)$. Para verificar linealidad, tomamos entradas generales $u=(a,b)$ y $v=(c,d)$. La primera componente de $T(\alpha u+\beta v)$ es $\alpha a+\beta c+2(\alpha b+\beta d)=\alpha(a+2b)+\beta(c+2d)$. Las otras dos se reorganizan igual. Por tanto se cumple la identidad para todas las entradas, no solo para $(2,-1)$.

La matriz de esta regla se lee por coeficientes:

$$
A=\begin{pmatrix}1&2\\3&-1\\1&0\end{pmatrix},\qquad T(x)=Ax.
$$

Toda multiplicación por una matriz fija es lineal, por distributividad. Las columnas son $T(1,0)$ y $T(0,1)$: conocer lo que hace la función a una base permite reconstruirla sobre cualquier entrada.

### Reconocer lo que falla

$F(x,y)=(x+1,y)$ no es lineal porque $F(0,0)=(1,0)$. Es afín: una transformación lineal seguida de una traslación. $G(x,y)=(x^2,y)$ sí manda cero a cero, pero $G(2,0)=(4,0)\ne2G(1,0)=(2,0)$. No es lineal. La aplicación determinante de matrices a reales tampoco es lineal en general; en orden dos, $\det(2I)=4\ne2\det I$.

En cambio, la transposición $T(A)=A^T$ es lineal porque distribuye sobre sumas y escalares. La derivación $D:P_2\to P_1$, $D(a+bx+cx^2)=b+2cx$, también es lineal. La palabra “vector” abarca matrices y polinomios, no solo columnas numéricas.

### Construir una regla desde datos

Supongamos $u=(1,1)$, $v=(1,-1)$ y nos dicen que $T(u)=(2,0)$, $T(v)=(0,3)$. Como $u,v$ forman base, una entrada $(x,y)$ se escribe $\frac{x+y}{2}u+\frac{x-y}{2}v$. Aplicando linealidad:

$$
T(x,y)=\left(x+y,\frac32(x-y)\right).
$$

Si los vectores dados fueran dependientes, las imágenes deberían respetar sus relaciones. De $v=2u$ debe seguir $T(v)=2T(u)$; asignar imágenes incompatibles hace imposible una transformación lineal. Si los datos independientes no completan una base, puede haber varias extensiones, porque queda por decidir la imagen de direcciones no especificadas.

### Práctica gradual con respuestas

1. Calcular $T(0,1)$ para la primera regla. **Respuesta:** $(2,-1,0)$, su segunda columna.
2. ¿$H(x,y)=(xy,0)$ es lineal? **Respuesta:** no: $H(1,0)+H(0,1)=0$, pero $H(1,1)=(1,0)$.
3. ¿Se puede pedir $T(1,0)=(1,1)$ y $T(2,0)=(0,1)$? **Respuesta:** no; el segundo valor debería ser $(2,2)$.
4. Una aplicación lineal vale cero en todos los vectores de una base. **Respuesta:** vale cero en todo el espacio, pues cada entrada es una combinación de esa base.


### Hoja de fórmulas del capítulo 25

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Linealidad | $T(\alpha u+\beta v)=\alpha T(u)+\beta T(v)$ | Para todos los vectores y escalares. |
| Test necesario | $T(0)=0$ | No es suficiente para probar linealidad. |
| Construcción | $T(\sum_i\alpha_ib_i)=\sum_i\alpha_iT(b_i)$ | Las imágenes de una base determinan una única aplicación. |

## 26. Núcleo, imagen y teorema de la dimensión

El núcleo de $T:V\to W$ reúne entradas que terminan en el vector cero: $\ker T=\{v:T(v)=0_W\}$. La imagen reúne salidas que efectivamente se alcanzan: $\operatorname{Im}T=\{T(v):v\in V\}$. El núcleo vive en el dominio y la imagen en el codominio. Ambos son subespacios si $T$ es lineal. Para el núcleo lo muestra $T(\alpha u+\beta v)=0$; para la imagen, $\alpha T(u)+\beta T(v)=T(\alpha u+\beta v)$ vuelve a ser una salida.

### Resolver las dos preguntas en un ejemplo

Sea $T:\mathbb R^3\to\mathbb R^2$, $T(x,y,z)=(x+y,y+z)$.

**Para el núcleo**, buscamos qué entradas producen $(0,0)$. Escribimos $x+y=0$, $y+z=0$. Elegimos $y=t$, entonces $x=-t,z=-t$. Por tanto $\ker T=\operatorname{span}\{(-1,1,-1)\}$ y su dimensión es uno. Sustituir $(-1,1,-1)$ confirma salida cero.

**Para la imagen**, no igualamos la salida a cero. Preguntamos si una salida arbitraria $(a,b)$ puede obtenerse. Basta elegir $y=0,x=a,z=b$; por tanto toda pareja es alcanzable y $\operatorname{Im}T=\mathbb R^2$. También se ve en las columnas de su matriz: $(1,0),(1,1),(0,1)$ generan todo $\mathbb R^2$. El rango es dos y la nulidad uno; $3=1+2$.

Una función es inyectiva si entradas distintas producen salidas distintas. Para una lineal, esto equivale a núcleo cero: $T(u)=T(v)$ implica $T(u-v)=0$. Es sobreyectiva si su imagen es todo el codominio. El ejemplo es sobreyectivo y no inyectivo: una salida tiene infinitas entradas separadas por vectores del núcleo.

### Por qué vale rango–nulidad

Sea $k_1,\ldots,k_r$ una base del núcleo y completémosla con $v_1,\ldots,v_s$ a una base de $V$. Las imágenes $T(v_i)$ generan la imagen, porque los términos del núcleo desaparecen. Además son LI: si $\sum a_iT(v_i)=0$, entonces $\sum a_iv_i$ está en el núcleo, lo que daría una relación entre los elementos de la base completa; obliga $a_i=0$. Así, $\dim V=r+s=\dim\ker T+\dim\operatorname{Im}T$. La prueba requiere dominio de dimensión finita.

### Un ejemplo con polinomios

Para $D:P_2\to P_1$, la derivada de $a+bx+cx^2$ es $b+2cx$. El núcleo son los polinomios constantes, base $(1)$ y dimensión uno. Cualquier $r+sx\in P_1$ es derivada de $rx+(s/2)x^2$, por lo que la imagen es todo $P_1$, dimensión dos. Se verifica $\dim P_2=3=1+2$. El coeficiente constante de una primitiva queda libre justamente porque la derivación lo pierde.

### Práctica gradual con respuestas

1. Núcleo de $T(x,y)=(x,0)$. **Respuesta:** entradas $(0,t)$, base $(0,1)$. La imagen es el eje $x$ del destino, no todo $\mathbb R^2$.
2. ¿Puede una lineal $\mathbb R^3\to\mathbb R^2$ ser inyectiva? **Respuesta:** no; rango a lo sumo dos y nulidad al menos uno.
3. ¿Puede una lineal $\mathbb R^2\to\mathbb R^3$ ser sobreyectiva? **Respuesta:** no; la imagen tiene dimensión a lo sumo dos.
4. Para el primer ejemplo, dar todas las entradas con salida $(2,3)$. **Respuesta:** $(2,0,3)+t(-1,1,-1)$, según la descomposición particular más núcleo.


### Hoja de fórmulas del capítulo 26

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Núcleo | $\ker T=\{v:T(v)=0\}$ | Subespacio del dominio. |
| Imagen | $\operatorname{Im}T=\{T(v):v\in V\}$ | Subespacio del codominio. |
| Dimensión | $\dim V=\dim\ker T+\dim\operatorname{Im}T$ | Dominio de dimensión finita. |
| Inyectividad | $T$ inyectiva $\iff\ker T=\{0\}$ | Para aplicaciones lineales. |

## 27. Matriz de una transformación en bases elegidas

La matriz de una transformación depende de las bases de entrada y salida. Si $B=(b_1,\ldots,b_n)$ es base de $V$ y $C=(c_1,\ldots,c_m)$ de $W$, la matriz $[T]_{C\leftarrow B}$ tiene como columna $j$ a $[T(b_j)]_C$. Su función es concreta:

$$
[T(v)]_C=[T]_{C\leftarrow B}[v]_B.
$$

La columna que entra debe estar expresada en $B$; la que sale, en $C$. Mezclar coordenadas de otra base produce una cuenta definida pero una interpretación falsa.

### Construcción guiada de cada columna

Sea $T(x,y)=(x+y,2y)$, $B=((1,1),(1,-1))$ y $C=((1,0),(1,1))$.

1. Aplicamos la regla al primer vector de entrada: $T(1,1)=(2,2)$.
2. Expresamos esa salida en $C$. Buscamos $a(1,0)+b(1,1)=(2,2)$: de la segunda componente $b=2$; de la primera $a+b=2$, luego $a=0$. Primera columna: $(0,2)^T$.
3. Aplicamos la regla al segundo vector: $T(1,-1)=(0,-2)$.
4. En $C$, $b=-2$ y $a+b=0$, luego $a=2$. Segunda columna: $(2,-2)^T$.
5. Reunimos las columnas en ese orden:

$$
M=[T]_{C\leftarrow B}=\begin{pmatrix}0&2\\2&-2\end{pmatrix}.
$$


Probemos con $v=(4,2)$. Ya sabemos que $[v]_B=(3,1)^T$. Multiplicar da $[T(v)]_C=M(3,1)^T=(2,4)^T$. Reconstruir en $C$ da $2(1,0)+4(1,1)=(6,4)$, que coincide con aplicar directamente $T(4,2)=(6,4)$. Este recorrido de ida y vuelta es el mejor control de orientación.

Si $A$ es la matriz canónica y las bases están escritas como columnas canónicas, la fórmula es $M=S_C^{-1}AS_B$. Se entiende leyéndola desde la derecha: convertir de $B$ a coordenadas canónicas; aplicar $A$; convertir la salida canónica a $C$. No hace falta memorizarla sin sentido.

### El caso de polinomios

Para $D:P_2\to P_1$, con bases canónicas ordenadas $(1,x,x^2)$ y $(1,x)$, derivamos cada vector: $D(1)=0$, $D(x)=1$, $D(x^2)=2x$. Las columnas son $(0,0)^T,(1,0)^T,(0,2)^T$, así que

$$
[D]=\begin{pmatrix}0&1&0\\0&0&2\end{pmatrix}.
$$

La matriz es $2\times3$, coherente con las dimensiones. Multiplicarla por $(a,b,c)^T$ devuelve $(b,2c)^T$, las coordenadas de la derivada.

### Práctica gradual con respuestas

1. Si las bases del dominio y codominio tienen tres y cinco vectores, ¿qué tamaño tiene la matriz? **Respuesta:** $5\times3$; las columnas corresponden a entradas de la base y las filas a coordenadas de salida.
2. ¿La primera columna puede ser cero? **Respuesta:** sí, si $b_1\in\ker T$. Esto impide inyectividad, pero no necesariamente sobreyectividad.
3. Matriz de $T(x,y)=(y,x)$ en bases canónicas. **Respuesta:** $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, a partir de las imágenes de $e_1,e_2$.
4. Si $T:V\to V$ cambia de la base $B$ a $C$ en ambos lados, ¿cómo se relacionan sus matrices? **Respuesta:** $[T]_C=P_{C\leftarrow B}[T]_BP_{B\leftarrow C}$. La transformación no cambia; cambia cómo se describen entrada y salida.


### Hoja de fórmulas del capítulo 27

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Columnas | $[T]_{C\leftarrow B}=([T(b_1)]_C\ \cdots\ [T(b_n)]_C)$ | Orden y bases declarados. |
| Aplicación | $[T(v)]_C=[T]_{C\leftarrow B}[v]_B$ | Matriz $m\times n$. |
| Desde matriz canónica | $[T]_{C\leftarrow B}=S_C^{-1}AS_B$ | Primero convertir entrada; después aplicar; después convertir salida. |

## 28. Isomorfismos, composición y representación

Un isomorfismo es una transformación lineal biyectiva: cada salida tiene exactamente una entrada. Su inversa también es lineal. Para demostrarlo, si $T(u)=a$ y $T(v)=b$, la linealidad da $T(\alpha u+\beta v)=\alpha a+\beta b$; aplicando la inversa se obtiene la identidad lineal para $T^{-1}$. Dos espacios isomorfos tienen la misma estructura vectorial aunque sus elementos se vean diferentes.

### Construir un isomorfismo que se pueda usar

El mapa $\Phi:P_2\to\mathbb R^3$, $\Phi(a+bx+cx^2)=(a,b,c)$, es lineal, inyectivo y sobreyectivo. Su inversa transforma $(a,b,c)$ en el polinomio correspondiente. Esto permite resolver una independencia de polinomios como un sistema de coeficientes, sin afirmar que un polinomio sea literalmente una terna. La elección del orden $(1,x,x^2)$ es parte de la representación.

En dimensión finita, $V$ y $W$ son isomorfos si y solo si tienen igual dimensión sobre el mismo cuerpo. Si ambas dimensiones son $n$, elegimos bases $v_i,w_i$ y definimos $T(v_i)=w_i$; la extensión lineal es un isomorfismo. Pero una transformación concreta entre espacios de igual dimensión puede no serlo: el mapa cero no se vuelve biyectivo por coincidir las dimensiones.

### Componer y leer el orden

Si $T:U\to V$ y $S:V\to W$, la composición es $(S\circ T)(u)=S(T(u))$. Primero se aplica $T$. Si las matrices usan bases intermedias compatibles, $[S\circ T]=[S][T]$. Por ejemplo, $T(x,y)=(x+y,y)$ y $S(x,y)=(2x,y)$ tienen matrices

$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}2&0\\0&1\end{pmatrix}.
$$

Entonces $S(T(x,y))=(2x+2y,y)$ y su matriz es $BA=\begin{pmatrix}2&2\\0&1\end{pmatrix}$. En el orden opuesto obtenemos $T(S(x,y))=(2x+y,y)$, matriz $AB=\begin{pmatrix}2&1\\0&1\end{pmatrix}$. La falta de conmutatividad del producto tiene aquí una interpretación directa.

### Reunir inyectividad, sobreyectividad e inversa

Para una aplicación entre espacios de igual dimensión finita, ser inyectiva equivale a ser sobreyectiva y a ser un isomorfismo, por rango–nulidad. En matrices cuadradas equivale a determinante no nulo. Para dimensiones distintas, estas equivalencias se separan. La inclusión $\mathbb R^2\to\mathbb R^3$, $(x,y)\mapsto(x,y,0)$, es inyectiva y no sobreyectiva; la proyección $\mathbb R^3\to\mathbb R^2$, $(x,y,z)\mapsto(x,y)$, es sobreyectiva y no inyectiva.

### Práctica gradual con respuestas

1. Inversa de $T(x,y)=(x+y,y)$. **Respuesta:** si la salida es $(a,b)$, $y=b$ y $x=a-b$; por tanto $T^{-1}(a,b)=(a-b,b)$.
2. ¿$P_2$ es isomorfo a $M_{2\times2}(\mathbb R)$? **Respuesta:** no, sus dimensiones son tres y cuatro. Sí es isomorfo al subespacio de matrices simétricas $2\times2$.
3. Construir ese último isomorfismo. **Respuesta:** $a+bx+cx^2\mapsto\begin{pmatrix}a&b\\b&c\end{pmatrix}$. La fórmula es lineal y cada matriz simétrica aparece una sola vez.
4. ¿El producto de dos matrices invertibles tiene inversa? **Respuesta:** sí, en orden inverso; deshacer una composición exige deshacer primero la última operación realizada.


### Hoja de fórmulas del capítulo 28

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Isomorfismo | Lineal, inyectiva y sobreyectiva | Inversa lineal; espacios de igual dimensión finita admiten alguno. |
| Composición | $[S\circ T]=[S][T]$ | Bases intermedias compatibles; primero actúa $T$. |
| Igual dimensión | Inyectiva $\iff$ sobreyectiva $\iff$ isomorfismo | Aplicación lineal entre espacios finitos de igual dimensión. |

## Hoja de fórmulas de unidad 5: Transformaciones lineales

Estas relaciones se comprenden y practican en los capítulos 25–28. Revisá las condiciones antes de aplicarlas.

### 25. Transformaciones lineales: aprender a leer una regla

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Linealidad | $T(\alpha u+\beta v)=\alpha T(u)+\beta T(v)$ | Para todos los vectores y escalares. |
| Test necesario | $T(0)=0$ | No es suficiente para probar linealidad. |
| Construcción | $T(\sum_i\alpha_ib_i)=\sum_i\alpha_iT(b_i)$ | Las imágenes de una base determinan una única aplicación. |

### 26. Núcleo, imagen y teorema de la dimensión

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Núcleo | $\ker T=\{v:T(v)=0\}$ | Subespacio del dominio. |
| Imagen | $\operatorname{Im}T=\{T(v):v\in V\}$ | Subespacio del codominio. |
| Dimensión | $\dim V=\dim\ker T+\dim\operatorname{Im}T$ | Dominio de dimensión finita. |
| Inyectividad | $T$ inyectiva $\iff\ker T=\{0\}$ | Para aplicaciones lineales. |

### 27. Matriz de una transformación en bases elegidas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Columnas | $[T]_{C\leftarrow B}=([T(b_1)]_C\ \cdots\ [T(b_n)]_C)$ | Orden y bases declarados. |
| Aplicación | $[T(v)]_C=[T]_{C\leftarrow B}[v]_B$ | Matriz $m\times n$. |
| Desde matriz canónica | $[T]_{C\leftarrow B}=S_C^{-1}AS_B$ | Primero convertir entrada; después aplicar; después convertir salida. |

### 28. Isomorfismos, composición y representación

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Isomorfismo | Lineal, inyectiva y sobreyectiva | Inversa lineal; espacios de igual dimensión finita admiten alguno. |
| Composición | $[S\circ T]=[S][T]$ | Bases intermedias compatibles; primero actúa $T$. |
| Igual dimensión | Inyectiva $\iff$ sobreyectiva $\iff$ isomorfismo | Aplicación lineal entre espacios finitos de igual dimensión. |

## 29. Autovalores y autovectores desde su significado

Al aplicar una matriz a un vector, normalmente cambian su longitud y su dirección. Un autovector es una dirección especial: la salida queda sobre la misma recta que la entrada. Formalmente, $v\ne0$ es autovector de $A$ asociado a $\lambda$ si $Av=\lambda v$. El número $\lambda$ es el autovalor. Si es positivo conserva el sentido; si es negativo lo invierte; si es cero anula el vector. El vector cero nunca se llama autovector, aunque satisfaga cualquier igualdad de ese tipo.

### Comprobar antes de buscar

Para $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$ y $v=(1,1)$, multiplicamos: $Av=(5,5)=5v$. Por tanto $v$ es autovector y $5$ es autovalor. No buscamos ningún determinante porque ya teníamos un candidato. Con $w=(1,0)$, la salida es $(4,2)$; no es múltiplo de $(1,0)$ y por tanto $w$ no es autovector. Si una componente del candidato es cero, no se divide por ella para “calcular $\lambda$”: se comprueba la igualdad completa.

### Encontrarlos cuando no conocemos candidatos

Partimos de $Av=\lambda v$ y llevamos todo a un lado: $(A-\lambda I)v=0$. Queremos una solución no trivial; para una matriz cuadrada esto ocurre exactamente si $\det(A-\lambda I)=0$. Usaremos la convención $p_A(t)=\det(tI-A)$; sus raíces son las mismas, y esta elección hace al polinomio mónico.

En el ejemplo:

$$
p_A(t)=(t-4)(t-3)-2=t^2-7t+10=(t-5)(t-2).
$$

Los autovalores son cinco y dos. Para $\lambda=5$, $A-5I=\begin{pmatrix}-1&1\\2&-2\end{pmatrix}$; el sistema es $y=x$. El autoespacio es $E_5=\operatorname{span}(1,1)$ y sus vectores no nulos son los autovectores. Para $\lambda=2$, la ecuación es $2x+y=0$; $E_2=\operatorname{span}(1,-2)$. Verificar $A(1,-2)^T=(2,-4)^T$ cierra la cuenta.

### Una errata del TP como ejercicio de lectura crítica

En el primer ejercicio del TP6 descargado se propone para $B=\begin{pmatrix}2&2\\2&-1\end{pmatrix}$ el vector $(2,-1)$ asociado a tres. La sustitución da $B(2,-1)^T=(2,5)^T$, mientras que $3(2,-1)^T=(6,-3)^T$: no coinciden. El vector corregido $(2,1)$ sí produce $(6,3)=3(2,1)$. El otro candidato $(1,-2)$ sí corresponde a $-2$, pues su imagen es $(-2,4)$. La guía conserva la verificación y señala la errata en lugar de repetir una afirmación incompatible con la cuenta.

### Práctica gradual con respuestas

1. Para $\operatorname{diag}(2,3)$, probar $e_1,e_2$. **Respuesta:** sus imágenes son $2e_1,3e_2$; son autovectores de autovalores dos y tres.
2. ¿Cualquier múltiplo no nulo de un autovector es autovector? **Respuesta:** sí: $A(cv)=cAv=\lambda(cv)$, con $c\ne0$.
3. ¿Puede cero ser autovalor? **Respuesta:** sí, exactamente si el núcleo es no trivial, equivalente a matriz singular.
4. Para la rotación $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, buscar autovalores reales. **Respuesta:** $p(t)=t^2+1$, sin raíces reales. Sobre $\mathbb C$ sí tiene autovalores $\pm i$; el cuerpo importa.


### Hoja de fórmulas del capítulo 29

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Autovector | $Av=\lambda v,\quad v\ne0$ | El cero nunca se llama autovector. |
| Característico | $p_A(t)=\det(tI-A)$ | Autovalores son raíces en el cuerpo elegido. |
| Autoespacio | $E_\lambda=\ker(A-\lambda I)$ | Incluye cero; sus elementos no nulos son autovectores. |

## 30. Multiplicidades y diagonalización

Diagonalizar significa encontrar una base de autovectores. En esa base la transformación actúa multiplicando cada coordenada por su autovalor, sin mezclarla con las demás. Si $P$ tiene como columnas $n$ autovectores LI y $D$ coloca sus autovalores en el mismo orden, entonces

$$
AP=PD,\qquad P^{-1}AP=D,\qquad A=PDP^{-1}.
$$

La primera igualdad se comprueba columna por columna y es la más cómoda para detectar errores de orden.

### Un ejemplo completo que reutiliza lo aprendido

Para $A=\begin{pmatrix}4&1\\2&3\end{pmatrix}$, tomamos primero $(1,1)$ de autovalor cinco y después $(1,-2)$ de autovalor dos:

$$
P=\begin{pmatrix}1&1\\1&-2\end{pmatrix},\quad D=\begin{pmatrix}5&0\\0&2\end{pmatrix},\quad P^{-1}=\begin{pmatrix}2/3&1/3\\1/3&-1/3\end{pmatrix}.
$$

El determinante de $P$ es $-3$, así que es una base. Calculamos $AP=\begin{pmatrix}5&2\\5&-4\end{pmatrix}$ y $PD$ da exactamente la misma tabla. Esto prueba la diagonalización. Si intercambiamos las columnas de $P$, también debemos intercambiar los elementos de $D$; no existe un único par diagonalizador.

### Qué pasa cuando se repite un autovalor

La multiplicidad algebraica $m_a(\lambda)$ es el número de veces que la raíz aparece en $p_A$. La multiplicidad geométrica $m_g(\lambda)$ es $\dim E_\lambda=n-\operatorname{rg}(A-\lambda I)$. Para cada autovalor se cumple $1\le m_g\le m_a$. La matriz es diagonalizable sobre el cuerpo elegido si su polinomio se descompone en factores lineales allí y $m_g=m_a$ para todos los autovalores.

La matriz $J=\begin{pmatrix}2&1\\0&2\end{pmatrix}$ tiene $p_J(t)=(t-2)^2$, pero $J-2I=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ obliga $y=0$. Su único autoespacio tiene dimensión uno: no hay dos autovectores LI y no es diagonalizable. En cambio, $2I_2$ tiene el mismo polinomio y autoespacio $\mathbb R^2$; sí es diagonalizable. Repetición no significa automáticamente fracaso, y contar raíces no basta.

Autovectores asociados a autovalores distintos son LI. Para dos, si $au+bv=0$, aplicar $A$ y restar $\lambda$ veces la relación deja $b(\mu-\lambda)v=0$, así que $b=0$ y luego $a=0$. El argumento se extiende por inducción. Por eso $n$ autovalores distintos en el cuerpo garantizan diagonalización, pero no son necesarios.

### Práctica gradual con respuestas

1. Diagonalizar $\operatorname{diag}(1,1,3)$. **Respuesta:** ya es diagonal, $P=I$; el autoespacio de uno tiene dimensión dos, igual a su multiplicidad algebraica.
2. Una matriz $3\times3$ tiene multiplicidades algebraicas dos y uno, y geométricas uno y uno. **Respuesta:** no es diagonalizable; solo aporta dos direcciones independientes.
3. ¿Dos matrices con igual polinomio característico son necesariamente semejantes? **Respuesta:** no; $J$ y $2I_2$ del ejemplo tienen distintos espacios propios y no son semejantes.
4. ¿Se pueden escalar las columnas de $P$? **Respuesta:** sí por factores no nulos, conservando sus autovalores en $D$; siguen siendo autovectores y la matriz sigue siendo invertible.


### Hoja de fórmulas del capítulo 30

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Diagonalización | $AP=PD\iff A=PDP^{-1}$ | Columnas de $P$ autovectores LI; autovalores de $D$ en igual orden. |
| Multiplicidad geométrica | $m_g(\lambda)=n-\operatorname{rg}(A-\lambda I)$ | $1\le m_g\le m_a$ para cada autovalor. |
| Criterio | $m_g=m_a$ para cada raíz | Además el característico debe escindirse en el cuerpo elegido. |

## 31. Semejanza, potencias y Cayley–Hamilton

Dos matrices son semejantes si $B=P^{-1}AP$ para una $P$ invertible. Describen la misma transformación en bases diferentes. La semejanza conserva polinomio característico:

$$
\det(tI-B)=\det\bigl(P^{-1}(tI-A)P\bigr)=\det(tI-A).
$$

También conserva determinante, traza, rango y dimensiones de autoespacios. No necesariamente conserva las mismas columnas como autovectores: las coordenadas de una dirección cambian con la base. Que $A$ y $A^T$ tengan el mismo polinomio tampoco significa que compartan todos sus autovectores.

### Calcular una potencia sin multiplicar diez veces

Si $A=PDP^{-1}$, entonces $A^2=PDP^{-1}PDP^{-1}=PD^2P^{-1}$. Las matrices del centro se cancelan porque son adyacentes. Por inducción, $A^k=PD^kP^{-1}$ para enteros $k\ge0$. Si $A$ es invertible, también vale para exponentes enteros negativos.

En el ejemplo de los capítulos anteriores:

$$
A^k=\frac13\begin{pmatrix}2\cdot5^k+2^k&5^k-2^k\\2\cdot5^k-2\cdot2^k&5^k+2\cdot2^k\end{pmatrix}.
$$

Para $k=0$ obtenemos $I$ y para $k=1$, $A$: dos controles simples. Además, si una sucesión satisface $x_{k+1}=Ax_k$, entonces $x_k=A^kx_0$. Para $x_0=(1,0)$, su primera columna da directamente $x_k$. La diagonalización transforma una recurrencia acoplada en dos progresiones geométricas.

### Entender Cayley–Hamilton

El teorema afirma que una matriz satisface su propio polinomio característico. Si $p_A(t)=t^2-7t+10$, entonces $p_A(A)=A^2-7A+10I=0$. El término independiente se interpreta como diez veces la identidad, no como “sumar diez” a cada entrada. El resultado es la matriz cero. En este ejemplo se comprueba multiplicando $A^2=\begin{pmatrix}18&7\\14&11\end{pmatrix}$ y restando $7A-10I$.

Un fundamento general usa $(tI-A)\operatorname{adj}(tI-A)=p_A(t)I$ como identidad de polinomios matriciales. Comparar coeficientes y combinar las igualdades elimina los coeficientes de la adjunta y produce $p_A(A)=0$. Esta vía justifica el teorema sin la sustitución informal de una matriz en una fracción racional. Cayley–Hamilton también vale si la matriz no es diagonalizable; no depende de encontrar una base propia.

Como diez es no nulo, la identidad del ejemplo da $A(7I-A)=10I$ y por tanto

$$
A^{-1}=\frac{7I-A}{10}=\frac1{10}\begin{pmatrix}3&-1\\-2&4\end{pmatrix}.
$$

En general, si el término constante de $p_A$ es no nulo, se despeja la inversa como polinomio en $A$. Si es cero, la matriz es singular y ese despeje no permite invertir. El TP6 incluye esta aplicación, aunque no aparezca nombrada en el listado breve del programa.

### Práctica gradual con respuestas

1. Para $p_A(t)=t^2-3t+2$, expresar $A^2$. **Respuesta:** $A^2=3A-2I$.
2. En ese caso, obtener $A^{-1}$. **Respuesta:** $(3I-A)/2$, porque $A(3I-A)=2I$.
3. ¿Cayley–Hamilton implica que $A$ es diagonalizable? **Respuesta:** no; también lo cumple el bloque $J$ del capítulo anterior.
4. Si $B=P^{-1}AP$, ¿qué relación tienen sus potencias? **Respuesta:** $B^k=P^{-1}A^kP$; se cancelan los factores interiores igual que en la diagonalización.


### Hoja de fórmulas del capítulo 31

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Semejanza | $B=P^{-1}AP$ | Conserva característico, traza, determinante y rango. |
| Potencias | $A^k=PD^kP^{-1}$ | Diagonalización válida; $k\ge0$, o entero si invertible. |
| Cayley–Hamilton | $p_A(A)=0$ | El término constante multiplica $I$; no exige diagonalización. |
| Inversa por polinomio | Si $p_A=t^2-st+d$, $A^{-1}=(sI-A)/d$ | $d\ne0$; caso de orden dos. |

## 32. Matrices simétricas y diagonalización ortogonal

![Una elipse descrita con ejes de autovectores](/planos-de-estudio/img/algebra/ejes-propios.svg)

Una matriz real simétrica satisface $A^T=A$. El teorema espectral garantiza una base ortonormal de autovectores reales. Por eso existe una matriz ortogonal $Q$, es decir $Q^TQ=I$, tal que $Q^TAQ=D$. Aquí la inversa de $Q$ es su transpuesta, lo que simplifica el cambio de coordenadas y conserva longitudes y ángulos del producto usual.

### Por qué los autoespacios distintos son perpendiculares

Si $Au=\lambda u$ y $Av=\mu v$, la simetría implica $\langle Au,v\rangle=\langle u,Av\rangle$. Sustituyendo: $\lambda\langle u,v\rangle=\mu\langle u,v\rangle$. Si $\lambda\ne\mu$, queda $\langle u,v\rangle=0$. Dentro de un autoespacio repetido no todos los vectores elegidos son ortogonales, pero podemos aplicar Gram–Schmidt allí. Las combinaciones siguen siendo autovectores del mismo autovalor. No se deben mezclar arbitrariamente vectores de autoespacios distintos durante esa corrección.

### Ejemplo con números sencillos

Sea $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$. Su polinomio es $(t-2)^2-1=(t-3)(t-1)$. Para tres, una dirección es $(1,1)$; para uno, $(1,-1)$. Ya son perpendiculares. Cada una tiene norma $\sqrt2$, por lo que

$$
Q=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad D=\begin{pmatrix}3&0\\0&1\end{pmatrix}.
$$

Comprobamos primero $Q^TQ=I$, después $AQ=QD$. Ambas identidades prueban la diagonalización ortogonal. Solo comprobar autovectores sin normalizar produciría una diagonalización común, pero no una matriz ortogonal.

### Aplicación: una cónica con término mixto

La forma cuadrática $2x^2+2xy+2y^2$ se escribe $X^TAX$ con la matriz anterior. El coeficiente mixto se reparte: las entradas $a_{12}=a_{21}=1$ aportan juntas $2xy$. Cambiamos coordenadas $X=QY$, con $Y=(u,v)^T$. Entonces $X^TAX=Y^TDY=3u^2+v^2$.

La ecuación $2x^2+2xy+2y^2=6$ queda $u^2/2+v^2/6=1$: es una elipse con semiejes $\sqrt2,\sqrt6$ orientados según las columnas de $Q$. El mayor corresponde a la segunda columna, porque en la forma normalizada tiene denominador seis. La rotación no altera distancias; cambia los ejes para eliminar el término mixto.

No toda matriz diagonalizable admite diagonalización ortogonal real. Si $A=QDQ^T$ con $D$ real diagonal y $Q$ ortogonal, transponer muestra $A^T=A$. Así, para matrices reales, simetría es condición necesaria y suficiente. Tampoco toda matriz ortogonal es simétrica: una rotación de noventa grados es ortogonal y no tiene autovalores reales. Son conceptos diferentes.

### Práctica gradual con respuestas

1. ¿$\operatorname{diag}(1,2,-3)$ es ortogonalmente diagonalizable? **Respuesta:** sí, ya es real simétrica y diagonal; $Q=I$.
2. ¿Una matriz simétrica puede tener un autovalor repetido? **Respuesta:** sí; $I$ tiene un solo autovalor con multiplicidad $n$ y cualquier base ortonormal sirve.
3. Matriz de $3x^2+4xy+5y^2$. **Respuesta:** $\begin{pmatrix}3&2\\2&5\end{pmatrix}$, porque el término mixto se suma dos veces.
4. Si $Q$ es ortogonal, demostrar $\|Qx\|=\|x\|$. **Respuesta:** $\|Qx\|^2=x^TQ^TQx=x^Tx$; tomar raíces no negativas.


### Hoja de fórmulas del capítulo 32

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ortogonal | $Q^TQ=I\Rightarrow Q^{-1}=Q^T$ | Matriz real cuadrada. |
| Teorema espectral | $A=QDQ^T$ | $A$ real simétrica; columnas de $Q$ autovectores ortonormales. |
| Forma cuadrática | $X^TAX=Y^TDY$, $X=QY$ | Repartir el coeficiente mixto entre entradas simétricas. |

## Hoja de fórmulas de unidad 6: Autovalores y diagonalización

Estas relaciones se comprenden y practican en los capítulos 29–32. Revisá las condiciones antes de aplicarlas.

### 29. Autovalores y autovectores desde su significado

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Autovector | $Av=\lambda v,\quad v\ne0$ | El cero nunca se llama autovector. |
| Característico | $p_A(t)=\det(tI-A)$ | Autovalores son raíces en el cuerpo elegido. |
| Autoespacio | $E_\lambda=\ker(A-\lambda I)$ | Incluye cero; sus elementos no nulos son autovectores. |

### 30. Multiplicidades y diagonalización

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Diagonalización | $AP=PD\iff A=PDP^{-1}$ | Columnas de $P$ autovectores LI; autovalores de $D$ en igual orden. |
| Multiplicidad geométrica | $m_g(\lambda)=n-\operatorname{rg}(A-\lambda I)$ | $1\le m_g\le m_a$ para cada autovalor. |
| Criterio | $m_g=m_a$ para cada raíz | Además el característico debe escindirse en el cuerpo elegido. |

### 31. Semejanza, potencias y Cayley–Hamilton

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Semejanza | $B=P^{-1}AP$ | Conserva característico, traza, determinante y rango. |
| Potencias | $A^k=PD^kP^{-1}$ | Diagonalización válida; $k\ge0$, o entero si invertible. |
| Cayley–Hamilton | $p_A(A)=0$ | El término constante multiplica $I$; no exige diagonalización. |
| Inversa por polinomio | Si $p_A=t^2-st+d$, $A^{-1}=(sI-A)/d$ | $d\ne0$; caso de orden dos. |

### 32. Matrices simétricas y diagonalización ortogonal

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ortogonal | $Q^TQ=I\Rightarrow Q^{-1}=Q^T$ | Matriz real cuadrada. |
| Teorema espectral | $A=QDQ^T$ | $A$ real simétrica; columnas de $Q$ autovectores ortonormales. |
| Forma cuadrática | $X^TAX=Y^TDY$, $X=QY$ | Repartir el coeficiente mixto entre entradas simétricas. |

## 33. Taller guiado: decidir un método y verificar el resultado

En una evaluación no suele indicarse qué herramienta usar. Vamos a resolver un problema que conecta matriz, sistema y geometría. Sea

$$
A=\begin{pmatrix}1&0&1\\0&1&1\\1&1&2\end{pmatrix}.
$$

Se pide rango, núcleo, imagen y todas las soluciones de $Ax=(2,3,5)^T$. Antes de operar, observamos que la tercera fila es la suma de las dos primeras: no habrá tres pivotes y el sistema no tendrá solución única. Esa anticipación no reemplaza el cálculo, pero nos permite detectar después un resultado imposible.

### Etapa acompañada

**Primero, reducir.** Hacemos $F_3\leftarrow F_3-F_1-F_2$ y queda fila cero. Las dos primeras columnas ya tienen pivotes uno. Por tanto el rango es dos y la nulidad es $3-2=1$.

**Segundo, núcleo.** Las dos ecuaciones independientes son $x+z=0$, $y+z=0$. Elegimos $z=t$: $(x,y,z)=t(-1,-1,1)$. Este vector no nulo genera todo el núcleo. La matriz debe anularlo; multiplicar confirma $(0,0,0)$.

**Tercero, imagen.** Las columnas pivote originales son $(1,0,1)$ y $(0,1,1)$. Una combinación $(a,b,a+b)$ describe el plano de salidas. Por eso la imagen es $\{(r,s,t):t=r+s\}$. Su normal es $(-1,-1,1)$; que coincida con el generador del núcleo aquí se explica porque $A$ es simétrica, no es una coincidencia que deba generalizarse a toda matriz.

**Cuarto, término independiente.** Como $5=2+3$, el vector dado pertenece a la imagen y el sistema es compatible. Las ecuaciones son $x+z=2$, $y+z=3$. Tomando $z=t$, obtenemos $(2-t,3-t,t)$. Es $(2,3,0)+t(-1,-1,1)$: solución particular más núcleo. La geometría del conjunto solución es una recta afín del espacio de entradas.

### Etapa con menos ayuda

Ahora cambiemos solo el término independiente a $(2,3,6)$. Antes de repetir Gauss, preguntá si está en el plano imagen. No: $6\ne2+3$. Por tanto el sistema es incompatible. Al reducir la aumentada aparecería la fila $[0\ 0\ 0\mid1]$. El núcleo, rango e imagen de $A$ **no cambiaron**, porque dependen de la matriz, no de $b$.

### Etapa autónoma y solución de control

Repetí todo para $B=\begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$ y $b=(1,2)$. Intentá escribir la solución antes de leer lo que sigue. **Control razonado:** hay pivotes en ambas filas, rango dos, núcleo generado por $(1,-1,1)$ y la imagen es todo $\mathbb R^2$. Con $z=t$, la segunda ecuación da $y=2-t$ y la primera $x=t-1$. La solución es $(-1,2,0)+t(1,-1,1)$. La nulidad es uno porque hay tres columnas, aunque solo dos filas.

### Cómo comunicar una solución

Una respuesta completa indica qué conjunto se calculó, dónde vive, sus generadores o ecuaciones y los parámetros permitidos. “Rango dos” no responde a “hallar una base de la imagen”; “$z=t$” no termina de describir todas las incógnitas. Una verificación breve mejora la respuesta: multiplicar el generador del núcleo; revisar que el término independiente satisfaga la ecuación de imagen; sustituir una solución particular. Si esos controles fallan, conviene revisar la operación que introdujo la primera discrepancia.


### Hoja de fórmulas del capítulo 33

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden de resolución | Reducir; núcleo; columnas pivote; compatibilidad; solución | Identificar el espacio de entrada y el de salida. |
| Control | $A(x_p+v)=b$ si $Ax_p=b$ y $Av=0$ | Verificación de toda la familia, no solo un punto. |
| Imagen del ejemplo | $\operatorname{Im}A=\{(r,s,t):t=r+s\}$ | Matriz simétrica del taller; no generalizar esta ecuación a otra matriz. |

## 34. Taller de aprendizaje autónomo y uso del software

El software ayuda a controlar cálculos, pero puede ocultar precisamente el paso que necesitamos aprender. Un recorrido útil tiene cuatro momentos: anticipar una propiedad, resolver un caso pequeño a mano, comprobarlo con aritmética exacta y explicar cualquier diferencia. Este capítulo ofrece un problema integrado y una forma de practicar sin convertir la herramienta en una caja de respuestas.

### Problema guiado de principio a fin

Sea $T:P_1\to P_1$, $T(p)(x)=p(x)+p(1)$, donde $p(1)$ se suma como polinomio constante. Si $p=a+bx$, entonces $p(1)=a+b$ y $T(p)=(2a+b)+bx$. La regla es lineal porque evaluación y suma lo son. En la base $(1,x)$, sus columnas son las coordenadas de $T(1)=2$ y $T(x)=1+x$:

$$
A=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$


**¿Se pierde información?** El determinante es dos, por tanto el núcleo es cero y la imagen es todo $P_1$. Resolver $T(p)=c+dx$ da $b=d$, $a=(c-d)/2$. Así, $T^{-1}(c+dx)=(c-d)/2+dx$. Componer ambas reglas confirma la inversa.

**¿Qué direcciones se conservan?** La matriz triangular tiene autovalores dos y uno. Para dos, $b=0$: los polinomios constantes no nulos. Para uno, $a+b=0$: múltiplos no nulos de $x-1$. Esa interpretación tiene sentido en la regla original: si $p(1)=0$, sumar $p(1)$ no lo modifica.

**¿Qué base simplifica la regla?** $B=(1,x-1)$ es base porque sus coordenadas canónicas son columnas LI. En ella la matriz es $D=\operatorname{diag}(2,1)$. Por tanto, si $p=\alpha+\beta(x-1)$, después de $k$ aplicaciones queda $2^k\alpha+\beta(x-1)$. Como $\alpha=a+b$ y $\beta=b$, resulta $T^k(a+bx)=2^k(a+b)+b(x-1)$. Para $k=0$ recuperamos $a+bx$; para $k=1$, $(2a+b)+bx$. Estos dos controles detectan un posible error de coordenadas.

### Comprobación en wxMaxima

El aula propone wxMaxima. Este bloque trabaja con fracciones exactas y nombres explícitos; escribí los datos de nuevo para detectar errores de transcripción:

```maxima
kill(all)$
A: matrix([2,1],[0,1])$
P: matrix([1,-1],[0,1])$
D: matrix([2,0],[0,1])$
determinant(A);
invert(P).A.P;
A.P-P.D;
invert(A);
eigenvalues(A);
```

Los resultados de control son determinante dos, matriz diagonal $D$, matriz cero para $AP-PD$ e inversa $\begin{pmatrix}1/2&-1/2\\0&1\end{pmatrix}$. En Maxima el punto indica producto matricial; un asterisco no debe sustituirlo sin comprobar qué operación realiza. El bloque se ofrece como práctica reproducible; los resultados matemáticos se contrastaron independientemente con SymPy, sin afirmar que se ejecutó wxMaxima en esta sesión.

### Retirar las ayudas de manera gradual

1. **Primera vuelta:** repetí el problema copiando los pasos, pero calculá cada imagen y cada producto antes de mirar la respuesta.
2. **Segunda vuelta:** usá solo estas preguntas: ¿cuál es la regla en coeficientes?, ¿cuáles son sus columnas?, ¿qué dicen núcleo y determinante?, ¿hay una base propia?
3. **Tercera vuelta:** cambiá la regla a $S(p)=p+2p(1)$ y resolvé sin plantilla. **Control:** matriz $\begin{pmatrix}3&2\\0&1\end{pmatrix}$, mismos autoespacios, autovalores tres y uno; $S^k(a+bx)=3^k(a+b)+b(x-1)$.
4. **Explicación final:** justificá por qué $x-1$ conserva su valor bajo ambas reglas y por qué un polinomio constante crece. **Respuesta:** el primero se anula en uno; un constante $a$ tiene evaluación $a$, así que las reglas lo multiplican por dos o por tres.

El objetivo es que, al retirar la plantilla, puedas reconstruir el camino. Si todavía no podés explicar por qué cada columna representa una imagen o por qué una raíz requiere resolver un sistema homogéneo, volvé a esos pasos concretos: repetir el resultado final no sustituye comprender la decisión.

### Hoja de fórmulas del capítulo 34

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Regla del taller | $T(a+bx)=(2a+b)+bx$ | $T(p)=p+p(1)$ en $P_1$. |
| Iteración | $T^k(a+bx)=2^k(a+b)+b(x-1)$ | Enteros $k\ge0$; base propia $(1,x-1)$. |
| Comprobación | $AP-PD=0$ | Control exacto de diagonalización; verificar también invertibilidad de $P$. |

## Hoja de fórmulas de talleres: Talleres de integración

Estas relaciones se comprenden y practican en los capítulos 33–34. Revisá las condiciones antes de aplicarlas.

### 33. Taller guiado: decidir un método y verificar el resultado

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden de resolución | Reducir; núcleo; columnas pivote; compatibilidad; solución | Identificar el espacio de entrada y el de salida. |
| Control | $A(x_p+v)=b$ si $Ax_p=b$ y $Av=0$ | Verificación de toda la familia, no solo un punto. |
| Imagen del ejemplo | $\operatorname{Im}A=\{(r,s,t):t=r+s\}$ | Matriz simétrica del taller; no generalizar esta ecuación a otra matriz. |

### 34. Taller de aprendizaje autónomo y uso del software

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Regla del taller | $T(a+bx)=(2a+b)+bx$ | $T(p)=p+p(1)$ en $P_1$. |
| Iteración | $T^k(a+bx)=2^k(a+b)+b(x-1)$ | Enteros $k\ge0$; base propia $(1,x-1)$. |
| Comprobación | $AP-PD=0$ | Control exacto de diagonalización; verificar también invertibilidad de $P$. |

## Formulario general de Álgebra y Geometría Analítica

Consulta reunida de los capítulos, con sus condiciones. Para aprender el procedimiento, volvé al desarrollo y al ejemplo acompañado.

### 1. Matrices: datos, índices y estructura

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Igualdad | $A=B\iff a_{ij}=b_{ij}$ | Mismo tamaño; todos los índices. |
| Suma | $(A+B)_{ij}=a_{ij}+b_{ij}$ | Matrices del mismo tamaño. |
| Escalar | $(cA)_{ij}=ca_{ij}$ | El escalar multiplica todas las entradas. |

### 2. Producto matricial y transposición

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Producto | $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ | $A:m\times n$, $B:n\times p$; resultado $m\times p$. |
| Transpuesta | $(AB)^T=B^TA^T$ | Invertir el orden de los factores. |
| Partes | $A=(A+A^T)/2+(A-A^T)/2$ | Matriz real cuadrada; parte simétrica y antisimétrica. |

### 3. Inversa y ecuaciones matriciales

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Inversa | $AA^{-1}=A^{-1}A=I$ | Matriz cuadrada invertible. |
| Producto inverso | $(AB)^{-1}=B^{-1}A^{-1}$ | Ambos factores cuadrados invertibles. |
| Ecuación | $AXB=C\Rightarrow X=A^{-1}CB^{-1}$ | Respetar los lados; inversas existentes. |

### 4. Determinantes: definición y desarrollo

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden dos | $\det A=ad-bc$ | $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$. |
| Cofactor | $C_{ij}=(-1)^{i+j}M_{ij}$ | Borrar fila y columna del menor. |
| Expansión | $\det A=\sum_j a_{ij}C_{ij}$ | Una fila fija; también vale por columna. |
| Triangular | $\det A=\prod_i a_{ii}$ | Triangular superior o inferior. |

### 5. Propiedades, adjunta e invertibilidad

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Escalado total | $\det(cA)=c^n\det A$ | $A$ de orden $n$; no es escalar una sola fila. |
| Producto | $\det(AB)=\det A\det B$ | Matrices cuadradas del mismo orden. |
| Adjunta | $A^{-1}=\operatorname{adj}(A)/\det A$ | Solo si $\det A\ne0$; adjunta transpuesta de cofactores. |
| Operaciones | $F_i\leftarrow F_i+cF_j$ conserva $\det A$ | $i\ne j$; intercambio cambia signo, escalado de una fila aporta su factor. |

### 6. Sistemas lineales y eliminación de Gauss

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Sistema | $Ax=b$ | $m$ ecuaciones, $n$ incógnitas; $A:m\times n$. |
| Contradicción | $[0\ \cdots\ 0\mid c],\ c\ne0$ | Implica incompatibilidad. |
| Operaciones válidas | Intercambiar; escalar por no cero; sumar múltiplo de otra fila | Se aplica también al término independiente. |

### 7. Rango, clasificación y parámetros

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Compatibilidad | $\operatorname{rg}A=\operatorname{rg}[A\mid b]$ | Necesaria y suficiente. |
| Unicidad | $r=n$ | Sistema compatible; $n$ número de incógnitas. |
| Libertad | $n-r$ parámetros | Sistema real compatible con $r<n$. |
| Cramer | $x_i=\det A_i/\det A$ | Sistema cuadrado con determinante no nulo. |

### 8. Sistemas homogéneos y modelización

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Homogéneo | $Ax=0$ | Siempre compatible; no trivial si rango menor que número de columnas. |
| Solución completa | $x=x_p+v,\quad v\in\ker A$ | $x_p$ solución particular del sistema compatible. |
| Control de modelo | Conservación y restricciones del contexto | Revisar unidades, no negatividad e integralidad si corresponden. |

### 9. Vectores y rectas en el plano y el espacio

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Dirección | $\overrightarrow{PQ}=Q-P$ | Dos puntos distintos para definir una recta. |
| Recta | $X=P+td,\ t\in\mathbb R$ | $d\ne0$; componente cero implica coordenada constante. |
| Ángulo | $\cos\theta=(u\cdot v)/(\|u\|\|v\|)$ | Vectores no nulos, producto usual. |
| Normal | $n=u\times v$ | En $\mathbb R^3$; no nula si las direcciones son LI. |

### 10. Planos y sus representaciones

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano paramétrico | $X=P+su+tv$ | $u,v$ independientes. |
| Plano implícito | $n\cdot(X-P)=0$ | Normal $n\ne0$. |
| Corte de planos | Dirección $n_1\times n_2$ | Normales no paralelas; hallar además un punto común. |

### 11. Posiciones relativas y distancias

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Recta–plano | $t(n\cdot d)=c-n\cdot P$ | Corte único si coeficiente no nulo; si cero, comparar residuo. |
| Punto–plano | $d(P,\Pi)=\lvert n\cdot P-c\rvert/\|n\|$ | $\Pi:n\cdot X=c$, normal no nula. |
| Pie en plano | $H=P-(n\cdot P-c)n/\|n\|^2$ | Producto usual. |
| Punto–recta | $d(P,L)=\|(P-Q)\times u\|/\|u\|$ | En espacio; $L=Q+tu$, $u\ne0$. |
| Rectas no paralelas | $d=\lvert(Q-P)\cdot(u\times v)\rvert/\|u\times v\|$ | En $\mathbb R^3$; para paralelas usar punto–recta. |

### 12. Circunferencia y completado de cuadrados

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Circunferencia | $(x-h)^2+(y-k)^2=r^2$ | $r>0$; si cero, punto; si negativo el cuadrado, conjunto vacío. |
| Centro general | $h=-D/2,\ k=-E/2$ | Ecuación $x^2+y^2+Dx+Ey+F=0$. |
| Radio | $r^2=(D^2+E^2)/4-F$ | Clasificar antes de tomar raíz. |
| Tangente | $(P-C)\cdot(X-P)=0$ | $P$ pertenece a la circunferencia de radio positivo. |

### 13. Elipse: definición, ejes y reconstrucción

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Elipse horizontal | $(x-h)^2/a^2+(y-k)^2/b^2=1$ | $a>b>0$; para vertical intercambiar coordenadas. |
| Focos | $c^2=a^2-b^2$ | Eje mayor; focos a distancia $c$ del centro. |
| Excentricidad | $e=c/a$ | $0<e<1$ para focos distintos; cero es circunferencia. |
| Definición | $d(P,F_1)+d(P,F_2)=2a$ | $a>c$; centro y focos solos no fijan $a$. |

### 14. Hipérbola, asíntotas y clasificación de cónicas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Hipérbola horizontal | $(x-h)^2/a^2-(y-k)^2/b^2=1$ | $a,b>0$; término positivo decide apertura. |
| Focos | $c^2=a^2+b^2$ | $c>a$, excentricidad mayor que uno. |
| Asíntotas horizontales | $y-k=\pm(b/a)(x-h)$ | No son parte de la hipérbola no degenerada. |
| Definición | $\lvert d(P,F_1)-d(P,F_2)\rvert=2a$ | $0<a<c$. |

### 15. Grupos y espacios vectoriales

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Grupo abeliano | Suma interna, asociativa y conmutativa; neutro y opuestos | Primera estructura de un espacio vectorial. |
| Distributividad | $\alpha(u+v)=\alpha u+\alpha v$ | Junto a las demás reglas de escalares. |
| Polinomios | $P_n=\{p:\deg p\le n\}\cup\{0\}$ | Sobre el cuerpo declarado; no grado exactamente $n$. |

### 16. Subespacios, suma e intersección

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Subespacio | $\alpha u+\beta v\in S$ para $u,v\in S$ | Además $S$ no vacío; operaciones heredadas. |
| Suma | $S+T=\{s+t:s\in S,t\in T\}$ | No confundir con unión. |
| Suma directa | $S\cap T=\{0\}$ | Equivale a descomposición única en $S+T$. |

### 17. Combinaciones lineales e independencia

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Generado | $\operatorname{span}\{v_i\}=\{\sum_i\alpha_iv_i\}$ | Todas las combinaciones finitas. |
| Independencia | $\sum_i\alpha_iv_i=0\Rightarrow\alpha_i=0$ para todo $i$ | No basta independencia por pares. |
| Criterio matricial | $\ker A=\{0\}$ | Vectores como columnas; pivote en cada columna. |

### 18. Bases, dimensión y extracción de generadores

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Base | Genera y es LI | Existencia y unicidad de coordenadas. |
| Dimensiones | $\dim P_n=n+1,\quad\dim M_{m\times n}=mn$ | Operaciones usuales y cuerpo fijado. |
| Suma de subespacios | $\dim(S+T)=\dim S+\dim T-\dim(S\cap T)$ | Dimensiones finitas. |
| Extracción | Columnas pivote de la matriz original | Las filas no nulas escalonadas sirven para el espacio fila. |

### 19. Coordenadas y cambio de base

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Reconstrucción | $v=S_B[v]_B$ | Columnas de $S_B$ son los vectores de $B$ en la base canónica. |
| Cambio | $[v]_C=P_{C\leftarrow B}[v]_B$ | La columna $j$ es $[b_j]_C$. |
| Matriz de cambio | $P_{C\leftarrow B}=S_C^{-1}S_B$ | Bases del mismo espacio y misma representación de referencia. |
| Inversión | $P_{B\leftarrow C}=P_{C\leftarrow B}^{-1}$ | Cambio en sentido contrario. |

### 20. Rango, nulidad y espacios de una matriz

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Rango–nulidad | $\operatorname{rg}A+\dim\ker A=n$ | $n$ número de columnas. |
| Imagen | $\operatorname{Col}A=\operatorname{span}\{\text{columnas de }A\}$ | Subespacio del espacio de salida $\mathbb R^m$. |
| Compatibilidad geométrica | $Ax=b$ compatible $\iff b\in\operatorname{Col}A$ | La solución, si existe, es particular más núcleo. |

### 21. Producto interior, normas y ángulos

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Norma inducida | $\|v\|=\sqrt{\langle v,v\rangle}$ | Producto interior declarado. |
| Cauchy–Schwarz | $\lvert\langle u,v\rangle\rvert\le\|u\|\|v\|$ | Igualdad si los vectores son dependientes. |
| Distancia | $d(u,v)=\|u-v\|$ | Depende del producto interior. |
| Producto ponderado | $\langle u,v\rangle=u^TGv$ | $G$ real simétrica definida positiva. |

### 22. Ortogonalidad, proyección y complemento

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Proyección sobre vector | $p=\langle v,u\rangle u/\|u\|^2$ | $u\ne0$. |
| Proyección sobre subespacio | $p=\sum_i\langle v,q_i\rangle q_i$ | Los $q_i$ forman base ortonormal del subespacio. |
| Complemento | $V=S\oplus S^\perp$ | Producto interior, dimensión finita. |
| Distancia mínima | $d(v,S)=\|v-\operatorname{proj}_S v\|$ | La proyección es el único punto más próximo. |

### 23. Gram–Schmidt: construir una base ortonormal

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Gram–Schmidt | $u_k=v_k-\sum_{j<k}\langle v_k,u_j\rangle u_j/\|u_j\|^2$ | Entrada LI; usar producto y vectores ortogonales construidos. |
| Normalización | $q_k=u_k/\|u_k\|$ | Solo residuos no nulos. |
| Control | $\langle q_i,q_j\rangle=\delta_{ij}$ | Comprobar generado y ortonormalidad. |

### 24. Integración de espacios: de ecuaciones a una base útil

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Plano de estudio | $S=\{x+y+z=0\}$ | Base $(-1,1,0),(-1,0,1)$. |
| Descomposición | $v=\operatorname{proj}_S v+\operatorname{proj}_{S^\perp}v$ | Producto usual en el ejemplo; componentes perpendiculares. |
| Coordenadas ortonormales | $[p]_Q=(\langle p,q_i\rangle)_i$ | Solo si $p\in S$ y $Q$ es base ortonormal de $S$. |

### 25. Transformaciones lineales: aprender a leer una regla

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Linealidad | $T(\alpha u+\beta v)=\alpha T(u)+\beta T(v)$ | Para todos los vectores y escalares. |
| Test necesario | $T(0)=0$ | No es suficiente para probar linealidad. |
| Construcción | $T(\sum_i\alpha_ib_i)=\sum_i\alpha_iT(b_i)$ | Las imágenes de una base determinan una única aplicación. |

### 26. Núcleo, imagen y teorema de la dimensión

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Núcleo | $\ker T=\{v:T(v)=0\}$ | Subespacio del dominio. |
| Imagen | $\operatorname{Im}T=\{T(v):v\in V\}$ | Subespacio del codominio. |
| Dimensión | $\dim V=\dim\ker T+\dim\operatorname{Im}T$ | Dominio de dimensión finita. |
| Inyectividad | $T$ inyectiva $\iff\ker T=\{0\}$ | Para aplicaciones lineales. |

### 27. Matriz de una transformación en bases elegidas

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Columnas | $[T]_{C\leftarrow B}=([T(b_1)]_C\ \cdots\ [T(b_n)]_C)$ | Orden y bases declarados. |
| Aplicación | $[T(v)]_C=[T]_{C\leftarrow B}[v]_B$ | Matriz $m\times n$. |
| Desde matriz canónica | $[T]_{C\leftarrow B}=S_C^{-1}AS_B$ | Primero convertir entrada; después aplicar; después convertir salida. |

### 28. Isomorfismos, composición y representación

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Isomorfismo | Lineal, inyectiva y sobreyectiva | Inversa lineal; espacios de igual dimensión finita admiten alguno. |
| Composición | $[S\circ T]=[S][T]$ | Bases intermedias compatibles; primero actúa $T$. |
| Igual dimensión | Inyectiva $\iff$ sobreyectiva $\iff$ isomorfismo | Aplicación lineal entre espacios finitos de igual dimensión. |

### 29. Autovalores y autovectores desde su significado

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Autovector | $Av=\lambda v,\quad v\ne0$ | El cero nunca se llama autovector. |
| Característico | $p_A(t)=\det(tI-A)$ | Autovalores son raíces en el cuerpo elegido. |
| Autoespacio | $E_\lambda=\ker(A-\lambda I)$ | Incluye cero; sus elementos no nulos son autovectores. |

### 30. Multiplicidades y diagonalización

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Diagonalización | $AP=PD\iff A=PDP^{-1}$ | Columnas de $P$ autovectores LI; autovalores de $D$ en igual orden. |
| Multiplicidad geométrica | $m_g(\lambda)=n-\operatorname{rg}(A-\lambda I)$ | $1\le m_g\le m_a$ para cada autovalor. |
| Criterio | $m_g=m_a$ para cada raíz | Además el característico debe escindirse en el cuerpo elegido. |

### 31. Semejanza, potencias y Cayley–Hamilton

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Semejanza | $B=P^{-1}AP$ | Conserva característico, traza, determinante y rango. |
| Potencias | $A^k=PD^kP^{-1}$ | Diagonalización válida; $k\ge0$, o entero si invertible. |
| Cayley–Hamilton | $p_A(A)=0$ | El término constante multiplica $I$; no exige diagonalización. |
| Inversa por polinomio | Si $p_A=t^2-st+d$, $A^{-1}=(sI-A)/d$ | $d\ne0$; caso de orden dos. |

### 32. Matrices simétricas y diagonalización ortogonal

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Ortogonal | $Q^TQ=I\Rightarrow Q^{-1}=Q^T$ | Matriz real cuadrada. |
| Teorema espectral | $A=QDQ^T$ | $A$ real simétrica; columnas de $Q$ autovectores ortonormales. |
| Forma cuadrática | $X^TAX=Y^TDY$, $X=QY$ | Repartir el coeficiente mixto entre entradas simétricas. |

### 33. Taller guiado: decidir un método y verificar el resultado

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Orden de resolución | Reducir; núcleo; columnas pivote; compatibilidad; solución | Identificar el espacio de entrada y el de salida. |
| Control | $A(x_p+v)=b$ si $Ax_p=b$ y $Av=0$ | Verificación de toda la familia, no solo un punto. |
| Imagen del ejemplo | $\operatorname{Im}A=\{(r,s,t):t=r+s\}$ | Matriz simétrica del taller; no generalizar esta ecuación a otra matriz. |

### 34. Taller de aprendizaje autónomo y uso del software

| Relación | Expresión de consulta | Condiciones |
|---|---|---|
| Regla del taller | $T(a+bx)=(2a+b)+bx$ | $T(p)=p+p(1)$ en $P_1$. |
| Iteración | $T^k(a+bx)=2^k(a+b)+b(x-1)$ | Enteros $k\ge0$; base propia $(1,x-1)$. |
| Comprobación | $AP-PD=0$ | Control exacto de diagonalización; verificar también invertibilidad de $P$. |

## Fuentes y correspondencia con el material de la cátedra

Se consultó el aula 01292, edición 2025-2C. Los documentos se identifican aquí para poder contrastar el recorrido; sus enlaces pueden requerir sesión institucional. La portada del programa indica 2025-1C. Las discrepancias administrativas entre documentos de distintas ediciones no se resuelven como si fueran reglas vigentes.

### Programa e información de la cursada

- [Información general. Álgebra y Geometría Analítica. 2° cuat. 2025.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299956) · 5 páginas.
- [Programa_Algebra y Geometría Analítica_1c_2025.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299715) · 6 páginas.
- [Cronograma  AGA 2025_2C.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=312876) · 6 páginas.

### Unidad 1: matrices y determinantes

- [Matrices y Determinantes. Apunte Teórico.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299725) · 20 páginas.
- [Matrices. Operaciones. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299727) · 5 páginas.
- [Determinantes. Propiedades. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299728) · 12 páginas.
- [TP1 Matrices y Determinantes.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299733) · 3 páginas.
- [Solución TP Matrices.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299734) · 5 páginas.
- [Solución Matrices.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299735) · 2 páginas.
- [Solución TP DETERMINANTES.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299736) · 3 páginas.

### Unidad 2: sistemas

- [sistemas.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299738) · 17 páginas.
- [Clasificación de Sistemas. Expresión matricial.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299740) · 2 páginas.
- [TP2 Sistema de Ecuaciones.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299749) · 2 páginas.
- [Solución Práctica de Sistemas de ecuaciones.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299750) · 9 páginas.

### Unidad 3: geometría

- [Practico revisión .pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299720) · 1 páginas.
- [6_Rectas_y_Planos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299752) · 10 páginas.
- [Planos. Representación gráfica.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299755) · 6 páginas.
- [Cónicas. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299757) · 5 páginas.
- [TP3 Geometria Analítica.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299759) · 4 páginas.
- [Solución  Cónicas.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299761) · 7 páginas.
- [Soluciones TP 6.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299760) · 4 páginas.
- [Apunte Cónicas.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299753) · 16 páginas.

### Unidad 4: espacios, coordenadas y producto interior

- [Espacios_Vectoriales_Subespacios_ApunteTeórico.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299763) · 6 páginas.
- [Apunte C. Lineal - Independencia Lineal.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299764) · 6 páginas.
- [Apunte Base - Dimensión.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299765) · 5 páginas.
- [Apunte Coordenadas y Cambio de base..pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299766) · 3 páginas.
- [Apunte Rango_Nulidad.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299767) · 3 páginas.
- [Apunte Espacios con Producto Interior .pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299768) · 14 páginas.
- [Ejemplos de subespacios vectoriales.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299770) · 3 páginas.
- [Combinación e Independencia Lineal. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299771) · 6 páginas.
- [Base-Dimensión. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299772) · 6 páginas.
- [cambio de baseEjemplo 2.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299773) · 1 páginas.
- [cambio de baseEjemplo 1.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299774) · 1 páginas.
- [cambio de base ejercicio 3.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299775) · 3 páginas.
- [Coordenadas_Cambio de Base_Nulidad. Ejemplos Resueltos.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299776) · 7 páginas.
- [TP4 Espacios Vectoriales.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299780) · 4 páginas.
- [SolucionSubespacio.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299781) · 4 páginas.
- [Solución Generadores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299783) · 3 páginas.
- [Sol Base y dimensión.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299784) · 3 páginas.
- [Soluciones TP2 Coordenadas y Cambio de base.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299785) · 2 páginas.
- [Resolución ejercicio7. Conjunto de Generadores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299786) · 3 páginas.
- [Resolución ejercicio 7c. Conjunto de Generadores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299787) · 1 páginas.
- [Resolución Ejercicio 8. Conjunto de GEneradores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299788) · 2 páginas.
- [Resolución  Ejercicio  9   Conjunto de Generadores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299789) · 1 páginas.
- [Respuestas. Espacios con Producto Interior.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299790) · 3 páginas.

### Unidad 5: transformaciones

- [Apunte Transformaciones Lineales.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299792) · 13 páginas.
- [TP5 Transformaciones Lineales.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299796) · 2 páginas.
- [Solución TL.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299797) · 3 páginas.

### Unidad 6: autovalores y diagonalización

- [Apunte Autovalores y Autovectores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299799) · 17 páginas.
- [Autovalores y autovectores con Wxmáxima.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299801) · 2 páginas.
- [TP6 Autovalores y Autovectores.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299805) · 2 páginas.
- [Ejercicios Resueltos Autovalores y Autovectores. T.P.Nº 5.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299807) · 5 páginas.
- [Ejercicios Resueltos Matrices Semejantes. Diagonalización. T.P.Nº 5.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299808) · 4 páginas.
- [Sol TP5.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299806) · 6 páginas.

### Integración y evaluaciones históricas

- [Extras.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299810) · 2 páginas.
- [Parcial.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299811) · 1 páginas.
- [Parcial 2.pdf](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=299812) · 1 páginas.

Los siete archivos de Maxima sobre ortogonalización y proyección se conservaron y se extrajo su contenido; no se afirma haberlos ejecutado en Maxima. Algunos archivos de soluciones conservan números de TP de otra edición: se clasificaron por su contenido, no solo por el nombre. Los parciales descargados corresponden a 2024; sus fechas y criterios no se trasladan a una cursada actual. El recurso de Drive para preparar el final devolvió 404 y quedó fuera de la cobertura.

La errata del primer ejercicio del TP6 se comprobó por multiplicación directa. Las demostraciones y ejemplos originales se desarrollaron para acompañar el aprendizaje, sin reproducir páginas completas de apuntes o libros. La bibliografía mencionada por la cátedra puede ampliar la práctica; no se presenta como bibliografía íntegramente leída para esta edición.
