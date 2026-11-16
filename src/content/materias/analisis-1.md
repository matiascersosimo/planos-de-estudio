---
nombre: "Análisis Matemático 1"
code: "01291"
resumen: "Aprender cálculo paso a paso: herramientas previas, derivadas y aproximación, integrales y sus aplicaciones, ecuaciones diferenciales, sucesiones y series, con ejemplos completos y práctica razonada."
---

## Cómo estudiar AM1 desde la primera explicación

Este manual desarrolla Análisis Matemático 1, **01291**, tomando como referencia el programa y el aula de UNNOBA **2025–2C**. El programa disponible lleva en su cubierta «1er cuatrimestre 2025»; se conserva esa diferencia de fechas y se contrasta su contenido con las unidades del aula. La materia parte de funciones y reglas de derivación. Aquí las recuperamos antes de utilizarlas, para que el recorrido no dependa de recordar una fórmula aislada.

La propuesta es aprender a **plantear, elegir, resolver y comprobar**. Cada capítulo empieza por una pregunta y desarrolla una decisión. Los ejemplos muestran cuentas intermedias, las razones del método y sus restricciones. La práctica ofrece un caso acompañado, otro con pista y otro autónomo con autocorrección. Una respuesta correcta por casualidad no cierra el aprendizaje: intentá explicar por qué cada paso es válido y qué cambiaría si cambia el enunciado.

### Una sesión de estudio que podés repetir

1. Leé el problema y expresá con tus palabras qué se pide: valor, tasa, acumulación, función o convergencia.
2. Escribí dominio, unidades e hipótesis antes de elegir una herramienta.
3. Hacé una predicción de signo, escala o forma. No tiene que ser exacta para ser útil.
4. Tapá la solución y reconstruí las decisiones en papel. Si falta un paso, volvé al capítulo previo al que remite.
5. Contrastá con derivación, sustitución, cota, segundo método o interpretación gráfica, según el caso.
6. Recién entonces usá la hoja de fórmulas como recordatorio. Si no podés explicar sus condiciones, releé el desarrollo.

La calculadora y el cálculo simbólico ayudan a contrastar, pero una aproximación decimal no prueba convergencia ni una gráfica de pantalla verifica todas las hipótesis de un teorema. Esta edición incluye comprobaciones exactas y numéricas de ejemplos seleccionados; sigue pendiente la revisión académica externa. No se presenta como garantía de aprobación ni como sustitución de las indicaciones de la cátedra.

## Mapa de unidades y recorrido acompañado

La numeración de los 41 capítulos es editorial. Las unidades 1 a 6 corresponden al programa disponible; el aula añade una unidad 0 de revisión. El taller final integra herramientas y no se presenta como unidad oficial adicional.

| Unidad del aula | Capítulos | Qué deberías poder hacer al terminar |
|---|---|---|
| 0. Revisión de derivadas | 1–3 | Leer dominios y signos, distinguir límite de valor y derivar identificando estructura. |
| 1. Aplicaciones de las derivadas | 4–12 | Justificar extremos y gráficos, optimizar, usar teoremas y construir aproximaciones con error. |
| 2. Integrales | 13–19 | Distinguir primitiva y acumulación; elegir sustitución, partes, fracciones simples o cambio trigonométrico. |
| 3. Aplicaciones e impropias | 20–23 | Plantear áreas, promedios, volúmenes, longitudes y superficies; tratar singularidades con límites. |
| 4. Ecuaciones diferenciales | 24–30 | Reconocer una forma resoluble, transformar, aplicar datos y verificar función e intervalo. |
| 5. Sucesiones y series numéricas | 31–36 | Separar términos de sumas, demostrar convergencia, elegir criterio y certificar errores. |
| 6. Series de funciones y potencias | 37–40 | Hallar intervalos completos, justificar representación, operar series y resolver recurrencias de coeficientes. |
| Taller integrador | 41 | Resolver sin que el enunciado anuncie el método y defender las hipótesis utilizadas. |

Si una cuenta algebraica te bloquea, empezá por 1; si derivás pero no sabés interpretar, 3–7; si no distinguís área de integral, 14 y 20. Para series necesitás límites y dominio, no sólo recordar nombres de criterios. Las figuras son originales y esquemáticas; las conclusiones se justifican en el texto.

## 1. Leer funciones y preparar el álgebra que vamos a usar

Antes de derivar o integrar necesitamos entender qué expresión estamos mirando. Una función asigna a cada entrada admitida una única salida. En $f(x)=\sqrt{x-1}$, la entrada es $x$ y la salida es la raíz de $x-1$. Escribir $f(5)=2$ significa reemplazar **todas** las apariciones de $x$ por 5 y calcular $\sqrt{5-1}$. No significa multiplicar $f$ por 5. En un problema, una misma letra puede representar tiempo, longitud o una variable abstracta; el significado lo establece el modelo.

### Empezar por el dominio

El dominio reúne las entradas permitidas. Sobre los reales, un denominador no puede ser cero, una raíz de índice par exige radicando no negativo y un logaritmo exige argumento positivo. Estas restricciones se combinan; no se elige sólo una.

Para $g(x)=\ln(x-1)/(x-3)$, primero pedimos $x-1>0$, de donde $x>1$. Después excluimos $x=3$. El dominio es $(1,3)\cup(3,\infty)$. Si más adelante una cuenta produce $x=3$ como candidato, no podremos evaluarlo: nunca fue entrada de la función.

Una simplificación también conserva restricciones. En

$$
\frac{x^2-1}{x-1}=\frac{(x-1)(x+1)}{x-1}=x+1\qquad(x\ne1),
$$

cancelamos un factor porque es no nulo. La expresión original sigue sin estar definida en 1, aunque el polinomio simplificado sí lo esté. Esta distinción será decisiva en límites e integrales impropias.

### Factorizar para saber el signo

Resolver $(x-1)(x+2)>0$ no significa pedir que ambos factores sean positivos exclusivamente. El producto también es positivo si ambos son negativos. Los ceros $-2$ y 1 dividen la recta en tres intervalos. En $x=-3$, ambos factores son negativos; en $x=0$, sus signos son distintos; en $x=2$, ambos son positivos. La solución es $(-\infty,-2)\cup(1,\infty)$. Cada muestra representa su intervalo porque los factores continuos no cambian de signo sin pasar por cero.

Al multiplicar una desigualdad por una expresión de signo desconocido no podemos conservar automáticamente su orientación. Por eso es más seguro llevar todo a un miembro y estudiar factores. Dividir por $x$ en una desigualdad antes de decidir si $x$ es positivo, negativo o cero puede perder o agregar soluciones.

### Potencias, logaritmos y radianes

Convertimos $1/x^3$ en $x^{-3}$ y $\sqrt{x}$ en $x^{1/2}$ cuando facilita aplicar reglas, conservando el dominio. Para $a,b>0$, $\ln(ab)=\ln a+\ln b$, mientras que $\ln(a+b)$ **no** se separa de ese modo. La identidad $\ln|x|$ admite $x\ne0$ y será útil al integrar $1/x$.

Las fórmulas de derivación de seno y coseno se escriben con el argumento en **radianes**. Para usar $70^\circ$ en un Taylor centrado en $\pi/2$, convertimos primero $70^\circ=7\pi/18$; la diferencia respecto del centro es $-\pi/9$, no $70-90$.

### Practicar antes de avanzar

**Con ayuda.** Hallá el dominio de $\sqrt{4-x}/(x+1)$. El radicando exige $x\le4$ y el denominador excluye $-1$. Resultado: $(-\infty,-1)\cup(-1,4]$. El 4 está incluido porque una raíz puede valer cero.

**Con pista.** Simplificá $(x^2-4)/(x+2)$ anotando qué valor no recuperás. Factorizá el numerador. **Respuesta razonada:** queda $x-2$ para $x\ne-2$; el agujero en $-2$ no desaparece de la función original.

**Sin ayuda.** Resolvé $(x-3)/(x+1)\le0$. **Autocorrección:** los puntos separadores son $-1$ y 3. El cociente es negativo entre ellos, cero en 3 e indefinido en $-1$. Solución $(-1,3]$. Si incluiste $-1$, revisá dominio; si excluiste 3, revisá la igualdad.

### Hoja de fórmulas del capítulo 1

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\ln u$: $u>0$; $\sqrt u$: $u\ge0$ | Restricciones de dominio real. | Combinar con denominadores no nulos. |
| $\ln(ab)=\ln a+\ln b$ | Producto convertido en suma. | $a,b>0$; no se aplica a una suma. |

## 2. Límites y continuidad: mirar cerca sin confundir con evaluar

Un límite describe a qué valor se acercan las salidas cuando la entrada se aproxima a un punto. La entrada puede no alcanzarlo. En el cociente $(x^2-1)/(x-1)$, evaluar en 1 es imposible, pero para $x\ne1$ las salidas son $x+1$: se acercan a 2. Por eso el límite vale 2. El límite y el valor puntual responden preguntas distintas.

### Un procedimiento que explica cada decisión

Consideremos $\lim_{x\to2}(x^2-4)/(x-2)$. Primero intentamos sustitución y aparece $0/0$. Esto **no es el resultado**: indica que numerador y denominador se anulan y que todavía no conocemos su relación. Factorizamos $x^2-4=(x-2)(x+2)$; cerca de 2, con $x\ne2$, podemos cancelar. La función coincide allí con $x+2$, cuyo límite es 4. No utilizamos L'Hôpital porque una identidad algebraica ya resolvió el problema.

En $\lim_{x\to0}(\sqrt{1+x}-1)/x$, la factorización no es visible. Multiplicamos por el conjugado:

$$
\frac{\sqrt{1+x}-1}{x}\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}
=\frac{1}{\sqrt{1+x}+1}\longrightarrow\frac12.
$$

La igualdad se usa para $x\ne0$, donde la cancelación es válida. El nuevo denominador ya no tiende a cero.

### Laterales, infinito y continuidad

Para que exista un límite bilateral finito en un punto interior, ambos laterales deben existir y coincidir. En $1/x$, al acercarse a cero por la derecha las salidas crecen sin cota; por la izquierda decrecen sin cota. Escribimos límites laterales $+\infty$ y $-\infty$. El símbolo infinito describe comportamiento, no un número real que podamos sumar o reemplazar como cualquier otro.

Una función es continua en $a$ cuando está definida allí y $\lim_{x\to a}f(x)=f(a)$. Sobre un intervalo cerrado, la continuidad en sus extremos se interpreta desde dentro. La función que vale $x+1$ para $x\ne1$ y 10 en 1 tiene límite 2 en 1, pero no es continua allí. Cambiar un único valor no modifica ese límite.

Para límites al infinito, comparar potencias ayuda. En $(3x^2+1)/(x^2-4)$ dividimos numerador y denominador por $x^2$ y obtenemos $(3+1/x^2)/(1-4/x^2)\to3$. La frase «domina el mayor grado» resume esta cuenta; conviene poder reconstruirla.

### Lo que vamos a necesitar más adelante

La continuidad permite aplicar teoremas de extremos y del cálculo integral. El límite permite definir derivadas, integrales impropias y sumas infinitas. En cada caso cambia el objeto que se aproxima, pero se conserva la pregunta: ¿hay un único valor al que nos acercamos?

**Con ayuda.** $\lim_{x\to3}(x^2-9)/(x-3)=\lim(x+3)=6$, aunque el cociente original no tenga valor en 3.

**Con pista.** ¿Qué falla para el límite bilateral de $|x|/x$ en cero? Separá $x>0$ y $x<0$. **Respuesta:** los laterales son 1 y $-1$; no existe límite bilateral.

**Sin ayuda.** Elegí $k$ para que $h(x)=(x^2-4)/(x-2)$ si $x\ne2$, y $h(2)=k$, sea continua. **Respuesta:** $k=4$, porque la continuidad obliga a igualar valor y límite. No cualquier elección que «complete el dominio» sirve.

### Hoja de fórmulas del capítulo 2

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Continuidad: $\lim_{x\to a}f(x)=f(a)$ | Límite y valor coinciden. | Ambos deben existir; en bordes se usan laterales pertinentes. |
| $\lim_{x\to0}\sin x/x=1$ | Límite notable. | Ángulos en radianes. |

## 3. Derivar con significado y comprobar las reglas

Una tasa media de cambio compara variaciones: $[f(a+h)-f(a)]/h$. Si la entrada es tiempo y la salida posición, tiene unidades de velocidad. La derivada toma el límite de esas tasas cuando $h\to0$. Geométricamente es la pendiente de la tangente; no es la altura de la gráfica.

Para $f(x)=x^2$ en $a=3$,

$$
\frac{(3+h)^2-9}{h}=\frac{6h+h^2}{h}=6+h\longrightarrow6.
$$

El valor de la función es $f(3)=9$ y el de la derivada es $f'(3)=6$. La tangente es $y=9+6(x-3)$ porque pasa por $(3,9)$ y tiene esa pendiente. Tener clara esta separación evita confundir ceros de la función con puntos de derivada nula.

### De la estructura de la expresión a la regla

Derivamos una suma término a término y sacamos factores constantes. Para un producto, $(uv)'=u'v+uv'$; para un cociente, $(u/v)'=(u'v-uv')/v^2$ donde $v\ne0$. La regla de la cadena atiende a una composición: $(F(g(x)))'=F'(g(x))g'(x)$. El factor interior no es opcional.

Derivemos $q(x)=(x^2+1)^3e^{-x}$. Hay un **producto** de dos factores, y cada factor tiene estructura interna. Primero

$$
[(x^2+1)^3]'=3(x^2+1)^2(2x),\qquad (e^{-x})'=-e^{-x}.
$$

Después aplicamos producto y factorizamos lo común:

$$
q'=6x(x^2+1)^2e^{-x}-(x^2+1)^3e^{-x}
=e^{-x}(x^2+1)^2[6x-(x^2+1)].
$$

La forma factorizada será más útil para estudiar signos que la expansión de todos sus términos. No derivamos «todo al cubo» ni multiplicamos simplemente las derivadas de los factores.

### Cuando no hay derivada y cuando derivamos una relación

Para $|x|$, la pendiente es $-1$ a la izquierda de cero y 1 a la derecha: no existe una única derivada en cero. Ser continua no basta para ser derivable. La implicación que sí vale es derivabilidad implica continuidad.

Si $x^2+y^2=25$ y localmente $y$ depende de $x$, derivamos ambos miembros: $2x+2y\,y'=0$. El factor $y'$ proviene de la cadena. Para $y\ne0$, $y'=-x/y$. En $(3,4)$ la pendiente es $-3/4$. En $(5,0)$ esa fórmula no da pendiente finita; la circunferencia tiene tangente vertical y allí no describe una función derivable $y(x)$ del mismo modo.

### Practicar y diagnosticar errores

**Con ayuda.** $(\ln(1+x^2))'=2x/(1+x^2)$: derivamos el logaritmo y multiplicamos por la derivada de su argumento. El dominio es todo real porque $1+x^2>0$.

**Con pista.** Derivá $(x+2)/(x-2)$ y simplificá. **Respuesta:** $[(x-2)-(x+2)]/(x-2)^2=-4/(x-2)^2$, para $x\ne2$. Si obtuviste 1, derivaste numerador y denominador por separado, operación que no da la derivada de un cociente.

**Sin ayuda.** Hallá la tangente a $y=\sin(2x)$ en cero. **Respuesta:** pasa por $(0,0)$ y tiene pendiente $2\cos0=2$, luego $y=2x$. Si falta el 2, repasá cadena. Las reglas básicas se reúnen también en el formulario general.

![La tasa media se acerca a la pendiente tangente de x² en x=1.](/planos-de-estudio/images/am1/tangente.svg)

*Figura original. La tasa media se acerca a la pendiente tangente de x² en x=1.*

### Hoja de fórmulas del capítulo 3

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$ | Tasa instantánea y pendiente. | Límite finito existente; $h\ne0$ en el cociente. |
| $(uv)'=u'v+uv'$; $(u/v)'=(u'v-uv')/v^2$ | Producto y cociente. | Funciones derivables; $v\ne0$. |
| $(F\circ g)'=F'(g)g'$ | Regla de la cadena. | Derivabilidad de ambas composiciones en los puntos pertinentes. |

## Formulario de la unidad 0: Herramientas previas y revisión de derivadas

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\ln u$: $u>0$; $\sqrt u$: $u\ge0$ | Restricciones de dominio real. | Combinar con denominadores no nulos. |
| $\ln(ab)=\ln a+\ln b$ | Producto convertido en suma. | $a,b>0$; no se aplica a una suma. |
| Continuidad: $\lim_{x\to a}f(x)=f(a)$ | Límite y valor coinciden. | Ambos deben existir; en bordes se usan laterales pertinentes. |
| $\lim_{x\to0}\sin x/x=1$ | Límite notable. | Ángulos en radianes. |
| $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$ | Tasa instantánea y pendiente. | Límite finito existente; $h\ne0$ en el cociente. |
| $(uv)'=u'v+uv'$; $(u/v)'=(u'v-uv')/v^2$ | Producto y cociente. | Funciones derivables; $v\ne0$. |
| $(F\circ g)'=F'(g)g'$ | Regla de la cadena. | Derivabilidad de ambas composiciones en los puntos pertinentes. |

## 4. Extremos: distinguir candidatos de conclusiones

Buscar un máximo puede significar buscar el valor más alto de todo un dominio o solamente de una zona cercana. $f(x)=x^2$ tiene mínimo absoluto 0 en cero sobre $\mathbb R$, pero no máximo absoluto: siempre podemos elegir una entrada de mayor módulo. En $[-1,2]$, sí tiene máximo 4 en 2. El dominio forma parte del problema.

Un extremo local compara valores en un entorno; uno absoluto compara con todos los puntos considerados. En un interior donde hay derivada, un extremo local obliga a $f'=0$ por el teorema de Fermat. También puede haber extremos sin derivada, como el mínimo de $|x|$ en cero. Llamamos número crítico a un punto del dominio donde la derivada se anula o no existe. Un extremo en un borde requiere examinar ese borde; no hay que forzarlo a cumplir una condición interior.

Podemos ver la razón de Fermat con cocientes. Si $a$ es un máximo local, $f(a+h)-f(a)\le0$ para incrementos pequeños. Para $h>0$, el cociente incremental es no positivo; para $h<0$, es no negativo. Si ambos laterales convergen a una misma derivada finita, ésta tiene que ser a la vez no positiva y no negativa: vale cero. En un mínimo se invierten las desigualdades y se obtiene la misma conclusión. En un borde no disponemos necesariamente de ambos lados, y por eso el razonamiento cambia.

### Resolver un problema cerrado sin omitir los bordes

Busquemos extremos absolutos de $f(x)=3x^4-4x^3$ en $[-1,2]$. Es un polinomio, por lo que es continua; el intervalo es cerrado y acotado. El teorema del valor extremo garantiza que ambos extremos existen. Esta garantía nos permite buscar sin preguntarnos si el mayor valor sólo se aproxima sin alcanzarse.

Derivamos y factorizamos:

$$
f'(x)=12x^3-12x^2=12x^2(x-1).
$$

Los críticos interiores son 0 y 1. Comparamos sus **valores de función**, junto con los de los extremos del intervalo:

| Entrada candidata | Cálculo de la salida | Valor |
|---|---|---|
| $-1$ | $3(-1)^4-4(-1)^3$ | $7$ |
| $0$ | $0$ | $0$ |
| $1$ | $3-4$ | $-1$ |
| $2$ | $3\cdot16-4\cdot8$ | $16$ |

El mínimo absoluto es $-1$, alcanzado en $x=1$; el máximo absoluto es 16, alcanzado en $x=2$. No confundimos el lugar con el valor: «máximo en 2» y «valor máximo 16» contienen información diferente. No hace falta clasificar primero cada crítico como extremo local para resolver esta comparación global.

### Por qué un crítico no garantiza nada

Para $x^3$, la derivada vale cero en cero, pero la función atraviesa ese punto aumentando. Para $|x|$, en cambio, no hay derivada en cero y sí hay mínimo. La condición de candidato abre una investigación; el cambio de signo o una comparación de valores la cierra.

Si falta alguna hipótesis del teorema de existencia no concluimos automáticamente que los extremos no existen. En $(0,1)$, $f(x)=x$ no alcanza ninguno; $x^2$ sobre $(-1,1)$ alcanza mínimo pero no máximo. Hay que estudiar el caso concreto.

**Con ayuda.** Para $x^2$ en $[-2,1]$, comparamos $f(-2)=4$, $f(0)=0$ y $f(1)=1$: máximo 4, mínimo 0.

**Con pista.** ¿Qué entrada falta si estudiás $x^3$ en $[-1,2]$ y sólo resolvés $f'=0$? **Respuesta:** ambos bordes. Sus salidas $-1$ y 8 son los extremos absolutos; el crítico interior no lo es.

**Sin ayuda.** ¿Tiene máximo $f(x)=1/x$ en $(0,1]$? **Respuesta:** no: crece sin cota cuando $x\to0^+$. Tiene mínimo 1 en 1. Anotá qué hipótesis impide invocar el teorema sobre ese dominio.

### Hoja de fórmulas del capítulo 4

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Crítico: $f'(a)=0$ o $f'(a)$ no existe | Candidato interior a extremo. | $a$ debe pertenecer al dominio; revisar también bordes. |
| Continua en $[a,b]$ implica máximo y mínimo absolutos | Teorema del valor extremo. | Intervalo cerrado, acotado y no vacío; comparar valores de función. |

## 5. Crecimiento y decrecimiento: construir una tabla de signos

La derivada es una tasa, de modo que su signo informa cómo cambia la función al aumentar la entrada. Si $f'>0$ en un intervalo, $f$ es estrictamente creciente allí; si $f'<0$, decreciente. La palabra **intervalo** importa: una discontinuidad no permite conectar sin más dos ramas separadas. El teorema de Lagrange, que veremos después, justifica este puente entre comportamiento puntual y global.

### Una tabla, paso a paso

Sea $f(x)=2x^3+3x^2-12x$. Su dominio es real. Derivamos:

$$
f'(x)=6x^2+6x-12=6(x+2)(x-1).
$$

Los ceros son $-2$ y 1. No hay puntos sin derivada. Dividimos la recta y anotamos signos de **cada factor**, no del valor de $f$:

| Intervalo | $x+2$ | $x-1$ | $f'$ | Movimiento de $f$ |
|---|---|---|---|---|
| $(-\infty,-2)$ | $-$ | $-$ | $+$ | Crece |
| $(-2,1)$ | $+$ | $-$ | $-$ | Decrece |
| $(1,\infty)$ | $+$ | $+$ | $+$ | Crece |

En $-2$ pasa de crecer a decrecer: máximo local. Su altura es $f(-2)=-16+12+24=20$. En 1 pasa de decrecer a crecer: mínimo local, $f(1)=2+3-12=-7$. Estos extremos son locales; el polinomio cúbico no tiene extremos absolutos sobre toda la recta.

### No sumar intervalos separados

Para $g(x)=x+1/x$, el dominio excluye cero y $g'=1-1/x^2=(x-1)(x+1)/x^2$. Los separadores son $-1$, **0** y 1. El denominador es positivo donde existe; el signo de la derivada es positivo fuera de $[-1,1]$ y negativo en $(-1,0)$ y $(0,1)$. No escribimos «decrece en $(-1,1)$», porque la función no existe en todo ese intervalo. Cero no es crítico de $g$: no pertenece a su dominio, aunque sí separa el estudio.

Un crítico con factor de multiplicidad par puede no cambiar de signo. En $3x^4-4x^3$, el factor $x^2$ no cambia de signo al cruzar cero, así que ese crítico no produce extremo. Un cuadro que incluya los intervalos a ambos lados lo revela sin necesidad de adivinar por la gráfica.

### Usar el resultado para explicar, no sólo para dibujar flechas

Si un costo disminuye hasta cierta cantidad y aumenta después, el cambio de signo negativo a positivo identifica un mínimo interior. La interpretación depende del dominio del modelo: una cantidad real admisible, una cantidad entera o una restricción física no siempre admiten la misma conclusión directa.

**Con ayuda.** Para $f'=2(x-3)$, la derivada es negativa antes de 3 y positiva después. Si $f$ es continua allí, hay mínimo local en 3.

**Con pista.** Clasificá cero para $f(x)=x^4$ y para $g(x)=x^3$. **Respuesta:** $f'=4x^3$ cambia de $-$ a $+$, mínimo; $g'=3x^2$ es positiva a ambos lados, sin extremo.

**Sin ayuda.** Estudiá monotonía de $\ln x-x$ sobre $x>0$. **Respuesta:** $f'=(1-x)/x$; crece en $(0,1)$ y decrece en $(1,\infty)$. Máximo local y absoluto $-1$ en 1, porque esas variaciones cubren todo el dominio y no hay otro tramo que comparar.

![Función cúbica y su derivada: los ceros de la derivada separan los cambios de monotonía.](/planos-de-estudio/images/am1/funcion-derivada.svg)

*Figura original. Función cúbica y su derivada: los ceros de la derivada separan los cambios de monotonía.*

### Hoja de fórmulas del capítulo 5

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $f'>0$: crece; $f'<0$: decrece | Monotonía estricta. | En un intervalo de derivabilidad, no cruzando huecos del dominio. |
| $f':-\to+$: mínimo; $+\to-$: máximo | Criterio de primera derivada. | Continuidad en el candidato y signo en tramos laterales adecuados. |

## 6. Concavidad e inflexión: mirar cómo cambia la pendiente

Una función puede aumentar cada vez más rápido o aumentar cada vez más lento. En ambos casos $f'>0$; para distinguirlos estudiamos cómo cambia $f'$. Si $f''>0$, las pendientes aumentan y la gráfica es cóncava hacia arriba; si $f''<0$, disminuyen y es cóncava hacia abajo. Crecimiento y concavidad responden preguntas diferentes.

En $\ln x$, para $x>0$, $f'=1/x>0$ y $f''=-1/x^2<0$: la función crece, pero cada incremento igual de entrada produce una ganancia menor. En $e^{-x}$, $f'<0$ y $f''>0$: decrece con pendientes que se acercan a cero. No asociemos «hacia arriba» con «creciente».

### Encontrar y confirmar una inflexión

Retomamos $f(x)=2x^3+3x^2-12x$. Como $f''=12x+6$, el candidato es $x=-1/2$. Antes de ese valor, $f''<0$; después, $f''>0$. Hay cambio de concavidad y la función es continua allí: es punto de inflexión. Su altura se obtiene en la función original:

$$
f(-1/2)=2(-1/8)+3(1/4)-12(-1/2)=-1/4+3/4+6=13/2.
$$

La coordenada completa es $(-1/2,13/2)$. Resolver solamente $f''=0$ nos hubiera dado un candidato, no la confirmación.

En $x^4$, $f''=12x^2$ se anula en cero sin cambiar de signo: no hay inflexión. En $x^{1/3}$, la segunda derivada no existe en cero, pero cambia la concavidad entre los dos lados y la función es continua: sí hay inflexión según esta convención. En $1/x$ también cambia el signo de $f''$ al cruzar cero, pero allí no hay punto de la gráfica; no lo llamamos punto de inflexión.

### El criterio de la segunda derivada para extremos

Si $f'(a)=0$ y $f''(a)>0$, bajo las hipótesis usuales de derivabilidad en un entorno, hay mínimo local; si $f''(a)<0$, máximo. La pendiente pasa de negativa a positiva o a la inversa. Cuando $f''(a)=0$, este criterio no decide. Las funciones $x^4$, $-x^4$ y $x^3$ dan respectivamente mínimo, máximo y ningún extremo, con la misma segunda derivada nula en cero.

La tangente de una función convexa diferenciable queda debajo de la gráfica en el intervalo convexo correspondiente. Esta relación permitirá anticipar si una aproximación lineal da un valor menor o mayor que el verdadero, sin conocerlo todavía.

**Con ayuda.** Para $x^2$, $f''=2>0$; cero es mínimo porque además $f'(0)=0$.

**Con pista.** ¿Tiene $x^4$ una inflexión en cero? **Respuesta:** no; el signo de la segunda derivada es positivo a ambos lados. Su anulación no basta.

**Sin ayuda.** Estudiá $f(x)=xe^{-x}$: $f'=e^{-x}(1-x)$ y $f''=e^{-x}(x-2)$. **Respuesta:** máximo local en $(1,1/e)$; inflexión en $(2,2/e^2)$, con concavidad hacia abajo antes de 2 y hacia arriba después. Si elegiste 1 como inflexión, confundiste la primera derivada con la segunda.

### Hoja de fórmulas del capítulo 6

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $f''>0$: concavidad arriba; $f''<0$: abajo | Cambio de pendiente. | En el intervalo de estudio. |
| $f'(a)=0$, $f''(a)>0$: mínimo; $f''(a)<0$: máximo | Criterio de segunda derivada. | Bajo derivabilidad suficiente en un entorno; cero no decide. |
| Inflexión: cambio de concavidad en un punto de la gráfica | No basta resolver $f''=0$. | Comprobar ambos lados y continuidad según convención usada. |

## 7. Estudiar una función completa y comprobar el dibujo

Una gráfica razonada reúne dominio, cortes, límites, monotonía y concavidad. No conviene empezar uniendo puntos de una tabla: puede ocultar discontinuidades, extremos muy cercanos o comportamiento al infinito. El dibujo final es una síntesis de conclusiones justificadas.

### Ejemplo guiado: dos ramas que no deben unirse

Estudiemos $f(x)=x+1/x$. Primero, el dominio es $\mathbb R\setminus\{0\}$. Es impar, pues $f(-x)=-f(x)$, así que podremos contrastar las ramas por simetría central. No corta el eje horizontal: $x+1/x=0$ llevaría a $x^2+1=0$, sin soluciones reales. Tampoco tiene ordenada al origen.

Los límites laterales en cero son $-\infty$ a la izquierda y $+\infty$ a la derecha: $x=0$ es asíntota vertical. Al infinito, la función no tiende a una altura fija; comparamos con la recta $y=x$:

$$
f(x)-x=1/x\longrightarrow0\qquad(x\to\pm\infty).
$$

Por tanto $y=x$ es asíntota oblicua. Una asíntota describe aproximación; no es una barrera universal que ninguna función pueda cruzar.

Ya sabemos que $f'=1-1/x^2$. Crece en $(-\infty,-1)$ y $(1,\infty)$; decrece en $(-1,0)$ y $(0,1)$. Tiene máximo local $f(-1)=-2$ y mínimo local $f(1)=2$. La segunda derivada es $2/x^3$: concavidad hacia abajo en la rama negativa y hacia arriba en la positiva. No hay inflexión en cero porque está excluido.

Con estos datos dibujamos la rama positiva bajando desde $+\infty$ hasta $(1,2)$ y luego subiendo, próxima a $y=x$ por arriba. La rama negativa es su simétrica y queda por debajo de $y=x$, pues $1/x<0$ allí. Si el dibujo cruza el eje horizontal o une ambas ramas, contradice información ya demostrada.

### Un segundo control con un polinomio

Para $2x^3+3x^2-12x$, el dominio no se corta y no hay asíntotas verticales. Los ceros son $x=0$ y $x=(-3\pm\sqrt{105})/4$, al resolver $2x^2+3x-12=0$. Combinamos esos cortes con máximo $(-2,20)$, mínimo $(1,-7)$ e inflexión $(-1/2,13/2)$. No hace falta que el punto de inflexión tenga tangente horizontal.

### Practicar con un registro de decisiones

**Con ayuda.** En $1/(x-2)$ anotá dominio antes de derivar: excluye 2. La asíntota vertical es $x=2$ y la horizontal $y=0$; $f'=-1/(x-2)^2<0$ en cada rama.

**Con pista.** Para $x^2/(x-1)$, dividí polinomios antes de buscar la asíntota oblicua. **Respuesta:** $f=x+1+1/(x-1)$, luego la recta es $y=x+1$; el punto 1 sigue excluido.

**Sin ayuda.** Completá ese estudio. **Autocorrección:** $f'=x(x-2)/(x-1)^2$: crece antes de 0 y después de 2, decrece en $(0,1)$ y $(1,2)$. Máximo local $(0,0)$ y mínimo local $(2,4)$. $f''=2/(x-1)^3$: cambia de signo entre ramas pero no hay inflexión en 1. Revisá que el dibujo respete todas estas restricciones.

### Hoja de fórmulas del capítulo 7

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\lim_{x\to\pm\infty}[f(x)-(mx+b)]=0$ | Asíntota oblicua si $m\ne0$, horizontal si $m=0$. | Estudiar cada extremo por separado; no supone que no haya cruces. |
| Asíntota vertical: algún lateral de $f$ tiende a $\pm\infty$ | Comportamiento cerca de $x=a$. | Un hueco removible no basta. |

## 8. Optimización: convertir una situación en una función

En un problema de optimización, la derivada aparece después de decidir qué podemos elegir y qué queremos mejorar. El trabajo central es construir una función objetivo y su dominio. Una cuenta impecable sobre un modelo equivocado responde otra pregunta.

### Una caja sin tapa, completamente guiada

Tenemos una lámina cuadrada de 12 cm de lado. Recortamos cuadrados iguales de lado $x$ en las cuatro esquinas y doblamos los bordes. Queremos maximizar el volumen de la caja. Elegimos $x$ como variable porque determina tanto altura como base. La altura será $x$ y cada lado de la base $12-2x$: hay recorte a ambos extremos del lado.

El volumen es

$$
V(x)=x(12-2x)^2,\qquad0<x<6.
$$

El intervalo expresa una caja con altura y base positivas. Podemos extender continuamente a $[0,6]$ para comparar con los casos degenerados de volumen cero, sabiendo que no son cajas útiles. Al derivar mediante producto y cadena,

$$
V'=(12-2x)^2-4x(12-2x)=(12-2x)(12-6x).
$$

Los ceros son 2 y 6; sólo 2 es interior. En $(0,2)$ ambos factores son positivos; en $(2,6)$ el segundo es negativo. El volumen aumenta y luego disminuye. Así justificamos un máximo global en el dominio útil, no sólo un candidato. En $x=2$, la base es $8\times8$ y la altura 2: $V=128\ \mathrm{cm}^3$. La unidad cúbica ayuda a detectar una fórmula de área usada por error.

### Una lata: trabajar con una restricción

Para una lata cilíndrica cerrada de $1000\ \mathrm{cm}^3$, radio y altura no son independientes: $\pi r^2h=1000$. Despejamos $h=1000/(\pi r^2)$ y reemplazamos en el área de dos tapas y lateral:

$$
A(r)=2\pi r^2+2\pi rh=2\pi r^2+2000/r,\qquad r>0.
$$

Entonces $A'=4\pi r-2000/r^2$. Igualando a cero obtenemos $r^3=500/\pi$. Como $A''=4\pi+4000/r^3>0$ en todo el dominio, $A'$ aumenta y cambia de negativa a positiva en esa única raíz. Además $A\to\infty$ al acercarse a cero o al infinito. El mínimo global tiene $r\approx5{,}42$ cm y $h=2r\approx10{,}84$ cm. No usaríamos la misma fórmula para una lata sin tapa.

### Retirar la ayuda

**Con pista.** Un rectángulo tiene perímetro 20 m. Maximizá su área. Escribí $y=10-x$, con $0<x<10$. **Respuesta razonada:** $A=x(10-x)$, $A'=10-2x$ cambia de $+$ a $-$ en 5; el óptimo es un cuadrado de lado 5 m y área $25\ \mathrm m^2$.

**Sin ayuda.** Se cerca un terreno rectangular con 40 m de alambre usando un muro como uno de sus lados, sin cercarlo. **Autocorrección:** si $x$ es cada lateral perpendicular al muro, quedan $40-2x$ para el lado paralelo. $A=x(40-2x)$, $0<x<20$; máximo en $x=10$ con lado paralelo 20 y área 200. Si obtuviste un cuadrado, probablemente contaste cuatro lados cercados en lugar de tres.

### Hoja de fórmulas del capítulo 8

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $V=x(12-2x)^2$ | Caja del ejemplo, en centímetros cúbicos. | $0<x<6$; lámina cuadrada de lado 12 sin tapa. |
| $A=2\pi r^2+2\pi rh$, $V=\pi r^2h$ | Cilindro cerrado del modelo. | $r,h>0$; eliminar una variable con la restricción. |

## 9. Rolle, Lagrange y Cauchy: entender qué garantizan

Un teorema tiene hipótesis que debemos comprobar y una conclusión que podemos usar después. No es una fórmula que se aplica sólo porque aparecen una función y un intervalo. Aquí la idea central es conectar un cambio total con alguna tasa instantánea interior.

### Rolle: misma altura al empezar y terminar

Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$, con $a<b$, existe al menos un $c\in(a,b)$ tal que $f'(c)=0$. Para $f(x)=x^2-2x$ en $[0,2]$, las dos primeras hipótesis se cumplen por ser polinomio; además $f(0)=f(2)=0$. Derivamos $f'=2x-2$ y resolvemos $f'(c)=0$: $c=1$, interior al intervalo.

La justificación también se puede reconstruir. La continuidad en el cerrado garantiza máximo y mínimo. Si la función es constante, la derivada es cero en cualquier interior. Si no lo es y los extremos del intervalo tienen igual altura, al menos un máximo o mínimo absoluto se alcanza dentro. La derivabilidad y Fermat obligan a que su derivada se anule. No afirmamos que el teorema determine todos los ceros de $f'$ ni que haya uno solo.

### Lagrange: comparar tangente y secante

Con continuidad en $[a,b]$ y derivabilidad en $(a,b)$, existe $c$ interior tal que

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

Para $x^2$ en $[1,3]$, la pendiente secante es $(9-1)/(3-1)=4$; resolvemos $2c=4$ y obtenemos $c=2$. Si $f$ es posición, alguna velocidad instantánea coincide con la velocidad media. No debe confundirse con el promedio de todos los valores de posición.

Se deduce de Rolle restando la secante: $h(x)=f(x)-f(a)-m(x-a)$, con $m=[f(b)-f(a)]/(b-a)$. Como $h(a)=h(b)=0$, existe $h'(c)=f'(c)-m=0$. Esta construcción explica por qué la igualdad de alturas ya no es necesaria para $f$.

También justifica monotonía. Para cualesquiera $x_1<x_2$ del intervalo, Lagrange da $f(x_2)-f(x_1)=f'(c)(x_2-x_1)$. Si $f'>0$, el producto es positivo. Si $f'=0$ en todo el intervalo, todos esos incrementos son cero y la función es constante. Dos funciones con igual derivada difieren en una constante en cada intervalo conectado.

### Cauchy y un contraejemplo útil

Si $f,g$ son continuas en el cerrado y derivables en el abierto, existe un $c$ con

$$
[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c).
$$

Si además $g'\ne0$ en todo el abierto, podemos escribir la igualdad como cociente de incrementos y derivadas. Tomar $g(x)=x$ recupera Lagrange. Es un antecedente teórico de L'Hôpital, no una licencia para derivar cocientes indiscriminadamente.

**Con ayuda.** Para $|x|$ en $[-1,1]$, hay continuidad e igual altura en los bordes, pero no derivabilidad en cero. Rolle no se aplica y efectivamente no hay tangente horizontal interior.

**Con pista.** Aplicá Lagrange a $e^{2x}$ en $[0,1]$. **Respuesta:** $2e^{2c}=e^2-1$, luego $c=\tfrac12\ln[(e^2-1)/2]$, que pertenece a $(0,1)$. La verificación de pertenencia cierra el ejercicio.

**Sin ayuda.** Una función vale 1 para $x<0$ y 2 para $x>0$, con dominio $\mathbb R\setminus\{0\}$. Su derivada es cero en todos los puntos del dominio. ¿Es constante en todo ese dominio? **Respuesta:** no; tiene constantes distintas en sus dos componentes. La consecuencia de Lagrange garantiza constancia en cada intervalo, y no podemos aplicar el teorema sobre un segmento que cruce el punto excluido. El ejemplo muestra por qué la palabra «intervalo» es una hipótesis concreta.

### Hoja de fórmulas del capítulo 9

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Rolle: $f'(c)=0$ para algún $c\in(a,b)$ | Igual altura en bordes. | $a<b$, continuidad en cerrado, derivabilidad en abierto y $f(a)=f(b)$. |
| Lagrange: $f'(c)=[f(b)-f(a)]/(b-a)$ | Tangente paralela a secante. | $a<b$, continuidad en cerrado y derivabilidad en abierto. |
| $[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)$ | Teorema de Cauchy. | Ambas continuas en cerrado y derivables en abierto; para dividir, controlar denominadores. |

## 10. Límites indeterminados: decidir si corresponde L'Hôpital

Una indeterminación describe información insuficiente, no una cuenta numérica. Que dos funciones tiendan a cero no nos dice qué ocurre con su cociente: $x/x$, $x^2/x$ y $x/x^2$ tienen comportamientos distintos en cero. Primero identificamos la forma; después buscamos un método.

### Una versión de la regla con sus condiciones

En un entorno lateral perforado de un punto, supongamos que $f,g$ son derivables y $g'$ no se anula. Si el cociente es del tipo $0/0$ o $\infty/\infty$, y existe el límite de $f'/g'$ como real o infinito, la regla permite concluir que el límite de $f/g$ es ese mismo valor. Hay versiones para $x\to\pm\infty$. Las condiciones se comprueban en el tramo de aproximación; no necesitamos que las funciones estén definidas en el punto final.

La operación es **derivar numerador y denominador por separado para estudiar otro cociente de límites**. No estamos calculando la derivada de $f/g$. Si el nuevo límite no existe, esta regla no concluye; el original aún puede existir.

### Dos aplicaciones sucesivas, ambas justificadas

Estudiemos $(e^x-1-x)/[x(e^x-1)]$ cuando $x\to0$. Aparece $0/0$, las funciones son derivables y el denominador derivado no se anula suficientemente cerca de cero a cada lado. Aplicamos la regla:

$$
\lim_{x\to0}\frac{e^x-1-x}{x(e^x-1)}
=\lim_{x\to0}\frac{e^x-1}{e^x-1+xe^x}.
$$

El segundo cociente vuelve a dar $0/0$; podemos repetir sobre un entorno adecuado. Derivamos usando producto en $xe^x$:

$$
\lim_{x\to0}\frac{e^x}{2e^x+xe^x}=\frac12.
$$

La segunda vez ya obtenemos denominador no nulo al sustituir. No se continúa derivando por rutina. Una expansión de Taylor confirmará después el mismo resultado, porque los términos dominantes son $x^2/2$ y $x^2$.

### Transformar otras formas

Para $x\ln x$ cuando $x\to0^+$ tenemos $0\cdot(-\infty)$. Escribimos $\ln x/(1/x)$; ahora es un cociente de magnitudes infinitas. L'Hôpital da $(1/x)/(-1/x^2)=-x\to0$. El producto tiende a cero desde valores negativos.

Para $L=\lim_{x\to\infty}[x/(x+1)]^x$, la base es positiva y tiende a 1; el exponente crece. Estudiamos el logaritmo de la expresión, sin suponer todavía el valor de $L$:

$$
x\ln\frac{x}{x+1}=\frac{\ln x-\ln(x+1)}{1/x}.
$$

El cociente es $0/0$. El cociente de derivadas es $[1/x-1/(x+1)]/(-1/x^2)=-x/(x+1)\to-1$. Por continuidad de la exponencial, la expresión original tiende a $e^{-1}$. No concluimos que la potencia tiende a $-1$: eso fue el límite de su logaritmo.

**Con ayuda.** $(\sin x)/x\to1$ en cero por el límite notable o L'Hôpital, comprobando las condiciones.

**Con pista.** $\lim_{x\to\infty}\ln x/x$. **Respuesta:** forma $\infty/\infty$, cociente de derivadas $1/x\to0$.

**Sin ayuda.** ¿Por qué no derivar numerador y denominador en $(x+1)/(x+2)$ al tender $x$ a cero? **Respuesta:** no hay indeterminación: el límite es $1/2$. El cociente de derivadas daría 1, mostrando que usar la regla sin hipótesis produce otro resultado.

### Hoja de fórmulas del capítulo 10

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\lim f/g=\lim f'/g'$ | Regla de L'Hôpital. | Forma $0/0$ o $\infty/\infty$, derivabilidad lateral perforada, $g'\ne0$, existencia del segundo límite. |
| $u(x)^{v(x)}=e^{v(x)\ln u(x)}$ | Transformar potencias indeterminadas. | $u(x)>0$ en el tramo; volver por exponencial al final. |

## 11. Aproximación lineal y diferenciales: estimar una variación

Conocer una función y su pendiente en un punto permite construir una recta que la aproxima cerca de allí. Elegimos el centro por dos razones: debe estar cerca de la entrada deseada y debe permitir cuentas conocidas. Para aproximar una raíz cercana a 9, el centro natural es 9, no cero.

### Construcción y lectura de una aproximación

Para $f(x)=\sqrt{x}$ y $a=9$, conocemos $f(9)=3$ y $f'(9)=1/6$. La recta tangente es

$$
L(x)=3+\frac16(x-9).
$$

Queremos $x=8{,}9$, de modo que el incremento de entrada es $\Delta x=-0{,}1$. El diferencial es $df=f'(a)\Delta x=-1/60$. Sumándolo al valor inicial obtenemos $L(8{,}9)=179/60\approx2{,}983333$. El diferencial aproxima el **cambio**; la recta aproxima el **valor final**. Escribir $\sqrt{8{,}9}\approx-1/60$ confundiría ambos.

Como $f''(x)=-1/(4x^{3/2})<0$ para $x>0$, la tangente queda por encima de la gráfica y la aproximación es por exceso. El valor real es cercano a $2{,}983287$. No necesitábamos conocerlo para anticipar el signo del error.

La derivabilidad afirma que $f(a+h)=f(a)+f'(a)h+r(h)$ con $r(h)/h\to0$. Dice que el error relativo a la escala del incremento se vuelve pequeño; no promete exactitud a cualquier distancia. Una cota numérica más concreta se obtiene acotando derivadas de orden superior, como haremos con Taylor.

### De un error de medición a otro

Si $A=\pi r^2$, entonces $dA=2\pi r\,dr$. Para un radio medido como $r=10$ cm y posible variación $|\Delta r|\le0{,}1$ cm, la estimación lineal es $|dA|\le2\pi\ \mathrm{cm}^2$. El error relativo aproximado es $|dA|/A\approx2|dr|/r=0{,}02$, un 2 %. La unidad de $dA$ es área, aunque $dr$ sea longitud.

Podemos comprobar cuánto descarta la linealización:

$$
\Delta A=\pi[(r+\Delta r)^2-r^2]=2\pi r\Delta r+\pi(\Delta r)^2.
$$

El término omitido tiene módulo a lo sumo $0{,}01\pi$, por lo que la cota exacta de variación absoluta en ese caso puede ser $2{,}01\pi$. Un diferencial es una estimación; no lo presentamos como cota rigurosa sin justificar el resto.

**Con ayuda.** Para $\sqrt[3]{26{,}5}$ usamos $a=27$: $f(27)=3$, $f'(27)=1/27$. Aproximación $3-0{,}5/27=161/54\approx2{,}98148$. La función es cóncava hacia abajo en ese tramo, así que es por exceso.

**Con pista.** Aproximá $\ln(1{,}02)$ con centro 1 para $f(x)=\ln x$. **Respuesta:** $0+1\cdot0{,}02=0{,}02$, por exceso por concavidad. Elegir el centro 0 sería inválido para esta función.

**Sin ayuda.** Un lado de cuadrado de 5 m aumenta $0{,}02$ m. **Autocorrección:** $dA=2\cdot5\cdot0{,}02=0{,}2\ \mathrm m^2$; cambio exacto $0{,}2004\ \mathrm m^2$. Explicá de dónde sale la diferencia $0{,}0004$.

![La tangente de raíz cuadrada en 9 queda por encima de la curva cercana.](/planos-de-estudio/images/am1/aproximacion.svg)

*Figura original. La tangente de raíz cuadrada en 9 queda por encima de la curva cercana.*

### Hoja de fórmulas del capítulo 11

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $L(x)=f(a)+f'(a)(x-a)$ | Aproximación tangente. | $f$ derivable en $a$; uso local, sin cota automática lejos del centro. |
| $df=f'(a)\Delta x$, $\Delta f=f(a+\Delta x)-f(a)$ | Cambio lineal frente al exacto. | No confundir estimación con cota rigurosa sin resto. |

## 12. Taylor: construir el polinomio y justificar su precisión

La recta tangente iguala valor y primera derivada en un centro. Un polinomio de Taylor agrega coincidencia de más derivadas, para reproducir también curvatura y cambios de órdenes superiores. No elegimos coeficientes al azar: cada uno queda fijado por una derivada.

### Construir en vez de memorizar

Escribamos $P_3(x)=A+B(x-a)+C(x-a)^2+D(x-a)^3$. En $x=a$, su valor es $A$; el de su primera derivada es $B$; el de la segunda es $2C$ y el de la tercera $6D$. Igualando con $f$ obtenemos

$$
P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k.
$$

Los factoriales compensan lo que sucede al derivar repetidamente una potencia. El **orden** es $n$; el grado puede ser menor si los últimos coeficientes se anulan. Maclaurin es Taylor con centro cero.

Para $\sin x$ en cero, las derivadas se repiten: seno, coseno, menos seno, menos coseno. Sus valores iniciales son $0,1,0,-1,0,1$. Por eso $P_3=x-x^3/6$ y $P_4=P_3$. En $x=0{,}2$, $P_3=0{,}198666\ldots$.

### Acotar sin conocer el punto del resto

Bajo una hipótesis suficiente de derivadas continuas hasta orden $n+1$ en el segmento entre centro y entrada, el resto de Lagrange es

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1},
$$

para algún $\xi$ intermedio. No sabemos cuál; buscamos un máximo $M$ para el módulo de esa derivada en **todo el segmento**. Entonces $|R_n|\le M|x-a|^{n+1}/(n+1)!$.

Como $P_4$ de seno coincide con $P_3$ y $|f^{(5)}|=|\cos|\le1$, podemos usar $|R_4(0{,}2)|\le0{,}2^5/120=1/375000\approx2{,}67\cdot10^{-6}$. No utilizamos simplemente la derivada quinta en cero como si fuera su máximo demostrado.

### Cambiar el centro con cuidado

Para aproximar $\cos70^\circ$ centramos en $a=\pi/2$ y usamos $h=x-a=-\pi/9$. Como $\cos(\pi/2+h)=-\sin h$, el Taylor de orden 6 es

$$
P_6(\pi/2+h)=-h+\frac{h^3}{6}-\frac{h^5}{120}.
$$

La potencia sexta tiene coeficiente cero. La aproximación es cercana a $0{,}34202027$; usando la derivada séptima acotada por 1 obtenemos error $\le(\pi/9)^7/7!<1{,}3\cdot10^{-7}$. El error real y la cota no son lo mismo: una cota puede ser mayor y seguir siendo correcta.

**Con ayuda.** Para $e^x$ en cero todas las derivadas valen 1: $P_3=1+x+x^2/2+x^3/6$.

**Con pista.** Construí $P_2$ de $\ln x$ en 1. **Respuesta:** $(x-1)-(x-1)^2/2$, porque $f(1)=0$, $f'(1)=1$, $f''(1)=-1$.

**Sin ayuda.** Aproximá $e^{0{,}1}$ con $P_2$ y acotá el error. **Autocorrección:** resultado $1{,}105$; en $[0,0{,}1]$ se puede usar $M=e^{0{,}1}<1{,}106$, de donde error $<1{,}106\cdot0{,}1^3/6<0{,}000185$. La existencia de un Taylor finito no implica que una serie infinita represente siempre a la función; volveremos sobre ese punto.

### Hoja de fórmulas del capítulo 12

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $P_n=\sum_{k=0}^nf^{(k)}(a)(x-a)^k/k!$ | Taylor finito. | Derivadas hasta orden $n$ en el centro; grado puede ser menor que orden. |
| $\vert R_n\vert \le M\vert x-a\vert ^{n+1}/(n+1)!$ | Cota de Lagrange. | Por ejemplo $f\in C^{n+1}$ en el segmento; $M$ acota toda la derivada de orden $n+1$ allí. |

## Formulario de la unidad 1: Aplicaciones de la derivada y aproximación

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Crítico: $f'(a)=0$ o $f'(a)$ no existe | Candidato interior a extremo. | $a$ debe pertenecer al dominio; revisar también bordes. |
| Continua en $[a,b]$ implica máximo y mínimo absolutos | Teorema del valor extremo. | Intervalo cerrado, acotado y no vacío; comparar valores de función. |
| $f'>0$: crece; $f'<0$: decrece | Monotonía estricta. | En un intervalo de derivabilidad, no cruzando huecos del dominio. |
| $f':-\to+$: mínimo; $+\to-$: máximo | Criterio de primera derivada. | Continuidad en el candidato y signo en tramos laterales adecuados. |
| $f''>0$: concavidad arriba; $f''<0$: abajo | Cambio de pendiente. | En el intervalo de estudio. |
| $f'(a)=0$, $f''(a)>0$: mínimo; $f''(a)<0$: máximo | Criterio de segunda derivada. | Bajo derivabilidad suficiente en un entorno; cero no decide. |
| Inflexión: cambio de concavidad en un punto de la gráfica | No basta resolver $f''=0$. | Comprobar ambos lados y continuidad según convención usada. |
| $\lim_{x\to\pm\infty}[f(x)-(mx+b)]=0$ | Asíntota oblicua si $m\ne0$, horizontal si $m=0$. | Estudiar cada extremo por separado; no supone que no haya cruces. |
| Asíntota vertical: algún lateral de $f$ tiende a $\pm\infty$ | Comportamiento cerca de $x=a$. | Un hueco removible no basta. |
| $V=x(12-2x)^2$ | Caja del ejemplo, en centímetros cúbicos. | $0<x<6$; lámina cuadrada de lado 12 sin tapa. |
| $A=2\pi r^2+2\pi rh$, $V=\pi r^2h$ | Cilindro cerrado del modelo. | $r,h>0$; eliminar una variable con la restricción. |
| Rolle: $f'(c)=0$ para algún $c\in(a,b)$ | Igual altura en bordes. | $a<b$, continuidad en cerrado, derivabilidad en abierto y $f(a)=f(b)$. |
| Lagrange: $f'(c)=[f(b)-f(a)]/(b-a)$ | Tangente paralela a secante. | $a<b$, continuidad en cerrado y derivabilidad en abierto. |
| $[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)$ | Teorema de Cauchy. | Ambas continuas en cerrado y derivables en abierto; para dividir, controlar denominadores. |
| $\lim f/g=\lim f'/g'$ | Regla de L'Hôpital. | Forma $0/0$ o $\infty/\infty$, derivabilidad lateral perforada, $g'\ne0$, existencia del segundo límite. |
| $u(x)^{v(x)}=e^{v(x)\ln u(x)}$ | Transformar potencias indeterminadas. | $u(x)>0$ en el tramo; volver por exponencial al final. |
| $L(x)=f(a)+f'(a)(x-a)$ | Aproximación tangente. | $f$ derivable en $a$; uso local, sin cota automática lejos del centro. |
| $df=f'(a)\Delta x$, $\Delta f=f(a+\Delta x)-f(a)$ | Cambio lineal frente al exacto. | No confundir estimación con cota rigurosa sin resto. |
| $P_n=\sum_{k=0}^nf^{(k)}(a)(x-a)^k/k!$ | Taylor finito. | Derivadas hasta orden $n$ en el centro; grado puede ser menor que orden. |
| $\vert R_n\vert \le M\vert x-a\vert ^{n+1}/(n+1)!$ | Cota de Lagrange. | Por ejemplo $f\in C^{n+1}$ en el segmento; $M$ acota toda la derivada de orden $n+1$ allí. |

## 13. Primitivas: deshacer una derivada sin perder la constante

Una primitiva de $f$ en un intervalo es una función $F$ con $F'=f$ allí. Como derivar una constante da cero, $F+C$ también es primitiva. Recíprocamente, si dos primitivas tienen la misma derivada, Lagrange muestra que su diferencia es constante en ese intervalo. Esa familia se escribe $\int f(x)\,dx=F(x)+C$.

### Reconocer y comprobar

Para $f(x)=3x^2$, una primitiva es $x^3$, porque $(x^3)'=3x^2$. La integral indefinida es $x^3+C$, no un único número. Para una potencia,

$$
\int x^p\,dx=\frac{x^{p+1}}{p+1}+C\quad(p\ne-1),
$$

en los intervalos donde las potencias reales estén definidas y la derivación sea válida. Sumamos 1 al exponente para invertir la reducción al derivar y dividimos por el nuevo exponente para compensar el factor. El caso $p=-1$ no admite esa fórmula porque dividiríamos por cero: su primitiva es $\ln|x|$ en cada intervalo sin cero.

Resolvamos $\int(3x^2-4x+2/x)\,dx$. Integramos término a término, manteniendo constantes:

$$
x^3-2x^2+2\ln|x|+C,\qquad x\ne0.
$$

Comprobamos derivando cada término. La familia vale por intervalos: podríamos tener constantes distintas en $(-\infty,0)$ y $(0,\infty)$. No hay obligación de unir dos componentes desconectadas.

### Una condición elige un miembro de la familia

Si sabemos que $F'=2x$ y $F(1)=5$, primero escribimos $F=x^2+C$. Reemplazamos el dato: $1+C=5$, de donde $C=4$. La solución es $F=x^2+4$. No se obtiene la constante «integrando el 5»: es una condición puntual usada después.

Las primitivas básicas que conviene reconstruir son las de exponencial, seno y coseno. Por ejemplo $\int\cos x\,dx=\sin x+C$ y $\int\sin x\,dx=-\cos x+C$. El signo del segundo caso se comprueba al derivar. $\int e^{kx}\,dx=e^{kx}/k+C$ para $k\ne0$, por cadena. Con $k=0$ estamos integrando 1 y la respuesta es $x+C$.

### No inventar reglas inversas que no existen

La integral de un producto no es el producto de las integrales. Si fuera así, $\int x\cdot x\,dx$ daría $(x^2/2)^2=x^4/4$, cuya derivada es $x^3$, distinta del integrando $x^2$. La respuesta correcta es $x^3/3+C$. Tampoco se integra un cociente dividiendo primitivas.

**Con ayuda.** $\int(4x^3+\cos x)dx=x^4+\sin x+C$. Derivar devuelve exactamente el integrando.

**Con pista.** Integrá $2/\sqrt x$ en $x>0$ pasándolo a potencia. **Respuesta:** $4\sqrt x+C$; la derivada es $2/\sqrt x$.

**Sin ayuda.** Encontrá $F$ con $F'=e^{2x}-3$ y $F(0)=0$. **Autocorrección:** $F=e^{2x}/2-3x-1/2$. Verificá tanto derivada como dato. La comprobación responde dos obligaciones diferentes.

### Hoja de fórmulas del capítulo 13

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int x^pdx=x^{p+1}/(p+1)+C$ | Primitiva de potencia. | $p\ne-1$, sobre intervalos donde la potencia y su derivada estén definidas. |
| $\int dx/x=\ln\vert x\vert +C$ | Caso excepcional de exponente $-1$. | Intervalo sin cero; constantes independientes en componentes separadas. |

## 14. Integral definida: acumular con signo mediante sumas

Una integral definida no empieza siendo «una primitiva evaluada». Nace como límite de sumas de contribuciones pequeñas. Dividimos $[a,b]$ en subintervalos, elegimos una muestra $\xi_i$ y formamos $\sum f(\xi_i)\Delta x_i$. Cuando la partición se refina de modo que su mayor ancho tiende a cero, si todas esas sumas se acercan al mismo número, ese número es $\int_a^b f(x)\,dx$. Las funciones continuas en un cerrado son integrables en este sentido.

### Un área que podemos calcular desde la definición

Para $f(x)=x$ en $[0,2]$, dividimos en $n$ partes iguales: $\Delta x=2/n$. Con extremos derechos, $x_i=2i/n$. La suma es

$$
S_n=\sum_{i=1}^n\frac{2i}{n}\frac2n
=\frac4{n^2}\frac{n(n+1)}2=2+\frac2n\longrightarrow2.
$$

El límite coincide con el área del triángulo de base 2 y altura 2. La suma derecha sobreestima porque la función crece; el error se reduce al estrechar rectángulos. La fórmula $\sum_{i=1}^ni=n(n+1)/2$ permitió hacer explícito el límite.

### El signo forma parte del significado

En $\int_{-1}^1x\,dx$, la contribución negativa de la izquierda cancela la positiva de la derecha y el resultado es cero. El área geométrica entre curva y eje es 1, suma de dos triángulos de área $1/2$. Integral firmada y área coinciden sólo si el integrando no es negativo o si adaptamos el planteo con valor absoluto.

Si $v(t)$ es velocidad, $\int v(t)dt$ sobre un intervalo da desplazamiento; $\int|v(t)|dt$ da distancia recorrida. Un cambio de dirección puede producir desplazamiento cero aunque haya movimiento. Las unidades multiplican: velocidad en m/s por tiempo en s da metros.

### Propiedades que ayudan a organizar un problema

La integral es lineal: podemos sumar integrandos o sacar constantes. Es aditiva por intervalos: $\int_a^b f+\int_b^c f=\int_a^c f$. Cambiar la orientación cambia el signo y $\int_a^a f=0$. Si $m\le f\le M$ en $[a,b]$, con $a<b$, entonces $m(b-a)\le\int_a^bf\le M(b-a)$. Estas cotas permiten detectar resultados imposibles antes de revisar toda la cuenta.

Por simetría, una función impar integrable en $[-a,a]$ tiene integral cero; una par tiene integral igual al doble de la integral entre 0 y $a$. Debe haber integrabilidad: no se usa la cancelación de $1/x$ a través de una singularidad para declarar convergencia impropia.

**Con ayuda.** Una tasa constante de 3 litros/minuto durante 4 minutos acumula $3\cdot4=12$ litros; es la integral de una constante.

**Con pista.** Si $2\le f(x)\le5$ en $[1,4]$, ¿entre qué valores está la integral? **Respuesta:** entre 6 y 15, al multiplicar cotas por longitud 3.

**Sin ayuda.** Una velocidad vale $-2$ m/s de $t=0$ a 1 y 2 m/s de 1 a 3. **Autocorrección:** desplazamiento $-2+4=2$ m; distancia $2+4=6$ m. El cambio de velocidad se maneja separando los intervalos.

### Hoja de fórmulas del capítulo 14

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int_a^bf=\lim\sum_i f(\xi_i)\Delta x_i$ | Acumulación firmada. | Límite común al refinar particiones; continuidad en cerrado basta para integrabilidad. |
| $\int_a^cf=\int_a^bf+\int_b^cf$; $\int_b^af=-\int_a^bf$ | Aditividad y orientación. | Integrales existentes en tramos considerados. |

## 15. Teorema fundamental y Barrow: unir acumulación y derivada

La integral definida acumula y la derivada mide cambio instantáneo. El teorema fundamental del cálculo conecta ambos procesos. Si $f$ es continua, la función acumulación $A(x)=\int_a^xf(t)dt$ es derivable y $A'(x)=f(x)$ en el interior. Añadir un intervalo muy corto aporta aproximadamente «altura actual por ancho»; al dividir por ese ancho y tomar límite queda la altura actual.

### La variable muda no es la entrada exterior

En $A(x)=\int_0^x\cos(t^2)dt$, $t$ recorre la integración y $x$ indica dónde termina. Por el teorema, $A'(x)=\cos(x^2)$. No necesitamos encontrar una primitiva elemental de $\cos(t^2)$. Cambiar el nombre $t$ por $u$ no modifica la función acumulación.

Si el límite superior es otra función, agregamos cadena. Para

$$
B(x)=\int_1^{x^2}\sqrt{1+t^3}\,dt,\qquad x>0,
$$

tomamos primero la acumulación como función de su extremo y luego derivamos $x^2$: $B'(x)=\sqrt{1+x^6}\,2x$. Si olvidamos el factor $2x$, calculamos otra derivada. Si ambos extremos varían, bajo continuidad del integrando y derivabilidad de límites, $[\int_{u(x)}^{v(x)}f(t)dt]'=f(v(x))v'(x)-f(u(x))u'(x)$.

### Barrow convierte el cálculo en una resta

Si $F'=f$ y $f$ es continua en $[a,b]$, entonces

$$
\int_a^bf(x)dx=F(b)-F(a).
$$

Para $\int_1^3(2x+1)dx$, elegimos $F=x^2+x$. Evaluamos **toda** la expresión en cada borde: $(9+3)-(1+1)=10$. La constante desaparece en la resta. No calculamos $F(3-1)$ ni restamos sólo uno de los términos.

La continuidad es una hipótesis suficiente cómoda para esta versión. No presentamos su ausencia como prueba automática de que ninguna fórmula de integración sirva. Sí debemos detenernos ante una singularidad: $-1/x$ es primitiva de $1/x^2$ en cada lado de cero, pero evaluar $[-1/x]_{-1}^1=-2$ no calcula una integral a través de cero. El integrando es positivo y la conclusión negativa ya delata un problema. La definición impropia dará divergencia.

### Del área a la solución comprobable

**Con ayuda.** $\int_0^2 3x^2dx=[x^3]_0^2=8$. Como el integrando es no negativo, el signo es coherente.

**Con pista.** Derivá $\int_0^{\sin x}e^{t^2}dt$. **Respuesta:** $e^{\sin^2x}\cos x$, por teorema fundamental y cadena.

**Sin ayuda.** Para $H(x)=\int_x^{2x}(1+t^2)dt$, hallá $H'$ por el teorema y por integración explícita. **Autocorrección:** $H'=2(1+4x^2)-(1+x^2)=1+7x^2$. Integrar da $H=x+7x^3/3$, cuya derivada coincide. Dos procedimientos distintos se controlan entre sí.

### Hoja de fórmulas del capítulo 15

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\frac d{dx}\int_a^xf(t)dt=f(x)$ | Teorema fundamental. | $f$ continua; para extremo compuesto agregar cadena. |
| $\int_a^bf=F(b)-F(a)$ | Regla de Barrow. | $F'=f$, con continuidad suficiente en el cerrado; no atravesar singularidades sin límites. |

## 16. Sustitución: reconocer una cadena al revés

La sustitución funciona cuando una parte del integrando puede tomarse como nueva variable y su derivada aparece como factor. No es un cambio de letras: debe transformar **todo** el integrando, incluido el diferencial y, en una integral definida, los límites.

### Un ejemplo con todos los pasos

Para $\int2x\cos(x^2+1)dx$, vemos una composición de coseno con $x^2+1$. Su derivada interior es $2x$, exactamente el factor acompañante. Definimos $u=x^2+1$, $du=2x\,dx$. La integral se convierte en $\int\cos u\,du=\sin u+C$. Volvemos a $x$:

$$
\int2x\cos(x^2+1)dx=\sin(x^2+1)+C.
$$

Derivar la respuesta devuelve $2x\cos(x^2+1)$. Este control detectaría un factor perdido. Si el integrando fuera $x\cos(x^2+1)$, faltaría un 2: escribiríamos $x\,dx=du/2$ y el resultado llevaría $1/2$.

### Límites transformados

Calculemos $\int_0^1 x/(1+x^2)dx$. Elegimos $u=1+x^2$, con $x\,dx=du/2$. Para $x=0$, $u=1$; para $x=1$, $u=2$. Entonces

$$
\int_0^1\frac{x}{1+x^2}dx=\frac12\int_1^2\frac{du}{u}=\frac12\ln2.
$$

Alternativamente podemos hallar la primitiva en $x$ y evaluar con límites originales. Son dos rutas válidas; mezclar una primitiva en $u$ con bordes que siguen siendo valores de $x$ no lo es.

### Elegir una sustitución y saber cuándo no alcanza

En $\int e^{3x}dx$, $u=3x$ produce $dx=du/3$, de donde $e^{3x}/3+C$. En $\int\ln x/x\,dx$, para $x>0$, $u=\ln x$ da $du=dx/x$ y resultado $(\ln x)^2/2+C$.

En cambio $\int\cos(x^2)dx$ no contiene el factor $x$ que volvería inmediata la sustitución $u=x^2$. Ese cambio dejaría una potencia de $u$ y no produciría una integral básica. Esto no demuestra por sí solo que la integral no exista; señala que el patrón inmediato no se aplica. Más adelante podremos representarla mediante series o calcular integrales definidas numéricamente.

La fórmula de sustitución puede justificarse por cadena y Barrow cuando las funciones son suficientemente regulares. En cambios usados con raíces y funciones inversas también elegiremos intervalos donde el cambio y la recuperación sean claros; no perderemos signos por cancelar una raíz cuadrada de un cuadrado como si siempre fuera el valor interior.

**Con ayuda.** $\int6x(3x^2+4)^5dx=(3x^2+4)^6/6+C$, tomando $u=3x^2+4$.

**Con pista.** Integrá $\sin x/(2+\cos x)$ donde el denominador no se anule. **Respuesta:** $-\ln(2+\cos x)+C$, porque $du=-\sin x\,dx$; aquí $2+\cos x>0$ siempre.

**Sin ayuda.** Calculá $\int_0^1 2x e^{x^2}dx$. **Autocorrección:** con $u=x^2$, bordes 0 y 1, queda $\int_0^1e^udu=e-1$. Si el resultado contiene $x$, no cerraste una integral definida.

### Hoja de fórmulas del capítulo 16

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $u=g(x)$, $du=g'(x)dx$ | Sustitución, cadena inversa. | Transformar todos los factores y los límites; respetar intervalos del cambio. |
| $\int f(g(x))g'(x)dx=F(g(x))+C$ | Patrón inmediato. | $F'=f$ y regularidad para cadena. |

## 17. Integración por partes: trasladar una derivada

La regla del producto dice $(uv)'=u'v+uv'$. Al integrar y despejar uno de los términos obtenemos

$$
\int u\,dv=uv-\int v\,du.
$$

Por partes no hace desaparecer una integral: la cambia por otra que esperamos que sea más sencilla. Elegimos una parte que mejore al derivarla y otra cuya primitiva conozcamos. La elección debe evaluarse por el resultado, no por una lista memorizada de preferencias.

### Un producto que se simplifica

En $\int xe^x dx$, derivar $x$ lo convierte en 1 y $e^x$ conserva su forma al integrar. Tomamos $u=x$, $du=dx$, $dv=e^xdx$ y $v=e^x$. Sustituimos:

$$
\int xe^xdx=xe^x-\int e^xdx=e^x(x-1)+C.
$$

La derivada de $e^x(x-1)$ es $e^x(x-1)+e^x=xe^x$. El signo negativo de la fórmula queda así comprobado. Elegir $u=e^x$, $dv=x\,dx$ produciría una integral con $x^2e^x$, más trabajosa que la inicial.

Para $\int x^2e^x dx$, repetimos el proceso: $x^2e^x-2\int xe^xdx=e^x(x^2-2x+2)+C$. Cada repetición baja el grado del polinomio hasta agotarlo. No es un razonamiento circular porque esa complejidad sí disminuye.

### Cuando parece que falta el producto

Para $\int\ln x\,dx$, con $x>0$, interpretamos $\ln x\cdot1$. Elegimos $u=\ln x$ y $dv=dx$. Entonces $du=dx/x$ y $v=x$, por lo que la integral es $x\ln x-\int1\,dx=x\ln x-x+C$. Derivar el resultado da $\ln x+1-1=\ln x$.

En una integral definida podemos usar $[uv]_a^b-\int_a^bv\,du$. Para $\int_0^1xe^xdx$, la primitiva $e^x(x-1)$ da $0-(-1)=1$. Es importante restar el borde inferior completo.

### Cuando la integral reaparece

En $I=\int e^x\cos x\,dx$, una primera aplicación da $I=e^x\cos x+\int e^x\sin x\,dx$. Otra da para la integral restante $e^x\sin x-I$. Así $2I=e^x(\cos x+\sin x)$, y $I=e^x(\cos x+\sin x)/2+C$. Reaparecer no es siempre fracasar: aquí permite resolver una ecuación para la primitiva, entendida salvo constante.

**Con ayuda.** $\int x\cos x\,dx=x\sin x+\cos x+C$, porque al restar $\int\sin x$ aparece un signo positivo.

**Con pista.** Integrá $x\ln x$ para $x>0$. **Respuesta:** $x^2\ln x/2-x^2/4+C$, tomando $u=\ln x$, $dv=x\,dx$.

**Sin ayuda.** Calculá $\int_0^1x^2e^xdx$. **Autocorrección:** la primitiva anterior da $e-2$. Si tu resultado es negativo, contrastalo con el signo no negativo del integrando antes de revisar detalles.

### Hoja de fórmulas del capítulo 17

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int u\,dv=uv-\int v\,du$ | Integración por partes. | Elegir $dv$ integrable y que el nuevo problema sea más sencillo. |
| $\int_a^bu v'=[uv]_a^b-\int_a^bu'v$ | Versión definida. | Regularidad suficiente; restar el producto completo de cada borde. |

## 18. Fracciones simples: desarmar una función racional

Una función racional es cociente de polinomios. La estrategia es escribirla como suma de piezas cuyas primitivas conocemos. Antes de descomponer comprobamos grados: si el numerador tiene grado mayor o igual que el denominador, dividimos polinomios. Después factorizamos el denominador sobre los reales.

### Dos factores lineales distintos

Calculemos $\int(3x+5)/[(x+1)(x+2)]dx$. Proponemos

$$
\frac{3x+5}{(x+1)(x+2)}=\frac A{x+1}+\frac B{x+2}.
$$

Multiplicar por el denominador común produce la identidad $3x+5=A(x+2)+B(x+1)$. Igualando coeficientes, $A+B=3$ y $2A+B=5$, de donde $A=2$, $B=1$. También podríamos evaluar la identidad en $x=-1$ y $x=-2$: evaluamos una identidad polinómica, no el cociente original en sus polos. La primitiva es $2\ln|x+1|+\ln|x+2|+C$ en cada intervalo que no cruce $-2$ o $-1$.

### Factores repetidos y cuadráticos

Si aparece $(x-a)^m$, necesitamos las piezas $A_1/(x-a)+\cdots+A_m/(x-a)^m$. No basta una sola fracción. Por ejemplo,

$$
\frac1{x(x+1)^2}=\frac1x-\frac1{x+1}-\frac1{(x+1)^2}.
$$

Se comprueba llevando todo a denominador común. Integramos y obtenemos $\ln|x|-\ln|x+1|+1/(x+1)+C$. El último signo se verifica derivando $1/(x+1)$.

Si el denominador tiene un cuadrático irreducible como $x^2+1$, su numerador debe proponerse lineal: $(Ax+B)/(x^2+1)$. La parte con $x$ conduce a logaritmo por sustitución y la constante a arcotangente. Por ejemplo,

$$
\int\frac{2x+3}{x^2+1}dx=\ln(x^2+1)+3\arctan x+C.
$$

La fórmula de $\arctan$ se comprueba con $(\arctan x)'=1/(1+x^2)$. Para otros cuadráticos completamos cuadrado y ajustamos escala.

### No olvidar la división inicial

En $x^2/(x-1)$ dividimos: $x+1+1/(x-1)$. Su integral es $x^2/2+x+\ln|x-1|+C$. Intentar representar todo como $A/(x-1)$ haría imposible igualar grados, y el sistema no tendría la forma esperada.

**Con ayuda.** $1/[x(x+1)]=1/x-1/(x+1)$; integrar da $\ln|x|-\ln|x+1|+C$.

**Con pista.** Integrá $1/(x-2)^2$. **Respuesta:** $-1/(x-2)+C$, por la regla de potencias; no es un logaritmo porque el exponente es $-2$.

**Sin ayuda.** Descomponé $1/[x(x^2+1)]$. **Autocorrección:** $1/x-x/(x^2+1)$; primitiva $\ln|x|-\tfrac12\ln(x^2+1)+C$, para $x\ne0$. Al derivar y sumar verificás simultáneamente descomposición e integración.

### Hoja de fórmulas del capítulo 18

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $(x-a)^m$: $\sum_{j=1}^m A_j/(x-a)^j$ | Piezas para un factor repetido. | Dividir polinomios primero si grados lo requieren. |
| Cuadrático irreducible: numerador $Ax+B$ | Forma de fracción simple. | Incluir una pieza por cada potencia repetida; ajustar por identidad polinómica. |

## 19. Sustituciones trigonométricas: transformar una raíz

Una raíz como $\sqrt{a^2-x^2}$ no contiene necesariamente un factor que permita sustitución inmediata. Las identidades trigonométricas pueden convertir la diferencia de cuadrados en un cuadrado de coseno. Este método requiere elegir un intervalo para el ángulo y respetar que $\sqrt{z^2}=|z|$.

### Derivar el cambio desde una identidad

Para $\sqrt{a^2-x^2}$, con $a>0$ y $-a<x<a$, ponemos $x=a\sin\theta$, $-\pi/2<\theta<\pi/2$. Entonces $dx=a\cos\theta\,d\theta$ y la raíz es $a|\cos\theta|=a\cos\theta$ en ese intervalo. La elección de rango es lo que permite quitar el valor absoluto.

Calculemos $\int\sqrt{9-x^2}dx$. Usamos $x=3\sin\theta$. Queda

$$
9\int\cos^2\theta\,d\theta
=\frac92\int(1+\cos2\theta)d\theta
=\frac92(\theta+\sin\theta\cos\theta)+C.
$$

Volvemos con $\theta=\arcsin(x/3)$, $\sin\theta=x/3$ y $\cos\theta=\sqrt{9-x^2}/3$:

$$
\frac92\arcsin(x/3)+\frac x2\sqrt{9-x^2}+C.
$$

En la integral definida de $-3$ a 3 el área es $9\pi/2$, coherente con un semicírculo de radio 3. La primitiva se derivó en el interior; la evaluación en los extremos se justifica por continuidad del integrando y de la expresión obtenida.

### Otros dos patrones y una decisión previa

Para $\sqrt{a^2+x^2}$ sirve $x=a\tan\theta$, con $\theta\in(-\pi/2,\pi/2)$, porque $1+\tan^2\theta=\sec^2\theta$. Para $\sqrt{x^2-a^2}$ puede usarse $x=a\sec\theta$ en una rama apropiada, por $\sec^2\theta-1=\tan^2\theta$. Hay que controlar signos y volver a $x$ en esa rama.

No toda raíz exige este método. En $\int x/\sqrt{9-x^2}dx$, $u=9-x^2$ da una sustitución inmediata y más corta: $-\sqrt{9-x^2}+C$. La decisión depende de si aparece la derivada interior, no sólo de ver una raíz.

En $\int dx/(x^2+4)$, el cambio $x=2\tan\theta$ da $dx=2\sec^2\theta d\theta$ y denominador $4\sec^2\theta$. Queda $\theta/2+C=\tfrac12\arctan(x/2)+C$. Esta cuenta explica el factor que suele olvidarse al usar una tabla.

**Con ayuda.** $\int dx/\sqrt{4-x^2}=\arcsin(x/2)+C$, para $|x|<2$, usando $x=2\sin\theta$.

**Con pista.** Elegí el cambio para $\sqrt{1+x^2}$ y explicá por qué. **Respuesta:** $x=\tan\theta$ convierte la raíz en $\sec\theta$ en el rango de coseno positivo.

**Sin ayuda.** Calculá $\int_0^1dx/(1+x^2)$. **Autocorrección:** $\arctan1-\arctan0=\pi/4$. Si usás sustitución, los nuevos límites son 0 y $\pi/4$, no 0 y 1.

### Hoja de fórmulas del capítulo 19

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $x=a\sin\theta$ para $\sqrt{a^2-x^2}$ | Sustitución trigonométrica. | $a>0$, $\theta\in(-\pi/2,\pi/2)$ para rama interior; raíz de cuadrado exige signo. |
| $x=a\tan\theta$ para $\sqrt{a^2+x^2}$ | Usa $1+\tan^2\theta=\sec^2\theta$. | Controlar rango de $\theta$, diferencial y retorno a $x$. |

## Formulario de la unidad 2: Integrales definidas e indefinidas

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int x^pdx=x^{p+1}/(p+1)+C$ | Primitiva de potencia. | $p\ne-1$, sobre intervalos donde la potencia y su derivada estén definidas. |
| $\int dx/x=\ln\vert x\vert +C$ | Caso excepcional de exponente $-1$. | Intervalo sin cero; constantes independientes en componentes separadas. |
| $\int_a^bf=\lim\sum_i f(\xi_i)\Delta x_i$ | Acumulación firmada. | Límite común al refinar particiones; continuidad en cerrado basta para integrabilidad. |
| $\int_a^cf=\int_a^bf+\int_b^cf$; $\int_b^af=-\int_a^bf$ | Aditividad y orientación. | Integrales existentes en tramos considerados. |
| $\frac d{dx}\int_a^xf(t)dt=f(x)$ | Teorema fundamental. | $f$ continua; para extremo compuesto agregar cadena. |
| $\int_a^bf=F(b)-F(a)$ | Regla de Barrow. | $F'=f$, con continuidad suficiente en el cerrado; no atravesar singularidades sin límites. |
| $u=g(x)$, $du=g'(x)dx$ | Sustitución, cadena inversa. | Transformar todos los factores y los límites; respetar intervalos del cambio. |
| $\int f(g(x))g'(x)dx=F(g(x))+C$ | Patrón inmediato. | $F'=f$ y regularidad para cadena. |
| $\int u\,dv=uv-\int v\,du$ | Integración por partes. | Elegir $dv$ integrable y que el nuevo problema sea más sencillo. |
| $\int_a^bu v'=[uv]_a^b-\int_a^bu'v$ | Versión definida. | Regularidad suficiente; restar el producto completo de cada borde. |
| $(x-a)^m$: $\sum_{j=1}^m A_j/(x-a)^j$ | Piezas para un factor repetido. | Dividir polinomios primero si grados lo requieren. |
| Cuadrático irreducible: numerador $Ax+B$ | Forma de fracción simple. | Incluir una pieza por cada potencia repetida; ajustar por identidad polinómica. |
| $x=a\sin\theta$ para $\sqrt{a^2-x^2}$ | Sustitución trigonométrica. | $a>0$, $\theta\in(-\pi/2,\pi/2)$ para rama interior; raíz de cuadrado exige signo. |
| $x=a\tan\theta$ para $\sqrt{a^2+x^2}$ | Usa $1+\tan^2\theta=\sec^2\theta$. | Controlar rango de $\theta$, diferencial y retorno a $x$. |

## 20. Áreas y valor promedio: elegir qué se acumula

Para un área entre curvas no basta «integrar una función». Cada tira tiene ancho y altura; el integrando debe expresar esa altura, que es una diferencia no negativa. La elección de tiras verticales u horizontales decide qué variable y qué límites convienen.

### Del dibujo a una diferencia

Entre $y=x$ y $y=x^2$, los cruces se obtienen de $x=x^2$: $x=0,1$. En el intervalo intermedio, una prueba en $x=1/2$ da $x>x^2$, por lo que la recta está arriba. Cada tira vertical tiene altura $x-x^2$ y ancho $dx$. El área es

$$
A=\int_0^1(x-x^2)dx=\left[\frac{x^2}2-\frac{x^3}3\right]_0^1=\frac16.
$$

Cambiar el orden produciría $-1/6$, que sería una integral firmada, no el área pedida. Si las curvas intercambian posición, dividimos en los cruces o integramos el valor absoluto de su diferencia.

Podemos verificar con tiras horizontales. Para $0\le y\le1$, la curva $y=x^2$ en esa región da $x=\sqrt y$ como borde derecho; la recta da $x=y$ como izquierdo. Así $A=\int_0^1(\sqrt y-y)dy=2/3-1/2=1/6$. No se cambia $dx$ por $dy$ sin reescribir las fronteras.

### Integral, área y promedio son números diferentes

El valor promedio de una función integrable en $[a,b]$, con $a<b$, es

$$
f_{\mathrm{prom}}=\frac1{b-a}\int_a^bf(x)dx.
$$

Es la altura de un rectángulo con la misma acumulación firmada sobre ese intervalo. Para $f(x)=x^2$ en $[0,2]$, la integral vale $8/3$ y el promedio $4/3$. No coincide con el promedio de los valores extremos $(0+4)/2=2$, porque la función no es lineal.

Si $f$ es continua, el teorema del valor medio integral garantiza algún $c\in[a,b]$ con $f(c)=f_{\mathrm{prom}}$. En el ejemplo $c=2/\sqrt3$ sirve. El teorema asegura una altura alcanzada, no que la función sea constante ni que $c$ sea el punto medio. Es distinto del teorema de Lagrange, cuya conclusión habla de **derivadas**.

**Con ayuda.** El área entre $y=|x|$ y el eje en $[-1,1]$ es 1, separando dos triángulos o integrando una función no negativa.

**Con pista.** Hallá el área entre $y=2x$ y $y=x^2$. **Respuesta:** cruces 0 y 2, altura $2x-x^2$, integral $4/3$.

**Sin ayuda.** Calculá el valor promedio de $\sin x$ en $[0,\pi]$ y un punto donde se alcance. **Autocorrección:** integral 2, promedio $2/\pi$; $c=\arcsin(2/\pi)$ y también $\pi-\arcsin(2/\pi)$. Es posible que haya más de un punto.

![La altura de cada tira entre x y x² es la diferencia de las dos funciones.](/planos-de-estudio/images/am1/area.svg)

*Figura original. La altura de cada tira entre x y x² es la diferencia de las dos funciones.*

### Hoja de fórmulas del capítulo 20

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $A=\int_a^b\vert f-g\vert dx$ | Área entre gráficas. | Cruces y fronteras definidos; si cambia el orden, partir o mantener módulo. |
| $f_{\rm prom}=\frac1{b-a}\int_a^bf$ | Valor promedio. | $a<b$ e integrabilidad; continuidad garantiza algún punto que lo alcanza. |

## 21. Integrales impropias: escribir los límites antes de evaluar

Una integral es impropia si tiene un extremo infinito o si el integrando no permanece acotado cerca de algún punto del intervalo. La herramienta vuelve a ser un límite de integrales ordinarias. Una expresión de primitiva no permite saltar una singularidad.

### Un extremo infinito

Definimos $\int_1^\infty x^{-2}dx=\lim_{b\to\infty}\int_1^b x^{-2}dx$. Para cada $b$ finito la integral vale $[-1/x]_1^b=1-1/b$. Su límite es 1: la integral converge. En $\int_1^\infty1/x\,dx$ aparece $\ln b\to\infty$: diverge. Que la función tienda a cero no garantiza área finita.

En general, integrar $x^{-p}$ y tomar límite muestra que $\int_1^\infty x^{-p}dx$ converge exactamente cuando $p>1$. El caso $p=1$ se estudia con logaritmo. Esta familia será una referencia para comparar otras integrales y series.

### Un integrando infinito en un borde

Para $\int_0^1x^{-1/2}dx$ usamos $\lim_{\varepsilon\to0^+}\int_\varepsilon^1x^{-1/2}dx=\lim2(1-\sqrt\varepsilon)=2$. La función se hace infinita en cero y, aun así, la acumulación es finita. Para $\int_0^1x^{-p}dx$, el criterio es $p<1$, el opuesto al caso del infinito: ahora observamos otro extremo.

### Singularidad interior y falsa cancelación

En $\int_{-1}^11/\sqrt{|x|}dx$ debemos separar en cero. La integral de cada lado converge y vale 2 por simetría o por su límite respectivo; el total es 4. En $1/x^2$, cada lado diverge a $+\infty$, de modo que no puede aplicarse Barrow a través de cero.

En $\int_{-1}^11/x\,dx$, el límite simétrico $\lim_{\varepsilon\to0^+}(\int_{-1}^{-\varepsilon}+\int_\varepsilon^1)$ vale cero. Sin embargo, cada integral lateral diverge. La integral impropia usual **no converge**: el valor simétrico es un valor principal y no sustituye la definición. Tampoco se resta infinito menos infinito.

Para dos extremos infinitos, se separa en un punto finito y se exige convergencia de ambos lados. Un único límite que hace crecer ambos extremos a la vez puede esconder otra cancelación artificial.

### Comparar en vez de integrar todo

Si $0\le f\le g$ en el tramo problemático y la integral de $g$ converge, la de $f$ también. Si una función menor ya tiene integral infinita, la mayor diverge. Por ejemplo, para $x\ge1$, $0<1/(1+x^2)\le1/x^2$; su integral al infinito converge, incluso sin calcular la arcotangente. La comparación inversa no permite deducir convergencia.

**Con ayuda.** $\int_1^\infty x^{-3}dx=1/2$.

**Con pista.** Estudiá $\int_0^1dx/x$. **Respuesta:** $\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty$, divergente.

**Sin ayuda.** $\int_0^\infty e^{-x}dx$. **Autocorrección:** no hay singularidad en cero, sólo extremo infinito; $\lim_{b\to\infty}(1-e^{-b})=1$. Anotá qué tipo de impropiedad estás resolviendo.

### Hoja de fórmulas del capítulo 21

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int_a^\infty f=\lim_{b\to\infty}\int_a^bf$ | Impropia por extremo infinito. | Convergencia significa límite real finito; separar cada extremo problemático. |
| $\int_1^\infty x^{-p}dx$: $p>1$; $\int_0^1x^{-p}dx$: $p<1$ | Casos de convergencia de referencia. | No intercambiar las dos condiciones; singularidad interior se separa en dos integrales. |

## 22. Volúmenes de revolución: discos, arandelas y capas

Para obtener un volumen sumamos pequeños volúmenes. Una sección perpendicular al eje de giro suele producir discos o arandelas. Una tira paralela al eje produce capas cilíndricas. El objetivo es elegir una descripción de la misma región que no deje huecos ni cuente dos veces el mismo volumen.

### Una región, dos métodos

Tomemos la región $0\le x\le2$, $0\le y\le x^2$, y giremos alrededor del eje $y$. Una tira vertical es paralela al eje. Al girar forma una capa de radio $x$, altura $x^2$ y espesor $dx$. El volumen elemental se aproxima por circunferencia por altura por espesor: $2\pi x\cdot x^2dx$. Así

$$
V=2\pi\int_0^2x^3dx=8\pi.
$$

Para usar arandelas necesitamos tiras horizontales. A una altura $y\in[0,4]$, la región va desde $x=\sqrt y$ hasta $x=2$. El radio exterior es 2 y el interior $\sqrt y$. El área de la arandela es $\pi(4-y)$ y

$$
V=\pi\int_0^4(4-y)dy=8\pi.
$$

Ambos resultados coinciden porque describen el mismo sólido. Si hubiéramos usado sólo $\pi y$ en el segundo método habríamos calculado el hueco interior en lugar del volumen de la región.

### La distancia al eje determina el radio

Al girar alrededor del eje $x$, si la región está entre alturas no negativas $g(x)\le f(x)$, la arandela tiene área $\pi[f(x)^2-g(x)^2]$. No es $\pi[f(x)-g(x)]^2$: restamos áreas de dos discos, no elevamos al cuadrado el espesor radial.

Si el eje es $y=k$, el radio es una distancia $|f(x)-k|$. Hay que observar si el eje atraviesa la región, porque el radio interior puede pasar a ser cero y el borde exterior puede cambiar. Aplicar una fórmula sin dibujar la posición del eje puede contar una arandela donde en realidad hay un disco.

### Un ejemplo de planteo directo

La región bajo $y=x^2+3$ y encima del eje $x$, entre $x=-1$ y 4, gira sobre el eje $x$. Son discos de radio $x^2+3$, siempre positivo. El volumen es $\pi\int_{-1}^4(x^2+3)^2dx=\pi[x^5/5+2x^3+9x]_{-1}^4=1900\pi/5=380\pi$. El volumen tiene unidades cúbicas si las coordenadas tienen unidades de longitud.

**Con ayuda.** Al girar la región bajo $y=x$ entre 0 y 1 alrededor del eje $x$, $V=\pi\int_0^1x^2dx=\pi/3$, el volumen de un cono de radio y altura 1.

**Con pista.** La misma región gira alrededor del eje $y$. **Respuesta:** capas $2\pi\int_0^1x\cdot x\,dx=2\pi/3$. No debe dar el mismo volumen que el giro anterior: cambió el eje.

**Sin ayuda.** Girá la región entre $y=2$ y $y=x$ para $0\le x\le2$ sobre el eje $x$. **Autocorrección:** arandelas con radios 2 y $x$, $V=\pi\int_0^2(4-x^2)dx=16\pi/3$.

![La misma región se describe con tiras verticales para capas y horizontales para arandelas.](/planos-de-estudio/images/am1/revolucion.svg)

*Figura original. La misma región se describe con tiras verticales para capas y horizontales para arandelas.*

### Hoja de fórmulas del capítulo 22

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $V=\pi\int(R^2-r^2)dt$ | Discos/arandelas perpendiculares al eje. | $R\ge r\ge0$, distancias al eje en la variable elegida, región sin doble conteo. |
| $V=2\pi\int r h\,dt$ | Capas paralelas al eje. | Radio y altura no negativos, cada capa contada una vez; revisar eje y región. |

## 23. Longitud de arco y superficie de revolución: no confundir área plana

La longitud de una curva no se obtiene integrando su altura. La aproximamos mediante pequeños segmentos. Si el desplazamiento horizontal es $dx$ y el vertical aproximadamente $f'(x)dx$, Pitágoras da un elemento $ds=\sqrt{1+[f'(x)]^2}dx$. Para $f$ continuamente derivable en $[a,b]$, con $a<b$,

$$
L=\int_a^b\sqrt{1+[f'(x)]^2}dx.
$$

### Primero derivar, después simplificar la raíz

Sea $f(x)=(x^2+2)^{3/2}/3$, para $0\le x\le3$. Por cadena, $f'=x\sqrt{x^2+2}$. Entonces

$$
1+(f')^2=1+x^2(x^2+2)=x^4+2x^2+1=(x^2+1)^2.
$$

Como $x^2+1>0$, la raíz es $x^2+1$. Así $L=\int_0^3(x^2+1)dx=[x^3/3+x]_0^3=12$. La simplificación ocurrió después de reconocer un cuadrado; no distribuimos la raíz de una suma como suma de raíces, operación generalmente falsa.

Para una recta $y=mx+b$, la fórmula da $L=(b_0-a_0)\sqrt{1+m^2}$ en un intervalo $[a_0,b_0]$, coincidente con la distancia entre sus extremos. Este caso fácil es un buen control del significado de la fórmula.

### Girar la curva produce superficie, no volumen

Si una curva gira alrededor de un eje, un pequeño arco $ds$ genera una banda de área aproximada $2\pi r\,ds$, con $r$ distancia al eje. Para giro sobre el eje $x$,

$$
S=2\pi\int_a^b|f(x)|\sqrt{1+[f'(x)]^2}dx.
$$

Si $f\ge0$, el valor absoluto se reemplaza por $f$. La fórmula calcula el área lateral generada por la curva; no agrega tapas automáticamente.

Para $y=x$, $0\le x\le1$, girando sobre el eje $x$, $S=2\pi\int_0^1x\sqrt2dx=\pi\sqrt2$. Es el área lateral del cono anterior. Su volumen era $\pi/3$: las dimensiones y las unidades son diferentes. Para giro sobre el eje $y$, el radio de una curva parametrizada por $x\ge0$ es $x$ y la banda usa $2\pi x\,ds$.

### Elegir una descripción conveniente

Si la curva está dada como $x=g(y)$, podemos calcular longitud con $\sqrt{1+[g'(y)]^2}dy$. No invertimos a la fuerza una función si esa inversión complica el problema. Hay curvas cuyas longitudes llevan integrales sin primitiva elemental; un planteo correcto sigue siendo valioso y puede completarse numéricamente con control de error.

**Con ayuda.** La curva $y=3x+1$ en $[0,2]$ tiene longitud $2\sqrt{10}$.

**Con pista.** La horizontal $y=2$ entre 0 y 3 gira sobre el eje $x$. **Respuesta:** $f'=0$, $S=2\pi\cdot2\cdot3=12\pi$, área lateral de un cilindro, sin tapas.

**Sin ayuda.** Compará longitud, superficie lateral al girar y volumen bajo $y=1$, $0\le x\le2$, sobre el eje $x$. **Autocorrección:** $L=2$, $S=4\pi$, $V=2\pi$. Explicá por qué sus unidades son respectivamente longitud, área y volumen.

### Hoja de fórmulas del capítulo 23

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $L=\int_a^b\sqrt{1+(f')^2}dx$ | Longitud de arco. | $f$ continuamente derivable como hipótesis suficiente. |
| $S=2\pi\int r\sqrt{1+(f')^2}dx$ | Superficie generada por la curva. | Radio distancia no negativa al eje, sin contar tapas automáticamente ni superponer superficie repetida. |

## Formulario de la unidad 3: Aplicaciones e integrales impropias

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $A=\int_a^b\vert f-g\vert dx$ | Área entre gráficas. | Cruces y fronteras definidos; si cambia el orden, partir o mantener módulo. |
| $f_{\rm prom}=\frac1{b-a}\int_a^bf$ | Valor promedio. | $a<b$ e integrabilidad; continuidad garantiza algún punto que lo alcanza. |
| $\int_a^\infty f=\lim_{b\to\infty}\int_a^bf$ | Impropia por extremo infinito. | Convergencia significa límite real finito; separar cada extremo problemático. |
| $\int_1^\infty x^{-p}dx$: $p>1$; $\int_0^1x^{-p}dx$: $p<1$ | Casos de convergencia de referencia. | No intercambiar las dos condiciones; singularidad interior se separa en dos integrales. |
| $V=\pi\int(R^2-r^2)dt$ | Discos/arandelas perpendiculares al eje. | $R\ge r\ge0$, distancias al eje en la variable elegida, región sin doble conteo. |
| $V=2\pi\int r h\,dt$ | Capas paralelas al eje. | Radio y altura no negativos, cada capa contada una vez; revisar eje y región. |
| $L=\int_a^b\sqrt{1+(f')^2}dx$ | Longitud de arco. | $f$ continuamente derivable como hipótesis suficiente. |
| $S=2\pi\int r\sqrt{1+(f')^2}dx$ | Superficie generada por la curva. | Radio distancia no negativa al eje, sin contar tapas automáticamente ni superponer superficie repetida. |

## 24. Ecuaciones diferenciales: qué significa encontrar una función

En una ecuación algebraica buscamos números. En una ecuación diferencial buscamos una función que, junto con sus derivadas, cumpla una relación en un intervalo. En $y'=2x$, $y=x^2+C$ es una familia de soluciones. Para verificar una propuesta no basta ver que «se parece»: hay que derivarla y sustituirla en la ecuación.

### Orden, solución y condición inicial

El orden es el de la derivada más alta. $y''+3y'=2x-1$ es de segundo orden, aunque no aparezca $y$ sin derivar. Una solución debe tener las derivadas requeridas y satisfacer la igualdad en cada punto del intervalo considerado. Un dato como $y(0)=2$ selecciona una solución dentro de una familia; en segundo orden suelen darse también datos de derivada.

Comprobemos $y=e^{-\sin x}$ para $y'+y\cos x=0$. La cadena da $y'=-\cos x\,e^{-\sin x}$. Al sustituir, los dos términos se cancelan. Si además se pide $y(0)=1$, se cumple porque $e^0=1$. Esta doble comprobación debe acompañar los métodos de resolución que siguen.

### Campo direccional y solución cualitativa

En $y'=x-y$, cada punto $(x,y)$ lleva una pendiente $x-y$. Sobre la recta $y=x$ es cero; por debajo, positiva; por encima, negativa. Un campo direccional dibuja pequeños segmentos con esas pendientes. Una curva solución debe seguirlos; no es lo mismo que el gráfico de $x-y$ como función de una variable.

La ecuación $y'=y$ pide que la tasa de cambio sea proporcional al valor actual. Las soluciones $Ce^x$ crecen si $C>0$, permanecen en cero si $C=0$ y son negativas si $C<0$. La solución cero se llama de equilibrio. Dividir por $y$ sin revisarla por separado podría perderla.

### Modelar y declarar el intervalo

Si una población ideal cumple $P'=kP$ con $k$ constante, el modelo produce $P=P_0e^{kt}$. Es una consecuencia del supuesto de tasa proporcional, no una ley universal de poblaciones. Si $t$ se mide en años, $k$ tiene unidades de año inverso. Un modelo de enfriamiento escribirá una tasa proporcional a la diferencia con el ambiente, no a la temperatura absoluta sin más.

Los coeficientes pueden imponer restricciones. En $y'+y/x=x$, cero queda excluido y trabajaremos en $x>0$ o $x<0$. Una fórmula aislada sin intervalo puede esconder divisiones inválidas o falta de continuidad de los coeficientes.

**Con ayuda.** $y=x^2+3$ resuelve $y'=2x$ y cumple $y(0)=3$.

**Con pista.** ¿Resuelve $y=\cos2x$ la ecuación $y''+4y=0$? **Respuesta:** $y''=-4\cos2x$, así que sí; además $y(0)=1$, $y'(0)=0$.

**Sin ayuda.** ¿Toda solución de $y'=y$ cumple $y(0)=1$? **Autocorrección:** no; $Ce^x$ cumple $y(0)=C$. El dato fija $C=1$. Separá siempre satisfacer la ecuación de satisfacer un problema con condiciones iniciales.

### Hoja de fórmulas del capítulo 24

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y'=F(x,y)$ | Campo de pendientes. | Una solución cumple en todo un intervalo, además de sus datos. |
| Orden: derivada más alta presente | Clasificación de una ecuación. | No se cuenta la potencia de la derivada ni el número de términos. |

## 25. Variables separables: separar sin perder soluciones

Una ecuación es separable cuando puede escribirse $y'=g(x)h(y)$. Donde $h(y)\ne0$, reorganizamos como $dy/h(y)=g(x)dx$ e integramos. Antes de dividir, buscamos las soluciones constantes que anulan $h$: pueden quedar excluidas de esa reorganización.

### Un problema inicial completo

Resolvamos $y'=2xy$, $y(0)=3$. Si $y\ne0$, separamos $dy/y=2x\,dx$. Integramos: $\ln|y|=x^2+C$. Al exponenciar, la constante y el posible signo se absorben en una constante multiplicativa: $y=Ke^{x^2}$. La solución $y=0$, descartada al dividir, también satisface la ecuación y queda incluida permitiendo $K=0$.

El dato inicial da $3=K$, por lo que $y=3e^{x^2}$. Verificamos $y'=6xe^{x^2}=2xy$ y $y(0)=3$. El resultado existe para todo real. No escribimos $y=e^{x^2}+C$: una constante sumada no satisface la misma relación para valores generales.

### Una solución que sólo vive en cierto intervalo

Para $y'=y^2$, $y(0)=1$, la separación da $-1/y=x+C$. El dato fija $C=-1$ y $y=1/(1-x)$. La fórmula tiene un polo en 1. El intervalo máximo conectado que contiene el dato es $(-\infty,1)$. Aunque la expresión también tenga sentido para $x>1$, esa rama no prolonga una solución finita a través de 1.

También existe la solución de equilibrio $y=0$, que no satisface ese dato inicial pero sí la ecuación. Es una razón concreta para registrar lo que excluimos al dividir.

### Una aplicación: enfriamiento

Supongamos ambiente constante de $20^\circ$C y modelo $T'=-k(T-20)$, $k>0$. Ponemos $z=T-20$, de modo que $z'=-kz$. La solución es $T=20+Ce^{-kt}$. Si $T(0)=80$, $C=60$. Si $T(10)=50$, entonces $30=60e^{-10k}$, por lo que $k=\ln2/10$ por minuto si el tiempo está en minutos. A los 20 minutos la temperatura del modelo es $20+60/4=35^\circ$C. La diferencia con el ambiente se reduce a la mitad cada diez minutos; la temperatura completa no se divide por dos.

No suponemos que el modelo describa cualquier proceso térmico: ambiente cambiante o cambios de fase exigen otras hipótesis. El ejemplo enseña a convertir datos en constantes y a interpretar el resultado.

**Con ayuda.** $y'=3x^2$, $y(0)=2$, da $y=x^3+2$; aquí no hubo que dividir por una expresión en $y$.

**Con pista.** Resolvé $y'=xy$, $y(0)=-2$. **Respuesta:** $y=-2e^{x^2/2}$; el signo negativo no impide usar $\ln|y|$ en la separación.

**Sin ayuda.** Resolvé $y'=1+y^2$, $y(0)=0$, e indicá el intervalo que contiene cero. **Autocorrección:** $\arctan y=x+C$, luego $y=\tan x$ en $(-\pi/2,\pi/2)$. Los polos delimitan el intervalo; no es una solución real finita sobre toda la recta.

### Hoja de fórmulas del capítulo 25

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y'=g(x)h(y)\Rightarrow\int dy/h(y)=\int g(x)dx$ | Separación. | Donde $h(y)\ne0$; recuperar equilibrios $h(y)=0$ y controlar dominio. |
| $T=T_a+(T_0-T_a)e^{-kt}$ | Enfriamiento ideal. | Ambiente $T_a$ y $k>0$ constantes; unidades de $k$ inversas al tiempo. |

## 26. Lineales de primer orden: fabricar una derivada de producto

La forma estándar es $y'+p(x)y=q(x)$. «Lineal» significa que $y$ y su derivada aparecen en primer grado, sin productos entre ellas ni funciones no lineales de $y$. Los coeficientes sí pueden ser funciones de $x$. Si la ecuación viene multiplicada por otra función, primero normalizamos en un intervalo donde el coeficiente de $y'$ no sea cero.

### De dónde sale el factor integrante

Buscamos una función $\mu$ para que $\mu y'+\mu p y$ sea $(\mu y)'=\mu y'+\mu'y$. Basta imponer $\mu'=p\mu$. Una elección no nula es $\mu=e^{\int p(x)dx}$. Al multiplicar, obtenemos $(\mu y)'=\mu q$; integramos y despejamos. No hace falta conservar una constante adicional dentro de $\mu$: multiplicarlo por una constante no nula sólo escala toda la igualdad.

### Resolver con una condición inicial

Sea $y'+y=e^{-x}$, $y(0)=1$. Tenemos $p=1$, $\mu=e^x$. Multiplicamos:

$$
e^xy'+e^xy=1,\qquad(e^xy)'=1.
$$

Integramos $e^xy=x+C$ y dividimos por $e^x$: $y=(x+C)e^{-x}$. El dato inicial fija $C=1$. Derivamos para comprobar: $y'=e^{-x}-(x+1)e^{-x}=-xe^{-x}$; al sumar $y$ queda $e^{-x}$, tal como se exige. Sin dato inicial queda toda la familia.

### Coeficientes con restricciones

Para $xy'+y=x^2$, en $x>0$ dividimos por $x$: $y'+y/x=x$. El factor integrante puede tomarse $x$, ya que $e^{\ln x}=x$. La ecuación original ya revela $(xy)'=x^2$. Integramos $xy=x^3/3+C$ y obtenemos $y=x^2/3+C/x$. En $x<0$ también podemos usar $\mu=x$ como factor no nulo; cambiar su signo no afecta el método. Lo que no podemos hacer es dividir por cero y afirmar automáticamente una solución a través de ese punto.

La función con $C=0$ se extiende como $y=x^2/3$ y satisface la ecuación original incluso en cero. Esa extensión se comprueba en la ecuación sin normalizar, no se deduce de una división que allí era inválida. Las restricciones se analizan según el problema inicial.

### Cómo elegir el método

Algunas ecuaciones son tanto separables como lineales. Se puede elegir cualquiera de los dos métodos si se controla el dominio. Otras, como $y'+y=x$, son lineales pero no separables en la forma directa. No debemos «mover la $y$ al otro lado» para fingir una separación que deja ambas variables mezcladas.

**Con ayuda.** $y'+2y=0$ da $y=Ce^{-2x}$ por factor integrante $e^{2x}$.

**Con pista.** $y'-y=1$, $y(0)=0$. **Respuesta:** factor $e^{-x}$, $y=-1+Ce^x$, dato $C=1$; solución $e^x-1$.

**Sin ayuda.** Resolvé $y'+2y=e^{-x}$, $y(0)=0$. **Autocorrección:** $\mu=e^{2x}$, $(e^{2x}y)'=e^x$, luego $y=e^{-x}-e^{-2x}$. Verificá la cancelación del segundo término al sustituir.

### Hoja de fórmulas del capítulo 26

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\mu=e^{\int p dx}$, $(\mu y)'=\mu q$ | Lineal $y'+py=q$. | Normalizar primero en un intervalo de coeficientes continuos. |
| $y=\mu^{-1}(\int\mu q dx+C)$ | Solución lineal. | $\mu\ne0$; datos iniciales fijan $C$. |

## 27. Bernoulli y homogéneas: elegir una nueva incógnita

No todas las ecuaciones de primer orden son separables o lineales en la incógnita original. A veces una sustitución las convierte en una de esas formas. Primero reconocemos la estructura y después calculamos la derivada de la nueva variable; un cambio sin esa relación no transforma la ecuación.

### Bernoulli: una potencia de la incógnita

La forma es $y'+p(x)y=q(x)y^m$, con $m\ne0,1$. En una rama donde las potencias estén definidas y $y\ne0$, ponemos $z=y^{1-m}$. Como $z'=(1-m)y^{-m}y'$, multiplicar la ecuación por $(1-m)y^{-m}$ produce

$$
z'+(1-m)pz=(1-m)q.
$$

Ahora es lineal en $z$. Las soluciones nulas o ramas perdidas al dividir se revisan en la ecuación original; con exponentes no enteros también hay restricciones de signo.

Para $y'+y=y^2$, tomamos $m=2$, $z=1/y$ y obtenemos $z'-z=-1$. Multiplicamos por $e^{-x}$: $(e^{-x}z)'=-e^{-x}$. Integramos $z=1+Ce^x$ y volvemos:

$$
y=\frac1{1+Ce^x}.
$$

Si $y(0)=1/2$, resulta $C=1$, sin polos reales. La solución $y=0$ no apareció por la división, pero también satisface la ecuación. La solución $y=1$ sí aparece cuando $C=0$. Si el denominador se anula para otra elección de constante, el intervalo debe detenerse antes del polo.

### Homogénea de primer orden: depender del cociente

La forma $y'=F(y/x)$, en $x\ne0$, sugiere $v=y/x$, es decir, $y=xv(x)$. La derivada es $y'=v+xv'$ por producto. Reemplazamos y queda $xv'=F(v)-v$, generalmente separable. La palabra «homogénea» aquí tiene otro significado que en una ecuación lineal con segundo miembro cero.

Resolvamos $y'=1+y/x$ en $x>0$. Sustituimos $v+xv'=1+v$, de donde $v'=1/x$. Integramos $v=\ln x+C$, y $y=x(\ln x+C)$. Verificar devuelve $y'=\ln x+C+1=1+y/x$. El dato $y(1)=0$ fija $C=0$.

### Diagnóstico del método y práctica

No alcanza con ver un exponente o la palabra «homogéneo». En $y'=x+y$ no tenemos dependencia exclusiva de $y/x$, pero sí una ecuación lineal al escribir $y'-y=x$. En $y'=x(1+y^2)$ hay separación inmediata, aunque también haya una potencia.

**Con ayuda.** Para $y'-y=y^3$, el cambio de Bernoulli es $z=y^{-2}$ y la ecuación transformada $z'+2z=-2$.

**Con pista.** En $y'=2y/x$, usá $y=xv$ y compará con separación directa. **Respuesta:** $xv'=v$, de donde $v=Cx$ por intervalos y $y=Cx^2$; $y=0$ también queda incluida.

**Sin ayuda.** Resolvé $xy'+y=1/y^2$ para $x>0$ y $y\ne0$. **Autocorrección:** normalizamos $y'+y/x=y^{-2}/x$, usamos $z=y^3$, y queda $z'+3z/x=3/x$. Factor $x^3$: $(x^3z)'=3x^2$, luego $y^3=1+C/x^3$. La raíz cúbica se toma en tramos donde $y\ne0$; cero no resuelve la ecuación original, que ni siquiera lo admite.

### Hoja de fórmulas del capítulo 27

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $z=y^{1-m}$, $z'+(1-m)pz=(1-m)q$ | Bernoulli $y'+py=qy^m$. | $m\ne0,1$; rama admisible con $y\ne0$; revisar soluciones excluidas. |
| $y=xv$, $y'=v+xv'$ | Homogénea $y'=F(y/x)$. | $x\ne0$; no confundir con lineal homogénea. |

## 28. Trayectorias ortogonales: pasar de una familia a sus pendientes

Dos curvas se cortan ortogonalmente cuando sus tangentes son perpendiculares en el punto de corte. Si ambas pendientes son finitas y la primera no es cero, la segunda es su recíproco negativo: $m_\perp=-1/m$. Las tangentes horizontales y verticales se tratan geométricamente; la fórmula de pendientes no cubre una pendiente infinita como si fuera número real.

### Eliminar el parámetro de una familia

Busquemos trayectorias ortogonales de $y=Cx^2$. Cada valor de $C$ produce una curva distinta. Derivamos manteniendo $C$ constante: $y'=2Cx$. Para expresar la pendiente usando sólo $x,y$, despejamos $C=y/x^2$ donde $x\ne0$ y sustituimos: $y'=2y/x$.

Las ortogonales cumplen $y'=-x/(2y)$ donde ese cociente tenga sentido. Separamos $2y\,dy=-x\,dx$ e integramos:

$$
y^2=-x^2/2+K,\qquad x^2/2+y^2=K.
$$

Para $K>0$ son elipses. La ecuación implícita describe ramas con tangentes verticales que no siempre pueden escribirse globalmente como una única función $y(x)$. La familia original y la fórmula de pendiente obtenida tenían restricciones; no afirmamos que el cálculo por cocientes pruebe el comportamiento en todos los puntos de los ejes.

### Comprobar en un punto regular

Tomemos el punto $(1,1)$. La parábola correspondiente tiene $C=1$ y pendiente 2. La elipse que pasa por el punto tiene $K=3/2$ y pendiente $-1/2$; el producto es $-1$. Esta comprobación no sustituye la derivación de la familia, pero detecta un signo mal elegido.

Otro caso es la familia de rectas $y=Cx$. La pendiente es $y/x$, y las ortogonales satisfacen $y'=-x/y$. Integrar $y\,dy=-x\,dx$ da $x^2+y^2=K$: circunferencias centradas en el origen. Geométricamente, las rectas son radiales y las tangentes de las circunferencias perpendiculares a los radios. En el origen el razonamiento regular no se aplica del mismo modo.

### Errores que conviene reconocer

Cambiar la familia a $y=-Cx^2$ no construye trayectorias ortogonales: sigue siendo la misma familia de parábolas al variar el signo de $C$. La perpendicularidad es una condición sobre **pendientes en los cruces**, no sobre el signo de la fórmula. Tampoco basta multiplicar la función por $-1$.

**Con ayuda.** A las rectas horizontales $y=C$ les corresponden rectas verticales $x=K$. La fórmula $-1/0$ se reemplaza por la interpretación de tangentes.

**Con pista.** ¿Qué curvas son ortogonales a la familia $y=x+C$? **Respuesta:** su pendiente es 1, así que la perpendicular es $-1$; integrar da $y=-x+K$.

**Sin ayuda.** Buscá ortogonales de $y=Ce^x$ en regiones donde $y\ne0$. **Autocorrección:** $y'=y$, pendiente ortogonal $-1/y$; $y\,dy=-dx$ da $y^2+2x=K$. Comprobá que los productos de pendientes valen $-1$ en cruces regulares.

### Hoja de fórmulas del capítulo 28

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $m_\perp=-1/m$ | Pendientes perpendiculares. | Pendientes finitas y $m\ne0$; horizontales/verticales se estudian geométricamente. |
| Derivar familia, eliminar parámetro, cambiar pendiente, resolver | Trayectorias ortogonales. | Trabajar en regiones regulares y verificar cruces. |

## 29. Segundo orden homogéneo: explicar la ecuación característica

Consideremos $ay''+by'+cy=0$, con coeficientes constantes y $a\ne0$. Las exponenciales son candidatas útiles porque al derivar $e^{rx}$ sólo aparecen factores $r$ y $r^2$. Reemplazar da $(ar^2+br+c)e^{rx}=0$. Como la exponencial no se anula, buscamos raíces de $ar^2+br+c=0$, la ecuación característica.

### Dos raíces reales distintas

Para $y''-3y'+2y=0$, la característica es $(r-1)(r-2)=0$. Obtenemos $e^x$ y $e^{2x}$, y por linealidad su combinación $y=C_1e^x+C_2e^{2x}$. Son independientes, de modo que forman la solución general del segundo orden lineal en este caso.

Con datos $y(0)=1$, $y'(0)=0$, resolvemos $C_1+C_2=1$ y $C_1+2C_2=0$. Restar da $C_2=-1$, luego $C_1=2$. La solución es $2e^x-e^{2x}$. Comprobamos ambos datos y la ecuación; el segundo dato se evalúa en la derivada, no en $y$ otra vez.

### Una raíz repetida no da dos copias independientes

Para $y''-2y'+y=0$, la característica tiene raíz doble 1. Escribir $C_1e^x+C_2e^x$ produciría sólo una constante efectiva. Necesitamos otra solución independiente, $xe^x$, y la general es $(C_1+C_2x)e^x$. Puede justificarse sustituyendo $y=e^xv$: al derivar y reemplazar, la ecuación se reduce a $e^xv''=0$, por lo que $v=C_1+C_2x$.

### Raíces complejas y soluciones reales

Para $y''+4y=0$, las raíces son $\pm2i$. La forma real es $y=C_1\cos2x+C_2\sin2x$. Con datos $y(0)=1$, $y'(0)=0$, resulta $y=\cos2x$. En general, raíces $\alpha\pm i\beta$ dan $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$. La exponencial controla la envolvente y seno/coseno la oscilación.

La linealidad permite sumar soluciones de una ecuación **homogénea**. No significa que cualquier suma de soluciones de una ecuación no lineal sea solución ni que sumar dos particulares de la misma ecuación forzada conserve el segundo miembro.

**Con ayuda.** $y''-9y=0$ tiene raíces $\pm3$ y solución $C_1e^{3x}+C_2e^{-3x}$.

**Con pista.** Resolvé $y''+2y'+y=0$. **Respuesta:** raíz doble $-1$; $y=(C_1+C_2x)e^{-x}$.

**Sin ayuda.** Resolvé $y''+2y'+5y=0$, $y(0)=0$, $y'(0)=2$. **Autocorrección:** raíces $-1\pm2i$, solución $e^{-x}(C_1\cos2x+C_2\sin2x)$; los datos dan $C_1=0$, $C_2=1$. La respuesta $e^{-x}\sin2x$ muestra oscilación amortiguada.

### Hoja de fórmulas del capítulo 29

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $ar^2+br+c=0$ | Característica de $ay''+by'+cy=0$. | Coeficientes constantes, $a\ne0$. |
| $r_1\ne r_2$: $C_1e^{r_1x}+C_2e^{r_2x}$; doble $r$: $(C_1+C_2x)e^{rx}$ | Raíces reales. | Dos constantes independientes; ajustar con datos de $y$ y $y'$. |
| $r=\alpha\pm i\beta$: $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ | Raíces complejas. | $\beta\ne0$; solución real. |

## 30. Segundo orden no homogéneo: elegir y corregir una particular

En $ay''+by'+cy=g(x)$, una solución general es $y_h+y_p$: $y_h$ resuelve la homogénea y una particular $y_p$ produce exactamente el segundo miembro. La diferencia entre dos soluciones de la ecuación forzada resuelve la homogénea, lo que justifica esta estructura.

### Coeficientes indeterminados y resonancia algebraica

El método propone una forma de particular cuando $g$ combina polinomios, exponenciales, senos y cosenos compatibles con el método. No es una receta universal para cualquier función. Para $y''-3y'+2y=e^x$, la homogénea ya contiene $e^x$. Probar $Ae^x$ daría cero en el lado izquierdo para cualquier $A$, así que nunca podría producir $e^x$.

Multiplicamos por $x$ y proponemos $y_p=Axe^x$. Sus derivadas son $Ae^x(x+1)$ y $Ae^x(x+2)$. Sustituimos:

$$
A e^x[(x+2)-3(x+1)+2x]=-Ae^x.
$$

Igualar con $e^x$ da $A=-1$. La general es $C_1e^x+C_2e^{2x}-xe^x$. Si la raíz 1 fuera doble, el factor necesario sería $x^2$. La multiplicación corrige una coincidencia con la solución homogénea; no se agrega siempre.

### Forzamiento polinómico, con verificación directa

Para $y''+3y'=2x-1$, la homogénea tiene raíces 0 y $-3$: $y_h=C_1+C_2e^{-3x}$. Como el forzamiento es lineal y la raíz cero aparece, proponemos $y_p=Ax^2+Bx$. Entonces $y_p'=2Ax+B$, $y_p''=2A$. Igualar $6Ax+(2A+3B)=2x-1$ da $A=1/3$, $B=-5/9$. La solución es

$$
y=C_1+C_2e^{-3x}+x^2/3-5x/9.
$$

El término particular se comprueba calculando $2/3+3(2x/3-5/9)=2x-1$. Este control es más claro que expandir toda la solución general una y otra vez.

### Oscilación forzada como modelo

Un modelo masa-resorte ideal puede escribirse $my''+ky=F_0\cos\omega x$, con $m,k>0$. Si la frecuencia de forzamiento coincide con la natural $\sqrt{k/m}$, aparece una particular con factor $x$ y amplitud creciente en el modelo sin amortiguamiento. Este fenómeno de resonancia ideal depende de esas hipótesis; no prueba crecimiento ilimitado en cualquier sistema físico real.

**Con ayuda.** Para $y''-y=2$, una particular constante $A$ cumple $-A=2$, luego $A=-2$; general $C_1e^x+C_2e^{-x}-2$.

**Con pista.** Para $y''+4y=\cos2x$, ¿sirve $A\cos2x+B\sin2x$? **Respuesta:** no, ambos términos ya son homogéneos. Una particular es $x\sin2x/4$, comprobable por dos derivadas.

**Sin ayuda.** Resolvé $y''-9y=4\sin2x$. **Autocorrección:** proponé $A\cos2x+B\sin2x$. Sustituir da $-13A\cos2x-13B\sin2x$, por lo que $A=0$, $B=-4/13$; sumá $C_1e^{3x}+C_2e^{-3x}$.

### Hoja de fórmulas del capítulo 30

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y=y_h+y_p$ | Lineal no homogénea. | $y_p$ reproduce el segundo miembro; $y_h$ tiene segundo miembro cero. |
| Particular coincidente: multiplicar propuesta por $x^s$ | Corrección por resonancia. | $s$ es multiplicidad de la raíz asociada en característica; sólo forzamientos compatibles con coeficientes indeterminados. |

## Formulario de la unidad 4: Ecuaciones diferenciales

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y'=F(x,y)$ | Campo de pendientes. | Una solución cumple en todo un intervalo, además de sus datos. |
| Orden: derivada más alta presente | Clasificación de una ecuación. | No se cuenta la potencia de la derivada ni el número de términos. |
| $y'=g(x)h(y)\Rightarrow\int dy/h(y)=\int g(x)dx$ | Separación. | Donde $h(y)\ne0$; recuperar equilibrios $h(y)=0$ y controlar dominio. |
| $T=T_a+(T_0-T_a)e^{-kt}$ | Enfriamiento ideal. | Ambiente $T_a$ y $k>0$ constantes; unidades de $k$ inversas al tiempo. |
| $\mu=e^{\int p dx}$, $(\mu y)'=\mu q$ | Lineal $y'+py=q$. | Normalizar primero en un intervalo de coeficientes continuos. |
| $y=\mu^{-1}(\int\mu q dx+C)$ | Solución lineal. | $\mu\ne0$; datos iniciales fijan $C$. |
| $z=y^{1-m}$, $z'+(1-m)pz=(1-m)q$ | Bernoulli $y'+py=qy^m$. | $m\ne0,1$; rama admisible con $y\ne0$; revisar soluciones excluidas. |
| $y=xv$, $y'=v+xv'$ | Homogénea $y'=F(y/x)$. | $x\ne0$; no confundir con lineal homogénea. |
| $m_\perp=-1/m$ | Pendientes perpendiculares. | Pendientes finitas y $m\ne0$; horizontales/verticales se estudian geométricamente. |
| Derivar familia, eliminar parámetro, cambiar pendiente, resolver | Trayectorias ortogonales. | Trabajar en regiones regulares y verificar cruces. |
| $ar^2+br+c=0$ | Característica de $ay''+by'+cy=0$. | Coeficientes constantes, $a\ne0$. |
| $r_1\ne r_2$: $C_1e^{r_1x}+C_2e^{r_2x}$; doble $r$: $(C_1+C_2x)e^{rx}$ | Raíces reales. | Dos constantes independientes; ajustar con datos de $y$ y $y'$. |
| $r=\alpha\pm i\beta$: $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ | Raíces complejas. | $\beta\ne0$; solución real. |
| $y=y_h+y_p$ | Lineal no homogénea. | $y_p$ reproduce el segundo miembro; $y_h$ tiene segundo miembro cero. |
| Particular coincidente: multiplicar propuesta por $x^s$ | Corrección por resonancia. | $s$ es multiplicidad de la raíz asociada en característica; sólo forzamientos compatibles con coeficientes indeterminados. |

## 31. Sucesiones: estudiar una lista infinita sin sumar sus términos

Una sucesión asigna un número $a_n$ a cada índice natural. Es una función de entrada discreta. En $a_n=n/(n+1)$, los primeros valores son $1/2,2/3,3/4,\ldots$. La pregunta de convergencia mira qué sucede con **un término** cuando el índice crece. Todavía no estamos sumando la lista.

### Leer la definición con un ejemplo

Decir $a_n\to L$ significa que para cualquier tolerancia $\varepsilon>0$ existe un índice a partir del cual todos los términos quedan a distancia menor que $\varepsilon$ de $L$. Para $a_n=n/(n+1)$, observamos

$$
|a_n-1|=\frac1{n+1}.
$$

Si queremos distancia menor que $0{,}01$, basta $n\ge100$. La fórmula muestra además cómo elegir un umbral para cualquier tolerancia: exigir $n+1>1/\varepsilon$. Una tabla de diez términos sugiere el límite, pero no prueba que todos los posteriores se comporten igual.

### Propiedades y técnicas

Si dos sucesiones convergen, sus sumas y productos convergen a las operaciones de los límites; para un cociente el límite del denominador debe ser distinto de cero. En $(3n^2+1)/(n^2+2)$ dividimos por $n^2$ y obtenemos límite 3. Para $\sin n/n$, $|\sin n/n|\le1/n\to0$; el teorema del encaje da límite cero sin necesitar un límite para $\sin n$.

Una sucesión convergente está acotada, pero una acotada puede oscilar sin acercarse a un único valor. $(-1)^n$ queda entre $-1$ y 1, pero sus subsecuencias pares e impares tienen límites distintos. Tener dos valores de acumulación no equivale a convergencia.

### Monotonía y cotas

Una sucesión es creciente si $a_{n+1}\ge a_n$ y decreciente con desigualdad opuesta. Se puede estudiar la diferencia $a_{n+1}-a_n$; para términos positivos, también el cociente. En $a_n=n/(n+1)$,

$$
a_{n+1}-a_n=\frac{n+1}{n+2}-\frac n{n+1}=\frac1{(n+1)(n+2)}>0.
$$

Además $a_n<1$. Es creciente y acotada superiormente; el teorema de convergencia monótona garantiza límite finito. El cálculo directo ya nos dijo cuál, pero el teorema será útil cuando no tengamos fórmula explícita.

**Con ayuda.** $a_n=2+1/n$ decrece y converge a 2; no necesita alcanzar 2 para tenerlo como límite.

**Con pista.** ¿Converge $(-1)^n/n$? **Respuesta:** sí, a cero por encaje, aunque no sea monótona. Monotonía es condición suficiente junto con cota, no requisito de toda convergencia.

**Sin ayuda.** Estudiá $a_n=\sqrt{n^2+n}-n$. **Autocorrección:** racionalizar da $n/[\sqrt{n^2+n}+n]=1/[\sqrt{1+1/n}+1]\to1/2$. No se puede resolver la forma infinito menos infinito restando informalmente sus partes.

### Hoja de fórmulas del capítulo 31

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $a_n\to L$: $\vert a_n-L\vert <\varepsilon$ eventualmente | Convergencia de términos. | Para toda tolerancia positiva; una tabla finita no prueba el límite. |
| Monótona y acotada implica convergencia | Teorema de sucesiones. | Cota en dirección necesaria; acotación sola no basta. |

## 32. Sucesiones recursivas: demostrar antes de resolver la ecuación del límite

Una recurrencia define el término siguiente a partir del anterior. Iterar algunos pasos ayuda a descubrir un patrón; no demuestra convergencia. Igualar el posible límite a la regla recurrente sólo da **candidatos**, y exige antes saber que ese límite existe y que el paso al límite es válido.

### Un caso sencillo con error explícito

Sea $a_1=1$ y $a_{n+1}=(a_n+2)/2$. Los primeros términos son $1,1{,}5,1{,}75,1{,}875$. Si $a_n<2$, entonces $a_{n+1}<2$. Además $a_{n+1}-a_n=(2-a_n)/2>0$. Por inducción permanece debajo de 2 y crece: converge. La continuidad de la regla permite $L=(L+2)/2$, de donde $L=2$.

Podemos ir más lejos: $2-a_{n+1}=(2-a_n)/2$, así que $2-a_n=1/2^{n-1}$. Para error menor que $0{,}01$, necesitamos $2^{n-1}>100$; $n=8$ ya sirve porque $2^7=128$. La fórmula del error convierte una observación cualitativa en un control de precisión.

### Un ejemplo con dos posibles puntos fijos

Consideremos el ejercicio $a_1=2$, $a_{n+1}=1/(3-a_n)$. Los siguientes términos son 1, $1/2$, $2/5$, $5/13$. Los candidatos de límite satisfacen $L^2-3L+1=0$:

$$
\alpha=\frac{3-\sqrt5}{2},\qquad\beta=\frac{3+\sqrt5}{2}.
$$

No podemos elegir por aproximación sin justificar. Definimos $T(x)=1/(3-x)$, creciente para $x<3$. Como $a_2=1$ y $\alpha<1<\beta$, si $\alpha\le a_n\le1$, entonces $\alpha=T(\alpha)\le T(a_n)\le T(1)=1/2\le1$: el intervalo se conserva.

Para $\alpha\le x\le1$,

$$
T(x)-x=\frac{x^2-3x+1}{3-x}=\frac{(x-\alpha)(x-\beta)}{3-x}\le0.
$$

La sucesión desde el segundo término decrece y queda acotada inferiormente por $\alpha$, así que converge. Su límite pertenece a $[\alpha,1]$ y debe ser punto fijo; $\beta>1$ queda descartado. Concluimos $a_n\to\alpha$. También verificamos que el denominador nunca se anula en los intervalos usados.

### Un aviso contra el automatismo

La recurrencia $a_{n+1}=1-a_n$, $a_1=0$, produce $0,1,0,1,\ldots$. Resolver $L=1-L$ da $L=1/2$, pero la sucesión no converge. El punto fijo existe aunque esa trayectoria nunca se acerque a él. Es un contraejemplo concreto a la receta de «reemplazar $a_n$ por $L$» como único argumento.

**Con ayuda.** Para $a_{n+1}=a_n/2$, $a_1=4$, la fórmula explícita $4/2^{n-1}$ demuestra límite cero.

**Con pista.** Si una sucesión es decreciente y está acotada inferiormente, ¿ya sabemos su límite exacto? **Respuesta:** sabemos que existe un límite real; hace falta otra cuenta para identificarlo.

**Sin ayuda.** $a_1=0$, $a_{n+1}=(a_n+3)/2$. **Autocorrección:** permanece bajo 3 y crece; converge a 3. El error es $3/2^{n-1}$. Explicá por qué la cota se preserva antes de citar el teorema.

### Hoja de fórmulas del capítulo 32

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $a_{n+1}=T(a_n)$ y convergencia implican $L=T(L)$ | Ecuación de punto fijo. | $T$ continua en el límite; demostrar convergencia antes, revisar denominadores. |
| $a_{n+1}=(a_n+2)/2$, $a_1=1$: $2-a_n=2^{1-n}$ | Error explícito del ejemplo. | No es fórmula universal para cualquier recurrencia. |

## 33. Series numéricas: la sucesión que importa es la de sumas parciales

Una serie $\sum_{n=1}^\infty a_n$ pregunta por el límite de $S_N=a_1+\cdots+a_N$. La sucesión de términos $a_n$ y la de sumas $S_N$ son objetos diferentes. Para $a_n=1/2^n$, los términos tienden a cero y las sumas se acercan a 1. Para $a_n=1/n$, los términos también tienden a cero, pero las sumas crecen sin cota.

### Geométrica: obtener la fórmula sin adivinar

Si $S_N=a+ar+\cdots+ar^{N-1}$, multiplicar por $r$ y restar cancela todos los términos interiores: $(1-r)S_N=a-ar^N$. Para $r\ne1$,

$$
S_N=a\frac{1-r^N}{1-r}.
$$

Si $|r|<1$, $r^N\to0$ y la serie suma $a/(1-r)$. Si $a\ne0$ y $|r|\ge1$, los términos no tienden a cero y la serie diverge. El caso $a=0$ es trivialmente nulo. La suma depende del primer término: $\sum_{n=1}^\infty(1/2)^n$ suma 1, pero si empieza en $n=0$ suma 2.

El decimal $0{,}\overline2$ puede escribirse $2/10+2/10^2+\cdots$, geométrica de primer término $1/5$ y razón $1/10$. Su suma es $(1/5)/(9/10)=2/9$. La notación de decimal infinito tiene así una interpretación mediante límites de truncamientos.

### Telescópica: escribir lo que se cancela

En $\sum_{n=1}^\infty1/[n(n+1)]$, descomponemos $1/[n(n+1)]=1/n-1/(n+1)$. La suma parcial es

$$
S_N=(1-1/2)+(1/2-1/3)+\cdots+(1/N-1/(N+1))=1-\frac1{N+1}.
$$

El límite es 1. No cancelamos informalmente términos infinitos: primero hacemos la cuenta finita y después tomamos límite. Para $\sum\ln[n/(n+1)]$, en cambio, $S_N=\ln[1/(N+1)]\to-\infty$, así que diverge aunque cada término tienda a cero.

### La condición necesaria y su límite

Si $S_N\to S$, entonces $a_N=S_N-S_{N-1}\to S-S=0$. Por eso un término que no tiende a cero demuestra divergencia inmediatamente. La recíproca es falsa: en la armónica agrupamos

$$
1+\frac12+\left(\frac13+\frac14\right)+\left(\frac15+\cdots+\frac18\right)+\cdots.
$$

Cada bloque posterior suma al menos $1/2$, por lo que las sumas parciales no quedan acotadas. Para series de términos no negativos, $S_N$ es creciente; converge si y sólo si esas sumas están acotadas superiormente.

**Con ayuda.** $\sum_{n=0}^\infty3(1/4)^n=4$.

**Con pista.** Estudiá $\sum n/(n+1)$. **Respuesta:** el término tiende a 1, no a cero; diverge sin necesidad de otro criterio.

**Sin ayuda.** Hallá $\sum_{n=1}^\infty1/[(n+1)(n+2)]$. **Autocorrección:** telescópica $1/(n+1)-1/(n+2)$; $S_N=1/2-1/(N+2)\to1/2$. Revisar el índice inicial evita responder 1 por copiar el ejemplo anterior.

![Los términos pueden tender a cero tanto en una serie convergente como en una divergente.](/planos-de-estudio/images/am1/sumas.svg)

*Figura original. Los términos pueden tender a cero tanto en una serie convergente como en una divergente.*

### Hoja de fórmulas del capítulo 33

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $S_N=\sum_{n=1}^Na_n$; serie converge si $S_N\to S\in\mathbb R$ | Definición de suma infinita. | Separar término $a_n$ de suma parcial $S_N$. |
| $\sum_{n=0}^\infty ar^n=a/(1-r)$ | Geométrica. | $\vert r\vert <1$; si $a=0$, serie trivial para cualquier razón. |
| Convergencia implica $a_n\to0$ | Condición necesaria. | La recíproca falla, como muestra la armónica. |

## 34. Comparación e integral: demostrar convergencia con una referencia

En una serie positiva no siempre conocemos una suma cerrada. Podemos decidir si existe comparándola con otra más simple. «Converge» y «sabemos sumar exactamente» son logros diferentes.

### Comparación directa: cuidar la dirección

Si eventualmente $0\le a_n\le b_n$ y $\sum b_n$ converge, entonces las sumas de los $a_n$ quedan acotadas y su serie converge. Si una serie menor diverge y la mayor la domina, la mayor diverge. En cambio, estar por debajo de una divergente no decide nada: tanto $1/n$ como $1/n^2$ están por debajo de 1, y se comportan distinto.

Por ejemplo $0<1/(n^2+1)\le1/n^2$. Como la serie de cuadrados recíprocos converge, la propuesta converge. No podemos deducir su suma mediante esta desigualdad.

La comparación al límite sirve si $a_n,b_n>0$ eventualmente y $a_n/b_n\to L$ con $0<L<\infty$: ambas series tienen el mismo carácter. Para $a_n=1/(3n^2-2n+1)$ elegimos $b_n=1/n^2$; el cociente tiende a $1/3$. La positividad del denominador se ve completando cuadrado o notando que para enteros $n\ge1$ es positivo. La comparación queda justificada.

### Criterio integral y series de potencias negativas

Si $f$ es positiva, continua y decreciente para $x\ge N_0$, entonces $\sum f(n)$ y $\int_{N_0}^\infty f(x)dx$ convergen o divergen juntas, ajustando el índice inicial sin efecto sobre el carácter. Los rectángulos de la serie quedan entre áreas desplazadas de la función. Aplicado a $f(x)=x^{-p}$ para $p>0$, obtenemos las $p$-series: $\sum1/n^p$ converge si $p>1$ y diverge si $0<p\le1$. Para $p\le0$, los términos ni siquiera tienden a cero y también diverge.

En $\sum_{n=2}^\infty1/[n(\ln n)^2]$, la función es positiva y decrece para $x>1$. La sustitución $u=\ln x$ transforma la integral en $\int du/u^2$, convergente desde $\ln2$ al infinito. La serie converge. En cambio $1/(n\ln n)$ lleva a $\int du/u$, divergente. Un logaritmo puede cambiar el resultado en un caso donde comparar sólo grados de $n$ es insuficiente.

### Acotar el resto de una suma

Si se cumplen las condiciones del criterio integral y la serie converge, con $S_N=\sum_{n=1}^Nf(n)$ y $R_N=S-S_N$,

$$
\int_{N+1}^\infty f(x)dx\le R_N\le\int_N^\infty f(x)dx.
$$

Para $\sum1/n^4$, $R_N\le1/(3N^3)$. Exigir error a lo sumo $0{,}001$ lleva a $N^3\ge1000/3$, así que $N=7$ es suficiente. No afirmamos que sea necesariamente el menor índice real de truncamiento que sirve: es el menor entero certificado por esta cota.

**Con ayuda.** $1/(n^3+n)\le1/n^3$ para $n\ge1$, así que su serie converge.

**Con pista.** Estudiá $\sum(2n+1)/(n^2+3)$. **Respuesta:** comparar al límite con $1/n$ da 2; diverge.

**Sin ayuda.** ¿Cuántos términos garantizan error $\le0{,}01$ en $\sum1/n^2$ usando la cota integral? **Autocorrección:** $R_N\le1/N$, de modo que $N\ge100$. No es una cota apropiada para una serie con signos alternados sin pasar antes a un análisis válido.

### Hoja de fórmulas del capítulo 34

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\sum1/n^p$ converge exactamente si $p>1$ | Serie de referencia. | Índice desde 1; valores reales de $p$. |
| $a_n/b_n\to L\in(0,\infty)$: mismo carácter | Comparación al límite. | Términos positivos eventualmente; límites cero/infinito requieren otra conclusión o argumento. |
| $\int_{N+1}^\infty f\le R_N\le\int_N^\infty f$ | Cota integral del resto. | Serie convergente con $a_n=f(n)$, $f$ positiva, continua y decreciente en la cola. |

## 35. Cociente, raíz y Raabe: reconocer qué criterio puede decidir

Los criterios se eligen por la estructura del término. Factoriales y exponenciales suelen simplificarse en un cociente de términos consecutivos. Potencias con exponente $n$ suelen simplificarse con raíz enésima. El resultado crítico 1 requiere otro análisis: no significa divergencia ni convergencia.

### Cociente con cancelaciones visibles

Para términos positivos, si $a_{n+1}/a_n\to\ell<1$, la serie converge; si $\ell>1$ —incluido infinito—, diverge. Para signos variables se aplica a valores absolutos y la conclusión de convergencia es absoluta. Tomemos $a_n=n5^n/n!$, para $n\ge1$:

$$
\frac{a_{n+1}}{a_n}
=\frac{(n+1)5^{n+1}}{(n+1)!}\frac{n!}{n5^n}
=\frac{5(n+1)}{n(n+1)}=\frac5n\longrightarrow0.
$$

La cancelación usa $(n+1)!=(n+1)n!$. La serie converge. No hace falta convertir la simplificación en una cadena de factores redundantes que oculte el argumento.

Para $a_n=1/n^p$, el cociente $(n/(n+1))^p$ tiende a 1 cualquiera sea $p$. Por tanto este criterio no distingue la armónica de la serie de cuadrados recíprocos. Volvemos a comparación o integral.

### Raíz: sacar de afuera una potencia n-ésima

Si $\sqrt[n]{|a_n|}\to\ell<1$, hay convergencia absoluta; si $\ell>1$, divergencia; si $\ell=1$, no decide. Para $a_n=[n/(2n+1)]^n$, la raíz del módulo es $n/(2n+1)\to1/2$, así que converge. Es un caso más directo que expandir un cociente con dos exponentes distintos.

### Raabe: examinar una diferencia de primer orden

Para una serie de términos positivos eventualmente no nulos, si existe

$$
\rho=\lim_{n\to\infty}n\left(\frac{a_n}{a_{n+1}}-1\right),
$$

el criterio de Raabe afirma convergencia si $\rho>1$ y divergencia si $\rho<1$. Si $\rho=1$, no decide. Cuidá el orden del cociente: aquí se usa $a_n/a_{n+1}$, inverso al del criterio anterior.

En $a_n=1/n^2$, el cociente es $(n+1)^2/n^2=1+2/n+1/n^2$. Multiplicar su diferencia con 1 por $n$ da $2+1/n\to2>1$, convergente. En $a_n=1/\sqrt n$, resulta $n(\sqrt{1+1/n}-1)=1/[\sqrt{1+1/n}+1]\to1/2<1$, divergente. Para $1/n$, da exactamente 1 y no concluye; ya sabemos por otro argumento que diverge.

Que Raabe dé 1 no permite extrapolar: tanto $1/(n\ln n)$ como $1/[n(\ln n)^2]$, empezando en 2, producen el caso límite y tienen distinto carácter. El criterio integral distingue esas dos series.

**Con ayuda.** $\sum n!/3^n$ diverge porque $a_{n+1}/a_n=(n+1)/3\to\infty$; sus términos tampoco tienden a cero.

**Con pista.** Estudiá $\sum(3/4)^n/n$. **Respuesta:** cociente $\to3/4<1$, convergente.

**Sin ayuda.** Elegí un criterio para $\sum[n/(n+1)]^{n^2}$. **Autocorrección:** la raíz enésima es $(1+1/n)^{-n}\to e^{-1}<1$, por lo que converge. Reconocé el límite exponencial antes de concluir.

### Hoja de fórmulas del capítulo 35

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\ell=\lim\vert a_{n+1}/a_n\vert $ o $\lim\sqrt[n]{\vert a_n\vert }$ | Cociente o raíz. | $\ell<1$: absoluta; $\ell>1$: divergencia; $\ell=1$: no decide; cociente exige términos no nulos. |
| $\rho=\lim n(a_n/a_{n+1}-1)$ | Raabe. | $a_n>0$ eventualmente; $\rho>1$ converge, $\rho<1$ diverge, $\rho=1$ no decide. |

## 36. Series alternadas, convergencia absoluta y error

Una serie con signos variables puede converger gracias a cancelaciones aunque la suma de sus módulos sea infinita. Por eso distinguimos convergencia absoluta, cuando $\sum|a_n|$ converge, y condicional, cuando converge $\sum a_n$ pero no la de módulos.

### Leibniz con sus dos comprobaciones

Si $b_n\ge0$, decrece eventualmente y $b_n\to0$, la serie alternada $\sum(-1)^{n+1}b_n$ converge. En la armónica alternada, $b_n=1/n$ cumple ambas condiciones. Sus sumas pares e impares encierran el límite y se acercan entre sí porque el término siguiente tiende a cero.

No alcanza con ver $(-1)^n$. La serie $\sum(-1)^n$ tiene términos de módulo 1 y diverge. Tampoco basta afirmar que el módulo tiende a cero si no se ha justificado la condición que usa el criterio elegido.

### Analizar primero los módulos puede ahorrar trabajo

Para $\sum(-1)^{n+1}/n^2$, la serie de módulos es una $p$-serie con $p=2$: converge. Así la original converge absolutamente, sin necesitar Leibniz. Para $\sum(-1)^{n+1}/n$, la de módulos es armónica divergente, pero Leibniz da convergencia de la original: es condicional. Un fallo de convergencia absoluta no es por sí mismo divergencia de la serie con signos.

Las series condicionales dependen del orden de los términos de una manera que no ocurre con la convergencia absoluta. No reorganizamos infinitas sumas condicionales como si fueran sumas finitas; una reordenación puede cambiar su suma.

### Error: usar el primer término no incluido

Si truncamos una serie que cumple Leibniz después de $N$ términos, el error satisface $|S-S_N|\le b_{N+1}$. Además el resto tiene el signo del primer término omitido. Para la armónica alternada, obtener una garantía de error $\le0{,}01$ exige $1/(N+1)\le0{,}01$, de donde $N\ge99$. Esta garantía es diferente de la cota integral para una serie positiva.

Como ejemplo más eficiente, $\ln(1+x)=x-x^2/2+x^3/3-\cdots$ para $0<x\le1$, relación que justificaremos por series de potencias. En $x=1/2$, los primeros cuatro términos suman

$$
S_4=\frac12-\frac18+\frac1{24}-\frac1{64}=\frac{77}{192}\approx0{,}4010417.
$$

El error es positivo y $\le(1/2)^5/5=1/160=0{,}00625$, porque el primer omitido es positivo. El valor verdadero, cercano a $0{,}4054651$, cae dentro de esa cota. No usamos el tamaño del último término incluido como la cota más precisa que da el teorema.

**Con ayuda.** $\sum(-1)^n/\sqrt n$ converge por Leibniz, pero no absolutamente porque $p=1/2$.

**Con pista.** ¿Cómo clasificás $\sum(-1)^nn/(n+1)$? **Respuesta:** diverge: el módulo del término tiende a 1 y la condición necesaria falla.

**Sin ayuda.** Para $\sum_{n=1}^\infty(-1)^{n+1}/n^3$, hallá un $N$ que garantice error $\le0{,}001$ por Leibniz. **Autocorrección:** $(N+1)^3\ge1000$, así que $N=9$ basta. La convergencia es absoluta, pero la estructura alternada ofrece esta cota particularmente simple.

### Hoja de fórmulas del capítulo 36

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\sum(-1)^{n+1}b_n$, $b_n\downarrow0$ | Leibniz. | Módulos eventualmente no crecientes y tendiendo a cero. |
| $\vert R_N\vert \le b_{N+1}$ | Error alternado. | Bajo hipótesis de Leibniz; signo del primer omitido. |
| $\sum\vert a_n\vert $ converge implica $\sum a_n$ converge | Convergencia absoluta. | Si la original converge pero la de módulos no, es condicional. |

## Formulario de la unidad 5: Sucesiones y series numéricas

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $a_n\to L$: $\vert a_n-L\vert <\varepsilon$ eventualmente | Convergencia de términos. | Para toda tolerancia positiva; una tabla finita no prueba el límite. |
| Monótona y acotada implica convergencia | Teorema de sucesiones. | Cota en dirección necesaria; acotación sola no basta. |
| $a_{n+1}=T(a_n)$ y convergencia implican $L=T(L)$ | Ecuación de punto fijo. | $T$ continua en el límite; demostrar convergencia antes, revisar denominadores. |
| $a_{n+1}=(a_n+2)/2$, $a_1=1$: $2-a_n=2^{1-n}$ | Error explícito del ejemplo. | No es fórmula universal para cualquier recurrencia. |
| $S_N=\sum_{n=1}^Na_n$; serie converge si $S_N\to S\in\mathbb R$ | Definición de suma infinita. | Separar término $a_n$ de suma parcial $S_N$. |
| $\sum_{n=0}^\infty ar^n=a/(1-r)$ | Geométrica. | $\vert r\vert <1$; si $a=0$, serie trivial para cualquier razón. |
| Convergencia implica $a_n\to0$ | Condición necesaria. | La recíproca falla, como muestra la armónica. |
| $\sum1/n^p$ converge exactamente si $p>1$ | Serie de referencia. | Índice desde 1; valores reales de $p$. |
| $a_n/b_n\to L\in(0,\infty)$: mismo carácter | Comparación al límite. | Términos positivos eventualmente; límites cero/infinito requieren otra conclusión o argumento. |
| $\int_{N+1}^\infty f\le R_N\le\int_N^\infty f$ | Cota integral del resto. | Serie convergente con $a_n=f(n)$, $f$ positiva, continua y decreciente en la cola. |
| $\ell=\lim\vert a_{n+1}/a_n\vert $ o $\lim\sqrt[n]{\vert a_n\vert }$ | Cociente o raíz. | $\ell<1$: absoluta; $\ell>1$: divergencia; $\ell=1$: no decide; cociente exige términos no nulos. |
| $\rho=\lim n(a_n/a_{n+1}-1)$ | Raabe. | $a_n>0$ eventualmente; $\rho>1$ converge, $\rho<1$ diverge, $\rho=1$ no decide. |
| $\sum(-1)^{n+1}b_n$, $b_n\downarrow0$ | Leibniz. | Módulos eventualmente no crecientes y tendiendo a cero. |
| $\vert R_N\vert \le b_{N+1}$ | Error alternado. | Bajo hipótesis de Leibniz; signo del primer omitido. |
| $\sum\vert a_n\vert $ converge implica $\sum a_n$ converge | Convergencia absoluta. | Si la original converge pero la de módulos no, es condicional. |

## 37. Series de potencias: del criterio a un intervalo completo

Una serie de funciones suma expresiones que dependen de $x$. Para cada entrada fija hay una serie numérica que puede converger o no. Una serie de potencias tiene la forma $\sum_{n=0}^\infty c_n(x-a)^n$, con centro $a$. Su dominio de convergencia real se organiza mediante un radio $R$: converge absolutamente para $|x-a|<R$ y diverge para $|x-a|>R$. Los bordes se estudian aparte; también son posibles $R=0$ e $R=\infty$.

### Un ejemplo con ambos extremos diferentes

Estudiemos $\sum_{n=1}^\infty(x-3)^n/(n2^n)$. Para $x\ne3$, aplicamos cociente a los módulos:

$$
\left|\frac{a_{n+1}(x)}{a_n(x)}\right|
=\frac{|x-3|}{2}\frac n{n+1}\longrightarrow\frac{|x-3|}{2}.
$$

Converge absolutamente si $|x-3|<2$, es decir, $1<x<5$. Diverge si $|x-3|>2$. En el centro $x=3$ todos los términos son cero, así que converge directamente, aunque el cociente de términos allí fuese $0/0$.

Faltan los extremos. En $x=5$ obtenemos $\sum1/n$, divergente. En $x=1$ obtenemos $\sum(-1)^n/n$, condicionalmente convergente. El radio es 2 y el intervalo completo $[1,5)$. Una respuesta que diga sólo $R=2$ no terminó el estudio pedido.

### Fórmulas y sus condiciones

Si existe $\ell=\lim|c_{n+1}/c_n|$ con coeficientes eventualmente no nulos, entonces $R=1/\ell$, con las convenciones $1/0=\infty$, $1/\infty=0$. Cuando faltan coeficientes o ese límite no existe, la raíz y la fórmula con límite superior $R^{-1}=\limsup\sqrt[n]{|c_n|}$ permiten un análisis más general. No dividimos por un coeficiente cero por aplicar automáticamente una fórmula.

En $\sum n!x^n$, el cociente para $x\ne0$ es $(n+1)|x|\to\infty$: sólo converge en cero y $R=0$. En $\sum x^n/n!$, el cociente es $|x|/(n+1)\to0$: converge para cualquier real y $R=\infty$. No siempre hay dos extremos finitos para analizar.

### Dejar una ficha completa

Una ficha de convergencia debe decir centro, radio, intervalo, comportamiento en cada borde y, cuando corresponda, convergencia absoluta o condicional. Esta información será el permiso para derivar o integrar término a término en el interior.

**Con ayuda.** La geométrica $\sum_{n=0}^\infty x^n$ converge en $(-1,1)$, suma $1/(1-x)$ y diverge en ambos extremos.

**Con pista.** Estudiá $\sum_{n=1}^\infty(x+1)^n/n^2$. **Respuesta:** centro $-1$, radio 1, intervalo $[-2,0]$; en ambos bordes converge absolutamente porque los módulos forman $\sum1/n^2$.

**Sin ayuda.** Para $\sum_{n=1}^\infty n(x-2)^n/3^n$, **autocorrección:** radio 3; en $x=5$ los términos son $n$ y en $x=-1$ son $n(-1)^n$, ninguno tiende a cero. Intervalo $(-1,5)$.

![Radio 2, extremo izquierdo incluido condicionalmente y derecho excluido en el ejemplo centrado en 3.](/planos-de-estudio/images/am1/intervalo.svg)

*Figura original. Radio 2, extremo izquierdo incluido condicionalmente y derecho excluido en el ejemplo centrado en 3.*

### Hoja de fórmulas del capítulo 37

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\vert x-a\vert <R$: absoluta; $\vert x-a\vert >R$: divergente | Radio de serie de potencias. | Estudiar cada extremo finito por separado. |
| $R^{-1}=\lim\vert c_{n+1}/c_n\vert $ si existe | Cálculo por cociente de coeficientes. | Coeficientes eventualmente no nulos; $R=0$ o infinito permitidos; en general usar raíz/límite superior. |

## 38. Series de Taylor y funciones analíticas: justificar la igualdad

Un polinomio de Taylor usa un número finito de derivadas. La serie de Taylor usa todas: $\sum f^{(n)}(a)(x-a)^n/n!$. Son preguntas distintas: si existe cada coeficiente, si la serie converge y si su suma coincide con $f$. Una función es analítica cerca de un punto cuando allí coincide con su desarrollo en una vecindad.

### La función se recupera si el resto desaparece

Taylor finito dice $f(x)=P_n(x)+R_n(x)$. Por tanto la serie representa a la función exactamente donde $R_n(x)\to0$. Para $e^x$ centrada en cero, fijamos una entrada real y acotamos la derivada de orden $n+1$ en el segmento por $e^{|x|}$. Así

$$
|R_n(x)|\le e^{|x|}\frac{|x|^{n+1}}{(n+1)!}\longrightarrow0.
$$

El cociente entre los factores principales consecutivos es $|x|/(n+2)\to0$, lo que explica el límite. Obtenemos $e^x=\sum_{n=0}^\infty x^n/n!$ para todo real. Para seno y coseno, todas las derivadas están acotadas en módulo por 1, y un argumento similar da sus desarrollos globales.

### Desarrollos que conviene reconocer

$$
\sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad
\cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!}.
$$

Para $|x|<1$, la geométrica da $1/(1-x)=\sum x^n$. Integrándola apropiadamente obtendremos $\ln(1+x)=\sum_{n=1}^\infty(-1)^{n+1}x^n/n$ en $(-1,1)$; en el extremo 1 la igualdad se extiende con un argumento de continuidad desde el interior —teorema de Abel— y la serie converge por Leibniz. En $x=-1$ el logaritmo no está definido y la serie diverge. El intervalo final es $(-1,1]$.

### Infinitas derivadas no garantizan ser analítica

La función $f(x)=e^{-1/x^2}$ para $x\ne0$, con $f(0)=0$, es un contraejemplo. Al derivarla repetidamente fuera de cero aparecen polinomios en $1/x$ multiplicando $e^{-1/x^2}$. Ese factor exponencial tiende a cero más rápido que cualquier potencia inversa puede crecer. Se puede probar por inducción que todas sus derivadas en cero valen cero. Su serie de Taylor en cero es entonces la serie nula, que converge para todo $x$, pero $f(x)>0$ si $x\ne0$. La serie converge y no representa a la función cerca del centro salvo en el propio centro.

Este ejemplo evita confundir convergencia de una serie con desaparición del resto para la función original. No implica que los desarrollos habituales sean inseguros: significa que sus igualdades requieren una justificación, ya disponible para exponencial, seno y coseno.

**Con ayuda.** $e^{x^2}=\sum x^{2n}/n!$ para todo real, sustituyendo $x^2$ en una igualdad global válida.

**Con pista.** Escribí los términos hasta grado 6 de $\cos(2x)$. **Respuesta:** $1-2x^2+(2/3)x^4-(4/45)x^6$; cada potencia de $2x$ aporta su propio factor.

**Sin ayuda.** ¿Una serie de Taylor convergente con radio infinito garantiza representar a la función que generó sus coeficientes? **Autocorrección:** no; el ejemplo plano en cero tiene exactamente ese comportamiento. Para afirmar representación, controlá el resto u otro teorema suficiente.

### Hoja de fórmulas del capítulo 38

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $f(x)=\sum f^{(n)}(a)(x-a)^n/n!$ si $R_n(x)\to0$ | Representación por Taylor. | La convergencia de la serie sola no prueba igualdad con $f$. |
| $e^x=\sum x^n/n!$; $\sin x=\sum(-1)^nx^{2n+1}/(2n+1)!$ | Desarrollos globales. | Todo real, radianes para trigonometría; resto justificado. |

## 39. Derivar e integrar series: trabajar dentro del radio

Una serie infinita no permite trasladar cualquier operación al interior sólo por analogía con una suma finita. Para series de potencias hay un teorema específico: dentro del radio, la suma es derivable y se puede derivar e integrar término a término. Las nuevas series tienen el mismo radio, aunque pueden cambiar su comportamiento en los extremos.

### Fabricar un desarrollo conocido

De $1/(1-x)=\sum_{n=0}^\infty x^n$, $|x|<1$, derivamos:

$$
\frac1{(1-x)^2}=\sum_{n=1}^\infty nx^{n-1}.
$$

La serie empieza en 1 porque la derivada del término constante es cero. Multiplicando por $x$, $x/(1-x)^2=\sum_{n=1}^\infty nx^n$. En $x=1/2$ da $\sum n/2^n=2$. Aquí conocemos la suma además de la convergencia.

Integrar desde 0 hasta $x$ fija la constante automáticamente:

$$
\int_0^x\frac{dt}{1-t}=\sum_{n=0}^\infty\frac{x^{n+1}}{n+1}=-\ln(1-x),\qquad |x|<1.
$$

Para $\ln(1+x)$ usamos la geométrica $1/(1+t)=\sum(-t)^n$ e integramos. Es importante mantener el signo y el desplazamiento de índice. Las igualdades en los bordes requieren estudio adicional; conservar el radio no conserva por sí mismo el intervalo completo.

### Una integral sin primitiva elemental expresada con precisión

La función $e^{-t^2}$ tiene serie $\sum_{n=0}^\infty(-1)^nt^{2n}/n!$, con radio infinito. Integrando de 0 a $x$,

$$
G(x)=\int_0^xe^{-t^2}dt=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)n!}.
$$

En $x=1$, truncar hasta $n=3$ da $1-1/3+1/10-1/42=26/35\approx0{,}742857$. Los módulos de los términos decrecen: su cociente es $(2n+1)/[(n+1)(2n+3)]<1$. Por Leibniz el error es positivo y no supera el primer omitido, $1/(9\cdot24)=1/216\approx0{,}00463$. El valor cercano a $0{,}746824$ cumple esa cota.

No encontramos una primitiva elemental, pero sí una representación y un procedimiento de aproximación con garantía explícita. Eso es más informativo que concluir «no se puede integrar».

### Series de funciones más generales

La convergencia puntual significa que para cada $x$ fijo convergen las sumas parciales. Por sí sola no justifica derivar término a término. En series de potencias, en cada intervalo cerrado estrictamente interior al radio, existe el control de convergencia necesario para las operaciones anteriores. No extendemos esa garantía a una serie arbitraria sólo porque dependa de $x$.

**Con ayuda.** $\int_0^x\cos t\,dt=\sum(-1)^nx^{2n+1}/(2n+1)!$, coherente con seno.

**Con pista.** Derivá la serie de $\ln(1+x)$ en $|x|<1$. **Respuesta:** $1-x+x^2-\cdots=1/(1+x)$; se cancela el factor $n$ del denominador.

**Sin ayuda.** Hallá $\sum_{n=1}^\infty n/3^n$. **Autocorrección:** sustituir $x=1/3$ en $x/(1-x)^2$ da $3/4$. No basta citar el radio: usá la identidad obtenida.

### Hoja de fórmulas del capítulo 39

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\big(\sum c_n(x-a)^n\big)'=\sum_{n\ge1}nc_n(x-a)^{n-1}$ | Derivar término a término. | Dentro del radio; se conserva radio, no necesariamente extremos. |
| $\int_a^x\sum c_n(t-a)^ndt=\sum c_n(x-a)^{n+1}/(n+1)$ | Integración anclada. | Segmento interior al radio; valor inicial cero fija constante. |

## 40. Ecuaciones diferenciales por series: igualar coeficientes sin perder índices

Una ecuación puede tener coeficientes variables y no admitir el método de característica con constantes. Cerca de un punto ordinario, las ecuaciones lineales con coeficientes analíticos permiten buscar soluciones como series de potencias. El procedimiento convierte la ecuación diferencial en relaciones entre coeficientes. La convergencia debe justificarse, no suponerse por haber encontrado una recurrencia formal.

### Primero un caso conocido

Para $y'=y$, suponemos $y=\sum_{n=0}^\infty a_nx^n$. La derivada reindexada es $y'=\sum_{n=0}^\infty(n+1)a_{n+1}x^n$. Igualar coeficientes da $(n+1)a_{n+1}=a_n$. Por repetición $a_n=a_0/n!$. Si $y(0)=1$, $a_0=1$ y recuperamos $e^x$. El cociente demuestra radio infinito, así que el desarrollo define una solución real para todo $x$ y puede derivarse término a término.

Reindexar fue esencial: comparar la potencia $x^n$ en ambas expresiones exige que ambos lados utilicen el mismo exponente. El índice es una etiqueta de suma, pero el desplazamiento del coeficiente permanece.

### Un segundo orden de coeficiente variable

Resolvamos cerca de cero $y''-xy=0$ con $y(0)=1$, $y'(0)=0$. Proponemos la serie. Escribimos

$$
y''=\sum_{n=0}^\infty(n+2)(n+1)a_{n+2}x^n,
\qquad xy=\sum_{n=1}^\infty a_{n-1}x^n.
$$

El término constante del segundo miembro es cero, por lo que $2a_2=0$. Para $n\ge1$,

$$
a_{n+2}=\frac{a_{n-1}}{(n+2)(n+1)}.
$$

Los datos fijan $a_0=1$, $a_1=0$, y ya sabemos $a_2=0$. Luego $a_3=a_0/(3\cdot2)=1/6$, $a_4=a_1/(4\cdot3)=0$, $a_5=0$, $a_6=a_3/(6\cdot5)=1/180$, $a_9=1/12960$. Obtenemos

$$
y=1+\frac{x^3}{6}+\frac{x^6}{180}+\frac{x^9}{12960}+\cdots.
$$

Las potencias se agrupan de tres en tres porque la recurrencia conecta índices separados por tres. Para la subsecuencia no nula, el cociente de términos evaluados en un $x$ fijo es $|x|^3/[(3k+3)(3k+2)]\to0$. La serie converge para todo real. La regla de derivación de series permite verificar la ecuación mediante la recurrencia, y los datos se leen en sus dos primeros coeficientes.

### Comprobar una aproximación sin prometer exactitud finita

Si usamos sólo $P(x)=1+x^3/6+x^6/180$, no es una solución exacta: $P''-xP=-x^7/180$. Las potencias bajas sí cancelan; el residuo revela qué parte falta. Un residuo pequeño es un control útil, pero no por sí solo una cota del error de solución sin un argumento adicional.

Para otros datos iniciales, $a_1$ puede ser no nulo y genera otra serie independiente. Para un punto singular o coeficientes no analíticos, el método ordinario puede no aplicar; no declaramos que cualquier ecuación se resuelve mediante esta misma propuesta.

**Con ayuda.** En una serie centrada en cero, $y(0)=a_0$ y $y'(0)=a_1$.

**Con pista.** Para $y''+y=0$, obtené la recurrencia. **Respuesta:** $a_{n+2}=-a_n/[(n+2)(n+1)]$; datos $(1,0)$ generan coseno y $(0,1)$ generan seno.

**Sin ayuda.** Buscá por series la solución de $y'=2xy$, $y(0)=1$. **Autocorrección:** $a_1=0$ y $(n+1)a_{n+1}=2a_{n-1}$ para $n\ge1$. Los impares son cero y $a_{2k}=1/k!$, así que $y=\sum x^{2k}/k!=e^{x^2}$. Contrastá con separación de variables: métodos distintos recuperan la misma solución.

### Hoja de fórmulas del capítulo 40

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y''=\sum_{n\ge0}(n+2)(n+1)a_{n+2}x^n$ | Reindexar para comparar coeficientes. | Supuesto de serie con convergencia adecuada; justificar al cerrar. |
| $y(0)=a_0$, $y'(0)=a_1$ | Datos en centro cero. | En otro centro se leen allí; coeficientes se obtienen por recurrencia. |

## Formulario de la unidad 6: Series de funciones y potencias

Estas relaciones se usan con las hipótesis del desarrollo. Si una condición falla, el resultado no se aplica automáticamente.

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\vert x-a\vert <R$: absoluta; $\vert x-a\vert >R$: divergente | Radio de serie de potencias. | Estudiar cada extremo finito por separado. |
| $R^{-1}=\lim\vert c_{n+1}/c_n\vert $ si existe | Cálculo por cociente de coeficientes. | Coeficientes eventualmente no nulos; $R=0$ o infinito permitidos; en general usar raíz/límite superior. |
| $f(x)=\sum f^{(n)}(a)(x-a)^n/n!$ si $R_n(x)\to0$ | Representación por Taylor. | La convergencia de la serie sola no prueba igualdad con $f$. |
| $e^x=\sum x^n/n!$; $\sin x=\sum(-1)^nx^{2n+1}/(2n+1)!$ | Desarrollos globales. | Todo real, radianes para trigonometría; resto justificado. |
| $\big(\sum c_n(x-a)^n\big)'=\sum_{n\ge1}nc_n(x-a)^{n-1}$ | Derivar término a término. | Dentro del radio; se conserva radio, no necesariamente extremos. |
| $\int_a^x\sum c_n(t-a)^ndt=\sum c_n(x-a)^{n+1}/(n+1)$ | Integración anclada. | Segmento interior al radio; valor inicial cero fija constante. |
| $y''=\sum_{n\ge0}(n+2)(n+1)a_{n+2}x^n$ | Reindexar para comparar coeficientes. | Supuesto de serie con convergencia adecuada; justificar al cerrar. |
| $y(0)=a_0$, $y'(0)=a_1$ | Datos en centro cero. | En otro centro se leen allí; coeficientes se obtienen por recurrencia. |

## 41. Taller integrador: planificar, resolver y defender una respuesta

El objetivo de este taller es practicar el recorrido completo sin una etiqueta que anuncie el método. Antes de cada ejercicio escribí: qué objeto se pide, qué hipótesis o restricciones aparecen, qué herramienta elegís y cómo vas a comprobar. Una respuesta numérica sin esas decisiones no muestra todavía que puedas resolver una variante.

### Un ejercicio completamente acompañado

Una tasa de entrada de líquido es $r(t)=te^{-t}$ litros/minuto para $t\ge0$, sin salida. Preguntamos cuándo es máxima y cuánto líquido entró entre 0 y 2 minutos. La primera pregunta pide extremo de **tasa**, la segunda acumulación de **cantidad**.

Derivamos $r'=e^{-t}(1-t)$. Como la exponencial es positiva, la tasa crece antes de 1 y decrece después; alcanza máximo $1/e$ litros/minuto en $t=1$. Para cantidad, integramos por partes:

$$
Q(2)-Q(0)=\int_0^2te^{-t}dt=[-(t+1)e^{-t}]_0^2=1-3e^{-2}\ \text{litros}.
$$

El resultado es positivo y menor que $2/e$, cota obtenida al multiplicar la tasa máxima por duración. Esa comparación independiente permite detectar un signo incorrecto en la evaluación. Si se pregunta la entrada total hasta tiempo infinito, el límite da 1 litro bajo el modelo; no confundimos ese total con la tasa máxima.

### Resolver con una pista y después contrastar

**Problema A.** Estudiá extremos e inflexiones de $f(x)=x^3-3x$ en $[-2,2]$ y justificá los absolutos. **Pista:** separá clasificación local de comparación global. **Respuesta razonada:** $f'=3(x^2-1)$ produce máximo local en $-1$ con valor 2 y mínimo local en 1 con valor $-2$. $f''=6x$ cambia de signo en cero, inflexión $(0,0)$. Los bordes dan $f(-2)=-2$, $f(2)=2$; máximo absoluto 2 en $-1$ y 2, mínimo absoluto $-2$ en $-2$ y 1. Un extremo absoluto puede alcanzarse más de una vez.

**Problema B.** Aproximá $\int_0^{1/2}e^{-x^2}dx$ usando los términos hasta potencia quinta de la primitiva en serie y acotá el error. **Pista:** el siguiente término tiene grado 7. **Respuesta razonada:** $x-x^3/3+x^5/10$ evaluado en $1/2$ da $443/960\approx0{,}4614583$. Por alternancia, el error es negativo y en módulo $\le(1/2)^7/42=1/5376<0{,}000187$. No hay evaluación inferior pendiente porque los términos se anulan en cero.

### Una práctica autónoma con soluciones para revisar después

1. Aplicá Rolle a $f(x)=x^3-3x^2-x+3$ en $[1,3]$. Hallá los puntos que satisfacen su conclusión.
2. Construí la aproximación lineal de $\sqrt[3]x$ en 27 para estimar $\sqrt[3]{26{,}5}$ y razoná el signo del error.
3. Calculá $\int_0^1x\ln(1+x^2)dx$ explicando el método.
4. Decidí si $\int_{-1}^1dx/x^2$ puede calcularse evaluando una primitiva entre los extremos.
5. Resolvé $y'+y=e^{-x}$, $y(0)=1$, y verificá.
6. Clasificá $\sum_{n=1}^\infty(-1)^{n+1}/\sqrt n$ y elegí un truncamiento que garantice error $\le0{,}1$.
7. Hallá el intervalo de convergencia de $\sum_{n=1}^\infty(x+1)^n/n^2$.
8. Explicá por qué encontrar una raíz de $L=T(L)$ no demuestra que una recurrencia converge a ella.

**Soluciones para contrastar.**

1. Polinomio continuo y derivable; $f(1)=f(3)=0$. De $f'=3x^2-6x-1=0$ salen $1\pm2\sqrt3/3$; sólo el signo positivo queda en $(1,3)$. No se conservan candidatos exteriores.
2. $L(x)=3+(x-27)/27$; resultado $161/54$. La segunda derivada es negativa para $x>0$, así que la tangente aproxima por exceso. Se puede acotar el error con $|f''|\le2/[9(26{,}5)^{5/3}]$ en el segmento y $|R_1|\le M(0{,}5)^2/2$.
3. $u=1+x^2$, $du=2x\,dx$, bordes 1 y 2. Por partes, $\tfrac12\int_1^2\ln u\,du=\tfrac12[u\ln u-u]_1^2=\ln2-1/2$.
4. No: hay singularidad interior. Cada integral lateral diverge a $+\infty$. El valor formal negativo de una resta de primitivas contradice incluso la positividad del integrando.
5. Factor integrante $e^x$; $y=(x+1)e^{-x}$; al derivar y sumar recuperamos $e^{-x}$ y el dato inicial vale 1.
6. Leibniz da convergencia, pero la serie de módulos es una $p$-serie con $p=1/2$, divergente: condicional. Basta $1/\sqrt{N+1}\le0{,}1$, es decir $N\ge99$.
7. Centro $-1$, radio 1; ambos bordes convergen absolutamente: intervalo $[-2,0]$.
8. Una sucesión puede oscilar: $a_{n+1}=1-a_n$, $a_1=0$, tiene punto fijo $1/2$ pero alterna 0 y 1. Hace falta un argumento sobre la trayectoria, como monotonía y cota, antes de pasar al límite.

### Preparar una explicación conceptual

Volvé a tus soluciones y señalá una hipótesis de cada herramienta. Para un final conceptual, practicá reconstruir Fermat, Rolle, Lagrange, el vínculo entre primitivas y constantes, una suma geométrica finita y la condición necesaria de convergencia. En el teorema fundamental, explicá la diferencia entre acumulación y su tasa. Para Taylor, distinguí polinomio, resto y serie. Para series, separá término y suma parcial.

La carpeta enlazada por el aula con la lista específica de demostraciones del final no estaba disponible al consultar esta edición. Este taller no se presenta como reproducción de esa lista ni como predicción de un examen. Usá el programa y contrastá con las indicaciones que la cátedra mantenga vigentes.

### Hoja de fórmulas del capítulo 41

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Planteo, dominio, herramienta, cuenta, control e interpretación | Estructura de una resolución completa. | La cantidad de fórmulas escritas no reemplaza una justificación. |
| Tasa $r$ frente a acumulación $\int r$ | Elegir derivar o integrar según pregunta. | Controlar unidades, signo e intervalo del modelo. |

## Formulario general de Análisis Matemático 1

### Reglas básicas de derivación y primitivas

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $(x^p)'=px^{p-1}$ | Regla de potencia. | En el dominio real de derivabilidad de la potencia; para $x^0=1$, derivada cero. |
| $(e^x)'=e^x$; $(\ln\vert x\vert )'=1/x$ | Exponencial y logaritmo. | Para logaritmo, $x\ne0$. |
| $(\sin x)'=\cos x$; $(\cos x)'=-\sin x$ | Trigonometría. | Argumentos en radianes; agregar cadena para argumentos compuestos. |
| $(\tan x)'=\sec^2x$; $(\arctan x)'=1/(1+x^2)$ | Tangente y arcotangente. | Para tangente, $\cos x\ne0$. |
| $(\arcsin x)'=1/\sqrt{1-x^2}$ | Arcoseno. | $\vert x\vert <1$. |
| $\int e^{kx}dx=e^{kx}/k+C$ | Primitiva exponencial. | $k\ne0$; para $k=0$, integrar 1. |
| $\int\sin xdx=-\cos x+C$; $\int\cos xdx=\sin x+C$ | Primitivas trigonométricas. | Radianes; verificar signos derivando. |

### Unidad 0: Herramientas previas y revisión de derivadas

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\ln u$: $u>0$; $\sqrt u$: $u\ge0$ | Restricciones de dominio real. | Combinar con denominadores no nulos. |
| $\ln(ab)=\ln a+\ln b$ | Producto convertido en suma. | $a,b>0$; no se aplica a una suma. |
| Continuidad: $\lim_{x\to a}f(x)=f(a)$ | Límite y valor coinciden. | Ambos deben existir; en bordes se usan laterales pertinentes. |
| $\lim_{x\to0}\sin x/x=1$ | Límite notable. | Ángulos en radianes. |
| $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$ | Tasa instantánea y pendiente. | Límite finito existente; $h\ne0$ en el cociente. |
| $(uv)'=u'v+uv'$; $(u/v)'=(u'v-uv')/v^2$ | Producto y cociente. | Funciones derivables; $v\ne0$. |
| $(F\circ g)'=F'(g)g'$ | Regla de la cadena. | Derivabilidad de ambas composiciones en los puntos pertinentes. |

### Unidad 1: Aplicaciones de la derivada y aproximación

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| Crítico: $f'(a)=0$ o $f'(a)$ no existe | Candidato interior a extremo. | $a$ debe pertenecer al dominio; revisar también bordes. |
| Continua en $[a,b]$ implica máximo y mínimo absolutos | Teorema del valor extremo. | Intervalo cerrado, acotado y no vacío; comparar valores de función. |
| $f'>0$: crece; $f'<0$: decrece | Monotonía estricta. | En un intervalo de derivabilidad, no cruzando huecos del dominio. |
| $f':-\to+$: mínimo; $+\to-$: máximo | Criterio de primera derivada. | Continuidad en el candidato y signo en tramos laterales adecuados. |
| $f''>0$: concavidad arriba; $f''<0$: abajo | Cambio de pendiente. | En el intervalo de estudio. |
| $f'(a)=0$, $f''(a)>0$: mínimo; $f''(a)<0$: máximo | Criterio de segunda derivada. | Bajo derivabilidad suficiente en un entorno; cero no decide. |
| Inflexión: cambio de concavidad en un punto de la gráfica | No basta resolver $f''=0$. | Comprobar ambos lados y continuidad según convención usada. |
| $\lim_{x\to\pm\infty}[f(x)-(mx+b)]=0$ | Asíntota oblicua si $m\ne0$, horizontal si $m=0$. | Estudiar cada extremo por separado; no supone que no haya cruces. |
| Asíntota vertical: algún lateral de $f$ tiende a $\pm\infty$ | Comportamiento cerca de $x=a$. | Un hueco removible no basta. |
| $V=x(12-2x)^2$ | Caja del ejemplo, en centímetros cúbicos. | $0<x<6$; lámina cuadrada de lado 12 sin tapa. |
| $A=2\pi r^2+2\pi rh$, $V=\pi r^2h$ | Cilindro cerrado del modelo. | $r,h>0$; eliminar una variable con la restricción. |
| Rolle: $f'(c)=0$ para algún $c\in(a,b)$ | Igual altura en bordes. | $a<b$, continuidad en cerrado, derivabilidad en abierto y $f(a)=f(b)$. |
| Lagrange: $f'(c)=[f(b)-f(a)]/(b-a)$ | Tangente paralela a secante. | $a<b$, continuidad en cerrado y derivabilidad en abierto. |
| $[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c)$ | Teorema de Cauchy. | Ambas continuas en cerrado y derivables en abierto; para dividir, controlar denominadores. |
| $\lim f/g=\lim f'/g'$ | Regla de L'Hôpital. | Forma $0/0$ o $\infty/\infty$, derivabilidad lateral perforada, $g'\ne0$, existencia del segundo límite. |
| $u(x)^{v(x)}=e^{v(x)\ln u(x)}$ | Transformar potencias indeterminadas. | $u(x)>0$ en el tramo; volver por exponencial al final. |
| $L(x)=f(a)+f'(a)(x-a)$ | Aproximación tangente. | $f$ derivable en $a$; uso local, sin cota automática lejos del centro. |
| $df=f'(a)\Delta x$, $\Delta f=f(a+\Delta x)-f(a)$ | Cambio lineal frente al exacto. | No confundir estimación con cota rigurosa sin resto. |
| $P_n=\sum_{k=0}^nf^{(k)}(a)(x-a)^k/k!$ | Taylor finito. | Derivadas hasta orden $n$ en el centro; grado puede ser menor que orden. |
| $\vert R_n\vert \le M\vert x-a\vert ^{n+1}/(n+1)!$ | Cota de Lagrange. | Por ejemplo $f\in C^{n+1}$ en el segmento; $M$ acota toda la derivada de orden $n+1$ allí. |

### Unidad 2: Integrales definidas e indefinidas

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\int x^pdx=x^{p+1}/(p+1)+C$ | Primitiva de potencia. | $p\ne-1$, sobre intervalos donde la potencia y su derivada estén definidas. |
| $\int dx/x=\ln\vert x\vert +C$ | Caso excepcional de exponente $-1$. | Intervalo sin cero; constantes independientes en componentes separadas. |
| $\int_a^bf=\lim\sum_i f(\xi_i)\Delta x_i$ | Acumulación firmada. | Límite común al refinar particiones; continuidad en cerrado basta para integrabilidad. |
| $\int_a^cf=\int_a^bf+\int_b^cf$; $\int_b^af=-\int_a^bf$ | Aditividad y orientación. | Integrales existentes en tramos considerados. |
| $\frac d{dx}\int_a^xf(t)dt=f(x)$ | Teorema fundamental. | $f$ continua; para extremo compuesto agregar cadena. |
| $\int_a^bf=F(b)-F(a)$ | Regla de Barrow. | $F'=f$, con continuidad suficiente en el cerrado; no atravesar singularidades sin límites. |
| $u=g(x)$, $du=g'(x)dx$ | Sustitución, cadena inversa. | Transformar todos los factores y los límites; respetar intervalos del cambio. |
| $\int f(g(x))g'(x)dx=F(g(x))+C$ | Patrón inmediato. | $F'=f$ y regularidad para cadena. |
| $\int u\,dv=uv-\int v\,du$ | Integración por partes. | Elegir $dv$ integrable y que el nuevo problema sea más sencillo. |
| $\int_a^bu v'=[uv]_a^b-\int_a^bu'v$ | Versión definida. | Regularidad suficiente; restar el producto completo de cada borde. |
| $(x-a)^m$: $\sum_{j=1}^m A_j/(x-a)^j$ | Piezas para un factor repetido. | Dividir polinomios primero si grados lo requieren. |
| Cuadrático irreducible: numerador $Ax+B$ | Forma de fracción simple. | Incluir una pieza por cada potencia repetida; ajustar por identidad polinómica. |
| $x=a\sin\theta$ para $\sqrt{a^2-x^2}$ | Sustitución trigonométrica. | $a>0$, $\theta\in(-\pi/2,\pi/2)$ para rama interior; raíz de cuadrado exige signo. |
| $x=a\tan\theta$ para $\sqrt{a^2+x^2}$ | Usa $1+\tan^2\theta=\sec^2\theta$. | Controlar rango de $\theta$, diferencial y retorno a $x$. |

### Unidad 3: Aplicaciones e integrales impropias

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $A=\int_a^b\vert f-g\vert dx$ | Área entre gráficas. | Cruces y fronteras definidos; si cambia el orden, partir o mantener módulo. |
| $f_{\rm prom}=\frac1{b-a}\int_a^bf$ | Valor promedio. | $a<b$ e integrabilidad; continuidad garantiza algún punto que lo alcanza. |
| $\int_a^\infty f=\lim_{b\to\infty}\int_a^bf$ | Impropia por extremo infinito. | Convergencia significa límite real finito; separar cada extremo problemático. |
| $\int_1^\infty x^{-p}dx$: $p>1$; $\int_0^1x^{-p}dx$: $p<1$ | Casos de convergencia de referencia. | No intercambiar las dos condiciones; singularidad interior se separa en dos integrales. |
| $V=\pi\int(R^2-r^2)dt$ | Discos/arandelas perpendiculares al eje. | $R\ge r\ge0$, distancias al eje en la variable elegida, región sin doble conteo. |
| $V=2\pi\int r h\,dt$ | Capas paralelas al eje. | Radio y altura no negativos, cada capa contada una vez; revisar eje y región. |
| $L=\int_a^b\sqrt{1+(f')^2}dx$ | Longitud de arco. | $f$ continuamente derivable como hipótesis suficiente. |
| $S=2\pi\int r\sqrt{1+(f')^2}dx$ | Superficie generada por la curva. | Radio distancia no negativa al eje, sin contar tapas automáticamente ni superponer superficie repetida. |

### Unidad 4: Ecuaciones diferenciales

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $y'=F(x,y)$ | Campo de pendientes. | Una solución cumple en todo un intervalo, además de sus datos. |
| Orden: derivada más alta presente | Clasificación de una ecuación. | No se cuenta la potencia de la derivada ni el número de términos. |
| $y'=g(x)h(y)\Rightarrow\int dy/h(y)=\int g(x)dx$ | Separación. | Donde $h(y)\ne0$; recuperar equilibrios $h(y)=0$ y controlar dominio. |
| $T=T_a+(T_0-T_a)e^{-kt}$ | Enfriamiento ideal. | Ambiente $T_a$ y $k>0$ constantes; unidades de $k$ inversas al tiempo. |
| $\mu=e^{\int p dx}$, $(\mu y)'=\mu q$ | Lineal $y'+py=q$. | Normalizar primero en un intervalo de coeficientes continuos. |
| $y=\mu^{-1}(\int\mu q dx+C)$ | Solución lineal. | $\mu\ne0$; datos iniciales fijan $C$. |
| $z=y^{1-m}$, $z'+(1-m)pz=(1-m)q$ | Bernoulli $y'+py=qy^m$. | $m\ne0,1$; rama admisible con $y\ne0$; revisar soluciones excluidas. |
| $y=xv$, $y'=v+xv'$ | Homogénea $y'=F(y/x)$. | $x\ne0$; no confundir con lineal homogénea. |
| $m_\perp=-1/m$ | Pendientes perpendiculares. | Pendientes finitas y $m\ne0$; horizontales/verticales se estudian geométricamente. |
| Derivar familia, eliminar parámetro, cambiar pendiente, resolver | Trayectorias ortogonales. | Trabajar en regiones regulares y verificar cruces. |
| $ar^2+br+c=0$ | Característica de $ay''+by'+cy=0$. | Coeficientes constantes, $a\ne0$. |
| $r_1\ne r_2$: $C_1e^{r_1x}+C_2e^{r_2x}$; doble $r$: $(C_1+C_2x)e^{rx}$ | Raíces reales. | Dos constantes independientes; ajustar con datos de $y$ y $y'$. |
| $r=\alpha\pm i\beta$: $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ | Raíces complejas. | $\beta\ne0$; solución real. |
| $y=y_h+y_p$ | Lineal no homogénea. | $y_p$ reproduce el segundo miembro; $y_h$ tiene segundo miembro cero. |
| Particular coincidente: multiplicar propuesta por $x^s$ | Corrección por resonancia. | $s$ es multiplicidad de la raíz asociada en característica; sólo forzamientos compatibles con coeficientes indeterminados. |

### Unidad 5: Sucesiones y series numéricas

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $a_n\to L$: $\vert a_n-L\vert <\varepsilon$ eventualmente | Convergencia de términos. | Para toda tolerancia positiva; una tabla finita no prueba el límite. |
| Monótona y acotada implica convergencia | Teorema de sucesiones. | Cota en dirección necesaria; acotación sola no basta. |
| $a_{n+1}=T(a_n)$ y convergencia implican $L=T(L)$ | Ecuación de punto fijo. | $T$ continua en el límite; demostrar convergencia antes, revisar denominadores. |
| $a_{n+1}=(a_n+2)/2$, $a_1=1$: $2-a_n=2^{1-n}$ | Error explícito del ejemplo. | No es fórmula universal para cualquier recurrencia. |
| $S_N=\sum_{n=1}^Na_n$; serie converge si $S_N\to S\in\mathbb R$ | Definición de suma infinita. | Separar término $a_n$ de suma parcial $S_N$. |
| $\sum_{n=0}^\infty ar^n=a/(1-r)$ | Geométrica. | $\vert r\vert <1$; si $a=0$, serie trivial para cualquier razón. |
| Convergencia implica $a_n\to0$ | Condición necesaria. | La recíproca falla, como muestra la armónica. |
| $\sum1/n^p$ converge exactamente si $p>1$ | Serie de referencia. | Índice desde 1; valores reales de $p$. |
| $a_n/b_n\to L\in(0,\infty)$: mismo carácter | Comparación al límite. | Términos positivos eventualmente; límites cero/infinito requieren otra conclusión o argumento. |
| $\int_{N+1}^\infty f\le R_N\le\int_N^\infty f$ | Cota integral del resto. | Serie convergente con $a_n=f(n)$, $f$ positiva, continua y decreciente en la cola. |
| $\ell=\lim\vert a_{n+1}/a_n\vert $ o $\lim\sqrt[n]{\vert a_n\vert }$ | Cociente o raíz. | $\ell<1$: absoluta; $\ell>1$: divergencia; $\ell=1$: no decide; cociente exige términos no nulos. |
| $\rho=\lim n(a_n/a_{n+1}-1)$ | Raabe. | $a_n>0$ eventualmente; $\rho>1$ converge, $\rho<1$ diverge, $\rho=1$ no decide. |
| $\sum(-1)^{n+1}b_n$, $b_n\downarrow0$ | Leibniz. | Módulos eventualmente no crecientes y tendiendo a cero. |
| $\vert R_N\vert \le b_{N+1}$ | Error alternado. | Bajo hipótesis de Leibniz; signo del primer omitido. |
| $\sum\vert a_n\vert $ converge implica $\sum a_n$ converge | Convergencia absoluta. | Si la original converge pero la de módulos no, es condicional. |

### Unidad 6: Series de funciones y potencias

| Relación | Qué nos dice | Cuándo puede usarse |
|---|---|---|
| $\vert x-a\vert <R$: absoluta; $\vert x-a\vert >R$: divergente | Radio de serie de potencias. | Estudiar cada extremo finito por separado. |
| $R^{-1}=\lim\vert c_{n+1}/c_n\vert $ si existe | Cálculo por cociente de coeficientes. | Coeficientes eventualmente no nulos; $R=0$ o infinito permitidos; en general usar raíz/límite superior. |
| $f(x)=\sum f^{(n)}(a)(x-a)^n/n!$ si $R_n(x)\to0$ | Representación por Taylor. | La convergencia de la serie sola no prueba igualdad con $f$. |
| $e^x=\sum x^n/n!$; $\sin x=\sum(-1)^nx^{2n+1}/(2n+1)!$ | Desarrollos globales. | Todo real, radianes para trigonometría; resto justificado. |
| $\big(\sum c_n(x-a)^n\big)'=\sum_{n\ge1}nc_n(x-a)^{n-1}$ | Derivar término a término. | Dentro del radio; se conserva radio, no necesariamente extremos. |
| $\int_a^x\sum c_n(t-a)^ndt=\sum c_n(x-a)^{n+1}/(n+1)$ | Integración anclada. | Segmento interior al radio; valor inicial cero fija constante. |
| $y''=\sum_{n\ge0}(n+2)(n+1)a_{n+2}x^n$ | Reindexar para comparar coeficientes. | Supuesto de serie con convergencia adecuada; justificar al cerrar. |
| $y(0)=a_0$, $y'(0)=a_1$ | Datos en centro cero. | En otro centro se leen allí; coeficientes se obtienen por recurrencia. |

## Fuentes, cobertura y revisión de esta edición

La base docente es el [aula de Análisis Matemático I, 01291, 2025–2C](https://plataformaed.unnoba.edu.ar/course/view.php?id=10447), que requiere acceso autorizado. Antes de escribir se recuperaron completos **38 PDF, 473 páginas físicas**: programa, cronogramas de Junín y Pergamino, guía 0, apuntes y guías de las seis unidades, presentaciones complementarias, parciales históricos y los archivos PDF de Material Extra. Se conservaron localmente; aquí se publica una explicación original, sin redistribuirlos. Recuperar completos los archivos no equivale a haber leído exhaustivamente las 473 páginas.

### Material utilizado y decisiones de cobertura

Se leyó el programa completo y se consultaron selectivamente conceptos, métodos y ejercicios de los apuntes y guías. Se aplicó OCR a 24 páginas de baja extracción de los materiales principales, incluidas las 13 páginas de contenido escaneado de la guía 1, y se contrastaron páginas seleccionadas visualmente. Las fórmulas extraídas u obtenidas por OCR pueden perder estructura; no se tomaron como respuestas fiables sin reconstruir la cuenta.

La cobertura se organiza según las seis unidades del programa: aplicaciones de derivada; integración, incluida sustitución trigonométrica; aplicaciones geométricas e impropias; ecuaciones diferenciales, incluidas Bernoulli, homogéneas y trayectorias ortogonales; sucesiones y series, incluido Raabe; y series de potencias, funciones analíticas y resolución de ecuaciones por series. El material previo fue revisado y reemplazado por este recorrido acompañado. Su versión anterior se conserva en el archivo local de trabajo.

Los parciales descargados corresponden a enunciados históricos, entre ellos 2024. No se presenta su condición de aprobación ni sus fechas como normativa vigente. No se iniciaron cuestionarios, entregas ni cambios de asistencia o comisión. La visualización de un recurso puede quedar registrada automáticamente por la plataforma.

### Límites documentales

Al consultar esta edición, la carpeta de recursos del final y la carpeta de recursos usados en clase devolvían 404; el archivo de resumen de clases enlazado en Drive se informaba inexistente. Por ello no se verificó la lista particular de demostraciones del final ni contenido adicional de esas rutas. Los vídeos no fueron auditados íntegramente. Los PDF opcionales y trabajos de investigación se recuperaron como material adicional; no se afirma revisión exhaustiva ni se incorporan como autoría de este manual. La bibliografía editorial citada por el programa —Stewart, Zill y otros— no fue leída completa para esta edición.

### Referencias de contraste y estado de revisión

Para contrastar representación y operaciones con series se consultó [OpenStax, Calculus Volume 2, trabajo con series de Taylor](https://openstax.org/books/calculus-volume-2/pages/6-4-working-with-taylor-series). La distinción entre convergencia y representación de la función se desarrolla también en su [sección de series de Taylor y Maclaurin](https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series). Para Raabe se contrastó el teorema 6.16 de [Gerald B. Folland, Advanced Calculus, segunda edición, sección 6.2](https://sites.math.washington.edu/~folland/AdvCalc24.pdf), que presenta una forma equivalente con el cociente invertido y diferencia de signo. Estas consultas fueron puntuales, sin afirmar lectura completa de esos libros.

Se comprobaron ejemplos seleccionados mediante álgebra simbólica, integración, derivación, recurrencias y límites; las aproximaciones numéricas se contrastaron con sus cotas. Las comprobaciones y la revisión visual no sustituyen una revisión docente. **Revisión académica externa pendiente.** Si detectás un error, podés comunicar capítulo, paso y resultado a [contacto@matiascersosimo.com](mailto:contacto@matiascersosimo.com).

Autoría: **Matias Gabriel Cersosimo**. Edición de aprendizaje acompañado: **16 de noviembre de 2026**. Material estudiantil independiente, sin carácter oficial.
