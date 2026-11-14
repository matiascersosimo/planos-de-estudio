---
nombre: "Análisis Matemático II"
code: "01296"
resumen: "Manual de cálculo multivariable y vectorial: desarrollo conceptual, teoremas con hipótesis, problemas resueltos, práctica y soluciones."
---







## Cómo recorrer este manual

AM2 estudia dos ideas conectadas: **cómo cambia una magnitud cuando depende de varias variables** y **cómo acumular magnitudes sobre regiones, curvas y superficies**. El gradiente describe cambios locales; las integrales reúnen contribuciones; Green, Gauss y Stokes relacionan lo que sucede dentro de una región con lo que sucede en su frontera. Aprenderlas como una lista de fórmulas desconectadas dificulta elegir el método y reconocer cuándo una cuenta formal no está permitida.

El recorrido sigue los siete ejes del programa de AMII/Análisis Matemático Vectorial disponible en el aula de UNNOBA. Se obtuvieron el programa, las guías 0–9 y ocho archivos de soluciones. Se examinó el texto de todas las guías y se inspeccionaron visualmente páginas con notación o gráficos relevantes. Los desarrollos y problemas explicados aquí son originales, aunque algunos problemas se identifican expresamente por su correspondencia con las guías. No se reproducen los solucionarios como si fueran demostraciones: una respuesta debe poder comprobarse por su razonamiento.

**Alcance de esta edición.** Se desarrolla todo el recorrido temático del programa, desde el repaso vectorial hasta los tres teoremas integrales. Esto no certifica que una persona ya esté preparada para cualquier examen: para evaluar dominio hay que resolver la práctica sin mirar las respuestas y contrastar las exigencias de la cursada. Los videos del aula y la bibliografía completa no se revisaron íntegramente. La matriz de fuentes, cobertura y verificaciones se mantiene junto al proyecto para distinguir trabajo realizado de trabajo pendiente.

### Una rutina de estudio que permite comprobar aprendizaje

1. Leé el problema que motiva el concepto y reconstruí la definición con tus palabras.
2. Trabajá los ejemplos tapando el paso siguiente: antes de calcular, explicá por qué elegís ese método.
3. Resolvé la práctica sin consultar soluciones. Una cuenta correcta con hipótesis omitidas todavía es una respuesta incompleta.
4. Compará, identificá el primer paso incorrecto y resolvé una variante cambiando orientación, región o condición.
5. Relacioná cada capítulo con los ejercicios del aula indicados. El manual enseña herramientas; las guías aportan más variedad y dificultad.

No hace falta memorizar cada integral resuelta. Sí hace falta poder decidir: qué objeto se integra, sobre qué conjunto, con qué medida y qué regularidad necesita el procedimiento.

### Convenciones

Los vectores se escriben en negrita, por ejemplo $\mathbf v=(v_1,v_2,v_3)$; $\|\mathbf v\|$ es su norma. $\nabla f$ es el gradiente de un campo escalar. Para un campo vectorial usamos $\mathbf F=(P,Q,R)$. $dA$, $dV$, $ds$ y $dS$ indican área plana, volumen, longitud y área superficial. $d\mathbf r$ y $\mathbf n\,dS$ incorporan orientación.

Las derivadas direccionales geométricas se toman en direcciones **unitarias**. Si se proporciona un vector no unitario, se normaliza antes de interpretar el resultado como cambio por unidad de distancia. En esféricas usamos $\theta$ como ángulo azimutal y $\varphi$ medido desde el eje $z$ positivo. Si otra fuente intercambia los nombres, cambian los símbolos pero no la geometría.












<!-- inicio formulario am2 -->
## Formulario general de AM2

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Vectores y geometría

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert v\rVert=\sqrt{v\cdot v},\quad\widehat v=v/\lVert v\rVert$ | v≠0 para normalizar; coordenadas ortonormales. |
| $\operatorname{proy}_u v=\frac{u\cdot v}{u\cdot u}u$ | u≠0; proyección vectorial sobre la dirección u. |
| $X=P+tv,\quad n\cdot(X-P)=0$ | Recta con v≠0 y plano con n≠0; t real. |
| $d(P,\Pi)=\frac{\lvert n\cdot P-c\rvert}{\lVert n\rVert}$ | Plano Π: n·X=c; todas las coordenadas en el mismo sistema. |

### Curvas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\ell(s)=r(t_0)+sr^{\prime}(t_0)$ | Tangente en punto regular: r′(t0)≠0. |
| $L=\int_a^b\lVert r^{\prime}(t)\rVert dt$ | Curva suave por tramos; cuenta multiplicidad del recorrido. |
| $s(t)=\int_a^t\lVert r^{\prime}(u)\rVert du$ | Longitud acumulada; rapidez positiva permite inversión local y reparametrización unitaria. |
| $\frac d{dt}(a\cdot b)=a^{\prime}\cdot b+a\cdot b^{\prime}$ | Funciones vectoriales derivables; regla análoga para producto vectorial conservando el orden. |

### Límites y continuidad

| Relación | Símbolos, significado y condiciones |
|---|---|
| $0<\lVert X-P\rVert<\delta\Rightarrow\lvert f(X)-L\rvert<\varepsilon$ | Para todo ε>0 debe existir δ>0; X dentro del dominio. |
| $\lvert f(X)-L\rvert\le C\lVert X-P\rVert^\alpha\longrightarrow0$ | C constante, α>0; cota válida para todos los puntos cercanos, no solo caminos fijos. |
| $2\lvert xy\rvert\le x^2+y^2$ | Desigualdad útil para cotas globales de límites. |
| $\lim_{X\to P}f(X)=f(P)$ | Continuidad: f definida en P y límite relativo al dominio coincidente. |

### Diferenciación

| Relación | Símbolos, significado y condiciones |
|---|---|
| $f_x(P)=\lim_{h\to0}\frac{f(P+h e_x)-f(P)}h$ | Parcial por definición; otras variables constantes. |
| $D_u f(P)=\nabla f(P)\cdot u$ | Requiere diferenciabilidad; para tasa por distancia, norma de u igual a uno. |
| $\frac{f(P+h)-f(P)-\nabla f(P)\cdot h}{\lVert h\rVert}\longrightarrow0$ | Definición de diferenciabilidad; no basta continuidad ni existencia de parciales. |
| $\max_{\lVert u\rVert=1}D_uf=\lVert\nabla f\rVert$ | Si gradiente no nulo, dirección de máximo aumento ∇f/&#124;&#124;∇f&#124;&#124;; descenso opuesto. |

### Cadena e implícita

| Relación | Símbolos, significado y condiciones |
|---|---|
| $D(f\circ g)(P)=Df(g(P))Dg(P)$ | Funciones diferenciables; respetar dimensiones y orden del producto matricial. |
| $z=f(P)+\nabla f(P)\cdot((x,y)-P)$ | Plano tangente a gráfica de f diferenciable. |
| $\nabla F(P)\cdot(X-P)=0,\quad X=P+t\nabla F(P)$ | Plano y normal a nivel F=c; F de clase C1 y gradiente no nulo. |
| $z_x=-F_x/F_z,\quad z_y=-F_y/F_z$ | F(x,y,z)=0, F de clase C1 y Fz≠0; conclusión local. |
| $t=\nabla F(P)\times\nabla G(P)$ | Tangente a intersección regular de niveles; gradientes independientes. |

### Taylor

| Relación | Símbolos, significado y condiciones |
|---|---|
| $T_2(P+h)=f(P)+\nabla f(P)\cdot h+\tfrac12h^TH_f(P)h$ | f de clase C2 cerca de P; resto o(&#124;&#124;h&#124;&#124;²). H es Hessiano. |
| $T_2=f+f_xh+f_yk+\tfrac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)$ | Derivadas evaluadas en el centro; h=x−a, k=y−b. |
| $\lvert f(P+(h,k))-T_1\rvert\le\tfrac M2(\lvert h\rvert+\lvert k\rvert)^2$ | Segundas parciales continuas y acotadas en magnitud por M sobre el segmento de aproximación. |

### Extremos

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\nabla f(P)=0$ | Condición necesaria para extremo interior de f diferenciable; no suficiente. |
| $D=f_{xx}f_{yy}-f_{xy}^2$ | En estacionario C2: D>0 y fxx>0 mínimo; D>0 y fxx<0 máximo; D<0 silla; D=0 no decide. |
| $\nabla f=\lambda\nabla g,\quad g=c$ | Lagrange con ∇g≠0; candidatos, no clasificación automática. |
| $\nabla f=\lambda\nabla g+\mu\nabla h,\quad g=c,\ h=d$ | Dos restricciones con gradientes independientes; revisar puntos singulares y comparar valores. |

### Integral doble

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Df\,dA=\int_a^b\int_{\alpha(x)}^{\beta(x)}f(x,y)dy\,dx$ | Recinto vertical simple; hipótesis de integrabilidad/Fubini, por ejemplo f continua en recinto compacto regular. |
| $V=\iint_D(z_{\rm sup}-z_{\rm inf})dA$ | Superior≥inferior en D; si se cruzan, dividir. |
| $m=\iint_D\sigma dA,\quad\bar x=\frac1m\iint_Dx\sigma dA,\quad\bar y=\frac1m\iint_Dy\sigma dA$ | Densidad superficial σ≥0 y masa positiva. |
| $f_{\rm med}=\frac1{A(D)}\iint_Df\,dA$ | Área finita y positiva; promedio uniforme sobre área. |

### Cambios de variables

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dA=\left\lvert\det\frac{\partial(x,y)}{\partial(u,v)}\right\rvert du\,dv$ | Cambio regular e inyectivo en interior, salvo excepciones de área nula; transformar recinto e integrando. |
| $x=r\cos\theta,\quad y=r\sin\theta,\quad dA=rdrd\theta$ | Polares con r≥0; rangos elegidos para cubrir región una vez. |
| $\det DT^{-1}=1/\det DT$ | Donde existe inversa diferenciable y determinante no nulo; no usar el jacobiano inverso como factor directo. |

### Integrales triples

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dV=rdrd\theta dz$ | Cilíndricas x=rcosθ, y=rsinθ; adaptar orden y límites al sólido. |
| $dV=\rho^2\sin\varphi\,d\rho d\varphi d\theta$ | Esféricas: x=ρsinφcosθ, y=ρsinφsinθ, z=ρcosφ; φ polar desde +z. |
| $m=\iiint_E\delta dV,\quad\mathbf R=\frac1m\iiint_E\mathbf r\delta dV$ | Densidad volumétrica δ≥0; masa positiva para centro de masa. |
| $I_z=\iiint_E(x^2+y^2)\delta dV$ | Distancia al eje z al cuadrado; no z². |
| $dV=\lvert\det DT\rvert du\,dv\,dw$ | Cambio 3D regular e inyectivo bajo hipótesis del teorema. |

### Integrales de línea

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\int_Cf\,ds=\int_a^bf(r(t))\lVert r^{\prime}(t)\rVert dt$ | Integral escalar; no cambia al invertir sentido de un recorrido único. |
| $\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(r(t))\cdot r^{\prime}(t)dt$ | Trabajo/circulación; cambia de signo al invertir orientación. |
| $L=\int_C1\,ds,\quad A_{\rm cortina}=\int_Ch\,ds$ | h≥0 para área geométrica de una cortina vertical; controlar repeticiones. |

### Potenciales y exactas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf F=\nabla\phi\Rightarrow\int_A^B\mathbf F\cdot d\mathbf r=\phi(B)-\phi(A)$ | Potencial definido en dominio que contiene el recorrido; curva regular por tramos. |
| $\nabla\times\mathbf F=0$ | Necesaria para campo gradiente suave; suficiente globalmente con hipótesis como dominio abierto simplemente conexo y F de clase C1. |
| $\phi_x=M,\quad\phi_y=N\Rightarrow Mdx+Ndy=d\phi$ | Ecuación exacta: soluciones en niveles φ=C, con ramas y regularidad a revisar. |
| $M_y=N_x$ | Prueba local de cerradura; para exactitud global revisar dominio y regularidad. |

### Green

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial D}Pdx+Qdy=\iint_D(Q_x-P_y)dA$ | P,Q de clase C1 en abierto que contiene D; borde positivo regular por tramos. |
| $A(D)=\tfrac12\oint_{\partial D}(xdy-ydx)$ | Borde positivo; en curvas con lazos puede dar área orientada con cancelaciones. |
| $\partial D=C_{\rm exterior}+\sum C_{\rm agujero}$ | Exterior antihorario e interiores horarios, dejando D a la izquierda; sumar todas las componentes. |

### Superficies

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dS=\lVert r_u\times r_v\rVert du\,dv$ | Parametrización regular y control de multiplicidad. |
| $dS=\sqrt{1+g_x^2+g_y^2}\,dxdy$ | Gráfica z=g(x,y); elemento real de superficie, no área proyectada. |
| $\mathbf n\,dS=\pm(r_u\times r_v)du\,dv$ | Signo según orientación; no multiplicar otra vez por la norma. |
| $A=2\pi\int r(t)\sqrt{x^{\prime}(t)^2+r^{\prime}(t)^2}dt$ | Revolución alrededor de x, r(t)≥0 y una cobertura de la superficie. |

### Integral superficial y flujo

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Sf\,dS=\iint_Df(r(u,v))\lVert r_u\times r_v\rVert du\,dv$ | Integral escalar; invertir orientación no cambia el resultado. |
| $\Phi=\iint_S\mathbf F\cdot\mathbf n\,dS$ | n unitaria; cambia de signo con orientación. |
| $\Phi_{\rm arriba}=\iint_D\mathbf F(x,y,g)\cdot(-g_x,-g_y,1)dxdy$ | Gráfica z=g(x,y) hacia arriba; no añadir √(1+gx²+gy²). |

### Operadores vectoriales

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\operatorname{div}\mathbf F=P_x+Q_y+R_z$ | Divergencia escalar de F=(P,Q,R). |
| $\nabla\times\mathbf F=(R_y-Q_z,P_z-R_x,Q_x-P_y)$ | Rotor vectorial en tres dimensiones; conservar signos. |
| $\Delta f=f_{xx}+f_{yy}+f_{zz}$ | Laplaciano de campo escalar, igual a div(∇f). |
| $\nabla\times\nabla f=0,\quad\operatorname{div}(\nabla\times\mathbf F)=0$ | Derivadas mixtas continuas suficientes para conmutar; no son recíprocas globales sin hipótesis. |

### Gauss

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS=\iiint_E\operatorname{div}\mathbf F\,dV$ | F de clase C1 en abierto que contiene el sólido; frontera cerrada regular por tramos y normal exterior. |
| $\Phi_{\rm abierta}=\Phi_{\rm cerrada}-\Phi_{\rm tapas}$ | Cerrar con orientación exterior compatible y restar todas las piezas agregadas. |
| $\operatorname{div}(\mathbf r/r^3)=0\quad(r>0)$ | Campo singular en origen; no aplicar Gauss a una bola que lo contiene como si fuera suave. |

### Stokes

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS$ | F de clase C1 en entorno de superficie orientada regular; borde con sentido inducido por mano derecha. |
| $\partial S_1=\partial S_2\Rightarrow\iint_{S_1}\operatorname{rot}F\cdot n\,dS=\iint_{S_2}\operatorname{rot}F\cdot n\,dS$ | Mismo borde orientado y ambas superficies cumplen hipótesis; una proyección igual no basta. |


<!-- fin formulario am2 -->


## Capítulo 0. Herramientas vectoriales y geometría necesarias

### Vectores, desplazamientos y norma

Un punto representa una posición; un vector representa un desplazamiento o una dirección con magnitud. Entre $A$ y $B$, el desplazamiento es $\overrightarrow{AB}=B-A$. Escribir directamente $B$ como dirección «hacia B» solo es correcto cuando se parte del origen.

En $\mathbb R^n$:


$$
\|\mathbf v\|=\sqrt{v_1^2+\cdots+v_n^2},\qquad
\widehat{\mathbf v}=\frac{\mathbf v}{\|\mathbf v\|}\quad(\mathbf v\ne\mathbf0).
$$


Para $A=(1,-2,0)$ y $B=(3,1,6)$, $B-A=(2,3,6)$ y su norma es $7$. La dirección unitaria de A hacia B es $(2/7,3/7,6/7)$. La opuesta también es unitaria, pero apunta hacia el otro lado; «unitario paralelo» puede admitir ambos sentidos, mientras que «hacia B» fija uno.

### Producto escalar: ángulos y proyecciones


$$
\mathbf u\cdot\mathbf v=\sum_i u_iv_i
=\|\mathbf u\|\,\|\mathbf v\|\cos\alpha.
$$


Dos vectores no nulos son perpendiculares si su producto escalar es cero. La proyección vectorial de $\mathbf v$ sobre $\mathbf u\ne0$ es


$$
\operatorname{proy}_{\mathbf u}\mathbf v
=\frac{\mathbf v\cdot\mathbf u}{\|\mathbf u\|^2}\mathbf u.
$$


El número $(\mathbf v\cdot\mathbf u)/\|\mathbf u\|$ es la componente escalar orientada; no es lo mismo que el vector proyectado. Más adelante, la derivada direccional será precisamente una componente del gradiente.

**Ejemplo.** Si $\mathbf u=(1,2)$ y $\mathbf v=(3,1)$, el producto es $5$, la norma de u es $\sqrt5$ y la proyección vectorial es $(1,2)$. El residuo $(2,-1)$ es ortogonal a u: $2-2=0$. Esta comprobación detecta errores de denominador.

### Producto vectorial y producto mixto

En $\mathbb R^3$:


$$
\mathbf u\times\mathbf v=
(u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1).
$$


Es perpendicular a ambos y su norma es el área del paralelogramo que generan. Cambiar el orden cambia el signo. Si son paralelos, el producto es cero y **no proporciona una dirección normal**. El volumen del paralelepípedo generado por u, v y w es $|\mathbf u\cdot(\mathbf v\times\mathbf w)|$. El valor absoluto es necesario porque volumen y volumen orientado son objetos diferentes.

**Ejemplo.** Con $\mathbf u=(1,0,1)$ y $\mathbf v=(0,2,1)$, obtenemos $\mathbf u\times\mathbf v=(-2,-1,2)$ y área $3$. Para $\mathbf w=(1,1,0)$, el volumen es $|-3|=3$. Al duplicar los tres vectores el volumen se multiplica por $2^3=8$, no por dos.

### Rectas y planos: qué información necesita cada uno

Una recta se describe con un punto y una dirección no nula:


$$
\mathbf r(t)=\mathbf p+t\mathbf v.
$$


Un plano puede describirse con un punto y dos direcciones independientes,


$$
\mathbf r(s,t)=\mathbf p+s\mathbf u+t\mathbf v,
$$


o con un punto y un normal no nulo:


$$
\mathbf n\cdot(\mathbf x-\mathbf p)=0.
$$


El vector de coeficientes de $ax+by+cz=d$ es normal, no director del plano. Una recta paralela al plano tiene dirección v con $\mathbf n\cdot\mathbf v=0$; una perpendicular tiene dirección paralela a n.

**Intersección de dos planos.** Para $x+y+z=2$ y $x-y=0$, la segunda ecuación da $y=x$. Tomamos $x=t$ y obtenemos $(t,t,2-2t)$. Su dirección es $(1,1,-2)$; también es paralela a $(1,1,1)\times(1,-1,0)=(1,1,-2)$. Sustituir la parametrización en ambas ecuaciones verifica todos sus puntos, no solamente uno.

La distancia de un punto $P=(x_0,y_0,z_0)$ al plano es


$$
d=\frac{|ax_0+by_0+cz_0-d|}{\sqrt{a^2+b^2+c^2}}.
$$


Se obtiene proyectando el desplazamiento sobre un normal unitario. Suponer que el normal ya es unitario omite el denominador y altera la distancia.

### Superficies que conviene reconocer por sus cortes

Una superficie se entiende cortándola con planos sencillos. En $z=x^2+y^2$, los cortes horizontales $z=k>0$ son circunferencias y los cortes verticales son parábolas: es un paraboloide. En $z=x^2-y^2$, dos cortes verticales dan parábolas con concavidad opuesta: aparece una silla.

Si una ecuación no contiene una variable, el conjunto se prolonga en esa dirección. $x^2+y^2=4$ en el espacio es un cilindro, no solo una circunferencia. $x+z^2=1$ es un cilindro parabólico paralelo al eje y.

Para distinguir hiperboloides, aislá la variable con signo diferente. En $x^2+z^2-y^2=1$, para todo y hay un círculo de radio $\sqrt{1+y^2}$: una hoja. En $y^2-x^2-z^2=1$, necesariamente $|y|\ge1$: dos hojas. El nombre se deduce de los cortes, no de la apariencia de una fórmula memorizada.

**Antes de seguir:** deberías poder normalizar vectores, construir una recta desde dos puntos, obtener un normal mediante un producto vectorial y reconocer qué representa una ecuación en dos y en tres dimensiones. La guía 0 del aula trabaja estas competencias.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 0

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert v\rVert=\sqrt{v\cdot v},\quad\widehat v=v/\lVert v\rVert$ | v≠0 para normalizar; coordenadas ortonormales. |
| $\operatorname{proy}_u v=\frac{u\cdot v}{u\cdot u}u$ | u≠0; proyección vectorial sobre la dirección u. |
| $X=P+tv,\quad n\cdot(X-P)=0$ | Recta con v≠0 y plano con n≠0; t real. |
| $d(P,\Pi)=\frac{\lvert n\cdot P-c\rvert}{\lVert n\rVert}$ | Plano Π: n·X=c; todas las coordenadas en el mismo sistema. |


<!-- fin formulario am2 -->


## Capítulo 1. Curvas y funciones vectoriales

### Una curva geométrica y una parametrización no son lo mismo

Una función vectorial $\mathbf r:I\subset\mathbb R\to\mathbb R^n$ asigna una posición a cada parámetro. En el plano se escribe $(x(t),y(t))$ y en el espacio $(x(t),y(t),z(t))$. Su imagen es el conjunto de posiciones recorridas. La parametrización también informa cómo se recorre: punto inicial, sentido, rapidez y posibles repeticiones.

Por ejemplo, $\mathbf r(t)=(\cos t,\sin t)$, $0\le t\le2\pi$, describe la circunferencia unitaria una vez en sentido antihorario. $\mathbf q(t)=(\cos2t,\sin2t)$ sobre el mismo intervalo la recorre dos veces. Tienen la misma imagen, pero no el mismo recorrido. Si el intervalo de q fuera $[0,\pi]$, también se recorrería una sola vez.

Para $\mathbf p(t)=(\cos t,-\sin t)$ el sentido es horario. Verificalo mirando $t=0$ y un t pequeño positivo: se parte de $(1,0)$ hacia el semiplano inferior. Esa comprobación es más confiable que adivinar por la ubicación del signo menos.

![Misma circunferencia, sentidos y velocidades diferentes](/planos-de-estudio/img/am2/parametrizaciones.svg)

### Eliminar el parámetro sin inventar puntos

De $\mathbf r(t)=(e^t,e^{-t})$ resulta $xy=1$, pero no toda la hipérbola: $x>0$ e $y>0$. De $(t^2,t)$ resulta $x=y^2$ con y real: toda la parábola. De $(t^2,t^2)$ resulta $y=x$ con $x\ge0$: una semirrecta. La ecuación cartesiana debe acompañarse de restricciones heredadas del parámetro.

**Procedimiento:** relacioná componentes, obtené la ecuación o ecuaciones cartesianas, trasladá las restricciones del intervalo y estudiá puntos de referencia para fijar sentido y cobertura. Una igualdad algebraica necesaria puede no describir toda la imagen exacta.

### Cómo construir parametrizaciones

Para el segmento orientado desde A hasta B:


$$
\mathbf r(t)=A+t(B-A),\quad0\le t\le1.
$$


La fórmula interpola extremos. Para $A=(1,-1,2)$ y $B=(3,2,0)$ da $(1+2t,-1+3t,2-2t)$. Si t recorre todos los reales obtenemos la recta completa, no el segmento.

Para una circunferencia de centro $(a,b)$ y radio R, usamos $(a+R\cos t,b+R\sin t)$. En una elipse se reemplazan los radios por semiejes: $(a+A\cos t,b+B\sin t)$. Para comenzar en otro punto se ajusta el ángulo inicial; para invertir orientación se puede reemplazar t por −t.

**Ejemplo de rapidez prescrita.** Se pide la circunferencia de radio 2, centro $(1,-1)$, comenzando en $(3,-1)$, sentido horario y rapidez constante 3. Tomamos


$$
\mathbf r(t)=\bigl(1+2\cos(3t/2),\,-1-2\sin(3t/2)\bigr),
\quad0\le t\le4\pi/3.
$$


El ángulo cambia a razón $3/2$ y la rapidez es radio por rapidez angular: $2(3/2)=3$. En el extremo final el ángulo cambió $2\pi$. Confundir rapidez lineal con angular produciría una parametrización con velocidad equivocada.

### Curvas en el espacio e intersecciones

Si una curva es intersección de dos superficies, conviene parametrizar primero la restricción más simple y sustituir en la otra. Para


$$
x^2+y^2=4,\qquad z=x+y,
$$


tomamos $x=2\cos t$, $y=2\sin t$ y obtenemos $z=2\cos t+2\sin t$. Así


$$
\mathbf r(t)=(2\cos t,2\sin t,2\cos t+2\sin t),\quad0\le t\le2\pi.
$$


Para comprobar, sustituimos en **ambas** ecuaciones. La proyección sobre xy es una circunferencia, pero la curva espacial no está contenida en un plano horizontal. Su proyección no reemplaza la curva cuando se calcula longitud o trabajo.

Otra técnica es completar cuadrados. Para $z=x^2+y^2$ y $z=2x+3$, la proyección satisface $(x-1)^2+y^2=4$. Por eso podemos tomar $x=1+2\cos t$, $y=2\sin t$ y $z=5+4\cos t$. Esta construcción explica por qué parametrizar una intersección suele reducirse a geometría plana.

### Derivación vectorial y tangente

El límite vectorial existe si existen los límites de todas las componentes. La derivada se calcula componente a componente:


$$
\mathbf r'(t)=\lim_{h\to0}\frac{\mathbf r(t+h)-\mathbf r(t)}h.
$$


El numerador es un desplazamiento entre puntos cercanos; al dividir y pasar al límite obtenemos un vector tangente al recorrido. Una parametrización es regular donde $\mathbf r'(t)\ne0$. En un punto regular $P=\mathbf r(t_0)$, la recta tangente es


$$
\mathbf l(s)=P+s\mathbf r'(t_0),\quad s\in\mathbb R.
$$


**Ejemplo.** Para $\mathbf r(t)=(t,t^2,t^3)$ en $t_0=1$, el punto es $(1,1,1)$ y la dirección $(1,2,3)$. La tangente es $(1+s,1+2s,1+3s)$. Usar $\mathbf r(1)$ como dirección confundiría posición con velocidad.

Si $\mathbf r'(t_0)=0$, la fórmula no permite decidir que no exista tangente. $\mathbf r(t)=(t^3,0)$ tiene derivada cero en cero y su imagen es una recta. En cambio, pueden aparecer cúspides o ramas con tangentes distintas. Hay que estudiar la geometría o cambiar de parametrización; no dividir por una norma cero.

### Reglas de cálculo para funciones vectoriales

Las reglas se deducen componente a componente, pero debe conservarse el tipo de producto. Si a(t), b(t) son vectores derivables y λ(t) es escalar:


$$
(\lambda\mathbf a)'=\lambda'\mathbf a+\lambda\mathbf a',\qquad
(\mathbf a\cdot\mathbf b)'=\mathbf a'\cdot\mathbf b+\mathbf a\cdot\mathbf b',
$$



$$
(\mathbf a\times\mathbf b)'=\mathbf a'\times\mathbf b+\mathbf a\times\mathbf b'.
$$


En la última fórmula el orden importa: el producto vectorial es anticomutativo. No se reemplaza por una multiplicación de componentes ni se intercambian los factores sin cambiar signos. Si a≠0, derivar $\|\mathbf a\|^2=\mathbf a\cdot\mathbf a$ da


$$
\frac d{dt}\|\mathbf a\|=\frac{\mathbf a\cdot\mathbf a'}{\|\mathbf a\|}.
$$


Una función vectorial de norma constante tiene a·a′=0. Para un movimiento sobre una esfera centrada en el origen, posición y velocidad son perpendiculares: la velocidad es tangencial a la esfera. No se concluye que la derivada vectorial sea cero; la dirección puede variar manteniendo la norma.

La integral de una función vectorial se define por sus componentes. El teorema fundamental permite recuperar una función desde su derivada sumando un vector constante. No debe reemplazarse $\|\int\mathbf a\,dt\|$ por $\int\|\mathbf a\|dt$: la primera puede tener cancelaciones de desplazamientos, mientras la segunda acumula longitudes. Una vuelta completa de una circunferencia ilustra desplazamiento neto cero y longitud positiva.

### Qué cambia al reparametrizar

Si $\mathbf q(u)=\mathbf r(\phi(u))$, la regla de la cadena da


$$
\mathbf q'(u)=\mathbf r'(\phi(u))\phi'(u).
$$


Cuando $\phi'\ne0$, las direcciones tangentes son paralelas. El signo de $\phi'$ conserva o invierte orientación, y su magnitud cambia rapidez. La recta tangente geométrica coincide, aunque los vectores tangentes no. Si la curva pasa varias veces por el mismo punto, hay que identificar el parámetro o la rama que se estudia.

### Posición, velocidad y aceleración

En un modelo de movimiento, $\mathbf v=\mathbf r'$, rapidez $v=\|\mathbf v\|$ y $\mathbf a=\mathbf r''$. Para recuperar posición desde velocidad se integra cada componente y se usa la condición inicial. Si se conoce aceleración, son necesarias dos integraciones y las condiciones correspondientes.

**Ejemplo resuelto.** Sean $\mathbf a(t)=(0,-2,0)$, $\mathbf v(0)=(1,3,2)$ y $\mathbf r(0)=(0,1,-1)$. Integramos: $\mathbf v(t)=(C_1,-2t+C_2,C_3)$; la condición fija $(1,3-2t,2)$. Otra integración y la posición inicial dan


$$
\mathbf r(t)=(t,\,1+3t-t^2,\,-1+2t).
$$


Cada condición fija constantes diferentes. No se puede inferir el dominio físico del movimiento solo del dominio algebraico: si termina al tocar un suelo, hay que resolver la ecuación de impacto y restringir tiempos.

### Longitud de arco y parámetro longitud

Si la curva es suave por tramos y se recorre una vez,


$$
L=\int_a^b\|\mathbf r'(t)\|\,dt.
$$


La fórmula se entiende aproximando la curva por segmentos: cada longitud es aproximadamente rapidez por incremento del parámetro. Se suman longitudes, por eso aparece una norma y no la integral de un vector. Una parametrización que repite vueltas cuenta las repeticiones.

**Hélice.** Para $\mathbf r(t)=(2\cos t,2\sin t,3t)$, $0\le t\le2\pi$, la rapidez es $\sqrt{4\sin^2t+4\cos^2t+9}=\sqrt{13}$. La longitud es $2\pi\sqrt{13}$. La longitud de su proyección circular sería $4\pi$, menor porque ignora el ascenso.

**Curva de rapidez variable.** Para $(t,t^2)$, $0\le t\le1$:


$$
L=\int_0^1\sqrt{1+4t^2}\,dt
=\frac{\sqrt5}{2}+\frac14\ln(2+\sqrt5).
$$


No se reemplaza por distancia entre extremos, que es $\sqrt2$. Esta última mide el segmento recto, no la parábola.

La longitud acumulada es $s(t)=\int_a^t\|\mathbf r'(u)\|du$. Si la rapidez es positiva, s crece estrictamente y puede invertirse para escribir la curva con rapidez unitaria. En la hélice, $s=\sqrt{13}\,t$ y se sustituye $t=s/\sqrt{13}$. La propiedad $\|d\mathbf r/ds\|=1$ verifica la reparametrización.

### Práctica del capítulo 1

**C1.** Parametrizá el arco de $x^2+y^2=9$ desde $(0,3)$ hasta $(-3,0)$ en sentido antihorario, y calculá longitud y tangente en el inicio.

**C2.** Construí la intersección de $x^2+y^2=1$ con $z=2-y$. Hallá la recta tangente en $(-1,0,2)$.

**C3.** Compará $(\cos t,\sin t)$ y $(\cos3t,\sin3t)$ sobre $[0,2\pi]$: imagen, orientación, vueltas y longitud recorrida.

**Soluciones razonadas.** C1: $(3\cos t,3\sin t)$ con $t\in[\pi/2,\pi]$; longitud $3\pi/2$ y tangente $(0,3)+s(-3,0)$. C2: $(\cos t,\sin t,2-\sin t)$; en $t=\pi$ la dirección es $(0,-1,1)$ y la tangente $(-1,0,2)+s(0,-1,1)$. C3: ambas imágenes son la circunferencia y el sentido es antihorario; la primera da una vuelta y longitud $2\pi$, la segunda tres vueltas y longitud recorrida $6\pi$.

Estos problemas preparan los procedimientos de la guía 1, incluidos sus ejercicios de intersecciones y tangentes. Para transferir, cambiá el plano en C2 por $z=x+y$ y comprobá la nueva parametrización antes de derivar.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 1

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\ell(s)=r(t_0)+sr^{\prime}(t_0)$ | Tangente en punto regular: r′(t0)≠0. |
| $L=\int_a^b\lVert r^{\prime}(t)\rVert dt$ | Curva suave por tramos; cuenta multiplicidad del recorrido. |
| $s(t)=\int_a^t\lVert r^{\prime}(u)\rVert du$ | Longitud acumulada; rapidez positiva permite inversión local y reparametrización unitaria. |
| $\frac d{dt}(a\cdot b)=a^{\prime}\cdot b+a\cdot b^{\prime}$ | Funciones vectoriales derivables; regla análoga para producto vectorial conservando el orden. |


<!-- fin formulario am2 -->


## Capítulo 2. Campos escalares, dominios, niveles, límites y continuidad

### Dominio y significado de una función de varias variables

Un campo escalar $f:D\subset\mathbb R^n\to\mathbb R$ asigna un número a cada punto del dominio. Una temperatura depende de posición, una densidad puede depender de tres coordenadas y una altura de dos. Para dos variables, la gráfica es el conjunto $(x,y,f(x,y))$ en el espacio; el dominio está en el plano. No hay que dibujarlos como si fueran el mismo objeto.

El dominio se obtiene imponiendo simultáneamente restricciones: denominadores no nulos, argumentos de logaritmos positivos, radicandos pares no negativos, y los límites de funciones inversas cuando corresponda. Si una raíz aparece en un denominador, su radicando debe ser estrictamente positivo.

**Ejemplo completo.** Para


$$
f(x,y)=\frac{\ln(y-x^2)}{\sqrt{4-x^2-y^2}},
$$


debemos tener $y>x^2$ y $x^2+y^2<4$. Es la intersección del interior del disco con la región sobre la parábola, sin sus bordes. No es la unión. Para esbozar la zona, dibujamos ambas fronteras y elegimos puntos de prueba. La función no está definida sobre ninguna de ellas.

Una bola abierta $B_r(P)$ reúne puntos a distancia menor que r. P es interior de D si alguna bola queda contenida en D; es de frontera si toda bola encuentra D y su complemento. Un conjunto abierto contiene solo puntos interiores; uno cerrado contiene sus puntos límite. En $\mathbb R^n$, cerrado y acotado equivale a compacto. Esta última propiedad será crucial para extremos absolutos.

### Conjuntos de nivel y cortes

Un conjunto de nivel satisface $f(x,y)=k$ dentro del dominio. Es un conjunto del plano, no la curva espacial $z=k$ sobre la gráfica, aunque ambos se relacionan por proyección. Para $f=x^2+4y^2$, los niveles positivos son elipses; k=0 da un punto y k<0 da el conjunto vacío.

Para $f=x^2-y^2$, los niveles no nulos son hipérbolas y k=0 son dos rectas. Ese mapa anticipa el punto silla de la gráfica. Para $f(x,y,z)=x^2+y^2+z^2$, los niveles positivos son superficies esféricas, porque el dominio ya es tridimensional.

![Curvas de nivel elípticas y direcciones de crecimiento](/planos-de-estudio/img/am2/niveles.svg)

**Cómo leer contornos.** Niveles más próximos pueden indicar cambios más rápidos en la dirección transversal, si los incrementos de nivel son iguales. No se compara «pendiente» contando líneas cuando sus valores tienen separaciones diferentes. Recorrer un mismo nivel mantiene f constante, aunque cambien x e y.

### La definición de límite exige todos los acercamientos

Decir $\lim_{X\to P}f(X)=L$ significa que para todo $\varepsilon>0$ existe $\delta>0$ tal que


$$
X\in D,\quad0<\|X-P\|<\delta
\ \Longrightarrow\ |f(X)-L|<\varepsilon.
$$


P debe ser un punto de acumulación de D, pero no tiene que pertenecer a D. El acercamiento se hace dentro del dominio y no depende de una trayectoria elegida. Por eso revisar ejes o muchas rectas puede refutar un límite, pero no demostrarlo en general.

**Límite que no existe.** Para $f=xy/(x^2+y^2)$, sobre $y=0$ vale cero; sobre $y=x$ vale $1/2$. Dos resultados incompatibles bastan. No corresponde «promediarlos» ni definir f(0,0) para arreglar el límite: el valor aislado no altera lo que pasa alrededor.

### Un contraejemplo que engaña a todas las rectas

Definamos


$$
f(x,y)=\frac{x^2y}{x^4+y^2},\qquad (x,y)\ne(0,0).
$$


Sobre $y=mx$ con m fijo no nulo, $f=mx/(x^2+m^2)\to0$; sobre y=0 y x=0 también da cero. Sin embargo, sobre $y=x^2$, vale $1/2$. El límite no existe aunque todas las rectas por el origen den lo mismo. La curva problemática hace comparables los dos términos del denominador: $x^4$ e $y^2$.

Este razonamiento enseña una estrategia para inventar caminos: equilibrar potencias del denominador. No hay que probar cada curva imaginable; se busca una familia que haga visible una posible obstrucción.

![Acercamientos rectos y parabólico: una prueba por rectas puede ser insuficiente](/planos-de-estudio/img/am2/caminos.svg)

### Cómo demostrar que un límite sí existe

Para $g=x^2y/(x^2+y^2)$, usamos


$$
|g(x,y)|\le |y|\le\sqrt{x^2+y^2}\to0.
$$


La cota es válida para **todo** punto cercano del dominio. Dado $\varepsilon$, alcanza $\delta=\varepsilon$: ya hay una demostración por definición. Esa uniformidad es lo que no proporciona la comprobación de varias trayectorias.

Otra desigualdad útil es $2|xy|\le x^2+y^2$, obtenida de $(|x|-|y|)^2\ge0$. Por ejemplo,


$$
\frac{|xy|}{\sqrt{x^2+y^2}}
\le\frac12\sqrt{x^2+y^2}\to0.
$$


En tres variables se aplica la misma idea con $\rho=\sqrt{x^2+y^2+z^2}$ y $|x|,|y|,|z|\le\rho$.

### Polares: qué prueban y qué no

Sustituir $x=r\cos\theta$, $y=r\sin\theta$ permite separar distancia y ángulo. Si se obtiene $r\cos^2\theta\sin\theta$, su valor absoluto está acotado por r y el límite es cero uniformemente en $\theta$.

Pero si aparece una expresión que tiende a cero para cada $\theta$ **fijo**, todavía puede existir un ángulo $\theta(r)$ dependiente de r que produzca otro comportamiento. El contraejemplo anterior tiene precisamente esa posibilidad. La conclusión segura necesita una cota independiente del ángulo, o una demostración equivalente.

### Continuidad y extensiones

f es continua en P si está definida allí y su límite coincide con f(P). Si existe un límite finito L en un punto excluido, podemos extenderla asignando f(P)=L. Si el límite no existe, ningún valor aislado la vuelve continua.

Las funciones polinómicas son continuas; sumas, productos y composiciones conservan continuidad donde están definidas. Un cociente es continuo donde su denominador no se anula. Esto permite resolver límites por sustitución cuando se verifican esas condiciones, sin crear un procedimiento innecesariamente complicado.

**Ejemplo por partes.** Para $f= x^2y^2/(x^2+y^2)$ fuera del origen y f(0,0)=0,


$$
0\le f\le\frac{(x^2+y^2)^2}{4(x^2+y^2)}
=\frac{x^2+y^2}{4}\to0.
$$


La extensión es continua. Más adelante comprobaremos que además es diferenciable: continuidad y diferenciabilidad requieren controles distintos.

### Práctica del capítulo 2

**L1.** Hallá dominio y niveles de $f=\sqrt{9-x^2-y^2}$. ¿Qué cambia para $1/\sqrt{9-x^2-y^2}$?

**L2.** Analizá $x^3y/(x^2+y^2)$ en el origen usando una cota global.

**L3.** Analizá $2x^3y/(x^6+y^2)$ y compará y=0 con $y=x^3$.

**L4.** ¿Puede extenderse continuamente $\ln(x^2+y^2)$ al origen?

**Soluciones.** L1: disco cerrado de radio 3; niveles de la raíz para $0\le k\le3$ dados por $x^2+y^2=9-k^2$, con k=3 reducido a un punto. El recíproco exige disco abierto. L2: $|x^3y|/(x^2+y^2)\le |x|^2/2\to0$, porque $|xy|\le(x^2+y^2)/2$. L3: sobre y=0 vale cero y sobre $y=x^3$ vale uno; no existe límite. L4: al acercarse radialmente, $\ln r^2\to-\infty$; no hay extensión con valor real finito.

La guía 2 incluye dominios, contornos, contraejemplos y continuidad. Antes de avanzar, distinguí con seguridad refutar por caminos de demostrar mediante una cota válida para todos los caminos.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 2

| Relación | Símbolos, significado y condiciones |
|---|---|
| $0<\lVert X-P\rVert<\delta\Rightarrow\lvert f(X)-L\rvert<\varepsilon$ | Para todo ε>0 debe existir δ>0; X dentro del dominio. |
| $\lvert f(X)-L\rvert\le C\lVert X-P\rVert^\alpha\longrightarrow0$ | C constante, α>0; cota válida para todos los puntos cercanos, no solo caminos fijos. |
| $2\lvert xy\rvert\le x^2+y^2$ | Desigualdad útil para cotas globales de límites. |
| $\lim_{X\to P}f(X)=f(P)$ | Continuidad: f definida en P y límite relativo al dominio coincidente. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 1 · Curvas, campos y límites

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Vectores y geometría

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert v\rVert=\sqrt{v\cdot v},\quad\widehat v=v/\lVert v\rVert$ | v≠0 para normalizar; coordenadas ortonormales. |
| $\operatorname{proy}_u v=\frac{u\cdot v}{u\cdot u}u$ | u≠0; proyección vectorial sobre la dirección u. |
| $X=P+tv,\quad n\cdot(X-P)=0$ | Recta con v≠0 y plano con n≠0; t real. |
| $d(P,\Pi)=\frac{\lvert n\cdot P-c\rvert}{\lVert n\rVert}$ | Plano Π: n·X=c; todas las coordenadas en el mismo sistema. |

### Curvas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\ell(s)=r(t_0)+sr^{\prime}(t_0)$ | Tangente en punto regular: r′(t0)≠0. |
| $L=\int_a^b\lVert r^{\prime}(t)\rVert dt$ | Curva suave por tramos; cuenta multiplicidad del recorrido. |
| $s(t)=\int_a^t\lVert r^{\prime}(u)\rVert du$ | Longitud acumulada; rapidez positiva permite inversión local y reparametrización unitaria. |
| $\frac d{dt}(a\cdot b)=a^{\prime}\cdot b+a\cdot b^{\prime}$ | Funciones vectoriales derivables; regla análoga para producto vectorial conservando el orden. |

### Límites y continuidad

| Relación | Símbolos, significado y condiciones |
|---|---|
| $0<\lVert X-P\rVert<\delta\Rightarrow\lvert f(X)-L\rvert<\varepsilon$ | Para todo ε>0 debe existir δ>0; X dentro del dominio. |
| $\lvert f(X)-L\rvert\le C\lVert X-P\rVert^\alpha\longrightarrow0$ | C constante, α>0; cota válida para todos los puntos cercanos, no solo caminos fijos. |
| $2\lvert xy\rvert\le x^2+y^2$ | Desigualdad útil para cotas globales de límites. |
| $\lim_{X\to P}f(X)=f(P)$ | Continuidad: f definida en P y límite relativo al dominio coincidente. |


<!-- fin formulario am2 -->


## Capítulo 3. Derivadas parciales, direccionales y diferenciabilidad

### Derivar respecto de una variable

La derivada parcial respecto de x mantiene las otras variables fijas:


$$
f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}h.
$$


Geométricamente es la pendiente del corte de la gráfica por el plano y=b. La parcial respecto de y corresponde a otro corte. Son dos exploraciones particulares de una superficie; por sí solas no controlan todas las direcciones.

**Por definición.** Para $f(x,y)=xy+4$,


$$
\frac{f(a+h,b)-f(a,b)}h
=\frac{(a+h)b+4-ab-4}h=b.
$$


Por tanto $f_x=b$ y, de forma análoga, $f_y=a$. En $(2,-3)$ las parciales son −3 y 2: aumentar x manteniendo y fijo disminuye f, mientras que aumentar y manteniendo x fijo la aumenta.

Al calcular con reglas, «mantener fija» no significa eliminar la otra variable. Para $f=x^2y^3+e^{xy}$,


$$
f_x=2xy^3+ye^{xy},\qquad f_y=3x^2y^2+xe^{xy}.
$$


La cadena aporta y o x al derivar la exponencial. En un problema aplicado, las unidades de $f_x$ son unidades de f por unidad de x; pueden diferir de las de $f_y$ si x e y representan magnitudes distintas.

### Parciales existentes sin continuidad

Sea $f=xy/(x^2+y^2)$ fuera del origen y f(0,0)=0. Sobre ambos ejes vale cero, por lo que las dos derivadas parciales en el origen existen y son cero. Sin embargo, en el capítulo anterior vimos que no es continua allí. Esto invalida la inferencia «tiene parciales, entonces es diferenciable».

Para funciones por partes, las parciales en el punto especial se calculan con la definición. No se sustituye ese punto en una fórmula derivada que solo era válida fuera de él.

### Derivada direccional por definición

Para un unitario $\mathbf u=(u_1,u_2)$:


$$
D_{\mathbf u}f(P)=\lim_{h\to0}\frac{f(P+h\mathbf u)-f(P)}h.
$$


Se estudia el cambio sobre una recta con sentido, utilizando un límite bilateral salvo que la consigna diga otra cosa. Cuando la función es diferenciable, resultará $D_{\mathbf u}f=\nabla f\cdot\mathbf u$. Antes de establecer diferenciabilidad, esa fórmula no puede usarse como prueba automática.

**Hacia un punto.** Para $f=x^2+xy+1$, A=(2,1) y B=(6,4), la dirección es $(4,3)/5$, no B ni B/\|B\|. Como f es polinómica y diferenciable,


$$
\nabla f(A)=(5,2),\qquad D_{\mathbf u}f(A)=5\frac45+2\frac35=\frac{26}5.
$$


Significa aumento local de 26/5 unidades de f por unidad de distancia en el plano. Si se pide cambio por tiempo a lo largo de un movimiento, hay que multiplicar por la rapidez correspondiente mediante la cadena.

### Diferenciabilidad: una aproximación lineal válida en todas las direcciones

f es diferenciable en $P=(a,b)$ si existe una aplicación lineal que aproxima su incremento con error despreciable respecto de la distancia. Cuando existen las parciales, la candidata es


$$
f(a+h,b+k)=f(a,b)+f_x(a,b)h+f_y(a,b)k+R(h,k),
$$


con


$$
\lim_{(h,k)\to(0,0)}\frac{R(h,k)}{\sqrt{h^2+k^2}}=0.
$$


La expresión «despreciable» tiene este significado preciso. Un error que tiende a cero no alcanza: debe hacerlo más rápido que la distancia. Por ejemplo, un error igual a la distancia no satisface el cociente, que permanece uno.

La diferenciabilidad implica continuidad porque el término lineal y el resto tienden a cero. También implica todas las derivadas direccionales: sustituir $(h,k)=t\mathbf u$ deja como límite el producto escalar con el gradiente. Las recíprocas son falsas en general.

### Un criterio suficiente y por qué funciona

Si las derivadas parciales existen en un entorno abierto de P y son continuas en P, f es diferenciable allí. En dos variables, se descompone el incremento en dos pasos paralelos a los ejes:


$$
f(a+h,b+k)-f(a,b)
=[f(a+h,b+k)-f(a,b+k)]+[f(a,b+k)-f(a,b)].
$$


Aplicando el teorema del valor medio a cada diferencia y restando $f_x(P)h+f_y(P)k$, el error se expresa como diferencias de parciales cercanas multiplicadas por h o k. La continuidad hace pequeñas esas diferencias y $|h|,|k|\le\sqrt{h^2+k^2}$ controla el cociente. Esta explicación muestra dónde se usan las hipótesis.

El criterio es suficiente, no necesario. Si no se cumple, todavía puede demostrarse diferenciabilidad con la definición. «No pude aplicar el teorema» no equivale a «la función no es diferenciable».

### Demostración con resto, paso a paso

Para $f=x^2y^2/(x^2+y^2)$ fuera del origen y f(0,0)=0, ambas parciales en cero son cero. Entonces la candidata lineal es cero y debemos estudiar


$$
\frac{|f(h,k)|}{\sqrt{h^2+k^2}}
=\frac{h^2k^2}{(h^2+k^2)^{3/2}}
\le\frac{\sqrt{h^2+k^2}}4\to0.
$$


Se usó $h^2k^2\le(h^2+k^2)^2/4$. La función es diferenciable en el origen con diferencial nulo. No se concluyó únicamente a partir de que f tiende a cero: se controló el resto dividido por distancia.

### Todas las direccionales pueden existir y aun así fallar continuidad

La guía 3 propone una situación de este tipo. Consideremos


$$
f(x,y)=\begin{cases}y^5/(x+y),&x+y\ne0,\\0,&x+y=0.\end{cases}
$$


Sobre una recta $(x,y)=t(a,b)$ con a+b≠0, f vale $t^4b^5/(a+b)$ y el cociente direccional se hace $t^3b^5/(a+b)\to0$. Si a+b=0, f es cero por definición. Todas las direccionales en el origen son cero y coinciden con el producto con el gradiente nulo.

Pero sobre $x=y^5-y$, con y≠0, tenemos $x+y=y^5$ y f=1. No es continua. La existencia de cada límite sobre una recta fija no controla un acercamiento curvo. Por eso ni siquiera la igualdad direccional con el gradiente, verificada para todas las direcciones, reemplaza la definición de diferenciabilidad.

### Gradiente, crecimiento máximo y curvas de nivel

Para f diferenciable,


$$
\nabla f=(f_x,f_y),\qquad D_{\mathbf u}f=\nabla f\cdot\mathbf u.
$$


La desigualdad de Cauchy–Schwarz da $|D_{\mathbf u}f|\le\|\nabla f\|$. Si el gradiente no es cero, la máxima tasa es su norma y ocurre hacia $\nabla f/\|\nabla f\|$; la mínima es la norma negativa y ocurre en el sentido opuesto. Las direcciones perpendiculares al gradiente tienen tasa instantánea cero.

**Ejemplo.** Para $T(x,y)=80e^{-(x^2+y^2)}$, en $(1,2)$,


$$
\nabla T=-160e^{-5}(1,2).
$$


Se asciende más rápido en la dirección $(-1,-2)/\sqrt5$, hacia el origen. La tasa máxima es $160\sqrt5e^{-5}$. Hacia $(4,6)$, la dirección unitaria es $(3,4)/5$ y la tasa vale $-352e^{-5}$: desciende. Es diferente de evaluar T en el destino; la derivada describe el inicio del desplazamiento.

Si $\mathbf r(t)$ está en un nivel f=k, entonces $f(\mathbf r(t))=k$ y al derivar obtenemos $\nabla f\cdot\mathbf r'=0$. El gradiente es normal al nivel en puntos regulares. Si el gradiente es cero, no determina una dirección normal y hay que estudiar la geometría de otra manera.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 3

| Relación | Símbolos, significado y condiciones |
|---|---|
| $f_x(P)=\lim_{h\to0}\frac{f(P+h e_x)-f(P)}h$ | Parcial por definición; otras variables constantes. |
| $D_u f(P)=\nabla f(P)\cdot u$ | Requiere diferenciabilidad; para tasa por distancia, norma de u igual a uno. |
| $\frac{f(P+h)-f(P)-\nabla f(P)\cdot h}{\lVert h\rVert}\longrightarrow0$ | Definición de diferenciabilidad; no basta continuidad ni existencia de parciales. |
| $\max_{\lVert u\rVert=1}D_uf=\lVert\nabla f\rVert$ | Si gradiente no nulo, dirección de máximo aumento ∇f/&#124;&#124;∇f&#124;&#124;; descenso opuesto. |


<!-- fin formulario am2 -->


## Capítulo 4. Linealización, cadena y función implícita

### Plano tangente a una gráfica

Para $z=f(x,y)$ diferenciable en $(a,b)$,


$$
z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b).
$$


El lado derecho es la linealización $L(x,y)$. Es una función afín que aproxima alturas; su gráfica es el plano tangente. La coincidencia de fórmulas no hace idénticos los objetos: una es función de dos variables, el otro es un conjunto de puntos del espacio.

**Ejemplo.** Para $f=9-x^2-y^2$ en $(1,2)$, f=4 y gradiente $(−2,−4)$. Así $L=4-2(x-1)-4(y-2)=14-2x-4y$. Para $(1.02,1.97)$,


$$
L=4-2(0.02)-4(-0.03)=4.08.
$$


El valor exacto es $4.0787$ porque el error es $-(0.02)^2-(-0.03)^2=-0.0013$. La linealización sobreestima: la superficie se curva hacia abajo. Este ejemplo permite ver tamaño y signo del error, no solo producir un decimal.

### Diferencial y propagación aproximada de errores

El diferencial es la aplicación lineal $df=f_xdx+f_ydy$. Si las perturbaciones son pequeñas, $\Delta f\approx df$. Para $V=\pi r^2h$,


$$
dV=2\pi rh\,dr+\pi r^2\,dh,\qquad
\frac{dV}{V}=2\frac{dr}{r}+\frac{dh}{h}.
$$


La última igualdad describe error relativo aproximado con signos. Para una cota de peor caso se usan valores absolutos: $|dV|\le|2\pi rh|\,|dr|+|\pi r^2|\,|dh|$. No equivale a un modelo probabilístico de errores independientes: es otro supuesto.

### Regla de la cadena: seguir todas las dependencias

Si $z=f(x,y)$ y $x=x(t),y=y(t)$ son diferenciables,


$$
\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}
=\nabla f(\mathbf r(t))\cdot\mathbf r'(t).
$$


El gradiente se evalúa sobre la curva. Si x e y dependen de s y t, se escribe una suma por cada variable independiente: $z_s=f_xx_s+f_yy_s$ y $z_t=f_xx_t+f_yy_t$.

**Ejemplo con dos comprobaciones.** Sean f=xy+x² y $\mathbf r(t)=(3t,2t^2+1)$. Componiendo: $g(t)=6t^3+9t^2+3t$, luego $g'=18t^2+18t+3$. Por cadena, $\nabla f=(y+2x,x)$, que sobre la curva vale $(2t^2+1+6t,3t)$. Al multiplicar por $(3,4t)$ resulta la misma expresión. La coincidencia comprueba la evaluación de dependencias.

### Jacobiano de una función vectorial

Para $\mathbf h:\mathbb R^n\to\mathbb R^m$, la derivada es una matriz con las parciales de cada componente:


$$
D\mathbf h=\begin{pmatrix}
\partial h_1/\partial x_1&\cdots&\partial h_1/\partial x_n\\
\vdots&&\vdots\\
\partial h_m/\partial x_1&\cdots&\partial h_m/\partial x_n
\end{pmatrix}.
$$


La cadena matricial es $D(\mathbf h\circ\mathbf g)(P)=D\mathbf h(\mathbf g(P))D\mathbf g(P)$. Las dimensiones deben ser compatibles; escribir las matrices ayuda a detectar un orden invertido. El determinante jacobiano solo existe cuando la matriz es cuadrada, y aparecerá en cambios de variables.

### Superficies implícitas y recta normal

Si una superficie es F(x,y,z)=c, con F de clase $C^1$ y $\nabla F(P)\ne0$, el plano tangente es


$$
\nabla F(P)\cdot(X-P)=0,
$$


y la normal es $X=P+s\nabla F(P)$. Para $x^2+y^2+z^2=9$ en $(1,2,2)$, el gradiente es $(2,4,4)$, por lo que el plano es $x+2y+2z=9$. El vector radial es normal, pero eso es una propiedad de esta esfera, no una regla para cualquier superficie.

Para una gráfica, elegimos $F=f(x,y)-z$ y recuperamos un normal $(f_x,f_y,-1)$. Puede usarse su opuesto: el plano es el mismo. Si se necesita orientación de un flujo, en cambio, el signo sí importa.

### Teorema de la función implícita

Si F es $C^1$, F(a,b)=0 y $F_y(a,b)\ne0$, entonces **localmente** la curva puede expresarse como y=g(x), y


$$
g'(a)=-\frac{F_x(a,b)}{F_y(a,b)}.
$$


El teorema garantiza una rama local; no necesariamente una función global. La circunferencia $x^2+y^2=1$ puede escribirse localmente como y(x) donde y≠0; en $(1,0)$ esa hipótesis falla y conviene escribir x(y). La falla de una hipótesis impide aplicar esa conclusión en esa forma, pero no demuestra que la curva deje de ser suave.

Para F(x,y,z)=0 y $F_z\ne0$, existe localmente z=f(x,y), con $f_x=-F_x/F_z$ y $f_y=-F_y/F_z$. Se deduce derivando $F(x,y,f(x,y))=0$ por cadena.

**Ejemplo.** En $x^2+xy+y^3=7$, P=(2,1): $F_x=2x+y=5$ y $F_y=x+3y^2=5$. Entonces $y'=-1$ y la tangente es $y-1=-(x-2)$. Primero se comprueba que P está en la curva; de otro modo no tendría sentido una tangente allí.

### Intersección de superficies: tangente sin parametrizar toda la curva

Si F=c y G=d se cortan en P y sus gradientes son independientes, un vector tangente a la intersección es $\nabla F(P)\times\nabla G(P)$. Es perpendicular a ambos normales, por lo que está en ambos planos tangentes.

Para $F=x^2+y^2$, $G=y+z$, P=(1,0,2), niveles F=1 y G=2, los gradientes son $(2,0,0)$ y $(0,1,1)$. Su producto vectorial es $(0,-2,2)$: la tangente es $(1,0,2)+s(0,-1,1)$. Si el producto es cero, no se concluye una tangente única con este procedimiento.

### Derivadas de orden superior y Schwarz

Se pueden derivar las parciales nuevamente. Para f=x²y³, $f_{xx}=2y^3$, $f_{xy}=6xy^2$ y $f_{yx}=6xy^2$. Un criterio usual de Schwarz dice que las parciales mixtas coinciden si son continuas en un entorno del punto. Sin hipótesis adecuadas, la conmutación no está garantizada.

Las ecuaciones diferenciales parciales pueden comprobarse sustituyendo derivadas, sin resolverlas en general. Para $u=e^{-\alpha n^2t}\sin(nx)$:


$$
u_t=-\alpha n^2e^{-\alpha n^2t}\sin(nx),\quad
u_{xx}=-n^2e^{-\alpha n^2t}\sin(nx),
$$


de modo que $u_t=\alpha u_{xx}$. Verificar una solución particular no demuestra que se hayan obtenido todas las soluciones de la ecuación.

### Práctica de los capítulos 3 y 4

**D1.** Calculá por definición las parciales en cero de $f=xy/(x^2+y^2)$ con f(0)=0. ¿Podés usar el gradiente para todas las direccionales?

**D2.** Para f=x²+3y² en (1,−1), hallá tasa máxima, dirección de máximo descenso y direcciones de tasa cero.

**D3.** Linealizá $f=\sqrt{x^2+y^2+1}$ en (0,0). ¿Por qué el primer orden da una constante? Calculá el error exacto en (0.1,0.1).

**D4.** Hallá plano tangente y normal a $x^2+2y^2+z^2=4$ en (1,1,1).

**D5.** Para F=x²+y²+z²−1 en un punto con z≠0, obtené $z_x,z_y$ y explicá qué pasa en el ecuador.

**Soluciones.** D1: ambas parciales son cero, pero no hay diferenciabilidad ni continuidad. En una dirección con $u_1u_2\ne0$, el cociente es $u_1u_2/h$ y no tiene límite finito; no se aplica la fórmula del gradiente. D2: gradiente $(2,-6)$, tasa máxima $2\sqrt{10}$, descenso $(−1,3)/\sqrt{10}$ y direcciones nulas $\pm(3,1)/\sqrt{10}$. D3: L=1 porque no hay cambio lineal en el origen; error $\sqrt{1.02}-1$. D4: normal $(2,4,2)$, plano $x+2y+z=4$, recta $(1,1,1)+s(1,2,1)$. D5: $z_x=-x/z$, $z_y=-y/z$; en z=0 falla la hipótesis para despejar z de esta forma y puede haber plano tangente vertical.

Las guías 2 y 3 incluyen estos tipos de análisis. Una respuesta completa distingue cálculo de parciales, existencia de direccionales y prueba de diferenciabilidad.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 4

| Relación | Símbolos, significado y condiciones |
|---|---|
| $D(f\circ g)(P)=Df(g(P))Dg(P)$ | Funciones diferenciables; respetar dimensiones y orden del producto matricial. |
| $z=f(P)+\nabla f(P)\cdot((x,y)-P)$ | Plano tangente a gráfica de f diferenciable. |
| $\nabla F(P)\cdot(X-P)=0,\quad X=P+t\nabla F(P)$ | Plano y normal a nivel F=c; F de clase C1 y gradiente no nulo. |
| $z_x=-F_x/F_z,\quad z_y=-F_y/F_z$ | F(x,y,z)=0, F de clase C1 y Fz≠0; conclusión local. |
| $t=\nabla F(P)\times\nabla G(P)$ | Tangente a intersección regular de niveles; gradientes independientes. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 2 · Diferenciación

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Diferenciación

| Relación | Símbolos, significado y condiciones |
|---|---|
| $f_x(P)=\lim_{h\to0}\frac{f(P+h e_x)-f(P)}h$ | Parcial por definición; otras variables constantes. |
| $D_u f(P)=\nabla f(P)\cdot u$ | Requiere diferenciabilidad; para tasa por distancia, norma de u igual a uno. |
| $\frac{f(P+h)-f(P)-\nabla f(P)\cdot h}{\lVert h\rVert}\longrightarrow0$ | Definición de diferenciabilidad; no basta continuidad ni existencia de parciales. |
| $\max_{\lVert u\rVert=1}D_uf=\lVert\nabla f\rVert$ | Si gradiente no nulo, dirección de máximo aumento ∇f/&#124;&#124;∇f&#124;&#124;; descenso opuesto. |

### Cadena e implícita

| Relación | Símbolos, significado y condiciones |
|---|---|
| $D(f\circ g)(P)=Df(g(P))Dg(P)$ | Funciones diferenciables; respetar dimensiones y orden del producto matricial. |
| $z=f(P)+\nabla f(P)\cdot((x,y)-P)$ | Plano tangente a gráfica de f diferenciable. |
| $\nabla F(P)\cdot(X-P)=0,\quad X=P+t\nabla F(P)$ | Plano y normal a nivel F=c; F de clase C1 y gradiente no nulo. |
| $z_x=-F_x/F_z,\quad z_y=-F_y/F_z$ | F(x,y,z)=0, F de clase C1 y Fz≠0; conclusión local. |
| $t=\nabla F(P)\times\nabla G(P)$ | Tangente a intersección regular de niveles; gradientes independientes. |


<!-- fin formulario am2 -->


## Capítulo 5. Taylor y control del error

### La aproximación cuadrática explica la curvatura

La linealización usa el valor y las primeras derivadas. Para incorporar curvatura se agregan segundas derivadas. Si f tiene regularidad suficiente cerca de P=(a,b), con $h=x-a$, $k=y-b$:


$$
T_2=f(P)+f_x(P)h+f_y(P)k
+\frac12\bigl[f_{xx}(P)h^2+2f_{xy}(P)hk+f_{yy}(P)k^2\bigr].
$$


La matriz hessiana H reúne las segundas derivadas y el término cuadrático es $\tfrac12(h,k)H(h,k)^T$. El factor dos del término mixto procede de las dos posiciones simétricas de la matriz. Es uno de los errores más habituales al construir Taylor.

**Ejemplo.** Para $f=e^{x+y}$ en el origen, todas las derivadas relevantes valen uno:


$$
T_1=1+x+y,\qquad
T_2=1+x+y+\frac{x^2+2xy+y^2}{2}.
$$


Es consistente con el Taylor univariado de $e^s$ usando s=x+y. En (0.1,−0.05), $T_1=1.05$ y $T_2=1.05125$. La variación depende de la suma; dos desplazamientos distintos con la misma suma producen el mismo valor exacto.

### Derivar Taylor multivariable desde una función de una variable

Fijamos el desplazamiento d=(h,k) y definimos $g(t)=f(P+td)$, $0\le t\le1$. La cadena da $g'(0)=\nabla f(P)\cdot d$ y $g''(0)=d^TH(P)d$. Aplicando Taylor a g entre cero y uno recuperamos la fórmula anterior. Esta reducción también explica qué significa «a lo largo del segmento» al estimar el error.

Si todas las derivadas de orden m+1 están acotadas en una región que contiene el segmento, se puede acotar el resto. Para primer orden, si $|f_{xx}|,|f_{xy}|,|f_{yy}|\le M$ sobre ese segmento,


$$
|f(P+d)-T_1(P+d)|\le\frac M2(|h|+|k|)^2.
$$


La cota se obtiene de $|g''(t)|\le M(h^2+2|hk|+k^2)$. No basta conocer las derivadas únicamente en el centro para garantizar un error en todo el tramo.

**Cota numérica.** Para $e^{x+y}$ en (0.1,−0.05), sobre el segmento x+y está entre 0 y 0.05. Podemos tomar M=$e^{0.05}$ y obtener error de primer orden no mayor que $e^{0.05}(0.15)^2/2$. Es una cota válida pero conservadora. Usando que g(t)=$e^{0.05t}$ se consigue la más ajustada $e^{0.05}(0.05)^2/2$. Una cota no tiene por qué coincidir con el error real.

### Taylor en un centro distinto del origen

Para $f=e^{xy}$ en P=(1,1), escribimos h=x−1, k=y−1. Las derivadas son $f=e$, $f_x=f_y=e$, $f_{xx}=f_{yy}=e$ y $f_{xy}=2e$. Entonces


$$
T_2=e\left[1+h+k+\frac12(h^2+4hk+k^2)\right].
$$


No se reemplazan h,k por x,y: el centro está incorporado en los incrementos. La comprobación mínima es evaluar en P y revisar que T₂, sus primeras y sus segundas derivadas allí coincidan con f.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 5

| Relación | Símbolos, significado y condiciones |
|---|---|
| $T_2(P+h)=f(P)+\nabla f(P)\cdot h+\tfrac12h^TH_f(P)h$ | f de clase C2 cerca de P; resto o(&#124;&#124;h&#124;&#124;²). H es Hessiano. |
| $T_2=f+f_xh+f_yk+\tfrac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)$ | Derivadas evaluadas en el centro; h=x−a, k=y−b. |
| $\lvert f(P+(h,k))-T_1\rvert\le\tfrac M2(\lvert h\rvert+\lvert k\rvert)^2$ | Segundas parciales continuas y acotadas en magnitud por M sobre el segmento de aproximación. |


<!-- fin formulario am2 -->


## Capítulo 6. Extremos libres, absolutos y condicionados

### Candidatos no son conclusiones

Un máximo local en P significa que f(P)≥f(X) para puntos de D suficientemente cercanos; uno absoluto compara con todo D. Si P es interior, f es diferenciable y tiene un extremo local, entonces $\nabla f(P)=0$. Se justifica restringiendo a cada recta coordenada y aplicando la condición necesaria de una variable.

Esta condición no es suficiente. Para f=x²−y², el gradiente se anula en el origen, pero hay valores positivos sobre y=0 y negativos sobre x=0: es un punto silla. Además, extremos pueden aparecer en puntos no diferenciables o en la frontera, donde la condición interior no se aplica.

### Criterio de la segunda derivada y su fundamento

En un punto estacionario P de una función $C^2$, definimos


$$
D=f_{xx}(P)f_{yy}(P)-f_{xy}(P)^2.
$$


Si D>0 y $f_{xx}>0$, hay mínimo local estricto. Si D>0 y $f_{xx}<0$, máximo local estricto. Si D<0, silla. Si D=0, el criterio no decide.

La razón es Taylor: al anularse la parte lineal, cerca del punto domina la forma cuadrática si es definida. Positiva en toda dirección implica mínimo; negativa, máximo; con ambos signos, silla. Si tiene direcciones nulas, los términos de orden superior pueden decidir de formas distintas. Por eso D=0 no significa «no hay extremo».

### Ejemplo con varios puntos críticos

Sea $f=x^3-3x+y^2$. El sistema $f_x=3x^2-3=0$, $f_y=2y=0$ da P₁=(1,0), P₂=(−1,0). Las segundas derivadas son $f_{xx}=6x$, $f_{yy}=2$, $f_{xy}=0$. En P₁, D=12 y $f_{xx}=6$: mínimo local. En P₂, D=−12: silla.

El mínimo no es absoluto en todo el plano, porque f(x,0)→−∞ cuando x→−∞. Clasificar localmente y decidir globalmente son preguntas distintas.

### Hessiano degenerado: tres desenlaces diferentes

En el origen, f₁=x⁴+y⁴ tiene mínimo estricto aunque D=0. f₂=−x⁴−y⁴ tiene máximo estricto. f₃=x⁴−y⁴ tiene silla. En los tres casos las segundas derivadas se anulan en cero. Se resuelve mirando el signo exacto de la función respecto de f(0), no forzando un criterio inconcluso.

Un ejemplo más sutil, presente como tipo de problema en la guía 4, es


$$
f=(y-3x^2)(y-x^2).
$$


Sobre cada recta fija y=mx, cerca de cero se comporta como m²x² si m≠0, y sobre y=0 vale 3x⁴≥0. Sin embargo, sobre y=2x² vale −x⁴<0; sobre y=0 es positivo. No tiene mínimo en el origen. Revisar solo rectas tampoco basta para clasificar extremos degenerados.

### Extremos absolutos en una región compacta

Si f es continua y D es compacto no vacío, alcanza máximo y mínimo absolutos. El teorema garantiza existencia, no ubicación. Para encontrarlos se revisan puntos críticos interiores, puntos interiores no diferenciables, cada componente de la frontera y sus extremos o esquinas.

**Ejemplo completo.** Para $f=x^2+y^2-2x$ sobre el disco $x^2+y^2\le4$, el punto crítico interior satisface (2x−2,2y)=0: P=(1,0), valor −1. En la frontera usamos $(2\cos t,2\sin t)$ y f=4−4cos t. Su mínimo es 0 en (2,0) y máximo 8 en (−2,0). Comparando todos los candidatos, mínimo absoluto −1 y máximo absoluto 8.

Completar cuadrados, $f=(x-1)^2+y^2-1$, verifica el mínimo. La frontera se estudia entera; no alcanza con probar sus puntos de intersección con los ejes por costumbre.

**Región con esquinas.** Para f=xy sobre el triángulo x≥0, y≥0, x+y≤2, el único punto estacionario de la fórmula es el origen, que no es interior. En los lados coordenados f=0; sobre y=2−x, f=2x−x², 0≤x≤2, máximo 1 en (1,1). Así el mínimo cero se alcanza en los dos lados coordenados y el máximo uno en (1,1). Un extremo no tiene por qué ser único.

### Lagrange: la geometría de una restricción

Se busca extremar f sobre g=c. En un punto regular de la restricción, $\nabla g\ne0$. Las direcciones tangentes satisfacen $\nabla g\cdot v=0$. En un extremo condicionado, la derivada de f en cada dirección tangente debe anularse; por eso $\nabla f$ es paralelo a $\nabla g$:


$$
\nabla f=\lambda\nabla g,\qquad g=c.
$$


El multiplicador introduce una condición necesaria bajo hipótesis, no una clasificación automática. Deben incluirse puntos singulares de la restricción y analizarse existencia y globalidad. Dividir por x o y durante el sistema puede perder soluciones: se separan casos.

**Ejemplo.** Extrememos f=xy sobre x²+y²=1. Las ecuaciones son y=2λx, x=2λy y la restricción. x=0 implicaría y=0, imposible; análogamente y≠0. Multiplicando o sustituyendo resulta 4λ²=1 y y=±x. Los cuatro candidatos son $(\pm1/\sqrt2,\pm1/\sqrt2)$. Los signos iguales dan f=1/2; los opuestos, −1/2. Como la circunferencia es compacta y f continua, estos son máximo y mínimo absolutos condicionados.

### Dos restricciones y puntos singulares

En $\mathbb R^3$, para g=c y h=d con gradientes independientes, la condición es


$$
\nabla f=\lambda\nabla g+\mu\nabla h.
$$


Una alternativa es parametrizar la curva de intersección y resolver una variable. Por ejemplo, sobre x²+y²=1 y z=2, f=x−y+z se convierte en cos t−sin t+2. Su máximo es $2+\sqrt2$ y mínimo $2-\sqrt2$. Los puntos son $(1/\sqrt2,-1/\sqrt2,2)$ y su opuesto en xy con z=2. Elegir el método más simple también forma parte de resolver.

**Advertencia singular.** Para minimizar f=x sobre la restricción g=x²+y²=0, el conjunto permitido solo contiene (0,0), que es mínimo y máximo condicionado. Allí ∇g=0 y las ecuaciones de Lagrange exigirían (1,0)=0, imposibles. La falta de soluciones de ese sistema no elimina el extremo: faltaba la hipótesis de regularidad.

### Modelar una distancia

Para hallar el punto de un plano más cercano al origen, es más sencillo minimizar distancia al cuadrado, f=x²+y²+z²: la raíz es creciente y no cambia el minimizador. En el plano x−y+z=5, Lagrange da (2x,2y,2z)=λ(1,−1,1). Entonces (x,y,z)=(λ/2,−λ/2,λ/2), y la restricción fija λ=10/3. El punto es (5/3,−5/3,5/3) y la distancia $5/\sqrt3$.

La conclusión global puede verificarse porque se está proyectando ortogonalmente sobre un plano. No hace falta aplicar el determinante de dos variables a un problema restringido de tres variables sin justificarlo.

### Práctica de Taylor y extremos

**E1.** Construí T₂ de $\cos y+\sin(xy)$ en cero y compará con T₁.

**E2.** Clasificá el origen para $(x-y)^2$. ¿Es un mínimo estricto?

**E3.** Hallá extremos absolutos de x²−y² en el disco unitario.

**E4.** Extremá x+y sobre x²+4y²=4.

**E5.** Explicá por qué resolver solo ∇f=0 no alcanza para una región triangular.

**Soluciones.** E1: $T_1=1$, $T_2=1+xy-y^2/2$, porque sin(xy) comienza en grado total dos. E2: mínimo absoluto cero sobre toda la recta x=y, no estricto; D=0 no impide el extremo. E3: máximo 1 en (±1,0), mínimo −1 en (0,±1); el origen es silla interior. E4: $(x,y)=\pm(4/\sqrt5,1/\sqrt5)$, valores $\pm\sqrt5$; puede verificarse parametrizando x=2cos t, y=sin t. E5: faltan lados y vértices, donde los desplazamientos permitidos no abarcan un entorno abierto.

La guía 4 combina clasificación, restricciones, Taylor y estimaciones de error. Para demostrar dominio, resolvé un caso con D=0 y otro con frontera: los casos rutinarios de D≠0 no cubren toda la competencia.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 6

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\nabla f(P)=0$ | Condición necesaria para extremo interior de f diferenciable; no suficiente. |
| $D=f_{xx}f_{yy}-f_{xy}^2$ | En estacionario C2: D>0 y fxx>0 mínimo; D>0 y fxx<0 máximo; D<0 silla; D=0 no decide. |
| $\nabla f=\lambda\nabla g,\quad g=c$ | Lagrange con ∇g≠0; candidatos, no clasificación automática. |
| $\nabla f=\lambda\nabla g+\mu\nabla h,\quad g=c,\ h=d$ | Dos restricciones con gradientes independientes; revisar puntos singulares y comparar valores. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 3 · Taylor y extremos

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Taylor

| Relación | Símbolos, significado y condiciones |
|---|---|
| $T_2(P+h)=f(P)+\nabla f(P)\cdot h+\tfrac12h^TH_f(P)h$ | f de clase C2 cerca de P; resto o(&#124;&#124;h&#124;&#124;²). H es Hessiano. |
| $T_2=f+f_xh+f_yk+\tfrac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)$ | Derivadas evaluadas en el centro; h=x−a, k=y−b. |
| $\lvert f(P+(h,k))-T_1\rvert\le\tfrac M2(\lvert h\rvert+\lvert k\rvert)^2$ | Segundas parciales continuas y acotadas en magnitud por M sobre el segmento de aproximación. |

### Extremos

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\nabla f(P)=0$ | Condición necesaria para extremo interior de f diferenciable; no suficiente. |
| $D=f_{xx}f_{yy}-f_{xy}^2$ | En estacionario C2: D>0 y fxx>0 mínimo; D>0 y fxx<0 máximo; D<0 silla; D=0 no decide. |
| $\nabla f=\lambda\nabla g,\quad g=c$ | Lagrange con ∇g≠0; candidatos, no clasificación automática. |
| $\nabla f=\lambda\nabla g+\mu\nabla h,\quad g=c,\ h=d$ | Dos restricciones con gradientes independientes; revisar puntos singulares y comparar valores. |


<!-- fin formulario am2 -->


## Capítulo 7. Integral doble: acumular sobre una región

### De una suma de aportes a una integral

Dividimos una región D del plano en pequeñas partes de área $\Delta A_i$, elegimos un punto $P_i$ en cada una y sumamos $f(P_i)\Delta A_i$. Si estas sumas tienden a un valor independiente de la partición y de las elecciones al refinarla, definimos $\iint_Df\,dA$.

Cuando f≥0 representa altura, cada término aproxima el volumen de una columna. Si f es densidad superficial, aproxima masa. Si f toma ambos signos, la integral registra acumulación con signo: no siempre es volumen geométrico. Para área, se integra uno, no la función que describe una frontera.

En el marco habitual de la cursada, una función continua sobre una región compacta con frontera regular por tramos es integrable. También hay condiciones más generales, pero no se deben intercambiar integrales impropias sin comprobar convergencia o las hipótesis del teorema correspondiente.

La integral es lineal, aditiva sobre regiones que no se solapan salvo bordes y monótona: si f≤g, sus integrales mantienen el orden. Si m≤f≤M en D, entonces


$$
m\,A(D)\le\iint_Df\,dA\le M\,A(D).
$$


Esta desigualdad permite detectar resultados imposibles sin repetir una primitiva.

### Fubini e integrales iteradas

Sobre un rectángulo y con f continua,


$$
\iint_D f\,dA
=\int_a^b\left[\int_c^d f(x,y)\,dy\right]dx
=\int_c^d\left[\int_a^b f(x,y)\,dx\right]dy.
$$


En la integral interior, la otra variable se mantiene fija. El diferencial más próximo al integrando indica qué se integra primero. No se cambian los diferenciales sin cambiar los límites correspondientes.

**Ejemplo básico.** En $D=[0,1]\times[0,2]$,


$$
\iint_D(x+2y)\,dA
=\int_0^1[xy+y^2]_{0}^{2}dx
=\int_0^1(2x+4)dx=5.
$$


El área es 2 y el valor medio es 5/2, consistente con una función lineal evaluada en el centro $(1/2,1)$. La consistencia geométrica complementa la cuenta.

### Regiones simples y proyecciones

Una descripción vertical es


$$
D=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\},
$$


y produce $\int_a^b\int_{\alpha(x)}^{\beta(x)}f\,dy\,dx$. Los límites internos dependen de x porque se recorre cada segmento vertical dentro de D. Una descripción horizontal fija y y acota x entre funciones de y.

**Método para armar límites:** dibujá o describí fronteras; calculá intersecciones; proyectá sobre el eje exterior; para cada valor exterior, determiná dónde entra y sale el segmento interior; separá regiones si esas fronteras cambian. Si una supuesta región «simple» requiere dos intervalos interiores desconectados, no puede describirse con un único par de límites sin incluir puntos ajenos.

### Ejemplo: área entre una recta y una parábola

Para y=x² e y=x+2, las intersecciones son x=−1 y x=2. La recta está arriba en ese intervalo, comprobable en x=0. Entonces


$$
A=\int_{-1}^{2}\int_{x^2}^{x+2}1\,dy\,dx
=\int_{-1}^{2}(x+2-x^2)dx=\frac92.
$$


Si se invierten los límites internos se obtiene un número negativo, incompatible con un área. El valor absoluto al final puede ocultar un error de región; es preferible justificar arriba y abajo desde el principio.

### Cambiar el orden reconstruyendo la misma región

Consideremos $0\le x\le1$, $x^2\le y\le x$. Para fijar y, las desigualdades equivalen a $y\le x\le\sqrt y$, y y recorre [0,1]. Por tanto


$$
\int_0^1\int_{x^2}^{x}f(x,y)\,dy\,dx
=\int_0^1\int_y^{\sqrt y}f(x,y)\,dx\,dy.
$$


No se «invierten números»: se resuelve la geometría. Si f=1, ambas dan 1/6. Esa igualdad sirve como comprobación de límites para una función general.

![La misma región entre parábola y recta, cortada vertical y horizontalmente](/planos-de-estudio/img/am2/region-integracion.svg)

**Caso que exige partir.** Sea $0\le x\le1$, $0\le y\le e^x$. Su proyección sobre y es [0,e]. Si 0≤y≤1, todo x∈[0,1] sirve; si 1≤y≤e, se requiere x≥ln y. Así


$$
\int_0^1\int_0^{e^x}f\,dy\,dx
=\int_0^1\int_0^1 f\,dx\,dy
+\int_1^e\int_{\ln y}^{1}f\,dx\,dy.
$$


El punto de cambio se deduce de la intersección del corte horizontal con las fronteras, no de una regla algebraica universal.

### Cambiar el orden para hacer posible la primitiva

La integral $\int_0^1\int_y^1e^{x^2}\,dx\,dy$ parece requerir una primitiva no elemental. La región es 0≤y≤x≤1. Al invertir:


$$
\int_0^1\int_0^xe^{x^2}\,dy\,dx
=\int_0^1xe^{x^2}dx=\frac{e-1}{2}.
$$


La dificultad no estaba en la existencia de la integral, sino en el orden elegido. La guía 5 trabaja explícitamente situaciones de este tipo.

### Volumen, valor medio, masa y centro de masa

Entre superficies $z_{\rm inf}(x,y)$ y $z_{\rm sup}(x,y)$, con superior≥inferior en D,


$$
V=\iint_D(z_{\rm sup}-z_{\rm inf})dA.
$$


El promedio de f sobre D de área positiva es $f_{\rm med}=A(D)^{-1}\iint_Df\,dA$. Si una lámina tiene densidad superficial no negativa σ, su masa y centro de masa son


$$
m=\iint_D\sigma\,dA,\quad
\bar x=\frac1m\iint_Dx\sigma\,dA,\quad
\bar y=\frac1m\iint_Dy\sigma\,dA.
$$


La simetría del recinto no basta para ubicar el centro en su centro geométrico: también debe respetarla la densidad.

**Ejemplo de densidad variable.** En el cuadrado unitario, σ=1+x. La masa es $\int_0^1(1+x)dx=3/2$. El momento para $\bar x$ es $\int_0^1x(1+x)dx=5/6$, por lo que $\bar x=5/9$; para $\bar y$ resulta 1/2. Hay más masa a la derecha, consistente con $\bar x>1/2$.

Si p(x,y) es presión normal uniforme en dirección sobre una placa plana, la fuerza resultante escalar es $\iint_Dp\,dA$. Si la dirección de las fuerzas varía, no se suman solo magnitudes: aparece una integral vectorial adecuada.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 7

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Df\,dA=\int_a^b\int_{\alpha(x)}^{\beta(x)}f(x,y)dy\,dx$ | Recinto vertical simple; hipótesis de integrabilidad/Fubini, por ejemplo f continua en recinto compacto regular. |
| $V=\iint_D(z_{\rm sup}-z_{\rm inf})dA$ | Superior≥inferior en D; si se cruzan, dividir. |
| $m=\iint_D\sigma dA,\quad\bar x=\frac1m\iint_Dx\sigma dA,\quad\bar y=\frac1m\iint_Dy\sigma dA$ | Densidad superficial σ≥0 y masa positiva. |
| $f_{\rm med}=\frac1{A(D)}\iint_Df\,dA$ | Área finita y positiva; promedio uniforme sobre área. |


<!-- fin formulario am2 -->


## Capítulo 8. Cambio de variables y coordenadas polares

### Por qué aparece un jacobiano

Un cambio $T(u,v)=(x(u,v),y(u,v))$ transforma pequeñas celdas en paralelogramos aproximados generados por $T_u\,du$ y $T_v\,dv$. Su área es el valor absoluto del determinante de esas columnas por du dv. Bajo las hipótesis usuales de regularidad e inyectividad en el interior, salvo conjuntos de área nula:


$$
\iint_Df(x,y)dA
=\iint_E f(T(u,v))\left|\det\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv.
$$


Hay que transformar **tres cosas**: integrando, región y elemento de área. El valor absoluto evita áreas negativas si el cambio invierte orientación. Para integrales de flujo la orientación se trata de otra forma; no hay que transportar mecánicamente este valor absoluto a todos los contextos.

### Cambio lineal explicado

Para un paralelogramo acotado por y−x=0, y−x=1, y+x=2 e y+x=5, elegimos u=y−x y v=y+x. Entonces 0≤u≤1 y 2≤v≤5. Despejamos


$$
x=\frac{v-u}{2},\qquad y=\frac{u+v}{2},\qquad
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\frac12.
$$


Por tanto


$$
\iint_D(2x+y)dA
=\int_0^1\int_2^5\frac{3v-u}{2}\frac12\,dv\,du
=\frac{15}{2}.
$$


El determinante de $\partial(u,v)/\partial(x,y)$ tiene magnitud dos: usarlo directamente como factor multiplicaría por cuatro el resultado correcto. Si calculaste el jacobiano del cambio inverso, debés invertirlo donde no sea cero.

### Polares y límites angulares

Usamos x=r cosθ, y=r sinθ, r≥0. El determinante es r:


$$
dA=r\,dr\,d\theta.
$$


Geométricamente un pequeño sector tiene área aproximada radio por ancho angular por espesor radial. El centro r=0 es una degeneración de la parametrización en un conjunto de área nula y se maneja separándolo de las hipótesis interiores habituales.

Para el disco de radio R y una función radial, $0\le r\le R$, $0\le\theta\le2\pi$. Así


$$
\iint_{x^2+y^2\le R^2}(x^2+y^2)dA
=\int_0^{2\pi}\int_0^Rr^3drd\theta=\frac{\pi R^4}{2}.
$$


En una corona a≤r≤b y un sector α≤θ≤β, cambian ambos rangos. Si aparece arctan(y/x), no se identifica globalmente con θ sin revisar la rama y el cuadrante: la tangente no distingue ángulos separados por π.

### Círculos desplazados y restricciones que dependen del ángulo

El disco $x^2+y^2\le2x$ equivale a $(x-1)^2+y^2\le1$. En polares centradas en el origen:


$$
0\le r\le2\cos\theta,\qquad-\pi/2\le\theta\le\pi/2.
$$


El rango angular asegura un límite radial no negativo y recorre el disco una vez. Usar 0≤θ≤2π con ese mismo límite crearía intervalos radiales invertidos. Alternativamente se traslada el centro: x=1+r cosθ, y=r sinθ, 0≤r≤1, 0≤θ≤2π, también con factor r.

**Intersección de restricciones.** Para la parte del disco unitario donde x+y≥1, escribimos r(cosθ+sinθ)≥1. La región existe para 0≤θ≤π/2 y


$$
\frac1{\cos\theta+\sin\theta}\le r\le1.
$$


Las fronteras se encuentran en θ=0 y θ=π/2. Es incorrecto poner r entre cero y la recta porque se integraría el lado opuesto.

### Cambio no lineal: dominios y ramas

En el primer cuadrante, las curvas xy=1, xy=4, x=1 y x=4 sugieren u=x, v=xy. La inversa es x=u, y=v/u, con $1\le u,v\le4$ y factor 1/u. Si


$$
f(x,y)=\frac{xy}{1+x^2y^2},
$$


entonces


$$
\iint_Df\,dA
=\int_1^4\int_1^4\frac{v}{1+v^2}\frac1u\,dv\,du
=\frac12\ln4\,\ln\frac{17}{2}.
$$


El primer cuadrante fija u>0 y evita ambigüedad de signo. Un cambio puede ser adecuado para una región y no inyectivo sobre otra: las hipótesis se verifican para el dominio elegido.

### Práctica de integrales dobles

**I1.** Integrá x+y sobre el triángulo x,y≥0, x+y≤1, en ambos órdenes.

**I2.** Invertí $\int_0^1\int_{x^2}^1f\,dy\,dx$ y calculá su valor para f=1.

**I3.** Hallá el volumen entre z=0 y z=4−x²−y² sobre el disco de radio 2.

**I4.** Calculá $\iint_D1\,dA$ para el paralelogramo del ejemplo lineal usando su jacobiano.

**I5.** Planteá el área del disco de radio 2 restringido por x≥1 en polares del origen.

**Soluciones.** I1: $\int_0^1\int_0^{1-x}(x+y)dy\,dx=1/3$, equivalente invirtiendo x e y. I2: $\int_0^1\int_0^{\sqrt y}f\,dx\,dy$, área 2/3. I3: $\int_0^{2\pi}\int_0^2(4-r^2)rdrd\theta=8\pi$. I4: rectángulo de área tres por factor 1/2, área 3/2. I5: $\int_{-\pi/3}^{\pi/3}\int_{1/\cos\theta}^{2}rdrd\theta$. En I5, verificá los ángulos resolviendo 2cosθ≥1.

Las guías 5 y 6 incluyen cambio de orden, recintos que requieren partición y cambios lineales y no lineales. La práctica útil exige dibujar o describir el recinto antes de integrar.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 8

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dA=\left\lvert\det\frac{\partial(x,y)}{\partial(u,v)}\right\rvert du\,dv$ | Cambio regular e inyectivo en interior, salvo excepciones de área nula; transformar recinto e integrando. |
| $x=r\cos\theta,\quad y=r\sin\theta,\quad dA=rdrd\theta$ | Polares con r≥0; rangos elegidos para cubrir región una vez. |
| $\det DT^{-1}=1/\det DT$ | Donde existe inversa diferenciable y determinante no nulo; no usar el jacobiano inverso como factor directo. |


<!-- fin formulario am2 -->


## Capítulo 9. Integrales triples y aplicaciones

### Volumen e iteración en tres variables

La integral triple se define mediante sumas $\sum f(P_i)\Delta V_i$. Si f=1 calcula volumen; si f es densidad volumétrica no negativa, calcula masa. Para una región entre superficies z=α(x,y) y z=β(x,y), proyectada en D:


$$
\iiint_E f\,dV=\iint_D\int_{\alpha(x,y)}^{\beta(x,y)}f(x,y,z)\,dz\,dA.
$$


El límite de una variable interior puede depender de las exteriores, pero el de una exterior no puede depender de una variable que todavía no se fijó. Revisar esta dependencia detecta límites imposibles.

**Tetraedro.** En el primer octante x+y+z≤1:


$$
V=\int_0^1\int_0^{1-x}\int_0^{1-x-y}1\,dz\,dy\,dx=\frac16.
$$


El primer límite recorre proyección del sólido, el segundo recorre el triángulo proyectado y el tercero la altura. Para cambiar el orden, se vuelve a describir el mismo sólido; no se permutan límites de manera literal.

### Los seis órdenes: un caso que permite ver la lógica

Para $0\le z\le y\le x\le1$, el orden dz dy dx ya es directo. Las otras cinco descripciones son


$$
\int_0^1\int_0^x\int_z^x f\,dy\,dz\,dx,\qquad
\int_0^1\int_y^1\int_0^y f\,dz\,dx\,dy,
$$



$$
\int_0^1\int_0^y\int_y^1 f\,dx\,dz\,dy,\qquad
\int_0^1\int_z^1\int_z^x f\,dy\,dx\,dz,
$$



$$
\int_0^1\int_z^1\int_y^1 f\,dx\,dy\,dz.
$$


En cada una los límites se leen de fuera hacia dentro conservando z≤y≤x. Una forma de comprobar es fijar números permitidos para las exteriores y verificar que la interior recorra exactamente el intervalo restante. Para f=1, todas producen 1/6.

### Cambio de variables general en tres dimensiones

Si una transformación regular e inyectiva $T(u,v,w)=(x,y,z)$ lleva un recinto B al sólido E, la fórmula correspondiente es


$$
\iiint_E f(x,y,z)dV
=\iiint_B f(T(u,v,w))\left|\det\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|du\,dv\,dw.
$$


El determinante mide el volumen del paralelepípedo generado por las tres columnas de la derivada; su valor absoluto transforma volumen sin orientación. Se requieren derivadas continuas y determinante no nulo en el interior, con las excepciones de medida nula habituales en las coordenadas del curso. Si T cubre una región varias veces, hay que dividir en partes inyectivas y controlar multiplicidad.

**Ejemplo afín.** Sea x=u+v, y=u−v, z=2w para 0≤u,v,w≤1. El determinante es −4 y el volumen del sólido imagen es 4. Para integrar x+z, sustituimos x+z=u+v+2w y obtenemos


$$
\iiint_E(x+z)dV=4\int_0^1\int_0^1\int_0^1(u+v+2w)du\,dv\,dw=8.
$$


El centro geométrico de la caja de parámetros se transforma en (1,0,1), donde x+z=2; como es una transformación afín y un integrando afín, valor medio dos por volumen cuatro comprueba el resultado. Las coordenadas cilíndricas y esféricas son ejemplos no lineales de esta misma regla.

### Cilíndricas

Las coordenadas $x=r\cos\theta$, $y=r\sin\theta$, z=z conservan la altura y transforman el plano horizontal. Su factor de volumen es r:


$$
dV=r\,dr\,d\theta\,dz,
$$


con el orden adaptado al problema. Son útiles con cilindros, conos y paraboloides alrededor del eje z.

**Entre paraboloides.** Si $r^2\le z\le4-r^2$, las superficies se cortan cuando r²=2. Por tanto


$$
V=\int_0^{2\pi}\int_0^{\sqrt2}\int_{r^2}^{4-r^2}r\,dz\,dr\,d\theta
=\int_0^{2\pi}\int_0^{\sqrt2}(4-2r^2)rdrd\theta=4\pi.
$$


El radio máximo se deduce de la intersección, no de imponer que la superficie superior sea simplemente positiva. Usar r≤2 incluiría lugares donde las superficies se invierten.

### Esféricas y su convención angular

Usamos


$$
x=\rho\sin\varphi\cos\theta,\quad
y=\rho\sin\varphi\sin\theta,\quad
z=\rho\cos\varphi,
$$


con ρ≥0, 0≤φ≤π y 0≤θ≤2π. El factor de volumen es $\rho^2\sin\varphi$. Se entiende por longitudes pequeñas: radial dρ, meridiana ρdφ y paralela ρsinφ dθ.

En una esfera ρ=R. El cono $z=\sqrt{x^2+y^2}$ da cosφ=sinφ, es decir φ=π/4 en el semiespacio superior. El interior **por encima** del cono tiene 0≤φ≤π/4. «Interior del cono» debe interpretarse según el sólido descrito, no suponerse sin mirar su eje y sus ramas.

**Ejemplo.** En la corona esférica 1≤ρ≤2 por encima de ese cono,


$$
\iiint_E(x^2+y^2+z^2)dV
=\int_0^{2\pi}\int_0^{\pi/4}\int_1^2\rho^4\sin\varphi\,d\rho\,d\varphi\,d\theta
=\frac{62\pi}{5}\left(1-\frac1{\sqrt2}\right).
$$


Se transformó f en ρ² y se multiplicó por otro ρ² del jacobiano. Confundir ambos factores es una fuente común de potencias incorrectas.

### Masa, centro de masa y momentos

Con densidad δ(x,y,z) y masa positiva,


$$
m=\iiint_E\delta dV,\qquad
(\bar x,\bar y,\bar z)=\frac1m\iiint_E(x,y,z)\delta dV.
$$


Los momentos de inercia, cuando el modelo los requiere, integran distancia al eje al cuadrado por densidad: $I_z=\iiint_E(x^2+y^2)\delta dV$. La distancia al eje z no es z; es $\sqrt{x^2+y^2}$.

**Centro de masa de un sólido de revolución.** Para densidad constante entre z=r² y z=4, r≤2, la simetría da $\bar x=\bar y=0$. El volumen es $8\pi$. El momento de altura es


$$
\int_0^{2\pi}\int_0^2\int_{r^2}^{4}zr\,dz\,dr\,d\theta
=\frac{64\pi}{3},
$$


así que $\bar z=8/3$. No es dos: la distribución de secciones a distintas alturas no es uniforme. La densidad constante se cancela en el cociente, pero no convierte un sólido cualquiera en simétrico verticalmente.

### Elección de coordenadas y comprobaciones

Usá cartesianas si las fronteras son planos y funciones simples en x,y,z; cilíndricas si la simetría circular horizontal simplifica; esféricas si esferas y conos se vuelven límites constantes. Un cambio puede simplificar el recinto y complicar el integrando, o al revés. Se comparan ambos costos antes de decidir.

Tras calcular volumen o masa con densidad positiva, el resultado debe ser positivo. Un centro de masa pertenece a la envolvente convexa del soporte; que caiga fuera de una caja que contiene el sólido indica un error. La simetría puede anular integrales de funciones impares, pero solo si región y densidad respetan la simetría necesaria.

### Práctica de integrales triples

**T1.** Calculá volumen y centro de masa del tetraedro x,y,z≥0, x+y+z≤1 con densidad constante.

**T2.** Calculá $\iiint_{x^2+y^2+z^2\le R^2}(x^2+y^2+z^2)dV$.

**T3.** Planteá en cilíndricas el volumen dentro de $x^2+y^2\le2x$ entre z=0 y z=x²+y².

**T4.** Explicá por qué r dr dθ dz no puede reemplazarse por dr dθ dz sin cambiar el valor.

**Soluciones.** T1: volumen 1/6 y centro (1/4,1/4,1/4), obteniendo cada momento 1/24. T2: $4\pi R^5/5$. T3: $\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta}\int_0^{r^2}r\,dz\,dr\,d\theta$, volumen $3\pi/2$. T4: el jacobiano mide la deformación de volumen; celdas del mismo ancho angular tienen mayor extensión cuanto mayor es r.

La guía 7 pide cambiar a los seis órdenes, representar sólidos y usar densidades. Comprobar solo primitivas no cubre la habilidad de describir regiones tridimensionales.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 9

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dV=rdrd\theta dz$ | Cilíndricas x=rcosθ, y=rsinθ; adaptar orden y límites al sólido. |
| $dV=\rho^2\sin\varphi\,d\rho d\varphi d\theta$ | Esféricas: x=ρsinφcosθ, y=ρsinφsinθ, z=ρcosφ; φ polar desde +z. |
| $m=\iiint_E\delta dV,\quad\mathbf R=\frac1m\iiint_E\mathbf r\delta dV$ | Densidad volumétrica δ≥0; masa positiva para centro de masa. |
| $I_z=\iiint_E(x^2+y^2)\delta dV$ | Distancia al eje z al cuadrado; no z². |
| $dV=\lvert\det DT\rvert du\,dv\,dw$ | Cambio 3D regular e inyectivo bajo hipótesis del teorema. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 4 · Integrales múltiples

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Integral doble

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Df\,dA=\int_a^b\int_{\alpha(x)}^{\beta(x)}f(x,y)dy\,dx$ | Recinto vertical simple; hipótesis de integrabilidad/Fubini, por ejemplo f continua en recinto compacto regular. |
| $V=\iint_D(z_{\rm sup}-z_{\rm inf})dA$ | Superior≥inferior en D; si se cruzan, dividir. |
| $m=\iint_D\sigma dA,\quad\bar x=\frac1m\iint_Dx\sigma dA,\quad\bar y=\frac1m\iint_Dy\sigma dA$ | Densidad superficial σ≥0 y masa positiva. |
| $f_{\rm med}=\frac1{A(D)}\iint_Df\,dA$ | Área finita y positiva; promedio uniforme sobre área. |

### Cambios de variables

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dA=\left\lvert\det\frac{\partial(x,y)}{\partial(u,v)}\right\rvert du\,dv$ | Cambio regular e inyectivo en interior, salvo excepciones de área nula; transformar recinto e integrando. |
| $x=r\cos\theta,\quad y=r\sin\theta,\quad dA=rdrd\theta$ | Polares con r≥0; rangos elegidos para cubrir región una vez. |
| $\det DT^{-1}=1/\det DT$ | Donde existe inversa diferenciable y determinante no nulo; no usar el jacobiano inverso como factor directo. |

### Integrales triples

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dV=rdrd\theta dz$ | Cilíndricas x=rcosθ, y=rsinθ; adaptar orden y límites al sólido. |
| $dV=\rho^2\sin\varphi\,d\rho d\varphi d\theta$ | Esféricas: x=ρsinφcosθ, y=ρsinφsinθ, z=ρcosφ; φ polar desde +z. |
| $m=\iiint_E\delta dV,\quad\mathbf R=\frac1m\iiint_E\mathbf r\delta dV$ | Densidad volumétrica δ≥0; masa positiva para centro de masa. |
| $I_z=\iiint_E(x^2+y^2)\delta dV$ | Distancia al eje z al cuadrado; no z². |
| $dV=\lvert\det DT\rvert du\,dv\,dw$ | Cambio 3D regular e inyectivo bajo hipótesis del teorema. |


<!-- fin formulario am2 -->


## Capítulo 10. Campos vectoriales e integrales de línea

### Campo escalar y campo vectorial

Un campo escalar asigna un número; uno vectorial asigna un vector a cada posición. $\mathbf F(x,y)=(-y,x)$ representa un patrón tangencial alrededor del origen. $\mathbf G=(x,y)$ es radial hacia afuera. El dibujo se interpreta evaluando en puntos: sobre el eje x positivo, F apunta hacia arriba y G a la derecha.

La longitud de las flechas en un gráfico puede estar normalizada por el programa. No hay que deducir magnitudes exactas de una visualización sin conocer su escala. Además, un campo puede no estar definido en ciertos puntos: esas exclusiones afectan la posibilidad de aplicar teoremas globales.

### Dos integrales sobre la misma curva

La integral escalar pondera longitud:


$$
\int_C f\,ds=\int_a^b f(\mathbf r(t))\|\mathbf r'(t)\|dt.
$$


La integral vectorial pondera desplazamiento orientado:


$$
\int_C\mathbf F\cdot d\mathbf r
=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)dt.
$$


La primera sirve, por ejemplo, para masa de un alambre con densidad lineal f≥0. La segunda sirve para trabajo de una fuerza y circulación. Una contiene norma de la derivada; la otra producto escalar. Reemplazarlas una por otra cambia el objeto calculado.

### Ejemplo escalar y control de orientación

En el segmento $\mathbf r(t)=(4t,3t)$, 0≤t≤1, se tiene rapidez cinco. Para f=xy:


$$
\int_Cxy\,ds=\int_0^1(4t)(3t)5dt=20.
$$


Si se recorre de vuelta, la norma de la derivada sigue siendo positiva y el resultado es el mismo. Si se recorre ida y vuelta, se cuentan dos recorridos y resulta cuarenta. Decir «independiente de orientación» no significa «independiente de cuántas veces se recorre».

Para una densidad constante uno, la integral escalar devuelve longitud. Si f cambia de signo, la integral puede anularse aunque la curva no sea vacía; ya no se interpreta automáticamente como masa física.

### Ejemplo vectorial: circulación en una circunferencia

Con $\mathbf F=(-y,x)$ y $\mathbf r(t)=(R\cos t,R\sin t)$, 0≤t≤2π,


$$
\mathbf F(\mathbf r(t))=(-R\sin t,R\cos t)=\mathbf r'(t),
$$


de modo que $\mathbf F\cdot\mathbf r'=R^2$ e integral $2\pi R^2$. En sentido horario resulta $-2\pi R^2$. Una trayectoria cerrada no obliga a que el trabajo sea cero: eso dependerá del campo.

### El procedimiento completo en una curva abierta

Calculemos $\int_C2x\,dx+xy\,dy$ sobre el segmento de A=(1,−2) a B=(−3,1). Parametrizamos $(x,y)=(1-4t,-2+3t)$, 0≤t≤1; así dx=−4dt, dy=3dt. El integrando se vuelve


$$
2(1-4t)(-4)+(1-4t)(-2+3t)3
=-14+65t-36t^2.
$$


Integrando resulta $-14+65/2-12=13/2$. El signo positivo no se deduce de que x disminuya: la segunda contribución puede compensar la primera. Se suman aportes con orientación, no longitudes aisladas.

Para una curva por tramos, se parametriza cada tramo con sus extremos correctos y se suman integrales. Usar el mismo intervalo [0,1] en cada uno es válido, siempre que las parametrizaciones representen el recorrido pedido.

### Invariancia bajo reparametrización regular

Si $\mathbf q(u)=\mathbf r(\phi(u))$ con φ creciente, en la integral vectorial aparece el factor φ′ y el cambio de variable recupera el resultado original. Si φ es decreciente, se invierte la orientación y aparece un signo menos. En la escalar aparece |φ′| y se conserva el valor para un recorrido único en sentido opuesto.

Esta explicación muestra por qué cambiar rapidez no cambia el trabajo a lo largo del mismo recorrido, pero invertir el sentido sí puede cambiar su signo. No se necesita que la parametrización tenga rapidez constante.

### Área de una cortina vertical

Si sobre una curva plana C se levanta una altura no negativa h(x,y), el área lateral de la cortina es $\int_Ch\,ds$. Es una integral de longitud ponderada, no una integral doble sobre el interior de C. Para h=4−x y la circunferencia unitaria, h≥3 y


$$
A=\int_0^{2\pi}(4-\cos t)dt=8\pi.
$$


Si la altura cambia de signo y se pide área geométrica, debe precisarse la superficie y usar la magnitud adecuada; una acumulación con signo no representa área sin más.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 10

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\int_Cf\,ds=\int_a^bf(r(t))\lVert r^{\prime}(t)\rVert dt$ | Integral escalar; no cambia al invertir sentido de un recorrido único. |
| $\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(r(t))\cdot r^{\prime}(t)dt$ | Trabajo/circulación; cambia de signo al invertir orientación. |
| $L=\int_C1\,ds,\quad A_{\rm cortina}=\int_Ch\,ds$ | h≥0 para área geométrica de una cortina vertical; controlar repeticiones. |


<!-- fin formulario am2 -->


## Capítulo 11. Potenciales, independencia del camino y ecuaciones exactas

### Un potencial transforma una integral en una diferencia

Un campo es conservativo si existe una función φ con $\mathbf F=\nabla\varphi$ en el dominio considerado. Por cadena,


$$
\frac d{dt}\varphi(\mathbf r(t))=\nabla\varphi(\mathbf r(t))\cdot\mathbf r'(t).
$$


Integrando,


$$
\int_C\mathbf F\cdot d\mathbf r=\varphi(B)-\varphi(A).
$$


Esta es la razón del teorema fundamental de integrales de línea. El resultado depende de extremos y todo recorrido cerrado tiene integral cero. En dominios abiertos y conexos por caminos, la independencia del camino permite también construir un potencial integrando desde un punto fijo: esas propiedades son equivalentes bajo las condiciones habituales.

### Cómo encontrar un potencial sin perder funciones de las otras variables

Para $\mathbf F=(2xy,x^2+3y^2)$ integramos la primera componente respecto de x:


$$
\varphi=x^2y+g(y).
$$


Derivamos respecto de y: $\varphi_y=x^2+g'(y)$. Al comparar con Q, g′=3y² y g=y³+C. Por tanto φ=x²y+y³+C. Una «constante» al integrar parcialmente puede depender de las otras variables.

Desde A=(−1,1) hasta B=(2,4), la integral es φ(B)−φ(A)=80−2=78. Si el campo fuera solo $(2xy,x^2)$, el potencial sería x²y y la diferencia 16−1=15. Comprobar las componentes evita utilizar el potencial de un campo parecido pero distinto.

En tres variables, para $(2xyz,x^2z,x^2y)$, integrar la primera da x²yz+g(y,z). Comparar las otras dos parciales obliga g_y=g_z=0 en un dominio conexo, y queda una constante. Siempre se verifica al final que **todo** el gradiente coincide.

### La prueba de derivadas cruzadas tiene hipótesis globales

Si φ es $C^2$, Schwarz implica $P_y=Q_x$ en el plano, o rotor nulo en el espacio. Es una condición necesaria. Es suficiente, por ejemplo, para un campo $C^1$ en un dominio abierto simplemente conexo. En un dominio convexo o estrellado también se tienen condiciones suficientes particularmente cómodas.

No basta calcular derivadas y omitir el dominio. Consideremos


$$
\mathbf F=\left(-\frac y{x^2+y^2},\frac x{x^2+y^2}\right),
\quad D=\mathbb R^2\setminus\{0\}.
$$


Las derivadas cruzadas coinciden fuera del origen. Sin embargo, sobre la circunferencia unitaria antihoraria el producto con $\mathbf r'$ vale uno y la circulación es 2π. No hay potencial global en todo D. El agujero importa: el ángulo puede servir como potencial local en una región sin vueltas alrededor del origen, pero no como función real univaluada global sobre el plano perforado.

![Campo tangencial y circuito alrededor de un punto excluido](/planos-de-estudio/img/am2/campo-perforado.svg)

### Líneas de campo y equipotenciales

Las líneas de campo tienen tangente paralela a F. En el plano pueden describirse mediante $dy/dx=Q/P$ donde P≠0, o mediante el sistema $\mathbf r'=\mathbf F(\mathbf r)$. Las equipotenciales son niveles de φ. Si F=∇φ≠0, ambas familias se cortan ortogonalmente porque el gradiente es normal al nivel.

Para φ=x²+y², los niveles son circunferencias y las líneas del gradiente (2x,2y) son radiales. Un punto donde ∇φ=0 no define por sí solo una dirección de campo; no se fuerza una ecuación dividiendo por cero.

### Ecuaciones diferenciales exactas

Una ecuación $M(x,y)dx+N(x,y)dy=0$ es exacta cuando existe φ con φ_x=M y φ_y=N. Entonces sus curvas solución se describen por φ(x,y)=C, en partes regulares. Si se expresa y como función de x, la cadena da M+Ny′=0 donde tiene sentido.

**Ejemplo.** Para $(2xy+1)dx+(x^2+2y)dy=0$, M_y=2x=N_x. En todo el plano el campo es suave y el dominio no tiene agujeros. Integramos M: φ=x²y+x+g(y); comparar N da g′=2y, luego


$$
x^2y+x+y^2=C.
$$


Para una condición y(0)=1, C=1. Si se necesita una función y(x), se comprueba φ_y=x²+2y≠0 en el punto inicial para aplicar función implícita. Una igualdad implícita puede contener varias ramas y puntos singulares; no se declara automáticamente una solución global única.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 11

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf F=\nabla\phi\Rightarrow\int_A^B\mathbf F\cdot d\mathbf r=\phi(B)-\phi(A)$ | Potencial definido en dominio que contiene el recorrido; curva regular por tramos. |
| $\nabla\times\mathbf F=0$ | Necesaria para campo gradiente suave; suficiente globalmente con hipótesis como dominio abierto simplemente conexo y F de clase C1. |
| $\phi_x=M,\quad\phi_y=N\Rightarrow Mdx+Ndy=d\phi$ | Ecuación exacta: soluciones en niveles φ=C, con ramas y regularidad a revisar. |
| $M_y=N_x$ | Prueba local de cerradura; para exactitud global revisar dominio y regularidad. |


<!-- fin formulario am2 -->


## Capítulo 12. Teorema de Green y regiones con agujeros

### Enunciado y orientación

Sea D una región plana acotada con frontera simple, cerrada y suave por tramos, recorrida dejando D a la izquierda. Si P y Q son $C^1$ en un abierto que contiene D y su frontera,


$$
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D(Q_x-P_y)dA.
$$


La orientación positiva exterior es antihoraria. El teorema transforma circulación en acumulación de una diferencia de derivadas. Si la curva está orientada al revés, se cambia el signo. Si no está cerrada, hay que completarla y restar el tramo agregado, o calcular directamente.

La idea de la demostración consiste en comprobar la fórmula para regiones simples usando el teorema fundamental del cálculo y sumar piezas. Las contribuciones de bordes interiores se cancelan por orientaciones opuestas. Esta cancelación anticipa los teoremas de Stokes y Gauss.

### Ejemplo por dos métodos

Para F=(−y,x) y el círculo de radio R, $Q_x-P_y=1-(-1)=2$. Green da $2A(D)=2\pi R^2$, coincidiendo con el cálculo directo anterior. La identidad vale porque F es suave en todo el disco, no únicamente sobre el borde.

### Un problema donde Green evita mucha parametrización

Para F=(y²,xy) sobre la frontera positiva de D: 0≤x≤9, 0≤y≤√x, tenemos $Q_x-P_y=y-2y=-y$. Entonces


$$
\oint_{\partial D}\mathbf F\cdot d\mathbf r
=-\int_0^9\int_0^{\sqrt x}y\,dy\,dx
=-\int_0^9\frac x2dx=-\frac{81}{4}.
$$


El signo negativo no viola nada: circulación no es área. Para verificar directamente habría que recorrer la parábola, el segmento vertical y el eje con orientación consistente.

### Área mediante una integral de línea

Elegir P=−y/2 y Q=x/2 da $Q_x-P_y=1$, por lo que


$$
A(D)=\frac12\oint_{\partial D}(x\,dy-y\,dx).
$$


También se puede usar $\oint x\,dy$ o $-\oint y\,dx$ con orientación positiva. Para una elipse x=a cos t, y=b sin t, el integrando x y′−y x′ es ab. Así A=$\tfrac12\int_0^{2\pi}abdt=\pi ab$.

Si una curva se autointerseca, aplicar la fórmula sin analizar su descomposición puede producir área orientada con cancelaciones, no el área geométrica de la unión. La guía 9 incluye una curva de este tipo; se debe estudiar cada lazo y su orientación.

### Dominios múltiplemente conexos

Para una región con agujeros, la frontera positiva se recorre antihoraria en el borde exterior y horaria en cada borde interior. En ambos casos la región queda a la izquierda. La integral sobre la frontera es la suma de todas las componentes con esos sentidos.

En una corona a≤r≤b y el campo angular F del capítulo anterior, el rotor plano es cero **en la corona**. La circulación exterior es 2π y la interior con orientación positiva de la región es −2π: suman cero, consistente con Green.

Lo incorrecto sería aplicar Green al disco completo para concluir que la circulación exterior es cero, porque el campo no está definido en el origen. El mismo campo ilustra un teorema bien aplicado a una corona y mal aplicado a un disco.

### Práctica de línea, potenciales y Green

**G1.** Para C: $(3t,4t)$, 0≤t≤1, calculá $\int_Cx\,ds$ y repetí con orientación inversa.

**G2.** Hallá un potencial de $(y+2x,x+3y^2)$ y el trabajo de (1,2) a (2,1).

**G3.** Calculá la circulación de (−y,x) en el borde horario del cuadrado [0,2]².

**G4.** ¿Puede usarse Green directamente para el campo angular en un círculo que rodea el origen? ¿Y en uno que no lo encierra ni lo toca?

**G5.** Resolvé $(2x+y)dx+(x+2y)dy=0$ con y(0)=1.

**Soluciones.** G1: $\int_0^13t\cdot5dt=15/2$ en ambos sentidos. G2: φ=xy+x²+y³; valores 11 y 7, trabajo −4. G3: orientación antihoraria daría 2·4=8, por lo que la horaria da −8. G4: no sobre el disco que contiene la singularidad; sí para un disco cuya clausura quede en el dominio suave del campo. G5: φ=x²+xy+y² y nivel C=1. En el punto inicial φ_y=2, así que existe una rama local y(x).

La guía 8 trabaja campos, potenciales e integrales; la guía 9 agrega Green. La selección de método siempre comienza por verificar dominio y orientación.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 12

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial D}Pdx+Qdy=\iint_D(Q_x-P_y)dA$ | P,Q de clase C1 en abierto que contiene D; borde positivo regular por tramos. |
| $A(D)=\tfrac12\oint_{\partial D}(xdy-ydx)$ | Borde positivo; en curvas con lazos puede dar área orientada con cancelaciones. |
| $\partial D=C_{\rm exterior}+\sum C_{\rm agujero}$ | Exterior antihorario e interiores horarios, dejando D a la izquierda; sumar todas las componentes. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 5 · Integrales de línea y Green

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Integrales de línea

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\int_Cf\,ds=\int_a^bf(r(t))\lVert r^{\prime}(t)\rVert dt$ | Integral escalar; no cambia al invertir sentido de un recorrido único. |
| $\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(r(t))\cdot r^{\prime}(t)dt$ | Trabajo/circulación; cambia de signo al invertir orientación. |
| $L=\int_C1\,ds,\quad A_{\rm cortina}=\int_Ch\,ds$ | h≥0 para área geométrica de una cortina vertical; controlar repeticiones. |

### Potenciales y exactas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf F=\nabla\phi\Rightarrow\int_A^B\mathbf F\cdot d\mathbf r=\phi(B)-\phi(A)$ | Potencial definido en dominio que contiene el recorrido; curva regular por tramos. |
| $\nabla\times\mathbf F=0$ | Necesaria para campo gradiente suave; suficiente globalmente con hipótesis como dominio abierto simplemente conexo y F de clase C1. |
| $\phi_x=M,\quad\phi_y=N\Rightarrow Mdx+Ndy=d\phi$ | Ecuación exacta: soluciones en niveles φ=C, con ramas y regularidad a revisar. |
| $M_y=N_x$ | Prueba local de cerradura; para exactitud global revisar dominio y regularidad. |

### Green

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial D}Pdx+Qdy=\iint_D(Q_x-P_y)dA$ | P,Q de clase C1 en abierto que contiene D; borde positivo regular por tramos. |
| $A(D)=\tfrac12\oint_{\partial D}(xdy-ydx)$ | Borde positivo; en curvas con lazos puede dar área orientada con cancelaciones. |
| $\partial D=C_{\rm exterior}+\sum C_{\rm agujero}$ | Exterior antihorario e interiores horarios, dejando D a la izquierda; sumar todas las componentes. |


<!-- fin formulario am2 -->


## Capítulo 13. Superficies parametrizadas, área y orientación

### Una parametrización necesita dos parámetros

Una superficie se describe localmente mediante $\mathbf r(u,v)=(x(u,v),y(u,v),z(u,v))$ para $(u,v)\in D$. Al variar u con v fijo y viceversa aparecen dos familias de curvas sobre ella. Sus tangentes son $\mathbf r_u$ y $\mathbf r_v$. En puntos regulares son independientes y su producto vectorial no es cero.

Para el plano z=x+y, una parametrización es $(u,v,u+v)$. Para un triángulo limitado por el plano 3x+y+2z=6 en el primer octante, podemos usar $(u,v,3-3u/2-v/2)$ con u≥0, v≥0 y 3u+v≤6. La fórmula sola describe el plano entero; el dominio determina la porción pedida.

### Plantillas que se derivan de la geometría

Un cilindro de radio R alrededor del eje z usa $(R\cos u,R\sin u,v)$. Para un cilindro alrededor del eje x se permutan coordenadas: $(v,R\cos u,R\sin u)$. Si se escribe siempre la primera plantilla aunque el eje cambie, la superficie será otra.

Una esfera de radio R y centro $(a,b,c)$ puede parametrizarse como


$$
\mathbf r(\varphi,\theta)=
(a+R\sin\varphi\cos\theta,\ b+R\sin\varphi\sin\theta,\ c+R\cos\varphi).
$$


Para cubrir la esfera una vez, 0≤φ≤π y 0≤θ≤2π. En los polos se degenera la parametrización, y los extremos θ=0,2π representan la misma costura. Esas excepciones de área nula no duplican una porción con área positiva.

Para un hemisferio y≥b, usando esta convención, se requiere sinθ≥0, por lo que θ∈[0,π], manteniendo φ∈[0,π]. No se restringe φ a [0,π/2], que correspondería a z≥c.

### Elemento de área y su justificación

Una celda du dv se transforma aproximadamente en un paralelogramo con lados $\mathbf r_u du$ y $\mathbf r_vdv$. Su área es


$$
dS=\|\mathbf r_u\times\mathbf r_v\|du\,dv.
$$


Así,


$$
A(S)=\iint_D\|\mathbf r_u\times\mathbf r_v\|du\,dv.
$$


Si la parametrización cubre repetidamente una porción de área positiva, esta fórmula cuenta multiplicidad. Hay que revisar el dominio, no corregir el resultado dividiendo arbitrariamente.

Para una gráfica z=g(x,y), los vectores son (1,0,g_x) y (0,1,g_y), cuyo producto es (−g_x,−g_y,1). Entonces


$$
dS=\sqrt{1+g_x^2+g_y^2}\,dx\,dy.
$$


El factor es al menos uno porque el área inclinada no es menor que su proyección horizontal. $dA$ y $dS$ no son intercambiables salvo superficies horizontales con esa parametrización.

### Ejemplo: área de un plano triangular

Para z=4−2x−y en el primer octante, la proyección es x,y≥0, 2x+y≤4. Tiene área plana 4, y el factor de superficie es √(1+4+1)=√6. Por tanto el área es $4\sqrt6$. Otra comprobación usa los vértices A=(2,0,0), B=(0,4,0), C=(0,0,4) y la mitad de la norma de $(B-A)\times(C-A)$.

### Ejemplo: área de un paraboloide

En z=x²+y² sobre el disco r≤a, $g_x=2x$ y $g_y=2y$. Usando polares:


$$
A=\int_0^{2\pi}\int_0^a\sqrt{1+4r^2}\,rdrd\theta
=\frac\pi6\left[(1+4a^2)^{3/2}-1\right].
$$


Hay dos factores geométricos distintos: √(1+4r²) por inclinación y r por cambio polar del área proyectada. Omitir uno altera el significado del elemento de integración.

### Conos, ramas y superficies de revolución

El cono z²=x²+y² tiene dos ramas. Para la superior usamos $(r\cos\theta,r\sin\theta,r)$ con r≥0; para la inferior, $(r\cos\theta,r\sin\theta,-r)$. Escribir siempre z=r elimina la mitad inferior aunque la ecuación original permita ambas. Para una porción entre z=−3 y z=−1 se usa la rama inferior con 1≤r≤3 y 0≤θ≤2π.

En esa rama inferior, el producto de las derivadas respecto de r y θ es $(r\cos\theta,r\sin\theta,r)$, con componente z positiva. Es una orientación ascendente, pero no necesariamente la orientación exterior del sólido que el problema defina. El área usa su norma $r\sqrt2$ y no depende de ese signo. Entre r=1 y r=3, el área lateral es $\int_0^{2\pi}\int_1^3r\sqrt2drd\theta=8\pi\sqrt2$.

Para generar una superficie al girar la curva (x(t),r(t)), r(t)≥0, alrededor del eje x, se usa


$$
\mathbf r(t,\theta)=(x(t),r(t)\cos\theta,r(t)\sin\theta).
$$


El factor de área es $r(t)\sqrt{x'(t)^2+r'(t)^2}$. Por eso el área de revolución para una vuelta es $2\pi\int r(t)\sqrt{x'^2+r'^2}dt$. Se deriva con el producto vectorial, y requiere que la parametrización no repita porciones. Un cilindro corresponde a r constante; un cono a r proporcional a la distancia axial. Girar alrededor de otro eje exige cambiar la colocación de coordenadas, no solo renombrar el título del dibujo.

### Gráficas respecto de otros planos coordenados

No toda superficie se expresa cómodamente como z=g(x,y). Para x=g(y,z), la parametrización (g(y,z),y,z) tiene producto vectorial $(1,-g_y,-g_z)$ al derivar en orden y,z. Su norma es $\sqrt{1+g_y^2+g_z^2}$ y su componente x positiva fija una orientación. Para y=g(x,z), la parametrización (x,g(x,z),z), en orden x,z, produce $(g_x,-1,g_z)$: apunta hacia y negativo. Si se pide y positivo se toma el opuesto $(-g_x,1,-g_z)$.

Esto permite calcular integrales proyectando sobre yz o xz cuando una proyección sobre xy falla o divide excesivamente la región. Antes de elegir, preguntá si cada punto de la proyección corresponde a una única altura en la coordenada despejada; una esfera completa requiere dos gráficas si se despeja cualquiera de sus coordenadas.

### Orientación y normal unitaria

Una orientación elige de forma continua una de las dos normales unitarias locales. Si la superficie es orientable, puede hacerse coherentemente sobre toda ella; no toda superficie admite tal elección global. En las superficies usuales del curso se especifica «hacia arriba», «hacia afuera», «hacia el origen» o una dirección de eje.

Para una gráfica, $(−g_x,−g_y,1)$ tiene componente z positiva: orienta hacia arriba. Su opuesto orienta hacia abajo. En una esfera centrada en el origen, el radial es exterior y su opuesto interior. En una superficie cerrada, «exterior» se define respecto del volumen encerrado.

No hace falta normalizar cuando se usa directamente el producto vectorial como elemento de área orientada: su magnitud ya contiene el factor de superficie. Sí se normaliza si la fórmula empleada es $\mathbf F\cdot\mathbf n\,dS$ con n unitario.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 13

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dS=\lVert r_u\times r_v\rVert du\,dv$ | Parametrización regular y control de multiplicidad. |
| $dS=\sqrt{1+g_x^2+g_y^2}\,dxdy$ | Gráfica z=g(x,y); elemento real de superficie, no área proyectada. |
| $\mathbf n\,dS=\pm(r_u\times r_v)du\,dv$ | Signo según orientación; no multiplicar otra vez por la norma. |
| $A=2\pi\int r(t)\sqrt{x^{\prime}(t)^2+r^{\prime}(t)^2}dt$ | Revolución alrededor de x, r(t)≥0 y una cobertura de la superficie. |


<!-- fin formulario am2 -->


## Capítulo 14. Integrales escalares y flujo sobre superficies

### Integral escalar


$$
\iint_Sf\,dS
=\iint_Df(\mathbf r(u,v))\|\mathbf r_u\times\mathbf r_v\|du\,dv.
$$


Si f es densidad superficial, se obtiene masa. La orientación no cambia el valor porque aparece una norma. Para f=1 recuperamos área.

**Cilindro de cuarto de vuelta.** Para $\mathbf r(u,v)=(2\cos u,2\sin u,v)$, 0≤u≤π/2, 0≤v≤1, el producto vectorial tiene norma dos. Con f=x+yz:


$$
\iint_Sf\,dS
=\int_0^{\pi/2}\int_0^1(2\cos u+2v\sin u)2dvdu
=6.
$$


El dominio no incluye tapas; son otras porciones si se piden. Confundir superficie lateral con frontera cerrada será especialmente importante al aplicar Gauss.

### Flujo de un campo vectorial

El flujo mide la componente normal del campo atravesando una superficie orientada:


$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=\iint_D\mathbf F(\mathbf r(u,v))\cdot(\mathbf r_u\times\mathbf r_v)du\,dv,
$$


con el signo del producto ajustado a la orientación pedida. Componentes tangenciales no aportan flujo, aunque el campo sea grande. Si se invierte la orientación, cambia el signo; eso no sucede con la integral escalar de f.

**Gráfica hacia arriba.** Sobre z=g(x,y):


$$
\mathbf F\cdot\mathbf n\,dS
=\mathbf F(x,y,g(x,y))\cdot(-g_x,-g_y,1)dxdy.
$$


No se multiplica además por √(1+g_x²+g_y²): sería contar dos veces el mismo factor.

### Ejemplo: flujo sobre un paraboloide

Sea F=(0,0,z) sobre z=4−x²−y², r≤2, orientado hacia arriba. El elemento orientado es $(2x,2y,1)dxdy$. Por tanto


$$
\Phi=\iint_D(4-x^2-y^2)dA=8\pi.
$$


Para el campo vertical constante (0,0,1), en cambio, el flujo sería el área proyectada 4π. Ambas integrales atraviesan la misma superficie, pero el campo no es el mismo. El área real de la superficie es otro resultado distinto.

### Ejemplo con orientación en otro eje

Consideremos el hemisferio x²+y²+z²=R² con y≥0, orientado hacia y positivo. Es la normal exterior. Con el campo radial F=(x,y,z), en la esfera $F\cdot n=R$, así que el flujo es R por el área hemisférica: $2\pi R^3$. Si se orienta hacia el origen, el signo se invierte.

La condición «hacia y positivo» es compatible con la normal exterior en este hemisferio, salvo su borde donde esa componente puede anularse. No significa usar el vector constante (0,1,0) como normal en toda la esfera.

### Superficies por partes

En un sólido con paredes y tapas, el flujo total es la suma de los flujos de todas las piezas con normales compatibles. En el cilindro r≤R, 0≤z≤h, la tapa superior tiene normal +k y la inferior −k. La pared tiene normal radial horizontal. Asignar +k a ambas tapas cambia el flujo y contradice la orientación exterior.

### Práctica de superficies

**S1.** Parametrizá el cilindro y²+z²=4 con 0≤x≤3 y obtené su área lateral.

**S2.** Hallá el área de z=2x+y sobre [0,1]² y comparala con su área proyectada.

**S3.** Calculá el flujo de (0,0,1) a través de z=x²+y², r≤1, hacia abajo.

**S4.** ¿Qué cambia al invertir orientación en $\iint_S2\,dS$ y en el flujo de un campo?

**Soluciones.** S1: $(v,2\cos u,2\sin u)$, 0≤u≤2π, 0≤v≤3; área 12π. S2: √6, frente a proyección uno. S3: −π por usar el elemento orientado opuesto al ascendente. S4: la escalar no cambia; el flujo cambia de signo.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 14

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Sf\,dS=\iint_Df(r(u,v))\lVert r_u\times r_v\rVert du\,dv$ | Integral escalar; invertir orientación no cambia el resultado. |
| $\Phi=\iint_S\mathbf F\cdot\mathbf n\,dS$ | n unitaria; cambia de signo con orientación. |
| $\Phi_{\rm arriba}=\iint_D\mathbf F(x,y,g)\cdot(-g_x,-g_y,1)dxdy$ | Gráfica z=g(x,y) hacia arriba; no añadir √(1+gx²+gy²). |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 6 · Integrales de superficie

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Superficies

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dS=\lVert r_u\times r_v\rVert du\,dv$ | Parametrización regular y control de multiplicidad. |
| $dS=\sqrt{1+g_x^2+g_y^2}\,dxdy$ | Gráfica z=g(x,y); elemento real de superficie, no área proyectada. |
| $\mathbf n\,dS=\pm(r_u\times r_v)du\,dv$ | Signo según orientación; no multiplicar otra vez por la norma. |
| $A=2\pi\int r(t)\sqrt{x^{\prime}(t)^2+r^{\prime}(t)^2}dt$ | Revolución alrededor de x, r(t)≥0 y una cobertura de la superficie. |

### Integral superficial y flujo

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_Sf\,dS=\iint_Df(r(u,v))\lVert r_u\times r_v\rVert du\,dv$ | Integral escalar; invertir orientación no cambia el resultado. |
| $\Phi=\iint_S\mathbf F\cdot\mathbf n\,dS$ | n unitaria; cambia de signo con orientación. |
| $\Phi_{\rm arriba}=\iint_D\mathbf F(x,y,g)\cdot(-g_x,-g_y,1)dxdy$ | Gráfica z=g(x,y) hacia arriba; no añadir √(1+gx²+gy²). |


<!-- fin formulario am2 -->


## Capítulo 15. Divergencia, rotor, laplaciano e identidades

### Derivadas que producen objetos diferentes

Para $\mathbf F=(P,Q,R)$,


$$
\operatorname{div}\mathbf F=P_x+Q_y+R_z,
$$



$$
\nabla\times\mathbf F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y).
$$


La divergencia es escalar; el rotor es vectorial en tres dimensiones. Para un escalar f, el gradiente es vectorial y el laplaciano es


$$
\Delta f=\operatorname{div}(\nabla f)=f_{xx}+f_{yy}+f_{zz}.
$$


Aplicar un operador exige revisar su entrada y su salida. «Gradiente de un vector» o «divergencia de un escalar» requieren otra definición y no son las operaciones anteriores.

La divergencia describe expansión neta local de flujo. El rotor está relacionado con circulación local. Un dibujo con flechas que giran no reemplaza el cálculo, ni rotor cero implica por sí solo un potencial global sin estudiar el dominio.

### Ejemplo calculado componente a componente

Para F=(2y,x−2yz,z²+xy):


$$
\operatorname{div}F=0-2z+2z=0,
$$



$$
\nabla\times F=(x+2y,\,-y,\,-1).
$$


En el primer componente se resta Q_z=−2y, de modo que R_y−Q_z=x+2y. Escribir cada resta evita perder el signo del término central.

### Campo radial singular: una verificación importante

Sea $r=\sqrt{x^2+y^2+z^2}$ y $\mathbf F=(x,y,z)/r^3$, definido para r>0. Para cada componente,


$$
\frac\partial{\partial x}\left(\frac x{r^3}\right)
=\frac1{r^3}-\frac{3x^2}{r^5}.
$$


Sumando las tres,


$$
\operatorname{div}F=\frac3{r^3}-\frac{3(x^2+y^2+z^2)}{r^5}=0\quad(r>0).
$$


El rotor también es cero en su dominio. Pero el origen no está incluido: no se puede aplicar Gauss a una bola que lo contiene como si el campo fuera suave allí. Esta cuenta se verifica independientemente de respuestas impresas; el término de producto al derivar x/r³ es indispensable.

### Identidades y sus hipótesis

Para campos con derivadas suficientes continuas,


$$
\nabla\times(\nabla f)=0,\qquad
\operatorname{div}(\nabla\times F)=0.
$$


Se comprueban desarrollando y cancelando parciales mixtas mediante Schwarz. No significan que todo campo de rotor nulo sea un gradiente global en cualquier dominio, ni que todo campo de divergencia nula tenga una representación global determinada sin condiciones adicionales.

Otra identidad útil es $\operatorname{div}(fF)=\nabla f\cdot F+f\operatorname{div}F$, deducida aplicando producto a cada componente. Es útil para simplificar cálculos y entender por qué olvidar la derivación de un factor produce errores.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 15

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\operatorname{div}\mathbf F=P_x+Q_y+R_z$ | Divergencia escalar de F=(P,Q,R). |
| $\nabla\times\mathbf F=(R_y-Q_z,P_z-R_x,Q_x-P_y)$ | Rotor vectorial en tres dimensiones; conservar signos. |
| $\Delta f=f_{xx}+f_{yy}+f_{zz}$ | Laplaciano de campo escalar, igual a div(∇f). |
| $\nabla\times\nabla f=0,\quad\operatorname{div}(\nabla\times\mathbf F)=0$ | Derivadas mixtas continuas suficientes para conmutar; no son recíprocas globales sin hipótesis. |


<!-- fin formulario am2 -->


## Capítulo 16. Teorema de Gauss: flujo de una frontera cerrada

### Enunciado y conexión local-global

Si E es un sólido acotado con frontera orientable regular por tramos y F es $C^1$ en un abierto que contiene E y su frontera,


$$
\iint_{\partial E}F\cdot n\,dS
=\iiint_E\operatorname{div}F\,dV,
$$


con normal **exterior**. Relaciona flujo saliente total con acumulación de divergencia. Las paredes internas de pequeñas celdas se cancelan al sumar flujos, porque sus normales son opuestas. Esa es la idea geométrica detrás del teorema.

No se aplica directamente a una superficie abierta, ni basta que el campo esté definido sobre el borde. La regularidad debe cubrir el volumen requerido. Si la orientación pedida es interior, el resultado es el opuesto.

### Ejemplo cerrado y comprobación geométrica

Para F=(x,y,z) sobre la esfera de radio R, div F=3. Gauss da $3(4\pi R^3/3)=4\pi R^3$. Directamente, F·n=R y área 4πR², con el mismo resultado. La coincidencia relaciona una integral de volumen con otra de superficie.

### Superficie abierta: cerrar y restar

Se pide flujo de F=(x,y,z) sobre el paraboloide z=4−r², r≤2, hacia arriba. Cerramos con el disco z=0, r≤2. La superficie del paraboloide tiene normal exterior ascendente y el disco normal −k. La divergencia es tres y el volumen encerrado es 8π, de modo que el flujo total es 24π.

En el disco F·(−k)=−z=0. Por tanto el flujo del paraboloide es 24π. Se comprueba directamente: F·(2x,2y,1)=2r²+4−r²=4+r²; integrar da 24π. Omitir la tapa solo habría sido válido tras demostrar que su contribución es cero.

**Tapa no nula.** Para F=(0,0,z) en el cilindro de radio R y altura h, div F=1 y el flujo total es πR²h. La pared tiene flujo cero; la tapa superior aporta hπR² y la inferior cero. Si el cilindro va de z=a a z=b, ambas tapas pueden aportar: $b\pi R^2-a\pi R^2$.

### Singularidad excluida: esfera y corona esférica

Para F=X/r³, en una esfera r=R se tiene F·n=1/R² y el flujo exterior es 4π. No contradice div F=0 para r>0 porque F no es $C^1$ en la bola que contiene el origen.

En la corona a≤r≤b el campo sí es suave. La esfera exterior aporta 4π y la interior, orientada hacia el hueco para ser exterior del sólido, aporta −4π. El total cero coincide con la integral de divergencia. Identificar qué volumen se usa elimina la aparente paradoja.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 16

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS=\iiint_E\operatorname{div}\mathbf F\,dV$ | F de clase C1 en abierto que contiene el sólido; frontera cerrada regular por tramos y normal exterior. |
| $\Phi_{\rm abierta}=\Phi_{\rm cerrada}-\Phi_{\rm tapas}$ | Cerrar con orientación exterior compatible y restar todas las piezas agregadas. |
| $\operatorname{div}(\mathbf r/r^3)=0\quad(r>0)$ | Campo singular en origen; no aplicar Gauss a una bola que lo contiene como si fuera suave. |


<!-- fin formulario am2 -->


## Capítulo 17. Teorema de Stokes: circulación y flujo de rotor

### Enunciado y borde inducido

Para una superficie orientada S regular por tramos, con borde cerrado C, y F de clase $C^1$ en un abierto que contiene la superficie,


$$
\oint_CF\cdot d\mathbf r
=\iint_S(\nabla\times F)\cdot n\,dS.
$$


C debe tener la orientación inducida por n: al aplicar la mano derecha, el pulgar sigue la normal y los dedos el sentido del borde. Equivalentemente, para una superficie vista del lado al que apunta n, el borde exterior se ve antihorario. La expresión «antihorario» sin especificar desde dónde se mira puede ser ambigua en el espacio.

![Orientación compatible entre normal y borde](/planos-de-estudio/img/am2/orientacion.svg)

La demostración relaciona Stokes con Green en parámetros y suma parches; los bordes internos se cancelan. El teorema permite reemplazar una superficie por otra con **el mismo borde orientado**, siempre que el campo sea regular donde se necesita. No permite cambiar el borde ni atravesar una singularidad ignorándola.

### Ejemplo: hemisferio reemplazado por disco

Sea F=(−y,x,0), C la circunferencia x²+y²=4, z=0, antihoraria vista desde arriba. El rotor es (0,0,2). En lugar de usar un hemisferio superior con ese borde, elegimos el disco orientado hacia arriba:


$$
\oint_CF\cdot d\mathbf r=\iint_D2\,dA=8\pi.
$$


Si la superficie original fuera el hemisferio superior con normal exterior, el borde inducido coincide. Si se orienta hacia dentro, se invierte el sentido y el resultado es −8π.

### Ejemplo en plano oblicuo

Sea F=(−y,x,0) y C la intersección de x²+y²=1 con z=x+y, con orientación inducida por la normal de componente z positiva. Usamos la gráfica $\mathbf r(x,y)=(x,y,x+y)$ sobre el disco unitario. Su elemento orientado es (−1,−1,1)dxdy. Como rotor F=(0,0,2), el producto es dos y la circulación es 2π.

La longitud del borde oblicuo no es 2π y el área inclinada del disco es π√3; ninguna de esas observaciones reemplaza el producto con el rotor. En este caso el flujo del rotor depende del área proyectada por su dirección vertical.

### Verificar Stokes por ambos lados

Con $\mathbf r(t)=(\cos t,\sin t,\cos t+\sin t)$, F sobre la curva es (−sin t,cos t,0), y r′=(−sin t,cos t,−sin t+cos t). El producto es uno, y al integrar 0 a 2π recuperamos 2π. La verificación usa la componente z de la tangente, pero no aporta porque F_z=0.

### Gauss, Stokes y Green: una elección razonada

| Se pide | Método que puede simplificar | Qué debe comprobarse |
|---|---|---|
| Circulación plana cerrada | Green | Región, orientación y regularidad interior |
| Circulación espacial cerrada | Stokes | Superficie cuyo borde sea la curva y orientación compatible |
| Flujo de superficie cerrada | Gauss | Sólido, normal exterior y campo suave en su interior |
| Trabajo en curva abierta | Potencial o parametrización | Conservatividad global en dominio apropiado o recorrido exacto |
| Integral escalar sobre curva o superficie | Parametrización | Factor de longitud o área y multiplicidad |

El método directo siempre es una alternativa cuando puede parametrizarse y calcularse la integral. Un teorema no es obligatorio por el nombre del tema: su utilidad se evalúa después de verificar que aplica.

### Práctica de análisis vectorial

**V1.** Para F=(xz,zy,2z²), calculá divergencia y flujo exterior sobre el sólido 0≤z≤1−x²−y².

**V2.** Calculá la circulación de F=(−y,x,−2) sobre el círculo r=4, z=4, con orientación horaria vista desde arriba, usando un disco y Stokes.

**V3.** Explicá la diferencia entre div F=0 y flujo cero a través de cualquier superficie abierta.

**V4.** Calculá rotor del gradiente de f=x²yz y justificá la identidad usada.

**Soluciones.** V1: div F=z+z+4z=6z. En cilíndricas, $\int_0^{2\pi}\int_0^1\int_0^{1-r^2}6zr\,dz\,dr\,d\theta=\pi$. V2: rotor=(0,0,2), normal del disco −k y área 16π: resultado −32π. V3: divergencia cero controla el balance de una frontera cerrada bajo hipótesis; una pieza abierta puede tener flujo que se compensa en otras piezas. V4: es cero porque f es polinómica y las mixtas continuas se cancelan; puede comprobarse derivando su gradiente.

La guía 9 combina parametrización, área, integral escalar, flujo y verificación de Gauss y Stokes. Resolver únicamente problemas de divergencia o rotor no cubre la parte geométrica del bloque.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 17

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS$ | F de clase C1 en entorno de superficie orientada regular; borde con sentido inducido por mano derecha. |
| $\partial S_1=\partial S_2\Rightarrow\iint_{S_1}\operatorname{rot}F\cdot n\,dS=\iint_{S_2}\operatorname{rot}F\cdot n\,dS$ | Mismo borde orientado y ambas superficies cumplen hipótesis; una proyección igual no basta. |


<!-- fin formulario am2 -->



<!-- inicio formulario am2 -->
## Formulario de la Unidad 7 · Análisis vectorial

Las condiciones indicadas son parte de cada relación. La numeración de unidades en estos formularios corresponde a los siete ejes del programa consultado.

### Operadores vectoriales

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\operatorname{div}\mathbf F=P_x+Q_y+R_z$ | Divergencia escalar de F=(P,Q,R). |
| $\nabla\times\mathbf F=(R_y-Q_z,P_z-R_x,Q_x-P_y)$ | Rotor vectorial en tres dimensiones; conservar signos. |
| $\Delta f=f_{xx}+f_{yy}+f_{zz}$ | Laplaciano de campo escalar, igual a div(∇f). |
| $\nabla\times\nabla f=0,\quad\operatorname{div}(\nabla\times\mathbf F)=0$ | Derivadas mixtas continuas suficientes para conmutar; no son recíprocas globales sin hipótesis. |

### Gauss

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS=\iiint_E\operatorname{div}\mathbf F\,dV$ | F de clase C1 en abierto que contiene el sólido; frontera cerrada regular por tramos y normal exterior. |
| $\Phi_{\rm abierta}=\Phi_{\rm cerrada}-\Phi_{\rm tapas}$ | Cerrar con orientación exterior compatible y restar todas las piezas agregadas. |
| $\operatorname{div}(\mathbf r/r^3)=0\quad(r>0)$ | Campo singular en origen; no aplicar Gauss a una bola que lo contiene como si fuera suave. |

### Stokes

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS$ | F de clase C1 en entorno de superficie orientada regular; borde con sentido inducido por mano derecha. |
| $\partial S_1=\partial S_2\Rightarrow\iint_{S_1}\operatorname{rot}F\cdot n\,dS=\iint_{S_2}\operatorname{rot}F\cdot n\,dS$ | Mismo borde orientado y ambas superficies cumplen hipótesis; una proyección igual no basta. |


<!-- fin formulario am2 -->


## Capítulo 18. Taller integrador del primer bloque

Este taller reúne decisiones que suelen aparecer separadas en ejercicios cortos. Antes de consultar cada desarrollo, escribí qué hipótesis necesitás y qué resultado esperás obtener: un número, una función, una recta, un plano o una clasificación. Los problemas no tienen un tiempo de examen asignado: primero interesa construir una solución comprensible y después ganar fluidez.

### Problema 1. Movimiento sobre una curva espacial

Una partícula sigue $\mathbf r(t)=(2\cos t,2\sin t,3t)$ para $0\le t\le\pi$. Encontrá su imagen geométrica, la velocidad y aceleración, una parametrización por longitud de arco desde el punto inicial, la recta tangente en $t=\pi/2$ y la longitud recorrida. Explicá por qué la aceleración no es cero aunque la rapidez sea constante.

**Lectura geométrica.** Las dos primeras coordenadas satisfacen $x^2+y^2=4$. La tercera crece con el parámetro, por lo que no es una circunferencia en un plano horizontal. Es media vuelta de una hélice sobre un cilindro. Empieza en (2,0,0) y termina en (−2,0,3π). La ecuación del cilindro es una condición necesaria para pertenecer a la curva, pero describe infinitos puntos que la partícula no recorre.

**Derivadas.**


$$
\mathbf v=(-2\sin t,2\cos t,3),\qquad
\mathbf a=(-2\cos t,-2\sin t,0).
$$


La rapidez es $\sqrt{4\sin^2t+4\cos^2t+9}=\sqrt{13}$. Es constante y positiva: la curva es regular. La aceleración apunta horizontalmente hacia el eje del cilindro; cambia la dirección de la velocidad. En efecto, $\mathbf v\cdot\mathbf a=0$, de modo que la derivada de $\|\mathbf v\|^2$ es cero. Confundir rapidez con velocidad ocultaría este cambio de dirección.

**Longitud de arco.** Desde t=0,


$$
s(t)=\int_0^t\sqrt{13}\,du=\sqrt{13}t.
$$


La inversa es $t=s/\sqrt{13}$. La parametrización pedida es


$$
\boldsymbol\rho(s)=
\left(2\cos\frac{s}{\sqrt{13}},2\sin\frac{s}{\sqrt{13}},\frac{3s}{\sqrt{13}}\right),
\quad 0\le s\le\pi\sqrt{13}.
$$


Su derivada tiene norma uno: ahora el incremento del parámetro mide distancia recorrida. Esa propiedad se verifica derivando, no observando la forma de las coordenadas.

**Tangente.** En t=π/2, el punto es $(0,2,3\pi/2)$ y la velocidad es (−2,0,3). Por ello


$$
\ell(\lambda)=(0,2,3\pi/2)+\lambda(-2,0,3).
$$


El parámetro λ de la recta no es el tiempo de la partícula. La longitud total resulta $\pi\sqrt{13}$. Reemplazar t por −t invertiría el sentido de recorrido; no cambiaría la longitud de una porción equivalente, pero sí el signo de una integral de trabajo sobre ella.

### Problema 2. Límite, continuidad y derivabilidad no son la misma pregunta

Definimos


$$
f(x,y)=\begin{cases}
\dfrac{x^2y}{x^2+y^2},&(x,y)\ne(0,0),\\
0,&(x,y)=(0,0).
\end{cases}
$$


Estudiá continuidad, parciales, derivadas direccionales y diferenciabilidad en el origen. La intención es decidir cada propiedad usando su definición o un teorema aplicable, sin deducir una de otra indebidamente.

**Continuidad mediante una cota global.** Como $|x|\le r$ y $|y|\le r$, donde $r=\sqrt{x^2+y^2}$,


$$
|f(x,y)|\le\frac{r^3}{r^2}=r.
$$


Para todo ε>0 basta tomar δ=ε: si 0<r<δ entonces |f|<ε. Esto prueba el límite por todos los caminos simultáneamente. El valor definido en el origen coincide con él y f es continua allí. No hicimos depender δ del ángulo ni del camino de aproximación.

**Parciales por definición.** Sobre ambos ejes f vale cero. Por tanto


$$
f_x(0,0)=\lim_{h\to0}\frac{f(h,0)-0}{h}=0,\qquad f_y(0,0)=0.
$$


Si f fuera diferenciable, su diferencial necesariamente sería la aplicación nula. Esa es una consecuencia de la unicidad del mejor modelo lineal, no una elección conveniente.

**Direccionales.** Para un vector unitario $\mathbf u=(a,b)$,


$$
f(ta,tb)=\frac{t^3a^2b}{t^2(a^2+b^2)}=ta^2b
$$


para t≠0. Entonces $D_{\mathbf u}f(0,0)=a^2b$. Todas las direccionales existen. Sin embargo, para $\mathbf u=(1/\sqrt2,1/\sqrt2)$ el resultado es $1/(2\sqrt2)$, distinto de $\nabla f(0,0)\cdot\mathbf u=0$.

No hay contradicción con el teorema del gradiente: ese teorema supone diferenciabilidad, que todavía no tenemos. El conjunto de direccionales aquí no depende linealmente de la dirección.

**Prueba definitiva de no diferenciabilidad.** El cociente del resto respecto de la distancia es


$$
\frac{|f(x,y)-f(0,0)-0x-0y|}{\sqrt{x^2+y^2}}.
$$


Sobre x=y=t, con t≠0, vale


$$
\frac{|t/2|}{\sqrt2|t|}=\frac1{2\sqrt2}.
$$


No tiende a cero. f es continua y tiene todas las direccionales, pero no es diferenciable. Esta solución también explica por qué limitarse a calcular dos parciales habría sido insuficiente.

**Variante para resolver.** Cambiá el numerador por $x^2y^2$. Ahora $|f|\le r^2/4$ y, después de dividir por r, el resto queda acotado por r/4. La nueva función sí es diferenciable con diferencial nulo. El factor adicional cambia el orden del error, que es el punto decisivo.

### Problema 3. Composición, gradiente y unidades de variación

La temperatura es $T(x,y)=100e^{-x^2-2y^2}$ y un móvil tiene posición $x(t)=1+t$, $y(t)=t^2$. Calculá la tasa de cambio temporal en t=0, la dirección espacial de máximo aumento en (1,0), la tasa por unidad de distancia en esa dirección y el plano tangente al gráfico de T en ese punto.

**Variables y significado.** El gradiente usa coordenadas espaciales; dT/dt incorpora además la velocidad del móvil. Una tasa temporal y una tasa por distancia no se pueden intercambiar, aun cuando numéricamente coincidan en algún caso.

Las parciales son


$$
T_x=-200xe^{-x^2-2y^2},\qquad T_y=-400ye^{-x^2-2y^2}.
$$


En (1,0), $\nabla T=(-200/e,0)$. La regla de la cadena da


$$
\frac{d}{dt}T(x(t),y(t))=T_xx'(t)+T_yy'(t).
$$


Como $(x'(0),y'(0))=(1,0)$, la tasa temporal inicial es −200/e. El móvil se aleja del origen en la dirección x positiva y la temperatura disminuye.

Por Cauchy–Schwarz, $\nabla T\cdot\mathbf u\le\|\nabla T\|$ para vectores unitarios. El máximo es 200/e en la dirección (−1,0). La dirección opuesta produce el mínimo −200/e; las direcciones perpendiculares al gradiente producen cambio instantáneo cero. «Instantáneo cero» no significa temperatura constante en toda una recta: describe una derivada en un solo punto.

El gráfico vive en el espacio (x,y,z), con z=T. Su plano tangente es


$$
z=\frac{100}{e}-\frac{200}{e}(x-1).
$$


Este plano aproxima la temperatura para desplazamientos espaciales pequeños. No se obtiene agregando una coordenada temporal a la trayectoria. Si se quisiera una aproximación a T a lo largo del movimiento, se usaría $T(t)\approx100/e-(200/e)t$ cerca de cero.

### Problema 4. Ecuación implícita: existencia local y curvatura

La superficie $F(x,y,z)=x^2+y^2+z^2+xyz-3=0$ pasa por A=(1,1,1). Justificá que cerca de A permite escribir z=g(x,y), calculá sus primeras derivadas, el plano tangente y el Taylor de orden dos de g en (1,1).

**Antes de derivar.** F es polinómica, por lo que tiene todas las derivadas continuas. F(A)=0 y $F_z=2z+xy$ vale 3 en A. El teorema de la función implícita asegura una única rama local diferenciable z=g(x,y) con g(1,1)=1; además tiene la regularidad necesaria para derivar dos veces. No afirma que toda la superficie sea la gráfica de una única función global.

Partimos de $F(x,y,g(x,y))=0$. Derivando respecto de x:


$$
F_x+F_zg_x=0,\qquad g_x=-\frac{F_x}{F_z}.
$$


Análogamente $g_y=-F_y/F_z$. Como las tres componentes del gradiente de F en A valen 3, resulta $g_x=g_y=-1$. El plano tangente es


$$
z-1=-(x-1)-(y-1),\qquad x+y+z=3.
$$


**Segundas derivadas sin tratar z como constante.** Derivamos la identidad $F_x+F_zg_x=0$ una vez más respecto de x:


$$
F_{xx}+2F_{xz}g_x+F_{zz}g_x^2+F_zg_{xx}=0.
$$


En A, $F_{xx}=2$, $F_{xz}=1$, $F_{zz}=2$ y $g_x=-1$, de donde $2-2+2+3g_{xx}=0$. Así $g_{xx}=-2/3$. Por simetría $g_{yy}=-2/3$.

Para la mixta:


$$
F_{xy}+F_{xz}g_y+F_{yz}g_x+F_{zz}g_xg_y+F_zg_{xy}=0.
$$


En A los primeros tres coeficientes Fxy,Fxz,Fyz valen uno. Obtenemos $1-1-1+2+3g_{xy}=0$, por lo tanto $g_{xy}=-1/3$. Con h=x−1 y k=y−1,


$$
g(1+h,1+k)=1-h-k-\frac13(h^2+hk+k^2)+o(h^2+k^2).
$$


El término cuadrático es negativo para desplazamientos no nulos, coherente con una rama que se curva por debajo del plano tangente cerca de A. El resto pequeño se refiere a h,k tendiendo simultáneamente a cero. Sustituir, por ejemplo, x=10 en este polinomio no ofrece una aproximación justificada.

### Problema 5. Taylor con una cota cuantitativa del error

Aproximá $f(0.1,0.2)$ para $f(x,y)=\ln(1+x+y)$ usando Taylor de orden dos alrededor del origen y obtené una cota verificable del error.

El dominio exige 1+x+y>0. En el segmento desde (0,0) hasta (0.1,0.2) esa expresión varía entre 1 y 1.3, así que las derivadas empleadas existen y son continuas. Si s=x+y, el polinomio es


$$
P_2=x+y-\frac12(x+y)^2.
$$


En el punto pedido da $0.3-0.045=0.255$. Para estimar error podemos reducir el problema a una variable: $q(t)=f(0.1t,0.2t)=\ln(1+0.3t)$, 0≤t≤1. Taylor para q alrededor de cero da


$$
q(1)=q(0)+q'(0)+\frac{q''(0)}2+\frac{q'''(\xi)}6
$$


para algún ξ∈(0,1). Puesto que


$$
q'''(t)=\frac{2(0.3)^3}{(1+0.3t)^3},
$$


su valor absoluto es como máximo 0.054 y el resto es como máximo 0.009. Además es positivo: 0.255 es una aproximación por defecto. La cota permite afirmar $0.255<\ln1.3\le0.264$ sin conocer el valor exacto. El valor calculado con una herramienta numérica, aproximadamente 0.262364, sirve como comprobación adicional, no como demostración de la cota.

**Qué se aprendió.** Escribir «error de orden tres» describe una tasa asintótica, pero no da por sí solo un número para un desplazamiento concreto. Una garantía numérica necesita una cota de las derivadas en todo el segmento relevante. La reducción a q(t)=f(A+th) organiza esa tarea también cuando f no depende solo de x+y.

### Problema 6. Extremos absolutos en una región con borde

Buscá máximo y mínimo de $f(x,y)=xy(3-x-y)$ en el triángulo $D=\{x\ge0,y\ge0,x+y\le3\}$.

**Existencia.** D es cerrado y acotado y f es continua. Weierstrass garantiza ambos extremos absolutos. La garantía no localiza los puntos; obliga a investigar interior y frontera.

En el interior x,y>0 y x+y<3,


$$
f_x=y(3-2x-y),\qquad f_y=x(3-x-2y).
$$


Para que ambas sean cero, debe cumplirse 2x+y=3 y x+2y=3. Se obtiene x=y=1 y f=1. Como referencia, el Hessiano allí es


$$
H_f(1,1)=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}.
$$


Tiene determinante 3 y primer elemento negativo: es definido negativo. Esto confirma un máximo local estricto, pero todavía no demuestra que sea absoluto sobre D.

En cada lado del triángulo alguno de los factores x, y o 3−x−y es cero. Por tanto f=0 sobre toda la frontera, incluidos los vértices. Además en D los tres factores son no negativos, por lo que f≥0. Comparando todos los candidatos, el máximo absoluto es 1 en (1,1), y el mínimo absoluto es 0 en toda la frontera.

Hay infinitos minimizadores. Una respuesta que liste solamente los tres vértices perdería parte del conjunto solución. Tampoco sería correcto llamar «mínimo local libre» a todo punto del borde sin especificar que se está optimizando respecto de D: fuera de D el signo puede cambiar.

### Problema 7. Lagrange con dos restricciones y comprobación independiente

Encontrá los extremos de $f=x+y+z$ sujetos a $g_1=x^2+y^2-1=0$ y $g_2=z-xy=0$.

El conjunto admisible es una curva cerrada sobre el cilindro unitario; como z=xy queda acotado. Es compacto y f es continua. Los gradientes $\nabla g_1=(2x,2y,0)$ y $\nabla g_2=(-y,-x,1)$ son independientes sobre la curva: el segundo tiene componente z igual a uno y el primero es no nulo. Todos los extremos cumplen las ecuaciones de Lagrange.

La ecuación $\nabla f=\lambda\nabla g_1+\mu\nabla g_2$ produce


$$
1=2\lambda x-\mu y,\qquad 1=2\lambda y-\mu x,\qquad 1=\mu.
$$


Restando las dos primeras, $0=(2\lambda+1)(x-y)$. Hay dos ramas de candidatos.

**Rama x=y.** De x²+y²=1 resulta x=y=±1/√2 y z=1/2. Los valores son $1/2+\sqrt2$ y $1/2-\sqrt2$.

**Rama 2λ+1=0.** Como μ=1 y λ=−1/2, las ecuaciones dan x+y=−1. Junto a x²+y²=1, esto implica xy=0. Los puntos son (−1,0,0) y (0,−1,0), ambos con f=−1.

La comparación da máximo $1/2+\sqrt2$ en $(1/\sqrt2,1/\sqrt2,1/2)$ y mínimo −1 en los dos puntos restantes. El valor $1/2-\sqrt2\approx-0.914$ no es el mínimo absoluto; resolver únicamente la rama simétrica habría dado una respuesta equivocada.

**Otra forma de comprobar.** Si s=x+y, entonces xy=(s²−1)/2 y $s\in[-\sqrt2,\sqrt2]$. Sobre el conjunto admisible,


$$
f=s+\frac{s^2-1}{2}=\frac{(s+1)^2}{2}-1.
$$


El mínimo está en s=−1 y el máximo, comparando extremos del intervalo, en s=√2. Este argumento confirma el cálculo y muestra por qué la simetría no bastaba para localizar todos los extremos.

### Problema 8. Distancia a una intersección de superficies

Buscá los puntos de la curva x²+y²=4, z=x+y más cercanos al origen. En vez de minimizar la raíz de la distancia, minimizá su cuadrado: la función raíz es creciente y no cambia los minimizadores.

Usando las restricciones,


$$
d^2=x^2+y^2+z^2=4+(x+y)^2.
$$


Esto ya prueba que d²≥4. La igualdad exige x+y=0; con x²+y²=4 resulta $(x,y)=(\sqrt2,-\sqrt2)$ o $( -\sqrt2,\sqrt2)$, y z=0. La distancia mínima es 2.

Para el máximo, Cauchy–Schwarz da $(x+y)^2\le2(x^2+y^2)=8$. Se alcanza cuando x=y, es decir, en $(\sqrt2,\sqrt2,2\sqrt2)$ y $(-\sqrt2,-\sqrt2,-2\sqrt2)$. La distancia máxima es √12. Este uso de desigualdades puede ser más breve que Lagrange, pero sigue exigiendo verificar las condiciones de igualdad y que los puntos pertenezcan a la curva.

### Autoevaluación del primer bloque

Un problema está aprendido cuando podés justificar los pasos sin repetir la solución. Probá estas variaciones:

1. En el problema 1, reemplazá 3t por t². ¿La rapidez sigue siendo constante? Escribí la integral de longitud aunque no la resuelvas elementalmente.
2. En el problema 2, explicá qué propiedad falla si el numerador se cambia por xy y qué camino lo detecta.
3. En el problema 3, elegí una velocidad inicial perpendicular al gradiente y explicá por qué la tasa temporal inicial es cero.
4. En el problema 4, averiguá qué variable podrías despejar localmente si Fz se anulara pero Fx no.
5. En el problema 6, justificá por qué una región abierta podría carecer de máximo aunque f esté acotada.
6. En el problema 7, reconstruí las dos ramas sin dividir por x−y; dividir habría eliminado candidatos.

**Orientación de respuestas.** 1: rapidez $\sqrt{4+4t^2}$, longitud $\int_0^\pi2\sqrt{1+t^2}\,dt$. 2: xy/(x²+y²) toma 1/2 sobre y=x y cero sobre un eje, por lo que no es continua. 3: cualquier velocidad paralela al eje y en (1,0). 4: escribir x como función de y,z. 5: sobre el interior del triángulo el mínimo cero no se alcanza. 6: la factorización exige considerar tanto x=y como 2λ+1=0.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 18

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\frac{f(P+h)-f(P)-Df(P)h}{\lVert h\rVert}\to0$ | Control del resto para diferenciabilidad; no reemplazar por rectas. |
| $\nabla f=\lambda\nabla g+\mu\nabla h$ | Usar restricciones regulares, conservar todas las ramas y comparar candidatos. |


<!-- fin formulario am2 -->


## Capítulo 19. Taller integrador del segundo bloque

En estos problemas la parte decisiva suele estar antes de integrar: describir la región, elegir coordenadas y orientación, y determinar si las hipótesis de un teorema se cumplen. Conservá el dibujo y el planteo junto a las cuentas. Una primitiva correcta no repara límites que describen otro conjunto.

### Problema 1. Cambiar el orden para hacer posible una integral

Calculá


$$
I=\int_0^1\int_x^1 e^{y^2}\,dy\,dx.
$$


La integral interior no tiene una primitiva elemental. Eso no significa que la integral doble sea imposible. El integrando es continuo sobre un triángulo compacto, de modo que Fubini permite cambiar el orden sin dificultades de convergencia.

El planteo original describe $0\le x\le1$ y $x\le y\le1$. Para invertir el orden, fijamos y. Su menor valor es cero y el mayor es uno. A esa altura, el segmento horizontal empieza en x=0 y termina en x=y. Por tanto


$$
I=\int_0^1\int_0^y e^{y^2}\,dx\,dy
=\int_0^1 ye^{y^2}\,dy.
$$


La sustitución u=y² tiene du=2y dy, por lo que $I=(e-1)/2$. Antes de cambiar el orden, la variable interior y aparecía dentro del exponente; después, integrar en x crea exactamente el factor y que permite la sustitución.

**Comprobación geométrica.** El triángulo tiene área 1/2 y el integrando está entre 1 y e. Entonces 1/2≤I≤e/2; el resultado satisface esas cotas. Es una verificación de plausibilidad, no una demostración independiente de la igualdad.

**Variante con división de región.** Si una región está bajo la línea quebrada que une (0,0), (1,1), (2,0), escribir y entre cero y «la recta superior» obliga a dos fórmulas: y≤x para 0≤x≤1 y y≤2−x para 1≤x≤2. En cambio, horizontalmente es $0\le y\le1$, $y\le x\le2-y$. Cambiar el orden puede simplificar tanto la región como el integrando.

### Problema 2. Cambio lineal, jacobiano y momento de una lámina

Una lámina ocupa el paralelogramo delimitado por x+y=0, x+y=2, x−y=0, x−y=2. Su densidad es $\delta(x,y)=1+x+y$. Hallá masa y centro de masa.

Tomamos u=x+y y v=x−y. Las fronteras se convierten en u=0,2 y v=0,2, así que la nueva región es un cuadrado. Resolver las ecuaciones da


$$
x=\frac{u+v}{2},\qquad y=\frac{u-v}{2}.
$$


El jacobiano necesario para sustituir dx dy es el de (x,y) respecto de (u,v):


$$
\frac{\partial(x,y)}{\partial(u,v)}
=\begin{vmatrix}1/2&1/2\\1/2&-1/2\end{vmatrix}=-\frac12.
$$


Usamos su valor absoluto 1/2. El signo indica inversión de orientación, pero la masa integra área sin orientación. La densidad es 1+u, positiva en todo el cuadrado.

La masa resulta


$$
m=\frac12\int_0^2\int_0^2(1+u)\,dv\,du=4.
$$


Para la coordenada x del centro se integra xδ, y para y se integra yδ:


$$
m\bar x=\frac14\int_0^2\int_0^2(u+v)(1+u)\,dv\,du=\frac{13}{3},
$$



$$
m\bar y=\frac14\int_0^2\int_0^2(u-v)(1+u)\,dv\,du=\frac13.
$$


Entonces $(\bar x,\bar y)=(13/12,1/12)$. Como control, $\bar u=\bar x+\bar y=7/6$ y $\bar v=\bar x-\bar y=1$. La densidad crece con u y es independiente de v; por eso el centro se desplaza hacia u grande, mientras v permanece en la mitad del intervalo. Este argumento detectaría, por ejemplo, un error que ubicara el centro en v=0.

**Por qué no basta la simetría del contorno.** El paralelogramo es simétrico respecto de su centro geométrico, pero la masa no está distribuida uniformemente. La simetría relevante es la de región y densidad juntas. Con densidad constante, el centro sería (1,0).

### Problema 3. Fuerza hidrostática y elección de coordenadas

Una placa vertical triangular tiene el vértice superior al nivel del agua y su base horizontal de ancho 4 m a 3 m de profundidad. Obtené la fuerza hidrostática sobre una cara. Sea $\gamma$ el peso específico del líquido, en fuerza por unidad de volumen; se supone constante.

Elegimos y como profundidad medida positivamente hacia abajo. La presión manométrica es p(y)=γy. En la profundidad y, la semejanza de triángulos da un ancho $w(y)=4y/3$. Una tira de espesor dy tiene área $w(y)dy$ y recibe fuerza $p(y)w(y)dy$. Por lo tanto


$$
F=\int_0^3\gamma y\frac{4y}{3}\,dy=12\gamma.
$$


Si γ está en N/m³, el factor 12 tiene unidades m³ y la fuerza queda en newtons. La presión no es constante sobre la placa. Multiplicar el área por la presión a profundidad máxima sobreestimaría el resultado.

También podemos escribir una integral doble sobre $D=\{0\le y\le3,-2y/3\le x\le2y/3\}$:


$$
F=\iint_D\gamma y\,dA.
$$


El área triangular es 6 m² y su centroide está a profundidad 2 m; por eso F=γ·6·2, consistente con lo anterior. Esta última fórmula funciona porque la presión depende linealmente de la profundidad: la integral de y es el área por la coordenada del centroide. Si la densidad del líquido variara con profundidad, primero habría que obtener la presión correspondiente; no se conservaría automáticamente el mismo cálculo.

### Problema 4. Un sólido descrito por una esfera y un cono

Calculá el volumen y la coordenada z del centro de masa del sólido homogéneo que está dentro de la esfera $x^2+y^2+z^2\le4$ y por encima del cono $z=\sqrt{x^2+y^2}$.

El cono tiene z≥0 y en esféricas equivale a ρcosφ=ρsinφ. Para puntos con ρ>0 su superficie es φ=π/4. «Por encima» significa 0≤φ≤π/4, no φ≥π/4. La esfera impone 0≤ρ≤2 y θ recorre una vuelta completa.

El elemento de volumen es $\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$. Así,


$$
V=\int_0^{2\pi}\int_0^{\pi/4}\int_0^2
\rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta
=\frac{16\pi}{3}\left(1-\frac1{\sqrt2}\right).
$$


Por simetría, $\bar x=\bar y=0$. Para z, como z=ρcosφ,


$$
\iiint_E z\,dV
=2\pi\left(\int_0^2\rho^3d\rho\right)
\left(\int_0^{\pi/4}\cos\varphi\sin\varphi\,d\varphi\right)=2\pi.
$$


Para densidad constante esta se cancela al dividir por la masa. Entonces


$$
\bar z=\frac{3}{8(1-1/\sqrt2)}=\frac{3(2+\sqrt2)}8.
$$


Su valor aproximado es 1.2803, dentro del intervalo vertical [0,2]. Que el centro esté dentro del rango de coordenadas es necesario, aunque no suficiente para validar toda la cuenta.

**Comparación con cilíndricas.** La misma región se describe por $0\le r\le\sqrt2$, $r\le z\le\sqrt{4-r^2}$. El corte r=√2 surge de igualar las superficies. El volumen sería $2\pi\int_0^{\sqrt2}(\sqrt{4-r^2}-r)rdr$. Las dos descripciones son válidas; esféricas separa los límites y evita la raíz. No elegimos coordenadas solo porque «hay una esfera»: las elegimos porque simplifican simultáneamente todas las fronteras.

### Problema 5. Trabajo: potencial, camino y parametrización

Sea $\mathbf F=(2xy+z,x^2+2y,x+3z^2)$ en todo $\mathbb R^3$. Calculá el trabajo desde A=(0,1,0) hasta B=(1,2,1), primero buscando un potencial. Después comprobá el valor sobre el segmento AB.

**Potencial.** Integramos la primera componente respecto de x:


$$
\phi=x^2y+xz+h(y,z).
$$


Al derivar respecto de y y comparar con la segunda componente, resulta $h_y=2y$, de modo que h=y²+k(z). Finalmente $\phi_z=x+k'(z)=x+3z²$, de donde k=z³+C. Entonces


$$
\phi=x^2y+xz+y^2+z^3+C.
$$


El campo es gradiente en todo el espacio, así que el trabajo sobre cualquier curva regular por tramos entre esos extremos es $\phi(B)-\phi(A)=8-1=7$. La independencia del camino se deduce del potencial explícito; no precisamos inferirla solo de rotor cero.

**Comprobación directa.** El segmento se parametriza como $\mathbf r(t)=(t,1+t,t)$, 0≤t≤1, con $\mathbf r'=(1,1,1)$. Sustituyendo,


$$
\mathbf F(\mathbf r(t))=(3t+2t^2,\ t^2+2+2t,\ t+3t^2).
$$


El producto con r′ es $2+6t+6t²$. Al integrar da 2+3+2=7. En cambio, integrar $\|\mathbf F\|\,ds$ produciría otra magnitud: el trabajo usa la componente tangente orientada del campo, no su norma.

### Problema 6. Green y un agujero que no se puede ignorar

En el anillo $D=\{1\le x^2+y^2\le4\}$ considerá


$$
\mathbf F=\left(-\frac{y}{x^2+y^2}-y,\frac{x}{x^2+y^2}+x\right).
$$


Calculá la circulación sobre toda la frontera positiva del anillo y sobre cada circunferencia por separado.

La frontera positiva deja D a la izquierda al recorrerla: círculo exterior antihorario y círculo interior horario. El campo tiene una singularidad en el origen, pero este no pertenece al anillo. Existe un abierto que contiene D y evita el origen, donde F es C¹; por ello Green sí puede aplicarse al anillo.

La parte angular $(-y/r²,x/r²)$ tiene rotor plano cero para r>0. La parte (−y,x) tiene $Q_x-P_y=2$. Entonces


$$
\oint_{\partial D}\mathbf F\cdot d\mathbf r
=\iint_D2\,dA=2\pi(4-1)=6\pi.
$$


Para comprobar cada borde, sobre una circunferencia de radio R recorrida antihorariamente, la contribución angular es 2π y la parte (−y,x) aporta 2πR². El círculo exterior R=2 da 10π. El interior R=1, con orientación horaria, da −4π. La suma es 6π.

**Error que debemos evitar.** Aplicar Green al disco r≤2 para concluir que el círculo exterior tiene circulación 8π sería inválido: el campo no está definido en el origen. Tampoco se puede borrar el borde interior al usar Green en un anillo. El término 2π que aparece en cada vuelta alrededor del agujero refleja la topología del dominio.

### Problema 7. Un mismo paraboloide: área, integral escalar y flujo

Sea S la parte de $z=1-x^2-y^2$ sobre el disco r≤1, orientada hacia arriba. Calculá: a) su área; b) $\iint_Sz\,dS$; c) el flujo de $\mathbf F=(0,0,z)$ a través de S. Explicá por qué los tres integrandos son diferentes.

En la gráfica g=1−x²−y², $\mathbf r_x\times\mathbf r_y=(2x,2y,1)$ y su norma es $\sqrt{1+4r²}$. El área usa solo la norma:


$$
A=2\pi\int_0^1r\sqrt{1+4r^2}\,dr
=\frac\pi6(5\sqrt5-1).
$$


La integral escalar multiplica además por z=1−r²:


$$
J=2\pi\int_0^1(1-r^2)r\sqrt{1+4r^2}\,dr.
$$


Con u=1+4r², $rdr=du/8$ y 1−r²=(5−u)/4. Entonces


$$
J=\frac\pi{16}\int_1^5(5-u)\sqrt u\,du
=\frac\pi{60}(25\sqrt5-11).
$$


Para el flujo usamos el producto del campo con el vector de área orientada. Como F=(0,0,1−r²), el producto es 1−r² y no aparece la raíz:


$$
\Phi=2\pi\int_0^1(1-r^2)r\,dr=\frac\pi2.
$$


La integral escalar J pondera por el área real inclinada; el flujo pondera por la componente normal del campo. Invertir la orientación cambiaría Φ a −π/2 y dejaría A y J intactas. Esta comparación es una manera de fijar el significado de cada elemento antes de memorizar fórmulas.

### Problema 8. Gauss con una tapa y control directo

Calculá el flujo exterior de $\mathbf F=(x,y,z)$ sobre el paraboloide $S:z=4-x²-y²$, z≥0. Aquí «exterior» se refiere al sólido entre S y el plano z=0.

S no es cerrada: su borde es la circunferencia r=2,z=0. Para usar Gauss agregamos la tapa D en el plano z=0, orientada hacia abajo. En ella F·(−k)=−z=0, así que no aporta flujo.

La divergencia del campo es 3. El volumen encerrado es


$$
V=2\pi\int_0^2(4-r²)rdr=8\pi.
$$


Por tanto, el flujo sobre la frontera completa es 3V=24π y, como la tapa aporta cero, el flujo pedido también es 24π. Si el campo tuviera componente vertical no nula en z=0, habría que restar el flujo de esa tapa con su signo correcto.

**Control sobre la superficie.** La normal exterior del paraboloide apunta hacia arriba. El producto de F=(x,y,4−r²) con el elemento (2x,2y,1) es $2r²+4-r²=4+r²$. La integral directa es


$$
2\pi\int_0^2(4+r²)rdr=24\pi.
$$


Los métodos coinciden. Que el campo radial no sea unitario no importa: F es el campo que fluye. La normal y el campo tienen papeles diferentes.

### Problema 9. Stokes sobre una superficie inclinada

La curva C es la intersección de $x²+y²=1$ con el plano z=2x−y. Se recorre antihorariamente vista desde arriba. Calculá la circulación de $\mathbf F=(-y,x,z)$ usando Stokes y mediante parametrización directa.

Elegimos como superficie la porción del plano encima del disco unitario. Su normal ascendente corresponde a la orientación indicada. Como g_x=2 y g_y=−1, el elemento de área orientada es (−2,1,1)dxdy. El rotor de F es (0,0,2). Por Stokes,


$$
\oint_C\mathbf F\cdot d\mathbf r
=\iint_D(0,0,2)\cdot(-2,1,1)dA=2\pi.
$$


Para el control directo,


$$
\mathbf r(t)=(\cos t,\sin t,2\cos t-\sin t),\qquad0\le t\le2\pi.
$$


Las dos primeras componentes de F·r′ suman sin²t+cos²t=1. La tercera es z(t)z′(t), derivada de z²/2, cuya integral sobre una vuelta completa es cero. El resultado es otra vez 2π.

**Lo que permite Stokes.** Podríamos haber elegido otra superficie con exactamente la misma frontera y orientación, siempre que el campo y la superficie cumplan las hipótesis. No podríamos usar el disco z=0 con r≤1, porque su borde tiene z=0 y no es C. La coincidencia de la proyección horizontal no equivale a igualdad de curvas en el espacio.

### Problema 10. Singularidad radial: flujo sin divergencia local

Para $\mathbf F=\mathbf r/\|\mathbf r\|^3$ calculá el flujo exterior de una esfera de radio R centrada en el origen, y explicá por qué no contradice que div F=0 para r>0.

En la esfera, $\mathbf n=\mathbf r/R$ y $\mathbf F=\mathbf r/R³$. Entonces $F\cdot n=1/R²$. Multiplicando por el área $4\pi R²$, el flujo es 4π. No depende de R.

La divergencia es cero fuera del origen, pero el campo no está definido en el centro. Gauss sobre la bola completa exige regularidad en un abierto que contenga el sólido y falla allí. Si quitamos una bola de radio ε, sí obtenemos una cáscara donde puede aplicarse el teorema. La frontera de la cáscara tiene una esfera exterior con flujo 4π y una interior orientada hacia el centro, con flujo −4π. El total es cero, de acuerdo con la integral de la divergencia.

Este ejemplo muestra por qué las hipótesis son parte del cálculo. «La divergencia es cero» no autoriza a borrar una singularidad dentro del volumen.

### Autoevaluación del segundo bloque

Antes de considerar dominado un tema, intentá contestar sin cuentas largas:

1. ¿Qué límites usarías en cilíndricas para el sólido del problema 4? ¿Dónde se cortan esfera y cono?
2. Si en el problema 5 se cambia solamente el camino, ¿qué resultado permanece? ¿Y si se invierten sus extremos?
3. ¿Qué cambia en el problema 6 si ambos círculos se recorren antihorariamente? ¿Sigue siendo la frontera positiva del anillo?
4. Si el paraboloide del problema 7 se orienta hacia abajo, ¿qué resultados cambian de signo?
5. En el problema 8, ¿cómo actuarías si la tapa tuviera flujo −5?
6. Si la curva del problema 9 se recorre al revés, ¿qué normal corresponde y cuánto vale la circulación?

**Respuestas justificadas.** 1: r entre cero y √2, z entre r y √(4−r²), θ vuelta completa. 2: permanece 7; al invertir extremos es −7. 3: la suma pasa a 14π, pero ya no representa la frontera positiva; no corresponde a la integral de 2 sobre el anillo. 4: solo el flujo. 5: flujo de S = flujo cerrado − flujo de tapa =24π+5 si el total cerrado siguiera siendo 24π; el campo concreto debe determinar ambos valores. 6: normal descendente y resultado −2π.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 19

| Relación | Símbolos, significado y condiciones |
|---|---|
| $d\mathbf r=r^{\prime}dt,\quad ds=\lVert r^{\prime}\rVert dt$ | Elegir desplazamiento orientado o longitud según qué integral se pide. |
| $\mathbf n\,dS=\pm(r_u\times r_v)du\,dv$ | Distinguir flujo de integral escalar y respetar orientación; decidir teorema después de revisar dominio. |


<!-- fin formulario am2 -->


## Capítulo 20. Demostraciones y ampliaciones que consolidan el método

Este capítulo completa varios argumentos que en una primera lectura pueden parecer solo reglas de cálculo. Conviene estudiarlo después de haber resuelto ejemplos de cada bloque: las demostraciones explican las hipótesis y ayudan a reconocer variantes.

### Por qué la diferenciabilidad implica continuidad

Que f sea diferenciable en A significa que existe una aplicación lineal L tal que


$$
f(A+h)-f(A)=L(h)+r(h),\qquad \frac{|r(h)|}{\|h\|}\longrightarrow0.
$$


En dimensión finita toda aplicación lineal es continua. En el caso escalar $L(h)=\nabla f(A)\cdot h$, por lo que $|L(h)|\le\|\nabla f(A)\|\|h\|$. Además, para h suficientemente pequeño, $|r(h)|\le\|h\|$. Por ello


$$
|f(A+h)-f(A)|\le(\|\nabla f(A)\|+1)\|h\|\longrightarrow0.
$$


Así se prueba continuidad. La implicación inversa no se sigue: el problema 2 del taller I proporciona una función continua con todas las direccionales que falla la aproximación lineal. La diferencia no es terminológica; aparece en el cociente entre error y distancia.

También se obtiene la regla del gradiente: si h=t u, al dividir la expansión por t y tomar límite, el término del resto desaparece y queda $D_uf(A)=L(u)$. La linealidad de esta dependencia es una exigencia fuerte que no satisface cualquier familia de derivadas direccionales.

### De dónde sale la regla de la cadena multivariable

Sean G una función vectorial diferenciable en A y f diferenciable en B=G(A). Escribimos


$$
G(A+h)=B+DG(A)h+\rho(h),\qquad \rho(h)=o(\|h\|),
$$



$$
f(B+k)=f(B)+Df(B)k+\eta(k),\qquad \eta(k)=o(\|k\|).
$$


Al sustituir k=G(A+h)−B, su norma es a lo sumo una constante por ||h|| cerca de cero. Entonces el resto η(k) también es o(||h||), mientras $Df(B)\rho(h)$ tiene ese mismo orden. La parte lineal que sobrevive es


$$
D(f\circ G)(A)=Df(G(A))DG(A).
$$


Esto justifica el producto de matrices jacobianas y su orden. Si G transforma dos variables en tres y f transforma tres en una, las dimensiones son (1×3)(3×2)=(1×2). El producto invertido ni siquiera tiene las dimensiones adecuadas. En cálculos con varias variables intermedias, el control de dimensiones ayuda a detectar términos faltantes.

**Ejemplo con dependencia explícita.** Si $w=f(x(t),y(t),t)$, entonces


$$
w'=f_xx'+f_yy'+f_t.
$$


El tercer término aparece porque t es también una entrada de f. Dibujar un árbol de dependencias evita perderlo. Por ejemplo, si f(x,y,t)=x²y+t y x=t, y=e^t, entonces $w=t²e^t+t$ y $w'=2te^t+t²e^t+1$. La derivación directa confirma los tres aportes de la cadena.

### La ecuación de calor y la ecuación de onda como controles de parciales

Las ecuaciones diferenciales parciales se estudian aquí como identidades que una función puede satisfacer, no como una teoría general de resolución.

Para $u(x,t)=e^{-k^2t}\sin(kx)$ se obtiene


$$
u_t=-k^2e^{-k^2t}\sin(kx),\qquad
u_{xx}=-k^2e^{-k^2t}\sin(kx).
$$


Por tanto cumple $u_t=u_{xx}$. En la variable t se deriva una vez, en x dos veces; las variables mantenidas constantes deben estar claras en cada paso. Si la ecuación fuera $u_t=\alpha u_{xx}$ con α>0, el factor temporal correspondiente sería $e^{-\alpha k^2t}$.

Para una función dos veces derivable h, $u(x,t)=h(x-ct)$ cumple


$$
u_{tt}=c^2h''(x-ct),\qquad u_{xx}=h''(x-ct),
$$


y satisface la ecuación de onda $u_{tt}=c^2u_{xx}$. El perfil viaja hacia x creciente cuando c>0. La función h(x+ct) viaja en sentido opuesto y también satisface la ecuación. Escribir u=h(x−ct) no requiere que h sea seno: la cadena explica la validez para toda h con la regularidad indicada.

Para la ecuación de Laplace, $v(x,y)=x²-y²$ tiene $v_{xx}+v_{yy}=2-2=0$. Se llama armónica en el dominio donde se cumplen esas derivadas. Un campo gradiente de una función armónica tiene divergencia cero, porque $\operatorname{div}\nabla v=\Delta v$. Esta conexión reaparece en cálculo vectorial.

### Hessiano en más dimensiones y formas cuadráticas

En tres o más variables, el determinante aislado del Hessiano no clasifica todos los casos. Lo decisivo es el signo de $h^THh$ para vectores h no nulos. Para una matriz simétrica, autovalores positivos implican forma definida positiva; negativos, definida negativa; ambos signos, indefinida. Un autovalor cero requiere estudiar órdenes superiores si el resto de los signos no decide.

Cuando no se calculan autovalores, el criterio de Sylvester reconoce una matriz definida positiva si todos sus menores principales **iniciales** son positivos. En dimensión tres son H11, el determinante de la esquina superior izquierda 2×2 y det H. Para definida negativa alternan signos: negativo, positivo, negativo. Esto requiere simetría, que aquí proviene de Schwarz bajo continuidad de las segundas parciales.

**Ejemplo.** Para $f=x²+2y²+3z²+2xy$ el Hessiano es


$$
H=\begin{pmatrix}2&2&0\\2&4&0\\0&0&6\end{pmatrix}.
$$


Los menores iniciales son 2,4,24: es positivo definido. También se ve completando cuadrados, $f=(x+y)^2+y²+3z²$. El origen es el mínimo absoluto único, pues la función es exactamente esa forma positiva y no solo una aproximación local. Para una función general, el Hessiano positivo en un punto estacionario asegura un mínimo local, sin extender por sí mismo la conclusión a todo el dominio.

### Integral múltiple: qué se está aproximando con sumas

En un rectángulo, subdividimos en celdas pequeñas de área ΔAi y elegimos un punto ξi en cada una. La suma $\sum_i f(\xi_i)\Delta A_i$ aproxima una acumulación. Si al hacer pequeña la máxima diagonal de las celdas todas esas sumas tienden al mismo valor, existe la integral de Riemann. Una definición equivalente usa sumas inferiores con ínfimos y superiores con supremos.

Para una función continua en un rectángulo compacto, la continuidad uniforme hace pequeña la oscilación en cada celda cuando la malla es pequeña. La diferencia entre sumas superior e inferior queda acotada por «máxima oscilación por área total» y tiende a cero. Esa es la razón de la integrabilidad, no simplemente que podamos encontrar primitivas.

Una región curvada se trata encerrándola en un rectángulo y extendiendo el integrando por cero fuera de ella. Para las regiones acotadas con fronteras regulares por tramos que aparecen en el curso, la frontera no aporta área y se obtiene la integral sobre D. Una función continua puede ser integrable sobre D aunque la extensión por cero salte en la frontera: esas discontinuidades están sobre un conjunto sin área.

En tres dimensiones se reemplazan áreas por volúmenes de celdas. Esta construcción explica por qué la densidad volumétrica se multiplica por dV y no por una longitud: cada término aproxima la masa de un pequeño volumen.

**Integrar no es siempre medir volumen positivo.** Si f representa altura y toma valores negativos, la integral doble es volumen con signo respecto del plano de referencia. El volumen geométrico entre dos gráficas se expresa como superior menos inferior cuando ese orden está garantizado. Si se cruzan, se divide la región o se usa el valor absoluto de la diferencia, con la interpretación adecuada.

### Momentos de inercia y significado de la distancia al eje

Para una lámina de densidad δ, el momento de inercia respecto del eje x es $I_x=\iint_Dy²\delta dA$; respecto del eje y, $I_y=\iint_Dx²\delta dA$. La variable al cuadrado es la **distancia al eje**, no la coordenada con el mismo nombre. El momento polar respecto del origen es $I_O=\iint_D(x²+y²)\delta dA=I_x+I_y$.

En un disco homogéneo de radio R y densidad δ0,


$$
I_O=\int_0^{2\pi}\int_0^Rr²\delta_0rdrd\theta
=\frac{\pi\delta_0R^4}{2}=\frac12mR².
$$


Por simetría Ix=Iy=mR²/4. El factor r del jacobiano no se confunde con el r² que representa distancia al eje z al cuadrado: provienen de dos ideas diferentes.

Para un sólido, el momento respecto del eje z es $I_z=\iiint_E(x²+y²)\delta dV$. En una esfera homogénea de radio R, podemos usar esféricas: x²+y²=ρ²sin²φ. Entonces


$$
I_z=\delta_0\int_0^{2\pi}\int_0^\pi\int_0^R
\rho^4\sin^3\varphi\,d\rho d\varphi d\theta
=\frac{8\pi\delta_0R^5}{15}=\frac25mR².
$$


Se usó $\int_0^\pi\sin³\varphi d\varphi=4/3$ y m=4πδ0R³/3. Las unidades son masa por longitud al cuadrado. Si el resultado tuviera unidades de masa por longitud, faltaría algún factor geométrico.

### Área de una curva que se cruza a sí misma

Consideremos $x=\sin t$, $y=\sin2t$ para 0≤t≤2π. La curva tiene dos lazos que se unen en el origen. La fórmula $\frac12\int(xy'-yx')dt$ da área **orientada**, no necesariamente el área geométrica total.

Como $x'=\cos t$ y $y'=2\cos2t$,


$$
xy'-yx'=2\sin t\cos2t-\sin2t\cos t=-2\sin³t.
$$


En 0≤t≤π se recorre el lazo derecho y el área orientada es $-\int_0^\pi\sin³t\,dt=-4/3$: la orientación es horaria. En π≤t≤2π el otro lazo tiene área orientada +4/3. La integral total da cero porque las contribuciones se cancelan; la suma de las áreas geométricas es 8/3.

El punto de cruce no produce un área infinita ni invalida todo uso de Green: obliga a descomponer en lazos simples y atender a sus sentidos. Tomar valor absoluto solo al final de la integral total daría cero y seguiría siendo incorrecto. Se toman áreas de cada lazo antes de sumarlas.

### Demostración de Green para una región simple

Supongamos $D=\{a\le x\le b,\ g_1(x)\le y\le g_2(x)\}$ y orientación positiva. En el borde inferior se recorre x de a a b y en el superior de b a a. Las contribuciones de P dx suman


$$
\oint_{\partial D}Pdx
=\int_a^b[P(x,g_1(x))-P(x,g_2(x))]dx
=-\int_a^b\int_{g_1(x)}^{g_2(x)}P_y\,dy\,dx.
$$


Los segmentos verticales tienen dx=0 y no agregan términos. Análogamente, si D admite descripción horizontal, el teorema fundamental aplicado a Q en la variable x da $\oint Qdy=\iint_DQ_xdA$. Sumando se obtiene Green.

Las regiones que no admiten ambas descripciones de una sola vez se dividen en piezas adecuadas. Sobre una frontera compartida, el mismo campo se integra dos veces con sentidos opuestos y se cancela. En una región con agujero quedan sin cancelar los bordes interiores, con orientación horaria. La demostración explica tanto el signo como la necesidad de incluir todas las componentes de la frontera.

### De Green a Stokes mediante una parametrización

Sea S parametrizada por r(u,v) sobre D. La integral de F sobre su borde se transforma en una integral en el plano de parámetros:


$$
\oint_{\partial S}\mathbf F\cdot d\mathbf r
=\oint_{\partial D}(\mathbf F(\mathbf r)\cdot\mathbf r_u)du
+(\mathbf F(\mathbf r)\cdot\mathbf r_v)dv.
$$


Aplicar Green produce la diferencia de derivadas


$$
\partial_u(\mathbf F(\mathbf r)\cdot\mathbf r_v)
-\partial_v(\mathbf F(\mathbf r)\cdot\mathbf r_u).
$$


Al desarrollar con cadena y producto, las contribuciones con ruv y rvu se cancelan bajo regularidad suficiente. Los términos restantes se reorganizan como


$$
(\nabla\times\mathbf F)(\mathbf r)\cdot(\mathbf r_u\times\mathbf r_v).
$$


Al integrar sobre D aparece la integral de superficie del rotor: Stokes. La orientación de ∂D induce simultáneamente la del borde espacial y la normal ru×rv. No son dos elecciones independientes. Para superficies que requieren varios parches, se suman contribuciones y se cancelan los bordes comunes.

### Gauss en una caja y su extensión geométrica

Para una caja $[a,b]\times[c,d]\times[e,f]$, la contribución al flujo de las caras perpendiculares al eje x es


$$
\int_c^d\int_e^f[P(b,y,z)-P(a,y,z)]dzdy
=\iiint_E P_xdV.
$$


El signo de la cara x=a es negativo porque su normal exterior es −i. Las otras cuatro caras dan, de la misma manera, integrales de Qy y Rz. Sumando se obtiene flujo total igual a la integral de la divergencia.

Dividir un volumen en pequeñas cajas muestra la idea general: los flujos sobre caras interiores se cancelan. La frontera exterior permanece. Hacer rigurosa la aproximación exige regularidad del campo y de la región; no es una licencia para atravesar singularidades o ignorar piezas de borde. Es el mismo mecanismo de acumulación y cancelación que apareció en Green y Stokes, adaptado a una dimensión más.

### Regularidad y límites de lo que se demostró

Las demostraciones anteriores cubren versiones regulares y regiones habituales de la materia. No desarrollan teoría de medida, variedades generales ni distribuciones, que requieren herramientas adicionales. Para los ejercicios del programa, el trabajo práctico consiste en comprobar continuidad de las derivadas requeridas, describir la región por piezas regulares y verificar que las singularidades estén excluidas del conjunto donde se usa el teorema.

La misma fórmula puede ser correcta en una región y estar injustificada en otra. El campo radial singular y el campo angular muestran esta diferencia de modo concreto: las cuentas locales de derivadas no reemplazan las condiciones globales.
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 20

| Relación | Símbolos, significado y condiciones |
|---|---|
| $D(f\circ g)=Df(g)Dg$ | La composición de aproximaciones lineales produce la cadena. |
| $\operatorname{div}\nabla f=\Delta f,\quad\operatorname{rot}\nabla f=0$ | Distinguir operaciones; usar regularidad de derivadas mixtas cuando se cancelan. |


<!-- fin formulario am2 -->


## Capítulo 21. Ruta de estudio, diagnóstico y correspondencia con el aula

### Una secuencia de trabajo por capacidades

El programa tiene dos bloques, pero los conceptos se apoyan unos en otros. Conviene avanzar cuando podés producir una solución explicada, no cuando terminaste de leer una cantidad de páginas.

| Etapa | Trabajo en este manual | Evidencia para avanzar |
|---|---|---|
| Geometría | Capítulos 0 y 1 | Parametrizar intersecciones, controlar dominio y orientación, hallar tangentes y longitud |
| Varias variables | Capítulos 2–4 | Dibujar dominios y niveles, refutar y demostrar límites, distinguir parciales de diferenciabilidad, usar cadena e implícita |
| Aproximación y optimización | Capítulos 5 y 6 | Construir Taylor con centro correcto, acotar error, estudiar puntos degenerados y toda la frontera |
| Acumulación plana y espacial | Capítulos 7–9 | Describir regiones en varios órdenes, justificar cambios de variables, calcular magnitudes con unidades |
| Curvas y potenciales | Capítulos 10–12 | Elegir entre parametrización, potencial y Green, considerando agujeros y sentido |
| Superficies y teoremas | Capítulos 13–17 | Distinguir área, escalar y flujo, orientar superficies y elegir Gauss o Stokes con hipótesis |
| Integración de herramientas | Capítulos 18–20 | Resolver problemas completos y reconstruir los argumentos que justifican los métodos |

En cada etapa usá primero la práctica del capítulo; después un ejercicio del aula que tenga la misma estructura con datos distintos; finalmente uno cuya estructura no esté anunciada. La transferencia a un problema nuevo es una prueba más fuerte que repetir el ejemplo recién leído.

### Diagnóstico: explicar un error vale más que ocultarlo

Para revisar una solución, clasificá el primer error que aparece:

- **Objeto:** se calculó trabajo cuando se pedía masa, o área proyectada cuando se pedía superficie.
- **Dominio:** se integró una región distinta, se agregaron ramas o se omitió una exclusión.
- **Hipótesis:** se usó gradiente sin diferenciabilidad, Green con una singularidad interior o Gauss sobre una superficie abierta.
- **Orientación:** se eligió un sentido de borde incompatible con la normal o se invirtió una tapa.
- **Cálculo:** el planteo era correcto, pero una derivada, un determinante o una primitiva falló.
- **Conclusión:** se encontró un candidato y se lo declaró extremo sin comparar, o se probó un camino y se afirmó un límite global.

Corregir solamente el último número no resuelve un error de planteo. Reescribí el primer paso incorrecto y propagá el cambio. En una revisión propia, una explicación breve de por qué un teorema aplica suele evitar más errores que una página de cuentas repetidas.

### Preguntas de control conceptual

1. ¿Por qué todas las rectas pueden dar el mismo límite y aun así no existir el límite multivariable?
2. ¿Qué se exige al resto de una aproximación para llamar diferenciable a la función?
3. ¿Por qué un gradiente nulo no identifica por sí solo un extremo?
4. ¿Qué diferencia hay entre la existencia garantizada por Weierstrass y las ecuaciones de candidatos?
5. ¿Qué representa el valor absoluto del jacobiano y por qué no se usa del mismo modo en un flujo?
6. ¿Por qué la simetría del recinto no alcanza para determinar un centro de masa con densidad variable?
7. ¿Cuándo una integral escalar de línea conserva su valor y cuándo cuenta repeticiones?
8. ¿Cómo se refuta que un campo tenga potencial global sin intentar todas las funciones posibles?
9. ¿Qué borde corresponde a una región con un agujero?
10. ¿Por qué Gauss y Stokes no se intercambian aunque ambos involucren integrales de superficie?
11. ¿Qué campo y qué región justifican usar una superficie alternativa en Stokes?
12. ¿Cómo puede haber flujo no nulo en una esfera si la divergencia es cero en todos los puntos donde está definido el campo?

**Claves para controlar las respuestas.** 1: el acercamiento puede ser curvo; revisá el equilibrio y=x² del capítulo 2. 2: error dividido por distancia tendiendo a cero. 3: es condición necesaria interior bajo hipótesis; la forma cuadrática o términos superiores deciden. 4: uno garantiza que se alcanzan los extremos, las otras ayudan a localizarlos y requieren estudiar borde y singularidades. 5: mide deformación de área o volumen sin orientación; un flujo usa un elemento orientado. 6: la distribución de masa también importa. 7: cambia rapidez o sentido sin alterar la integral de un recorrido único, pero repetirlo acumula de nuevo. 8: basta una curva cerrada con circulación no nula. 9: exterior antihorario e interiores horarios para dejar la región a la izquierda. 10: Gauss relaciona flujo de F y divergencia en un volumen cerrado; Stokes relaciona circulación de F y flujo de su rotor sobre una superficie con borde. 11: mismo borde orientado y regularidad de F sobre la superficie elegida y su entorno requerido. 12: una singularidad interior puede impedir aplicar Gauss a la bola, como muestra el campo radial.

### Matriz del programa oficial

La columna de cobertura indica dónde se desarrolla el contenido, no una certificación de rendimiento del estudiante ni una revisión académica externa.

| Eje del programa | Cobertura en el manual | Guías relacionadas |
|---|---|---|
| 1. Curvas, funciones vectoriales, longitud, tangente; campos escalares, niveles, recintos, límite y continuidad | 0–2; taller I, problemas 1–2 | 0, 1, 2 |
| 2. Parciales y direccionales, diferenciabilidad, gradiente, cadena, plano y normal, función implícita | 3–4; taller I, problemas 2–4; ampliaciones del 20 | 2, 3 |
| 3. Orden superior, Schwarz, Taylor, estacionarios, extremos libres y condicionados, Hessiano y Lagrange | 4–6; taller I, problemas 4–8; ampliaciones del 20 | 3, 4 |
| 4. Integrales dobles y triples, propiedades, aplicaciones, jacobiano, cambios lineales, polares, cilíndricas y esféricas | 7–9; taller II, problemas 1–4; sumas e inercia del 20 | 5, 6, 7 |
| 5. Campos vectoriales, integrales escalares y vectoriales de línea, trabajo, potencial, líneas y equipotenciales, exactas, Green y agujeros | 10–12; taller II, problemas 5–6; demostración y lazos del 20 | 8, 9 |
| 6. Orientabilidad, parametrización, área, integral escalar superficial y flujo | 13–14; taller II, problema 7 | 9 |
| 7. Divergencia, rotor, nabla, Stokes, Gauss y aplicaciones | 15–17; taller II, problemas 8–10; demostraciones del 20 | 8, 9 |

### Qué aporta cada guía y cómo usarla

| Material | Destrezas a contrastar después de estudiar |
|---|---|
| Guía 0 | Productos, proyecciones, rectas, planos e intersecciones; detectar una base vectorial insuficiente antes de avanzar |
| Guía 1 | Sentido y rapidez, restricciones al eliminar parámetros, posición desde aceleración, tangentes, intersecciones y hélices |
| Guía 2 | Dominios con varias restricciones, contornos, caminos, continuidad, parciales por definición, direccionales y verificación de ecuaciones |
| Guía 3 | Resto de diferenciabilidad, planos, cadena con varias dependencias, gradiente, implícita e intersección de superficies |
| Guía 4 | Hessiano degenerado, extrema absolutos, Lagrange con una y dos restricciones, Taylor y estimaciones |
| Guía 5 | Recintos, cambio de orden con particiones, volumen, promedio y aplicaciones físicas |
| Guía 6 | Cambios afines y no lineales, jacobiano inverso y regiones polares con límites angulares |
| Guía 7 | Los seis órdenes, densidades, centros de masa y elección entre cilíndricas y esféricas |
| Guía 8 | Operadores vectoriales, potenciales con dominio, masa de alambres y trabajo por distintos métodos |
| Guía 9 | Green y áreas con lazos, superficies con distintos ejes, flujo, cierre con tapas y comprobación de Gauss y Stokes |

La intención es que la teoría y los desarrollos de este manual permitan abordar esas tareas sin buscar una explicación inicial en otro apunte. La práctica de la cátedra sigue siendo necesaria para contrastar variedad, notación y dificultad. No se afirma que cada ejercicio del aula esté resuelto aquí ni que todos los posibles formatos de examen estén representados.

### Fuentes consultadas y límites de revisión

El material se obtuvo del [aula de AMII/Análisis Matemático Vectorial de UNNOBA](https://plataformaed.unnoba.edu.ar/course/view.php?id=11002), con el acceso proporcionado para esta tarea. Los enlaces pueden requerir iniciar sesión.

- [Programa de la materia](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=320068): referencia principal para los siete ejes y la bibliografía.
- Guías de actividades 0–9: descargadas y examinadas mediante extracción de texto; se inspeccionaron visualmente páginas con geometría y notación relevante. Los ejercicios explicados son una selección y desarrollos originales, no una reproducción de todas las consignas.
- Soluciones de las guías 0, 1, 2, 3, 4, 6, 7 y 8: obtenidas como apoyo de contraste. No se presupone que todas sus respuestas sean correctas. Se hicieron controles independientes y se detectaron discrepancias concretas en la guía 8.
- El recurso de soluciones de la guía 5 no proporcionó un archivo descargable en la revisión. No se identificó un solucionario de la guía 9 en los recursos consultados.
- No se revisaron íntegramente las grabaciones del aula ni los libros de la bibliografía. Las demostraciones y explicaciones originales se contrastaron con las definiciones, el programa y los problemas obtenidos; no se atribuye a esos libros una lectura que no se realizó.

El programa incluye obras de Apostol, Larson, Leithold, Marsden y Tromba, Stewart, Thomas y Finney, y Zill. Son referencias bibliográficas de la cursada; su mención no implica que este manual reproduzca sus capítulos o sustituya sus ediciones completas.

### Glosario de distinciones esenciales

| Términos | Distinción que debe conservarse |
|---|---|
| Imagen y parametrización | Conjunto de puntos frente a forma de recorrerlo, con sentido, rapidez y multiplicidad |
| Parcial y diferencial | Cambio sobre un eje frente a una aplicación lineal que aproxima todos los desplazamientos |
| Gradiente y direccional | Vector de parciales frente a una tasa escalar en una dirección unitaria |
| Local y absoluto | Comparación en un entorno frente a comparación con todo el conjunto permitido |
| Punto crítico y extremo | Candidato o punto que requiere estudio frente a una propiedad ya demostrada |
| Jacobiano y Hessiano | Matriz de primeras derivadas de una transformación frente a matriz de segundas derivadas de un escalar |
| dA y dS | Área plana proyectada frente a área real de una superficie |
| ds y d**r** | Longitud sin sentido frente a desplazamiento orientado |
| Potencial local y global | Existencia en una vecindad frente a una función única definida en todo el dominio considerado |
| Cerrada y sin borde | Una curva cerrada vuelve al inicio; una superficie cerrada delimita una frontera sin arista libre en los sólidos habituales |
| Divergencia y rotor | Escalar de balance de flujo frente a vector asociado con circulación local |
| Verificar y demostrar dominio | Comprobar una cuenta concreta frente a resolver problemas nuevos y justificar sus hipótesis |
<!-- inicio formulario am2 -->
### Hoja de fórmulas del capítulo 21

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\int_Cf\,ds,\quad\int_C\mathbf F\cdot d\mathbf r,\quad\iint_Sf\,dS,\quad\iint_S\mathbf F\cdot n\,dS$ | Este capítulo no introduce nuevas fórmulas: estas cuatro notaciones permiten revisar qué objeto y medida se están usando. Consultar el formulario de cada tema. |


<!-- fin formulario am2 -->
