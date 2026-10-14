---
nombre: "Introducción a la Programación Imperativa"
code: "01474"
resumen: "Resolución de problemas, algoritmos, C++, estructuras de control, funciones, parámetros, ámbito y arreglos."
---

## Problema y resolución de problemas

Antes de escribir una sola línea de código hay que entender qué se quiere resolver. Un **problema** es una situación en la que se pretende llegar a una meta y hay que hallar los medios y las estrategias para lograrlo. En computación, resolver un problema consiste en pasar de un estado inicial (los datos disponibles) a un estado final (el resultado buscado) mediante pasos bien definidos. Este tema presenta el método general de resolución y la técnica que permite abordar problemas grandes: descomponerlos.

### Conceptos clave

- **Estado inicial y meta**: la situación de partida y la situación a la que se quiere llegar. Entre ambas hay un obstáculo que se resuelve con un plan.
- **Recursos y restricciones**: lo que se puede usar y lo que está permitido o prohibido hacer. Un enunciado completo los indica explícitamente.
- **Entrada, proceso y salida**: los datos con los que se trabaja, las operaciones que se aplican sobre ellos y la información que se produce.
- **Descomposición**: partir un problema en subproblemas más pequeños y manejables, hasta que cada parte sea lo bastante simple como para resolverla directamente.
- **Pensamiento computacional**: enfoque basado en cuatro principios: descomposición, reconocimiento de patrones repetitivos, abstracción (ignorar lo irrelevante para el problema) y escritura de algoritmos.

### Desarrollo teórico

La resolución de problemas sigue una secuencia de etapas:

1. **Identificar el problema**: leer el enunciado con detenimiento, entender qué se pide y qué datos se tienen. Un diagnóstico apresurado lleva a resolver un problema distinto del planteado.
2. **Elaborar un plan**: pensar una solución sin quedarse con la primera idea que aparece.
3. **Medir el éxito**: comprobar si la solución cumple el objetivo y si el resultado es verificable.
4. **Evaluar alternativas**: considerar otros caminos posibles y comparar resultados. Puede haber soluciones más eficientes o más claras.

La descomposición es la herramienta central de la tercera etapa en problemas complejos. En un desafío como el de Chuy (avanzar un paso, entrar en calor, recoger la pelota, hacer jueguito y volver), la estrategia se escribe como una lista de subtareas, y cada subtarea puede refinarse a su vez. Al descomponer aparecen los **patrones repetitivos**: "entrar en calor" consiste en avanzar y retroceder dos veces, es decir, la misma acción repetida. Reconocer esos patrones permite escribir una sola vez lo que se repite y luego indicar cuántas veces se hace.

La **abstracción** completa el cuadro: del enunciado interesa conservar lo necesario para la solución y descartar el resto. Para calcular un promedio de edades no importan los nombres de los estudiantes.

### Ejemplo resuelto

*Problema*: una persona compró medio kilo de carne, tres cuartos de kilo de papas y un cuarto de kilo de verduras. ¿Cuántos kilos transportó?

1. **Identificar**: la entrada son tres cantidades ($\tfrac12$, $\tfrac34$ y $\tfrac14$ kg) y se pide su total.
2. **Plan**: el peso total es la suma de los pesos parciales. Se calcula $\tfrac12+\tfrac34+\tfrac14=\tfrac24+\tfrac34+\tfrac14=\tfrac64=1{,}5$ kg.
3. **Medir el éxito**: el resultado responde la pregunta y las unidades son coherentes (kilos).
4. **Alternativas**: pasar todo a decimales ($0{,}5+0{,}75+0{,}25$) da el mismo resultado. Comparar caminos sirve para confirmar que la respuesta es correcta.

> **Ojo:** no te quedes con la primera solución que se te ocurra. Contrastarla con otra alternativa es la mejor forma de detectar errores antes de implementar.

> **Importante:** descomponer no es solo "dividir en partes": cada parte debe tener una entrada y una salida claras, de modo que al juntar las soluciones parciales se obtenga la solución completa.

## Algoritmos, procesos y programas

Una vez entendido el problema, hay que escribir la solución de forma que pueda ejecutarla alguien (o algo) que no improvisa: una computadora. Esa descripción precisa es el algoritmo. Este tema distingue algoritmo, proceso y programa, y presenta las cuatro formas habituales de representar un algoritmo.

### Conceptos clave

- **Algoritmo**: secuencia ordenada y finita de pasos elementales, no ambiguos, que permiten resolver un problema de manera eficaz.
- **Programa**: algoritmo expresado en un lenguaje de programación, es decir, la serie de órdenes finitas que se le indican a la computadora.
- **Proceso**: un programa en ejecución. Un mismo programa puede dar lugar a muchos procesos, uno por cada ejecución.
- **Programar**: señalar qué tareas realizar, en qué orden y de qué forma.
- **Diagrama de flujo** (flowchart): representación gráfica de un algoritmo mediante símbolos conectados por flechas.
- **Pseudocódigo**: notación intermedia entre el lenguaje coloquial y un lenguaje de programación, que usa palabras reservadas e indentación pero no exige una sintaxis rigurosa.

### Desarrollo teórico

Para que una secuencia de pasos sea un algoritmo debe cumplir cuatro características:

- **Finito**: tiene un inicio y un fin. Un procedimiento que nunca termina no es un algoritmo.
- **Preciso**: está libre de ambigüedades. Cada paso se interpreta de una única manera.
- **Definido**: ante los mismos valores de entrada produce siempre el mismo resultado.
- **Eficaz**: efectivamente resuelve el problema planteado.

Las formas de representarlo se comparan así:

| Representación | Ventaja | Limitación |
|---|---|---|
| Lenguaje coloquial | Natural; sirve para un primer borrador (verbos en infinitivo) | Propenso a ambigüedades |
| Diagrama de flujo | Muestra el flujo de control de un vistazo | Se vuelve inmanejable en algoritmos largos |
| Pseudocódigo | Cerca del código, sin sintaxis estricta | No se puede ejecutar |
| Lenguaje de programación | Ejecutable por la computadora | Exige respetar sintaxis y semántica |

En el diagrama de flujo se usan símbolos estándar: el óvalo marca el inicio y el fin, el rectángulo indica acciones o cálculos, el rombo representa una decisión (de él salen dos flechas rotuladas con las condiciones, por ejemplo Sí y No), el paralelogramo suele emplearse para entrada y salida de datos y las flechas indican el orden de ejecución. Los pasos para armarlo son: definir el problema, identificar los pasos en orden, usar símbolos estándar, conectarlos y revisar el diagrama.

### Ejemplo resuelto

*Problema*: leer un número e informar su doble.

En **lenguaje coloquial**: Inicio. Pedir un número. Calcular el doble multiplicando por 2. Informar el resultado. Fin.

En **diagrama de flujo**: un óvalo "Inicio", una entrada "Leer numero", un rectángulo "doble ← numero * 2", una salida "Escribir doble" y un óvalo "Fin", unidos por flechas en ese orden.

En **pseudocódigo**:

```text
Algoritmo doble
  Inicio
    Escribir("Ingrese un número")
    Leer numero
    doble = numero * 2
    Escribir("El doble del número es: ", doble)
  Fin
```

En **C++**:

```cpp
#include <iostream>
using namespace std;

int main() {
    int numero;
    cout << "Ingrese un número: ";
    cin >> numero;
    int doble = numero * 2;
    cout << "El doble del número es: " << doble << endl;
    return 0;
}
```

Las cuatro versiones describen el mismo algoritmo. Lo único que cambia es el nivel de formalidad.

Un caso para pensar la precisión: se le indica a un autómata que camine una cuadra, cruce la calle y camine otra cuadra. Ese algoritmo funciona solo si no pasan autos ni hay semáforos. Si el entorno cambia, hace falta incorporar decisiones ("si el semáforo está en verde, cruzar; si no, esperar"). Esa necesidad de decidir y de repetir es la que llevan a las estructuras de control que se desarrollan más adelante.

> **Ojo:** "definido" no significa "siempre el mismo resultado", sino el mismo resultado para las mismas entradas. Un algoritmo que calcula el doble de un número da resultados distintos para entradas distintas y sigue siendo definido.

> **Tip:** pasá siempre por una representación intermedia (coloquial o diagrama) antes de escribir el código. Detectar un error de lógica en un diagrama cuesta mucho menos que encontrarlo en un programa.

## Lenguajes de programación y C++

Una computadora solo ejecuta instrucciones en lenguaje de máquina (secuencias de ceros y unos). Los lenguajes de programación son el puente que permite escribir algoritmos de forma legible y traducirlos después a esas instrucciones. Este tema introduce los tipos de lenguajes, el proceso de compilación de C++ y la estructura mínima de un programa.

### Conceptos clave

- **Lenguaje de programación**: conjunto de reglas gramaticales (sintácticas y semánticas) que instruyen a una computadora para que se comporte de cierta manera.
- **Lenguaje de bajo nivel**: ensamblador y lenguaje de máquina. Están próximos al hardware y son difíciles de leer.
- **Lenguaje de alto nivel**: diseñados para ser legibles (C++, Java, Python, entre otros).
- **Código fuente**: instrucciones escritas por la persona en un lenguaje de alto nivel.
- **Compilador** (compiler): herramienta que traduce el código fuente a código ejecutable para una arquitectura determinada.
- **Sintaxis**: reglas que deben respetarse al escribir un programa. **Semántica**: significado de lo escrito.

### Desarrollo teórico

C++ fue diseñado por Bjarne Stroustrup a mediados de la década de 1980. Admite programación estructurada (secuencias, bucles y funciones) y programación orientada a objetos; en esta asignatura se trabaja con el estilo estructurado. Es un lenguaje **compilado** y **fuertemente tipado**: cada variable debe declararse con su tipo y el compilador verifica que se use de manera coherente.

El camino del código fuente al programa ejecutable pasa por etapas:

1. Se escribe el código fuente.
2. El **preprocesador** resuelve directivas como `#include`.
3. El compilador traduce el resultado a código ensamblador.
4. El ensamblador genera archivos objeto con código de máquina.
5. Se produce el **ejecutable**, específico de la plataforma.

Sintaxis y semántica son niveles distintos de corrección. En español, "el perro estaba mojada" viola una regla sintáctica (concordancia), mientras que una oración correcta puede no significar lo que se quería decir. En programación ocurre igual:

| Tipo de error | Qué ocurre | Quién lo detecta |
|---|---|---|
| Sintáctico | El programa viola una regla del lenguaje (falta un `;`, una llave sin cerrar) | El compilador, antes de ejecutar |
| Semántico o lógico | El programa compila pero hace algo distinto de lo pretendido | La persona, al probar con datos |

### Estructura mínima de un programa

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hola, mundo" << endl;
    return 0;
}
```

- `#include <iostream>` incorpora las herramientas de entrada y salida.
- `using namespace std;` permite escribir `cout` en lugar de `std::cout`.
- `main()` es la función donde empieza la ejecución. Todo programa en C++ tiene al menos esta función.
- Las llaves `{}` delimitan un **bloque**, es decir, un conjunto de instrucciones que se ejecutan juntas.
- Cada sentencia termina con `;`. `return 0;` indica que el programa terminó sin problemas.

<!-- REVISAR: las presentaciones de la cátedra muestran buena parte del código C++ como imágenes que no pudieron extraerse; verificar que los ejemplos de esta guía coincidan con los usados en clase -->

### Ejemplo resuelto

El siguiente programa tiene un error sintáctico y otro lógico:

```cpp
int main() {
    int a = 5, b = 3;
    int suma = a - b
    cout << "La suma es " << suma << endl;
}
```

El compilador marca la falta del `;` al final de `int suma = a - b`. Una vez corregido, el programa compila y muestra `La suma es 2`, que no es la suma de 5 y 3: el error está en el operador (`-` en lugar de `+`). Ese error solo se descubre al comparar el resultado con el esperado.

> **Ojo:** que un programa compile no significa que sea correcto. El compilador solo verifica la sintaxis (y la coherencia de tipos), nunca la intención.

> **Importante:** C++ distingue mayúsculas de minúsculas y exige declarar el tipo de cada variable antes de usarla. Muchos errores de compilación de principiantes vienen de ahí.

## Tipos de datos, operaciones y entrada/salida

Todo programa recibe datos, los procesa y devuelve información. El **tipo de datos** de un valor determina qué valores admite, qué operaciones se pueden hacer con él y cómo se almacena en memoria. Elegir bien el tipo evita errores sutiles, como perder decimales en un cálculo.

### Conceptos clave

- **Tipo de datos**: define el rango de valores posibles, las operaciones permitidas y la forma de almacenamiento.
- **int**: enteros sin decimales, dentro de un límite que depende de su tamaño en memoria.
- **float y double**: números en coma flotante (mantisa y exponente, según el estándar IEEE 754). `double` ofrece mayor precisión que `float`.
- **char**: un único carácter, codificado en 1 byte y escrito entre comillas simples (`'A'`).
- **bool**: valor lógico `true` o `false`. El valor numérico `0` se interpreta como falso y cualquier otro como verdadero.
- **Literal**: valor escrito directamente en el código (`42`, `3.14`, `'A'`, `"hola"`).
- **cout y cin**: salida estándar (normalmente la pantalla) y entrada estándar (normalmente el teclado).

### Desarrollo teórico

**Operadores aritméticos.** Sobre números se dispone de suma `+`, resta `-`, multiplicación `*`, división `/` y resto `%` (solo para enteros). Cuando los operandos son de tipos distintos, C++ realiza una **conversión implícita** y convierte el de menor tamaño al de mayor. La regla que más confunde es la división: si ambos operandos son enteros, `/` hace una **división entera** y descarta los decimales; si al menos uno es de punto flotante, el resultado es de punto flotante.

| Expresión | Resultado |
|---|---|
| `7 / 2` | `3` |
| `7 % 2` | `1` |
| `7 / 2.0` | `3.5` |
| `7.0 / 2` | `3.5` |

El operador `%` es la base de muchas condiciones: `n % 2 == 0` indica que `n` es par, y `n % 10` extrae la última cifra de un entero.

**Incremento y decremento.** `x++` y `++x` suman 1 a `x`; `x--` y `--x` restan 1. En su forma prefija el cambio se aplica antes de evaluar el resto de la expresión, y en la sufija, después. Si `x` vale 3, `y = ++x;` deja `y = 4` y `x = 4`; en cambio, con `x` valiendo 4, `y = x++;` deja `y = 4` y `x = 5`.

**Operadores de comparación y lógicos.** Las comparaciones (`==`, `!=`, `<`, `<=`, `>`, `>=`) devuelven un `bool`. Los operadores lógicos combinan condiciones:

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
|---|---|---|---|---|
| verdadero | verdadero | verdadero | verdadero | falso |
| verdadero | falso | falso | verdadero | falso |
| falso | verdadero | falso | verdadero | verdadero |
| falso | falso | falso | falso | verdadero |

`&&` y `||` usan **evaluación en cortocircuito**: si el primer operando ya determina el resultado, el segundo no se evalúa. Además, valen las leyes de De Morgan: `!(a && b)` equivale a `!a || !b`, y `!(a || b)` equivale a `!a && !b`.

**Entrada y salida.** `cout << expresión` envía a pantalla cualquier expresión (variables, literales, cálculos) y se pueden encadenar varias con `<<`; `endl` agrega un salto de línea. `cin >> variable` lee un valor del teclado y lo guarda en la variable. Para leer una línea completa con espacios en una cadena se usa `getline(cin >> ws, variable)`, que además descarta los espacios iniciales.

### Ejemplo resuelto

*Problema*: leer una temperatura en grados Celsius e informar su equivalente en Fahrenheit con $°F = \tfrac{9}{5}\,°C + 32$.

```cpp
#include <iostream>
using namespace std;

int main() {
    float celsius;
    cout << "Temperatura en °C: ";
    cin >> celsius;
    float fahrenheit = celsius * 9 / 5 + 32;
    cout << celsius << " °C equivalen a " << fahrenheit << " °F" << endl;
    return 0;
}
```

Con `celsius = 100` se obtiene `100 * 9 = 900`, luego `900 / 5 = 180` y finalmente `180 + 32 = 212`, que coincide con el punto de ebullición del agua. Fijate que `celsius` es `float`, por lo que la división no pierde decimales. Si se escribiera `celsius * (9 / 5)`, la expresión `9 / 5` se calcularía primero como división entera (da `1`) y el resultado para 100 °C sería 132, un valor incorrecto.

> **Ojo:** `9 / 5` entre enteros vale 1, no 1,8. Si necesitás división con decimales, usá al menos un operando de punto flotante (`9.0 / 5`).

> **Tip:** usá `getline(cin >> ws, texto)` para leer cadenas con espacios. `cin >> texto` se corta en el primer espacio.

## Variables y asignación

Un programa necesita recordar valores mientras se ejecuta: el número que ingresó la persona, el total acumulado hasta el momento, la cantidad de intentos. Las variables son el mecanismo para hacerlo, y la asignación es la operación que les da valor.

### Conceptos clave

- **Variable**: entidad cuyo valor puede cambiar a lo largo de la ejecución. En C++ es un espacio de memoria que guarda un dato de un tipo dado.
- **Declaración**: indicar el tipo y el nombre (identificador) antes de usarla: `int edad;`.
- **Inicialización**: dar un valor en la declaración: `int edad = 18;`.
- **Asignación**: guardar un valor en una variable ya declarada con el operador `=`.
- **Constante**: valor que no cambia, declarada con `const`: `const int MAX = 10;`.
- **Identificador**: nombre de una variable, función u otra entidad.

### Desarrollo teórico

Las reglas para construir un identificador válido son:

- Solo se usan letras del alfabeto inglés (A-Z, a-z), dígitos (0-9) y el guion bajo `_`.
- No puede comenzar con un dígito.
- Se distinguen mayúsculas de minúsculas: `variable`, `VARIABLE` y `Variable` son tres identificadores distintos.
- No puede ser una palabra reservada del lenguaje.

Además, conviene elegir nombres descriptivos (`promedio`, `cantidad_vocales`) y mantener un estilo uniforme, como separar palabras con guion bajo o usar *camel case* (`cantidadVocales`).

La asignación **no es una igualdad matemática**. La instrucción `x = x + 1;` no es una ecuación absurda: se evalúa primero el lado derecho (el valor actual de `x` más 1) y luego el resultado se guarda en `x`. Es una orden que modifica el estado de la memoria, y por eso se dice que la programación es *imperativa*: el programa es una secuencia de órdenes que cambian el estado.

Dos usos típicos de las variables aparecen constantemente:

- **Contador**: se incrementa de a uno (`cantidad++`) cada vez que ocurre algo.
- **Acumulador**: suma valores (`suma += numero`). Equivale a `suma = suma + numero`.

Ambos deben **inicializarse** antes de usarse (normalmente en 0). Una variable declarada y no inicializada contiene un valor indeterminado.

### Ejemplo resuelto

*Problema*: intercambiar los valores de dos variables `x` e `y`.

Asignar `x = y` y luego `y = x` no sirve: el primer valor de `x` se pierde. Hace falta una variable auxiliar:

```cpp
int x = 3, y = 7;
int aux = x;   // aux = 3
x = y;         // x = 7
y = aux;       // y = 3
```

Traza paso a paso:

| Paso | `x` | `y` | `aux` |
|---|---|---|---|
| Inicial | 3 | 7 | - |
| `aux = x` | 3 | 7 | 3 |
| `x = y` | 7 | 7 | 3 |
| `y = aux` | 7 | 3 | 3 |

El resultado final es `x = 7` e `y = 3`. La **traza** (seguir el valor de cada variable instrucción por instrucción) es la técnica básica para entender y depurar un programa.

> **Ojo:** no confundas `=` (asignación) con `==` (comparación). Escribir `if (x = 5)` asigna 5 a `x` y la condición siempre es verdadera.

> **Importante:** una variable debe tener un valor conocido antes de usarse en una expresión. Inicializá siempre los contadores y acumuladores.

## Secuencia, selección y lógica

Los programas más simples ejecutan sus instrucciones una tras otra. Pero casi todo problema real exige tomar decisiones: aplicar un descuento solo si se cumple una condición, informar si un número es par o impar. Las estructuras de control son las herramientas que alteran el flujo de ejecución. Este tema trata la secuencia y la selección.

### Conceptos clave

- **Estructura de control**: herramienta que modifica el flujo de ejecución. Se clasifican en secuencia, selección y repetición.
- **Secuencia**: dos o más sentencias que se ejecutan una detrás de otra, en orden.
- **Selección**: ejecución de una parte del código según se cumpla o no una condición.
- **Condición**: expresión que se evalúa a verdadero o falso.
- **if / if-else**: selección simple y selección doble.
- **switch**: selección múltiple sobre el valor de una variable.

### Desarrollo teórico

**Secuencia.** Es el comportamiento por defecto: la instrucción 1, luego la 2 y luego la 3. El orden importa, porque cada instrucción puede depender del estado que dejó la anterior.

**Selección simple e if-else.** `if (condición) { ... }` ejecuta el bloque solo si la condición es verdadera. Con `else` se define qué hacer en el caso contrario:

```cpp
if (condicion) {
    // se ejecuta si la condición es verdadera
} else {
    // se ejecuta si es falsa
}
```

Se pueden **anidar** o encadenar decisiones con `else if` cuando hay más de dos caminos. En un diagrama de flujo, cada `if` es un rombo con dos salidas.

**Condiciones compuestas.** Los operadores `&&`, `||` y `!` permiten expresar condiciones como "es lunes **y** compró más de 3 artículos". Para decidir entre `&&` y `||` conviene traducir la frase a lógica: cuando se piden dos requisitos simultáneos corresponde `&&`; cuando alcanza con uno de varios, `||`.

**switch.** Cuando se compara una misma variable con distintos valores constantes, `switch` resulta más claro que una cadena de `else if`:

```cpp
switch (dia) {
    case 1:
        cout << "Lunes";
        break;
    case 2:
        cout << "Martes";
        break;
    default:
        cout << "Otro día";
}
```

Si un `case` coincide, se ejecuta su bloque y también los que siguen hasta encontrar un `break` (o el final del `switch`). El caso `default` se ejecuta cuando ningún valor coincide.

### Ejemplo resuelto

*Problema*: un cliente de un supermercado accede a un descuento si compra un lunes más de 3 artículos. Informar cuando corresponda.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string dia;
    int cantidad;
    cout << "Día de la semana: ";
    cin >> dia;
    cout << "Cantidad de artículos: ";
    cin >> cantidad;
    if (dia == "lunes" && cantidad > 3) {
        cout << "¡Accede al descuento!" << endl;
    }
    return 0;
}
```

La condición combina una comparación de cadenas con una numérica. Con `lunes` y 5 artículos ambas son verdaderas y se imprime el mensaje. Con `lunes` y 3 artículos la segunda es falsa, por lo que no se imprime nada. Con `martes` y 10 artículos la primera es falsa, por lo que tampoco se imprime nada.

Otro caso típico es clasificar un número: `if (n % 2 == 0)` informa PAR y `else` informa IMPAR. Como el resto de dividir por 2 solo puede ser 0 o 1 (para enteros no negativos), el `else` cubre exactamente el caso contrario.

> **Ojo:** si omitís el `break` en un `case`, la ejecución "cae" al siguiente caso y se imprimen resultados de más.

> **Tip:** cuando una condición se vuelve confusa, dibujá su tabla de verdad o aplicá De Morgan para reescribirla de forma equivalente y más legible.

## Iteración y control de bucles

Muchos problemas requieren repetir una misma acción: leer 10 nombres, sumar valores hasta que se ingrese un cero, recorrer los dígitos de un número. Las estructuras de repetición, o **bucles** (loops), ejecutan un bloque mientras se cumpla una condición. Este tema compara las tres formas de bucle de C++ y los patrones que se usan con ellas.

### Conceptos clave

- **Bucle (iteración)**: repetición de un bloque de instrucciones.
- **while**: evalúa la condición al principio; el bloque puede no ejecutarse nunca.
- **do-while**: evalúa la condición al final; el bloque se ejecuta al menos una vez.
- **for**: repite un número conocido de veces usando un contador.
- **Centinela**: valor especial que indica el fin de la entrada (por ejemplo, 0 o un número negativo).
- **break**: termina el bucle en el que se encuentra. **continue**: salta al siguiente ciclo del bucle.

### Desarrollo teórico

Cada tipo de bucle se adapta a una situación:

| Bucle | Cuándo evalúa | Mínimo de ejecuciones | Uso típico |
|---|---|---|---|
| `while` | Antes de cada vuelta | 0 | Se repite hasta que ocurra algo (centinela, condición de corte) |
| `do-while` | Después de cada vuelta | 1 | Validar una entrada: hay que pedir el dato al menos una vez |
| `for` | Antes de cada vuelta | 0 | Se sabe cuántas veces repetir |

La estructura del `for` agrupa tres partes: inicialización, condición y actualización.

```cpp
for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
```

Para escribir un bucle correcto hay que preguntarse siempre: ¿qué variable controla la condición?, ¿cómo cambia en cada vuelta? y ¿en qué momento la condición se hace falsa? Si la variable de control no se modifica dentro del bucle, este nunca termina (bucle infinito).

**Patrón de lectura con centinela.** Se lee el primer dato antes del bucle, se procesa dentro y se vuelve a leer al final de cada vuelta. Así el valor centinela nunca se procesa como dato.

**break y continue.** `break` interrumpe el bucle completo; sirve para salir cuando se encuentra lo buscado. `continue` omite el resto de la iteración actual y pasa a la siguiente, útil para ignorar ciertos valores (por ejemplo, números negativos) sin cortar el bucle.

### Ejemplo resuelto

*Problema*: calcular el promedio de los números ingresados por teclado; la entrada termina al ingresar 0.

```cpp
#include <iostream>
using namespace std;

int main() {
    int numero, cantidad = 0;
    float suma = 0;
    cout << "Número (0 para terminar): ";
    cin >> numero;
    while (numero != 0) {
        suma += numero;
        cantidad++;
        cout << "Número (0 para terminar): ";
        cin >> numero;
    }
    if (cantidad > 0) {
        cout << "Promedio: " << suma / cantidad << endl;
    } else {
        cout << "No se ingresaron números." << endl;
    }
    return 0;
}
```

Con la entrada `4`, `6`, `0`: la suma queda en 10, la cantidad en 2 y el promedio es 5. El cero no se incorpora a la suma porque el bucle termina antes. El `if` final evita dividir por cero cuando el primer valor ingresado ya es el centinela. Además, `suma` es `float`, así que `suma / cantidad` conserva decimales.

**Descomponer un número en dígitos.** Para sumar las cifras de 438 se repite: tomar la última cifra con `% 10` y descartarla con `/ 10`.

```cpp
int suma = 0;
while (numero > 0) {
    suma += numero % 10;
    numero /= 10;
}
```

Traza con `numero = 438`: la cifra 8 (`suma = 8`, `numero = 43`), luego la 3 (`suma = 11`, `numero = 4`) y por último la 4 (`suma = 15`, `numero = 0`). El bucle termina con `suma = 15`. Aquí la división entera es justamente lo que permite "recortar" la última cifra.

**Validar una entrada** con `do-while`:

```cpp
char opcion;
do {
    cout << "¿Continuar? (s/n): ";
    cin >> opcion;
    opcion = tolower(opcion);
} while (opcion != 's' && opcion != 'n');
```

La pregunta se hace al menos una vez y se repite mientras la respuesta no sea válida. `tolower` pasa a minúscula, de modo que `S` y `s` se aceptan por igual. Fijate que la condición de continuación usa `&&`: se sigue pidiendo mientras no sea `'s'` y tampoco `'n'`.

> **Ojo:** si en un `while` no modificás nunca la variable que aparece en la condición, el programa queda en un bucle infinito.

> **Tip:** con un acumulador o un contador, inicializalo fuera del bucle. Si lo inicializás adentro, se reinicia en cada vuelta.

## Cadenas de caracteres

Los textos (nombres, frases, palabras) se representan con cadenas de caracteres, que en C++ son sucesiones de elementos de tipo `char`. Trabajar con ellas combina lo visto sobre variables, bucles y condiciones, y es la base de muchos ejercicios de procesamiento de texto.

### Conceptos clave

- **Cadena (string)**: sucesión de caracteres. Se usa el tipo `string`, que requiere `#include <string>`.
- **Índice**: posición de un carácter dentro de la cadena. El primero está en la posición 0.
- **Concatenación**: unir cadenas con el operador `+`.
- **Subcadena**: porción de una cadena.

### Desarrollo teórico

Una cadena se declara y se inicializa como cualquier variable: `string c = "Esta es una cadena";`. La asignación `c2 = c1;` copia los caracteres de una cadena en la otra. Los caracteres se acceden con el operador `[]` y el índice: en `"hola"`, `[0]` es `'h'` y `[3]` es `'a'`. Las cadenas son **mutables**: con `c[0] = 'H';` se modifica un carácter.

Las operaciones más usadas son:

| Operación | Efecto |
|---|---|
| `cadena.length()` | Cantidad de caracteres |
| `cadena.find(sub)` | Índice de la primera aparición de `sub`, o `string::npos` si no está |
| `cadena.substr(desde, cantidad)` | Devuelve la subcadena indicada |
| `cadena.erase(desde, cantidad)` | Elimina caracteres de la cadena original |
| `cadena.replace(desde, cantidad, nuevo)` | Reemplaza esos caracteres por `nuevo` |
| `toupper(c)` / `tolower(c)` | Convierte un carácter a mayúscula o minúscula |

Para **recorrer** una cadena se usa un `for` con índice desde 0 hasta `length() - 1`. Los operadores relacionales (`==`, `!=`, `<`) también funcionan entre cadenas.

### Ejemplo resuelto

*Problema 1*: contar cuántas letras `a` tiene una frase.

```cpp
string frase;
getline(cin >> ws, frase);
int cantidad = 0;
for (int i = 0; i < frase.length(); i++) {
    if (frase[i] == 'a') {
        cantidad++;
    }
}
cout << "Cantidad de a: " << cantidad << endl;
```

Para `"casa blanca"` el programa cuenta 4 letras `a`. Recorre las 11 posiciones (índices 0 a 10), compara cada carácter y acumula en un contador.

*Problema 2*: imprimir una por línea las palabras de una frase separadas por un espacio (sin espacios al principio ni al final).

```cpp
string frase = "voy a casa";
size_t pos = frase.find(' ');
while (pos != string::npos) {
    cout << frase.substr(0, pos) << endl;
    frase.erase(0, pos + 1);
    pos = frase.find(' ');
}
cout << frase << endl;
```

Traza: `find` encuentra el espacio en la posición 3, imprime `voy` y borra `"voy "`, con lo que la frase queda `"a casa"`. Se repite con `a`, y queda `"casa"`. Como ya no hay espacios, `find` devuelve `string::npos`, el bucle termina y se imprime la última palabra. Esa última línea fuera del bucle es necesaria porque la última palabra no está seguida de un espacio.

> **Ojo:** el operador `[]` no verifica que el índice esté dentro de la cadena. Acceder o escribir más allá de `length() - 1` no produce un error de compilación, pero puede pisar memoria que pertenece a otro dato.

> **Importante:** según la codificación, los caracteres con tilde pueden ocupar más de un byte, por lo que `length()` y los índices no siempre coinciden con la cantidad de letras visibles. Por eso estos ejercicios trabajan con vocales sin tilde.

## Modularización: funciones

Cuando un programa crece, un único bloque de código se vuelve difícil de leer, de probar y de modificar. Modularizar es dividir el programa en partes con una responsabilidad clara, lo mismo que se hace al descomponer un problema. En C++ los módulos son las funciones. Si una tarea aparece varias veces (buscar y depositar un papel, calcular la suma de los dígitos), se escribe una sola vez y se invoca cuando hace falta.

### Conceptos clave

- **Función**: grupo de sentencias con una funcionalidad lógica, al que se puede invocar desde distintas partes del programa.
- **Parámetro (formal)**: dato que la función necesita recibir "desde afuera", declarado con su tipo y nombre en la definición.
- **Argumento (parámetro real)**: valor concreto que se pasa al invocar la función.
- **Valor de retorno**: resultado que la función devuelve con `return`. Su tipo es obligatorio en la definición.
- **void**: tipo que indica que la función no retorna ningún valor (es lo que otros enfoques llaman procedimiento).
- **Invocación (llamada)**: uso de la función escribiendo su nombre seguido de los argumentos entre paréntesis.

### Desarrollo teórico

La definición de una función indica su tipo de retorno, su nombre y sus parámetros:

```cpp
tipo_retorno nombre(tipo1 parametro1, tipo2 parametro2) {
    // sentencias
    return valor;
}
```

El nombre debe ser un identificador válido y **descriptivo** (`suma_digitos`, `esPar`). Una función puede no tener parámetros (`funcion()`) y, si es `void`, el `return` puede omitirse. Si no es `void`, el `return` es obligatorio. Los parámetros se comportan dentro de la función como variables.

Para decidir qué dato es qué, hay una pregunta guía:

- **Parámetro**: esta información necesita venir de otra función.
- **Valor de retorno**: esta información necesita salir de la función.
- **Variable local**: solo esta función necesita conocer esta información.

Todo lo que no se retorna desaparece al terminar la función. Una función puede invocarse desde cualquier otra, y el resultado se puede usar donde pueda escribirse una expresión (en una asignación, en un `if`, dentro de un `cout`). Los argumentos se asocian a los parámetros según su **posición**. Para invocar una función, su definición debe aparecer antes del punto de uso (alternativamente, se puede declarar antes su *prototipo*, es decir, solo la cabecera terminada en `;`).

**Principios de buen diseño.** Cada función debe ser **atómica**: una única responsabilidad. Todo dato que necesite desde fuera debe llegar por parámetro y todo resultado debe devolverse por `return`. Una función no debería leer ni imprimir datos a menos que esa sea, justamente, su tarea. Así se vuelve reutilizable y fácil de probar. Cuando una tarea tiene subtareas, unas funciones pueden invocar a otras.

### Ejemplo resuelto

*Problema*: informar si un número es par e imprimir la suma de sus dígitos, usando funciones.

```cpp
#include <iostream>
using namespace std;

bool es_par(int numero) {
    return numero % 2 == 0;
}

int suma_digitos(int numero) {
    int suma = 0;
    while (numero > 0) {
        suma += numero % 10;
        numero /= 10;
    }
    return suma;
}

int main() {
    int n;
    cout << "Ingresá un número entero positivo: ";
    cin >> n;
    if (es_par(n)) {
        cout << "El número es PAR" << endl;
    } else {
        cout << "El número es IMPAR" << endl;
    }
    cout << "La suma de sus dígitos es " << suma_digitos(n) << endl;
    return 0;
}
```

Con `n = 438`: `es_par(438)` devuelve `true` (438 % 2 es 0) y `suma_digitos(438)` devuelve 15. Observá que las funciones no leen ni imprimen: reciben `numero` y devuelven un resultado, y es `main` quien se ocupa de la interacción con la persona. Eso permite reutilizar `suma_digitos` en otro programa sin cambiar una línea. La función `suma_digitos` supone una precondición: el argumento es positivo.

Un valor `bool` se imprime como `1` o `0`, lo que es compatible con enunciados que piden devolver 1 para "par" y 0 para "no par".

> **Ojo:** una función que imprime el resultado en lugar de retornarlo no se puede combinar con otras. Si `mostrar_suma_digitos` solo imprime, no tiene valor de retorno útil (es `void`) y no sirve para seguir calculando con esa suma.

> **Importante:** la definición debe conocerse antes de la llamada. Si invocás una función que aparece más abajo en el archivo y no declaraste su prototipo, el compilador informa un error.

## Parámetros por valor y por referencia

La comunicación entre funciones se hace a través de los parámetros. La pregunta clave es qué se le pasa exactamente a la función: ¿una copia del dato o el dato mismo? De la respuesta depende si la función puede modificar las variables de quien la llama.

### Conceptos clave

- **Pasaje por valor**: la función recibe una copia del argumento. Modificar el parámetro no afecta a la variable original.
- **Pasaje por referencia**: el parámetro es un alias de la variable original. Se declara con `&` y las modificaciones sí se ven afuera.
- **Parámetro constante**: declarado con `const`, no puede modificarse dentro de la función.
- **Alias**: otro nombre para el mismo espacio de memoria.

### Desarrollo teórico

Cada vez que se invoca una función se reserva un espacio de memoria para sus parámetros y sus variables locales; al terminar, ese espacio se libera. Con el **pasaje por valor** (la forma por defecto) el parámetro es una variable nueva inicializada con el valor del argumento, así que cambiarla solo cambia la copia. Con el **pasaje por referencia**, el parámetro guarda la dirección de la variable original y funciona como un alias: el argumento debe ser una variable (no un literal ni una expresión) porque la función va a trabajar sobre ella.

| Aspecto | Por valor | Por referencia |
|---|---|---|
| Declaración | `void f(int x)` | `void f(int &x)` |
| Qué recibe la función | Una copia | La variable original (alias) |
| ¿Modifica la variable de quien llama? | No | Sí |
| Argumento permitido | Variable, literal o expresión | Solo variables |
| Uso típico | Datos de entrada | Resultados adicionales o datos que se modifican |

C++ permite combinar con `const`: `const string &texto` evita copiar una cadena grande y a la vez impide modificarla. La regla general es retornar un único resultado con `return` y usar referencias cuando la función debe modificar una variable de quien la llama o devolver más de un resultado.

### Ejemplo resuelto

*Problema*: determinar el efecto de dos funciones que "suman 10".

```cpp
void sumar_por_valor(int n) { n = n + 10; }
void sumar_por_referencia(int &n) { n = n + 10; }

int main() {
    int x = 5;
    sumar_por_valor(x);        // x sigue valiendo 5
    sumar_por_referencia(x);   // x pasa a valer 15
    cout << x << endl;
    return 0;
}
```

En la primera llamada, `n` es una copia de `x`: valía 5, se modifica a 15 dentro de la función y esa copia desaparece al terminar. En la segunda, `n` es otro nombre para `x`, así que `x` pasa a valer 15. El programa imprime 15.

Un uso natural de la referencia es el intercambio de dos valores:

```cpp
void intercambiar(int &a, int &b) {
    int aux = a;
    a = b;
    b = aux;
}
```

Con `x = 3` e `y = 7`, después de `intercambiar(x, y)` quedan `x = 7` e `y = 3`. La variable `aux` es **local**: existe solo mientras la función se ejecuta. Con pasaje por valor, la función intercambiaría copias y las variables originales no cambiarían.

> **Ojo:** si pasás la misma variable a dos parámetros por referencia, ambos son alias del mismo dato y las modificaciones se superponen. Al hacer una traza, anotá qué parámetro es alias de qué variable.

> **Tip:** al seguir una traza, distinguí las variables por función. Dos funciones pueden tener variables con el mismo nombre (por ejemplo, `b`) que son espacios de memoria completamente distintos.

## Variables locales y globales

Dónde se declara una variable determina dónde existe y desde dónde puede usarse. Este tema precisa esos conceptos y explica por qué se desaconsejan las variables globales.

### Conceptos clave

- **Ámbito**: lugar donde una variable existe. **Alcance**: lugar donde puede utilizarse.
- **Variable local**: declarada dentro de una función o de un bloque `{ }`; existe solo mientras el control de ejecución esté ahí.
- **Variable global**: declarada fuera de todas las funciones; es visible en todo el programa.
- **Ocultamiento (shadowing)**: una variable local con el mismo nombre que otra de un ámbito exterior "oculta" a esta dentro de su bloque.

### Desarrollo teórico

Un bloque de código queda determinado por un par de llaves. Una variable declarada en un bloque es local a él y deja de existir al cerrarse. Esto incluye a la variable de un `for`: en `for (int i = 0; ...)`, `i` existe solo en el bucle. Las variables locales de una función se crean al invocarla y se destruyen al terminar. Eso explica por qué la información que debe sobrevivir se retorna o se pasa por referencia.

Las variables globales, aunque resultan cómodas, se desaconsejan por tres motivos:

1. Disminuyen la legibilidad: no se sabe quién las modifica.
2. Provocan **efectos colaterales**: un cambio en una parte del programa altera, sin que se advierta, el comportamiento de otra.
3. Dificultan la modularidad: una función que depende de una global no es independiente y no se puede reutilizar sin arrastrarla.

La alternativa es pasar los datos como parámetros y devolver los resultados. Las declaraciones anidadas con el mismo nombre tampoco son recomendables por razones de claridad.

### Ejemplo resuelto

```cpp
#include <iostream>
using namespace std;

int x = 10;  // global

int main() {
    int x = 20;      // local de main: oculta la global
    {
        int x = 30;  // local del bloque interno
        cout << x << endl;
    }
    cout << x << endl;
    cout << ::x << endl;
    return 0;
}
```

La salida es 30, luego 20 y luego 10. Dentro del bloque interno, la `x` más cercana vale 30. Al cerrarse el bloque esa variable deja de existir y se vuelve a ver la `x` de `main`, que vale 20. El operador `::x` accede explícitamente a la global, que vale 10. La regla es que se usa siempre la declaración más cercana hacia afuera.

Una situación típica donde una global parece útil es un saldo bancario compartido por varias funciones. Funciona, pero cualquier función puede modificarlo por error. Pasar el saldo por referencia (o retornar el nuevo saldo) deja explícito qué función modifica qué dato.

> **Ojo:** declarar de nuevo una variable dentro de una función con el mismo nombre que una global no modifica la global: crea otra variable distinta que la oculta.

> **Importante:** una variable local no conserva su valor entre llamadas distintas a la función; se vuelve a crear en cada invocación.

## Arreglos y algoritmos sobre arreglos

Con las variables simples, guardar 100 notas exigiría 100 nombres distintos. Un arreglo (array) resuelve el problema agrupando varios datos del mismo tipo bajo un único nombre. Es la primera estructura de datos compuesta que se estudia y sobre ella se construyen los algoritmos básicos de recorrido, inserción, eliminación, búsqueda y ordenamiento.

### Conceptos clave

- **Arreglo**: colección de datos del mismo tipo, almacenados de forma contigua en memoria e identificados con un nombre único. En esta asignatura se trabaja con arreglos de una dimensión.
- **Índice**: posición de un elemento. Va de 0 a DF − 1.
- **Dimensión física (DF)**: cantidad máxima de elementos que el arreglo puede contener, fijada en la declaración.
- **Dimensión lógica (DL)**: cantidad de elementos realmente ocupados. Siempre cumple $0 \le DL \le DF$.
- **Tamaño estático**: el tamaño no puede cambiar durante la ejecución.

### Desarrollo teórico

**Declaración.** Se indica el tipo de los elementos, el nombre y, entre corchetes, la dimensión física:

```cpp
const int DF = 5;
int a[DF] = {4, 8, 15};   // DF = 5, DL = 3 (la DL la lleva el programa)
int b[] = {8, 7, 6, 4};   // el tamaño se deduce: 4 elementos
```

Si se inicializa con menos valores que la DF, el resto queda en 0. Si se listan más valores que la DF, es un error de compilación. Un arreglo declarado sin inicializar contiene valores indeterminados. Declarado en `main`, ocupa memoria durante todo el programa; declarado dentro de una función o un bloque, solo mientras este se ejecuta.

**Acceso y recorrido.** Se accede con `a[i]`. La DL no existe en el lenguaje: **la lleva el programador** en una variable aparte y es la que guía los recorridos. Se itera hasta DL (no hasta DF), porque las posiciones posteriores no tienen datos válidos:

```cpp
for (int i = 0; i < dl; i++) {
    cout << a[i] << " ";
}
```

C++ no verifica que el índice esté dentro del arreglo: usar `a[DF]` o `a[-1]` compila, pero produce comportamiento indefinido.

**Arreglos y funciones.** Al pasar un arreglo a una función, esta trabaja sobre el arreglo original (no sobre una copia), de modo que sus modificaciones se ven afuera. Como la función no conoce la cantidad de elementos, hay que pasarla como parámetro adicional (la DL). Si la función modifica la DL (por ejemplo, al insertar), esta se pasa por referencia.

**Algoritmos básicos.**

1. *Insertar al final*: si $DL < DF$, se guarda en `a[dl]` y se incrementa `dl`.
2. *Insertar en una posición*: se corren hacia la derecha los elementos desde la posición, empezando por el último, y luego se coloca el nuevo.
3. *Eliminar*: se corren hacia la izquierda los elementos que siguen y se decrementa `dl`.
4. *Buscar*: recorrido secuencial que corta al encontrar el valor y devuelve su índice (o −1 si no está).
5. *Recorridos acumulativos*: sumar, promediar, hallar el máximo, contar elementos con cierta propiedad.
6. *Ordenar*: reubicar los elementos según un criterio. Por **selección**, en cada pasada se busca el mínimo del tramo no ordenado y se lo coloca al comienzo de ese tramo.

<!-- REVISAR: el ordenamiento y la eliminación de duplicados aparecen en el TP3 pero no en las presentaciones; se incluyó el ordenamiento por selección como ejemplo estándar, confirmar con la cátedra el algoritmo esperado -->

### Ejemplo resuelto

*Problema*: dado un arreglo con DL elementos, insertar un valor en una posición y buscar un valor.

```cpp
bool insertar(int a[], int &dl, int df, int pos, int valor) {
    if (dl >= df || pos < 0 || pos > dl) {
        return false;                  // no hay lugar o posición inválida
    }
    for (int i = dl; i > pos; i--) {
        a[i] = a[i - 1];               // corre a la derecha
    }
    a[pos] = valor;
    dl++;
    return true;
}

int buscar(int a[], int dl, int valor) {
    for (int i = 0; i < dl; i++) {
        if (a[i] == valor) {
            return i;
        }
    }
    return -1;
}
```

Con `a = [2, 5, 9]`, `dl = 3` y `df = 5`, al insertar 7 en la posición 1:

| Paso | Contenido del arreglo |
|---|---|
| Inicial | `[2, 5, 9]` |
| `i = 3`: `a[3] = a[2]` | `[2, 5, 9, 9]` |
| `i = 2`: `a[2] = a[1]` | `[2, 5, 5, 9]` |
| `a[1] = 7` | `[2, 7, 5, 9]` |

La DL pasa a 4. Se recorre desde el final para no pisar datos todavía no copiados; hacerlo desde el principio sobrescribiría los valores. `dl` va por referencia porque la función debe modificarla. `buscar(a, dl, 5)` devuelve 2 y `buscar(a, dl, 8)` devuelve −1.

Para **eliminar** la posición `pos` (con $0 \le pos < DL$):

```cpp
void eliminar(int a[], int &dl, int pos) {
    for (int i = pos; i < dl - 1; i++) {
        a[i] = a[i + 1];
    }
    dl--;
}
```

El ordenamiento por selección:

```cpp
void ordenar(int a[], int dl) {
    for (int i = 0; i < dl - 1; i++) {
        int pos_min = i;
        for (int j = i + 1; j < dl; j++) {
            if (a[j] < a[pos_min]) {
                pos_min = j;
            }
        }
        int aux = a[i];
        a[i] = a[pos_min];
        a[pos_min] = aux;
    }
}
```

Con `[3, 1, 2]`: en la primera pasada el mínimo está en la posición 1 y se intercambia con la 0, lo que da `[1, 3, 2]`. En la segunda, el mínimo del tramo restante está en la posición 2 y se intercambia con la 1, lo que da `[1, 2, 3]`. Para ordenar de mayor a menor basta invertir la comparación (`>` en lugar de `<`) y buscar el máximo.

> **Ojo:** recorrer hasta DF en lugar de DL procesa posiciones sin datos válidos. Y no confundas el último índice con la cantidad de elementos: un arreglo de 5 posiciones tiene índices del 0 al 4.

> **Importante:** el tamaño de un arreglo es fijo. Si el espacio resulta insuficiente en ejecución, no se puede agrandar: hay que prever una DF adecuada o rechazar la inserción cuando $DL = DF$.

## Resumen para repasar

- Resolver un problema implica identificarlo, planificar, medir el éxito de la solución y comparar alternativas; la descomposición reduce un problema grande a partes simples, y el reconocimiento de patrones evita repetir pasos.
- Un algoritmo es finito, preciso, definido y eficaz; el programa es ese algoritmo escrito en un lenguaje, y el proceso es su ejecución.
- El compilador detecta errores sintácticos, pero no los lógicos: un programa que compila puede dar resultados incorrectos.
- En C++, cada variable tiene un tipo fijo; la división entre enteros descarta decimales, `%` entrega el resto y la asignación `=` guarda el resultado de evaluar el lado derecho (no es una igualdad).
- Las condiciones compuestas se construyen con `&&`, `||` y `!`, que usan evaluación en cortocircuito y cumplen las leyes de De Morgan; `=` y `==` no son lo mismo.
- `while` y `for` evalúan antes de ejecutar y pueden no ejecutarse nunca; `do-while` ejecuta al menos una vez, por lo que es el natural para validar entradas. En un `switch`, sin `break` la ejecución continúa en el caso siguiente.
- Una función atómica recibe lo que necesita por parámetros, devuelve su resultado con `return` y no lee ni imprime salvo que esa sea su tarea; la definición debe preceder a la invocación.
- Por valor la función trabaja con una copia; por referencia (`&`) trabaja con el original y puede modificarlo. Las variables locales desaparecen al terminar la función y las globales dificultan la modularidad por sus efectos colaterales.
- Un arreglo tiene dimensión física fija y dimensión lógica que lleva el programa; los recorridos se hacen hasta DL, los índices van de 0 a DF − 1 y C++ no controla que el índice esté en rango.
- Insertar y eliminar en un arreglo requieren correr elementos (hacia la derecha en la inserción, empezando por el último; hacia la izquierda en la eliminación) y actualizar la dimensión lógica.

## Preguntas de autoevaluación

1. Para el enunciado "calcular e informar el promedio de las edades de tres estudiantes", identificá los datos de entrada, el proceso y la salida. Luego explicá qué característica de un algoritmo se pierde si el paso se redacta como "sumar las edades y dividir por la cantidad de estudiantes que haya".
2. Explicá la diferencia entre un error sintáctico y uno lógico, dá un ejemplo de cada uno en C++ e indicá cuál detecta el compilador y por qué el otro puede pasar inadvertido.
3. Considerá `int x = 7; float y = x / 2;`. ¿Cuánto vale `y`? Justificá el resultado, proponé dos modificaciones distintas para que valga 3,5 y explicá por qué esas modificaciones funcionan.
4. Escribí un programa que lea números enteros hasta que se ingrese un negativo e informe cuántos de los leídos fueron pares. Justificá qué tipo de bucle elegiste y qué papel cumple el valor negativo.
5. Explicá qué ocurre al ejecutar un `switch` sobre `dia = 1` si el `case 1` no tiene `break`, y compará esa situación con una cadena de `if-else if` equivalente.
6. Sin ejecutarlo, determiná qué se imprime y justificá cada paso con una traza:

```cpp
   void f(int a, int &b) { a = a + 1; b = b + 1; }
   int main() {
       int x = 1, y = 1;
       f(x, y);
       f(y, x);
       cout << x << " " << y << endl;
       return 0;
   }
```

7. Dado un arreglo con DF = 6 y DL = 4, con los valores `[3, 8, 1, 9]`, describí paso a paso cómo se inserta el 5 en la posición 1 y cómo quedan el arreglo y la dimensión lógica. ¿Qué condición debe verificarse antes de insertar y qué ocurriría si se intentara una nueva inserción con DL = DF?
8. Justificá por qué una función que modifica una variable global es menos modular que una que recibe el dato por parámetro. Reescribí en palabras el diseño de una función de "retirar dinero" que no dependa de ninguna global.