---
nombre: "Análisis Matemático 1"
code: "01291"
resumen: "Aplicaciones de la derivada, Taylor, integrales, ecuaciones diferenciales, sucesiones y series."
---

## Extremos y análisis de funciones

La derivada mide cómo cambia una función, y esa información alcanza para reconstruir la forma de su gráfica: dónde sube, dónde baja, dónde se curva hacia arriba o hacia abajo y dónde alcanza sus valores más grandes y más chicos. Este tema reúne las herramientas para hacerlo con criterio y sin depender de una tabla de valores. También es la base de los problemas de optimización, que consisten en elegir la mejor alternativa dentro de un conjunto de posibilidades.

### Conceptos clave

- **Máximo absoluto** de $f$ en un intervalo $I$: valor $f(x_0)$ tal que $f(x_0)\ge f(x)$ para todo $x\in I$. El **mínimo absoluto** se define con la desigualdad opuesta. Una función no siempre los tiene: depende de la función y del intervalo.
- **Extremo relativo (o local)**: $f(x_0)$ es el mayor (o menor) valor de $f$ en algún intervalo abierto que contiene a $x_0$. Es una propiedad local, sin comparación global.
- **Número crítico (punto crítico)**: valor $x_0$ del dominio donde $f'(x_0)=0$ o donde $f'(x_0)$ no existe.
- **Función creciente** en un intervalo: si $x_1<x_2$ entonces $f(x_1)<f(x_2)$. Es **decreciente** si $x_1<x_2$ implica $f(x_1)>f(x_2)$.
- **Concavidad**: $f$ es cóncava hacia arriba en $I$ si su gráfica queda por encima de todas sus rectas tangentes en $I$, y cóncava hacia abajo si queda por debajo.
- **Punto de inflexión**: punto de la gráfica en el que la concavidad cambia.
- **Asíntota vertical**: recta $x=a$ tal que $f$ tiende a $\pm\infty$ cuando $x$ tiende a $a$ por algún lado. **Asíntota horizontal**: recta $y=L$ con $\lim_{x\to\pm\infty}f(x)=L$.

### Desarrollo teórico

**Existencia de extremos absolutos.** El teorema del valor extremo asegura que si $f$ es continua en un intervalo cerrado $[a,b]$, entonces tiene máximo y mínimo absolutos en ese intervalo. Es un teorema de existencia: garantiza que los extremos están, pero no dice cómo encontrarlos. Las hipótesis importan. Si falta la continuidad o el intervalo es abierto, el resultado puede fallar. Por ejemplo, $f(x)=x^2-1$ en $(-1,2)$ es continua y tiene mínimo en $x=0$, pero no tiene máximo, porque el valor $3$ se acercaría a $x=2$ sin alcanzarse.

**Dónde pueden estar los extremos relativos.** Si $f$ tiene un extremo relativo en $x_0$, entonces $x_0$ es un número crítico. La razón es geométrica: en un extremo la gráfica tiene tangente horizontal (si es derivable) o un pico (si no lo es). La recíproca es falsa: no todo número crítico es un extremo. Para $f(x)=x^3$ vale $f'(0)=0$ y, sin embargo, la función es estrictamente creciente en todo $\mathbb{R}$.

**Monotonía y signo de la derivada.** Si $f$ es derivable en $(a,b)$, entonces $f'>0$ en $(a,b)$ implica que $f$ es creciente, $f'<0$ que es decreciente y $f'=0$ que es constante. Para armar los intervalos hay que considerar a la vez los números críticos y los puntos donde $f$ no está definida o es discontinua, porque todos ellos pueden separar zonas con signos distintos.

**Criterio de la derivada primera.** Si $f$ es continua en un intervalo abierto que contiene al número crítico $x_0$:

- Si $f'$ pasa de negativa a positiva en $x_0$, hay un mínimo relativo.
- Si $f'$ pasa de positiva a negativa, hay un máximo relativo.
- Si $f'$ no cambia de signo, no hay extremo.

Este criterio funciona también cuando $f$ no es derivable en $x_0$. Por ejemplo, $f(x)=|x|$ tiene un mínimo en $0$ aunque no existe $f'(0)$.

**Criterio de la derivada segunda.** Si $f'(x_0)=0$ y existe $f''$ en un entorno de $x_0$:

- $f''(x_0)>0$ implica mínimo relativo.
- $f''(x_0)<0$ implica máximo relativo.
- $f''(x_0)=0$ no permite decidir: hay que volver al criterio de la derivada primera.

La idea es que $f''>0$ significa que $f'$ es creciente: antes de $x_0$ la derivada era negativa, ahora es cero y después será positiva.

**Concavidad e inflexión.** Si $f''>0$ en un intervalo, $f'$ crece y la función es cóncava hacia arriba. Si $f''<0$, es cóncava hacia abajo. Un punto de inflexión exige un cambio de concavidad, es decir, un cambio de signo de $f''$. Una condición necesaria es $f''(x_0)=0$ (o que no exista), pero no es suficiente: $f(x)=x^4$ tiene $f''(0)=0$ y, sin embargo, es cóncava hacia arriba a ambos lados.

**Graficación completa.** Para trazar una función conviene seguir este orden:

1. Dominio.
2. Paridad: $f(-x)=f(x)$ indica simetría respecto del eje $y$, y $f(-x)=-f(x)$ indica simetría respecto del origen.
3. Ceros y ordenada al origen.
4. Asíntotas verticales, horizontales y oblicuas.
5. Signo de $f'$: intervalos de crecimiento y decrecimiento, y extremos relativos.
6. Signo de $f''$: concavidad y puntos de inflexión.
7. Gráfica final con todos los datos anteriores.

### Procedimiento para extremos absolutos en $[a,b]$

Para una función continua en $[a,b]$:

1. Hallar los números críticos de $f$ en $(a,b)$.
2. Evaluar $f$ en cada número crítico.
3. Evaluar $f$ en $a$ y en $b$.
4. El mayor de los valores obtenidos es el máximo absoluto y el menor es el mínimo absoluto.

### Ejemplo resuelto

**Extremos absolutos.** Hallar los extremos absolutos de $f(x)=3x^4-4x^3$ en $[-1,2]$.

Se pide el máximo y el mínimo de una función continua en un intervalo cerrado, así que corresponde el procedimiento anterior. Se deriva:

$$f'(x)=12x^3-12x^2=12x^2(x-1).$$

La derivada existe siempre y se anula en $x=0$ y en $x=1$, ambos dentro del intervalo. Se evalúa $f$ en los candidatos:

$$f(0)=0,\qquad f(1)=3-4=-1,\qquad f(-1)=3+4=7,\qquad f(2)=48-32=16.$$

El máximo absoluto es $16$, en $x=2$, y el mínimo absoluto es $-1$, en $x=1$. Observá que $x=0$ es número crítico pero no es extremo: $f'$ es negativa a ambos lados de $0$. Se comprueba así que un número crítico no garantiza un extremo.

**Estudio completo.** Estudiar $f(x)=2x^3+3x^2-12x$.

Se deriva:

$$f'(x)=6x^2+6x-12=6(x+2)(x-1),\qquad f''(x)=12x+6.$$

Los números críticos son $x=-2$ y $x=1$. El signo de $f'$ es positivo en $(-\infty,-2)$, negativo en $(-2,1)$ y positivo en $(1,\infty)$. Entonces $f$ crece, decrece y vuelve a crecer. Hay un máximo relativo en $(-2,20)$ y un mínimo relativo en $(1,-7)$. Con la derivada segunda se confirma: $f''(-2)=-18<0$ y $f''(1)=18>0$. Como $f''$ se anula en $x=-\tfrac12$ y cambia de signo, hay un punto de inflexión en $\left(-\tfrac12,\tfrac{13}{2}\right)$.

### Optimización

Los problemas de optimización se resuelven en tres pasos: escribir la magnitud a optimizar como función de una sola variable, determinar el dominio razonable de esa variable y buscar los extremos con las herramientas anteriores.

**Ejemplo.** Hallar las dimensiones de una lata cilíndrica de un litro ($1000\ \text{cm}^3$) que minimicen el material.

Con radio $r$ y altura $h$, el volumen impone $\pi r^2h=1000$, o sea $h=\dfrac{1000}{\pi r^2}$. El área total es:

$$A(r)=2\pi r^2+2\pi r h=2\pi r^2+\frac{2000}{r},\qquad r>0.$$

Se deriva e iguala a cero:

$$A'(r)=4\pi r-\frac{2000}{r^2}=0\ \Rightarrow\ r^3=\frac{500}{\pi}.$$

Como $A''(r)=4\pi+\dfrac{4000}{r^3}>0$ para todo $r>0$, ese punto es un mínimo. Resulta $r\approx 5{,}42$ cm y, de la relación entre $h$ y $r$, $h=2r\approx 10{,}84$ cm. La altura es igual al diámetro, un resultado típico del problema.

> **Importante:** el teorema del valor extremo exige continuidad e intervalo cerrado. En problemas de optimización con dominio abierto, como $r>0$, hay que justificar que el punto crítico es realmente el extremo buscado, por ejemplo con el signo de $f''$ o con el comportamiento en los bordes.

> **Ojo:** al armar la tabla de signos de $f'$ no basta con los ceros de $f'$. Si $f$ tiene discontinuidades o si $f'$ no existe en algún punto, esos valores también separan intervalos. Por ejemplo, en $f(x)=x+\frac1x$ el valor $x=0$ queda fuera del dominio y rompe los intervalos de monotonía.

## Teoremas del valor medio y regla de L'Hôpital

Los teoremas del valor medio conectan el comportamiento global de una función en un intervalo con el comportamiento de su derivada en algún punto interior. Son el fundamento teórico de gran parte del cálculo: justifican criterios de monotonía, demuestran que dos funciones con igual derivada difieren en una constante y permiten calcular límites indeterminados con la regla de L'Hôpital.

### Conceptos clave

- **Teorema de Rolle**: si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$, existe $c\in(a,b)$ con $f'(c)=0$.
- **Teorema del valor medio (Lagrange)**: si $f$ es continua en $[a,b]$ y derivable en $(a,b)$, existe $c\in(a,b)$ tal que
$$f'(c)=\frac{f(b)-f(a)}{b-a}.$$
- **Teorema de Cauchy**: si $f$ y $g$ son continuas en $[a,b]$ y derivables en $(a,b)$ con $g'(x)\ne0$ en $(a,b)$, existe $c\in(a,b)$ con
$$\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.$$
- **Forma indeterminada**: expresión límite como $\frac00$, $\frac\infty\infty$, $0\cdot\infty$, $\infty-\infty$, $0^0$, $1^\infty$ o $\infty^0$, cuyo valor no queda determinado por los límites parciales.

### Desarrollo teórico

**Rolle.** La idea es que si una función continua sale y llega a la misma altura, en algún momento "da la vuelta" y allí la tangente es horizontal. La demostración usa el teorema del valor extremo: si $f$ es constante, la derivada es cero en todos lados. Si no lo es, alcanza un máximo o un mínimo en el interior, y ese punto es crítico; como $f$ es derivable allí, $f'(c)=0$.

**Lagrange.** Es Rolle "inclinado": la tangente en algún punto es paralela a la recta secante que une $(a,f(a))$ con $(b,f(b))$. Se obtiene aplicando Rolle a $h(x)=f(x)-f(a)-\dfrac{f(b)-f(a)}{b-a}(x-a)$, que vale cero en $a$ y en $b$. Físicamente, existe un instante en el cual la velocidad instantánea coincide con la velocidad promedio.

**Consecuencias importantes.**

1. Si $f'(x)=0$ para todo $x$ de un intervalo, $f$ es constante. Si $x_1<x_2$, Lagrange da $f(x_2)-f(x_1)=f'(c)(x_2-x_1)=0$.
2. Si $f'=g'$ en un intervalo, entonces $f-g$ es constante. Por eso las primitivas de una función difieren en una constante.
3. El signo de $f'$ determina la monotonía, porque $f(x_2)-f(x_1)=f'(c)(x_2-x_1)$ tiene el signo de $f'(c)$.

**Cauchy.** Generaliza Lagrange (se recupera tomando $g(x)=x$) y es la base de la regla de L'Hôpital.

**Regla de L'Hôpital.** Si $\lim f(x)=\lim g(x)=0$ (o ambos tienden a $\pm\infty$) y existe $\lim\dfrac{f'(x)}{g'(x)}$ (finito o infinito), entonces
$$\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}.$$
Vale cuando $x\to a$, $a^\pm$ o $\pm\infty$. Se puede aplicar reiteradamente mientras la forma siga indeterminada.

**Otras formas indeterminadas.** Se llevan a $\frac00$ o $\frac\infty\infty$:

- $0\cdot\infty$: se escribe $f\cdot g=\dfrac{f}{1/g}$.
- $\infty-\infty$: se resuelve con denominador común o racionalizando.
- $0^0$, $1^\infty$, $\infty^0$: se escribe $f^g=e^{g\ln f}$ y se calcula el límite del exponente $g\ln f$, que es una forma $0\cdot\infty$.

### Ejemplos resueltos

**Rolle.** Verificar Rolle para $f(x)=x^3-3x^2-x+3$ en $[1,3]$ y hallar $c$.

La función es polinómica, luego continua y derivable. Además $f(1)=1-3-1+3=0$ y $f(3)=27-27-3+3=0$, por lo que se cumplen las hipótesis. Se resuelve $f'(c)=3c^2-6c-1=0$, que da $c=1\pm\dfrac{2\sqrt3}{3}$. Solo $c=1+\dfrac{2\sqrt3}{3}\approx2{,}15$ pertenece a $(1,3)$.

**Una hipótesis que falla.** Sea $f(x)=|x-1|$ en $[0,3]$. La pendiente de la secante es $\dfrac{f(3)-f(0)}{3}=\dfrac{2-1}{3}=\dfrac13$, pero $f'(x)=-1$ para $x<1$ y $f'(x)=1$ para $x>1$, así que ninguna derivada vale $\tfrac13$. No hay contradicción: $f$ no es derivable en $x=1\in(0,3)$ y no se cumple la hipótesis.

**L'Hôpital.** Calcular $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x(e^x-1)}$.

Es de la forma $\frac00$. Se deriva numerador y denominador:

$$\lim_{x\to0}\frac{e^x-1}{(e^x-1)+xe^x},$$

que sigue siendo $\frac00$. Se deriva de nuevo:

$$\lim_{x\to0}\frac{e^x}{e^x+e^x+xe^x}=\frac{1}{2}.$$

**Forma $1^\infty$.** Calcular $L=\displaystyle\lim_{x\to\infty}\left(\frac{x}{x+1}\right)^x$.

Se toma logaritmo: $\ln L=\displaystyle\lim_{x\to\infty}x\ln\frac{x}{x+1}=\lim_{x\to\infty}\frac{\ln x-\ln(x+1)}{1/x}$, que es $\frac00$. Derivando:

$$\lim_{x\to\infty}\frac{\frac1x-\frac1{x+1}}{-1/x^2}=\lim_{x\to\infty}\frac{-x^2}{x(x+1)}=-1.$$

Por lo tanto $L=e^{-1}$.

> **Ojo:** L'Hôpital solo se aplica a formas indeterminadas $\frac00$ o $\frac\infty\infty$. Derivar cociente y denominador de un límite que no es indeterminado da resultados incorrectos. Además, el límite de $f'/g'$ debe existir: si no existe, la regla no dice nada y hay que usar otro método.

> **Tip:** antes de derivar, simplificá cuando se pueda. Muchos límites con $\sin x/x$ o con potencias se resuelven con un cambio algebraico más rápido que con L'Hôpital.

## Aproximación lineal, diferencial y polinomio de Taylor

Calcular exactamente $\sqrt{8{,}9}$, $\ln 2{,}6$ o $\sin 3$ a mano es imposible, pero cerca de un punto conocido toda función derivable se parece a su recta tangente. Si se pide más precisión, se reemplaza la recta por un polinomio de grado mayor. Este tema desarrolla cómo construir esas aproximaciones, cómo estimar el error que se comete y cuándo conviene cada una.

### Conceptos clave

- **Aproximación lineal** de $f$ en $x=a$: la función $L(x)=f(a)+f'(a)(x-a)$, cuya gráfica es la recta tangente en $(a,f(a))$.
- **Diferencial** de $f$ en $a$ para un incremento $\Delta x$: $df=f'(a)\,\Delta x$. Aproxima la variación real $\Delta f=f(a+\Delta x)-f(a)$.
- **Error** de la aproximación: $e(x)=f(x)-L(x)$, o más generalmente $R_n(x)=f(x)-P_n(x)$ (término residual o resto).
- **Polinomio de Taylor de orden $n$** de $f$ en $a$:
$$P_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k.$$
Si $a=0$ se llama **polinomio de Maclaurin**.

### Desarrollo teórico

**Idea de la linealización.** Si $f$ es derivable en $a$, cerca de $a$ la gráfica es casi indistinguible de su tangente. Para $x$ cercano a $a$ se usa $f(x)\approx L(x)$. El error es de orden menor que $|x-a|$, y empeora al alejarse de $a$. Si $f$ es cóncava hacia arriba, la tangente queda debajo de la curva y $L$ aproxima por defecto. Si es cóncava hacia abajo, aproxima por exceso.

**Diferencial y propagación de errores.** Si una magnitud $x$ se mide con un error $\Delta x$, el error propagado a $y=f(x)$ se estima con $dy=f'(x)\,\Delta x$. Por ejemplo, para el área de un círculo, $A=\pi r^2$ y $dA=2\pi r\,dr$.

**Del polinomio de Taylor.** El polinomio $P_n$ es el único de grado menor o igual que $n$ que coincide con $f$ y con sus primeras $n$ derivadas en $a$. Para $n=1$ se obtiene la aproximación lineal. El polinomio de Taylor de orden $n$ no siempre tiene grado $n$: si $f^{(n)}(a)=0$, el último término se anula (por ejemplo, el de $\sin x$ de orden $4$ en $0$ tiene grado $3$).

**Resto de Lagrange.** Si $f$ tiene derivada de orden $n+1$ en un intervalo que contiene a $a$ y a $x$, existe $z$ entre $a$ y $x$ tal que
$$R_n(x)=\frac{f^{(n+1)}(z)}{(n+1)!}(x-a)^{n+1}.$$
No se conoce $z$, pero se acota $|f^{(n+1)}|$ en el intervalo y así se obtiene una cota de error. El error depende de dos factores: cuánto crecen las derivadas y cuán lejos está $x$ de $a$.

**Elegir el centro.** Para aproximar $f(x_0)$ conviene un centro $a$ cercano a $x_0$ en el que se conozcan exactamente $f$ y sus derivadas. Para $\sin 3$ es mejor $a=\pi$ que $a=0$, porque $3$ está mucho más cerca de $\pi$.

### Desarrollos habituales en $a=0$

| Función | Polinomio de Maclaurin de orden $n$ |
|---|---|
| $e^x$ | $\displaystyle\sum_{k=0}^{n}\frac{x^k}{k!}$ |
| $\sin x$ | $x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}-\cdots$ |
| $\cos x$ | $1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}-\cdots$ |
| $\dfrac{1}{1-x}$ | $1+x+x^2+\cdots+x^n$ |
| $\ln(1+x)$ | $x-\dfrac{x^2}{2}+\dfrac{x^3}{3}-\cdots$ |

### Ejemplos resueltos

**Linealización.** Estimar $\sqrt{8{,}9}$ con $f(x)=\sqrt x$ en $a=9$.

Se elige $a=9$ porque está cerca de $8{,}9$ y su raíz es exacta. Se tiene $f(9)=3$ y $f'(x)=\dfrac{1}{2\sqrt x}$, entonces $f'(9)=\dfrac16$. Luego
$$L(x)=3+\frac{x-9}{6},\qquad \sqrt{8{,}9}\approx3+\frac{-0{,}1}{6}\approx2{,}98333.$$
Como $f$ es cóncava hacia abajo, $L$ aproxima por exceso: el valor real, $2{,}98329\ldots$, es un poco menor. Se comprueba así que el error es muy chico.

**Taylor con cota de error.** Aproximar $\sin 0{,}2$ con el polinomio de Maclaurin de orden 3 y acotar el error.

$$P_3(x)=x-\frac{x^3}{6}\ \Rightarrow\ P_3(0{,}2)=0{,}2-\frac{0{,}008}{6}\approx0{,}198667.$$

Como el término de orden 4 de $\sin x$ es nulo, $P_3=P_4$, y se puede usar el resto de orden 4: $|R_4|\le\dfrac{|x|^5}{120}=\dfrac{0{,}2^5}{120}\approx2{,}7\times10^{-6}$, porque $|\sin^{(5)}z|\le1$. El valor real es $0{,}198669\ldots$, consistente con la cota.

**Centro mal elegido.** Con $a=\pi$, el polinomio de orden 3 de $\sin x$ es $P_3(x)=-(x-\pi)+\dfrac{(x-\pi)^3}{6}$, porque $\sin(\pi+h)=-\sin h$. Para $x=3$ ($h=-0{,}14159$) da $0{,}14159-0{,}00047\approx0{,}14112$, que coincide con $\sin 3=0{,}14112\ldots$ Si se hubiera usado $a=0$ con el mismo orden, la aproximación sería pésima, porque $3$ está lejos de $0$.

> **Ojo:** más términos no mejoran la aproximación si el punto está lejos del centro. El polinomio de $\ln(1+x)$ de orden 3 en $0$ evaluado en $x=1$ da $\tfrac56\approx0{,}833$, bastante distinto de $\ln2\approx0{,}693$. Taylor es una herramienta local.

> **Importante:** una cota de error válida requiere acotar la derivada de orden $n+1$ en todo el intervalo entre $a$ y $x$, no solo en los extremos.

## Integral indefinida y métodos de integración

Integrar es el proceso inverso de derivar: dada una función, se busca otra cuya derivada sea la dada. Mientras que derivar es mecánico, integrar exige elegir un método según la forma del integrando. Este tema desarrolla el concepto de primitiva y los tres métodos principales (sustitución, partes y fracciones simples), además de las integrales que dan funciones trigonométricas inversas.

### Conceptos clave

- **Primitiva** de $f$ en un intervalo: función $F$ con $F'(x)=f(x)$ en ese intervalo.
- **Integral indefinida**: conjunto de todas las primitivas, $\displaystyle\int f(x)\,dx=F(x)+C$, con $C$ constante arbitraria.
- **Condición inicial**: dato como $F(x_0)=y_0$ que permite fijar $C$ y elegir una única primitiva.

### Desarrollo teórico

**Unicidad salvo constante.** Si $F$ y $G$ son primitivas de $f$ en un intervalo, entonces $F'-G'=0$ y, por una consecuencia del teorema de Lagrange, $F-G$ es constante. Por eso toda la familia de primitivas es $F(x)+C$. Para hallar una sola se necesita un dato extra: si $g'(x)=3x$ y $g(0)=7$, resulta $g(x)=\tfrac32x^2+7$.

**Linealidad.** $\int(af+bg)=a\int f+b\int g$. Combinada con las integrales inmediatas ($\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ si $n\neq-1$, $\int\frac{dx}{x}=\ln|x|+C$, $\int e^x\,dx=e^x+C$, $\int\cos x\,dx=\sin x+C$, etc.), permite integrar sumas, restas y potencias con reescritura algebraica previa.

**Sustitución.** Es la inversa de la regla de la cadena. Si $u=g(x)$, entonces
$$\int f(g(x))\,g'(x)\,dx=\int f(u)\,du.$$
Se busca en el integrando una función compuesta cuya derivada aparece multiplicando (a menos de una constante). Ejemplo: $\int x\cos(x^2)\,dx$ con $u=x^2$, $du=2x\,dx$, da $\tfrac12\sin(x^2)+C$.

**Integración por partes.** Sale de la regla del producto:
$$\int u\,dv=uv-\int v\,du.$$
Conviene cuando el integrando es producto de una función que se simplifica al derivar ($x$, $\ln x$, $\arcsin x$) y otra fácil de integrar ($e^x$, $\sin x$). Se puede aplicar más de una vez. En integrales como $\int e^x\cos x\,dx$ la integral original reaparece y se despeja algebraicamente.

**Fracciones simples.** Sirve para integrar cocientes de polinomios $\dfrac{P(x)}{Q(x)}$:

1. Si el grado de $P$ es mayor o igual que el de $Q$, se divide primero.
2. Se factoriza $Q$.
3. Se descompone en fracciones: un factor lineal $(x-r)$ aporta $\dfrac{A}{x-r}$, un factor repetido $(x-r)^2$ aporta además $\dfrac{B}{(x-r)^2}$, y un cuadrático irreducible aporta $\dfrac{Mx+N}{x^2+px+q}$.
4. Se hallan los coeficientes y se integra término a término.

**Funciones trigonométricas inversas.** Surgen de integrales con cuadráticas:
$$\int\frac{dx}{x^2+a^2}=\frac1a\arctan\frac xa+C,\qquad \int\frac{dx}{\sqrt{a^2-x^2}}=\arcsin\frac xa+C.$$
Se aplican después de completar cuadrados o de factorizar el coeficiente adecuado.

### Ejemplos resueltos

**Partes.** Calcular $\int xe^x\,dx$.

Se elige $u=x$ (que se simplifica al derivar) y $dv=e^x\,dx$. Entonces $du=dx$ y $v=e^x$:
$$\int xe^x\,dx=xe^x-\int e^x\,dx=e^x(x-1)+C.$$

**Partes con reaparición.** Calcular $I=\int e^x\cos x\,dx$.

Con $u=\cos x$, $dv=e^x\,dx$: $I=e^x\cos x+\int e^x\sin x\,dx$. Aplicando partes de nuevo a la última integral, con $u=\sin x$, resulta $\int e^x\sin x\,dx=e^x\sin x-I$. Entonces $I=e^x\cos x+e^x\sin x-I$, y despejando:
$$I=\frac{e^x(\sin x+\cos x)}{2}+C.$$

**Fracciones simples.** Calcular $\int\dfrac{7x-1}{x^2-x-6}\,dx$.

Se factoriza $x^2-x-6=(x-3)(x+2)$ y se plantea $\dfrac{7x-1}{(x-3)(x+2)}=\dfrac{A}{x-3}+\dfrac{B}{x+2}$. Evaluando en $x=3$: $A=\dfrac{20}{5}=4$. En $x=-2$: $B=\dfrac{-15}{-5}=3$. Luego:
$$\int\frac{7x-1}{x^2-x-6}\,dx=4\ln|x-3|+3\ln|x+2|+C.$$

**Inversa trigonométrica.** Calcular $\int\dfrac{dx}{x^2+3}$. Con $a=\sqrt3$: $\dfrac{1}{\sqrt3}\arctan\dfrac{x}{\sqrt3}+C$.

> **Tip:** siempre se puede verificar una primitiva derivándola. Si el resultado no devuelve el integrando, hay un error.

> **Ojo:** al integrar $\frac{1}{x}$ se debe escribir $\ln|x|$, con valor absoluto. Sin él, la primitiva solo sería válida para $x>0$.

## Integral definida y teorema fundamental del cálculo

La integral definida mide acumulación: el área bajo una curva, la distancia recorrida a partir de la velocidad o el costo total a partir del costo marginal. Su definición mediante sumas de Riemann es el límite de aproximaciones por rectángulos. El teorema fundamental del cálculo conecta esa definición con las primitivas, y por eso las integrales se calculan sin pasar por el límite.

### Conceptos clave

- **Suma de Riemann** de $f$ en $[a,b]$: $\sum_{i=1}^{n}f(x_i^*)\,\Delta x_i$, donde los $\Delta x_i$ son las longitudes de los subintervalos de una partición y $x_i^*$ es un punto de cada uno.
- **Integral definida**: límite de las sumas de Riemann cuando la longitud máxima de los subintervalos tiende a cero, $\displaystyle\int_a^bf(x)\,dx$. Existe si $f$ es continua en $[a,b]$.
- **Área con signo**: la integral cuenta con signo positivo las zonas sobre el eje $x$ y con signo negativo las zonas debajo.
- **Función integral**: $F(x)=\displaystyle\int_a^xf(t)\,dt$.

### Desarrollo teórico

**Propiedades.** Linealidad; aditividad $\int_a^bf=\int_a^cf+\int_c^bf$; $\int_a^bf=-\int_b^af$; y monotonía: si $f\le g$ en $[a,b]$, entonces $\int_a^bf\le\int_a^bg$.

**Teorema fundamental del cálculo.** Tiene dos partes.

1. Si $f$ es continua en $[a,b]$ y $F(x)=\int_a^xf(t)\,dt$, entonces $F$ es derivable y $F'(x)=f(x)$. Es decir, derivar una integral con límite superior variable devuelve el integrando.
2. **Regla de Barrow**: si $G$ es cualquier primitiva de $f$ en $[a,b]$, entonces $\displaystyle\int_a^bf(x)\,dx=G(b)-G(a)$.

**Derivada con límites variables.** Combinando la primera parte con la regla de la cadena:
$$\frac{d}{dx}\int_{g(x)}^{h(x)}f(t)\,dt=f(h(x))\,h'(x)-f(g(x))\,g'(x).$$

**Áreas entre curvas.** El área entre $y=f(x)$ y $y=g(x)$, con $f\ge g$ en $[a,b]$, es $\int_a^b(f-g)\,dx$. Si las curvas se cruzan, hay que dividir el intervalo en cada cruce y tomar en cada tramo la función de arriba menos la de abajo. A veces es más cómodo integrar respecto de $y$, con el eje horizontal como variable dependiente.

**Cambio de variable en la definida.** Si se hace $u=g(x)$, se pueden cambiar los límites a $g(a)$ y $g(b)$, y no hace falta deshacer el cambio.

### Ejemplos resueltos

**Derivada de una función integral.** Hallar $F'(x)$ si $F(x)=\displaystyle\int_{x^2}^{\pi}\frac{\sin t}{t}\,dt$.

Se invierten los límites para tener el límite variable arriba: $F(x)=-\int_\pi^{x^2}\frac{\sin t}{t}dt$. Por TFC y regla de la cadena:
$$F'(x)=-\frac{\sin(x^2)}{x^2}\cdot2x=-\frac{2\sin(x^2)}{x}.$$

**Área entre curvas.** Hallar el área encerrada por $y=x$ y $y=x^2-1$.

Los cruces cumplen $x=x^2-1$, o sea $x^2-x-1=0$, con raíces $r_{1,2}=\dfrac{1\pm\sqrt5}{2}$. Entre ellas la recta está por encima de la parábola, así que:
$$A=\int_{r_1}^{r_2}(x-x^2+1)\,dx=\int_{r_1}^{r_2}-(x-r_1)(x-r_2)\,dx.$$
Se usa que $\int_{r_1}^{r_2}(x-r_1)(r_2-x)\,dx=\dfrac{(r_2-r_1)^3}{6}$ (se verifica con el cambio $t=x-r_1$). Como $r_2-r_1=\sqrt5$:
$$A=\frac{5\sqrt5}{6}.$$

**Integrando en $y$.** Área limitada por $y=\sqrt x$, $y=x-2$ y $y=0$. Despejando $x$: la curva es $x=y^2$ y la recta $x=y+2$, con $y\in[0,2]$. Entonces $A=\int_0^2(y+2-y^2)\,dy=2+4-\tfrac83=\tfrac{10}{3}$. Integrar en $x$ habría obligado a partir la región en dos tramos.

> **Importante:** la regla de Barrow exige que $f$ sea continua en todo $[a,b]$. Si no lo es, se puede obtener un resultado absurdo, como pasa con $\int_{-1}^{1}\frac{dx}{x^2}$, que "daría" $-2$ siendo el integrando positivo.

> **Ojo:** la integral definida mide área con signo. Para el área total entre la curva y el eje hay que integrar $|f|$, partiendo en los ceros de $f$.

## Integrales impropias y valor promedio

La integral definida requiere un intervalo acotado y una función acotada. Las integrales impropias extienden el concepto a intervalos infinitos y a funciones que tienden a infinito, mediante límites. Estas integrales reciben el nombre de convergentes o divergentes según que el límite exista o no. Este tema también incluye el valor promedio de una función, que es una aplicación directa de la integral definida.

### Conceptos clave

- **Integral impropia de tipo 1** (intervalo infinito): $\displaystyle\int_a^\infty f(x)\,dx=\lim_{b\to\infty}\int_a^bf(x)\,dx$, y análogamente para $\int_{-\infty}^b$. Para $\int_{-\infty}^\infty$ se parte en un punto $c$ y ambas integrales deben converger por separado.
- **Integral impropia de tipo 2** (integrando no acotado): si $f$ tiene una asíntota vertical en $b$, $\displaystyle\int_a^bf=\lim_{t\to b^-}\int_a^tf$. Si la asíntota está en un punto interior $c$, se parte en $c$ y las dos partes deben converger.
- **Convergente / divergente**: la integral impropia converge si el límite existe y es finito.
- **Valor promedio** de $f$ en $[a,b]$: $f_{\text{prom}}=\dfrac{1}{b-a}\displaystyle\int_a^bf(x)\,dx$.

### Desarrollo teórico

**Integrales de referencia.** Para $a>0$:
$$\int_1^\infty\frac{dx}{x^p}\ \text{converge si }p>1\text{ y diverge si }p\le1;\qquad \int_0^1\frac{dx}{x^p}\ \text{converge si }p<1\text{ y diverge si }p\ge1.$$
Se comprueba con la primitiva: para $p\neq1$, $\int_1^b x^{-p}dx=\dfrac{b^{1-p}-1}{1-p}$ tiene límite finito cuando $b\to\infty$ solo si $1-p<0$. Para $p=1$ aparece $\ln b$, que diverge. La intuición es que cerca de infinito el integrando tiene que decaer más rápido que $1/x$, mientras que cerca de una singularidad tiene que crecer más lento que $1/x$.

**Singularidades escondidas.** Antes de calcular una integral hay que revisar si el integrando es continuo en todo el intervalo. Una singularidad interior convierte la integral en impropia aunque los límites sean finitos.

**Valor promedio y teorema del valor medio para integrales.** Si $f$ es continua en $[a,b]$, existe $c\in[a,b]$ con $f(c)=f_{\text{prom}}$. Geométricamente, existe un rectángulo de base $b-a$ y altura $f(c)$ cuya área coincide con el área bajo la curva.

### Ejemplos resueltos

**Tipo 1.** Calcular $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{e^x+e^{-x}}$.

Se escribe el integrando como $\dfrac{e^x}{e^{2x}+1}$. Con $u=e^x$, $du=e^x\,dx$, la primitiva es $\arctan(e^x)$. Se parte en $0$:
$$\lim_{b\to\infty}\arctan(e^b)-\arctan(e^0)+\arctan(e^0)-\lim_{a\to-\infty}\arctan(e^a)=\frac\pi2-0=\frac\pi2.$$
La integral converge.

**Tipo 2.** $\displaystyle\int_0^1\frac{dx}{\sqrt x}=\lim_{t\to0^+}2\sqrt x\Big|_t^1=2$. Converge, de acuerdo con $p=\tfrac12<1$.

**Trampa.** $\displaystyle\int_{-1}^{1}\frac{dx}{x^2}$ tiene una singularidad en $x=0$, interior al intervalo. Hay que partirla en $\int_{-1}^0$ y $\int_0^1$, y cada una diverge porque $p=2\ge1$. La integral diverge. Calcular directamente $-\frac1x\big|_{-1}^{1}=-2$ es un error.

**Valor promedio.** Para $f(x)=4-x^2$ en $[0,2]$:
$$f_{\text{prom}}=\frac12\int_0^2(4-x^2)\,dx=\frac12\left(8-\frac83\right)=\frac83.$$
Para hallar $c$ tal que $f(c)=\tfrac83$: $4-c^2=\tfrac83$, es decir $c=\dfrac{2\sqrt3}{3}\approx1{,}15$, que está en $[0,2]$.

> **Ojo:** no se puede aplicar la regla de Barrow como si nada a una integral con una asíntota interior. Hay que revisar siempre la continuidad del integrando en el intervalo.

> **Tip:** si hay dos puntos problemáticos (por ejemplo, un extremo infinito y una singularidad), partí la integral de modo que cada parte tenga una sola dificultad.

## Aplicaciones geométricas de la integral

La idea de integrar consiste en cortar una magnitud en pedacitos infinitesimales, aproximar cada uno con una expresión simple y sumar. Con ese procedimiento se calculan la longitud de una curva, el volumen de un sólido de revolución y el área de una superficie de revolución.

### Conceptos clave

- **Longitud de arco**: longitud de la curva $y=f(x)$ entre $x=a$ y $x=b$.
- **Sólido de revolución**: cuerpo que se genera al girar una región plana alrededor de un eje.
- **Método de los discos (o arandelas)**: se cortan secciones perpendiculares al eje de giro.
- **Método de las capas cilíndricas**: se cortan franjas paralelas al eje de giro.
- **Superficie de revolución**: superficie que genera una curva al girar alrededor de un eje.

### Desarrollo teórico

**Longitud de arco.** Un pedacito de curva se aproxima por la hipotenusa de un triángulo de catetos $dx$ y $dy=f'(x)\,dx$, de longitud $\sqrt{1+f'(x)^2}\,dx$. Entonces, si $f'$ es continua en $[a,b]$:
$$L=\int_a^b\sqrt{1+\big(f'(x)\big)^2}\,dx.$$

**Volumen por discos.** Al girar la región bajo $y=f(x)$, entre $a$ y $b$, alrededor del eje $x$, cada corte perpendicular es un disco de radio $f(x)$:
$$V=\pi\int_a^bf(x)^2\,dx.$$
Si la región está entre dos curvas $f\ge g\ge0$, el corte es una arandela y $V=\pi\int_a^b\big(f^2-g^2\big)\,dx$.

**Volumen por capas.** Al girar alrededor del eje $y$ la región bajo $y=f(x)$ entre $a$ y $b$ (con $0\le a<b$), cada franja vertical genera una capa cilíndrica de radio $x$ y altura $f(x)$:
$$V=2\pi\int_a^bx\,f(x)\,dx.$$

**Área de superficie de revolución.** Al girar $y=f(x)$ alrededor del eje $x$, cada pedacito de arco genera una banda de radio $f(x)$ y ancho $\sqrt{1+f'^2}\,dx$:
$$S=2\pi\int_a^bf(x)\sqrt{1+\big(f'(x)\big)^2}\,dx.$$

**Elección del método.** Un mismo volumen se puede calcular de dos formas. Se elige el método que no obligue a partir la región ni a despejar variables complicadas.

### Ejemplos resueltos

**Longitud de arco.** Longitud de $y=x^{3/2}$ entre $x=0$ y $x=5$.

Se tiene $y'=\tfrac32x^{1/2}$, luego $1+y'^2=1+\tfrac94x$. Entonces:
$$L=\int_0^5\sqrt{1+\tfrac94x}\,dx=\frac{8}{27}\left(1+\tfrac94x\right)^{3/2}\Big|_0^5=\frac{8}{27}\left(\frac{343}{8}-1\right)=\frac{335}{27}\approx12{,}4.$$

**Discos.** Volumen del elipsoide que genera $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ al girar alrededor del eje $x$.

Despejando, $y^2=9\left(1-\dfrac{x^2}{25}\right)$ con $x\in[-5,5]$:
$$V=\pi\int_{-5}^{5}9\left(1-\frac{x^2}{25}\right)dx=9\pi\left(10-\frac{10}{3}\right)=60\pi.$$

**Dos métodos para el mismo sólido.** Región bajo $y=\sqrt x$ entre $x=0$ y $x=4$, girada alrededor del eje $y$.

*Por capas*: $V=2\pi\int_0^4x\sqrt x\,dx=2\pi\cdot\tfrac25\cdot32=\tfrac{128\pi}{5}$.

*Por arandelas en $y$*: $x$ va de $y^2$ a $4$ para $y\in[0,2]$, y $V=\pi\int_0^2(16-y^4)\,dy=\pi\left(32-\tfrac{32}{5}\right)=\tfrac{128\pi}{5}$. Coinciden.

**Superficie.** Área generada por $y=x^3$, $0\le x\le1$, al girar alrededor del eje $x$.

$S=2\pi\int_0^1x^3\sqrt{1+9x^4}\,dx$. Con $u=1+9x^4$, $du=36x^3\,dx$:
$$S=\frac{2\pi}{36}\cdot\frac23u^{3/2}\Big|_1^{10}=\frac{\pi}{27}\left(10^{3/2}-1\right)\approx3{,}56.$$

> **Ojo:** al girar alrededor del eje $y$ con la fórmula de discos hay que expresar $x$ en función de $y$. Usar $f(x)^2$ ahí es el error más común.

> **Tip:** antes de calcular, dibujá la región y el eje. El dibujo indica qué método conviene y cuál es el radio de giro.

## Ecuaciones diferenciales

Una ecuación diferencial relaciona una función desconocida con sus derivadas. Aparece cada vez que se modela un fenómeno en términos de su ritmo de cambio: crecimiento de poblaciones, caída de cuerpos con rozamiento, enfriamiento, circuitos. Resolverla significa hallar la función, y en general se obtiene una familia de soluciones, de la cual un dato inicial selecciona una.

### Conceptos clave

- **Ecuación diferencial ordinaria (EDO)**: ecuación con una función de una variable y sus derivadas. Su **orden** es el de la derivada más alta.
- **Solución general**: familia de soluciones con constantes arbitrarias. Una **solución particular** se obtiene al fijar las constantes con **condiciones iniciales**.
- **Campo direccional**: gráfico que muestra en cada punto $(x,y)$ un segmento con la pendiente $y'=F(x,y)$. Las soluciones son curvas tangentes a esos segmentos.
- **Variables separables**: EDO de la forma $y'=g(x)\,h(y)$.
- **Lineal de primer orden**: $y'+a(x)y=b(x)$.
- **Bernoulli**: $y'+a(x)y=b(x)y^n$.
- **Homogénea** (en el sentido de grado): $M(x,y)\,dx+N(x,y)\,dy=0$ con $M$ y $N$ homogéneas del mismo grado.
- **Ecuación logística**: $P'=kP\left(1-\dfrac PK\right)$.

### Desarrollo teórico

**Verificar una solución.** Se reemplaza la función y sus derivadas en la ecuación y se comprueba la igualdad. Por ejemplo, $y=e^{-\sin x}$ cumple $y'+y\cos x=0$, porque $y'=-\cos x\,e^{-\sin x}$.

**Campos direccionales.** Dibujan la información de $y'=F(x,y)$ sin resolver nada. Si $F$ depende solo de $x$, los segmentos se repiten a lo largo de cada vertical. Si $F$ depende solo de $y$, se repiten sobre cada horizontal. Esto permite asociar un campo con su ecuación.

**Variables separables.** Se separa $\dfrac{dy}{h(y)}=g(x)\,dx$ y se integra ambos miembros. Hay que revisar por separado los valores de $y$ donde $h(y)=0$, porque corresponden a soluciones constantes que se pueden perder al dividir.

**Lineales de primer orden.** Se multiplica por el **factor integrante** $\mu(x)=e^{A(x)}$, con $A'=a$. Como $(\mu y)'=\mu(y'+ay)=\mu b$, se integra y resulta:
$$y(x)=e^{-A(x)}\left(C+\int e^{A(x)}\,b(x)\,dx\right).$$
Si $a$ y $b$ son continuas en un intervalo, para cada condición inicial existe una única solución en ese intervalo.

**Bernoulli.** Con $n\neq0,1$, la sustitución $z=y^{1-n}$ lo convierte en una lineal en $z$.

**Homogéneas.** La sustitución $y=vx$ (con $dy=v\,dx+x\,dv$) las convierte en separables en $v$ y $x$.

**Trayectorias ortogonales.** Dado un haz de curvas, se halla su ecuación diferencial $y'=F(x,y)$ eliminando el parámetro. Las curvas que cortan a todas las del haz en ángulo recto cumplen $y'=-\dfrac{1}{F(x,y)}$.

**Modelo logístico.** La tasa relativa $P'/P$ decrece al crecer $P$ y se anula en la capacidad $K$. Su solución es
$$P(t)=\frac{K}{1+c\,e^{-kt}},\qquad c=\frac{K-P_0}{P_0}.$$
Si $c>0$ la población crece hacia $K$; si $c<0$ ($P_0>K$) decrece hacia $K$; si $c=0$ la solución es la constante $K$.

**Lineales de segundo orden con coeficientes constantes.** Para $ay''+by'+cy=0$ se prueba $y=e^{rx}$, lo que lleva a la **ecuación característica** $ar^2+br+c=0$:

| Raíces | Solución general |
|---|---|
| Reales distintas $r_1\neq r_2$ | $C_1e^{r_1x}+C_2e^{r_2x}$ |
| Real doble $r$ | $(C_1+C_2x)e^{rx}$ |
| Complejas $\alpha\pm\beta i$ | $e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

Para la ecuación no homogénea $ay''+by'+cy=g(x)$, la solución es $y=y_h+y_p$, donde $y_h$ resuelve la homogénea y $y_p$ es una solución particular. Esta última se propone con la forma de $g(x)$ (polinomio, exponencial o seno y coseno). Si la propuesta ya es solución de la homogénea, se multiplica por $x$ (o por $x^2$ si es raíz doble).

### Ejemplos resueltos

**Separables.** Resolver $\dfrac{dy}{dx}=\dfrac{x+\sin x}{3y^2}$.

Se separa: $3y^2\,dy=(x+\sin x)\,dx$. Integrando: $y^3=\tfrac{x^2}{2}-\cos x+C$, o sea $y=\left(\tfrac{x^2}{2}-\cos x+C\right)^{1/3}$.

**Lineal.** Resolver $y'+\dfrac2xy=x^2$ para $x>0$.

El factor integrante es $\mu=e^{\int2/x\,dx}=x^2$. Entonces $(x^2y)'=x^4$, luego $x^2y=\tfrac{x^5}{5}+C$ y
$$y=\frac{x^3}{5}+\frac{C}{x^2}.$$

**Homogénea.** Resolver $(x+y)\,dx+x\,dy=0$.

Con $y=vx$: $(x+vx)\,dx+x(v\,dx+x\,dv)=0$, es decir $(1+2v)\,dx+x\,dv=0$. Separando, $\dfrac{dx}{x}=-\dfrac{dv}{1+2v}$, y al integrar $\ln|x|=-\tfrac12\ln|1+2v|+c$. Entonces $x^2(1+2v)=C$, que deshaciendo el cambio da $x^2+2xy=C$.

**Trayectorias ortogonales.** Para el haz $y=ax$: $y'=a=\dfrac yx$. Las ortogonales cumplen $y'=-\dfrac xy$, o sea $y\,dy=-x\,dx$, que da $x^2+y^2=C$: circunferencias centradas en el origen.

**Segundo orden con valores iniciales.** Resolver $y''+y'-6y=0$ con $y(0)=0$, $y'(0)=2$.

La ecuación característica $r^2+r-6=0$ tiene raíces $r=2$ y $r=-3$. Entonces $y=C_1e^{2x}+C_2e^{-3x}$. Las condiciones dan $C_1+C_2=0$ y $2C_1-3C_2=2$, de donde $C_1=\tfrac25$ y $C_2=-\tfrac25$:
$$y=\tfrac25\left(e^{2x}-e^{-3x}\right).$$

**No homogénea.** Resolver $y''-3y'=2-6x$.

La homogénea tiene raíces $0$ y $3$, así que $y_h=C_1+C_2e^{3x}$. El miembro derecho es un polinomio de grado 1 y, como $0$ es raíz, se propone $y_p=x(Ax+B)$. Reemplazando, $y_p''-3y_p'=2A-6Ax-3B=2-6x$, de donde $A=1$ y $B=0$. Entonces $y=C_1+C_2e^{3x}+x^2$.

**Logística.** Se sueltan $400$ peces en un lago con capacidad $K=10000$, y la población se triplica en un año. Deducir $P(t)$ y el tiempo para llegar a $5000$.

Se tiene $c=\dfrac{10000-400}{400}=24$. De $P(1)=1200$: $1+24e^{-k}=\tfrac{25}{3}$, luego $e^{-k}=\tfrac{11}{36}$ y $k=\ln\tfrac{36}{11}$. Entonces
$$P(t)=\frac{10000}{1+24\,e^{-kt}}.$$
Para $P=5000$ debe ser $1+24e^{-kt}=2$, o sea $t=\dfrac{\ln24}{\ln(36/11)}\approx2{,}68$ años.

**Velocidad terminal.** Con rozamiento, $v'=g-cv$ ($c>0$). Es lineal, con solución $v(t)=\dfrac gc+Ce^{-ct}$, y $\lim_{t\to\infty}v(t)=\dfrac gc$.

> **Ojo:** en variables separables, al dividir por $h(y)$ se pierden las soluciones constantes $y=y_0$ con $h(y_0)=0$. Hay que verificarlas aparte.

> **Importante:** la ecuación característica solo resuelve el caso de coeficientes constantes. Si los coeficientes dependen de $x$, no se aplica.

> **Tip:** para $y_p$ en el caso no homogéneo, proponé una forma general del tipo de $g(x)$ con coeficientes indeterminados y reemplazá en la ecuación para igualar coeficientes.

## Sucesiones

Una sucesión es una lista infinita de números ordenados, y se puede ver como una función cuyo dominio son los enteros positivos. Su estudio se centra en el comportamiento a largo plazo: si los términos se estabilizan en un valor, crecen sin tope u oscilan. Es el paso previo a las series, que suman los términos de una sucesión.

### Conceptos clave

- **Sucesión** $\{a_n\}$: función $f:\mathbb{Z}^+\to\mathbb{R}$ con $a_n=f(n)$. Puede darse por fórmula del término general o por **recurrencia** (cada término en función de los anteriores, como en la sucesión de Fibonacci).
- **Límite**: $\lim_{n\to\infty}a_n=L$ si para todo $\varepsilon>0$ existe $n_0$ tal que $|a_n-L|<\varepsilon$ para todo $n\ge n_0$.
- **Convergente** si el límite existe y es finito; **divergente** en caso contrario.
- **Monótona**: creciente si $a_n\le a_{n+1}$ para todo $n$, decreciente si $a_n\ge a_{n+1}$.
- **Acotada**: existe $M>0$ con $|a_n|\le M$ para todo $n$.

### Desarrollo teórico

**Relación con límites de funciones.** Si $\lim_{x\to\infty}f(x)=L$ y $a_n=f(n)$, entonces $\lim a_n=L$. Esto permite usar L'Hôpital, que se aplica a funciones de variable real, no a sucesiones directamente. Por ejemplo, $\lim\dfrac{n^2}{2^n-1}=0$, aplicando L'Hôpital a $\dfrac{x^2}{2^x-1}$.

**Órdenes de crecimiento.** A largo plazo, de menor a mayor crecimiento: logaritmos, potencias, exponenciales y factorial. Por eso $\dfrac{n!}{2^n}\to\infty$, $\dfrac{2^n}{n!}\to0$ y $\dfrac{\ln n}{n}\to0$.

**Álgebra de límites.** Si $a_n\to A$ y $b_n\to B$, entonces $a_n\pm b_n\to A\pm B$, $a_nb_n\to AB$ y $\dfrac{a_n}{b_n}\to\dfrac AB$ si $B\neq0$.

**Teorema de intercalación.** Si $a_n\le b_n\le c_n$ desde cierto $n$ en adelante y $a_n,c_n\to L$, entonces $b_n\to L$.

**Valor absoluto.** Si $|a_n|\to0$, entonces $a_n\to0$. Esto surge de intercalar $-|a_n|\le a_n\le|a_n|$. Sirve para sucesiones con signos alternados, como $\dfrac{(-1)^n}{n}\to0$.

**Convergencia, acotación y monotonía.** Toda sucesión convergente es acotada. La recíproca es falsa: $a_n=(-1)^n$ está acotada y no converge. Lo que sí vale es el **teorema de convergencia monótona**: toda sucesión monótona y acotada converge. Es la herramienta principal para sucesiones definidas por recurrencia, porque permite asegurar que el límite existe y luego calcularlo.

**Límites de la forma $1^\infty$.** Se usa $\lim\left(1+\dfrac1n\right)^n=e$ o la técnica del logaritmo.

**Recurrencias.** Si $a_{n+1}=g(a_n)$ converge a $L$, entonces $L$ satisface $L=g(L)$. Para $\lim a_{n+1}=\lim a_n$ basta ver que $\{a_{n+1}\}$ es la misma sucesión desplazada un lugar.

### Ejemplos resueltos

**Límite con $1^\infty$.** Calcular $\lim\left(\dfrac{3n+1}{3n-5}\right)^n$.

Se escribe $\dfrac{3n+1}{3n-5}=1+\dfrac{6}{3n-5}$. El exponente que importa es $n\cdot\dfrac{6}{3n-5}\to2$, entonces el límite es $e^2$.

**Monotonía.** Probar que $a_n=\dfrac{2n}{n+1}$ es creciente.

Hay que probar que $a_n<a_{n+1}$, o sea $\dfrac{2n}{n+1}<\dfrac{2(n+1)}{n+2}$. Como los denominadores son positivos, se multiplica por $(n+1)(n+2)$ y queda $2n(n+2)<2(n+1)^2$, es decir $2n^2+4n<2n^2+4n+2$, que es siempre verdadero. Además $a_n<2$ para todo $n$, así que es acotada y por lo tanto converge. Su límite es $2$.

**Recurrencia.** Sea $a_1=1$, $a_{n+1}=3-\dfrac{1}{a_n}$. Mostrar que converge y hallar el límite.

Por inducción se verifica que $1\le a_n<3$ y que la sucesión es creciente: $a_2=2>a_1$, y si $a_n\le a_{n+1}$, entonces $\dfrac1{a_n}\ge\dfrac1{a_{n+1}}$ y $a_{n+1}\le a_{n+2}$. Al ser monótona y acotada, converge a un $L$ que satisface $L=3-\dfrac1L$, es decir $L^2-3L+1=0$, con raíces $\tfrac{3\pm\sqrt5}{2}$. Como $a_n\ge1$, el límite es $L=\dfrac{3+\sqrt5}{2}\approx2{,}62$.

**Intercalación.** $0\le\dfrac{\sin^2n}{4^n}\le\dfrac1{4^n}\to0$, luego $\dfrac{\sin^2n}{4^n}\to0$.

> **Ojo:** una sucesión acotada no tiene por qué converger. Para concluir convergencia hay que sumar la monotonía.

> **Importante:** en una recurrencia, resolver $L=g(L)$ es legítimo solo después de probar que el límite existe. Si no, se pueden obtener "límites" de sucesiones que divergen.

## Series numéricas

Una serie es la suma de infinitos términos de una sucesión. Aunque sumar infinitos números parezca imposible, a veces el resultado es finito: $\tfrac12+\tfrac14+\tfrac18+\cdots=1$. La pregunta central es cuándo una serie converge y, cuando lo hace, cuánto vale o cómo estimar su suma.

### Conceptos clave

- **Serie**: expresión $\sum_{n=1}^{\infty}a_n$. Su **sucesión de sumas parciales** es $S_N=a_1+a_2+\cdots+a_N$.
- **Convergencia**: la serie converge a $S$ si $\lim_{N\to\infty}S_N=S$. Si el límite no existe o es infinito, diverge.
- **Serie geométrica**: $\sum_{n=0}^\infty ar^n$.
- **Serie armónica**: $\sum\dfrac1n$, que diverge. **$p$-serie**: $\sum\dfrac1{n^p}$.
- **Serie alternada**: sus términos alternan signo.
- **Convergencia absoluta**: $\sum|a_n|$ converge. **Convergencia condicional**: $\sum a_n$ converge pero $\sum|a_n|$ no.
- **Resto** de orden $N$: $R_N=S-S_N$.

### Desarrollo teórico

**Criterio necesario.** Si $\sum a_n$ converge, entonces $a_n\to0$. Equivalentemente, si $a_n\not\to0$ la serie diverge. La recíproca es falsa: la serie armónica tiene $\frac1n\to0$ y diverge.

**Serie geométrica.** La suma parcial es $S_N=a\dfrac{1-r^{N}}{1-r}$ (empezando en $n=0$ y con $N$ términos). Converge si $|r|<1$, con suma $\dfrac{a}{1-r}$, y diverge si $|r|\ge1$. Esto permite pasar un decimal periódico a fracción: $0{,}\overline2=\sum_{n=1}^\infty\dfrac{2}{10}\left(\dfrac1{10}\right)^{n-1}=\dfrac29$.

**Series telescópicas.** Cuando los términos se cancelan de a pares, se calcula $S_N$ en forma cerrada. Por ejemplo, $\sum\left(\dfrac1n-\dfrac1{n+1}\right)$ tiene $S_N=1-\dfrac1{N+1}\to1$.

**Criterios para series de términos positivos.**

| Criterio | Enunciado | Cuándo conviene |
|---|---|---|
| Integral | Si $f$ es positiva, continua y decreciente, $\sum f(n)$ y $\int_1^\infty f$ convergen o divergen juntas | Términos fáciles de integrar |
| $p$-serie | $\sum\frac1{n^p}$ converge si $p>1$ | Comparaciones |
| Comparación | Si $0\le a_n\le b_n$ y $\sum b_n$ converge, $\sum a_n$ converge; si $\sum a_n$ diverge, $\sum b_n$ diverge | Término parecido a otro conocido |
| Comparación al límite | Si $\lim\frac{a_n}{b_n}=L$ con $0<L<\infty$, ambas series tienen el mismo comportamiento | Cocientes de polinomios o raíces |
| Cociente | Si $\lim\frac{a_{n+1}}{a_n}=\ell$: converge si $\ell<1$, diverge si $\ell>1$, no decide si $\ell=1$ | Factoriales y exponenciales |
| Raíz | Si $\lim\sqrt[n]{a_n}=\ell$: mismas conclusiones que el cociente | Términos elevados a la $n$ |

**Series alternadas.** Criterio de Leibniz: si $b_n>0$ es decreciente y $b_n\to0$, entonces $\sum(-1)^nb_n$ converge. El error al truncar en $N$ términos cumple $|R_N|\le b_{N+1}$.

**Convergencia absoluta.** Si $\sum|a_n|$ converge, entonces $\sum a_n$ converge. Por eso, ante una serie con signos variables, conviene estudiar primero la absoluta. Una serie que converge solo condicionalmente es sensible al orden de los términos.

**Estimación del resto.** Para la serie de términos positivos que se analiza con el criterio de la integral, $R_N\le\int_N^\infty f(x)\,dx$. Esto permite hallar cuántos términos se necesitan para una precisión dada.

### Ejemplos resueltos

**Comparación al límite.** Estudiar $\sum\dfrac{1}{3n^2-2n+1}$.

Se compara con $b_n=\dfrac1{n^2}$: $\lim\dfrac{a_n}{b_n}=\dfrac13$, finito y positivo. Como $\sum\frac1{n^2}$ converge ($p=2$), la serie converge.

**Cociente.** Estudiar $\sum\dfrac{n\,5^n}{n!}$.

$\dfrac{a_{n+1}}{a_n}=\dfrac{(n+1)5^{n+1}\,n!}{(n+1)!\,n\,5^n}=\dfrac{5}{n}\cdot\dfrac{n+1}{n}\cdot\dfrac{n}{n+1}\cdot\dfrac{n+1}{n+1}$. Simplificando, el cociente es $\dfrac{5(n+1)}{n(n+1)}\cdot(n+1)\cdot\dfrac{1}{(n+1)}=\dfrac{5(n+1)}{n(n+1)}=\dfrac5n\to0<1$. La serie converge.

**Absoluta y condicional.** $\sum\dfrac{(-1)^{n+1}}{n^2}$ converge absolutamente, porque $\sum\frac1{n^2}$ converge. En cambio $\sum\dfrac{(-1)^n}{n}$ converge por Leibniz ($\frac1n$ decrece a $0$), pero $\sum\frac1n$ diverge: la convergencia es condicional.

**Estimación del resto.** ¿Cuántos términos de $\sum\dfrac1{n^4}$ hacen falta para $R_N\le0{,}001$?

$R_N\le\int_N^\infty x^{-4}dx=\dfrac{1}{3N^3}$. Se pide $\dfrac1{3N^3}\le0{,}001$, o sea $N^3\ge333{,}3$, entonces $N\ge7$.

**Telescópica.** $\sum_{n=1}^\infty\ln\dfrac{n}{n+1}$: $S_N=\ln\dfrac1{N+1}\to-\infty$. Diverge, aunque el término general tiende a $0$.

> **Ojo:** $a_n\to0$ no implica que $\sum a_n$ converja. Es un criterio necesario, no suficiente.

> **Ojo:** cuando el criterio del cociente o de la raíz da $\ell=1$, no decide. Hay que usar otro criterio, como el de la integral o el de comparación.

> **Tip:** con factoriales o exponenciales, usá cociente. Con términos elevados a la $n$, usá raíz. Con cocientes de polinomios, usá comparación al límite con una $p$-serie.

## Series de potencias

Una serie de potencias es como un polinomio con infinitos términos: $\sum c_n(x-a)^n$. Para cada valor de $x$ es una serie numérica que puede converger o no, así que define una función sobre el conjunto de valores de convergencia. Esta idea permite representar funciones como $e^x$, $\sin x$ o $\ln(1+x)$ como "polinomios infinitos", lo que extiende el polinomio de Taylor.

<!-- REVISAR: el apunte de series de potencias de la cátedra no se consultó; verificar el alcance exacto (series de Taylor, derivación e integración término a término) -->

### Conceptos clave

- **Serie de potencias centrada en $a$**: $\sum_{n=0}^\infty c_n(x-a)^n$.
- **Radio de convergencia** $R$: número (o $\infty$) tal que la serie converge para $|x-a|<R$ y diverge para $|x-a|>R$.
- **Intervalo de convergencia**: conjunto de valores de $x$ donde la serie converge. Los extremos $a\pm R$ se estudian aparte.
- **Serie de Taylor** de $f$ en $a$: $\sum_{n=0}^\infty\dfrac{f^{(n)}(a)}{n!}(x-a)^n$. Si $a=0$ se llama **serie de Maclaurin**.

### Desarrollo teórico

**Cálculo del radio.** Se aplica el criterio del cociente (o de la raíz) a $|c_n(x-a)^n|$. Si $\lim\left|\dfrac{c_{n+1}}{c_n}\right|=\ell$, entonces $R=\dfrac1\ell$ (con $R=\infty$ si $\ell=0$ y $R=0$ si $\ell=\infty$). En los extremos el criterio no decide, y hay que reemplazar el valor de $x$ y analizar la serie numérica resultante.

**Propiedades.** Dentro del intervalo abierto de convergencia, la suma es una función derivable e integrable, y se puede derivar e integrar término a término con el mismo radio de convergencia. Esta propiedad permite obtener nuevos desarrollos a partir de otros. Por ejemplo, partiendo de $\dfrac1{1-x}=\sum x^n$ (para $|x|<1$) e integrando se obtiene $-\ln(1-x)=\sum\dfrac{x^{n+1}}{n+1}$.

**Series de Taylor y convergencia a la función.** La serie de Taylor de $f$ converge a $f(x)$ si y solo si el resto $R_n(x)\to0$. Para $e^x$, $\sin x$ y $\cos x$ esto ocurre en todo $\mathbb{R}$. Los desarrollos usuales son:

$$e^x=\sum_{n=0}^\infty\frac{x^n}{n!},\qquad \sin x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n+1}}{(2n+1)!},\qquad \cos x=\sum_{n=0}^\infty\frac{(-1)^nx^{2n}}{(2n)!},$$

$$\frac1{1-x}=\sum_{n=0}^\infty x^n\ (|x|<1),\qquad \ln(1+x)=\sum_{n=1}^\infty\frac{(-1)^{n+1}x^n}{n}\ (-1<x\le1).$$

**Aplicaciones.** Con la serie se aproximan integrales sin primitiva elemental y se calculan límites. Además, si $\sum c_n x^n$ converge para $|x|<R$, la suma de la serie se puede manipular como una función ordinaria dentro de ese intervalo.

### Ejemplo resuelto

**Intervalo de convergencia.** Hallar el intervalo de convergencia de $\displaystyle\sum_{n=1}^\infty\frac{(x-3)^n}{n\,2^n}$.

Se aplica el cociente a $a_n=\dfrac{(x-3)^n}{n2^n}$:
$$\left|\frac{a_{n+1}}{a_n}\right|=\frac{|x-3|}{2}\cdot\frac{n}{n+1}\to\frac{|x-3|}{2}.$$
La serie converge si $|x-3|<2$, es decir $R=2$ y el intervalo abierto es $(1,5)$. Se estudian los extremos:

- En $x=5$: la serie es $\sum\dfrac1n$, armónica, que diverge.
- En $x=1$: la serie es $\sum\dfrac{(-1)^n}{n}$, alternada con $\frac1n\downarrow0$, que converge por Leibniz.

El intervalo de convergencia es $[1,5)$.

**Nuevo desarrollo por derivación.** Como $\dfrac1{1-x}=\sum x^n$ para $|x|<1$, derivando término a término:
$$\frac{1}{(1-x)^2}=\sum_{n=1}^\infty nx^{n-1},\qquad |x|<1.$$

> **Ojo:** el radio de convergencia no dice qué pasa en los extremos. Cada extremo se debe analizar como una serie numérica aparte.

> **Importante:** que la serie de Taylor de $f$ converja no significa que converja a $f$. Hay que verificar que el resto $R_n(x)$ tiende a cero.

## Resumen para repasar

- Los extremos relativos solo pueden ocurrir en números críticos, pero no todo número crítico es extremo. El criterio de la derivada primera detecta cambios de signo y el de la segunda falla cuando $f''(x_0)=0$.
- En un intervalo cerrado, una función continua alcanza sus extremos absolutos en números críticos o en los bordes: se comparan todos esos valores.
- Rolle, Lagrange y Cauchy exigen continuidad en el cerrado y derivabilidad en el abierto. De Lagrange se deduce que $f'=0$ implica constante y que el signo de $f'$ determina la monotonía.
- L'Hôpital se aplica solo a $\frac00$ y $\frac\infty\infty$ y requiere que exista el límite del cociente de derivadas. Las demás indeterminadas se reducen a esas con logaritmos o álgebra.
- La aproximación lineal es el polinomio de Taylor de orden 1. El resto de Lagrange da una cota de error que depende de la derivada de orden $n+1$ y de la distancia al centro.
- La regla de Barrow requiere un integrando continuo en $[a,b]$. Si hay una singularidad o un extremo infinito, la integral es impropia y se define con límites. Para $\int_1^\infty x^{-p}$ la convergencia es $p>1$, y para $\int_0^1 x^{-p}$ es $p<1$.
- Longitud, volumen y superficie de revolución se obtienen sumando elementos infinitesimales. El método de discos y el de capas dan el mismo volumen, y conviene el que evite partir la región.
- Las ecuaciones de primer orden se clasifican por su forma: separables, lineales (factor integrante), Bernoulli (sustitución $z=y^{1-n}$) y homogéneas (sustitución $y=vx$). En las de segundo orden con coeficientes constantes, el tipo de raíces de la ecuación característica determina la solución.
- Una sucesión monótona y acotada converge, pero una acotada no necesariamente. Para una serie, $a_n\to0$ es condición necesaria y no suficiente; la serie armónica es el contraejemplo.
- El criterio del cociente o de la raíz con $\ell=1$ no decide. En una serie de potencias el radio sale del cociente, y los extremos del intervalo se analizan siempre aparte.

## Preguntas de autoevaluación

1. Sea $f$ continua en $[a,b]$ con un número crítico $x_0$ en $(a,b)$. Explicá por qué no se puede asegurar que $f(x_0)$ sea un extremo relativo, dá un ejemplo y describí qué criterio usarías para decidir.
2. Enunciá el teorema del valor medio y explicá qué falla en la conclusión para $f(x)=|x-1|$ en $[0,3]$. Luego usalo para demostrar que si $f'(x)>0$ en un intervalo, entonces $f$ es creciente.
3. Estimá $\sqrt[3]{26{,}5}$ con una aproximación lineal bien elegida, indicá si es por exceso o por defecto y justificá con la concavidad. ¿Cómo acotarías el error?
4. Decidí si la integral $\displaystyle\int_{-1}^{1}\frac{dx}{\sqrt{|x|}}$ converge y calculala en caso afirmativo. Explicá por qué, si el integrando fuera $\dfrac{1}{x^2}$, el cálculo directo con la regla de Barrow sería incorrecto.
5. Calculá el volumen del sólido que se genera al girar alrededor del eje $y$ la región limitada por $y=x^2$, $y=0$ y $x=2$, usando dos métodos distintos, y verificá que coincidan.
6. Resolvé $y'+y=e^{-x}$ con $y(0)=1$ e indicá a qué tipo de ecuación pertenece. ¿Qué cambia en la solución si se omite la condición inicial?
7. Sea $a_1=2$, $a_{n+1}=\dfrac{1}{3-a_n}$. Demostrá que la sucesión converge y calculá su límite. ¿Por qué no alcanza con resolver $L=\frac{1}{3-L}$?
8. Determiná el intervalo de convergencia de $\displaystyle\sum_{n=1}^\infty\frac{(x+1)^n}{n^2}$ y clasificá la convergencia en cada extremo (absoluta, condicional o divergente).