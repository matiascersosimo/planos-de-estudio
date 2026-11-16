---
nombre: "Introducción a la Programación Orientada a Objetos"
code: "01480"
resumen: "Aprender objetos desde el comienzo: TAD, clases, encapsulamiento, herencia, polimorfismo, colecciones, diseño, patrones y UML, con Java ejecutable y práctica guiada."
---

## Cómo aprender objetos desde la primera explicación

Esta guía desarrolla **Introducción a la Programación Orientada a Objetos, 01480**, a partir del aula **2026–2C** de UNNOBA. Continúa las herramientas de programación estructurada y de PI, pero recupera las diferencias necesarias antes de utilizarlas: objeto y variable, clase e instancia, referencia y copia, mensaje y método. No necesitás saber diseñar jerarquías o memorizar patrones para empezar.

La intención es poder **explicar, construir y modificar** un modelo. Cada capítulo parte de un problema, desarrolla decisiones, incluye ejemplos o trazas y propone práctica con respuestas razonadas. Las hojas de consulta condensan relaciones e invariantes después del desarrollo; no reemplazan la explicación que permite aprenderlas.

### Una forma activa de estudiar

1. Antes de leer código, escribí qué objetos imaginás y qué responsabilidad tendría cada uno.
2. Durante la lectura, identificá receptor, argumentos, resultado y estado que puede cambiar.
3. Dibujá una traza pequeña: no sólo el resultado final, también quién pidió qué.
4. Contestá el ejercicio antes de revisar su respuesta. Si acertaste por casualidad, reconstruí el mecanismo.
5. Ejecutá el ejemplo y contrastá la predicción. Cambiá una condición de borde y explicá qué debería pasar.
6. Cerrá la unidad relacionando contratos, código y diagramas. Si dicen cosas distintas, buscá la discrepancia.

**Objeto** es una entidad de ejecución con identidad y comportamiento; **clase** define una familia de objetos; **protocolo** reúne operaciones disponibles; **contrato** agrega su significado, supuestos y efectos; **invariante** expresa una condición que debe conservarse. El vocabulario se construye con ejemplos a lo largo del manual, además de reunirse en el glosario.

### Lenguaje y alcance

La cátedra utiliza **JavaLike**, una notación didáctica basada en Java, y **BlueJ**, un entorno para trabajar con Java. JavaLike no se presenta aquí como compilador independiente. Los bloques Java del manual pertenecen a un laboratorio original que se compila con un JDK real; las ecuaciones de TAD y los diagramas son otras formas de especificación.

El programa disponible lleva carátula de **2018** y el aula lo publica como material de **2026**. Enumera nueve unidades; las clases del aula se organizan en siete presentaciones y sus resúmenes. Conservamos esa diferencia: los 37 capítulos siguientes son una organización didáctica, no una nueva numeración oficial de clases ni una actualización administrativa del programa.

## Mapa entre programa, clases y capítulos

| Unidad del programa recuperado | Capítulos | Apoyos principales del aula |
| --- | --- | --- |
| 1. TAD e introducción a objetos | 1–4 | Clase 1 y TP 1; especificación desarrollada con una pila original. |
| 2. Objetos, clases, métodos y UML | 5–8 | Clase 2, guía JavaLike y TP 1–2. |
| 3. Herencia, abstracción y composición | 9–12 | Clases 3–4 y TP 2–4. |
| 4. Instancias, constructores y polimorfismo | 13–16 | Clases 3–4 y TP 2–4. |
| 5. Colecciones e iteración | 17–20 | Clase 5, guía JavaLike y prácticos con colecciones y fechas. |
| 6. Diseño OO | 21–23 | Clase 6 y casos integradores. |
| 7. Patrones | 24–29 | Clases 6–7 y TP 5. |
| 8. Buenas prácticas | 30–33 | Clase 7: Double Dispatch, nombres e inicialización diferida. |
| 9. UML e interacciones | 34–37 | Clases 2 y 7, guía UML y prácticos. |

Las relaciones de este mapa indican correspondencia de temas, no una equivalencia formal entre numeraciones. Los temas se conectan: por ejemplo, un método plantilla utiliza herencia y polimorfismo, y un escenario UML permite revisar responsabilidades.

## Laboratorio Java: descargar, compilar y experimentar

[Descargar el laboratorio completo: fuentes Java e instrucciones](/planos-de-estudio/ejemplos/ipoo/laboratorio-ipoo.zip).

El ZIP contiene **16 archivos Java originales** y un LEEME. Es un proyecto pequeño sin paquetes externos. Las clases se compilan juntas porque algunas dependen de otras: Rectangulo y Circulo necesitan Figura, y el catálogo utiliza Libro. No se deben tratar como 16 programas independientes con 16 main.

Con JDK 11 o posterior disponible, descomprimí el ZIP, creá una carpeta `salida`, abrí la terminal en la carpeta de los fuentes y ejecutá:

```text
javac --release 11 -encoding UTF-8 -d salida *.java
java -cp salida DemoIPOO
```

La salida de control es:

```text
Cantidad: 5
Rectangulo: area=12.0
Vence: 2026-11-23
Pedido: enviado
pantalla:redonda
```

No memorices esa salida como una respuesta aislada: el taller final explica qué colaboración produce cada línea. Los resultados numéricos utilizan valores pequeños y representables; las áreas son aproximaciones double. Las operaciones que reciben referencias y colecciones deben respetar sus contratos, incluidos datos no nulos y ausencia de modificaciones concurrentes cuando así se indica.

### Cómo están organizados los archivos

| Grupo | Fuentes |
| --- | --- |
| Primeras abstracciones | Deposito, PilaEnteros, Contador |
| Herencia y despacho | Figura, Rectangulo, Circulo, Trazas |
| Colecciones y dominio | Libro, Catalogo, Prestamo, Colecciones |
| Colaboraciones y patrones | Patrones, Configuracion, ConsultaDiferida, DespachoDoble |
| Demostración | DemoIPOO |

Las clases internas de Patrones y DespachoDoble agrupan participantes del ejemplo. Se escriben nombres como `Patrones.Pedido` para identificarlos desde DemoIPOO. Los fragmentos del manual que muestran sólo esos participantes se estudian dentro del archivo completo: las importaciones y el contenedor no se repiten en cada capítulo.

En BlueJ podés crear un proyecto, incorporar los fuentes, compilar y experimentar primero con Deposito y Contador mediante instancias. La guía del aula ofrece un recorrido de ese entorno. Aquí se verificó el laboratorio con **Temurin/OpenJDK 21 y objetivo de lenguaje Java 11**; no se afirma una prueba automatizada de la interfaz de BlueJ. La [página oficial de BlueJ](https://www.bluej.org/) permite consultar distribución e instalación actuales, sin depender de un número de versión recordado de otra fecha.

## 1. De procedimientos a objetos: cambiar la pregunta de diseño

En PI aprendiste a construir funciones y estructuras para resolver problemas. Esas herramientas siguen siendo útiles: dentro de un método también habrá variables, decisiones y recorridos. El cambio consiste en organizar responsabilidades alrededor de objetos que mantienen un estado y ofrecen operaciones coherentes. No consiste en envolver todo el programa en una clase y conservar las mismas dependencias desordenadas.

### Un problema que permite ver la diferencia

Imaginá un depósito con capacidad máxima diez y cantidad actual siete. Un programa externo podría modificar directamente esa cantidad. Si varias funciones conocen los detalles internos, cualquiera podría asignar once o un número negativo. Cada cliente tendría que recordar las reglas del depósito y repetir las validaciones.

En un diseño con objetos, el depósito recibe mensajes como `cargar(2)` y `retirar(3)`. Él conserva su cantidad y decide si puede cumplir. El cliente conoce qué pedir y cómo interpretar la respuesta; no necesita saber si el almacenamiento interno utiliza un entero, una medición o una representación distinta.

### Qué conservamos de programación estructurada

Seguimos descomponiendo, nombrando, definiendo entradas y comprobando resultados. El cuerpo de `retirar` puede contener un `if`. Un método de catálogo puede recorrer una colección. Las estructuras de control no desaparecen: se ubican dentro de responsabilidades que queremos mantener comprensibles.

Tampoco la orientación a objetos elimina todos los errores de diseño. Podemos tener clases enormes, estado público e interacciones difíciles de seguir. Los beneficios dependen de decisiones concretas: proteger invariantes, distribuir tareas y reducir lo que cada parte necesita conocer.

### Del caso a un modelo

Primero escribimos el propósito: representar cantidades y movimientos de un depósito. Después elegimos información pertinente: capacidad y cantidad. Luego definimos comportamiento: cargar, retirar y consultar. Finalmente fijamos reglas: capacidad positiva y cantidad entre cero y capacidad. Todavía no elegimos los nombres de todos los campos ni escribimos código.

El modelo no necesita representar todo lo que tendría un depósito físico. Si el problema no trabaja temperatura o ubicación, agregarlas sólo porque existen en el mundo puede distraer. Una abstracción es una selección orientada por una pregunta, no una fotografía exhaustiva de la realidad.

### Primera traza de colaboración

Un cliente solicita retirar tres. El depósito verifica que tres sea positivo y no supere siete. Actualiza su cantidad a cuatro y responde éxito. El cliente puede mostrar el resultado. Si después solicita retirar cinco, el depósito responde fallo y conserva cuatro. La decisión pertenece al objeto que conoce y protege esa regla.

1. **Con ayuda:** identificá estado y comportamiento. **Respuesta:** capacidad y cantidad describen estado; cargar y retirar son operaciones sobre él.
2. **Con pista:** ¿poner `cantidad` pública evita repetir validaciones? **Respuesta:** no; permite saltarlas y obliga a los clientes a conocerlas.
3. **Autónomo:** proponé un objeto para un sistema de turnos. **Respuesta orientativa:** una agenda podría ofrecer reservar y cancelar, manteniendo internamente la regla de no superponer turnos. Debe explicarse qué información necesita y qué pedidos acepta.

### Hoja de consulta del capítulo 1

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Responsabilidad | Un objeto mantiene información y ofrece operaciones coherentes. | Asignar las reglas a quien conoce y protege sus datos. |
| Modelo | Selecciona aspectos pertinentes de un problema. | No exige representar todos los detalles del mundo real. |

## 2. Abstracción y tipo abstracto de datos: especificar antes de representar

Un tipo abstracto de datos, o TAD, se describe por sus valores y operaciones observables, sin imponer todavía una representación concreta. La palabra abstracto no significa incompleto: una especificación puede ser muy precisa aunque no diga si internamente se usa un arreglo o una lista.

### Una pila como ejemplo

Una pila permite agregar y retirar por el mismo extremo. Si apilamos 4 y después 9, el próximo dato que retiramos es 9. La regla se conoce como último en entrar, primero en salir. No podemos elegir arbitrariamente otro elemento sin cambiar el contrato de esta abstracción.

Podemos especificar operaciones: crear vacía, consultar si está vacía, apilar, consultar tope y desapilar. Antes de programar fijamos qué sucede al pedir tope o desapilar en vacío. En nuestro ejemplo se informa una excepción; otra implementación podría usar un resultado opcional, pero necesitaría documentarlo.

### Qué expresa una especificación algebraica

Una forma de describir el comportamiento es escribir relaciones entre operaciones. Si `P` representa una pila válida y `x` un entero, el tope después de apilar `x` debe ser `x`. Quitar ese elemento debe dejar una pila con el mismo contenido observable que `P`. Esta última relación compara estados de la abstracción; no exige que dos implementaciones tengan la misma dirección de memoria.

Las ecuaciones necesitan tipos y condiciones. `tope(vacía)` no puede utilizarse como si fuera un entero válido si la operación está definida sólo para pilas no vacías. Tampoco se confunde el elemento devuelto por desapilar con la pila que queda después: una interfaz mutable puede devolver el dato y modificar el objeto, mientras una especificación matemática puede expresar la transformación por separado.

### Una implementación posible

```java
import java.util.Vector;

public class PilaEnteros {
    private final Vector<Integer> datos = new Vector<Integer>();

    public void apilar(int valor) { datos.add(valor); }
    public boolean estaVacia() { return datos.isEmpty(); }
    public int cantidad() { return datos.size(); }

    public int tope() {
        if (estaVacia()) throw new IllegalStateException("Pila vacia");
        return datos.lastElement();
    }

    public int desapilar() {
        if (estaVacia()) throw new IllegalStateException("Pila vacia");
        return datos.remove(datos.size() - 1);
    }
}
```

La clase concreta usa `Vector<Integer>`. Los clientes no acceden a ese campo. Si la representación cambiara y se conservara el protocolo y su significado, las llamadas de un cliente correcto podrían seguir funcionando. Esa separación es el valor del TAD: definir lo que se garantiza sin acoplar todas las partes al mecanismo interno.

### TAD y clase no son sinónimos perfectos

Una clase es una construcción de un lenguaje que puede implementar una abstracción. Escribir una clase no demuestra que su contrato esté bien definido. También pueden implementarse TAD mediante módulos en otros paradigmas. Lo que estudiamos es la relación entre especificación, representación y operaciones; no una equivalencia terminológica automática.

1. **Con ayuda:** apilá 4, apilá 9, desapilá y consultá tope. **Respuesta:** desapilar devuelve 9 y el tope restante es 4.
2. **Con pista:** ¿puede tope cambiar la pila sin avisarlo? **Respuesta:** violaría el contrato de consulta que adoptamos.
3. **Autónomo:** explicá una prueba que no dependa de Vector. **Respuesta:** ejecutar secuencias de apilar y desapilar y verificar orden, cantidad y vacío mediante las operaciones públicas, sin inspeccionar campos internos.

### Hoja de consulta del capítulo 2

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| TAD | Especificar operaciones y propiedades sin imponer representación. | Separar significado observable de arreglo, lista o colección interna. |
| Pila | tope(apilar(P,x)) = x; retirar ese tope conserva el resto observable P. | La consulta de tope requiere pila no vacía; diferenciar estado y dato retornado. |

## 3. Estado, comportamiento e identidad

Un objeto no se caracteriza sólo por tener datos. Nos interesa qué estado mantiene, cómo responde a mensajes y cómo se distingue de otros objetos. Dos depósitos pueden tener capacidad diez y cantidad cinco sin ser el mismo depósito. Esa diferencia importa cuando una operación modifica uno y queremos saber si el otro también cambia.

### Distinguir identidad y parecido

La identidad permite referirnos al mismo objeto a través del tiempo, aun cuando cambien sus atributos. Si retiramos agua, sigue siendo ese depósito. Igualdad de valores, en cambio, depende del criterio elegido: dos libros pueden considerarse iguales por código aunque tengan instancias distintas. La comparación apropiada nace del modelo.

En Java, dos variables pueden guardar referencias al mismo objeto. Con `Deposito b = a`, no construimos un segundo depósito: copiamos una referencia. Una llamada que modifica el objeto mediante `b` será observable mediante `a`. Crear `new Deposito(10,5)` dos veces produce dos objetos independientes aunque comiencen con igual estado.

### Observar una traza

Supongamos que `a` y `b` refieren al mismo depósito con cinco unidades, y `c` refiere a otro con cinco. Al ejecutar `b.retirar(2)`, las consultas por `a` y `b` informan tres; la de `c`, cinco. Cambiar después `b` para que refiera a `c` no mueve automáticamente la referencia de `a`.

Esta distinción se parece al alias de direcciones visto en PI, pero Java no expone el mismo conjunto de operaciones de punteros de C++. En los ejemplos no hacemos aritmética de direcciones ni liberación con `delete`. Las referencias permiten colaboración y también exigen comprender qué objetos se comparten.

### Comportamiento observable

Un cliente observa resultados, efectos permitidos y relaciones relevantes. No debería depender de un atributo privado porque podría cambiar la implementación. Un objeto con los mismos valores internos que otro puede responder distinto si pertenece a otra clase o aplica otras reglas; estado y comportamiento se analizan conjuntamente.

La frase pedagógica «todo son objetos» sirve para orientar un modelo de colaboración, pero no describe literalmente todos los valores de Java: `int`, `double` y `boolean`, entre otros, son tipos primitivos. No necesitamos negar esa diferencia para aprender el paradigma.

1. **Con ayuda:** dos objetos diferentes tienen igual cantidad. ¿Son idénticos? **Respuesta:** no necesariamente; coincidir en un atributo no prueba identidad.
2. **Con pista:** ¿`b = a` invoca el constructor de Deposito? **Respuesta:** no; copia el valor de una referencia.
3. **Autónomo:** explicá por qué una prueba debe incluir alias. **Respuesta:** ayuda a distinguir una copia independiente de un objeto compartido y a reconocer efectos visibles desde más de una variable.

![Dos referencias pueden observar el mismo estado porque llegan a una sola instancia.](/planos-de-estudio/images/ipoo/referencias.svg)

*Diagrama original. Dos referencias pueden observar el mismo estado porque llegan a una sola instancia.*

### Hoja de consulta del capítulo 3

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Identidad / igualdad | Mismo objeto / equivalencia según criterio de dominio. | Objetos de igual estado pueden ser instancias diferentes. |
| Alias | Copiar una referencia no construye otro objeto. | Las modificaciones del objeto compartido son observables por sus alias. |

## 4. Mensajes y responsabilidades: pedir sin invadir

Un mensaje expresa un pedido dirigido a un receptor. Un método aporta una implementación que puede responder a ese pedido. Distinguirlos permite pensar primero qué necesita un colaborador y después cómo se resuelve. La misma intención puede tener implementaciones diferentes sin que cada cliente conozca esos detalles.

### Desarmar una expresión

En `deposito.retirar(3)`, `deposito` identifica el receptor, `retirar` el nombre de la operación y 3 es un argumento. El resultado booleano indica si el pedido pudo cumplirse bajo el contrato. No es necesario imprimir dentro de retirar para que exista una respuesta: devolver un dato y mostrar un mensaje son tareas distintas.

La responsabilidad tiene dos caras: saber cierta información y saber realizar una acción. El depósito sabe su capacidad y cantidad; por eso puede decidir si una carga cabe. El cliente sabe qué operación desea realizar. Si el cliente obtiene todos los datos y reproduce la decisión, empieza a apropiarse de una regla que el depósito debería proteger.

### Una colaboración pequeña

Un puesto de control recibe una solicitud de cargar dos unidades. Le pide al depósito que cargue; éste valida y devuelve un resultado. El puesto informa éxito o fallo al usuario. Cada participante tiene una razón comprensible para intervenir. No necesitamos un objeto que «haga todo» ni una clase por cada verbo de la consigna.

Para repartir responsabilidades, escribí tarjetas con nombre de clase, responsabilidades y colaboradores. Una tarjeta del depósito puede decir «conocer cantidad y capacidad; aceptar o rechazar movimientos» y no listar detalles de todos sus bucles. Si necesita conocer colores de pantalla para validar una carga, hay una dependencia que merece revisión.

### Contratos y respuestas de fallo

No todos los pedidos tienen que terminar con una modificación. Rechazar una operación inválida es comportamiento válido si está especificado. En nuestra guía, cargar fuera de rango devuelve false y conserva el estado; construir un objeto inicialmente inválido genera una excepción. Esta distinción es una decisión del ejemplo, no una obligación universal del paradigma.

Los nombres deben ayudar a anticipar efectos: `getCantidad` consulta, `retirar` intenta modificar. Un getter que vacía el depósito sorprendería a sus clientes. Un método llamado `procesar` que hace cinco tareas sin relación requiere una descripción más precisa antes de poder evaluarlo.

1. **Con ayuda:** identificá receptor y argumento en `catalogo.buscar("L1")`. **Respuesta:** catálogo es receptor y el código de texto es argumento.
2. **Con pista:** ¿quién debería validar que una retirada no supere la cantidad? **Respuesta:** el objeto que mantiene y protege esa cantidad.
3. **Autónomo:** justificá separar impresión y cálculo. **Respuesta:** permite probar reglas sin depender de una pantalla y reutilizar el mismo comportamiento en clientes distintos.

### Hoja de consulta del capítulo 4

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Mensaje / método | Pedido a un receptor / implementación de una operación. | Precisar argumentos, resultado y efectos. |
| Colaboración | Pedir una responsabilidad sin invadir todos sus detalles internos. | No convertir a un cliente en dueño de reglas ajenas. |


## Hoja de consulta de la unidad 1: TAD, abstracción y responsabilidades

Reconstruí las explicaciones de los capítulos 1–4 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Responsabilidad | Un objeto mantiene información y ofrece operaciones coherentes. | Asignar las reglas a quien conoce y protege sus datos. |
| TAD | Especificar operaciones y propiedades sin imponer representación. | Separar significado observable de arreglo, lista o colección interna. |
| Identidad / igualdad | Mismo objeto / equivalencia según criterio de dominio. | Objetos de igual estado pueden ser instancias diferentes. |
| Mensaje / método | Pedido a un receptor / implementación de una operación. | Precisar argumentos, resultado y efectos. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 5. Clases e instancias: escribir la primera definición en Java

Una clase describe una familia de objetos: qué estado tienen sus instancias, qué operaciones ofrecen y cómo se construyen. Una instancia es un objeto concreto de esa clase. La clase no es una variable que guarda automáticamente todos los objetos del sistema; cada creación y referencia debe tener un significado en el programa.

### Leer una clase completa

```java
// Ejemplo original de la guia de Matias Gabriel Cersosimo.
public class Deposito {
    private final int capacidad;
    private int cantidad;

    public Deposito(int capacidad) {
        this(capacidad, 0);
    }

    public Deposito(int capacidad, int cantidadInicial) {
        if (capacidad <= 0 || cantidadInicial < 0 || cantidadInicial > capacidad) {
            throw new IllegalArgumentException("Estado inicial invalido");
        }
        this.capacidad = capacidad;
        this.cantidad = cantidadInicial;
    }

    public boolean cargar(int unidades) {
        if (unidades <= 0 || unidades > capacidad - cantidad) return false;
        cantidad += unidades;
        return true;
    }

    public boolean retirar(int unidades) {
        if (unidades <= 0 || unidades > cantidad) return false;
        cantidad -= unidades;
        return true;
    }

    public int getCantidad() { return cantidad; }
    public int getCapacidad() { return capacidad; }
    public boolean estaVacio() { return cantidad == 0; }
}
```

El archivo se llama `Deposito.java` porque contiene esa clase pública. `private` limita el acceso directo a sus campos. `int` representa cantidades enteras; `boolean` expresa éxito o fallo. Las llaves delimitan bloques. Los métodos públicos constituyen parte del protocolo que usarán los clientes.

Para crear un depósito vacío de capacidad diez escribimos `Deposito d = new Deposito(10);`. El tipo de la variable aparece primero; `new` crea el objeto y activa un constructor compatible. La clase ofrece también un constructor con cantidad inicial. Leeremos su encadenamiento en el capítulo 13; por ahora identificá que ambas formas dejan un objeto válido.

### JavaLike y Java ejecutable

La cátedra usa JavaLike como notación simplificada y BlueJ para trabajar con Java. JavaLike no es un compilador independiente que debamos instalar. Sus convenciones pueden omitir importaciones o simplificar fechas y colecciones. Los bloques marcados como Java en esta guía corresponden a los archivos descargables que compilamos; las descripciones conceptuales no se presentan como otra sintaxis ejecutable.

Comparado con C++, aquí se escribe `boolean`, `String` con mayúscula y acceso mediante punto sobre referencias. No se agrega `delete` al final ni `#include` al principio. Las importaciones Java y el nombre del archivo responden a otras reglas. Trasladar símbolos por parecido sin revisar el lenguaje produce errores innecesarios.

### Primer experimento en BlueJ

En un proyecto, incorporá el archivo, compilalo y creá una instancia invocando el constructor con capacidad diez. Podés enviar `cargar(7)`, consultar cantidad y probar retirar dos. También podés usar el laboratorio por terminal de esta guía; no depende de una interfaz gráfica. Los comandos y el código se verifican con JDK; no se afirma haber automatizado aquí una sesión de BlueJ.

1. **Con ayuda:** creá dos depósitos y cargá sólo uno. **Respuesta:** cada instancia conserva su propio campo cantidad.
2. **Con pista:** ¿qué significa `new Deposito(10,3)`? **Respuesta:** construir un objeto con capacidad diez y cantidad inicial tres, respetando su validación.
3. **Autónomo:** explicá por qué el archivo de una clase y un objeto no son lo mismo. **Respuesta:** el archivo contiene una definición; durante la ejecución pueden existir cero, una o muchas instancias que la utilizan.

### Hoja de consulta del capítulo 5

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Clase / instancia | Definición de una familia / objeto concreto. | new crea instancias; una asignación de referencia no las duplica. |
| JavaLike / Java | Notación simplificada del aula / lenguaje compilable del laboratorio. | No trasladar literalmente fechas o sintaxis aproximada sin contrastar. |

## 6. Encapsulamiento e invariantes: evitar estados imposibles

Encapsular reúne estado y comportamiento bajo una frontera. Ocultar información limita lo que necesitan conocer los clientes. Los campos privados son una herramienta, pero no bastan: una clase puede declarar todo privado y devolver una referencia que permita modificarlo libremente desde afuera.

### La regla del depósito

El depósito debe cumplir siempre `0 <= cantidad <= capacidad`, con capacidad positiva. El constructor verifica el estado inicial. `cargar` rechaza cantidades no positivas y cargas que excedan el espacio disponible. `retirar` rechaza cantidades no positivas o superiores a la cantidad actual. Cada operación válida transforma un estado correcto en otro correcto.

Fijate en `unidades > capacidad - cantidad`. Preguntamos cuánto espacio queda antes de sumar. Así evitamos depender de que una suma potencialmente excesiva ocurra primero para descubrir después que no cabe. El contrato y la forma de calcular también ayudan a prevenir errores de rango.

### Una traza de éxitos y fallos

Partimos de capacidad diez y cantidad siete. Cargar tres tiene éxito y deja diez. Cargar uno falla y conserva diez. Retirar cuatro deja seis. Retirar cero falla y conserva seis. Un fallo no debería consumir capacidad ni alterar parcialmente la cantidad antes de responder.

Si ofreciéramos `setCantidad(int n)` sin una regla de validación, un cliente podría saltar las operaciones y dejar un valor incoherente. No todo atributo necesita setter. La interfaz debe expresar acciones permitidas del dominio, no exponer automáticamente cada variable.

### Salidas que también deben protegerse

Un objeto con una colección privada puede perder encapsulamiento si entrega esa misma colección mediante un getter. El cliente podría agregar datos sin pasar por validaciones. Una alternativa es devolver una copia o una vista controlada. Hay que aclarar si la copia conserva referencias a los mismos elementos: copiar el contenedor no siempre copia profundamente todos sus objetos.

La clase Libro del laboratorio es inmutable respecto de sus campos: una vez construido, no ofrece setters. Esto hace más fácil compartir sus referencias en una copia de catálogo. Una clase mutable requeriría analizar efectos que pueden propagarse a través de esas referencias.

### Cómo justificar la protección

Escribí la regla, enumerá todas las operaciones que pueden cambiarla y verificá cada camino de salida. Si existe una operación pública que altera el estado sin respetarla, la regla no es un invariante real de la clase. Los tests deben incluir rechazo y comprobar que el estado anterior siga siendo observable.

1. **Con ayuda:** ¿es válido cantidad once con capacidad diez? **Respuesta:** no bajo este modelo, incluso si se consiguió mediante un setter público.
2. **Con pista:** ¿`final` sobre una referencia a colección impide agregar elementos? **Respuesta:** no; impide reasignar esa referencia, no vuelve inmutable todo el objeto apuntado.
3. **Autónomo:** proponé una operación de traslado entre depósitos. **Respuesta orientativa:** primero deben definirse condiciones y coordinación de ambos cambios, evitando retirar de uno y fallar al cargar el otro sin una política de recuperación.

### Hoja de consulta del capítulo 6

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Invariante | 0 ≤ cantidad ≤ capacidad, con capacidad > 0. | Construcción y operaciones deben conservarlo. |
| Encapsulamiento | No basta con campos privados si se entrega estado mutable sin control. | Revisar salidas, colecciones y referencias compartidas. |

## 7. Métodos, parámetros y efectos: saber qué cambia

Un método tiene nombre, parámetros y, salvo constructores, una declaración de resultado o `void`. Leer su firma es empezar a conocer el protocolo; comprender su contrato requiere además saber qué supone y qué modifica. La firma de `retirar(int)` no dice por sí sola si acepta negativos o cómo informa la falta de cantidad.

### Consulta y comando

`getCantidad()` devuelve información sin cambiar el depósito. `cargar(3)` intenta modificar y devuelve una señal. Esta separación ayuda a razonar, aunque un comando también pueda devolver un resultado útil. No afirmamos que toda operación real deba clasificarse sin matices: usamos la distinción para hacer visibles sus efectos.

Los argumentos se evalúan en el llamador y se pasan a parámetros del método. Sus nombres pueden ser distintos. Un parámetro local deja de estar disponible al terminar la activación; eso no significa que desaparezcan los objetos que siguen siendo referenciados desde otras partes.

### Java pasa valores

Con un entero se copia el valor entero. Con una referencia se copia el valor de la referencia. El método puede usar esa copia para llegar al mismo objeto y modificarlo mediante operaciones permitidas. Reasignar el parámetro a otro objeto no reemplaza la variable del llamador. Es la diferencia entre modificar un colaborador y cambiar una referencia local.

Ejemplo conceptual: una función recibe un depósito y ejecuta `d.cargar(2)`. El objeto puede quedar modificado. Si luego hace `d = new Deposito(20)`, sólo la copia local de la referencia cambia. No es un pasaje de parámetros por referencia como `T&` de C++.

### Valores de retorno

Un `return` entrega un resultado y termina esa ejecución del método. Imprimir true no equivale a retornarlo. Si el cliente necesita tomar una decisión, una salida por pantalla no le proporciona automáticamente un booleano. Por eso nuestras reglas de dominio no se mezclan con mensajes de interfaz.

Una devolución de objeto puede compartir una referencia. Si `buscar` retorna un Libro del catálogo, no construye por esa razón una copia independiente. Debemos preguntar qué mutaciones permite ese Libro y qué garantías ofrece la operación. En este laboratorio Libro es inmutable, decisión que simplifica la colaboración.

1. **Con ayuda:** ¿qué permite la respuesta de `retirar`? **Respuesta:** decidir si se cumplió, sin deducirlo de un texto impreso.
2. **Con pista:** un método reasigna su parámetro entero a cien. ¿Cambia el entero externo? **Respuesta:** no; cambia la copia del valor.
3. **Autónomo:** distinguí los efectos de enviar un mensaje al objeto recibido y reasignar el parámetro. **Respuesta:** el primero puede cambiar el objeto compartido; el segundo cambia sólo qué referencia contiene el parámetro local.

### Hoja de consulta del capítulo 7

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Parámetros | Java pasa valores; una referencia también se copia como valor. | Modificar objeto y reasignar el parámetro no son el mismo efecto. |
| Consulta / comando | Obtener información / solicitar un cambio. | Retornar y mostrar por pantalla son tareas diferentes. |

## 8. UML inicial: dibujar clases y objetos con significado

UML permite comunicar decisiones de un modelo mediante una notación compartida. No ejecuta automáticamente todas las reglas del sistema ni reemplaza el razonamiento. Un diagrama es útil cuando permite responder preguntas que el lector necesita formular: qué entidades hay, qué operaciones ofrecen y cómo se relacionan.

### La caja de una clase

Una representación habitual divide la caja en nombre, atributos y operaciones. Podemos escribir `Deposito`, después `- cantidad: int` y `- capacidad: int`, y luego `+ cargar(unidades: int): boolean`. Los signos menos y más indican visibilidad privada y pública en esta notación. No son operaciones aritméticas sobre el nombre.

Para una clase abstracta puede usarse nombre en cursiva o una indicación explícita. Un detalle que no aparece no necesariamente se niega: un diagrama puede seleccionar sólo aspectos pertinentes. Pero no debe omitir justamente las condiciones que necesitamos discutir sin aclarar el alcance de la vista.

### Clase y objeto no muestran la misma información

Un diagrama de clases presenta tipos y relaciones posibles. Un diagrama de objetos muestra instancias y vínculos de una situación concreta. `d1:Deposito` con cantidad siete y `d2:Deposito` con cantidad tres representa dos participantes de un estado, no dos definiciones distintas de clase.

Si hay dos referencias al mismo objeto, dibujamos dos vínculos hacia una instancia, en lugar de duplicar el objeto para que «quepa» en el dibujo. Así el esquema ayuda a anticipar alias y efectos compartidos.

### Asociaciones y generalización

Una asociación expresa vínculos entre instancias de clases; por ejemplo, un préstamo se relaciona con un libro. Una generalización relaciona un tipo especializado con otro general: Rectangulo especializa Figura. En la notación, la punta triangular vacía de generalización señala el tipo general. No se dibuja hacia la subclase por el simple sentido de lectura de arriba abajo.

No toda relación «tiene un» exige un rombo de composición. Primero hay que entender propiedad, exclusividad y vida de las partes. Esa distinción se desarrolla en el capítulo 34 junto con multiplicidades. Aquí basta reconocer que relación, herencia y pertenencia no son sinónimos.

### Comprobar el dibujo con un escenario

Tomá la llamada `d1.retirar(2)` y preguntá si la operación aparece en el protocolo y si el estado posterior respeta las reglas. Si el dibujo promete una responsabilidad que ningún objeto puede cumplir con la información disponible, falta una decisión de diseño. Dibujar después de programar sin contrastar nada puede ocultar ese problema.

1. **Con ayuda:** interpretá `+ getCantidad(): int`. **Respuesta:** operación pública sin argumentos que devuelve un entero.
2. **Con pista:** ¿una caja por cada depósito representa necesariamente clases? **Respuesta:** no; si muestra instancias concretas corresponde a una vista de objetos.
3. **Autónomo:** explicá qué debería permitir reconstruir un diagrama inicial de catálogo. **Respuesta:** tipos de objetos, responsabilidades y vínculos relevantes; no necesariamente cada variable auxiliar de todos los métodos.

![Vista parcial del protocolo y estado de Deposito.](/planos-de-estudio/images/ipoo/clase.svg)

*Diagrama original. Vista parcial del protocolo y estado de Deposito.*

### Hoja de consulta del capítulo 8

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Vista UML | Clase: tipos y protocolos; objetos: instancias y vínculos concretos. | Definir qué información selecciona cada diagrama. |
| Generalización | El triángulo vacío apunta al tipo general. | No confundir con asociación o composición. |


## Hoja de consulta de la unidad 2: Objetos, clases, métodos y UML inicial

Reconstruí las explicaciones de los capítulos 5–8 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Clase / instancia | Definición de una familia / objeto concreto. | new crea instancias; una asignación de referencia no las duplica. |
| Invariante | 0 ≤ cantidad ≤ capacidad, con capacidad > 0. | Construcción y operaciones deben conservarlo. |
| Parámetros | Java pasa valores; una referencia también se copia como valor. | Modificar objeto y reasignar el parámetro no son el mismo efecto. |
| Vista UML | Clase: tipos y protocolos; objetos: instancias y vínculos concretos. | Definir qué información selecciona cada diagrama. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 9. Herencia: especializar un contrato, no sólo reutilizar líneas

Una jerarquía permite que una clase especializada responda al protocolo de un tipo más general. Decir que Rectangulo es una Figura describe una relación de tipos. No significa que toda coincidencia entre atributos justifique herencia. Dos objetos pueden compartir datos y tener contratos incompatibles.

### Construir una jerarquía pequeña

Nuestra clase Figura promete que sus objetos pueden calcular un área. Rectangulo aporta base y altura; Circulo, radio. Un cliente que recibe una Figura puede pedir `area()` sin preguntar cuál de esas clases concretas tiene. La relación resulta útil porque cada especialización satisface el pedido con un significado compatible.

```java
public class Rectangulo extends Figura {
    private final double base;
    private final double altura;

    public Rectangulo(double base, double altura) {
        super("Rectangulo");
        validarMedida(base);
        validarMedida(altura);
        this.base = base;
        this.altura = altura;
    }

    @Override
    public double area() { return base * altura; }
}
```

`extends Figura` declara la relación. El constructor llama a la inicialización de su parte general y después establece medidas. `@Override` expresa la intención de redefinir una operación heredada; el compilador puede detectar si escribimos una firma que no corresponde. No crea por sí solo el comportamiento: el cuerpo de area contiene la implementación.

### Sustitución como criterio de diseño

Si un cliente trabaja con el contrato general, debería seguir funcionando al recibir un objeto especializado válido. Una subclase que responde a una operación obligatoria diciendo siempre «no soportada» puede revelar que la generalización no era adecuada. Es más útil comprobar escenarios que repetir únicamente una frase del mundo real.

El ejemplo clásico del cuadrado y el rectángulo muestra el límite de una intuición geométrica cuando el contrato incluye cambios independientes de base y altura. Aunque un cuadrado sea un rectángulo en matemática, una clase mutable que promete modificar esas medidas independientemente no admite cualquier especialización sin revisar sus garantías. En nuestra Figura sólo exigimos área; ese contrato es distinto.

### Estado privado y comportamiento heredado

Los campos privados del tipo general no se vuelven públicamente accesibles porque exista herencia. Una subclase puede usar operaciones disponibles según visibilidad para colaborar con su parte general. Conviene proteger invariantes, en lugar de abrir todos los atributos como `protected` por comodidad.

No hace falta inventar diez niveles de clases para un problema de dos figuras. Una jerarquía también agrega relaciones que mantener. La pregunta correcta es qué variación de comportamiento necesitamos y qué contratos comparten sus alternativas.

1. **Con ayuda:** ¿qué pedido comparten círculo y rectángulo? **Respuesta:** calcular área bajo el contrato Figura.
2. **Con pista:** ¿compartir un campo nombre basta para heredar? **Respuesta:** no; la relación debe justificarse por responsabilidades y sustitución, no sólo por datos repetidos.
3. **Autónomo:** proponé una prueba de un cliente general. **Respuesta:** darle distintas figuras válidas, pedir área por el tipo Figura y contrastar cada resultado sin añadir decisiones por clase concreta al cliente.

![La generalización apunta a Figura; los subtipos aportan sus cálculos.](/planos-de-estudio/images/ipoo/herencia.svg)

*Diagrama original. La generalización apunta a Figura; los subtipos aportan sus cálculos.*

### Hoja de consulta del capítulo 9

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Herencia | Especialización de un contrato. | Justificar sustitución, no sólo reutilización de campos. |
| Área | Rectángulo: base·altura; círculo: π·radio². | Medidas positivas, unidad coherente y resultados representables. |

## 10. Clases abstractas y Template Method

Una clase abstracta puede expresar una responsabilidad común sin definir por completo cómo se cumple. No se instancia directamente, pero puede tener campos, constructor y métodos concretos. Un método abstracto declara una operación que las clases concretas deben implementar, salvo que sigan siendo abstractas.

### Del contrato a una implementación variable

```java
public abstract class Figura {
    private final String nombre;

    protected Figura(String nombre) { this.nombre = nombre; }
    public abstract double area();

    public final String describir() {
        return nombre + ": area=" + area();
    }

    protected static void validarMedida(double valor) {
        if (!Double.isFinite(valor) || valor <= 0) {
            throw new IllegalArgumentException("Medida invalida");
        }
    }
}
```

`area` es abstracto: no elegimos un cálculo universal para todas las figuras. `describir` sí tiene cuerpo. Construye una descripción con el nombre y el resultado de pedir `area()` al objeto actual. Cuando el objeto es un Rectangulo, se ejecuta su cálculo de área, aunque el pedido se haya escrito dentro de Figura.

### Qué hace un método plantilla

Template Method fija un esqueleto de una operación y delega pasos variables a operaciones redefinibles. Aquí el esqueleto es armar nombre, etiqueta y área; el paso variable es calcular esa área. Un caso más grande podría fijar validar, calcular y presentar, dejando un cálculo específico a subclases.

Marcamos `describir` como `final` para impedir que esta versión del esqueleto sea redefinida. No significa que cualquier método plantilla de todos los sistemas deba declararse final: es una decisión para proteger la secuencia de este ejemplo. La palabra template del patrón tampoco se refiere a las plantillas genéricas de C++.

### Una traza que muestra quién recibe

Creamos un Rectangulo de tres por cuatro y lo guardamos en una variable Figura. Al pedir describir, entra al método concreto de Figura. Allí el receptor sigue siendo el mismo rectángulo. Cuando se evalúa area, se usa el método redefinido y devuelve doce. La descripción resultante es `Rectangulo: area=12.0`.

Si intentáramos `new Figura(...)`, faltaría una clase concreta instanciable. Si una subclase concreta omite implementar area, el compilador impide construir esa definición como si estuviera completa. Esas restricciones ayudan a expresar decisiones que antes sólo tendríamos como comentarios.

### Qué no resuelve el patrón

No toda repetición merece una jerarquía. Si el algoritmo cambia continuamente en varios pasos independientes, una colaboración por composición puede ser más flexible. También conviene evitar que un constructor llame a métodos redefinibles que dependen de campos de la subclase todavía no inicializados. El ejemplo no hace esa llamada durante la construcción.

1. **Con ayuda:** identificá parte fija y variable. **Respuesta:** describir fija la forma general; area aporta el cálculo especializado.
2. **Con pista:** ¿un método abstracto lleva un cuerpo inventado que devuelve cero? **Respuesta:** no en esta declaración; devolver cero sería una implementación concreta y podría ocultar una responsabilidad sin resolver.
3. **Autónomo:** diseñá un método plantilla para un informe. **Respuesta orientativa:** fijar obtener datos, calcular y formar salida; precisar qué paso varía y qué garantías conserva cada alternativa.

### Hoja de consulta del capítulo 10

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Abstracta / concreta | Contrato parcialmente implementado / clase instanciable completa. | Una abstracta puede tener constructor y métodos con cuerpo. |
| Template Method | Esqueleto fijo que delega pasos variables. | No equivale a templates de C++; justificar qué parte no cambia. |

## 11. Herencia, composición e interfaces

La herencia relaciona tipos; la composición organiza colaboradores. Si un préstamo conoce un libro, no se convierte por eso en un subtipo de Libro. Necesita una referencia a un objeto con el que colabora. Elegir correctamente evita que responsabilidades sin relación queden atrapadas en una jerarquía difícil de modificar.

### Comparar dos diseños

Una clase ControlDeSala podría heredar de Deposito para aprovechar un contador de cantidad. Eso obligaría a interpretar al control como depósito y expondría operaciones que quizás no tienen sentido. Otra opción es que el control tenga un colaborador que administre capacidad. En ese diseño solicita operaciones sin presentarse como una especialización del colaborador.

La delegación consiste en pedir a otro objeto que cumpla parte de una tarea. El delegador conserva su responsabilidad frente al cliente, pero no implementa necesariamente todos los detalles. El adaptador que estudiaremos contiene una foto y delega en ella: no necesita ser una subclase de esa implementación antigua.

### Qué aporta una interfaz Java

Una interfaz describe un protocolo que varios tipos pueden implementar. Una variable del tipo interfaz permite recibir colaboradores que satisfagan ese protocolo. No se debe confundir una interfaz Java con la pantalla de un programa: la palabra describe aquí un contrato entre componentes de código.

Java permite que una clase extienda una sola clase y que implemente varias interfaces. Eso no equivale a heredar simultáneamente el estado de varias superclases. La herencia múltiple de clases estudiada en el programa puede producir ambigüedades, como dos ancestros que aportan versiones incompatibles de una operación. La traducción concreta depende del lenguaje.

### Un criterio de decisión

Preguntá si cada instancia especializada debe ser utilizable en el lugar del tipo general. Si la razón principal es «quiero copiar este método», revisá composición. Preguntá también qué variación esperamos: reemplazar un colaborador en ejecución puede ser más sencillo que cambiar una jerarquía fija.

Composición no significa crear automáticamente un rombo negro en UML. Una referencia de Java demuestra que un objeto conoce a otro; la semántica UML de composición agrega condiciones de propiedad de las partes. Mantendremos esa diferencia al modelar relaciones.

### Probar una alternativa

Un cliente de Dibujable sólo necesita `dibujar()`. Puede colaborar con una figura propia o un adaptador de una biblioteca distinta. Su código no tiene por qué heredar de cada implementación para aprovecharla. El protocolo compartido permite diversidad y la composición permite conectar la capacidad existente.

1. **Con ayuda:** ¿un catálogo es un libro? **Respuesta:** no; administra libros y necesita una relación con ellos.
2. **Con pista:** ¿implements dos interfaces crea dos copias de campos heredados? **Respuesta:** no; no representa herencia múltiple de estado de clases.
3. **Autónomo:** justificá composición para un objeto que cambia de política de cálculo. **Respuesta:** puede delegar en un colaborador reemplazable con un protocolo estable, sin exigir una nueva subclase para cada combinación de variaciones.

### Hoja de consulta del capítulo 11

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Composición de colaboradores | Un objeto conoce y utiliza otros sin ser subtipo de ellos. | Delegación no exige herencia. |
| Interfaces Java | Protocolos que una clase puede implementar. | Implementar varias no es heredar estado de varias superclases. |

## 12. Sobrecarga y redefinición: dos decisiones diferentes

La sobrecarga ofrece el mismo nombre con distintas listas de parámetros. La redefinición aporta una implementación especializada de una operación heredada compatible. Confundirlas produce errores al predecir qué método se ejecuta, especialmente cuando las variables tienen un tipo general y los objetos pertenecen a clases concretas.

### Sobrecarga con un contador

```java
public class Contador {
    private int valor;
    private static int creados = 0;

    public Contador() { this(0); }
    public Contador(int inicial) { valor = inicial; creados++; }
    public void sumar() { sumar(1); }
    public void sumar(int paso) { valor = Math.addExact(valor, paso); }
    public int getValor() { return valor; }
    public static int getCreados() { return creados; }
}
```

`sumar()` y `sumar(int)` son operaciones sobrecargadas. La primera reutiliza la segunda enviándole uno. No se distinguen sólo por lo que retornan: cambiar únicamente el tipo de retorno no basta para definir una sobrecarga Java válida. `sumar(3)` y `sumar()` expresan pedidos diferentes bajo un nombre relacionado.

En esta implementación, `Math.addExact` detecta un resultado fuera del rango entero y genera una excepción en lugar de aceptar silenciosamente una cuenta desbordada. Para los ejercicios iniciales usamos valores pequeños. La regla debe entenderse antes de atribuir a un error aritmético un cambio de paradigma.

### Redefinición en una jerarquía

Circulo y Rectangulo redefinen `area()` de Figura. El cliente puede pedir esa operación a una Figura y obtener una respuesta especializada según el objeto real. No agrega un parámetro para seleccionar manualmente cuál figura tiene: la selección forma parte del mecanismo de despacho de métodos de instancia.

### El tipo de la variable también importa

La elección entre sobrecargas se determina usando la información de tipos disponible en la llamada. No recorre mágicamente todos los tipos reales de los argumentos en ejecución para elegir otra firma. Después, una implementación de la firma seleccionada puede resolverse dinámicamente por el receptor cuando corresponde redefinición.

Una manera de estudiar es hacerlo en dos pasos: primero escribir qué firma se selecciona; luego buscar qué implementación de esa operación recibe el objeto concreto. En el capítulo 30 construiremos dos pedidos encadenados para obtener comportamiento según dos participantes, sin atribuir esa capacidad a una sobrecarga aislada.

### Comprobar resultados

Un contador que empieza en cero, recibe sumar y después sumar tres, termina en cuatro. Otro contador que empieza en cinco mantiene cinco si no recibe pedidos. La variable estática creados, en cambio, registra construcciones de la clase y se comparte; se desarrolla en el capítulo 15 para no confundirla con el estado individual.

1. **Con ayuda:** ¿qué operación usa sumar sin argumentos? **Respuesta:** delega en sumar con argumento uno.
2. **Con pista:** ¿dos métodos de igual nombre y parámetros, pero distinto retorno, forman una sobrecarga válida? **Respuesta:** no por esa diferencia sola.
3. **Autónomo:** diferenciá la búsqueda de una firma sobrecargada y el despacho de una redefinición. **Respuesta:** la primera depende de la llamada y sus tipos estáticos; el segundo selecciona la implementación aplicable al receptor real de una operación de instancia.

### Hoja de consulta del capítulo 12

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Sobrecarga | Mismo nombre con listas de parámetros diferentes. | Cambiar sólo retorno no basta para sobrecargar. |
| Redefinición | Implementación especializada de operación heredada compatible. | Distinguir selección de firma y despacho por receptor. |


## Hoja de consulta de la unidad 3: Herencia, abstracción y composición

Reconstruí las explicaciones de los capítulos 9–12 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Herencia | Especialización de un contrato. | Justificar sustitución, no sólo reutilización de campos. |
| Abstracta / concreta | Contrato parcialmente implementado / clase instanciable completa. | Una abstracta puede tener constructor y métodos con cuerpo. |
| Composición de colaboradores | Un objeto conoce y utiliza otros sin ser subtipo de ellos. | Delegación no exige herencia. |
| Sobrecarga | Mismo nombre con listas de parámetros diferentes. | Cambiar sólo retorno no basta para sobrecargar. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 13. Constructores, this y super: dejar el objeto listo para colaborar

Un constructor participa en la creación e inicialización de una instancia. No es un método ordinario con un nombre parecido: no declara tipo de retorno y sus reglas de invocación son particulares. Su responsabilidad principal es establecer un objeto que cumpla el contrato inicial.

### Encadenar sin duplicar reglas

Deposito ofrece un constructor de capacidad y otro que recibe además cantidad inicial. El primero ejecuta `this(capacidad,0)`. Así concentra la validación en el segundo, en lugar de mantener dos copias que pueden divergir. La llamada a otro constructor debe ocupar el lugar que exige el lenguaje; en los ejemplos compatibles con Java 11 es la primera instrucción del constructor.

Dentro del constructor completo, `this.capacidad` identifica el campo del objeto actual y `capacidad` el parámetro. Es útil cuando los nombres coinciden. `this` no representa una segunda instancia ni una variable que podamos reasignar para transformar el objeto en otro.

### Inicializar la parte general

Rectangulo invoca `super("Rectangulo")` para construir la parte definida por Figura. Después valida y conserva sus medidas. `super` permite referirse a comportamiento de la superclase bajo las reglas de Java; no es un objeto separado que contenga otra identidad independiente del receptor actual.

Si una clase no declara constructores, ciertas condiciones permiten que el compilador provea uno sin argumentos. Eso no significa que cualquier clase que ya tiene un constructor con parámetros obtenga además un constructor vacío automáticamente. Si necesitás `new Deposito()`, tendría que existir un constructor compatible con un estado inicial definido; aquí no lo ofrecemos.

### Leer una traza de super

Imaginá A con un método `base()` que pide `this.valor()`, y B que redefine valor. Un pedido explícito a `super.base()` selecciona la implementación de base en la superclase, pero el receptor dentro de esa ejecución sigue siendo el objeto B. Si base envía `this.valor()`, puede ejecutarse la redefinición de B. `super` no desactiva globalmente el despacho dinámico de todas las llamadas internas.

```java
public final class Trazas {
    private Trazas() { }
    public static class Base {
        public int valor() { return 2; }
        public int calcular() { return this.valor() + 1; }
    }
    public static class Derivada extends Base {
        @Override public int valor() { return 7; }
        @Override public int calcular() { return 20; }
        public int desdeBase() { return super.calcular(); }
    }
    public static String etiqueta(Object dato) { return "objeto"; }
    public static String etiqueta(String dato) { return "texto"; }
}
```

En este ejemplo ejecutable, `new Trazas.Derivada().calcular()` devuelve veinte por la redefinición directa. `desdeBase()` selecciona el cuerpo calcular de Base, pero su pedido interno a valor llega a la implementación de Derivada: siete más uno da ocho. Las dos operaciones etiqueta ilustran otra cuestión: con una variable declarada Object que contiene un texto se selecciona la firma de Object; con una variable String se selecciona la firma de String. Escribí primero esas firmas y después seguí los receptores para no mezclar ambos mecanismos.

### Datos finales y validación

La capacidad se declara final porque no cambia después de construirse. La cantidad sí cambia mediante movimientos. Declarar un campo final no valida su valor: todavía hay que rechazar capacidad cero o una cantidad inicial excesiva. Es una restricción de reasignación, no una definición completa de dominio.

1. **Con ayuda:** ¿qué cantidad inicial usa `new Deposito(10)`? **Respuesta:** cero, por el encadenamiento del constructor.
2. **Con pista:** ¿un constructor lleva `void`? **Respuesta:** no; agregarlo crea otra declaración y deja de ser ese constructor.
3. **Autónomo:** explicá por qué evitar llamadas redefinibles desde un constructor puede ayudar. **Respuesta:** una implementación especializada podría depender de campos de la subclase que todavía no terminaron de inicializarse.

### Hoja de consulta del capítulo 13

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Constructor | Establece un objeto válido; no declara retorno. | Encadenar sin duplicar validaciones. |
| this / super | Receptor actual / acceso a comportamiento general bajo reglas del lenguaje. | super no crea otra identidad ni desactiva toda llamada dinámica interna. |

## 14. Referencias, null e igualdad

Una referencia permite llegar a un objeto; no contiene automáticamente una copia de todos sus campos. El valor `null` indica ausencia de referencia a un objeto. Enviar un mensaje de instancia a través de null no crea el objeto que falta: produce un error de acceso en ejecución.

### Decidir cómo representar ausencia

Catalogo.buscar devuelve un Libro encontrado o null si no existe. El llamador debe comprobar el resultado antes de pedir su título. También podrían diseñarse otras interfaces, pero no debemos mezclar una convención con otra sin avisar. Usar un libro vacío inventado como ausencia puede confundirse con un dato válido.

El constructor Libro rechaza referencias nulas y textos vacíos. El catálogo rechaza agregar null. Estas decisiones simplifican el resto de las operaciones: un recorrido correcto puede esperar que cada elemento sea un Libro válido. Validar al entrar evita distribuir comprobaciones repetidas por todos los clientes.

### Identidad frente a igualdad definida

`==` entre referencias comprueba si identifican el mismo objeto. `equals` puede implementar un criterio de igualdad de valor o de dominio. En nuestra clase Libro, ese criterio es el código. Dos instancias con el mismo código se consideran iguales aunque sus títulos difieran; el catálogo utiliza ese criterio para evitar duplicados.

```java
import java.util.Objects;

public final class Libro {
    private final String codigo;
    private final String titulo;

    public Libro(String codigo, String titulo) {
        this.codigo = Objects.requireNonNull(codigo);
        this.titulo = Objects.requireNonNull(titulo);
        if (codigo.trim().isEmpty() || titulo.trim().isEmpty()) {
            throw new IllegalArgumentException("Texto vacio");
        }
    }

    public String getCodigo() { return codigo; }
    public String getTitulo() { return titulo; }

    @Override
    public boolean equals(Object otro) {
        if (this == otro) return true;
        if (!(otro instanceof Libro)) return false;
        Libro libro = (Libro) otro;
        return codigo.equals(libro.codigo);
    }

    @Override
    public int hashCode() { return codigo.hashCode(); }
}
```

Si redefinimos equals, debemos conservar un hashCode coherente: objetos iguales deben producir el mismo código hash. Esto importa al usar colecciones basadas en hash. No afirmamos que objetos distintos deban tener hashes distintos; las colisiones son posibles y la colección necesita también comparar igualdad.

### Por qué el código es inmutable

Si la clave que define igualdad cambiara mientras el objeto está dentro de una colección hash, podría quedar ubicado según un valor anterior y volverse difícil de localizar correctamente. Mantener campos de identidad inmutables evita esa clase de incoherencia. Es una decisión de diseño de este modelo, no una obligación para todo atributo de cualquier clase.

### Evitar comparaciones de texto por accidente

Para comparar contenidos de String usamos el criterio de contenido correspondiente, normalmente equals. Que dos literales puedan compartir una representación en alguna ejecución no autoriza a usar `==` como comparación general de textos. Las pruebas deben incluir cadenas construidas en momentos diferentes, no sólo literales iguales del mismo archivo.

1. **Con ayuda:** dos libros nuevos tienen código L1. ¿Pueden cumplir equals sin cumplir `==`? **Respuesta:** sí; son instancias distintas con la misma clave del modelo.
2. **Con pista:** ¿null es un Libro sin título? **Respuesta:** no; es ausencia de referencia a un Libro.
3. **Autónomo:** justificá qué probarías en igualdad. **Respuesta:** reflexividad, simetría y coherencia para claves equivalentes, diferencia de identidades y hash igual para objetos considerados iguales.

### Hoja de consulta del capítulo 14

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| == / equals | Identidad de referencias / igualdad definida. | Para textos y entidades, elegir un criterio coherente. |
| hashCode | Objetos iguales deben tener igual hash. | No exige hashes diferentes para todo objeto distinto; evitar claves mutables. |

## 15. Miembros de instancia y de clase

Un campo de instancia corresponde a cada objeto. Un campo estático pertenece a la clase en el contexto de carga considerado y puede compartirse entre sus instancias. La distinción permite explicar por qué dos contadores tienen valores diferentes, pero pueden consultar la misma cantidad de objetos construidos.

### Una traza del contador

Tomamos el número de creados antes del experimento. Construimos un contador inicial cero y otro inicial cinco. Los campos valor son independientes. En cambio, ambos constructores incrementan el miembro estático creados. El incremento esperado respecto del punto inicial es dos; no suponemos que todo el entorno de pruebas empezó sin otros objetos.

Después de sumar cuatro al primero, el segundo conserva cinco. Consultar `Contador.getCreados()` usa el nombre de clase y hace visible que esa operación no depende de un receptor individual. Es una forma más clara de expresar la intención que invocar un método estático a través de una variable de instancia.

### Qué se cuenta realmente

El ejemplo cuenta construcciones, no instancias actualmente vivas. Que una referencia deje de usarse no decrementa automáticamente el campo. Tampoco debería enseñarse a confiar en el recolector para mantener una cuenta exacta de objetos vivos o recursos externos. El significado del contador debe coincidir con el evento que actualizamos.

### Operaciones estáticas

Un método estático no dispone de `this` como receptor de instancia. Puede trabajar con parámetros y miembros estáticos, y puede recibir referencias a objetos si necesita colaborar con ellos. Pero no convierte todos los datos de las instancias en globales ni accede sin más a sus campos individuales.

Un método estático con la misma firma que otro de una superclase se oculta según las reglas del lenguaje; no se estudia como la misma redefinición dinámica de métodos de instancia. En los ejemplos de polimorfismo usaremos operaciones de instancia para que la diferencia sea explícita.

### Constantes y estado compartido

Una constante como un límite fijo puede expresarse mediante `static final` si corresponde que exista como dato común. La combinación no vuelve automáticamente inmutable el contenido de cualquier objeto referenciado. Si el valor es una colección mutable, todavía hay que proteger sus operaciones y evitar accesos que violen sus reglas.

El estado global mutable puede acoplar pruebas y funcionalidades: cambiarlo en un lugar afecta otro. Antes de usar static como forma rápida de «acceder desde todas partes», conviene preguntar quién debería ser responsable y si un colaborador explícito resolvería mejor la necesidad.

1. **Con ayuda:** dos Contador tienen valores 2 y 7. ¿Es una contradicción? **Respuesta:** no; valor es de instancia.
2. **Con pista:** ¿creados mide cuántos objetos conservará el recolector? **Respuesta:** no; cuenta ejecuciones de construcción según el código.
3. **Autónomo:** explicá por qué una prueba toma un valor inicial antes de crear objetos. **Respuesta:** evita depender del orden de otras pruebas que ya pudieron usar el miembro compartido.

### Hoja de consulta del capítulo 15

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Instancia / static | Estado individual / miembro de clase en su contexto de carga. | Contar construcciones no mide automáticamente objetos vivos. |
| final | Restringe reasignación o redefinición según dónde se use. | Una referencia final no vuelve inmutable todo su contenido. |

## 16. Polimorfismo: un pedido, respuestas especializadas

El polimorfismo permite escribir un cliente contra un protocolo general y recibir comportamientos especializados de distintos objetos. No significa que un método acepte cualquier mensaje ni que los tipos desaparezcan. El cliente debe disponer de una operación válida en el contrato con el que trabaja.

### Una operación compartida

```java
public class Circulo extends Figura {
    private final double radio;

    public Circulo(double radio) {
        super("Circulo");
        validarMedida(radio);
        this.radio = radio;
    }

    @Override
    public double area() { return Math.PI * radio * radio; }
}
```

Podemos guardar un Rectangulo o un Circulo en una variable Figura. Al pedir area, el objeto real determina la implementación de esa operación redefinida. El cálculo del rectángulo tres por cuatro produce doce; el del círculo de radio dos, aproximadamente 12,56637. Los valores numéricos usan aproximación double y se comparan con tolerancia cuando corresponde.

### Una colección de figuras

Imaginá una colección con ambos objetos. Para calcular el área total podemos recorrer y sumar `figura.area()`. El cliente no necesita una cadena de condiciones que pregunte si cada elemento es círculo o rectángulo. Añadir otra figura que cumpla el contrato puede no exigir cambiar ese recorrido.

Esto no significa que se pueda sumar cualquier concepto llamado área sin revisar unidades y significado: el protocolo debe ser coherente. Las medidas del ejemplo comparten una unidad arbitraria y el resultado representa su cuadrado. Usamos valores pequeños y representables, no una garantía de aritmética exacta sobre todos los reales.

### Una traza de selección

Primero verificamos que el tipo declarado admite area. Después identificamos el tipo concreto del receptor en esa ejecución y buscamos su implementación aplicable. No seleccionamos la figura a partir del nombre de la variable ni de lo que imprime el constructor. Una referencia general conserva la posibilidad de llegar al mismo objeto especializado.

La operación describir de Figura demuestra que una llamada interna también puede aprovechar polimorfismo: el objeto sigue siendo el receptor cuando el método general pide area. No hace falta copiar el mismo esqueleto de descripción en cada subclase.

### Límites que conviene reconocer

El acceso a campos y los métodos estáticos no deben tratarse como si siguieran exactamente el mismo mecanismo. Las sobrecargas no se resuelven por todos los tipos reales de argumentos en ejecución. Los casts tampoco crean una capacidad que el objeto no tiene; un cast incorrecto puede fallar en lugar de transformar mágicamente la instancia.

1. **Con ayuda:** ¿qué área devuelve `Figura f = new Rectangulo(3,4)`? **Respuesta:** doce al pedir `f.area()`.
2. **Con pista:** ¿por qué el recorrido general no necesita preguntar por cada clase? **Respuesta:** todos sus elementos ofrecen la operación del protocolo general.
3. **Autónomo:** explicá cómo añadir Triangulo sin modificar la suma de áreas. **Respuesta:** implementar una especialización compatible con area y mantener el contrato; el cliente sigue enviando el mismo pedido.

### Hoja de consulta del capítulo 16

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Polimorfismo | El receptor concreto responde a un protocolo general. | El cliente no necesita condiciones por cada clase compatible. |
| Límites | No todos los campos y métodos estáticos siguen despacho de instancia. | Una conversión no inventa capacidades ausentes. |


## Hoja de consulta de la unidad 4: Construcción, instancias y polimorfismo

Reconstruí las explicaciones de los capítulos 13–16 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Constructor | Establece un objeto válido; no declara retorno. | Encadenar sin duplicar validaciones. |
| == / equals | Identidad de referencias / igualdad definida. | Para textos y entidades, elegir un criterio coherente. |
| Instancia / static | Estado individual / miembro de clase en su contexto de carga. | Contar construcciones no mide automáticamente objetos vivos. |
| Polimorfismo | El receptor concreto responde a un protocolo general. | El cliente no necesita condiciones por cada clase compatible. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 17. Colecciones: elegir por las operaciones que necesitamos

Una colección agrupa elementos y ofrece un protocolo para administrarlos. No equivale a una única representación interna. La elección depende de si importa el orden, si se admiten repetidos, si necesitamos localizar por clave y qué cambios haremos. Aprender nombres sin esas preguntas no permite elegir correctamente.

### Lista, conjunto y mapa

Una lista mantiene una secuencia y puede admitir repetidos. Un conjunto representa pertenencia sin duplicados según su criterio de igualdad. Un mapa relaciona claves con valores; agregar una nueva asociación para la misma clave puede reemplazar la anterior, según su operación. En Java, Map no es un subtipo de Collection aunque forme parte del marco de colecciones.

Un arreglo tiene longitud fija una vez creado. Vector administra una secuencia redimensionable y ofrece métodos como add, size y get. Su tamaño lógico no es lo mismo que su capacidad interna. Que se pueda ampliar no significa memoria infinita ni que cualquier modificación cueste lo mismo.

### El Vector del aula

La guía de JavaLike utiliza `Vector<T>`. El parámetro de tipo entre ángulos expresa qué elementos aceptamos. `Vector<Libro>` permite trabajar con libros sin convertir cada resultado desde Object. Para números se utiliza `Integer` como objeto envoltorio, no `Vector<int>`; el lenguaje ofrece conversiones automáticas en usos habituales que no debemos confundir con identidad entre objetos.

`add` incorpora, `size` consulta cantidad, `isEmpty` indica vacío y `contains` pregunta pertenencia según igualdad. Consultar firstElement o lastElement requiere que exista un elemento; no se obtiene uno inventado si está vacía. `clear` retira referencias del contenedor, sin ejecutar una liberación manual de cada objeto como delete de C++.

### Una sobrecarga que cambia el significado

En `Vector<Integer>`, `remove(1)` elimina por índice. `remove(Integer.valueOf(1))` solicita eliminar por valor de objeto. Si tenemos `[10,20,30]`, la primera elimina 20; no busca un elemento cuyo valor sea uno. La misma palabra no evita leer los tipos de parámetros.

### Conjuntos y frecuencias

Si recibimos los textos a, b, a, un conjunto de diferentes tendrá a y b. Un mapa de frecuencias puede asociar a con dos y b con uno. El orden de recorrido de una estructura hash no debe usarse como si garantizara el orden de entrada; si ese orden es necesario, elegimos una estructura o estrategia que lo conserve.

1. **Con ayuda:** ¿qué usarías para una lista de tareas con orden y títulos repetidos? **Respuesta:** una secuencia; los títulos pueden repetirse sin exigir igualdad de identidad de tareas.
2. **Con pista:** ¿qué diferencia hay entre cantidad de claves y suma de frecuencias? **Respuesta:** la primera cuenta categorías; la segunda, ocurrencias registradas.
3. **Autónomo:** justificá el contenedor de un directorio por código único. **Respuesta orientativa:** un mapa puede representar la asociación de código con entidad, pero hay que definir qué hacer cuando ya existe la clave y qué orden necesita la presentación.

### Hoja de consulta del capítulo 17

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Lista / conjunto / mapa | Secuencia / pertenencia sin duplicados / asociación clave-valor. | Map no es subtipo de Collection en Java. |
| Vector<Integer>.remove | remove(1) elimina índice; remove(Integer.valueOf(1)) solicita valor. | Leer la firma y los tipos, no sólo el nombre del mensaje. |

## 18. Iteración, filtrado y agregación

Un protocolo de iteración permite recorrer sin depender de todos los detalles internos del contenedor. La idea es pedir si hay otro elemento y obtenerlo. No se supone que cualquier colección tenga posiciones numéricas accesibles por índice.

### Recorrer con un propósito

En un `for-each`, una variable toma sucesivamente los elementos. Podemos consultar o acumular resultados. Para sumar un área total, inicializamos un acumulador y añadimos cada contribución una vez. Para contar coincidencias, incrementamos sólo si se cumple el criterio. Un promedio necesita además cantidad positiva; en vacío debemos definir otra respuesta.

### Modificar durante el recorrido

Eliminar directamente desde el contenedor mientras un recorrido usa otro mecanismo puede invalidar sus condiciones de trabajo. En nuestro caso utilizamos el iterador y su operación remove después de next, cuando la implementación lo admite. No decimos que todo iterador de cualquier colección permita eliminar: algunas implementaciones no soportan esa operación.

```java
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.Vector;

public final class Colecciones {
    private Colecciones() { }

    public static int quitarPares(Vector<Integer> datos) {
        int cantidad = 0;
        Iterator<Integer> iterador = datos.iterator();
        while (iterador.hasNext()) {
            int valor = iterador.next();
            if (valor % 2 == 0) {
                iterador.remove();
                cantidad++;
            }
        }
        return cantidad;
    }

    public static Set<String> diferentes(Vector<String> datos) {
        return new HashSet<String>(datos);
    }

    public static Map<String, Integer> frecuencias(Vector<String> datos) {
        Map<String, Integer> resultado = new HashMap<String, Integer>();
        for (String valor : datos) {
            resultado.put(valor, resultado.getOrDefault(valor, 0) + 1);
        }
        return resultado;
    }
}
```

La primera función elimina los pares de un Vector de enteros no nulos. El iterador visita y, ante una coincidencia, retira el último devuelto. Con `[2,2,3,4,5]` se eliminan tres y queda `[3,5]`; no se saltan los pares consecutivos. El contrato presupone que nadie modifica simultáneamente la colección mediante otro camino.

### Diferentes y frecuencias

La segunda función construye un conjunto con los elementos de entrada. La tercera construye un mapa. Para cada texto lee su frecuencia actual o cero y guarda una más. Con `[a,b,a]` termina con dos claves y frecuencia dos para a. El valor entero de un contador tiene rango finito; los ejemplos se mantienen dentro de él.

El resultado no es una copia profunda de todos los textos, pero String es inmutable. Para entidades mutables habría que analizar qué puede cambiar a través de referencias compartidas. Crear un contenedor nuevo no elimina esa pregunta.

### Casos de control

Probá vacío, un dato que se conserva, uno que se elimina, todos eliminados, ninguno eliminado y coincidencias consecutivas. Si recorrés por índices en una variante propia, explicá cómo cambia el índice después de una baja: adelantarlo sin cuidado puede saltar al elemento que acaba de ocupar la posición.

1. **Con ayuda:** filtrá pares de `[2,4,6]`. **Respuesta:** tres bajas, colección vacía y ningún acceso posterior a un elemento inexistente.
2. **Con pista:** ¿el mapa de frecuencias debe crear un objeto nuevo para cada ocurrencia de una clave? **Respuesta:** actualiza la asociación de esa clave; el contador agregado representa varias ocurrencias.
3. **Autónomo:** proponé una forma de calcular promedio sin dividir por cero. **Respuesta:** acumular suma y cantidad, comprobar cantidad positiva y sólo entonces dividir; si no hay elementos, informar ausencia con un contrato explícito.

### Hoja de consulta del capítulo 18

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Iteración | Recorrer mediante un protocolo, sin exigir índices. | Si se elimina, usar la operación admitida del iterador y su contrato. |
| Agregación | Contar, sumar o registrar frecuencias según la pregunta. | En promedio o porcentaje comprobar denominador positivo. |

## 19. Colecciones, igualdad y protección del catálogo

Una colección no conoce por sí sola las reglas de identidad de nuestro dominio. Contains o remove pueden usar equals, pero decidir qué significa que dos libros sean el mismo dato relevante corresponde al diseño. Una implementación incorrecta de igualdad puede permitir duplicados o retirar un objeto inesperado.

### Un catálogo con código único

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Vector;

public class Catalogo {
    private final Vector<Libro> libros = new Vector<Libro>();

    public boolean agregar(Libro libro) {
        Objects.requireNonNull(libro);
        if (libros.contains(libro)) return false;
        libros.add(libro);
        return true;
    }

    public Libro buscar(String codigo) {
        Objects.requireNonNull(codigo);
        for (Libro libro : libros) {
            if (libro.getCodigo().equals(codigo)) return libro;
        }
        return null;
    }

    public int cantidad() { return libros.size(); }
    public boolean quitar(Libro libro) { return libros.remove(libro); }

    public List<Libro> listar() {
        return Collections.unmodifiableList(new ArrayList<Libro>(libros));
    }
}
```

Agregar rechaza null, comprueba pertenencia y sólo añade si no hay un libro equivalente. Como Libro compara por código, dos instancias diferentes con código L1 no se agregan ambas. Esto impone una regla del ejemplo: un código identifica una entrada. Un sistema que distingue ejemplares físicos de una misma obra necesitaría otra clave o clases diferentes.

Buscar recorre y compara el código. Si no encuentra, devuelve null. Quitar recibe un Libro y utiliza el criterio de igualdad, por lo que una instancia equivalente puede identificar la entrada a retirar. Ese comportamiento debe ser intencional; si quisiéramos retirar sólo la misma instancia, usaríamos otro criterio.

### La copia que devolvemos

Listar crea primero un contenedor nuevo y después lo presenta como lista no modificable a través de esa referencia. Si el cliente intenta clear, se rechaza la operación. Además, agregar posteriormente otro libro al catálogo no cambia la cantidad de elementos de la copia ya entregada: es una instantánea del contenedor en ese momento.

Los libros dentro de esa instantánea siguen siendo referencias a los mismos objetos. Son inmutables en este laboratorio, lo que evita que un cliente cambie su código por un setter. No se debe extrapolar que una lista no modificable convierte en inmutables todos los objetos que contiene.

### Contrastar el modelo con casos reales

Si un usuario pide «agregar otro ejemplar del mismo libro», el código L1 podría ser un identificador de obra y no de ejemplar. Rechazarlo como duplicado sin revisar el dominio quizás resolvería el problema equivocado. Esa pregunta de modelado se hace antes de celebrar que un test de contains pasó.

### Complejidad de esta elección

El Vector del ejemplo requiere recorridos lineales para estas búsquedas de igualdad. Un mapa por código puede ser otra implementación. Cambiar la representación no debe alterar sin aviso las reglas de aceptación, ausencia y presentación. Si antes se conservaba un orden y después no, hay un efecto observable que debe decidirse.

1. **Con ayuda:** ¿dos libros de código L1 pueden agregarse ambos? **Respuesta:** no bajo esta regla; la segunda alta devuelve false.
2. **Con pista:** ¿la lista retornada contiene clones profundos? **Respuesta:** no; copia el contenedor y comparte referencias a libros inmutables.
3. **Autónomo:** escribí un caso que obligue a distinguir obra y ejemplar. **Respuesta orientativa:** dos copias físicas del mismo título prestables por separado necesitan identidades individuales, además de los datos de la obra.

### Hoja de consulta del capítulo 19

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Clave de catálogo | Igualdad por código y duplicados rechazados en este ejemplo. | No confundir obra, entrada y ejemplar físico. |
| Salida controlada | Copia del contenedor no modificable, con referencias a libros inmutables. | No implica copia profunda de cualquier objeto mutable. |

## 20. Fechas: mantener el significado al pasar de JavaLike a Java

Una fecha puede representar un día del calendario o formar parte de un instante con hora y zona. Son problemas diferentes. Para un préstamo con vencimiento por día civil, el ejemplo utiliza LocalDate. No estamos representando una marca temporal global ni calculando automáticamente las horas exactas de duración entre zonas.

### Un préstamo definido por contrato

```java
import java.time.LocalDate;
import java.util.Objects;

public class Prestamo {
    private final Libro libro;
    private final LocalDate inicio;
    private final LocalDate vencimiento;
    private boolean devuelto;

    public Prestamo(Libro libro, LocalDate inicio, int dias) {
        if (dias <= 0) throw new IllegalArgumentException("Plazo invalido");
        this.libro = Objects.requireNonNull(libro);
        this.inicio = Objects.requireNonNull(inicio);
        this.vencimiento = inicio.plusDays(dias);
    }

    public Libro getLibro() { return libro; }
    public LocalDate getInicio() { return inicio; }
    public LocalDate getVencimiento() { return vencimiento; }
    public void devolver() { devuelto = true; }
    public boolean estaVencido(LocalDate fecha) {
        Objects.requireNonNull(fecha);
        return !devuelto && fecha.isAfter(vencimiento);
    }
}
```

El constructor recibe libro, inicio y una cantidad positiva de días. Calcula el vencimiento con plusDays y deja el préstamo sin devolver. La consulta estaVencido recibe una fecha para poder probar reglas sin depender del reloj del equipo. En este contrato, el día de vencimiento todavía no cuenta como vencido: se requiere una fecha posterior y que no se haya devuelto.

Si empieza el 16/11/2026 y dura siete días, vence el 23/11/2026. Consultar el 23 da false; consultar el 24 da true mientras no haya devolución. Una vez devuelto, deja de contar como vencido para esta consulta. Otros sistemas podrían conservar además retraso histórico; sería otra responsabilidad.

### Una traducción que no debe hacerse literalmente

La guía de JavaLike incluye un Date con tres números como año, mes y día. No conviene trasladarlo automáticamente al antiguo constructor de `java.util.Date`: sus convenciones de año y mes son diferentes. La [API oficial de Date](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html) documenta esos constructores obsoletos. En particular, ese constructor usa año relativo a 1900 y mes desde cero.

Nuestros ejemplos ejecutables usan `LocalDate.of(año, mes, día)`, con mes 1 a 12, y operaciones de calendario de esa clase. La [documentación de LocalDate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/LocalDate.html) explica que representa una fecha sin hora ni zona. Esta elección se identifica como traducción a Java real, sin atribuirla literalmente a la notación simplificada del aula.

### Probar fronteras del calendario

No sumamos simplemente días al número del día del mes. El 28 de febrero más dos días depende del año. En 2024, bisiesto, resulta primero de marzo. También debemos considerar cambio de mes y de año. Elegir una biblioteca de fechas evita reimplementar esas reglas como un conjunto de condiciones dispersas.

1. **Con ayuda:** ¿un préstamo que vence hoy está vencido en este ejemplo? **Respuesta:** no; la regla usa fecha estrictamente posterior.
2. **Con pista:** ¿por qué pasar la fecha a la consulta facilita pruebas? **Respuesta:** permite fijar escenarios reproducibles sin esperar que cambie el día real.
3. **Autónomo:** definí una variante que vence al comenzar el día indicado. **Respuesta:** cambia la condición temporal; debe quedar explícita y probarse igualdad, día anterior y día posterior, no cambiarse silenciosamente.

### Hoja de consulta del capítulo 20

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Vencimiento | inicio.plusDays(días); vencido si fecha > vencimiento y no devuelto. | Plazo positivo; día límite incluido en este contrato. |
| Fechas Java | LocalDate usa día civil sin zona; Date histórico tiene otras convenciones. | No trasladar constructor de JavaLike como fecha Java literal. |


## Hoja de consulta de la unidad 5: Colecciones e iteración

Reconstruí las explicaciones de los capítulos 17–20 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Lista / conjunto / mapa | Secuencia / pertenencia sin duplicados / asociación clave-valor. | Map no es subtipo de Collection en Java. |
| Iteración | Recorrer mediante un protocolo, sin exigir índices. | Si se elimina, usar la operación admitida del iterador y su contrato. |
| Clave de catálogo | Igualdad por código y duplicados rechazados en este ejemplo. | No confundir obra, entrada y ejemplar físico. |
| Vencimiento | inicio.plusDays(días); vencido si fecha > vencimiento y no devuelto. | Plazo positivo; día límite incluido en este contrato. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 21. De requerimientos a responsabilidades y escenarios

Diseñar comienza entendiendo qué necesita alguien hacer. Los sustantivos de una consigna pueden sugerir clases, pero no todos deben convertirse automáticamente en una. Los verbos pueden sugerir responsabilidades, pero una lista de verbos tampoco determina por sí sola sus receptores.

### Un caso de uso pequeño

Queremos registrar un préstamo de un ejemplar disponible. Primero describimos un escenario normal: identificar ejemplar, comprobar disponibilidad, crear préstamo, registrarlo y confirmar. Después un alternativo: el ejemplar no está disponible, por lo que no se crea un préstamo activo duplicado. Esta segunda historia aporta una regla que el camino normal por sí solo no mostraba.

Ahora preguntamos quién sabe cada cosa. El ejemplar o el servicio responsable de préstamos puede conocer su disponibilidad bajo el diseño elegido. Un Libro de nuestro laboratorio sólo representa una entrada del catálogo; no añadimos retroactivamente una regla de disponibilidad que su código no implementa. Distinguir ejemplo parcial de sistema completo evita prometer comportamientos inexistentes.

### Tarjetas CRC

En una tarjeta escribimos clase, responsabilidades y colaboradores. Catálogo administra entradas y colabora con Libro. Préstamo conoce libro y fechas y responde consultas temporales. Una futura Biblioteca podría coordinar altas y préstamos, pero debe tener una responsabilidad delimitada y no convertirse en depósito de todo el programa.

Las tarjetas se revisan simulando pedidos. Si un participante necesita conocer los campos privados de todos los demás para cumplir su rol, conviene revisar la distribución. Si una responsabilidad no tiene receptor, el diseño está incompleto; si aparece duplicada en varios lugares sin una razón, puede producir inconsistencias.

### Datos, reglas y ambigüedades

Una frase como «no prestar dos veces el mismo libro» necesita aclarar si habla de obra, ejemplar o préstamo activo. «Una semana» necesita precisar si son siete días corridos o una política particular de calendario. Registrar preguntas es parte del trabajo de análisis, no una falla que deba taparse con código prematuro.

No inventamos respuestas oficiales para consignas ambiguas. En la guía elegimos supuestos para poder desarrollar un ejemplo y los hacemos visibles. En una actividad de cátedra esos supuestos deben contrastarse con la consigna o consultarse cuando cambien lo que se evalúa.

1. **Con ayuda:** proponé un alternativo al registro correcto. **Respuesta:** código inexistente, plazo inválido o ejemplar no disponible; cada caso necesita una respuesta sin efectos parciales indebidos.
2. **Con pista:** ¿todos los nombres propios de personas de una historia son clases? **Respuesta:** no; pueden ser instancias o datos de una misma abstracción.
3. **Autónomo:** escribí una tarjeta de Reserva. **Respuesta orientativa:** conservar solicitante, recurso y estado; aceptar operaciones permitidas; colaborar con el recurso o servicio que administra disponibilidad, según el modelo acordado.

### Hoja de consulta del capítulo 21

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Requerimiento | Describe una necesidad y sus reglas observables. | Resolver ambigüedades de identidad, disponibilidad y plazos. |
| CRC | Clase, responsabilidades y colaboradores. | Simular pedidos para comprobar si cada participante puede cumplir. |

## 22. Cohesión, acoplamiento y delegación

La cohesión describe cuánto se relacionan las responsabilidades de un componente. El acoplamiento considera sus dependencias con otros. No son puntuaciones mágicas que se calculen contando clases: sirven para preguntar por qué una modificación se propaga o por qué un objeto hace tareas sin relación.

### Un diseño que revela el problema

Imaginá una clase que calcula vencimientos, dibuja botones, guarda archivos e implementa la igualdad de libros. Cambiar una pantalla podría obligar a revisar código de reglas de préstamo. Separar responsabilidades relacionadas permite razonar y probar cada parte con menos información ajena.

Esto no exige eliminar toda dependencia: los objetos deben colaborar. Buscamos dependencias necesarias, explícitas y compatibles con sus contratos. Un Préstamo que conoce un Libro depende de su protocolo; un Préstamo que modifica directamente una lista interna del Catálogo introduce un conocimiento que quizás no necesita.

### Delegar conserva una responsabilidad de coordinación

Cuando un objeto delega un cálculo, no desaparece su compromiso con el cliente. Debe pasar información adecuada, interpretar resultados y conservar reglas de coordinación. Si una operación afecta dos objetos, hay que decidir qué ocurre si la segunda parte falla. La delegación no transforma por sí sola una secuencia de cambios en una transacción indivisible.

Un adaptador delega en una capacidad existente y transforma el protocolo. Un estado especializado recibe una operación y decide su transición. Un método plantilla delega pasos variables manteniendo un esqueleto. Esas estructuras tienen en común la colaboración, pero resuelven problemas diferentes.

### Dependencias que facilitan pruebas

Recibir la fecha como parámetro en estaVencido evita depender directamente del reloj para cada prueba. Recibir un colaborador por constructor puede permitir sustituirlo por una implementación controlada. No necesitamos introducir un framework para entender esa idea: se hace visible en las firmas y referencias.

La contracara es no crear interfaces y capas sin una necesidad. Una abstracción también tiene un costo de lectura. Primero identificamos la variación o dependencia que queremos controlar y después elegimos una frontera razonable.

1. **Con ayuda:** ¿tener muchos métodos significa automáticamente baja cohesión? **Respuesta:** no; importa si cumplen un propósito relacionado y comprensible.
2. **Con pista:** ¿cero acoplamiento sería un objetivo para un sistema de objetos que colaboran? **Respuesta:** no; necesitamos relaciones útiles, no aislamiento absoluto.
3. **Autónomo:** justificá pasar una política de cálculo como colaborador. **Respuesta:** permite variar ese comportamiento manteniendo estable al cliente, si existe una variación real que amerita el diseño.

### Hoja de consulta del capítulo 22

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Cohesión / acoplamiento | Relación de responsabilidades / dependencias entre componentes. | No se miden correctamente sólo contando clases o métodos. |
| Delegar | Pedir un trabajo a un colaborador conservando la coordinación necesaria. | No convierte una secuencia de cambios en transacción automática. |

## 23. Diseño iterativo y refactorización

Un diseño se revisa al comprender mejor el problema. Desarrollo iterativo significa volver sobre decisiones en ciclos; incremental significa incorporar capacidades por partes. No es lo mismo construir una versión pequeña comprobable que escribir una solución incompleta sin saber qué falta.

### Una secuencia de crecimiento

Primero implementamos un Libro válido y probamos identidad por código. Después un Catálogo que agrega y busca. Luego incorporamos rechazo de duplicados y una salida controlada. Cada incremento tiene una conducta observable que podemos contrastar. Al agregar Préstamo, aparecen fechas y nuevas preguntas sobre disponibilidad, que no resolvemos modificando todas las clases sin un plan.

### Refactorizar conserva comportamiento definido

Refactorizar modifica la organización interna manteniendo el comportamiento que queremos conservar. Extraer una validación duplicada o renombrar una operación con claridad pueden ser refactorizaciones si no alteran el contrato. Cambiar la fecha límite de vencimiento modifica una regla: no debe disfrazarse como un arreglo meramente interno.

Una prueba previa ayuda a reconocer cambios involuntarios. Para un método con efectos, verificamos resultado y estado. Si sólo comprobamos que se imprime cierto texto, podríamos no detectar que el catálogo perdió elementos. Las pruebas deben representar conductas relevantes, no copiar cada línea de la implementación.

### Un cambio razonado de representación

Reemplazar Vector por un mapa puede mejorar una búsqueda por clave, pero debemos revisar orden de presentación, igualdad y política de reemplazo. Si cambia algo que el cliente observaba, tenemos que decidir si ese comportamiento era parte del contrato. La frase «es una implementación interna» no autoriza a ignorar consecuencias externas.

También podemos reemplazar una validación repetida por un colaborador. Antes de hacerlo comprobamos si ambas reglas realmente son iguales o sólo se parecen hoy. Unificar conceptos distintos por eliminar dos líneas repetidas puede dificultar cambios futuros.

### Dejar una explicación revisable

Una decisión de diseño se comprende mejor si registra problema, alternativa elegida y límite. Por ejemplo: «se devuelve una instantánea no modificable del catálogo para impedir altas externas; comparte referencias a Libro, que es inmutable». Esa descripción ayuda más que «se aplicaron buenas prácticas» sin mostrar el mecanismo.

1. **Con ayuda:** ¿renombrar getX como getCantidad puede ser una refactorización? **Respuesta:** sí si se preservan contratos y se actualizan correctamente los clientes afectados.
2. **Con pista:** ¿cambiar la política de duplicados conserva necesariamente comportamiento? **Respuesta:** no; altera qué entradas acepta el sistema.
3. **Autónomo:** proponé un incremento comprobable para el catálogo. **Respuesta orientativa:** búsqueda por código con caso encontrado y ausente, sin añadir al mismo tiempo préstamos, pantallas y persistencia que dificulten aislar errores.

### Hoja de consulta del capítulo 23

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Iterar / incrementar | Revisar decisiones / añadir capacidades por partes. | Cada incremento necesita un comportamiento comprobable. |
| Refactorizar | Reorganizar preservando el comportamiento definido. | Cambiar una política de dominio no es sólo limpieza interna. |


## Hoja de consulta de la unidad 6: Diseño orientado a objetos

Reconstruí las explicaciones de los capítulos 21–23 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Requerimiento | Describe una necesidad y sus reglas observables. | Resolver ambigüedades de identidad, disponibilidad y plazos. |
| Cohesión / acoplamiento | Relación de responsabilidades / dependencias entre componentes. | No se miden correctamente sólo contando clases o métodos. |
| Iterar / incrementar | Revisar decisiones / añadir capacidades por partes. | Cada incremento necesita un comportamiento comprobable. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 24. Patrones de diseño: reconocer un problema recurrente

Un patrón describe una solución organizada para un tipo de problema que aparece repetidamente en ciertos contextos. No es una obligación de agregar clases a todo programa ni una receta que sustituya requisitos. Su utilidad depende de reconocer qué dificultad resuelve y qué consecuencias introduce.

### Leer un patrón con cuatro preguntas

Primero: ¿qué cambio o dependencia está causando problemas? Segundo: ¿qué responsabilidades conviene separar? Tercero: ¿cómo colaboran los participantes? Cuarto: ¿qué costos y límites aparecen? Memorizar solamente un dibujo de nombres genéricos permite reconocer su forma, pero no saber cuándo aplicarlo.

En los capítulos siguientes veremos notificación a interesados, árboles de componentes, adaptación de protocolos, variación por estado y acceso a una instancia compartida. Los patrones no son equivalentes porque usen interfaces. Sus intenciones permiten diferenciarlos.

### Clases concretas y roles

Los nombres Sujeto u Observador identifican roles de un diseño, no objetos universales del mundo. Un Sensor puede desempeñar el rol de sujeto; un panel o un registrador pueden observar. En otra aplicación los nombres cambian, pero interesa conservar la organización de responsabilidades que resuelve el problema.

También una misma clase puede participar en más de una colaboración. Eso no implica que debamos escribir todos los patrones que podamos reconocer en su documentación. Conviene explicar las relaciones que ayudan al lector a comprender un escenario concreto.

### Decidir cuándo no agregarlo

Si sólo hay una llamada sencilla y ninguna necesidad de suscripción dinámica, un mecanismo completo de observación puede agregar complejidad innecesaria. Si hay dos comportamientos estables muy pequeños, una condición clara puede bastar antes de introducir una jerarquía de estados. El patrón se justifica con fuerzas del problema, no por prestigio de su nombre.

Los ejemplos se agrupan dentro de la clase Patrones del laboratorio para poder compilarlos juntos sin confundir nombres. Los fragmentos del manual muestran sus participantes internos; el archivo descargable aporta importaciones y el contenedor. Esa organización de archivos no forma parte obligatoria del patrón.

1. **Con ayuda:** ¿qué falta en «usé State porque había un estado»? **Respuesta:** explicar qué comportamientos varían, qué transiciones existen y por qué esa organización ayuda.
2. **Con pista:** ¿los roles de un patrón son nombres obligatorios de clases? **Respuesta:** no; pueden adoptar nombres pertinentes del dominio.
3. **Autónomo:** escribí una justificación de Adapter. **Respuesta orientativa:** existe una capacidad reutilizable cuyo protocolo difiere del esperado; un colaborador traduce pedidos sin obligar al cliente a conocer esa diferencia.

### Hoja de consulta del capítulo 24

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Patrón | Problema recurrente, contexto, participantes y consecuencias. | No aplicar por el nombre ni como fin en sí mismo. |
| Roles | Una clase concreta puede desempeñar un rol según la colaboración. | Los nombres genéricos de un patrón no son nombres obligatorios del dominio. |

## 25. Observer: avisar sin conocer a todos los interesados

Un sensor produce una medición y varios objetos necesitan enterarse. Si el sensor llama directamente a cada pantalla y cada registrador concreto, agregar un interesado obliga a modificarlo. Observer separa al productor de cambios de los receptores mediante un protocolo de notificación.

### Participantes y colaboración

El sujeto conserva interesados y permite suscribir o retirar. El observador ofrece una operación de actualización. Al medir, el sujeto cambia su estado y envía notificaciones. El cliente que conecta ambos decide quién está interesado; el sensor no tiene por qué crear todos los tipos de observadores posibles.

```java
public interface Observador { void actualizar(int valor); }
    public static class Sensor {
        private final List<Observador> observadores = new ArrayList<Observador>();
        private int valor;
        public void suscribir(Observador observador) {
            Objects.requireNonNull(observador);
            if (!observadores.contains(observador)) observadores.add(observador);
        }
        public void retirar(Observador observador) { observadores.remove(observador); }
        public int getValor() { return valor; }
        public void medir(int nuevo) {
            valor = nuevo;
            for (Observador observador : new ArrayList<Observador>(observadores)) {
                observador.actualizar(nuevo);
            }
        }
    }
```

En el ejemplo, un observador recibe el valor medido. La lista evita registrar dos veces un observador considerado igual por su criterio de igualdad. El protocolo permite retirar una suscripción. Una traza con un único interesado suma tres tras medir tres; después de retirarlo, medir siete ya no incrementa su suma.

### Decisiones que el nombre del patrón no resuelve

¿Se notifica aunque el valor sea igual al anterior? Aquí sí: medir representa un evento y siempre notifica. ¿Qué pasa si un observador se retira durante la notificación? Recorremos una copia de la lista de interesados; esa ronda mantiene sus destinatarios y la siguiente usa el registro actualizado. Esto evita mezclar una modificación del contenedor con su recorrido.

¿Qué ocurre si un observador falla? Esta implementación no aísla excepciones: una excepción que se propaga puede interrumpir los avisos restantes. ¿Hay varios hilos o notificaciones reentrantes complejas? No es el alcance de este laboratorio secuencial. Un sistema con esas necesidades debe definir sincronización, orden, errores y política de entrega.

### Estado y evento

El parámetro nuevo conserva la medición de esa invocación para enviarla a sus observadores. El campo valor representa la última medición conocida del sensor. Separar ambos conceptos ayuda a no reemplazar accidentalmente el contenido de un evento por un estado posterior.

No utilizamos la antigua clase Observable de Java para explicar el patrón: un protocolo propio pequeño hace visible la colaboración sin depender de una API histórica específica. Estudiar Observer no exige que una biblioteca particular lleve su mismo nombre.

1. **Con ayuda:** ¿qué debería conocer el sensor del observador? **Respuesta:** el protocolo actualizar, no todos sus campos internos ni su forma de dibujar.
2. **Con pista:** ¿por qué conservar una operación de retiro? **Respuesta:** para terminar una suscripción cuando ya no interesa y evitar retenerla sin intención.
3. **Autónomo:** proponé pruebas de notificación. **Respuesta:** sin observadores, uno, varios, alta repetida y retiro; además definir la política ante errores antes de probarla como si fuera universal.

![Esquema de colaboración del sujeto con dos interesados.](/planos-de-estudio/images/ipoo/observer.svg)

*Diagrama original. Esquema de colaboración del sujeto con dos interesados.*

### Hoja de consulta del capítulo 25

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Observer | Sujeto registra interesados y avisa mediante un protocolo. | Definir alta, retiro, errores, rondas y política de eventos. |
| Ejemplo secuencial | La ronda recorre una copia de suscriptores y envía el valor del evento. | No implementa aislamiento de fallos ni un bus concurrente universal. |

## 26. Composite: tratar hojas y grupos mediante un protocolo común

Una estructura jerárquica puede tener elementos simples y grupos que contienen otros elementos. Si el cliente necesita recorrer cada tipo preguntando si es hoja o grupo, termina reproduciendo la estructura en muchas operaciones. Composite permite pedir una operación común y delegar la composición del resultado.

### Del ejemplo al protocolo

Queremos calcular el peso de un paquete formado por piezas y subpaquetes. Una hoja conoce su peso. Un grupo suma el peso de sus hijos. Ambos responden peso, de modo que un cliente puede trabajar con Elemento sin conocer todos los niveles internos.

```java
public interface Elemento { long peso(); }
    public static class Hoja implements Elemento {
        private final long valor;
        public Hoja(long valor) {
            if (valor < 0) throw new IllegalArgumentException("Peso negativo");
            this.valor = valor;
        }
        @Override public long peso() { return valor; }
    }
    public static class Grupo implements Elemento {
        private final List<Elemento> hijos = new ArrayList<Elemento>();
        public void agregar(Elemento elemento) {
            if (elemento == this) throw new IllegalArgumentException("Autociclo");
            hijos.add(Objects.requireNonNull(elemento));
        }
        @Override public long peso() {
            long total = 0;
            for (Elemento hijo : hijos) total = Math.addExact(total, hijo.peso());
            return total;
        }
    }
```

Un grupo vacío devuelve cero. Si contiene una hoja de peso dos y otro grupo que contiene una hoja de cinco, devuelve siete. La recursión aparece porque cada grupo pide la misma operación a sus componentes. No se necesita que el cliente externo implemente otro bucle para cada profundidad.

### Reglas de la estructura

El contrato exige una estructura sin ciclos. Agregarse directamente a sí mismo se rechaza, pero el código no detecta todos los ciclos indirectos: A dentro de B y luego B dentro de A también violaría el contrato. No debe crearse esa estructura y esperar que la recursión termine. Detectar y administrar grafos arbitrarios sería otra responsabilidad.

Si una misma hoja se agrega dos veces, contribuye dos veces a la suma de esta representación. Si el dominio exige propiedad exclusiva o contar piezas únicas, hay que imponer otra regla. La forma de árbol y el criterio de identidad deben definirse; el nombre Composite no elimina la necesidad.

### Operaciones sobre todos y operaciones específicas

Peso pertenece al protocolo común. Agregar un hijo sólo tiene sentido en un grupo. El ejemplo deja esa operación en Grupo, en lugar de obligar a las hojas a ofrecer un agregar que siempre falla. Es una decisión sobre claridad de interfaz; otras variantes del patrón toman otras decisiones y deben explicar sus compromisos.

El total se acumula con detección de desbordamiento entero. Ese detalle conserva una respuesta definida ante un límite del tipo, pero no resuelve profundidad excesiva, consumo de memoria ni ciclos. Los casos de estudio son pequeños y acíclicos.

1. **Con ayuda:** calculá grupo de hojas dos y tres. **Respuesta:** cinco.
2. **Con pista:** ¿qué aporta un grupo vacío a la suma? **Respuesta:** cero bajo este contrato.
3. **Autónomo:** explicá por qué Composite y composición UML no son sinónimos automáticos. **Respuesta:** el patrón organiza un protocolo recursivo; la composición UML añade una semántica particular de propiedad de partes que debe justificarse en el dominio.

### Hoja de consulta del capítulo 26

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Composite | Hojas y grupos comparten operación; grupo combina resultados. | Contrato sin ciclos; una misma referencia repetida contribuye repetidamente. |
| Peso de grupo | Suma de pesos de hijos; grupo vacío aporta 0. | El ejemplo detecta desbordamiento, no todos los ciclos indirectos. |

## 27. Adapter: traducir un protocolo, no falsificar una capacidad

Un cliente espera un objeto con la operación dibujar. Tenemos una clase antigua que sabe mostrar una foto con un parámetro de calidad. La capacidad existe, pero el protocolo no coincide. Adapter introduce un objeto que ofrece el pedido esperado y lo traduce al colaborador disponible.

### Una implementación por composición

```java
public interface Dibujable { String dibujar(); }
    public static class FotoAntigua {
        public String mostrar(int calidad) { return "foto calidad " + calidad; }
    }
    public static class AdaptadorFoto implements Dibujable {
        private final FotoAntigua foto;
        public AdaptadorFoto(FotoAntigua foto) { this.foto = Objects.requireNonNull(foto); }
        @Override public String dibujar() { return foto.mostrar(80); }
    }
```

El cliente puede recibir Dibujable. El adaptador conserva una FotoAntigua y, al recibir dibujar, le pide mostrar con calidad ochenta. Esa calidad es una política fija del ejemplo, no una conversión universal. Si el cliente necesitara elegirla, debería aparecer como parte de otro contrato o configuración.

La traza tiene dos receptores: primero el adaptador, después la foto. El resultado vuelve al adaptador y luego al cliente. Este último no necesita conocer el método mostrar ni construir los parámetros antiguos en cada lugar que dibuja.

### Qué diferencia hay con cambiar el cliente

Podríamos escribir condiciones dentro del cliente para tratar fotos antiguas de forma especial. Eso distribuye conocimiento de protocolos incompatibles por la aplicación. Un adaptador concentra la traducción en un colaborador. Si cambia la API antigua, hay un lugar claro para revisar esa relación.

También podríamos modificar la clase existente si la controlamos y el cambio es apropiado. Adapter resulta especialmente útil cuando esa modificación no es posible o no conviene. El patrón no prohíbe otras soluciones; organiza un compromiso ante un problema específico.

### El límite semántico

Cambiar nombres no alcanza si las operaciones significan cosas diferentes. Si una API devuelve una miniatura y el cliente exige una imagen completa, un adaptador que sólo renombra la llamada no cumple el contrato. También deben traducirse unidades, rangos, errores o resultados cuando sean parte de la diferencia.

En nuestro laboratorio la salida es texto que permite observar qué llamada ocurrió; no implementamos una biblioteca gráfica. Esa simplificación conserva el mecanismo del patrón sin exigir instalar una interfaz de dibujo para estudiar la colaboración.

1. **Con ayuda:** ¿quién recibe dibujar? **Respuesta:** el adaptador que implementa Dibujable.
2. **Con pista:** ¿la foto necesita heredar del cliente? **Respuesta:** no; el adaptador la conoce por composición y delega.
3. **Autónomo:** proponé una adaptación de unidades. **Respuesta orientativa:** un cliente espera metros y una API entrega centímetros; el adaptador convierte con una regla explícita y conserva las condiciones de precisión y rango requeridas.

### Hoja de consulta del capítulo 27

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Adapter | Traduce el protocolo esperado hacia una capacidad existente. | Traducir también significado, unidades y errores cuando corresponda. |
| Composición | El adaptador conoce al adaptado y delega. | No obliga a modificar todos los clientes ni a heredar de la clase antigua. |

## 28. State: hacer visibles reglas y transiciones

Un pedido puede estar pendiente, pagado o enviado. Las operaciones permitidas dependen de ese estado. Si cada método repite una cadena extensa de condiciones, agregar un estado puede exigir cambios dispersos. State organiza comportamientos de estado en colaboradores y deja al contexto delegar.

### Escribir la máquina antes del código

| Estado | pagar | enviar |
| --- | --- | --- |
| Pendiente | Pasa a pagado y devuelve true | Rechaza sin cambiar |
| Pagado | Rechaza sin cambiar | Pasa a enviado y devuelve true |
| Enviado | Rechaza sin cambiar | Rechaza sin cambiar |

Esta tabla define el contrato del ejemplo. No contempla cancelación, devolución ni reintento idempotente de pago. No debemos atribuir esas capacidades a un programa que no las implementa.

```java
private interface Estado {
        boolean pagar(Pedido pedido);
        boolean enviar(Pedido pedido);
        String nombre();
    }
    private static class Pendiente implements Estado {
        public boolean pagar(Pedido p) { p.estado = new Pagado(); return true; }
        public boolean enviar(Pedido p) { return false; }
        public String nombre() { return "pendiente"; }
    }
    private static class Pagado implements Estado {
        public boolean pagar(Pedido p) { return false; }
        public boolean enviar(Pedido p) { p.estado = new Enviado(); return true; }
        public String nombre() { return "pagado"; }
    }
    private static class Enviado implements Estado {
        public boolean pagar(Pedido p) { return false; }
        public boolean enviar(Pedido p) { return false; }
        public String nombre() { return "enviado"; }
    }
    public static class Pedido {
        private Estado estado = new Pendiente();
        public boolean pagar() { return estado.pagar(this); }
        public boolean enviar() { return estado.enviar(this); }
        public String estadoActual() { return estado.nombre(); }
    }
```

Pedido es el contexto. Su campo estado referencia un colaborador que implementa las operaciones. Al pagar, un Pendiente reemplaza ese colaborador por un Pagado. La identidad del Pedido no cambia: cambia su organización interna para responder a pedidos futuros.

### Una traza completa

Creamos Pedido: pendiente. Enviar devuelve false y sigue pendiente. Pagar devuelve true y pasa a pagado. Pagar otra vez devuelve false. Enviar devuelve true y pasa a enviado. Otro envío falla. En cada paso verificamos resultado y estado, porque observar solamente true o false no demuestra una transición correcta.

### Dónde ubicar las transiciones

Las clases internas del ejemplo conocen el contexto y actualizan su estado. Otra variante podría centralizar ciertas transiciones en el contexto. Elegir implica decidir qué conocimiento necesita cada participante. El objetivo es conservar reglas claras y evitar que cualquier cliente asigne un estado arbitrario sin validación.

### State no es cualquier variable estado

Una enumeración y condiciones claras pueden ser una solución adecuada para un problema pequeño. El patrón cobra interés cuando los comportamientos por estado y sus variaciones justifican esa separación. Si sólo necesitamos mostrar una etiqueta, una jerarquía entera puede ser innecesaria.

También debemos considerar qué datos pertenecen al contexto y cuáles al estado. La dirección de un envío podría pertenecer al pedido y sobrevivir a una transición; no debe perderse por crear otro colaborador si el contrato exige conservarla.

1. **Con ayuda:** ¿pagar crea otro Pedido? **Respuesta:** no; sustituye el colaborador de estado dentro del mismo contexto.
2. **Con pista:** ¿qué prueba falta si enviar devuelve true? **Respuesta:** comprobar que quedó enviado y que las operaciones posteriores respetan ese estado.
3. **Autónomo:** añadí cancelación como diseño, sin programar. **Respuesta orientativa:** definir desde qué estados se permite, qué ocurre después y qué efectos deben conservarse; recién entonces incorporar participantes o transiciones.

![Transiciones válidas del contrato de Pedido del laboratorio.](/planos-de-estudio/images/ipoo/state.svg)

*Diagrama original. Transiciones válidas del contrato de Pedido del laboratorio.*

### Hoja de consulta del capítulo 28

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| State | Contexto delega operaciones según colaborador de estado. | La identidad del contexto se conserva al cambiar estado. |
| Transiciones | Pendiente → pagado → enviado bajo operaciones permitidas. | Cada fallo conserva estado; no suponer cancelación no implementada. |

## 29. Singleton: una instancia accesible y sus compromisos

Singleton busca controlar la creación de una instancia de una clase y ofrecer un punto de acceso a ella dentro de un alcance determinado. No significa que exista un único objeto de esa naturaleza en todo proceso distribuido, en todas las máquinas o frente a cualquier configuración de carga de clases.

### Un ejemplo pequeño

```java
public final class Configuracion {
    private final String modo = "demostracion";
    private Configuracion() { }

    private static class Holder {
        private static final Configuracion INSTANCIA = new Configuracion();
    }

    public static Configuracion instancia() { return Holder.INSTANCIA; }
    public String getModo() { return modo; }
}
```

El constructor privado evita la construcción habitual desde clientes externos. El método instancia devuelve el objeto mantenido en la clase auxiliar. Dos llamadas del mismo contexto de carga reciben la misma referencia. La configuración del ejemplo es inmutable y sólo contiene un modo de demostración.

La clase auxiliar permite retrasar esa creación hasta el acceso que la necesita bajo las reglas de inicialización de clases Java. No usamos ese hecho para prometer seguridad de cualquier estado mutable que luego se agregue al objeto. Una instancia única no vuelve automáticamente correctas todas sus operaciones concurrentes.

### Unicidad y acceso global son decisiones diferentes

Podríamos necesitar una sola configuración y aun así pasarla explícitamente a quienes la usan. Un punto global de acceso simplifica algunas llamadas, pero oculta dependencias: leer un método ya no muestra todos sus colaboradores en la firma o constructor.

En pruebas, un singleton mutable puede conservar cambios de un caso al siguiente. Entonces el resultado depende del orden de ejecución. Un colaborador recibido por constructor puede ser más fácil de controlar y reemplazar. El patrón no se justifica con «se usa en muchos lugares» como única explicación.

### Qué no administra

No limita por sí solo conexiones de base de datos, archivos abiertos o recursos del sistema. Una clase singleton puede abrir muchas conexiones en sus métodos. Si el problema es administrar un conjunto de recursos, necesitamos otro contrato. Tampoco debe utilizarse como sustituto de decidir cuándo se cierra un recurso externo.

### Elegir con un escenario

Para una configuración inmutable compartida, un objeto de acceso controlado puede resultar simple. Para una política que varía entre pruebas, usuarios o solicitudes, una instancia global puede restringir demasiado. Debemos identificar qué unidad de variación necesitamos antes de imponer unicidad.

1. **Con ayuda:** ¿qué comprueba comparar dos llamadas a instancia con `==`? **Respuesta:** que entregan la misma referencia en ese contexto.
2. **Con pista:** ¿instancia única implica estado libre de carreras? **Respuesta:** no; hay que analizar las operaciones y la concurrencia por separado.
3. **Autónomo:** justificá una alternativa por inyección de colaborador. **Respuesta:** permite que cada cliente reciba una configuración controlada y hace visible la dependencia, sin depender necesariamente de un acceso global.

### Hoja de consulta del capítulo 29

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Singleton | Acceso controlado a una instancia dentro de un alcance. | No garantiza unicidad global distribuida ni corrección de todo estado mutable. |
| Compromiso | Acceso global puede ocultar dependencias y acoplar pruebas. | Comparar con recibir un colaborador explícito. |


## Hoja de consulta de la unidad 7: Patrones de diseño

Reconstruí las explicaciones de los capítulos 24–29 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Patrón | Problema recurrente, contexto, participantes y consecuencias. | No aplicar por el nombre ni como fin en sí mismo. |
| Observer | Sujeto registra interesados y avisa mediante un protocolo. | Definir alta, retiro, errores, rondas y política de eventos. |
| Composite | Hojas y grupos comparten operación; grupo combina resultados. | Contrato sin ciclos; una misma referencia repetida contribuye repetidamente. |
| Adapter | Traduce el protocolo esperado hacia una capacidad existente. | Traducir también significado, unidades y errores cuando corresponda. |
| State | Contexto delega operaciones según colaborador de estado. | La identidad del contexto se conserva al cambiar estado. |
| Singleton | Acceso controlado a una instancia dentro de un alcance. | No garantiza unicidad global distribuida ni corrección de todo estado mutable. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 30. Double Dispatch: dos pedidos para considerar dos participantes

El despacho dinámico de un método de instancia utiliza el receptor para seleccionar una implementación. Si queremos comportamiento según dos objetos, no debemos suponer que una sobrecarga inspecciona automáticamente sus dos tipos reales. Double Dispatch construye una colaboración de dos pedidos para hacer visibles ambas variaciones.

### Un problema pequeño

Hay formas redondas o rectangulares y salidas de pantalla o impresora. Queremos una respuesta diferente para cada combinación. Una sola condición en cada cliente podría preguntar por ambas clases, pero distribuiría ese conocimiento. Vamos a representar un protocolo para formas y otro para salidas.

```java
public final class DespachoDoble {
    private DespachoDoble() { }
    public interface Forma { String mostrarEn(Salida salida); }
    public interface Salida {
        String mostrar(Redonda forma);
        String mostrar(Rectangular forma);
    }
    public static class Redonda implements Forma {
        @Override public String mostrarEn(Salida salida) { return salida.mostrar(this); }
    }
    public static class Rectangular implements Forma {
        @Override public String mostrarEn(Salida salida) { return salida.mostrar(this); }
    }
    public static class Pantalla implements Salida {
        public String mostrar(Redonda f) { return "pantalla:redonda"; }
        public String mostrar(Rectangular f) { return "pantalla:rectangular"; }
    }
    public static class Impresora implements Salida {
        public String mostrar(Redonda f) { return "impresora:redonda"; }
        public String mostrar(Rectangular f) { return "impresora:rectangular"; }
    }
}
```

Las implementaciones devuelven texto para observar la combinación; no realizan dibujo gráfico real. La estructura del mecanismo se puede estudiar sin instalar un sistema de impresión.

### Traza de la primera selección

Una variable Forma referencia una Redonda y una variable Salida referencia una Pantalla. El cliente pide `forma.mostrarEn(salida)`. El receptor real Redonda selecciona el cuerpo de mostrarEn de esa clase. Allí `this` tiene el tipo concreto con que se escribe ese cuerpo.

El segundo pedido es `salida.mostrar(this)`. En ese punto la sobrecarga adecuada corresponde a Redonda por el tipo del argumento en el cuerpo seleccionado. Después, el receptor real Pantalla aporta la implementación de esa operación. El resultado es `pantalla:redonda`.

### Cambiar una dimensión

Con la misma forma y una Impresora obtenemos `impresora:redonda`. Con una Rectangular cambia la primera selección y la firma del segundo pedido; podemos obtener pantalla rectangular o impresora rectangular. El laboratorio comprueba las cuatro combinaciones, porque probar sólo una no demostraría que se consideran ambas variaciones.

### Costos y límites

Agregar una nueva forma puede exigir otra operación en Salida y nuevas implementaciones en sus variantes. La colaboración resuelve una selección, pero impone una organización de extensiones. No se presenta como eliminación de todo acoplamiento ni como patrón obligatorio para cualquier operación de dos parámetros.

Es importante describir correctamente el mecanismo: usa sobrecargas y redefiniciones coordinadas en dos etapas. No vuelve dinámico por sí solo el criterio de selección de una sobrecarga aislada. La técnica aparece en la clase 7 del aula y se relaciona con el estudio previo de mensajes y polimorfismo.

1. **Con ayuda:** trazá redonda con impresora. **Respuesta:** primer receptor Redonda; segundo receptor Impresora para el mensaje que recibe Redonda; resultado `impresora:redonda`.
2. **Con pista:** ¿qué pasaría si el primer pedido no distinguiera la forma concreta? **Respuesta:** podríamos perder la información que permite elegir la firma especializada del segundo.
3. **Autónomo:** compará esta técnica con una sobrecarga simple. **Respuesta:** la técnica encadena pedidos para usar dos receptores en etapas; una sobrecarga simple no selecciona dinámicamente por todos los argumentos reales.

### Hoja de consulta del capítulo 30

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Double Dispatch | Dos pedidos coordinados para considerar dos participantes. | No equivale a selección dinámica automática de todas las sobrecargas. |
| Traza | Forma concreta selecciona mostrarEn; salida concreta responde al segundo pedido. | Comprobar las cuatro combinaciones del laboratorio. |

## 31. Nombres y refactorización: que el código explique decisiones

Los nombres forman parte de la interfaz mental de un programa. Un método puede ser corto y correcto, pero difícil de usar si oculta sus efectos. Elegir nombres no reemplaza contratos ni pruebas; permite que ambos sean más fáciles de localizar y discutir.

### Nombrar desde el dominio

Deposito, Libro y Prestamo expresan abstracciones del ejemplo. Los atributos cantidad o vencimiento indican qué conservan. Las operaciones retirar, buscar y devolver permiten anticipar un pedido. Un nombre como objeto1 o hacerCosa sólo identifica un lugar del código, sin explicar una responsabilidad.

La convención habitual de Java escribe nombres de clases con inicial mayúscula y métodos y variables con inicial minúscula, separando palabras mediante mayúsculas internas. Las constantes suelen usar otro estilo. La coherencia del proyecto importa más que mezclar convenciones de varios lenguajes por accidente.

### Nombrar efectos y resultados

`estaVacio` sugiere una consulta booleana. `cargar` sugiere un intento de modificación. Un `getCantidad` que además elimina datos viola esa expectativa aunque su cuerpo compile. Si una operación puede fallar, su contrato explica cómo; el nombre no necesita contener todos sus casos de error.

No hace falta incluir tipos en cada nombre si el lenguaje ya los expresa en la firma. Tampoco conviene abreviar hasta perder significado. Una variable `actual` dentro de un recorrido pequeño puede ser clara; una `a` que atraviesa veinte métodos de dominio suele exigir demasiado esfuerzo de reconstrucción.

### Refactorizar una responsabilidad

Si el mismo cálculo de vencimiento se repite, podemos revisar dónde debe vivir y extraer una operación con una intención precisa. Antes comprobamos que todas las repeticiones implementan la misma regla. Después ejecutamos pruebas para confirmar fechas y efectos. Un nombre más bonito no compensa haber cambiado sin aviso una condición de borde.

También conviene separar datos derivados de estado fuente. Guardar cantidad y porcentaje como campos modificables independientes puede exigir sincronizarlos. Si el porcentaje se obtiene de cantidad y capacidad con un contrato simple, calcularlo al consultar puede evitar un estado redundante. La decisión depende de costo y necesidad de conservar historia.

1. **Con ayuda:** mejorá `hacer(int x)` para retirar una cantidad. **Respuesta posible:** retirar(unidades), acompañado por un contrato de éxito y límites.
2. **Con pista:** ¿cambiar un nombre demuestra que se eliminó una responsabilidad mezclada? **Respuesta:** no; hay que revisar su comportamiento y dependencias.
3. **Autónomo:** proponé un dato derivado de un préstamo. **Respuesta:** estar vencido respecto de una fecha se obtiene a partir de vencimiento, devolución y fecha consultada; guardarlo sin contexto puede quedar desactualizado.

### Hoja de consulta del capítulo 31

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Nombres | Expresar intención, entidad y efecto. | Un getter con cambios ocultos contradice expectativas de consulta. |
| Dato derivado | Puede calcularse desde estado fuente coherente. | Evitar campos redundantes que quedan desincronizados sin necesidad. |

## 32. Inicialización diferida: calcular cuando hace falta

A veces un dato cuesta obtenerlo y quizá nunca se utilice. Inicializarlo al construir todos los objetos puede desperdiciar trabajo. La inicialización diferida retrasa esa tarea hasta el primer acceso y, si el contrato lo permite, conserva su resultado para usos posteriores.

### Un ejemplo secuencial

```java
import java.util.Objects;
import java.util.function.Supplier;

// Ejemplo para uso secuencial, sin acceso concurrente.
public class ConsultaDiferida {
    private final Supplier<String> calcular;
    private String valor;
    private boolean inicializada;

    public ConsultaDiferida(Supplier<String> calcular) {
        this.calcular = Objects.requireNonNull(calcular);
    }

    public String obtener() {
        if (!inicializada) {
            valor = Objects.requireNonNull(calcular.get());
            inicializada = true;
        }
        return valor;
    }
}
```

La clase recibe un colaborador que sabe producir un String mediante get. Supplier es una interfaz de la biblioteca de Java; una expresión como `() -> "dato"` puede proporcionar esa operación para un ejemplo. No es necesario introducir toda la programación funcional para comprender el contrato: obtener un texto cuando se le pida.

El booleano inicializada distingue «todavía no se calculó» de cualquier valor de texto válido. En este ejemplo null no es un resultado permitido. La primera consulta ejecuta el cálculo, guarda el valor y marca éxito. Las posteriores devuelven lo guardado sin repetirlo.

### Una traza observable

Un productor incrementa un contador de invocaciones y devuelve dato. Antes de consultar, el contador está en cero. La primera llamada a obtener lo deja en uno. La segunda devuelve el mismo texto y mantiene uno. Una prueba que sólo compare textos no detectaría si el cálculo se repitió; por eso verificamos también la cantidad de invocaciones.

### Fallos y vigencia

Si el cálculo genera una excepción antes de completarse, no se marca inicializada. Una consulta posterior puede volver a intentarlo. Eso debe ser una política consciente. En otro sistema podríamos querer conservar un error o limitar reintentos, decisiones que este laboratorio no implementa.

También hay que preguntar cuándo deja de ser válido un resultado conservado. Si depende de datos que cambian, una memoria permanente puede devolver información antigua. La clase no ofrece invalidación porque su contrato supone un valor reutilizable. Un caché con vencimiento requiere otras reglas.

### No confundir con concurrencia resuelta

La implementación es para uso secuencial. Dos hilos podrían entrar en el cálculo antes de que se marque inicializada. No se presenta como un mecanismo universal de sincronización. La inicialización diferida y la seguridad concurrente son problemas relacionados pero diferentes.

1. **Con ayuda:** ¿cuántos cálculos hay después de dos consultas exitosas? **Respuesta:** uno bajo el contrato secuencial.
2. **Con pista:** ¿por qué tener un indicador separado puede ser más claro que usar cualquier valor como centinela? **Respuesta:** evita confundir un resultado válido con ausencia de cálculo.
3. **Autónomo:** proponé un caso donde no convenga conservar el resultado indefinidamente. **Respuesta:** una consulta que depende de disponibilidad que cambia; necesita recalcular o definir una política explícita de actualización.

### Hoja de consulta del capítulo 32

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Lazy initialization | Calcular al primer acceso exitoso y conservar el resultado. | Definir vigencia, fallos y reintentos. |
| Alcance | ConsultaDiferida es secuencial, sin invalidación automática. | No promete seguridad de acceso concurrente. |

## 33. Probar objetos: resultados, estado y colaboración

Una prueba útil contrasta un comportamiento con un resultado esperado independiente. No es una transcripción del método con los mismos errores. En objetos, además de retornos, interesan cambios de estado, identidad, reglas de colecciones y pedidos entre colaboradores.

### Empezar con casos pequeños

Para Deposito probamos estados iniciales válidos, capacidad cero, cantidad inicial excesiva, carga exacta al límite y retirada superior a lo disponible. En cada intento fallido verificamos que la cantidad se mantenga. Para una pila contrastamos la secuencia de retiradas con un modelo de lista conocido.

Para igualdad, construimos objetos distintos con la misma clave y verificamos equals y hashCode. Para catálogo, comprobamos que no se duplique una clave, que buscar ausente devuelva null y que una salida no permita alterar el contenedor interno. Estas pruebas responden al contrato, no al número de campos privados.

### Colaboraciones que necesitan observación

Observer requiere verificar quién recibió qué y qué ocurre al retirarse. State requiere comprobar transición y respuesta. Lazy initialization requiere contar invocaciones. Double Dispatch requiere las cuatro combinaciones del ejemplo. Una única salida impresa puede ocultar muchos fallos de estas relaciones.

No necesitamos inspeccionar memoria privada para cada comprobación. Podemos utilizar consultas y colaboradores controlados. Un test que sólo funciona si la clase expone todos sus campos puede revelar una interfaz de prueba mal elegida o una responsabilidad difícil de observar.

### Datos reproducibles

El préstamo recibe una fecha fija. Las pruebas que generan secuencias usan una semilla conocida para poder repetir el caso. Si un error sólo aparece «a veces» y no registramos qué ocurrió, corregirlo resulta más difícil. Reproducibilidad no significa probar todas las entradas posibles, pero ayuda a investigar las observadas.

### Qué certifica compilar

Los ejemplos se compilan con un JDK real, usando `--release 11`, avisos y rechazo de avisos en la validación. Eso comprueba reglas del lenguaje y compatibilidad de ese código fuente. No demuestra que la abstracción elegida resuelva la consigna ni que una interfaz gráfica se haya probado.

La batería automatizada contrasta operaciones y casos de borde, pero no constituye una demostración formal ni una prueba de concurrencia de los patrones secuenciales. La revisión de diseño y la explicación de supuestos siguen siendo parte del aprendizaje.

1. **Con ayuda:** una carga rechazada devuelve false. ¿Qué más comprobar? **Respuesta:** que la cantidad anterior no cambió.
2. **Con pista:** ¿por qué no usar siempre la fecha actual en los tests? **Respuesta:** puede cambiar sus resultados con el calendario y dificultar la reproducción.
3. **Autónomo:** diseñá pruebas de una lista de observadores. **Respuesta:** altas, duplicados según igualdad, varios avisos, retiros y política de errores; los casos deben corresponder a decisiones documentadas.

### Hoja de consulta del capítulo 33

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Prueba de contrato | Contrastar retornos, estado y relaciones observables. | Utilizar resultados independientes y casos de borde. |
| Compilación | Comprueba reglas del código bajo una versión del lenguaje. | No certifica diseño, requisitos ni interfaz gráfica no ejecutada. |


## Hoja de consulta de la unidad 8: Buenas prácticas y técnicas de objetos

Reconstruí las explicaciones de los capítulos 30–33 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Double Dispatch | Dos pedidos coordinados para considerar dos participantes. | No equivale a selección dinámica automática de todas las sobrecargas. |
| Nombres | Expresar intención, entidad y efecto. | Un getter con cambios ocultos contradice expectativas de consulta. |
| Lazy initialization | Calcular al primer acceso exitoso y conservar el resultado. | Definir vigencia, fallos y reintentos. |
| Prueba de contrato | Contrastar retornos, estado y relaciones observables. | Utilizar resultados independientes y casos de borde. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.
## 34. Asociaciones, multiplicidad, agregación y composición en UML

Un diagrama de clases debe permitir entender cuántos objetos pueden relacionarse y qué significado tiene ese vínculo. Una línea sola puede ser insuficiente si la regla del dominio depende de exclusividad o de que siempre exista un colaborador.

### Leer una multiplicidad desde el otro extremo

Si cada Préstamo refiere exactamente a un Libro, escribimos 1 junto al extremo Libro. Si un Libro puede tener cero o muchos préstamos históricos, escribimos 0..* junto al extremo Préstamo. Esa marca responde cuántas instancias de ese extremo pueden relacionarse con una del opuesto; no se lee como cantidad total de objetos que habrá en toda la aplicación.

Un 0..1 admite ausencia o una relación. Un 1..* exige al menos una. El modelo debe contrastar esas reglas con el código: si un constructor permite null, no garantiza una asociación obligatoria de uno. Si el código impide null, todavía hay que justificar otras condiciones del vínculo.

### Navegación y conocimiento

Que exista una asociación conceptual no obliga a que ambas clases tengan campos que apunten entre sí. El diseño puede permitir navegación en una dirección y resolver consultas inversas mediante otro colaborador. Mantener referencias bidireccionales agrega una obligación de sincronización: agregar de un lado y olvidar el otro rompe el vínculo esperado.

Una dependencia indica que un elemento necesita otro para alguna parte de su definición o uso; no implica necesariamente una referencia conservada como atributo. Un parámetro recibido sólo durante una operación puede expresar una dependencia sin una asociación persistente de estado.

### Rombo vacío y rombo lleno

La agregación compartida y la composición distinguen semánticas de relación parte-todo. La composición establece una propiedad más fuerte sobre las partes, incluida su pertenencia a lo sumo a un compuesto a la vez y reglas de su vida dentro de esa relación. No se deduce sólo porque una clase tenga una colección.

Una asociación simple suele ser suficiente cuando no precisamos una semántica adicional de pertenencia. Agregar un rombo por decorar el dibujo puede afirmar reglas que el dominio no requiere. Tampoco el recolector de basura de Java implementa automáticamente una semántica de composición UML sólo por retirar una referencia.

### Generalización y realización

Una generalización señala el tipo general con triángulo vacío. Una clase que implementa una interfaz puede representarse mediante realización, distinguiendo su notación. El diagrama debe identificar si describe conceptos del dominio o decisiones de implementación, para no mezclar relaciones distintas bajo el mismo trazo.

1. **Con ayuda:** interpretá 0..* junto a Préstamo. **Respuesta:** un libro puede vincularse con cero o muchos préstamos bajo ese modelo histórico.
2. **Con pista:** ¿Vector de libros demuestra composición UML? **Respuesta:** no; falta justificar propiedad y vida de las partes.
3. **Autónomo:** revisá una relación de parte exclusiva. **Respuesta orientativa:** definir qué ocurre al trasladar la parte a otro compuesto y al destruir el anterior; el dibujo y las operaciones deben conservar esas reglas.

![La cantidad de un extremo se interpreta respecto de una instancia del extremo opuesto.](/planos-de-estudio/images/ipoo/multiplicidad.svg)

*Diagrama original. La cantidad de un extremo se interpreta respecto de una instancia del extremo opuesto.*

### Hoja de consulta del capítulo 34

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Multiplicidad | La marca de un extremo cuenta instancias allí por una del opuesto. | Distinguir 1, 0..1 y 0..*; contrastar con null y colecciones. |
| Composición UML | Relación parte-todo con propiedad fuerte. | Una referencia Java o una colección no prueban por sí solas esa semántica. |

## 35. Diagramas de secuencia: mostrar quién pide qué y en qué orden

Un diagrama de secuencia describe una interacción concreta. La dimensión vertical organiza el avance de la interacción y las líneas de vida representan participantes. No es un diagrama de clases al que simplemente agregamos flechas entre todos los nombres.

### Elegir un escenario

Tomamos buscar un libro y, si existe, crear un préstamo. Participan un cliente, un catálogo y una instancia de libro; la creación agrega un préstamo cuando corresponde. El catálogo recibe buscar con un código, compara sus entradas y devuelve una referencia o ausencia. El cliente decide el siguiente paso según ese resultado.

La llamada debe aparecer en el protocolo del receptor. Si el diagrama envía una operación a una clase que no la ofrece, detectamos una inconsistencia útil. No se resuelve dibujando una flecha que el código no puede realizar.

### Mensajes, retornos y activaciones

Un mensaje síncrono representa una llamada cuyo emisor espera la respuesta. Una línea discontinua puede representar un retorno. Las activaciones permiten mostrar períodos de ejecución de una operación. En un diagrama de estudio podemos seleccionar detalle, pero conviene distinguir pedido de resultado en lugar de usar flechas idénticas sin explicación.

La etiqueta puede incluir argumentos y resultado. Cuando se crea un objeto, su línea de vida comienza en el punto pertinente; no lo mostramos como si hubiera participado antes de existir. La notación seleccionada debe permitir reconstruir el escenario sin adivinar identidades.

### Alternativas y repetición

Un fragmento `alt` distingue ramas con guardas, por ejemplo encontrado y ausente. Un `loop` representa repetición bajo un criterio. No hace falta dibujar diez llamadas iguales para explicar un recorrido de tamaño variable, pero sí aclarar qué se repite y bajo qué condición termina.

Para el camino ausente no creamos un préstamo con un libro nulo como si fuera el mismo resultado. Mostramos la respuesta de fallo acordada. Los caminos alternativos suelen revelar validaciones que el escenario normal no exigía hacer explícitas.

### Trazar antes de embellecer

Escribí primero una lista numerada de pedidos y retornos. Después ubicá participantes y temporalidad. Finalmente comprobá que los mensajes correspondan a responsabilidades reales. Un esquema visualmente prolijo puede seguir asignando al objeto equivocado la decisión sobre un dato que no conoce.

1. **Con ayuda:** ¿quién recibe buscar? **Respuesta:** el catálogo, que administra la colección bajo el contrato del ejemplo.
2. **Con pista:** ¿qué diferencia hay entre la flecha de llamada y la respuesta? **Respuesta:** una solicita ejecutar una operación; la otra entrega su resultado al emisor que esperaba.
3. **Autónomo:** agregá una alternativa de plazo inválido. **Respuesta orientativa:** mostrar la validación o el error y evitar una confirmación de préstamo exitoso; precisar qué objetos llegaron a crearse.

![Escenario de búsqueda exitosa simplificado; se omiten activaciones y parte del recorrido.](/planos-de-estudio/images/ipoo/secuencia.svg)

*Diagrama original. Escenario de búsqueda exitosa simplificado; se omiten activaciones y parte del recorrido.*

### Hoja de consulta del capítulo 35

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Secuencia | Líneas de vida, mensajes, retornos y avance de interacción. | Cada mensaje debe estar disponible en el protocolo del receptor. |
| alt / loop | Alternativas con guardas / repetición con criterio. | No tratar el camino ausente como creación exitosa del mismo objeto. |

## 36. Diagramas de comunicación: los mismos pedidos con otra vista

Un diagrama de comunicación pone énfasis en vínculos entre participantes y numera los mensajes para expresar orden y anidamiento. Puede describir una interacción que también representamos como secuencia, pero distribuye la información de otra manera. No debe confundirse con un mapa estático de clases.

### Numerar una colaboración

Un cliente pide buscar al catálogo como mensaje 1. Dentro de esa operación, el catálogo puede consultar códigos de entradas: mensajes 1.1, 1.2 o un recorrido indicado con su condición. Después de recibir un libro, el cliente solicita crear el préstamo como mensaje 2. La numeración representa la organización de la interacción, no sólo el orden en que se dibujaron las flechas.

En esta vista interesa ver qué participantes necesitan vincularse para colaborar. Si un objeto envía un mensaje a otro, el escenario debe explicar cómo obtuvo una referencia o acceso apropiado. Una línea trazada sin ese análisis puede esconder una dependencia inexistente en el diseño.

### Contrastar dos diagramas

Tomá el mismo escenario y escribí su secuencia y comunicación. Los mensajes, participantes y decisiones deberían ser coherentes. No hace falta que ocupen el mismo espacio gráfico ni que tengan idéntico nivel de detalle, pero no pueden contar historias incompatibles sin explicarlo.

Si la secuencia devuelve ausencia y el diagrama de comunicación crea de todos modos un préstamo válido, hay un error. Si aparece un participante adicional, preguntá si es un detalle omitido intencionalmente o una responsabilidad que falta en la otra vista.

### Varias referencias y múltiples receptores

Un aviso a varios observadores puede expresarse como repetición sobre los destinatarios. El diagrama no debe dar a entender una única instancia si el contrato permite varias. A la vez, dibujar una clase Observador no sustituye identificar qué instancias intervienen en el escenario elegido.

La representación puede seleccionar un conjunto de objetos de ejemplo, dejando constancia de que ilustra un protocolo aplicable a más elementos. Esa selección evita mezclar cantidades de una ejecución con multiplicidades permitidas por el modelo general.

### Para qué sirve esta segunda vista

La secuencia hace más visible el desarrollo temporal; la comunicación destaca la red de colaboración. Elegimos según qué pregunta necesitamos responder. Ninguna elimina la necesidad del diagrama de clases ni de los contratos, porque muestran aspectos diferentes del sistema.

1. **Con ayuda:** ¿qué significa 1.1 respecto de 1? **Respuesta:** identifica un mensaje dentro de la colaboración iniciada por el pedido 1 según la convención del diagrama.
2. **Con pista:** ¿por qué no basta numerar flechas sin nombres de operación? **Respuesta:** no permite comprobar que el receptor ofrece el protocolo ni qué información se intercambia.
3. **Autónomo:** compará ambas vistas para Observer. **Respuesta:** deben conservar suscripción y avisos del escenario; una resalta orden de llamadas y la otra vínculos y numeración entre sujeto e interesados.

### Hoja de consulta del capítulo 36

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Comunicación | Vínculos y mensajes numerados de un escenario. | El anidamiento puede expresarse como 1, 1.1, 1.2. |
| Coherencia | La vista de secuencia y comunicación deben contar una interacción compatible. | Distinguir objetos del escenario de multiplicidades del modelo general. |

## 37. Taller integrador: construir y defender un modelo

Vamos a reunir análisis, código y diagramas sin exigir que una herramienta haga el trabajo conceptual por nosotros. El laboratorio contiene piezas completas para ejecutar, pero también límites explícitos. Una buena defensa explica qué resuelve cada pieza y qué todavía no está implementado.

### Etapa guiada

Leé DemoIPOO y predecí la salida antes de ejecutar. El depósito queda con cinco unidades después de cargar siete y retirar dos. La figura general contiene un rectángulo de área doce. Un préstamo iniciado el 16/11/2026 por siete días vence el 23. El pedido paga y luego envía, terminando enviado. La forma redonda usa la salida pantalla.

```java
import java.time.LocalDate;

public class DemoIPOO {
    public static void main(String[] args) {
        Deposito deposito = new Deposito(10);
        deposito.cargar(7);
        deposito.retirar(2);
        System.out.println("Cantidad: " + deposito.getCantidad());
        Figura figura = new Rectangulo(3, 4);
        System.out.println(figura.describir());
        Catalogo catalogo = new Catalogo();
        Libro libro = new Libro("L1", "Mapas del cielo");
        catalogo.agregar(libro);
        Prestamo prestamo = new Prestamo(libro, LocalDate.of(2026, 11, 16), 7);
        System.out.println("Vence: " + prestamo.getVencimiento());
        Patrones.Pedido pedido = new Patrones.Pedido();
        pedido.pagar();
        pedido.enviar();
        System.out.println("Pedido: " + pedido.estadoActual());
        DespachoDoble.Forma forma = new DespachoDoble.Redonda();
        System.out.println(forma.mostrarEn(new DespachoDoble.Pantalla()));
    }
}
```

La ejecución integra protocolos que ya estudiamos. No administra disponibilidad de ejemplares, autenticación, archivos ni pantallas gráficas. Esos comportamientos no se deducen por llamar al ejemplo «biblioteca». Identificar su alcance es parte de modelar correctamente.

### Etapa con menos ayuda

Proponé una clase Ejemplar con identidad propia que colabore con Libro. Definí cómo representar disponibilidad y qué impide dos préstamos activos simultáneos. Dibujá clases y multiplicidades. Después trazá un camino correcto y otro que rechace el segundo préstamo. No empieces por un patrón: empezá por las responsabilidades que exige la nueva regla.

Si elegís State para el estado del ejemplar, justificá por qué separa comportamientos que realmente varían. Si usás Observer para avisar una devolución, precisá suscriptores y política de aviso. No se obtiene un diseño mejor por utilizar todos los patrones del programa en el mismo problema.

### Etapa autónoma y criterios de autocorrección

1. **Abstracción:** explicá qué información seleccionaste y cuál no necesita tu modelo. **Control:** las decisiones deben relacionarse con requerimientos, no con una lista universal de atributos.
2. **Encapsulamiento:** mostrás una operación rechazada. **Control:** debe conservar invariantes y dejar estado coherente.
3. **Polimorfismo:** incorporás una alternativa compatible. **Control:** el cliente general sigue enviando un pedido válido, sin repetir decisiones innecesarias por clase.
4. **Colecciones:** administrás claves repetidas y ausencia. **Control:** igualdad, política de duplicados y salida controlada deben ser explícitas.
5. **Patrones:** elegís uno o descartás su uso. **Control:** explicar problema, participantes, colaboración y costo.
6. **UML:** trazás escenario normal y alternativo. **Control:** mensajes disponibles, multiplicidades coherentes y efectos que coincidan con el código.

### Una discrepancia del material como ejercicio de lectura

En el TP 5, ejercicio 2, se propone un monto fijo de 18.000 más diez por ciento de una valuación de 20.000.000, pero el ejemplo numérico indicado no coincide con esa cuenta. Aplicando la fórmula escrita obtenemos 2.018.000. La guía distingue regla y ejemplo y no cambia silenciosamente una para hacerlos coincidir. Para una entrega concreta, el criterio esperado debe aclararse con la cátedra.

### Cómo saber si podés seguir

Elegí una operación y explicá receptor, parámetros, resultado, efectos, límite y prueba de borde. Después dibujá sus colaboradores sin mirar el código. Si sólo podés recitar nombres de patrones, volvé a los casos. Si podés cambiar un requisito y señalar qué contrato o relación debe revisarse, ya estás utilizando las ideas para diseñar.

### Hoja de consulta del capítulo 37

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Integración | Requerimiento → contrato → modelo → colaboración → prueba. | No introducir todos los patrones sólo para enumerarlos. |
| Control aritmético | 18.000 + 0,10·20.000.000 = 2.018.000. | Diferencia entre regla escrita y ejemplo numérico del TP5, ejercicio 2. |


## Hoja de consulta de la unidad 9: UML e interacciones

Reconstruí las explicaciones de los capítulos 34–37 y después usá estas relaciones para comprobar si podés aplicarlas a un caso diferente.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Multiplicidad | La marca de un extremo cuenta instancias allí por una del opuesto. | Distinguir 1, 0..1 y 0..*; contrastar con null y colecciones. |
| Secuencia | Líneas de vida, mensajes, retornos y avance de interacción. | Cada mensaje debe estar disponible en el protocolo del receptor. |
| Comunicación | Vínculos y mensajes numerados de un escenario. | El anidamiento puede expresarse como 1, 1.1, 1.2. |
| Integración | Requerimiento → contrato → modelo → colaboración → prueba. | No introducir todos los patrones sólo para enumerarlos. |

**Cierre de unidad:** elegí una operación, indicá su receptor, precondiciones, resultado y efectos. Trazá un caso correcto y un caso de borde; relacioná la decisión con un concepto de esta hoja. Si sólo podés nombrar el concepto, volvé al desarrollo antes de continuar.

## Consulta general de Introducción a Objetos

Esta hoja reúne conceptos, relaciones e invariantes. No todas las decisiones de diseño se expresan mediante una ecuación: para esos casos conservamos el patrón de razonamiento y sus condiciones.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Responsabilidad | Un objeto mantiene información y ofrece operaciones coherentes. | Asignar las reglas a quien conoce y protege sus datos. |
| TAD | Especificar operaciones y propiedades sin imponer representación. | Separar significado observable de arreglo, lista o colección interna. |
| Identidad / igualdad | Mismo objeto / equivalencia según criterio de dominio. | Objetos de igual estado pueden ser instancias diferentes. |
| Mensaje / método | Pedido a un receptor / implementación de una operación. | Precisar argumentos, resultado y efectos. |
| Clase / instancia | Definición de una familia / objeto concreto. | new crea instancias; una asignación de referencia no las duplica. |
| Invariante | 0 ≤ cantidad ≤ capacidad, con capacidad > 0. | Construcción y operaciones deben conservarlo. |
| Parámetros | Java pasa valores; una referencia también se copia como valor. | Modificar objeto y reasignar el parámetro no son el mismo efecto. |
| Vista UML | Clase: tipos y protocolos; objetos: instancias y vínculos concretos. | Definir qué información selecciona cada diagrama. |
| Herencia | Especialización de un contrato. | Justificar sustitución, no sólo reutilización de campos. |
| Abstracta / concreta | Contrato parcialmente implementado / clase instanciable completa. | Una abstracta puede tener constructor y métodos con cuerpo. |
| Composición de colaboradores | Un objeto conoce y utiliza otros sin ser subtipo de ellos. | Delegación no exige herencia. |
| Sobrecarga | Mismo nombre con listas de parámetros diferentes. | Cambiar sólo retorno no basta para sobrecargar. |
| Constructor | Establece un objeto válido; no declara retorno. | Encadenar sin duplicar validaciones. |
| == / equals | Identidad de referencias / igualdad definida. | Para textos y entidades, elegir un criterio coherente. |
| Instancia / static | Estado individual / miembro de clase en su contexto de carga. | Contar construcciones no mide automáticamente objetos vivos. |
| Polimorfismo | El receptor concreto responde a un protocolo general. | El cliente no necesita condiciones por cada clase compatible. |
| Lista / conjunto / mapa | Secuencia / pertenencia sin duplicados / asociación clave-valor. | Map no es subtipo de Collection en Java. |
| Iteración | Recorrer mediante un protocolo, sin exigir índices. | Si se elimina, usar la operación admitida del iterador y su contrato. |
| Clave de catálogo | Igualdad por código y duplicados rechazados en este ejemplo. | No confundir obra, entrada y ejemplar físico. |
| Vencimiento | inicio.plusDays(días); vencido si fecha > vencimiento y no devuelto. | Plazo positivo; día límite incluido en este contrato. |
| Requerimiento | Describe una necesidad y sus reglas observables. | Resolver ambigüedades de identidad, disponibilidad y plazos. |
| Cohesión / acoplamiento | Relación de responsabilidades / dependencias entre componentes. | No se miden correctamente sólo contando clases o métodos. |
| Iterar / incrementar | Revisar decisiones / añadir capacidades por partes. | Cada incremento necesita un comportamiento comprobable. |
| Patrón | Problema recurrente, contexto, participantes y consecuencias. | No aplicar por el nombre ni como fin en sí mismo. |
| Observer | Sujeto registra interesados y avisa mediante un protocolo. | Definir alta, retiro, errores, rondas y política de eventos. |
| Composite | Hojas y grupos comparten operación; grupo combina resultados. | Contrato sin ciclos; una misma referencia repetida contribuye repetidamente. |
| Adapter | Traduce el protocolo esperado hacia una capacidad existente. | Traducir también significado, unidades y errores cuando corresponda. |
| State | Contexto delega operaciones según colaborador de estado. | La identidad del contexto se conserva al cambiar estado. |
| Singleton | Acceso controlado a una instancia dentro de un alcance. | No garantiza unicidad global distribuida ni corrección de todo estado mutable. |
| Double Dispatch | Dos pedidos coordinados para considerar dos participantes. | No equivale a selección dinámica automática de todas las sobrecargas. |
| Nombres | Expresar intención, entidad y efecto. | Un getter con cambios ocultos contradice expectativas de consulta. |
| Lazy initialization | Calcular al primer acceso exitoso y conservar el resultado. | Definir vigencia, fallos y reintentos. |
| Prueba de contrato | Contrastar retornos, estado y relaciones observables. | Utilizar resultados independientes y casos de borde. |
| Multiplicidad | La marca de un extremo cuenta instancias allí por una del opuesto. | Distinguir 1, 0..1 y 0..*; contrastar con null y colecciones. |
| Secuencia | Líneas de vida, mensajes, retornos y avance de interacción. | Cada mensaje debe estar disponible en el protocolo del receptor. |
| Comunicación | Vínculos y mensajes numerados de un escenario. | El anidamiento puede expresarse como 1, 1.1, 1.2. |
| Integración | Requerimiento → contrato → modelo → colaboración → prueba. | No introducir todos los patrones sólo para enumerarlos. |

### Relaciones que ayudan a comprobar un ejemplo

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| 0 ≤ cantidad ≤ capacidad | Invariante del depósito. | Capacidad positiva; cada operación conserva estado válido. |
| tope(apilar(P,x)) = x | Último elemento incorporado a una pila. | Operación de apilar válida; no es sintaxis literal de Java. |
| A = base·altura | Área del rectángulo. | Medidas positivas y unidades coherentes. |
| A = π·radio² | Área del círculo. | Medida positiva; aproximación numérica representable. |
| total = suma de contribuciones | Agregación de colección o Composite. | Definir vacío, duplicados y ausencia de ciclos cuando se recurre. |
| 100.0·parte/total | Porcentaje. | Total positivo y parte del mismo conjunto. |
| vencimiento = inicio + días | Regla temporal del préstamo del ejemplo. | Días positivos, calendario manejado mediante LocalDate. |
| vencido ⇔ no devuelto y fecha posterior al límite | Consulta del laboratorio. | El día límite no se considera vencido en este contrato. |
| a.equals(b) ⇒ a.hashCode() = b.hashCode() | Coherencia necesaria de igualdad y hash. | No exige la implicación inversa; puede haber colisiones. |

## Glosario de objetos y modelado

| Término | Explicación inicial |
| --- | --- |
| Abstracción | Selección de información y comportamiento pertinentes para una perspectiva. |
| Alias | Otro acceso al mismo objeto mediante una referencia. |
| Clase | Definición de una familia de instancias y su protocolo. |
| Colaborador | Objeto al que se pide parte de una tarea. |
| Contrato | Condiciones, resultado y efectos que una operación garantiza. |
| Delegación | Solicitar trabajo a un colaborador sin implementar todos sus detalles. |
| Encapsulamiento | Organización de estado y comportamiento bajo una frontera que protege decisiones. |
| Identidad | Distinción de un objeto concreto respecto de otros. |
| Instancia | Objeto concreto creado según una clase. |
| Invariante | Condición que debe conservarse al operar sobre un objeto o estructura. |
| Mensaje | Pedido de una operación a un receptor con ciertos argumentos. |
| Método | Implementación de una operación de una clase. |
| Multiplicidad | Cantidades admitidas en un extremo de una relación. |
| Polimorfismo | Respuestas especializadas a un protocolo general. |
| Protocolo | Operaciones disponibles para colaborar con un objeto. |
| Responsabilidad | Información que un objeto conoce o tarea que debe cumplir. |
| TAD | Abstracción especificada por valores y operaciones observables. |

## Fuentes, cobertura y revisión

### Documentos del aula recuperados completos

Base: aula **Introducción a la Programación Orientada a Objetos-01480-2026-2C**, curso 11446. Antes de redactar se recuperaron **24 PDF, 783 páginas físicas**, un archivo de ejemplo en texto y seis infografías. Los archivos originales permanecen en el archivo local de trabajo; la página publica texto, programas y diagramas originales.

| Grupo de materiales | Alcance de consulta |
| --- | --- |
| Programa publicado y cronograma 2026 | Programa completo de cuatro páginas y calendario de tres; se distingue la carátula 2018 de la organización del aula actual. |
| Siete presentaciones teóricas | Ejes, ejemplos y pasajes pertinentes de TAD, objetos, herencia, métodos, colecciones, diseño, patrones y UML. |
| Siete resúmenes visuales | Reconocimiento de texto de todas sus páginas y contraste visual selectivo; no se confunde OCR con reproducción perfecta. |
| Cinco trabajos prácticos | Familias de problemas y contratos para orientar ejercicios originales; no son respuestas a una entrega del estudiante. |
| Guía JavaLike–BlueJ–UML | Distinción de notación didáctica, lenguaje ejecutable y modelado. |
| Ejercicios extra | Casos de integración y lectura de responsabilidades; no predicción de una evaluación oficial. |
| Ejemplo FiguraGeometrica.txt | Consulta de una colaboración de figuras y colección; el laboratorio de esta página es una implementación original. |
| Seis infografías | Lectura mediante OCR y revisión seleccionada de apoyos visuales. |
| Libro de Federico Naso, Fundamentos y Aplicaciones, 264 páginas | Recuperado y catalogado; revisadas portada, índice y licencia. No se presenta como lectura íntegra ni se adaptan sus capítulos o figuras. |

Se procesaron por OCR **125 páginas** de presentaciones con poco texto extraíble y las seis imágenes. Algunas páginas son portadas o diagramas que requieren mirar su organización además de reconocer palabras. El lector PDF emitió avisos sobre recursos gráficos del libro de 264 páginas; no se afirma haber auditado todas sus figuras. La base principal del desarrollo es el programa, las clases, la guía técnica, los prácticos y documentación oficial complementaria.

### Referencias técnicas complementarias

- [Oracle: clases y objetos](https://docs.oracle.com/javase/tutorial/java/javaOO/index.html), para contrastar construcciones del lenguaje. Ese tutorial identifica su base JDK 8; el código de este laboratorio usa un subconjunto compatible con Java 11.
- [Oracle: parámetros y argumentos](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html) y [redefinición y ocultamiento](https://docs.oracle.com/javase/tutorial/java/IandI/override.html), para distinguir pasaje de valores y selección de métodos.
- [API de Vector](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html), para contrastar operaciones y condiciones de uso.
- [API de LocalDate](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/LocalDate.html) y [API de Date](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html), para evitar trasladar convenciones simplificadas de fechas a Java real.
- [Especificación Java, inicialización de clases](https://docs.oracle.com/javase/specs/jls/se21/html/jls-12.html#jls-12.4.1), como apoyo al ejemplo de inicialización de la instancia compartida.
- [OMG: referencia UML 2.5.1](https://www.omg.org/spec/UML/2.5.1), punto oficial de acceso a la especificación. No se realizó una auditoría completa de esa especificación.
- [BlueJ oficial](https://www.bluej.org/), distribución y documentación del entorno. No se adopta como actual para siempre la versión mencionada por una guía histórica.

Los materiales de cátedra se atribuyen a su equipo docente. La obra *Programación Orientada a Objetos: Fundamentos y Aplicaciones* se identifica como de **Federico Naso** y su archivo declara **CC BY-NC-ND**. Se consigna como bibliografía recuperada, sin republicarla ni transformar su texto o sus imágenes. La bibliografía editorial citada por el programa tampoco se presenta como íntegramente leída.

### Decisiones, límites y discrepancias

El manual desarrolla las nueve unidades enumeradas en el documento publicado y explica su relación con las siete clases. Los ejemplos de Java se distinguen de JavaLike. Las áreas usan double con entradas pequeñas y resultados representables. El laboratorio es secuencial: no demuestra seguridad concurrente de los patrones ni implementa una biblioteca gráfica, persistencia o gestión completa de una biblioteca real.

La suma escrita en TP5, ejercicio 2, no coincide con su resultado de ejemplo; se explicita el cálculo según la fórmula y se mantiene visible que el criterio de una actividad debe aclararse con la cátedra. No se reproducen calificaciones de estudiantes ni se utilizan listados de notas como material de estudio.

Los ejemplos originales se compilaron y ejecutaron con pruebas de contratos, alias, igualdad, hash, colecciones, fechas, despacho y patrones. Estas pruebas no sustituyen una revisión académica ni garantizan aprobar un examen. La adecuación completa a una evaluación concreta debe contrastarse con clases y consignas vigentes. **Revisión docente externa pendiente.**

Edición y consulta: **16 de noviembre de 2026**. Autoría de la guía: **Matias Gabriel Cersosimo**. Contacto: [contacto@matiascersosimo.com](mailto:contacto@matiascersosimo.com).
