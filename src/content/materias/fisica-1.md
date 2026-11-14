---
nombre: "Física I"
code: "00131"
resumen: "Manual de mecánica y fluidos con desarrollo conceptual, problemas resueltos, práctica y formularios por capítulo, unidad y materia."
---

## Cómo estudiar Física I con este manual

La física conecta un fenómeno con un modelo, una representación matemática y una predicción que podemos comprobar. Resolver un ejercicio no consiste en reconocer números para colocarlos en una fórmula: exige decidir qué objetos forman el sistema, cuáles interacciones importan, qué se desprecia y en qué intervalo es válido el modelo. Una cuenta impecable puede responder otro problema si se eligió mal alguna de esas condiciones.

El recorrido de esta edición sigue el cronograma y las nueve clases del aula de Física I de UNNOBA, junto con las prácticas 0–7. Las seis unidades de este manual son una **organización editorial**: herramientas y cinemática; dinámica; trabajo y energía; sistemas de partículas; cuerpo rígido; fluidos. No se presentan como una numeración oficial que no se haya verificado. El cronograma ubica el primer parcial hasta trabajo y energía y después incorpora cantidad de movimiento, rotación y fluidos. Las fechas y condiciones de evaluación deben comprobarse en la cursada vigente.

Se descargaron 18 PDF: nueve clases, ocho prácticas y el cronograma. Se examinó su contenido textual y se inspeccionaron páginas seleccionadas con figuras y ecuaciones. Algunas diapositivas contienen ecuaciones como imágenes; su extracción no reemplaza la revisión visual. No se afirma haber revisado íntegramente videos ni bibliografía externa, ni que cada consigna del aula tenga su solución aquí. Este es un manual desarrollado para estudiar el recorrido identificado, con revisión académica externa pendiente.

### Cómo se organiza el aprendizaje

Cada capítulo explica conceptos, obtiene relaciones útiles, desarrolla problemas y propone práctica con respuestas. Al final aparece su hoja de fórmulas. Cada unidad tiene además un formulario conjunto y hay uno general de la materia. Estos formularios sirven para recuperar relaciones ya comprendidas: leerlos solos no proporciona los criterios para elegirlas.

Una rutina efectiva tiene cuatro etapas: primero explicá el fenómeno sin números; después dibujá y elegí ejes; recién entonces planteá y resolvé ecuaciones; finalmente comprobá dimensiones, signos y límites. Si no podés explicar por qué se conserva una magnitud, no la declares constante solo porque simplifica las cuentas.

### Convenciones y notación

Usamos el SI: metro, kilogramo y segundo como unidades mecánicas básicas. Salvo indicación distinta, $g=9.8\,\mathrm{m/s^2}$ es una **magnitud positiva**. Con el eje vertical positivo hacia arriba, la aceleración gravitatoria es $a_y=-g$. En ejercicios diseñados para cuentas sencillas se anunciará expresamente $g=10\,\mathrm{m/s^2}$; no se alternarán valores silenciosamente.

Los vectores se indican en negrita: $\mathbf r$, $\mathbf v$, $\mathbf a$, $\mathbf F$. La letra v sin vector suele indicar rapidez, siempre no negativa; vx o vy son componentes con signo. P representa potencia cuando corresponde; para evitar confundirla con presión, en fluidos usamos p minúscula. El impulso se escribe J en negrita, $\mathbf J$; la unidad de energía joule se escribe $\mathrm J$. El momento de inercia es I.

### Una hoja de resolución que se puede reutilizar

1. **Situación:** qué se pregunta y qué datos representan condiciones iniciales, propiedades o restricciones.
2. **Sistema y modelo:** partícula, conjunto de partículas, sólido rígido o fluido; rozamiento, aire, cuerda y polea ideales o reales según el enunciado.
3. **Representación:** ejes, dibujo, diagrama de cuerpo libre o estados de energía.
4. **Leyes:** ecuaciones generales con sus condiciones, antes de reemplazar números.
5. **Resolución:** despejes, ramas y dominio físico de tiempos o desplazamientos.
6. **Interpretación:** dirección, unidades, redondeo y comprobación independiente cuando sea posible.

Conservar estos pasos permite localizar un error de modelo antes de repetir diez líneas de álgebra. También hace que una solución pueda ser entendida por otra persona sin adivinar qué significaba cada signo.

## Formulario general de Física I

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Medición y vectores

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert\mathbf A\rVert=\sqrt{A_x^2+A_y^2+A_z^2}$ | Componentes cartesianas ortonormales; todas con las mismas unidades. |
| $A_x=A\cos\theta,\quad A_y=A\sin\theta$ | θ desde x positivo; conservar cuadrante y sentido. |
| $\mathbf A\cdot\mathbf B=AB\cos\phi$ | Producto escalar; φ es el ángulo entre los vectores. |
| $\lVert\mathbf A\times\mathbf B\rVert=AB\sin\phi$ | Dirección por mano derecha; invertir factores invierte el vector. |
| $1\,\mathrm{km/h}=\tfrac1{3.6}\,\mathrm{m/s}$ | Para áreas y volúmenes, elevar el factor de longitud al cuadrado o al cubo. |
| $\delta(LW)\approx W\delta L+L\delta W$ | Cota aproximada de peor caso para pequeñas incertidumbres positivas; no regla estadística general. |

### Cinemática 1D

| Relación | Símbolos, significado y condiciones |
|---|---|
| $v=dx/dt,\quad a=dv/dt$ | Componentes con signo respecto del eje elegido. |
| $x=x_0+v_0\Delta t+\tfrac12a\Delta t^2,\quad v=v_0+a\Delta t$ | Solo aceleración constante durante ese tramo; Δt=t−t0. |
| $v^2=v_0^2+2a(x-x_0)$ | Aceleración constante; el cuadrado no determina el sentido final. |
| $\Delta x=\int v\,dt,\quad d=\int\lvert v\rvert dt$ | Desplazamiento con signo frente a recorrido; dividir intervalos si v cambia de signo. |
| $y=y_0+v_{0y}t-\tfrac12gt^2$ | Caída libre con eje ascendente, sin aire y g positiva constante. |

### Plano y movimiento relativo

| Relación | Símbolos, significado y condiciones |
|---|---|
| $x=x_0+v_{0x}t,\quad y=y_0+v_{0y}t-\tfrac12gt^2$ | Proyectil ideal; v0x=v0cosθ, v0y=v0sinθ y un único reloj. |
| $t_{\rm cima}=v_{0y}/g,\quad y_{\max}=y_0+v_{0y}^2/(2g)$ | Si v0y>0; en la cima solo se anula la componente vertical. |
| $T=2v_0\sin\theta/g,\quad X=v_0^2\sin(2\theta)/g$ | Solo llegada a la altura inicial, sin obstáculos y sin aire. |
| $\mathbf v_{P/S}=\mathbf v_{B/S}+\mathbf v_{P/B}$ | Ejes de ambos marcos no rotatorios entre sí; declarar cada observador. |
| $\mathbf a_{P/S}=\mathbf a_{B/S}+\mathbf a_{P/B}$ | Las aceleraciones coinciden entre marcos solo si aB/S=0 con esta geometría. |

### Cinemática circular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\omega=d\theta/dt,\quad\alpha=d\omega/dt,\quad s=R\theta$ | θ en radianes; R constante. |
| $v=R\lvert\omega\rvert,\quad a_n=v^2/R,\quad a_t=R\alpha$ | an hacia el centro; at con signo tangencial compatible con α. |
| $a=\sqrt{a_t^2+a_n^2}$ | Componentes ortogonales; no sumar sus módulos directamente. |
| $T=2\pi/\lvert\omega\rvert,\quad f=1/T$ | MCU; T período en s y f frecuencia en Hz. |
| $\omega=\omega_0+\alpha\Delta t,\quad\Delta\theta=\omega_0\Delta t+\tfrac12\alpha\Delta t^2$ | α constante; 1 rpm=2π/60 rad/s. |

### Newton y fuerzas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum\mathbf F_{\rm ext}=m\mathbf a$ | Sistema cerrado de masa constante y marco inercial. |
| $\mathbf F_{A\to B}=-\mathbf F_{B\to A}$ | Acción y reacción actúan sobre cuerpos distintos. |
| $\mathbf P=m\mathbf g,\quad F_g=GMm/r^2$ | r entre centros; mg constante es aproximación local. |
| $F_x=-kx,\quad x_{\rm eq}=mg/k$ | Resorte lineal; x desde longitud natural; segunda relación para equilibrio vertical. |
| $N=m(g+a_y)$ | Balanza horizontal en ascensor, y ascendente y sin otras fuerzas verticales sobre la persona. |

### Roce y vínculos

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lvert f_s\rvert\le\mu_sN,\quad f_k=\mu_kN$ | fs se calcula con las ecuaciones; igualdad solo en límite estático. fk opuesto al deslizamiento. |
| $N=mg\cos\theta,\quad a=g(\sin\theta-\mu_k\cos\theta)$ | Bloque que desliza cuesta abajo sin otras fuerzas; eje descendente. |
| $\tan\theta\le\mu_s$ | Condición para reposo de un bloque libre en una rampa simple. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2},\quad T=m_1(g+a)$ | Atwood ideal con m2 descendiendo; cuerda y polea ideales. |
| $a=\frac{(m_2-\mu_km_1)g}{m_1+m_2}$ | m1 sobre mesa horizontal y m2 colgante que baja, después de verificar que puede iniciar ese régimen. |

### Dinámica circular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_{\rm hacia\ centro}=mv^2/R$ | Sumar componentes de fuerzas reales; no agregar otra fuerza centrípeta. |
| $v_{\max}=\sqrt{\mu_sgR}$ | Curva horizontal con roce estático, N=mg y modelo de partícula. |
| $\tan\theta=v^2/(Rg)$ | Peralte sin roce; θ desde la horizontal. |
| $\cos\beta=g/(\omega^2L),\quad T=m\omega^2L$ | Péndulo cónico: β desde vertical, r=Lsinβ y cono no degenerado. |
| $v_{\rm top,min}=\sqrt{gR},\quad v_{\rm bottom,min}=\sqrt{5gR}$ | Giro vertical con cuerda tensa o contacto unilateral; segunda relación sin pérdidas entre fondo y cima. |
| $v_{\max}^2=Rg\frac{\sin\theta+\mu_s\cos\theta}{\cos\theta-\mu_s\sin\theta}$ | Peralte con roce al límite de deslizamiento hacia arriba; denominador positivo. |

### Trabajo y potencia

| Relación | Símbolos, significado y condiciones |
|---|---|
| $W=\int_C\mathbf F\cdot d\mathbf r$ | Trabajo de una fuerza; si es constante W=FΔr cosφ. |
| $W_{\rm net}=\Delta K,\quad K=\tfrac12mv^2$ | Partícula de masa constante; sumar trabajos de todas sus fuerzas. |
| $W_{\rm resorte}=\tfrac12k(x_i^2-x_f^2)$ | Resorte lineal, deformación desde longitud natural. |
| $\mathcal P=\mathbf F\cdot\mathbf v,\quad\mathcal P_{\rm med}=W/\Delta t$ | Potencia en W; usar velocidad del punto de aplicación. |
| $\eta=\mathcal P_{\rm util}/\mathcal P_{\rm entrada}$ | Rendimiento del proceso definido; entrada=útil/η. |

### Energía mecánica

| Relación | Símbolos, significado y condiciones |
|---|---|
| $U_g=mgy,\quad U_e=\tfrac12kx^2$ | g uniforme y resorte lineal; elegir origen de y y x natural. |
| $\Delta(K+U)=W_{\rm otras}$ | U incluye las fuerzas conservativas elegidas; no contarlas de nuevo como trabajo externo. |
| $\mathbf F_c=-\nabla U,\quad W_c=-\Delta U$ | Para fuerza conservativa y potencial definido en el dominio. |
| $W_{\rm roce}=-\mu_kNd$ | Deslizamiento sobre superficie fija; μk y N constantes durante d. |
| $U=-GMm/r$ | Gravitación puntual o exterior esférica; cero de U en infinito. |
| $v^2=2gL(\cos\theta-\cos\theta_0)$ | Péndulo ideal liberado desde reposo a θ0, ángulos desde vertical inferior. |

### Impulso y choques

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf J_{\rm net}=\int\mathbf F_{\rm net}dt=\Delta\mathbf p,\quad\mathbf p=m\mathbf v$ | Impulso en N·s; fuerza media=J/Δt. |
| $\mathbf P_i=\mathbf P_f$ | Solo si el impulso externo sobre el sistema es nulo o despreciable en ese intervalo. |
| $\mathbf v_f=\frac{m_1\mathbf u_1+m_2\mathbf u_2}{m_1+m_2}$ | Choque en que quedan unidos; K no se conserva en general. |
| $e=\frac{v_{2f}-v_{1f}}{u_1-u_2}$ | Choque 1D: u iniciales con signo; en colisión pasiva 0≤e≤1. |
| $v_1=\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2},\quad v_2=\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}$ | Choque frontal elástico 1D; ambas velocidades iniciales se expresan en el mismo eje. |

### Centro de masa

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf R=\frac{\sum m_i\mathbf r_i}{M}=\frac1M\int\mathbf r\,dm$ | M masa total; elegir densidad lineal, superficial o volumétrica para dm. |
| $\mathbf P=M\mathbf V_{\rm CM},\quad\sum\mathbf F_{\rm ext}=M\mathbf A_{\rm CM}$ | Masas constantes; las partículas pueden moverse respecto del centro. |
| $K=\tfrac12MV_{\rm CM}^2+\sum\tfrac12m_i v_i^{\prime2}$ | vi′ velocidades respecto del centro; el segundo término no es siempre cero. |
| $\Delta X_{\rm plataforma}=-\frac{mL}{M+m}$ | Persona m recorre L respecto de plataforma M; centro inicialmente quieto y sin fuerza horizontal externa. |

### Momento de inercia

| Relación | Símbolos, significado y condiciones |
|---|---|
| $I=\int r_\perp^2dm,\quad K_{\rm rot}=\tfrac12I\omega^2$ | Especificar eje; r⊥ distancia perpendicular a él. |
| $I=I_{\rm CM}+Md^2$ | Steiner: ejes paralelos, uno por centro de masa. |
| $I_{\rm disco}=\tfrac12MR^2,\quad I_{\rm aro}=MR^2$ | Eje central de simetría; disco macizo uniforme y aro fino. |
| $I_{\rm esfera}=\tfrac25MR^2,\quad I_{\rm cascaron}=\tfrac23MR^2$ | Esfera uniforme maciza o cascarón fino; eje por diámetro. |
| $I_{\rm barra,CM}=ML^2/12,\quad I_{\rm extremo}=ML^2/3$ | Barra delgada uniforme, ejes perpendiculares a ella. |

### Torque y poleas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\boldsymbol\tau=\mathbf r\times\mathbf F,\quad\sum\tau_z=I_z\alpha$ | r desde origen al punto de fuerza; segunda ecuación para eje fijo e I constante. |
| $W=\int\tau_zd\theta,\quad\mathcal P=\tau_z\omega$ | Trabajo y potencia rotacionales sobre un eje fijo. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2+I/R^2}$ | Atwood con polea masiva, eje sin roce y cuerda sin deslizar. |
| $(T_2-T_1)R=I\alpha,\quad a=R\alpha$ | Tensiones diferentes si hay aceleración angular e inercia no nula. |
| $a=\frac{g}{1+I/(MR^2)}$ | Cuerpo que se desenrolla de una cuerda con extremo fijo; I sobre su centro. |

### Rodadura

| Relación | Símbolos, significado y condiciones |
|---|---|
| $v_{\rm CM}=R\omega,\quad a_{\rm CM}=R\alpha$ | En magnitudes o con signos compatibles; solo sin deslizamiento sobre suelo fijo. |
| $K=\tfrac12Mv_{\rm CM}^2+\tfrac12I_{\rm CM}\omega^2$ | Movimiento plano rígido; no sustituir I de otro eje en el segundo término. |
| $\beta=I_{\rm CM}/(MR^2),\quad a=\frac{g\sin\theta}{1+\beta},\quad v^2=\frac{2gh}{1+\beta}$ | Rodadura desde reposo por rampa sin pérdidas; comprobar adherencia. |
| $\mu_s\ge\frac{\beta}{1+\beta}\tan\theta$ | Condición de rodadura para descenso impulsado solo por gravedad. |
| $a=\frac{Fh}{MR(1+\beta)},\quad f=F\left(\frac h{R(1+\beta)}-1\right)$ | F horizontal hacia derecha aplicada a altura h sobre suelo; f positiva a derecha; rodadura viable. |
| $t_*=\frac{2v_0}{7\mu_kg},\quad v_*=\frac57v_0$ | Esfera maciza lanzada con ω0=0; transición de deslizamiento a rodadura en horizontal. |

### Momento angular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf L_O=\mathbf r\times\mathbf p,\quad\boldsymbol\tau_{O,\rm ext}=d\mathbf L_O/dt$ | Origen fijo en marco inercial; sistema y origen comunes. |
| $L_z=I_z\omega,\quad I_i\omega_i=I_f\omega_f$ | Rotación sobre eje; segunda relación si torque externo axial es nulo. |
| $\omega_f=\frac{I_1\omega_1+I_2\omega_2}{I_1+I_2}$ | Dos rotores que se acoplan sobre el mismo eje sin impulso angular externo; K puede disminuir. |
| $K=L_z^2/(2I)$ | Giro axial con Lz fijo: cambiar I puede requerir trabajo interno. |

### Estática

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_x=0,\quad\sum F_y=0,\quad\sum\tau_z=0$ | Equilibrio plano; para reposo sostenido, velocidad y giro iniciales también nulos. |
| $\tau_z=xF_y-yF_x$ | Coordenadas desde el origen elegido; signos según mano derecha. |
| $\lvert f_s\rvert\le\mu_sN,\quad N\ge0,\quad T\ge0$ | Verificar viabilidad de apoyos, contacto y cuerda. |
| $\mu_{s,\min}=\tfrac12\cot\theta$ | Escalera uniforme sin persona, pared lisa y piso rugoso; θ desde suelo. |

### Hidrostática

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\rho=m/V,\quad p=F_\perp/A$ | Densidad homogénea y presión uniforme sobre A; en general usar diferenciales. |
| $\frac{dp}{dy}=-\rho g,\quad p=p_0+\rho gh$ | y ascendente; h profundidad; segunda relación si ρ constante. |
| $p_{\rm man}=p_{\rm abs}-p_{\rm atm}$ | Mantener una referencia de presión coherente en todo el balance. |
| $B=\rho_fgV_{\rm sum},\quad\frac{V_{\rm sum}}{V}=\frac{\rho_c}{\rho_f}$ | Empuje en fluido homogéneo; segunda relación solo flotación libre de cuerpo homogéneo. |
| $F_1/A_1=F_2/A_2,\quad A_1\Delta x_1=A_2\Delta x_2$ | Prensa ideal con pistones a igual altura y líquido incompresible. |
| $F=\tfrac12\rho gbH^2,\quad y_{\rm CP}=2H/3$ | Placa vertical rectangular desde superficie libre, presión atmosférica compensada. |

### Tensión superficial

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dE=\gamma\,dA,\quad F=\gamma L$ | Una interfaz y fuerza tangencial sobre línea de longitud L; proyectar componentes. |
| $\Delta p=2\gamma/R,\quad\Delta p_{\rm pompa}\approx4\gamma/R$ | Una interfaz esférica frente a película de dos caras con radios aproximadamente iguales. |
| $h=\frac{2\gamma\cos\theta}{\rho gr}$ | Capilar circular: θ medido a través del líquido con la pared, r radio. |
| $F_{\rm pelicula}=2\gamma L$ | Borde móvil recto con dos caras; no usar factor dos sin contar interfaces. |

### Hidrodinámica

| Relación | Símbolos, significado y condiciones |
|---|---|
| $Q=Av,\quad\rho_1A_1v_1=\rho_2A_2v_2$ | v uniforme o media normal; flujo estacionario sin fuentes; si ρ constante, Av constante. |
| $p+\tfrac12\rho v^2+\rho gy=\mathrm{constante}$ | Bernoulli ideal a lo largo de línea de corriente: estacionario, incompresible, sin pérdidas ni máquinas. |
| $v_{\rm salida}=\sqrt{2gh}$ | Torricelli: depósito grande, superficie y salida a igual presión, h sobre el orificio. |
| $\mathcal P_{\rm hid}=Q\left[\Delta p+\rho g\Delta y+\tfrac12\rho\Delta(v^2)\right]$ | Sin pérdidas adicionales; potencia de entrada=hidráulica/η. |
| $t_{\rm vaciado}=\frac Aa\sqrt{\frac{2h_0}{g}}$ | Tanque de sección A constante, orificio pequeño a, descarga ideal; sin coeficiente real de descarga. |



## Unidad I · Capítulo 1. Medición, unidades y herramientas vectoriales

### Magnitudes, valores y modelos

Medir es comparar una magnitud con una unidad y comunicar el resultado con una precisión. «La longitud es 2» está incompleto: 2 m y 2 cm representan situaciones diferentes. Una magnitud escalar queda determinada por valor y unidad; una vectorial necesita además dirección y sentido. Masa, tiempo y energía son escalares; desplazamiento, velocidad y fuerza son vectoriales. Que un escalar pueda ser negativo, como una diferencia de energía, no lo convierte en vector.

La descripción física depende del modelo. Un automóvil puede tratarse como partícula para estudiar su viaje entre ciudades, pero no para calcular cómo vuelca: entonces importan dimensiones y rotación. Un sólido rígido ideal mantiene constantes las distancias internas; un resorte necesita deformación. Declarar la idealización permite saber qué pregunta puede responder el cálculo.

### Análisis dimensional y conversiones

Denotamos dimensiones básicas por L, M y T. Velocidad tiene dimensión LT⁻¹, aceleración LT⁻², fuerza MLT⁻² y energía ML²T⁻². Los términos que se suman en una ecuación deben tener la misma dimensión. Los argumentos de seno, logaritmo y exponencial deben ser adimensionales. En $x=A\cos(\omega t)$, A es longitud y ω tiene unidad s⁻¹; en $v=v_0e^{-t/\tau}$, τ es tiempo.

Para convertir 72 km/h multiplicamos por $1000\,\mathrm m/(1\,\mathrm{km})$ y por $1\,\mathrm h/(3600\,\mathrm s)$: las unidades se cancelan y resulta 20 m/s. En áreas y volúmenes el factor se eleva a la potencia correspondiente: 1 cm²=10⁻⁴ m² y 1 cm³=10⁻⁶ m³. Confundir cm con cm² genera errores de órdenes de magnitud.

**Control de una ecuación.** Si alguien propone $v^2=v_0^2+2at$, el primer miembro tiene m²/s² y el último término m/s. No puede ser correcto como suma. La relación válida para aceleración constante es $v^2=v_0^2+2a\Delta x$. La consistencia dimensional puede refutar una fórmula, pero no demostrarla: $v^2=v_0^2+7a\Delta x$ tiene dimensiones correctas y un coeficiente equivocado.

### Cifras significativas e incertidumbre

Los datos medidos no tienen precisión infinita. Conviene conservar cifras adicionales durante las operaciones y redondear al final de acuerdo con los datos. Si una longitud es $L\pm\delta L$, su incertidumbre relativa es δL/L. Para un área A=LW y pequeñas incertidumbres, una cota aproximada de peor caso es $\delta A/A\approx\delta L/L+\delta W/W$. No es la misma regla que una combinación estadística de errores independientes, que necesita ese supuesto adicional.

Por ejemplo, L=(2.00±0.01) m y W=(1.00±0.01) m dan A=2.00 m² y una incertidumbre aproximada máxima 0.03 m². Informar 2.000000 m² ocultaría la precisión real. Este tratamiento es una herramienta introductoria; las reglas específicas del laboratorio tienen prioridad cuando se trabaja con mediciones experimentales.

### Vectores y componentes

Entre A y B, el desplazamiento es B−A. De A=(1,2) m a B=(5,5) m resulta (4,3) m y módulo 5 m. El vector unitario correspondiente es (4/5,3/5). Un cambio del origen altera las coordenadas de ambos puntos, pero no la diferencia entre ellos si los ejes mantienen orientación y escala.

Para un vector de magnitud A y ángulo θ desde x positivo, $A_x=A\cos\theta$, $A_y=A\sin\theta$. El módulo es $\sqrt{A_x^2+A_y^2}$. Al reconstruir el ángulo hay que respetar el cuadrante: arctan(Ay/Ax) aislada no distingue vectores opuestos. Una función atan2 o un dibujo evita esa ambigüedad.

En ejes rotados para un plano que sube hacia la derecha con ángulo θ, el unitario tangente ascendente es $(\cos\theta,\sin\theta)$ y el normal saliente $(-\sin\theta,\cos\theta)$. Proyectar el peso (0,−mg) da componentes −mg sinθ sobre la tangente y −mg cosθ sobre la normal. No se gira físicamente la gravedad al elegir ejes: se cambia su representación.

### Productos que se usarán durante toda la materia

El producto escalar $\mathbf A\cdot\mathbf B=AB\cos\phi$ mide una proyección ponderada y da un escalar. Aparecerá en el trabajo: solo la componente de una fuerza paralela al desplazamiento aporta. Para A=(2,−3) y B=(1,4), A·B=−10; el ángulo es obtuso porque el producto es negativo.

El producto vectorial tiene módulo AB sinφ y dirección perpendicular según la mano derecha. En el plano, $(A_x,A_y,0)\times(B_x,B_y,0)=(0,0,A_xB_y-A_yB_x)$. Con los vectores anteriores da 11 k; al invertir factores da −11 k. Este signo determinará el sentido de un torque.

### Práctica y respuestas

**H1.** Convertí 90 km/h, 250 cm² y 2.5 L al SI. **H2.** Hallá dimensión de C en F=Cv y de τ en x=A exp(−t/τ). **H3.** Sumá 6 m al este y 8 m al norte; distinguí camino y desplazamiento. **H4.** Para A=(3,0,0) y B=(0,2,0), hallá escalar y vectorial. **H5.** ¿Puede una ecuación dimensionalmente correcta ser físicamente falsa?

**Respuestas razonadas.** H1: 25 m/s, 0.025 m², 0.0025 m³. H2: C tiene kg/s y τ segundos. H3: desplazamiento (6,8) m, módulo 10 m y recorrido 14 m. H4: escalar cero, vectorial 6 k; los vectores son perpendiculares. H5: sí; el análisis dimensional no fija coeficientes numéricos ni hipótesis del modelo. La práctica 0 del aula trabaja estas herramientas antes de usarlas en mecánica.
### Hoja de fórmulas del capítulo 1


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert\mathbf A\rVert=\sqrt{A_x^2+A_y^2+A_z^2}$ | Componentes cartesianas ortonormales; todas con las mismas unidades. |
| $A_x=A\cos\theta,\quad A_y=A\sin\theta$ | θ desde x positivo; conservar cuadrante y sentido. |
| $\mathbf A\cdot\mathbf B=AB\cos\phi$ | Producto escalar; φ es el ángulo entre los vectores. |
| $\lVert\mathbf A\times\mathbf B\rVert=AB\sin\phi$ | Dirección por mano derecha; invertir factores invierte el vector. |
| $1\,\mathrm{km/h}=\tfrac1{3.6}\,\mathrm{m/s}$ | Para áreas y volúmenes, elevar el factor de longitud al cuadrado o al cubo. |
| $\delta(LW)\approx W\delta L+L\delta W$ | Cota aproximada de peor caso para pequeñas incertidumbres positivas; no regla estadística general. |



## Unidad I · Capítulo 2. Cinemática unidimensional y movimiento por etapas

### Posición, desplazamiento y distancia

La posición x(t) depende del origen y del eje elegido. El desplazamiento es xf−xi; la distancia recorrida acumula longitudes y nunca es negativa. Si un móvil va de x=0 a x=10 m y vuelve a x=4 m, su desplazamiento es 4 m y su recorrido 16 m. La diferencia importa cuando cambia el sentido de movimiento.

La velocidad media es Δx/Δt; la rapidez media es distancia/Δt. La velocidad instantánea es la derivada de x y la aceleración la derivada de v. Una velocidad negativa indica movimiento hacia x decreciente. Una aceleración negativa no significa necesariamente frenado: se reduce la rapidez cuando velocidad y aceleración tienen signos opuestos; si ambos son negativos, aumenta la rapidez hacia la izquierda.

### Gráficos que representan relaciones físicas

La pendiente de x contra t es velocidad y la pendiente de v contra t es aceleración. El área con signo bajo v(t) es desplazamiento; bajo a(t) es cambio de velocidad. Para distancia se integra |v| y se separan los intervalos donde cambia su signo. Una gráfica de posición no es el dibujo de la trayectoria: en un movimiento rectilíneo, x(t) puede ser una parábola aunque el objeto viaje por una recta.

![Posición, velocidad y aceleración: pendientes y cambios de sentido](/planos-de-estudio/img/fisica1/cinematica.svg)

Si una gráfica de velocidad tiene un salto ideal, la aceleración ordinaria no está definida en ese instante. En modelos por etapas, x suele mantenerse continua: el objeto no se teletransporta entre dos fases. Su velocidad puede cambiar bruscamente en un modelo de impacto, pero hay que decir que se idealiza una interacción breve.

### Obtener las ecuaciones con aceleración constante

Si a es constante, integrar dv/dt=a entre t0 y t da $v=v_0+a\Delta t$. Integrar esa velocidad produce $x=x_0+v_0\Delta t+\tfrac12a\Delta t^2$. Eliminando Δt se obtiene $v^2=v_0^2+2a(x-x_0)$. Esta última pierde información del signo de v al elevar al cuadrado: el sentido se recupera usando la situación física o la ecuación temporal.

Para a=0 obtenemos MRU, x=x0+vΔt. Si a varía, las expresiones cuadráticas no son válidas globalmente: se integra la función a(t) o se divide en fases donde la aproximación constante esté justificada. En un problema con varios móviles se necesita un único reloj común, incluso si algunos comienzan después.

### Problema resuelto: un cambio de sentido

Sea x(t)=1+8t−2t², con metros y segundos, entre t=0 y 4 s. Entonces v=8−4t y a=−4 m/s². La velocidad se anula en t=2 s. La posición inicial es 1 m; en el retorno es 9 m; la final vuelve a ser 1 m. El desplazamiento es cero, pero la distancia es |9−1|+|1−9|=16 m. La rapidez media es 4 m/s y la velocidad media cero.

El objeto tiene velocidad instantánea cero en t=2 s y aceleración no nula. Por eso vuelve a moverse inmediatamente en el sentido contrario. Un reposo instantáneo no es equilibrio dinámico. Esta distinción reaparece en el punto más alto de un lanzamiento vertical.

### Problema resuelto: reacción y frenado

Un automóvil viaja a 20 m/s, tarda 0.75 s en empezar a frenar y luego tiene aceleración constante −5 m/s² hasta detenerse. Durante la reacción sigue a 20 m/s y recorre 15 m. Durante el frenado tarda 4 s y recorre $v_0^2/(2\cdot5)=40$ m. La distancia total de detención es 55 m y el tiempo total 4.75 s.

No se aplica la desaceleración desde t=0: eso omitiría la etapa de reacción. Si se cambia la rapidez inicial a 40 m/s con los otros datos iguales, la reacción pasa a 30 m y el frenado a 160 m. El término de frenado crece con el cuadrado de la rapidez. Este es un resultado del modelo de aceleración constante, no una predicción completa para cualquier vehículo o superficie.

Para escribir el segundo tramo con el reloj común usamos τ=t−0.75: $x=15+20\tau-2.5\tau^2$, válida para 0≤τ≤4. Continuar esa parábola después de la detención describiría un vehículo que comienza a moverse hacia atrás; el modelo de frenado termina cuando v llega a cero.

### Encuentros y relojes desplazados

Si un móvil A parte de x=0 con rapidez 10 m/s y B comienza dos segundos después desde el mismo punto con aceleración 2 m/s² desde reposo, sus posiciones para t≥2 son xA=10t y xB=(t−2)². Igualarlas da t²−14t+4=0, con raíces 7±3√5. Solo 7+3√5≈13.708 s pertenece al intervalo t≥2. El otro valor no describe un encuentro: se obtuvo extendiendo una ecuación a tiempos donde B todavía no había iniciado esa fase.

La posición del encuentro es aproximadamente 137.08 m. El tiempo de viaje de B es t−2≈11.708 s. Informar un «tiempo de alcance» sin especificar desde qué inicio se mide puede crear una discrepancia aparente con otra solución.

### Caída libre y tiro vertical

Sin resistencia del aire y cerca de la superficie, ay=−g si arriba es positivo. Las mismas ecuaciones de aceleración constante sirven para caída y lanzamiento: lo que cambia es v0 y la posición inicial. En la altura máxima vy=0, pero ay=−g. Para un lanzamiento hacia arriba desde y0, $t_\text{máx}=v_0/g$ y $y_\text{máx}=y_0+v_0^2/(2g)$ si v0>0.

**Ejemplo.** Desde 20 m se lanza una pelota hacia arriba a 14 m/s. La ecuación es y=20+14t−4.9t². Llega al máximo en 10/7≈1.429 s y alcanza 30 m. Para el suelo, y=0 da $t=(14+\sqrt{588})/9.8\approx3.903$ s. La raíz negativa corresponde a una prolongación matemática anterior al lanzamiento. La velocidad de impacto es $-\sqrt{588}\approx-24.249$ m/s. El signo indica descenso; la rapidez es positiva.

### Práctica y respuestas

**C1.** x=3−6t+t²: hallá cambio de sentido, desplazamiento y recorrido entre 0 y 5 s. **C2.** Un móvil pasa de 5 a 17 m/s en 4 s con a constante: calculá a y desplazamiento. **C3.** Dos móviles parten de 0 y 100 m con velocidades +12 y −8 m/s: encontrá encuentro. **C4.** Un objeto cae desde 45 m con g=10: tiempo y velocidad de llegada. **C5.** ¿Qué información falta para determinar x(t) si solo se conoce a(t)?

**Respuestas.** C1: v=−6+2t, retorna en 3 s, x0=3, x3=−6, x5=−2 m; Δx=−5 m y recorrido 13 m. C2: a=3 m/s² y Δx=44 m. C3: t=5 s, x=60 m. C4: t=3 s y vy=−30 m/s con eje ascendente. C5: velocidad y posición en un instante de referencia. La práctica 1 incluye muchos problemas por etapas y gráficos: deben trabajarse además de los casos con una sola fase.
### Hoja de fórmulas del capítulo 2


| Relación | Símbolos, significado y condiciones |
|---|---|
| $v=dx/dt,\quad a=dv/dt$ | Componentes con signo respecto del eje elegido. |
| $x=x_0+v_0\Delta t+\tfrac12a\Delta t^2,\quad v=v_0+a\Delta t$ | Solo aceleración constante durante ese tramo; Δt=t−t0. |
| $v^2=v_0^2+2a(x-x_0)$ | Aceleración constante; el cuadrado no determina el sentido final. |
| $\Delta x=\int v\,dt,\quad d=\int\lvert v\rvert dt$ | Desplazamiento con signo frente a recorrido; dividir intervalos si v cambia de signo. |
| $y=y_0+v_{0y}t-\tfrac12gt^2$ | Caída libre con eje ascendente, sin aire y g positiva constante. |



## Unidad I · Capítulo 3. Movimiento en el plano, proyectiles y movimiento relativo

### Una trayectoria, varias componentes

La posición es $\mathbf r(t)=x(t)\mathbf i+y(t)\mathbf j+z(t)\mathbf k$. Derivar componente a componente da velocidad y aceleración. El vector velocidad es tangente a la trayectoria, mientras que la aceleración puede tener una componente tangente y otra normal. No hay razón general para que posición, velocidad y aceleración sean paralelas.

Para r=(2−t,t²) m, la velocidad es (−1,2t) m/s y la aceleración (0,2) m/s². La trayectoria cartesiana es y=(2−x)², pero si el tiempo físico es t≥0 solo se recorre x≤2. Eliminar t sin conservar esa restricción agregaría puntos que no pertenecen al movimiento estudiado. En t=2 s la rapidez es √17 m/s, diferente de cualquiera de sus componentes aisladas.

### Proyectiles: independencia de componentes y un reloj común

Suponemos una región donde g es aproximadamente constante, resistencia del aire despreciable y superficie terrestre tratada como plana e inercial. Después de liberar el objeto, la única aceleración es gravitatoria. Con ángulo θ desde la horizontal y velocidad inicial v0, sus componentes iniciales son v0 cosθ y v0 sinθ. Entonces


$$
x=x_0+v_0\cos\theta\,t,\qquad
y=y_0+v_0\sin\theta\,t-\frac12gt^2.
$$


No se calculan tiempos distintos para los movimientos horizontal y vertical: son dos componentes de una misma posición en el mismo instante. La componente horizontal de velocidad permanece constante; la vertical cambia linealmente. En la cima solo se anula vy: si vx≠0 el objeto sigue moviéndose.

Eliminar t cuando vx≠0 da una parábola: $y=y_0+\tan\theta(x-x_0)-g(x-x_0)^2/(2v_0^2\cos^2\theta)$. No sirve para un lanzamiento estrictamente vertical porque se dividió por cosθ. Las ecuaciones temporales, en cambio, siguen siendo válidas.

![Trayectoria y velocidad de un lanzamiento oblicuo](/planos-de-estudio/img/fisica1/proyectil.svg)

### Cuándo son válidas las fórmulas de alcance

Si el punto de llegada tiene la misma altura que el de partida y no hay obstáculos, el tiempo no nulo de vuelo es 2v0 sinθ/g y el alcance v0² sin(2θ)/g. De allí sale un máximo a 45° **bajo esas condiciones**. Para una llegada a otra altura se resuelve primero la ecuación vertical correspondiente. Aplicar el alcance simétrico desde un balcón puede dar un resultado incorrecto aunque el ángulo sea conocido.

### Problema completo: pelota desde una terraza

Se lanza una pelota desde 10 m de altura con velocidad inicial (12,16) m/s y usamos g=10 m/s². Las ecuaciones son x=12t, y=10+16t−5t²; vx=12, vy=16−10t.

La cima ocurre en t=1.6 s y tiene altura 22.8 m. El suelo exige 5t²−16t−10=0, cuya raíz positiva es $(16+\sqrt{456})/10\approx3.735$ s. El alcance es aproximadamente 44.825 m. Al llegar, la velocidad es $(12,-\sqrt{456})$ m/s y su módulo √600≈24.495 m/s. Como control energético, v²=v0²+2g·10=400+200=600.

Para saber si pasa por un aro en x=24 m, fijamos t=2 s. Allí y=22 m y vy=−4 m/s: está descendiendo. La misma altura podría alcanzarse dos veces en otros casos, pero la coordenada horizontal fija un único instante cuando vx es constante no nula.

### Movimiento relativo: nombrar observadores evita errores

Sean S el suelo, B una embarcación y P una persona. Si los ejes no giran entre sí, $\mathbf r_{P/S}=\mathbf r_{B/S}+\mathbf r_{P/B}$. Derivando, $\mathbf v_{P/S}=\mathbf v_{B/S}+\mathbf v_{P/B}$. Si la velocidad de B respecto de S es constante, las aceleraciones medidas por ambos coinciden. Si B acelera, aparece su aceleración en la suma; no se puede declararlos ambos inerciales automáticamente.

Una persona camina a 1 m/s hacia la proa de una embarcación que avanza a 4 m/s respecto de la costa. Su velocidad respecto de la costa es 5 m/s. Si camina hacia la popa a 1 m/s, es 3 m/s. El signo se asigna dentro de un eje común; las velocidades relativas no se suman como módulos cuando sus direcciones son distintas.

### Cruzar un río: mínimo tiempo y llegada enfrente son objetivos distintos

Un bote tiene rapidez 5 m/s respecto del agua; el río fluye a 3 m/s hacia el este y mide 80 m de ancho. Si apunta perpendicularmente a la costa, avanza hacia la otra orilla a 5 m/s y tarda 16 s; deriva 48 m al este. Es el menor tiempo para alcanzar la orilla porque toda inclinación reduce la componente transversal disponible.

Para llegar exactamente enfrente, necesita una componente de velocidad respecto del agua de −3 m/s al oeste. Su componente transversal resulta √(25−9)=4 m/s. Tarda 20 s y debe apuntar un ángulo arctan(3/4)≈36.87° contra corriente respecto de la perpendicular. Si la corriente superara 5 m/s, no podría cancelar completamente la deriva con ese bote: la condición se detecta antes de resolver un ángulo inexistente.

### Práctica y respuestas

**P1.** Se deja caer una pelota desde un vehículo que viaja horizontalmente a 10 m/s a una altura de 5 m. Con g=10, hallá tiempo y alcance respecto del suelo. **P2.** Lanzamiento desde el suelo a 20 m/s y 30° con g=10: tiempo, altura máxima y alcance. **P3.** ¿Qué trayectoria observa alguien que comparte la velocidad horizontal del punto de liberación? **P4.** Un viento de 6 m/s al este actúa sobre un vehículo que viaja respecto del aire a 8 m/s al norte: velocidad respecto del suelo. **P5.** ¿Se conserva la rapidez durante un tiro oblicuo?

**Respuestas.** P1: t=1 s, alcance 10 m; conservar vx inicial es esencial. P2: t=2 s, altura 5 m y alcance 20√3≈34.641 m. P3: caída vertical si el observador mantiene esa velocidad y se desprecia el aire. P4: (6,8) m/s, rapidez 10 m/s, 36.87° al este del norte. P5: no; disminuye al subir y aumenta al bajar, con mínimo |vx| en la cima. Las clases 2 y 3 y la práctica 1 desarrollan estos tipos de representación.
### Hoja de fórmulas del capítulo 3


| Relación | Símbolos, significado y condiciones |
|---|---|
| $x=x_0+v_{0x}t,\quad y=y_0+v_{0y}t-\tfrac12gt^2$ | Proyectil ideal; v0x=v0cosθ, v0y=v0sinθ y un único reloj. |
| $t_{\rm cima}=v_{0y}/g,\quad y_{\max}=y_0+v_{0y}^2/(2g)$ | Si v0y>0; en la cima solo se anula la componente vertical. |
| $T=2v_0\sin\theta/g,\quad X=v_0^2\sin(2\theta)/g$ | Solo llegada a la altura inicial, sin obstáculos y sin aire. |
| $\mathbf v_{P/S}=\mathbf v_{B/S}+\mathbf v_{P/B}$ | Ejes de ambos marcos no rotatorios entre sí; declarar cada observador. |
| $\mathbf a_{P/S}=\mathbf a_{B/S}+\mathbf a_{P/B}$ | Las aceleraciones coinciden entre marcos solo si aB/S=0 con esta geometría. |



## Unidad I · Capítulo 4. Cinemática circular y componentes de la aceleración

### Ángulos, radianes y velocidades

Un radián se define por θ=s/R. El ángulo es adimensional, pero escribir rad ayuda a distinguirlo de grados o vueltas. Una vuelta equivale a 2π rad y una revolución por minuto a 2π/60 rad/s. Las relaciones v=Rω y at=Rα requieren usar radianes; introducir 90 como si fueran radianes cuando son grados produce un error que no se arregla al final.

La velocidad angular es ω=dθ/dt y la aceleración angular α=dω/dt. Para un eje fijo se puede usar el signo positivo antihorario. Dos puntos de una rueda rígida comparten ω y α, pero sus velocidades tangenciales tienen módulos distintos si están a radios diferentes. El punto del eje tiene velocidad tangencial cero aunque la rueda esté girando.

### Por qué existe aceleración con rapidez constante

En un círculo de radio R, r=R(cosθ,sinθ). Si θ=ωt con ω constante, derivar da v=Rω(−sinθ,cosθ) y a=−Rω²(cosθ,sinθ). La velocidad es tangente y la aceleración apunta al centro. Su módulo es Rω²=v²/R. Cambia la dirección de v aunque su norma permanezca constante.

Para rapidez variable sobre un círculo, la aceleración es $\mathbf a=\dot v\,\hat{\mathbf t}+(v^2/R)\hat{\mathbf n}$, con n hacia el centro. Ambas componentes son perpendiculares. La magnitud total es √(at²+an²), no at+an. En una trayectoria cualquiera se puede usar su radio de curvatura local; el curso aplica principalmente esta idea a círculos.

Si se conocen los vectores v y a y v≠0, la componente tangencial con signo es (v·a)/|v|. La magnitud de la normal puede obtenerse de √(|a|²−at²). Esta descripción distingue aumentar rapidez de doblar la trayectoria. En v=0 el unitario tangente derivado de v no está definido y se estudia la situación mediante coordenadas o límites.

### MCU y MCUV

En MCU, ω es constante, el período es T=2π/|ω| y la frecuencia f=1/T. «Uniforme» se refiere a la rapidez angular, no al vector velocidad de cada punto. En MCUV, α es constante y se integran relaciones análogas a las de una dimensión: ω=ω0+αΔt, θ=θ0+ω0Δt+αΔt²/2 y ω²=ω0²+2αΔθ. Aunque α sea constante, la aceleración centrípeta suele variar porque depende de ω².

### Ejemplo: rueda que acelera

Una rueda de radio 0.5 m parte con ω0=2 rad/s y α=3 rad/s². Luego de 4 s, ω=14 rad/s y el ángulo barrido es 32 rad, equivalente a 32/(2π)≈5.093 vueltas. Un punto del borde tiene rapidez 7 m/s, aceleración tangencial 1.5 m/s² y normal 98 m/s². La aceleración total es aproximadamente 98.011 m/s², predominantemente radial.

No sería correcto decir que «la aceleración es 3» sin unidad y sin especificar si es angular o lineal. Tampoco se multiplica 32 por el radio para obtener vueltas: RΔθ=16 m es longitud de arco recorrida por el punto del borde.

### Ejemplo: frenado de un disco

Un disco gira a 120 rpm y se detiene uniformemente en 5 s. ω0=4π rad/s y α=−4π/5 rad/s². El ángulo es la rapidez angular media por el tiempo: Δθ=(4π+0)·5/2=10π rad, es decir 5 vueltas. La ecuación deja de describir frenado después de 5 s: prolongarla predice giro inverso. Es la misma restricción física que apareció en el frenado rectilíneo.

### Qué sucede al liberar un objeto

Si un objeto abandona una trayectoria circular porque se rompe una cuerda o pierde contacto, su velocidad inicial para la nueva etapa es tangente a la curva en el punto de liberación. No sale radialmente «por inercia». Si después solo actúa gravedad, se vuelve un problema de proyectil con esa velocidad inicial. La aceleración que tenía antes no se conserva: cambia al cambiar las interacciones.

### Práctica y respuestas

**A1.** Convertí 300 rpm a rad/s y hallá período. **A2.** Un móvil va a 12 m/s por un círculo de radio 9 m: an. **A3.** En el mismo círculo at=3 m/s²: módulo de a. **A4.** Una rueda parte del reposo con α=2 rad/s² y gira 9 rad: tiempo y velocidad angular final. **A5.** Dos puntos a R y R/2: compará velocidad, an y período en MCU.

**Respuestas.** A1: ω=10π rad/s y T=0.2 s. A2: 16 m/s². A3: √265≈16.279 m/s². A4: t=3 s y ω=6 rad/s. A5: el punto exterior tiene doble rapidez y doble aceleración normal, pero ambos tienen el mismo período. La práctica 1 trata cinemática circular y la práctica 5 vuelve a utilizar estas relaciones dentro del estudio del sólido rígido.
### Hoja de fórmulas del capítulo 4


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\omega=d\theta/dt,\quad\alpha=d\omega/dt,\quad s=R\theta$ | θ en radianes; R constante. |
| $v=R\lvert\omega\rvert,\quad a_n=v^2/R,\quad a_t=R\alpha$ | an hacia el centro; at con signo tangencial compatible con α. |
| $a=\sqrt{a_t^2+a_n^2}$ | Componentes ortogonales; no sumar sus módulos directamente. |
| $T=2\pi/\lvert\omega\rvert,\quad f=1/T$ | MCU; T período en s y f frecuencia en Hz. |
| $\omega=\omega_0+\alpha\Delta t,\quad\Delta\theta=\omega_0\Delta t+\tfrac12\alpha\Delta t^2$ | α constante; 1 rpm=2π/60 rad/s. |



## Formulario de la Unidad I · Herramientas y cinemática

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Medición y vectores

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lVert\mathbf A\rVert=\sqrt{A_x^2+A_y^2+A_z^2}$ | Componentes cartesianas ortonormales; todas con las mismas unidades. |
| $A_x=A\cos\theta,\quad A_y=A\sin\theta$ | θ desde x positivo; conservar cuadrante y sentido. |
| $\mathbf A\cdot\mathbf B=AB\cos\phi$ | Producto escalar; φ es el ángulo entre los vectores. |
| $\lVert\mathbf A\times\mathbf B\rVert=AB\sin\phi$ | Dirección por mano derecha; invertir factores invierte el vector. |
| $1\,\mathrm{km/h}=\tfrac1{3.6}\,\mathrm{m/s}$ | Para áreas y volúmenes, elevar el factor de longitud al cuadrado o al cubo. |
| $\delta(LW)\approx W\delta L+L\delta W$ | Cota aproximada de peor caso para pequeñas incertidumbres positivas; no regla estadística general. |

### Cinemática 1D

| Relación | Símbolos, significado y condiciones |
|---|---|
| $v=dx/dt,\quad a=dv/dt$ | Componentes con signo respecto del eje elegido. |
| $x=x_0+v_0\Delta t+\tfrac12a\Delta t^2,\quad v=v_0+a\Delta t$ | Solo aceleración constante durante ese tramo; Δt=t−t0. |
| $v^2=v_0^2+2a(x-x_0)$ | Aceleración constante; el cuadrado no determina el sentido final. |
| $\Delta x=\int v\,dt,\quad d=\int\lvert v\rvert dt$ | Desplazamiento con signo frente a recorrido; dividir intervalos si v cambia de signo. |
| $y=y_0+v_{0y}t-\tfrac12gt^2$ | Caída libre con eje ascendente, sin aire y g positiva constante. |

### Plano y movimiento relativo

| Relación | Símbolos, significado y condiciones |
|---|---|
| $x=x_0+v_{0x}t,\quad y=y_0+v_{0y}t-\tfrac12gt^2$ | Proyectil ideal; v0x=v0cosθ, v0y=v0sinθ y un único reloj. |
| $t_{\rm cima}=v_{0y}/g,\quad y_{\max}=y_0+v_{0y}^2/(2g)$ | Si v0y>0; en la cima solo se anula la componente vertical. |
| $T=2v_0\sin\theta/g,\quad X=v_0^2\sin(2\theta)/g$ | Solo llegada a la altura inicial, sin obstáculos y sin aire. |
| $\mathbf v_{P/S}=\mathbf v_{B/S}+\mathbf v_{P/B}$ | Ejes de ambos marcos no rotatorios entre sí; declarar cada observador. |
| $\mathbf a_{P/S}=\mathbf a_{B/S}+\mathbf a_{P/B}$ | Las aceleraciones coinciden entre marcos solo si aB/S=0 con esta geometría. |

### Cinemática circular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\omega=d\theta/dt,\quad\alpha=d\omega/dt,\quad s=R\theta$ | θ en radianes; R constante. |
| $v=R\lvert\omega\rvert,\quad a_n=v^2/R,\quad a_t=R\alpha$ | an hacia el centro; at con signo tangencial compatible con α. |
| $a=\sqrt{a_t^2+a_n^2}$ | Componentes ortogonales; no sumar sus módulos directamente. |
| $T=2\pi/\lvert\omega\rvert,\quad f=1/T$ | MCU; T período en s y f frecuencia en Hz. |
| $\omega=\omega_0+\alpha\Delta t,\quad\Delta\theta=\omega_0\Delta t+\tfrac12\alpha\Delta t^2$ | α constante; 1 rpm=2π/60 rad/s. |



## Unidad II · Capítulo 5. Leyes de Newton y diagramas de cuerpo libre

### Fuerza, masa y marco de referencia

Una fuerza representa una interacción: la Tierra atrae un cuerpo, una superficie lo empuja o una cuerda tira de él. La masa mide inercia traslacional y se expresa en kg; el peso es una fuerza gravitatoria y se expresa en N. Una masa de 5 kg pesa aproximadamente 49 N cerca de la superficie terrestre, no «5 newtons». El kilogramo fuerza es otra unidad: 1 kgf=9.80665 N por definición convencional.

La primera ley identifica marcos inerciales: un cuerpo libre mantiene velocidad constante. La segunda relaciona fuerza neta externa con cambio de cantidad de movimiento. Para un sistema cerrado de masa constante se reduce a $\sum\mathbf F=m\mathbf a$. La tercera afirma que las fuerzas mutuas entre dos cuerpos son iguales y opuestas y actúan **sobre cuerpos distintos**.

Un ascensor acelerado no es un marco inercial. Puede estudiarse desde el edificio con las fuerzas reales y ma, o desde el ascensor introduciendo las fuerzas de inercia apropiadas. En esta edición se elige normalmente el primer enfoque. Dos observadores con velocidad relativa constante y ejes no rotatorios miden la misma aceleración; no basta que uno «parezca quieto» para llamarlo inercial.

### Cómo construir un diagrama útil

Aislá el cuerpo y reemplazá cada objeto del entorno por la fuerza que ejerce sobre él. Dibujá solo fuerzas, con sus direcciones, y anotá aparte la aceleración. No agregues «la fuerza ma»: ma es la respuesta a la suma de interacciones. Tampoco dibujes simultáneamente una fuerza y sus dos componentes como si fueran tres fuerzas diferentes.

Para un bloque en una mesa, el peso es fuerza de la Tierra sobre el bloque y la normal es fuerza de la mesa sobre el bloque. Pueden compensarse, pero no son un par de acción y reacción. La reacción al peso es la atracción del bloque sobre la Tierra; la reacción a la normal es la fuerza del bloque sobre la mesa.

![Diagramas de cuerpo libre: mesa, rampa y masa suspendida](/planos-de-estudio/img/fisica1/fuerzas.svg)

### Normal y tensión no son constantes universales

La normal es perpendicular a la superficie y su valor se encuentra resolviendo la dinámica y las restricciones. Sobre una mesa horizontal, sin otras componentes verticales ni aceleración vertical, N=mg. Si una fuerza F tira con ángulo β hacia arriba, N=mg−F sinβ mientras se mantenga el contacto. Si el cálculo diera N<0, el modelo de apoyo falla: la mesa no puede tirar del cuerpo hacia abajo mediante una normal de contacto simple.

Una cuerda ideal es inextensible y sin masa. En una misma cuerda ideal que pasa por una polea ideal sin inercia ni rozamiento, la tensión tiene igual módulo. Una cuerda no empuja: T≥0. Si la polea tiene inercia y acelera angularmente, las tensiones de ambos lados pueden ser diferentes; esa diferencia produce torque. No debe trasladarse T1=T2 al capítulo de poleas masivas.

### Problema: lectura de una balanza

Una persona de 60 kg está sobre una balanza en un ascensor. Con y positivo hacia arriba, N−mg=may. En reposo o movimiento a velocidad constante, N=588 N. Con aceleración +2 m/s², N=708 N. Si está subiendo pero frenando con ay=−2 m/s², N=468 N. La lectura depende de aceleración, no del signo de la velocidad.

En caída libre ay=−g y N=0: hay ingravidez aparente sin desaparecer la gravedad. Si una balanza muestra «kg», está convirtiendo su medición de fuerza mediante una calibración; no ha medido una masa distinta durante la aceleración.

### Gravitación y aproximación de peso constante

Para masas puntuales, o cuerpos esféricamente simétricos observados desde el exterior, la atracción tiene módulo GMm/r² y dirección hacia la otra masa. El vector radial tomado desde M hacia m permite escribir $\mathbf F=-GMm\hat{\mathbf r}/r^2$. Cerca de una superficie terrestre ideal, g≈GMT/RT² y puede considerarse constante si la altura cambia poco respecto del radio terrestre.

A una altura igual al radio terrestre, la distancia al centro es 2RT y g se reduce a gsuperficie/4. No se introduce la altura sola en el denominador de la ley gravitatoria: r mide distancia entre centros. En problemas de caída de unos metros usamos mg constante; en distancias astronómicas se revisa esa aproximación.

### Fuerza elástica y equilibrio vertical

Un resorte lineal ideal cumple F=−kx, donde x es deformación respecto de su longitud natural y k tiene N/m. El signo es restitutivo: si se estira hacia la derecha, tira hacia la izquierda. En un resorte vertical con masa colgada, el equilibrio está desplazado mg/k respecto de la longitud natural. Confundir deformación natural con distancia al nuevo equilibrio cambia las ecuaciones.

Si m=0.5 kg estira 0.02 m un resorte en equilibrio, k=mg/x=245 N/m. La relación requiere equilibrio; si se libera la masa y todavía está acelerando, no se puede igualar kx a mg en cualquier instante. Cerca del equilibrio, la coordenada relativa ξ satisface mξ''=−kξ en el modelo ideal; su frecuencia angular √(k/m) se deduce de esa ecuación, aunque las oscilaciones completas no constituyen una unidad separada en el cronograma consultado.

### Práctica y respuestas

**N1.** Una masa de 3 kg acelera (2,−1) m/s²: fuerza neta. **N2.** Un cuerpo de 10 kg sobre mesa recibe una fuerza de 30 N a 30° hacia arriba: normal y aceleración horizontal sin roce. **N3.** ¿Qué sucede si se elimina una fuerza neta que venía acelerando un cuerpo? **N4.** Masa de 2 kg y resorte de 100 N/m: deformación de equilibrio vertical. **N5.** Identificá la reacción a la fuerza de una cuerda sobre una caja.

**Respuestas.** N1: (6,−3) N. N2: N=83 N y ax=3cos30°≈2.598 m/s². N3: mantiene la velocidad alcanzada si no queda otra resultante. N4: 0.196 m. N5: la fuerza de la caja sobre esa cuerda; no el peso de la caja. Las clases 4 y 5 y la práctica 2 exigen identificar interacciones antes de resolver sistemas.
### Hoja de fórmulas del capítulo 5


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum\mathbf F_{\rm ext}=m\mathbf a$ | Sistema cerrado de masa constante y marco inercial. |
| $\mathbf F_{A\to B}=-\mathbf F_{B\to A}$ | Acción y reacción actúan sobre cuerpos distintos. |
| $\mathbf P=m\mathbf g,\quad F_g=GMm/r^2$ | r entre centros; mg constante es aproximación local. |
| $F_x=-kx,\quad x_{\rm eq}=mg/k$ | Resorte lineal; x desde longitud natural; segunda relación para equilibrio vertical. |
| $N=m(g+a_y)$ | Balanza horizontal en ascensor, y ascendente y sin otras fuerzas verticales sobre la persona. |



## Unidad II · Capítulo 6. Rozamiento, planos inclinados y sistemas vinculados

### La fricción estática se ajusta, la cinética es otro modelo

En el modelo de Coulomb, la magnitud del roce estático satisface |fs|≤μsN. La igualdad describe movimiento inminente, no todo reposo. Para saber cuánto vale fs en equilibrio se resuelven las ecuaciones; luego se comprueba que el valor requerido no supere el máximo. Si hace falta 4 N y el máximo es 10 N, la fuerza real es 4 N.

Cuando hay deslizamiento relativo, la magnitud cinética se aproxima por fk=μkN y su sentido se opone al deslizamiento. No se opone siempre al movimiento del centro de masa: en una rueda que acelera sin patinar puede apuntar hacia delante. El contacto y el movimiento relativo local son los que determinan su papel. Los coeficientes son adimensionales y dependen de materiales y condiciones; no son constantes universales de cualquier superficie.

### Un bloque en una rampa: primero decidir si arranca

Sobre una rampa de ángulo θ, sin otras fuerzas, N=mg cosθ. Para permanecer en reposo necesita fs=mg sinθ hacia arriba. La condición de viabilidad es tanθ≤μs. Si no se cumple y el bloque desciende, con eje positivo cuesta abajo, a=g(sinθ−μk cosθ). La fórmula de descenso supone que ya desliza hacia abajo.

**Ejemplo.** Con θ=30°, μs=0.4 y μk=0.2, tan30°≈0.577>0.4: el reposo no puede sostenerse. La aceleración descendente es 9.8(0.5−0.2·0.8660)≈3.203 m/s². Si el bloque hubiera sido lanzado hacia arriba, el roce apuntaría hacia abajo y la aceleración sería g(sinθ+μk cosθ) cuesta abajo durante el ascenso. Al detenerse debe reevaluarse el roce estático; no se prolonga sin más la ecuación de la etapa anterior.

### Fuerza aplicada: límites inferior y superior del equilibrio

Una fuerza P paralela a la rampa y hacia arriba puede mantener el bloque en reposo para un intervalo, no para un único valor. Con eje ascendente, P+fs−mg sinθ=0, por lo que fs=mg sinθ−P. Exigir |fs|≤μsmg cosθ da


$$
mg(\sin\theta-\mu_s\cos\theta)\le P
\le mg(\sin\theta+\mu_s\cos\theta).
$$


En el extremo inferior el roce apunta hacia arriba para impedir descenso; en el superior apunta hacia abajo para impedir ascenso. Si el límite inferior resulta negativo y P solo puede ser una tracción hacia arriba, se intersecta el intervalo con P≥0. La restricción física de la fuerza aplicada también forma parte del problema.

### Restricciones de cuerda y elección de signos

Una cuerda inextensible impone una relación geométrica entre posiciones. En la máquina de Atwood simple, si un bloque desciende d el otro asciende d, y las aceleraciones tienen igual módulo. Usar para cada cuerpo un eje positivo en su sentido previsto permite escribir ambos con un mismo a. En una polea móvil, los módulos pueden no ser iguales: se escribe primero la longitud total de los segmentos y se deriva dos veces.

Por ejemplo, si una masa móvil está sostenida por dos segmentos verticales de una cuerda y el extremo libre baja x mientras la masa sube y, una longitud constante puede escribirse x−2y=constante. Así vx=2vy y ax=2ay con esas convenciones. También la masa recibe dos tensiones. Afirmar que cualquier par de cuerpos unidos por cuerda tiene la misma aceleración ignoraría esta geometría.

### Atwood ideal: desarrollar y comprobar

Sean m1=3 kg y m2=5 kg, polea sin inercia y cuerda ideal. Para m2 positivo hacia abajo: m2g−T=m2a. Para m1 positivo hacia arriba: T−m1g=m1a. Al sumar se elimina T y resulta a=(m2−m1)g/(m1+m2)=2.45 m/s². La tensión es m1(g+a)=36.75 N.

La tensión está entre los pesos 29.4 y 49 N: acelera hacia arriba a la menor masa y hacia abajo a la mayor. Si m1=m2, a=0 y T=mg. Si m1 tiende a cero, a tiende a g y T a cero. Estos límites confirman el significado de la solución; no requieren repetir toda el álgebra.

### Mesa rugosa y masa colgante

Una masa m1=4 kg sobre mesa tiene μs=0.4 y μk=0.2; una masa m2=3 kg cuelga mediante polea ideal. Para reposo, la tensión sería m2g=29.4 N, pero el roce máximo sobre m1 es 15.68 N. No hay equilibrio. Si m2 desciende, las ecuaciones son T−μkm1g=m1a y m2g−T=m2a. Por tanto a=(m2−μkm1)g/(m1+m2)=3.08 m/s² y T=20.16 N.

Aquí la normal es 39.2 N porque la cuerda tira horizontalmente y no hay aceleración vertical del bloque. Si la cuerda estuviera inclinada, N cambiaría y habría que replantear el roce. La práctica 2 incluye distintos vínculos: el dibujo decide qué ecuaciones son correctas, no el nombre genérico «problema de poleas».

### Bloques apilados

Un bloque superior de masa m descansa sobre otro al que se aplica una fuerza horizontal. Si no resbalan entre sí, ambos comparten a y el único empuje horizontal del bloque superior puede ser el roce estático: fs=ma. Como N=mg en ese contacto, a≤μsg. Este límite no depende de la masa superior en el modelo ideal. La fuerza externa máxima admisible sí depende de la masa total y de las fuerzas del suelo.

### Práctica y respuestas

**R1.** Bloque de 2 kg, μs=0.5, μk=0.3: aplicamos 6 N horizontales desde reposo. ¿Se mueve y cuánto vale el roce? **R2.** Luego se aplican 12 N: aceleración una vez deslizando. **R3.** Atwood con 2 y 6 kg, g=10: a y T. **R4.** Dos bloques apilados con μs=0.25 entre ellos: máxima aceleración sin deslizamiento. **R5.** ¿Puede el roce estático ser cero sobre una superficie rugosa?

**Respuestas.** R1: no se mueve, fs=6 N, menor que 9.8 N. R2: a=(12−5.88)/2=3.06 m/s². R3: a=5 m/s² y T=30 N. R4: 2.45 m/s² si no hay otras fuerzas horizontales sobre el superior. R5: sí, si no se necesita fuerza tangencial para impedir deslizamiento. La rugosidad permite una fuerza, no obliga a que tenga siempre su máximo.
### Hoja de fórmulas del capítulo 6


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lvert f_s\rvert\le\mu_sN,\quad f_k=\mu_kN$ | fs se calcula con las ecuaciones; igualdad solo en límite estático. fk opuesto al deslizamiento. |
| $N=mg\cos\theta,\quad a=g(\sin\theta-\mu_k\cos\theta)$ | Bloque que desliza cuesta abajo sin otras fuerzas; eje descendente. |
| $\tan\theta\le\mu_s$ | Condición para reposo de un bloque libre en una rampa simple. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2},\quad T=m_1(g+a)$ | Atwood ideal con m2 descendiendo; cuerda y polea ideales. |
| $a=\frac{(m_2-\mu_km_1)g}{m_1+m_2}$ | m1 sobre mesa horizontal y m2 colgante que baja, después de verificar que puede iniciar ese régimen. |



## Unidad II · Capítulo 7. Dinámica circular y condiciones de contacto

### «Centrípeta» describe la resultante radial

Para un cuerpo que sigue un círculo, la componente hacia el centro de la suma de fuerzas es mv²/R. La tensión, el roce, la normal o la gravedad pueden proporcionar esa componente, por separado o combinadas. No se agrega una fuerza centrípeta extra al diagrama además de las interacciones reales. La aceleración tangencial se obtiene de la componente tangente de la misma segunda ley.

Conviene dibujar el centro y elegir un eje radial dirigido hacia él. Entonces cada fuerza se proyecta con signo sobre ese eje. La fuerza resultante no tiene por qué ser enteramente radial si la rapidez cambia. Además, hay que verificar si una cuerda puede permanecer tensa o una superficie puede mantener contacto: las relaciones T≥0 y N≥0 restringen las soluciones.

### Curva horizontal

En una curva plana, el roce estático entre neumáticos y suelo puede proporcionar la fuerza horizontal requerida. Si las únicas fuerzas verticales son normal y peso, N=mg y mv²/R≤μsN. Por ello vmax=√(μsgR). Para R=50 m y μs=0.4, vmax=14 m/s=50.4 km/h con g=9.8.

Esta es una rapidez límite del modelo de partícula con condiciones idealizadas, no una recomendación de conducción. La masa se cancela porque tanto el roce máximo como la demanda centrípeta son proporcionales a ella. La cancelación no demuestra que la carga, neumáticos y demás condiciones de un vehículo real sean irrelevantes.

### Peralte sin roce y con roce

Para una curva peraltada un ángulo θ desde la horizontal y sin roce, N sinθ=mv²/R y N cosθ=mg. Al dividir, tanθ=v²/(Rg). Esa es una rapidez de diseño, no un intervalo completo de velocidades admisibles.

Con roce, para rapidez alta la tendencia de deslizamiento es hacia arriba del peralte y el roce apunta cuesta abajo. Entonces las ecuaciones de límite son $N\sin\theta+\mu_sN\cos\theta=mv^2/R$ y $N\cos\theta-\mu_sN\sin\theta=mg$. Resulta


$$
v_{\max}^2=Rg\frac{\sin\theta+\mu_s\cos\theta}{\cos\theta-\mu_s\sin\theta},
$$


si el denominador es positivo. A rapidez baja, la tendencia se invierte y el roce apunta cuesta arriba; se obtiene $v_{\min}^2=Rg(\sin\theta-\mu_s\cos\theta)/(\cos\theta+\mu_s\sin\theta)$. Si el numerador de esta última es negativo, el límite inferior físico es cero: el reposo puede sostenerse. Los signos se justifican por las proyecciones; memorizar una fracción sin diagrama es especialmente riesgoso.

### Péndulo cónico

Una masa gira horizontalmente sostenida por una cuerda de longitud L que forma β con la vertical. La altura permanece constante: T cosβ=mg. La componente horizontal suministra aceleración radial: T sinβ=mω²r, con r=L sinβ. Para un cono no degenerado, cosβ=g/(ω²L) y T=mω²L. Se requiere ω²L≥g para que cosβ no exceda uno.

Por ejemplo, con L=2 m, ω=√9.8 rad/s y m=0.5 kg, cosβ=1/2, β=60°, r=√3 m y T=9.8 N. La tensión es mayor que mg porque solo su componente vertical compensa el peso. El radio de giro no es la longitud de la cuerda.

### Giro vertical y pérdida de tensión

En el punto superior de una circunferencia vertical sostenida por cuerda, tanto T como mg apuntan hacia el centro: T+mg=mvtop²/R. La mínima rapidez compatible con cuerda tensa satisface T=0 y vtop²=gR. En el punto inferior, T−mg=mvbottom²/R, por lo que la tensión es mayor allí si la rapidez no es menor.

Si no hay pérdidas y la masa va del punto inferior al superior, sube 2R y la energía da vbottom²=vtop²+4gR. Combinar con el límite superior produce vbottom,min=√(5gR). Esta deducción corresponde a una cuerda flexible o a un contacto que no puede ejercer fuerza de tracción en la dirección opuesta. Una barra rígida puede empujar y tirar; no tiene necesariamente la misma condición mínima.

En una curva convexa por la parte superior, por ejemplo un vehículo que pasa por una loma, el centro está abajo y la ecuación radial es mg−N=mv²/R. Si v²>gR, el valor requerido N sería negativo y se pierde contacto; desde allí ya no sigue la circunferencia impuesta por el camino.

### Práctica y respuestas

**D1.** Curva horizontal R=40 m, μs=0.25 y g=10: rapidez límite. **D2.** Peralte ideal para R=100 m y v=20 m/s con g=10: ángulo. **D3.** Masa de 1 kg gira verticalmente en R=2 m con rapidez 8 m/s en el punto inferior: tensión con g=10. **D4.** ¿Es correcto sumar tensión y «fuerza centrífuga» en un marco inercial para explicar una masa atada? **D5.** ¿Qué condición se controla después de obtener una normal algebraica?

**Respuestas.** D1: 10 m/s. D2: θ=arctan0.4≈21.80°. D3: T=42 N. D4: no; se suman las fuerzas reales y se iguala su componente radial a mv²/R. En un marco rotatorio se usa un planteo distinto con fuerzas de inercia. D5: N≥0 y coherencia de la trayectoria asumida; un resultado negativo puede indicar separación, no una superficie que «tira» del cuerpo.
### Hoja de fórmulas del capítulo 7


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_{\rm hacia\ centro}=mv^2/R$ | Sumar componentes de fuerzas reales; no agregar otra fuerza centrípeta. |
| $v_{\max}=\sqrt{\mu_sgR}$ | Curva horizontal con roce estático, N=mg y modelo de partícula. |
| $\tan\theta=v^2/(Rg)$ | Peralte sin roce; θ desde la horizontal. |
| $\cos\beta=g/(\omega^2L),\quad T=m\omega^2L$ | Péndulo cónico: β desde vertical, r=Lsinβ y cono no degenerado. |
| $v_{\rm top,min}=\sqrt{gR},\quad v_{\rm bottom,min}=\sqrt{5gR}$ | Giro vertical con cuerda tensa o contacto unilateral; segunda relación sin pérdidas entre fondo y cima. |
| $v_{\max}^2=Rg\frac{\sin\theta+\mu_s\cos\theta}{\cos\theta-\mu_s\sin\theta}$ | Peralte con roce al límite de deslizamiento hacia arriba; denominador positivo. |



## Formulario de la Unidad II · Dinámica

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Newton y fuerzas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum\mathbf F_{\rm ext}=m\mathbf a$ | Sistema cerrado de masa constante y marco inercial. |
| $\mathbf F_{A\to B}=-\mathbf F_{B\to A}$ | Acción y reacción actúan sobre cuerpos distintos. |
| $\mathbf P=m\mathbf g,\quad F_g=GMm/r^2$ | r entre centros; mg constante es aproximación local. |
| $F_x=-kx,\quad x_{\rm eq}=mg/k$ | Resorte lineal; x desde longitud natural; segunda relación para equilibrio vertical. |
| $N=m(g+a_y)$ | Balanza horizontal en ascensor, y ascendente y sin otras fuerzas verticales sobre la persona. |

### Roce y vínculos

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\lvert f_s\rvert\le\mu_sN,\quad f_k=\mu_kN$ | fs se calcula con las ecuaciones; igualdad solo en límite estático. fk opuesto al deslizamiento. |
| $N=mg\cos\theta,\quad a=g(\sin\theta-\mu_k\cos\theta)$ | Bloque que desliza cuesta abajo sin otras fuerzas; eje descendente. |
| $\tan\theta\le\mu_s$ | Condición para reposo de un bloque libre en una rampa simple. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2},\quad T=m_1(g+a)$ | Atwood ideal con m2 descendiendo; cuerda y polea ideales. |
| $a=\frac{(m_2-\mu_km_1)g}{m_1+m_2}$ | m1 sobre mesa horizontal y m2 colgante que baja, después de verificar que puede iniciar ese régimen. |

### Dinámica circular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_{\rm hacia\ centro}=mv^2/R$ | Sumar componentes de fuerzas reales; no agregar otra fuerza centrípeta. |
| $v_{\max}=\sqrt{\mu_sgR}$ | Curva horizontal con roce estático, N=mg y modelo de partícula. |
| $\tan\theta=v^2/(Rg)$ | Peralte sin roce; θ desde la horizontal. |
| $\cos\beta=g/(\omega^2L),\quad T=m\omega^2L$ | Péndulo cónico: β desde vertical, r=Lsinβ y cono no degenerado. |
| $v_{\rm top,min}=\sqrt{gR},\quad v_{\rm bottom,min}=\sqrt{5gR}$ | Giro vertical con cuerda tensa o contacto unilateral; segunda relación sin pérdidas entre fondo y cima. |
| $v_{\max}^2=Rg\frac{\sin\theta+\mu_s\cos\theta}{\cos\theta-\mu_s\sin\theta}$ | Peralte con roce al límite de deslizamiento hacia arriba; denominador positivo. |



## Unidad III · Capítulo 8. Trabajo, energía cinética y potencia

### Trabajo de una fuerza

Para una fuerza constante y desplazamiento Δr, W=F·Δr=FΔr cosφ. Es escalar y puede ser positivo, negativo o cero. Para una fuerza variable o una trayectoria curva se suman aportes diferenciales: $W=\int_C\mathbf F\cdot d\mathbf r$. La unidad es N·m, llamada joule. La definición usa desplazamiento del punto de aplicación; en el modelo de partícula coincide con el movimiento del objeto representado.

Una fuerza de 10 N aplicada a 60° de un desplazamiento horizontal de 3 m realiza 15 J. Su componente perpendicular no aporta trabajo en ese movimiento. Una persona puede hacer esfuerzo fisiológico al sostener una caja quieta, pero la fuerza sobre la caja no realiza trabajo mecánico si su punto de aplicación no se desplaza. «Cansancio» y trabajo mecánico no son definiciones equivalentes.

Si la fuerza es perpendicular a cada desplazamiento infinitesimal, el trabajo es cero. Eso sucede para la resultante puramente centrípeta en MCU. No significa que esa fuerza sea cero, ni que no cambie la velocidad vectorial: cambia dirección sin cambiar rapidez.

### Fuerza variable y área con signo

En una dimensión W=∫Fx(x)dx. Un gráfico de Fx contra x permite obtener trabajo como área orientada. Si Fx=4x N cuando x está en metros, entre 1 y 3 m el trabajo es $[2x^2]_1^3=16$ J. La fuerza media espacial es 8 N en ese intervalo; no debe confundirse con una media temporal sin conocer x(t).

Para un resorte F=−kx, el trabajo de xi a xf es k(xi²−xf²)/2. Con k=200 N/m y x desde −0.10 m hasta cero, W=1 J. Desde cero hasta +0.10 m realiza −1 J. Una ida de −A a +A puede tener trabajo neto cero aunque haya trabajo positivo y negativo en partes distintas. La distancia recorrida no determina por sí sola el signo del trabajo.

### Obtener el teorema trabajo–energía

Para masa constante, Fnet=m dv/dt. El producto escalar con v da $\mathbf F_\text{net}\cdot\mathbf v=m\mathbf v\cdot d\mathbf v/dt=d(mv^2/2)/dt$. Al integrar en tiempo, el primer miembro es el trabajo neto y el segundo ΔK. Entonces Wnet=Kf−Ki, con K=mv²/2.

El teorema vale aunque la fuerza cambie de dirección o magnitud, dentro del modelo clásico. Lo que se suma es el trabajo de **todas** las fuerzas que actúan sobre la partícula. Si se calcula solo el trabajo de una fuerza aplicada, puede faltar el de gravedad, roce u otras interacciones. La normal de una superficie fija y lisa no hace trabajo en un movimiento tangencial; una superficie móvil puede cambiar esa conclusión.

### Problema completo: caja arrastrada con fuerza inclinada

Una caja de 10 kg se desliza 5 m horizontalmente. Se tira de ella con F=50 N a 30° hacia arriba y μk=0.2. La aceleración vertical es cero y N=98−25=73 N. El roce vale 14.6 N. El trabajo aplicado es 50cos30°·5≈216.506 J; el del roce, −73 J; peso y normal aportan cero.

El trabajo neto es 143.506 J. Si parte con rapidez 2 m/s, Ki=20 J y Kf≈163.506 J. La rapidez final es √(2Kf/10)≈5.719 m/s. Como control, Newton da ax=(50cos30°−14.6)/10≈2.870 m/s²; usar v²=v0²+2aΔx produce el mismo valor. Emplear fk=μkmg habría ignorado que la tracción reduce la normal.

### Potencia: la tasa de transferencia

La potencia media es W/Δt y la instantánea P=dW/dt=F·v. Se mide en watt, J/s. Dos motores pueden efectuar el mismo trabajo y tener potencias diferentes si tardan distinto tiempo. Si una carga de 100 kg se eleva a velocidad constante 0.5 m/s, la potencia mecánica contra gravedad es mgv=490 W.

Con rendimiento η=0.8, la potencia de entrada necesaria para ese proceso idealizado es 490/0.8=612.5 W. El rendimiento relaciona energía o potencia útil con suministrada; no puede agregarse como una fuerza en el diagrama. Si el ascenso incluye aceleración, debe incluirse también el cambio de energía cinética y revisar la potencia instantánea.

### Práctica y respuestas

**W1.** F=(3,4) N y Δr=(2,−1) m: trabajo. **W2.** Fx=6x² N, x de 0 a 2 m: trabajo. **W3.** Resorte k=100 N/m, de x=0.2 a x=0.1 m: trabajo. **W4.** Masa de 2 kg gana 12 J netos partiendo a 1 m/s: rapidez final. **W5.** Elevar 20 kg 3 m en 2 s con velocidad constante: potencia media útil.

**Respuestas.** W1: 2 J, aunque ambas fuerzas y desplazamientos tengan módulos mayores. W2: 16 J. W3: 1.5 J positivo. W4: √13≈3.606 m/s. W5: 294 W usando g=9.8. La práctica 3 combina fuerzas constantes y variables, gráficos, resortes y balances; no se limita a W=Fd.
### Hoja de fórmulas del capítulo 8


| Relación | Símbolos, significado y condiciones |
|---|---|
| $W=\int_C\mathbf F\cdot d\mathbf r$ | Trabajo de una fuerza; si es constante W=FΔr cosφ. |
| $W_{\rm net}=\Delta K,\quad K=\tfrac12mv^2$ | Partícula de masa constante; sumar trabajos de todas sus fuerzas. |
| $W_{\rm resorte}=\tfrac12k(x_i^2-x_f^2)$ | Resorte lineal, deformación desde longitud natural. |
| $\mathcal P=\mathbf F\cdot\mathbf v,\quad\mathcal P_{\rm med}=W/\Delta t$ | Potencia en W; usar velocidad del punto de aplicación. |
| $\eta=\mathcal P_{\rm util}/\mathcal P_{\rm entrada}$ | Rendimiento del proceso definido; entrada=útil/η. |



## Unidad III · Capítulo 9. Energía potencial, conservación y balances por etapas

### Potencial y fuerzas conservativas

Una fuerza es conservativa si su trabajo entre dos posiciones no depende de la trayectoria; equivalentemente, su circulación en un recorrido cerrado es cero dentro del dominio considerado. Se define una energía potencial U de modo que Wconservativa=−ΔU. En una dimensión F=−dU/dx; en varias, F=−∇U cuando la función potencial tiene la regularidad requerida.

El signo negativo tiene contenido físico: al actuar a favor de la fuerza conservativa, disminuye U y puede aumentar K. El cero de U se elige por conveniencia y no altera diferencias ni fuerzas. Si se suma una constante C, F no cambia. No se confunde el cambio de referencia con el cambio de energía entre dos estados físicos.

Cerca de la superficie, Ugravitatoria=mgy con y ascendente. Para un resorte ideal, Uelástica=kx²/2 donde x se mide desde longitud natural. Para gravitación a gran escala, U=−GMm/r tomando cero en el infinito. La expresión mgy es una aproximación local a esa variación, no una fórmula universal para alturas arbitrarias.

### El balance mecánico general

Separar el trabajo neto en conservativo y restante da ΔK=−ΔU+Wotras, por tanto $\Delta(K+U)=W_\text{otras}$. Si el trabajo de las fuerzas no incluidas en U es cero, se conserva la energía mecánica. No hace falta que cada fuerza individual sea cero: una normal ideal o una tensión perpendicular al movimiento pueden actuar sin aportar trabajo.

Cuando hay roce, la energía total no desaparece. Parte de la energía mecánica se transforma en interna de los cuerpos y el entorno. Para un bloque que desliza sobre una superficie fija, el modelo usual asigna Wroce=−μkNd si N y μk son constantes. Si varían, se integra la fuerza a lo largo del recorrido. En un sistema extendido pueden existir intercambios internos que exigen una contabilidad más cuidadosa que el modelo de partícula.

![Intercambio entre energía cinética, potencial y energía mecánica](/planos-de-estudio/img/fisica1/energia.svg)

### Problema: rampa lisa y tramo rugoso

Una masa parte del reposo a altura h=2 m, baja por una rampa lisa y entra en un suelo horizontal con μk=0.25. En la rampa, mgh=mvB²/2, por lo que vB=√39.2≈6.261 m/s. En el horizontal, la energía cinética se pierde por trabajo de roce: μkmgd=mvB²/2. Resulta d=h/μk=8 m.

La masa se cancela porque tanto gravedad como roce del modelo escalan con ella. La ecuación de la primera etapa no calcula el tiempo de descenso sin conocer la forma de la rampa. La energía determina una rapidez por altura; para tiempos o fuerzas de contacto suele hacer falta información dinámica adicional.

### Problema: compresión de resorte con roce

Una caja de 2 kg llega a un resorte horizontal con rapidez 3 m/s. El resorte tiene k=200 N/m y μk=0.2 durante la compresión. En el primer contacto tomamos x=0 y energía cinética 9 J. En la compresión máxima, v=0 y el balance es


$$
9=100x^2+3.92x.
$$


La raíz positiva es $x=(-3.92+\sqrt{3.92^2+3600})/200\approx0.2810$ m. La negativa no representa la compresión en la dirección elegida. Ignorar el trabajo de roce daría 0.3 m, mayor que el valor correcto. Después del retorno instantáneo se necesita revisar si el resorte supera el roce estático; haber llegado a v=0 no garantiza que permanezca allí ni que empiece a volver.

### Péndulo y energía más Newton

Un péndulo ideal de longitud L se libera desde reposo formando θ0 con la vertical inferior. La altura respecto del punto más bajo es L(1−cosθ0). En una posición θ, la energía da $v^2=2gL(\cos\theta-\cos\theta_0)$. La tensión se obtiene aparte de la ecuación radial: T−mg cosθ=mv²/L.

Con L=1 m y θ0=60°, en el punto inferior v²=gL=9.8 y T=2mg. La tensión es mayor que mg aunque no haya pérdidas. La energía sola no determina T porque una fuerza puede cambiar dirección de movimiento sin hacer trabajo.

### Diagramas de potencial y estabilidad

En una dimensión, los equilibrios cumplen U′=0. Un mínimo local de U es estable frente a pequeñas perturbaciones en el modelo conservativo: la fuerza tiende a restituir. Un máximo es inestable. Si U''=0, ese criterio no decide y se estudian términos superiores o el signo de la fuerza. Los puntos de retorno satisfacen K=E−U=0, pero pueden tener fuerza no nula.

Para U=kx²/2 y energía E, los extremos accesibles son ±√(2E/k). Entre ellos, v=±√[2(E−U)/m]; el signo depende de si se desplaza hacia x creciente o decreciente. Fuera de U≤E no existe movimiento clásico con esa energía en el modelo. Este razonamiento también ayuda a descartar una compresión imposible por falta de energía.

### Elegir entre Newton y energía

Si se pide aceleración o una fuerza de contacto, Newton suele ser la entrada directa. Si se pide rapidez después de un recorrido y las fuerzas dependen de posición, energía puede evitar integrar el tiempo. En problemas mixtos, como giros verticales o pendientes con resorte, ambos métodos se complementan. No son leyes competidoras: el teorema trabajo–energía se obtuvo de la dinámica.

### Práctica y respuestas

**E1.** Caída desde reposo 5 m sin aire con g=10: rapidez al llegar y energía mecánica por kg. **E2.** Resorte de 80 N/m con energía 0.4 J: amplitud. **E3.** Bloque que sube una rampa rugosa: indicá signos de ΔUg y Wroce. **E4.** ¿Conservar p implica conservar K? **E5.** U(x)=x⁴ en unidades consistentes: clasificá equilibrio en cero aunque U''(0)=0.

**Respuestas.** E1: 10 m/s y 50 J/kg si el cero potencial está en el suelo. E2: 0.1 m. E3: ΔUg>0, Wroce<0. E4: no; los choques inelásticos del capítulo 10 lo muestran. E5: estable en el modelo conservativo porque U tiene un mínimo estricto; la segunda derivada nula no descarta estabilidad.
### Hoja de fórmulas del capítulo 9


| Relación | Símbolos, significado y condiciones |
|---|---|
| $U_g=mgy,\quad U_e=\tfrac12kx^2$ | g uniforme y resorte lineal; elegir origen de y y x natural. |
| $\Delta(K+U)=W_{\rm otras}$ | U incluye las fuerzas conservativas elegidas; no contarlas de nuevo como trabajo externo. |
| $\mathbf F_c=-\nabla U,\quad W_c=-\Delta U$ | Para fuerza conservativa y potencial definido en el dominio. |
| $W_{\rm roce}=-\mu_kNd$ | Deslizamiento sobre superficie fija; μk y N constantes durante d. |
| $U=-GMm/r$ | Gravitación puntual o exterior esférica; cero de U en infinito. |
| $v^2=2gL(\cos\theta-\cos\theta_0)$ | Péndulo ideal liberado desde reposo a θ0, ángulos desde vertical inferior. |



## Formulario de la Unidad III · Trabajo y energía

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Trabajo y potencia

| Relación | Símbolos, significado y condiciones |
|---|---|
| $W=\int_C\mathbf F\cdot d\mathbf r$ | Trabajo de una fuerza; si es constante W=FΔr cosφ. |
| $W_{\rm net}=\Delta K,\quad K=\tfrac12mv^2$ | Partícula de masa constante; sumar trabajos de todas sus fuerzas. |
| $W_{\rm resorte}=\tfrac12k(x_i^2-x_f^2)$ | Resorte lineal, deformación desde longitud natural. |
| $\mathcal P=\mathbf F\cdot\mathbf v,\quad\mathcal P_{\rm med}=W/\Delta t$ | Potencia en W; usar velocidad del punto de aplicación. |
| $\eta=\mathcal P_{\rm util}/\mathcal P_{\rm entrada}$ | Rendimiento del proceso definido; entrada=útil/η. |

### Energía mecánica

| Relación | Símbolos, significado y condiciones |
|---|---|
| $U_g=mgy,\quad U_e=\tfrac12kx^2$ | g uniforme y resorte lineal; elegir origen de y y x natural. |
| $\Delta(K+U)=W_{\rm otras}$ | U incluye las fuerzas conservativas elegidas; no contarlas de nuevo como trabajo externo. |
| $\mathbf F_c=-\nabla U,\quad W_c=-\Delta U$ | Para fuerza conservativa y potencial definido en el dominio. |
| $W_{\rm roce}=-\mu_kNd$ | Deslizamiento sobre superficie fija; μk y N constantes durante d. |
| $U=-GMm/r$ | Gravitación puntual o exterior esférica; cero de U en infinito. |
| $v^2=2gL(\cos\theta-\cos\theta_0)$ | Péndulo ideal liberado desde reposo a θ0, ángulos desde vertical inferior. |



## Unidad IV · Capítulo 10. Impulso, cantidad de movimiento y colisiones

### Impulso y segunda ley

La cantidad de movimiento de una partícula es p=mv. Es vectorial y tiene kg·m/s. Integrar Fnet=dp/dt en un intervalo da $\mathbf J_\text{net}=\int\mathbf F_\text{net}dt=\Delta\mathbf p$. La fuerza media temporal se define por J/Δt. Una fuerza máxima grande y una duración corta pueden producir el mismo impulso que una fuerza menor actuando durante más tiempo.

El área con signo bajo una gráfica F(t) es impulso. Para un pulso triangular de base 0.02 s y altura 100 N, J=1 N·s. Una masa de 0.5 kg recibiría Δv=2 m/s en esa dirección si esa es la resultante. El teorema no exige un choque instantáneo: vale para intervalos finitos; la brevedad es lo que a veces permite despreciar otros impulsos.

**Rebote.** Una pelota de 0.2 kg llega a una pared con vx=+10 m/s y sale con vx=−8 m/s. Δpx=−3.6 kg·m/s. Si el contacto dura 0.01 s, la fuerza media horizontal es −360 N. Restar solo los módulos 10−8 daría un impulso mucho menor e incorrecto: la dirección se invirtió.

### Conservación para un sistema de partículas

Al sumar las ecuaciones de todas las partículas, las fuerzas internas se cancelan por pares bajo el modelo newtoniano usual. Queda dPtotal/dt=ΣFexternas. Si el impulso externo durante un proceso es despreciable, Ptotal inicial y final son aproximadamente iguales. Puede conservarse una componente aunque otra no: un suelo puede ejercer impulso vertical y no horizontal.

Hay que definir sistema e intervalo. La cantidad de movimiento de cada cuerpo que choca normalmente cambia; se conserva la del conjunto apropiado. Y después del choque, si actúa roce durante varios segundos, ya no se conserva la cantidad de movimiento horizontal durante toda esa etapa.

### Tipos de choque

En un choque elástico se conserva K total además de P, si el sistema está aislado durante la colisión. En uno perfectamente inelástico los cuerpos terminan con una velocidad común y K disminuye en una colisión pasiva. En un choque parcialmente inelástico se separan, pero parte de K se transforma en otras formas de energía. «Inelástico» no significa que no se conserve energía total.

Para masas m1,m2 que quedan unidas, $\mathbf v_f=(m_1\mathbf v_1+m_2\mathbf v_2)/(m_1+m_2)$. En una dimensión, para una colisión pasiva, el coeficiente de restitución se escribe $e=(v_{2f}-v_{1f})/(v_{1i}-v_{2i})$ cuando el denominador representa acercamiento. Junto a conservación de P permite determinar las velocidades finales. e=1 describe elástico y e=0 velocidad relativa final nula en la dirección normal del impacto. Una explosión con liberación de energía interna es otro tipo de proceso y puede aumentar K.

### Choque elástico unidimensional: obtener la inversión relativa

De conservación de P se tiene m1(u1−v1)=m2(v2−u2). De K, m1(u1²−v1²)=m2(v2²−u2²). Factorizar y dividir por el intercambio no nulo da u1+v1=v2+u2, equivalente a v2−v1=u1−u2. Resolver junto al momento lineal produce las fórmulas usuales. Si no hubo intercambio, no se divide por cero para fabricar una colisión.

**Ejemplo.** Un carrito de 2 kg a 3 m/s choca elásticamente con otro de 1 kg en reposo. Resultan v1=1 m/s y v2=4 m/s. El momento inicial es 6 y el final 2·1+1·4=6 kg·m/s; K inicial=9 J y final=1+8=9 J. Si quedaran pegados, vf=2 m/s y Kf=6 J: se transformarían 3 J en energía interna y otras formas.

### Colisión en dos dimensiones

Dos carritos de 3 y 2 kg llegan con velocidades (4,0) y (0,−3) m/s y quedan unidos. P=(12,−6) kg·m/s y vf=(2.4,−1.2) m/s. La rapidez final es √7.2≈2.683 m/s. Ki=24+9=33 J y Kf=18 J. La pérdida de K es 15 J. Sumar las rapideces o los módulos de momento lineal habría eliminado la información direccional.

En choques bidimensionales con separación, conservar P aporta dos ecuaciones y conservar K una más si es elástico. Puede faltar información geométrica o sobre la línea de impacto. No se debe inventar una dirección porque el sistema de ecuaciones tenga más incógnitas que condiciones.

### Procesos por etapas: colisión y resorte

Un carrito de 1 kg a 6 m/s queda unido a otro de 2 kg inicialmente quieto. Inmediatamente después vf=2 m/s por P. Luego ambos comprimen un resorte de 300 N/m sin roce. Ahora la energía mecánica da (3·2²)/2=kx²/2, y x=0.2 m. No se conserva K entre antes y después de pegarse: usar la energía inicial de 18 J directamente en el resorte predeciría una compresión excesiva. La frontera entre etapas decide qué ley puede usarse.

### Práctica y respuestas

**I1.** Una masa de 0.1 kg cambia de −20 a +30 m/s en 5 ms: impulso y fuerza media. **I2.** Dos masas iguales, una en reposo: describí choque elástico frontal. **I3.** Choque pegajoso de 2 kg a +4 m/s y 2 kg a −4 m/s: vf y pérdida de K. **I4.** ¿Puede ser Ptotal=0 y Ktotal>0? **I5.** ¿Cuándo puede despreciarse el peso durante un choque?

**Respuestas.** I1: +5 N·s y +1000 N. I2: intercambian velocidades en el modelo ideal unidimensional. I3: vf=0 y se transforman 32 J de K. I4: sí, por ejemplo el caso anterior antes del impacto. I5: cuando el impulso gravitatorio mgΔt es pequeño frente a los impulsos relevantes; la afirmación se justifica comparando magnitudes. La clase 7 y la práctica 4 desarrollan cantidad de movimiento y colisiones.
### Hoja de fórmulas del capítulo 10


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf J_{\rm net}=\int\mathbf F_{\rm net}dt=\Delta\mathbf p,\quad\mathbf p=m\mathbf v$ | Impulso en N·s; fuerza media=J/Δt. |
| $\mathbf P_i=\mathbf P_f$ | Solo si el impulso externo sobre el sistema es nulo o despreciable en ese intervalo. |
| $\mathbf v_f=\frac{m_1\mathbf u_1+m_2\mathbf u_2}{m_1+m_2}$ | Choque en que quedan unidos; K no se conserva en general. |
| $e=\frac{v_{2f}-v_{1f}}{u_1-u_2}$ | Choque 1D: u iniciales con signo; en colisión pasiva 0≤e≤1. |
| $v_1=\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2},\quad v_2=\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}$ | Choque frontal elástico 1D; ambas velocidades iniciales se expresan en el mismo eje. |



## Unidad IV · Capítulo 11. Centro de masa y dinámica de sistemas

### Promedio ponderado, no necesariamente un punto material

El centro de masa es $\mathbf R=(\sum m_i\mathbf r_i)/M$. Las posiciones se ponderan por masa y M es la masa total. No tiene que coincidir con una partícula: el centro de un aro vacío queda en su hueco. Para dos masas sobre una recta queda más cerca de la mayor y divide el segmento en proporción inversa a ellas.

Dos masas de 2 y 6 kg están en x=0 y x=4 m. El centro está en x=3 m. Su posición satisface 2·3=6·1 al comparar distancias al centro. Promediar aritméticamente 0 y 4 habría supuesto masas iguales.

### Distribuciones continuas

Se reemplaza la suma por $\mathbf R=M^{-1}\int\mathbf r\,dm$. Para una varilla, dm=λ(x)dx; una lámina usa densidad superficial y un sólido densidad volumétrica. La simetría permite simplificar cuando también la densidad la respeta. Un contorno simétrico con densidad mayor de un lado no tiene necesariamente su centro de masa en el centro geométrico.

**Varilla no uniforme.** Para 0≤x≤L y λ=λ0(1+x/L), la masa es 3λ0L/2. El momento de masa es $\int_0^Lx\lambda dx=5\lambda_0L^2/6$. Entonces X=5L/9, desplazado hacia el extremo más denso. La densidad de referencia se cancela en el cociente, pero su variación espacial no.

En cuerpos compuestos se puede calcular cada pieza y ponderar sus centros. Para un agujero se resta la masa y el momento de la porción retirada, usando la densidad de la placa original. No se asigna al agujero una masa positiva al sumar: representa material ausente.

### Velocidad, aceleración y fuerzas externas

Si las masas son constantes, derivar la definición da Vcm=Σmivi/M y Acm=Σmiai/M. Al sumar Newton, las fuerzas internas se cancelan y queda ΣFexternas=MAcm. Esto predice el movimiento del centro incluso si el sistema gira, se deforma o contiene partículas con movimientos internos complejos.

No significa que todas las partículas tengan la aceleración del centro. En una rueda que gira con su centro fijo, Acm=0 mientras cada punto fuera del eje tiene aceleración centrípeta. Tampoco ΣFexternas=0 significa que todo el sistema esté inmóvil: el centro puede llevar velocidad constante y las partes pueden moverse internamente.

### Energía cinética: movimiento del conjunto y movimiento interno

Escribimos vi=Vcm+vi′. Al expandir Σmivi²/2, el término cruzado se anula porque Σmivi′=0. Resulta Ktotal=MVcm²/2+Σmivi′²/2. El primer término describe traslación del centro y el segundo movimiento relativo. Para un sólido rígido en movimiento plano, este último será Icmω²/2.

Dos masas iguales que se aproximan con velocidades opuestas pueden tener Vcm=0 y Ktotal positiva. Si chocan y quedan quietas juntas, la energía de movimiento relativo se convierte en otras formas mientras Ptotal sigue cero. Esta descomposición conecta el capítulo de choques con la rotación que sigue.

### Problema: encuentro sin fuerzas externas horizontales

Dos personas de 40 y 60 kg se encuentran inicialmente en reposo sobre una superficie ideal sin roce, separadas 5 m, y se atraen mediante una cuerda. El centro de masa inicial está a 3 m de la posición de la persona de 40 kg y permanece allí. Se encontrarán en ese punto, cualquiera sea la historia de la fuerza interna, si no hay otras fuerzas horizontales y la cuerda permite acercarse.

La persona de 40 kg recorre 3 m y la de 60 kg recorre 2 m. No se necesita conocer la fuerza para localizar el encuentro; sí haría falta para obtener cuánto tardan. El hecho de que una persona tire de la cuerda no produce fuerza horizontal externa sobre el conjunto.

### Persona y plataforma móvil

Una persona de masa m camina una distancia L respecto de una plataforma de masa M que puede deslizar horizontalmente sin roce. Si el sistema parte de reposo, su centro no se desplaza. Sea X el desplazamiento de la plataforma; la persona se desplaza X+L respecto del suelo. La condición MX+m(X+L)=0 da X=−mL/(M+m). Si m=50 kg, M=150 kg y L=2 m, la plataforma retrocede 0.5 m y la persona avanza 1.5 m respecto del suelo.

Para velocidades, Vplataforma=−m vrel/(M+m), si vrel es la velocidad de la persona respecto de la plataforma. Usar vrel como si fuera velocidad respecto del suelo cambiaría el balance. El movimiento relativo del capítulo 3 y la conservación de P deben plantearse juntos.

### Práctica y respuestas

**M1.** Masas 1,2,3 kg en x=0,1,2 m: centro. **M2.** Una fuerza externa neta de 12 N actúa sobre un sistema de 4 kg: Acm. **M3.** ¿Puede moverse el centro fuera del material de un cuerpo? **M4.** Persona de 60 kg camina 3 m respecto de tabla de 120 kg sin roce: desplazamientos. **M5.** ¿Conservar Xcm exige que Vcm inicial sea cero?

**Respuestas.** M1: X=4/3 m. M2: 3 m/s² en la dirección de la fuerza. M3: sí; un aro es el ejemplo más simple. M4: tabla −1 m y persona +2 m respecto del suelo. M5: para conservar una posición fija sí; ausencia de fuerza externa por sí sola conserva velocidad, que puede ser no nula. La clase 8 introduce distribuciones discretas y continuas y la práctica 4 combina centro de masa y movimiento relativo.
### Hoja de fórmulas del capítulo 11


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf R=\frac{\sum m_i\mathbf r_i}{M}=\frac1M\int\mathbf r\,dm$ | M masa total; elegir densidad lineal, superficial o volumétrica para dm. |
| $\mathbf P=M\mathbf V_{\rm CM},\quad\sum\mathbf F_{\rm ext}=M\mathbf A_{\rm CM}$ | Masas constantes; las partículas pueden moverse respecto del centro. |
| $K=\tfrac12MV_{\rm CM}^2+\sum\tfrac12m_i v_i^{\prime2}$ | vi′ velocidades respecto del centro; el segundo término no es siempre cero. |
| $\Delta X_{\rm plataforma}=-\frac{mL}{M+m}$ | Persona m recorre L respecto de plataforma M; centro inicialmente quieto y sin fuerza horizontal externa. |



## Formulario de la Unidad IV · Sistemas de partículas

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Impulso y choques

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf J_{\rm net}=\int\mathbf F_{\rm net}dt=\Delta\mathbf p,\quad\mathbf p=m\mathbf v$ | Impulso en N·s; fuerza media=J/Δt. |
| $\mathbf P_i=\mathbf P_f$ | Solo si el impulso externo sobre el sistema es nulo o despreciable en ese intervalo. |
| $\mathbf v_f=\frac{m_1\mathbf u_1+m_2\mathbf u_2}{m_1+m_2}$ | Choque en que quedan unidos; K no se conserva en general. |
| $e=\frac{v_{2f}-v_{1f}}{u_1-u_2}$ | Choque 1D: u iniciales con signo; en colisión pasiva 0≤e≤1. |
| $v_1=\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2},\quad v_2=\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}$ | Choque frontal elástico 1D; ambas velocidades iniciales se expresan en el mismo eje. |

### Centro de masa

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf R=\frac{\sum m_i\mathbf r_i}{M}=\frac1M\int\mathbf r\,dm$ | M masa total; elegir densidad lineal, superficial o volumétrica para dm. |
| $\mathbf P=M\mathbf V_{\rm CM},\quad\sum\mathbf F_{\rm ext}=M\mathbf A_{\rm CM}$ | Masas constantes; las partículas pueden moverse respecto del centro. |
| $K=\tfrac12MV_{\rm CM}^2+\sum\tfrac12m_i v_i^{\prime2}$ | vi′ velocidades respecto del centro; el segundo término no es siempre cero. |
| $\Delta X_{\rm plataforma}=-\frac{mL}{M+m}$ | Persona m recorre L respecto de plataforma M; centro inicialmente quieto y sin fuerza horizontal externa. |



## Unidad V · Capítulo 12. Cuerpo rígido, rotación y momento de inercia

### De partículas a un cuerpo con tamaño

En un sólido rígido ideal las distancias internas no cambian. Para rotación alrededor de un eje fijo, todos los puntos comparten θ, ω y α. Sus velocidades lineales dependen de la distancia perpendicular r al eje: v=r|ω|. Un punto a doble radio lleva doble rapidez y cuatro veces más energía cinética por unidad de masa.

Sumando Ki=mivi²/2 de todas las partículas aparece Krot=Iω²/2, donde $I=\sum m_ir_i^2$. Para una distribución continua, $I=\int r_\perp^2dm$. La unidad es kg·m². I depende tanto del cuerpo como del eje: no alcanza con decir «el momento de inercia del cilindro» sin especificarlo.

Dos cuerpos con igual masa y radio exterior pueden tener distintos I. Un aro concentra su masa lejos del eje y tiene I=MR²; un disco uniforme tiene I=MR²/2. El segundo requiere menos energía para alcanzar la misma ω alrededor de su eje central. La masa mide inercia traslacional; el momento de inercia incorpora también distribución respecto de un eje.

### Derivar los casos fundamentales

Para una barra delgada uniforme de longitud L y eje perpendicular por el centro, dm=(M/L)dx y r⊥=|x|. Integrar entre −L/2 y L/2 da I=ML²/12. Si se integra directamente desde un extremo, resulta ML²/3. Son valores distintos del mismo objeto alrededor de ejes paralelos diferentes.

Para un disco uniforme, se divide en anillos de radio r y espesor dr. Como σ=M/(πR²), dm=2πσrdr. Entonces $I=\int_0^Rr^2(2\pi\sigma r)dr=MR^2/2$. El factor r² proviene de distancia al eje al cuadrado y el otro r de la masa del anillo; confundirlos altera la potencia final.

Para un cilindro hueco uniforme con radios interior a y exterior b, el resultado sobre su eje es M(a²+b²)/2. En el límite a→0 recupera el cilindro macizo; en el límite de pared fina a≈b≈R recupera MR². Los límites geométricos son un control poderoso de una fórmula.

### Ejes paralelos: qué permite Steiner

Si se conoce Icm respecto de un eje que pasa por el centro de masa, para otro **paralelo** a distancia d se tiene I=Icm+Md². Al desarrollar la distancia de cada elemento al nuevo eje aparece un término cruzado proporcional a la posición media respecto del centro, que es cero. Esa cancelación explica por qué el eje de referencia debe pasar por el centro de masa.

Para una barra, Iextremo=ML²/12+M(L/2)²=ML²/3. No se usa Steiner para cambiar de un eje horizontal a otro vertical: deben ser paralelos. Para una lámina plana con ejes perpendiculares x,y en su plano y z normal por el mismo origen, existe otra relación, Iz=Ix+Iy, que se deduce de r⊥²=x²+y². Es un teorema distinto y requiere una distribución plana.

### Tabla de referencia razonada

| Cuerpo uniforme | Eje indicado | Momento de inercia |
|---|---|---|
| Partícula | A distancia perpendicular r | mr² |
| Aro fino | Central, normal a su plano | MR² |
| Disco o cilindro macizo | Eje de simetría longitudinal | MR²/2 |
| Esfera maciza | Diámetro | 2MR²/5 |
| Cascarón esférico fino | Diámetro | 2MR²/3 |
| Barra delgada | Perpendicular por su centro | ML²/12 |
| Barra delgada | Perpendicular por un extremo | ML²/3 |

«Uniforme», «fino» y el eje no son adornos: definen el modelo. Un cilindro alrededor de un diámetro transversal no tiene, en general, MR²/2.

### Ejemplo: dos masas y un disco compuesto

Una barra sin masa de 1 m une dos masas puntuales de 2 y 3 kg. El centro queda a 0.6 m de la masa de 2 kg y 0.4 m de la de 3 kg. Para un eje perpendicular por ese centro, I=2·0.6²+3·0.4²=1.2 kg·m². A ω=5 rad/s, K=15 J. Las rapideces son 3 y 2 m/s; sus energías 9 y 6 J verifican la suma.

En un disco con un agujero, se resta el momento de la pieza retirada respecto del **mismo eje**. Si el disco original tiene masa M, radio R y densidad uniforme, un agujero de radio R/4 tiene masa M/16. Si su centro está a R/2 del eje original, su contribución es $(M/16)[(R/4)^2/2+(R/2)^2]$. Restarla de MR²/2 da $247MR^2/512$. Aquí M es masa del disco original, no del remanente. Si el enunciado llama M a la masa final, primero hay que convertirla.

### Práctica y respuestas

**Q1.** Disco de 4 kg y radio 0.5 m: I central y K a 6 rad/s. **Q2.** Barra de 3 kg y 2 m: I central y en extremo. **Q3.** Aro y disco con igual M,R,ω: razón de energías. **Q4.** ¿Qué distancia va en mr²? **Q5.** ¿Qué cambia si una masa se acerca al eje?

**Respuestas.** Q1: I=0.5 kg·m² y K=9 J. Q2: 1 y 4 kg·m². Q3: Karo/Kdisco=2. Q4: la perpendicular al eje, no la distancia a cualquier origen. Q5: disminuye su contribución a I; para decidir qué pasa con ω hay que estudiar torques y conservación de momento angular. Las prácticas 5 y 6 utilizan estos casos y cuerpos compuestos.
### Hoja de fórmulas del capítulo 12


| Relación | Símbolos, significado y condiciones |
|---|---|
| $I=\int r_\perp^2dm,\quad K_{\rm rot}=\tfrac12I\omega^2$ | Especificar eje; r⊥ distancia perpendicular a él. |
| $I=I_{\rm CM}+Md^2$ | Steiner: ejes paralelos, uno por centro de masa. |
| $I_{\rm disco}=\tfrac12MR^2,\quad I_{\rm aro}=MR^2$ | Eje central de simetría; disco macizo uniforme y aro fino. |
| $I_{\rm esfera}=\tfrac25MR^2,\quad I_{\rm cascaron}=\tfrac23MR^2$ | Esfera uniforme maciza o cascarón fino; eje por diámetro. |
| $I_{\rm barra,CM}=ML^2/12,\quad I_{\rm extremo}=ML^2/3$ | Barra delgada uniforme, ejes perpendiculares a ella. |



## Unidad V · Capítulo 13. Torque, ecuaciones de rotación y poleas con inercia

### Momento de una fuerza y brazo perpendicular

Respecto de un origen O, el torque es $\boldsymbol\tau=\mathbf r\times\mathbf F$, con r desde O hasta el punto de aplicación. Su módulo es rF sinφ=Fd⊥. La unidad N·m coincide dimensionalmente con el joule, pero un torque es una magnitud vectorial y no se llama energía. Sobre un eje z interesa la componente τz, con signo según el sentido de giro.

Una fuerza radial respecto de O tiene torque cero aunque su módulo sea grande. Una fuerza aplicada sobre una puerta lejos de la bisagra y perpendicular a la hoja genera mayor torque que otra igual junto a la bisagra. La distancia útil no siempre coincide con la longitud de la llave o la puerta: se necesita la distancia perpendicular a la línea de acción.

### Segunda ley rotacional y su alcance

Para un sólido rígido que rota sobre un eje fijo con I constante, la componente de torque neto sobre ese eje cumple Στz=Izα. Se obtiene sumando las ecuaciones tangenciales de las partículas multiplicadas por sus radios. En movimiento plano con traslación del centro se usan conjuntamente ΣFext=MAcm y Στcm=Icmα.

No se aplica Iα alrededor de cualquier punto móvil sin revisar las condiciones. El momento angular ofrece la formulación más general del capítulo 15. Asimismo, si I cambia porque se redistribuye masa, derivar L=Iω incluye I'ω; no se puede mantener τ=Iα omitiendo ese término.

### Barra que cae desde la horizontal

Una barra uniforme de longitud L pivotada por un extremo se libera desde reposo en posición horizontal. El peso Mg actúa en su centro, a distancia L/2, y la reacción del pivote no tiene torque respecto del pivote. Con antihorario positivo, τ=−MgL/2 e I=ML²/3, por lo que αinicial=−3g/(2L).

La aceleración tangencial inicial del extremo libre es αL=−3g/2. Su módulo supera g porque el extremo está obligado por la barra a un movimiento que no es caída libre. Justo al soltar, ω=0 y no hay componente centrípeta; después sí aparece. La expresión de α cambia con el ángulo de la barra, por lo que no describe una aceleración angular constante durante toda la caída.

### Polea masiva: las tensiones dejan de ser iguales

En Atwood con una polea de radio R e inercia I, la cuerda no desliza y a=Rα. Para m2 que baja y m1 que sube:


$$
m_2g-T_2=m_2a,\qquad T_1-m_1g=m_1a,
$$



$$
(T_2-T_1)R=I\alpha=I\frac aR.
$$


Al sumar las dos ecuaciones traslacionales y usar la rotacional resulta


$$
a=\frac{(m_2-m_1)g}{m_1+m_2+I/R^2}.
$$


El término I/R² tiene unidades de masa y representa el costo dinámico de acelerar la rotación. Si I→0 se recupera la polea ideal. Si m1=m2, no hay aceleración desde reposo aunque la polea sea masiva.

**Ejemplo.** m1=2 kg, m2=4 kg y polea disco de masa 2 kg, radio 0.2 m. I=0.04 kg·m² e I/R²=1 kg. La aceleración es 2.8 m/s². T1=2(9.8+2.8)=25.2 N; T2=4(9.8−2.8)=28 N. Su diferencia 2.8 N produce torque 0.56 N·m y α=a/R=14 rad/s², de modo que Iα=0.56 N·m. Imponer T1=T2 habría dejado a la polea sin torque para acelerar.

### Un cilindro que se desenrolla

Un cilindro macizo de masa M cuelga de una cuerda arrollada que tiene su extremo superior fijo. Al caer sin deslizar respecto de la cuerda, Mg−T=Ma y TR=Iα, con a=Rα e I=MR²/2. De la segunda relación T=Ma/2. Sustituir da a=2g/3 y T=Mg/3.

La aceleración no es g porque parte de la disminución de potencial alimenta rotación. La cuerda fija ejerce tensión y torque, pero en el modelo ideal su punto de contacto instantáneo tiene velocidad cero; el balance energético también conduce al mismo resultado. No se debe confundir una cuerda fija que se desenrolla con tirar del extremo libre de una cuerda: la restricción cinemática cambia.

### Trabajo y potencia rotacionales

Para giro sobre un eje fijo, dW=τz dθ, de modo que Wnet=Δ(Iω²/2) si I es constante. La potencia es τzω. Un motor que aplica 5 N·m a 10 rad/s entrega 50 W de potencia mecánica en ese instante. Si hay torques resistentes, la potencia neta que aumenta K es la diferencia, no la potencia bruta del motor.

### Práctica y respuestas

**T1.** Fuerza de 20 N perpendicular a un brazo de 0.3 m: torque. **T2.** Rotor con I=0.5 kg·m² y torque neto 3 N·m: α. **T3.** Dos torques de +8 y −3 N·m actúan durante un giro de +4 rad: trabajo neto. **T4.** ¿Se pueden cancelar T1 y T2 al sumar traslaciones de una polea masiva sin incluir su rotación? **T5.** Un motor tiene torque constante: ¿su potencia es necesariamente constante?

**Respuestas.** T1: 6 N·m, con sentido definido por la geometría. T2: 6 rad/s². T3: 20 J. T4: no; su diferencia acelera angularmente la polea. T5: no, P=τω depende de ω. La práctica 6 combina las ecuaciones traslacionales, rotacionales y el vínculo de no deslizamiento de la cuerda.
### Hoja de fórmulas del capítulo 13


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\boldsymbol\tau=\mathbf r\times\mathbf F,\quad\sum\tau_z=I_z\alpha$ | r desde origen al punto de fuerza; segunda ecuación para eje fijo e I constante. |
| $W=\int\tau_zd\theta,\quad\mathcal P=\tau_z\omega$ | Trabajo y potencia rotacionales sobre un eje fijo. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2+I/R^2}$ | Atwood con polea masiva, eje sin roce y cuerda sin deslizar. |
| $(T_2-T_1)R=I\alpha,\quad a=R\alpha$ | Tensiones diferentes si hay aceleración angular e inercia no nula. |
| $a=\frac{g}{1+I/(MR^2)}$ | Cuerpo que se desenrolla de una cuerda con extremo fijo; I sobre su centro. |



## Unidad V · Capítulo 14. Rodadura, fricción y transición desde el deslizamiento

### La condición de no deslizamiento

En rodadura sobre un suelo fijo, la velocidad instantánea del punto de contacto es cero. Para movimiento rectilíneo del centro, en magnitudes vcm=Rω y acm=Rα con una convención de giro compatible. El punto superior de una rueda tiene rapidez 2vcm respecto del suelo; no todos los puntos llevan vcm. El punto que estaba en contacto deja de estarlo un instante después: no es un pivote material fijo de toda la trayectoria.

La energía de un sólido en movimiento plano es K=Mvcm²/2+Icmω²/2. La primera parte corresponde al centro y la segunda a la rotación respecto de él. Usar solo traslación subestima la energía; usar un I de otro eje junto con esa misma traslación puede contar contribuciones dos veces.

![Velocidades en rodadura y fuerzas sobre un cuerpo que baja por una rampa](/planos-de-estudio/img/fisica1/rodadura.svg)

### Descenso por una rampa: fuerzas y energía coinciden

Definamos β=Icm/(MR²). Si el cuerpo rueda desde reposo por una rampa de ángulo θ, el peso aporta Mg sinθ cuesta abajo y el roce estático f cuesta arriba. Las ecuaciones son Mg sinθ−f=Ma y fR=Icmα. Con a=Rα resulta f=βMa y


$$
a=\frac{g\sin\theta}{1+\beta},\qquad
f=\frac{\beta}{1+\beta}Mg\sin\theta.
$$


La rodadura solo es posible si f≤μsMg cosθ, es decir μs≥[β/(1+β)]tanθ. No se impone f=μsN salvo movimiento inminente de deslizamiento. La normal no produce torque sobre el centro en este modelo de contacto puntual.

Para un descenso vertical h sin pérdidas, Mgh=Mv²/2+I(v/R)²/2 y $v=\sqrt{2gh/(1+\beta)}$. Un aro tiene β=1, un cilindro macizo β=1/2 y una esfera maciza β=2/5. La esfera llega con mayor rapidez y aceleración que el cilindro o el aro, siempre que todos cumplan la condición de rodadura. La masa y el radio se cancelan dentro de cada tipo de cuerpo ideal.

### ¿El roce estático hace trabajo?

En rodadura ideal sobre una superficie fija, la fuerza estática actúa en un punto instantáneamente en reposo, por lo que su potencia total es cero. Puede reducir la energía de traslación del centro respecto de lo que tendría un bloque deslizante y aumentar la de rotación, sin disipar energía mecánica. Esto no significa que cualquier roce estático en cualquier sistema haga trabajo cero: una cinta transportadora móvil puede transferir energía por contacto estático.

Tampoco toda rodadura requiere una fuerza de roce no nula. Una rueda que ya rueda uniformemente en horizontal, sin fuerzas resistentes ni torques externos, puede mantener v y ω con f=0. Se necesita la interacción apropiada para generar o modificar los movimientos según el caso, no una fuerza tangencial obligatoria por la sola existencia de giro.

### Ejemplo: esfera en una pendiente de 30°

Con g=9.8 y β=2/5, a=(5/7)g sin30°=3.5 m/s². El roce es (2/7)Mg sin30° y el coeficiente mínimo es (2/7)tan30°≈0.1650. Desde reposo y tras 2 m de rampa, v²=2a·2=14, de modo que v≈3.742 m/s. Por energía, la altura perdida es 1 m y v²=2·9.8/(1.4)=14. Ambos métodos coinciden.

### Tirar de un cilindro a distintas alturas

Un cilindro de radio R recibe una fuerza horizontal F hacia la derecha a altura h sobre el suelo. Sea el roce f positivo hacia la derecha y tomemos α positivo horario. La traslación es F+f=Ma. Respecto del centro, F tiene brazo h−R y el roce genera torque contrario al giro horario: F(h−R)−fR=Iα. Usando a=Rα,


$$
a=\frac{Fh}{MR(1+\beta)},\qquad
f=F\left[\frac{h}{R(1+\beta)}-1\right].
$$


Para cilindro macizo β=1/2, el roce cambia de signo en h=1.5R. Si se tira desde su centro, h=R, el roce apunta a la izquierda. Si se tira desde arriba, h=2R, apunta a la derecha. En todos los casos hay que verificar |f|≤μsN. Esta derivación responde a una familia importante de ejercicios de la práctica 6: adivinar que el roce siempre frena al centro daría resultados erróneos.

### De deslizar a rodar

Una esfera maciza se lanza sobre un piso con v0 hacia la derecha y ω0=0. Al principio el punto inferior desliza hacia la derecha, por lo que fk=μkMg apunta a la izquierda. La aceleración del centro es −μkg y la angular horaria es fkR/I=(5/2)μkg/R. Así v=v0−μkgt y Rω=(5/2)μkgt.

La rodadura empieza cuando v=Rω. Entonces $t_*=2v_0/(7\mu_kg)$ y $v_*=5v_0/7$. La energía cinética disminuye durante esta fase de deslizamiento; no puede conservarse energía mecánica para encontrar la transición. Después, en horizontal ideal y sin resistencias adicionales, continúa rodando uniformemente y el roce puede volverse cero.

### Práctica y respuestas

**B1.** Aro que rueda desde altura h: rapidez. **B2.** Cilindro macizo en rampa 30°, g=10: a y μs mínimo. **B3.** Esfera con v0=7 m/s, μk=0.2 y g=10: tiempo de transición y rapidez final de rodadura. **B4.** ¿Por qué no se puede usar v=Rω desde el inicio del caso anterior? **B5.** Cilindro tirado desde h=1.5R: sentido y valor del roce en el modelo ideal.

**Respuestas.** B1: √(gh). B2: a=10/3 m/s² y μs≥tan30°/3≈0.19245. B3: t=1 s y v=5 m/s. B4: inicialmente ω=0 mientras v≠0, por lo que hay deslizamiento. B5: f=0 y a=F/M. La condición de rodadura puede mantenerse sin fuerza tangencial del suelo para esa altura particular.
### Hoja de fórmulas del capítulo 14


| Relación | Símbolos, significado y condiciones |
|---|---|
| $v_{\rm CM}=R\omega,\quad a_{\rm CM}=R\alpha$ | En magnitudes o con signos compatibles; solo sin deslizamiento sobre suelo fijo. |
| $K=\tfrac12Mv_{\rm CM}^2+\tfrac12I_{\rm CM}\omega^2$ | Movimiento plano rígido; no sustituir I de otro eje en el segundo término. |
| $\beta=I_{\rm CM}/(MR^2),\quad a=\frac{g\sin\theta}{1+\beta},\quad v^2=\frac{2gh}{1+\beta}$ | Rodadura desde reposo por rampa sin pérdidas; comprobar adherencia. |
| $\mu_s\ge\frac{\beta}{1+\beta}\tan\theta$ | Condición de rodadura para descenso impulsado solo por gravedad. |
| $a=\frac{Fh}{MR(1+\beta)},\quad f=F\left(\frac h{R(1+\beta)}-1\right)$ | F horizontal hacia derecha aplicada a altura h sobre suelo; f positiva a derecha; rodadura viable. |
| $t_*=\frac{2v_0}{7\mu_kg},\quad v_*=\frac57v_0$ | Esfera maciza lanzada con ω0=0; transición de deslizamiento a rodadura en horizontal. |



## Unidad V · Capítulo 15. Momento angular y conservación

### Momento angular de una partícula

Respecto de O, $\mathbf L=\mathbf r\times\mathbf p$. Su magnitud es rmv sinφ y depende del origen elegido. Una partícula que se mueve en línea recta puede tener L no nulo si su línea de movimiento no pasa por O. Por ejemplo, una masa m que avanza a velocidad v por la recta y=b tiene Lz=−bmv respecto del origen, constante si no cambia v.

Derivar r×p da v×mv+r×F. El primer término es cero y queda dL/dt=τ para un origen fijo en un marco inercial. Si el torque externo neto respecto de ese origen es nulo, se conserva L del sistema bajo las hipótesis newtonianas usuales. Una fuerza central puede ser grande y aun así generar torque cero respecto de su centro.

Torque cero no obliga a L=0, sino a que no cambie. Tampoco torque y L tienen que ser paralelos en un movimiento tridimensional general: τ indica la dirección del cambio de L. Para rotaciones sobre un eje fijo de simetría, las relaciones escalares sobre ese eje simplifican mucho el análisis.

### Sólidos sobre un eje y conservación por componentes

Para rotación alrededor del eje z, Lz=Izω. Si el torque externo sobre ese eje es cero, Iiωi=Ifωf. Una reacción del eje puede tener fuerza neta no nula y aun así no producir torque sobre z. Por ello conservar momento angular no exige que la suma vectorial de fuerzas sea cero.

En un cuerpo tridimensional arbitrario, el vector L no es necesariamente paralelo al vector ω; la descripción completa usa un tensor de inercia. En los ejercicios de esta materia con ejes fijos o movimientos planos, se trabaja con el momento correspondiente y su componente axial. No se extiende una fórmula escalar a cualquier giro espacial sin revisar geometría.

### Persona que acerca masas al eje

Una plataforma con una persona gira sin torque externo apreciable. Si el momento de inercia total pasa de 4 a 2 kg·m² y ω inicial es 3 rad/s, Lz=12 kg·m²/s y ω final=6 rad/s. La energía cinética pasa de 18 a 36 J.

El aumento de K no contradice la conservación de L. La persona realiza trabajo interno al acercar las masas contra las tendencias del movimiento. La energía procede de procesos internos, mientras el momento angular no cambia por falta de torque externo. Conservar una magnitud no obliga a conservar otra con dependencia matemática diferente.

### Dos discos que se acoplan

Un disco con I1=0.2 kg·m² gira a 10 rad/s; otro, I2=0.3 kg·m², está quieto. Se acoplan sobre un mismo eje sin torque externo axial significativo. La velocidad final común es I1ωi/(I1+I2)=4 rad/s. Ki=10 J y Kf=4 J: 6 J se convierten principalmente en energía interna durante el rozamiento de acople.

La fuerza de rozamiento entre los discos es interna al conjunto y cambia el momento de cada disco en sentidos opuestos. No debe conservarse L de cada disco por separado. La situación es el análogo rotacional de una colisión perfectamente inelástica.

### Caminar sobre una calesita

Una persona de masa m camina por el borde de radio R de una plataforma con inercia I. Si inicialmente todo está quieto y no hay torque externo, $I\omega_\text{pl}+mR v_\text{persona/suelo}=0$ para velocidades tangenciales con signo. Si se da la velocidad de la persona **respecto de la plataforma**, debe convertirse: vpersona/suelo=vrel+Rωpl. Entonces $(I+mR^2)\omega_\text{pl}+mRv_\text{rel}=0$.

Para I=200 kg·m², m=50 kg, R=2 m y vrel=1 m/s antihorario, ωpl=−0.25 rad/s. La persona lleva velocidad respecto del suelo 1−0.5=0.5 m/s antihoraria. Si el dato fuera 1 m/s respecto del suelo, ωpl sería −0.5 rad/s. Son enunciados distintos que no se resuelven con una misma sustitución.

### Práctica y respuestas

**L1.** m=2 kg, r=(3,0,0) m, v=(0,4,0) m/s: L. **L2.** Una partícula avanza radialmente respecto de O: ¿cuánto vale L respecto de O? **L3.** I pasa a un tercio sin torque axial: razón de velocidades y energías. **L4.** ¿Puede conservarse L si existe una fuerza externa? **L5.** Dos discos iguales que giran con ω y −ω se acoplan: estado final y energía.

**Respuestas.** L1: 24 k kg·m²/s. L2: cero por paralelismo de r y p. L3: ω se triplica y K se triplica si L permanece fijo; el trabajo que cambia I debe aportar la variación. L4: sí, si su torque sobre el eje o punto relevante es nulo. L5: quedan sin giro común y la energía cinética inicial se transforma en otras formas; L total ya era cero.
### Hoja de fórmulas del capítulo 15


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf L_O=\mathbf r\times\mathbf p,\quad\boldsymbol\tau_{O,\rm ext}=d\mathbf L_O/dt$ | Origen fijo en marco inercial; sistema y origen comunes. |
| $L_z=I_z\omega,\quad I_i\omega_i=I_f\omega_f$ | Rotación sobre eje; segunda relación si torque externo axial es nulo. |
| $\omega_f=\frac{I_1\omega_1+I_2\omega_2}{I_1+I_2}$ | Dos rotores que se acoplan sobre el mismo eje sin impulso angular externo; K puede disminuir. |
| $K=L_z^2/(2I)$ | Giro axial con Lz fijo: cambiar I puede requerir trabajo interno. |



## Unidad V · Capítulo 16. Estática de cuerpos rígidos y reacciones de apoyo

### Dos condiciones diferentes

En equilibrio estático, el cuerpo permanece en reposo: debe cumplir ΣF=0 y Στ=0. La primera evita aceleración del centro y la segunda aceleración angular. Para afirmar reposo se necesita también un estado inicial sin velocidad ni giro; fuerza y torque netos nulos pueden acompañar movimiento uniforme si el cuerpo ya se movía.

En el plano se tienen tres ecuaciones escalares independientes: ΣFx=0, ΣFy=0 y Στz=0. Elegir el origen del torque en una bisagra elimina del balance las componentes de su reacción porque su brazo es cero. No elimina físicamente la reacción: todavía se obtiene de las ecuaciones de fuerza.

### Qué puede hacer cada vínculo

Una cuerda ideal solo tracciona a lo largo de sí misma. Un apoyo liso ejerce una normal perpendicular a su superficie. Un apoyo rugoso puede añadir fuerza tangencial limitada por μsN. Una bisagra ideal plana puede ejercer dos componentes de fuerza, pero no se modela como un torque resistente arbitrario. Un empotramiento, en cambio, puede aportar un momento de reacción: es otro vínculo.

Saber cuántas incógnitas puede aportar cada apoyo evita agregar reacciones inexistentes. También permite reconocer problemas que no pueden resolverse solo con las ecuaciones de la estática rígida: si hay más incógnitas independientes que ecuaciones, pueden necesitarse deformaciones y propiedades de los materiales.

### Viga sostenida por bisagra y cable

Una viga uniforme horizontal de 4 m pesa 200 N y está articulada a la izquierda. En su extremo derecho cuelga una carga de 300 N y un cable forma 30° con la viga, tirando hacia arriba e izquierda. Tomamos momentos alrededor de la bisagra. El peso de la viga actúa a 2 m y la carga a 4 m:


$$
4T\sin30^\circ-200\cdot2-300\cdot4=0.
$$


Entonces T=800 N. La componente vertical del cable es 400 N y la horizontal −400√3 N. Fuerzas verticales: Ay+400−200−300=0, por lo que Ay=100 N. Horizontales: Ax−400√3=0 y Ax=400√3≈692.82 N.

La tensión no es 500 N, aunque ese sea el peso total: solo su componente vertical sostiene parte de la carga y la bisagra participa. Tampoco se usa el brazo de 4 m sin seno para el torque de T; su componente paralela a la viga no produce momento sobre la bisagra.

### Escalera y movimiento inminente

Una escalera uniforme de peso W y longitud L está apoyada en un piso rugoso y una pared lisa, formando θ con el suelo. La pared solo ejerce una normal horizontal Npared en la parte superior. El suelo aporta Nsuelo vertical y fs horizontal. Fuerzas: Nsuelo=W y fs=Npared en magnitud. Momentos respecto del pie:


$$
N_\text{pared}L\sin\theta=W\frac L2\cos\theta.
$$


Así Npared=(W/2)cotθ y la condición de reposo es μs≥cotθ/2. Para θ=60° hace falta μs≥1/(2√3)≈0.2887. Si una persona sube, se suma su peso con el brazo que corresponde a su posición sobre la escalera; el coeficiente requerido aumenta generalmente al alejarse del pie.

Este resultado requiere pared lisa. Si también tiene rozamiento, aparece otra componente y las ecuaciones cambian. No se aplica una fórmula de escalera sin identificar los contactos de su dibujo.

### Centro de gravedad y vuelco

En un campo gravitatorio aproximadamente uniforme, el peso total de un cuerpo puede representarse actuando en su centro de masa. Para un apoyo sobre una base, la línea de acción de la resultante de las fuerzas de contacto debe poder ubicarse dentro de esa base. Al llegar a un borde aparece un posible eje de vuelco.

Una caja uniforme de ancho b y altura h sobre suelo horizontal, empujada horizontalmente en su borde superior con fuerza F, comienza a volcar alrededor del borde inferior opuesto si Fh=Wb/2 en el caso ideal sin deslizamiento previo. Pero el roce puede ceder antes si F>μsW. Se comparan ambos umbrales: afirmar vuelco sin revisar deslizamiento podría describir un proceso que nunca llega a ocurrir.

### Práctica y respuestas

**S1.** Viga sin peso de 3 m, apoyada en sus extremos, recibe 120 N a 1 m del apoyo izquierdo: reacciones. **S2.** ¿Puede ΣF=0 y Στ≠0? **S3.** Escalera uniforme a 45° contra pared lisa: μs mínimo. **S4.** Caja W=100 N, b=0.4 m, h=1 m: fuerza de vuelco ideal aplicada arriba. **S5.** Para esa caja, μs=0.1: ¿desliza o vuelca primero al aumentar F?

**Respuestas.** S1: izquierda 80 N y derecha 40 N. S2: sí; un par de fuerzas opuestas y separadas tiene fuerza neta cero y torque no nulo. S3: 0.5. S4: 20 N. S5: desliza primero, pues el roce máximo es 10 N. Las últimas consignas de la práctica 6 tratan vigas, barras, escaleras y equilibrio límite.
### Hoja de fórmulas del capítulo 16


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_x=0,\quad\sum F_y=0,\quad\sum\tau_z=0$ | Equilibrio plano; para reposo sostenido, velocidad y giro iniciales también nulos. |
| $\tau_z=xF_y-yF_x$ | Coordenadas desde el origen elegido; signos según mano derecha. |
| $\lvert f_s\rvert\le\mu_sN,\quad N\ge0,\quad T\ge0$ | Verificar viabilidad de apoyos, contacto y cuerda. |
| $\mu_{s,\min}=\tfrac12\cot\theta$ | Escalera uniforme sin persona, pared lisa y piso rugoso; θ desde suelo. |



## Formulario de la Unidad V · Cuerpo rígido

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Momento de inercia

| Relación | Símbolos, significado y condiciones |
|---|---|
| $I=\int r_\perp^2dm,\quad K_{\rm rot}=\tfrac12I\omega^2$ | Especificar eje; r⊥ distancia perpendicular a él. |
| $I=I_{\rm CM}+Md^2$ | Steiner: ejes paralelos, uno por centro de masa. |
| $I_{\rm disco}=\tfrac12MR^2,\quad I_{\rm aro}=MR^2$ | Eje central de simetría; disco macizo uniforme y aro fino. |
| $I_{\rm esfera}=\tfrac25MR^2,\quad I_{\rm cascaron}=\tfrac23MR^2$ | Esfera uniforme maciza o cascarón fino; eje por diámetro. |
| $I_{\rm barra,CM}=ML^2/12,\quad I_{\rm extremo}=ML^2/3$ | Barra delgada uniforme, ejes perpendiculares a ella. |

### Torque y poleas

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\boldsymbol\tau=\mathbf r\times\mathbf F,\quad\sum\tau_z=I_z\alpha$ | r desde origen al punto de fuerza; segunda ecuación para eje fijo e I constante. |
| $W=\int\tau_zd\theta,\quad\mathcal P=\tau_z\omega$ | Trabajo y potencia rotacionales sobre un eje fijo. |
| $a=\frac{(m_2-m_1)g}{m_1+m_2+I/R^2}$ | Atwood con polea masiva, eje sin roce y cuerda sin deslizar. |
| $(T_2-T_1)R=I\alpha,\quad a=R\alpha$ | Tensiones diferentes si hay aceleración angular e inercia no nula. |
| $a=\frac{g}{1+I/(MR^2)}$ | Cuerpo que se desenrolla de una cuerda con extremo fijo; I sobre su centro. |

### Rodadura

| Relación | Símbolos, significado y condiciones |
|---|---|
| $v_{\rm CM}=R\omega,\quad a_{\rm CM}=R\alpha$ | En magnitudes o con signos compatibles; solo sin deslizamiento sobre suelo fijo. |
| $K=\tfrac12Mv_{\rm CM}^2+\tfrac12I_{\rm CM}\omega^2$ | Movimiento plano rígido; no sustituir I de otro eje en el segundo término. |
| $\beta=I_{\rm CM}/(MR^2),\quad a=\frac{g\sin\theta}{1+\beta},\quad v^2=\frac{2gh}{1+\beta}$ | Rodadura desde reposo por rampa sin pérdidas; comprobar adherencia. |
| $\mu_s\ge\frac{\beta}{1+\beta}\tan\theta$ | Condición de rodadura para descenso impulsado solo por gravedad. |
| $a=\frac{Fh}{MR(1+\beta)},\quad f=F\left(\frac h{R(1+\beta)}-1\right)$ | F horizontal hacia derecha aplicada a altura h sobre suelo; f positiva a derecha; rodadura viable. |
| $t_*=\frac{2v_0}{7\mu_kg},\quad v_*=\frac57v_0$ | Esfera maciza lanzada con ω0=0; transición de deslizamiento a rodadura en horizontal. |

### Momento angular

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\mathbf L_O=\mathbf r\times\mathbf p,\quad\boldsymbol\tau_{O,\rm ext}=d\mathbf L_O/dt$ | Origen fijo en marco inercial; sistema y origen comunes. |
| $L_z=I_z\omega,\quad I_i\omega_i=I_f\omega_f$ | Rotación sobre eje; segunda relación si torque externo axial es nulo. |
| $\omega_f=\frac{I_1\omega_1+I_2\omega_2}{I_1+I_2}$ | Dos rotores que se acoplan sobre el mismo eje sin impulso angular externo; K puede disminuir. |
| $K=L_z^2/(2I)$ | Giro axial con Lz fijo: cambiar I puede requerir trabajo interno. |

### Estática

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\sum F_x=0,\quad\sum F_y=0,\quad\sum\tau_z=0$ | Equilibrio plano; para reposo sostenido, velocidad y giro iniciales también nulos. |
| $\tau_z=xF_y-yF_x$ | Coordenadas desde el origen elegido; signos según mano derecha. |
| $\lvert f_s\rvert\le\mu_sN,\quad N\ge0,\quad T\ge0$ | Verificar viabilidad de apoyos, contacto y cuerda. |
| $\mu_{s,\min}=\tfrac12\cot\theta$ | Escalera uniforme sin persona, pared lisa y piso rugoso; θ desde suelo. |



## Unidad VI · Capítulo 17. Densidad, presión e hidrostática

### Fluido y presión

Un fluido en reposo no sostiene un esfuerzo cortante estático como un sólido rígido: las fuerzas de presión sobre un pequeño elemento son normales a las superficies. La densidad es masa por volumen, ρ=dm/dV; si es homogéneo, ρ=m/V. La presión p=dFnormal/dA es escalar y se expresa en pascal, N/m². La fuerza que genera sí tiene dirección, determinada por la normal de cada superficie.

La misma presión puede actuar con fuerzas diferentes si las áreas son distintas. Y sumar las magnitudes de fuerzas de presión sobre toda una esfera no proporciona su resultante vectorial: las direcciones cambian y pueden cancelarse. La isotropía de la presión de un fluido en reposo no significa que la presión sea idéntica a distintas alturas.

### Derivar la variación con altura

Para un pequeño cilindro de fluido de área A y espesor dy, con y ascendente, el balance vertical es p(y)A−p(y+dy)A−ρgA dy=0. Al dividir y tomar límite, dp/dy=−ρg. Si ρ es constante, p(y)=pref+ρg(yref−y). A profundidad h bajo una superficie de presión p0, p=p0+ρgh.

La presión depende de profundidad y condiciones del fluido, no de la forma del recipiente. Dos puntos a igual altura en el mismo fluido conectado, homogéneo y en reposo tienen igual presión. Esa afirmación no se extiende sin cambios a fluidos distintos separados por una interfaz o a un flujo acelerado.

### Presión absoluta y manométrica

La presión absoluta usa como referencia el vacío. La manométrica es pabs−patm. En un tanque abierto, la presión manométrica en la superficie es cero y la absoluta patm. A 2 m bajo agua de 1000 kg/m³, la manométrica es 19.6 kPa; con patm=101.325 kPa, la absoluta es 120.925 kPa.

Para la fuerza neta sobre una pared con aire atmosférico del otro lado, la contribución atmosférica puede cancelarse y conviene integrar presión manométrica. Para un problema que pide presión interna absoluta, no se debe omitir patm. Escribir qué referencia se usa evita confundir dos números correctos para preguntas diferentes.

### Manómetros y barómetros

Al bajar una altura Δh dentro de un fluido homogéneo en reposo la presión aumenta ρgΔh; al subir disminuye. En un manómetro con varios líquidos se recorre un camino entre puntos y se suma cada cambio con su propia densidad. En una interfaz ideal de fluidos planos, sin efectos capilares apreciables, la presión es continua.

Si un gas conectado a un manómetro abierto mantiene una diferencia de nivel de mercurio de 0.12 m y el nivel del lado del gas es más bajo, su presión supera a la atmosférica en ρHg g·0.12≈15.994 kPa usando ρHg=13600 kg/m³. La orientación de los niveles decide el signo.

En un barómetro ideal con presión de vapor despreciable sobre la columna, patm≈ρHggh. Con 101325 Pa se obtiene h≈0.76024 m para g=9.8. No hace falta que «el vacío tire» del mercurio: el equilibrio entre la presión atmosférica exterior y el peso de la columna explica el sistema.

### Pascal y una prensa hidráulica

Un aumento de presión aplicado a un líquido confinado se transmite en el modelo ideal. Para pistones a igual altura, F1/A1=F2/A2. Si A2=20A1, una fuerza de 50 N puede equilibrar 1000 N, despreciando pesos de pistones y pérdidas.

No se crea energía: por conservación de volumen A1Δx1=A2Δx2, el pistón pequeño debe recorrer veinte veces la distancia del grande. Los trabajos ideales F1Δx1 y F2Δx2 coinciden. Si los pistones están a distinta altura, se incluye además la diferencia hidrostática de presión.

### Arquímedes: origen del empuje

Las presiones mayores abajo que arriba generan una resultante vertical igual al peso del fluido desplazado: B=ρfluidogVsumergido para un fluido de densidad constante. Puede obtenerse reemplazando mentalmente el cuerpo por un volumen de fluido idéntico: en equilibrio, las fuerzas de presión equilibran el peso de ese volumen.

Un cuerpo flotando libremente cumple Mg=B, por lo que Vsumergido/Vtotal=ρcuerpo/ρfluido para cuerpo homogéneo. Esta relación exige que la razón no supere uno y que no haya otras fuerzas verticales. Un cuerpo totalmente sumergido y sostenido por una cuerda puede tener B≠Mg; la tensión completa el balance.

**Ejemplo.** Un objeto pesa 49 N en aire y su peso aparente al sumergirlo completamente en agua es 29.4 N. El empuje es 19.6 N y el volumen 0.002 m³. Su masa es 5 kg y densidad 2500 kg/m³. La lectura aparente es la tensión de la balanza, no el peso gravitatorio que deja de existir.

### Fuerza sobre una pared vertical

En una placa rectangular de ancho b con borde superior en la superficie y profundidad H, pman=ρgy. Una tira recibe dF=ρgy bdy. Integrar da F=ρgbH²/2. El centro de presión se obtiene igualando momentos: ycp=(∫y dF)/F=2H/3. Está más profundo que el centro geométrico porque las tiras inferiores reciben mayor fuerza.

Para b=2 m y H=3 m en agua, F=88200 N y ycp=2 m bajo la superficie. Multiplicar presión máxima por área daría el doble del resultado: la presión no es uniforme. Si se pide la fuerza neta con diferente presión del otro lado, se integra la diferencia correspondiente.

### Práctica y respuestas

**F1.** Bloque de volumen 0.003 m³ y densidad 2000 kg/m³: masa y peso. **F2.** Presión manométrica a 5 m en agua con g=10. **F3.** Densidades 900 y 1000 kg/m³: fracción sumergida al flotar. **F4.** Prensa con radios r2=3r1: razón de fuerzas ideales. **F5.** ¿El empuje depende de la profundidad de un cuerpo completamente sumergido en un líquido homogéneo incompresible?

**Respuestas.** F1: 6 kg y 58.8 N. F2: 50 kPa. F3: 0.9. F4: 9, porque el área es proporcional al radio al cuadrado. F5: no en ese modelo: depende del volumen desplazado y de ρ; si la densidad cambia con profundidad, hay que revisar la conclusión. La práctica 7 comienza con estas aplicaciones.
### Hoja de fórmulas del capítulo 17


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\rho=m/V,\quad p=F_\perp/A$ | Densidad homogénea y presión uniforme sobre A; en general usar diferenciales. |
| $\frac{dp}{dy}=-\rho g,\quad p=p_0+\rho gh$ | y ascendente; h profundidad; segunda relación si ρ constante. |
| $p_{\rm man}=p_{\rm abs}-p_{\rm atm}$ | Mantener una referencia de presión coherente en todo el balance. |
| $B=\rho_fgV_{\rm sum},\quad\frac{V_{\rm sum}}{V}=\frac{\rho_c}{\rho_f}$ | Empuje en fluido homogéneo; segunda relación solo flotación libre de cuerpo homogéneo. |
| $F_1/A_1=F_2/A_2,\quad A_1\Delta x_1=A_2\Delta x_2$ | Prensa ideal con pistones a igual altura y líquido incompresible. |
| $F=\tfrac12\rho gbH^2,\quad y_{\rm CP}=2H/3$ | Placa vertical rectangular desde superficie libre, presión atmosférica compensada. |



## Unidad VI · Capítulo 18. Tensión superficial, gotas, burbujas y capilaridad

### Fuerza por longitud y energía por área

La tensión superficial γ caracteriza el costo energético de aumentar una interfaz entre fases. En un modelo isotrópico, dE=γdA y sus unidades pueden escribirse J/m² o N/m, que son equivalentes. No es presión: tiene unidades distintas. Mecánicamente produce una fuerza tangente a la interfaz y perpendicular a una línea dibujada sobre ella.

Para una película con una frontera móvil recta de longitud L y dos caras, la fuerza de la película es 2γL. El factor dos corresponde a dos interfaces, no a una regla universal para cualquier línea de contacto. Si hay una única superficie libre, el aporte correspondiente es γL. En geometrías curvas se suman componentes y se cuenta la longitud de cada línea de contacto.

### Ley de Laplace para una interfaz esférica

Imaginemos una gota esférica cortada en dos hemisferios. La diferencia de presión ejerce una fuerza Δp·πR² sobre el área proyectada. La tensión sobre el contorno produce γ·2πR. Equilibrarlas da Δp=2γ/R para una única interfaz esférica.

Una burbuja de gas en un líquido tiene una interfaz gas–líquido y usa 2γ/R en el modelo simple. Una pompa de jabón tiene una película con dos interfaces aproximadamente del mismo radio; entonces Δp≈4γ/R. Una gota líquida en gas vuelve a tener una interfaz y 2γ/R. Confundir «burbuja» cotidiana con «pompa» puede introducir un factor dos.

La forma más general para una interfaz suave usa sus dos radios principales de curvatura: Δp=γ(1/R1+1/R2), con una convención de signos apropiada. Para esfera, ambos son R. Para cilindro ideal, uno es infinito y queda γ/R. Esta expresión no implica que se pueda ignorar la geometría de un menisco real.

### Ejemplo: sobrepresión y presión absoluta

Una burbuja de vapor de radio 1 mm dentro de agua, con γ=0.059 N/m, tiene sobrepresión capilar Δp=118 Pa. Si la presión exterior local es pext, la interior es pext+118 Pa. La ley no determina pext: si el líquido está a profundidad h, puede incluir patm+ρgh. En una pompa con el mismo radio y γ, la sobrepresión sería 236 Pa.

Una gota más pequeña requiere mayor sobrepresión, proporcional a 1/R. Si dos gotas similares tienen radios R y 2R con igual γ, la primera tiene el doble de salto de presión. No se concluye que sus presiones absolutas sean exactamente el doble porque también interviene la presión exterior.

### Capilaridad y ángulo de contacto

Un tubo fino de radio r se introduce verticalmente en un líquido. Sea θ el ángulo de contacto medido **a través del líquido entre la pared y la tangente al menisco**. La componente vertical de la fuerza superficial sobre el perímetro es 2πrγ cosθ. En el modelo de columna cilíndrica y menisco de volumen despreciable, equilibra ρgπr²h. Por tanto


$$
h=\frac{2\gamma\cos\theta}{\rho gr}.
$$


Si θ<90° hay ascenso; si θ>90° el coseno es negativo y el líquido desciende respecto del nivel externo. Suponer θ=0 sin que se dé mojado completo puede cambiar el resultado. La fórmula presupone un tubo suficientemente fino y condiciones donde el balance capilar adoptado resulte adecuado.

**Ejemplo.** Para agua con γ=0.073 N/m, r=0.5 mm, ρ=1000 kg/m³ y θ=0, h≈0.02980 m, es decir 2.98 cm. Si el radio se reduce a la mitad, la altura se duplica en este modelo. Si el enunciado da un diámetro, primero se divide por dos: confundirlo con r cambia h en un factor dos.

### Anillos e insectos: resolver componentes

Un anillo delgado de radio r puede tener líneas de contacto por el borde interior y exterior. Cuando ambos perímetros son aproximadamente 2πr y las componentes verticales contribuyen en el mismo sentido máximo, la fuerza superficial total de retención se aproxima por 4πrγ. La fuerza necesaria para extraerlo puede incluir su peso y otros efectos; no se declara 4πrγ para cualquier fase y posición sin describir la geometría.

En una pata apoyada sobre una interfaz deformada, la fuerza vertical se obtiene multiplicando γ por la longitud de contacto y por el factor trigonométrico correspondiente a la tangente local, o integrándolo si cambia a lo largo del contorno. El ángulo debe definirse en el dibujo. Si el insecto está en equilibrio, la suma de las contribuciones verticales y otros empujes relevantes equilibra su peso; el número de patas efectivamente apoyadas importa.

### Límites del modelo

La tensión superficial depende de temperatura y composición. Agregar surfactantes puede cambiarla y alterar el mojado. Las fórmulas anteriores son modelos de equilibrio; no describen por sí solas la dinámica completa de ruptura de una película o formación de gotas. Conocer el origen de cada factor ayuda a elegir entre una o dos superficies y a conservar las unidades.

### Práctica y respuestas

**G1.** γ=0.05 N/m y gota de radio 2 mm: salto de presión. **G2.** Pompa con esos mismos datos. **G3.** ¿Qué unidades tiene γr? ¿Y γ/r? **G4.** Si θ=90°, ¿qué predice la fórmula capilar? **G5.** Una película con dos caras y borde móvil de 5 cm, γ=0.03 N/m: fuerza ideal sobre el borde.

**Respuestas.** G1: 50 Pa. G2: 100 Pa. G3: fuerza y presión, respectivamente. G4: h=0 dentro del modelo: la componente vertical de tensión se anula. G5: 0.003 N. La clase 9 distingue gotas, burbujas y pompas, y la práctica 7 incluye capilares, anillos e insectos: omitir este capítulo dejaría parte de esa guía sin herramientas.
### Hoja de fórmulas del capítulo 18


| Relación | Símbolos, significado y condiciones |
|---|---|
| $dE=\gamma\,dA,\quad F=\gamma L$ | Una interfaz y fuerza tangencial sobre línea de longitud L; proyectar componentes. |
| $\Delta p=2\gamma/R,\quad\Delta p_{\rm pompa}\approx4\gamma/R$ | Una interfaz esférica frente a película de dos caras con radios aproximadamente iguales. |
| $h=\frac{2\gamma\cos\theta}{\rho gr}$ | Capilar circular: θ medido a través del líquido con la pared, r radio. |
| $F_{\rm pelicula}=2\gamma L$ | Borde móvil recto con dos caras; no usar factor dos sin contar interfaces. |



## Unidad VI · Capítulo 19. Continuidad, Bernoulli, caudal y bombeo

### Describir el flujo y sus idealizaciones

El caudal volumétrico es Q=dV/dt. Para velocidad uniforme normal a una sección, Q=Av; si el perfil no es uniforme se usa $Q=\int_A\mathbf v\cdot\mathbf n\,dA$ y v puede representar una media apropiada. La conservación de masa en un conducto estacionario sin pérdidas laterales da ρ1A1v1=ρ2A2v2. Si el fluido es incompresible y de densidad constante, A1v1=A2v2.

«Estacionario» significa que el campo de velocidades no cambia en el tiempo en cada posición; una partícula puede acelerar al pasar por secciones diferentes. «Incompresible» no significa velocidad constante. «No viscoso» significa que se desprecian ciertos esfuerzos y pérdidas; un fluido real puede apartarse de ese modelo. No son sinónimos y cada hipótesis cumple una función.

### Derivar Bernoulli desde energía

Consideremos un volumen ΔV que avanza desde una sección 1 hasta otra 2. Las presiones realizan trabajo p1ΔV−p2ΔV. Su cambio de energía cinética es ρΔV(v2²−v1²)/2 y su cambio de potencial ρgΔV(y2−y1). Igualar trabajo y cambios, despreciando pérdidas y máquinas entre las secciones, conduce a


$$
p_1+\frac12\rho v_1^2+\rho gy_1
=p_2+\frac12\rho v_2^2+\rho gy_2.
$$


Cada término tiene unidades de presión. Dividir por ρg produce alturas de energía o cargas. La expresión es válida a lo largo de una línea de corriente para flujo estacionario, incompresible y no viscoso bajo las condiciones indicadas; si el flujo es además irrotacional, puede extenderse la misma constante entre líneas apropiadas.

No se usa la versión sin cambios a través de una bomba que agrega energía ni de un tramo con pérdidas significativas. Tampoco «mayor velocidad implica menor presión» es una regla universal entre dos puntos arbitrarios: puede haber diferencia de altura, máquinas y distintas líneas de corriente.

![Continuidad y balance de energía entre dos secciones](/planos-de-estudio/img/fisica1/flujo.svg)

### Problema: estrechamiento horizontal

Agua de 1000 kg/m³ fluye por una tubería horizontal. En la sección 1, A1=4 cm², v1=2 m/s y p1=200 kPa. En la sección 2, A2=1 cm². Continuidad da v2=8 m/s. Bernoulli da p2=p1+ρ(v1²−v2²)/2=170 kPa.

El caudal es Q=0.0004·2=0.0008 m³/s, es decir 0.8 L/s. Si se midiera un descenso de presión mayor, podrían existir pérdidas o diferencias respecto del modelo. El cálculo requiere convertir cm² correctamente y mantener la misma referencia de presión en ambos puntos; sumar presión manométrica con absoluta sin corregirlas no es válido.

### Torricelli y un tanque grande

Entre la superficie de un depósito abierto y un orificio a profundidad h, si el área del tanque es mucho mayor que la del orificio, la velocidad de la superficie puede despreciarse. Ambas presiones son atmosféricas y Bernoulli da vsalida=√(2gh). Es la misma rapidez que adquiriría un cuerpo al caer una altura h, porque ambos resultados expresan una conversión de energía potencial en cinética bajo modelos ideales.

Si el orificio está a altura y del suelo y la superficie a altura H, el chorro sale horizontalmente con √[2g(H−y)] y tarda √(2y/g) en caer. Su alcance es $x=2\sqrt{y(H-y)}$. El máximo está en y=H/2 y vale H. Esto presupone que el nivel H apenas cambia durante el tiempo considerado y que el chorro sigue la cinemática ideal sin resistencia importante.

### El nivel baja: integrar en lugar de usar un caudal fijo

Para un tanque de sección constante A y un orificio pequeño de área a, la altura h sobre el orificio cambia. Continuidad da A dh/dt=−a√(2gh). Separar variables produce $\sqrt{h(t)}=\sqrt{h_0}-(a/A)\sqrt{g/2}\,t$ mientras h≥0. El tiempo ideal de vaciado es $(A/a)\sqrt{2h_0/g}$.

No debe multiplicarse el caudal inicial por todo el tiempo si el nivel desciende apreciablemente. En un tanque real se añade un coeficiente de descarga y se revisan contracción, viscosidad y condiciones del orificio; no se inventa ese coeficiente si no se da o mide.

### Sifón y presión mínima

Si un sifón lleno conecta una superficie libre con una salida más baja, su velocidad ideal depende del desnivel entre la superficie y la salida. En el punto más alto del tubo, Bernoulli respecto de la superficie puede dar una presión menor que patm: pB=patm−ρg hB−ρv²/2 si la velocidad superficial es despreciable.

La presión absoluta no puede descender indefinidamente manteniendo el mismo estado líquido. Debe considerarse la presión de vapor y la posibilidad de cavitación; imponer pB≥pvapor proporciona un límite de altura para el modelo. Suponer simplemente «presión cero» como umbral exacto ignoraría que el líquido puede vaporizar antes. La puesta en marcha también requiere el tubo inicialmente lleno, como aclara la práctica 7.

### Bombas, trabajo de presión y potencia

Una bomba ideal que suministra una diferencia de energía por volumen Δe necesita potencia hidráulica QΔe. Si solo cambia presión entre secciones equivalentes, Phid=QΔp. Si eleva fluido y modifica rapidez, se agregan ρgΔy y ρΔ(v²)/2. La potencia de entrada es Phid/η cuando el rendimiento es η.

**Ejemplo.** Una bomba mueve 0.002 m³/s de agua a un depósito 10 m más alto, con ambas superficies abiertas y velocidades superficiales despreciables. Sin pérdidas, Phid=ρgQΔy=196 W. Para η=0.7, la potencia de entrada es 280 W. Si además debe mantener una presión superior de 50 kPa, el aporte adicional es QΔp=100 W y la potencia hidráulica total 296 W.

### Práctica y respuestas

**V1.** Conducto de 2 cm² con v=3 m/s: caudal en L/s. **V2.** Duplicar diámetro a caudal constante: razón de velocidades. **V3.** Tanque grande, h=1.8 m y g=10: rapidez de salida. **V4.** Bomba que entrega Q=0.01 m³/s y Δp=20 kPa sin otros cambios: potencia hidráulica. **V5.** ¿Se puede aplicar Bernoulli ideal entre cualquier punto interior y exterior de un tejado solo por conocer dos rapideces?

**Respuestas.** V1: 0.6 L/s. V2: la velocidad se reduce a un cuarto. V3: 6 m/s. V4: 200 W. V5: no automáticamente; deben justificarse conexión de líneas de corriente, régimen y las demás hipótesis. La fórmula de diferencia dinámica de presión es una aproximación que requiere un modelo del flujo; no explica por sí sola toda la aerodinámica de una estructura.
### Hoja de fórmulas del capítulo 19


| Relación | Símbolos, significado y condiciones |
|---|---|
| $Q=Av,\quad\rho_1A_1v_1=\rho_2A_2v_2$ | v uniforme o media normal; flujo estacionario sin fuentes; si ρ constante, Av constante. |
| $p+\tfrac12\rho v^2+\rho gy=\mathrm{constante}$ | Bernoulli ideal a lo largo de línea de corriente: estacionario, incompresible, sin pérdidas ni máquinas. |
| $v_{\rm salida}=\sqrt{2gh}$ | Torricelli: depósito grande, superficie y salida a igual presión, h sobre el orificio. |
| $\mathcal P_{\rm hid}=Q\left[\Delta p+\rho g\Delta y+\tfrac12\rho\Delta(v^2)\right]$ | Sin pérdidas adicionales; potencia de entrada=hidráulica/η. |
| $t_{\rm vaciado}=\frac Aa\sqrt{\frac{2h_0}{g}}$ | Tanque de sección A constante, orificio pequeño a, descarga ideal; sin coeficiente real de descarga. |



## Formulario de la Unidad VI · Fluidos

Referencia de consulta: las condiciones de cada relación forman parte de la fórmula. Las derivaciones y los ejemplos se desarrollan en los capítulos.

### Hidrostática

| Relación | Símbolos, significado y condiciones |
|---|---|
| $\rho=m/V,\quad p=F_\perp/A$ | Densidad homogénea y presión uniforme sobre A; en general usar diferenciales. |
| $\frac{dp}{dy}=-\rho g,\quad p=p_0+\rho gh$ | y ascendente; h profundidad; segunda relación si ρ constante. |
| $p_{\rm man}=p_{\rm abs}-p_{\rm atm}$ | Mantener una referencia de presión coherente en todo el balance. |
| $B=\rho_fgV_{\rm sum},\quad\frac{V_{\rm sum}}{V}=\frac{\rho_c}{\rho_f}$ | Empuje en fluido homogéneo; segunda relación solo flotación libre de cuerpo homogéneo. |
| $F_1/A_1=F_2/A_2,\quad A_1\Delta x_1=A_2\Delta x_2$ | Prensa ideal con pistones a igual altura y líquido incompresible. |
| $F=\tfrac12\rho gbH^2,\quad y_{\rm CP}=2H/3$ | Placa vertical rectangular desde superficie libre, presión atmosférica compensada. |

### Tensión superficial

| Relación | Símbolos, significado y condiciones |
|---|---|
| $dE=\gamma\,dA,\quad F=\gamma L$ | Una interfaz y fuerza tangencial sobre línea de longitud L; proyectar componentes. |
| $\Delta p=2\gamma/R,\quad\Delta p_{\rm pompa}\approx4\gamma/R$ | Una interfaz esférica frente a película de dos caras con radios aproximadamente iguales. |
| $h=\frac{2\gamma\cos\theta}{\rho gr}$ | Capilar circular: θ medido a través del líquido con la pared, r radio. |
| $F_{\rm pelicula}=2\gamma L$ | Borde móvil recto con dos caras; no usar factor dos sin contar interfaces. |

### Hidrodinámica

| Relación | Símbolos, significado y condiciones |
|---|---|
| $Q=Av,\quad\rho_1A_1v_1=\rho_2A_2v_2$ | v uniforme o media normal; flujo estacionario sin fuentes; si ρ constante, Av constante. |
| $p+\tfrac12\rho v^2+\rho gy=\mathrm{constante}$ | Bernoulli ideal a lo largo de línea de corriente: estacionario, incompresible, sin pérdidas ni máquinas. |
| $v_{\rm salida}=\sqrt{2gh}$ | Torricelli: depósito grande, superficie y salida a igual presión, h sobre el orificio. |
| $\mathcal P_{\rm hid}=Q\left[\Delta p+\rho g\Delta y+\tfrac12\rho\Delta(v^2)\right]$ | Sin pérdidas adicionales; potencia de entrada=hidráulica/η. |
| $t_{\rm vaciado}=\frac Aa\sqrt{\frac{2h_0}{g}}$ | Tanque de sección A constante, orificio pequeño a, descarga ideal; sin coeficiente real de descarga. |



## Taller integrador · Capítulo 20. Elegir leyes y separar procesos

Este taller funciona como diagnóstico después de las seis unidades. Tapá el desarrollo, dibujá la situación y justificá tus ecuaciones antes de calcular. Comparar solamente el número final puede ocultar una cancelación accidental de errores. En todos los problemas de este taller se usa g=10 m/s² para facilitar controles manuales.

### Problema 1. Rampa, roce y salida horizontal

Un bloque parte desde reposo y baja 5 m por una rampa de 30° con μk=0.2. La rampa termina horizontalmente a 1.25 m del suelo mediante una transición lisa ideal que no cambia la rapidez. Hallá rapidez de salida, tiempo de vuelo y alcance horizontal desde el borde.

En la rampa, N=mg cos30° y el trabajo del roce es −μkmg cos30°·5. El balance por unidad de masa da $v_B^2/2=g\cdot5\sin30^\circ-\mu_kg\cdot5\cos30^\circ$. Por tanto vB²=50−10√3≈32.6795 m²/s² y vB≈5.7166 m/s.

La salida es horizontal: vy0=0. La caída al suelo cumple 1.25−5t²=0, de donde t=0.5 s. El alcance es vB·0.5≈2.8583 m. La velocidad de impacto es (5.7166,−5) m/s. La energía en la rampa incluye roce, pero el vuelo posterior no; conviene separar ambos intervalos en lugar de introducir el mismo trabajo disipativo en toda la trayectoria.

### Problema 2. Colisión, compresión y retorno

Un carrito de 1 kg a 6 m/s se une a uno de 2 kg quieto. El conjunto comprime un resorte de 300 N/m sobre un piso sin roce. Hallá velocidad después del choque, compresión máxima, energía transformada durante la colisión y rapidez al regresar al punto de primer contacto con el resorte.

Durante el choque, el impulso externo horizontal es despreciable y P se conserva: 1·6=3vf, luego vf=2 m/s. La energía cinética pasa de 18 a 6 J, por lo que 12 J se transforman en otras formas. Durante la compresión posterior, la energía mecánica se conserva: 6=300x²/2 y xmax=0.2 m. Al volver a x=0 se recuperan los 6 J de K y la rapidez es 2 m/s, ahora en sentido contrario.

No se «recuperan» los 12 J transformados en el choque: el resorte solo almacenó 6 J. También conviene especificar la unión de los carritos: si no quedaran pegados, haría falta otro modelo de colisión para determinar qué masa comprime el resorte.

### Problema 3. Polea masiva: dinámica y energía

Dos masas de 2 y 4 kg están unidas por una cuerda sobre una polea disco de masa 2 kg. Se liberan desde reposo y la mayor desciende 0.7 m. Hallá aceleración y rapidez después de ese descenso, despreciando rozamiento del eje y deslizamiento de cuerda.

Como I/R²=Mdisco/2=1 kg, a=(4−2)·10/(2+4+1)=20/7 m/s². La rapidez satisface v²=2a·0.7=4 y v=2 m/s. Las tensiones son T1=2(10+20/7)=180/7 N y T2=4(10−20/7)=200/7 N.

Por energía, el descenso de potencial neto es (4−2)·10·0.7=14 J. Se distribuye en traslación (2+4)·2²/2=12 J y rotación I(v/R)²/2=(I/R²)·v²/2=2 J. Total 14 J. Si se ignorara la polea, la predicción de rapidez sería mayor porque se habría omitido una forma de almacenar energía.

### Problema 4. Rodadura y posibilidad real del modelo

Un cilindro macizo se libera en una rampa de 30°, con μs=0.15. ¿Puede suponerse rodadura sin deslizar? Si no, ¿es legítimo calcular directamente a=(2/3)g sin30°?

Para rodadura de cilindro macizo se requiere μs≥tan30°/3≈0.19245. El valor disponible no alcanza. Por lo tanto el cálculo de a=10/3 m/s² usando a=Rα no describe el proceso real de este enunciado.

Si se proporcionara μk y el sentido inicial de deslizamiento, se podrían escribir por separado traslación y rotación con fk=μkN. Al no darse μk, no hay datos suficientes para determinar esa evolución completa con el modelo cinético. Esta es una respuesta física válida: detectar una hipótesis incompatible es mejor que dar un número obtenido de una fórmula inaplicable.

### Problema 5. Fluido que asciende y se estrecha

Agua fluye estacionariamente por una tubería ideal. En 1, A1=4 cm², v1=2 m/s y p1=150 kPa manométricos. En 2, la sección es 2 cm² y está 3 m más alta. Hallá Q, v2 y p2. Se supone que ambas secciones pertenecen al mismo flujo y que no hay bomba ni pérdidas entre ellas.

Continuidad da Q=0.0008 m³/s y v2=4 m/s. Bernoulli, con una misma referencia de presión, da p2=p1+ρ(v1²−v2²)/2−ρg·3. Para ρ=1000 y g=10, p2=150000−6000−30000=114000 Pa manométricos.

La caída de presión se debe tanto a ganar altura como a aumentar rapidez. Convertir la sección sin elevar el factor de centímetros al cuadrado daría un caudal incorrecto aunque la razón de velocidades pudiera coincidir; los resultados parciales también deben conservar unidades.

### Problema 6. Una compuerta y el punto de aplicación

Una compuerta vertical rectangular de ancho 1.5 m llega desde la superficie del agua hasta 2 m de profundidad. Del otro lado hay aire a la misma presión atmosférica. Hallá la fuerza neta horizontal del agua y su momento respecto del borde superior.

Se integra la presión manométrica, porque la presión atmosférica se compensa. dF=ρgybdy y F=ρgbH²/2=30000 N. Su centro de presión está a 2H/3=4/3 m bajo el borde superior. El momento es F·4/3=40000 N·m, consistente con $\int_0^H y(\rho gybdy)=\rho gbH^3/3$.

No se coloca toda la fuerza en el centro geométrico a 1 m: el mayor empuje sobre la parte profunda desplaza la resultante. Este problema combina hidrostática e ideas de torque de la unidad V.

### Una revisión que permita seguir aprendiendo

Si falló el problema 1, revisá proyecciones, trabajo del roce y reloj del vuelo. Si falló el 2, distinguí conservación de P durante colisión y de energía mecánica después. Si falló el 3, incorporá la rotación de la polea. Si falló el 4, repasá desigualdades y viabilidad de contactos. Si falló el 5, separá continuidad y energía. Si falló el 6, revisá presión variable y momentos de fuerzas distribuidas.

Para considerar consolidado un resultado, cambiá un dato o una condición y resolvé otra vez: una llegada a distinta altura, una polea más pesada, otra distribución de masa, una presión exterior distinta. Poder explicar qué cambia y qué permanece es una evidencia más fuerte de aprendizaje que repetir un procedimiento memorizado.
### Hoja de fórmulas del capítulo 20


| Relación | Símbolos, significado y condiciones |
|---|---|
| $\Delta(K+U)=W_{\rm otras}$ | Elegir estados y sistema; separar pérdidas y almacenamiento rotacional. |
| $\Delta\mathbf P=\mathbf J_{\rm ext},\quad\Delta\mathbf L=\int\boldsymbol\tau_{\rm ext}dt$ | Elegir intervalo: una colisión y el movimiento posterior no necesariamente conservan lo mismo. |
| $\lvert f_s\rvert\le\mu_sN,\quad N\ge0,\quad T\ge0$ | Comprobar que las restricciones supuestas son físicamente posibles antes de interpretar números. |



## Fuentes, cobertura y práctica del aula

La referencia para esta edición es el [aula de Física I de UNNOBA, primer cuatrimestre de 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=10864), accesible con la cuenta proporcionada para estudio. Los originales descargados se conservan localmente; no se publican junto al sitio.

| Material del aula | Contenido desarrollado | Capítulos del manual |
|---|---|---|
| Cronograma 2026-I, clase 1 y práctica 0 | Mediciones, unidades, funciones, vectores y herramientas de cálculo | 1 y uso transversal |
| Clases 1–3 y práctica 1 | Cinemática 1D, gráficos, etapas, caída, proyectiles, circular y relativo | 2–4 |
| Clases 4–5 y práctica 2 | Newton, gravitación, normal, tensión, Hooke, roce, vínculos y dinámica circular | 5–7 |
| Clase 6 y práctica 3 | Trabajo, K, potenciales, potencia, fuerzas conservativas y balances con roce | 8–9 |
| Clase 7, inicio de clase 8 y práctica 4 | Impulso, colisiones, centro de masa y fuerzas externas | 10–11 |
| Clase 8 y prácticas 5–6 | Cinemática angular, inercia, torque, poleas, rodadura, L y estática | 12–16 |
| Clase 9 y práctica 7 | Hidrostática, presión, empuje, tensión superficial, continuidad y Bernoulli | 17–19 |
| Problemas integradores originales | Selección de modelo, procesos por etapas, verificación y datos insuficientes | 20 |

El manual explica el recorrido temático identificado, pero no contiene la solución de cada ejercicio de esas prácticas. Los gráficos originales de las guías deben consultarse al resolver sus consignas: no se inventan datos que solo aparecen en una figura no reproducida aquí. Las hojas de fórmulas incluyen condiciones para reducir aplicaciones fuera de su dominio.

### Cómo contrastar con las guías

En la práctica 1, elegí al menos un gráfico por tramos, un encuentro con inicio retrasado y un tiro que llega a otra altura. En la 2, resolvé reposo con roce, deslizamiento y un problema circular; en la 3, una fuerza variable y un resorte con pérdidas. En la 4, compará un choque elástico y otro pegajoso, y agregá un caso de movimiento relativo del centro. En las 5–6, incluí un cuerpo compuesto, una polea masiva, rodadura y un equilibrio límite. En la 7, trabajá un manómetro, un cuerpo sumergido, una interfaz y un flujo con cambios de altura y sección.

Los archivos de la cátedra incluyen respuestas breves y algunas expresiones o unidades que requieren revisión. Los desarrollos de esta edición se construyen a partir de leyes y controles independientes, sin copiar una respuesta como garantía de exactitud. Una discrepancia debe examinarse considerando dibujo, signos, valor adoptado de g, redondeo y posibles erratas.

### Alcance de la revisión

Se obtuvieron los 18 PDF listados y se examinó su texto, junto con páginas seleccionadas de geometría, fricción, rodadura y fluidos. No se realizó una auditoría exhaustiva de cada diapositiva o respuesta del aula. Se verificaron por cálculo independiente ejemplos y relaciones seleccionadas y se comprobó la representación matemática en el sitio. Esto no sustituye una validación docente del manual ni garantiza preparación para cualquier evaluación posible.
