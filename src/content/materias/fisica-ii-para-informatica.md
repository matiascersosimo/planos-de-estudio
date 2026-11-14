---
nombre: "Física II"
code: "01487"
resumen: "Manual desarrollado de electricidad y magnetismo: campos, potencial, Gauss, capacitores, circuitos, magnetismo, inducción, Maxwell, ondas y un complemento de termodinámica."
---

## Cómo estudiar Física II

La pregunta central de esta materia es cómo las cargas producen campos y cómo esos campos transfieren fuerza y energía. El recorrido une cuatro lenguajes: vectores para fuerzas y campos, escalares para potencial y energía, integrales para distribuciones continuas y ecuaciones de circuitos para dispositivos conectados. Una fórmula aislada rara vez decide un problema: primero hay que identificar el sistema, la geometría, el régimen y las condiciones que se mantienen fijas.

Este manual se preparó después de obtener los **24 PDF disponibles** en las carpetas Teóricas, Prácticas y Laboratorio, junto con el cronograma del aula [Física II · 01295 · 2026-2C](https://plataformaed.unnoba.edu.ar/course/view.php?id=11667). Son diez apuntes teóricos, siete prácticas, cuatro parciales históricos, dos documentos de laboratorio y un cronograma: 248 páginas en total. Se revisó el texto extraído del conjunto y se inspeccionaron visualmente páginas seleccionadas con diagramas. Descargar el conjunto completo no equivale a auditar individualmente cada figura de todas sus páginas.

La ficha de esta página conserva el código **01487**, Física II, ya presente en el proyecto. El aula accesible dice **01295**. No se obtuvo un programa independiente que certifique la equivalencia entre esos códigos. Por eso la cobertura se vincula expresamente con el material de esa aula y su cronograma, sin presentar una equivalencia administrativa como confirmada. Varios apuntes llevan internamente fecha 2024 y los parciales incluyen 2023 y 2025; se conservaron esas procedencias aunque estén alojados en el aula 2026.

### Organización del recorrido

Los bloques de este manual son **unidades editoriales**, agrupadas para estudiar, no una numeración oficial de programa: interacción eléctrica; potencial y superposición continua; Gauss y conductores; capacitores y dieléctricos; corriente y circuitos; magnetismo; inducción y ondas; complemento de termodinámica. El cronograma menciona termodinámica, pero entre los PDF visibles no hay un apunte específico: el capítulo correspondiente se identifica como complemento general y no como cobertura documental completa de esa parte de la cursada.

Cada capítulo tiene explicación, procedimientos, ejemplos y práctica con respuestas. Hay una hoja de fórmulas por capítulo, una recopilación por unidad y un formulario general. Las relaciones incluyen condiciones y unidades: no son permisos universales para sustituir números. Los talleres finales relacionan contenidos y desarrollan problemas originales; no reproducen una evaluación vigente.

### Convenciones y constantes

Trabajamos en SI: carga en coulomb (C), campo eléctrico en N/C o V/m, potencial en volt (V), energía en joule (J), capacitancia en farad (F), corriente en ampere (A), resistencia en ohm (Ω), campo magnético en tesla (T), flujo magnético en weber (Wb). Para cuentas redondeadas usamos k=9,00×10⁹ N·m²/C², ε₀=8,85×10⁻¹² F/m, μ₀≈4π×10⁻⁷ H/m y e≈1,60×10⁻¹⁹ C. Esos valores son aproximaciones de cálculo, no todos constantes exactas del SI. Si un ejercicio proporciona otros valores, se emplean consistentemente los suyos.

Una flecha o negrita indica vector. E y B sin vector suelen denotar módulos, siempre no negativos; una componente como Eₓ puede tener signo. En expresiones radiales se aclara cuándo Eᵣ es una componente orientada. El versor desde la fuente al punto de observación se construye antes de sustituir signos de cargas. θ se mide respecto de la normal de una superficie cuando aparece un flujo, no respecto del plano.

### Método de trabajo

1. Dibujá fuentes, punto de observación, distancias, ejes y sentidos elegidos.
2. Separá los datos de las condiciones: equilibrio, batería conectada, carga aislada, simetría, estacionariedad.
3. Planteá primero la relación física en símbolos y justificá sus hipótesis.
4. Convertí prefijos y geometría a SI, incluidos cuadrados y cubos.
5. Resolvé conservando signos, y verificá unidades, sentido, límites y balance de energía o carga.
6. Repetí una variante sin mirar: cambiá el signo de una carga, la posición, el estado del interruptor o qué magnitud permanece fija.

El material tiene revisión matemática interna y técnica. La validación académica docente permanece pendiente. Las guías y criterios de la cátedra siguen siendo la referencia para una evaluación; al final se documentan cobertura, discrepancias y límites de esta edición.


## Formulario general de Física II

Consulta organizada en los ocho bloques editoriales del manual. Cada relación conserva sus condiciones; el desarrollo explica cómo deducirla y cuándo usarla. El complemento térmico se distingue de los temas respaldados por apuntes específicos del aula.

### Capítulo 0 · Herramientas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf R_i=\mathbf r-\mathbf r_i,\quad\hat{\mathbf R}_i=\mathbf R_i/\lVert\mathbf R_i\rVert$ | r es observador y ri fuente; Ri≠0 para definir el versor. Distancias en m. |
| $\mathbf A\cdot\mathbf B=AB\cos\theta,\quad\lVert\mathbf A\times\mathbf B\rVert=AB\sin\theta$ | θ entre los vectores; el vectorial sigue mano derecha y cambia signo al invertir orden. |
| $1\,\mu\mathrm C=10^{-6}\,\mathrm C,\quad1\,\mathrm{nC}=10^{-9}\,\mathrm C,\quad1\,\mathrm{pF}=10^{-12}\,\mathrm F$ | En áreas y volúmenes elevar también el factor de longitud al cuadrado o cubo. |
| $\lambda=dq/dl,\quad\sigma=dq/dA,\quad\rho=dq/d\mathcal V$ | Densidades de carga en C/m, C/m² y C/m³. Uniformidad debe declararse antes de sustituir Q/medida. |

### Capítulo 1 · Carga y materiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $Q=\sum_i q_i,\quad Q=Ne$ | Suma algebraica de cargas; N entero con signo en el modelo de cuantización de carga libre. e≈1,60×10⁻¹⁹ C. |
| $N_{\rm transferidos}=\lvert\Delta Q\rvert/e$ | Cantidad no negativa de electrones; ganar electrones reduce la carga neta, perderlos la aumenta. |
| $Q_1+Q_2=Q_{\rm total},\quad Q_1/R_1=Q_2/R_2$ | Esferas conductoras conectadas, muy separadas y sin influencias externas apreciables; igualan potencial, no necesariamente carga. |
| $\mathbf E_{\rm metal}=0,\quad V_{\rm metal}=\text{constante}$ | Solo equilibrio electrostático; no se aplica a un conductor resistivo con corriente sostenida. |

### Capítulo 2 · Coulomb y fuerzas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F_i=kqq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuerza sobre q debida a qi puntual en reposo; cargas con signo, vacío y punto distinto de la fuente. k≈9×10⁹ N·m²/C². |
| $F=k\frac{\lvert q_1q_2\rvert}{r^2},\quad\mathbf F_{12}=-\mathbf F_{21}$ | Módulo no negativo; igual signo repele y opuesto atrae. No implica aceleraciones iguales si masas diferentes. |
| $\mathbf F_{\rm neta}=\sum_i\mathbf F_i$ | Suma vectorial para una distribución dada; excluir autofuerza singular de la carga observada. |
| $T\cos\theta=mg,\quad T\sin\theta=F_e$ | Péndulo en equilibrio con fuerza eléctrica horizontal; θ respecto de vertical. Geometría y otras fuerzas deben comprobarse. |
| $\frac{F_e}{F_g}=\frac{k\lvert q_1q_2\rvert}{Gm_1m_2}$ | Dos partículas a la misma distancia para ambas interacciones; el radio se cancela. |

### Capítulo 3 · Campo eléctrico

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf E=\lim_{q_0\to0}\mathbf F/q_0,\quad\mathbf F=q\mathbf E$ | Carga de prueba que no perturba fuentes; q puntual y E externo. E en N/C=V/m. |
| $\mathbf E(\mathbf r)=k\sum_iq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuentes puntuales electrostáticas; conservar signos y sumar componentes, no módulos. |
| $\mathbf a=q\mathbf E/m$ | E uniforme, q y m constantes, sin otras fuerzas relevantes; cinemática no relativista. |
| $x=v_0t,\quad y-y_0=v_{y0}t+\frac{qE_y}{2m}t^2$ | Campo vertical uniforme, aceleración horizontal nula y origen temporal en la entrada. Tiempo en placas t=L/v0. |
| $E_y(0,y)=\frac{2kQy}{(a^2+y^2)^{3/2}}$ | Dos cargas +Q en (±a,0); componente orientada sobre mediatriz. No es la fórmula de dipolo de signos opuestos. |

### Capítulo 4 · Potencial y energía

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Delta V=-\int_A^B\mathbf E\cdot d\mathbf l,\quad\Delta U=q\Delta V$ | Electrostática y carga q fija; Δ significa final menos inicial. V en J/C y U en J. |
| $W_{\rm campo}=-\Delta U,\quad W_{\rm ext,cuasiestatico}=\Delta U$ | Segunda igualdad sin cambio cinético y sin otras contribuciones de trabajo; identificar quién realiza el trabajo. |
| $V=k\sum_iQ_i/r_i,\quad U_{\rm sistema}=k\sum_{i<j}Q_iQ_j/r_{ij}$ | Fuentes puntuales localizadas con referencia cero en infinito; energía cuenta cada par una vez. |
| $\mathbf E=-\nabla V,\quad E_x=-\partial V/\partial x$ | Campo electrostático en la región; un valor V=0 no implica gradiente cero ni campo nulo. |
| $\Delta K=-q\Delta V,\quad v_f^2=v_i^2-2q\Delta V/m$ | Solo trabajo eléctrico y régimen no relativista; lado derecho no negativo y punto dinámicamente accesible. |
| $1\,\mathrm{eV}\approx1{,}60\times10^{-19}\,\mathrm J$ | Unidad de energía: carga elemental multiplicada por un volt, no unidad de potencial. |

### Capítulo 5 · Dipolo eléctrico

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf p=q\mathbf d$ | q>0 módulo y d desde carga negativa a positiva; p en C·m. |
| $V=kq(1/r_+-1/r_-)$ | Dipolo finito ±q; distancias positivas a cada fuente. Fórmula exacta fuera de las fuentes. |
| $\mathbf E_{\rm mediatriz}=-\frac{2kqa}{(a^2+y^2)^{3/2}}\hat{\mathbf x}$ | −q en x=−a,+q en x=+a, punto (0,y); V=0 allí con referencia en infinito. |
| $V\approx k\frac{\mathbf p\cdot\hat r}{r^2},\quad\mathbf E\approx\frac{k}{r^3}[3(\mathbf p\cdot\hat r)\hat r-\mathbf p]$ | Aproximación lejana: r mucho mayor que la separación, desde el centro del dipolo. |
| $\boldsymbol\tau=\mathbf p\times\mathbf E,\quad U=-\mathbf p\cdot\mathbf E$ | Campo externo uniforme sobre ambas cargas; fuerza neta cero, posible torque. Alineado: energía mínima. |

### Capítulo 6 · Varillas y anillos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $dV=k\,dq/R,\quad d\mathbf E=k\,dq\,\hat R/R^2$ | R desde cada elemento fuente hasta observador; integrar con densidad y dominio geométrico correctos. |
| $V(z)=k\lambda\ln\frac z{z-L},\quad E_z=\frac{kQ}{z(z-L)}$ | Varilla uniforme 0≤s≤L,z>L,Q=λL; referencia V(∞)=0. |
| $E_x=\frac{kQ}{x\sqrt{x^2+a^2}}$ | Varilla uniforme de longitud 2a, observador en mediatriz a distancia x>0. Q=2aλ. |
| $E_r=\frac{\lambda}{2\pi\varepsilon_0r},\quad V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon_0}\ln\frac r{r_0}$ | Hilo infinito uniforme, r,r0>0. No permite cero finito en infinito; Er usa λ con signo. |
| $V=\frac{kQ}{\sqrt{x^2+a^2}},\quad E_x=\frac{kQx}{(x^2+a^2)^{3/2}}$ | Anillo uniforme de radio a, sobre su eje a distancia orientada x. V(∞)=0. |

### Capítulo 7 · Discos y planos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V(x)=2\pi k\sigma(\sqrt{x^2+R^2}-\lvert x\rvert)$ | Disco uniforme de radio R; punto axial, cero en infinito. No omitir el valor absoluto entre ambos lados. |
| $E_x=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right)$ | Mismo disco, solo x>0; al otro lado cambia el sentido. En lámina ideal el campo salta en el plano. |
| $E=\frac{\lvert\sigma\rvert}{2\varepsilon_0}$ | Plano infinito con densidad total σ; saliente si σ>0. No confundir con densidad de una cara conductora. |
| $E_x=\frac{\sigma_1-\sigma_2}{2\varepsilon_0}$ | Entre dos planos infinitos en x=0 y x=d>0; densidades con signo. Exterior izquierdo: −(σ1+σ2)/(2ε0), derecho: +(σ1+σ2)/(2ε0). |
| $E=\sigma/\varepsilon_0,\quad V(d)-V(0)=-\sigma d/\varepsilon_0$ | Dos planos +σ a izquierda y −σ a derecha; campo exterior nulo en modelo ideal. |

### Capítulo 8 · Flujo y Gauss

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_E=\int_S\mathbf E\cdot d\mathbf A,\quad\Phi_E=EA\cos\theta$ | Segunda forma solo campo uniforme y plano; θ con la normal. Φ en N·m²/C; normal externa para superficie cerrada. |
| $\oint_S\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0$ | Campo total de todas las fuentes; solo carga encerrada determina flujo neto. Entrante negativo, saliente positivo. |
| $Q_{\rm enc}=0\not\Rightarrow\mathbf E=0$ | Flujo neto cero no implica campo local cero. Para despejar E desde la integral se necesita simetría suficiente. |
| $E_r4\pi r^2=Q_{\rm enc}/\varepsilon_0$ | Solo con simetría esférica radial que permita E constante en cada esfera concéntrica. |

### Capítulo 9 · Esferas y cavidades

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}kQr/R^3&r<R\\kQ/r^2&r>R\end{cases}$ | Esfera aislante con carga volumétrica uniforme Q y radio R; componente radial orientada. |
| $V(r)=\frac{kQ}{2R}(3-r^2/R^2)$ | Interior de esa esfera uniforme; exterior kQ/r y referencia cero en infinito. |
| $E_{\rm dentro}=0,\quad V_{\rm dentro}=kQ/R$ | Esfera conductora aislada en equilibrio sin fuentes externas que rompan simetría; exterior como carga puntual central. |
| $q_{\rm pared\ interna}=-q,\quad q_{\rm pared\ externa}=Q_c+q$ | Carga q en cavidad sin tocar un conductor de carga neta Qc; cantidades totales, densidad no necesariamente uniforme. |
| $E_{{\rm afuera},n}-E_{{\rm adentro},n}=\sigma/\varepsilon_0$ | Capa superficial en vacío con normal de adentro hacia afuera; para cara conductora interna E=0. Potencial continuo. |
| $Q_{\rm enc}(r)=Q_0+\frac{4\pi\rho}{3}(r^3-a^3)$ | Dentro de cascarón aislante uniforme a<r<b con carga central Q0; no imponer condición de metal a ese volumen. |

### Capítulo 10 · Cilindros y coaxiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}\rho r/(2\varepsilon_0)&r<R\\\rho R^2/(2\varepsilon_0r)&r>R\end{cases}$ | Cilindro infinito aislante uniforme; λ=ρπR². En conductor en equilibrio, interior del metal E=0. |
| $Q_{\rm enc}(r)=2\pi L\int_0^r\rho(s)s\,ds$ | Distribución cilíndrica radial; usar límite R si la gaussiana es exterior al volumen cargado. |
| $V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon}\ln(r/r_0)$ | Región exterior de cilindro infinito en medio homogéneo; referencias radiales finitas. |
| $V(a)-V(b)=\frac{\lambda}{2\pi\varepsilon}\ln(b/a)$ | Coaxial electrostático entre radios a<b; carga por longitud +λ en interior y medio uniforme. Campos de extremos despreciados. |

### Capítulo 11 · Capacitancia

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C=Q/\Delta V,\quad Q=C\Delta V$ | Q módulo de una armadura, ΔV positiva entre armaduras; cargas ±Q y carga neta del par cero. C en F. |
| $C_{\rm plano}=\varepsilon A/d$ | Placas grandes, d pequeña frente a dimensiones laterales, medio homogéneo lineal y bordes despreciados. |
| $C_{\rm cilindrico}=\frac{2\pi\varepsilon L}{\ln(b/a)},\quad C'=C/L$ | Cilindros coaxiales largos, a<b; C′ en F/m. No asignar capacitancia total finita a longitud infinita. |
| $C_{\rm esferico}=4\pi\varepsilon\frac{ab}{b-a},\quad C_{\rm esfera}=4\pi\varepsilon a$ | Radios concéntricos a<b; la segunda es el límite b→∞ con referencia apropiada. |

### Capítulo 12 · Redes y energía

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C_{\parallel}=\sum_iC_i,\quad\frac1{C_{\rm serie}}=\sum_i\frac1{C_i}$ | Paralelo: mismos dos nodos y mismo voltaje. Serie simple: nodo intermedio flotante inicialmente neutro, cargas iguales en módulo. |
| $U=\frac{Q^2}{2C}=\frac12CV^2=\frac12QV$ | Capacitor lineal, geometría y material fijados, referencia descargado; elegir forma según variable conservada. |
| $u_E=\frac12\varepsilon E^2$ | Densidad J/m³, medio lineal no dispersivo bajo el modelo electrostático; vacío ε=ε0. No sumarla otra vez a U del mismo campo. |
| $V_f=\frac{C_1V_1+C_2V_2}{C_1+C_2}$ | Redistribución de dos capacitores aislados conectados en paralelo; tensiones con signo según nodos, carga total conservada. |
| $F=\frac{Q^2}{2\varepsilon_0A},\quad p=\frac12\varepsilon_0E^2$ | Atracción de placas paralelas ideales en vacío, bordes despreciados; al usar energía con batería incluir su trabajo. |

### Capítulo 13 · Dieléctricos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\varepsilon=\kappa\varepsilon_0,\quad C=\kappa C_0$ | Llenado completo de geometría fija, dieléctrico lineal homogéneo isótropo en régimen apropiado. |
| $Q=\text{constante}:\quad V=V_0/\kappa,\ E=E_0/\kappa,\ U=U_0/\kappa$ | Capacitor aislado sin fugas, mismas placas y separación al insertar dieléctrico completo. |
| $V=\text{constante}:\quad Q=\kappa Q_0,\ E=E_0,\ U=\kappa U_0$ | Fuente ideal conectada, misma geometría plana; batería intercambia carga y energía. |
| $C=\frac A{d_1/\varepsilon_1+d_2/\varepsilon_2},\quad C_{\rm lateral}=\frac{\varepsilon_1A_1+\varepsilon_2A_2}{d}$ | Primera: capas sucesivas según campo, sin carga libre interfacial. Segunda: áreas lado a lado en paralelo. Bordes despreciados. |
| $\oint\mathbf D\cdot d\mathbf A=Q_{\rm libre},\quad\mathbf D=\varepsilon\mathbf E$ | Segunda igualdad para medio lineal isótropo. E fundamental usa carga libre más ligada sobre ε0; no sacar ε variable de la integral. |
| $\sigma_{\rm ligada}=\sigma_{\rm libre}(1-1/\kappa)$ | Magnitudes en capacitor plano completamente lleno y polarización uniforme; carga libre de placas no desaparece. |

### Capítulo 14 · Corriente

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I=dQ/dt,\quad Q=\int_{t_1}^{t_2}I(t)\,dt$ | Corriente orientada, unidad A=C/s. Integral da carga neta, no recorrido total de carga sin distinguir sentido. |
| $I=\int_A\mathbf J\cdot d\mathbf A,\quad\mathbf J=nq\mathbf v_d$ | Modelo de una especie de portadores; sumar especies si hay varias. J en A/m²; I escalar con signo. |
| $I=n\lvert q\rvert A\lvert v_d\rvert$ | Módulo para deriva uniforme perpendicular a sección; electrones se desplazan contra corriente convencional. |
| $\mathbf J=\sigma_{\rm cond}\mathbf E,\quad\rho_{\rm res}=1/\sigma_{\rm cond}$ | Material óhmico lineal isótropo a condiciones fijadas; conductividad en S/m, resistividad en Ω·m. |

### Capítulo 15 · Resistencia y potencia

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R=\rho_{\rm res}L/A,\quad dR=\rho_{\rm res}\,dx/A(x)$ | Primera para sección y resistividad uniformes; segunda para integración longitudinal en modelo unidimensional. |
| $V=IR,\quad R(T)\approx R_0[1+\alpha(T-T_0)]$ | Ohm con R constante en el régimen; dependencia térmica lineal solo en intervalo válido, α en K⁻¹. |
| $P=VI=I^2R=V^2/R,\quad W=\int P\,dt$ | P absorbida según convención pasiva; últimas dos formas para resistor óhmico R>0. Energía en J. |
| $I_{\rm rms}=\sqrt{\frac1T\int_0^T I^2(t)\,dt}$ | Corriente eficaz que disipa igual energía en R constante. Diferente de Imedia=(1/T)∫I dt. |
| $1\,\mathrm{kWh}=3{,}6\times10^6\,\mathrm J$ | Energía, no potencia; 1 W=1 J/s. |

### Capítulo 16 · Fuentes y redes resistivas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V_{\rm terminal}=\mathcal E-Ir,\quad I=\frac{\mathcal E}{R+r}$ | Batería descargando con resistencia interna r y carga externa R. En carga cambia la orientación y relación de signos. |
| $R_{\rm serie}=\sum_iR_i,\quad\frac1{R_{\parallel}}=\sum_i\frac1{R_i}$ | Serie sin derivaciones comparte corriente; paralelo entre mismos dos nodos comparte voltaje. |
| $V_1=V\frac{R_1}{R_1+R_2},\quad I_1=I\frac{R_2}{R_1+R_2}$ | Primera: divisor serie sin carga adicional. Segunda: divisor de dos ramas paralelas. Reconstruir red si se conecta instrumento o carga. |
| $P_R=\frac{\mathcal E^2R}{(R+r)^2},\quad R_{\rm max}=r,\quad P_{\rm max}=\frac{\mathcal E^2}{4r}$ | Fuente con r>0 constante y carga resistiva; máxima potencia tiene eficiencia 50%, no máxima eficiencia. |

### Capítulo 17 · Kirchhoff

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\sum I_{\rm entrantes}-\sum I_{\rm salientes}=0$ | Nodo ideal sin acumulación apreciable; una corriente negativa indica sentido real opuesto al supuesto. |
| $\sum_{\rm malla}\Delta V_i=0$ | Circuitos concentrados con fems incluidas; flujo magnético externo variable exige incorporar fem inducida. |
| $\Delta V_R=-IR\quad\text{al recorrer según }I$ | En sentido contrario +IR; fuente de negativo a positivo +ℰ, de positivo a negativo −ℰ. |
| $I_{A\to B}=(V_A-V_B)/R,\quad P_{\rm absorbida}=VI$ | Resistor óhmico; en convención pasiva I entra por terminal positivo de V. Balance total de potencias debe cerrar. |

### Capítulo 18 · RC

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\tau=RC,\quad R\frac{dq}{dt}+q/C=\mathcal E$ | RC serie con parámetros constantes y corriente de carga I=dq/dt; τ en segundos. |
| $q=C\mathcal E(1-e^{-t/\tau}),\quad I=(\mathcal E/R)e^{-t/\tau}$ | Carga desde q(0)=0 con fuente constante; Vc=q/C. Solo aproximación asintótica a carga completa. |
| $q=Q_0e^{-t/\tau},\quad I_{\rm salida}=-dq/dt$ | Descarga sin fuente; si se mantiene la referencia de carga la corriente resulta negativa. V y q comparten exponencial. |
| $V_C(t)=V_\infty+[V_C(0)-V_\infty]e^{-t/(R_{\rm th}C)}$ | Red lineal de primer orden; Rth vista por C al desactivar fuentes independientes correctamente. Tensión inicial continua para corriente finita. |
| $t_f=-\tau\ln(1-f),\quad t_{1/2,U}=\tfrac\tau2\ln2$ | Primera: fracción de carga desde cero 0≤f<1. Segunda: semivida de energía durante descarga. |
| $W_{\rm fuente}=C\mathcal E^2,\quad U_f=\tfrac12C\mathcal E^2$ | Carga completa desde cero: otra mitad disipada en R idealizada; no extrapolar a condiciones iniciales diferentes. |

### Capítulo 19 · Laboratorio

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R_{\rm paralelo}=\frac{RR_V}{R+R_V},\quad I_{\rm con\ amperimetro}=\frac V{R+R_A}$ | Voltímetro de resistencia RV carga la rama; amperímetro de resistencia RA agrega resistencia serie en circuito simple. |
| $\frac{\delta R}{\lvert R\rvert}\approx\frac{\delta V}{\lvert V\rvert}+\frac{\delta I}{\lvert I\rvert}$ | Cota conservadora linealizada de pequeños errores para R=V/I; no confundir con incertidumbres estándar. |
| $\frac{u_R}{\lvert R\rvert}\approx\sqrt{(u_V/V)^2+(u_I/I)^2}$ | Propagación linealizada de incertidumbres estándar independientes; requiere valores no nulos y modelo válido. |
| $r_I=\sum I_{\rm entrantes}-\sum I_{\rm salientes},\quad r_V=\sum\Delta V_{\rm malla}$ | Residuos experimentales; contrastar con incertidumbres, conexiones y estabilidad, sin inventar datos medidos. |

### Capítulo 20 · Lorentz y órbitas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B),\quad\mathbf F_B\cdot\mathbf v=0$ | Carga puntual; fuerza magnética sola no cambia energía cinética. B en T; signo q invierte fuerza. |
| $r=\frac{mv_\perp}{\lvert q\rvert B},\quad T=\frac{2\pi m}{\lvert q\rvert B},\quad h=v_\parallel T$ | B uniforme, sin otras fuerzas, régimen no relativista; h avance axial por vuelta. Usar velocidad perpendicular para radio. |
| $v=E/B$ | Selector con fuerzas opuestas y geometría perpendicular apropiada; no basta igualar módulos sin revisar vectores. |
| $m=\frac{\lvert q\rvert Br}{v},\quad m=\frac{\lvert q\rvert B^2r^2}{2V_a}$ | Primera: rapidez conocida. Segunda: aceleración desde reposo por voltaje favorable Va, sin selector adicional que cambie datos. Si se mide diámetro usar r=d/2. |
| $K_{\rm ciclotron}=\frac{q^2B^2R^2}{2m}$ | Solo clásico: verificar &#124;q&#124;BR/m≪c. Si falla, no presentar el resultado como predicción válida. |

### Capítulo 21 · Fuerzas sobre corrientes y Hall

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=I\mathbf L\times\mathbf B,\quad d\mathbf F=I\,d\mathbf l\times\mathbf B$ | Primera: tramo recto y B externo uniforme; L según corriente convencional. Segunda para integrar geometría general estacionaria. |
| $\boldsymbol\mu=NI A\hat n,\quad\boldsymbol\tau=\boldsymbol\mu\times\mathbf B,\quad U=-\boldsymbol\mu\cdot\mathbf B$ | Espira plana o bobina de vueltas iguales; normal por mano derecha. Campo uniforme da fuerza neta cero pero posible torque. |
| $\mathbf E_H=-\mathbf v_d\times\mathbf B,\quad\lvert V_H\rvert=\frac{IB}{n\lvert q\rvert t}$ | Modelo Hall de un tipo de portador, geometría perpendicular; t espesor, no ancho medido entre contactos Hall. |
| $\mathbf F\approx\nabla(\boldsymbol\mu\cdot\mathbf B)$ | Dipolo pequeño permanente de momento fijo en campo externo no uniforme; no usar sin revisar respuesta para momentos inducidos. |

### Capítulo 22 · Biot–Savart

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $d\mathbf B=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf l\times\hat R}{R^2}$ | Corrientes estacionarias en vacío; R desde fuente hasta observador. Integrar y sumar vectores. |
| $B_{\rm hilo}=\frac{\mu_0I}{2\pi r},\quad B_{\rm finito}=\frac{\mu_0I}{4\pi r}(\sin\theta_2-\sin\theta_1)$ | Primer módulo para hilo infinito. Segunda con ángulos orientados desde perpendicular a la recta; sentido por mano derecha. |
| $B_{\rm eje}=\frac{\mu_0Ia^2}{2(a^2+x^2)^{3/2}},\quad B_{\rm centro}=\frac{\mu_0I}{2a}$ | Espira circular de radio a; signo axial por corriente, multiplicar por N para N vueltas coincidentes. |
| $B_{\rm arco}=\frac{\mu_0I\varphi}{4\pi a}$ | Centro de arco circular, φ en radianes. Tramos radiales no aportan allí; analizar otros tramos por separado. |
| $\frac FL=\frac{\mu_0\lvert I_1I_2\rvert}{2\pi d}$ | Hilos largos paralelos a distancia d; igual sentido atrae, contrario repele. F/L en N/m. |

### Capítulo 23 · Ampère y materiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}$ | Magnetostática en vacío; corrientes enlazadas con signo por mano derecha. Circulación nula no implica B local cero. |
| $B=\begin{cases}\mu_0Ir/(2\pi R^2)&r<R\\\mu_0I/(2\pi r)&r>R\end{cases}$ | Alambre cilíndrico infinito con corriente uniforme de radio R; campo azimutal. |
| $I_{\rm enc}(r)=2\pi\int_0^rJ(s)s\,ds$ | Corriente axial con simetría radial; si es exterior integrar hasta el radio cargado de corriente. |
| $B_{\rm solenoide}\approx\mu_0nI,\quad B_{\rm toroide}=\frac{\mu_0NI}{2\pi r}$ | Solenoide largo y lejos de extremos, n vueltas/m. Toroide ideal dentro del bobinado; exterior ideal nulo. |
| $B_{\rm lamina}=\mu_0K/2,\quad\mathbf B=\mu\mathbf H$ | Primera: lámina infinita de corriente K en A/m, vacío. Segunda: constitutiva de medio lineal simple; no universal para ferromagnéticos. |

### Capítulo 24 · Inducción

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_B=\int\mathbf B\cdot d\mathbf A,\quad\Phi_B=BA\cos\theta$ | Segunda para B uniforme y superficie plana; θ con normal. Φ en Wb=T·m². |
| $\mathcal E=-N\frac{d\Phi_B}{dt}$ | N vueltas con igual flujo por vuelta; orientación normal y recorrido por mano derecha. Lenz se opone al cambio, no siempre al campo. |
| $\mathcal E=BLv,\quad I=BLv/R,\quad F=\frac{B^2L^2v}{R}$ | Módulos para barra y rieles perpendiculares en B uniforme, circuito resistivo cerrado y autoinducción despreciada; F frena y Fv=I²R. |
| $\mathcal E(t)=NBA\omega\sin(\omega t)$ | Bobina giratoria con normal θ=ωt en B uniforme; amplitud NBAω. Origen de fase declarado. |
| $\oint_C\mathbf E\cdot d\mathbf l=-d\Phi_B/dt$ | Contorno fijo orientado; E inducido no conservativo puede existir sin conductor. |
| $\mathcal E_{\rm auto}=-L\frac{dI}{dt},\quad U_L=\tfrac12LI^2$ | Ampliación: inductancia L constante de modelo lineal; no confundir L inductancia en H con longitud geométrica. |

### Capítulo 25 · Maxwell y ondas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I_d=\varepsilon_0\frac{d\Phi_E}{dt}$ | Corriente de desplazamiento en vacío; capacitor ideal cargándose tiene Id total igual a corriente del cable. |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}$ | Ampère–Maxwell para contorno fijo, orientación coherente. El segundo término no es conducción libre entre placas. |
| $\oint\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0,\quad\oint\mathbf B\cdot d\mathbf A=0$ | Superficies cerradas orientadas hacia afuera en el modelo de Maxwell sin cargas magnéticas. |
| $c=1/\sqrt{\mu_0\varepsilon_0}=f\lambda,\quad E_0=cB_0$ | Onda plana en vacío, amplitudes E0 y B0. Usar c≈3×10⁸ m/s; en medios revisar velocidad y constitutivas. |
| $\mathbf S=\frac1{\mu_0}\mathbf E\times\mathbf B,\quad\langle S\rangle=\frac12\varepsilon_0cE_0^2$ | Flujo energético W/m²; promedio para onda plana sinusoidal en vacío. Si se usa Erms, ⟨S⟩=ε0cErms². |
| $u_E=\tfrac12\varepsilon_0E^2,\quad u_B=B^2/(2\mu_0)$ | Onda plana en vacío: ambas densidades iguales y en J/m³. La dirección de propagación sigue E×B. |

### Capítulo 26 · Termodinámica complementaria

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $T({\rm K})=t({}^\circ{\rm C})+273{,}15,\quad Q=mc\Delta T,\quad Q_{\rm fase}=mL$ | Complemento sin apunte específico en aula. Calor sensible con c constante, sin cambio de fase; L calor latente de la transformación. |
| $\Delta U=Q-W,\quad W=\int P_{\rm ext}\,d\mathcal V$ | Q entra al sistema positivo y W realizado por el sistema positivo. Trabajo de frontera bajo hipótesis cuasiestáticas apropiadas. |
| $P\mathcal V=nRT,\quad\Delta U=nC_V\Delta T,\quad C_P-C_V=R$ | Gas ideal; segunda con Cv molar constante. Monoatómico clásico Cv=3R/2; no universal para todos los gases. |
| $W_{\rm isotermo}=nRT\ln(\mathcal V_f/\mathcal V_i),\quad P\mathcal V^\gamma=\text{constante}$ | Primera: gas ideal, isoterma reversible. Segunda: adiabática reversible, capacidades constantes y γ=Cp/Cv. Adiabático solo no basta. |
| $\eta=1-Q_c/Q_h,\quad\eta_{\rm Carnot}=1-T_c/T_h$ | Máquina térmica cíclica, Qh y Qc módulos; Carnot reversible entre dos reservorios con temperaturas en K. W=Qh−Qc. |
| $\Delta S=\int\frac{\delta Q_{\rm rev}}T,\quad\Delta S_{\rm total}\ge0$ | Entropía en J/K; integral por camino reversible entre estados. Para reservorio a T fija: ΔS=Q/T. |

## Capítulo 0 · Herramientas para plantear problemas de campos

### Fuente, observador y sistema

Un campo asigna un vector a cada punto del espacio. Su valor depende de las fuentes y de dónde se observa. La fuerza sobre una carga situada allí depende además de esa carga. Conviene escribir E(P), no simplemente «E», durante el planteo. Si hay tres cargas, el campo que actúa sobre la tercera es el producido por las otras dos; no se incorpora su propio campo singular como si ejerciera una fuerza de Coulomb sobre sí misma.

El sistema elegido decide qué energía se calcula. La energía potencial de una carga móvil en fuentes fijas es qV externo; la energía de armar todas las cargas se suma una vez por cada par. Más adelante aparecerá energía almacenada en un campo o capacitor: son maneras de describir la misma energía electromagnética bajo hipótesis concretas, no términos que deban sumarse dos veces.

### Prefijos, áreas y cifras

Un microcoulomb es 10⁻⁶ C; un nanocoulomb 10⁻⁹ C; un picofarad 10⁻¹² F; un milifarad 10⁻³ F. Confundir mF con μF cambia mil veces la capacitancia. Si una placa mide 200 cm², su área es 200(10⁻² m)²=0,0200 m². Un radio de 2 mm es 0,002 m, pero el área circular no es π·0,002: es π(0,002)² m². Un volumen de 1 cm³ equivale a 10⁻⁶ m³.

Ejemplo: para Q=3 μC y r=20 cm, kQ/r²=(9×10⁹)(3×10⁻⁶)/(0,20)²=6,75×10⁵ N/C. Usar 20 como distancia introduce un error de 10⁴. Se mantienen cifras adicionales en cálculos intermedios y se redondea al final según la precisión de los datos.

### Construir vectores geométricamente

Si una fuente está en rᵢ y el observador en r, el desplazamiento es Rᵢ=r−rᵢ, la distancia Rᵢ=‖Rᵢ‖ y el versor R̂ᵢ=Rᵢ/Rᵢ. Fuente (1,−2), observador (4,2): desplazamiento (3,4), distancia 5 y versor (3/5,4/5). El campo de una carga positiva apunta como ese versor; el de una negativa, al revés. Esta construcción elimina ambigüedades de dibujos poco precisos.

Sumar vectores exige sumar componentes. Si E₁=(3,4) y E₂=(−3,4) N/C, la suma es (0,8) N/C, cuyo módulo es 8, mientras cada contribución mide 5. Sumar módulos daría 10 y perdería la cancelación horizontal. El ángulo se determina con las componentes y el cuadrante; arctan(Eᵧ/Eₓ) por sí sola puede devolver un ángulo en el cuadrante equivocado.

El producto escalar A·B=ABcosθ describe proyecciones y trabajo. El vectorial A×B tiene módulo ABsinθ y dirección perpendicular según la mano derecha. En ejes derechos, i×j=k, j×k=i, k×i=j; al invertir factores se invierte el signo. Más adelante v×B y B×v darán fuerzas opuestas: el orden es esencial.

### Tres tipos de integral

Una integral de línea suma contribuciones sobre una curva: dq=λdl para carga lineal; E·dl para diferencia de potencial con signo menos. Una integral de superficie suma sobre un área: dq=σdA o E·n̂dA para flujo. Una integral de volumen suma dq=ρd𝒱. La notación d𝒱 distingue volumen de V, que usaremos para potencial.

No hace falta aprender toda geometría diferencial para resolver los casos del curso. Sí reconocer qué se integra, qué variables cambian y qué factores son constantes. En un anillo, todos los elementos están a igual distancia de un punto de su eje: esa distancia puede salir de la integral. En una varilla, la distancia a cada elemento cambia y no puede sustituirse por la distancia al centro antes de integrar.

### Pruebas rápidas de consistencia

El campo de una fuente localizada debe parecerse al de una carga puntual a gran distancia si la carga neta es no nula. Un sistema neutro puede decaer más rápido, como un dipolo. Un resultado de campo en el centro de una distribución completamente simétrica debe respetar la ausencia de dirección privilegiada. Una expresión que da energía negativa no es automáticamente incorrecta: depende de la referencia. Una capacitancia negativa en los modelos pasivos lineales de este manual sí indicaría un error de signos o de definición.

El análisis dimensional detecta errores sin rehacer una cuenta. kQ/r tiene dimensiones de potencial, no de campo; kQ/r² tiene dimensiones de campo. RC tiene dimensiones de tiempo: Ω·F=(V/A)(C/V)=s. Una exponencial e^(−t/RC) tiene exponente adimensional; e^(−t/R) no tendría sentido con t en segundos y R en ohm.

### Práctica con respuestas

**H0.1.** Convertí 4,7 mF, 250 nC y 15 cm² a SI. **H0.2.** Desde A=(−1,2,0) hasta P=(1,−1,6), calculá desplazamiento, distancia y versor. **H0.3.** Sumá (4,−3) y (−2,5) N/C y hallá módulo. **H0.4.** ¿Qué dimensiones tiene ε₀A/d? **H0.5.** Calculá i×(−k).

**Respuestas.** H0.1: 0,0047 F; 2,50×10⁻⁷ C; 0,0015 m². H0.2: (2,−3,6), distancia 7, versor (2/7,−3/7,6/7). H0.3: (2,2), módulo 2√2 N/C. H0.4: (F/m)m²/m=F. H0.5: j. Para comprobar esta última, i×k=−j y el factor −1 cambia el sentido.


### Hoja de fórmulas del capítulo 0

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf R_i=\mathbf r-\mathbf r_i,\quad\hat{\mathbf R}_i=\mathbf R_i/\lVert\mathbf R_i\rVert$ | r es observador y ri fuente; Ri≠0 para definir el versor. Distancias en m. |
| $\mathbf A\cdot\mathbf B=AB\cos\theta,\quad\lVert\mathbf A\times\mathbf B\rVert=AB\sin\theta$ | θ entre los vectores; el vectorial sigue mano derecha y cambia signo al invertir orden. |
| $1\,\mu\mathrm C=10^{-6}\,\mathrm C,\quad1\,\mathrm{nC}=10^{-9}\,\mathrm C,\quad1\,\mathrm{pF}=10^{-12}\,\mathrm F$ | En áreas y volúmenes elevar también el factor de longitud al cuadrado o cubo. |
| $\lambda=dq/dl,\quad\sigma=dq/dA,\quad\rho=dq/d\mathcal V$ | Densidades de carga en C/m, C/m² y C/m³. Uniformidad debe declararse antes de sustituir Q/medida. |

## Capítulo 1 · Carga eléctrica, materiales y electrización

### Carga neta y estructura de la materia

La carga eléctrica es una propiedad que determina parte de la interacción electromagnética. En la materia ordinaria, protones tienen +e y electrones −e. Un cuerpo neutro no carece de cargas: tiene balance entre cargas positivas y negativas. Un cuerpo con carga positiva puede haberse formado retirando electrones, sin agregar protones. En procesos habituales de contacto y fricción entre sólidos, son principalmente los electrones los que se transfieren.

La carga neta se suma algebraicamente. Si un objeto tiene 10⁶ electrones de exceso, Q=−10⁶e≈−1,60×10⁻¹³ C. Para dejar una pieza con +8,0 nC se deben retirar N=Q/e=5,0×10¹⁰ electrones. El signo positivo de Q no significa «cantidad negativa de electrones»: N es la cantidad retirada y el mecanismo explica el signo.

La carga libre observable aparece en múltiplos de e. En objetos macroscópicos N puede ser enorme, de modo que aproximar la carga como variable continua es práctico. No se interpreta como una negación de la cuantización. La conservación indica que la carga total de un sistema cerrado permanece constante: puede redistribuirse entre sus partes, pero no aparecer sin compensación.

### Conductores, aislantes y polarización

Un conductor permite movimiento de portadores en su interior. Un aislante limita ese movimiento macroscópico, pero puede deformar sus distribuciones internas de carga: esto es polarización. Un objeto neutro polarizado puede ser atraído por una carga cercana porque las contribuciones atractivas de la zona próxima y repulsivas de la lejana no tienen igual magnitud. Por eso «carga neta cero» no significa «incapaz de interacción eléctrica».

En equilibrio electrostático, el campo dentro del material de un conductor es cero: si hubiera campo, sus cargas libres seguirían redistribuyéndose. Esto no significa que los electrones estén inmóviles microscópicamente; significa ausencia de deriva neta. Tampoco vale para un alambre resistivo por el que circula corriente: ese régimen necesita un campo interno, que estudiaremos después.

La superficie conductora en equilibrio es equipotencial y el exceso de carga queda en superficies. Si hay una cavidad con una carga en su interior, también puede existir carga inducida en la pared interna. «Todo está en la superficie exterior» requiere condiciones adicionales, como cavidades vacías sin carga interna.

### Contacto y conexión a tierra

Al conectar conductores, las cargas se redistribuyen hasta igualar sus potenciales, no necesariamente sus cargas. Dos esferas idénticas, suficientemente alejadas y conectadas por un hilo fino, comparten por simetría la carga total por mitades. Si sus radios son diferentes, el resultado aproximado para esferas muy separadas es Q₁/R₁=Q₂/R₂, porque cada potencial es kQ/R. La conservación aporta Q₁+Q₂=Qtotal.

Ejemplo: esferas de radios R y 2R comparten 9 nC. Igualar potenciales exige Q₂=2Q₁ y conservar carga da Q₁=3 nC,Q₂=6 nC. Las densidades medias son Q/(4πR²), de modo que σ₁/σ₂=2. Si están próximas durante el contacto, la influencia mutua modifica el modelo de esferas aisladas: no debe venderse esa razón como exacta para cualquier geometría.

La Tierra funciona como un gran reservorio de carga cuyo potencial varía muy poco por las pequeñas transferencias del experimento. Conectar a tierra permite entrada o salida de electrones. No significa «la carga positiva siempre desaparece»: la dirección de transferencia depende del campo y de la situación.

### Inducción paso a paso

Acercá una barra positiva a una esfera metálica neutra aislada: electrones se desplazan hacia la zona próxima y queda déficit en la lejana; la carga neta de la esfera sigue siendo cero. Manteniendo la barra cerca, conectá la esfera a tierra: pueden entrar electrones, favorecidos por la barra positiva. Desconectá primero la tierra y después retirá la barra. La esfera conserva el exceso de electrones y queda negativa. Si se retira antes la barra mientras sigue a tierra, los electrones pueden regresar y el resultado final puede ser neutro. El orden de operaciones forma parte del problema.

En electrización por fricción dos cuerpos inicialmente neutros pueden quedar con +Q y −Q. No se crea carga: se separa. La cantidad transferida depende de materiales y condiciones. Los efectos piezoeléctrico y piroeléctrico describen polarización asociada a deformación o variación térmica en ciertos materiales; no se necesitan sus modelos microscópicos para aplicar Coulomb. Piroelectricidad se vincula con cambios de temperatura y polarización, sin exigir por definición un gradiente espacial de temperatura.

### Práctica y respuestas

**Q1.1.** Un cuerpo gana 2,5×10¹² electrones: carga final si era neutro. **Q1.2.** Dos esferas idénticas tienen +7 nC y −3 nC: carga final después de conectarlas en el modelo simétrico. **Q1.3.** ¿La atracción por una barra cargada demuestra que un objeto tiene carga neta opuesta? **Q1.4.** ¿Por qué se desconecta tierra antes de retirar la barra en inducción? **Q1.5.** Esferas lejanas de radios 2 cm y 6 cm comparten 20 nC: cargas y razón de densidades.

**Respuestas.** Q1.1: −4,0×10⁻⁷ C. Q1.2: total +4 nC, cada una +2 nC. Q1.3: no; podría estar neutro y polarizarse. Q1.4: para impedir que la carga intercambiada regrese al reservorio al retirar la influencia externa. Q1.5: 5 nC y 15 nC; σpequeña/σgrande=3. Las hipótesis geométricas justifican igualar kQ/R.


### Hoja de fórmulas del capítulo 1

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $Q=\sum_i q_i,\quad Q=Ne$ | Suma algebraica de cargas; N entero con signo en el modelo de cuantización de carga libre. e≈1,60×10⁻¹⁹ C. |
| $N_{\rm transferidos}=\lvert\Delta Q\rvert/e$ | Cantidad no negativa de electrones; ganar electrones reduce la carga neta, perderlos la aumenta. |
| $Q_1+Q_2=Q_{\rm total},\quad Q_1/R_1=Q_2/R_2$ | Esferas conductoras conectadas, muy separadas y sin influencias externas apreciables; igualan potencial, no necesariamente carga. |
| $\mathbf E_{\rm metal}=0,\quad V_{\rm metal}=\text{constante}$ | Solo equilibrio electrostático; no se aplica a un conductor resistivo con corriente sostenida. |

## Capítulo 2 · Ley de Coulomb y superposición de fuerzas

### Una ley vectorial para cargas puntuales

Dos cargas puntuales en reposo, separadas por r en el vacío, interactúan con módulo F=k|q₁q₂|/r². Se repelen si tienen igual signo y se atraen si tienen signos opuestos. La fuerza sobre cada una tiene igual módulo y sentido opuesto, aunque las cargas o las masas sean diferentes. Una carga triple no recibe una fuerza triple respecto de la otra: ambas pertenecen al mismo par de interacción.

La forma vectorial sobre una carga q situada en r, debida a qᵢ en rᵢ, es


$$
\mathbf F_i=kqq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}.
$$


El cubo aparece porque el numerador ya contiene una longitud: al tomar módulo se recupera 1/r². Esta versión usa cargas con signo. La versión escalar con valores absolutos exige decidir dirección y sentido aparte. Mezclar las dos convenciones puede introducir un signo doble.

El modelo puntual es razonable si las dimensiones de los cuerpos son pequeñas comparadas con su separación, o si una simetría esférica permite un resultado equivalente. Dos conductores próximos redistribuyen su carga: no basta tratarlos como puntos con cargas fijas si la polarización es relevante. La electrostática tampoco describe cambios instantáneos propagados a distancia; la teoría dinámica se retomará con Maxwell.

### Ejemplo de dos cargas y una distancia desconocida

q₁=+2 μC,q₂=−3 μC,r=0,30 m. El módulo es (9×10⁹)(6×10⁻¹²)/0,09=0,600 N. La interacción es atractiva. Si la distancia se duplica y las cargas permanecen iguales, el módulo pasa a 0,150 N. Si se busca r para una fuerza F, despejamos r=√(k|q₁q₂|/F), tomando la raíz positiva porque r es una distancia. El signo de las cargas no vuelve imaginaria la distancia: el módulo ya separó ese problema del sentido.

### Varias fuentes: suma por componentes

Para una carga en P, calculamos las fuerzas que cada otra carga ejerce sobre ella como si se considerara el par y luego las sumamos vectorialmente. No se multiplican entre sí todas las cargas. La superposición describe la fuerza para una distribución dada; si las fuentes pueden moverse, hay que determinar su nueva distribución antes de reutilizar los valores anteriores.

Ejemplo original: q=+1 μC en el origen; q₁=+2 μC en (0,30;0) m y q₂=−2 μC en (0;0,30) m. La primera repele a q hacia −x, con 0,200 N; la segunda la atrae hacia +y, también con 0,200 N. La resultante es (−0,200;0,200) N, módulo 0,200√2≈0,283 N y ángulo 135° desde +x. Si la carga central cambia a negativa, ambas fuerzas se invierten y el módulo permanece igual.

### Equilibrio con gravedad: no confundir carga con masa

Una esfera de masa m cuelga de una cuerda en un campo de fuerza horizontal eléctrica F. En equilibrio Tcosθ=mg y Tsinθ=F. Al dividir, tanθ=F/(mg). Si dos esferas de igual masa interactúan entre sí en una disposición simétrica, reciben fuerzas eléctricas de igual módulo aunque tengan cargas Q y 3Q; sus ángulos son iguales. Para relacionar la fuerza con la separación debe incorporarse la geometría del desplazamiento de ambas.

Si las cuerdas tienen longitud L y parten del mismo soporte, la separación es r=2Lsinθ. Para cargas iguales q, kq²/[4L²sin²θ]=mg tanθ. Por tanto q=2Lsinθ√(mg tanθ/k). Esta expresión no vale si la figura incluye una tercera carga central, otro soporte o separaciones diferentes. Antes de usar una fórmula de péndulos se reconstruye el diagrama de fuerzas del enunciado.

### Simetría y una fuente que falta

Ocho cargas idénticas en los vértices de un cubo producen campo y fuerza neta nulos en el centro por cancelación de pares opuestos. Si se retira una, la resultante de las siete restantes es el opuesto de la contribución que se quitó. No hace falta sumar siete vectores desde cero. Para un ion central negativo y vértices positivos, la contribución retirada apuntaba hacia ese vértice; la fuerza restante apunta en sentido opuesto a la vacancia.

La simetría permite hallar una fuerza nula, pero no demuestra estabilidad. Una pequeña perturbación puede producir una fuerza restauradora en una dirección y expulsiva en otra. En electrostática, el equilibrio de una carga libre entre fuentes fijas no se clasifica como estable en todo el espacio mirando un solo eje. En los ejemplos de una guía que restringen movimiento a una línea, se debe declarar esa restricción.

### Comparación con gravedad

Para dos partículas de masas m₁,m₂ y cargas q₁,q₂ a la misma distancia, Fe/Fg=k|q₁q₂|/(Gm₁m₂). La distancia se cancela porque ambas leyes tienen dependencia inversa cuadrática. Entre electrón y protón, el cociente es enorme, del orden de 10³⁹; la neutralidad macroscópica explica por qué eso no implica fuerzas eléctricas gigantes entre todos los objetos cotidianos. Esta comparación de modelos no reemplaza la descripción cuántica de un átomo.

### Práctica y respuestas

**C2.1.** Dos cargas de +1 μC separadas 10 cm: fuerza. **C2.2.** Si una carga se triplica y la distancia se duplica: factor de fuerza. **C2.3.** Una carga positiva recibe (3,0) N y (0,−4) N: resultante y módulo. **C2.4.** ¿Son diferentes las fuerzas del par +Q y +5Q? **C2.5.** Si m=0,010 kg,g=10 m/s² y F=0,100 N horizontal: θ y tensión.

**Respuestas.** C2.1: 0,900 N, repulsiva. C2.2: 3/4 de la inicial. C2.3: (3,−4) N, módulo 5 N. C2.4: iguales en módulo y opuestas en sentido; las aceleraciones pueden diferir si las masas difieren. C2.5: tanθ=1, θ=45°, T=0,100√2 N. Se comprueba sustituyendo en ambas ecuaciones de equilibrio.


### Hoja de fórmulas del capítulo 2

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F_i=kqq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuerza sobre q debida a qi puntual en reposo; cargas con signo, vacío y punto distinto de la fuente. k≈9×10⁹ N·m²/C². |
| $F=k\frac{\lvert q_1q_2\rvert}{r^2},\quad\mathbf F_{12}=-\mathbf F_{21}$ | Módulo no negativo; igual signo repele y opuesto atrae. No implica aceleraciones iguales si masas diferentes. |
| $\mathbf F_{\rm neta}=\sum_i\mathbf F_i$ | Suma vectorial para una distribución dada; excluir autofuerza singular de la carga observada. |
| $T\cos\theta=mg,\quad T\sin\theta=F_e$ | Péndulo en equilibrio con fuerza eléctrica horizontal; θ respecto de vertical. Geometría y otras fuerzas deben comprobarse. |
| $\frac{F_e}{F_g}=\frac{k\lvert q_1q_2\rvert}{Gm_1m_2}$ | Dos partículas a la misma distancia para ambas interacciones; el radio se cancela. |

## Capítulo 3 · Campo eléctrico, líneas y movimiento de cargas

### Separar el campo de la carga de prueba

El campo eléctrico se define operacionalmente por la fuerza por unidad de carga de prueba positiva suficientemente pequeña para no perturbar las fuentes. E=F/q₀ en ese límite. Una vez conocido E, la fuerza sobre una carga puntual q es F=qE. El campo no cambia de sentido porque el observador use una carga negativa; lo que cambia es la fuerza de esa carga.

Una carga fuente Q en el origen produce E=kQ r̂/r², r≠0. Para Q>0 apunta hacia afuera; para Q<0, hacia la carga. La singularidad en r=0 señala el límite del modelo puntual. Para varias fuentes, E es la suma vectorial de sus contribuciones. Su unidad N/C equivale a V/m, relación que veremos al conectar campo y potencial.

### Un cálculo en el plano

Dos cargas +Q están en (−a,0) y (a,0). En P=(0,y), cada distancia vale √(a²+y²). Las componentes horizontales se cancelan y las verticales se suman:


$$
\mathbf E(0,y)=\frac{2kQy}{(a^2+y^2)^{3/2}}\,\hat{\mathbf y}.
$$


Para y=0 el campo es cero; para y>0 apunta hacia arriba; para y<0, hacia abajo. No se reemplaza y por |y| si se quiere conservar la componente orientada. A gran distancia positiva, el resultado se aproxima a 2kQ/y², como una carga total 2Q. Para Q=1 nC,a=0,30 m,y=0,40 m, Eᵧ=57,6 N/C, usando k redondeada. Sobre un electrón la fuerza apunta hacia abajo y mide aproximadamente 9,22×10⁻¹⁸ N.

### Dónde puede anularse un campo

Con dos cargas del mismo signo, entre ellas los campos apuntan en sentidos opuestos y puede haber cancelación. Fuera del segmento apuntan igual y no se cancelan. Para +Q en x=0 y +4Q en x=d, en 0<x<d se exige kQ/x²=4kQ/(d−x)². Como ambas distancias son positivas, d−x=2x y x=d/3. El punto nulo queda más cerca de la carga menor.

Para signos opuestos, entre las cargas los campos apuntan en el mismo sentido y no hay cero. Si las magnitudes difieren, el cero puede aparecer fuera del segmento, del lado de la carga de menor módulo. Ejemplo: +Q en 0 y −4Q en d. En x<0, las distancias son −x y d−x. Igualar módulos da d−x=2(−x), de donde x=−d. Después se comprueban los sentidos y la región. Una raíz algebraica ubicada en la región equivocada no es solución física.

### Líneas de campo: qué muestran y qué no

La tangente a una línea indica la dirección de E y su flecha el sentido de la fuerza sobre una carga positiva. La densidad de líneas se elige proporcional a la intensidad de manera cualitativa; el número de trazos dibujados no es una cantidad física absoluta. En electrostática las líneas parten de cargas positivas y terminan en negativas o se prolongan al infinito. No se cruzan donde E está definido y es no nulo, porque allí habría dos direcciones para un mismo vector.

![Campo de un dipolo y contornos de potencial](/planos-de-estudio/img/fisica2/campo-dipolo.svg)

Una línea de campo no es necesariamente la trayectoria de una partícula. La velocidad inicial importa: una carga puede cruzar líneas mientras su aceleración apunta según la fuerza local. En un campo uniforme horizontal, una partícula con velocidad inicial vertical describe una parábola, no una recta paralela a E. Tampoco se dibuja una dirección única de línea en un punto nulo como si el versor E/|E| estuviera definido allí.

### Movimiento en un campo uniforme

Si E es uniforme, q y m constantes y no hay otras fuerzas relevantes, la aceleración es a=qE/m. Con entrada horizontal v₀ y campo vertical, x=v₀t e y=y₀+vᵧ₀t+(qEᵧ/2m)t². Para una región de longitud L, el tiempo dentro es L/v₀ si no hay aceleración horizontal. Al salir, sin campo, la partícula sigue con la velocidad que adquirió: una pantalla posterior exige agregar ese tramo de movimiento libre.

Ejemplo: m=2,0×10⁻⁹ kg,q=+1,0×10⁻¹² C,Eᵧ=1,0×10⁴ N/C,v₀=20 m/s,L=0,020 m. La aceleración es 5 m/s² y el tiempo 0,001 s. La desviación dentro de las placas es 2,5×10⁻⁶ m y la velocidad vertical de salida 0,005 m/s. Una pantalla a 0,10 m adicionales se alcanza en 0,005 s y agrega 2,5×10⁻⁵ m de desviación, mucho más que el tramo acelerado. Esto muestra por qué debe distinguirse «al extremo de las placas» de «en la pantalla».

### Práctica y respuestas

**E3.1.** Q=−2 nC en el origen: E en (0,30;0) m. **E3.2.** Carga q=−3 μC en E=(200,−100) N/C: fuerza. **E3.3.** +Q en 0 y +9Q en d: punto nulo. **E3.4.** ¿Puede haber campo sin colocar una carga de prueba? **E3.5.** Un campo uniforme ¿produce la misma aceleración en todas las partículas?

**Respuestas.** E3.1: (−200,0) N/C. E3.2: (−6×10⁻⁴,3×10⁻⁴) N. E3.3: x=d/4 entre ambas. E3.4: sí; la carga de prueba es un procedimiento de detección y definición, no un requisito para que las fuentes produzcan campo. E3.5: no; a depende de q/m y otras fuerzas, aunque E sea el mismo.


### Hoja de fórmulas del capítulo 3

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf E=\lim_{q_0\to0}\mathbf F/q_0,\quad\mathbf F=q\mathbf E$ | Carga de prueba que no perturba fuentes; q puntual y E externo. E en N/C=V/m. |
| $\mathbf E(\mathbf r)=k\sum_iq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuentes puntuales electrostáticas; conservar signos y sumar componentes, no módulos. |
| $\mathbf a=q\mathbf E/m$ | E uniforme, q y m constantes, sin otras fuerzas relevantes; cinemática no relativista. |
| $x=v_0t,\quad y-y_0=v_{y0}t+\frac{qE_y}{2m}t^2$ | Campo vertical uniforme, aceleración horizontal nula y origen temporal en la entrada. Tiempo en placas t=L/v0. |
| $E_y(0,y)=\frac{2kQy}{(a^2+y^2)^{3/2}}$ | Dos cargas +Q en (±a,0); componente orientada sobre mediatriz. No es la fórmula de dipolo de signos opuestos. |

## Formulario de la Unidad 1 · Interacción eléctrica

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 0 · Herramientas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf R_i=\mathbf r-\mathbf r_i,\quad\hat{\mathbf R}_i=\mathbf R_i/\lVert\mathbf R_i\rVert$ | r es observador y ri fuente; Ri≠0 para definir el versor. Distancias en m. |
| $\mathbf A\cdot\mathbf B=AB\cos\theta,\quad\lVert\mathbf A\times\mathbf B\rVert=AB\sin\theta$ | θ entre los vectores; el vectorial sigue mano derecha y cambia signo al invertir orden. |
| $1\,\mu\mathrm C=10^{-6}\,\mathrm C,\quad1\,\mathrm{nC}=10^{-9}\,\mathrm C,\quad1\,\mathrm{pF}=10^{-12}\,\mathrm F$ | En áreas y volúmenes elevar también el factor de longitud al cuadrado o cubo. |
| $\lambda=dq/dl,\quad\sigma=dq/dA,\quad\rho=dq/d\mathcal V$ | Densidades de carga en C/m, C/m² y C/m³. Uniformidad debe declararse antes de sustituir Q/medida. |

### Capítulo 1 · Carga y materiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $Q=\sum_i q_i,\quad Q=Ne$ | Suma algebraica de cargas; N entero con signo en el modelo de cuantización de carga libre. e≈1,60×10⁻¹⁹ C. |
| $N_{\rm transferidos}=\lvert\Delta Q\rvert/e$ | Cantidad no negativa de electrones; ganar electrones reduce la carga neta, perderlos la aumenta. |
| $Q_1+Q_2=Q_{\rm total},\quad Q_1/R_1=Q_2/R_2$ | Esferas conductoras conectadas, muy separadas y sin influencias externas apreciables; igualan potencial, no necesariamente carga. |
| $\mathbf E_{\rm metal}=0,\quad V_{\rm metal}=\text{constante}$ | Solo equilibrio electrostático; no se aplica a un conductor resistivo con corriente sostenida. |

### Capítulo 2 · Coulomb y fuerzas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F_i=kqq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuerza sobre q debida a qi puntual en reposo; cargas con signo, vacío y punto distinto de la fuente. k≈9×10⁹ N·m²/C². |
| $F=k\frac{\lvert q_1q_2\rvert}{r^2},\quad\mathbf F_{12}=-\mathbf F_{21}$ | Módulo no negativo; igual signo repele y opuesto atrae. No implica aceleraciones iguales si masas diferentes. |
| $\mathbf F_{\rm neta}=\sum_i\mathbf F_i$ | Suma vectorial para una distribución dada; excluir autofuerza singular de la carga observada. |
| $T\cos\theta=mg,\quad T\sin\theta=F_e$ | Péndulo en equilibrio con fuerza eléctrica horizontal; θ respecto de vertical. Geometría y otras fuerzas deben comprobarse. |
| $\frac{F_e}{F_g}=\frac{k\lvert q_1q_2\rvert}{Gm_1m_2}$ | Dos partículas a la misma distancia para ambas interacciones; el radio se cancela. |

### Capítulo 3 · Campo eléctrico

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf E=\lim_{q_0\to0}\mathbf F/q_0,\quad\mathbf F=q\mathbf E$ | Carga de prueba que no perturba fuentes; q puntual y E externo. E en N/C=V/m. |
| $\mathbf E(\mathbf r)=k\sum_iq_i\frac{\mathbf r-\mathbf r_i}{\lVert\mathbf r-\mathbf r_i\rVert^3}$ | Fuentes puntuales electrostáticas; conservar signos y sumar componentes, no módulos. |
| $\mathbf a=q\mathbf E/m$ | E uniforme, q y m constantes, sin otras fuerzas relevantes; cinemática no relativista. |
| $x=v_0t,\quad y-y_0=v_{y0}t+\frac{qE_y}{2m}t^2$ | Campo vertical uniforme, aceleración horizontal nula y origen temporal en la entrada. Tiempo en placas t=L/v0. |
| $E_y(0,y)=\frac{2kQy}{(a^2+y^2)^{3/2}}$ | Dos cargas +Q en (±a,0); componente orientada sobre mediatriz. No es la fórmula de dipolo de signos opuestos. |

## Capítulo 4 · Potencial, energía y trabajo eléctrico

### Dos magnitudes que no son intercambiables

El potencial V es una propiedad del campo de las fuentes y del punto de observación, una vez elegida una referencia. La energía potencial U=qV describe la interacción de una carga q con esas fuentes fijas. V se mide en J/C=volt y U en joule. Una carga negativa puede tener U negativa donde V es positivo. Un valor negativo de energía no significa una energía cinética negativa: son magnitudes con significados distintos.

En electrostática, el trabajo del campo al mover q desde A hasta B es Wcampo=−ΔU=q(VA−VB). Si una fuerza externa la mueve lentamente, sin cambio de energía cinética, su trabajo es Wexterno=ΔU. Si intervienen otras fuerzas o cambia la velocidad, hace falta usar Wtotal=ΔK. La frase «trabajo necesario» debe aclarar cuál fuerza realiza el trabajo y bajo qué proceso.

La diferencia de potencial se obtiene de


$$
V_B-V_A=-\int_A^B\mathbf E\cdot d\mathbf l.
$$


El signo menos indica que el potencial disminuye en la dirección del campo. En un campo uniforme, ΔV=−E·(rB−rA). La expresión −Ed exige desplazamiento paralelo y del mismo sentido que E, con d positivo. Si el desplazamiento es perpendicular, ΔV=0 aunque la distancia recorrida no sea cero.

### Potencial de cargas puntuales y referencia

Tomando V→0 al alejarnos al infinito de una distribución localizada, una carga puntual produce V=kQ/r. Al ser escalar, las contribuciones se suman algebraicamente: V(P)=kΣQi/ri. Para dos cargas +Q iguales, en su punto medio el campo puede ser cero mientras el potencial es positivo. Para un dipolo, en la mediatriz V=0 pero E generalmente no es cero. Son contraejemplos a las afirmaciones E=0⇒V=0 y V=0⇒E=0.

Cambiar V por V+C no altera E ni diferencias de potencial. Cambia U por qC para una carga fija, pero no su variación entre puntos. Un potencial cero no indica por sí mismo ausencia de fuentes. Además, en distribuciones infinitas puede no existir una referencia finita V(∞)=0; el hilo infinito requerirá fijar V en una distancia finita.

### Energía de un sistema de varias cargas

Para armar un conjunto de cargas puntuales trayéndolas desde infinito, U=kΣᵢ<ⱼ QiQj/rij. Cada par se cuenta una sola vez. Con tres cargas +q en un triángulo equilátero de lado a, U=3kq²/a. Si una cambia a −q, hay dos pares atractivos y uno repulsivo: U=−kq²/a. No se suma qᵢVtotal sin excluir el propio campo, ni se cuentan todos los pares dos veces.

Ejemplo: dos cargas de +1 nC están separadas 0,20 m y se lleva una tercera de −2 nC al punto medio. El potencial externo allí es 2k·10⁻⁹/0,10=180 V. El trabajo externo cuasiestático de traer la tercera es qV=−3,60×10⁻⁷ J: el agente debe retirar energía, no aportarla. La energía inicial del par es 4,50×10⁻⁸ J, así que la final de las tres es −3,15×10⁻⁷ J. La diferencia coincide con el trabajo calculado.

### Rapidez adquirida y región accesible

Si solo actúa la fuerza eléctrica, Kf−Ki=−qΔV. Desde reposo, vf=√(−2qΔV/m), pero únicamente si −qΔV≥0 y si el movimiento puede alcanzar el punto por la dinámica y geometría. Para una carga positiva que atraviesa una caída de potencial de 100 V, ΔK=q·100 V. Un electrón gana energía al ir hacia mayor potencial, porque su carga es negativa.

Un electrón acelerado desde reposo por una diferencia favorable de 200 V gana 200 eV=3,20×10⁻¹⁷ J y alcanza aproximadamente 8,38×10⁶ m/s en el modelo no relativista. Un electronvolt es una unidad de energía, no de potencial: 1 eV=e·1 V≈1,60×10⁻¹⁹ J. Para energías comparables con mc², la fórmula clásica K=mv²/2 deja de ser adecuada.

**Chequeo de una consigna de la práctica 3.** Su problema 8 libera una carga negativa desde reposo en E hacia +x y luego pregunta por x=+4 m. Con solo esa fuerza, la carga acelera hacia −x y no alcanza +4 m. Se puede calcular formalmente ΔV=−800 V y ΔU=+2,4 mJ para llevarla a ese punto, pero desde reposo eso exigiría ΔK negativa: no hay rapidez final real bajo las hipótesis dadas. Para estudiar movimiento libre habría que usar un punto hacia −x, cambiar el signo de la carga o agregar velocidad inicial o trabajo externo. Identificar una incompatibilidad es parte de resolver, no un motivo para tomar el valor absoluto dentro de una raíz sin explicación.

### Campo desde el potencial y equipotenciales

En electrostática E=−∇V: Eₓ=−∂V/∂x y análogamente para y,z. Para V=Ax²+By, E=(−2Ax,−B,0), con las unidades de A y B ajustadas a V/m² y V/m. Una superficie equipotencial tiene V constante. El campo, donde es no nulo, es normal a esa superficie porque toda derivada tangencial de V es cero. La intensidad no tiene por qué ser uniforme sobre una equipotencial.

### Práctica y respuestas

**P4.1.** q=−2 μC pasa de VA=10 V a VB=40 V: ΔU y Wcampo. **P4.2.** E=(300,0) V/m y desplazamiento (0,20;0,10) m: ΔV. **P4.3.** Tres cargas +2 nC forman un triángulo equilátero de 0,30 m: U. **P4.4.** V=5x²−3y con coeficientes en SI: E en (2,1). **P4.5.** ¿Qué cambia al sumar 50 V al potencial en todos los puntos?

**Respuestas.** P4.1: −60 μJ y +60 μJ. P4.2: −60 V. P4.3: 3,60×10⁻⁷ J, contando tres pares. P4.4: (−20,3) V/m. P4.5: cambia la referencia, pero no E, ΔV ni ΔU de una carga fija entre dos puntos.


### Hoja de fórmulas del capítulo 4

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Delta V=-\int_A^B\mathbf E\cdot d\mathbf l,\quad\Delta U=q\Delta V$ | Electrostática y carga q fija; Δ significa final menos inicial. V en J/C y U en J. |
| $W_{\rm campo}=-\Delta U,\quad W_{\rm ext,cuasiestatico}=\Delta U$ | Segunda igualdad sin cambio cinético y sin otras contribuciones de trabajo; identificar quién realiza el trabajo. |
| $V=k\sum_iQ_i/r_i,\quad U_{\rm sistema}=k\sum_{i<j}Q_iQ_j/r_{ij}$ | Fuentes puntuales localizadas con referencia cero en infinito; energía cuenta cada par una vez. |
| $\mathbf E=-\nabla V,\quad E_x=-\partial V/\partial x$ | Campo electrostático en la región; un valor V=0 no implica gradiente cero ni campo nulo. |
| $\Delta K=-q\Delta V,\quad v_f^2=v_i^2-2q\Delta V/m$ | Solo trabajo eléctrico y régimen no relativista; lado derecho no negativo y punto dinámicamente accesible. |
| $1\,\mathrm{eV}\approx1{,}60\times10^{-19}\,\mathrm J$ | Unidad de energía: carga elemental multiplicada por un volt, no unidad de potencial. |

## Capítulo 5 · El dipolo eléctrico: campo, potencial y torque

### Un sistema neutro que produce campo

Un dipolo idealizado de tamaño finito contiene +q y −q separados por una distancia d. Su carga neta es cero, pero sus campos no se anulan en todo el espacio porque las fuentes ocupan posiciones distintas. El momento dipolar p=q d, con d vector desde la carga negativa a la positiva, se mide en C·m. Invertir las cargas invierte p.

Tomemos −q en x=−a y +q en x=+a, de modo que d=2a y p=2qa i. El potencial exacto en un punto P es V=kq/r₊−kq/r₋, donde r₊ y r₋ son las distancias positivas a las respectivas fuentes. Este planteo evita errores al usar fórmulas de ejes fuera de la región para la que fueron deducidas.

### Sobre el eje y sobre la mediatriz

En el eje, para x>a, las distancias son x−a y x+a. Entonces V=kq[1/(x−a)−1/(x+a)]=2kqa/(x²−a²). Derivando con signo menos, Eₓ=4kqax/(x²−a²)², positivo para ese tramo. Para −a<x<a, las distancias son a−x y x+a: V=kq[1/(a−x)−1/(x+a)]. No se puede reutilizar la fórmula exterior sin revisar los valores absolutos. En x=±a el modelo puntual es singular.

En P=(0,y), ambas distancias son iguales y el potencial es exactamente cero. Las componentes verticales de E se cancelan, pero las horizontales se suman hacia −x:


$$
\mathbf E(0,y)=-\frac{2kqa}{(a^2+y^2)^{3/2}}\,\hat{\mathbf x}.
$$


El campo en la mediatriz es opuesto a p. Que V sea cero en toda esa recta no implica que todas las derivadas espaciales de V sean cero: solo la derivada a lo largo de ella es nula. La variación perpendicular produce el campo horizontal.

### Aproximación de dipolo lejano

Cuando la distancia r al centro es mucho mayor que d, los resultados se simplifican:


$$
V(\mathbf r)\approx k\frac{\mathbf p\cdot\hat{\mathbf r}}{r^2},\qquad
\mathbf E(\mathbf r)\approx\frac{k}{r^3}[3(\mathbf p\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf p].
$$


Sobre el eje lejano el módulo es aproximadamente 2kp/r³ y sobre la mediatriz kp/r³. El campo decae como 1/r³, más rápido que el 1/r² de una carga neta no nula. La aproximación no es adecuada cerca de las cargas; allí se usa superposición exacta. En un dibujo hay que aclarar si r se mide desde el centro o desde una de las fuentes.

Ejemplo: q=2 nC,d=4 mm, de modo que p=8×10⁻¹² C·m. En un punto axial a 0,10 m del centro, el campo aproximado es 144 N/C; en un punto ecuatorial a la misma distancia mide 72 N/C y apunta contra p. El tamaño relativo d/r=0,04 permite esperar una aproximación razonable, que puede contrastarse con las distancias exactas a ±2 mm. No es correcto usar 4 mm como a: a es la mitad de la separación.

### Dipolo en un campo externo uniforme

Cada carga recibe ±qE. Si E es exactamente el mismo en ambas posiciones, la fuerza neta es cero, pero las fuerzas pueden formar un par. El torque es τ=p×E, módulo pE sinθ, con θ entre p y E. No se calcula como qE·d sin especificar el brazo perpendicular. La energía potencial de orientación, con una referencia convencional, es U=−p·E=−pEcosθ.

El equilibrio alineado θ=0 es de energía mínima y estable respecto de pequeñas rotaciones; el antialineado θ=π es de energía máxima y rotacionalmente inestable. En ambos el torque instantáneo es cero, así que «no hay torque» no basta para distinguir estabilidad. Si el campo no es uniforme, las fuerzas sobre las dos cargas pueden tener módulos distintos y aparece fuerza neta además de torque.

Ejemplo: p=3,0×10⁻⁸ C·m,E=2,0×10⁴ N/C,θ=30°. El torque mide 3,0×10⁻⁴ N·m y U=−3√3×10⁻⁴ J≈−5,20×10⁻⁴ J. Girarlo cuasiestáticamente desde alineación a antialineación requiere trabajo externo ΔU=2pE=1,20×10⁻³ J. El trabajo del campo en ese mismo proceso es su opuesto.

### Modelos moleculares y sus límites

Una molécula polar puede tener momento permanente sin poseer carga neta. Las posiciones nucleares y una transferencia de electrones supuesta permiten construir un modelo de cargas puntuales, pero no describen exactamente una distribución electrónica cuántica. Si el momento experimental difiere del estimado por «transferencia completa», no se corrige arbitrariamente el dato: se reconoce que la hipótesis de cargas efectivas era idealizada. En una molécula de agua simétrica, las componentes laterales de los dos dipolos de enlace se cancelan y las componentes sobre la bisectriz se suman.

### Práctica y respuestas

**D5.1.** ±5 nC separados 2 mm: módulo de p. **D5.2.** Para ese dipolo, campo axial lejano a 0,20 m. **D5.3.** Un dipolo está a 90° de E: torque y energía. **D5.4.** ¿Hay fuerza neta en E uniforme? **D5.5.** ¿Por qué V=0 sobre la mediatriz no implica E=0?

**Respuestas.** D5.1: 1,0×10⁻¹¹ C·m. D5.2: 22,5 N/C aproximadamente, con dirección axial según la fórmula vectorial. D5.3: torque máximo pE, energía cero con la referencia elegida. D5.4: no para cargas ±q en un campo externo uniforme, aunque puede haber torque. D5.5: el potencial varía al desplazarse perpendicularmente a la mediatriz; el gradiente completo no se determina con la variación en una única recta.


### Hoja de fórmulas del capítulo 5

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf p=q\mathbf d$ | q>0 módulo y d desde carga negativa a positiva; p en C·m. |
| $V=kq(1/r_+-1/r_-)$ | Dipolo finito ±q; distancias positivas a cada fuente. Fórmula exacta fuera de las fuentes. |
| $\mathbf E_{\rm mediatriz}=-\frac{2kqa}{(a^2+y^2)^{3/2}}\hat{\mathbf x}$ | −q en x=−a,+q en x=+a, punto (0,y); V=0 allí con referencia en infinito. |
| $V\approx k\frac{\mathbf p\cdot\hat r}{r^2},\quad\mathbf E\approx\frac{k}{r^3}[3(\mathbf p\cdot\hat r)\hat r-\mathbf p]$ | Aproximación lejana: r mucho mayor que la separación, desde el centro del dipolo. |
| $\boldsymbol\tau=\mathbf p\times\mathbf E,\quad U=-\mathbf p\cdot\mathbf E$ | Campo externo uniforme sobre ambas cargas; fuerza neta cero, posible torque. Alineado: energía mínima. |

## Capítulo 6 · Distribuciones continuas: varillas, hilos y anillos

### De sumar partículas a integrar carga

Cuando las separaciones microscópicas son pequeñas frente a la escala del problema, se modela una distribución continua. La densidad lineal λ=dq/dl se mide en C/m, la superficial σ en C/m² y la volumétrica ρ en C/m³. Si son uniformes, Q=λL, Q=σA o Q=ρ𝒱. Si varían con la posición, se integra: por ejemplo λ(s)=αs en 0≤s≤L da Q=αL²/2, no λ(L)L.

Cada elemento produce dV=k dq/R y dE=k dq R̂/R². La integración escalar del potencial suele ser más sencilla, pero la referencia debe ser posible y se debe poder derivar el resultado en la región de interés. Al integrar directamente E, primero proyectá cada contribución y después sumá. Integrar módulos y poner una dirección al final solo es válido si todas las contribuciones tienen esa misma dirección.

### Varilla observada desde la prolongación de su eje

Una varilla uniforme ocupa 0≤s≤L sobre z. Para un punto z>L, la distancia a dq=λds es z−s. Con V(∞)=0,


$$
V(z)=k\lambda\int_0^L\frac{ds}{z-s}=k\lambda\ln\frac z{z-L}.
$$


El argumento del logaritmo es una razón adimensional. Derivar da E_z=−dV/dz=kλ[1/(z−L)−1/z]=kQ/[z(z−L)], positivo si Q>0. Lejos, z≫L, se aproxima a kQ/z². Cerca del extremo idealizado el campo diverge; un radio finito de varilla regularizaría ese modelo.

Para trasladar una carga q lentamente desde z=4L hasta z=2L, Wexterno=q[V(2L)−V(4L)]=kqλ ln(3/2). Es positivo si qλ>0, porque se acerca una carga al extremo de igual signo. No se puede usar una fórmula de carga puntual midiendo desde el centro salvo como aproximación lejana.

### Punto sobre la mediatriz de una varilla finita

Una varilla ocupa −a≤y≤a y P está en (x,0), x>0. Por simetría Eᵧ=0. Para un elemento λdy, R=√(x²+y²), y la proyección horizontal agrega x/R:


$$
E_x=k\lambda\int_{-a}^{a}\frac{x\,dy}{(x^2+y^2)^{3/2}}
=\frac{2k\lambda a}{x\sqrt{x^2+a^2}}=\frac{kQ}{x\sqrt{x^2+a^2}}.
$$


Si x≫a, E≈kQ/x². Si a≫x manteniendo λ fija, E≈2kλ/x. Las dos aproximaciones responden a geometrías diferentes: un objeto pequeño observado lejos y un hilo muy largo observado cerca de su zona central. No se toman ambos límites a la vez sin especificar qué parámetros permanecen fijos.

### Hilo infinito y referencia de potencial

El límite anterior da Eᵣ=λ/(2πε₀r). Integrando entre una referencia r₀>0 y r,


$$
V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon_0}\ln\frac r{r_0}.
$$


No se puede elegir V(∞)=0 con un valor finito de referencia porque el logaritmo diverge. Sí se pueden calcular diferencias entre dos distancias finitas. Para λ=1 nC/m, pasar de r₀ a 2r₀ produce ΔV=−18 ln2≈−12,5 V con k redondeada. El campo disminuye como 1/r, aunque el potencial no tenga un cero natural en infinito.

### Anillo: aprovechar una distancia común

Un anillo de radio a y carga uniforme Q produce, en un punto de su eje a distancia x del centro, contribuciones a igual distancia R=√(x²+a²). El potencial se obtiene sin proyecciones: V=kQ/R. Para el campo se cancelan componentes transversales y queda


$$
E_x=\frac{kQx}{(x^2+a^2)^{3/2}}.
$$


En x=0, E=0 pero V=kQ/a. Lejos se recupera carga puntual. El campo axial positivo es máximo cuando x=a/√2, para Q>0: al derivarlo aparece el factor a²−2x². Este máximo ilustra que alejarse del centro inicialmente aumenta el campo, aunque cada contribución individual se debilite: al principio mejora su proyección axial.

### Práctica y respuestas

**S6.1.** λ(s)=2×10⁻⁶s C/m, s en m, entre 0 y 0,50 m: Q. **S6.2.** Anillo Q=1 nC,a=0,30 m,x=0,40 m: V y Eₓ. **S6.3.** Hilo λ=2 nC/m: ΔV al duplicar distancia. **S6.4.** ¿Por qué un dq de varilla no tiene siempre la misma distancia a P? **S6.5.** ¿Qué valor tiene V en el centro del anillo anterior?

**Respuestas.** S6.1: 2,5×10⁻⁷ C por integración. S6.2: R=0,50 m,V=18 V,Eₓ=28,8 N/C. S6.3: −36ln2 V≈−25,0 V. S6.4: los elementos ocupan posiciones distintas; esa variación debe estar en R(s). S6.5: 30 V, aunque el campo central sea cero. La práctica de distribuciones continuas del aula incluye estas geometrías y pide justificar sus límites.


### Hoja de fórmulas del capítulo 6

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $dV=k\,dq/R,\quad d\mathbf E=k\,dq\,\hat R/R^2$ | R desde cada elemento fuente hasta observador; integrar con densidad y dominio geométrico correctos. |
| $V(z)=k\lambda\ln\frac z{z-L},\quad E_z=\frac{kQ}{z(z-L)}$ | Varilla uniforme 0≤s≤L,z>L,Q=λL; referencia V(∞)=0. |
| $E_x=\frac{kQ}{x\sqrt{x^2+a^2}}$ | Varilla uniforme de longitud 2a, observador en mediatriz a distancia x>0. Q=2aλ. |
| $E_r=\frac{\lambda}{2\pi\varepsilon_0r},\quad V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon_0}\ln\frac r{r_0}$ | Hilo infinito uniforme, r,r0>0. No permite cero finito en infinito; Er usa λ con signo. |
| $V=\frac{kQ}{\sqrt{x^2+a^2}},\quad E_x=\frac{kQx}{(x^2+a^2)^{3/2}}$ | Anillo uniforme de radio a, sobre su eje a distancia orientada x. V(∞)=0. |

## Capítulo 7 · Discos, planos y superposición por simetría

### Construir un disco con anillos

Un disco plano de radio R y densidad uniforme σ puede descomponerse en anillos concéntricos de radio s y ancho ds. El área de cada anillo es 2πs ds, por lo que dq=2πσs ds. No es πs²ds: πs² es un área acumulada, y su diferencial es 2πs ds.

Para un punto del eje a distancia x del plano, el potencial con cero en infinito es


$$
V(x)=2\pi k\sigma\int_0^R\frac{s\,ds}{\sqrt{x^2+s^2}}
=2\pi k\sigma\big(\sqrt{x^2+R^2}-|x|\big).
$$


El valor absoluto conserva la simetría entre ambos lados. Para x>0, derivar da Eₓ=2πkσ[1−x/√(x²+R²)]. Para x<0 el campo invierte el sentido y tiene igual módulo a igual distancia. En una lámina ideal de espesor nulo, el campo presenta un salto al cruzar el plano cargado; no se asigna una única derivada de |x| en cero como si fuera una función suave.

### Límites cercano y lejano

Para x>0 y x≪R, x/√(x²+R²)≈0 y Eₓ≈σ/(2ε₀). La región central de un disco muy grande se aproxima a un plano infinito. Para x≫R, la diferencia 1−x/√(x²+R²) es pequeña; expandiendo o racionalizando se obtiene Eₓ≈kπR²σ/x²=kQ/x². El resultado lejano respeta la carga total.

No se debe aproximar ambas raíces por x y concluir que V=0 o E=0 exactamente: al restar términos casi iguales se debe conservar el primer término no nulo. Para potencial, racionalizar √(x²+R²)−x=R²/[√(x²+R²)+x] muestra V≈kQ/x. Este procedimiento evita una cancelación prematura que borraría toda la contribución física.

### Plano infinito y dos lados

Un plano ideal infinito con densidad superficial total σ produce campo perpendicular de módulo |σ|/(2ε₀) a cada lado. Para σ>0 se aleja del plano; para σ<0 se dirige hacia él. El campo no disminuye con distancia en ese modelo porque al alejarse participan regiones cada vez más extensas de la distribución infinita. Un plano real solo se aproxima a ese comportamiento lejos de los bordes y a distancias pequeñas comparadas con sus dimensiones.

Si el plano está en x=0, una elección de referencia es V(0)=0 y V(x)=−σ|x|/(2ε₀). El potencial no puede fijarse cero en infinito. Su pendiente es opuesta al campo de cada lado. E uniforme por tramos no significa un único vector constante en todo el espacio: a través del plano se invierte la dirección.

### Dos planos: una tabla de regiones

Colocá un plano de densidad σ₁ en x=0 y otro σ₂ en x=d>0. Definimos Eₓ positiva hacia +x. A la izquierda de ambos, Eₓ=−(σ₁+σ₂)/(2ε₀). Entre ellos, Eₓ=(σ₁−σ₂)/(2ε₀). A la derecha, Eₓ=(σ₁+σ₂)/(2ε₀). Estas expresiones usan densidades con signo y se deducen sumando las contribuciones de cada plano en cada región.

Si σ₁=+σ y σ₂=−σ, el campo exterior es cero y el interior σ/ε₀ hacia la placa negativa. La diferencia V(d)−V(0)=−σd/ε₀. Si ambas son +σ, el campo interior es cero, el potencial allí constante y los exteriores tienen módulos σ/ε₀ alejándose del conjunto. Si la placa derecha tiene −2σ, el campo interior es 3σ/(2ε₀), mientras fuera no se anula. No se conserva el resultado «cero afuera» cuando se rompe la neutralidad de placas iguales y opuestas.

### Plano conductor y densidad de una cara

Hay dos expresiones que suelen confundirse: σ/(2ε₀) para una lámina ideal con densidad total repartida en el modelo de plano, y σcara/ε₀ justo fuera de una superficie conductora en equilibrio, donde σcara es la densidad de esa cara concreta. En una placa conductora aislada simétrica, la carga total por área se divide en dos caras, cada una con mitad, y ambas expresiones concuerdan. Entre dos placas conductoras opuestas grandes, la carga se concentra idealmente en las caras enfrentadas y el campo interior es σcara/ε₀.

Declarar qué σ se utiliza evita un factor dos incorrecto. Una fórmula sin describir la superficie sobre la que se distribuye la carga queda incompleta.

### Práctica y respuestas

**S7.1.** Un disco tiene σ=4ε₀ N/C y R=0,30 m: E a x=0,40 m. **S7.2.** Dos planos con +σ y −σ a distancia d: ΔV de izquierda a derecha entre ambos. **S7.3.** Dos planos +σ iguales: campo interior. **S7.4.** ¿Es válido V(∞)=0 para un plano infinito? **S7.5.** Si una placa real tiene lado L, ¿qué condiciones favorecen aproximarla por plano infinito?

**Respuestas.** S7.1: el cociente x/√(x²+R²)=0,8 y Eₓ=(σ/2ε₀)·0,2=0,4 N/C. La escritura del dato significa σ/(ε₀)=4 N/C. S7.2: −σd/ε₀, con +σ a la izquierda. S7.3: cero por cancelación, sin que eso implique potencial cero. S7.4: no, la diferencia crece sin cota al alejarse. S7.5: observar cerca de la zona central y a distancias mucho menores que L; los bordes deben tener influencia pequeña.


### Hoja de fórmulas del capítulo 7

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V(x)=2\pi k\sigma(\sqrt{x^2+R^2}-\lvert x\rvert)$ | Disco uniforme de radio R; punto axial, cero en infinito. No omitir el valor absoluto entre ambos lados. |
| $E_x=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right)$ | Mismo disco, solo x>0; al otro lado cambia el sentido. En lámina ideal el campo salta en el plano. |
| $E=\frac{\lvert\sigma\rvert}{2\varepsilon_0}$ | Plano infinito con densidad total σ; saliente si σ>0. No confundir con densidad de una cara conductora. |
| $E_x=\frac{\sigma_1-\sigma_2}{2\varepsilon_0}$ | Entre dos planos infinitos en x=0 y x=d>0; densidades con signo. Exterior izquierdo: −(σ1+σ2)/(2ε0), derecho: +(σ1+σ2)/(2ε0). |
| $E=\sigma/\varepsilon_0,\quad V(d)-V(0)=-\sigma d/\varepsilon_0$ | Dos planos +σ a izquierda y −σ a derecha; campo exterior nulo en modelo ideal. |

## Formulario de la Unidad 2 · Potencial y distribuciones continuas

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 4 · Potencial y energía

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Delta V=-\int_A^B\mathbf E\cdot d\mathbf l,\quad\Delta U=q\Delta V$ | Electrostática y carga q fija; Δ significa final menos inicial. V en J/C y U en J. |
| $W_{\rm campo}=-\Delta U,\quad W_{\rm ext,cuasiestatico}=\Delta U$ | Segunda igualdad sin cambio cinético y sin otras contribuciones de trabajo; identificar quién realiza el trabajo. |
| $V=k\sum_iQ_i/r_i,\quad U_{\rm sistema}=k\sum_{i<j}Q_iQ_j/r_{ij}$ | Fuentes puntuales localizadas con referencia cero en infinito; energía cuenta cada par una vez. |
| $\mathbf E=-\nabla V,\quad E_x=-\partial V/\partial x$ | Campo electrostático en la región; un valor V=0 no implica gradiente cero ni campo nulo. |
| $\Delta K=-q\Delta V,\quad v_f^2=v_i^2-2q\Delta V/m$ | Solo trabajo eléctrico y régimen no relativista; lado derecho no negativo y punto dinámicamente accesible. |
| $1\,\mathrm{eV}\approx1{,}60\times10^{-19}\,\mathrm J$ | Unidad de energía: carga elemental multiplicada por un volt, no unidad de potencial. |

### Capítulo 5 · Dipolo eléctrico

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf p=q\mathbf d$ | q>0 módulo y d desde carga negativa a positiva; p en C·m. |
| $V=kq(1/r_+-1/r_-)$ | Dipolo finito ±q; distancias positivas a cada fuente. Fórmula exacta fuera de las fuentes. |
| $\mathbf E_{\rm mediatriz}=-\frac{2kqa}{(a^2+y^2)^{3/2}}\hat{\mathbf x}$ | −q en x=−a,+q en x=+a, punto (0,y); V=0 allí con referencia en infinito. |
| $V\approx k\frac{\mathbf p\cdot\hat r}{r^2},\quad\mathbf E\approx\frac{k}{r^3}[3(\mathbf p\cdot\hat r)\hat r-\mathbf p]$ | Aproximación lejana: r mucho mayor que la separación, desde el centro del dipolo. |
| $\boldsymbol\tau=\mathbf p\times\mathbf E,\quad U=-\mathbf p\cdot\mathbf E$ | Campo externo uniforme sobre ambas cargas; fuerza neta cero, posible torque. Alineado: energía mínima. |

### Capítulo 6 · Varillas y anillos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $dV=k\,dq/R,\quad d\mathbf E=k\,dq\,\hat R/R^2$ | R desde cada elemento fuente hasta observador; integrar con densidad y dominio geométrico correctos. |
| $V(z)=k\lambda\ln\frac z{z-L},\quad E_z=\frac{kQ}{z(z-L)}$ | Varilla uniforme 0≤s≤L,z>L,Q=λL; referencia V(∞)=0. |
| $E_x=\frac{kQ}{x\sqrt{x^2+a^2}}$ | Varilla uniforme de longitud 2a, observador en mediatriz a distancia x>0. Q=2aλ. |
| $E_r=\frac{\lambda}{2\pi\varepsilon_0r},\quad V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon_0}\ln\frac r{r_0}$ | Hilo infinito uniforme, r,r0>0. No permite cero finito en infinito; Er usa λ con signo. |
| $V=\frac{kQ}{\sqrt{x^2+a^2}},\quad E_x=\frac{kQx}{(x^2+a^2)^{3/2}}$ | Anillo uniforme de radio a, sobre su eje a distancia orientada x. V(∞)=0. |

### Capítulo 7 · Discos y planos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V(x)=2\pi k\sigma(\sqrt{x^2+R^2}-\lvert x\rvert)$ | Disco uniforme de radio R; punto axial, cero en infinito. No omitir el valor absoluto entre ambos lados. |
| $E_x=\frac{\sigma}{2\varepsilon_0}\left(1-\frac{x}{\sqrt{x^2+R^2}}\right)$ | Mismo disco, solo x>0; al otro lado cambia el sentido. En lámina ideal el campo salta en el plano. |
| $E=\frac{\lvert\sigma\rvert}{2\varepsilon_0}$ | Plano infinito con densidad total σ; saliente si σ>0. No confundir con densidad de una cara conductora. |
| $E_x=\frac{\sigma_1-\sigma_2}{2\varepsilon_0}$ | Entre dos planos infinitos en x=0 y x=d>0; densidades con signo. Exterior izquierdo: −(σ1+σ2)/(2ε0), derecho: +(σ1+σ2)/(2ε0). |
| $E=\sigma/\varepsilon_0,\quad V(d)-V(0)=-\sigma d/\varepsilon_0$ | Dos planos +σ a izquierda y −σ a derecha; campo exterior nulo en modelo ideal. |

## Capítulo 8 · Flujo eléctrico y ley de Gauss

### El área también tiene orientación

Para una superficie plana orientada, A vector=A n̂. El flujo de un campo uniforme es ΦE=E·A=EAcosθ. El ángulo se mide entre el campo y la normal, no entre el campo y el plano. Si el campo es perpendicular al plano, θ=0 o π y el flujo tiene módulo máximo; si es tangente, θ=π/2 y el flujo es cero. La unidad es N·m²/C, equivalente a V·m.

En una superficie cerrada se elige normal hacia afuera. Una contribución saliente es positiva; una entrante, negativa. La página 4 del apunte de Gauss contiene un paréntesis que asocia flujo negativo con saliente; la convención correcta es la contraria, y el propio desarrollo de su página 6 sí la aplica correctamente. El producto escalar fija el signo sin depender de una frase memorizada.

Para un campo no uniforme o una superficie curva, ΦE=∫S E·n̂ dA. Se suman contribuciones locales, no módulos. Un campo uniforme atravesando un cubo aporta −EL² por una cara y +EL² por la opuesta; las otras caras aportan cero. El flujo total es cero aunque el campo sea no nulo sobre todas las caras.

![Superficies gaussianas y perfiles radiales de campo](/planos-de-estudio/img/fisica2/gauss.svg)

### La ley y el campo que aparece dentro de la integral

Gauss establece $\oint_S\mathbf E\cdot d\mathbf A=Q_{\rm encerrada}/\varepsilon_0$. La carga encerrada es la suma algebraica dentro del volumen. El campo de la integral es el campo total, incluidas fuentes exteriores. Estas últimas pueden cambiar E en cada punto de la superficie, pero su contribución al flujo neto cerrado se cancela. No se las «borra del campo» por no estar encerradas.

Si la carga neta encerrada es cero, el flujo es cero; no se deduce que E sea cero en toda la superficie ni en el interior. En cambio, si E es cero en todos los puntos de la superficie cerrada, sí se deduce Qenc=0 mediante la integral. La implicación solo funciona en ese sentido. Un dipolo completamente encerrado tiene flujo neto cero y campo generalmente no nulo en su frontera.

### Cuándo Gauss permite despejar un campo

La ley es general, pero para hallar E con una sola ecuación se necesita simetría suficiente. Se busca una superficie donde el módulo sea constante en las partes relevantes y el producto escalar sea E dA, −E dA o cero. No basta que la superficie sea «bonita»: la simetría debe pertenecer a las fuentes y a las condiciones del problema.

Para una carga puntual centrada, la simetría es esférica: E radial y de módulo constante a igual radio. Una esfera gaussiana da Eᵣ4πr²=Q/ε₀ y Eᵣ=kQ/r². Para una carga desplazada dentro de esa misma esfera, el flujo sigue siendo Q/ε₀, pero el campo no tiene módulo constante sobre ella. Dividir el flujo por 4πr² solo da una media de componente normal, no el campo en cada punto.

Para un hilo infinito la simetría es cilíndrica, y para un plano infinito es plana. Para un anillo o un dipolo no existe en general una superficie simple sobre la cual el módulo de E sea conocido y constante de modo que Gauss resuelva el campo sin cálculo adicional. En esos casos la superposición integral sigue siendo la herramienta directa.

### Un cálculo de flujo y un cálculo de campo

Una carga +2 nC está en el centro de una esfera de radio 0,30 m. El flujo total es Q/ε₀≈226 N·m²/C. El campo superficial es kQ/r²=200 N/C con k redondeada. Si el radio se duplica, el flujo no cambia y el campo se divide por cuatro. La mayor área compensa el campo más débil. Si la carga sale de la esfera, el flujo neto pasa a cero, aunque siga existiendo campo producido por ella.

Para una superficie abierta, Gauss no permite escribir directamente Φ=Qenc/ε₀ porque no encierra un volumen por sí sola. Puede completarse con otras caras para formar una cerrada y usar simetría. Por ejemplo, una carga en el centro de un cubo produce flujo Q/(6ε₀) por cada cara por simetría, aunque E no sea uniforme en cada cara. El flujo por cara se reparte igual; el campo local no.

### Relación local como ampliación

La forma diferencial ∇·E=ρ/ε₀ expresa que la carga volumétrica es fuente de divergencia. Un campo puede tener divergencia cero en una región y seguir siendo no nulo, como el campo de una fuente situada afuera. Esta observación es útil para no concluir «sin carga local, sin campo». No hace falta resolver ecuaciones diferenciales de campos para los problemas simétricos de esta unidad; sí conservar la distinción entre información local y flujo a través de una frontera completa.

### Práctica y respuestas

**G8.1.** E=500 N/C atraviesa un área de 0,020 m² con normal a 60°: flujo. **G8.2.** Si se invierte la normal, ¿qué cambia? **G8.3.** Una superficie encierra +3 nC y −5 nC: flujo. **G8.4.** Una carga externa se acerca a un cubo vacío: ¿cambia su campo? ¿Y su flujo neto? **G8.5.** ¿Se puede usar E4πr²=Q/ε₀ para cualquier esfera que encierre una carga puntual?

**Respuestas.** G8.1: 5,0 N·m²/C. G8.2: cambia el signo del flujo. G8.3: −2×10⁻⁹/ε₀≈−226 N·m²/C. G8.4: el campo local cambia; el flujo neto sigue siendo cero si no entra carga. G8.5: solo cuando el campo respeta la simetría necesaria, por ejemplo una carga en el centro y sin fuentes adicionales que la rompan.


### Hoja de fórmulas del capítulo 8

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_E=\int_S\mathbf E\cdot d\mathbf A,\quad\Phi_E=EA\cos\theta$ | Segunda forma solo campo uniforme y plano; θ con la normal. Φ en N·m²/C; normal externa para superficie cerrada. |
| $\oint_S\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0$ | Campo total de todas las fuentes; solo carga encerrada determina flujo neto. Entrante negativo, saliente positivo. |
| $Q_{\rm enc}=0\not\Rightarrow\mathbf E=0$ | Flujo neto cero no implica campo local cero. Para despejar E desde la integral se necesita simetría suficiente. |
| $E_r4\pi r^2=Q_{\rm enc}/\varepsilon_0$ | Solo con simetría esférica radial que permita E constante en cada esfera concéntrica. |

## Capítulo 9 · Esferas, conductores y cavidades

### Esfera aislante con carga uniforme

Sea una esfera de radio R con carga Q uniformemente distribuida en volumen. La densidad es ρ=3Q/(4πR³). En una esfera gaussiana concéntrica de radio r<R se encierra Qenc=Q(r/R)³. Gauss da Eᵣ4πr²=Q r³/(ε₀R³), por lo que Eᵣ=kQr/R³. Fuera, r>R, se encierra Q completa y Eᵣ=kQ/r². En el centro E=0; en la superficie ambas expresiones coinciden.

Una distribución volumétrica uniforme no es el exceso de carga en un metal en equilibrio: corresponde a un modelo de aislante o carga fijada. No se mezclan las propiedades del material conductor con una densidad volumétrica prescrita que no podría sostener en electrostática.

El potencial, con cero en infinito, es kQ/r fuera. Dentro se integra el campo desde R hasta r y se conserva continuidad:


$$
V(r)=\frac{kQ}{2R}\left(3-\frac{r^2}{R^2}\right),\quad r\le R.
$$


En el centro vale 3kQ/(2R), no cero. Su derivada radial reproduce Eᵣ lineal. Para Q>0 el potencial máximo está en el centro, mientras el campo allí es cero: de nuevo, la intensidad depende de la pendiente, no de la altura del potencial.

### Esfera conductora cargada

Para una esfera conductora aislada en equilibrio y sin influencias externas que rompan la simetría, la carga excedente queda en su superficie. Dentro del material E=0 y V es constante, igual al valor superficial kQ/R. Fuera, el campo y potencial coinciden con los de una carga Q en el centro. El campo salta de cero a kQ/R² en la superficie ideal; el potencial es continuo.

La relación Eafuera normal=σ/ε₀ se deduce con una pequeña caja gaussiana que atraviesa la superficie: la tapa interna tiene campo cero y la externa aporta EA. Si hubiese componente tangencial externa, movería cargas sobre la superficie y no habría equilibrio. σ puede variar con la posición si el conductor no es esférico o si hay fuentes cercanas. El «efecto punta» describe concentración de campo en ciertas zonas de alta curvatura, pero no se obtiene un valor exacto sin resolver la geometría.

### Cavidad vacía y cavidad con una carga

En el material conductor E=0. Una superficie gaussiana íntegramente dentro de ese material y rodeando una cavidad debe encerrar carga neta cero. Si hay una carga q en la cavidad sin tocar la pared, la carga total inducida en la superficie interna es −q. Si el conductor tiene carga neta Qc, la carga externa será Qc+q. La igualdad total no dice que la densidad interna sea uniforme: depende de la posición de q y la geometría.

Ejemplo: un cascarón conductor tiene Qc=−2Q y una esfera aislante concéntrica central contiene +Q. La pared interna del cascarón tiene −Q y la externa −Q. Dentro del metal E=0; fuera de todo el conjunto el campo es el de −Q. En el hueco entre la esfera central y la pared interna, por simetría Eᵣ=kQ/r². Si la carga central se desplazara, las cargas totales inducidas seguirían siendo esas, pero el campo del hueco dejaría de ser esféricamente simétrico.

### Resolver un problema por regiones

Tomemos esfera aislante de radio a y carga Q, rodeada por cascarón conductor de radios b,c, a<b<c, con carga neta −2Q. Las cuatro regiones son: r<a, Eᵣ=kQr/a³; a<r<b, Eᵣ=kQ/r²; b<r<c, E=0; r>c, Eᵣ=−kQ/r². Los signos indican dirección respecto de r̂. En r=a el campo es continuo; en b y c salta por las cargas superficiales. No se usa una sola Qenc para todas las regiones.

Para hallar potencial se parte del infinito y se integra hacia adentro, acumulando los cambios en cada región. En r=c, V=−kQ/c. En todo el metal vale ese mismo valor. En el hueco, V(r)=−kQ/c+kQ(1/r−1/b). Dentro de la esfera aislante se agrega la integral de su campo lineal desde a hasta r. Las constantes de cada tramo se fijan por continuidad, no reiniciando V=0 en cada frontera.

### Cascarón aislante de espesor finito

Si una región a<r<b contiene densidad volumétrica uniforme ρ y el centro tiene una carga Q₀, entonces para a<r<b la carga encerrada es Q₀+(4πρ/3)(r³−a³). Eᵣ es esa expresión dividida por 4πε₀r². No se confunde este cascarón aislante con un cascarón conductor: en el primero puede haber campo dentro del volumen cargado; en el metal en equilibrio no. Esta distinción aparece en el recuperatorio histórico de la plataforma.

### Práctica y respuestas

**G9.1.** Esfera aislante uniforme: razón E(R/2)/E(R). **G9.2.** Esfera conductora: E y V en su centro. **G9.3.** Conductor neutro con carga +3 nC en cavidad: cargas interna y externa. **G9.4.** ¿Una superficie equipotencial exige E=0 justo afuera? **G9.5.** ¿Por qué el potencial no salta en una superficie con densidad de carga finita?

**Respuestas.** G9.1: 1/2, porque el campo interno crece linealmente. G9.2: E=0,V=kQ/R con referencia en infinito. G9.3: −3 nC interna y +3 nC externa, conservando carga neta del conductor. G9.4: no; el campo puede ser perpendicular y no nulo. G9.5: la integral de un campo con salto finito a través de un espesor que tiende a cero tiende a cero; su derivada puede saltar aunque V sea continuo.


### Hoja de fórmulas del capítulo 9

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}kQr/R^3&r<R\\kQ/r^2&r>R\end{cases}$ | Esfera aislante con carga volumétrica uniforme Q y radio R; componente radial orientada. |
| $V(r)=\frac{kQ}{2R}(3-r^2/R^2)$ | Interior de esa esfera uniforme; exterior kQ/r y referencia cero en infinito. |
| $E_{\rm dentro}=0,\quad V_{\rm dentro}=kQ/R$ | Esfera conductora aislada en equilibrio sin fuentes externas que rompan simetría; exterior como carga puntual central. |
| $q_{\rm pared\ interna}=-q,\quad q_{\rm pared\ externa}=Q_c+q$ | Carga q en cavidad sin tocar un conductor de carga neta Qc; cantidades totales, densidad no necesariamente uniforme. |
| $E_{{\rm afuera},n}-E_{{\rm adentro},n}=\sigma/\varepsilon_0$ | Capa superficial en vacío con normal de adentro hacia afuera; para cara conductora interna E=0. Potencial continuo. |
| $Q_{\rm enc}(r)=Q_0+\frac{4\pi\rho}{3}(r^3-a^3)$ | Dentro de cascarón aislante uniforme a<r<b con carga central Q0; no imponer condición de metal a ese volumen. |

## Capítulo 10 · Gauss en cilindros y planos; potencial por regiones

### Cilindro infinito con carga volumétrica uniforme

Consideremos un cilindro no conductor infinito de radio R y densidad ρ. La simetría obliga a un campo radial independiente del ángulo y de la posición longitudinal. Elegimos una superficie gaussiana coaxial de radio r y longitud L. En las tapas E es tangente y no aporta flujo; en la pared lateral E es normal y constante. Por eso el flujo es Eᵣ2πrL.

Para r<R, Qenc=ρπr²L y Eᵣ=ρr/(2ε₀). Para r>R, Qenc=ρπR²L y Eᵣ=ρR²/(2ε₀r). En la frontera coinciden. Si escribimos λ=ρπR², el exterior es λ/(2πε₀r), como un hilo. La longitud L elegida para la superficie gaussiana se cancela, señal de que no es una dimensión física adicional del cilindro infinito.

Para un cilindro conductor en equilibrio, en cambio, E=0 dentro del material y el exceso de carga se distribuye en su superficie. Su exterior, si mantiene simetría y carga por longitud λ, tiene la misma fórmula. El valor exterior por sí solo no permite distinguir entre modelos internos diferentes.

### Potencial cilíndrico con una referencia finita

No se puede usar cero en infinito para un cilindro cargado infinito. Si elegimos V(R)=0, fuera tenemos V(r)=−[ρR²/(2ε₀)]ln(r/R). Dentro, integrar Eᵣ=ρr/(2ε₀) da V(r)=ρ(R²−r²)/(4ε₀). Ambos valores coinciden en R. En r=0 el potencial es finito para la distribución volumétrica, a diferencia del hilo ideal de radio cero.

Ejemplo: si λ/(2πε₀)=30 V, la diferencia entre r=2 cm y r=6 cm es −30ln3≈−33,0 V. El cociente de radios debe usar la misma unidad en ambos, pero su razón es adimensional. Escribir ln(6 cm) solo no define una referencia física adecuada.

### Recuperar el plano infinito con una caja

Para una lámina uniforme usamos una caja que atraviesa el plano, con dos tapas de área A a igual distancia. Por simetría los módulos son iguales a ambos lados y cada campo apunta según su normal externa si σ>0. El flujo lateral es cero y el total 2EA. La carga encerrada es σA; de ahí E=σ/(2ε₀). La conclusión depende de la simetría de una única lámina sin un campo externo superpuesto que rompa esa igualdad de lados.

Para la superficie de un conductor, una tapa se coloca dentro del metal, donde E=0. Solo contribuye la tapa externa: EA=σcara A/ε₀. La diferencia entre 2EA y EA es geométrica y física, no una elección arbitraria entre dos tablas. Este razonamiento permite reconstruir el factor dos cuando se olvida.

### Coaxiales electrostáticos

Un conductor cilíndrico interno de radio a lleva carga por longitud +λ y uno externo coaxial carga −λ. En el espacio a<r<b entre conductores, Eᵣ=λ/(2πεr), con ε la permitividad homogénea de esa región. Dentro de los metales el campo es cero. Fuera, si la carga total por longitud es cero y el modelo conserva simetría, el campo también es cero. La diferencia entre los conductores es


$$
V(a)-V(b)=\frac{\lambda}{2\pi\varepsilon}\ln\frac ba.
$$


Este resultado permitirá deducir capacitancia por longitud. Si el conductor exterior tiene otra carga neta, el campo exterior no desaparece y habrá que usar la carga total encerrada correspondiente. «Cable coaxial» describe una geometría; por sí sola no garantiza neutralidad.

### Estrategia general para funciones por regiones

Primero dibujá todas las fronteras materiales. Para cada intervalo radial, calculá Qenc(r), decidí si estás en conductor o aislante, y aplicá simetría. Después obtené Eᵣ(r). Comprobá continuidad o salto en cada frontera según exista carga superficial. Finalmente integrá V desde una referencia común, conservando las constantes de enlace. Este orden evita mezclar una carga total de región exterior con una gaussiana pequeña.

Una comprobación útil consiste en derivar cada expresión de V y verificar que −dV/dr reproduce Eᵣ en su intervalo. Otra es calcular el salto de E normal: para una capa superficial en vacío, Eafuera,n−Eadentro,n=σ/ε₀. Las capas volumétricas sin delta superficial producen campo continuo aunque cambie su pendiente.

### Práctica y respuestas

**G10.1.** Cilindro aislante uniforme: razón E(R/2)/E(2R). **G10.2.** Para λ=2 nC/m, campo exterior a r=0,10 m. **G10.3.** Coaxial con b/a=e²: diferencia de potencial en función de λ y ε. **G10.4.** ¿Por qué las tapas no contribuyen en la gaussiana cilíndrica? **G10.5.** ¿Qué cambiaría si la densidad volumétrica dependiera de r?

**Respuestas.** G10.1: ambos valen ρR/(4ε₀), razón 1. G10.2: aproximadamente 360 N/C radial hacia afuera. G10.3: λ/(πε). G10.4: sus normales son axiales y E radial, producto escalar cero. G10.5: si conserva simetría cilíndrica, Qenc=2πL∫₀ʳρ(s)s ds en el interior; no se puede sacar ρ como constante. Para r>R se integra solo hasta R.


### Hoja de fórmulas del capítulo 10

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}\rho r/(2\varepsilon_0)&r<R\\\rho R^2/(2\varepsilon_0r)&r>R\end{cases}$ | Cilindro infinito aislante uniforme; λ=ρπR². En conductor en equilibrio, interior del metal E=0. |
| $Q_{\rm enc}(r)=2\pi L\int_0^r\rho(s)s\,ds$ | Distribución cilíndrica radial; usar límite R si la gaussiana es exterior al volumen cargado. |
| $V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon}\ln(r/r_0)$ | Región exterior de cilindro infinito en medio homogéneo; referencias radiales finitas. |
| $V(a)-V(b)=\frac{\lambda}{2\pi\varepsilon}\ln(b/a)$ | Coaxial electrostático entre radios a<b; carga por longitud +λ en interior y medio uniforme. Campos de extremos despreciados. |

## Formulario de la Unidad 3 · Gauss y conductores

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 8 · Flujo y Gauss

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_E=\int_S\mathbf E\cdot d\mathbf A,\quad\Phi_E=EA\cos\theta$ | Segunda forma solo campo uniforme y plano; θ con la normal. Φ en N·m²/C; normal externa para superficie cerrada. |
| $\oint_S\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0$ | Campo total de todas las fuentes; solo carga encerrada determina flujo neto. Entrante negativo, saliente positivo. |
| $Q_{\rm enc}=0\not\Rightarrow\mathbf E=0$ | Flujo neto cero no implica campo local cero. Para despejar E desde la integral se necesita simetría suficiente. |
| $E_r4\pi r^2=Q_{\rm enc}/\varepsilon_0$ | Solo con simetría esférica radial que permita E constante en cada esfera concéntrica. |

### Capítulo 9 · Esferas y cavidades

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}kQr/R^3&r<R\\kQ/r^2&r>R\end{cases}$ | Esfera aislante con carga volumétrica uniforme Q y radio R; componente radial orientada. |
| $V(r)=\frac{kQ}{2R}(3-r^2/R^2)$ | Interior de esa esfera uniforme; exterior kQ/r y referencia cero en infinito. |
| $E_{\rm dentro}=0,\quad V_{\rm dentro}=kQ/R$ | Esfera conductora aislada en equilibrio sin fuentes externas que rompan simetría; exterior como carga puntual central. |
| $q_{\rm pared\ interna}=-q,\quad q_{\rm pared\ externa}=Q_c+q$ | Carga q en cavidad sin tocar un conductor de carga neta Qc; cantidades totales, densidad no necesariamente uniforme. |
| $E_{{\rm afuera},n}-E_{{\rm adentro},n}=\sigma/\varepsilon_0$ | Capa superficial en vacío con normal de adentro hacia afuera; para cara conductora interna E=0. Potencial continuo. |
| $Q_{\rm enc}(r)=Q_0+\frac{4\pi\rho}{3}(r^3-a^3)$ | Dentro de cascarón aislante uniforme a<r<b con carga central Q0; no imponer condición de metal a ese volumen. |

### Capítulo 10 · Cilindros y coaxiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $E_r=\begin{cases}\rho r/(2\varepsilon_0)&r<R\\\rho R^2/(2\varepsilon_0r)&r>R\end{cases}$ | Cilindro infinito aislante uniforme; λ=ρπR². En conductor en equilibrio, interior del metal E=0. |
| $Q_{\rm enc}(r)=2\pi L\int_0^r\rho(s)s\,ds$ | Distribución cilíndrica radial; usar límite R si la gaussiana es exterior al volumen cargado. |
| $V(r)-V(r_0)=-\frac{\lambda}{2\pi\varepsilon}\ln(r/r_0)$ | Región exterior de cilindro infinito en medio homogéneo; referencias radiales finitas. |
| $V(a)-V(b)=\frac{\lambda}{2\pi\varepsilon}\ln(b/a)$ | Coaxial electrostático entre radios a<b; carga por longitud +λ en interior y medio uniforme. Campos de extremos despreciados. |

## Capítulo 11 · Capacitancia y geometría de capacitores

### Qué carga se llama carga del capacitor

Un capacitor ideal de dos conductores posee cargas +Q y −Q, y una diferencia de potencial positiva ΔV entre el conductor positivo y el negativo. Su capacitancia es C=Q/ΔV, con Q el módulo de la carga de una armadura. El conjunto tiene carga neta cero; no se usa 2Q como «carga almacenada» para calcular C. La unidad farad es C/V. En un sistema lineal de geometría y material fijos, C no depende de Q ni de ΔV: estos varían proporcionalmente.

La capacitancia caracteriza cuánto cambia la carga separada al variar el voltaje. No describe directamente cuánta energía hay: U también depende de la carga o tensión aplicada. Dos capacitores iguales pueden almacenar energías diferentes si sus voltajes son distintos.

Un conductor aislado también tiene capacidad respecto de una referencia: una esfera de radio R, con V(∞)=0, satisface C=4πε₀R. Se puede entender como el límite de un capacitor esférico cuya armadura exterior se aleja al infinito. No es la misma geometría que dos placas planas, aunque ambas usen C=Q/ΔV.

### Procedimiento de deducción

Para calcular C desde una geometría, imaginamos ±Q en las armaduras, hallamos E en la región entre ellas, integramos para obtener ΔV y formamos Q/ΔV. Si el modelo es lineal, Q se cancela. La cancelación es una comprobación del razonamiento, no un paso que se impone aunque el material responda de forma no lineal.

En placas paralelas de área A y separación d pequeña frente a sus dimensiones laterales, despreciamos bordes. El campo entre ellas es Q/(εA), donde ε es la permitividad del medio uniforme. La diferencia positiva es Ed=Qd/(εA), por lo que C=εA/d. Aumentar área aumenta C; aumentar separación la reduce. El campo no es exactamente uniforme en un capacitor finito, especialmente cerca de sus bordes.

Ejemplo: A=0,020 m²,d=1,0 mm, vacío. C=8,85×10⁻¹²·0,020/0,001=177 pF. Con 100 V, Q=17,7 nC y E=1,0×10⁵ V/m. La densidad de carga de la cara enfrentada es Q/A=8,85×10⁻⁷ C/m² y verifica E=σ/ε₀. Cada resultado sirve para comprobar otro.

### Capacitor cilíndrico

Dos cilindros coaxiales de radios a<b, longitud L mucho mayor que sus radios y carga ±Q producen Eᵣ=Q/(2πεLr) entre ellos. La diferencia Va−Vb=∫ₐᵇEᵣdr=Q ln(b/a)/(2πεL), de donde


$$
C=\frac{2\pi\varepsilon L}{\ln(b/a)},\qquad C'=\frac CL=\frac{2\pi\varepsilon}{\ln(b/a)}.
$$


C′ se mide en F/m. Decir «capacitor cilíndrico infinito» y pedir una C total finita sería inconsistente; se trabaja por unidad de longitud. La razón b/a es adimensional. Para un coaxial real se usa la permitividad de su aislante, no automáticamente ε₀.

Si b=2a en vacío, C′=2πε₀/ln2≈80,2 pF/m. Un tramo de 3 m tendría aproximadamente 241 pF si los efectos de los extremos son despreciables. El voltaje entre conductores se obtiene usando λ=Q/L, no tomando Q de todo el cable como si fuera carga por metro.

### Capacitor esférico

Dos superficies conductoras concéntricas de radios a<b con cargas ±Q producen Eᵣ=kQ/r² entre ellas. Integrar da ΔV=kQ(1/a−1/b), y


$$
C=4\pi\varepsilon\frac{ab}{b-a}.
$$


En el límite b→∞ se obtiene 4πεa, capacidad de la esfera aislada en medio homogéneo. Si el espacio b−a es muy pequeño frente al radio, la fórmula se aproxima a εA/d con A≈4πa² y d=b−a. Las expresiones de geometrías diferentes concuerdan en ese límite local plano.

### Cómo interpretar cambios geométricos

Alejar placas reduce C, pero no determina por sí solo qué sucede con Q, V y U: depende de si hay batería. Con conexión a una fuente ideal, V permanece fija y Q=CV se ajusta. Aislado y sin fugas, Q permanece fija y V=Q/C cambia. El siguiente capítulo desarrollará la energía. Empezar un problema de cambio geométrico afirmando «se conserva todo» es incompatible con esas relaciones.

La relación C=Q/ΔV usa diferencia de potencial, no potencial absoluto de una armadura. Sumar una constante a ambos potenciales no altera la capacitancia. Además, para modelos ordinarios pasivos la C calculada es positiva: si un recorrido de integración entrega ΔV negativa, hay que reordenar armaduras o tomar el módulo definido, no concluir que la geometría tiene capacitancia negativa.

### Práctica y respuestas

**K11.1.** C=5 μF,V=12 V: carga de cada placa y carga neta. **K11.2.** Duplicar A y triplicar d: factor de C. **K11.3.** Coaxial a=1 mm,b=e mm en vacío: C′. **K11.4.** Esfera aislada R=0,10 m: C. **K11.5.** ¿Por qué se cancela Q en las deducciones lineales?

**Respuestas.** K11.1: ±60 μC, neta cero. K11.2: 2/3. K11.3: 2πε₀≈55,6 pF/m. K11.4: 4πε₀·0,10≈11,1 pF. K11.5: E y ΔV son proporcionales a la carga impuesta para geometría y permitividad fijas; el cociente refleja propiedades del dispositivo.


### Hoja de fórmulas del capítulo 11

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C=Q/\Delta V,\quad Q=C\Delta V$ | Q módulo de una armadura, ΔV positiva entre armaduras; cargas ±Q y carga neta del par cero. C en F. |
| $C_{\rm plano}=\varepsilon A/d$ | Placas grandes, d pequeña frente a dimensiones laterales, medio homogéneo lineal y bordes despreciados. |
| $C_{\rm cilindrico}=\frac{2\pi\varepsilon L}{\ln(b/a)},\quad C'=C/L$ | Cilindros coaxiales largos, a<b; C′ en F/m. No asignar capacitancia total finita a longitud infinita. |
| $C_{\rm esferico}=4\pi\varepsilon\frac{ab}{b-a},\quad C_{\rm esfera}=4\pi\varepsilon a$ | Radios concéntricos a<b; la segunda es el límite b→∞ con referencia apropiada. |

## Capítulo 12 · Redes de capacitores y energía almacenada

### Identificar conexiones por nodos

Dos capacitores están en paralelo si sus pares de terminales se conectan a los mismos dos nodos: tienen igual ΔV y sus cargas se suman. Por tanto Ceq=C₁+C₂. Están en serie simple si comparten un nodo intermedio flotante cuya carga neta inicial es cero y no hay otra conexión: los módulos de carga son iguales, los voltajes se suman y 1/Ceq=1/C₁+1/C₂. Las condiciones del nodo son importantes; una carga inicial atrapada puede impedir asumir cargas iguales.

Una conexión se decide por continuidad eléctrica, no por que dos símbolos se dibujen «uno al lado del otro». Redibujar un circuito moviendo cables ideales sin cambiar nodos ayuda a reconocer reducciones. En paralelo Ceq supera a cada C positiva; en serie es menor que cualquiera. Son controles rápidos para detectar haber intercambiado las reglas con las de resistores.

### Red mixta, reducción y reconstrucción

Ejemplo: 3 μF y 6 μF en serie, esa rama en paralelo con 4 μF, todo conectado a 12 V. La serie equivale a 2 μF; la red total a 6 μF. La fuente separa 72 μC. La rama de 4 μF tiene 12 V y 48 μC; la rama serie tiene carga 24 μC. Sus capacitores poseen voltajes 24/3=8 V y 24/6=4 V. Se verifica 8+4=12 V y 48+24=72 μC. Reducir Ceq no termina el problema si se piden valores de cada elemento: hay que reconstruir las ramas en orden inverso.

### Energía y el factor un medio

Cargar un capacitor lineal desde q=0 exige trabajo incremental dW=V(q)dq=(q/C)dq. Integrar hasta Q da U=Q²/(2C)=CV²/2=QV/2. Usar QV contaría como si todas las cargas hubiesen sido trasladadas contra el voltaje final; durante la carga ese voltaje creció desde cero. La referencia U=0 corresponde al capacitor descargado.

Para la red anterior, Utotal=½·6 μF·12²=432 μJ. En el de 4 μF hay 288 μJ; en los de 3 y 6 μF hay 96 y 48 μJ respectivamente. La suma recupera 432 μJ. La carga se suma entre ramas en paralelo, pero no se suman los módulos de todas las placas de toda la red para obtener «carga de la fuente».

En el vacío, la densidad de energía eléctrica es uE=ε₀E²/2, en J/m³. Para un campo no uniforme, U=∫uE d𝒱 dentro del modelo pertinente. En placas, multiplicar por Ad reproduce CV²/2. No se agrega después esa energía a la energía del capacitor como si fuera una contribución distinta: describe lo mismo desde el campo.

### Conectar capacitores previamente cargados

Dos capacitores aislados se conectan en paralelo con igual polaridad. La carga algebraica de cada nodo se conserva y, tras el transitorio, ambos tienen Vf=(C₁V₁+C₂V₂)/(C₁+C₂). Con polaridad opuesta, una de las tensiones entra con signo negativo según los nodos elegidos. La energía electrostática final no tiene por qué coincidir con la inicial: durante la redistribución se disipa energía en resistencias reales y puede haber radiación.

Ejemplo: C₁=2 μF a 12 V y C₂=4 μF a 3 V. Con igual polaridad, Qnodo=24+12=36 μC y Vf=6 V. Las cargas finales son 12 y 24 μC. Uinicial=144+18=162 μJ y Ufinal=½·6 μF·6²=108 μJ. La diferencia de 54 μJ sale del almacenamiento electrostático. En un circuito ideal sin resistencia ni radiación, asumir simplemente un equilibrio final omite la dinámica; el modelo real de pérdidas explica la llegada a ese estado.

### Fuerza entre placas y balance con una batería

En vacío, la presión atractiva entre placas ideales es p=ε₀E²/2 y el módulo de fuerza F=Q²/(2ε₀A). Se usa el campo de la otra placa al calcular la fuerza sobre una: el campo total contiene también el propio campo, que no se trata como fuerza externa sobre sí misma. El resultado también surge de derivar U=Q²d/(2ε₀A) respecto de d a Q fija: el agente debe aportar trabajo al separar placas.

Si V permanece fija por una batería, U=ε₀AV²/(2d) disminuye al separar. Eso no vuelve repulsiva la fuerza: la batería también intercambia energía y carga. Hay que incluir su trabajo antes de deducir fuerzas a partir de derivadas con restricciones. Un error frecuente consiste en aplicar F=−dU/dd a V fija ignorando al reservorio eléctrico.

### Práctica y respuestas

**K12.1.** 2 μF y 3 μF: Ceq en serie y paralelo. **K12.2.** En serie a 10 V: cargas y voltajes. **K12.3.** C=10 μF,V=20 V: energía. **K12.4.** Dos capacitores idénticos, uno a V y otro descargado, se conectan en paralelo: tensión final y fracción de energía restante. **K12.5.** Capacitor aislado: se duplica d, ¿qué pasa con E,V,U?

**Respuestas.** K12.1: 1,2 μF y 5 μF. K12.2: Q=12 μC, voltajes 6 V y 4 V. K12.3: 2 mJ. K12.4: V/2; queda la mitad de la energía inicial en los campos. K12.5: Q constante, E constante, V y U se duplican. El trabajo mecánico externo explica el aumento de energía.


### Hoja de fórmulas del capítulo 12

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C_{\parallel}=\sum_iC_i,\quad\frac1{C_{\rm serie}}=\sum_i\frac1{C_i}$ | Paralelo: mismos dos nodos y mismo voltaje. Serie simple: nodo intermedio flotante inicialmente neutro, cargas iguales en módulo. |
| $U=\frac{Q^2}{2C}=\frac12CV^2=\frac12QV$ | Capacitor lineal, geometría y material fijados, referencia descargado; elegir forma según variable conservada. |
| $u_E=\frac12\varepsilon E^2$ | Densidad J/m³, medio lineal no dispersivo bajo el modelo electrostático; vacío ε=ε0. No sumarla otra vez a U del mismo campo. |
| $V_f=\frac{C_1V_1+C_2V_2}{C_1+C_2}$ | Redistribución de dos capacitores aislados conectados en paralelo; tensiones con signo según nodos, carga total conservada. |
| $F=\frac{Q^2}{2\varepsilon_0A},\quad p=\frac12\varepsilon_0E^2$ | Atracción de placas paralelas ideales en vacío, bordes despreciados; al usar energía con batería incluir su trabajo. |

## Capítulo 13 · Dieléctricos, polarización y condiciones de conexión

### Carga libre y carga ligada

Un dieléctrico limita el desplazamiento macroscópico de carga libre, pero sus distribuciones atómicas o dipolos pueden polarizarse. En un capacitor, aparecen cargas ligadas en superficies del material que tienden a reducir el campo para la misma carga libre en las placas. En un modelo lineal, homogéneo e isótropo, ε=κε₀. La constante relativa κ es adimensional; en los dieléctricos ordinarios del régimen electrostático considerado suele ser mayor que 1. No se extrapola esa descripción sin condiciones a toda frecuencia y material.

Si llena por completo la geometría sin cambiarla, C=κC₀. Esa relación por sí sola no decide qué ocurre con Q,V y U: hay dos experimentos distintos según esté conectada o desconectada la batería.

### Capacitor aislado: carga libre fija

Desconectada la fuente y sin fugas, Q permanece constante. Al introducir un dieléctrico completo, C se multiplica por κ, V=Q/C y E disminuyen por ese factor y U=Q²/(2C) también. No se «pierde carga de las placas» para reducir el campo; aparecen cargas ligadas que modifican el campo total. En el modelo plano, la magnitud de la densidad ligada de superficie es σligada=σlibre(1−1/κ).

Ejemplo: C₀=2 μF,V₀=12 V,κ=3. Inicialmente Q=24 μC y U₀=144 μJ. Después C=6 μF,V=4 V,Q=24 μC y U=48 μJ. La reducción de energía puede convertirse en trabajo mecánico mientras el dieléctrico entra o disiparse según el proceso. Un balance detallado debe especificar cómo se introduce y qué fuerzas actúan.

### Batería conectada: voltaje fijo

Con una fuente ideal, V permanece fija. El campo entre placas E=V/d también, si d no cambia y el modelo plano sigue válido. C aumenta por κ, Q aumenta por κ y U=CV²/2 aumenta por κ. La batería entrega carga adicional. No corresponde aplicar E=E₀/κ, relación del experimento anterior a Q fija.

Para el mismo ejemplo, conectado a 12 V, C final=6 μF,Qfinal=72 μC y Ufinal=432 μJ. La fuente entrega ΔQ=48 μC y trabajo VΔQ=576 μJ. El aumento de energía de campo es 288 μJ; el resto puede salir como trabajo mecánico del sistema en una inserción controlada ideal. Energía de campo y energía aportada por la batería no son iguales en general.

### Llenado parcial: reconocer serie y paralelo geométricos

Si dos capas de espesores d₁,d₂ y permitividades ε₁,ε₂ ocupan el mismo área A una después de otra en la dirección del campo, equivalen a capacitores en serie. Sin carga libre en la interfaz, la componente normal D=εE es la misma en ambas. La diferencia total es ΔV=(Q/A)(d₁/ε₁+d₂/ε₂), por lo que C=A/(d₁/ε₁+d₂/ε₂).

Si los materiales ocupan áreas A₁,A₂ lado a lado, cada uno atravesando toda la separación d, comparten voltaje y equivalen a paralelo: C=(ε₁A₁+ε₂A₂)/d, despreciando efectos en la frontera lateral. Usar un promedio aritmético de κ en capas sucesivas generalmente da un resultado incorrecto: las caídas de potencial no se reparten igual.

Ejemplo: mitad del espesor es vacío y mitad material κ=4. C=ε₀A/[d/2+d/(2·4)]=(8/5)C₀. Si la mitad del área fuese vacío y la otra mitad material κ=4, C=(1+4)C₀/2=(5/2)C₀. El mismo porcentaje de volumen ocupado no determina una misma capacitancia: importa su orientación respecto del campo.

### Ley de Gauss en materiales

La forma fundamental para E conserva carga total, libre más ligada: ∮E·dA=Qtotal/ε₀. En el modelo macroscópico se define D=ε₀E+P y ∮D·dA=Qlibre. Para un material lineal isótropo D=εE. Si κ varía, no se lo saca arbitrariamente de la integral. El uso de ε en fórmulas geométricas presupone que el modelo del material y su distribución espacial son los indicados.

La polarización uniforme de un bloque puede producir cargas ligadas solo en sus caras; una polarización no uniforme puede además producir carga ligada volumétrica. Por eso «no hay carga ligada en el interior de un dieléctrico» solo describe ciertos modelos uniformes, no una regla universal.

### Campo máximo y alcance del modelo

Si el campo es suficientemente intenso, el material deja de comportarse como aislante ideal. La rigidez dieléctrica limita la operación y depende de material, geometría y condiciones. En problemas de cálculo, si se proporciona Emax, el modelo plano da Vmax≈Emaxd. No se interpreta un número tabulado como permiso para montar dispositivos reales de alta tensión. Aquí se estudian modelos y el laboratorio se limita a los equipos y tensiones indicados por la cátedra.

### Práctica y respuestas

**K13.1.** Insertar κ=5 con Q fija: factores de C,V,E,U. **K13.2.** Lo mismo con V fija. **K13.3.** Dos capas iguales de κ₁=2,κ₂=6: C/C₀. **K13.4.** Dos mitades de área con esos materiales: C/C₀. **K13.5.** ¿La carga ligada reemplaza la necesidad de conservar carga libre en un capacitor aislado?

**Respuestas.** K13.1: 5,1/5,1/5,1/5. K13.2: C y Q y U se multiplican por 5; V y E permanecen iguales. K13.3: 1/(1/4+1/12)=3. K13.4: (2+6)/2=4. K13.5: no; son balances distintos y la redistribución ligada explica el campo sin alterar la carga libre aislada.


### Hoja de fórmulas del capítulo 13

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\varepsilon=\kappa\varepsilon_0,\quad C=\kappa C_0$ | Llenado completo de geometría fija, dieléctrico lineal homogéneo isótropo en régimen apropiado. |
| $Q=\text{constante}:\quad V=V_0/\kappa,\ E=E_0/\kappa,\ U=U_0/\kappa$ | Capacitor aislado sin fugas, mismas placas y separación al insertar dieléctrico completo. |
| $V=\text{constante}:\quad Q=\kappa Q_0,\ E=E_0,\ U=\kappa U_0$ | Fuente ideal conectada, misma geometría plana; batería intercambia carga y energía. |
| $C=\frac A{d_1/\varepsilon_1+d_2/\varepsilon_2},\quad C_{\rm lateral}=\frac{\varepsilon_1A_1+\varepsilon_2A_2}{d}$ | Primera: capas sucesivas según campo, sin carga libre interfacial. Segunda: áreas lado a lado en paralelo. Bordes despreciados. |
| $\oint\mathbf D\cdot d\mathbf A=Q_{\rm libre},\quad\mathbf D=\varepsilon\mathbf E$ | Segunda igualdad para medio lineal isótropo. E fundamental usa carga libre más ligada sobre ε0; no sacar ε variable de la integral. |
| $\sigma_{\rm ligada}=\sigma_{\rm libre}(1-1/\kappa)$ | Magnitudes en capacitor plano completamente lleno y polarización uniforme; carga libre de placas no desaparece. |

## Formulario de la Unidad 4 · Capacitores y dieléctricos

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 11 · Capacitancia

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C=Q/\Delta V,\quad Q=C\Delta V$ | Q módulo de una armadura, ΔV positiva entre armaduras; cargas ±Q y carga neta del par cero. C en F. |
| $C_{\rm plano}=\varepsilon A/d$ | Placas grandes, d pequeña frente a dimensiones laterales, medio homogéneo lineal y bordes despreciados. |
| $C_{\rm cilindrico}=\frac{2\pi\varepsilon L}{\ln(b/a)},\quad C'=C/L$ | Cilindros coaxiales largos, a<b; C′ en F/m. No asignar capacitancia total finita a longitud infinita. |
| $C_{\rm esferico}=4\pi\varepsilon\frac{ab}{b-a},\quad C_{\rm esfera}=4\pi\varepsilon a$ | Radios concéntricos a<b; la segunda es el límite b→∞ con referencia apropiada. |

### Capítulo 12 · Redes y energía

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $C_{\parallel}=\sum_iC_i,\quad\frac1{C_{\rm serie}}=\sum_i\frac1{C_i}$ | Paralelo: mismos dos nodos y mismo voltaje. Serie simple: nodo intermedio flotante inicialmente neutro, cargas iguales en módulo. |
| $U=\frac{Q^2}{2C}=\frac12CV^2=\frac12QV$ | Capacitor lineal, geometría y material fijados, referencia descargado; elegir forma según variable conservada. |
| $u_E=\frac12\varepsilon E^2$ | Densidad J/m³, medio lineal no dispersivo bajo el modelo electrostático; vacío ε=ε0. No sumarla otra vez a U del mismo campo. |
| $V_f=\frac{C_1V_1+C_2V_2}{C_1+C_2}$ | Redistribución de dos capacitores aislados conectados en paralelo; tensiones con signo según nodos, carga total conservada. |
| $F=\frac{Q^2}{2\varepsilon_0A},\quad p=\frac12\varepsilon_0E^2$ | Atracción de placas paralelas ideales en vacío, bordes despreciados; al usar energía con batería incluir su trabajo. |

### Capítulo 13 · Dieléctricos

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\varepsilon=\kappa\varepsilon_0,\quad C=\kappa C_0$ | Llenado completo de geometría fija, dieléctrico lineal homogéneo isótropo en régimen apropiado. |
| $Q=\text{constante}:\quad V=V_0/\kappa,\ E=E_0/\kappa,\ U=U_0/\kappa$ | Capacitor aislado sin fugas, mismas placas y separación al insertar dieléctrico completo. |
| $V=\text{constante}:\quad Q=\kappa Q_0,\ E=E_0,\ U=\kappa U_0$ | Fuente ideal conectada, misma geometría plana; batería intercambia carga y energía. |
| $C=\frac A{d_1/\varepsilon_1+d_2/\varepsilon_2},\quad C_{\rm lateral}=\frac{\varepsilon_1A_1+\varepsilon_2A_2}{d}$ | Primera: capas sucesivas según campo, sin carga libre interfacial. Segunda: áreas lado a lado en paralelo. Bordes despreciados. |
| $\oint\mathbf D\cdot d\mathbf A=Q_{\rm libre},\quad\mathbf D=\varepsilon\mathbf E$ | Segunda igualdad para medio lineal isótropo. E fundamental usa carga libre más ligada sobre ε0; no sacar ε variable de la integral. |
| $\sigma_{\rm ligada}=\sigma_{\rm libre}(1-1/\kappa)$ | Magnitudes en capacitor plano completamente lleno y polarización uniforme; carga libre de placas no desaparece. |

## Capítulo 14 · Corriente eléctrica y descripción microscópica

### Corriente como transferencia de carga

La corriente a través de una sección orientada es I=dQ/dt. Su valor medio en un intervalo es ΔQ/Δt y se mide en C/s=ampere. Aunque se asigna un sentido a la rama de un circuito, I es una magnitud escalar con signo respecto de esa orientación. La densidad de corriente J sí es vectorial y permite describir el flujo local: I=∫J·n̂dA.

La corriente convencional apunta como el transporte de carga positiva. Electrones que se desplazan hacia −x producen corriente hacia +x. Iones positivos hacia +x e iones negativos hacia −x contribuyen ambos a una corriente positiva hacia +x: se suman sus contribuciones, no se restan solo porque las cargas tengan signos distintos. Si los dos tipos se desplazan en el mismo sentido, sí producen contribuciones convencionales opuestas.

En una rama estacionaria sin derivaciones la corriente es la misma en cada sección aunque el área cambie. Esto se debe a conservación de carga: si entrara más carga de la que sale, se acumularía y ya no sería estacionaria. La densidad J=I/A será mayor donde el área sea menor si es aproximadamente uniforme en cada sección. No se confunden «corriente constante a lo largo del cable» y «densidad constante».

### Modelo de portadores y velocidad de deriva

Con n portadores por unidad de volumen, carga q y velocidad de deriva vectorial vd, la densidad es J=nqvd. Para un flujo uniforme perpendicular a sección A, el módulo I=n|q|A|vd|. La velocidad de deriva es una media de movimiento ordenado superpuesta al movimiento microscópico aleatorio; que sea pequeña no significa que los electrones estén casi quietos.

Ejemplo: n=8,0×10²⁸ m⁻³,A=1,0 mm² e I=2,0 A, con portadores electrónicos. El módulo de deriva es I/(neA)=2/[(8×10²⁸)(1,6×10⁻¹⁹)(10⁻⁶)]≈1,56×10⁻⁴ m/s. Su sentido es opuesto al de la corriente. La respuesta eléctrica del circuito no espera a que un electrón concreto recorra todo el cable: la perturbación electromagnética se propaga por el sistema a una velocidad muy superior a la deriva, determinada por el medio y la geometría.

### Corriente variable: integrar en tiempo

Si I depende de t, la carga transportada entre t₁ y t₂ es ∫I(t)dt. Para I(t)=2+3t A, con t en segundos y coeficiente 3 en A/s, entre 0 y 4 s pasa Q=[2t+(3/2)t²]₀⁴=32 C. La corriente media es 8 A. No se puede reemplazar I por su valor final de 14 A y multiplicar por 4 s; ese sería otro proceso.

Si una corriente cambia de signo, la integral entrega carga neta orientada. La cantidad acumulada de carga que atraviesa sin distinguir sentido se calcula integrando |I|, siempre que ese sea el significado pedido. Como con desplazamiento y recorrido, ambas preguntas son diferentes.

### Conductividad y campo interno

En un material óhmico, lineal e isótropo a temperatura aproximadamente constante, J=σcondE, donde σcond es conductividad en S/m. La resistividad ρres=1/σcond se mide en Ω·m. Se usan subíndices para distinguir σcond de densidad superficial de carga y ρres de densidad volumétrica de carga. El contexto debe acompañar a los símbolos.

En un cable resistivo con corriente estacionaria hay E interno distinto de cero. El caso E=0 dentro del conductor era equilibrio electrostático sin corriente. No hay contradicción: son regímenes diferentes. El campo interno y las cargas superficiales del circuito se organizan para sostener la corriente con la geometría impuesta; las cargas no son «consumidas» por el resistor. Lo que se transforma en energía térmica es energía, no carga neta.

### Puente hacia conservación local

La continuidad local de carga se escribe ∂ρcarga/∂t+∇·J=0. Si una región acumula carga positiva, la corriente neta saliente es menor que la entrante. En nodos ideales de circuitos ordinarios se desprecia almacenamiento de carga en el nodo y se obtiene suma de corrientes entrantes igual a salientes. Si un elemento almacena carga, como un capacitor, ese almacenamiento debe aparecer en su relación I=dq/dt; no se elimina del balance.

Esta forma local es una ampliación conceptual para unir campos y circuitos; los ejercicios del capítulo se pueden resolver con conservación y secciones sin usar operadores diferenciales.

### Práctica y respuestas

**I14.1.** 0,50 A durante 3 min: carga. **I14.2.** Pasan 10¹⁸ electrones/s hacia la izquierda y 2×10¹⁸ iones +e/s hacia la derecha: corriente convencional. **I14.3.** Un cable reduce su área a la mitad sin ramificarse en régimen estacionario: cambios de I,J y deriva si n no cambia. **I14.4.** I(t)=4t A entre 0 y 2 s: Q y corriente media. **I14.5.** ¿Una lámpara devuelve menos corriente que la que recibe?

**Respuestas.** I14.1: 90 C. I14.2: 0,48 A hacia la derecha, sumando ambos transportes. I14.3: I igual, J y módulo de deriva se duplican. I14.4: Q=8 C e Imedia=4 A. I14.5: no en régimen estacionario sin otras ramas; transforma energía mientras conserva el flujo neto de carga.


### Hoja de fórmulas del capítulo 14

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I=dQ/dt,\quad Q=\int_{t_1}^{t_2}I(t)\,dt$ | Corriente orientada, unidad A=C/s. Integral da carga neta, no recorrido total de carga sin distinguir sentido. |
| $I=\int_A\mathbf J\cdot d\mathbf A,\quad\mathbf J=nq\mathbf v_d$ | Modelo de una especie de portadores; sumar especies si hay varias. J en A/m²; I escalar con signo. |
| $I=n\lvert q\rvert A\lvert v_d\rvert$ | Módulo para deriva uniforme perpendicular a sección; electrones se desplazan contra corriente convencional. |
| $\mathbf J=\sigma_{\rm cond}\mathbf E,\quad\rho_{\rm res}=1/\sigma_{\rm cond}$ | Material óhmico lineal isótropo a condiciones fijadas; conductividad en S/m, resistividad en Ω·m. |

## Capítulo 15 · Resistencia, ley de Ohm y potencia

### Una propiedad del material y una del objeto

Para un conductor uniforme de longitud L, sección A y resistividad ρres constante, R=ρresL/A. La resistividad caracteriza el material bajo condiciones dadas; la resistencia caracteriza además su geometría. Un alambre más largo ofrece mayor resistencia, y uno más grueso menor. La relación V=IR es lineal cuando R no depende de la tensión o corriente en el régimen de estudio. La ley de Ohm es un modelo de ciertos materiales, no una ley universal para cualquier dispositivo.

Una lámpara de filamento puede aumentar su resistencia al calentarse. Comparar lámparas mediante R=V²/P a su tensión nominal describe la resistencia equivalente en ese estado de operación; no asegura la misma R cuando están frías ni cuando se conectan a otra tensión. Diodos y otros dispositivos tienen relaciones I–V no lineales. Puede calcularse V/I en un punto, pero eso no lo vuelve una resistencia constante para todo el gráfico.

### De la descripción local a la relación de terminales

En una barra uniforme J=I/A y E=ΔV/L, por lo que J=σcondE conduce a I/A=σcondΔV/L y ΔV=[L/(σcondA)]I. De ahí R=ρresL/A. Si la sección cambia, para una corriente estacionaria el elemento de resistencia es dR=ρres dx/A(x), y se integra sobre la longitud. No se usa el promedio de áreas sin justificarlo.

Ejemplo: cobre idealizado con ρres=1,7×10⁻⁸ Ω·m, L=10 m y A=1 mm². R=0,17 Ω. A 2 A cae ΔV=0,34 V y se disipan 0,68 W. Si el diámetro se duplica, el área se cuadruplica y la resistencia cae a un cuarto. Confundir diámetro con área produciría un factor dos en vez de cuatro.

### Dependencia con temperatura

En un intervalo moderado puede aproximarse R(T)=R₀[1+α(T−T₀)], si la expansión geométrica es despreciable o ya está absorbida en el coeficiente elegido. α tiene unidad K⁻¹ o °C⁻¹ para diferencias de temperatura. Un aumento de 20 °C equivale a 20 K, pero una temperatura absoluta de 20 °C no equivale a 20 K.

Para R₀=100 Ω,α=0,004 K⁻¹ y aumento de 50 K, R≈120 Ω. No se extrapola la ley lineal a cualquier temperatura, ni se supone que todos los materiales tienen α positiva. En semiconductores pueden cambiar fuertemente las densidades de portadores; en superconductores el modelo tiene otro régimen.

### Potencia y convención de signos

La potencia eléctrica absorbida por un elemento es P=VI si I entra por el terminal marcado positivo para V. Esta convención pasiva permite P positiva como energía recibida y negativa como energía entregada. En una resistencia ideal R>0, P=I²R=V²/R≥0. En una fuente, el signo depende de la dirección de corriente: una batería puede entregar energía o absorberla durante una carga.

La energía transformada durante un intervalo es ∫Pdt. Si P es constante, W=Pt. Un aparato de 100 W funcionando 2 h consume 200 Wh=0,200 kWh=720 kJ. Un kWh es energía, no potencia. No se expresa una potencia como «kW por hora» si no se está hablando de su tasa de cambio.

### Corriente media frente a eficaz

Dos corrientes con igual carga transportada pueden disipar distintas energías en la misma resistencia. Q=∫I dt depende linealmente de I, mientras W=R∫I²dt depende del cuadrado. La corriente eficaz en un intervalo T es Irms=√[(1/T)∫I²dt]; una corriente constante de ese valor disiparía la misma energía. No tiene por qué coincidir con la corriente media.

Ejemplo original: I(t)=2t A para 0≤t≤3 s. Q=9 C, Imedia=3 A. El promedio de I² es (1/3)∫₀³4t²dt=12 A², por lo que Irms=2√3 A≈3,46 A. En R=5 Ω, la energía es 5·36=180 J; una corriente constante de 3 A durante 3 s disiparía 135 J. Esa diferencia no viola conservación: son procesos distintos con aportes energéticos distintos.

### Comprobaciones de escala

A V fija, duplicar R reduce I a la mitad y P a la mitad. A I fija, duplicar R duplica P. Las conclusiones opuestas se deben a restricciones diferentes, como ocurría con capacitores. Antes de comparar calentamientos se debe declarar qué mantiene la fuente o el circuito.

### Práctica y respuestas

**R15.1.** R=30 Ω,V=12 V: I y P. **R15.2.** Alambre se estira al doble de longitud conservando volumen y resistividad: factor de R. **R15.3.** R₀=50 Ω,α=0,005 K⁻¹,ΔT=40 K: R. **R15.4.** 60 W durante 30 min: energía en J y kWh. **R15.5.** ¿Qué lámpara tiene mayor R nominal, 40 W o 80 W, ambas a igual tensión?

**Respuestas.** R15.1: 0,40 A y 4,8 W. R15.2: área se reduce a la mitad y R se cuadruplica. R15.3: 60 Ω. R15.4: 108 kJ y 0,030 kWh. R15.5: la de 40 W tiene doble resistencia nominal; usar R=V²/P bajo esa condición de funcionamiento.


### Hoja de fórmulas del capítulo 15

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R=\rho_{\rm res}L/A,\quad dR=\rho_{\rm res}\,dx/A(x)$ | Primera para sección y resistividad uniformes; segunda para integración longitudinal en modelo unidimensional. |
| $V=IR,\quad R(T)\approx R_0[1+\alpha(T-T_0)]$ | Ohm con R constante en el régimen; dependencia térmica lineal solo en intervalo válido, α en K⁻¹. |
| $P=VI=I^2R=V^2/R,\quad W=\int P\,dt$ | P absorbida según convención pasiva; últimas dos formas para resistor óhmico R>0. Energía en J. |
| $I_{\rm rms}=\sqrt{\frac1T\int_0^T I^2(t)\,dt}$ | Corriente eficaz que disipa igual energía en R constante. Diferente de Imedia=(1/T)∫I dt. |
| $1\,\mathrm{kWh}=3{,}6\times10^6\,\mathrm J$ | Energía, no potencia; 1 W=1 J/s. |

## Capítulo 16 · Fuentes, conexiones resistivas y balance de potencia

### Fuerza electromotriz no es una fuerza mecánica

La fem ℰ mide energía suministrada por unidad de carga por mecanismos internos de la fuente: se mide en volt, no en newton. Una fuente ideal mantiene una diferencia de potencial independientemente de la corriente dentro del modelo. Una batería real puede aproximarse por una fem ideal en serie con resistencia interna r. Durante descarga, su tensión de terminales es Vterminal=ℰ−Ir. Durante carga, con corriente entrando al terminal positivo, la relación correspondiente se escribe Vterminal=ℰ+Ir si I se toma como módulo de carga.

La condición «circuito abierto» implica I=0 y Vterminal≈ℰ en este modelo; no significa voltaje cero. Un cortocircuito ideal de terminales da I=ℰ/r si r>0, que puede ser muy grande. Es un cálculo de modelo, no un procedimiento experimental recomendado ni una corriente infinita en una batería real con resistencia interna.

### Serie y paralelo de resistores

Resistores en serie simple comparten corriente porque no hay derivaciones entre ellos, y sus caídas se suman: Req=ΣRᵢ. En paralelo comparten los mismos dos nodos y por tanto la misma tensión: 1/Req=Σ1/Rᵢ. Para dos, Req=R₁R₂/(R₁+R₂). En serie Req supera a cada una; en paralelo es menor que cualquiera. Estas son las reglas inversas a las de capacitores.

Un cable ideal hace equipotenciales sus puntos conectados. Si se agrega un puente que conecta directamente los extremos de un resistor, ese resistor queda con tensión cero y corriente cero en el modelo resistivo; la topología cambió. Cruzar líneas en un dibujo no indica conexión si no hay nodo señalado o continuidad declarada. Antes de hacer operaciones, identificá nodos y ramas.

### Ejemplo con fuente real y red mixta

Una fuente de 12 V con r=1 Ω alimenta 3 Ω en serie con un paralelo de 6 Ω y 3 Ω. El paralelo equivale a 2 Ω; la carga externa a 5 Ω y el total con r a 6 Ω. La corriente de la fuente es 2 A y la tensión terminal 10 V. En el resistor externo de 3 Ω caen 6 V; el paralelo recibe 4 V. Sus corrientes son 2/3 A y 4/3 A, que suman 2 A.

La fuente ideal suministra ℰI=24 W. La resistencia interna disipa I²r=4 W. La carga recibe 20 W: 12 W en el resistor serie y 8 W en el paralelo. Conectar una rama adicional en paralelo reduce la resistencia externa y aumenta la corriente total para esta fuente, pero su tensión terminal puede bajar por la caída interna. Por eso no se conserva automáticamente el brillo de todas las lámparas cuando se agrega otra si la fuente no es ideal.

### Divisores de tensión y corriente

Dos resistores en serie atravesados por la misma I tienen V₁=Vtotal R₁/(R₁+R₂). Si se conecta una carga a la salida, cambia la red: hay que combinarla en paralelo con el resistor correspondiente antes de usar el divisor. Un divisor «sin carga» no mantiene su tensión frente a cualquier dispositivo conectado.

Para dos resistores en paralelo con corriente total I, I₁=I R₂/(R₁+R₂) e I₂=I R₁/(R₁+R₂). La rama de mayor resistencia lleva menor corriente. No se intercambian los numeradores con la regla de divisor de tensión sin revisar la derivación V=IReq.

### Máxima potencia en una carga

Una fem ℰ con r>0 entrega a R una potencia P=ℰ²R/(R+r)². Derivar respecto de R da un signo proporcional a r−R, así que el máximo se obtiene en R=r y Pmax=ℰ²/(4r). En ese punto la mitad de la potencia generada se disipa internamente y la mitad en la carga: máxima potencia no equivale a máxima eficiencia. Para r=0 ideal, no hay un máximo finito de esa forma; la fórmula presupone r positiva y un modelo válido de fuente.

Para ℰ=10 V,r=2 Ω, el máximo en R=2 Ω da I=2,5 A y P=12,5 W. Si R=8 Ω, I=1 A y P=8 W; aunque se entrega menos potencia, la fracción destinada a la carga es 8/(8+2)=80%, mayor que 50%. Las dos preguntas de diseño son diferentes.

### Práctica y respuestas

**C16.1.** 4 Ω y 12 Ω en paralelo, seguidos de 2 Ω en serie: Req. **C16.2.** Esa carga con batería ideal de 10 V: corriente total y tensión del paralelo. **C16.3.** Batería ℰ=9 V,r=1 Ω,R=8 Ω: I,Vterminal y potencias. **C16.4.** ¿Qué significa corriente negativa en una orientación elegida? **C16.5.** ℰ=8 V,r=4 Ω: carga de máxima potencia y valor de esa potencia.

**Respuestas.** C16.1: paralelo 3 Ω y total 5 Ω. C16.2: 2 A y 6 V en el paralelo. C16.3: 1 A,8 V, fuente ideal 9 W, pérdida interna 1 W y carga 8 W. C16.4: el flujo convencional real es opuesto al supuesto, no que la corriente sea físicamente imposible. C16.5: R=4 Ω,Pmax=4 W.


### Hoja de fórmulas del capítulo 16

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V_{\rm terminal}=\mathcal E-Ir,\quad I=\frac{\mathcal E}{R+r}$ | Batería descargando con resistencia interna r y carga externa R. En carga cambia la orientación y relación de signos. |
| $R_{\rm serie}=\sum_iR_i,\quad\frac1{R_{\parallel}}=\sum_i\frac1{R_i}$ | Serie sin derivaciones comparte corriente; paralelo entre mismos dos nodos comparte voltaje. |
| $V_1=V\frac{R_1}{R_1+R_2},\quad I_1=I\frac{R_2}{R_1+R_2}$ | Primera: divisor serie sin carga adicional. Segunda: divisor de dos ramas paralelas. Reconstruir red si se conecta instrumento o carga. |
| $P_R=\frac{\mathcal E^2R}{(R+r)^2},\quad R_{\rm max}=r,\quad P_{\rm max}=\frac{\mathcal E^2}{4r}$ | Fuente con r>0 constante y carga resistiva; máxima potencia tiene eficiencia 50%, no máxima eficiencia. |

## Capítulo 17 · Kirchhoff: nodos, mallas y fuentes que absorben energía

### Lo que se conserva

La ley de nodos expresa conservación de carga: en un nodo ideal sin almacenamiento, la suma algebraica de corrientes es cero. Elegir entrantes positivas y salientes negativas es una convención; la contraria también sirve si se conserva en toda la ecuación. No se suman módulos cuando algunas ramas entran y otras salen.

La ley de mallas de circuitos concentrados habituales establece que la suma de subidas y caídas de tensión en una vuelta es cero. Al recorrer un resistor en el sentido elegido de corriente aparece −IR; en el contrario, +IR. Al atravesar una fuente ideal de su terminal negativo al positivo aparece +ℰ y al revés −ℰ. El signo no se decide por estar a la izquierda o derecha del dibujo. Si hay flujo magnético externo variable, se debe incorporar la fem inducida: la forma electrostática simple no se aplica ignorándola.

### Un procedimiento que evita ecuaciones repetidas

Identificá los nodos unidos por cables ideales. Elegí una corriente orientada para cada rama desconocida. Escribí ecuaciones de nodos independientes y después de mallas independientes hasta completar el sistema. Resolvé con símbolos o números consistentes, interpretá signos y comprobá con ecuaciones que no se usaron. Escribir todas las vueltas imaginables puede generar ecuaciones redundantes, no información adicional.

Con un método de potenciales nodales, se elige un nodo como V=0 y se expresan las corrientes resistivas mediante diferencias de potencial divididas por R. La referencia cero es arbitraria. Si una fuente ideal une dos nodos desconocidos, su diferencia conocida se agrega como restricción; no se la convierte en un resistor de resistencia cero dividiendo por cero.

### Ejemplo completo de tres ramas

Un nodo superior A se conecta al nodo inferior B, elegido 0 V, mediante tres ramas. La izquierda contiene un resistor de 3 Ω conectado a un punto que una fuente mantiene a +12 V respecto de B. La derecha contiene otro resistor de 3 Ω conectado a un punto a +3 V respecto de B. La central es una resistencia de 3 Ω entre A y B. Estos datos definen todos los nodos, sin depender de cómo se dibujen los cables.

![Circuito de tres ramas: nodos, fuentes y corrientes de referencia](/planos-de-estudio/img/fisica2/circuito.svg)

Sea V=VA. Las corrientes que salen de A hacia las otras terminales son (V−12)/3,(V−3)/3 y V/3. La ley de nodos da [(V−12)+(V−3)+V]/3=0, es decir 3V−15=0 y V=5 V. La corriente de la fuente de 12 V hacia A es (12−5)/3=7/3 A. Desde A hacia la fuente de 3 V circulan (5−3)/3=2/3 A. La central lleva 5/3 A de A a B. El balance entrante 7/3 coincide con el saliente 2/3+5/3.

Si inicialmente hubiésemos dibujado ambas corrientes laterales entrando a A, la derecha resultaría −2/3 A. No se cambia una ecuación para «hacerla positiva»: se interpreta que su dirección real es contraria a la referencia. El sistema ya contiene la respuesta de sentido.

### Verificar voltajes por dos caminos

Desde B hasta A por la izquierda se suben 12 V en la fuente y se caen (7/3)·3=7 V en el resistor: VA=5 V. Por la derecha se suben 3 V en la fuente y luego se recorre el resistor en sentido contrario a su corriente real, así que se suben 2 V: también 5 V. La vuelta completa izquierda-central cumple 12−7−5=0. La derecha-central, en una orientación coherente, cumple 3+2−5=0.

Esta comprobación independiente detecta errores de signo que una única ecuación puede ocultar. La diferencia entre A y B es una sola; no depende del camino en un circuito electrostático concentrado de estas características.

### Verificar potencia y reconocer una batería cargándose

La fuente de 12 V entrega 12·(7/3)=28 W. La corriente entra por el terminal positivo de la de 3 V, que absorbe 3·(2/3)=2 W. La potencia neta entregada a los resistores es 26 W. Sus pérdidas son (7/3)²·3=49/3 W, (2/3)²·3=4/3 W y (5/3)²·3=25/3 W; suman 26 W.

La fuente pequeña no «entrega siempre» por ser una batería: en esta conexión está recibiendo energía. Este ejemplo idealizado muestra el signo de potencia; no constituye un procedimiento de carga de una batería real, que requiere un dispositivo adecuado a su química y límites de operación.

### Errores frecuentes

No se asigna una corriente distinta a dos elementos en serie sin una derivación intermedia. No se equiparan tensiones solo porque dos resistencias tienen igual valor: deben estar en paralelo o existir otra razón del circuito. Un conductor ideal no tiene caída de tensión, pero puede transportar corriente. Una rama abierta no transporta corriente estacionaria, pero puede sostener diferencia de potencial entre sus extremos. Un capacitor en estado estacionario continuo se trata como rama abierta ideal; justo al conmutar hay que analizar su tensión inicial.

### Práctica y respuestas

**C17.1.** Al nodo entran 2 A y salen 0,5 A y una corriente I: hallá I. **C17.2.** Dos fuentes de 12 V y 4 V opuestas en una malla con resistencia total 8 Ω: corriente. **C17.3.** En esa malla, ¿la fuente de 4 V entrega o absorbe? **C17.4.** Repetí el ejemplo de tres ramas con fuentes 9 V y 0 V y tres resistencias de 3 Ω. **C17.5.** ¿Una corriente negativa invalida la solución?

**Respuestas.** C17.1: 1,5 A salientes. C17.2: 1 A en el sentido impulsado por la de 12 V. C17.3: absorbe 4 W si la corriente entra por su positivo; la grande entrega 12 W y los resistores disipan 8 W. C17.4: VA=3 V, entran 2 A desde 9 V y salen 1 A por cada otra rama. C17.5: no; informa sentido opuesto al asignado y debe conservarse al verificar balances.


### Hoja de fórmulas del capítulo 17

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\sum I_{\rm entrantes}-\sum I_{\rm salientes}=0$ | Nodo ideal sin acumulación apreciable; una corriente negativa indica sentido real opuesto al supuesto. |
| $\sum_{\rm malla}\Delta V_i=0$ | Circuitos concentrados con fems incluidas; flujo magnético externo variable exige incorporar fem inducida. |
| $\Delta V_R=-IR\quad\text{al recorrer según }I$ | En sentido contrario +IR; fuente de negativo a positivo +ℰ, de positivo a negativo −ℰ. |
| $I_{A\to B}=(V_A-V_B)/R,\quad P_{\rm absorbida}=VI$ | Resistor óhmico; en convención pasiva I entra por terminal positivo de V. Balance total de potencias debe cerrar. |

## Capítulo 18 · Circuitos RC: transitorios, condiciones iniciales y energía

### Por qué la corriente deja de ser constante

Al conectar un capacitor descargado a una fuente a través de una resistencia, inicialmente su voltaje es cero. La fuente impulsa corriente y se separa carga; al crecer Vc=q/C, disminuye el voltaje disponible sobre R y por tanto la corriente. No pasa carga libre a través del aislante ideal entre placas: circula por el circuito externo, aumentando cargas opuestas en las armaduras.

Para R,C y fem ℰ constantes, la ecuación de malla es ℰ−RI−q/C=0. Si I=dq/dt con la orientación de carga elegida, resulta R dq/dt+q/C=ℰ. La solución debe satisfacer tanto esa ecuación como la carga inicial; no basta recordar una exponencial sin su condición inicial.

### Carga desde cero y constante de tiempo

Con q(0)=0,


$$
q(t)=C\mathcal E(1-e^{-t/RC}),\quad I(t)=\frac{\mathcal E}{R}e^{-t/RC},\quad V_C(t)=\mathcal E(1-e^{-t/RC}).
$$


La constante τ=RC tiene unidad de tiempo. En t=τ, q llega al 63,2% de su valor final y la corriente cae al 36,8% de su valor inicial. En 5τ, el error respecto del límite es e⁻⁵≈0,00674, menor que 1%, pero no exactamente cero. «Completamente cargado» suele ser una aproximación de precisión experimental; matemáticamente la exponencial alcanza el límite solo cuando t→∞.

![Carga y descarga de un capacitor en unidades de la constante de tiempo](/planos-de-estudio/img/fisica2/rc.svg)

Para alcanzar una fracción f de carga final, t=−RC ln(1−f), con 0≤f<1. Llegar al 90% requiere τln10≈2,303τ. La corriente cae al 10% en ese mismo instante en la carga desde cero. Es incorrecto interpretar «90%» como t=0,9τ.

### Descarga y signo de la corriente

Sin fuente, con carga inicial Q₀ en una placa, R dq/dt+q/C=0 y q=Q₀e⁻ᵗ/ᴿᶜ. Si la corriente positiva se define saliendo de esa placa durante descarga, I=−dq/dt=(Q₀/RC)e⁻ᵗ/ᴿᶜ. Si se conserva la orientación que cargaba positivamente la placa, la corriente será negativa. Las dos convenciones describen lo mismo; hay que indicar cuál se usa.

La semivida de la carga y del voltaje es τln2. La energía U=q²/(2C) decae como e⁻²ᵗ/ᴿᶜ y su semivida es (τ/2)ln2, no τln2. Confundir exponencial de carga con energía produce un factor dos en tiempos de disipación.

### Ejemplo numérico y una conmutación

R=20 kΩ,C=100 μF,ℰ=10 V. τ=2 s, Qfinal=1 mC e Iinicial=0,50 mA. En t=2 s, Vc≈6,32 V,q≈0,632 mC,I≈0,184 mA. Si en ese instante se desconecta la fuente y el capacitor se descarga por 10 kΩ, su tensión inicial de descarga es 6,32 V y la nueva τ=1 s. Tomando un nuevo tiempo t′ desde la conmutación, Vc=6,32e⁻ᵗ′ V.

La tensión de un capacitor ideal no puede saltar instantáneamente bajo una corriente finita: un salto de q=CV exigiría transferencia instantánea de carga. La corriente sí puede cambiar al cambiar la red. No se reinicia q=0 cada vez que se mueve un interruptor, y no se usa el origen de tiempo anterior sin ajustar el término inicial.

### Forma general y resistencia vista por el capacitor

Para una red lineal equivalente a una fuente constante V∞ y una resistencia Rth vista desde el capacitor, Vc(t)=V∞+[Vc(0)−V∞]e⁻ᵗ/ᴿᵗʰᶜ. Para hallar Rth se desactivan fuentes independientes ideales: fuentes de tensión se sustituyen por cortocircuitos y fuentes de corriente por circuitos abiertos, si las hubiera. No se elimina la resistencia interna física de una fuente real. Esta ampliación permite resolver redes RC que no parecen una sola R en serie al dibujarlas.

### Energía durante la carga

Desde descarga completa hasta el estado final, una fuente ideal entrega ∫ℰI dt=ℰQfinal=Cℰ². El capacitor almacena ½Cℰ² y la resistencia disipa la otra mitad. La fracción no depende de R en ese modelo: R cambia la rapidez y la potencia instantánea, pero no esa energía total. En el ejemplo, la fuente entrega 10 mJ, quedan 5 mJ almacenados y se disipan 5 mJ durante una carga completa. Al descargar después completamente, esos 5 mJ almacenados también se disipan.

### Leer una curva experimental

En descarga, ln(Vc/V₀)=−t/τ, así que el gráfico semilogarítmico permite estimar τ a partir de la pendiente. En carga se puede graficar ln[1−Vc/V∞]. Hay que conocer o ajustar V∞; usar un valor incorrecto distorsiona la recta. La práctica 7 incluye curvas para comparar resistencias: con igual C, la descarga más lenta corresponde a mayor R, no a mayor corriente inicial para una misma tensión.

### Práctica y respuestas

**RC18.1.** R=10 kΩ,C=20 μF: τ. **RC18.2.** Con fuente de 5 V desde cero: I(0),Qfinal y t al 90%. **RC18.3.** Descarga de 8 V con τ=3 s: V en 3 s. **RC18.4.** ¿Cuándo cae la energía a la mitad? **RC18.5.** Si se duplica R con fuente ideal, ¿cambia la carga final?

**Respuestas.** RC18.1: 0,20 s. RC18.2: 0,50 mA,100 μC y 0,20ln10≈0,461 s. RC18.3: 8/e≈2,94 V. RC18.4: (3/2)ln2≈1,04 s para esa descarga. RC18.5: no; cambia τ y la corriente inicial, pero Qfinal=Cℰ si no hay otras fugas ni cargas.


### Hoja de fórmulas del capítulo 18

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\tau=RC,\quad R\frac{dq}{dt}+q/C=\mathcal E$ | RC serie con parámetros constantes y corriente de carga I=dq/dt; τ en segundos. |
| $q=C\mathcal E(1-e^{-t/\tau}),\quad I=(\mathcal E/R)e^{-t/\tau}$ | Carga desde q(0)=0 con fuente constante; Vc=q/C. Solo aproximación asintótica a carga completa. |
| $q=Q_0e^{-t/\tau},\quad I_{\rm salida}=-dq/dt$ | Descarga sin fuente; si se mantiene la referencia de carga la corriente resulta negativa. V y q comparten exponencial. |
| $V_C(t)=V_\infty+[V_C(0)-V_\infty]e^{-t/(R_{\rm th}C)}$ | Red lineal de primer orden; Rth vista por C al desactivar fuentes independientes correctamente. Tensión inicial continua para corriente finita. |
| $t_f=-\tau\ln(1-f),\quad t_{1/2,U}=\tfrac\tau2\ln2$ | Primera: fracción de carga desde cero 0≤f<1. Segunda: semivida de energía durante descarga. |
| $W_{\rm fuente}=C\mathcal E^2,\quad U_f=\tfrac12C\mathcal E^2$ | Carga completa desde cero: otra mitad disipada en R idealizada; no extrapolar a condiciones iniciales diferentes. |

## Capítulo 19 · Medición, laboratorio e incertidumbre

### Medir modifica el circuito

Un voltímetro se conecta entre los dos puntos cuya diferencia de potencial se desea medir, en paralelo. El ideal tiene resistencia infinita y no deriva corriente; el real tiene resistencia grande pero finita. Un amperímetro se inserta en serie con la rama de interés; el ideal tiene resistencia cero y el real pequeña. Un óhmetro usa su propia fuente interna y se aplica a un elemento desenergizado y aislado de caminos que alteren la lectura.

El apunte de circuitos, página 24, incluye la frase «la corriente a medir» en el apartado de voltímetro. Lo que se mide allí es diferencia de potencial; el instrumento no debe atravesarse por toda la corriente de la rama. El diagrama y la explicación de resistencia alta son coherentes con conexión en paralelo. En el laboratorio se verifican función, bornes, escala y esquema con las instrucciones del docente antes de energizar.

El laboratorio del aula trabaja con pilas y un tablero específico. Sus indicaciones no se extrapolan a red domiciliaria ni equipos de alta tensión. La guía de medición que sigue se refiere a ese contexto educativo de baja tensión y a análisis de circuitos; no es un procedimiento para intervenir instalaciones eléctricas.

### Carga introducida por un voltímetro

Una fuente ideal de 12 V alimenta un divisor de dos resistores de 10 kΩ. Sin instrumento, el punto medio está a 6 V. Un voltímetro de resistencia 10 kΩ conectado sobre el resistor inferior lo convierte en un paralelo de 5 kΩ. La tensión leída será 12·5/(10+5)=4 V. El instrumento no «se equivocó dos voltios» por resolución: modificó el sistema al cargarlo.

Con un voltímetro de 10 MΩ, el paralelo vale aproximadamente 9,990 kΩ y la lectura es aproximadamente 5,997 V, mucho más próxima al valor sin carga. Para decidir si el efecto es despreciable, se compara con la precisión requerida, no se afirma que todo instrumento digital es perfecto.

### Resistencia interna de un amperímetro

Una fuente de 6 V alimenta R=100 Ω. Idealmente I=60 mA. Si se inserta un amperímetro de resistencia 5 Ω en serie, la corriente pasa a 6/105≈57,14 mA. Su lectura puede ser exacta para el circuito modificado y aun así diferir del valor que se quería inferir antes de insertar el aparato. Conectarlo en paralelo a la fuente no mide esa corriente de rama y crea un camino de muy baja resistencia; no es una conexión válida para ese objetivo.

### Diseñar una tabla y un gráfico útiles

La guía de laboratorio pide comparar tensión, resistencia y corriente. Una tabla debe incluir símbolos, unidades y estimaciones de incertidumbre, además de los valores medidos. Registrar solo números sin unidad impide reconstruir la experiencia. Las resistencias nominales de bandas tienen tolerancia; el valor medido con óhmetro también tiene incertidumbre instrumental, que no es lo mismo que tolerancia de fabricación.

Si se mantienen aproximadamente constantes V y temperatura y se cambia R, I frente a 1/R debería ser lineal con pendiente V. Si la fuente cae de tensión al aumentar corriente, el gráfico puede desviarse: no corresponde «corregir datos» para forzar una recta. Se mide la tensión real de cada caso y se discuten limitaciones del modelo. Una lámpara que cambia de temperatura tampoco se comporta como resistencia constante en todo el barrido.

### Propagar incertidumbres con un ejemplo

Para una estimación conservadora de pequeñas cotas, R=V/I da δR/R≈δV/|V|+δI/|I|. Si son incertidumbres estándar independientes, la combinación linealizada es cuadrática: uR/R≈√[(uV/V)²+(uI/I)²]. Estas reglas responden a interpretaciones diferentes; se elige la requerida por la cátedra y se declara. No se presentan como fórmulas exactas válidas con cualquier distribución o error grande.

Ejemplo: V=(5,00±0,02) V e I=(10,0±0,1) mA. R=500 Ω. La cota relativa aproximada es 0,004+0,010=0,014, que da δR≈7 Ω. Si esos ± fueran incertidumbres estándar independientes, uR≈500√(0,004²+0,010²)≈5,39 Ω. No se reemplaza un tipo por el otro porque produzca un intervalo más pequeño.

### Verificar Kirchhoff con datos reales

Un residuo de nodo puede definirse rI=Ientrante−ΣIsalientes, y uno de malla rV=ΣΔV orientadas. En el modelo ideal ambos son cero. Experimentalmente se evalúa si son compatibles con cero dentro de las incertidumbres y de las limitaciones instrumentales. Un residuo no nulo no demuestra por sí solo violación de conservación: puede haber ramas omitidas, signos incorrectos, tensión de fuente variable o mediciones tomadas en estados distintos.

La potencia total ofrece una comprobación adicional, pero se debe distinguir energía suministrada por fuentes, energía absorbida por otras fuentes y disipación. No se inventan mediciones de laboratorio para completar tablas: los ejemplos numéricos del manual son simulados y se identifican como tales.

### Estructura del informe

La guía institucional solicita encabezado y autores, resumen, teoría y montaje, procedimiento, resultados con incertidumbres, discusión, conclusiones y bibliografía. Un esquema debe permitir reconstruir nodos y polaridades. Las conclusiones se desprenden de datos y análisis; no basta copiar «se verificó la ley» sin mostrar el contraste. Si una medición no coincide, se informa y se analiza con honestidad.

### Práctica y respuestas

**L19.1.** ¿Cómo se conectan voltímetro y amperímetro? **L19.2.** R=200 Ω a 10 V, amperímetro con 10 Ω: lectura esperada. **L19.3.** V=4 V,I=20 mA: R; cotas relativas 1% y 2%: cota aproximada de R. **L19.4.** ¿Una tolerancia del 5% garantiza una medición exacta al 5%? **L19.5.** ¿Qué significa un residuo de malla pequeño comparado con su incertidumbre?

**Respuestas.** L19.1: paralelo y serie respectivamente. L19.2: 10/210 A≈47,62 mA frente a 50 mA sin instrumento. L19.3: 200 Ω y cota aproximada 3%, es decir 6 Ω. L19.4: no; tolerancia de fabricación e incertidumbre de medición describen cosas diferentes. L19.5: que los datos pueden ser compatibles con el balance ideal; no que se haya probado exactitud absoluta de todos los elementos.


### Hoja de fórmulas del capítulo 19

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R_{\rm paralelo}=\frac{RR_V}{R+R_V},\quad I_{\rm con\ amperimetro}=\frac V{R+R_A}$ | Voltímetro de resistencia RV carga la rama; amperímetro de resistencia RA agrega resistencia serie en circuito simple. |
| $\frac{\delta R}{\lvert R\rvert}\approx\frac{\delta V}{\lvert V\rvert}+\frac{\delta I}{\lvert I\rvert}$ | Cota conservadora linealizada de pequeños errores para R=V/I; no confundir con incertidumbres estándar. |
| $\frac{u_R}{\lvert R\rvert}\approx\sqrt{(u_V/V)^2+(u_I/I)^2}$ | Propagación linealizada de incertidumbres estándar independientes; requiere valores no nulos y modelo válido. |
| $r_I=\sum I_{\rm entrantes}-\sum I_{\rm salientes},\quad r_V=\sum\Delta V_{\rm malla}$ | Residuos experimentales; contrastar con incertidumbres, conexiones y estabilidad, sin inventar datos medidos. |

## Formulario de la Unidad 5 · Corriente y circuitos

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 14 · Corriente

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I=dQ/dt,\quad Q=\int_{t_1}^{t_2}I(t)\,dt$ | Corriente orientada, unidad A=C/s. Integral da carga neta, no recorrido total de carga sin distinguir sentido. |
| $I=\int_A\mathbf J\cdot d\mathbf A,\quad\mathbf J=nq\mathbf v_d$ | Modelo de una especie de portadores; sumar especies si hay varias. J en A/m²; I escalar con signo. |
| $I=n\lvert q\rvert A\lvert v_d\rvert$ | Módulo para deriva uniforme perpendicular a sección; electrones se desplazan contra corriente convencional. |
| $\mathbf J=\sigma_{\rm cond}\mathbf E,\quad\rho_{\rm res}=1/\sigma_{\rm cond}$ | Material óhmico lineal isótropo a condiciones fijadas; conductividad en S/m, resistividad en Ω·m. |

### Capítulo 15 · Resistencia y potencia

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R=\rho_{\rm res}L/A,\quad dR=\rho_{\rm res}\,dx/A(x)$ | Primera para sección y resistividad uniformes; segunda para integración longitudinal en modelo unidimensional. |
| $V=IR,\quad R(T)\approx R_0[1+\alpha(T-T_0)]$ | Ohm con R constante en el régimen; dependencia térmica lineal solo en intervalo válido, α en K⁻¹. |
| $P=VI=I^2R=V^2/R,\quad W=\int P\,dt$ | P absorbida según convención pasiva; últimas dos formas para resistor óhmico R>0. Energía en J. |
| $I_{\rm rms}=\sqrt{\frac1T\int_0^T I^2(t)\,dt}$ | Corriente eficaz que disipa igual energía en R constante. Diferente de Imedia=(1/T)∫I dt. |
| $1\,\mathrm{kWh}=3{,}6\times10^6\,\mathrm J$ | Energía, no potencia; 1 W=1 J/s. |

### Capítulo 16 · Fuentes y redes resistivas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $V_{\rm terminal}=\mathcal E-Ir,\quad I=\frac{\mathcal E}{R+r}$ | Batería descargando con resistencia interna r y carga externa R. En carga cambia la orientación y relación de signos. |
| $R_{\rm serie}=\sum_iR_i,\quad\frac1{R_{\parallel}}=\sum_i\frac1{R_i}$ | Serie sin derivaciones comparte corriente; paralelo entre mismos dos nodos comparte voltaje. |
| $V_1=V\frac{R_1}{R_1+R_2},\quad I_1=I\frac{R_2}{R_1+R_2}$ | Primera: divisor serie sin carga adicional. Segunda: divisor de dos ramas paralelas. Reconstruir red si se conecta instrumento o carga. |
| $P_R=\frac{\mathcal E^2R}{(R+r)^2},\quad R_{\rm max}=r,\quad P_{\rm max}=\frac{\mathcal E^2}{4r}$ | Fuente con r>0 constante y carga resistiva; máxima potencia tiene eficiencia 50%, no máxima eficiencia. |

### Capítulo 17 · Kirchhoff

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\sum I_{\rm entrantes}-\sum I_{\rm salientes}=0$ | Nodo ideal sin acumulación apreciable; una corriente negativa indica sentido real opuesto al supuesto. |
| $\sum_{\rm malla}\Delta V_i=0$ | Circuitos concentrados con fems incluidas; flujo magnético externo variable exige incorporar fem inducida. |
| $\Delta V_R=-IR\quad\text{al recorrer según }I$ | En sentido contrario +IR; fuente de negativo a positivo +ℰ, de positivo a negativo −ℰ. |
| $I_{A\to B}=(V_A-V_B)/R,\quad P_{\rm absorbida}=VI$ | Resistor óhmico; en convención pasiva I entra por terminal positivo de V. Balance total de potencias debe cerrar. |

### Capítulo 18 · RC

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\tau=RC,\quad R\frac{dq}{dt}+q/C=\mathcal E$ | RC serie con parámetros constantes y corriente de carga I=dq/dt; τ en segundos. |
| $q=C\mathcal E(1-e^{-t/\tau}),\quad I=(\mathcal E/R)e^{-t/\tau}$ | Carga desde q(0)=0 con fuente constante; Vc=q/C. Solo aproximación asintótica a carga completa. |
| $q=Q_0e^{-t/\tau},\quad I_{\rm salida}=-dq/dt$ | Descarga sin fuente; si se mantiene la referencia de carga la corriente resulta negativa. V y q comparten exponencial. |
| $V_C(t)=V_\infty+[V_C(0)-V_\infty]e^{-t/(R_{\rm th}C)}$ | Red lineal de primer orden; Rth vista por C al desactivar fuentes independientes correctamente. Tensión inicial continua para corriente finita. |
| $t_f=-\tau\ln(1-f),\quad t_{1/2,U}=\tfrac\tau2\ln2$ | Primera: fracción de carga desde cero 0≤f<1. Segunda: semivida de energía durante descarga. |
| $W_{\rm fuente}=C\mathcal E^2,\quad U_f=\tfrac12C\mathcal E^2$ | Carga completa desde cero: otra mitad disipada en R idealizada; no extrapolar a condiciones iniciales diferentes. |

### Capítulo 19 · Laboratorio

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $R_{\rm paralelo}=\frac{RR_V}{R+R_V},\quad I_{\rm con\ amperimetro}=\frac V{R+R_A}$ | Voltímetro de resistencia RV carga la rama; amperímetro de resistencia RA agrega resistencia serie en circuito simple. |
| $\frac{\delta R}{\lvert R\rvert}\approx\frac{\delta V}{\lvert V\rvert}+\frac{\delta I}{\lvert I\rvert}$ | Cota conservadora linealizada de pequeños errores para R=V/I; no confundir con incertidumbres estándar. |
| $\frac{u_R}{\lvert R\rvert}\approx\sqrt{(u_V/V)^2+(u_I/I)^2}$ | Propagación linealizada de incertidumbres estándar independientes; requiere valores no nulos y modelo válido. |
| $r_I=\sum I_{\rm entrantes}-\sum I_{\rm salientes},\quad r_V=\sum\Delta V_{\rm malla}$ | Residuos experimentales; contrastar con incertidumbres, conexiones y estabilidad, sin inventar datos medidos. |

## Capítulo 20 · Fuerza de Lorentz y movimiento en campos magnéticos

### Una fuerza perpendicular a la velocidad

En presencia de campos eléctrico y magnético, una carga puntual q con velocidad v recibe F=q(E+v×B). La parte magnética tiene módulo |q|vBsinθ, donde θ es el ángulo entre v y B. Su dirección se obtiene primero con v×B y después se invierte si q<0. El campo magnético se mide en tesla, T=N/(A·m). Un gauss equivale a 10⁻⁴ T.

Ejemplo de sentido: v hacia +x y B hacia +z producen v×B hacia −y. La fuerza sobre un protón apunta hacia −y; sobre un electrón, hacia +y. Si v es paralela o antiparalela a B, el producto vectorial es cero. Un campo magnético no ejerce esta fuerza sobre una carga en reposo, aunque E sí pueda hacerlo.

La potencia magnética sobre una partícula es FB·v=q(v×B)·v=0. Por sí sola, la fuerza magnética no cambia su energía cinética ni el módulo de su velocidad; cambia su dirección. La afirmación sigue siendo válida localmente aunque B varíe en el espacio. Si B cambia en el tiempo puede aparecer E inducido, que sí hace trabajo: entonces ya no se está considerando «solo fuerza magnética».

### Órbita circular en campo uniforme

Con v perpendicular a B uniforme, sin otras fuerzas y en régimen no relativista, el módulo de fuerza actúa como centrípeta: |q|vB=mv²/r. Se deduce r=mv/(|q|B), ω=|q|B/m y T=2πm/(|q|B). El módulo de carga es necesario para radios y períodos positivos. El signo de q decide el sentido de giro, no un radio negativo.

Para un protón con m=1,67×10⁻²⁷ kg,q=1,60×10⁻¹⁹ C,v=1,0×10⁶ m/s y B=0,20 T, el radio es aproximadamente 0,0522 m y el período 3,28×10⁻⁷ s. La frecuencia no depende de v en el modelo clásico; para partículas relativistas aparece la dependencia del factor γ. Las hipótesis impiden extrapolar una fórmula clásica hasta obtener velocidades mayores que c.

![Movimiento circular de una carga y regla de la fuerza magnética](/planos-de-estudio/img/fisica2/lorentz.svg)

### Entrada oblicua: hélice

Separá v en v∥ y v⊥ respecto de B. La componente paralela permanece constante; la perpendicular genera movimiento circular. El radio usa v⊥, no la rapidez total. El avance axial por vuelta es h=v∥T, y la trayectoria es helicoidal. Si v⊥=0, se reduce a una recta; si v∥=0, a una circunferencia.

La constancia de rapidez no implica aceleración cero: la aceleración centrípeta cambia la dirección del vector velocidad. Un radio mayor puede indicar mayor masa, mayor v⊥ o menor |q|B; comparar radios sin fijar los otros parámetros no identifica por sí solo qué partícula es más rápida.

### Selector de velocidades

Campos cruzados pueden satisfacer E+v×B=0 para una dirección y rapidez determinadas. En la geometría perpendicular usual, v=E/B. La condición de cancelación es independiente de masa y del signo de la carga para q≠0, pero exige la orientación correcta. El cociente de módulos no basta si los vectores están colocados de manera que las fuerzas se sumen.

Si E=2,0×10⁴ V/m y B=0,10 T, la rapidez seleccionada es 2,0×10⁵ m/s. Tomando v hacia +x y E hacia +y, se necesita B hacia +z para que v×B apunte a −y. Para un electrón ambas fuerzas cambian de sentido y siguen cancelándose. Una componente adicional de velocidad paralela a B no cambia v×B; el selector ideal restringe la componente perpendicular pertinente, mientras la geometría de entrada suele fijar la dirección del haz.

### Espectrometría de masas y aceleración previa

Si después del selector los iones entran en una región con solo B uniforme perpendicular, m=|q|Br/v. Si describen un semicírculo y se mide distancia entre entrada y detector, esa distancia es el diámetro 2r. Omitir ese factor dos duplica la masa inferida. Iones con igual carga y rapidez tienen radios proporcionales a sus masas.

Si en cambio se aceleran desde reposo por una diferencia favorable de potencial Va, mv²/2=|q|Va. Al combinar con r=mv/(|q|B) se obtiene m=|q|B²r²/(2Va). No se confunde «todos con igual rapidez por selector» con «todos con igual energía por aceleración»: masas distintas aceleradas por el mismo voltaje tienen velocidades distintas.

### Ciclotrón y límite clásico

Un campo magnético curva la trayectoria y un campo eléctrico entre regiones acelera la partícula. La energía no aumenta por el trabajo magnético, sino por el eléctrico. La fórmula clásica de energía de salida K=q²B²R²/(2m) requiere que v=|q|BR/m sea mucho menor que c. El ejercicio de ciclotrón de la práctica 8 usa B=1,4 T y R=1,7 m: aplicados al protón en el modelo clásico dan v≈2,28×10⁸ m/s, aproximadamente 0,76c. Aunque es menor que c, ya no es una rapidez pequeña frente a ella y la aproximación no relativista pierde precisión. Puede calcularse el resultado clásico si eso pide la consigna, pero debe indicarse su limitación. Una extensión relativista usa p=|q|BR y K=√[(pc)²+(mc²)²]−mc², fuera del desarrollo básico de órbitas clásicas.

### Práctica y respuestas

**M20.1.** q=+2 μC,v=(3,0,0) m/s,B=(0,0,4) T: fuerza. **M20.2.** ¿Qué cambia para q negativa? **M20.3.** Si v⊥ se duplica con todo lo demás fijo: r y T. **M20.4.** E=3000 V/m,B=0,020 T: rapidez seleccionada. **M20.5.** Un detector registra diámetro 0,20 m: radio a usar. **M20.6.** ¿Puede B por sí solo detener una partícula cambiando su energía cinética?

**Respuestas.** M20.1: (0,−24 μN,0). M20.2: se invierte la fuerza. M20.3: r se duplica y T queda igual en régimen clásico. M20.4: 1,5×10⁵ m/s con orientación canceladora. M20.5: 0,10 m. M20.6: no mediante la fuerza qv×B sola; esta no realiza trabajo sobre la partícula.


### Hoja de fórmulas del capítulo 20

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B),\quad\mathbf F_B\cdot\mathbf v=0$ | Carga puntual; fuerza magnética sola no cambia energía cinética. B en T; signo q invierte fuerza. |
| $r=\frac{mv_\perp}{\lvert q\rvert B},\quad T=\frac{2\pi m}{\lvert q\rvert B},\quad h=v_\parallel T$ | B uniforme, sin otras fuerzas, régimen no relativista; h avance axial por vuelta. Usar velocidad perpendicular para radio. |
| $v=E/B$ | Selector con fuerzas opuestas y geometría perpendicular apropiada; no basta igualar módulos sin revisar vectores. |
| $m=\frac{\lvert q\rvert Br}{v},\quad m=\frac{\lvert q\rvert B^2r^2}{2V_a}$ | Primera: rapidez conocida. Segunda: aceleración desde reposo por voltaje favorable Va, sin selector adicional que cambie datos. Si se mide diámetro usar r=d/2. |
| $K_{\rm ciclotron}=\frac{q^2B^2R^2}{2m}$ | Solo clásico: verificar &#124;q&#124;BR/m≪c. Si falla, no presentar el resultado como predicción válida. |

## Capítulo 21 · Fuerzas sobre corrientes, dipolos magnéticos y efecto Hall

### De portadores individuales al conductor

Un tramo recto de alambre con corriente I, longitud vectorial L orientada según la corriente convencional y campo externo uniforme B recibe F=I L×B. Es la suma de fuerzas sobre portadores, transmitidas al material. Para un conductor curvo o campo variable, se integra dF=I dl×B si I es estacionaria en el tramo. No se reemplaza una curva por su longitud total sin analizar las direcciones de sus elementos.

En B uniforme, ∫dl entre dos extremos es su desplazamiento vectorial. Por eso la fuerza sobre un tramo curvo de corriente equivale a I(rextremo final−rinicial)×B en ese modelo. Para una espira cerrada, el desplazamiento total es cero y la fuerza neta es cero. Esto no elimina los esfuerzos internos ni el torque: fuerzas iguales y opuestas pueden actuar en puntos distintos.

Ejemplo: I=2 A,L=0,15 m perpendicular a B=0,40 T. F=0,12 N. Si el ángulo entre L y B es 30°, el módulo es 0,060 N. Si se invierte la corriente, se invierte la fuerza. Se utiliza campo externo; no se calcula la fuerza de un elemento sobre sí mismo con su propio campo singular.

### Torque y momento magnético

Una espira plana de área A y corriente I posee momento μ=I A n̂, con la normal fijada por la mano derecha: dedos según corriente, pulgar según μ. Para N vueltas idénticas, μ=NI A n̂. En un campo uniforme, τ=μ×B y U=−μ·B para una espira ideal con momento mantenido según el modelo. El torque es máximo cuando la normal es perpendicular a B, es decir, cuando el plano de la espira es paralelo al campo.

Si el plano es perpendicular a B, su normal es paralela o antiparalela y el torque es cero. Es frecuente usar el ángulo con el plano donde la fórmula pide el ángulo con la normal: ambos son complementarios y cambian seno por coseno. Dibujar μ antes de calcular resuelve esa confusión.

Ejemplo: N=100,I=0,20 A,A=0,010 m² dan μ=0,20 A·m². Con B=0,50 T y ángulo de 60° entre μ y B, τ=0,10 sin60°≈0,0866 N·m y U=−0,050 J. El equilibrio alineado minimiza energía. En un motor, la conmutación de corriente mantiene un torque útil al girar; una espira con corriente fija en campo fijo no produce giro acelerado indefinido sin un mecanismo adicional.

### Fuerza sobre un dipolo en campo no uniforme

Un campo uniforme puede orientar un dipolo sin trasladar su centro de masa. Si el campo cambia de un lugar a otro, puede producir fuerza neta. Para un pequeño dipolo permanente de momento fijo, una expresión cuasiestática es F=∇(μ·B). Se usa con las hipótesis del modelo; un momento inducido que depende del campo necesita analizar además esa dependencia y su energía.

Esta diferencia explica por qué una pieza ferromagnética puede ser atraída por un imán: el material responde magnetizándose y el campo cercano no es uniforme. No se deduce una fuerza neta simplemente de τ=μ×B. Torque y fuerza describen cambios rotacionales y traslacionales distintos.

### Efecto Hall: separación transversal de carga

Portadores en deriva dentro de un conductor sometido a B transversal reciben una fuerza magnética que los desvía hacia una cara. La separación de cargas produce un campo EH que crece hasta equilibrar la fuerza transversal: EH=−vd×B. En la geometría perpendicular de módulos, |EH|=|vd|B. Si el ancho en la dirección Hall es w, |VH|=|vd|Bw.

Para una muestra de espesor t y sección A=wt, I=n|q||vd|wt. Por tanto |VH|=IB/(n|q|t). El ancho w se cancela, y el espesor t es la dimensión restante perpendicular a la corriente y al campo Hall. Cambiar qué dimensión se llama espesor sin revisar ejes produce errores. La polaridad medida permite inferir el signo dominante de portadores, con el sentido de I y B claramente indicado.

Ejemplo: I=1 A,B=0,50 T,n=10²⁸ m⁻³,t=0,10 mm,|q|=e. |VH|≈3,13 μV. La tensión pequeña requiere distinguirla de caídas longitudinales y contactos no ideales. El modelo de un solo tipo de portador es una idealización; materiales con varios portadores pueden necesitar una descripción más completa.

### Cero de fuerza no siempre significa ausencia de campo

Una espira cerrada en B uniforme tiene fuerza neta cero aunque haya campo y fuerzas en cada tramo. Una carga con v paralela a B no siente fuerza magnética aunque B no sea cero. Un voltaje Hall cero puede deberse a geometría, deriva nula o cancelaciones del modelo. Como con Gauss, una medida integrada o una fuerza nula no identifica sin más todos los campos locales.

### Práctica y respuestas

**M21.1.** I=3 A,L=0,20 m,B=0,10 T perpendiculares: fuerza. **M21.2.** Espira de 50 vueltas,I=0,40 A,A=0,020 m²: μ. **M21.3.** Esa espira en B=0,30 T con normal a 90°: torque y energía. **M21.4.** Corriente horaria vista desde arriba: dirección de μ. **M21.5.** Si el espesor Hall se duplica a I,B,n fijos: cambio de VH.

**Respuestas.** M21.1: 0,060 N, dirección por L×B. M21.2: 0,40 A·m². M21.3: 0,12 N·m y U=0 con la referencia elegida. M21.4: hacia abajo, entrando al plano visto desde arriba. M21.5: el módulo se reduce a la mitad. Se conserva la distinción entre espesor, ancho y longitud del espécimen.


### Hoja de fórmulas del capítulo 21

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=I\mathbf L\times\mathbf B,\quad d\mathbf F=I\,d\mathbf l\times\mathbf B$ | Primera: tramo recto y B externo uniforme; L según corriente convencional. Segunda para integrar geometría general estacionaria. |
| $\boldsymbol\mu=NI A\hat n,\quad\boldsymbol\tau=\boldsymbol\mu\times\mathbf B,\quad U=-\boldsymbol\mu\cdot\mathbf B$ | Espira plana o bobina de vueltas iguales; normal por mano derecha. Campo uniforme da fuerza neta cero pero posible torque. |
| $\mathbf E_H=-\mathbf v_d\times\mathbf B,\quad\lvert V_H\rvert=\frac{IB}{n\lvert q\rvert t}$ | Modelo Hall de un tipo de portador, geometría perpendicular; t espesor, no ancho medido entre contactos Hall. |
| $\mathbf F\approx\nabla(\boldsymbol\mu\cdot\mathbf B)$ | Dipolo pequeño permanente de momento fijo en campo externo no uniforme; no usar sin revisar respuesta para momentos inducidos. |

## Capítulo 22 · Fuentes magnéticas y ley de Biot–Savart

### Una suma vectorial de elementos de corriente

Para corrientes estacionarias en el vacío, un elemento I dl produce en un punto P


$$
d\mathbf B=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf l\times\hat{\mathbf R}}{R^2},
$$


donde R va desde el elemento fuente hasta P. El vector dl sigue la corriente convencional. Cada aporte es perpendicular tanto a dl como a R. Se integra sobre el conductor y se suman otras corrientes por superposición. La expresión presupone el régimen magnetostático; no se emplea como una ley instantánea general para cualquier carga acelerada.

El campo de una carga puntual que se mueve lentamente puede aproximarse por B≈(μ₀/4π)q(v×R̂)/R² en un tratamiento no relativista apropiado. La derivación informal que sustituye I dl por qv es una ayuda mnemónica; una carga aislada móvil no constituye por sí sola una corriente estacionaria. No se extrapola a radiación ni a cambios arbitrariamente rápidos.

### Alambre recto finito

Tomemos un conductor sobre el eje y y un observador a distancia perpendicular r de la recta. Las contribuciones apuntan todas perpendicularmente al plano formado por alambre y P. Al parametrizar por y, R=√(r²+y²) y el producto vectorial agrega r/R. Se integra μ₀I r dy/[4π(r²+y²)^(3/2)]. Si los extremos vistos desde el pie de perpendicular forman ángulos θ₁,θ₂ con esa perpendicular, con signos coherentes, el módulo orientado puede escribirse μ₀I(sinθ₂−sinθ₁)/(4πr).

Para un tramo simétrico de semilongitud a, el módulo es μ₀I·2a/[4πr√(r²+a²)]. Cuando a≫r, se obtiene el alambre infinito B=μ₀I/(2πr). El sentido se fija rodeando el alambre con la mano derecha, pulgar según corriente. A un lado del plano del dibujo B puede entrar y al otro salir: no se suman ambos módulos con igual signo.

### Dos alambres: calcular en cada región

Ubicá alambres paralelos al eje z en x=0 y x=d. Si ambos llevan corriente hacia +z, entre ellos sus campos son opuestos y puede haber un cero. Con I₁=I e I₂=3I, la condición I/x=3I/(d−x) da x=d/4. Fuera del segmento, los campos tienen el mismo sentido y no se anulan. La dependencia es 1/r, por eso el punto difiere del d/3 obtenido para cargas puntuales Q y 4Q con dependencia 1/r².

Si las corrientes tienen sentidos opuestos, entre los conductores los campos se suman y el posible cero exterior queda del lado de la menor corriente si sus módulos difieren. Para módulos iguales y opuestos no hay cero finito en la recta transversal que los une. Antes de igualar módulos se dibujan los sentidos en la región elegida.

### Espira circular en su eje

Una espira de radio a y corriente I produce en un punto axial a distancia x del centro un campo cuyas componentes transversales se cancelan. La distancia a cada elemento es √(a²+x²). Integrar las componentes axiales da


$$
B_x=\frac{\mu_0Ia^2}{2(a^2+x^2)^{3/2}},
$$


con el signo determinado por la corriente y el eje elegido. En el centro B=μ₀I/(2a). Para N vueltas coincidentes se multiplica por N. Lejos, B≈μ₀Ia²/(2|x|³) en módulo: aparece la dependencia dipolar. Una espira no se aproxima por un alambre infinito en su centro; son geometrías distintas.

Para I=2 A,a=0,10 m, el centro tiene B≈12,6 μT. A x=a, el campo se reduce por el factor 1/(2√2), aproximadamente 0,3536 del central. El módulo no aumenta con distancia axial, a diferencia del campo eléctrico de un anillo cargado, que tiene un factor x en el numerador y vale cero en el centro. Comparar esas dos fórmulas ayuda a evitar confundir anillo de carga con espira de corriente.

### Arcos y tramos radiales

En el centro de un arco circular de radio a y ángulo φ en radianes, cada elemento es perpendicular al radio y produce el mismo sentido axial. Integrar da B=μ₀Iφ/(4πa). Para semicircunferencia φ=π, B=μ₀I/(4a). Un tramo radial recto conectado al arco no contribuye en el centro porque dl es paralelo o antiparalelo a R y su producto vectorial es cero. Un tramo tangencial sí puede contribuir: no se lo elimina por estar «fuera del arco».

### Fuerza entre corrientes

El campo de un alambre infinito actúa sobre el otro: F/L=μ₀I₁I₂/(2πd) en módulo. Corrientes paralelas se atraen; antiparalelas se repelen. Para I₁=2 A,I₂=3 A,d=0,10 m, la fuerza por longitud es 1,2×10⁻⁵ N/m. La fuerza total de un tramo requiere multiplicar por su longitud y conservar el sentido. No se presenta μ₀=4π×10⁻⁷ como una igualdad exacta del SI actual; aquí es la aproximación usada en las cuentas del curso.

### Práctica y respuestas

**B22.1.** I=5 A,r=2 cm de un hilo largo: B. **B22.2.** Espira a=5 cm,I=1 A: B central. **B22.3.** Un cuarto de circunferencia: B en el centro en función de I,a. **B22.4.** Dos corrientes iguales en el mismo sentido: campo en el punto medio y fuerza mutua. **B22.5.** ¿Por qué no se suma solamente la longitud de un conductor curvo para hallar B?

**Respuestas.** B22.1: 50 μT. B22.2: aproximadamente 12,6 μT. B22.3: μ₀I/(8a). B22.4: campo nulo en el punto medio por cancelación y fuerzas atractivas entre los cables. B22.5: las distancias y productos vectoriales cambian a lo largo de la curva; se integran contribuciones orientadas.


### Hoja de fórmulas del capítulo 22

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $d\mathbf B=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf l\times\hat R}{R^2}$ | Corrientes estacionarias en vacío; R desde fuente hasta observador. Integrar y sumar vectores. |
| $B_{\rm hilo}=\frac{\mu_0I}{2\pi r},\quad B_{\rm finito}=\frac{\mu_0I}{4\pi r}(\sin\theta_2-\sin\theta_1)$ | Primer módulo para hilo infinito. Segunda con ángulos orientados desde perpendicular a la recta; sentido por mano derecha. |
| $B_{\rm eje}=\frac{\mu_0Ia^2}{2(a^2+x^2)^{3/2}},\quad B_{\rm centro}=\frac{\mu_0I}{2a}$ | Espira circular de radio a; signo axial por corriente, multiplicar por N para N vueltas coincidentes. |
| $B_{\rm arco}=\frac{\mu_0I\varphi}{4\pi a}$ | Centro de arco circular, φ en radianes. Tramos radiales no aportan allí; analizar otros tramos por separado. |
| $\frac FL=\frac{\mu_0\lvert I_1I_2\rvert}{2\pi d}$ | Hilos largos paralelos a distancia d; igual sentido atrae, contrario repele. F/L en N/m. |

## Capítulo 23 · Ley de Ampère, solenoides y materiales magnéticos

### Circulación, no flujo

En magnetostática en el vacío, ∮B·dl=μ₀Ienc. Es una integral sobre una curva cerrada, distinta de un flujo sobre una superficie. La corriente encerrada es la suma algebraica de corrientes que atraviesan una superficie cuyo borde es esa curva, con signo definido por la mano derecha respecto del recorrido. Un alambre que entra y sale de esa superficie puede aportar contribuciones de signos opuestos.

La forma simple supone corrientes estacionarias y no incorpora por sí sola la corriente de desplazamiento ni la respuesta de materiales magnéticos. Como Gauss, la ley es más fácil de usar para despejar campos si existe alta simetría. Una circulación nula no implica B=0 en cada punto del camino. Fuentes externas pueden contribuir al campo local sin modificar la suma de corrientes enlazadas.

### Cilindro con corriente distribuida

Un alambre infinito de radio R conduce una corriente I uniformemente repartida en su sección. La simetría hace B tangencial y constante sobre una circunferencia coaxial. Para r<R, Ienc=I r²/R² y B·2πr=μ₀I r²/R², de modo que B=μ₀Ir/(2πR²). Fuera, B=μ₀I/(2πr). Ambas expresiones coinciden en R y el campo central es cero.

Si la densidad J(r) varía radialmente, Ienc=2π∫₀ʳJ(s)s ds, no I(r/R)² en general. Si J=αr, por ejemplo, Ienc=2παr³/3 y el campo interno crece como r². La simetría se conserva aunque cambie la distribución; lo que cambia es la carga de corriente encerrada en cada radio.

### Cable coaxial y cancelación exterior

Un conductor central lleva +I y una cubierta externa coaxial lleva −I. En el aislante entre ambos, B=μ₀I/(2πr). Fuera de toda la cubierta, la corriente neta encerrada es cero; con simetría cilíndrica ideal, B=0. Aquí sí se puede deducir campo cero porque la simetría reduce la integral a B2πr; sin esa reducción, Ienc=0 solo indicaría circulación nula.

Si la cubierta ocupa b<r<c y su corriente se distribuye uniformemente en esa sección, para b<r<c la corriente neta encerrada es I[1−(r²−b²)/(c²−b²)]. Al dividir por 2πr/μ₀ se obtiene el campo en la propia cubierta. No se supone que toda la corriente de retorno está ya encerrada al entrar apenas en su material.

### Solenoide largo y toroide

Un solenoide largo, densamente bobinado, con n=N/L vueltas por longitud y corriente I tiene campo interior aproximadamente B=μ₀nI, uniforme lejos de extremos. Se usa un rectángulo amperiano con un lado dentro y otro fuera, donde el campo ideal se desprecia. Los lados transversales no contribuyen. Para n=1000 m⁻¹ e I=0,50 A, B≈6,28×10⁻⁴ T=0,628 mT. Un solenoide corto o un punto cerca del extremo requiere corregir la aproximación.

En un toroide ideal de N vueltas, para un radio r dentro del bobinado, B=μ₀NI/(2πr). No es uniforme en toda su sección radial. En la región central sin bobinado y fuera del toroide ideal el campo se anula por simetría y corriente enlazada neta. Un toroide real puede tener campos de fuga; «cero» pertenece al modelo ideal.

Una lámina infinita con densidad superficial de corriente K, en A/m, produce campos tangenciales opuestos de módulo μ₀K/2 a sus lados en vacío. Se deduce con un rectángulo amperiano que cruza la lámina. No se usa la fórmula de un hilo sustituyendo I por K sin ajustar unidades y geometría.

### Magnetismo en la materia

Los electrones poseen momentos magnéticos asociados a estados orbitales y spin. El spin es una propiedad cuántica intrínseca; no se interpreta literalmente como una esfera clásica girando sobre sí misma. Un modelo de espira orbital puede motivar μ=(q/2m)L para movimiento circular clásico; para electrones q<0, ambos vectores son opuestos. Ese modelo no reemplaza la descripción cuántica de átomos y sólidos.

En diamagnetismo la respuesta inducida tiende a oponerse al campo aplicado y suele ser débil. En paramagnetismo existen momentos que tienden a alinearse con un campo, compitiendo con agitación térmica. En ferromagnetismo las interacciones permiten orden y dominios; la magnetización puede permanecer después de retirar el campo y mostrar histéresis. La respuesta no es generalmente una proporcionalidad constante válida para cualquier intensidad.

En un medio lineal simple puede escribirse B=μH, con μ=μrμ₀. Para un solenoide homogéneamente lleno, B≈μnI bajo ese modelo. En materiales ferromagnéticos reales, saturación e historia del material pueden impedir usar una μ constante. La forma ∮H·dl=Ilibre en magnetostática ayuda a separar corrientes libres de la magnetización, pero requiere conocer la relación constitutiva para hallar B.

### Práctica y respuestas

**A23.1.** Alambre uniforme: B(R/2) en relación con B(R). **A23.2.** Solenoide n=2000 m⁻¹,I=0,25 A: B. **A23.3.** Toroide N=500,I=0,10 A,r=0,10 m: B. **A23.4.** ¿Ienc=0 implica B=0 siempre? **A23.5.** ¿Puede reemplazarse μ₀ por una μ constante para cualquier ferromagnético y corriente?

**Respuestas.** A23.1: la mitad. A23.2: 0,628 mT aproximadamente. A23.3: 0,100 mT. A23.4: no; solo junto con simetría y condiciones suficientes para inferirlo de la integral. A23.5: no; se necesita justificar una respuesta aproximadamente lineal en el régimen considerado y atender a saturación e histéresis.


### Hoja de fórmulas del capítulo 23

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}$ | Magnetostática en vacío; corrientes enlazadas con signo por mano derecha. Circulación nula no implica B local cero. |
| $B=\begin{cases}\mu_0Ir/(2\pi R^2)&r<R\\\mu_0I/(2\pi r)&r>R\end{cases}$ | Alambre cilíndrico infinito con corriente uniforme de radio R; campo azimutal. |
| $I_{\rm enc}(r)=2\pi\int_0^rJ(s)s\,ds$ | Corriente axial con simetría radial; si es exterior integrar hasta el radio cargado de corriente. |
| $B_{\rm solenoide}\approx\mu_0nI,\quad B_{\rm toroide}=\frac{\mu_0NI}{2\pi r}$ | Solenoide largo y lejos de extremos, n vueltas/m. Toroide ideal dentro del bobinado; exterior ideal nulo. |
| $B_{\rm lamina}=\mu_0K/2,\quad\mathbf B=\mu\mathbf H$ | Primera: lámina infinita de corriente K en A/m, vacío. Segunda: constitutiva de medio lineal simple; no universal para ferromagnéticos. |

## Formulario de la Unidad 6 · Magnetismo

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 20 · Lorentz y órbitas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B),\quad\mathbf F_B\cdot\mathbf v=0$ | Carga puntual; fuerza magnética sola no cambia energía cinética. B en T; signo q invierte fuerza. |
| $r=\frac{mv_\perp}{\lvert q\rvert B},\quad T=\frac{2\pi m}{\lvert q\rvert B},\quad h=v_\parallel T$ | B uniforme, sin otras fuerzas, régimen no relativista; h avance axial por vuelta. Usar velocidad perpendicular para radio. |
| $v=E/B$ | Selector con fuerzas opuestas y geometría perpendicular apropiada; no basta igualar módulos sin revisar vectores. |
| $m=\frac{\lvert q\rvert Br}{v},\quad m=\frac{\lvert q\rvert B^2r^2}{2V_a}$ | Primera: rapidez conocida. Segunda: aceleración desde reposo por voltaje favorable Va, sin selector adicional que cambie datos. Si se mide diámetro usar r=d/2. |
| $K_{\rm ciclotron}=\frac{q^2B^2R^2}{2m}$ | Solo clásico: verificar &#124;q&#124;BR/m≪c. Si falla, no presentar el resultado como predicción válida. |

### Capítulo 21 · Fuerzas sobre corrientes y Hall

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\mathbf F=I\mathbf L\times\mathbf B,\quad d\mathbf F=I\,d\mathbf l\times\mathbf B$ | Primera: tramo recto y B externo uniforme; L según corriente convencional. Segunda para integrar geometría general estacionaria. |
| $\boldsymbol\mu=NI A\hat n,\quad\boldsymbol\tau=\boldsymbol\mu\times\mathbf B,\quad U=-\boldsymbol\mu\cdot\mathbf B$ | Espira plana o bobina de vueltas iguales; normal por mano derecha. Campo uniforme da fuerza neta cero pero posible torque. |
| $\mathbf E_H=-\mathbf v_d\times\mathbf B,\quad\lvert V_H\rvert=\frac{IB}{n\lvert q\rvert t}$ | Modelo Hall de un tipo de portador, geometría perpendicular; t espesor, no ancho medido entre contactos Hall. |
| $\mathbf F\approx\nabla(\boldsymbol\mu\cdot\mathbf B)$ | Dipolo pequeño permanente de momento fijo en campo externo no uniforme; no usar sin revisar respuesta para momentos inducidos. |

### Capítulo 22 · Biot–Savart

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $d\mathbf B=\frac{\mu_0}{4\pi}\frac{I\,d\mathbf l\times\hat R}{R^2}$ | Corrientes estacionarias en vacío; R desde fuente hasta observador. Integrar y sumar vectores. |
| $B_{\rm hilo}=\frac{\mu_0I}{2\pi r},\quad B_{\rm finito}=\frac{\mu_0I}{4\pi r}(\sin\theta_2-\sin\theta_1)$ | Primer módulo para hilo infinito. Segunda con ángulos orientados desde perpendicular a la recta; sentido por mano derecha. |
| $B_{\rm eje}=\frac{\mu_0Ia^2}{2(a^2+x^2)^{3/2}},\quad B_{\rm centro}=\frac{\mu_0I}{2a}$ | Espira circular de radio a; signo axial por corriente, multiplicar por N para N vueltas coincidentes. |
| $B_{\rm arco}=\frac{\mu_0I\varphi}{4\pi a}$ | Centro de arco circular, φ en radianes. Tramos radiales no aportan allí; analizar otros tramos por separado. |
| $\frac FL=\frac{\mu_0\lvert I_1I_2\rvert}{2\pi d}$ | Hilos largos paralelos a distancia d; igual sentido atrae, contrario repele. F/L en N/m. |

### Capítulo 23 · Ampère y materiales

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}$ | Magnetostática en vacío; corrientes enlazadas con signo por mano derecha. Circulación nula no implica B local cero. |
| $B=\begin{cases}\mu_0Ir/(2\pi R^2)&r<R\\\mu_0I/(2\pi r)&r>R\end{cases}$ | Alambre cilíndrico infinito con corriente uniforme de radio R; campo azimutal. |
| $I_{\rm enc}(r)=2\pi\int_0^rJ(s)s\,ds$ | Corriente axial con simetría radial; si es exterior integrar hasta el radio cargado de corriente. |
| $B_{\rm solenoide}\approx\mu_0nI,\quad B_{\rm toroide}=\frac{\mu_0NI}{2\pi r}$ | Solenoide largo y lejos de extremos, n vueltas/m. Toroide ideal dentro del bobinado; exterior ideal nulo. |
| $B_{\rm lamina}=\mu_0K/2,\quad\mathbf B=\mu\mathbf H$ | Primera: lámina infinita de corriente K en A/m, vacío. Segunda: constitutiva de medio lineal simple; no universal para ferromagnéticos. |

## Capítulo 24 · Flujo magnético, Faraday y ley de Lenz

### El cambio relevante es el de flujo

El flujo magnético por una superficie orientada es ΦB=∫B·n̂dA. Para B uniforme y superficie plana, ΦB=BAcosθ, con θ entre campo y normal. Se mide en Wb=T·m². Una espira puede tener campo no nulo sin fem inducida si el flujo no cambia. Puede cambiar el flujo por variación de B, del área, de la orientación o de la parte del circuito que atraviesa la región de campo.

La ley de Faraday para una bobina de N vueltas con igual flujo por vuelta es ℰ=−N dΦB/dt. El signo depende de orientar consistentemente el recorrido y su normal con mano derecha. La ley de Lenz expresa su contenido físico: la corriente inducida, si el circuito está cerrado, produce una respuesta que se opone al cambio de flujo. Se opone al cambio, no necesariamente al campo original.

### Determinar el sentido sin memorizar dibujos

Elegí primero un sentido positivo para la normal. Si B entra al papel y aumenta de módulo, su flujo entrante crece: la corriente inducida debe producir campo saliente para oponerse a ese aumento, de modo que es antihoraria vista de frente. Si B entrante disminuye, la corriente produce campo entrante para sostener el flujo y es horaria. Invertir el proceso invierte el sentido de corriente; invertir ambos puede devolver el mismo resultado.

Una fem puede existir sin corriente si la espira está abierta. Para obtener I=ℰ/R se necesita además un circuito resistivo cerrado y despreciar otros efectos, como autoinducción, cuando esa aproximación sea adecuada. La fem se mide en volt, aunque su origen sea distinto del de una batería química.

### Ejemplo de una bobina fija

N=50,A=0,010 m²,normal paralela a B y B(t)=0,20+0,030t T, t en s. El flujo por vuelta es A B y su derivada 3,0×10⁻⁴ Wb/s. La fem orientada es −0,015 V respecto de la circulación vinculada a esa normal. Si la resistencia total es 5 Ω y se desprecia inductancia, el módulo de corriente es 3,0 mA. No se multiplica N dos veces: la expresión ya suma el flujo enlazado por las cincuenta vueltas.

![Flujo variable, sentido de Lenz y barra conductora en movimiento](/planos-de-estudio/img/fisica2/induccion.svg)

### Fem por movimiento y balance mecánico

Una barra de longitud L se desliza con rapidez v sobre rieles, cerrando un circuito en B uniforme perpendicular al plano. Si v, L y B son mutuamente perpendiculares, |ℰ|=BLv. La fuerza magnética separa cargas dentro de la barra y, con circuito cerrado, circula corriente I=BLv/R. La fuerza sobre la barra se opone al movimiento y mide F=ILB=B²L²v/R en el modelo resistivo.

Para B=0,50 T,L=0,20 m,v=3 m/s,R=2 Ω, la fem es 0,30 V, I=0,15 A y la fuerza de frenado 0,015 N. Mantener velocidad constante exige aportar potencia mecánica Fv=0,045 W, igual a I²R. La energía térmica proviene del agente que mueve la barra. La fuerza magnética no crea energía ni contradice su potencia nula sobre una partícula aislada: el sistema incluye fuerzas de restricción, campos eléctricos y trabajo mecánico externo.

### Espira que gira

Si N vueltas de área A giran con velocidad angular ω en B uniforme y θ=ωt, el flujo es BAcosωt y ℰ=NBAωsinωt. La amplitud es NBAω. El modelo muestra un generador ideal: la energía eléctrica extraída requiere trabajo mecánico contra el torque asociado. Una amplitud de fem no es su valor medio ni eficaz. Para una sinusoidal, su valor eficaz es amplitud/√2 como consecuencia del promedio de sin² en un período.

### Campo eléctrico inducido

Un B variable induce E incluso sin conductor: para un contorno fijo ∮E·dl=−dΦB/dt. Ese E no es conservativo y puede tener circulación no nula en una curva cerrada. No se puede describir en toda la región mediante un potencial escalar electrostático único con E=−∇V. Esto marca el límite de las reglas de potencial desarrolladas antes.

Ejemplo: B uniforme dentro de un cilindro de radio a, con derivada temporal dB/dt, y simetría axial. En una circunferencia de radio r<a, Eφ2πr=−πr² dB/dt, luego Eφ=−(r/2)dB/dt. Para r>a, solo se enlaza el área πa² y Eφ=−a²(dB/dt)/(2r). El signo se interpreta con la normal y circulación elegidas. La inducción no requiere que la circunferencia sea un alambre real.

### Corrientes parásitas e inductancia como conexión

En piezas conductoras extensas, el flujo variable puede generar lazos de corriente que disipan calor y producen fuerzas de frenado. Dividir un núcleo en láminas aisladas limita grandes lazos y reduce pérdidas bajo condiciones adecuadas. Como ampliación, una bobina también puede inducirse a sí misma: si su enlace de flujo es LI con L constante, ℰauto=−L dI/dt y la energía es LI²/2. Los circuitos RL se incluyen en el formulario como conexión complementaria, sin atribuirles una práctica específica que no está entre los PDF descargados.

### Práctica y respuestas

**F24.1.** Área 0,020 m²,B=0,30 T,normal a 60°: flujo. **F24.2.** 100 vueltas,flujo por vuelta baja de 4 mWb a 1 mWb en 0,20 s: módulo de fem media. **F24.3.** Campo saliente crece: corriente inducida vista de frente. **F24.4.** Barra B=0,20 T,L=0,50 m,v=4 m/s: fem. **F24.5.** ¿Un B constante puede generar fem si la espira gira?

**Respuestas.** F24.1: 3 mWb. F24.2: 1,5 V. F24.3: horaria para producir campo entrante. F24.4: 0,40 V con geometría perpendicular. F24.5: sí; cambia la orientación y por tanto el flujo, aunque B permanezca constante.


### Hoja de fórmulas del capítulo 24

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_B=\int\mathbf B\cdot d\mathbf A,\quad\Phi_B=BA\cos\theta$ | Segunda para B uniforme y superficie plana; θ con normal. Φ en Wb=T·m². |
| $\mathcal E=-N\frac{d\Phi_B}{dt}$ | N vueltas con igual flujo por vuelta; orientación normal y recorrido por mano derecha. Lenz se opone al cambio, no siempre al campo. |
| $\mathcal E=BLv,\quad I=BLv/R,\quad F=\frac{B^2L^2v}{R}$ | Módulos para barra y rieles perpendiculares en B uniforme, circuito resistivo cerrado y autoinducción despreciada; F frena y Fv=I²R. |
| $\mathcal E(t)=NBA\omega\sin(\omega t)$ | Bobina giratoria con normal θ=ωt en B uniforme; amplitud NBAω. Origen de fase declarado. |
| $\oint_C\mathbf E\cdot d\mathbf l=-d\Phi_B/dt$ | Contorno fijo orientado; E inducido no conservativo puede existir sin conductor. |
| $\mathcal E_{\rm auto}=-L\frac{dI}{dt},\quad U_L=\tfrac12LI^2$ | Ampliación: inductancia L constante de modelo lineal; no confundir L inductancia en H con longitud geométrica. |

## Capítulo 25 · Maxwell, corriente de desplazamiento y ondas electromagnéticas

### Por qué Ampère necesita una ampliación

Un capacitor que se carga tiene corriente de conducción en sus cables, pero el vacío entre placas no transporta esa misma carga libre de una placa a la otra. Si elegimos dos superficies con el mismo borde amperiano, una puede cortar el cable y otra pasar entre las placas. La forma magnetostática simple parecería dar circulaciones distintas para la misma curva. El problema no es conservación de carga, sino aplicar una ecuación estacionaria a campos variables.

La corriente de desplazamiento se define, en el vacío, Id=ε₀ dΦE/dt. Entre placas ideales E=Q/(ε₀A), por lo que ε₀ d(EA)/dt=dQ/dt=I de conducción del cable. La ley de Ampère–Maxwell agrega ese término y recupera una misma circulación para ambas superficies. No significa que electrones atraviesen el vacío del capacitor como una corriente óhmica.

### Las cuatro ecuaciones en forma integral

En el vacío, con superficies y contornos fijos apropiadamente orientados:


$$
\oint_S\mathbf E\cdot d\mathbf A=\frac{Q_{\rm enc}}{\varepsilon_0},\qquad
\oint_S\mathbf B\cdot d\mathbf A=0.
$$



$$
\oint_C\mathbf E\cdot d\mathbf l=-\frac{d\Phi_B}{dt},\qquad
\oint_C\mathbf B\cdot d\mathbf l=\mu_0 I_{\rm enc}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
$$


La primera relaciona fuentes de campo eléctrico con carga. La segunda expresa flujo magnético neto cerrado cero en el modelo sin monopolos. La tercera relaciona circulación eléctrica con flujo magnético variable. La cuarta relaciona circulación magnética con corriente de conducción y flujo eléctrico variable. No se confunden las dos integrales cerradas: una recorre superficie y la otra curva.

En forma diferencial: ∇·E=ρ/ε₀, ∇·B=0, ∇×E=−∂B/∂t y ∇×B=μ₀J+μ₀ε₀∂E/∂t. Esta notación resume información local. Para resolver los ejercicios básicos basta la forma integral y simetrías; se incluye la diferencial para comprender el enlace con Análisis Matemático II.

### Una onda como solución en una región sin fuentes

En una región de vacío sin cargas ni corrientes, las ecuaciones acoplan campos variables y conducen a ecuaciones de onda con velocidad c=1/√(μ₀ε₀). Una solución plana que viaja en +x es E=E₀cos(kx−ωt) j y B=(E₀/c)cos(kx−ωt) k, con ω=ck. Los vectores E y B son perpendiculares entre sí y a la propagación; E×B apunta hacia +x.

La forma kx−ωt mantiene fase constante si x aumenta con t: viaja hacia +x. Con kx+ωt viajaría hacia −x y habría que ajustar el sentido relativo de B para que Maxwell siga cumpliéndose. Una onda no consiste en «un campo eléctrico que aparece primero y luego uno magnético retrasado» en esa solución: están en fase. La descripción de campos que se sostienen mutuamente es una intuición, no una instrucción para introducir un desfase arbitrario.

La relación de onda es c=fλ, con frecuencia f=ω/(2π) y número de onda k=2π/λ. Un campo sinusoidal de frecuencia 100 MHz en vacío tiene λ≈3 m. La frecuencia y longitud de onda no son lo mismo; su producto tiene unidad de velocidad. En un medio material la velocidad puede diferir y la respuesta depender de la frecuencia; las fórmulas de vacío no se trasladan sin cambios.

![Campos de una onda plana y dirección de propagación](/planos-de-estudio/img/fisica2/onda.svg)

### Energía e intensidad

Como ampliación cuantitativa de la introducción a ondas del apunte, las densidades de energía en vacío son uE=ε₀E²/2 y uB=B²/(2μ₀). Para una onda plana cumplen uE=uB. El vector de Poynting S=(E×B)/μ₀ representa flujo de energía, en W/m². En una sinusoidal plana, la intensidad media es ⟨S⟩=ε₀cE₀²/2=cB₀²/(2μ₀). E₀ es amplitud; si se usa valor eficaz, el factor 1/2 cambia de ubicación porque Erms=E₀/√2.

Ejemplo: E₀=100 V/m. B₀≈3,33×10⁻⁷ T e intensidad media ≈13,3 W/m². Una superficie de 0,20 m² perpendicular al haz ideal recibe aproximadamente 2,66 W de potencia media si el campo es uniforme en ella. Para una superficie inclinada se usa el producto con la normal, y un haz no uniforme exige integrar S sobre el área.

### Espectro y qué comparten sus regiones

Radio, microondas, infrarrojo, visible, ultravioleta, rayos X y gamma corresponden a distintos rangos de frecuencia y longitud de onda de la radiación electromagnética. En vacío comparten la velocidad c; no se concluye que una frecuencia mayor viaja más rápido. Los límites entre nombres son convenciones y las interacciones con materia dependen de energía y estructura del material. Este capítulo no pretende cubrir óptica geométrica o interferencia completa porque esos desarrollos no figuran en los PDF de esta aula.

### Práctica y respuestas

**X25.1.** Un capacitor ideal aumenta carga a 2 mC/s: Id entre placas. **X25.2.** f=60 MHz en vacío: λ. **X25.3.** E₀=30 V/m: B₀. **X25.4.** E hacia +z y B hacia +x: dirección de propagación. **X25.5.** Duplicar amplitud de E: factor de intensidad. **X25.6.** ¿Una onda electromagnética necesita un medio material?

**Respuestas.** X25.1: 2 mA en magnitud. X25.2: aproximadamente 5 m. X25.3: aproximadamente 1,0×10⁻⁷ T. X25.4: +y, porque k×i=j. X25.5: cuatro. X25.6: no; puede propagarse en el vacío según las ecuaciones de Maxwell.


### Hoja de fórmulas del capítulo 25

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I_d=\varepsilon_0\frac{d\Phi_E}{dt}$ | Corriente de desplazamiento en vacío; capacitor ideal cargándose tiene Id total igual a corriente del cable. |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}$ | Ampère–Maxwell para contorno fijo, orientación coherente. El segundo término no es conducción libre entre placas. |
| $\oint\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0,\quad\oint\mathbf B\cdot d\mathbf A=0$ | Superficies cerradas orientadas hacia afuera en el modelo de Maxwell sin cargas magnéticas. |
| $c=1/\sqrt{\mu_0\varepsilon_0}=f\lambda,\quad E_0=cB_0$ | Onda plana en vacío, amplitudes E0 y B0. Usar c≈3×10⁸ m/s; en medios revisar velocidad y constitutivas. |
| $\mathbf S=\frac1{\mu_0}\mathbf E\times\mathbf B,\quad\langle S\rangle=\frac12\varepsilon_0cE_0^2$ | Flujo energético W/m²; promedio para onda plana sinusoidal en vacío. Si se usa Erms, ⟨S⟩=ε0cErms². |
| $u_E=\tfrac12\varepsilon_0E^2,\quad u_B=B^2/(2\mu_0)$ | Onda plana en vacío: ambas densidades iguales y en J/m³. La dirección de propagación sigue E×B. |

## Formulario de la Unidad 7 · Inducción, Maxwell y ondas

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 24 · Inducción

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Phi_B=\int\mathbf B\cdot d\mathbf A,\quad\Phi_B=BA\cos\theta$ | Segunda para B uniforme y superficie plana; θ con normal. Φ en Wb=T·m². |
| $\mathcal E=-N\frac{d\Phi_B}{dt}$ | N vueltas con igual flujo por vuelta; orientación normal y recorrido por mano derecha. Lenz se opone al cambio, no siempre al campo. |
| $\mathcal E=BLv,\quad I=BLv/R,\quad F=\frac{B^2L^2v}{R}$ | Módulos para barra y rieles perpendiculares en B uniforme, circuito resistivo cerrado y autoinducción despreciada; F frena y Fv=I²R. |
| $\mathcal E(t)=NBA\omega\sin(\omega t)$ | Bobina giratoria con normal θ=ωt en B uniforme; amplitud NBAω. Origen de fase declarado. |
| $\oint_C\mathbf E\cdot d\mathbf l=-d\Phi_B/dt$ | Contorno fijo orientado; E inducido no conservativo puede existir sin conductor. |
| $\mathcal E_{\rm auto}=-L\frac{dI}{dt},\quad U_L=\tfrac12LI^2$ | Ampliación: inductancia L constante de modelo lineal; no confundir L inductancia en H con longitud geométrica. |

### Capítulo 25 · Maxwell y ondas

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $I_d=\varepsilon_0\frac{d\Phi_E}{dt}$ | Corriente de desplazamiento en vacío; capacitor ideal cargándose tiene Id total igual a corriente del cable. |
| $\oint\mathbf B\cdot d\mathbf l=\mu_0I_{\rm enc}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}$ | Ampère–Maxwell para contorno fijo, orientación coherente. El segundo término no es conducción libre entre placas. |
| $\oint\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0,\quad\oint\mathbf B\cdot d\mathbf A=0$ | Superficies cerradas orientadas hacia afuera en el modelo de Maxwell sin cargas magnéticas. |
| $c=1/\sqrt{\mu_0\varepsilon_0}=f\lambda,\quad E_0=cB_0$ | Onda plana en vacío, amplitudes E0 y B0. Usar c≈3×10⁸ m/s; en medios revisar velocidad y constitutivas. |
| $\mathbf S=\frac1{\mu_0}\mathbf E\times\mathbf B,\quad\langle S\rangle=\frac12\varepsilon_0cE_0^2$ | Flujo energético W/m²; promedio para onda plana sinusoidal en vacío. Si se usa Erms, ⟨S⟩=ε0cErms². |
| $u_E=\tfrac12\varepsilon_0E^2,\quad u_B=B^2/(2\mu_0)$ | Onda plana en vacío: ambas densidades iguales y en J/m³. La dirección de propagación sigue E×B. |

## Capítulo 26 · Complemento de termodinámica: energía, calor y ciclos

### Alcance documental de este capítulo

El cronograma del aula anuncia «Electromagnetismo y Termodinámica». Los 24 PDF disponibles al preparar esta edición no contienen un apunte ni una práctica específica de termodinámica. Por eso este capítulo es un complemento de fundamentos para estudiar esa conexión; no se presenta como reconstrucción del temario completo de la cátedra ni como sustituto de materiales que se incorporen después. Las relaciones aquí desarrolladas se identifican también como complementarias en los formularios.

### Sistema, estado y proceso

Un sistema es la porción de materia o región elegida para analizar. En un sistema cerrado puede transferirse energía, pero no materia a través de su frontera; uno aislado no intercambia ni materia ni energía. Variables como temperatura T, presión P, volumen 𝒱 y energía interna U describen estados macroscópicos de equilibrio. Un proceso conecta estados y puede depender del camino. Calor y trabajo describen transferencias durante un proceso, no cantidades «contenidas» como propiedades de estado.

La temperatura se expresa en kelvin para ecuaciones de gases, cocientes termodinámicos y entropía: T(K)=t(°C)+273,15. Una diferencia de 1 K tiene el mismo tamaño que 1 °C, pero 0 °C no equivale a ausencia de energía térmica ni a 0 K. Dos cuerpos a igual temperatura no necesariamente poseen igual energía interna: influyen cantidad de materia, composición y fase.

### Calor sensible y cambio de fase

Si no cambia la fase y la capacidad calorífica específica c es aproximadamente constante, el calor absorbido en un cambio de temperatura es Q=mcΔT. En general se integra mc(T)dT. Durante una transformación de fase a condiciones donde la temperatura se mantiene aproximadamente fija, Q=mL, con L calor latente apropiado. No se usa mcΔT para concluir calor cero en una fusión solo porque no cambie T.

Ejemplo: calentar 0,20 kg de agua 10 K, usando c=4180 J/(kg·K), requiere 8360 J si se ignoran recipiente, pérdidas y cambios de fase. Un resistor de 20 W suministraría esa energía en 418 s si toda la potencia se convirtiera en calor absorbido por esa agua. Con eficiencia η, el tiempo sería Q/(ηP). El trabajo eléctrico convertido en energía interna no se suma otra vez como una fuente distinta de «energía Joule»: es la misma transferencia vista en dos etapas.

### Primera ley y signos

Adoptamos ΔU=Q−W, con Q positivo entrando al sistema y W positivo cuando el sistema hace trabajo sobre el exterior. Otras convenciones usan Wsobre positivo y escriben ΔU=Q+Wsobre; ambas son válidas si se declaran. Para trabajo de expansión cuasiestática, W=∫Pext d𝒱; en un proceso reversible la presión externa coincide en el límite con la del sistema. En una expansión W suele ser positivo; en compresión, negativo.

Si un gas recibe 500 J de calor y realiza 180 J de trabajo, ΔU=320 J. Si se lo comprime realizando 180 J sobre él y además recibe 500 J, W=−180 J y ΔU=680 J. Memorizar «siempre restar 180» sin identificar quién trabaja produce el signo equivocado.

La energía interna es función de estado; Q y W dependen del camino. En un ciclo completo ΔU=0 y Qneto=Wneto. No se deduce que cada etapa tenga ΔU=0 ni que el calor total absorbido sea igual al trabajo sin restar el calor cedido.

### Gas ideal y capacidades caloríficas

Un gas ideal satisface P𝒱=nRT, con n en mol y R≈8,314 J/(mol·K). Para un gas ideal con capacidad molar Cv aproximadamente constante, ΔU=nCvΔT. Un gas ideal monoatómico clásico tiene Cv=3R/2 y Cp=5R/2; para otros gases y temperaturas las capacidades cambian. En general para gas ideal Cp−Cv=R.

En una isócora, 𝒱 constante, W=0 y Q=ΔU. En una isóbara cuasiestática, W=PΔ𝒱=nRΔT y Q=nCpΔT. En una isoterma de gas ideal, ΔU=0; para expansión reversible desde 𝒱i hasta 𝒱f, W=nRT ln(𝒱f/𝒱i) y Q=W. «Isotermo» no significa «sin calor»: el calor puede compensar exactamente el trabajo.

En un proceso adiabático Q=0. Si además es reversible y Cv constante, P𝒱^γ=constante y T𝒱^(γ−1)=constante, con γ=Cp/Cv. Adiabático no implica temperatura constante; un gas que se expande adiabáticamente y realiza trabajo disminuye su energía interna y, para gas ideal, su temperatura. Una expansión libre adiabática de gas ideal tiene otro comportamiento porque W=0: no puede usarse la ley reversible P𝒱^γ para cualquier proceso sin calor.

Ejemplo: un mol de gas ideal monoatómico sube de 300 K a 400 K a volumen fijo. ΔU=(3/2)R·100≈1247 J y Q≈1247 J. Si lo hace a presión constante, W≈831 J y Q≈2079 J. Los estados de temperatura inicial y final dan la misma ΔU, mientras el camino cambia Q y W.

![Proceso de gas ideal y balance de una máquina térmica](/planos-de-estudio/img/fisica2/termodinamica.svg)

### Segunda ley, máquinas y refrigeradores

Una máquina térmica cíclica recibe Qh>0 de un reservorio caliente, entrega Qc>0 al frío y produce W=Qh−Qc. Su eficiencia η=W/Qh=1−Qc/Qh. No puede convertir cíclicamente todo el calor tomado de un único reservorio en trabajo sin otros efectos. Para una máquina reversible entre Th y Tc, ηCarnot=1−Tc/Th, con temperaturas absolutas y Th>Tc>0. Ninguna máquina entre esos mismos reservorios supera ese límite bajo las hipótesis del teorema.

Si Th=600 K,Tc=300 K, el máximo ideal es 50%. Una máquina reversible que toma 600 J por ciclo entrega 300 J al frío y produce 300 J. Usar 327 °C y 27 °C en el cociente daría una eficiencia falsa: las razones de temperatura requieren kelvin.

Un refrigerador consume trabajo para extraer Qc del foco frío y entregar Qh al caliente. Su coeficiente de desempeño es COP=Qc/W, que puede superar 1 sin violar conservación: no convierte ese trabajo en «más trabajo», sino que transporta calor. En el modelo reversible, COP=Tc/(Th−Tc). La eficiencia de máquina y el COP responden a objetivos diferentes.

### Entropía e irreversibilidad

La variación de entropía se define mediante una integral reversible entre estados, ΔS=∫δQrev/T. No se reemplaza por Q/T en cualquier proceso: esa forma simple requiere condiciones apropiadas, por ejemplo un reservorio a T constante. Para el conjunto sistema más entorno en un proceso real, ΔStotal≥0; la igualdad corresponde a reversibilidad ideal. Un sistema particular puede disminuir su entropía si el entorno aumenta más.

Si 100 J pasan espontáneamente de un reservorio a 400 K a otro a 300 K, ΔStotal=−100/400+100/300=1/12 J/K>0. La energía total se conserva, pero el proceso inverso espontáneo sin compensación no satisface la segunda ley. Para la máquina reversible del ejemplo, −600/600+300/300=0 en los reservorios por ciclo, y el fluido vuelve a su estado inicial.

### Práctica y respuestas

**T26.1.** Convertí 25 °C a K. **T26.2.** Un sistema pierde 80 J de calor y recibe 30 J de trabajo: ΔU con la convención del capítulo. **T26.3.** Isoterma reversible de un mol a 300 K que duplica volumen: W. **T26.4.** Máquina recibe 1000 J y cede 650 J: W y η. **T26.5.** Límite de Carnot entre 500 K y 300 K. **T26.6.** ¿Todo proceso adiabático cumple P𝒱^γ constante?

**Respuestas.** T26.1: 298,15 K. T26.2: Q=−80 J,W=−30 J,ΔU=−50 J. T26.3: 300Rln2≈1729 J. T26.4: 350 J y 35%. T26.5: 40%. T26.6: no; esa relación exige además reversibilidad y el modelo de gas ideal con capacidades apropiadas. Contrastá futuros materiales de la cátedra para completar o ajustar este complemento.


### Hoja de fórmulas del capítulo 26

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $T({\rm K})=t({}^\circ{\rm C})+273{,}15,\quad Q=mc\Delta T,\quad Q_{\rm fase}=mL$ | Complemento sin apunte específico en aula. Calor sensible con c constante, sin cambio de fase; L calor latente de la transformación. |
| $\Delta U=Q-W,\quad W=\int P_{\rm ext}\,d\mathcal V$ | Q entra al sistema positivo y W realizado por el sistema positivo. Trabajo de frontera bajo hipótesis cuasiestáticas apropiadas. |
| $P\mathcal V=nRT,\quad\Delta U=nC_V\Delta T,\quad C_P-C_V=R$ | Gas ideal; segunda con Cv molar constante. Monoatómico clásico Cv=3R/2; no universal para todos los gases. |
| $W_{\rm isotermo}=nRT\ln(\mathcal V_f/\mathcal V_i),\quad P\mathcal V^\gamma=\text{constante}$ | Primera: gas ideal, isoterma reversible. Segunda: adiabática reversible, capacidades constantes y γ=Cp/Cv. Adiabático solo no basta. |
| $\eta=1-Q_c/Q_h,\quad\eta_{\rm Carnot}=1-T_c/T_h$ | Máquina térmica cíclica, Qh y Qc módulos; Carnot reversible entre dos reservorios con temperaturas en K. W=Qh−Qc. |
| $\Delta S=\int\frac{\delta Q_{\rm rev}}T,\quad\Delta S_{\rm total}\ge0$ | Entropía en J/K; integral por camino reversible entre estados. Para reservorio a T fija: ΔS=Q/T. |

## Formulario de la Unidad 8 · Complemento de termodinámica

Esta agrupación es editorial, no una numeración oficial de programa. Relaciones de los capítulos de este bloque, con las mismas hipótesis que su desarrollo.

### Capítulo 26 · Termodinámica complementaria

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $T({\rm K})=t({}^\circ{\rm C})+273{,}15,\quad Q=mc\Delta T,\quad Q_{\rm fase}=mL$ | Complemento sin apunte específico en aula. Calor sensible con c constante, sin cambio de fase; L calor latente de la transformación. |
| $\Delta U=Q-W,\quad W=\int P_{\rm ext}\,d\mathcal V$ | Q entra al sistema positivo y W realizado por el sistema positivo. Trabajo de frontera bajo hipótesis cuasiestáticas apropiadas. |
| $P\mathcal V=nRT,\quad\Delta U=nC_V\Delta T,\quad C_P-C_V=R$ | Gas ideal; segunda con Cv molar constante. Monoatómico clásico Cv=3R/2; no universal para todos los gases. |
| $W_{\rm isotermo}=nRT\ln(\mathcal V_f/\mathcal V_i),\quad P\mathcal V^\gamma=\text{constante}$ | Primera: gas ideal, isoterma reversible. Segunda: adiabática reversible, capacidades constantes y γ=Cp/Cv. Adiabático solo no basta. |
| $\eta=1-Q_c/Q_h,\quad\eta_{\rm Carnot}=1-T_c/T_h$ | Máquina térmica cíclica, Qh y Qc módulos; Carnot reversible entre dos reservorios con temperaturas en K. W=Qh−Qc. |
| $\Delta S=\int\frac{\delta Q_{\rm rev}}T,\quad\Delta S_{\rm total}\ge0$ | Entropía en J/K; integral por camino reversible entre estados. Para reservorio a T fija: ΔS=Q/T. |

## Capítulo 27 · Taller integrador de electrostática y capacitores

### Cómo trabajar los problemas

Los siguientes problemas son originales, construidos para conectar las herramientas que aparecen en las prácticas y parciales históricos descargados. No son una predicción de evaluación. Intentá plantear cada uno sin consultar su solución y después comprobá hipótesis, signos y unidades. Los capítulos anteriores explican cada técnica; aquí el objetivo es elegirla dentro de un problema más largo.

### Problema 1 · Campo nulo entre dos hilos cargados

Dos hilos infinitos paralelos al eje z están en x=0 y x=d, con densidades lineales +λ y +3λ. Hallá los puntos de campo nulo en el plano y el campo a mitad de camino. Expresá también la diferencia de potencial entre x=d/4 y x=d/2, manteniéndote entre ambos hilos.

**Desarrollo.** La invariancia longitudinal permite trabajar en una sección perpendicular. Entre los hilos, Eₓ=2kλ[1/x−3/(d−x)]. La cancelación exige d−x=3x y x=d/4. Para cada z existe un punto equivalente; forman una recta paralela a los hilos. Fuera del segmento las contribuciones tienen igual sentido y no se anulan sobre el plano que contiene ambos hilos. Más generalmente, para dos hilos positivos la cancelación transversal exige que ambos vectores radiales sean opuestos, lo que ubica el cero sobre esa línea transversal; no aparecen ceros fuera de ese alineamiento.

En x=d/2, Eₓ=2kλ(2/d−6/d)=−8kλ/d. El potencial entre dos posiciones finitas se puede escribir, salvo constante, V(x)=−2kλln(x/r₀)−6kλln[(d−x)/r₀], con r₀ una longitud de referencia. La diferencia buscada es ΔV=−2kλln2−6kλln(2/3)=2kλ[3ln(3/2)−ln2]. La constante y r₀ se cancelan. No se usa V(∞)=0 para los hilos infinitos.

**Comprobación.** El cero queda cerca del hilo más débil. No se obtiene el mismo punto con raíces cuadradas como para cargas puntuales: aquí E decae como 1/r.

### Problema 2 · Energía y movimiento posible

Una partícula de masa 2,0×10⁻⁶ kg y carga −1,0 μC se libera desde reposo en x=0, en un campo uniforme Eₓ=200 N/C. Hallá la dirección inicial, la rapidez en x=−0,10 m y decidí si alcanzaría x=+0,10 m sin otra intervención.

**Desarrollo.** Fₓ=qEₓ=−2,0×10⁻⁴ N, así que aₓ=−100 m/s² y parte hacia −x. Para x=−0,10 m, ΔV=−EₓΔx=+20 V. ΔU=qΔV=−20 μJ y ΔK=+20 μJ. La rapidez es √(2·20×10⁻⁶/(2×10⁻⁶))=√20≈4,47 m/s, con velocidad hacia −x. La ecuación v²=2aΔx confirma 20 m²/s².

En x=+0,10 m, la variación formal de energía potencial sería +20 μJ y se requeriría ΔK negativa desde K inicial cero. No hay rapidez real bajo las condiciones dadas y la trayectoria no alcanza ese punto. El resultado correcto es identificar la imposibilidad, no usar una raíz de un valor absoluto para forzar una rapidez.

### Problema 3 · Conductor central y cascarón aislante

Una esfera conductora de radio a tiene carga −Q. A su alrededor, una capa aislante concéntrica entre b y c, a<b<c, tiene carga volumétrica uniforme total +2Q. Hallá Eᵣ por regiones y el potencial de la esfera central, con referencia en infinito.

**Desarrollo.** Para r<a, E=0. Para a<r<b, la gaussiana encierra −Q: Eᵣ=−kQ/r². Dentro de la capa b<r<c, la fracción de carga volumétrica encerrada es 2Q(r³−b³)/(c³−b³), y Eᵣ=kQ[−1+2(r³−b³)/(c³−b³)]/r². Para r>c, la carga total es +Q y Eᵣ=kQ/r². El campo puede cambiar de sentido dentro de la capa, donde la carga encerrada se anula; el radio satisface r³=(b³+c³)/2.

Para el potencial central, la esfera aporta −kQ/a. La capa aislante aporta en todo punto interior a b una constante, porque cada cascarón elemental tiene potencial k dq/s. Con ρ=2Q/[(4π/3)(c³−b³)], su aporte es 4πkρ∫ᵇᶜs ds=2πkρ(c²−b²)=3kQ(c²−b²)/(c³−b³). Por tanto Vcentral=−kQ/a+3kQ(c²−b²)/(c³−b³). Este método evita integrar cuatro tramos, y se puede contrastar con la integral del campo por regiones.

**Comprobación.** La capa es aislante; no se impone E=0 en su material. El potencial sí es constante dentro del conductor central, por eso su centro y superficie comparten valor.

### Problema 4 · Dos capacitores y una fisura dieléctrica

Dos capacitores planos idénticos tienen área A, separación d y dieléctrico κ que llena todo el espacio. Se cargan individualmente a V₀ y luego, desconectados de la fuente, se conectan en paralelo con igual polaridad. En uno aparece una capa adicional de aire de espesor d/κ en serie con el dieléctrico original. Hallá sus capacitancias finales, el voltaje común y cómo se reparte la carga.

**Desarrollo.** Inicialmente C₀=κε₀A/d y la carga total del nodo positivo es 2C₀V₀. El capacitor intacto mantiene C₂=C₀. En el modificado, la capa dieléctrica de espesor d y la de aire d/κ se disponen en serie: C₁=ε₀A/[d/κ+d/κ]=C₀/2. Como el conjunto queda aislado y conectado en paralelo, Vf=2C₀V₀/(C₀/2+C₀)=4V₀/3. Sus cargas finales son Q₁=(2/3)C₀V₀ y Q₂=(4/3)C₀V₀.

La carga individual del capacitor modificado no se conserva porque puede circular hacia el otro. Lo que se conserva es la carga total de cada nodo aislado. El voltaje tampoco permanece V₀ porque ya no hay batería. Este problema combina dos decisiones que no se resuelven con una sola regla de «capacitor aislado» aplicada a cada elemento por separado.

### Problema 5 · Trabajo al separar placas

Un capacitor plano aislado tiene A=0,020 m²,d=1 mm y tensión inicial 100 V en vacío. Se aumenta la separación a 2 mm sin fuga de carga. Hallá Q,E,Vfinal y trabajo externo ideal.

**Desarrollo.** C inicial=177 pF y Q=CVi=17,7 nC. La carga permanece fija; el campo Q/(ε₀A)=10⁵ V/m no cambia. Al duplicarse d, C se reduce a la mitad y Vfinal=200 V. Uinicial=½·177×10⁻¹²·100²=0,885 μJ; Ufinal=1,770 μJ. El trabajo mecánico cuasiestático requerido es ΔU=0,885 μJ. La fuerza atractiva tiene módulo Q²/(2ε₀A)=8,85×10⁻⁴ N y, por distancia adicional de 1 mm, FΔd=0,885 μJ: ambas vías coinciden.

### Criterio de revisión

En cada solución debería verse qué es fuente, qué es observador, qué carga está encerrada o conservada, qué referencia de potencial se usó y qué condiciones permiten simplificar. Si el resultado final es correcto pero no podés reconstruir esas decisiones, volvé al desarrollo antes de considerar aprendido el problema.


### Hoja de fórmulas del capítulo 27

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\Delta U=q\Delta V,\quad\Delta K=-q\Delta V$ | Reutilizar potencial y energía del capítulo 4. Si desde reposo exige K final negativa, el punto no es accesible bajo esas hipótesis. |
| $Q_{\rm nodo}=\sum_iC_iV_i$ | Reutilizar conservación de carga y conexiones del capítulo 12, con voltajes orientados; no conserva cada carga individual si los capacitores siguen conectados. |
| $\oint\mathbf E\cdot d\mathbf A=Q_{\rm enc}/\varepsilon_0$ | Reutilizar Gauss por regiones: material conductor e intervalo radial determinan qué carga se encierra. No añade una ley nueva. |

## Capítulo 28 · Taller integrador de circuitos, magnetismo e inducción

### Problema 1 · Una fuente real y una red resistiva

Una batería de fem 15 V y resistencia interna 1 Ω alimenta un resistor de 2 Ω en serie con dos resistores de 6 Ω en paralelo. Hallá corriente de fuente, corrientes de ramas, tensión terminal y potencias.

**Desarrollo.** El paralelo equivale a 3 Ω; la resistencia externa es 5 Ω y el total 6 Ω. La corriente es 15/6=2,5 A. La tensión terminal vale 15−2,5·1=12,5 V. En el resistor serie caen 5 V y en el paralelo 7,5 V; cada rama lleva 7,5/6=1,25 A. La fuente ideal entrega 37,5 W, la resistencia interna disipa 6,25 W y la red externa recibe 31,25 W. De esos, 12,5 W van al resistor serie y 9,375 W a cada rama. Las potencias suman y las corrientes de las dos ramas recuperan la total.

**Variante.** Si se abre una de las ramas del paralelo, el total pasa a 1+2+6=9 Ω, la corriente de fuente baja a 5/3 A y la tensión del resistor restante de 6 Ω aumenta a 10 V. Agregar o quitar una rama puede cambiar la tensión de las otras cuando existen resistencias serie, aunque la fuente ideal interna conserve su fem.

### Problema 2 · Conmutar antes de alcanzar el estado final

Un capacitor de 50 μF inicialmente descargado se carga a través de 40 kΩ desde una fuente ideal de 12 V. Después de 2 s se lo desconecta y se descarga mediante 20 kΩ. Hallá la tensión al conmutar, el tiempo adicional para caer a 2 V y la energía disipada durante esa descarga hasta 2 V.

**Desarrollo.** La constante de carga es τc=2 s. La tensión al conmutar es V₁=12(1−e⁻¹)≈7,585 V. La nueva constante es τd=1 s, y V(t′)=V₁e⁻ᵗ′. Para 2 V, t′=ln(V₁/2) s≈1,333 s. La energía que pierde el capacitor es ΔUperdida=½C(V₁²−2²)≈1,338 mJ. Esa energía se disipa en el resistor bajo el modelo ideal; no es igual a ½C·12² porque la carga se interrumpió antes del estado final y la descarga tampoco llegó a cero.

**Comprobación.** La tensión es continua en la conmutación, aunque la corriente cambie de valor y sentido. Se usa un nuevo tiempo t′ desde ese instante. La corriente inicial de descarga mide V₁/(20 kΩ)≈0,379 mA.

### Problema 3 · Selector seguido de un analizador magnético

Iones positivos de carga e atraviesan un selector con E=2,0×10⁴ V/m y Bselector=0,40 T, con orientación canceladora. Después describen semicírculos en Banalizador=0,20 T. Un detector registra una distancia de 0,10 m desde la entrada para un grupo de iones. Hallá su rapidez y masa en el modelo no relativista.

**Desarrollo.** El selector fija v=E/Bselector=5,0×10⁴ m/s. El radio de la órbita posterior es la mitad del diámetro medido, r=0,050 m. La relación mv/r=|q|B da m=|q|Br/v=(1,60×10⁻¹⁹)(0,20)(0,050)/(5,0×10⁴)=3,20×10⁻²⁶ kg. No se usa Bselector para curvar la órbita del analizador: son dos regiones distintas. La rapidez es muy inferior a c, así que el control relativista respalda la aproximación empleada.

Si otro grupo tiene 10% más masa con misma carga y rapidez, su radio y distancia de impacto aumentan 10%. Si la rapidez no estuviera seleccionada, un radio distinto podría deberse también a una velocidad diferente; ese es el propósito de la primera etapa.

### Problema 4 · Superposición magnética y fuerza entre hilos

Dos hilos largos paralelos al eje z están en x=0 y x=0,20 m, ambos con corriente +z: I₁=2 A e I₂=6 A. Hallá el campo en el punto medio, la posición de campo nulo y la fuerza por longitud.

**Desarrollo.** En el punto medio cada distancia es 0,10 m. La mano derecha da B₁ hacia +y y B₂ hacia −y. Sus módulos son 4 μT y 12 μT, de modo que Btotal=−8 μT j. Para el cero, 2/x=6/(0,20−x) da x=0,050 m. La fuerza por longitud es μ₀·2·6/(2π·0,20)=1,2×10⁻⁵ N/m, atractiva. Aunque el campo en un punto del espacio pueda anularse, los conductores no dejan de interactuar: la fuerza en cada uno depende del campo del otro en su propia posición.

### Problema 5 · Generación por movimiento con energía conservada

Una barra de 0,30 m se mueve a 2 m/s sobre rieles en B=0,40 T perpendicular al circuito. La resistencia total es 0,80 Ω. Calculá fem, corriente, fuerza de frenado y potencia mecánica necesaria para mantener la rapidez.

**Desarrollo.** |ℰ|=BLv=0,24 V. La corriente mide 0,30 A. Su sentido por Lenz produce una fuerza que frena el movimiento; el módulo es ILB=0,036 N. El agente externo realiza 0,072 W, que coincide con I²R=0,072 W. Si el movimiento aumenta el área con flujo entrante, la corriente debe producir flujo saliente; el sentido geométrico se decide con la orientación específica del dibujo. La igualdad de potencias comprueba el modelo y la conservación.

Si se duplica la rapidez con B,L,R constantes, fem y corriente se duplican, fuerza se duplica y potencia se cuadruplica. El frenado no es una fuerza constante independiente de la velocidad en este modelo.

### Problema 6 · Corriente de desplazamiento y onda

Un capacitor de placas circulares se carga con I=4 mA. Su radio es a=0,020 m y se desprecian bordes. Hallá el módulo de B entre placas a r=a/2 usando Ampère–Maxwell. Después analizá una onda plana con amplitud eléctrica E₀=60 V/m en vacío: B₀ e intensidad media.

**Desarrollo del capacitor.** La corriente de desplazamiento total vale I. Si E es uniforme en el área circular, la parte enlazada a radio r es I r²/a². Así B2πr=μ₀I r²/a² y B=μ₀Ir/(2πa²). Para r=a/2=0,010 m, resulta B=2,0×10⁻⁸ T. Fuera de la región de placas idealizada, el área de flujo enlazada debe revisarse; no se prolonga la expresión interna indefinidamente.

**Desarrollo de la onda.** B₀=E₀/c≈2,0×10⁻⁷ T. La intensidad media es ε₀cE₀²/2≈4,78 W/m² usando constantes redondeadas. El factor 1/2 corresponde a amplitud de una sinusoidal; si 60 V/m fuese valor eficaz, la intensidad sería el doble. Leer si un dato es máximo, instantáneo, medio o eficaz forma parte del planteo.

### Para contrastar con los parciales del aula

Los parciales históricos piden justificación de modelos, campos vectoriales, trabajo, circuitos, capacitores con cambios geométricos y magnetismo. Este taller practica esas elecciones con datos propios. Para resolver una figura original del aula se debe abrir su PDF y reconstruir nodos, distancias, signos y flechas; no se adivina la geometría a partir de una transcripción incompleta. El último bloque del manual documenta qué fuentes están disponibles y qué equivalencias de programa siguen sin confirmarse.


### Hoja de fórmulas del capítulo 28

| Relación | Significado, unidades y condiciones |
| --- | --- |
| $\sum I=0,\quad\sum\Delta V=0,\quad\sum P_{\rm absorbida}=0$ | Balances con convenciones coherentes de capítulos 15 a 17; incluir potencia de fuentes que absorben. |
| $\tau=RC,\quad r=mv_\perp/(\lvert q\rvert B),\quad\mathcal E=-d\Phi_B/dt$ | Relaciones de capítulos 18,20 y24, con sus hipótesis. En conmutación conservar Vc inicial; en detector no confundir radio con diámetro. |


## Fuentes, cobertura y límites de esta edición

### Conjunto documental descargado antes de redactar

Se obtuvo el conjunto completo de PDF visible en [Física II · 01295 · 2026-2C](https://plataformaed.unnoba.edu.ar/course/view.php?id=11667): diez archivos de [Teóricas](https://plataformaed.unnoba.edu.ar/mod/folder/view.php?id=347635), once de [Prácticas y parciales](https://plataformaed.unnoba.edu.ar/mod/folder/view.php?id=347636), dos de [Laboratorio](https://plataformaed.unnoba.edu.ar/mod/folder/view.php?id=347637) y el [Cronograma](https://plataformaed.unnoba.edu.ar/mod/resource/view.php?id=347638). Son **24 PDF y 248 páginas**. Los enlaces requieren acceso al aula. Los originales se conservan para estudio local en `Externo/fisica-ii-2026`; el texto del manual y sus figuras son desarrollos propios.

Se revisó el texto extraído de todos los archivos y se inspeccionaron visualmente páginas seleccionadas, en particular diagramas de Coulomb, dipolo, superficies gaussianas, cavidades, circuitos, multímetros, curvas RC y parciales. No se afirma una auditoría visual de cada figura o una resolución individual de cada ejercicio del conjunto. No se modificaron entregas, cuestionarios, inscripciones ni estados de finalización del aula.

### Correspondencia de contenidos

| Fuente del aula | Capítulos de desarrollo | Alcance |
| --- | --- | --- |
| 1 · Interacción eléctrica | 0 a 3 | Herramientas, carga, materiales, Coulomb, superposición, campo y movimiento |
| 2 · Potencial eléctrico | 4 | Energía, trabajo, referencias, gradiente y equipotenciales |
| 3 · Dipolo eléctrico | 5 | Resultados exactos y lejanos, torque y energía |
| 4 · Cálculo de campos | 6 y 7 | Densidades, varillas, hilo, anillo, disco y planos |
| 5 · Gauss | 8 a 10 | Flujo, simetrías, esferas, conductores, cavidades y cilindros |
| 6 · Capacitores | 11 a 13 | Geometrías, redes, energía, fuerza, dieléctricos y conexiones |
| 7 · Corriente eléctrica | 14 y 15 | Deriva, densidad, Ohm, resistividad y temperatura |
| 8 · Circuitos | 15 a 19 | Potencia, fuentes, redes, Kirchhoff, RC e instrumentos |
| 9 · Magnetismo | 20 a 23 | Lorentz, órbitas, espiras, Hall, Biot–Savart, Ampère y materiales |
| 10 · Electromagnetismo | 24 y 25 | Faraday, Lenz, campo inducido, Maxwell y ondas |
| Siete prácticas y cuatro parciales históricos | Ejemplos, práctica y talleres 27–28 | Herramientas y problemas originales relacionados; no solucionario literal de toda la colección |
| Dos documentos de laboratorio | 19 | Medición, interpretación de datos, incertidumbre y estructura del informe |
| Cronograma: termodinámica | 26, complemento | No hay PDF teórico ni guía específica disponible en el conjunto consultado; cobertura docente completa sin confirmar |

Los formularios agrupan esos capítulos en ocho **unidades editoriales**. No se obtuvo un programa oficial separado que establezca esa numeración. El proyecto conserva Física II, código 01487, mientras el aula consultada indica 01295: la equivalencia administrativa y cualquier diferencia específica de programa deben confirmarse con la cátedra.

### Discrepancias y cuidados documentados

En la página 4 del apunte de Gauss se invierte en un paréntesis la descripción verbal del signo saliente: con normal externa, saliente es positivo y entrante negativo. El capítulo 8 explica la convención y el desarrollo posterior del propio apunte es consistente con ella. En la página 24 del apunte de circuitos se habla de «corriente a medir» en el apartado voltímetro; el capítulo 19 aclara que allí se mide diferencia de potencial y se conecta en paralelo.

El problema 8 de la práctica de potencial pide una posición positiva para una carga negativa liberada desde reposo en campo hacia +x. Sin intervención adicional, el movimiento es hacia −x; el capítulo 4 explica la incompatibilidad y el taller incluye una variante coherente. El ejercicio de ciclotrón de la práctica magnética requiere controlar la aproximación: sus datos dan una rapidez clásica cercana a 0,76c, que no es pequeña frente a c. El capítulo 20 distingue ese resultado aproximado de una predicción relativista.

Se distinguen densidad total de una lámina y densidad de una cara conductora, signo de carga y módulo en radios de órbita, referencia finita para hilos infinitos y conservación de carga por nodo para capacitores conectados. Estos detalles evitan transformar simplificaciones de un modelo en reglas generales falsas.

### Qué queda pendiente de validación

La introducción cuantitativa a energía de ondas, autoinducción, algunos métodos de redes y el capítulo de termodinámica son ampliaciones explicativas identificadas como tales. No se leyó íntegramente una bibliografía externa ni se presume acceso a material no visible. La revisión interna de cálculos y de presentación no sustituye una validación docente; esta sigue pendiente. La cobertura deberá actualizarse si el aula agrega material, en particular para termodinámica, o si se confirma un programa específico de 01487 diferente del curso 01295.

