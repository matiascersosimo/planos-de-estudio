---
nombre: "Elementos de Matemática"
code: "01374"
resumen: "Manual de fundamentos matemáticos: lógica, conjuntos, trigonometría, vectores, funciones, límites, derivadas y complejos, con problemas y formularios."
---

## Cómo estudiar Elementos de Matemática

Esta materia construye el lenguaje y las herramientas que se usan después en Álgebra, Análisis, Física y programación. Su dificultad no está solamente en operar: también hay que decidir qué afirma una expresión, en qué conjunto tiene sentido y qué transformaciones conservan sus soluciones. Saber factorizar y olvidar una restricción de dominio puede llevar a una respuesta falsa; conocer una tabla de derivadas sin comprender un límite tampoco permite resolver todos los problemas.

El recorrido sigue las ocho unidades del programa del aula **Elementos de Matemática, primer cuatrimestre de 2025**, que es la edición identificada y consultada en la cuenta proporcionada. No se presenta como un programa de 2026. Antes de las unidades hay dos capítulos de preparación basados en la guía 0; al final hay dos talleres integradores. Las unidades oficiales son lógica, conjuntos, trigonometría, vectores, funciones reales, límite y continuidad, derivadas y números complejos.

Se obtuvieron 39 PDF: programa e información general, cronograma, revisión, integración, ocho apuntes teóricos, prácticas y solucionarios, más materiales complementarios de funciones y límite trigonométrico. Se contrastaron el programa, consignas de las prácticas y secciones teóricas relevantes, con inspección visual de páginas que contienen diagramas o notación difícil de extraer. No se afirma una auditoría completa de cada página, video o libro del aula. El contenido explicado es un desarrollo original; no una copia de las respuestas breves de los solucionarios.

### Tres niveles que conviene trabajar juntos

**Comprender** significa poder explicar la definición y producir un ejemplo y un caso que no la cumpla. **Calcular** significa aplicar operaciones válidas conservando condiciones. **Justificar** significa explicar por qué la conclusión se sigue de las hipótesis. Cada capítulo combina esos niveles con ejemplos, práctica y una hoja de relaciones. Cada unidad y la materia completa tienen además formularios de consulta.

Un formulario no es una lista de permisos universales. Por ejemplo, cancelar x−2 en una fracción exige x≠2; una derivada de seno escrita como coseno presupone radianes; el teorema de Bolzano necesita continuidad. Las condiciones escritas junto a cada relación evitan que una fórmula correcta se use donde no corresponde.

### Un procedimiento de estudio activo

1. Leé la definición y escribila sin mirar, conservando sus cuantificadores y restricciones.
2. Resolvé el ejemplo tapando el paso siguiente y anticipando qué operación sería válida.
3. Trabajá la práctica sin consultar respuestas. Si hay un error, identificá el primer paso que no se justifica.
4. Volvé a resolver una variante: cambiá el dominio, un signo, una rama o un parámetro.
5. Contrastá con las guías del aula. El manual explica herramientas; las guías permiten comprobar transferencia y variedad.

No es necesario memorizar cada ejemplo numérico. Sí poder distinguir una igualdad entre números, una identidad, una ecuación, una implicación y una definición: sus usos son diferentes.

### Convenciones

Usamos ℕ={1,2,3,…}; si se incluye cero se escribe ℕ0. Los enteros, racionales, reales y complejos se indican ℤ, ℚ, ℝ y ℂ. En conjuntos, A⊆B admite igualdad y A⊊B significa inclusión estricta. Algunas fuentes usan ⊂ con otra convención; hay que aclararla. Un intervalo [a,b] incluye extremos y (a,b) los excluye. El infinito nunca se trata como extremo real incluido.

En trigonometría y cálculo se utilizan radianes salvo indicación explícita de grados. Para el argumento principal de un complejo no nulo se toma θ∈[0,2π), coherente con el material consultado; otros textos usan (−π,π]. El cero no tiene argumento determinado. Las raíces cuadradas de reales no negativos denotan la raíz no negativa.

### Qué significa completar este recorrido

El manual desarrolla los temas del programa y ofrece medios para practicarlos. La suficiencia para una evaluación se comprueba resolviendo problemas nuevos y atendiendo a los criterios de la cátedra; no se demuestra contando páginas. La revisión académica externa sigue pendiente. La matriz final identifica dónde se aborda cada unidad y qué materiales se consultaron.


## Formulario general de Elementos de Matemática

Esta consulta reúne las relaciones de los capítulos. Las condiciones forman parte de cada fórmula; para aprender su derivación y su uso, volvé al desarrollo correspondiente. Los formularios por unidad se encuentran al terminar cada bloque.

### Preparación · Números y operaciones (capítulo 0)

| Relación | Significado y condiciones |
| --- | --- |
| $\frac ab+\frac cd=\frac{ad+bc}{bd}$ | a,b,c,d reales; b y d distintos de cero. Para multiplicar se multiplican numeradores y denominadores. |
| $a^ma^n=a^{m+n},\quad (a^m)^n=a^{mn},\quad a^{-n}=1/a^n$ | Exponentes enteros; exigir a≠0 si aparece una potencia negativa o cero. No extender sin condiciones a exponentes reales. |
| $\sqrt{a^2}=\lvert a\rvert,\quad\sqrt{ab}=\sqrt a\sqrt b$ | La segunda igualdad se usa para a,b≥0 en los reales; la raíz cuadrada es no negativa. |
| $(1+p)(1-q)$ | Factor final de dos cambios sucesivos: aumento p y descenso q, con porcentajes escritos como fracciones decimales. |

### Preparación · Álgebra preparatoria (capítulo 1)

| Relación | Significado y condiciones |
| --- | --- |
| $(a\pm b)^2=a^2\pm2ab+b^2,\quad a^2-b^2=(a-b)(a+b)$ | Identidades reales; distinguir factores de sumandos antes de cancelar. |
| $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ | Soluciones reales de ax²+bx+c=0, a≠0, si Δ=b²−4ac≥0. En complejos se amplía el caso Δ<0. |
| $P(r)=0\iff (x-r)\text{ divide a }P(x)$ | Teorema del factor para polinomios; registrar multiplicidades y comprobar el resto. |
| $\log_a x=y\iff a^y=x$ | Base a>0,a≠1 y argumento x>0. Comprobar esas condiciones en toda solución candidata. |

### Unidad 1 · Proposiciones y tablas (capítulo 2)

| Relación | Significado y condiciones |
| --- | --- |
| $p\Rightarrow q\equiv\neg p\lor q$ | La implicación solo es falsa si p es verdadera y q falsa. El bicondicional es verdadero cuando tienen igual valor. |
| $p\Leftrightarrow q\equiv(p\Rightarrow q)\land(q\Rightarrow p)$ | Expresa las dos direcciones; una implicación sola no basta. |
| $2^n$ | Cantidad de filas de una tabla con n proposiciones simples independientes. |
| $(p\Rightarrow q)\land\neg q\Rightarrow\neg p$ | Modus tollens; la inferencia es válida para toda asignación de verdad, no autoriza afirmar el antecedente desde q. |

### Unidad 1 · Equivalencias y cuantificadores (capítulo 3)

| Relación | Significado y condiciones |
| --- | --- |
| $\neg(p\land q)\equiv\neg p\lor\neg q,\quad\neg(p\lor q)\equiv\neg p\land\neg q$ | Leyes de De Morgan; las negaciones afectan a cada proposición. |
| $p\Rightarrow q\equiv\neg q\Rightarrow\neg p$ | Contrarrecíproca equivalente; la recíproca q⇒p no lo es en general. |
| $\neg(\forall x\in A\ P(x))\equiv\exists x\in A\ \neg P(x)$ | La negación conserva el universo A y cambia el cuantificador. |
| $\neg(\exists x\in A\ P(x))\equiv\forall x\in A\ \neg P(x)$ | Con cuantificadores anidados, negar de afuera hacia adentro sin invertir el orden. |
| $p\land(q\lor r)\equiv(p\land q)\lor(p\land r)$ | Distributividad; también vale la dual intercambiando ∧ y ∨. Conservar paréntesis. |

### Unidad 2 · Operaciones de conjuntos (capítulo 4)

| Relación | Significado y condiciones |
| --- | --- |
| $A\subseteq B\iff\forall x\ (x\in A\Rightarrow x\in B)$ | Inclusión admite igualdad; pertenencia relaciona un elemento con un conjunto y es otra operación. |
| $A\setminus B=A\cap B^c$ | Complemento respecto de un universo U declarado; diferencia no es conmutativa. |
| $(A\cup B)^c=A^c\cap B^c,\quad(A\cap B)^c=A^c\cup B^c$ | De Morgan para conjuntos del mismo universo. |
| $A\triangle B=(A\setminus B)\cup(B\setminus A)$ | Diferencia simétrica: elementos que pertenecen exactamente a uno de los conjuntos. |
| $A\times B=\{(a,b):a\in A,\ b\in B\}$ | Producto cartesiano de pares ordenados; A×B y B×A pueden diferir. Si finitos, su cardinal es el producto de cardinales. |

### Unidad 2 · Intervalos e inecuaciones (capítulo 5)

| Relación | Significado y condiciones |
| --- | --- |
| $\lvert x-a\rvert<r\iff a-r<x<a+r$ | r>0; entorno abierto de centro a y radio r. Para entorno reducido agregar x≠a. |
| $\lvert u\rvert\le r\iff-r\le u\le r$ | r≥0; para &#124;u&#124;≥r se usa u≤−r o u≥r. Si r<0, analizar directamente la imposibilidad o trivialidad correspondiente. |
| $a<b,\ c<0\ \Longrightarrow\ ac>bc$ | Multiplicar o dividir una desigualdad por un negativo invierte su sentido. |
| $\frac{P(x)}{Q(x)}\ge0:\quad Q(x)\ne0$ | Estudiar signos en intervalos separados por ceros de P y Q; incluir ceros del numerador si el denominador no se anula. |

### Unidad 3 · Ángulos y triángulos (capítulo 6)

| Relación | Significado y condiciones |
| --- | --- |
| $\theta_{\rm rad}=\frac\pi{180}\theta_{\rm grados},\quad s=R\theta_{\rm rad}$ | s longitud de arco, R radio en la misma unidad de longitud; conversión inversa multiplicando por 180/π. |
| $\sin\theta=\frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad\cos\theta=\frac{\text{cateto adyacente}}{\text{hipotenusa}}$ | Triángulo rectángulo y ángulo agudo; tanθ=opuesto/adyacente. |
| $\tan\theta=\frac{\sin\theta}{\cos\theta},\quad\sin^2\theta+\cos^2\theta=1$ | Tangente requiere cosθ≠0; la identidad pitagórica vale para todo ángulo real. |
| $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C},\quad c^2=a^2+b^2-2ab\cos C$ | Triángulo no degenerado; lados a,b,c opuestos a A,B,C. Leyes suplementarias para triángulos no rectángulos. |

### Unidad 3 · Identidades y ecuaciones (capítulo 7)

| Relación | Significado y condiciones |
| --- | --- |
| $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$ | Ángulos en una misma unidad; no distribuir seno sobre una suma. |
| $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$ | El signo del término con senos se invierte respecto del de la suma angular. |
| $\sin2x=2\sin x\cos x,\quad\cos2x=2\cos^2x-1=1-2\sin^2x$ | Identidades para todo x real. |
| $\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{o}\ x=\pi-\alpha+2k\pi$ | k entero; intersectar con el intervalo pedido y verificar restricciones originales. |
| $\cos x=\cos\alpha\iff x=\pm\alpha+2k\pi$ | k entero. Para tanx=tanα: x=α+kπ, con ambas tangentes definidas. |

### Unidad 4 · Operaciones vectoriales (capítulo 8)

| Relación | Significado y condiciones |
| --- | --- |
| $\overrightarrow{AB}=B-A,\quad\lVert v\rVert=\sqrt{v_1^2+v_2^2+v_3^2}$ | Coordenadas cartesianas ortonormales; en el plano omitir componente tercera. Distancia AB=norma de B−A. |
| $\widehat v=\frac v{\lVert v\rVert},\quad v\ne0$ | Versor de igual sentido; su opuesto también es paralelo. Para módulo L>0, usar ±L v/‖v‖. |
| $v=\lambda u$ | Paralelismo de vectores no nulos; resolver todas las componentes y evitar dividir por componentes cero. |
| $r=A+t(B-A)$ | Recta por A y B distintos, t real; segmento si 0≤t≤1. Un mismo t debe satisfacer todas las componentes. |

### Unidad 4 · Productos y geometría (capítulo 9)

| Relación | Significado y condiciones |
| --- | --- |
| $u\cdot v=\sum_j u_jv_j=\lVert u\rVert\lVert v\rVert\cos\theta$ | θ∈[0,π] si u,v no nulos. Producto cero caracteriza perpendicularidad en ese caso. |
| $\operatorname{proy}_v u=\frac{u\cdot v}{\lVert v\rVert^2}v$ | v≠0. La componente escalar orientada es (u·v)/‖v‖; no confundirla con el vector proyección. |
| $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ | Solo en ℝ³ con orientación canónica; v×u=−u×v y el resultado es perpendicular a ambos. |
| $A_{\triangle}=\tfrac12\lVert AB\times AC\rVert$ | El doble es el área del paralelogramo; usar desplazamientos desde un mismo vértice. |
| $V=\lvert u\cdot(v\times w)\rvert$ | Volumen del paralelepípedo; tetraedro V/6. Mixto cero equivale a dependencia de los tres vectores. |

### Unidad 5 · Concepto y dominio (capítulo 10)

| Relación | Significado y condiciones |
| --- | --- |
| $\operatorname{Im}f=\{f(x):x\in D_f\}$ | Imagen efectiva, distinta del codominio declarado si no hay sobreyectividad. |
| $\sqrt{u(x)}:\ u(x)\ge0;\quad\ln u(x):\ u(x)>0$ | Raíz cuadrada real; si la raíz está en un denominador exigir u>0. |
| $\frac{f(x)}{g(x)}:\quad x\in D_f\cap D_g,\ g(x)\ne0$ | Intersecar todas las restricciones de la expresión original; una cancelación no restituye puntos excluidos. |
| $f(-x)=f(x)\quad\text{o}\quad f(-x)=-f(x)$ | Paridad o imparidad respectivamente, solo sobre un dominio simétrico respecto de cero. |
| $x_1<x_2\Rightarrow f(x_1)<f(x_2)$ | Definición de estrictamente creciente en un intervalo; decreciente si la salida invierte la desigualdad. |

### Unidad 5 · Familias y transformaciones (capítulo 11)

| Relación | Significado y condiciones |
| --- | --- |
| $m=\frac{y_2-y_1}{x_2-x_1},\quad y-y_1=m(x-x_1)$ | Recta no vertical, x2≠x1; perpendiculares no verticales cumplen m1m2=−1. |
| $ax^2+bx+c=a(x-h)^2+k,\quad h=-\frac b{2a},\ k=f(h)$ | a≠0. Vértice (h,k), imagen [k,∞) si a>0 y (−∞,k] si a<0. |
| $g(x)=a f(b(x-h))+k$ | a,b no nulos; un punto (u,f(u)) se transforma en (h+u/b,a f(u)+k). Registrar dominio transformado. |
| $\lvert x\rvert=\begin{cases}x&x\ge0\\-x&x<0\end{cases}$ | El módulo admite tratamiento por tramos; no se elimina sin examinar signo. |

### Unidad 5 · Exponenciales y trigonométricas (capítulo 12)

| Relación | Significado y condiciones |
| --- | --- |
| $\log_a x=\frac{\ln x}{\ln a}$ | a>0,a≠1,x>0; exponencial y logaritmo crecen si a>1 y decrecen si 0<a<1. |
| $\ln(uv)=\ln u+\ln v,\quad\ln(u/v)=\ln u-\ln v$ | u,v positivos; ln(u+v) no se separa. ln(x²)=2ln&#124;x&#124; para x≠0. |
| $g(x)=A\sin(B(x-h))+D:\quad T=\frac{2\pi}{\lvert B\rvert}$ | A,B no nulos; amplitud &#124;A&#124;, imagen [D−&#124;A&#124;,D+&#124;A&#124;]. Lo mismo para coseno. |
| $D_{\tan}=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}$ | Tangente tiene imagen ℝ y período π; seno y coseno tienen imagen [−1,1] y período 2π. |
| $\arcsin:[-1,1]\to[-\pi/2,\pi/2],\quad\arccos:[-1,1]\to[0,\pi]$ | Ramas principales; arctan:ℝ→(−π/2,π/2). Una inversa principal no enumera todas las soluciones trigonométricas. |

### Unidad 5 · Composición e inversas (capítulo 13)

| Relación | Significado y condiciones |
| --- | --- |
| $D_{f\circ g}=\{x\in D_g:g(x)\in D_f\}$ | Aplicar primero g y después f; composición generalmente no conmutativa. |
| $f^{-1}\circ f=\operatorname{id}_{D_f},\quad f\circ f^{-1}=\operatorname{id}_{\operatorname{Im}f}$ | Para una biyección entre dominio e imagen; dominio de la inversa=imagen original. No confundir inversa con recíproco. |
| $f(x_1)=f(x_2)\Rightarrow x_1=x_2$ | Inyectividad. Sobreyectividad: imagen=codominio declarado; biyectividad exige ambas. |

### Unidad 6 · Definición de límite (capítulo 14)

| Relación | Significado y condiciones |
| --- | --- |
| $\forall\varepsilon>0\ \exists\delta>0:\ 0<\lvert x-a\rvert<\delta\Rightarrow\lvert f(x)-L\rvert<\varepsilon$ | Definición de límite finito, para x del dominio y a punto de acumulación. No exige f(a)=L. |
| $\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L$ | En una aproximación bilateral con ambos lados disponibles; límites laterales diferentes impiden el bilateral. |
| $\lim(f/g)=L/M\quad(M\ne0)$ | Si f→L,g→M reales. Suma y producto pasan al límite sin la condición M≠0. 0/0 es indeterminación. |
| $g\le f\le h,\quad g\to L,\ h\to L\Rightarrow f\to L$ | Teorema del encaje; las desigualdades deben valer en un entorno reducido relevante. |

### Unidad 6 · Técnicas y asíntotas (capítulo 15)

| Relación | Significado y condiciones |
| --- | --- |
| $\lim_{t\to0}\frac{\sin t}t=1,\quad\lim_{t\to0}\frac{1-\cos t}{t^2}=\frac12$ | Argumento en radianes; ajustar factores al cambiar t por una función que tienda a cero. |
| $\lim_{u\to0}\frac{\ln(1+u)}u=1,\quad\lim_{u\to0}\frac{e^u-1}u=1$ | En el primero u>−1; se usan valores no nulos del entorno para las razones. |
| $a(x)^{b(x)}=e^{b(x)\ln a(x)}$ | Base positiva; si el exponente transformado tiende a L real, el límite es e^L. La forma 1^∞ no decide sola. |
| $\sqrt{x^2}=\lvert x\rvert$ | Al extraer potencias en límites en −∞ conservar el signo mediante el valor absoluto. |
| $\lim_{x\to\pm\infty}f(x)=L\Rightarrow y=L\text{ es asíntota horizontal}$ | Analizar cada infinito por separado. Una asíntota vertical x=a requiere al menos un lateral infinito. |
| $m=\lim\frac{f(x)}x,\quad b=\lim[f(x)-mx]$ | Asíntota oblicua y=mx+b si m,b son reales finitos y m≠0; límites en un mismo infinito. |

### Unidad 6 · Continuidad y existencia (capítulo 16)

| Relación | Significado y condiciones |
| --- | --- |
| $f\text{ continua en }a\iff\lim_{x\to a}f(x)=f(a)$ | Debe existir f(a) y el límite pertinente; en extremos usar continuidad lateral relativa al dominio. |
| $f\in C([a,b]),\quad f(a)f(b)<0\Rightarrow\exists c\in(a,b):f(c)=0$ | Bolzano: al menos una raíz; no asegura unicidad ni un número impar de ceros distintos. |
| $f\in C([a,b]),\quad k\text{ entre }f(a),f(b)\Rightarrow\exists c\in[a,b]:f(c)=k$ | Teorema de valores intermedios; comprobar continuidad en todo el intervalo. |
| $f\in C([a,b])\Rightarrow f\text{ alcanza máximo y mínimo}$ | Weierstrass para intervalo real cerrado y acotado; no ubica por sí solo los extremos. |
| $\ell_n=(b-a)/2^n$ | Longitud del intervalo tras n bisecciones; el punto medio tiene error a una raíz contenida ≤ℓn/2. |

### Unidad 7 · Definición de derivada (capítulo 17)

| Relación | Significado y condiciones |
| --- | --- |
| $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h$ | Derivada real finita si existe el límite; en puntos interiores bilateral. Derivada lateral debe identificarse. |
| $y-f(a)=f'(a)(x-a)$ | Tangente para derivada finita. Normal: pendiente −1/f′(a) si f′(a)≠0; si es cero, normal vertical x=a. |
| $f\text{ derivable en }a\Rightarrow f\text{ continua en }a$ | La recíproca falla; &#124;x&#124; en cero es continua sin derivada. |
| $f(a+h)\approx f(a)+f'(a)h$ | Aproximación local para h pequeño; no es igualdad ni cota de error automática. |

### Unidad 7 · Reglas de derivación (capítulo 18)

| Relación | Significado y condiciones |
| --- | --- |
| $(uv)'=u'v+uv',\quad(u/v)'=\frac{u'v-uv'}{v^2}$ | u,v derivables; en cociente v≠0. Sumas y factores constantes se derivan término a término. |
| $(f\circ g)'=(f'\circ g)g'$ | Regla de cadena; g derivable en x y f derivable en g(x). |
| $(x^r)'=rx^{r-1},\quad(e^u)'=e^uu',\quad(a^u)'=a^u\ln(a)u'$ | Para potencia real general usar x>0; enteros permiten dominios mayores. Base a>0 constante. |
| $(\ln u)'=u'/u,\quad(\ln\lvert u\rvert)'=u'/u$ | Primera requiere u>0; segunda u≠0. La fórmula derivada no amplía el dominio original. |
| $(\sin u)'=\cos(u)u',\quad(\cos u)'=-\sin(u)u',\quad(\tan u)'=u'/\cos^2u$ | Radianes; tangente requiere cosu≠0. |
| $(\cot u)'=-u'/\sin^2u,\quad(\sec u)'=\sec u\tan u\,u',\quad(\csc u)'=-\csc u\cot u\,u'$ | Respectivos denominadores no nulos. |
| $(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}},\quad(\arccos u)'=-\frac{u'}{\sqrt{1-u^2}},\quad(\arctan u)'=\frac{u'}{1+u^2}$ | Primeras dos con &#124;u&#124;<1; arctan sin esa restricción. u debe ser derivable. |
| $(x^x)'=x^x(1+\ln x)$ | x>0; derivar escribiendo x^x=e^(x ln x), no como potencia de exponente constante. |

### Unidad 7 · Orden superior e implícitas (capítulo 19)

| Relación | Significado y condiciones |
| --- | --- |
| $F_x+F_y y'=0,\quad y'=-F_x/F_y$ | Para una rama y(x) derivable de F(x,y)=0 con F diferenciable y Fy≠0; en ejemplos derivar cada y por cadena. |
| $x^2+y^2=R^2:\quad y'=-x/y,\quad y''=-R^2/y^3$ | R>0 y rama con y≠0; en y=0 las tangentes de la circunferencia son verticales. |
| $(\ln x)^{(n)}=(-1)^{n-1}(n-1)!/x^n$ | x>0 y n entero≥1; n indica orden de derivada, no potencia. |
| $f_-\to f(a),\ f_+\to f(a),\quad f'_-(a)=f'_+(a)\in\mathbb R$ | En uniones por tramos: comprobar continuidad y después pendientes laterales finitas usando el cociente incremental. |

### Unidad 8 · Complejos binómicos (capítulo 20)

| Relación | Significado y condiciones |
| --- | --- |
| $i^2=-1,\quad i^{n+4}=i^n$ | n entero; ciclo 1,i,−1,−i. z=a+bi tiene Re(z)=a e Im(z)=b, ambas reales. |
| $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ | a,b,c,d reales; suma y resta por componentes. |
| $\overline{a+bi}=a-bi,\quad\lvert z\rvert=\sqrt{a^2+b^2},\quad z\bar z=\lvert z\rvert^2$ | Conjugado: reflexión en eje real; módulo: distancia no negativa al origen. |
| $\frac zw=\frac{z\bar w}{\lvert w\rvert^2},\quad w\ne0$ | Multiplicar por conjugado del denominador. 1/z=z̄/&#124;z&#124;² para z≠0. |
| $\lvert z-z_0\rvert=r$ | Circunferencia de centro z0 y radio r>0; ≤r da disco cerrado. |

### Unidad 8 · Complejos polares (capítulo 21)

| Relación | Significado y condiciones |
| --- | --- |
| $z=r(\cos\theta+i\sin\theta),\quad r=\lvert z\rvert>0$ | a=r cosθ,b=r sinθ; argumentos θ+2kπ. Principal aquí [0,2π); cero sin argumento. |
| $\lvert zw\rvert=\lvert z\rvert\lvert w\rvert,\quad\arg(zw)\equiv\arg z+\arg w\pmod{2\pi}$ | z,w no nulos para argumentos. En cociente dividir módulos y restar argumentos. |
| $z^n=r^n[\cos(n\theta)+i\sin(n\theta)]$ | De Moivre para n entero; n negativo exige z≠0. Reducir ángulo si se pide principal. |
| $z_k=R^{1/n}\left[\cos\frac{\varphi+2k\pi}{n}+i\sin\frac{\varphi+2k\pi}{n}\right]$ | Ampliación: raíces de z^n=R(cosφ+i sinφ)≠0, n entero positivo, k=0,…,n−1. Para radicando cero solo z=0. |

## Capítulo 0 · Números, fracciones, potencias y radicales

### Elegir el conjunto en el que se trabaja

En ℕ no siempre se puede restar; en ℤ no siempre se puede dividir; en ℚ no toda ecuación cuadrática tiene raíz. Los reales incluyen racionales e irracionales, como √2. El hecho de que una calculadora muestre muchos decimales no prueba irracionalidad: 1/7 es racional aunque su desarrollo decimal sea infinito periódico.

Un número racional es a/b con a,b enteros y b≠0. Un decimal finito es racional porque puede escribirse con denominador potencia de diez. Un decimal periódico también lo es: si x=0.272727…, entonces 100x−x=27 y x=27/99=3/11. No todo decimal infinito es periódico y no todo irracional puede reconocerse mirando unos pocos dígitos.

La recta real permite comparar y medir distancias. Sumar la misma cantidad a ambos lados de una desigualdad conserva su sentido. Multiplicar por un número negativo lo invierte: de 2<5 resulta −6>−15. Esta regla será crucial al resolver inecuaciones. No se multiplica una desigualdad por una expresión de signo desconocido sin separar casos.

### Fracciones y prioridad de operaciones

Para sumar a/b y c/d usamos (ad+bc)/(bd), con b,d≠0. Para multiplicar, ac/(bd). Para dividir por c/d, el divisor debe ser no nulo: c≠0 además de d≠0; entonces se multiplica por d/c. Estas restricciones también valen cuando las letras representan expresiones en x.

Por ejemplo, $\frac34-\frac56+\frac13=(9-10+4)/12=1/4$. En $\frac{1/2+1/3}{2/5}$, primero el numerador es 5/6 y después se divide por 2/5: resultado 25/12. No se puede sumar numeradores y denominadores por separado: 1/2+1/3 no es 2/5.

Los paréntesis fijan estructura. −3² significa −(3²)=−9, mientras que (−3)²=9. Una fracción es un agrupamiento completo de numerador y denominador: escribir 1/(x+1) no equivale a 1/x+1. Antes de operar conviene reconstruir esos agrupamientos, especialmente al transcribir desde una calculadora o una imagen.

### Potencias enteras

Para a≠0, a⁰=1 y a⁻ⁿ=1/aⁿ. Se cumplen aᵐaⁿ=aᵐ⁺ⁿ y aᵐ/aⁿ=aᵐ⁻ⁿ cuando el denominador es no nulo. También (aᵐ)ⁿ=aᵐⁿ para exponentes enteros donde las expresiones están definidas, y (ab)ⁿ=aⁿbⁿ. No existe una regla (a+b)ⁿ=aⁿ+bⁿ en general.

**Ejemplo.** $(2^{-3}\cdot2^5)/2^{-1}=2^{(-3+5)-(-1)}=2^3=8$. El signo del exponente negativo no hace negativo el número: 2⁻³=1/8. Una base negativa sí exige mirar la paridad: (−2)⁴=16 y (−2)⁵=−32.

En notación científica, 0.00042=4.2·10⁻⁴ y 3200000=3.2·10⁶. Multiplicar y dividir separa coeficientes y potencias de diez. Para sumar, primero se llevan a una potencia común. Esta herramienta conserva valores exactos o la precisión declarada; no autoriza redondeos arbitrarios en pasos intermedios.

### Radicales y raíces principales

Para x real, √x está definida si x≥0 y es no negativa. Por eso √(x²)=|x|, no x sin condiciones. Con x=−3, el miembro izquierdo vale 3. Una raíz de índice par exige radicando no negativo; una de índice impar admite cualquier real y conserva el signo.

Para a,b≥0, √(ab)=√a√b. Esa propiedad no permite separar sumas: √(a+b) no es √a+√b en general. √72=√(36·2)=6√2 y 3√8−√18=6√2−3√2=3√2. Solo se suman directamente radicales semejantes después de simplificar.

Las potencias racionales requieren cuidado con dominio y convenciones. Para una base positiva a, aᵖ⁄ᑫ se define mediante raíces y conserva las leyes usuales. Con bases negativas y exponentes racionales, hay que fijar la fracción reducida y el índice impar apropiado; no se extienden mecánicamente todas las manipulaciones de exponentes reales. En cálculo, trabajar con bases positivas evita muchas ambigüedades.

### Racionalizar no es modificar el valor

Para $1/(\sqrt3+1)$ multiplicamos arriba y abajo por √3−1: resulta (√3−1)/2. Usamos (a+b)(a−b)=a²−b². El factor multiplicador debe ser no nulo para que dividir por sí mismo sea legítimo.

En $\frac{\sqrt{x+1}-1}{x}$, para x≠0 y x≥−1, el conjugado transforma la expresión en $1/(\sqrt{x+1}+1)$. La igualdad vale en ese dominio restringido. La nueva expresión también existe en x=0, pero la original no: simplificar no agrega ese punto automáticamente. Esta observación será central al calcular límites.

### Porcentajes y proporcionalidad

Un aumento de r% multiplica por 1+r/100; una disminución por 1−r/100. Aumentar 20% y después disminuir 20% produce un factor 1.2·0.8=0.96, una reducción neta de 4%. Los porcentajes se aplican a bases que pueden cambiar; no se suman como si compartieran siempre la misma referencia.

Si y=kx hay proporcionalidad directa y el cociente y/x es constante para x≠0. Si y=k/x, el producto xy es constante y x≠0. Una relación afín y=kx+b con b≠0 no es proporcionalidad directa, aunque su gráfica sea una recta. Distinguirlas ayuda a construir modelos de costos, escalas y conversiones.

### Práctica y respuestas

**P0.1.** Calculá 5/6−3/4+1/2. **P0.2.** Simplificá √50+2√8−√18. **P0.3.** Compará −2⁴ y (−2)⁴. **P0.4.** Racionalizá 2/(√5−1). **P0.5.** Un precio baja 10% y luego sube 10%: factor neto. **P0.6.** ¿Para qué x vale √(x²)=x?

**Respuestas justificadas.** P0.1: 7/12 al usar denominador 12. P0.2: (5+4−3)√2=6√2. P0.3: −16 y +16. P0.4: (√5+1)/2. P0.5: 0.9·1.1=0.99, reducción de 1%. P0.6: exactamente para x≥0. La guía 0 pide estas destrezas; si aparecen errores aquí conviene corregirlos antes de construir procedimientos más largos.


### Hoja de fórmulas del capítulo 0

| Relación | Significado y condiciones |
| --- | --- |
| $\frac ab+\frac cd=\frac{ad+bc}{bd}$ | a,b,c,d reales; b y d distintos de cero. Para multiplicar se multiplican numeradores y denominadores. |
| $a^ma^n=a^{m+n},\quad (a^m)^n=a^{mn},\quad a^{-n}=1/a^n$ | Exponentes enteros; exigir a≠0 si aparece una potencia negativa o cero. No extender sin condiciones a exponentes reales. |
| $\sqrt{a^2}=\lvert a\rvert,\quad\sqrt{ab}=\sqrt a\sqrt b$ | La segunda igualdad se usa para a,b≥0 en los reales; la raíz cuadrada es no negativa. |
| $(1+p)(1-q)$ | Factor final de dos cambios sucesivos: aumento p y descenso q, con porcentajes escritos como fracciones decimales. |

## Capítulo 1 · Álgebra, ecuaciones y logaritmos

### Expresiones, identidades y ecuaciones

Una expresión, como x²−4, no afirma nada por sí sola. Una identidad, x²−4=(x−2)(x+2), afirma igualdad para todo x del dominio. Una ecuación, x²−4=0, pide los valores que hacen verdadera una igualdad. Al resolverla buscamos un conjunto de soluciones y debemos controlar si cada transformación lo conserva.

Sumar lo mismo a ambos miembros o multiplicar por una constante no nula produce una ecuación equivalente. Elevar al cuadrado puede agregar soluciones; dividir por una expresión puede eliminarlas. Por eso no se escribe una cadena de equivalencias si solo se tiene una implicación.

**Ejemplo de control.** √(x+2)=x exige x≥0 porque la raíz es no negativa. Al cuadrar se obtiene x²−x−2=0, raíces 2 y −1. Solo 2 verifica la ecuación original. La raíz extra no es un «error de la fórmula cuadrática»: surgió de una transformación que perdió la condición de signo.

### Factorizar y usar la propiedad de producto nulo

Factorizar significa escribir una suma como producto. Las herramientas básicas son factor común, agrupación, diferencia de cuadrados y trinomios. Por ejemplo, $x^3+2x^2-x-2=x^2(x+2)-(x+2)=(x+2)(x-1)(x+1)$. La identidad se verifica expandiendo.

En los reales, un producto de factores es cero si y solo si alguno es cero. Resolver x(x−3)=0 da {0,3}. Dividir primero por x habría perdido la solución cero. En una ecuación como (x−1)(x+2)=5, no se puede igualar cada factor a cero: la propiedad se aplica cuando el producto es cero.

Para dividir un polinomio por x−a, el resto es P(a). Si P(a)=0, x−a es factor. El esquema de Ruffini es un algoritmo para esa división y requiere ordenar potencias e incluir coeficientes cero. Si P=x³−4x, sus coeficientes son 1,0,−4,0; omitir ceros cambia el polinomio.

### Cuadráticas y discriminante

Para ax²+bx+c=0 con a≠0, completar cuadrados da $x=(-b\pm\sqrt{b^2-4ac})/(2a)$. El discriminante Δ=b²−4ac decide las raíces reales: dos distintas si Δ>0, una doble si Δ=0 y ninguna real si Δ<0. En ℂ el último caso se resolverá usando la unidad imaginaria.

Por ejemplo, 2x²−5x−3=0 tiene Δ=49 y raíces 3 y −1/2. Se factoriza como (2x+1)(x−3). La suma de raíces es −b/a=5/2 y el producto c/a=−3/2, controles útiles cuando se sospecha un signo.

### Ecuaciones racionales y dominio previo

En $\frac{x+1}{x-1}=2+\frac2{x-1}$ se exige x≠1. Multiplicar por x−1 da x+1=2x, de donde x=1. Como está excluido, no hay soluciones. Una cuenta que termina en un valor prohibido necesita concluir conjunto vacío, no esconder la restricción inicial.

En cambio, para $(x^2-1)/(x-1)=3$, x≠1 y la simplificación da x+1=3: x=2 sí es admisible. Una misma expresión simplificada puede representar funciones diferentes si se asignan dominios distintos. En ecuaciones, toda respuesta se contrasta con la forma original.

### Sistemas lineales

Dos ecuaciones lineales en dos variables representan dos rectas. Pueden cortarse en un punto, ser paralelas distintas o coincidir. En x+y=5 y 2x−y=1, sumar elimina y: 3x=6, x=2 e y=3. En x+y=1 y 2x+2y=3 aparece una contradicción y no hay solución. Si la segunda fuera 2x+2y=2, habría infinitas soluciones parametrizadas por (t,1−t).

El método de sustitución, igualación o eliminación cambia la estrategia de cálculo, no el conjunto solución si cada operación es equivalente. Una fila 0=0 expresa redundancia, no que las incógnitas deban ser cero.

### Exponentes y logaritmos

Para a>0 y a≠1, loga(b)=c significa aᶜ=b y exige b>0. Las propiedades, para argumentos positivos, son loga(uv)=loga(u)+loga(v), loga(u/v)=loga(u)−loga(v) y loga(uʳ)=r loga(u). No existe una propiedad que convierta loga(u+v) en suma de logaritmos.

La base cambia con loga(x)=ln(x)/ln(a). Una calculadora con ln o log decimal permite evaluar cualquier base positiva distinta de uno. Si 0<a<1, el logaritmo es decreciente: al transformar una desigualdad hay que considerar esa monotonía, como se hará en el capítulo de funciones.

**Ejemplo completo.** Resolver log2(x−1)+log2(x+1)=3 exige x>1. Combinar da log2(x²−1)=3 y x²−1=8. Las raíces algebraicas son ±3, pero solo x=3 pertenece al dominio original. Si se combinara primero olvidando positividad de cada argumento, el producto positivo para x<−1 podría crear una rama inexistente.

En 3²ˣ⁻¹=27, como 27=3³ y la exponencial de base 3 es inyectiva, 2x−1=3 y x=2. Si las bases no se reducen a la misma, se pueden tomar logaritmos sobre cantidades positivas; no se inventa una igualdad de exponentes entre bases distintas.

### Práctica y respuestas

**P1.1.** Factorizá x³−x²−4x+4. **P1.2.** Resolvé x²−5x+6=0. **P1.3.** Resolvé (x²−4)/(x−2)=4. **P1.4.** Resolvé √(x+6)=x. **P1.5.** Resolvé log3(x−2)=2. **P1.6.** Clasificá x−y=2, 2x−2y=4.

**Respuestas.** P1.1: (x−1)(x−2)(x+2). P1.2: {2,3}. P1.3: la simplificación exige x=2, excluido; conjunto vacío. P1.4: x=3, pues la otra raíz −2 no cumple signo. P1.5: x=11 y el argumento es positivo. P1.6: infinitas soluciones (t,t−2). La guía de revisión combina álgebra y funciones: la habilidad importante es conservar dominio y equivalencia, no solo llegar a una expresión más corta.


### Hoja de fórmulas del capítulo 1

| Relación | Significado y condiciones |
| --- | --- |
| $(a\pm b)^2=a^2\pm2ab+b^2,\quad a^2-b^2=(a-b)(a+b)$ | Identidades reales; distinguir factores de sumandos antes de cancelar. |
| $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ | Soluciones reales de ax²+bx+c=0, a≠0, si Δ=b²−4ac≥0. En complejos se amplía el caso Δ<0. |
| $P(r)=0\iff (x-r)\text{ divide a }P(x)$ | Teorema del factor para polinomios; registrar multiplicidades y comprobar el resto. |
| $\log_a x=y\iff a^y=x$ | Base a>0,a≠1 y argumento x>0. Comprobar esas condiciones en toda solución candidata. |

## Capítulo 2 · Proposiciones, conectivos y tablas de verdad

### Qué cuenta como proposición

Una proposición es un enunciado al que, en el contexto de la lógica clásica que usamos, se le asigna verdadero o falso. No tiene que ser verdadero: «7 es par» es una proposición falsa. Una pregunta o una orden no afirman algo con valor de verdad de ese tipo. Una expresión abierta como x>3 tampoco es todavía una proposición determinada hasta fijar x o cuantificarlo en un universo.

El contexto evita ambigüedades. «Hoy llueve» puede ser una proposición si se fijan lugar y fecha, aunque quien la lee no conozca su valor. No saber si un enunciado es verdadero no lo convierte en pregunta. En los ejemplos matemáticos conviene usar afirmaciones precisas para concentrarse en su estructura.

### Conectivos y significado

La negación ¬p invierte el valor de p. La conjunción p∧q es verdadera solo si ambas son verdaderas. La disyunción p∨q es inclusiva: basta que alguna sea verdadera, y también lo es cuando ambas lo son. Si se quiere «una u otra, pero no ambas», hay que expresarlo como (p∨q)∧¬(p∧q).

El condicional p⇒q solo es falso cuando p es verdadera y q falsa. No afirma necesariamente una relación causal: es una condición sobre valores de verdad. El bicondicional p⇔q es verdadero cuando ambas tienen el mismo valor; equivale a exigir las dos implicaciones p⇒q y q⇒p.

| p | q | p∧q | p∨q | p⇒q | p⇔q |
|---|---|---|---|---|---|
| V | V | V | V | V | V |
| V | F | F | V | F | F |
| F | V | F | V | V | F |
| F | F | F | F | V | V |

Que un condicional con antecedente falso sea verdadero significa que ese caso no presenta un contraejemplo a «si p, entonces q». No autoriza a deducir q sin conocer p. Esta diferencia entre valor de una fórmula y validez de una inferencia es una fuente frecuente de confusión.

### Traducir del lenguaje cotidiano

«Si estudio, apruebo» se representa e⇒a. «Apruebo si estudio» tiene la misma dirección: la condición introducida por «si» es estudiar. «Apruebo solo si estudio» es a⇒e: estudiar es condición necesaria, no una garantía suficiente. «Apruebo si y solo si estudio» afirma ambas direcciones.

Las palabras «pero» o «aunque» suelen expresar conjunción en el análisis proposicional elemental, aun cuando añadan matices del lenguaje natural. «No estudio ni trabajo» es ¬e∧¬t; no ¬(e∧t), que permitiría estudiar siempre que no se trabaje a la vez. Identificar primero las proposiciones simples ayuda a conservar la negación correcta.

### Construir una tabla sin saltarse casos

Si hay n proposiciones simples independientes, existen 2ⁿ combinaciones. Para tres variables p,q,r se pueden ordenar VVV, VVF, VFV, VFF, FVV, FVF, FFV, FFF. Se construyen columnas auxiliares siguiendo paréntesis y prioridad: primero negaciones, luego conjunciones y disyunciones según la agrupación, y finalmente los conectivos externos. Ante cualquier ambigüedad es preferible agregar paréntesis.

**Ejemplo resuelto.** Para $(p\Rightarrow q)\land\neg q$:

| p | q | p⇒q | ¬q | (p⇒q)∧¬q |
|---|---|---|---|---|
| V | V | V | F | F |
| V | F | F | V | F |
| F | V | V | F | F |
| F | F | V | V | V |

La fórmula solo es verdadera si p y q son falsas. Por tanto implica ¬p: ese es el patrón de modus tollens. No se deduce que la fórmula sea siempre verdadera; se deduce una consecuencia bajo la hipótesis de que sus dos componentes son verdaderas.

### Tautología, contradicción y contingencia

Una tautología es verdadera en toda fila, una contradicción falsa en toda fila y una contingencia tiene ambos valores. p∨¬p es tautología; p∧¬p contradicción; p⇒q contingencia. Un enunciado compuesto puede tener una forma tautológica aunque no se conozcan los valores particulares de sus proposiciones simples.

Para demostrar que una fórmula no es tautología basta una fila falsa. Para demostrar que es tautología hay que cubrir todas las posibilidades, mediante una tabla completa o equivalencias justificadas. Probar tres combinaciones de ocho no alcanza salvo que un argumento explique por qué las otras quedan cubiertas.

### Información parcial y razonamiento hacia atrás

Supongamos que (p∧q)⇒r es falsa. Entonces necesariamente p∧q es verdadera y r falsa; por eso p=V, q=V y r=F. Con esos valores, ¬p∨(q∧r) es F∨F=F. No fue necesario construir ocho filas porque la falsedad del condicional impuso una combinación única.

En cambio, saber que p∨q es verdadera no determina p y q individualmente: admite VV, VF y FV. Una respuesta correcta puede ser «la información no alcanza», acompañada de dos asignaciones compatibles que produzcan conclusiones distintas. No se fuerza un valor cuando las premisas no lo fijan.

### Práctica y respuestas

**L2.1.** Clasificá «x+1=0», «existe un entero x con x+1=0» y «¿es x entero?». **L2.2.** Traducí «Entro solo si tengo permiso». **L2.3.** Clasificá (p∧q)⇒p. **L2.4.** Con p=F, q=V, calculá ¬(p∨q)⇔(¬p∧¬q). **L2.5.** Si p⇒q es falsa, ¿qué vale q⇒p? **L2.6.** ¿p∨q excluye que ambas sean verdaderas?

**Respuestas.** L2.1: expresión abierta, proposición verdadera y pregunta, respectivamente. L2.2: entro⇒permiso. L2.3: tautología: siempre que el antecedente es verdadero p también lo es. L2.4: V, porque los dos lados del bicondicional son F. L2.5: V, ya que q=F y p=V. L2.6: no; la disyunción usada aquí es inclusiva. La práctica 1 trabaja traducción, tablas y deducción de valores con información parcial.


### Hoja de fórmulas del capítulo 2

| Relación | Significado y condiciones |
| --- | --- |
| $p\Rightarrow q\equiv\neg p\lor q$ | La implicación solo es falsa si p es verdadera y q falsa. El bicondicional es verdadero cuando tienen igual valor. |
| $p\Leftrightarrow q\equiv(p\Rightarrow q)\land(q\Rightarrow p)$ | Expresa las dos direcciones; una implicación sola no basta. |
| $2^n$ | Cantidad de filas de una tabla con n proposiciones simples independientes. |
| $(p\Rightarrow q)\land\neg q\Rightarrow\neg p$ | Modus tollens; la inferencia es válida para toda asignación de verdad, no autoriza afirmar el antecedente desde q. |

## Capítulo 3 · Equivalencias, cuantificadores y demostraciones

### Equivalencia no es igualdad de un caso

Dos fórmulas son lógicamente equivalentes si tienen el mismo valor en todas las asignaciones. Se escribe ≡. El condicional cumple p⇒q≡¬p∨q. Negarlo da ¬(p⇒q)≡p∧¬q: negar «si p entonces q» exige justamente exhibir p verdadera y q falsa.

Las leyes de De Morgan son ¬(p∧q)≡¬p∨¬q y ¬(p∨q)≡¬p∧¬q. La negación se distribuye cambiando el conectivo. Por ejemplo, negar «x>0 y x<5» da «x≤0 o x≥5», no «x<0 y x>5». También se cumplen conmutatividad, asociatividad, distributividad y doble negación; cada ley puede comprobarse con tablas.

**Simplificación explicada.** $\neg(p\Rightarrow q)\lor(p\land q)$ equivale a $(p\land\neg q)\lor(p\land q)$. Factorizar lógicamente p mediante distributividad da $p\land(\neg q\lor q)$. El segundo factor es tautología, así que el resultado equivale a p. El parecido con factorizar álgebra es útil, pero las operaciones y sus leyes pertenecen a otro sistema.

### Directa, recíproca, contraria y contrarrecíproca

De p⇒q se forman q⇒p, ¬p⇒¬q y ¬q⇒¬p. La directa es equivalente a la contrarrecíproca; la recíproca es equivalente a la contraria. No se afirma que las cuatro sean equivalentes.

«Si n es múltiplo de 4, n es par» es verdadero para enteros. Su recíproca es falsa: 6 es par y no múltiplo de 4. La contrarrecíproca, «si n no es par, no es múltiplo de 4», sí es verdadera. Es importante conservar el universo de enteros; cambiarlo sin decirlo puede alterar el significado de «múltiplo» o «par».

### Cuantificar requiere un universo

∀x∈A:P(x) significa que todo elemento de A cumple P. ∃x∈A:P(x) significa que al menos uno la cumple; ∃! añade unicidad. «Existe» no significa «solo uno». Para probar una existencia basta un testigo admisible; para refutar una afirmación universal basta un contraejemplo.

La afirmación ∃x∈ℝ:x²=2 es verdadera, pero en ℚ es falsa. La ecuación no cambió; cambió el universo. La proposición ∀x∈ℝ:x²≥0 es verdadera y ∀x∈ℝ:x²>0 falsa por x=0. Un ejemplo favorable no demuestra un universal; un ejemplo desfavorable sí lo refuta.

### Negación de cuantificadores

Se cumplen $\neg(\forall x\in A:P(x))\equiv\exists x\in A:\neg P(x)$ y $\neg(\exists x\in A:P(x))\equiv\forall x\in A:\neg P(x)$. Se cambia cuantificador y se niega el predicado, conservando el universo.

Negar «todos los estudiantes aprobaron» significa «existe al menos un estudiante que no aprobó», no «ninguno aprobó». Negar «existe un real cuyo cuadrado es negativo» significa «para todo real su cuadrado es no negativo». La desigualdad se niega exactamente: la negación de x<3 es x≥3.

### El orden de cuantificadores puede cambiarlo todo

∀x∈ℝ ∃y∈ℝ:y>x es verdadero: para cada x sirve y=x+1. En cambio, ∃y∈ℝ ∀x∈ℝ:y>x es falso: ningún real supera a todos, pues x=y+1 lo contradice. En el primero y puede depender de x; en el segundo debe elegirse un único y antes de conocer x.

Para negar el primero se obtiene ∃x∈ℝ ∀y∈ℝ:y≤x. La regla se aplica desde afuera hacia adentro, respetando el orden. Renombrar variables ligadas puede evitar confusiones cuando una expresión reutiliza x en distintas partes: el nombre es secundario, el alcance del cuantificador no.

### Demostración directa, contraposición y contradicción

Una demostración directa parte de las hipótesis y usa definiciones y leyes para obtener la tesis. Si n=2k es par, n²=4k²=2(2k²) es par, pues 2k² es entero. El paso decisivo no es un ejemplo con n=8, sino representar cualquier par mediante un entero arbitrario k.

Por contraposición se demuestra ¬q⇒¬p en lugar de p⇒q. Para probar «si n² es par, n es par», basta mostrar que n impar, n=2k+1, implica n²=2(2k²+2k)+1 impar. La representación cubre todos los impares y justifica la conclusión.

En una prueba por contradicción se supone la hipótesis y la negación de la tesis y se deriva una imposibilidad. Por ejemplo, si √2=a/b en fracción irreducible, a²=2b² obliga a que a sea par. Escribir a=2k implica b²=2k² y b también par, contradiciendo que la fracción fuera irreducible. Contraposición y contradicción están relacionadas, pero conviene identificar qué se supone en cada argumento.

### Cómo refutar sin hacer afirmaciones excesivas

La frase «si a²=b², entonces a=b» es falsa para reales: a=1,b=−1 es contraejemplo. Lo válido es a=b o a=−b, obtenido de (a−b)(a+b)=0. Un buen contraejemplo cumple las hipótesis y falla la conclusión. Elegir a,b que no satisfagan la hipótesis no refuta la implicación.

### Práctica y respuestas

**L3.1.** Negá ∀x∈ℝ:(x>0⇒x²>1). **L3.2.** Negá ∃n∈ℤ:(n<0∨n≥4). **L3.3.** ¿Son equivalentes p⇒q y ¬q⇒¬p? **L3.4.** Demostrá que suma de dos enteros impares es par. **L3.5.** Refutá «si ab=0, a=0». **L3.6.** Diferenciá ∀x∃y:y=x de ∃y∀x:y=x sobre ℝ.

**Respuestas.** L3.1: ∃x∈ℝ:(x>0∧x²≤1), por ejemplo x=1/2. L3.2: ∀n∈ℤ:(n≥0∧n<4), proposición falsa pero negación correcta. L3.3: sí, por equivalencias o tabla. L3.4: (2k+1)+(2m+1)=2(k+m+1). L3.5: a=1,b=0. L3.6: la primera es verdadera y la segunda falsa. La corrección sintáctica de una negación no depende de que el resultado sea verdadero.


### Hoja de fórmulas del capítulo 3

| Relación | Significado y condiciones |
| --- | --- |
| $\neg(p\land q)\equiv\neg p\lor\neg q,\quad\neg(p\lor q)\equiv\neg p\land\neg q$ | Leyes de De Morgan; las negaciones afectan a cada proposición. |
| $p\Rightarrow q\equiv\neg q\Rightarrow\neg p$ | Contrarrecíproca equivalente; la recíproca q⇒p no lo es en general. |
| $\neg(\forall x\in A\ P(x))\equiv\exists x\in A\ \neg P(x)$ | La negación conserva el universo A y cambia el cuantificador. |
| $\neg(\exists x\in A\ P(x))\equiv\forall x\in A\ \neg P(x)$ | Con cuantificadores anidados, negar de afuera hacia adentro sin invertir el orden. |
| $p\land(q\lor r)\equiv(p\land q)\lor(p\land r)$ | Distributividad; también vale la dual intercambiando ∧ y ∨. Conservar paréntesis. |

## Formulario de la Unidad 1 · Lógica

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 2 · Proposiciones y tablas

| Relación | Significado y condiciones |
| --- | --- |
| $p\Rightarrow q\equiv\neg p\lor q$ | La implicación solo es falsa si p es verdadera y q falsa. El bicondicional es verdadero cuando tienen igual valor. |
| $p\Leftrightarrow q\equiv(p\Rightarrow q)\land(q\Rightarrow p)$ | Expresa las dos direcciones; una implicación sola no basta. |
| $2^n$ | Cantidad de filas de una tabla con n proposiciones simples independientes. |
| $(p\Rightarrow q)\land\neg q\Rightarrow\neg p$ | Modus tollens; la inferencia es válida para toda asignación de verdad, no autoriza afirmar el antecedente desde q. |

### Capítulo 3 · Equivalencias y cuantificadores

| Relación | Significado y condiciones |
| --- | --- |
| $\neg(p\land q)\equiv\neg p\lor\neg q,\quad\neg(p\lor q)\equiv\neg p\land\neg q$ | Leyes de De Morgan; las negaciones afectan a cada proposición. |
| $p\Rightarrow q\equiv\neg q\Rightarrow\neg p$ | Contrarrecíproca equivalente; la recíproca q⇒p no lo es en general. |
| $\neg(\forall x\in A\ P(x))\equiv\exists x\in A\ \neg P(x)$ | La negación conserva el universo A y cambia el cuantificador. |
| $\neg(\exists x\in A\ P(x))\equiv\forall x\in A\ \neg P(x)$ | Con cuantificadores anidados, negar de afuera hacia adentro sin invertir el orden. |
| $p\land(q\lor r)\equiv(p\land q)\lor(p\land r)$ | Distributividad; también vale la dual intercambiando ∧ y ∨. Conservar paréntesis. |

## Capítulo 4 · Conjuntos, pertenencia y operaciones

### Describir un conjunto sin ambigüedad

Un conjunto reúne objetos llamados elementos. Por extensión se enumeran: A={1,3,5}. Por comprensión se indica universo y condición: A={n∈ℕ:n es impar y n<6}. El orden y la repetición no cambian el conjunto: {1,3,3,5}={5,1,3}. Sí importan el tipo de objeto y los niveles de llaves.

La relación x∈A conecta un elemento con un conjunto. A⊆B conecta conjuntos y afirma que cada elemento de A pertenece a B. Con A={1,2}, 1∈A y {1}⊆A son verdaderas; {1}∈A es falsa porque los elementos listados son números, no conjuntos. En cambio, si B={1,{1}}, tanto 1 como {1} son elementos de B. No se decide mirando solo si aparece el símbolo 1.

Dos conjuntos son iguales si se incluyen mutuamente. Para demostrar A=B conviene probar primero que x∈A implica x∈B y después la recíproca. Mostrar un elemento compartido solo prueba que la intersección no es vacía, no igualdad.

### Vacío, universal y conjuntos con un elemento

El vacío ∅ no contiene elementos. {∅} sí contiene uno: el conjunto vacío. La inclusión ∅⊆A es verdadera para todo A, porque no existe un elemento del vacío que pueda violarla. La pertenencia ∅∈A depende de cómo esté definido A.

El universal U fija los objetos en consideración. El complemento de A es relativo a U: Aᶜ={x∈U:x∉A}. Si se cambia U, puede cambiar Aᶜ aunque A sea el mismo. Por eso resolver un complemento «en todos los números» sin aclarar si son enteros, reales u otro conjunto está incompleto.

### Unión, intersección, diferencia y complemento

A∪B contiene elementos que están en A o en B; A∩B los que están en ambos. A\B contiene los que están en A y no en B. La diferencia no es simétrica: A\B y B\A suelen ser distintas. Las traducciones a predicados conectan directamente con lógica:


$$
x\in A\cup B\iff(x\in A)\lor(x\in B),\qquad
x\in A\cap B\iff(x\in A)\land(x\in B).
$$


**Ejemplo.** Con U={−2,−1,0,1,2,3,4}, A={−2,0,2,4} y B={0,1,2,3}, obtenemos A∩B={0,2}, A∪B={−2,0,1,2,3,4}, A\B={−2,4}, B\A={1,3} y Aᶜ={−1,1,3}. Enumerar una vez los elementos de U y marcar condiciones ayuda a evitar omisiones.

![Unión, intersección y diferencia: regiones distintas](/planos-de-estudio/img/elementos/conjuntos.svg)

### Leyes de conjuntos y su justificación lógica

Las leyes conmutativas, asociativas y distributivas reflejan las de ∧ y ∨. De Morgan establece (A∪B)ᶜ=Aᶜ∩Bᶜ y (A∩B)ᶜ=Aᶜ∪Bᶜ. Para probar la primera: x está en el complemento de la unión si no está en A ni B; por De Morgan lógico, no pertenece a A y no pertenece a B; eso equivale a pertenecer a ambos complementos.

También A\B=A∩Bᶜ. No vale A\(B∪C)=(A\B)∪(A\C): la operación correcta en el segundo miembro es intersección. Probarlo con un dibujo puede sugerir la respuesta, pero la traducción a pertenencia proporciona una justificación que no depende de cómo se hayan trazado los círculos.

### Universo numérico: una condición puede definir conjuntos diferentes

Para A={x∈ℤ:x²<10}, los enteros permitidos son −3,…,3. Si se usa ℝ, el resultado es el intervalo (−√10,√10), con infinitos valores adicionales. Para B={x∈ℚ:x²=2}, B=∅; en ℝ habría dos elementos. El universo no es una anotación decorativa.

La condición «x divide a 6» sobre enteros no nulos admite ±1,±2,±3,±6. Si se pide en ℕ, quedan solo los positivos. Si x=0, no se define como divisor de 6. Leer x∣6 como «x es múltiplo de 6» invierte la relación y produce otro conjunto.

### Operaciones compuestas paso a paso

Sean A={−2,−1,0,1,2}, B={0,1,2,3} y C={−1,1,3}. Para A∩(B\C), primero B\C={0,2} y después intersecar con A deja {0,2}. Para (A\B)\C, A\B={−2,−1} y al quitar C queda {−2}. Los paréntesis deciden qué elementos se descartan antes de la operación siguiente.

Como comprobación, A∩(B\C)=(A∩B)\C, pero A\(B\C) no es en general (A\B)\C. La diferencia no es asociativa. Un ejemplo con conjuntos pequeños basta para refutar una identidad propuesta; para demostrar una ley universal hace falta un argumento general de pertenencia.

### Producto cartesiano y cantidad de elementos

Como complemento útil para comprender funciones, A×B reúne pares ordenados (a,b) con a∈A y b∈B. Si A={1,2} y B={a,b,c}, hay seis pares. El orden de las componentes importa: (1,a) no se interpreta como (a,1). Si los conjuntos son finitos, |A×B|=|A||B|.

En conjuntos finitos, |A∪B|=|A|+|B|−|A∩B| porque los elementos compartidos se cuentan dos veces al sumar. No se necesita esta fórmula para toda operación de la práctica, pero ayuda a comprobar enumeraciones y a interpretar diagramas.

### Práctica y respuestas

**C4.1.** A={0,{0},∅}: evaluá 0∈A, {0}∈A y {0}⊆A. **C4.2.** Con U={1,…,6}, A={1,2,3}, B={3,4}, hallá (A∪B)ᶜ y A\B. **C4.3.** Definí {x∈ℤ:x²=4} por extensión. **C4.4.** Negá x∈A∩B mediante complementos. **C4.5.** A y B tienen 8 y 5 elementos, con 3 comunes: tamaño de unión.

**Respuestas.** C4.1: las tres son verdaderas, por razones distintas: A contiene el número 0, el conjunto {0}, y el único elemento de {0} pertenece a A. C4.2: {5,6} y {1,2}. C4.3: {−2,2}. C4.4: x∈Aᶜ∪Bᶜ dentro del mismo U. C4.5: 10. La práctica 2 exige manejar simultáneamente notación, universos y operaciones.


### Hoja de fórmulas del capítulo 4

| Relación | Significado y condiciones |
| --- | --- |
| $A\subseteq B\iff\forall x\ (x\in A\Rightarrow x\in B)$ | Inclusión admite igualdad; pertenencia relaciona un elemento con un conjunto y es otra operación. |
| $A\setminus B=A\cap B^c$ | Complemento respecto de un universo U declarado; diferencia no es conmutativa. |
| $(A\cup B)^c=A^c\cap B^c,\quad(A\cap B)^c=A^c\cup B^c$ | De Morgan para conjuntos del mismo universo. |
| $A\triangle B=(A\setminus B)\cup(B\setminus A)$ | Diferencia simétrica: elementos que pertenecen exactamente a uno de los conjuntos. |
| $A\times B=\{(a,b):a\in A,\ b\in B\}$ | Producto cartesiano de pares ordenados; A×B y B×A pueden diferir. Si finitos, su cardinal es el producto de cardinales. |

## Capítulo 5 · Intervalos, entornos e inecuaciones

### Intervalos y extremos

Un intervalo representa un conjunto de reales sin huecos entre sus puntos. [a,b] incluye extremos; (a,b) no; [a,b) y (a,b] incluyen uno. Se escribe (−∞,a) para x<a y [a,+∞) para x≥a. No se usa un corchete para incluir ∞: no es un número real que pertenezca al conjunto.

Para A=(−3,2] y B=[0,5), la intersección es [0,2] y la unión (−3,5). La diferencia A\B es (−3,0). El cero queda excluido de la diferencia porque sí pertenece a B, aunque sea extremo de otro intervalo. Antes de operar conviene dibujar círculos abiertos o cerrados sobre la recta.

### Valor absoluto como distancia

|x| es la distancia entre x y cero; |x−a| es la distancia entre x y a. La igualdad |x−2|=3 da x=−1 o x=5. Para r>0, |x−a|<r equivale a a−r<x<a+r; |x−a|>r equivale a x<a−r o x>a+r. No se cambia la disyunción externa por una conjunción imposible.

Si r=0, |x−a|<0 no tiene soluciones; |x−a|≤0 solo admite x=a. Si r<0, una desigualdad de valor absoluto menor que r es imposible. Las reglas usuales de «abrir el módulo» se formulan con r positivo para no ocultar estos casos.

El entorno E(a,r) es (a−r,a+r). El entorno reducido E*(a,r) excluye el centro: (a−r,a)∪(a,a+r), equivalente a 0<|x−a|<r. Esta exclusión aparecerá en la definición de límite: se estudian puntos cercanos sin imponer qué ocurre exactamente en el centro.

### Inecuaciones lineales y dobles

Resolver −2x+3≥7 da −2x≥4 y x≤−2 al dividir por −2. En una doble desigualdad −1<2x+3≤7 se resta 3 en los tres miembros y se divide por 2, obteniendo −2<x≤2. Se preserva qué extremo es estricto.

Las condiciones unidas por «y» se intersectan; las unidas por «o» se unen. Por ejemplo, x>−1 y x≤3 da (−1,3], mientras que x<−1 o x≥3 da (−∞,−1)∪[3,+∞). Traducir primero a conjuntos evita mezclar ambas operaciones.

### Polinomios: signo por factores

Para (x−1)(x+2)≥0, las raíces −2 y 1 dividen la recta. A la izquierda de −2 ambos factores son negativos y el producto positivo; entre ellas tienen signos opuestos; a la derecha ambos positivos. La solución es (−∞,−2]∪[1,+∞). Los ceros se incluyen porque la desigualdad admite igualdad.

Si un factor tiene multiplicidad par, su signo no cambia al atravesar la raíz. En (x−1)²(x+2)>0, el signo fuera de x=1 lo determina x+2, pero x=1 hace el producto cero y debe excluirse. La solución es (−2,1)∪(1,+∞). No basta alternar signos automáticamente después de cada raíz: importa su multiplicidad.

### Racionales: llevar todo a un lado

Para $(x+1)/(x-2)\le2$, primero x≠2. Restar 2 transforma en $(5-x)/(x-2)\le0$. Los puntos relevantes son 2, donde no existe, y 5, donde se anula. La solución es (−∞,2)∪[5,+∞).

Multiplicar directamente por x−2 sin saber su signo habría exigido separar x>2 y x<2, invirtiendo la desigualdad en el segundo caso. La tabla de signos organiza esos casos. Un denominador excluido no se reincorpora porque la desigualdad sea no estricta.

### Combinar racionales y raíces

Resolver $\sqrt{(x-1)/(x+2)}$ como expresión real pide (x−1)/(x+2)≥0 y x≠−2. La tabla de signos da (−∞,−2)∪[1,+∞). Si la raíz estuviera en el denominador, el radicando debería ser estrictamente positivo y también se excluiría 1.

Para |2x−3|≤5, se escribe −5≤2x−3≤5 y se obtiene −1≤x≤4. Para |2x−3|>5, las ramas son 2x−3<−5 o 2x−3>5, es decir x<−1 o x>4. Dibujar la distancia después de dividir por dos permite comprobar que el centro es 3/2 y el radio 5/2.

### Sistemas de inecuaciones y universos discretos

Supongamos A={x∈ℤ:(x−1)(x−4)≤0}. Primero se resuelve sobre ℝ: [1,4]. Después se intersecta con ℤ y queda {1,2,3,4}. Si además se pide x impar, quedan {1,3}. La tabla de signos resuelve la condición algebraica; el universo termina de definir el conjunto.

No se usan intervalos reales como si fueran enumeraciones de enteros. [1,4] contiene 2.5; {1,2,3,4} no. Esa distinción reaparece en las funciones cuando se especifican dominios y codominios.

### Práctica y respuestas

**I5.1.** Expresá E*(2,3) con intervalos. **I5.2.** Resolvé |3x+1|<2. **I5.3.** Resolvé (x−3)/(x+1)≥0. **I5.4.** Resolvé (x−2)²≤0. **I5.5.** Hallá A\B con A=[−2,4], B=(0,3]. **I5.6.** Resolvé 1/(x−1)>1.

**Respuestas.** I5.1: (−1,2)∪(2,5). I5.2: (−1,1/3). I5.3: (−∞,−1)∪[3,+∞). I5.4: {2}. I5.5: [−2,0]∪(3,4]. I5.6: (1,2), al estudiar (2−x)/(x−1)>0. La práctica 2 combina estas técnicas con operaciones entre conjuntos: primero se resuelve cada condición y después se opera con los conjuntos obtenidos.


### Hoja de fórmulas del capítulo 5

| Relación | Significado y condiciones |
| --- | --- |
| $\lvert x-a\rvert<r\iff a-r<x<a+r$ | r>0; entorno abierto de centro a y radio r. Para entorno reducido agregar x≠a. |
| $\lvert u\rvert\le r\iff-r\le u\le r$ | r≥0; para &#124;u&#124;≥r se usa u≤−r o u≥r. Si r<0, analizar directamente la imposibilidad o trivialidad correspondiente. |
| $a<b,\ c<0\ \Longrightarrow\ ac>bc$ | Multiplicar o dividir una desigualdad por un negativo invierte su sentido. |
| $\frac{P(x)}{Q(x)}\ge0:\quad Q(x)\ne0$ | Estudiar signos en intervalos separados por ceros de P y Q; incluir ceros del numerador si el denominador no se anula. |

## Formulario de la Unidad 2 · Conjuntos

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 4 · Operaciones de conjuntos

| Relación | Significado y condiciones |
| --- | --- |
| $A\subseteq B\iff\forall x\ (x\in A\Rightarrow x\in B)$ | Inclusión admite igualdad; pertenencia relaciona un elemento con un conjunto y es otra operación. |
| $A\setminus B=A\cap B^c$ | Complemento respecto de un universo U declarado; diferencia no es conmutativa. |
| $(A\cup B)^c=A^c\cap B^c,\quad(A\cap B)^c=A^c\cup B^c$ | De Morgan para conjuntos del mismo universo. |
| $A\triangle B=(A\setminus B)\cup(B\setminus A)$ | Diferencia simétrica: elementos que pertenecen exactamente a uno de los conjuntos. |
| $A\times B=\{(a,b):a\in A,\ b\in B\}$ | Producto cartesiano de pares ordenados; A×B y B×A pueden diferir. Si finitos, su cardinal es el producto de cardinales. |

### Capítulo 5 · Intervalos e inecuaciones

| Relación | Significado y condiciones |
| --- | --- |
| $\lvert x-a\rvert<r\iff a-r<x<a+r$ | r>0; entorno abierto de centro a y radio r. Para entorno reducido agregar x≠a. |
| $\lvert u\rvert\le r\iff-r\le u\le r$ | r≥0; para &#124;u&#124;≥r se usa u≤−r o u≥r. Si r<0, analizar directamente la imposibilidad o trivialidad correspondiente. |
| $a<b,\ c<0\ \Longrightarrow\ ac>bc$ | Multiplicar o dividir una desigualdad por un negativo invierte su sentido. |
| $\frac{P(x)}{Q(x)}\ge0:\quad Q(x)\ne0$ | Estudiar signos en intervalos separados por ceros de P y Q; incluir ceros del numerador si el denominador no se anula. |

## Capítulo 6 · Ángulos y razones trigonométricas

### Del triángulo a una razón que depende del ángulo

En un triángulo rectángulo la hipotenusa está opuesta al ángulo recto. Para un ángulo agudo θ, seno=cateto opuesto/hipotenusa, coseno=cateto adyacente/hipotenusa y tangente=opuesto/adyacente. Los nombres opuesto y adyacente dependen del ángulo elegido. Cambiar al otro ángulo intercambia esos catetos, pero no la hipotenusa.

Los triángulos rectángulos con un mismo ángulo agudo son semejantes. Por eso las razones no dependen de su tamaño: un triángulo de lados 3,4,5 y otro de 6,8,10 producen seno 3/5 para el ángulo opuesto al cateto menor. Esta semejanza explica por qué una medición angular permite estimar alturas sin llegar hasta el punto observado.

Las razones recíprocas son cosecante=1/seno, secante=1/coseno y cotangente=coseno/seno, donde los denominadores no se anulan. Una expresión como secθ no es una función inversa de cosθ: sec significa recíproco, mientras arccos devuelve un ángulo en una rama definida.

### Ángulos orientados y sistemas de medida

En posición normal, el vértice está en el origen y el lado inicial sobre x positivo. Un giro antihorario tiene signo positivo; uno horario, negativo. Dos ángulos coterminales difieren en un número entero de vueltas. −30° y 330° terminan sobre la misma semirrecta, aunque describen giros distintos.

Una vuelta son 360° o 2π radianes. El radián se define mediante θ=s/R, donde s es longitud del arco y R radio. Por ello s=Rθ solo usa θ en radianes. Para convertir grados a radianes se multiplica por π/180; para lo inverso, por 180/π. Así 150°=5π/6 y 7π/4=315°.

Si se usan grados, minutos y segundos, 1°=60′ y 1′=60″. El valor 12.5° es 12°30′, no 12°5′. La calculadora debe estar en el modo apropiado; que un seno dé un decimal razonable no garantiza que el ángulo se haya interpretado correctamente.

### Circunferencia unitaria y signos

Para cualquier ángulo real θ, el punto de la circunferencia unitaria correspondiente tiene coordenadas (cosθ,sinθ). Esta definición extiende las razones a ángulos no agudos y a giros completos. La ecuación x²+y²=1 produce sin²θ+cos²θ=1.

El seno es positivo en los cuadrantes I y II, el coseno en I y IV y la tangente en I y III. Sobre los ejes puede haber valores cero o razones no definidas. En π/2, seno=1 y coseno=0, por lo que la tangente no existe. No se le asigna un número infinito como valor de la función.

![Circunferencia unitaria, coordenadas y cuadrantes](/planos-de-estudio/img/elementos/circunferencia.svg)

### Construir los valores notables

Un triángulo rectángulo isósceles de catetos 1 tiene hipotenusa √2. De allí sin(π/4)=cos(π/4)=√2/2. Dividir un triángulo equilátero de lado 2 en dos rectángulos produce catetos 1 y √3 e hipotenusa 2: sin(π/6)=1/2, cos(π/6)=√3/2, y los valores de π/3 se intercambian.

| θ | 0 | π/6 | π/4 | π/3 | π/2 |
|---|---|---|---|---|---|
| sinθ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cosθ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tanθ | 0 | √3/3 | 1 | √3 | No definida |

Los otros cuadrantes se obtienen con ángulos de referencia y signos. Para 5π/6, la referencia es π/6 y el cuadrante II: seno=1/2 y coseno=−√3/2. La simetría también explica sin(−θ)=−sinθ y cos(−θ)=cosθ. No hace falta memorizar por separado cada ángulo entre cero y dos vueltas.

### Resolver un triángulo rectángulo

Si la hipotenusa mide 10 y un cateto 6, el otro mide √(100−36)=8 por Pitágoras. Para el ángulo opuesto al cateto 6, seno=0.6 y θ=arcsin(0.6)≈36.87°. El otro agudo es 90°−θ≈53.13°. La función inversa se aplica después de identificar correctamente el cociente.

Si se conocen un ángulo agudo y un lado, se elige la razón que relaciona dato e incógnita. En una escalera de 5 m que forma 60° con el suelo, la altura es 5sin60°=5√3/2 y la separación del pie a la pared 5cos60°=2.5 m. Usar tangente también sería posible si se relacionan los dos catetos, pero no se introduce la hipotenusa en un cociente de tangente.

### Modelar una observación de altura

Un observador está a 12 m horizontalmente de un árbol. Ve su punta a 30° sobre una línea horizontal que pasa por sus ojos, situados a 1.5 m del suelo. La diferencia de altura punta–ojos es 12tan30°=4√3 m. La altura total es 1.5+4√3≈8.428 m.

Los 12 m son distancia horizontal, no la línea de visión. Si el terreno no fuera horizontal o el punto de referencia estuviera a otra altura, el dibujo y las ecuaciones cambiarían. Escribir «h=d tanθ» sin identificar qué h y qué d representan puede ocultar ese error.

### Extensión: triángulos no rectángulos

Para un triángulo con lados a,b,c opuestos a A,B,C, se cumplen la ley de senos a/sinA=b/sinB=c/sinC y la ley de cosenos c²=a²+b²−2ab cosC. La segunda recupera Pitágoras cuando C=90°. Son herramientas complementarias para resolución de triángulos; las prácticas consultadas se concentran principalmente en casos rectángulos.

Con dos lados y el ángulo comprendido, la ley de cosenos determina el tercero. Con un lado y un ángulo no comprendido puede haber ambigüedad: un mismo seno corresponde a dos ángulos suplementarios. No se escoge ciegamente la salida principal de arcsin sin verificar suma de ángulos y geometría.

### Práctica y respuestas

**T6.1.** Convertí −150° y 11π/6. **T6.2.** Hallá sin y cos de 4π/3. **T6.3.** Un radio de 3 m subtiende π/4: longitud de arco. **T6.4.** Triángulo con catetos 5 y 12: hipotenusa y seno del ángulo opuesto a 5. **T6.5.** ¿arcsin(sinθ)=θ para cualquier real θ?

**Respuestas.** T6.1: −5π/6 rad y 330°. T6.2: −√3/2 y −1/2. T6.3: 3π/4 m. T6.4: 13 y 5/13. T6.5: no; arcsin devuelve un valor en [−π/2,π/2], por ejemplo arcsin(sinπ)=0. La práctica 3 requiere conversiones, cuadrantes y problemas con diagramas: las condiciones geométricas se dibujan antes de elegir una razón.


### Hoja de fórmulas del capítulo 6

| Relación | Significado y condiciones |
| --- | --- |
| $\theta_{\rm rad}=\frac\pi{180}\theta_{\rm grados},\quad s=R\theta_{\rm rad}$ | s longitud de arco, R radio en la misma unidad de longitud; conversión inversa multiplicando por 180/π. |
| $\sin\theta=\frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad\cos\theta=\frac{\text{cateto adyacente}}{\text{hipotenusa}}$ | Triángulo rectángulo y ángulo agudo; tanθ=opuesto/adyacente. |
| $\tan\theta=\frac{\sin\theta}{\cos\theta},\quad\sin^2\theta+\cos^2\theta=1$ | Tangente requiere cosθ≠0; la identidad pitagórica vale para todo ángulo real. |
| $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C},\quad c^2=a^2+b^2-2ab\cos C$ | Triángulo no degenerado; lados a,b,c opuestos a A,B,C. Leyes suplementarias para triángulos no rectángulos. |

## Capítulo 7 · Identidades y ecuaciones trigonométricas

### Identidad y ecuación se resuelven de manera distinta

Una identidad es válida para todos los ángulos de su dominio común. Una ecuación pide los ángulos para los que la igualdad se cumple. sin²x+cos²x=1 es identidad; sinx=1/2 es ecuación. Para demostrar una identidad no se elige x=30°: un caso favorable no cubre todos los ángulos.

Además de la identidad pitagórica, dividir por cos²x donde cosx≠0 da 1+tan²x=sec²x. Dividir por sin²x donde sinx≠0 da 1+cot²x=csc²x. Las restricciones provienen de las divisiones realizadas; no se borran porque la forma final parezca sencilla.

### Transformaciones y dominios comunes

Para demostrar $\frac{1-\cos^2x}{\sin x}=\sin x$, se usa 1−cos²x=sin²x y se cancela un seno, pero solo donde sinx≠0. El lado derecho existe también cuando sinx=0; eso no amplía el dominio de la identidad original. Una demostración completa indica el dominio común.

Una estrategia útil es transformar el miembro más complicado, factorizar y usar razones básicas. No se multiplica por una expresión que podría ser cero sin registrar la condición. Tampoco se reemplaza sin(x+y) por sinx+siny: las funciones trigonométricas no son lineales.

Las fórmulas de suma son sin(a+b)=sina cosb+cosa sinb y cos(a+b)=cosa cosb−sina sinb. Al tomar a=b se obtienen sin2x=2sinx cosx y cos2x=cos²x−sin²x=2cos²x−1=1−2sin²x. Estas relaciones permiten convertir algunas ecuaciones en polinomios de seno o coseno.

### Familias de soluciones y restricción al intervalo

Para sinx=c con |c|≤1, si α=arcsinc, las soluciones reales son x=α+2kπ o x=π−α+2kπ, k∈ℤ. Para cosx=c, con α=arccosc∈[0,π], son x=±α+2kπ. Para tanx=c, son x=arctanc+kπ. Después se seleccionan las que pertenecen al intervalo pedido y se eliminan repeticiones.

En [0,2π), sinx=1/2 da π/6 y 5π/6. La calculadora suele devolver solo π/6: falta la segunda rama. Para cosx=1, las familias ±0+2kπ coinciden y dentro del intervalo solo queda cero. El extremo 2π se excluye por la notación del intervalo.

### Ejemplo: factorización sin perder soluciones

Resolver sinx(2cosx−1)=0 en [0,2π) exige considerar sinx=0 o cosx=1/2. La primera rama da {0,π}; la segunda {π/3,5π/3}. El conjunto solución es la unión de cuatro ángulos.

Dividir por sinx al principio habría perdido 0 y π. La misma precaución que usamos con polinomios se mantiene: dividir por una incógnita o una función de ella solo es válido en la rama donde no se anula.

### Ejemplo: cuadrática en una razón

Para 2cos²x−3cosx+1=0, ponemos u=cosx. El polinomio (2u−1)(u−1)=0 da u=1/2 o u=1, ambos en [−1,1]. En [0,2π) se obtienen {0,π/3,5π/3}. Si una raíz algebraica fuera u=2, se descartaría porque no es un valor posible de coseno real.

En 4sin²x−9=0, la condición exigiría sinx=±3/2 y no hay soluciones reales. Una expresión formal arcsin(3/2) no produce un ángulo real. El rango de las razones debe comprobarse antes de generar familias.

### Ángulos múltiples y desplazados

Resolver cos(2x)=1/2 no equivale a resolver cosx=1/2. Se plantea 2x=±π/3+2kπ y se divide **toda** la expresión por dos: x=±π/6+kπ. En [0,2π) quedan π/6,5π/6,7π/6 y 11π/6.

Para sin(x−π/4)=−1/2, las ramas de y=x−π/4 son y=−π/6+2kπ o y=7π/6+2kπ. Entonces x=π/12+2kπ o x=17π/12+2kπ. Dentro de [0,2π) son π/12 y 17π/12. El desplazamiento se aplica a cada rama, no solo al primer valor de la calculadora.

### Ecuaciones con tangente o secante

En tanx·sinx−sinx=0 se factoriza sinx(tanx−1)=0, pero se conserva el dominio cosx≠0. En [0,2π), sinx=0 aporta 0 y π; tanx=1 aporta π/4 y 5π/4. Los cuatro son admisibles. Las posiciones π/2 y 3π/2 no son soluciones porque la ecuación ni siquiera está definida allí.

Para 2cosx+secx=3, se exige cosx≠0 y se multiplica por cosx: 2cos²x−3cosx+1=0. Las raíces 1/2 y 1 no violan la restricción, así que el conjunto solución coincide con el ejemplo cuadrático anterior. La coincidencia se justifica comprobando dominio, no suponiendo equivalencia sin condiciones.

### Un problema combinado con conjuntos

Sea A={x∈[0,2π):sinx=0}={0,π} y B={x∈ℝ:x²−3x≤0}=[0,3]. Como π>3, A∩B={0}; B\A=(0,3]. Mezclar un conjunto trigonométrico finito con un intervalo real no convierte π en 3 ni permite aproximarlo demasiado pronto. Conviene mantener valores exactos hasta terminar las comparaciones.

### Práctica y respuestas

**T7.1.** Resolvé 2cosx+1=0 en [0,2π). **T7.2.** Resolvé sin²x=1 en el mismo intervalo. **T7.3.** Resolvé sin2x=0 allí. **T7.4.** Simplificá (1−sin²x)/cosx, indicando dominio. **T7.5.** Resolvé |cosx|=√2/2 en [0,2π). **T7.6.** ¿Qué falla al dividir sinx cosx=sinx por sinx sin separar casos?

**Respuestas.** T7.1: {2π/3,4π/3}. T7.2: {π/2,3π/2}. T7.3: {0,π/2,π,3π/2}. T7.4: cosx con cosx≠0. T7.5: {π/4,3π/4,5π/4,7π/4}. T7.6: se pierden las soluciones sinx=0; de hecho el conjunto del original en ese intervalo es {0,π}. Las consignas de la práctica 3 requieren estas separaciones, restricciones y operaciones de conjuntos.


### Hoja de fórmulas del capítulo 7

| Relación | Significado y condiciones |
| --- | --- |
| $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$ | Ángulos en una misma unidad; no distribuir seno sobre una suma. |
| $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$ | El signo del término con senos se invierte respecto del de la suma angular. |
| $\sin2x=2\sin x\cos x,\quad\cos2x=2\cos^2x-1=1-2\sin^2x$ | Identidades para todo x real. |
| $\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{o}\ x=\pi-\alpha+2k\pi$ | k entero; intersectar con el intervalo pedido y verificar restricciones originales. |
| $\cos x=\cos\alpha\iff x=\pm\alpha+2k\pi$ | k entero. Para tanx=tanα: x=α+kπ, con ambas tangentes definidas. |

## Formulario de la Unidad 3 · Trigonometría

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 6 · Ángulos y triángulos

| Relación | Significado y condiciones |
| --- | --- |
| $\theta_{\rm rad}=\frac\pi{180}\theta_{\rm grados},\quad s=R\theta_{\rm rad}$ | s longitud de arco, R radio en la misma unidad de longitud; conversión inversa multiplicando por 180/π. |
| $\sin\theta=\frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad\cos\theta=\frac{\text{cateto adyacente}}{\text{hipotenusa}}$ | Triángulo rectángulo y ángulo agudo; tanθ=opuesto/adyacente. |
| $\tan\theta=\frac{\sin\theta}{\cos\theta},\quad\sin^2\theta+\cos^2\theta=1$ | Tangente requiere cosθ≠0; la identidad pitagórica vale para todo ángulo real. |
| $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C},\quad c^2=a^2+b^2-2ab\cos C$ | Triángulo no degenerado; lados a,b,c opuestos a A,B,C. Leyes suplementarias para triángulos no rectángulos. |

### Capítulo 7 · Identidades y ecuaciones

| Relación | Significado y condiciones |
| --- | --- |
| $\sin(a\pm b)=\sin a\cos b\pm\cos a\sin b$ | Ángulos en una misma unidad; no distribuir seno sobre una suma. |
| $\cos(a\pm b)=\cos a\cos b\mp\sin a\sin b$ | El signo del término con senos se invierte respecto del de la suma angular. |
| $\sin2x=2\sin x\cos x,\quad\cos2x=2\cos^2x-1=1-2\sin^2x$ | Identidades para todo x real. |
| $\sin x=\sin\alpha\iff x=\alpha+2k\pi\ \text{o}\ x=\pi-\alpha+2k\pi$ | k entero; intersectar con el intervalo pedido y verificar restricciones originales. |
| $\cos x=\cos\alpha\iff x=\pm\alpha+2k\pi$ | k entero. Para tanx=tanα: x=α+kπ, con ambas tangentes definidas. |

## Capítulo 8 · Vectores, coordenadas y combinaciones lineales

### Qué representa un vector

Un desplazamiento tiene longitud, dirección y sentido. Trasladar su flecha sin girarla ni cambiar su longitud representa el mismo vector libre. El punto de partida de una flecha no es una componente adicional. En el plano escribimos $\mathbf v=(v_1,v_2)$; en el espacio, $\mathbf v=(v_1,v_2,v_3)$. Los números son sus componentes respecto de los ejes elegidos. Un punto indica posición; un vector indica desplazamiento. Si A=(1,−2,3) y B=(4,2,1), entonces $\overrightarrow{AB}=B-A=(3,4,-2)$, mientras que BA tiene componentes opuestas.

El vector nulo tiene todas sus componentes cero y módulo cero; no se le asigna dirección ni sentido. Dos vectores son iguales cuando coinciden todas sus componentes. Tener el mismo módulo solamente no alcanza: (3,4) y (−3,4) miden 5 pero no son iguales.

### Sumar y multiplicar por un escalar

La suma corresponde a realizar un desplazamiento después del otro. Algebraicamente se suman componentes homólogas. Si u=(2,−1,3) y v=(−1,4,2), u+v=(1,3,5) y 2u−v=(5,−6,4). Un escalar positivo cambia la longitud conservando sentido; uno negativo también invierte el sentido. Así $\|\lambda\mathbf u\|=|\lambda|\|\mathbf u\|$. La distributividad permite simplificar expresiones como 3(u−v)+2v=3u−v, sin inventar un producto ordinario entre vectores.

Una combinación lineal $a\mathbf u+b\mathbf v$ suma múltiplos de vectores dados. Preguntar si w es combinación de ellos significa buscar escalares a y b que satisfagan todas las componentes simultáneamente. Por ejemplo, con u=(1,1,0), v=(0,1,1), w=(2,5,3), la primera y tercera componentes obligan a=2 y b=3; la segunda confirma a+b=5. En cambio (2,6,3) no pertenece al mismo plano generado: las condiciones a=2 y b=3 darían segunda componente 5, no 6.

### Módulo, distancia y versores

Pitágoras da $\|\mathbf v\|=\sqrt{v_1^2+v_2^2+v_3^2}$. Para AB=(3,4,−2), la distancia entre A y B es √29. La distancia nunca es negativa y se anula únicamente si los puntos coinciden. La desigualdad triangular $\|\mathbf u+\mathbf v\|\leq\|\mathbf u\|+\|\mathbf v\|$ expresa que el camino directo no supera al recorrido quebrado.

Un versor tiene módulo 1. Para normalizar un vector no nulo se divide cada componente por su módulo. Si v=(−3,4), su versor de igual sentido es (−3/5,4/5). Los dos versores paralelos a v son ese vector y su opuesto. La frase «un vector de módulo 10 paralelo a v» admite dos respuestas, (−6,8) y (6,−8), salvo que se especifique el sentido. El vector nulo no se puede normalizar porque exigiría dividir por cero.

La base canónica permite escribir $(a,b,c)=a\mathbf i+b\mathbf j+c\mathbf k$. Los versores i,j,k son mutuamente perpendiculares y fijan una orientación. Las componentes pueden tener signo aunque el módulo no lo tenga.

### Paralelismo y parámetros

Dos vectores no nulos son paralelos si uno es múltiplo escalar del otro. Con u=(2,−3,1) y v=(4,k,2), las componentes primera y tercera fijan el factor 2; entonces k=−6. Es más seguro usar esta igualdad vectorial que dividir componente a componente, porque algunas pueden ser cero. Por ejemplo (0,2) y (0,−6) son paralelos y el cociente de sus primeras componentes no existe.

La ecuación $\mathbf r=\mathbf a+t\mathbf v$, con v no nulo, describe la recta que pasa por A y tiene dirección v. Si A=(1,2), v=(3,−1), sus puntos cumplen x=1+3t e y=2−t. Para averiguar si P=(7,0) está en ella, x exige t=2 y y confirma el mismo valor. P=(7,1) no está: sus componentes requieren parámetros diferentes. El segmento AB se obtiene con A+t(B−A), restringiendo 0≤t≤1; la recta completa permite cualquier t real.

### Independencia: cuándo una dirección agrega información

Una familia es linealmente independiente si la combinación igual a cero solamente se obtiene con todos los coeficientes nulos. Dos vectores no nulos del plano son independientes exactamente cuando no son paralelos. Si u=(1,2), v=(2,4), entonces 2u−v=0 muestra dependencia. Si u=(1,2), v=(2,−1), las ecuaciones a+2b=0 y 2a−b=0 fuerzan a=b=0. Estos últimos permiten representar cualquier vector del plano de manera única.

En el espacio, dos vectores independientes generan un plano de desplazamientos; se necesita un tercero fuera de ese plano para generar todo el espacio. No debe confundirse «tres vectores distintos» con «tres independientes». Un vector nulo vuelve dependiente a cualquier familia que lo contenga.

### Práctica y respuestas razonadas

**V8.1.** A=(−1,2), B=(5,−6): calculá AB, su módulo y sus dos versores paralelos. **V8.2.** Resolvé 2u+v=(7,1), u−v=(−1,5). **V8.3.** ¿Para qué k son paralelos (3,0,−6) y (k,0,4)? **V8.4.** Expresá (5,1) como combinación de (1,1) y (1,−1). **V8.5.** ¿Pertenece (2,3,4) al plano generado por (1,0,1) y (0,1,1)?

**Respuestas.** V8.1: AB=(6,−8), módulo 10, versores ±(3/5,−4/5). V8.2: al sumar las dos ecuaciones, 3u=(6,6), por lo que u=(2,2) y v=(3,−3). V8.3: la tercera componente fija factor −2/3 respecto del primero; k=−2. V8.4: a+b=5, a−b=1 dan a=3,b=2. V8.5: no; las primeras componentes impondrían a=2,b=3, y la tercera sería 5. Esta última comprobación ilustra por qué no se debe abandonar un sistema antes de revisar todas sus ecuaciones.


### Hoja de fórmulas del capítulo 8

| Relación | Significado y condiciones |
| --- | --- |
| $\overrightarrow{AB}=B-A,\quad\lVert v\rVert=\sqrt{v_1^2+v_2^2+v_3^2}$ | Coordenadas cartesianas ortonormales; en el plano omitir componente tercera. Distancia AB=norma de B−A. |
| $\widehat v=\frac v{\lVert v\rVert},\quad v\ne0$ | Versor de igual sentido; su opuesto también es paralelo. Para módulo L>0, usar ±L v/‖v‖. |
| $v=\lambda u$ | Paralelismo de vectores no nulos; resolver todas las componentes y evitar dividir por componentes cero. |
| $r=A+t(B-A)$ | Recta por A y B distintos, t real; segmento si 0≤t≤1. Un mismo t debe satisfacer todas las componentes. |

## Capítulo 9 · Productos de vectores y aplicaciones geométricas

### Producto escalar: medir cuánto coinciden dos direcciones

El producto escalar de u y v es un número real, definido por $\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2+u_3v_3$. Geométricamente vale $\|\mathbf u\|\|\mathbf v\|\cos\theta$, donde θ es el ángulo entre vectores no nulos, elegido entre 0 y π. Al igualar ambas expresiones se obtiene una manera de calcular ángulos sin dibujarlos a escala. Producto positivo significa ángulo agudo; negativo, obtuso; cero, perpendicularidad si ambos vectores son no nulos.

Para u=(1,2,2) y v=(2,−1,2), u·v=4 y ambos módulos valen 3. Por eso θ=arccos(4/9)≈63,61°. Si se pidiera el ángulo entre rectas, se suele tomar el menor entre sus direcciones, usando valor absoluto en el numerador; no es siempre el mismo ángulo que el de dos vectores orientados.

El producto es conmutativo, distributivo y satisface u·u=‖u‖². No se cancela como una multiplicación ordinaria: u·v=u·w solamente implica u·(v−w)=0, no v=w. El vector nulo tiene producto cero con cualquiera, pero no determina un ángulo de 90° porque el ángulo con el vector nulo está indefinido.

### Proyección escalar y vectorial

La componente escalar de u en la dirección de v es $(\mathbf u\cdot\mathbf v)/\|\mathbf v\|$; puede ser negativa y mide un desplazamiento con signo. La proyección vectorial es


$$
\operatorname{proy}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v,\qquad \mathbf v\ne\mathbf0.
$$


Con u=(3,4), v=(2,0), la proyección es (3,0), y el resto u−proy=(0,4) es perpendicular a v. La proyección escalar es 3. Si se reemplaza v por (−2,0), la proyección vectorial permanece (3,0), mientras la componente escalar pasa a −3. Esta distinción evita atribuir un signo a una longitud sin aclarar su orientación.

![Proyección y área orientada de dos vectores](/planos-de-estudio/img/elementos/vectores.svg)

### Producto vectorial: una perpendicular orientada

En el espacio tridimensional, el producto vectorial u×v es el vector


$$
(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).
$$


La segunda componente merece especial atención: al desarrollar el determinante simbólico por la primera fila aparece un signo menos delante del menor de j. El resultado es perpendicular a ambos factores. Su sentido lo fija la regla de la mano derecha respecto del orden u,v. Intercambiar el orden cambia el signo: v×u=−u×v. Por eso no es conmutativo. Sí es distributivo y compatible con escalares.

Si u=(1,2,0), v=(0,1,3), obtenemos u×v=(6,−3,1). Comprobamos u·(u×v)=6−6=0 y v·(u×v)=−3+3=0. El módulo √46 es el área del paralelogramo generado por ellos, pues $\|\mathbf u\times\mathbf v\|=\|\mathbf u\|\|\mathbf v\|\sin\theta$. El área del triángulo es √46/2. Si el producto se anula, los factores son paralelos o alguno es nulo; el área es cero.

Para puntos A,B,C, primero formá AB y AC y luego calculá $\frac12\|AB\times AC\|$. Usar directamente los vectores de posición B y C calcula otro triángulo, con vértice en el origen, salvo que A sea el origen.

### Producto mixto, volumen y coplanaridad

El escalar $\mathbf u\cdot(\mathbf v\times\mathbf w)$ es el determinante de las tres filas u,v,w. Su valor absoluto mide el volumen del paralelepípedo; el signo informa orientación. El volumen del tetraedro generado desde un vértice por esos vectores es la sexta parte. Para u=(1,2,0), v=(0,1,3), w=(2,0,1), v×w=(1,6,−2), producto mixto 13. Por tanto los volúmenes son 13 y 13/6.

Producto mixto cero equivale a dependencia lineal de los tres vectores: están contenidos en algún plano por el origen, incluso en casos degenerados. Si se pide coplanaridad de cuatro puntos A,B,C,D, se aplica a AB,AC,AD. Tres puntos cualesquiera siempre son coplanarios; el test interesante para puntos es con cuatro. Los intercambios de filas cambian el signo del determinante, pero no el volumen.

### Un problema con dos condiciones

Buscamos w=(a,b,c) perpendicular a u=(1,1,0) y v=(0,1,1), y de módulo √3. Las condiciones escalares son a+b=0 y b+c=0, por lo que w=(−b,b,−b). Su módulo al cuadrado es 3b². Igualarlo a 3 da b=±1: w=(−1,1,−1) o su opuesto. El producto u×v=(1,−1,1) permite llegar a las mismas dos respuestas normalizando y escalando. Si además se exige tercera componente positiva, queda (1,−1,1).

Este procedimiento separa tres decisiones: dirección perpendicular, longitud y sentido. Confundirlas suele producir una única respuesta cuando el enunciado admite dos, o aceptar un vector de dirección correcta con módulo equivocado.

### Práctica y respuestas

**V9.1.** Hallá k para que (2,k,−1) sea perpendicular a (1,3,2). **V9.2.** Calculá el ángulo de (1,1) y (1,−1). **V9.3.** Proyectá (2,3,1) sobre (1,0,1). **V9.4.** Hallá el área del triángulo A=(1,0,0), B=(2,1,0), C=(1,0,2). **V9.5.** ¿Son coplanarios (1,0,1), (0,1,1), (1,1,2)? **V9.6.** ¿Puede un producto escalar ser negativo? ¿Un área?

**Respuestas.** V9.1: 2+3k−2=0 da k=0. V9.2: producto cero y módulos no nulos, luego π/2. V9.3: producto 3, denominador 2, proyección (3/2,0,3/2); el resto (1/2,3,−1/2) verifica perpendicularidad. V9.4: AB=(1,1,0), AC=(0,0,2), producto (2,−2,0), área √2. V9.5: sí; el tercero es suma de los primeros dos, así que el mixto es cero. V9.6: el producto puede ser negativo por un ángulo obtuso; el área geométrica no, porque usa un módulo.


### Hoja de fórmulas del capítulo 9

| Relación | Significado y condiciones |
| --- | --- |
| $u\cdot v=\sum_j u_jv_j=\lVert u\rVert\lVert v\rVert\cos\theta$ | θ∈[0,π] si u,v no nulos. Producto cero caracteriza perpendicularidad en ese caso. |
| $\operatorname{proy}_v u=\frac{u\cdot v}{\lVert v\rVert^2}v$ | v≠0. La componente escalar orientada es (u·v)/‖v‖; no confundirla con el vector proyección. |
| $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ | Solo en ℝ³ con orientación canónica; v×u=−u×v y el resultado es perpendicular a ambos. |
| $A_{\triangle}=\tfrac12\lVert AB\times AC\rVert$ | El doble es el área del paralelogramo; usar desplazamientos desde un mismo vértice. |
| $V=\lvert u\cdot(v\times w)\rvert$ | Volumen del paralelepípedo; tetraedro V/6. Mixto cero equivale a dependencia de los tres vectores. |

## Formulario de la Unidad 4 · Vectores

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 8 · Operaciones vectoriales

| Relación | Significado y condiciones |
| --- | --- |
| $\overrightarrow{AB}=B-A,\quad\lVert v\rVert=\sqrt{v_1^2+v_2^2+v_3^2}$ | Coordenadas cartesianas ortonormales; en el plano omitir componente tercera. Distancia AB=norma de B−A. |
| $\widehat v=\frac v{\lVert v\rVert},\quad v\ne0$ | Versor de igual sentido; su opuesto también es paralelo. Para módulo L>0, usar ±L v/‖v‖. |
| $v=\lambda u$ | Paralelismo de vectores no nulos; resolver todas las componentes y evitar dividir por componentes cero. |
| $r=A+t(B-A)$ | Recta por A y B distintos, t real; segmento si 0≤t≤1. Un mismo t debe satisfacer todas las componentes. |

### Capítulo 9 · Productos y geometría

| Relación | Significado y condiciones |
| --- | --- |
| $u\cdot v=\sum_j u_jv_j=\lVert u\rVert\lVert v\rVert\cos\theta$ | θ∈[0,π] si u,v no nulos. Producto cero caracteriza perpendicularidad en ese caso. |
| $\operatorname{proy}_v u=\frac{u\cdot v}{\lVert v\rVert^2}v$ | v≠0. La componente escalar orientada es (u·v)/‖v‖; no confundirla con el vector proyección. |
| $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ | Solo en ℝ³ con orientación canónica; v×u=−u×v y el resultado es perpendicular a ambos. |
| $A_{\triangle}=\tfrac12\lVert AB\times AC\rVert$ | El doble es el área del paralelogramo; usar desplazamientos desde un mismo vértice. |
| $V=\lvert u\cdot(v\times w)\rvert$ | Volumen del paralelepípedo; tetraedro V/6. Mixto cero equivale a dependencia de los tres vectores. |

## Capítulo 10 · Funciones: dominio, imagen y lectura de gráficos

### La función incluye una regla y dos conjuntos

Una función f:A→B asigna a cada elemento x del dominio A exactamente un elemento f(x) del codominio B. Se puede describir mediante una fórmula, una tabla, un gráfico o una regla verbal. El codominio es el conjunto de llegada declarado; la imagen es el subconjunto de valores efectivamente obtenidos. En f:ℝ→ℝ, f(x)=x², el dominio y codominio son ℝ, pero la imagen es [0,∞). Decir «la imagen es ℝ porque allí llega la flecha» confunde dos datos diferentes.

Una relación no es función si algún elemento del dominio carece de imagen o tiene dos imágenes diferentes. La circunferencia x²+y²=1 no define y como función de x en [−1,1]: para x=0 admite y=1 e y=−1. Su semicircunferencia superior y=√(1−x²) sí lo hace. La prueba de la recta vertical expresa esta unicidad en el gráfico. Una función puede tomar el mismo valor para entradas distintas: x² no deja de ser función porque f(1)=f(−1).

### Cómo construir un dominio natural real

Cuando solo se da una expresión, el dominio natural real reúne las entradas que permiten efectuar todas sus operaciones. Un polinomio admite cualquier real. Un cociente exige denominador distinto de cero; una raíz de índice par exige radicando no negativo; un logaritmo exige argumento estrictamente positivo. Las restricciones se intersectan: deben cumplirse simultáneamente. Una raíz impar no impone signo al radicando. Una potencia de exponente real variable requiere un análisis de la definición empleada; no conviene extrapolar sin cuidado las reglas de exponentes enteros.

**Ejemplo 1.** Para $f(x)=\sqrt{x+2}/(x-1)$ se necesitan x≥−2 y x≠1. El dominio es [−2,1)∪(1,∞). El extremo −2 se incluye porque la raíz vale cero y el denominador no se anula allí.

**Ejemplo 2.** Para $g(x)=\ln\sqrt{(x-1)/(x+2)}$, el argumento del logaritmo debe ser positivo, por lo que la raíz no puede ser cero. Se necesita (x−1)/(x+2)>0. Los puntos críticos son −2 y 1; la tabla de signos da (−∞,−2)∪(1,∞). No basta pedir radicando ≥0 porque eso aceptaría x=1 y produciría ln0.

**Ejemplo 3.** $h(x)=1/\sqrt{4-x^2}$ requiere 4−x²>0: la raíz existe y además está en el denominador. Resulta −2<x<2. Simplificar antes de registrar estas condiciones puede borrar exclusiones que siguen perteneciendo a la función original.

### Imagen: resolver la pregunta al revés

Para encontrar la imagen preguntamos qué valores y permiten resolver y=f(x) con x en el dominio. La imagen no se obtiene simplemente copiando el dominio. En f(x)=(x−2)²+1, el cuadrado no es negativo, de modo que y≥1; y para todo y≥1 existen x=2±√(y−1). Por tanto la imagen es [1,∞). La segunda parte demuestra que no faltan valores dentro del intervalo propuesto.

Para g(x)=1/(x−2)+3, y=3 sería imposible porque exigiría 1/(x−2)=0. Todo y≠3 se obtiene con x=2+1/(y−3), que nunca es 2. La imagen es ℝ\{3}. Si restringimos el dominio a (2,∞), entonces 1/(x−2)>0 y la imagen pasa a (3,∞). La misma expresión con otro dominio describe otra función.

En un intervalo cerrado una función puede tener imagen acotada: f(x)=x² para −2≤x≤1 tiene imagen [0,4], no [1,4]. El mínimo interior x=0 debe considerarse; mirar solamente los extremos no alcanza.

### Ceros, signo y comparación de valores

Los ceros son entradas del dominio donde f(x)=0. El conjunto de positividad contiene las entradas donde f(x)>0; no son valores de y, sino valores de x. Para $f(x)=(x-1)(x+2)/(x-3)$, el dominio excluye 3 y los ceros son −2 y 1. Ordenamos −2,1,3 y ensayamos el signo en cada intervalo: f es negativa en (−∞,−2), positiva en (−2,1), negativa en (1,3) y positiva en (3,∞). El punto 3 nunca se agrega a un conjunto de signo, y los ceros se agregan solo si la desigualdad es no estricta.

La ordenada al origen es f(0), siempre que 0 pertenezca al dominio. Un cero de f se dibuja sobre el eje horizontal; f(0), sobre el vertical. Cuando se resuelve f(x)=g(x), se buscan abscisas de intersección, con x perteneciente a ambos dominios.

### Crecimiento, extremos y simetría

Una función es estrictamente creciente en un intervalo si x₁<x₂ implica f(x₁)<f(x₂); decreciente si se invierte la desigualdad. La comparación debe valer para cualquier par del intervalo. Estar por encima del eje no significa crecer: 1/x es positiva y decreciente en (0,∞). Una función constante cumple f(x₁)=f(x₂).

Un máximo absoluto alcanza un valor mayor o igual que todos los demás valores del dominio; un extremo local solo compara un entorno del punto. El supremo puede no alcanzarse: f(x)=x en (0,1) tiene supremo 1, pero no máximo. Para hablar de paridad se necesita dominio simétrico respecto de cero. Entonces f es par si f(−x)=f(x), e impar si f(−x)=−f(x). Una restricción de x² al dominio [0,∞) no se clasifica como par bajo esta definición porque −x no siempre pertenece al dominio.

### Práctica y respuestas

**F10.1.** Hallá el dominio de √(3−x)/(x+1). **F10.2.** Hallá el dominio de ln(x²−4). **F10.3.** Hallá la imagen de 2−(x+1)² en ℝ. **F10.4.** Hallá dominio, ceros y positividad de (x−2)/(x+1). **F10.5.** ¿Es sobreyectiva x²:ℝ→ℝ? ¿Y x²:ℝ→[0,∞)?

**Respuestas.** F10.1: (−∞,−1)∪(−1,3]. F10.2: (−∞,−2)∪(2,∞), porque el argumento debe ser positivo. F10.3: (−∞,2], con máximo en x=−1. F10.4: dominio ℝ\{−1}, cero 2, positividad (−∞,−1)∪(2,∞). F10.5: la primera no alcanza los negativos; la segunda sí es sobreyectiva porque todo y≥0 tiene preimagen √y. Ninguna es inyectiva sobre ℝ.


### Hoja de fórmulas del capítulo 10

| Relación | Significado y condiciones |
| --- | --- |
| $\operatorname{Im}f=\{f(x):x\in D_f\}$ | Imagen efectiva, distinta del codominio declarado si no hay sobreyectividad. |
| $\sqrt{u(x)}:\ u(x)\ge0;\quad\ln u(x):\ u(x)>0$ | Raíz cuadrada real; si la raíz está en un denominador exigir u>0. |
| $\frac{f(x)}{g(x)}:\quad x\in D_f\cap D_g,\ g(x)\ne0$ | Intersecar todas las restricciones de la expresión original; una cancelación no restituye puntos excluidos. |
| $f(-x)=f(x)\quad\text{o}\quad f(-x)=-f(x)$ | Paridad o imparidad respectivamente, solo sobre un dominio simétrico respecto de cero. |
| $x_1<x_2\Rightarrow f(x_1)<f(x_2)$ | Definición de estrictamente creciente en un intervalo; decreciente si la salida invierte la desigualdad. |

## Capítulo 11 · Familias algebraicas y transformaciones de gráficos

### Rectas y sistemas como problemas de funciones

La función afín f(x)=mx+b tiene pendiente m y ordenada al origen b. Entre dos puntos con abscisas diferentes, $m=(y_2-y_1)/(x_2-x_1)$. La ecuación punto-pendiente es y−y₁=m(x−x₁). Si pasa por (−1,4) y (3,−4), m=−2 y la función es y=−2x+2. Su cero es 1; decrece en todo ℝ y su imagen es ℝ. Cuando m=0 es constante y su imagen tiene un solo elemento.

Dos rectas no verticales son paralelas si tienen igual pendiente, y perpendiculares si sus pendientes cumplen m₁m₂=−1. Una recta vertical x=a no representa una función y=f(x); su perpendicular es horizontal. No hay que asignarle una «pendiente infinita» como si fuera un número real utilizable en productos.

Intersectar y=2x−1 con y=−x+5 equivale a resolver 2x−1=−x+5: x=2,y=3. Si las pendientes coinciden y las ordenadas difieren, no hay intersección; si coinciden ambas, hay infinitas soluciones. Un sistema puede representar un problema de cantidades: si dos entradas generales y tres reducidas cuestan 21, y una general y una reducida cuestan 8, las ecuaciones 2g+3r=21 y g+r=8 dan r=5 y g=3. La interpretación exige además comprobar que esos valores tienen sentido en el contexto.

### Cuadráticas en tres formas útiles

La forma general ax²+bx+c, a≠0, permite leer f(0)=c. La forma canónica a(x−h)²+k muestra vértice (h,k) y eje x=h. La forma factorizada a(x−r₁)(x−r₂), cuando existen raíces reales, permite estudiar ceros y signo. Son descripciones de la misma función, con información visible diferente.

Para f(x)=2x²−8x+6, completar cuadrados da 2(x−2)²−2, y factorizar da 2(x−1)(x−3). El vértice es (2,−2), la imagen [−2,∞), los ceros 1 y 3. Es positiva fuera de [1,3], negativa entre las raíces, decreciente hasta x=2 y creciente después. La disminución a la izquierda se justifica porque la distancia a 2 se reduce al avanzar hacia 2. No hace falta derivar todavía.

El discriminante Δ=b²−4ac clasifica las intersecciones con el eje: dos si Δ>0, una doble si Δ=0, ninguna real si Δ<0. Ausencia de raíces reales no significa ausencia de función ni de mínimo. x²+1 es siempre positiva y tiene mínimo 1.

![Transformación de una parábola y simetría entre función e inversa](/planos-de-estudio/img/elementos/funciones.svg)

### Polinomios: raíces y multiplicidad

Los polinomios tienen dominio ℝ y son continuos, hecho que se justificará en límites. Si r es raíz, x−r es factor. Una raíz de multiplicidad impar produce cambio de signo al atravesarla; una de multiplicidad par no lo produce. En p(x)=(x+2)(x−1)², el signo está determinado fuera de las raíces por x+2 porque el cuadrado es positivo allí. El gráfico cruza el eje en −2 y toca el eje en 1. Una raíz doble no equivale a dos puntos diferentes.

El término de mayor grado describe el comportamiento para entradas de gran módulo, pero no determina todas las ondulaciones intermedias. Un polinomio de grado n tiene a lo sumo n raíces reales distintas; puede tener menos. No es válido deducir que un cúbico tiene exactamente tres raíces reales.

### Racionales y restricciones que sobreviven a una cancelación

Una función racional es un cociente de polinomios con denominador no nulo. En


$$
r(x)=\frac{x^2-1}{x-1}=x+1,\qquad x\ne1,
$$


el gráfico es una recta con el punto (1,2) quitado. El dominio sigue excluyendo 1 y la imagen excluye 2. La expresión simplificada coincide en el dominio original, pero si se la declara en todo ℝ se obtiene otra función. No todo cero del denominador produce asíntota vertical: una cancelación completa puede generar un agujero. El análisis mediante límites del capítulo 15 distinguirá ambos casos.

Para r(x)=(2x+1)/(x−3), la división da 2+7/(x−3). Esta forma muestra las rectas de referencia x=3 e y=2 y facilita trasladar el gráfico de 1/x. La rama de x>3 queda por encima de 2; la de x<3, por debajo. No se une el gráfico atravesando x=3.

### Raíz, valor absoluto y transformaciones

La raíz cuadrada base √x tiene dominio e imagen [0,∞); x³ tiene dominio e imagen ℝ; √[3]{x} también. La función |x| se escribe x si x≥0 y −x si x<0. Es útil convertir expresiones con módulo en funciones por tramos antes de resolverlas o graficarlas.

Si g(x)=a f(b(x−h))+k, con a,b no nulos, h desplaza horizontalmente y k verticalmente; |a| escala alturas y el signo de a refleja respecto del eje horizontal. El factor b actúa sobre la entrada y cambia las distancias horizontales por 1/|b|; b negativo incluye reflexión. Para evitar reglas memorizadas al revés, seguí un punto: si (u,f(u)) está en la base, entonces $(h+u/b,\ a f(u)+k)$ está en g.

Ejemplo: g(x)=−2√(x−3)+1 parte de (0,0),(1,1),(4,2) y los lleva a (3,1),(4,−1),(7,−3). Su dominio es [3,∞), imagen (−∞,1], y decrece. En |x−2|+3, el vértice es (2,3); la traslación interna x−2 mueve a la derecha porque el argumento vale cero en x=2.

### Práctica y respuestas

**F11.1.** Hallá la recta por (2,−1) perpendicular a y=2x+4. **F11.2.** Pasá x²+6x+5 a forma canónica y factorizada. **F11.3.** Hallá imagen y ceros de −(x−1)²+4. **F11.4.** Describí el gráfico y dominio de (x²−4)/(x−2). **F11.5.** Hallá dominio e imagen de 3−√(2x+4).

**Respuestas.** F11.1: m=−1/2, y+1=−(x−2)/2, es decir y=−x/2. F11.2: (x+3)²−4=(x+1)(x+5). F11.3: imagen (−∞,4], ceros −1 y 3. F11.4: y=x+2 con x≠2, agujero (2,4). F11.5: x≥−2; la raíz recorre [0,∞), de modo que la imagen es (−∞,3].


### Hoja de fórmulas del capítulo 11

| Relación | Significado y condiciones |
| --- | --- |
| $m=\frac{y_2-y_1}{x_2-x_1},\quad y-y_1=m(x-x_1)$ | Recta no vertical, x2≠x1; perpendiculares no verticales cumplen m1m2=−1. |
| $ax^2+bx+c=a(x-h)^2+k,\quad h=-\frac b{2a},\ k=f(h)$ | a≠0. Vértice (h,k), imagen [k,∞) si a>0 y (−∞,k] si a<0. |
| $g(x)=a f(b(x-h))+k$ | a,b no nulos; un punto (u,f(u)) se transforma en (h+u/b,a f(u)+k). Registrar dominio transformado. |
| $\lvert x\rvert=\begin{cases}x&x\ge0\\-x&x<0\end{cases}$ | El módulo admite tratamiento por tramos; no se elimina sin examinar signo. |

## Capítulo 12 · Exponenciales, logaritmos y funciones trigonométricas

### Exponencial: una razón de cambio multiplicativa

La función $f(x)=a^x$ se define para a>0 y a≠1. Tiene dominio ℝ e imagen (0,∞), pasa por (0,1) y nunca se anula. Si a>1 es estrictamente creciente; si 0<a<1 es estrictamente decreciente. En ambos casos es inyectiva. El valor a=1 produce una constante y no tiene logaritmo inverso; una base negativa no define una exponencial real para toda entrada real.

Sumar una unidad a la entrada multiplica la salida por a: a^(x+1)=a·a^x. Esto distingue un crecimiento exponencial de uno lineal, donde cada incremento de entrada agrega una cantidad fija. Un modelo N(t)=500·1,08^t describe incrementos del 8% por período, no de 8 unidades. Si se permite t real se está usando una interpolación exponencial del modelo; el significado físico de esos tiempos debe justificarse aparte.

Para resolver 3^(2x−1)=27, escribimos 27=3³. La inyectividad permite igualar exponentes: 2x−1=3, de donde x=2. Para 2^x=5 no hay una potencia entera conveniente; recurrimos al logaritmo. En desigualdades hay que mirar la base: (1/3)^x≥9=(1/3)^(−2) implica x≤−2, porque la función decrece.

### Logaritmo: la entrada que produce una potencia

El número y=logₐx es el único exponente que satisface a^y=x. Se requiere x>0, a>0, a≠1. La función logarítmica tiene dominio (0,∞), imagen ℝ, pasa por (1,0) y es la inversa de la exponencial de la misma base. Si a>1 crece; si 0<a<1 decrece. El logaritmo natural ln usa la base e≈2,71828. En este manual, «log» sin base no se usa en resultados numéricos para evitar ambigüedad.

Las leyes logₐ(uv)=logₐu+logₐv, logₐ(u/v)=logₐu−logₐv y logₐ(u^r)=r logₐu se usan con argumentos positivos y potencias reales bien definidas. No existe una ley log(u+v)=logu+logv. Por ejemplo ln(1+1)=ln2, mientras ln1+ln1=0. Para expresiones con signo, ln(x²)=2ln|x| cuando x≠0; escribir 2lnx perdería los valores x<0.

El cambio de base $\log_a x=\ln x/\ln a$ permite calcular con una sola tecla de logaritmo. Así 2^x=5 da x=ln5/ln2≈2,32193. La base y el argumento cumplen roles diferentes: log₂8=3 y log₈2=1/3.

**Ecuación con dominio.** Resolver ln(x−1)+ln(x+2)=ln4. Primero x>1. Luego ln[(x−1)(x+2)]=ln4 implica x²+x−2=4, es decir x²+x−6=0. Los candidatos son 2 y −3; solo 2 pertenece al dominio original. Verificación: ln1+ln4=ln4. Si se omite la restricción se acepta una solución falsa.

![Exponencial y logaritmo como funciones inversas](/planos-de-estudio/img/elementos/exponencial.svg)

### Seno y coseno como funciones de un número real

Ahora la entrada x representa una medida angular en radianes. Seno y coseno tienen dominio ℝ e imagen [−1,1], período fundamental 2π. Seno es impar y coseno par. Los ceros de sinx son kπ y los de cosx son π/2+kπ, k entero. Seno crece en [−π/2,π/2] y decrece en [π/2,3π/2]; esas tendencias se repiten por periodicidad. Coseno decrece en [0,π] y crece en [π,2π]. No son inyectivas en todo ℝ.

Para $g(x)=A\sin(B(x-h))+D$, A,B≠0, la amplitud es |A|, el período 2π/|B|, la línea media y=D y la imagen [D−|A|,D+|A|]. En g(x)=3sin(2(x−π/4))−1, la amplitud es 3, período π e imagen [−4,2]. La entrada x=π/4 corresponde a un cruce de la línea media con argumento cero. Para dibujar un período, hacé que el argumento recorra 0,π/2,π,3π/2,2π y resolvé las cinco entradas correspondientes.

La tangente sinx/cosx excluye x=π/2+kπ, tiene imagen ℝ, es impar y su período fundamental es π. Crece en cada intervalo (−π/2+kπ,π/2+kπ). No se dice que sea creciente en todo su dominio con la definición global: una pareja de entradas a lados de una asíntota puede invertir la comparación. Sus ramas no se conectan a través de los puntos excluidos.

### Inversas trigonométricas y sus convenciones

Para definir inversas hay que restringir los dominios originales. arcsin:[−1,1]→[−π/2,π/2] invierte al seno restringido; arccos:[−1,1]→[0,π] invierte al coseno; arctan:ℝ→(−π/2,π/2) invierte a la tangente en su rama central. Estas convenciones seleccionan una respuesta principal, no todas las soluciones de una ecuación trigonométrica.

arcsin(sin(5π/6))=arcsin(1/2)=π/6, no 5π/6. En cambio sin(arcsinx)=x para todo x∈[−1,1]. La escritura sin⁻¹ puede significar arcsin en algunas calculadoras, pero el recíproco 1/sinx es cosecante: son operaciones distintas. Antes de evaluar un ángulo verificá el modo RAD o DEG.

### Práctica y respuestas

**F12.1.** Resolvé 4^(x−1)=8. **F12.2.** Resolvé log₃(x+1)=2 y (1/2)^x<1/8. **F12.3.** Resolvé ln(x²−1)=ln3. **F12.4.** Hallá dominio e imagen de ln(x−2)+1. **F12.5.** Hallá amplitud, período e imagen de −2cos(3x)+4. **F12.6.** Evaluá arccos(cos(4π/3)).

**Respuestas.** F12.1: 2^(2x−2)=2³ da x=5/2. F12.2: x=8 y x>3, respectivamente. F12.3: x²−1=3 da x=±2; ambos hacen positivo el argumento. F12.4: dominio (2,∞), imagen ℝ. F12.5: amplitud 2, período 2π/3 e imagen [2,6]. F12.6: el coseno vale −1/2 y la salida principal es 2π/3.


### Hoja de fórmulas del capítulo 12

| Relación | Significado y condiciones |
| --- | --- |
| $\log_a x=\frac{\ln x}{\ln a}$ | a>0,a≠1,x>0; exponencial y logaritmo crecen si a>1 y decrecen si 0<a<1. |
| $\ln(uv)=\ln u+\ln v,\quad\ln(u/v)=\ln u-\ln v$ | u,v positivos; ln(u+v) no se separa. ln(x²)=2ln&#124;x&#124; para x≠0. |
| $g(x)=A\sin(B(x-h))+D:\quad T=\frac{2\pi}{\lvert B\rvert}$ | A,B no nulos; amplitud &#124;A&#124;, imagen [D−&#124;A&#124;,D+&#124;A&#124;]. Lo mismo para coseno. |
| $D_{\tan}=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}$ | Tangente tiene imagen ℝ y período π; seno y coseno tienen imagen [−1,1] y período 2π. |
| $\arcsin:[-1,1]\to[-\pi/2,\pi/2],\quad\arccos:[-1,1]\to[0,\pi]$ | Ramas principales; arctan:ℝ→(−π/2,π/2). Una inversa principal no enumera todas las soluciones trigonométricas. |

## Capítulo 13 · Operaciones, composición y función inversa

### Operar funciones también exige operar dominios

La suma, diferencia y producto de f y g se definen en la intersección de sus dominios. El cociente agrega la condición g(x)≠0. Si f(x)=√x y g(x)=x−1, entonces f+g tiene dominio [0,∞), mientras f/g tiene dominio [0,1)∪(1,∞). Que el numerador sea cero en algún punto no es un problema si el denominador no se anula; el caso 0/0 no está definido.

No se debe confundir producto y composición: (fg)(x)=f(x)g(x), pero (f∘g)(x)=f(g(x)). Con f(x)=x² y g(x)=x+1, el producto es x²(x+1), f∘g=(x+1)² y g∘f=x²+1. Generalmente las tres funciones son distintas. La composición es asociativa cuando las entradas tienen sentido; no es conmutativa.

### El dominio de una composición, paso a paso

La entrada x debe pertenecer primero al dominio de g; después g(x) debe pertenecer al de f. Por tanto $D_{f\circ g}=\{x\in D_g:g(x)\in D_f\}$. Es una condición de dos etapas, no simplemente la intersección de dominios.

**Ejemplo 1.** f(x)=√x y g(x)=x²−4. Para f∘g se necesita x²−4≥0, así que el dominio es (−∞,−2]∪[2,∞), y la expresión es √(x²−4). Para g∘f, la raíz exige x≥0 y el cuadrado posterior da x−4. La fórmula simplificada es lineal, pero el dominio sigue siendo [0,∞).

**Ejemplo 2.** f(x)=lnx, g(x)=1−x². El dominio de f∘g es −1<x<1, porque el argumento del logaritmo debe ser positivo. El dominio de g∘f es (0,∞), y su expresión 1−(lnx)². Los extremos de los dos dominios tienen significados diferentes: ceros del argumento en el primero y falta de definición del logaritmo en el segundo.

**Ejemplo 3: un agujero que una simplificación oculta.** Tomemos $m(x)=1/(x-2)$ y $l(t)=(t+3)/(t+4)$. m requiere x≠2, y l requiere m(x)≠−4. Esta segunda condición excluye x=7/4. Al simplificar:


$$
l(m(x))=\frac{3x-5}{4x-7},\qquad x\notin\{2,7/4\}.
$$


La racional simplificada solo muestra la exclusión 7/4; x=2 sigue excluido por la función interna. Además el valor 1 no pertenece a la imagen de la composición, pues la ecuación (3x−5)/(4x−7)=1 obliga x=2. El valor 3/4 tampoco se obtiene, porque implicaría −20=−21. Los demás valores sí producen una entrada admisible: x=(7y−5)/(4y−3). Así la imagen es ℝ\{1,3/4}. Este ejemplo original desarrolla el mismo cuidado de dominios que el recurso complementario de composición de la cátedra.

### Inyectividad, sobreyectividad y biyectividad

f es inyectiva si f(x₁)=f(x₂) implica x₁=x₂. En el gráfico ninguna recta horizontal corta más de una vez. Es sobreyectiva si cada elemento del codominio tiene al menos una preimagen, es decir, si imagen=codominio. Es biyectiva si cumple ambas condiciones, y entonces tiene inversa como función entre esos conjuntos.

Para f:ℝ→ℝ, f(x)=2x−3, la igualdad de salidas fuerza la igualdad de entradas, y cualquier y real tiene preimagen (y+3)/2. Es biyectiva. Para f(x)=x² en ℝ, la igualdad de salidas solo lleva a x₁=±x₂; no es inyectiva. Restringiendo f:[0,∞)→[0,∞) se vuelve biyectiva y su inversa es √x. Con dominio (−∞,0] la inversa sería −√x. Elegir una rama no es un detalle opcional.

### Hallar y comprobar una inversa

Primero establecé dominio e imagen y justificá inyectividad. Escribí y=f(x), despejá x en función de y e intercambiá los nombres al final. El dominio de f⁻¹ es la imagen de f; su imagen es el dominio de f. El gráfico de la inversa se refleja respecto de y=x, porque intercambia las coordenadas de cada punto.

Sea f(x)=(2x−1)/(x+3), con x≠−3. Despejar yx+3y=2x−1 da x=(1+3y)/(2−y), por lo que $f^{-1}(x)=(1+3x)/(2-x)$, x≠2. La imagen de f es ℝ\{2}. Para verificar f⁻¹(f(x))=x, sustituí conservando x≠−3; el denominador intermedio 2−f(x)=7/(x+3) nunca se anula allí. La otra composición vale identidad para x≠2. Escribir ambas identidades sin sus dominios deja incompleta la comprobación.

La notación f⁻¹ no significa 1/f. Para f(x)=2x−3, la inversa es (x+3)/2 y el recíproco es 1/(2x−3), con dominios y resultados completamente diferentes.

### Práctica y respuestas

**F13.1.** Con f(x)=1/x y g(x)=x−2, hallá ambas composiciones y dominios. **F13.2.** Con f(x)=√(x+1), g(x)=x², hallá f∘g y g∘f, con dominios. **F13.3.** Invertí 3x+5 en ℝ. **F13.4.** Invertí (x−2)² con dominio [2,∞) y codominio [0,∞). **F13.5.** ¿Qué cambia si se toma dominio (−∞,2] en F13.4?

**Respuestas.** F13.1: f∘g=1/(x−2), x≠2; g∘f=1/x−2, x≠0. F13.2: √(x²+1), dominio ℝ; x+1, dominio [−1,∞). F13.3: (x−5)/3. F13.4: 2+√x, x≥0. F13.5: se elige la otra rama, 2−√x. En ambos casos el intervalo restringido hace que la cuadrática sea inyectiva.


### Hoja de fórmulas del capítulo 13

| Relación | Significado y condiciones |
| --- | --- |
| $D_{f\circ g}=\{x\in D_g:g(x)\in D_f\}$ | Aplicar primero g y después f; composición generalmente no conmutativa. |
| $f^{-1}\circ f=\operatorname{id}_{D_f},\quad f\circ f^{-1}=\operatorname{id}_{\operatorname{Im}f}$ | Para una biyección entre dominio e imagen; dominio de la inversa=imagen original. No confundir inversa con recíproco. |
| $f(x_1)=f(x_2)\Rightarrow x_1=x_2$ | Inyectividad. Sobreyectividad: imagen=codominio declarado; biyectividad exige ambas. |

## Formulario de la Unidad 5 · Funciones reales

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 10 · Concepto y dominio

| Relación | Significado y condiciones |
| --- | --- |
| $\operatorname{Im}f=\{f(x):x\in D_f\}$ | Imagen efectiva, distinta del codominio declarado si no hay sobreyectividad. |
| $\sqrt{u(x)}:\ u(x)\ge0;\quad\ln u(x):\ u(x)>0$ | Raíz cuadrada real; si la raíz está en un denominador exigir u>0. |
| $\frac{f(x)}{g(x)}:\quad x\in D_f\cap D_g,\ g(x)\ne0$ | Intersecar todas las restricciones de la expresión original; una cancelación no restituye puntos excluidos. |
| $f(-x)=f(x)\quad\text{o}\quad f(-x)=-f(x)$ | Paridad o imparidad respectivamente, solo sobre un dominio simétrico respecto de cero. |
| $x_1<x_2\Rightarrow f(x_1)<f(x_2)$ | Definición de estrictamente creciente en un intervalo; decreciente si la salida invierte la desigualdad. |

### Capítulo 11 · Familias y transformaciones

| Relación | Significado y condiciones |
| --- | --- |
| $m=\frac{y_2-y_1}{x_2-x_1},\quad y-y_1=m(x-x_1)$ | Recta no vertical, x2≠x1; perpendiculares no verticales cumplen m1m2=−1. |
| $ax^2+bx+c=a(x-h)^2+k,\quad h=-\frac b{2a},\ k=f(h)$ | a≠0. Vértice (h,k), imagen [k,∞) si a>0 y (−∞,k] si a<0. |
| $g(x)=a f(b(x-h))+k$ | a,b no nulos; un punto (u,f(u)) se transforma en (h+u/b,a f(u)+k). Registrar dominio transformado. |
| $\lvert x\rvert=\begin{cases}x&x\ge0\\-x&x<0\end{cases}$ | El módulo admite tratamiento por tramos; no se elimina sin examinar signo. |

### Capítulo 12 · Exponenciales y trigonométricas

| Relación | Significado y condiciones |
| --- | --- |
| $\log_a x=\frac{\ln x}{\ln a}$ | a>0,a≠1,x>0; exponencial y logaritmo crecen si a>1 y decrecen si 0<a<1. |
| $\ln(uv)=\ln u+\ln v,\quad\ln(u/v)=\ln u-\ln v$ | u,v positivos; ln(u+v) no se separa. ln(x²)=2ln&#124;x&#124; para x≠0. |
| $g(x)=A\sin(B(x-h))+D:\quad T=\frac{2\pi}{\lvert B\rvert}$ | A,B no nulos; amplitud &#124;A&#124;, imagen [D−&#124;A&#124;,D+&#124;A&#124;]. Lo mismo para coseno. |
| $D_{\tan}=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}$ | Tangente tiene imagen ℝ y período π; seno y coseno tienen imagen [−1,1] y período 2π. |
| $\arcsin:[-1,1]\to[-\pi/2,\pi/2],\quad\arccos:[-1,1]\to[0,\pi]$ | Ramas principales; arctan:ℝ→(−π/2,π/2). Una inversa principal no enumera todas las soluciones trigonométricas. |

### Capítulo 13 · Composición e inversas

| Relación | Significado y condiciones |
| --- | --- |
| $D_{f\circ g}=\{x\in D_g:g(x)\in D_f\}$ | Aplicar primero g y después f; composición generalmente no conmutativa. |
| $f^{-1}\circ f=\operatorname{id}_{D_f},\quad f\circ f^{-1}=\operatorname{id}_{\operatorname{Im}f}$ | Para una biyección entre dominio e imagen; dominio de la inversa=imagen original. No confundir inversa con recíproco. |
| $f(x_1)=f(x_2)\Rightarrow x_1=x_2$ | Inyectividad. Sobreyectividad: imagen=codominio declarado; biyectividad exige ambas. |

## Capítulo 14 · La idea de límite y su definición

### Acercarse no significa reemplazar automáticamente

Decir $\lim_{x\to a}f(x)=L$ significa que podemos conseguir valores de f(x) tan próximos a L como queramos tomando x suficientemente cerca de a, pero distinto de a. El límite describe el comportamiento alrededor de un punto. El valor f(a) puede coincidir con L, ser diferente o no existir. El punto a debe ser un punto de acumulación del dominio para que esta aproximación tenga sentido.

Para f(x)=(x²−1)/(x−1), x≠1, la simplificación f(x)=x+1 muestra que al acercarnos a 1 las salidas se acercan a 2. El límite es 2 aunque f(1) no existe. Si agregamos una definición f(1)=7, el límite sigue siendo 2: modificar solamente el valor aislado no altera el comportamiento vecino. En cambio el gráfico ya no tiene simplemente un agujero: agrega un punto fuera de la prolongación natural.

Una tabla puede sugerir el resultado, pero no demostrarlo. Si se evalúan solo entradas positivas, no se controla el lado izquierdo. Si se usan pocos decimales puede confundirse un crecimiento lento con un valor finito. Y una función puede oscilar entre las entradas de la tabla. La definición y los teoremas reemplazan esa evidencia parcial por un argumento que vale para todas las entradas suficientemente cercanas.

### Límites laterales

El límite por izquierda usa x<a y el de derecha, x>a. El límite bilateral finito existe si y solo si ambos laterales existen y son iguales. Para $f(x)=|x|/x$, x≠0, el lateral izquierdo en cero es −1 y el derecho es 1; el bilateral no existe. No corresponde promediarlos ni elegir el valor que aparece más veces.

En funciones por tramos, primero identificá qué regla rige en cada lado. Sea f(x)=2x+1 para x<1, y x²+2 para x≥1. El lateral izquierdo vale 3, el derecho también 3 y f(1)=3. Si el segundo tramo fuera x²+4, el lateral derecho sería 5 y no habría límite bilateral. El signo ≤ o < en el extremo decide f(1), pero no cambia los laterales mientras no altere los valores vecinos.

### Definición ε–δ: controlar la salida mediante la entrada

La formulación precisa es:


$$
\forall\varepsilon>0\ \exists\delta>0:\quad x\in D_f,\quad0<|x-a|<\delta\ \Longrightarrow\ |f(x)-L|<\varepsilon.
$$


ε es una tolerancia de salida elegida arbitrariamente. δ es una tolerancia de entrada que puede depender de ε. Debe servir para todas las entradas admisibles del entorno reducido, no elegirse de nuevo para cada x. El orden de cuantificadores es esencial. No se exige f(a)=L porque 0<|x−a| excluye el centro.

**Demostración lineal.** Probemos lim al tender x a 2 de (3x−1)=5. Como |(3x−1)−5|=3|x−2|, para cualquier ε>0 elegimos δ=ε/3. Si 0<|x−2|<δ, el error de salida es menor que 3δ=ε. Esto concluye la prueba. No es obligatorio elegir el mayor δ posible: cualquier control que funcione basta.

**Demostración cuadrática.** Para lim de x² en x=2 igual a 4, factorizamos |x²−4|=|x−2||x+2|. El segundo factor depende de x. Si imponemos |x−2|<1, entonces 1<x<3 y |x+2|<5. Elegimos δ=min(1,ε/5). Con 0<|x−2|<δ, resulta |x²−4|<5δ≤ε. La cota auxiliar evita elegir δ con una x todavía desconocida. Es una herramienta frecuente en demostraciones, aunque los cálculos posteriores usen leyes de límites.

### Leyes y condiciones

Si f→L y g→M, con límites reales, entonces f+g→L+M, fg→LM y cf→cL. Para el cociente se exige M≠0. Para raíces y composiciones se debe controlar el dominio y la continuidad de la operación exterior. Por eso los polinomios se evalúan sustituyendo y las racionales también cuando el denominador no se anula en el punto. Las reglas no autorizan «dividir por un límite cero» y obtener un número.

Si una expresión produce 0/0, se llama forma indeterminada: no es el resultado, sino una señal de que la ley del cociente no decide el límite. Ejemplos al tender x a 0: x/x→1; x²/x→0; x/x²=1/x no tiene límite bilateral finito. Los tres tienen numerador y denominador tendiendo a cero, pero comportamientos distintos.

### Teorema del encaje y oscilación controlada

Si g(x)≤f(x)≤h(x) cerca de a y g,h tienen el mismo límite L, entonces f también tiende a L. Como −1≤sin(1/x)≤1, obtenemos −x²≤x²sin(1/x)≤x². Ambos extremos tienden a cero, así que la función central también. sin(1/x) sola no tiene límite en cero: podemos elegir sucesiones de entradas que tiendan a cero con seno igual a 1 y otras con seno igual a −1. Acotar una función no garantiza que tenga límite; hace falta que las cotas se junten o disponer de otro argumento.

![Tres comportamientos diferentes: agujero, salto y asíntota](/planos-de-estudio/img/elementos/limites.svg)

### Práctica y respuestas

**L14.1.** Calculá lim en x→3 de (2x²−x+1). **L14.2.** Calculá ambos laterales en cero de |x|/x. **L14.3.** Justificá con ε–δ lim en x→1 de (−4x+6)=2. **L14.4.** Calculá lim en x→0 de x sin(1/x). **L14.5.** ¿Qué valor de c da límite bilateral en x=2 para f(x)=x+1 si x<2, y cx−1 si x≥2?

**Respuestas.** L14.1: 16, por leyes de polinomios. L14.2: −1 y 1; no existe el bilateral. L14.3: el error es 4|x−1| y sirve δ=ε/4. L14.4: |x sin(1/x)|≤|x|, luego el límite es 0. L14.5: el lateral izquierdo es 3 y el derecho 2c−1; igualarlos da c=2. Esta igualdad establece el límite; la continuidad se estudiará en el capítulo 16.


### Hoja de fórmulas del capítulo 14

| Relación | Significado y condiciones |
| --- | --- |
| $\forall\varepsilon>0\ \exists\delta>0:\ 0<\lvert x-a\rvert<\delta\Rightarrow\lvert f(x)-L\rvert<\varepsilon$ | Definición de límite finito, para x del dominio y a punto de acumulación. No exige f(a)=L. |
| $\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L$ | En una aproximación bilateral con ambos lados disponibles; límites laterales diferentes impiden el bilateral. |
| $\lim(f/g)=L/M\quad(M\ne0)$ | Si f→L,g→M reales. Suma y producto pasan al límite sin la condición M≠0. 0/0 es indeterminación. |
| $g\le f\le h,\quad g\to L,\ h\to L\Rightarrow f\to L$ | Teorema del encaje; las desigualdades deben valer en un entorno reducido relevante. |

## Capítulo 15 · Técnicas de límites, infinitos y asíntotas

### Un método de decisión antes de calcular

Registrá el punto y el lado de aproximación; identificá el dominio vecino y probá sustitución cuando las leyes lo permiten. Si aparece una indeterminación, elegí una transformación que preserve la función en un entorno reducido: factorizar, racionalizar, usar identidades o cambiar variable. Volvé a evaluar después de cada transformación. No hace falta que ambas expresiones estén definidas en el centro para que tengan el mismo límite allí, pero sí deben coincidir cerca del centro en las entradas relevantes.

**Factorización.** En x→2, (x²−4)/(x−2)=(x−2)(x+2)/(x−2)=x+2 para x≠2. El límite es 4. En x→1, (x³−1)/(x²−1)=(x²+x+1)/(x+1) para x≠1 y cerca de 1; el resultado es 3/2. Se cancelan factores, no términos: (x²+1)/(x+1) no permite cancelar x² con x.

**Racionalización.** En x→0,


$$
\frac{\sqrt{1+x}-1}{x}=\frac{1}{\sqrt{1+x}+1}\longrightarrow\frac12.
$$


Multiplicamos por el conjugado, usamos (√(1+x)−1)(√(1+x)+1)=x y cancelamos x≠0. En x→∞, √(x²+x)−x también se racionaliza: x/[√(x²+x)+x]=1/[√(1+1/x)+1]→1/2, usando x>0 al extraer √(x²)=x. En x→−∞ esa extracción sería |x|=−x; omitir el valor absoluto cambia el resultado.

### El límite trigonométrico fundamental

Con el ángulo t medido en radianes, $\lim_{t\to0}\sin t/t=1$. Una justificación geométrica para 0<t<π/2 compara áreas y obtiene sin t<t<tan t, equivalente a cos t<sin t/t<1. Como cos t→1, el encaje da el resultado por derecha; la paridad del cociente da el mismo por izquierda. Los radianes son parte de la hipótesis: si la entrada se midiera en grados aparecería un factor π/180.

De aquí salen lim tan t/t=1 y lim (1−cos t)/t²=1/2, este último multiplicando por 1+cos t y usando sin²t. Para lim en x→0 de sin(5x)/(2x), escribí (5/2)sin(5x)/(5x), que tiende a 5/2. Para (1−cos3x)/x², el resultado es 9/2. Cada transformación debe hacer que el argumento de la razón fundamental sea el mismo que el de su denominador.

### Límites infinitos y signo de los laterales

Decir f(x)→+∞ cuando x→a significa que para cualquier umbral real M positivo, f(x)>M en un entorno reducido suficientemente pequeño del lado considerado. ∞ no es un número real ni un valor al cual sustituir. Si f(x)=1/(x−2), al acercarse por derecha el denominador es positivo y pequeño: +∞. Por izquierda: −∞. La recta x=2 es una asíntota vertical porque al menos uno de sus laterales es infinito. Para 1/(x−2)² ambos son +∞.

No todo cociente con denominador que tiende a cero diverge: el numerador también puede hacerlo y generar una indeterminación. En (x−2)/(x−2), el límite es 1 y no hay asíntota. Si el numerador tiende a un número no nulo, entonces el signo del denominador vecino sí permite decidir el infinito.

### Entradas que se alejan: x→±∞

En una racional conviene dividir numerador y denominador por la mayor potencia del denominador. Para (3x²−x+1)/(2x²+5), el límite en ambos infinitos es 3/2. Si el grado del numerador es menor, el límite es 0; si es mayor, el cociente puede crecer o decrecer sin cota, y se debe estudiar el signo y la paridad. Por ejemplo x³/x²=x tiende a +∞ por derecha y −∞ por izquierda.

La comparación «mayor grado» es para polinomios, no para cualquier expresión. Los logaritmos crecen más lentamente que potencias positivas, y las exponenciales de base mayor que 1 superan a esas potencias; estas comparaciones requieren teoremas adicionales. No se deben tratar ln x como si fuera un monomio de grado uno.

Para $\sqrt{x^2+1}/x$, al dividir por |x| resulta (|x|/x)√(1+1/x²). El límite es 1 en +∞ y −1 en −∞. Este ejemplo detecta el error frecuente de reemplazar √(x²) por x sin mirar el lado.

### Indeterminaciones exponenciales

Si una base positiva a(x)→1 y un exponente b(x) se hace infinito, la forma 1^∞ no determina el resultado. Tomamos logaritmo: ln[a(x)^b(x)]=b(x)ln a(x). Si ese producto tiende a un real L, la expresión original tiende a e^L por continuidad de la exponencial. Usamos el límite notable ln(1+u)/u→1 cuando u→0, u>−1.

Ejemplo: (1+2/x)^(3x), para x→+∞. El logaritmo es 3x ln(1+2/x)=6·ln(1+2/x)/(2/x)→6; el resultado es e⁶. Este es un teorema notable, no una consecuencia de reemplazar la base por 1 antes de tratar el exponente. Del mismo modo (e^u−1)/u→1 permite resolver lim en x→0 de (e^(4x)−1)/x=4. Aquí no se necesita la regla de L'Hôpital, que no usamos como atajo previo al estudio de derivadas.

### Asíntotas horizontales y oblicuas

La recta y=L es asíntota horizontal en +∞ si f(x)→L allí; el comportamiento en −∞ se analiza aparte. Una asíntota puede ser atravesada por el gráfico: no es una barrera. Para una oblicua y=mx+b, con m≠0, se exige f(x)−(mx+b)→0 en el infinito estudiado. Se puede calcular m=lim f(x)/x y luego b=lim[f(x)−mx], si ambos son finitos.

La división (x²+1)/(x−1)=x+1+2/(x−1) muestra asíntota oblicua y=x+1 en ambos infinitos, y vertical x=1. No tiene horizontal en esos mismos extremos. Para (x²−1)/(x−1), x=1 es un agujero, no una vertical. El análisis debe hacerse después de simplificar conservando el dominio original.

### Práctica y respuestas

**L15.1.** lim en x→3 de (x²−9)/(x−3). **L15.2.** lim en x→0 de (√(4+x)−2)/x. **L15.3.** lim en x→0 de sin(3x)/sin(2x). **L15.4.** Ambos límites en ±∞ de (5x²+1)/(x²−2). **L15.5.** Ambos laterales en x=−1 de 2/(x+1). **L15.6.** Asíntota oblicua de (x²+2)/(x−2). **L15.7.** lim en x→+∞ de (1−1/x)^(2x).

**Respuestas.** L15.1: 6 por factorización. L15.2: 1/4 por conjugado. L15.3: 3/2 tras insertar 3x y 2x. L15.4: ambos 5. L15.5: −∞ por izquierda, +∞ por derecha. L15.6: división x+2+6/(x−2), asíntota y=x+2. L15.7: e⁻², tomando logaritmos; la base es positiva para x>1.


### Hoja de fórmulas del capítulo 15

| Relación | Significado y condiciones |
| --- | --- |
| $\lim_{t\to0}\frac{\sin t}t=1,\quad\lim_{t\to0}\frac{1-\cos t}{t^2}=\frac12$ | Argumento en radianes; ajustar factores al cambiar t por una función que tienda a cero. |
| $\lim_{u\to0}\frac{\ln(1+u)}u=1,\quad\lim_{u\to0}\frac{e^u-1}u=1$ | En el primero u>−1; se usan valores no nulos del entorno para las razones. |
| $a(x)^{b(x)}=e^{b(x)\ln a(x)}$ | Base positiva; si el exponente transformado tiende a L real, el límite es e^L. La forma 1^∞ no decide sola. |
| $\sqrt{x^2}=\lvert x\rvert$ | Al extraer potencias en límites en −∞ conservar el signo mediante el valor absoluto. |
| $\lim_{x\to\pm\infty}f(x)=L\Rightarrow y=L\text{ es asíntota horizontal}$ | Analizar cada infinito por separado. Una asíntota vertical x=a requiere al menos un lateral infinito. |
| $m=\lim\frac{f(x)}x,\quad b=\lim[f(x)-mx]$ | Asíntota oblicua y=mx+b si m,b son reales finitos y m≠0; límites en un mismo infinito. |

## Capítulo 16 · Continuidad y teoremas de existencia

### Las tres condiciones en un punto

f es continua en a si a pertenece a su dominio, existe el límite de f(x) cuando x→a y ese límite coincide con f(a). En un extremo de intervalo se usa continuidad lateral relativa al dominio. Una función racional es continua en cada punto donde su denominador no se anula; esto no la hace continua «en todo ℝ» si tiene exclusiones. Las sumas, productos, cocientes con denominador no nulo y composiciones admisibles de funciones continuas son continuos.

El lenguaje «dibujar sin levantar el lápiz» puede orientar una primera lectura, pero no reemplaza la definición. Una función definida en dos intervalos separados puede ser continua en cada punto de su dominio aunque no exista una única curva conectada. Por ejemplo 1/x es continua en ℝ\{0}; no se puede afirmar continuidad en x=0 porque ni siquiera está definida allí.

### Discontinuidades y posibles reparaciones

Una discontinuidad evitable tiene límite finito pero falta el valor central o es diferente. Para (x²−4)/(x−2), el límite en 2 es 4. Se obtiene una prolongación continua definiendo f(2)=4. Un salto tiene laterales finitos diferentes; ningún valor aislado puede repararlo. Una discontinuidad infinita tiene por lo menos un lateral infinito. También puede fallar el límite por oscilación, como sin(1/x) en cero, sin que haya un salto finito ni una asíntota vertical.

Algunas clasificaciones reservan «discontinuidad» a puntos del dominio y hablan de singularidad si falta el punto. Aquí se indica siempre qué sucede: valor existente o ausente, laterales, límite y posibilidad de extensión, para que el nombre no oculte la matemática.

### Funciones por tramos con parámetros

Sea f(x)=(x²−1)/(x−1) para x<1, f(1)=a y f(x)=bx+1 para x>1. El lateral izquierdo es 2, el derecho b+1. Para continuidad se requieren simultáneamente b+1=2 y a=2: b=1,a=2. Ajustar solo a no puede compensar dos laterales distintos.

Para f(x)=sinx/x si x≠0, y f(0)=c, el límite trigonométrico exige c=1. Para f(x)=1/x si x≠0 no existe ningún c que haga continua la extensión: los límites laterales son infinitos y de signos opuestos. Un parámetro modifica lo que el enunciado permite modificar; no convierte una divergencia en un número.

### Teorema de valores intermedios

Si f es continua en [a,b], entonces toma todos los valores entre f(a) y f(b). Para cualquier k entre esas salidas existe c∈[a,b] con f(c)=k. Si k está estrictamente entre ellas, puede elegirse c interior. El teorema asegura existencia, no una fórmula para hallar c ni unicidad.

La continuidad es necesaria en la hipótesis: una función que salta de −1 a 1 puede no tomar el valor 0. Tampoco puede aplicarse a un intervalo que atraviesa un punto ajeno al dominio. Por ejemplo 1/x tiene signos opuestos en −1 y 1, pero no tiene cero; falla la continuidad en todo [−1,1].

### Bolzano y bisección

Si f es continua en [a,b] y f(a)f(b)<0, existe al menos una raíz c∈(a,b). Es el caso k=0 del teorema anterior. Para f(x)=x³+x−1, f(0)=−1 y f(1)=1; existe una raíz en (0,1). Además f es estrictamente creciente porque x³ y x lo son, así que esa raíz es única. La unicidad se justificó aparte: no proviene de Bolzano.

La bisección aproxima la raíz manteniendo un intervalo con cambio de signo. En [0,1], el punto medio 0,5 produce −0,375, de modo que conservamos [0,5;1]. El siguiente punto 0,75 produce 0,171875 y conservamos [0,5;0,75]. El siguiente, 0,625, produce −0,130859375: queda [0,625;0,75]. Tras n particiones, la longitud del intervalo es (b−a)/2ⁿ; el error al tomar su punto medio no supera la mitad de esa longitud. Si aparece una evaluación exactamente cero, ya encontramos una raíz y se puede detener.

**Advertencia sobre una frase del material.** El apunte de límite y continuidad, página 31 del PDF, añade que la cantidad de ceros sería «siempre un número impar». Esa conclusión no forma parte de Bolzano y es falsa en general. El polinomio f(x)=x²(x−1) es continuo en [−1,2], tiene f(−1)=−2 y f(2)=4, pero posee dos ceros distintos en el intervalo: 0 y 1. La raíz 0 no cambia el signo por su multiplicidad par. La conclusión válida es al menos una raíz; pueden existir varias, e incluso infinitas en ejemplos continuos. Contar multiplicidades de polinomios es otra pregunta, con hipótesis y convenciones adicionales.

### Teorema de Weierstrass: extremos que se alcanzan

Una función continua en un intervalo cerrado y acotado [a,b] alcanza un máximo absoluto y un mínimo absoluto. Las tres condiciones cumplen un papel: continuidad, cierre y acotación del intervalo. f(x)=x en (0,1) es continua y acotada, pero no alcanza sus extremos; f(x)=x en ℝ es continua y su dominio cerrado, pero no tiene extremos absolutos; 1/x en (0,1] se hace no acotada porque falta el extremo cero y no hay extensión continua allí.

El teorema tampoco afirma que los extremos se encuentren en los extremos del intervalo. Para x² en [−1,2], el mínimo 0 está en x=0 y el máximo 4 en x=2. En esta materia podemos resolver familias simples algebraicamente; el cálculo sistemático de optimización requerirá herramientas posteriores y comprobar siempre candidatos interiores y extremos de intervalo.

### Práctica y respuestas

**C16.1.** Prolongá continuamente (x²−9)/(x−3) en 3. **C16.2.** Sea f(x)=ax+2 si x<1 y x²+b si x≥1. ¿Qué relación asegura continuidad? **C16.3.** Demostrá que x³−2 tiene una raíz en (1,2). **C16.4.** ¿Puede usarse Bolzano para 1/(x−2) en [1,3]? **C16.5.** ¿Alcanza máximo x² en [−2,1]? **C16.6.** Si no hay cambio de signo, ¿se descarta una raíz?

**Respuestas.** C16.1: definir f(3)=6. C16.2: a+2=1+b, es decir b=a+1; hay una familia de soluciones. C16.3: polinomio continuo, valores −1 y 6; aplicar Bolzano. C16.4: no, falta continuidad y definición en 2. C16.5: sí, vale 4 y se alcanza en −2. C16.6: no; x² tiene raíz en cero aunque sus valores en −1 y 1 sean ambos positivos. El cambio de signo es suficiente, no necesario.


### Hoja de fórmulas del capítulo 16

| Relación | Significado y condiciones |
| --- | --- |
| $f\text{ continua en }a\iff\lim_{x\to a}f(x)=f(a)$ | Debe existir f(a) y el límite pertinente; en extremos usar continuidad lateral relativa al dominio. |
| $f\in C([a,b]),\quad f(a)f(b)<0\Rightarrow\exists c\in(a,b):f(c)=0$ | Bolzano: al menos una raíz; no asegura unicidad ni un número impar de ceros distintos. |
| $f\in C([a,b]),\quad k\text{ entre }f(a),f(b)\Rightarrow\exists c\in[a,b]:f(c)=k$ | Teorema de valores intermedios; comprobar continuidad en todo el intervalo. |
| $f\in C([a,b])\Rightarrow f\text{ alcanza máximo y mínimo}$ | Weierstrass para intervalo real cerrado y acotado; no ubica por sí solo los extremos. |
| $\ell_n=(b-a)/2^n$ | Longitud del intervalo tras n bisecciones; el punto medio tiene error a una raíz contenida ≤ℓn/2. |

## Formulario de la Unidad 6 · Límite y continuidad

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 14 · Definición de límite

| Relación | Significado y condiciones |
| --- | --- |
| $\forall\varepsilon>0\ \exists\delta>0:\ 0<\lvert x-a\rvert<\delta\Rightarrow\lvert f(x)-L\rvert<\varepsilon$ | Definición de límite finito, para x del dominio y a punto de acumulación. No exige f(a)=L. |
| $\lim_{x\to a}f(x)=L\iff\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L$ | En una aproximación bilateral con ambos lados disponibles; límites laterales diferentes impiden el bilateral. |
| $\lim(f/g)=L/M\quad(M\ne0)$ | Si f→L,g→M reales. Suma y producto pasan al límite sin la condición M≠0. 0/0 es indeterminación. |
| $g\le f\le h,\quad g\to L,\ h\to L\Rightarrow f\to L$ | Teorema del encaje; las desigualdades deben valer en un entorno reducido relevante. |

### Capítulo 15 · Técnicas y asíntotas

| Relación | Significado y condiciones |
| --- | --- |
| $\lim_{t\to0}\frac{\sin t}t=1,\quad\lim_{t\to0}\frac{1-\cos t}{t^2}=\frac12$ | Argumento en radianes; ajustar factores al cambiar t por una función que tienda a cero. |
| $\lim_{u\to0}\frac{\ln(1+u)}u=1,\quad\lim_{u\to0}\frac{e^u-1}u=1$ | En el primero u>−1; se usan valores no nulos del entorno para las razones. |
| $a(x)^{b(x)}=e^{b(x)\ln a(x)}$ | Base positiva; si el exponente transformado tiende a L real, el límite es e^L. La forma 1^∞ no decide sola. |
| $\sqrt{x^2}=\lvert x\rvert$ | Al extraer potencias en límites en −∞ conservar el signo mediante el valor absoluto. |
| $\lim_{x\to\pm\infty}f(x)=L\Rightarrow y=L\text{ es asíntota horizontal}$ | Analizar cada infinito por separado. Una asíntota vertical x=a requiere al menos un lateral infinito. |
| $m=\lim\frac{f(x)}x,\quad b=\lim[f(x)-mx]$ | Asíntota oblicua y=mx+b si m,b son reales finitos y m≠0; límites en un mismo infinito. |

### Capítulo 16 · Continuidad y existencia

| Relación | Significado y condiciones |
| --- | --- |
| $f\text{ continua en }a\iff\lim_{x\to a}f(x)=f(a)$ | Debe existir f(a) y el límite pertinente; en extremos usar continuidad lateral relativa al dominio. |
| $f\in C([a,b]),\quad f(a)f(b)<0\Rightarrow\exists c\in(a,b):f(c)=0$ | Bolzano: al menos una raíz; no asegura unicidad ni un número impar de ceros distintos. |
| $f\in C([a,b]),\quad k\text{ entre }f(a),f(b)\Rightarrow\exists c\in[a,b]:f(c)=k$ | Teorema de valores intermedios; comprobar continuidad en todo el intervalo. |
| $f\in C([a,b])\Rightarrow f\text{ alcanza máximo y mínimo}$ | Weierstrass para intervalo real cerrado y acotado; no ubica por sí solo los extremos. |
| $\ell_n=(b-a)/2^n$ | Longitud del intervalo tras n bisecciones; el punto medio tiene error a una raíz contenida ≤ℓn/2. |

## Capítulo 17 · Derivada: variación instantánea y recta tangente

### De una pendiente promedio a una pendiente local

Entre dos entradas a y a+h, con h≠0, la tasa media de variación es [f(a+h)−f(a)]/h. En un gráfico representa la pendiente de la recta secante entre los puntos correspondientes. La derivada f′(a) es el límite de esas pendientes cuando h→0, si existe como número real finito:


$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.
$$


Esta definición exige que f(a) exista y que haya entradas del dominio suficientemente próximas. En un punto interior se comparan ambos lados. En un extremo de dominio puede estudiarse una derivada lateral, que debe nombrarse como tal. La derivada no es f(a+h)−f(a) sola ni el cociente f(a)/a. El incremento de salida se divide por el de entrada antes de tomar límite.

Si f mide metros y la entrada segundos, la tasa media y la derivada se expresan en metros por segundo. En un problema puramente matemático no se inventan unidades; se interpreta una variación de salida por unidad de entrada.

### Calcular por definición sin dividir por cero

Para f(x)=x²,


$$
\frac{f(a+h)-f(a)}h=\frac{(a+h)^2-a^2}h=2a+h\quad(h\ne0).
$$


El límite es 2a. No sustituimos h=0 en el primer cociente: simplificamos una igualdad válida en el entorno reducido y después tomamos límite. Para f(x)=3x−5, la razón incremental es 3h/h=3, por lo que toda pendiente tangente coincide con la pendiente de la propia recta. Para una constante c, el numerador es cero y la derivada es cero.

Con f(x)=1/x, a≠0, la razón incremental vale −1/[a(a+h)], siempre que a+h≠0. Su límite es −1/a². Se necesita mantener a distinto de cero: no existe derivada en un punto donde la función no está definida.

Para f(x)=√x y a>0, racionalizar da


$$
\frac{\sqrt{a+h}-\sqrt a}{h}=\frac1{\sqrt{a+h}+\sqrt a}\longrightarrow\frac1{2\sqrt a}.
$$


En a=0 solo hay aproximación por derecha y el cociente 1/√h tiende a +∞; no hay derivada finita allí. Que una curva tenga una dirección tangente vertical no significa que su derivada exista como real.

### Ecuación de la tangente y de la normal

Si f es derivable en a, la tangente en (a,f(a)) es y−f(a)=f′(a)(x−a). Para x² en a=2, el punto es (2,4), pendiente 4 y tangente y=4x−4. La normal es la perpendicular por ese punto. Si f′(a)≠0, su pendiente es −1/f′(a), por lo que y−4=−(x−2)/4.

Si f′(a)=0, la tangente es horizontal y la normal vertical x=a. No se escribe una pendiente −1/0. Si la curva tiene tangente vertical, su normal puede ser horizontal, pero ese caso debe analizarse mediante la geometría o el límite de pendientes, no aplicando una fórmula con derivada finita inexistente.

![Secantes que se aproximan a una tangente y una esquina sin derivada](/planos-de-estudio/img/elementos/derivada.svg)

### Derivabilidad y continuidad: la implicación correcta

Si f es derivable en a, entonces es continua en a. Para verlo, para h≠0 escribimos f(a+h)−f(a)=[(f(a+h)−f(a))/h]h. El primer factor tiende al real f′(a) y el segundo a cero; el incremento tiende a cero. Se deduce f(a+h)→f(a).

La recíproca es falsa. |x| es continua en cero, pero su cociente incremental es |h|/h: −1 por izquierda y 1 por derecha. La esquina impide una pendiente única. En x≠0 sí es derivable, con derivada −1 si x<0 y 1 si x>0. La existencia de una fórmula por cada lado no garantiza que las derivadas laterales coincidan en la unión.

También hay una tangente vertical sin derivada real finita: para f(x)=∛x en cero, el cociente es 1/|h|^(2/3), que crece a +∞ por ambos lados. No es una esquina como |x|, pero tampoco admite f′(0) real. Y una discontinuidad elimina automáticamente la posibilidad de derivabilidad, sin necesidad de calcular cocientes.

### Interpretación de una aproximación local

La tangente sugiere f(a+h)≈f(a)+f′(a)h cuando h es pequeño. Esta aproximación no es una identidad exacta ni trae una cota de error automática. Para √(4,04), tomamos a=4, h=0,04 y f′(4)=1/4: obtenemos 2+0,01=2,01. El valor exacto es aproximadamente 2,009975, por lo que la aproximación es buena en este caso. La calidad depende de la función y del tamaño del incremento; estudiar errores con precisión requiere hipótesis adicionales.

### Práctica y respuestas

**D17.1.** Derivá por definición f(x)=2x²−3 en un punto a. **D17.2.** Hallá tangente y normal a x² en a=1. **D17.3.** Hallá tangente y normal a x² en a=0. **D17.4.** Estudiá derivabilidad de |x−2| en 2. **D17.5.** Para s(t)=t²+2t, compará velocidad media entre t=1 y t=3 con velocidad instantánea en t=1.

**Respuestas.** D17.1: el cociente se simplifica a 4a+2h y el límite es 4a. D17.2: tangente y−1=2(x−1); normal y−1=−(x−1)/2. D17.3: tangente y=0 y normal x=0. D17.4: continua, pero pendientes laterales −1 y 1, por lo que no es derivable. D17.5: s(1)=3,s(3)=15, tasa media 6; s′(1)=4. La tasa media corresponde a todo el intervalo, la instantánea al punto inicial.


### Hoja de fórmulas del capítulo 17

| Relación | Significado y condiciones |
| --- | --- |
| $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h$ | Derivada real finita si existe el límite; en puntos interiores bilateral. Derivada lateral debe identificarse. |
| $y-f(a)=f'(a)(x-a)$ | Tangente para derivada finita. Normal: pendiente −1/f′(a) si f′(a)≠0; si es cero, normal vertical x=a. |
| $f\text{ derivable en }a\Rightarrow f\text{ continua en }a$ | La recíproca falla; &#124;x&#124; en cero es continua sin derivada. |
| $f(a+h)\approx f(a)+f'(a)h$ | Aproximación local para h pequeño; no es igualdad ni cota de error automática. |

## Capítulo 18 · Reglas de derivación y funciones compuestas

### Por qué necesitamos reglas

Calcular cada derivada desde el cociente incremental sería posible en muchos casos elementales, pero repetitivo. Las reglas se demuestran usando límites y permiten conservar el significado local mientras se opera con expresiones más complejas. Antes de derivar, registrá dónde está definida la función; después determiná dónde existen los factores que aparecen en la derivada. Una expresión algebraica simplificada no debe extender el dominio original sin advertirlo.

Las reglas básicas son (c)′=0, (cf)′=cf′, (f+g)′=f′+g′ y (xⁿ)′=nxⁿ⁻¹ en los puntos donde la potencia tiene la regularidad necesaria. Para exponentes enteros positivos esto vale en todo ℝ; para exponentes negativos se excluye cero; para exponentes reales generales se usa x>0 como dominio seguro de x^r=e^(r ln x). Algunas potencias admiten extensiones a valores negativos, pero se revisan separadamente.

### Producto y cociente

La derivada de fg es f′g+fg′, no f′g′. Un esquema de demostración consiste en sumar y restar f(a+h)g(a) dentro del incremento del producto, agrupar y pasar al límite usando continuidad de los factores derivables. Para f(x)=(x²+1)sinx, resulta f′=2x sinx+(x²+1)cosx. Derivar solo el primer factor deja sin contabilizar la variación del segundo.

La regla del cociente es $(f/g)'=(f'g-fg')/g^2$, con g≠0. En y=(x²+1)/(x−1), y′=[2x(x−1)−(x²+1)]/(x−1)²=(x²−2x−1)/(x−1)², x≠1. El orden del numerador importa: invertirlo cambia todo el signo. Como comprobación independiente, dividir primero da y=x+1+2/(x−1), cuya derivada 1−2/(x−1)² coincide.

### Regla de la cadena: derivar cada nivel

Si y=f(g(x)), la derivada es f′(g(x))g′(x), cuando g es derivable en x y f lo es en g(x). Se deriva la función exterior evaluada en la interior, y luego se multiplica por la derivada interior. En (3x²−1)^5, la exterior es potencia quinta y la interior 3x²−1: y′=5(3x²−1)^4·6x=30x(3x²−1)^4.

Para $y=\sqrt{1+\sin^2(3x)}$, hay raíz, suma, cuadrado, seno y función lineal. Se obtiene


$$
y'=\frac{3\sin(3x)\cos(3x)}{\sqrt{1+\sin^2(3x)}}.
$$


El denominador nunca se anula y la función es derivable en todo ℝ. Escribir los niveles antes de simplificar ayuda a no perder el factor 3 ni el factor 2 del cuadrado.

### Exponenciales y logaritmos

Las relaciones fundamentales son (e^x)′=e^x y (lnx)′=1/x para x>0. Por cadena, (e^u)′=e^u u′, (a^u)′=a^u ln(a)u′, con a>0, y (lnu)′=u′/u donde u>0. También (ln|u|)′=u′/u donde u≠0: aquí el valor absoluto permite argumentos interiores negativos sin pedir ln de un número negativo.

Ejemplo: y=ln(x²−1) tiene dominio x<−1 o x>1, y y′=2x/(x²−1) allí. La expresión derivada está definida también entre −1 y 1, pero no es la derivada de esta función en ese intervalo porque la función original no existe allí. En cambio ln|x²−1| sí existe entre esos puntos y tiene la misma fórmula derivada en un dominio mayor.

Para y=x^x, x>0, no se usa la regla de potencia con exponente constante ni la de exponencial de base constante. Escribimos y=e^(xlnx); entonces y′=x^x(lnx+1). Esta reescritura es una forma de derivación logarítmica. En productos de potencias puede simplificar el cálculo, pero hay que cuidar positividad o usar valores absolutos cuando corresponda.

### Trigonométricas e inversas

En radianes, (sinx)′=cosx, (cosx)′=−sinx, (tanx)′=1/cos²x. Las derivadas de cotangente, secante y cosecante se obtienen por cociente: −1/sin²x, secx tanx y −cscx cotx, respectivamente, en sus dominios. Si la entrada es u(x), cada una lleva el factor u′.

Las inversas satisfacen (arcsinx)′=1/√(1−x²), (arccosx)′=−1/√(1−x²) para −1<x<1, y (arctanx)′=1/(1+x²) para todo real. Para y=arctan(2x), y′=2/(1+4x²). Para y=arcsin(x²), el dominio de la función es [−1,1] pero esta fórmula derivada, 2x/√(1−x⁴), corresponde al interior; en los extremos no proporciona una derivada finita.

La derivada de una inversa se justifica derivando f(f⁻¹(x))=x: $ (f^{-1})'(x)=1/f'(f^{-1}(x))$, siempre que la inversa sea derivable en el contexto y el denominador no sea cero. No es 1/f′(x) sin cambiar el argumento.

### Una rutina de control

Separá estructura y simplificación: identificá suma, producto, cociente y composición; derivá con paréntesis; recién después factorízá o reducí términos. Comprobá un punto sencillo o una forma equivalente cuando sea posible. No hay razón para desarrollar un cuadrado de un binomio si la forma factorizada permite ver signos y ceros con más claridad. Una calculadora simbólica puede verificar una identidad, pero no decide por sí sola qué dominio corresponde a tu enunciado.

### Práctica y respuestas

**D18.1.** Derivá (x³−2x)e^x. **D18.2.** Derivá ln(1+x²). **D18.3.** Derivá sin²(5x). **D18.4.** Derivá (2x+1)/(x²+1). **D18.5.** Derivá 3^(x²). **D18.6.** Derivá ln|x| y explicitá dominio. **D18.7.** Derivá arccos(3x).

**Respuestas.** D18.1: e^x(x³+3x²−2x−2). D18.2: 2x/(1+x²), todo real. D18.3: 10sin(5x)cos(5x). D18.4: (−2x²−2x+2)/(x²+1)². D18.5: 2x ln3·3^(x²). D18.6: 1/x para x≠0. D18.7: −3/√(1−9x²), para |x|<1/3; la función original está definida también en los extremos ±1/3, pero no tiene derivada finita allí.


### Hoja de fórmulas del capítulo 18

| Relación | Significado y condiciones |
| --- | --- |
| $(uv)'=u'v+uv',\quad(u/v)'=\frac{u'v-uv'}{v^2}$ | u,v derivables; en cociente v≠0. Sumas y factores constantes se derivan término a término. |
| $(f\circ g)'=(f'\circ g)g'$ | Regla de cadena; g derivable en x y f derivable en g(x). |
| $(x^r)'=rx^{r-1},\quad(e^u)'=e^uu',\quad(a^u)'=a^u\ln(a)u'$ | Para potencia real general usar x>0; enteros permiten dominios mayores. Base a>0 constante. |
| $(\ln u)'=u'/u,\quad(\ln\lvert u\rvert)'=u'/u$ | Primera requiere u>0; segunda u≠0. La fórmula derivada no amplía el dominio original. |
| $(\sin u)'=\cos(u)u',\quad(\cos u)'=-\sin(u)u',\quad(\tan u)'=u'/\cos^2u$ | Radianes; tangente requiere cosu≠0. |
| $(\cot u)'=-u'/\sin^2u,\quad(\sec u)'=\sec u\tan u\,u',\quad(\csc u)'=-\csc u\cot u\,u'$ | Respectivos denominadores no nulos. |
| $(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}},\quad(\arccos u)'=-\frac{u'}{\sqrt{1-u^2}},\quad(\arctan u)'=\frac{u'}{1+u^2}$ | Primeras dos con &#124;u&#124;<1; arctan sin esa restricción. u debe ser derivable. |
| $(x^x)'=x^x(1+\ln x)$ | x>0; derivar escribiendo x^x=e^(x ln x), no como potencia de exponente constante. |

## Capítulo 19 · Uniones por tramos, derivación implícita y orden superior

### Cómo estudiar una unión sin aplicar una regla fuera de lugar

En el interior de cada tramo se pueden usar reglas ordinarias. En el punto de unión hay que comprobar primero continuidad; si falla, ya no hay derivada. Si es continua, se comparan los límites laterales del cociente incremental. Cuando cada expresión de tramo tiene derivada lateral bien comportada hasta la unión, pueden calcularse esas pendientes directamente; la justificación sigue siendo la definición.

Sea f(x)=x² para x≤1, y ax+b para x>1. Continuidad exige a+b=1. La derivada por izquierda en 1 vale 2; por derecha vale a. Derivabilidad exige a=2 y, por continuidad, b=−1. La función resultante tiene una tangente común y no presenta salto ni esquina en la unión. Si se igualaran solo derivadas, cualquier b produciría la misma pendiente derecha, incluso los que generan un salto.

**Otro ejemplo.** f(x)=sinx para x≤0 y ax²+bx+c para x>0. La continuidad en cero impone c=0; derivabilidad impone b=1 porque la derivada izquierda es cos0=1. El parámetro a queda libre para la primera derivada. Si además se pide segunda derivada en cero, las derivadas de cada lado son cosx y 2ax+1; sus pendientes laterales en cero son 0 y 2a, por lo que a=0.

### Derivable no implica derivada continua

Definamos f(0)=0 y f(x)=x²sin(1/x) si x≠0. Como |f(x)|≤x², es continua en cero. Su derivada allí se calcula desde la definición: f(h)/h=h sin(1/h)→0, por lo que f′(0)=0. Para x≠0, las reglas dan f′(x)=2x sin(1/x)−cos(1/x). El término del coseno oscila y no tiene límite en cero; la derivada no es continua allí.

Esto distingue tres niveles: continuidad de f, existencia de f′ y continuidad de f′. Una función con derivada continua es derivable, y una derivable es continua; las recíprocas no valen en general. No hace falta exigir continuidad de la derivada para que exista la tangente en el punto.

### Derivar una relación implícita

Una ecuación F(x,y)=0 puede describir una curva sin despejar una única función y=f(x) global. Si localmente y depende derivablemente de x, al derivar cada aparición de y hay que aplicar la cadena. Para x²+y²=25 obtenemos 2x+2yy′=0. Si y≠0, $y'=-x/y$. En el punto (3,4), la pendiente es −3/4 y la tangente y−4=−3(x−3)/4.

En (5,0), la fórmula divide por cero. La circunferencia tiene allí tangente vertical x=5, y cerca del punto no puede representarse como una única función derivable y(x) que atraviese ambas ramas. No significa que la curva desaparezca ni que cualquier pendiente sea válida. Las condiciones de la fórmula son parte del resultado.

Para xy+y²=6, la derivada es y+xy′+2yy′=0. Si x+2y≠0, resulta y′=−y/(x+2y). En (1,2), que pertenece a la curva porque 2+4=6, la pendiente es −2/5. Antes de calcular la tangente hay que verificar que el punto satisfaga la relación; sustituir un punto ajeno produce una recta sin el significado solicitado.

### Derivadas de orden superior

La segunda derivada es la derivada de la primera, f″=(f′)′; la tercera es f‴, y f^(n) denota orden n. No es una potencia de f. Para f(x)=x⁴−3x², f′=4x³−6x, f″=12x²−6, f‴=24x, f^(4)=24 y f^(5)=0. Un polinomio de grado n tiene derivada de orden n constante no nula y las siguientes nulas.

Para f(x)=lnx, x>0: f′=1/x, f″=−1/x², f‴=2/x³. En general $f^{(n)}(x)=(-1)^{n-1}(n-1)!/x^n$ para n≥1. La fórmula se puede comprobar por inducción, derivando un término y observando cómo aparece el factor n. Las derivadas de seno y coseno repiten un ciclo de cuatro: sin,cos,−sin,−cos,sin. La derivada de orden 12 de cosx es cosx, porque 12 es múltiplo de 4.

### Segunda derivada implícita

En la circunferencia, partimos de 2x+2yy′=0 y volvemos a derivar: 2+2(y′)²+2yy″=0. Por tanto $y''=-[1+(y')^2]/y$. Sustituyendo y′=−x/y y x²+y²=25, queda y″=−25/y³, en las ramas donde y≠0. En (3,4), y″=−25/64. Derivar −x/y sin tener en cuenta que y también depende de x daría una expresión incorrecta.

Si la variable representa tiempo, las derivadas sucesivas de posición se interpretan como velocidad y aceleración. Para s(t)=t³−6t²+9t, v=3t²−12t+9 y a=6t−12. En t=1, la velocidad es cero pero la aceleración es −6; reposo instantáneo no equivale a ausencia de cambio de velocidad.

### Práctica y respuestas

**D19.1.** Elegí a,b para que f=x²+1 si x≤0 y ax+b si x>0 sea derivable en cero. **D19.2.** Derivá implícitamente x²+xy+y²=7 y evaluá en (1,2). **D19.3.** Hallá la tercera derivada de e^(2x). **D19.4.** Hallá la derivada de orden 7 de sinx. **D19.5.** ¿Por qué una función con salto no puede ser derivable? **D19.6.** Para y²=x, obtené y′ y y″ donde y≠0.

**Respuestas.** D19.1: continuidad b=1 y pendientes a=0. D19.2: 2x+y+xy′+2yy′=0, de modo que y′=−(2x+y)/(x+2y); en (1,2) vale −4/5. D19.3: 8e^(2x). D19.4: −cosx. D19.5: la derivabilidad implicaría continuidad, contradiciendo el salto. D19.6: y′=1/(2y); derivando 2yy′=1 se obtiene y″=−1/(4y³). La restricción excluye el vértice con tangente vertical.


### Hoja de fórmulas del capítulo 19

| Relación | Significado y condiciones |
| --- | --- |
| $F_x+F_y y'=0,\quad y'=-F_x/F_y$ | Para una rama y(x) derivable de F(x,y)=0 con F diferenciable y Fy≠0; en ejemplos derivar cada y por cadena. |
| $x^2+y^2=R^2:\quad y'=-x/y,\quad y''=-R^2/y^3$ | R>0 y rama con y≠0; en y=0 las tangentes de la circunferencia son verticales. |
| $(\ln x)^{(n)}=(-1)^{n-1}(n-1)!/x^n$ | x>0 y n entero≥1; n indica orden de derivada, no potencia. |
| $f_-\to f(a),\ f_+\to f(a),\quad f'_-(a)=f'_+(a)\in\mathbb R$ | En uniones por tramos: comprobar continuidad y después pendientes laterales finitas usando el cociente incremental. |

## Formulario de la Unidad 7 · Derivadas

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 17 · Definición de derivada

| Relación | Significado y condiciones |
| --- | --- |
| $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h$ | Derivada real finita si existe el límite; en puntos interiores bilateral. Derivada lateral debe identificarse. |
| $y-f(a)=f'(a)(x-a)$ | Tangente para derivada finita. Normal: pendiente −1/f′(a) si f′(a)≠0; si es cero, normal vertical x=a. |
| $f\text{ derivable en }a\Rightarrow f\text{ continua en }a$ | La recíproca falla; &#124;x&#124; en cero es continua sin derivada. |
| $f(a+h)\approx f(a)+f'(a)h$ | Aproximación local para h pequeño; no es igualdad ni cota de error automática. |

### Capítulo 18 · Reglas de derivación

| Relación | Significado y condiciones |
| --- | --- |
| $(uv)'=u'v+uv',\quad(u/v)'=\frac{u'v-uv'}{v^2}$ | u,v derivables; en cociente v≠0. Sumas y factores constantes se derivan término a término. |
| $(f\circ g)'=(f'\circ g)g'$ | Regla de cadena; g derivable en x y f derivable en g(x). |
| $(x^r)'=rx^{r-1},\quad(e^u)'=e^uu',\quad(a^u)'=a^u\ln(a)u'$ | Para potencia real general usar x>0; enteros permiten dominios mayores. Base a>0 constante. |
| $(\ln u)'=u'/u,\quad(\ln\lvert u\rvert)'=u'/u$ | Primera requiere u>0; segunda u≠0. La fórmula derivada no amplía el dominio original. |
| $(\sin u)'=\cos(u)u',\quad(\cos u)'=-\sin(u)u',\quad(\tan u)'=u'/\cos^2u$ | Radianes; tangente requiere cosu≠0. |
| $(\cot u)'=-u'/\sin^2u,\quad(\sec u)'=\sec u\tan u\,u',\quad(\csc u)'=-\csc u\cot u\,u'$ | Respectivos denominadores no nulos. |
| $(\arcsin u)'=\frac{u'}{\sqrt{1-u^2}},\quad(\arccos u)'=-\frac{u'}{\sqrt{1-u^2}},\quad(\arctan u)'=\frac{u'}{1+u^2}$ | Primeras dos con &#124;u&#124;<1; arctan sin esa restricción. u debe ser derivable. |
| $(x^x)'=x^x(1+\ln x)$ | x>0; derivar escribiendo x^x=e^(x ln x), no como potencia de exponente constante. |

### Capítulo 19 · Orden superior e implícitas

| Relación | Significado y condiciones |
| --- | --- |
| $F_x+F_y y'=0,\quad y'=-F_x/F_y$ | Para una rama y(x) derivable de F(x,y)=0 con F diferenciable y Fy≠0; en ejemplos derivar cada y por cadena. |
| $x^2+y^2=R^2:\quad y'=-x/y,\quad y''=-R^2/y^3$ | R>0 y rama con y≠0; en y=0 las tangentes de la circunferencia son verticales. |
| $(\ln x)^{(n)}=(-1)^{n-1}(n-1)!/x^n$ | x>0 y n entero≥1; n indica orden de derivada, no potencia. |
| $f_-\to f(a),\ f_+\to f(a),\quad f'_-(a)=f'_+(a)\in\mathbb R$ | En uniones por tramos: comprobar continuidad y después pendientes laterales finitas usando el cociente incremental. |

## Capítulo 20 · Números complejos en forma binómica

### Ampliar el sistema numérico sin abandonar sus reglas

En los reales, x²=−1 no tiene solución porque un cuadrado real es no negativo. Los complejos introducen i con i²=−1 y números z=a+bi, a,b reales. La parte real es Re(z)=a y la parte imaginaria es Im(z)=b, un número real; no es bi. Los reales se identifican con b=0 y los imaginarios puros no reales tienen a=0,b≠0. La igualdad a+bi=c+di equivale a a=c y b=d.

El plano complejo representa a+bi mediante el punto (a,b). El eje horizontal es real y el vertical imaginario. Esta identificación permite sumar como desplazamientos del plano, pero la multiplicación compleja agrega una operación específica que no es ni el producto escalar ni el vectorial. No existe un orden total en ℂ compatible con las operaciones y que extienda el orden real como en un cuerpo ordenado: por eso no se resuelve «z>2+i» como una desigualdad real.

### Suma, producto y potencias de i

Se suman las partes correspondientes: (2−3i)+(−1+5i)=1+2i. Para multiplicar, se distribuye y se reemplaza i² por −1:


$$
(a+bi)(c+di)=(ac-bd)+(ad+bc)i.
$$


Por ejemplo, (2−3i)(−1+5i)=13+13i. Es útil separar términos reales e imaginarios antes de reducir. Los signos cambian porque (−3i)(5i)=−15i²=15, no −15. Las potencias de i se repiten cada cuatro: i⁰=1,i¹=i,i²=−1,i³=−i,i⁴=1. Para i^2025 basta el resto 1 de dividir 2025 por 4: el resultado es i. Para exponentes negativos, usá i⁻¹=−i y la misma periodicidad.

### Conjugación y módulo

El conjugado de z=a+bi es $\bar z=a-bi$, reflexión respecto del eje real. Se cumple z+z̄=2Re(z), z−z̄=2iIm(z), y $z\bar z=a^2+b^2$. El módulo $|z|=\sqrt{a^2+b^2}$ es la distancia al origen. Es no negativo y solo vale cero para z=0. Para z=−3+4i, el conjugado es −3−4i y el módulo 5.

La conjugación respeta suma y producto: conjugado de z+w es z̄+w̄, y conjugado de zw es z̄w̄. Además |zw|=|z||w| y |z+w|≤|z|+|w|. El módulo de una suma no es normalmente la suma de módulos: |1+i|=√2 y |1|+|i|=2. Estas reglas se pueden justificar multiplicando por los conjugados y usando que ambos módulos son no negativos.

### Dividir sin dejar un denominador complejo

Si w≠0, multiplicamos numerador y denominador por w̄. El denominador se convierte en |w|²>0. Así


$$
\frac{a+bi}{c+di}=\frac{(ac+bd)+(bc-ad)i}{c^2+d^2},\qquad c+di\ne0.
$$


En (3+2i)/(1−i), multiplicamos por (1+i)/(1+i): el numerador queda 1+5i y el denominador 2. El resultado es 1/2+(5/2)i. Para comprobarlo, multiplicamos este resultado por 1−i y recuperamos 3+2i. Dividir parte real por parte real e imaginaria por imaginaria no es una regla válida.

La inversa multiplicativa es 1/z=z̄/|z|², z≠0. Para z=−3+4i, queda (−3−4i)/25. El cero carece de inversa igual que en los reales.

### Ecuaciones: igualar dos componentes

Resolver (1+i)z=3−i da z=(3−i)/(1+i)=1−2i. Si el problema involucra conjugados no se puede tratarlos como constantes independientes: escribimos z=x+yi con x,y reales. En z+2z̄=6−3i obtenemos (x+yi)+2(x−yi)=3x−yi. Al igualar componentes, 3x=6 y −y=−3, por lo que z=2+3i.

Para una ecuación cuadrática con coeficientes reales y discriminante negativo, $x=(-b\pm i\sqrt{-\Delta})/(2a)$. Así z²−2z+5=0 tiene raíces 1±2i. Se verifica sumando sus cuadrados o factorizando (z−1−2i)(z−1+2i). Las raíces no reales de un polinomio de coeficientes reales aparecen en pares conjugados, porque al conjugar la ecuación los coeficientes permanecen reales.

No se debe extender indiscriminadamente la regla de radicales reales: si se usa la raíz principal compleja, √(−1)√(−1)=−1, mientras √[(-1)(-1)]=√1=1. Las identidades de raíces tienen hipótesis que cambian al pasar a ℂ.

### Lugares geométricos sencillos

La ecuación |z−z₀|=r, con r>0, describe una circunferencia de centro z₀ y radio r, porque el módulo es distancia. |z−(1+2i)|=3 equivale a (x−1)²+(y−2)²=9. La desigualdad ≤ describe el disco cerrado. Por otro lado |z−1|=|z+1| exige igual distancia a los puntos (1,0) y (−1,0); al elevar al cuadrado, (x−1)²+y²=(x+1)²+y² y queda x=0, el eje imaginario.

### Práctica y respuestas

**Z20.1.** Calculá (1+2i)(3−i). **Z20.2.** Calculá (2−i)/(1+2i). **Z20.3.** Calculá i^103 y i⁻². **Z20.4.** Resolvé z+z̄=4 y z−z̄=6i simultáneamente. **Z20.5.** Resolvé z²+4=0. **Z20.6.** Describí |z+2−i|≤1.

**Respuestas.** Z20.1: 5+5i. Z20.2: −i, porque (2−i)(1−2i)=−5i y el denominador es 5. Z20.3: −i y −1. Z20.4: 2x=4 y 2yi=6i dan z=2+3i. Z20.5: z=±2i. Z20.6: disco cerrado de centro (−2,1) y radio 1. Es importante reescribir z+2−i como z−(−2+i) para leer correctamente el centro.


### Hoja de fórmulas del capítulo 20

| Relación | Significado y condiciones |
| --- | --- |
| $i^2=-1,\quad i^{n+4}=i^n$ | n entero; ciclo 1,i,−1,−i. z=a+bi tiene Re(z)=a e Im(z)=b, ambas reales. |
| $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ | a,b,c,d reales; suma y resta por componentes. |
| $\overline{a+bi}=a-bi,\quad\lvert z\rvert=\sqrt{a^2+b^2},\quad z\bar z=\lvert z\rvert^2$ | Conjugado: reflexión en eje real; módulo: distancia no negativa al origen. |
| $\frac zw=\frac{z\bar w}{\lvert w\rvert^2},\quad w\ne0$ | Multiplicar por conjugado del denominador. 1/z=z̄/&#124;z&#124;² para z≠0. |
| $\lvert z-z_0\rvert=r$ | Circunferencia de centro z0 y radio r>0; ≤r da disco cerrado. |

## Capítulo 21 · Forma polar, argumentos y operaciones geométricas

### Módulo y ángulo describen el mismo punto

Todo complejo no nulo z=a+bi puede escribirse $z=r(\cos\theta+i\sin\theta)$, donde r=|z|>0, a=r cosθ y b=r sinθ. Un argumento θ es un ángulo que ubica la dirección de z. Todos sus argumentos son θ+2kπ, k entero. En este manual elegimos el argumento principal en [0,2π), de acuerdo con la convención del material de la materia. Otras bibliografías eligen (−π,π]; el punto es el mismo, cambia el representante.

El cero tiene módulo cero y no tiene argumento definido. La fórmula 0(cosθ+i sinθ) produce cero para cualquier θ, precisamente por eso no selecciona una dirección propia. Escribir arg0=0 atribuiría una dirección que no existe.

### Elegir el cuadrante antes de usar la calculadora

Para z=−√3+i, r=2, cosθ=−√3/2 y sinθ=1/2. Está en el segundo cuadrante, así que el principal es 5π/6. La tangente b/a=−1/√3 no basta para decidir entre el segundo y el cuarto cuadrante; arctan devuelve una rama restringida. Se puede usar atan2(b,a) si se comprende su intervalo de salida, ajustando a [0,2π) cuando corresponda.

Los ejes se tratan directamente: un real positivo tiene argumento principal 0; un imaginario positivo π/2; un real negativo π; un imaginario negativo 3π/2. Para 1−i, r=√2 y principal 7π/4. También es correcto usar −π/4 como argumento no principal.

### Producto y cociente en polar

Al multiplicar dos formas polares y aplicar las identidades de suma de ángulos se obtiene: los módulos se multiplican y los argumentos se suman. Al dividir por un complejo no nulo, los módulos se dividen y los argumentos se restan. Después se puede reducir el ángulo módulo 2π para obtener el principal.

Si z=2(cosπ/6+i sinπ/6) y w=3(cosπ/3+i sinπ/3), entonces zw=6(cosπ/2+i sinπ/2)=6i. El cociente z/w tiene módulo 2/3 y argumento −π/6, cuyo principal es 11π/6; su forma binómica es √3/3−i/3. Una suma de complejos no se obtiene sumando módulos y argumentos: para sumar conviene pasar a binómica.

Multiplicar por i rota π/2 sin cambiar módulo. Multiplicar por −1 rota π. Multiplicar por un real positivo escala sin rotar. Conjugar refleja el ángulo: θ pasa a −θ módulo 2π. Si z tiene argumento cero, su conjugado también; para otros valores se ajusta el representante principal cuando sea necesario.

![Módulo, argumento, conjugación y rotación por i](/planos-de-estudio/img/elementos/complejos.svg)

### Potencias y fórmula de De Moivre

Como consecuencia repetida de la multiplicación, para entero n:


$$
[r(\cos\theta+i\sin\theta)]^n=r^n[\cos(n\theta)+i\sin(n\theta)].
$$


Para n negativo se exige r>0; para n=0 se excluye la expresión indeterminada 0⁰. En (1+i)^8, escribimos 1+i=√2(cosπ/4+i sinπ/4). La potencia tiene módulo (√2)^8=16 y argumento 2π, así que vale 16. En (−1+i)^3, el módulo es (√2)³=2√2 y el ángulo 9π/4, equivalente a π/4: resulta 2+2i. Conviene comprobar el signo con una multiplicación binómica corta cuando sea posible.

La notación e^(iθ)=cosθ+i sinθ permite escribir z=re^(iθ). Se usa aquí como notación polar compacta y extensión complementaria; la construcción rigurosa de la exponencial compleja excede el núcleo del programa. De ella se recuerdan fácilmente producto, cociente y potencias, pero no se supone que las reglas de orden real se apliquen a exponentes complejos.

### Ampliación: todas las raíces n-ésimas

El programa explicita forma polar y operaciones; la extracción sistemática de raíces se incluye como ampliación útil de esas operaciones. Para w=R(cosφ+i sinφ)≠0, resolver zⁿ=w, con n entero positivo, exige rⁿ=R y nθ=φ+2kπ. Las n raíces distintas son


$$
z_k=R^{1/n}\left[\cos\left(\frac{\varphi+2k\pi}{n}\right)+i\sin\left(\frac{\varphi+2k\pi}{n}\right)\right],\quad k=0,\ldots,n-1.
$$


Tomar solo k=0 encuentra una raíz y omite las demás. Las raíces están igualmente espaciadas sobre una circunferencia de radio R^(1/n). Para z³=8, el radio es 2 y los ángulos 0,2π/3,4π/3: las soluciones son 2,−1+i√3,−1−i√3. Al elevar cada una al cubo se recupera 8. Para w=0 solo hay la raíz z=0, no n puntos distintos.

### Cómo elegir una forma de cálculo

La binómica es adecuada para suma, resta, igualación de componentes y ecuaciones con conjugados. La polar simplifica productos repetidos, cocientes, potencias y raíces. Convertir no cambia el número: cada resultado polar puede comprobarse recuperando a=r cosθ y b=r sinθ. Los argumentos se comparan módulo 2π, no por igualdad literal de representantes. Y el módulo siempre se toma no negativo; un «módulo −2» debe reemplazarse por módulo 2 y giro adicional de π.

### Práctica y respuestas

**Z21.1.** Pasá −1−i a polar principal. **Z21.2.** Pasá 4(cos(2π/3)+i sin(2π/3)) a binómica. **Z21.3.** Calculá (√3+i)³. **Z21.4.** Hallá los argumentos de (1−i)/(1+i). **Z21.5.** Hallá las raíces cuartas de 16 como ampliación. **Z21.6.** ¿Qué le ocurre al argumento de z al multiplicarlo por −2?

**Respuestas.** Z21.1: módulo √2, principal 5π/4. Z21.2: −2+2√3i. Z21.3: módulo 2³=8 y ángulo 3π/6=π/2, resultado 8i. Z21.4: el cociente es −i, argumentos 3π/2+2kπ. Z21.5: 2,2i,−2,−2i. Z21.6: su módulo se duplica y un argumento aumenta π, ajustando módulo 2π si se pide el principal; para z=0 el argumento sigue sin definirse.


### Hoja de fórmulas del capítulo 21

| Relación | Significado y condiciones |
| --- | --- |
| $z=r(\cos\theta+i\sin\theta),\quad r=\lvert z\rvert>0$ | a=r cosθ,b=r sinθ; argumentos θ+2kπ. Principal aquí [0,2π); cero sin argumento. |
| $\lvert zw\rvert=\lvert z\rvert\lvert w\rvert,\quad\arg(zw)\equiv\arg z+\arg w\pmod{2\pi}$ | z,w no nulos para argumentos. En cociente dividir módulos y restar argumentos. |
| $z^n=r^n[\cos(n\theta)+i\sin(n\theta)]$ | De Moivre para n entero; n negativo exige z≠0. Reducir ángulo si se pide principal. |
| $z_k=R^{1/n}\left[\cos\frac{\varphi+2k\pi}{n}+i\sin\frac{\varphi+2k\pi}{n}\right]$ | Ampliación: raíces de z^n=R(cosφ+i sinφ)≠0, n entero positivo, k=0,…,n−1. Para radicando cero solo z=0. |

## Formulario de la Unidad 8 · Números complejos

Relaciones de consulta para esta unidad oficial. Cada fila conserva su condición de uso; los ejemplos y las justificaciones están en los capítulos anteriores.

### Capítulo 20 · Complejos binómicos

| Relación | Significado y condiciones |
| --- | --- |
| $i^2=-1,\quad i^{n+4}=i^n$ | n entero; ciclo 1,i,−1,−i. z=a+bi tiene Re(z)=a e Im(z)=b, ambas reales. |
| $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ | a,b,c,d reales; suma y resta por componentes. |
| $\overline{a+bi}=a-bi,\quad\lvert z\rvert=\sqrt{a^2+b^2},\quad z\bar z=\lvert z\rvert^2$ | Conjugado: reflexión en eje real; módulo: distancia no negativa al origen. |
| $\frac zw=\frac{z\bar w}{\lvert w\rvert^2},\quad w\ne0$ | Multiplicar por conjugado del denominador. 1/z=z̄/&#124;z&#124;² para z≠0. |
| $\lvert z-z_0\rvert=r$ | Circunferencia de centro z0 y radio r>0; ≤r da disco cerrado. |

### Capítulo 21 · Complejos polares

| Relación | Significado y condiciones |
| --- | --- |
| $z=r(\cos\theta+i\sin\theta),\quad r=\lvert z\rvert>0$ | a=r cosθ,b=r sinθ; argumentos θ+2kπ. Principal aquí [0,2π); cero sin argumento. |
| $\lvert zw\rvert=\lvert z\rvert\lvert w\rvert,\quad\arg(zw)\equiv\arg z+\arg w\pmod{2\pi}$ | z,w no nulos para argumentos. En cociente dividir módulos y restar argumentos. |
| $z^n=r^n[\cos(n\theta)+i\sin(n\theta)]$ | De Moivre para n entero; n negativo exige z≠0. Reducir ángulo si se pide principal. |
| $z_k=R^{1/n}\left[\cos\frac{\varphi+2k\pi}{n}+i\sin\frac{\varphi+2k\pi}{n}\right]$ | Ampliación: raíces de z^n=R(cosφ+i sinφ)≠0, n entero positivo, k=0,…,n−1. Para radicando cero solo z=0. |

## Capítulo 22 · Taller integrador de lógica, conjuntos, trigonometría y vectores

### Cómo usar este taller

Estos problemas son originales y no constituyen un modelo oficial de parcial. Integran herramientas de las unidades 1 a 4 y de la revisión inicial. Primero resolvé sin mirar el desarrollo; después compará cada decisión, no solamente el resultado. Una respuesta numérica correcta puede esconder una división no permitida o una implicación invertida. Al revisar, señalá dónde usaste una definición, una equivalencia, una restricción o una comprobación.

### Problema 1 · Una afirmación y sus variantes

En el universo de enteros consideramos P(n): «n es múltiplo de 4» y Q(n): «n es par». Analizá la afirmación universal P⇒Q, su recíproca, su contrarrecíproca y su negación. Justificá cada una y decidí si ¬Q⇒¬P aporta una afirmación nueva.

**Desarrollo.** Si n=4k con k entero, entonces n=2(2k), luego es par. Esto demuestra ∀n∈ℤ, P(n)⇒Q(n). La recíproca Q⇒P es falsa: n=2 es par y no múltiplo de 4. La contrarrecíproca ¬Q⇒¬P dice «si n no es par, no es múltiplo de 4» y es equivalente a la original; no requiere que se pruebe una propiedad independiente. La negación de la afirmación universal es «existe un entero múltiplo de 4 que no es par», formalmente ∃n∈ℤ, P(n)∧¬Q(n); es falsa por la demostración inicial. No es correcto negar cambiando solamente P⇒Q por ¬P⇒¬Q: esa es la inversa y tampoco es equivalente en general.

**Control.** Si hubieras elegido un ejemplo como n=8 para justificar la universal, solo habrías verificado un caso. La parametrización n=4k funciona para todos los múltiplos de 4, que es lo que exige el cuantificador.

### Problema 2 · Un dominio como operación de conjuntos

Hallá el dominio de $f(x)=\sqrt{(x-2)/(x+1)}/(x-4)$ y expresá su complemento en ℝ. Determiná además dónde f(x)=0.

**Desarrollo.** La raíz exige (x−2)/(x+1)≥0, con x≠−1. Los puntos críticos −1 y 2 dividen la recta. En (−∞,−1), ambos factores son negativos y el cociente positivo. En (−1,2) es negativo. En [2,∞) es no negativo, incluyendo 2 porque el radicando se anula sin anular x+1. La raíz aporta A=(−∞,−1)∪[2,∞). El denominador exterior exige B=ℝ\{4}. El dominio es A∩B=(−∞,−1)∪[2,4)∪(4,∞). Su complemento es [−1,2)∪{4}. El cero de f está en x=2; el denominador allí vale −2 y no impide el valor cero.

**Control.** x=−1 queda fuera por denominador interior; x=2 queda dentro por raíz cero; x=4 queda fuera por denominador exterior. Identificar la causa de cada exclusión es más robusto que recordar una lista de puntos sin explicación.

### Problema 3 · Ecuación trigonométrica con restricción

Resolvé $\tan x=2\sin x$ en [0,2π) y expresá las soluciones que además pertenecen a [0,π].

**Desarrollo.** Primero cosx≠0, por lo que se excluyen π/2 y 3π/2. En el dominio podemos multiplicar por cosx: sinx=2sinx cosx. Factorizamos sinx(1−2cosx)=0. El primer caso da x=0,π dentro del intervalo; el segundo cosx=1/2 da π/3 y 5π/3. Todos tienen coseno no nulo y verifican la original. El conjunto A es {0,π/3,π,5π/3}. Al intersectar con [0,π] se obtiene {0,π/3,π}.

**Control.** Si dividieras inicialmente por sinx, perderías 0 y π. Si multiplicaras por cosx sin registrar su restricción, podrías aceptar puntos que no pertenecen al dominio. La técnica correcta conserva ambos cuidados aunque, en este ejemplo, las raíces obtenidas no coincidan con los excluidos.

### Problema 4 · Distancia inaccesible

Desde un punto del suelo se ve la cima de una torre con ángulo de elevación 30°. Al avanzar 20 m en línea recta hacia su base, el ángulo pasa a 60°. Suponé suelo horizontal y observación a nivel del suelo. Hallá la altura y las distancias a la base.

**Desarrollo.** Sea d>20 la distancia inicial y h>0 la altura. Los triángulos rectángulos comparten h: tan30°=h/d=1/√3 y tan60°=h/(d−20)=√3. De la primera, h=d/√3; de la segunda, h=√3(d−20). Igualando, d=3d−60, de donde d=30 m. La distancia final es 10 m y h=10√3 m≈17,32 m. Las dimensiones son coherentes: tangentes sin unidad y longitudes en metros.

**Control.** El ángulo mayor corresponde a la distancia menor. Si los ojos estuvieran a una altura conocida e sobre el suelo, las tangentes describirían h−e, y al final se sumaría e. Esa información no puede inventarse ni omitirse si aparece en el enunciado.

### Problema 5 · Área, normal y pertenencia a un plano

Dados A=(1,0,1), B=(3,1,1), C=(1,2,3), hallá el área del triángulo, un versor normal a su plano y decidí si D=(3,3,3) pertenece a él.

**Desarrollo.** AB=(2,1,0), AC=(0,2,2). El producto AB×AC=(2,−4,4) tiene módulo √(4+16+16)=6. El área triangular es 3. Un versor normal es (1/3,−2/3,2/3), y su opuesto es igualmente válido sin condición de sentido. Para pertenencia usamos AD=(2,3,2). Su producto con la normal no normalizada es 4−12+8=0, luego D está en el plano. También AD=AB+AC confirma el resultado.

**Control.** El mixto cero verifica coplanaridad de los desplazamientos AB,AC,AD. No se multiplican los vectores de posición A,B,C como si el vértice de referencia fuera el origen. Para un plano determinado se necesita AB×AC≠0; aquí vale un vector no nulo, así que los tres puntos no son colineales.

### Problema 6 · Dirección y longitud con parámetros

Buscá todos los vectores w perpendiculares a u=(1,0,1) y v=(0,1,1), de módulo 4. Después elegí el que tenga primera componente positiva.

**Desarrollo.** Un vector perpendicular es u×v=(−1,−1,1), de módulo √3. Los vectores pedidos son $\pm(4/\sqrt3)(-1,-1,1)$. Para primera componente positiva se toma $(4/\sqrt3)(1,1,-1)$. Comprobamos u·w=4/√3−4/√3=0 y v·w=0; el módulo al cuadrado es 3·16/3=16. La normalización resolvió la longitud y el signo adicional eligió el sentido.

### Autoevaluación de este bloque

Podés darlo por comprendido si justificás una afirmación universal con un argumento general, negás cuantificadores correctamente, construís dominios como intersecciones, conservás soluciones al factorizar ecuaciones trigonométricas y distinguís número, vector, área y volumen en los productos. Si un ejercicio falló, volvé al capítulo de la herramienta concreta y repetilo con datos diferentes. Releer una respuesta sin volver a producir el argumento suele dar una sensación engañosa de dominio.


### Hoja de fórmulas del capítulo 22

| Relación | Significado y condiciones |
| --- | --- |
| $\neg\forall x\ P(x)\equiv\exists x\ \neg P(x)$ | Reutilizar cuantificadores del capítulo 3, conservando el universo; un ejemplo no demuestra una universal. |
| $D_{\sqrt{P/Q}/S}=\{x:Q(x)\ne0,\ P(x)/Q(x)\ge0,\ S(x)\ne0\}$ | Además exigir que P,Q,S estén definidas; en el taller son polinomios. |
| $A_\triangle=\tfrac12\lVert AB\times AC\rVert,\quad AB\cdot(AC\times AD)=0$ | Área y test de coplanaridad de cuatro puntos; para plano determinado exigir AB×AC≠0. No son fórmulas nuevas. |

## Capítulo 23 · Taller integrador de funciones, límites, derivadas y complejos

### Una segunda práctica completa

Este taller original integra las unidades 5 a 8. No reproduce una evaluación ni predice su dificultad. Procurá presentar dominio, transformación elegida, cálculo, condiciones y comprobación. Cuando el enunciado pide «estudiar», un resultado aislado suele ser insuficiente: deben distinguirse las propiedades que realmente fueron justificadas.

### Problema 1 · Una composición y su inversa

Sean g(x)=x−1 y f(t)=ln t. Estudiá h=f∘g: dominio, imagen, cero, crecimiento e inversa. Comprobá las dos composiciones con la inversa.

**Desarrollo.** h(x)=ln(x−1) requiere x>1. Como x−1 recorre todos los positivos, ln(x−1) recorre ℝ. Su cero cumple x−1=1, luego x=2. Es estrictamente creciente porque x−1 crece y ln también. Así h:(1,∞)→ℝ es biyectiva. De y=ln(x−1), se sigue e^y=x−1 y x=1+e^y. La inversa es h⁻¹(y)=1+e^y, con dominio ℝ e imagen (1,∞).

Para x>1, h⁻¹(h(x))=1+e^[ln(x−1)]=x. Para y∈ℝ, h(h⁻¹(y))=ln(e^y)=y. Las restricciones garantizan que ambas igualdades usen funciones definidas. Además h′(x)=1/(x−1)>0 en su dominio confirma analíticamente el crecimiento, aunque ya lo justificamos mediante composición de funciones crecientes.

### Problema 2 · Agujero, extensión continua y tangente

Considerá $r(x)=(x^2+x-2)/(x-1)$ para x≠1. Hallá su límite en 1, una extensión continua y la tangente a esa extensión en 1. Compará con definir r(1)=0.

**Desarrollo.** El numerador es (x+2)(x−1), por lo que r(x)=x+2 en el dominio original. El límite en 1 es 3. La única extensión continua agrega r(1)=3 y coincide con x+2 en todo ℝ. Su derivada es 1; la tangente en (1,3) es y−3=x−1, es decir y=x+2. Si se define r(1)=0, la función queda discontinua porque el límite sigue siendo 3. No puede tener derivada allí, por la implicación derivabilidad⇒continuidad.

**Control.** El punto excluido no genera asíntota vertical porque los valores vecinos permanecen finitos. La identidad simplificada no autoriza por sí sola a cambiar el valor central: esa es una decisión de extensión que el problema pidió explícitamente.

### Problema 3 · Una unión derivable con tangente horizontal

Sea p(x)=x²+ax+b si x≤0, y e^x+cx si x>0. Elegí a,b,c para que p sea derivable en cero y tenga tangente horizontal allí.

**Desarrollo.** El valor p(0)=b y el lateral derecho es 1, de modo que continuidad obliga b=1. Las pendientes laterales son a y 1+c. Derivabilidad requiere a=1+c. Tangente horizontal significa pendiente común cero, de donde a=0 y c=−1. La función es entonces x²+1 a la izquierda y e^x−x a la derecha, con punto común (0,1) y tangente y=1.

Para comprobar por definición, el cociente izquierdo es h²/h=h→0. El derecho es (e^h−h−1)/h=(e^h−1)/h−1→1−1=0. Esto conecta el límite notable exponencial con la derivada en la unión. La segunda derivada no existe allí: p′ vale 2x por izquierda y e^x−1 por derecha, cuyas pendientes en cero son 2 y 1. Tener tangente común no asegura todas las derivadas sucesivas.

### Problema 4 · Límites y asíntotas de una racional

Analizá q(x)=(x²+1)/(x−1): dominio, cortes con ejes, asíntotas y pendientes horizontales.

**Desarrollo.** El dominio excluye 1. No tiene ceros reales porque x²+1>0; la ordenada al origen es −1. Al dividir obtenemos x+1+2/(x−1), así que la asíntota oblicua es y=x+1 en ambos infinitos. Cerca de 1 el numerador tiende a 2 positivo: por izquierda q→−∞ y por derecha +∞, luego x=1 es vertical. No hay horizontal en los infinitos porque q crece en módulo como x.

La derivada es (x²−2x−1)/(x−1)². Se anula cuando (x−1)²=2, es decir x=1±√2. Ninguno es el punto excluido. Sustituyendo en la forma dividida, los valores correspondientes son 2±2√2. Las tangentes horizontales son y=2−2√2 y y=2+2√2. Para estudiar crecimiento, el denominador derivado es positivo y el signo depende de (x−1)²−2: positivo fuera de [1−√2,1+√2] y negativo dentro, separando en todo momento x=1. Ese análisis adicional distingue la rama izquierda de la derecha sin unirlas a través de la asíntota.

### Problema 5 · Existencia de una solución trascendente

Demostrá que e^(−x)=x tiene al menos una solución entre 0 y 1 y que no hay dos soluciones reales. Explicá qué parte usa continuidad y qué parte usa crecimiento.

**Desarrollo.** Sea F(x)=e^(−x)−x, continua en ℝ. F(0)=1>0 y F(1)=e⁻¹−1<0. Bolzano asegura una raíz en (0,1). Para unicidad, e^(−x) es estrictamente decreciente y −x también; su suma es estrictamente decreciente, así que no puede tomar el valor cero dos veces. Alternativamente F′=−e^(−x)−1<0 justifica la misma propiedad mediante el teorema de monotonía, si ya se dispone de él. No hace falta una solución en forma elemental ni una calculadora para probar existencia y unicidad.

La bisección produciría aproximaciones con error controlado por la longitud del intervalo, pero un decimal por sí solo no demostraría que la solución es única. Tampoco basta afirmar «se ve en el gráfico» sin justificar la continuidad y la comparación de valores.

### Problema 6 · Dos formas de un cálculo complejo

Calculá $(1+i)^6/(1-i)^2$ en forma binómica y comprobá usando forma polar. Después hallá módulo, argumento principal y conjugado del resultado.

**Desarrollo binómico.** (1+i)²=2i, de modo que (1+i)^6=(2i)³=−8i. El denominador (1−i)²=−2i. El cociente es 4. Su módulo es 4, argumento principal 0 y conjugado 4.

**Desarrollo polar.** El numerador tiene módulo (√2)^6=8 y argumento 6π/4=3π/2. El denominador tiene módulo (√2)²=2 y argumento −π/2. Al dividir, módulo 4 y ángulo 2π, equivalente a 0. Por tanto el resultado es 4(cos0+i sin0)=4. Dos ángulos que difieren en 2π describen el mismo complejo, y la coincidencia de ambos métodos verifica módulos y signos.

### Problema 7 · Lugar geométrico y ecuación con conjugado

Resolvé z+2z̄=9−3i y decidí si el resultado pertenece a la circunferencia |z−1|=√13. Hallá su forma polar principal.

**Desarrollo.** Con z=x+yi, la izquierda es 3x−yi. Se obtiene x=3,y=3, por lo que z=3+3i. Su distancia a 1 es |2+3i|=√13: sí pertenece a la circunferencia. Su módulo es 3√2 y está en el primer cuadrante con argumento π/4, así que su forma polar es 3√2(cosπ/4+i sinπ/4). La circunferencia está centrada en el punto real 1, mientras el módulo polar mide distancia al origen; son dos distancias distintas que no deben intercambiarse.

### Cierre de autoevaluación

Antes de pasar a una evaluación oficial, verificá que podés resolver problemas nuevos y explicar por qué las transformaciones conservan soluciones. Usá las prácticas y sus soluciones de la cátedra como contraste adicional, especialmente los ejercicios gráficos, que requieren leer imágenes originales. Este manual desarrolla el programa consultado, pero no reemplaza consignas vigentes, clases ni una revisión académica docente. Una duda detectada y localizada es más útil que una respuesta memorizada cuyo dominio no se comprende.


### Hoja de fórmulas del capítulo 23

| Relación | Significado y condiciones |
| --- | --- |
| $f^{-1}(f(x))=x,\quad x\in D_f$ | Comprobar además la otra composición en el dominio de la inversa, como en el capítulo 13. |
| $\lim_{x\to a}f(x)=f(a),\quad f'_-(a)=f'_+(a)\in\mathbb R$ | En uniones: continuidad antes de derivabilidad; aplicar las condiciones de los capítulos 16 y 19. |
| $\frac{r_1(\cos\theta_1+i\sin\theta_1)}{r_2(\cos\theta_2+i\sin\theta_2)}=\frac{r_1}{r_2}[\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)]$ | r2>0; reutiliza operaciones polares y permite contrastar con binómica. No añade contenido oficial nuevo. |


## Fuentes, cobertura y revisión académica

### Edición y alcance de la consulta

La base documental es el aula [Elementos de Matemática · 01374 · 2025-1C](https://plataformaed.unnoba.edu.ar/course/view.php?id=9952) de Educación Digital UNNOBA, consultada con el acceso autorizado. La edición se identificó por el título del curso, el programa y el cronograma; no se supone que sea el programa vigente de otra cursada. El [programa e información general](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=275908) enumera las ocho unidades que estructuran este manual. Los enlaces de aula pueden requerir iniciar sesión.

Se conservaron 39 PDF en la carpeta local `Externo/elementos-matematica-2025` del proyecto. Incluyen programa, cronograma, guía de revisión, dos documentos de integración o repaso, ocho apuntes teóricos, ocho prácticas, ocho solucionarios y diez recursos complementarios. La lectura de programa, consignas y secciones teóricas seleccionadas permitió definir el alcance; no se presenta como una revisión exhaustiva de todas las páginas de todos los archivos. Los dibujos de este manual son originales y explicativos, no reproducciones de gráficos de evaluaciones.

### Correspondencia con las unidades oficiales

| Bloque del aula | Desarrollo en este manual | Material de referencia |
| --- | --- | --- |
| Revisión previa | Capítulos 0 y 1: números, fracciones, potencias, radicales, álgebra, factorización, ecuaciones y sistemas | Guía 0 y ejercicios de integración de revisión |
| Unidad 1 · Lógica | Capítulos 2 y 3: proposiciones, conectivos, tablas, clasificaciones, leyes, cuantificadores y demostraciones | Apunte teórico, práctica 1 y su solucionario |
| Unidad 2 · Conjuntos | Capítulos 4 y 5: extensión y comprensión, pertenencia e inclusión, operaciones, números, intervalos y entornos | Apunte teórico, práctica 2 y su solucionario |
| Unidad 3 · Trigonometría | Capítulos 6 y 7: triángulos, orientación, grados y radianes, circunferencia, identidades y ecuaciones | Apunte teórico, práctica 3 nueva y soluciones 2025 |
| Unidad 4 · Vectores | Capítulos 8 y 9: componentes, suma, escalares, módulo y productos escalar, vectorial y mixto | Apunte teórico, práctica 4 y su solucionario |
| Unidad 5 · Funciones reales | Capítulos 10 a 13: dominio, imagen, signo, crecimiento, familias, transformaciones, operaciones, composición, biyectividad e inversa | Apunte teórico, práctica 5, solucionario y complementos de funciones |
| Unidad 6 · Límite y continuidad | Capítulos 14 a 16: interpretación, laterales, leyes, técnicas, infinitos, asíntotas, continuidad y teoremas de existencia | Apunte teórico, práctica 6, solucionario y demostración del límite trigonométrico |
| Unidad 7 · Derivadas | Capítulos 17 a 19: definición, tangente, álgebra, cadena, orden superior y relación con continuidad | Apunte teórico, práctica 7 y su solucionario |
| Unidad 8 · Números complejos | Capítulos 20 y 21: definición, operaciones, conjugado, módulo, argumento y formas binómica y polar | Apunte teórico, práctica 8 y su solucionario |
| Integración editorial | Capítulos 22 y 23: problemas originales completamente desarrollados | Relacionados con los bloques de las prácticas y documentos de integración; no son parciales oficiales |

### Qué se añadió para facilitar el estudio

Las demostraciones ε–δ sencillas, los ejemplos de proyección, la derivación implícita y las raíces n-ésimas de complejos amplían o conectan herramientas del programa. Las raíces complejas y la notación exponencial se identifican como ampliaciones; no se las presenta como un requisito explícito del programa consultado. Los capítulos 0 y 1 son preparación, y los dos talleres son organización editorial: no agregan unidades oficiales.

Cada capítulo tiene hoja de fórmulas; cada una de las ocho unidades tiene un formulario; hay además un formulario general. Las tablas incluyen símbolos, restricciones y convenciones para impedir usos fuera de sus hipótesis. Los ejercicios originales tienen respuestas y, en los ejemplos y talleres, desarrollo completo. Los solucionarios de la cátedra se usan como material de contraste, no como autoridad infalible ni como sustituto de verificar una solución.

### Discrepancias y límites de la revisión

Se corrigió explícitamente la afirmación sobre cantidad impar de ceros que aparece en la página 31 del apunte de límite y continuidad: el capítulo 16 demuestra con un contraejemplo por qué no se deduce de Bolzano. También se distinguen contrarrecíproca y reducción al absurdo, se conservan dominios tras cancelaciones y se aclara la rama elegida para argumentos e inversas.

No se revisaron íntegramente los libros de la bibliografía del programa ni todos los videos o actividades del aula. No se modificaron respuestas, inscripciones ni entregas de la plataforma. El material tiene revisión matemática interna y verificación técnica de su publicación local; la validación docente externa permanece pendiente. Si la cátedra actual cambia programa, notación o exigencias de evaluación, corresponde contrastarlos con esta edición documentada.

