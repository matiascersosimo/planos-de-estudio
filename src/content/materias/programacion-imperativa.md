---
nombre: "Programación Imperativa"
code: "00364"
resumen: "Aprender C++ paso a paso: arreglos, matrices, búsqueda, ordenamiento, registros, punteros, listas y recursividad, con ejemplos ejecutables y práctica guiada."
---

## Cómo estudiar PI desde la primera explicación

Esta guía desarrolla **Programación Imperativa, código 00364**, según el programa y el aula **2025–2C** de UNNOBA. No es la asignatura Introducción a la Programación Imperativa: PI continúa ese recorrido. Aun así, empezamos recuperando tipos, variables, funciones y trazas para que no tengas que recordar todo antes de abrir el manual. El lenguaje de los ejemplos es **C++11** y el foco está en las estructuras de bajo nivel que pide la materia.

La guía contiene 37 capítulos didácticos repartidos entre las cuatro unidades oficiales. Esa numeración de capítulos es editorial; no agrega unidades al programa. Cada capítulo explica un problema, decisiones y límites, ofrece un ejemplo o una traza y termina con práctica de ayuda decreciente. Las hojas de consulta incluyen relaciones, invariantes, fórmulas de conteo y condiciones de uso; sirven después de estudiar la explicación.

### Un método de trabajo activo

1. **Predecí:** antes de ejecutar, anotá qué entrada recibe el ejemplo y qué debería producir.
2. **Trazá:** registrá cómo cambian índices, cantidades o enlaces. Una tabla pequeña vale más que ejecutar veinte veces sin mirar el estado.
3. **Explicá:** justificá por qué se evalúa una condición y por qué el recorrido progresa.
4. **Ejecutá:** compilá, leé diagnósticos y contrastá el resultado con tu predicción.
5. **Modificá:** cambiá una entrada o requisito y anticipá qué parte del algoritmo necesita revisión.
6. **Comprobá:** probá vacío, un elemento, extremos, ausente y duplicados cuando tengan sentido.

No avances sólo porque un archivo «anda». Si no podés explicar dónde termina un bucle, qué representa `n` o quién libera un nodo, volvé a la traza. Un error es información sobre una hipótesis de tu programa: conviene reducirlo a un caso pequeño y corregir su causa.

### Vocabulario que vamos a construir

**Estado** es el conjunto de valores y relaciones relevantes en un momento. **Contrato** especifica entradas, condiciones y efectos. **Invariante** es una propiedad que debe mantenerse durante una operación. **Traza** registra una secuencia de estados. **Caso límite** es una situación de borde que puede exigir un tratamiento distinto, como vacío o capacidad llena. **Propiedad de memoria** identifica quién administra la vida de un objeto; no se deduce sólo de que alguien tenga su dirección.

Si una función dice que requiere `0 <= n <= capacidad`, esa condición forma parte de su uso correcto. Los ejemplos validan solicitudes de posiciones y operaciones, pero no pueden adivinar el tamaño real de cualquier dirección recibida. Los cálculos presuponen valores que entran en los tipos utilizados; los ejemplos recursivos se ejecutan con entradas pequeñas. Estos límites se explican donde intervienen.

## Mapa de las cuatro unidades del programa

| Unidad oficial | Capítulos de esta guía | Qué vas a aprender a hacer |
| --- | --- | --- |
| 1. Control anidado, arreglos y matrices | 1–10 | Traducir recorridos a índices, distinguir capacidad y cantidad, insertar, eliminar y operar con dos dimensiones. |
| 2. Búsqueda, ordenamiento y struct | 11–19 | Justificar precondiciones, encontrar primeras apariciones, comparar tres ordenamientos y conservar entidades completas. |
| 3. Punteros y listas | 20–29 | Leer direcciones y alias, administrar nodos, modificar enlaces, transferir propiedad y mantener una circular con último. |
| 4. Recursividad | 30–37 | Definir base y reducción, reconstruir llamadas y retornos, operar sobre números y estructuras y analizar costo. |

La modularización, legibilidad, documentación y selección de representaciones atraviesan todas las unidades. No se sustituyen los arreglos y nodos solicitados por contenedores que oculten el mecanismo; se menciona su contexto sin convertir ese contexto en un requisito nuevo.

## Laboratorio: descargar y ejecutar los ejemplos

Cada archivo siguiente es un programa independiente con funciones y una demostración `main`. **Compilá uno por vez**: unir todos los archivos en un solo ejecutable produciría varias funciones `main` y tipos de demostración que no están diseñados como una biblioteca conjunta.

- [Unidad 1: arreglos y matrices, C++](/planos-de-estudio/ejemplos/pi/unidad-1.cpp).
- [Unidad 2: búsqueda, ordenamientos y registros, C++](/planos-de-estudio/ejemplos/pi/unidad-2.cpp).
- [Unidad 3: listas lineales y circulares, C++](/planos-de-estudio/ejemplos/pi/unidad-3.cpp).
- [Unidad 4: recursividad, C++](/planos-de-estudio/ejemplos/pi/unidad-4.cpp).
- [Los cuatro programas y las instrucciones, ZIP](/planos-de-estudio/ejemplos/pi/ejemplos-pi.zip).

Guardá el archivo elegido y abrí la terminal en su carpeta. Con GCC instalado y disponible en PATH:

```text
g++ -std=c++11 -Wall -Wextra -pedantic-errors unidad-1.cpp -o unidad-1.exe
./unidad-1.exe
```

Cambiar el nombre permite compilar las demás unidades. Los programas no necesitan paquetes externos. Usan la biblioteca estándar de C++; los bloques del manual muestran funciones seleccionadas, mientras los archivos descargables incluyen cabeceras, tipos y auxiliares necesarios. Los comentarios BEGIN/END sólo delimitan ejemplos; `PI_SIN_MAIN` permite excluir la demostración durante pruebas y no necesita definirse para estudiar o ejecutar.

### Primera salida de control

La demostración de unidad 1 parte de `[4,9,4]`, inserta 7 en posición 1 y elimina los dos valores 4. Debe informar dos eliminaciones y mostrar `7 9`; la reserva válida informa 1. Si obtenés otra cosa, compará la secuencia de estados antes de editar funciones al azar. En C++ la salida habitual de `bool` sin otro formato es 1 o 0.

Los ejemplos se verificaron mediante compilación en modo C++11 y pruebas de resultados, límites y conservación de estructuras. Las pruebas apoyan el estudio; no convierten estos programas docentes en aplicaciones listas para producción ni garantizan todas las entradas posibles.

## 1. Volver a empezar: qué hace un programa en C++

Programar consiste en describir un procedimiento para transformar entradas en resultados. Si un comercio quiere conocer cuántos artículos quedan, primero necesitamos acordar qué se recibe, qué se conserva y qué se informa. El código viene después de esa decisión. Un programa puede compilar y resolver un problema distinto del pedido; por eso comenzamos leyendo la consigna y construyendo un ejemplo pequeño.

### Una primera ejecución, línea por línea

```cpp
#include <iostream>
int main() {
    int cantidad = 3;
    int porCaja = 4;
    int total = cantidad * porCaja;
    std::cout << total << '\n';
    return 0;
}
```

`#include` incorpora declaraciones necesarias para utilizar entrada y salida. `main` es el punto de entrada de este programa. Las llaves delimitan su cuerpo. `int cantidad = 3` crea una variable entera con un valor inicial; no establece una igualdad matemática eterna. La instrucción que crea `total` calcula 3 por 4 y conserva 12. Si después cambiáramos `cantidad`, `total` no se actualizaría automáticamente: habría que ejecutar otra asignación.

`std::cout` permite escribir en la salida y `<<` encadena lo que se envía. `\n` representa un salto de línea dentro de un literal de carácter. El punto y coma termina muchas instrucciones; no se agrega indiscriminadamente después de todo: escribirlo justo después de un `if` puede cambiar su significado.

### Tipos, valores y operaciones

Un **tipo** determina qué valores y operaciones corresponden. Usaremos `int` para enteros pequeños, `double` para aproximaciones reales, `char` para caracteres simples, `bool` para verdadero o falso y `std::string` para cadenas. Un identificador como `cantidad` nombra una variable; `"cantidad"` es texto literal. Para usar cadenas incluimos `<string>`.

La división depende de los operandos: `7 / 2` produce el entero 3; `7 / 2.0` produce 3.5. Si calculamos un promedio con división entera y recién después lo guardamos en un `double`, ya perdimos la parte fraccionaria. Necesitamos convertir antes: `static_cast<double>(suma) / cantidad`, con cantidad positiva. Una conversión no arregla una división por cero.

`=` asigna; `==` compara. `x = x + 1` toma el valor anterior de `x`, le suma uno y lo vuelve a guardar. Inicializar no es opcional cuando luego vamos a leer: un entero local sin inicializar no ofrece un valor útil garantizado. Del mismo modo, los enteros tienen rangos finitos; usar un tipo más grande no convierte la aritmética en ilimitada.

### Compilar, ejecutar y observar

Guardá el primer ejemplo como `inicio.cpp`. Con un compilador GCC configurado podés compilar mediante `g++ -std=c++11 -Wall -Wextra -pedantic-errors inicio.cpp -o inicio.exe` y ejecutar `./inicio.exe` en PowerShell. El programa del aula propone C++, MinGW y un editor como VS Code. El editor permite escribir; el compilador traduce y diagnostica; la terminal ejecuta. Instalar una extensión no garantiza que exista un compilador.

Primero leé el mensaje inicial de error, ubicá línea y contexto y recompilá. Un error puede generar varios mensajes secundarios. Los avisos ayudan a detectar problemas, pero su ausencia no prueba corrección. La [documentación de GCC](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html) explica esas opciones.

### Practicar sin saltar directamente al resultado

1. **Con ayuda:** cambiá `cantidad` a 5 y trazá las tres variables. **Respuesta:** 5, 4 y 20; el cálculo de `total` usa los valores presentes al ejecutarse.
2. **Con pista:** obtené un promedio de 7 y 8. Revisá dónde ocurre la división. **Respuesta:** `(7 + 8) / 2.0` da 7.5; `(7 + 8) / 2` da 7.
3. **Autónomo:** explicá por qué un resultado correcto para una entrada no basta. **Respuesta razonada:** puede depender accidentalmente de ese valor; deben analizarse otras entradas y los límites del contrato.

### Hoja de consulta del capítulo 1

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Variable y asignación | Una asignación usa el estado presente; no mantiene una igualdad matemática permanente. | Inicializar antes de leer y distinguir = de ==. |
| División y tipos | 7 / 2 es 3; 7 / 2.0 es 3.5. | Convertir antes de dividir; denominador distinto de cero. |
| Compilar y ejecutar | El editor, el compilador y el programa cumplen funciones distintas. | Avisos y compilación no prueban por sí solos el algoritmo. |

## 2. Funciones, parámetros y contratos: aprender a separar responsabilidades

Cuando un programa crece, mezclar lectura, cálculo, impresión y modificación de datos hace difícil seguirlo. Una función delimita una tarea. Antes de escribirla debemos poder completar la frase «recibe…, necesita que…, produce… y modifica…». Esa descripción constituye un **contrato**: condiciones de entrada y compromisos de salida. No es una palabra reservada de C++, sino una herramienta de diseño.

### Diseñar una función pequeña

Imaginemos que necesitamos saber si una cantidad está dentro de un límite. La función `bool valida(int cantidad, int capacidad)` puede devolver `cantidad >= 0 && cantidad <= capacidad`. No necesita imprimir ni leer teclado. Un programa principal decide qué hacer con ese resultado. Esto permite probar la función con cantidades 0, capacidad y capacidad más uno sin simular toda una conversación.

El **parámetro formal** aparece en la definición. El **argumento** es la expresión usada en una llamada concreta. Si llamamos `valida(n, 10)`, la función recibe valores para sus parámetros; el nombre de la variable del programa principal no necesita coincidir con el nombre del parámetro.

### Valor, referencia y resultado

En `void incrementar(int x)`, `x` es una copia del valor recibido. Cambiar esa copia no modifica la variable de origen. En `void incrementar(int& x)`, `x` se vincula como referencia a la variable del llamador; una asignación dentro de la función puede modificarla. La marca `&` forma parte de esta declaración y no significa aquí «obtener una dirección», significado que estudiaremos con punteros.

Una función también puede devolver un valor mediante `return`. No se debe confundir retorno con impresión: una función que escribe 12 no necesariamente devuelve 12. Si debemos indicar éxito y modificar una cantidad, podemos devolver `bool` y recibir esa cantidad por referencia. Más adelante `insertar` devolverá si pudo insertar y actualizará la dimensión lógica mediante `int& n`.

### Precondiciones y efectos observables

Para un arreglo fijaremos como precondición `0 <= n <= capacidad`, donde `n` cuenta elementos válidos. Una función puede verificar una posición solicitada, pero no puede deducir la capacidad real de cualquier puntero recibido. El llamador debe respetar el tamaño del almacenamiento. Documentar ese límite evita dar una falsa sensación de protección.

Cuando una función promete no alterar datos, utilizaremos parámetros `const` cuando corresponda. Eso ayuda al compilador a impedir ciertas modificaciones. No sustituye la explicación de qué datos lee y cuál es su resultado. Una función de búsqueda no debería ordenar silenciosamente un arreglo para encontrar algo: esa modificación inesperada cambia el contrato.

### Una traza de llamadas

Supongamos `int n = 2` y una llamada a `incrementar(n)` con referencia. Antes: `n` vale 2. Durante: el parámetro representa la misma variable. Después de `++x`: `n` vale 3. Al retornar no se pierde ese cambio. Con un parámetro por valor, la modificación afectaría sólo a la copia y `n` conservaría 2.

1. **Con ayuda:** separá las responsabilidades de «leer diez valores y calcular su máximo». **Respuesta:** lectura, cálculo del máximo y presentación pueden ser funciones distintas; el cálculo debe definir qué hace con cero valores.
2. **Con pista:** una función incrementa `n` pero afuera sigue igual. ¿Qué revisarías? **Respuesta:** si recibió por valor y si el resultado retornado fue utilizado.
3. **Autónomo:** escribí el contrato de una búsqueda. **Respuesta:** recibe un arreglo con `n` elementos válidos, no lo modifica y devuelve una posición válida si encuentra el valor o un indicador de ausencia definido, como −1.

### Hoja de consulta del capítulo 2

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Contrato | Entrada, precondición, resultado y modificaciones permitidas. | No exigir a una función garantías que no puede comprobar. |
| Valor / referencia | Copia de valor / acceso a la variable del llamador. | Usar int& n si se actualiza la dimensión externa. |
| Retorno / impresión | Devolver un dato no equivale a mostrarlo. | Separar cálculo, entrada y presentación. |

## 3. Control anidado: decidir y repetir con un propósito

Una estructura de control modifica el orden en que se ejecutan instrucciones. `if` elige según una condición; los bucles repiten. **Anidar** significa colocar una estructura dentro del cuerpo de otra. Lo importante no es cuántas llaves aparecen, sino qué representa cada nivel y qué cambia cuando empieza una nueva repetición.

### Elegir una estructura

Usá `if` cuando la decisión dependa de una condición general. Una cadena `if / else if / else` selecciona la primera rama cuya condición se cumple. Varios `if` independientes pueden ejecutar varias ramas. `switch` selecciona entre valores discretos admitidos por el lenguaje; en casos sencillos usamos `break` para evitar continuar hacia la rama siguiente.

`for` hace visibles inicialización, condición y actualización y suele ser cómodo cuando conocemos el recorrido. `while` evalúa antes del cuerpo y puede no ejecutar ninguna vez. `do / while` ejecuta una vez antes de comprobar. Elegir este último para validar no significa que toda entrada recibida se deba procesar: primero validamos y luego actuamos.

```cpp
void informarOpcion(int opcion) {
    switch (opcion) {
        case 1:
            std::cout << "Consultar\n";
            break;
        case 2:
            std::cout << "Modificar\n";
            break;
        default:
            std::cout << "Opcion no reconocida\n";
    }
}
```

Con opción 1 se imprime «Consultar» y `break` termina el `switch`. Sin ese `break`, la ejecución continuaría en las instrucciones de la rama siguiente, aunque su etiqueta diga 2. El caso `default` recibe valores no cubiertos, por ejemplo 8. No necesitamos colocar `break` al final de ese último bloque para que termine el `switch`, aunque puede escribirse por estilo.

### Construir un triángulo y entender los índices

Queremos imprimir una fila con una marca, luego dos y después tres. Antes del código dibujamos el resultado. El bucle exterior cuenta filas; el interior cuenta las marcas de esa fila. Cuando cambiamos de fila, el contador interior empieza de nuevo.

```cpp
void triangulo(int altura, char marca) {
    for (int fila = 1; fila <= altura; ++fila) {
        for (int columna = 0; columna < fila; ++columna) {
            std::cout << marca;
        }
        std::cout << '\n';
    }
}
```

Con altura 3, la primera fila ejecuta el interior para columna 0; la segunda para 0 y 1; la tercera para 0, 1 y 2. El salto de línea pertenece al cuerpo exterior, después del interior: si estuviera adentro, cada marca aparecería en una línea diferente. Las marcas totales son 1 + 2 + 3 = 6. No todos los bucles dobles ejecutan altura al cuadrado: hay que mirar sus límites.

### Acumuladores y condiciones compuestas

Un **contador** registra cantidad de casos; un **acumulador** combina valores. Si calculamos una suma por cada fila, el acumulador de fila se reinicia al comenzar esa fila. Si calculamos el total de toda la tabla, se inicializa antes de ambos bucles. Colocarlo en el nivel equivocado puede conservar un total anterior o borrarlo continuamente.

`&&` requiere ambas condiciones; `||`, al menos una. En los usos de operadores incorporados que veremos, `&&` evalúa primero la izquierda y no evalúa la derecha cuando la primera ya es falsa. Esta propiedad permite comprobar un índice antes de usarlo. Cambiar el orden puede convertir una condición aparentemente equivalente en un acceso inválido.

`break` sale del bucle más cercano que lo contiene, no de todos los bucles. `continue` salta al siguiente ciclo del bucle correspondiente. En un `while`, evitar accidentalmente la actualización con `continue` puede producir repetición indefinida. La forma más clara suele ser organizar bien condiciones y responsabilidades antes de agregar saltos.

1. **Con ayuda:** ¿cuántas marcas imprime altura 4? **Respuesta:** 10: las filas aportan 1, 2, 3 y 4.
2. **Con pista:** una suma de filas incluye las filas anteriores. Buscá dónde se inicializa. **Respuesta:** debe reiniciarse dentro del exterior y antes del interior.
3. **Autónomo:** diseñá un rectángulo de dos filas y cuatro columnas. **Respuesta:** exterior con dos iteraciones, interior con cuatro y salto después del interior; se imprimen ocho marcas.

### Hoja de consulta del capítulo 3

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Anidamiento | Cada bucle representa una dimensión de la tarea. | Ubicar reinicios y saltos de línea según su responsabilidad. |
| Triángulo | 1 + 2 + … + h = h(h+1)/2 marcas. | Altura no negativa; cuenta matemática sin desbordamiento. |
| Cortocircuito | En &&, la derecha no se evalúa si la izquierda es falsa. | Comprobar existencia o límite antes del acceso. |

## 4. Arreglos estáticos: capacidad no significa cantidad de datos

Una variable entera representa un valor. Un arreglo permite almacenar varios valores del mismo tipo y acceder a cada uno mediante un índice. Si declaramos `int edades[6] = {};`, reservamos seis posiciones enteras y las inicializamos a cero. Eso no demuestra que ya cargamos seis edades: la cantidad de datos significativos es otra decisión del programa.

### Dimensión física y dimensión lógica

Llamaremos **capacidad** o dimensión física al número de posiciones reservadas, y **dimensión lógica** `n` al número de elementos válidos que decidimos mantener. Nuestro convenio será ocupar sin huecos el prefijo desde 0 hasta `n - 1`. Con capacidad 6 y `n = 3`, sólo las primeras tres posiciones pertenecen al conjunto de datos. Aunque el resto contenga ceros, no son necesariamente edades cargadas.

El invariante fundamental es `0 <= n <= capacidad`. Un **invariante** es una propiedad que debe conservarse al ejecutar las operaciones. Insertar cambia `n`, no la capacidad. Eliminar reduce `n`, pero no encoge el arreglo declarado. Un arreglo vacío tiene `n = 0`; un arreglo lleno tiene `n = capacidad`.

### Índices y límites

La primera posición tiene índice 0. En un arreglo con seis posiciones, la última tiene índice 5. `a[6]` no representa una séptima celda disponible: es un acceso fuera del arreglo. C++ no verifica automáticamente todos estos límites en arreglos nativos; que una ejecución no falle visiblemente no vuelve correcto el acceso.

Debemos distinguir **índice físicamente válido** y **dato lógicamente válido**. Si `n = 3`, `a[4]` podría estar dentro de la capacidad, pero no pertenece a los datos que la operación debería consultar. Buscar en toda la capacidad puede encontrar valores residuales que ya fueron eliminados lógicamente.

### Un tamaño conocido al compilar

En esta guía usamos capacidades constantes: `const int CAPACIDAD = 20; int a[CAPACIDAD] = {};`. Un arreglo nativo de tamaño recibido en ejecución, como `int a[n]`, no es un arreglo de longitud variable admitido por C++11 estándar. Algunos compiladores aceptan extensiones; el comando con `-pedantic-errors` ayuda a reconocerlas. Más adelante veremos memoria dinámica, sin reemplazar aquí el arreglo estático pedido por la materia.

En el vocabulario del curso «estático» señala principalmente capacidad fija. No significa que toda variable de ese arreglo tenga duración de almacenamiento `static` en el sentido técnico de C++. Un arreglo local común puede tener duración automática. Separar capacidad de duración evita una confusión que se vuelve importante con punteros.

### Ejemplo trabajado

Declaramos capacidad 5, `n = 0`. Agregamos 12 en `a[n]` y después incrementamos `n`: ahora `n = 1`. Agregamos 7 en el nuevo `a[n]` y volvemos a incrementar: `n = 2`. El conjunto lógico es `[12, 7]`. Si incrementáramos primero, dejaríamos sin ocupar la posición 0 y romperíamos el convenio.

1. **Con ayuda:** capacidad 8 y `n = 5`: ¿qué índices recorremos? **Respuesta:** 0, 1, 2, 3 y 4.
2. **Con pista:** después de eliminar un dato de un arreglo lleno, ¿cuánta capacidad hay? **Respuesta:** la misma; cambia la cantidad lógica y queda un lugar disponible.
3. **Autónomo:** explicá por qué llenar con cero no reemplaza a `n`. **Respuesta:** cero puede ser un dato válido; necesitamos una cantidad explícita para distinguir ocupación de contenido.

![La capacidad contiene seis posiciones, pero sólo cuatro forman el prefijo lógico.](/planos-de-estudio/images/pi/dimensiones.svg)

*Esquema original. La capacidad contiene seis posiciones, pero sólo cuatro forman el prefijo lógico.*

### Hoja de consulta del capítulo 4

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Dimensiones | 0 ≤ n ≤ capacidad; datos válidos en [0,n). | Capacidad fija no significa todos los lugares cargados. |
| Índice | 0 ≤ i < n para consultar datos del prefijo. | No usar n como último índice válido. |
| Almacenamiento | Un arreglo nativo de C posiciones ocupa C·sizeof(T) bytes. | Capacidad fija y duración static son conceptos diferentes. |

## 5. Recorrer, buscar y resumir un arreglo

Recorrer significa visitar los elementos que pertenecen al conjunto lógico. No siempre necesitamos hacer la misma operación: una búsqueda puede detenerse al encontrar, un contador debe revisar todas las apariciones y un máximo conserva el mejor candidato encontrado. Elegimos el estado del algoritmo según la pregunta, no copiando un bucle sin explicar sus variables.

### Una búsqueda acompañada

Buscamos 9 en `[4, 9, 4]`. Empezamos en índice 0: hay 4, avanzamos. En índice 1 hay 9 y detenemos el recorrido. Si buscamos 8, llegamos a `i = 3`, fuera del prefijo lógico; informamos ausencia sin acceder a `a[3]`.

```cpp
int buscar(const int a[], int n, int valor) {
    int i = 0;
    while (i < n && a[i] != valor) {
        ++i;
    }
    return i < n ? i : -1;
}
```

La condición `i < n` aparece antes de `a[i] != valor`. Cuando `i == n`, el cortocircuito evita consultar una posición que no forma parte de los datos. El retorno usa el mismo criterio: si el índice todavía está dentro, es un hallazgo; en otro caso devolvemos −1. `-1` se elige porque no es un índice válido bajo nuestro convenio. El llamador debe comprobarlo antes de usar `a[pos]`.

### Contar no es buscar una sola vez

Para contar apariciones necesitamos un contador inicializado en cero y un recorrido completo. Detenerse en la primera aparición resolvería otra pregunta. Para hallar un máximo, iniciar el candidato en cero es incorrecto si todos los valores son negativos. Una mejor estrategia es tomar el primer dato, pero eso requiere que exista.

```cpp
bool maximo(const int a[], int n, int& resultado) {
    if (n == 0) {
        return false;
    }
    resultado = a[0];
    for (int i = 1; i < n; ++i) {
        if (a[i] > resultado) {
            resultado = a[i];
        }
    }
    return true;
}

int contar(const int a[], int n, int valor) {
    int cantidad = 0;
    for (int i = 0; i < n; ++i) {
        if (a[i] == valor) {
            ++cantidad;
        }
    }
    return cantidad;
}
```

`maximo` devuelve `false` si `n == 0` y no proporciona un nuevo resultado válido. Con `[−8, −3, −11]`, toma −8, lo reemplaza por −3 y conserva ese valor al comparar −11. La referencia de salida permite separar «no había datos» de un máximo numérico que podría ser cualquier entero permitido. El contrato general exige `n` válido y almacenamiento suficiente.

### Una traza que explica el estado

Para contar 4 en `[4, 9, 4]`, antes de empezar el contador vale 0. Después de índice 0 vale 1; después de índice 1 sigue 1; después de índice 2 vale 2. El invariante es «el contador registra las coincidencias del segmento ya recorrido». Esa frase explica por qué la inicialización y cada actualización son correctas.

El costo de estas operaciones depende del número de datos revisados. Contar y buscar un máximo necesitan mirar los `n` datos en el caso general. Buscar puede terminar antes, pero su peor caso también recorre `n`. No confundamos el mejor caso con una garantía de rapidez para toda entrada.

1. **Con ayuda:** buscá 4 en el ejemplo. **Respuesta:** devuelve 0, la primera aparición.
2. **Con pista:** ¿qué debería pasar con `maximo` sobre un arreglo vacío? **Respuesta:** debe informar que no hay máximo disponible; leer `a[0]` no es una solución.
3. **Autónomo:** diseñá un contador de mayores que 10. **Respuesta:** iniciar en cero, recorrer `i < n` e incrementar sólo cuando `a[i] > 10`; no finalizar tras el primer caso.

### Hoja de consulta del capítulo 5

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Búsqueda | Devuelve posición en [0,n) o −1. | Comprobar ausencia antes de usar el resultado como índice. |
| Máximo | El primer dato es candidato si n > 0. | En vacío informar ausencia; no asumir máximo cero. |
| Recorrido | Contar o resumir requiere O(n) en el caso general. | El contador resume sólo la zona ya procesada. |

## 6. Insertar y eliminar: conservar el orden de los datos

Un arreglo no abre un hueco automáticamente. Para insertar un valor en el medio y conservar el orden relativo de los anteriores debemos mover datos. Antes de programar separamos tres preguntas: si hay capacidad, si la posición tiene sentido y en qué dirección conviene desplazar.

### Inserción paso a paso

Tenemos `[4, 9, 4]`, capacidad 8, `n = 3`, y queremos insertar 7 en posición 1. El resultado debe ser `[4, 7, 9, 4]`. Si copiamos hacia adelante, `a[2] = a[1]` sobrescribe el 4 antes de conservarlo. Para no perderlo empezamos por el extremo: copiamos `a[2]` a `a[3]`, después `a[1]` a `a[2]` y finalmente escribimos 7 en `a[1]`.

```cpp
bool insertar(int a[], int& n, int capacidad, int pos, int valor) {
    if (n >= capacidad || pos < 0 || pos > n) {
        return false;
    }
    for (int i = n; i > pos; --i) {
        a[i] = a[i - 1];
    }
    a[pos] = valor;
    ++n;
    return true;
}
```

Insertar admite posiciones de 0 a `n`, inclusive: `pos == n` significa agregar al final. Por eso su validación es diferente de la de un acceso a un dato existente. Primero verificamos espacio; luego desplazamos; al final aumentamos `n`. El contrato presupone una dimensión lógica válida y que `capacidad` no exceda el arreglo real.

### Eliminación con desplazamiento a la izquierda

Eliminar posición 1 de `[4, 7, 9, 4]` debe producir `[4, 9, 4]`. Copiamos 9 hacia posición 1 y el último 4 hacia posición 2. Esta vez avanzamos desde el hueco: cada origen está a la derecha y todavía no fue sobrescrito.

```cpp
bool eliminarPos(int a[], int& n, int pos) {
    if (pos < 0 || pos >= n) {
        return false;
    }
    for (int i = pos; i + 1 < n; ++i) {
        a[i] = a[i + 1];
    }
    --n;
    return true;
}
```

Aquí `pos == n` es inválido: no hay un elemento lógico allí. Reducir `n` basta para excluir el antiguo último lugar; no hace falta escribir cero. Ese valor residual queda fuera del prefijo válido. Si nuestro programa sigue recorriéndolo, el problema está en el recorrido y no en una supuesta obligación de borrar físicamente todas las celdas.

### Inserción ordenada y políticas

Si el arreglo está ordenado, primero buscamos dónde debe ir el valor y después aplicamos la misma inserción. Para colocar un duplicado antes de sus iguales, avanzamos mientras el elemento sea estrictamente menor. Para colocarlo después, avanzamos también sobre iguales. La decisión debe quedar explícita porque cambia el orden relativo.

Insertar al final puede costar tiempo constante si ya conocemos `n`; insertar al comienzo desplaza `n` elementos. Decir «el acceso al arreglo es directo» no demuestra que toda operación lo sea. La estructura permite llegar a una posición rápidamente, pero conservar el orden puede exigir trabajo adicional.

1. **Con ayuda:** insertá 5 al principio de `[8, 9]`. **Respuesta:** copiar 9 al índice 2, 8 al 1 y escribir 5 en el 0; queda `[5, 8, 9]`.
2. **Con pista:** ¿por qué no sirve la misma dirección para insertar y eliminar? **Respuesta:** cada desplazamiento debe preservar los valores que todavía necesita como origen.
3. **Autónomo:** ¿qué cambia al eliminar el último? **Respuesta:** no hay elementos que desplazar; sólo disminuye `n` tras validar la posición.

![La inserción conserva los orígenes desplazando desde la derecha.](/planos-de-estudio/images/pi/insercion.svg)

*Esquema original. La inserción conserva los orígenes desplazando desde la derecha.*

### Hoja de consulta del capítulo 6

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Insertar | Posición permitida 0 ≤ pos ≤ n; requiere n < capacidad. | Desplazar de derecha a izquierda y luego aumentar n. |
| Eliminar posición | Posición permitida 0 ≤ pos < n. | Desplazar de izquierda a derecha y luego disminuir n. |
| Costo | Mover en el medio puede requerir O(n). | Acceso directo no implica modificación constante. |

## 7. Eliminar todas las apariciones e interpretar un histograma

Una eliminación individual parece suficiente para eliminar todos los duplicados, pero puede generar recorridos repetidos y errores al avanzar. Si borramos el primer 4 de `[4, 4, 9]`, el segundo 4 se mueve a su lugar. Incrementar inmediatamente el índice hace que lo saltemos. Vamos a construir una solución que lee cada dato una sola vez.

### Dos índices con responsabilidades distintas

`lectura` recorre el conjunto original; `escritura` indica dónde colocar el siguiente dato que queremos conservar. Con `[4, 7, 4, 9]` y valor 4: el primero no se copia, 7 se guarda en índice 0, el segundo 4 se descarta y 9 se guarda en índice 1. Finalmente `n` pasa a 2.

```cpp
int eliminarTodas(int a[], int& n, int valor) {
    int escritura = 0;
    const int anterior = n;
    for (int lectura = 0; lectura < anterior; ++lectura) {
        if (a[lectura] != valor) {
            a[escritura] = a[lectura];
            ++escritura;
        }
    }
    n = escritura;
    return anterior - n;
}
```

La dimensión original se conserva en `anterior`, por eso no se acorta el recorrido mientras todavía necesitamos examinar datos. Siempre se cumple `escritura <= lectura` al decidir una copia: no pisamos datos futuros. El orden relativo de los conservados se mantiene; la operación es estable. No se reserva un segundo arreglo y el costo es lineal en la cantidad original.

### Un arreglo usado como tabla de frecuencias

Otro problema exige contar dígitos sin guardar todos los números. Podemos usar un arreglo de diez contadores. El índice ya identifica el dígito: posición 0 cuenta ceros, posición 1 cuenta unos y así sucesivamente. Inicializamos el conjunto completo con `int frecuencias[10] = {};`.

```cpp
void registrarDigitos(unsigned int numero, int frecuencias[10]) {
    do {
        const unsigned int digito = numero % 10;
        ++frecuencias[digito];
        numero /= 10;
    } while (numero != 0);
}
```

Para un entero sin signo, `% 10` obtiene el último dígito decimal y `/= 10` elimina ese último dígito. Con 4020 aparecen sucesivamente 0, 2, 0 y 4. Cada aparición incrementa su contador. El `do / while` permite procesar el número 0 como una representación de un dígito: sin ese cuidado, un `while(numero != 0)` no contaría ninguno.

### Dominio y significado de la entrada

El contrato utiliza `unsigned int`: no estamos enseñando aquí a interpretar signos, separadores ni formatos textuales. Si un enunciado admite números negativos, hay que definir si el signo se ignora y realizar una conversión segura; aplicar una receta con resto negativo como índice es incorrecto. Tampoco se debe confundir el número entero 12 con el texto `"0012"`: el entero no conserva los ceros iniciales que tenía su escritura.

En una carga con centinela, primero determinamos si el valor termina la entrada y después lo registramos. Si cero es el centinela, no podemos además contarlo como un dato sin definir otra regla. Los contadores también tienen un rango finito; el ejercicio presupone cantidades que no lo exceden.

1. **Con ayuda:** eliminá 4 de `[4, 4, 4]`. **Respuesta:** escritura permanece en 0, `n` termina en 0 y se informan tres eliminaciones.
2. **Con pista:** registrá 101. **Respuesta:** el contador del 1 aumenta dos veces y el del 0 una; el orden de extracción no cambia las frecuencias.
3. **Autónomo:** ¿qué ventaja tiene compactar frente a borrar y desplazar cada vez? **Respuesta:** conserva el orden y examina cada elemento original una vez, evitando desplazamientos repetidos que pueden producir costo cuadrático.

### Hoja de consulta del capítulo 7

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Compactación | Escritura ≤ lectura; conservar el orden de quienes quedan. | No cambiar el límite original antes de terminar de leer. |
| Frecuencia | frecuencias[d] cuenta el dígito d, con 0 ≤ d ≤ 9. | Inicializar contadores; distinguir cero dato de cero centinela. |
| Dígitos | n % 10 obtiene el último y n / 10 quita uno, para n sin signo. | Procesar 0 una vez; los enteros no conservan ceros iniciales. |

## 8. Matrices: traducir filas y columnas a dos índices

Una matriz representa datos que necesitamos identificar mediante dos coordenadas. Puede ser una tabla de mediciones, un mapa de asientos o una grilla. Antes del código debemos decidir qué significa cada dimensión. Si intercambiamos «día» y «sucursal», un cálculo puede compilar y sumar un conjunto diferente del pedido.

### Declaración y representación

`int m[2][3] = {{1, 2, 3}, {4, 5, 6}};` declara dos filas y tres columnas. `m[0][2]` vale 3: seleccionamos primero la fila 0 y luego la columna 2. No se escribe `m[2][3]` para acceder al último dato: esos números son cantidades en la declaración, no índices válidos de acceso. El último dato está en `[1][2]`.

Los elementos de esta matriz nativa se organizan por filas en almacenamiento contiguo. Para razonar, podemos imaginar primero las tres celdas de la fila 0 y después las tres de la fila 1. El desplazamiento medido en elementos para `[f][c]` es `f * COLUMNAS + c`. No hace falta hacer aritmética manual de direcciones para usar `m[f][c]`, pero la relación explica por qué el ancho de fila importa.

### Un recorrido completo

El bucle exterior cambia la fila y el interior recorre sus columnas. Para imprimir cada fila en una línea, escribimos el salto una vez terminado el interior. Para sumar una columna fija, en cambio, varía sólo la fila. Repetir ambos índices sin necesidad puede contar muchas veces el mismo conjunto.

Una matriz puede tener capacidad fija y una cantidad lógica de filas o columnas. En ese caso documentamos ambos límites. «Tres columnas» puede ser una capacidad o un ancho efectivamente utilizado; no conviene intercambiar esos significados. En los ejemplos del archivo de unidad 1, `COLUMNAS` vale 3 y el parámetro `filas` indica cuántas filas válidas se consultan.

### Pasaje a funciones sin tamaños variables no estándar

En un parámetro como `const int m[][COLUMNAS]`, el compilador necesita conocer el tamaño de cada fila para calcular dónde está la siguiente. El primer número de filas puede recibirse por separado. No debemos convertir una matriz nativa automáticamente en `int**`: ese tipo representa otro esquema de punteros y no describe el arreglo de filas declarado aquí.

Para una función que sólo lee agregamos `const`. Para una que reserva asientos tendremos una matriz modificable. El tamaño que escribamos en ciertos parámetros no realiza una validación automática de toda la matriz del llamador: seguimos necesitando contratos coherentes.

1. **Con ayuda:** ¿qué vale `m[1][0]` en el ejemplo? **Respuesta:** 4.
2. **Con pista:** la segunda columna contiene 2 y 5. ¿Qué índice queda fijo? **Respuesta:** columna 1; las filas toman 0 y 1.
3. **Autónomo:** explicá por qué `m[f][c]` y `m[c][f]` no son intercambiables en una matriz rectangular. **Respuesta:** cambian las coordenadas y pueden exceder dimensiones distintas; la transposición requiere otros tamaños o una matriz cuadrada para ciertas comparaciones internas.

### Hoja de consulta del capítulo 8

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Coordenadas | m[f][c]: fila f, columna c. | Validar cada dimensión; no intercambiar índices por costumbre. |
| Desplazamiento | En elementos: f·COLUMNAS + c. | Para arreglo nativo rectangular por filas; no equivale a int**. |
| Visitas | F·C celdas en un recorrido completo. | Especificar dimensiones lógicas y almacenamiento real. |

## 9. Operaciones con matrices: reinicios, simetría y validación

Una vez comprendidas las coordenadas, cada operación debe indicar qué elementos relaciona. «Sumar una matriz» puede significar total general, suma de cada fila o suma con otra matriz del mismo tamaño. Traducir esa frase sin aclararla produce programas que resuelven tareas distintas.

### Sumas por fila y simetría

En `[[1, 2, 3], [4, 5, 6]]`, las sumas de filas son 6 y 15. Reiniciamos un acumulador para cada fila. El arreglo `sumas` necesita espacio para tantas filas como procesamos. Si también quisiéramos un total general, podríamos acumular esos resultados o llevar otro acumulador por fuera del bucle exterior, respetando los rangos de los tipos.

```cpp
const int COLUMNAS = 3;
void sumarFilas(const int m[][COLUMNAS], int filas, int sumas[]) {
    for (int f = 0; f < filas; ++f) {
        sumas[f] = 0;
        for (int c = 0; c < COLUMNAS; ++c) {
            sumas[f] += m[f][c];
        }
    }
}

bool esSimetrica(const int m[3][3]) {
    for (int f = 0; f < 3; ++f) {
        for (int c = f + 1; c < 3; ++c) {
            if (m[f][c] != m[c][f]) {
                return false;
            }
        }
    }
    return true;
}
```

La segunda función recibe una matriz cuadrada de tres por tres y comprueba simetría respecto de su diagonal principal. Para cada par comparamos `[f][c]` con `[c][f]`. La diagonal se compara consigo misma y no aporta información; tampoco hace falta revisar cada par dos veces. Por eso `c` empieza en `f + 1`. La matriz identidad es simétrica; una matriz con 5 en `[0][1]` y 7 en `[1][0]` no lo es.

### Buscar un máximo o intercambiar columnas

Para hallar el mayor valor, empezamos con un elemento existente y conservamos también sus coordenadas. Si hay empates, debemos decidir si informamos el primero, el último o todos. Cambiar `>` por `>=` afecta esa política. En una matriz lógica vacía no existe un máximo y el contrato debe informarlo.

Para intercambiar dos columnas, recorremos filas y en cada una permutamos las dos celdas usando un auxiliar. No intercambiamos sólo sus encabezados ni sobrescribimos primero una columna completa sin conservar la otra. Para sumar dos matrices, cada resultado se calcula con las mismas coordenadas en ambas: sus dimensiones utilizadas deben coincidir.

### Probar formas y extremos

No pruebes únicamente una matriz de valores positivos diferentes: incluí negativos, empates, una simétrica y otra con una discrepancia fuera de la diagonal. En matrices rectangulares probá dimensiones diferentes para descubrir inversiones accidentales de fila y columna.

Un conteo de operaciones también aporta comprensión. Visitar cada celda de `F` filas y `C` columnas requiere `F * C` visitas. Revisar simetría de una matriz cuadrada con el esquema mostrado compara `N(N−1)/2` pares. Esa reducción evita redundancia, aunque el crecimiento de peor caso sigue siendo cuadrático con `N`.

1. **Con ayuda:** calculá las sumas de `[[−1, 2, 0], [3, −4, 1]]`. **Respuesta:** 1 y 0; cada fila empieza con suma cero.
2. **Con pista:** ¿cambiar un dato de la diagonal destruye necesariamente la simetría? **Respuesta:** no; su pareja reflejada es él mismo.
3. **Autónomo:** diseñá el intercambio de columnas 0 y 2. **Respuesta:** para cada fila guardar `[f][0]`, copiar `[f][2]` a `[f][0]` y colocar el auxiliar en `[f][2]`.

### Hoja de consulta del capítulo 9

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Suma por fila | sumas[f] = suma de m[f][c] para sus columnas válidas. | Reiniciar acumulador al comenzar cada fila. |
| Simetría | m[f][c] = m[c][f] en matriz cuadrada. | Comparar pares fuera de la diagonal una vez. |
| Pares comparados | N(N−1)/2 en la comprobación triangular. | La reducción de redundancia no elimina el crecimiento cuadrático. |

## 10. Taller de unidad I: una reserva que no corrompe la sala

Vamos a integrar matriz, contratos, validación y separación de responsabilidades. El caso es una sala de dos filas y tres asientos por fila. Las filas internas se numeran 0 y 1; los asientos que solicita el usuario se numeran 1, 2 y 3. La diferencia es deliberada: enseña a transformar datos externos en índices internos.

### Primero, definir estados y reglas

Una celda `false` significa libre y `true` significa ocupada. Inicializamos `bool sala[2][COLUMNAS] = {};`. Reservar debe fallar si la fila o el asiento no existen o si ya está ocupado. Si falla, el estado no debe cambiar. Si tiene éxito, cambia exactamente una celda. El contrato no incluye cancelar ni cobrar: agregar responsabilidades que no necesitamos haría más difícil comprobarlo.

```cpp
bool reservar(bool ocupadas[][COLUMNAS], int filas, int fila, int asiento) {
    if (fila < 0 || fila >= filas || asiento < 1 || asiento > COLUMNAS) {
        return false;
    }
    const int columna = asiento - 1;
    if (ocupadas[fila][columna]) {
        return false;
    }
    ocupadas[fila][columna] = true;
    return true;
}
```

La primera condición evita calcular y usar índices que no corresponden. Recién después convertimos el número de asiento a columna restando uno. Una reserva de fila 1 y asiento 3 modifica `sala[1][2]`. Una segunda reserva igual devuelve `false`. Pedir asiento 0 también falla; no debería interpretarse como columna −1 ni permitirse que el acceso ocurra antes de validar.

### Probar antes de construir un menú

Usá una tabla de casos: sala vacía y asiento válido; reserva repetida; fila negativa; fila igual a la cantidad; asiento cero; asiento superior al ancho; última celda disponible. En cada caso escribí resultado y estado esperado. Si primero agregamos un menú extenso, un fallo en la entrada puede confundirse con un fallo de reserva.

La lectura real necesita comprobar que se obtuvo un número. `if (!(std::cin >> fila >> asiento))` detecta una extracción fallida; en un ejemplo pequeño podemos informar el error y terminar. Para reintentar hay que limpiar el estado del flujo y descartar la entrada inválida de manera controlada. No basta con repetir `cin >> fila` sobre el mismo flujo en error: puede fallar continuamente sin esperar otra entrada.

```cpp
bool leerCantidad(int& n, int capacidad) {
    do {
        std::cout << "Cantidad entre 0 y " << capacidad << ": ";
        if (!(std::cin >> n)) return false;
    } while (n < 0 || n > capacidad);
    return true;
}
```

Esta función ilustra el `do / while` con un contrato pequeño: capacidad no negativa, lectura de enteros y resultado `true` sólo si se obtuvo una cantidad en el rango. Con entrada `-2 9 3` y capacidad 5, rechaza los dos primeros números y acepta 3. Si aparece texto no interpretable como entero o se termina la entrada antes de obtener uno válido, devuelve `false`; el llamador debe detener esa operación y no usar `n` como si fuera un dato aceptado. No intenta recuperar el flujo en esta versión.

### Una segunda integración: conservar lo que no coincide

El ejemplo de clase del 4/9 relaciona un arreglo de productos buscados con una matriz de ofertas y elimina del arreglo las coincidencias. Podemos resolver una variante original con códigos de libros y una grilla de disponibilidad. Para cada código decidimos si aparece en la matriz; si no aparece, lo conservamos mediante compactación. Dos decisiones deben quedar claras: si el código puede repetirse y si varias celdas coincidentes representan una sola coincidencia de pertenencia. Para esta pregunta basta con saber si aparece al menos una vez.

No incrementamos ciegamente un índice después de desplazar elementos. Podemos reutilizar la técnica de lectura y escritura del capítulo 7 y una función de pertenencia a la matriz. La entrada es pequeña, por lo que un recorrido lineal de la matriz por cada código tiene costo proporcional a `n * F * C`; elegirlo es una decisión explicable, no un accidente.

1. **Etapa guiada:** trazá la reserva de fila 0, asiento 2. **Respuesta:** se valida, se obtiene columna 1, se revisa que esté libre y se cambia sólo `[0][1]`.
2. **Con menos ayuda:** ¿qué informa contar ocupadas después de repetir esa reserva? **Respuesta:** una celda ocupada; una operación fallida no suma una venta ni otra ocupación.
3. **Autónomo:** definí cancelar. **Respuesta orientativa:** validar coordenadas y ocupación; si hay una reserva, cambiar la celda a libre e informar éxito. Una celda ya libre requiere una respuesta definida, sin disminuir un contador que ya era cero.

El archivo descargable de unidad I reúne las funciones utilizadas y un `main` breve para ejecutarlas. Las funciones de cálculo no dependen de un menú, por lo que podés probarlas por separado y luego integrar la entrada.

### Hoja de consulta del capítulo 10

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Reserva | Validar coordenadas y disponibilidad antes de modificar. | Un fallo conserva el estado. |
| Transformación | columna = asiento − 1 si asientos externos empiezan en 1. | Validar antes de acceder, no después. |
| Integración | Buscar cada uno de n códigos en F·C celdas cuesta O(nFC). | El contrato determina si bastan pertenencia o múltiples coincidencias. |


## Hoja de consulta de la unidad 1: Control, arreglos y matrices

Reconstruí los capítulos 1–10 antes de usar esta recopilación como repaso. Por cada fila, explicá el contrato y trazá un caso pequeño.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Variable y asignación | Una asignación usa el estado presente; no mantiene una igualdad matemática permanente. | Inicializar antes de leer y distinguir = de ==. |
| Contrato | Entrada, precondición, resultado y modificaciones permitidas. | No exigir a una función garantías que no puede comprobar. |
| Anidamiento | Cada bucle representa una dimensión de la tarea. | Ubicar reinicios y saltos de línea según su responsabilidad. |
| Dimensiones | 0 ≤ n ≤ capacidad; datos válidos en [0,n). | Capacidad fija no significa todos los lugares cargados. |
| Búsqueda | Devuelve posición en [0,n) o −1. | Comprobar ausencia antes de usar el resultado como índice. |
| Insertar | Posición permitida 0 ≤ pos ≤ n; requiere n < capacidad. | Desplazar de derecha a izquierda y luego aumentar n. |
| Compactación | Escritura ≤ lectura; conservar el orden de quienes quedan. | No cambiar el límite original antes de terminar de leer. |
| Coordenadas | m[f][c]: fila f, columna c. | Validar cada dimensión; no intercambiar índices por costumbre. |
| Suma por fila | sumas[f] = suma de m[f][c] para sus columnas válidas. | Reiniciar acumulador al comenzar cada fila. |
| Reserva | Validar coordenadas y disponibilidad antes de modificar. | Un fallo conserva el estado. |

**Autoevaluación:** elegí una operación, escribí entrada y resultado esperado, señalá el invariante y justificá la terminación. Después probá un caso de borde. Si la explicación depende de copiar líneas sin entenderlas, volvé al desarrollo de ese capítulo.
## 11. Búsqueda secuencial: usar el orden sólo cuando existe

Buscar consiste en responder si hay un dato que cumple un criterio y, a veces, dónde está. Antes de elegir un algoritmo debemos conocer cómo están organizados los datos y qué respuesta se necesita. Encontrar cualquier aparición, la primera o todas son contratos diferentes. Una búsqueda no está completa si su resultado deja ambiguo el caso ausente.

### Del recorrido general a una mejora justificada

La función `buscar` del capítulo 5 sirve aunque el arreglo no esté ordenado: compara cada dato hasta encontrar o agotar el prefijo. En `[8, 2, 9, 2]`, buscar 2 devuelve índice 1; buscar 5 exige revisar todo. No podemos detenernos al encontrar un valor mayor que 5 porque el 5 podría aparecer después.

En cambio, si los datos están ordenados de menor a mayor, encontrar un valor mayor permite descartar el resto. Con `[2, 4, 7, 9]`, al buscar 5 nos detenemos en 7: todos los siguientes serán mayores o iguales a 7. Esa conclusión depende de una precondición, no de que el algoritmo «tenga aspecto de búsqueda».

```cpp
int secuencialOrdenada(const int a[], int n, int valor) {
    int i = 0;
    while (i < n && a[i] < valor) ++i;
    return i < n && a[i] == valor ? i : -1;
}
```

El bucle avanza mientras el dato sea menor que el objetivo. Al salir hay dos posibilidades: `i == n` o un dato mayor o igual. En el segundo caso todavía hay que comprobar igualdad. Estar dentro del arreglo no garantiza haber encontrado. El cortocircuito del retorno evita consultar `a[n]` cuando se agotaron los datos.

### Por qué devuelve la primera aparición

Con `[2, 4, 4, 4, 9]`, la búsqueda de 4 se detiene en índice 1, porque el bucle sólo pasa valores estrictamente menores. Cambiar `<` por `<=` haría que saltara los iguales; el retorno ya no respondería el mismo contrato. Las pequeñas diferencias en una comparación pueden ser la diferencia central del algoritmo.

La mejora no elimina el peor caso lineal: para buscar un valor superior a todos los almacenados debemos recorrerlos todos. Sí puede evitar visitas innecesarias en entradas concretas. Aprender complejidad implica hablar de una familia de entradas y de un caso, no etiquetar una función como «rápida» sin condiciones.

### Elegir una clave

Cuando los datos son registros, buscar por código no es lo mismo que buscar por nombre. Si el arreglo está ordenado por nombre, no podemos aplicar el corte de esta búsqueda a los códigos sin otra justificación. El orden debe corresponder exactamente al criterio de comparación utilizado.

1. **Con ayuda:** buscá 6 en `[1, 3, 8, 10]`. **Respuesta:** se detiene en índice 2, comprueba que 8 no es 6 y devuelve −1.
2. **Con pista:** ¿puede usarse el corte anticipado sobre `[8, 3, 6]`? **Respuesta:** no; encontrar 8 al principio no descarta el 6 posterior.
3. **Autónomo:** proponé casos de prueba para repetidos. **Respuesta:** objetivo repetido al principio, en el medio y al final; verificar la primera posición y comprobar también ausencia, vacío y un solo dato.

### Hoja de consulta del capítulo 11

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Secuencial ordenada | Detener al primer dato no menor que el objetivo. | Requiere orden ascendente según la misma clave. |
| Primera aparición | Avanzar sólo mientras a[i] < valor. | Comprobar igualdad al salir; candidato no implica hallazgo. |
| Peor caso | O(n), incluso aprovechando el orden. | El corte anticipado mejora ciertas entradas, no toda la familia. |

## 12. Búsqueda binaria: aprender a conservar un intervalo posible

La búsqueda binaria no busca «por el medio» una sola vez. Repite una decisión que descarta una parte del conjunto sin perder candidatos válidos. Requiere un arreglo ordenado según el mismo criterio y acceso directo a posiciones. Aplicarla a datos desordenados puede devolver ausencia aunque el dato exista.

### Un convenio que evita límites confusos

Usaremos un intervalo semiabierto `[izquierda, derecha)`: incluye izquierda y excluye derecha. Al empezar vale `[0, n)`. Cuando ambos extremos coinciden, el intervalo está vacío. El punto medio se calcula con `izquierda + (derecha - izquierda) / 2`, evitando sumar directamente dos índices grandes.

Queremos la primera aparición, así que buscamos la primera posición cuyo valor no sea menor que el objetivo. Si el medio contiene un valor menor, descartamos hasta ese medio inclusive y usamos `izquierda = medio + 1`. En otro caso el medio todavía puede ser el primer candidato y movemos `derecha = medio`, sin saltarlo.

```cpp
int primeraBinaria(const int a[], int n, int valor) {
    int izquierda = 0;
    int derecha = n;
    while (izquierda < derecha) {
        const int medio = izquierda + (derecha - izquierda) / 2;
        if (a[medio] < valor) {
            izquierda = medio + 1;
        } else {
            derecha = medio;
        }
    }
    return izquierda < n && a[izquierda] == valor ? izquierda : -1;
}
```

### Traza completa con duplicados

Buscamos 4 en `[1, 4, 4, 4, 9]`. Inicialmente izquierda 0, derecha 5, medio 2. Como allí hay 4, conservamos la posibilidad de una aparición anterior: derecha pasa a 2. Ahora medio 1 también tiene 4, por lo que derecha pasa a 1. Luego medio 0 tiene 1: izquierda pasa a 1. Ambos extremos coinciden y verificamos índice 1. No terminamos al encontrar cualquier 4 porque el contrato exige el primero.

Si buscamos 6, el intervalo finalmente señala la posición de 9. Esa posición indica dónde podría insertarse 6 manteniendo el orden, pero no demuestra que 6 exista. Por eso la comprobación final de igualdad es indispensable. Si el objetivo es mayor que todos, el candidato puede ser `n`, que no se accede.

### Invariante y terminación

Los valores descartados a la izquierda son menores que el objetivo; el límite derecho se desplaza conservando el primer candidato posible. En cada iteración disminuye `derecha - izquierda`. Cuando el medio coincide con izquierda, la rama menor usa `medio + 1`; escribir sólo `izquierda = medio` puede dejar el intervalo igual y provocar un bucle infinito.

El número de iteraciones crece de manera logarítmica en el peor caso. Eso no vuelve conveniente ordenar un arreglo cada vez que hacemos una única búsqueda: el costo de obtener y mantener el orden también cuenta. Si el arreglo ya está ordenado y hay muchas consultas, la comparación cambia.

1. **Con ayuda:** buscá 7 en `[7]`. **Respuesta:** medio 0, derecha pasa a 0, se verifica `a[0]` y devuelve 0.
2. **Con pista:** trazá un arreglo vacío. **Respuesta:** izquierda y derecha son 0; no hay iteraciones y la comprobación final evita leer el arreglo.
3. **Autónomo:** explicá qué falla si retornamos al primer medio igual. **Respuesta:** satisface «alguna aparición», pero puede ignorar duplicados anteriores y violar «primera aparición».

![Ante una igualdad seguimos conservando candidatos anteriores.](/planos-de-estudio/images/pi/binaria.svg)

*Esquema original. Ante una igualdad seguimos conservando candidatos anteriores.*

### Hoja de consulta del capítulo 12

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Intervalo | [izquierda,derecha) incluye izquierda y excluye derecha. | Comenzar en [0,n); vacío si los extremos coinciden. |
| Medio | izquierda + (derecha − izquierda)/2, división entera. | Ajustar medio+1 a la izquierda o medio a la derecha según el criterio. |
| Primera binaria | Hallar primer no menor y luego comprobar igualdad. | Orden previo, límites válidos y O(log(n+1)) como cota de iteraciones. |

## 13. Ordenamiento por selección: fijar una posición definitiva

Ordenar significa reorganizar los datos según una relación, conservando los elementos que forman el conjunto. No alcanza con producir números crecientes si perdemos uno o duplicamos otro por una copia incorrecta. Debemos comprobar tanto el orden final como la conservación de datos y, cuando importa, el orden relativo entre iguales.

### La idea antes de los bucles

Con `[8, 3, 5, 1]`, buscamos el menor de todo el arreglo: 1. Lo intercambiamos con la posición 0 y obtenemos `[1, 3, 5, 8]`. En la siguiente pasada buscamos el menor sólo entre posiciones 1 y 3, porque la primera ya está resuelta. La zona inicial crece hasta que queda un único elemento sin revisar, que necesariamente ocupa su lugar.

```cpp
void seleccion(int a[], int n) {
    for (int i = 0; i + 1 < n; ++i) {
        int menor = i;
        for (int j = i + 1; j < n; ++j) {
            if (a[j] < a[menor]) menor = j;
        }
        const int aux = a[i];
        a[i] = a[menor];
        a[menor] = aux;
    }
}
```

`menor` guarda un índice, no el menor valor. Necesitamos la ubicación para intercambiar. El interior empieza en `i + 1` porque inicialmente suponemos que `a[i]` es el mejor candidato. Si aparece uno menor, actualizamos la ubicación. El intercambio se hace una vez terminada la búsqueda: hacerlo a cada comparación implementa otra estrategia y dificulta explicar esta versión.

### Una segunda traza menos afortunada

En `[3, 2, 1]`, la primera pasada encuentra índice 2 y cambia 3 por 1: queda `[1, 2, 3]`. Aunque ya se vea ordenado, la versión mostrada todavía realiza las comparaciones siguientes previstas. No contiene un criterio general de terminación anticipada por ausencia de cambios. El hecho de que una entrada quede ordenada temprano no elimina ese trabajo.

### Invariante, costo y estabilidad

Antes de cada pasada, el prefijo anterior a `i` contiene los menores elementos ya ubicados definitivamente. El interior encuentra el mínimo de lo que queda. Las comparaciones son `(n−1) + (n−2) + … + 1 = n(n−1)/2`, tanto con datos ya ordenados como con datos invertidos, para esta implementación.

Un algoritmo **estable** conserva el orden relativo de elementos con claves iguales. La selección por intercambio mostrada no lo garantiza. Imaginá `[2A, 2B, 1C]`, donde las letras distinguen registros con igual clave. Al intercambiar 2A con 1C queda `[1C, 2B, 2A]`: los dos registros de clave 2 invirtieron su orden. La comparación estricta del interior por sí sola no evita ese efecto del intercambio distante.

### Cuándo conviene estudiarlo

Su valor pedagógico es que la zona definitiva resulta fácil de reconocer y necesita pocos intercambios, aunque haga muchas comparaciones. No es el método general más eficiente para grandes colecciones. En esta materia interesa aprender su mecanismo y compararlo con burbuja e inserción, no convertirlo en una elección automática para cualquier tamaño.

1. **Con ayuda:** hacé la primera pasada en `[6, 4, 7, 2]`. **Respuesta:** menor en índice 3; resultado `[2, 4, 7, 6]`.
2. **Con pista:** ¿por qué sólo hacen falta `n−1` pasadas exteriores? **Respuesta:** al fijar esas posiciones, queda un único dato, necesariamente en la restante.
3. **Autónomo:** justificá que no se pierde el antiguo `a[i]`. **Respuesta:** se guarda en `aux` antes de sobrescribir y se coloca en la posición del mínimo.

### Hoja de consulta del capítulo 13

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Selección | Prefijo definitivo; buscar mínimo del resto e intercambiar. | Guardar índice del candidato, no sólo su valor. |
| Comparaciones | n(n−1)/2 en la versión mostrada. | Tanto con entrada ordenada como invertida. |
| Estabilidad | No garantizada por intercambios distantes. | Rastrear identidad de registros iguales, no sólo números. |

## 14. Burbuja: comparaciones vecinas y una mejora que sí cambia el mejor caso

Burbuja compara vecinos e intercambia los que están en orden incorrecto. Si recorremos de izquierda a derecha para ordenar ascendentemente, al terminar una pasada el mayor de la zona recorrida llega al extremo derecho. No debemos memorizar que «siempre sube el menor»: la dirección del recorrido y la comparación determinan qué elemento queda ubicado.

### Una pasada visible

Partimos de `[5, 1, 4, 2]`. Comparamos 5 con 1 y obtenemos `[1, 5, 4, 2]`. Luego 5 con 4: `[1, 4, 5, 2]`. Finalmente 5 con 2: `[1, 4, 2, 5]`. El 5 ya no necesita participar en la siguiente pasada. Todavía hay un desorden entre 4 y 2: una pasada no necesariamente ordena todo.

```cpp
void burbuja(int a[], int n) {
    bool cambio = true;
    for (int fin = n - 1; fin > 0 && cambio; --fin) {
        cambio = false;
        for (int j = 0; j < fin; ++j) {
            if (a[j] > a[j + 1]) {
                const int aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
                cambio = true;
            }
        }
    }
}
```

`fin` indica el último índice de la zona todavía relevante. El interior usa `j < fin` porque compara `a[j]` con `a[j + 1]`; permitir `j == fin` accedería más allá de esa zona y en la primera pasada podría salir del arreglo lógico. Después de una pasada reducimos `fin`.

### La bandera y su ubicación

`cambio` registra si hubo algún intercambio en la pasada. Debe ponerse en `false` antes del interior y en `true` ante un intercambio. Si al terminar sigue falsa, todos los vecinos revisados estaban en orden y la zona ya estaba ordenada. Con la zona final que venimos fijando, podemos terminar.

Si reiniciáramos la bandera dentro de cada comparación, una última pareja ordenada podría ocultar intercambios anteriores y terminar antes de tiempo. Si no la reiniciáramos nunca, la mejora perdería su función. Entender qué período resume una variable ayuda a ubicar su inicialización.

### Complejidad y estabilidad

Con un arreglo ya ordenado de más de un elemento, esta versión hace una pasada de `n−1` comparaciones y termina: mejor caso lineal. Con datos invertidos realiza muchas pasadas y trabajo cuadrático. La frase «burbuja es lineal» sería falsa sin especificar el caso y la variante.

Como sólo intercambia cuando el izquierdo es estrictamente mayor, dos elementos iguales no se cruzan mediante ese intercambio. La versión conserva su orden relativo y es estable. Si cambiamos `>` por `>=`, podemos deshacer esa propiedad e introducir intercambios innecesarios. La estabilidad importa cuando ordenamos registros por una clave y queremos preservar una organización previa entre empates.

1. **Con ayuda:** primera pasada de `[3, 2, 1]`. **Respuesta:** `[2, 1, 3]`; el 3 quedó fijo al final.
2. **Con pista:** ¿qué ocurre con `[1, 2, 3]`? **Respuesta:** no hay intercambios, la bandera queda falsa y termina después de una pasada.
3. **Autónomo:** explicá por qué esta variante y selección no tienen el mismo mejor caso. **Respuesta:** selección sigue buscando mínimos en todas las pasadas; burbuja detecta una pasada sin cambios y evita las restantes.

### Hoja de consulta del capítulo 14

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Burbuja | Una pasada ascendente lleva el mayor al extremo derecho. | Comparar vecinos y reducir el fin pendiente. |
| Bandera | cambio resume toda una pasada. | Reiniciar antes del interior y activarla ante cualquier intercambio. |
| Costo y empates | Mejor O(n), peor O(n²); estable con >. | Propiedades de esta variante con corte, no de todo código llamado burbuja. |

## 15. Inserción: ampliar un prefijo que ya está ordenado

Imaginá ordenar cartas en la mano: tomás una nueva y la colocás entre las que ya estaban organizadas. Inserción utiliza esa idea. No busca el mínimo de todo lo pendiente ni empuja un máximo al final; mantiene un prefijo ordenado y amplía ese prefijo con el siguiente dato.

### Qué hay que conservar antes de mover

Tenemos `[3, 8, 5, 1]`. Los dos primeros están ordenados. Para insertar el 5 guardamos ese valor en `clave`, movemos el 8 un lugar a la derecha y escribimos 5 en el hueco: `[3, 5, 8, 1]`. Después guardamos 1, desplazamos 8, 5 y 3 y colocamos 1 al principio. Si no guardáramos `clave`, el primer desplazamiento sobrescribiría el dato que intentamos insertar.

```cpp
void insercion(int a[], int n) {
    for (int i = 1; i < n; ++i) {
        const int clave = a[i];
        int j = i;
        while (j > 0 && a[j - 1] > clave) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = clave;
    }
}
```

`j` indica la posición del hueco disponible para la clave. Mientras exista un vecino a la izquierda y sea mayor, lo desplazamos al hueco y movemos el hueco una posición. Comprobamos `j > 0` antes de evaluar `a[j - 1]`. Al terminar, el hueco puede estar al principio o después de un elemento menor o igual.

### Relación con la inserción en arreglo

En el capítulo 6 insertábamos un dato nuevo y aumentábamos `n`. Aquí reorganizamos los mismos `n` datos: `n` no cambia. La clave se conserva temporalmente y luego vuelve al arreglo. Confundir ambas operaciones puede introducir un dato extra o exceder capacidad innecesariamente.

Antes de cada pasada exterior, el segmento `[0, i)` está ordenado. Al insertar el dato originalmente ubicado en `i`, queda ordenado `[0, i + 1)`. Ese invariante permite razonar sobre todo el algoritmo sin seguir cada combinación de números posible.

### Datos casi ordenados y estabilidad

Si cada clave ya está en su lugar, la condición interior falla enseguida y el costo total es lineal. Si los datos están invertidos, cada clave puede desplazar todo el prefijo anterior y el costo es cuadrático. Con poco desorden suele requerir menos desplazamientos, aunque esa observación no reemplaza medir un caso real.

La comparación estricta `>` no desplaza elementos iguales a la clave, así que ésta queda después de sus iguales anteriores. La versión es estable. Esta propiedad debe conservarse también al pasar a registros: no basta con ordenar correctamente los códigos si sus otros campos quedan mezclados.

### Práctica progresiva

1. **Con ayuda:** insertá la última clave de `[2, 6, 9, 4]`. **Respuesta:** guardar 4, desplazar 9 y 6 y escribir 4 en índice 1; queda `[2, 4, 6, 9]`.
2. **Con pista:** ¿qué sucede cuando la clave es la menor? **Respuesta:** `j` llega a 0; la primera condición impide leer `a[-1]` y la clave se escribe allí.
3. **Autónomo:** explicá por qué cambiar `>` por `>=` afecta estabilidad. **Respuesta:** también desplaza claves iguales y permite que la nueva clave quede delante de otras iguales que aparecían antes.

### Hoja de consulta del capítulo 15

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Inserción | Prefijo ordenado ampliado con una clave guardada. | Desplazar mayores, después colocar la clave; n no cambia. |
| Límite | Comprobar j > 0 antes de consultar a[j−1]. | Evitar índices negativos y pérdida de la clave. |
| Costo y empates | Mejor O(n), peor O(n²); estable con >. | No desplazar iguales si se preserva su orden relativo. |

## 16. Elegir algoritmos: costo, precondiciones y datos que deben conservarse

Conocer varios algoritmos permite elegir con razones. No alcanza con recordar una tabla de letras O: necesitamos identificar qué mide el tamaño de entrada, qué operación contamos y qué condiciones ya están dadas. El tamaño de un arreglo se representa aquí con `n`, su cantidad lógica; no con su capacidad máxima si sólo una parte está ocupada.

### Qué expresa un orden de crecimiento

Un costo lineal crece proporcionalmente a `n` en el modelo considerado. Uno cuadrático crece proporcionalmente a `n²`; uno logarítmico necesita cada vez menos pasos adicionales cuando la entrada se multiplica porque reduce el problema por un factor. La notación O describe una cota de crecimiento y no segundos exactos ni una medida de la calidad de un programador.

Duplicar `n` puede aproximar el doble de trabajo de un recorrido lineal o cuatro veces el término dominante de uno cuadrático, para entradas comparables. En tamaños pequeños, constantes e implementación pueden influir mucho. Por eso no usamos esas relaciones como cronómetro exacto.

### Una comparación razonada

| Algoritmo de esta guía | Condición | Mejor caso | Peor caso | Estabilidad |
| --- | --- | --- | --- | --- |
| Secuencial general | Prefijo válido | O(1) si encuentra al comienzo | O(n) | No aplica al ordenamiento |
| Binaria, primera aparición | Datos ordenados y acceso directo | Depende de entrada; cota O(log(n+1)) | O(log(n+1)) | No reordena |
| Selección por intercambio | Prefijo válido | O(n²) | O(n²) | No garantizada |
| Burbuja con bandera | Prefijo válido | O(n) | O(n²) | Sí, comparación estricta |
| Inserción con desplazamiento | Prefijo válido | O(n) | O(n²) | Sí, comparación estricta |

La fila binaria usa una cota que también contempla vacío; no afirma que toda ejecución necesite la misma cantidad de pasos. Para describir una variante distinta hay que volver a sus bucles y condiciones.

### El costo de preparar los datos

Si tenemos un arreglo desordenado y una consulta, ordenarlo con inserción y luego buscar en forma binaria puede costar más que una búsqueda secuencial. Si habrá muchísimas consultas y pocos cambios, preparar una estructura ordenada puede ser útil. Si cada inserción exige desplazar datos, ese mantenimiento también forma parte del costo.

Otra dimensión es la memoria adicional. Los tres ordenamientos mostrados trabajan dentro del arreglo con pocas variables auxiliares; no reservan un arreglo del mismo tamaño. Eso no elimina el almacenamiento de entrada, sino que describe espacio auxiliar. Más adelante la recursión necesitará considerar también llamadas pendientes.

### Corregir no es sólo ordenar

Una prueba de orden debe comprobar que los elementos finales son los mismos. Para registros, también que cada código conserva su nombre y sus datos. Para una función que promete no modificar, comprobamos el estado anterior y posterior. Medir rapidez sobre un algoritmo que pierde datos no aporta una comparación útil.

1. **Con ayuda:** ¿elegirías binaria directamente sobre datos sin ordenar? **Respuesta:** no; falta su precondición.
2. **Con pista:** ¿qué diferencia hay entre capacidad 10.000 y `n = 7`? **Respuesta:** los recorridos lógicos procesan siete elementos; el almacenamiento reservado es otra magnitud.
3. **Autónomo:** justificá un método para diez valores casi ordenados que se actualizan pocas veces. **Respuesta orientativa:** inserción puede ser simple y mover pocos datos; hay que explicar tamaño, frecuencia y conservación del orden, sin afirmar que será siempre la mejor opción.

### Hoja de consulta del capítulo 16

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Costo total | Preparación + consultas + mantenimiento. | No omitir ordenar al comparar secuencial con binaria. |
| Espacio auxiliar | Memoria adicional a la entrada. | Distinguir variables constantes de arreglos o llamadas que crecen. |
| Corrección | Orden final y conservación de todos los datos. | Medir rapidez después de verificar el contrato. |

## 17. Registros con struct: reunir datos que pertenecen a una entidad

Un número de código, un nombre y una cantidad describen conjuntamente un producto. Guardarlos en arreglos independientes exige mantener sus posiciones sincronizadas. Un `struct` permite crear un tipo con campos de tipos diferentes. La decisión de agrupar es una decisión de modelado: los campos deben representar una entidad o relación comprensible.

### Del tipo a los objetos

```cpp
struct Producto {
    int codigo;
    std::string nombre;
    int stock;
};

int buscarCodigo(const Producto a[], int n, int codigo) {
    for (int i = 0; i < n; ++i) {
        if (a[i].codigo == codigo) return i;
    }
    return -1;
}
```

`Producto` es el nombre del tipo, no un producto concreto. `Producto p{12, "lapiz", 9};` crea un objeto con esos datos. Accedemos mediante `p.codigo`, `p.nombre` y `p.stock`. El orden de esa inicialización por llaves corresponde al orden de los campos. También podemos crear `Producto p{};` y asignar campos después; las llaves inicializan los campos en lugar de dejar enteros locales sin valor inicial.

Una asignación como `Producto copia = p;` copia los campos según sus operaciones de copia. Con enteros y `std::string`, cambiar `copia.stock` no cambia `p.stock`. Más adelante un campo puntero requerirá analizar otra cuestión: copiar la dirección no copia automáticamente el objeto apuntado.

### Comparar e imprimir por un criterio

En este tipo sencillo C++11 no genera automáticamente una igualdad que represente «mismo producto». Podemos comparar `p.codigo == q.codigo` si la identidad de nuestro modelo es el código. Eso no prueba que todos los demás campos coincidan. Tampoco podemos enviar cualquier `Producto` directamente a `cout` sin definir cómo se imprime; en esta etapa mostramos sus campos explícitamente.

`buscarCodigo` compara el campo clave y devuelve posición. Si la aplicación exige códigos únicos, la inserción debe verificar que no exista el nuevo código. La búsqueda no impone sola esa regla. Si la consigna admite duplicados, debe indicar qué aparición modificar o si se procesan todas.

### Leer texto con espacios

`std::cin >> nombre` lee hasta el siguiente separador; un nombre de varias palabras requiere otra estrategia. `std::getline(std::cin >> std::ws, nombre)` descarta espacios iniciales pendientes y después lee una línea. Es adecuado cuando esos espacios no son parte del dato deseado. Si una línea vacía o espacios iniciales tienen significado, el contrato de lectura debe contemplarlo y no usar esa limpieza indiscriminadamente.

Podemos construir un objeto temporal, validar sus campos y recién después guardarlo. Así evitamos dejar a medio cargar una posición del arreglo si la entrada falla. Validar tipos de datos del dominio, como cantidad no negativa, es diferente de comprobar que el flujo logró extraer un entero.

1. **Con ayuda:** ¿qué expresa `productos[2].stock`? **Respuesta:** el campo de stock del registro situado en índice 2, no el tercer campo de todo el arreglo.
2. **Con pista:** si hay dos productos del mismo nombre, ¿alcanza el nombre para identificarlos? **Respuesta:** depende del modelo; conviene una clave explícita si deben distinguirse.
3. **Autónomo:** diseñá un libro con título y tres calificaciones de reseñas. **Respuesta:** puede tener un `std::string titulo` y un arreglo fijo como campo; el registro agrupa una entidad y el arreglo reúne valores homogéneos de esa entidad.

### Hoja de consulta del capítulo 17

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Tipo / objeto | Producto es tipo; p es un objeto de ese tipo. | Leer p.campo; el nombre del tipo no sustituye la variable. |
| Copia | Asignar registros copia campos según sus operaciones. | Con punteros, copiar dirección no equivale a copiar el apuntado. |
| Clave | Campo o conjunto de campos que define criterio e identidad. | La unicidad es una regla adicional que debe implementarse. |

## 18. Arreglos y matrices de registros: ordenar entidades completas

Un arreglo de `Producto` conserva una colección homogénea: cada elemento es un registro completo. Ahora tenemos dos selecciones conceptuales: primero elegimos qué objeto mediante el índice y luego qué campo mediante el punto. Si un campo es otro arreglo o registro, continuamos el camino según esa estructura.

### Seguir el acceso de afuera hacia adentro

Imaginemos un tipo `Estudiante` con campo `std::string nombre` y `int notas[3]`. En `curso[2].notas[1]`, `curso[2]` elige el tercer estudiante; `.notas` obtiene su arreglo de notas; `[1]` selecciona la segunda. Cambiar el orden de esos pasos produce otro significado o un error de tipos. Dibujar la estructura antes del código ayuda a leer expresiones largas.

Si tuviéramos `Estudiante grupos[2][4]`, `grupos[1][3].nombre` seleccionaría primero grupo y posición. Una matriz de registros no requiere inventar un nuevo mecanismo: combina las dos coordenadas con acceso a campos. Seguimos necesitando dimensiones lógicas, inicialización y contratos.

### Ordenar por clave sin separar los datos

```cpp
void ordenarProductos(Producto a[], int n) {
    for (int i = 1; i < n; ++i) {
        const Producto clave = a[i];
        int j = i;
        while (j > 0 && a[j - 1].codigo > clave.codigo) {
            a[j] = a[j - 1];
            --j;
        }
        a[j] = clave;
    }
}

bool retirar(Producto a[], int n, int codigo, int cantidad) {
    const int pos = buscarCodigo(a, n, codigo);
    if (pos == -1 || cantidad <= 0 || a[pos].stock < cantidad) {
        return false;
    }
    a[pos].stock -= cantidad;
    return true;
}
```

La parte de ordenamiento compara códigos, pero desplaza objetos `Producto` completos. Guardar sólo el código en `clave` y mover únicamente ese campo mezclaría identidades: un código podría terminar asociado al nombre y stock de otro producto. El invariante de conservación debe incluir la entidad completa.

La operación `retirar` muestra otra separación. Busca la posición, verifica existencia, cantidad positiva y stock suficiente y recién después modifica. La condición con `||` comprueba primero `pos == -1`; si es cierto, no evalúa el acceso posterior al registro ausente. Si falla una condición, ningún stock cambia.

### Reportes y agregaciones

Para informar quién cumple tres requisitos, hay que decidir si se necesitan todos o alguno. «Aprobó las tres» requiere una conjunción; «aprobó al menos una» una disyunción. Un promedio por encima del umbral no garantiza aprobar cada nota. Con `[10, 10, 1]`, el promedio puede ocultar una nota insuficiente para una regla que exige un mínimo en cada materia.

En una agregación por categorías podemos usar un arreglo de contadores si las categorías tienen una codificación compacta y validada. Si una categoría está codificada como 1, 2 y 3, convertirla a índice exige definir y validar la transformación; no se debe usar un entero arbitrario leído como índice sin comprobarlo.

### Evitar divisiones sin significado

El porcentaje de productos de una categoría es `100.0 * cantidadCategoria / n`, siempre que `n > 0`. Con cero productos, la expresión no está definida de esa forma y debemos informar «sin datos» o aplicar una convención documentada. Una cantidad absoluta y un porcentaje responden preguntas distintas y conviene presentar ambas cuando resulte pertinente.

1. **Con ayuda:** ordená registros de códigos 20, 7 y 12. **Respuesta:** 7, 12, 20, conservando nombre y stock de cada uno.
2. **Con pista:** ¿retirar una cantidad negativa debe aumentar el stock? **Respuesta:** no bajo este contrato; se rechaza antes de modificar.
3. **Autónomo:** justificá por qué promedio suficiente y tres notas aprobadas no son condiciones equivalentes. **Respuesta:** el promedio combina valores y permite compensaciones; exigir cada nota impone tres límites individuales.

### Hoja de consulta del capítulo 18

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Acceso compuesto | curso[i].notas[j] selecciona entidad y luego dato interno. | Seguir índices y campos de afuera hacia adentro. |
| Ordenar registros | Comparar clave y desplazar el registro completo. | No separar código, nombre y stock de una misma entidad. |
| Porcentaje | 100.0·cantidad/total, con total > 0. | Sin datos, informar ausencia o una convención explícita. |

## 19. Taller de unidad II: de una colección a un pequeño inventario

El inventario integra búsqueda, registros, ordenamiento y modificación. No vamos a mezclar todas las responsabilidades en una función gigantesca. Primero describimos las operaciones y sus estados observables; después las combinamos en una ejecución pequeña y sólo al final pensaríamos un menú.

### Preparación acompañada

Tenemos tres productos ficticios: código 20, cuaderno, stock 5; código 7, regla, stock 2; código 12, lápiz, stock 9. Ordenamos con `ordenarProductos`. El resultado debe ser regla, lápiz y cuaderno según códigos 7, 12 y 20. Comprobar sólo los códigos es insuficiente: también verificamos nombres y cantidades.

Después solicitamos retirar dos unidades del código 12. `buscarCodigo` devuelve índice 1 y `retirar` verifica que haya stock suficiente. El nuevo stock es 7. Si pedimos retirar ocho unidades adicionales, falla y debe conservar 7. Si pedimos código 99, falla sin acceder al índice −1.

### ¿Por qué la función todavía usa búsqueda secuencial?

Aunque hayamos ordenado, una búsqueda secuencial correcta sigue siendo válida. Para reemplazarla por una binaria necesitamos adaptar el criterio a `a[medio].codigo` y conservar el contrato de códigos. Una optimización debe justificarse con tamaño y frecuencia de operaciones. No hay obligación de complicar un ejemplo de tres registros para usar todos los algoritmos a la vez.

La regla de unicidad puede añadirse a la función de alta: rechazar código existente antes de insertar. Si los datos deben quedar ordenados siempre, buscamos posición e insertamos el registro completo desplazando otros registros. Si ordenamos sólo al mostrar, documentamos que otras operaciones no pueden presuponer un orden permanente.

### Etapa con menos ayuda: claves compuestas

Supongamos ahora que ordenamos pedidos primero por sector y, dentro del mismo sector, por número. El criterio ascendente compara sector; sólo si empatan compara número. No se usan dos `if` independientes que contradigan la prioridad. Una expresión conceptual es «sector menor, o sector igual y número menor». Este mecanismo prepara para listas de registros ordenadas por varias claves en la unidad siguiente.

### Etapa autónoma y corrección

1. Proponé pruebas para retirar. **Respuesta de control:** código existente y cantidad válida; ausente; cero; negativo; exactamente todo el stock; más del disponible. Verificar también que fallos preserven estado.
2. ¿Podemos aplicar binaria por stock si ordenamos por código? **Respuesta:** no; una secuencia ordenada por una clave no está necesariamente ordenada por otra.
3. ¿Cómo conservarías orden por sector y número? **Respuesta orientativa:** usar el mismo comparador en búsqueda de posición e inserción y mover registros completos; definir explícitamente qué hacer con claves repetidas.
4. Explicá un centinela que se guarda y otro que no se guarda. **Respuesta:** depende de la consigna; si el último dato debe procesarse, se valida y almacena antes de terminar. Si sólo señala fin, se comprueba antes de incorporarlo. No se copia una misma condición a todas las cargas.

El TP 2 trabaja situaciones de búsqueda, ordenamientos y colecciones de registros. Este taller es original y permite practicar los mecanismos antes de enfrentar consignas más extensas. Los archivos de unidad permiten ejecutar una demostración; no guardan información entre ejecuciones ni implementan una aplicación de inventario de producción.

### Hoja de consulta del capítulo 19

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Inventario | Una operación fallida no altera stock ni identidad. | Validar código, cantidad y disponibilidad antes de escribir. |
| Clave compuesta | A menor por primera clave, o empate y menor por segunda. | Usar el mismo criterio en todas las operaciones que mantienen orden. |
| Centinela | Puede ser dato incluido o señal excluida, según consigna. | Decidir cuándo procesar antes de fijar la condición del bucle. |


## Hoja de consulta de la unidad 2: Búsqueda, ordenamiento y registros

Reconstruí los capítulos 11–19 antes de usar esta recopilación como repaso. Por cada fila, explicá el contrato y trazá un caso pequeño.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Secuencial ordenada | Detener al primer dato no menor que el objetivo. | Requiere orden ascendente según la misma clave. |
| Intervalo | [izquierda,derecha) incluye izquierda y excluye derecha. | Comenzar en [0,n); vacío si los extremos coinciden. |
| Selección | Prefijo definitivo; buscar mínimo del resto e intercambiar. | Guardar índice del candidato, no sólo su valor. |
| Burbuja | Una pasada ascendente lleva el mayor al extremo derecho. | Comparar vecinos y reducir el fin pendiente. |
| Inserción | Prefijo ordenado ampliado con una clave guardada. | Desplazar mayores, después colocar la clave; n no cambia. |
| Costo total | Preparación + consultas + mantenimiento. | No omitir ordenar al comparar secuencial con binaria. |
| Tipo / objeto | Producto es tipo; p es un objeto de ese tipo. | Leer p.campo; el nombre del tipo no sustituye la variable. |
| Acceso compuesto | curso[i].notas[j] selecciona entidad y luego dato interno. | Seguir índices y campos de afuera hacia adentro. |
| Inventario | Una operación fallida no altera stock ni identidad. | Validar código, cantidad y disponibilidad antes de escribir. |

**Autoevaluación:** elegí una operación, escribí entrada y resultado esperado, señalá el invariante y justificá la terminación. Después probá un caso de borde. Si la explicación depende de copiar líneas sin entenderlas, volvé al desarrollo de ese capítulo.
## 20. Punteros desde cero: una dirección no es el dato

Hasta ahora utilizamos variables y elementos de arreglos directamente. Un puntero agrega una relación: guarda una dirección que puede identificar otro objeto. Para comprenderlo necesitamos separar **la variable puntero**, **la dirección que contiene** y **el objeto al que esa dirección permite acceder**. Cambiar uno de esos niveles no produce automáticamente el mismo cambio en los otros.

### Un ejemplo sin memoria dinámica

Imaginemos `int x = 7; int* p = &x;`. `x` contiene el entero 7. `p` contiene la dirección de `x`. El operador `&` aplicado a la expresión `x` obtiene esa dirección; `*p` permite acceder al entero apuntado. Entonces `*p = 10` cambia `x` a 10. No cambia la dirección guardada en `p`.

En la declaración `int* p`, el asterisco forma parte del tipo de la variable; en la expresión `*p`, realiza una indirección. No es multiplicación en esos contextos. Las direcciones concretas que un programa imprime pueden cambiar entre ejecuciones y entornos; para una traza podemos usar etiquetas como A y B sin inventar una ubicación física garantizada.

### Alias: dos caminos hacia el mismo objeto

Si agregamos `int* q = p;`, copiamos una dirección. Ambos apuntan al mismo `x`. Al ejecutar `*q = 12`, después `*p` y `x` también permiten leer 12. Eso no significa que `p` y `q` sean la misma variable: si después `q` pasa a apuntar a otro entero, `p` conserva su dirección anterior.

Compará `q = p` con `*q = *p`. La primera copia direcciones; la segunda copia valores entre objetos ya existentes y válidos. Para la segunda necesitamos que ambos punteros apunten a objetos vivos del tipo correspondiente. Un puntero no crea automáticamente el objeto que imaginamos al usarlo.

### Nulo e indeterminado

`int* p = nullptr` indica explícitamente que no está apuntando a un objeto. Podemos comprobar `p == nullptr`, pero no debemos desreferenciarlo. `int* p;` como variable local sin inicializar no ofrece una dirección válida garantizada y ni siquiera debe leerse para usarla como si fuera un puntero conocido.

Un puntero nulo no equivale a un entero apuntado cuyo contenido es cero. Si `x = 0` y `p = &x`, `p` puede ser válido y `*p` vale cero. La ausencia de objeto es una condición distinta del contenido del objeto.

### Un diagrama que evita errores

Dibujá una caja para `x`, dos para `p` y `q`, y flechas desde ambos punteros hacia `x`. Después de `*q = 12`, cambia sólo el número en `x`. Después de `q = nullptr`, desaparece la flecha de `q`, pero `x` y la flecha de `p` siguen existiendo. Este modo de registrar estados será la base para modificar enlaces en listas.

1. **Con ayuda:** `x = 3`, `p = &x`, `q = p`, `*p = 8`. ¿Qué lee `*q`? **Respuesta:** 8, porque ambos accesos llegan al mismo entero.
2. **Con pista:** ¿`q = nullptr` vuelve cero a `x`? **Respuesta:** no; cambia el contenido de la variable puntero.
3. **Autónomo:** explicá la diferencia entre dirección y valor usando `q = p` y `*q = *p`. **Respuesta:** una cambia dónde apunta `q`; la otra conserva direcciones y copia el contenido entre objetos apuntados válidos.

![Dos variables puntero pueden identificar el mismo objeto.](/planos-de-estudio/images/pi/alias.svg)

*Esquema original. Dos variables puntero pueden identificar el mismo objeto.*

### Hoja de consulta del capítulo 20

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Dirección / contenido | p identifica un objeto; *p accede a él si sigue vivo. | No desreferenciar nulo, indeterminado o colgante. |
| Alias | q = p copia dirección; *q = *p copia contenido. | Dos punteros distintos pueden llegar al mismo objeto. |
| Nulo | nullptr expresa ausencia de objeto apuntado. | No equivale a un entero apuntado de valor cero. |

## 21. Memoria dinámica y duración: reservar no es liberar

Un objeto local común vive dentro de las reglas de su ámbito y duración. A veces necesitamos crear objetos cuya existencia no se limite a una llamada concreta. La memoria dinámica permite solicitar almacenamiento y construir objetos mediante `new`; también nos impone una responsabilidad explícita de liberación cuando usamos punteros propietarios manuales.

### Crear, usar y destruir un objeto

`int* p = new int{42};` crea un entero dinámico inicializado y guarda su dirección. Después podemos consultar `*p` mientras el objeto siga vivo. `delete p;` destruye ese objeto y libera su almacenamiento. Finalmente `p = nullptr;` evita que esa variable conserve una dirección que ya no debe usarse.

La última asignación no es lo que libera memoria: sólo modifica el puntero. Si ejecutamos `p = nullptr` antes de conservar una forma de liberar el objeto, podemos perder su única dirección y provocar una fuga. El sistema no deduce a partir de esa asignación que ya no necesitamos el objeto.

### Alias y punteros colgantes

Si `q = p` antes de `delete p`, después `q` conserva una dirección hacia un objeto que ya terminó su vida. Es un **puntero colgante**. Poner `p` en `nullptr` no actualiza mágicamente `q`. Consultar `*q` después de liberar no tiene un resultado válido que podamos predecir; no se enseña como «imprime basura» o «imprime el valor anterior» de manera garantizada.

Una doble liberación ocurre si intentamos destruir dos veces el mismo objeto. No debemos hacer `delete p; delete q;` cuando ambos eran alias del mismo objeto. Para organizar un programa necesitamos identificar quién tiene la responsabilidad de liberar y qué otros punteros sólo observan temporalmente.

### Objetos y arreglos dinámicos

`new int{5}` se corresponde con `delete`. `new int[cantidad]{}` crea un arreglo dinámico y se corresponde con `delete[]`. Las dos formas no son intercambiables. Los ejemplos de listas usan `new Nodo{...}` y `delete`, un objeto por nodo; no son arreglos dinámicos de nodos.

`new` puede fallar mediante una excepción de asignación. Los ejemplos docentes de esta guía se concentran en operaciones con memoria disponible y contratos válidos; no implementan una política completa de recuperación frente a agotamiento de memoria. En aplicaciones más amplias se utilizan técnicas de propiedad automática y contenedores, pero aquí el objetivo es comprender el mecanismo manual exigido por el programa.

### Stack y heap como modelo de estudio

El material distingue pila de llamadas y montón. Es un modelo útil para separar datos de activaciones y objetos dinámicos, sin afirmar que el estándar impone un mapa físico universal o una dirección concreta para cada variable. Un puntero local puede desaparecer al retornar mientras el objeto dinámico sigue vivo; por eso hay que retornar o transferir su dirección si el llamador debe administrarlo.

1. **Con ayuda:** ¿qué problema hay en `p = new int{1}; p = new int{2};`? **Respuesta:** si nadie conservó la primera dirección para liberarla, se pierde el acceso propietario al primer objeto.
2. **Con pista:** después de `delete p`, ¿qué ocurre con un alias `q`? **Respuesta:** queda colgante; no se puede seguir usando para acceder al objeto liberado.
3. **Autónomo:** explicá por qué retornar la dirección de un entero local común es incorrecto para usarlo después. **Respuesta:** ese objeto deja de vivir al finalizar su ámbito; conservar su dirección no prolonga su vida.

### Hoja de consulta del capítulo 21

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Propiedad | Quien administra un objeto debe garantizar una liberación válida. | Los alias no deben destruirlo de nuevo. |
| Parejas | new T / delete; new T[n] / delete[]. | No mezclar formas ni perder la dirección propietaria. |
| Duración | La dirección no prolonga la vida de un objeto local. | Tras delete, los alias quedan inválidos aunque otro puntero se ponga nulo. |

## 22. Punteros como parámetros: cambiar un dato o cambiar un enlace

Una función puede recibir una dirección y usarla para modificar el objeto apuntado. Pero eso no significa que pueda reemplazar automáticamente el puntero del llamador. Esta distinción es central para actualizar el comienzo de una lista y para entender qué significa `Nodo*& inicio`.

### Una copia de la dirección también permite llegar al objeto

Supongamos `void ponerCinco(int* p)` y dentro `*p = 5`, con precondición de puntero válido. El parámetro es una copia de la dirección, pero ambas direcciones llegan al mismo objeto. La modificación del entero es visible afuera. Si dentro hiciéramos sólo `p = nullptr`, cambiaría la copia local de la dirección y no el puntero original.

Ahora pensemos en `void cambiar(int*& p)`. El parámetro es una referencia a una variable de tipo puntero. Una asignación a `p` puede reemplazar la dirección que guarda el llamador. La escritura se lee de derecha a izquierda a nivel conceptual: referencia a puntero a entero. En listas usaremos referencia a puntero a `Nodo`.

### No toda función necesita la misma capacidad de modificación

Una búsqueda puede recibir `Nodo* inicio` por valor: recorre mediante una copia y devuelve una dirección encontrada. No necesita cambiar el inicio del llamador. Una función que inserta al principio debe devolver el nuevo comienzo o recibir el puntero por referencia. Ambas alternativas son posibles; lo importante es elegir un contrato y aplicarlo consistentemente.

Para sólo observar datos podemos utilizar `const Nodo*`. Esto impide modificar el nodo a través de ese acceso. No vuelve inmutable toda la estructura frente a cualquier otro alias, ni garantiza por sí solo que el objeto permanezca vivo. La corrección de duración y propiedad sigue siendo necesaria.

### Retornos y validez temporal

Si una búsqueda devuelve un puntero a un nodo, ese resultado sirve mientras el nodo siga existiendo. Si otra operación lo elimina, el puntero previamente obtenido queda inválido. No debe conservarse como si fuera una copia independiente del dato. A veces conviene copiar el valor que necesitamos en lugar de guardar indefinidamente una dirección interna.

En un contrato de modificación hay que describir efectos secundarios. «Eliminar cambia el comienzo si el primer nodo coincide» es una consecuencia fundamental. Si la firma recibe el comienzo por valor y no retorna otro, puede liberar ese primer nodo y dejar al llamador con una dirección colgante.

### Práctica de lectura de firmas

1. **Con ayuda:** una función `void f(int* p)` hace `*p = 9`. ¿Puede verse afuera? **Respuesta:** sí, si `p` apunta al objeto del llamador y éste sigue vivo.
2. **Con pista:** esa función hace `p = nullptr`. ¿El puntero original queda nulo? **Respuesta:** no; el parámetro por valor era una copia de su dirección.
3. **Autónomo:** justificá una firma para insertar al principio. **Respuesta:** `void insertarInicio(Nodo*& inicio, int valor)` permite reemplazar el puntero del llamador; otra alternativa válida sería retornar el nuevo inicio y asignarlo explícitamente afuera.

### Hoja de consulta del capítulo 22

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Puntero por valor | Copia la dirección, puede llegar al mismo objeto. | Reasignar el parámetro no reemplaza el puntero del llamador. |
| Referencia a puntero | Nodo*& permite cambiar el puntero externo. | Necesaria en contratos que modifican inicio, o retornar el nuevo inicio. |
| Resultado encontrado | Un puntero a nodo es válido mientras el nodo viva. | Eliminarlo invalida observadores previos. |

## 23. Una lista enlazada: construir el recorrido desde los enlaces

Un arreglo permite llegar a una posición por índice. Una lista enlazada simple conecta objetos llamados nodos; para llegar al siguiente seguimos una dirección almacenada en el nodo actual. Los nodos no necesitan ocupar posiciones contiguas y su orden lógico está definido por los enlaces, no por sus direcciones numéricas.

### El nodo y la lista vacía

```cpp
struct Nodo {
    int dato;
    Nodo* siguiente;
};
```

Cada nodo contiene un entero y un puntero al siguiente nodo. Una lista lineal vacía se representa con `Nodo* inicio = nullptr;`. En una lista no vacía, `inicio` apunta al primero y el último tiene `siguiente == nullptr`. No se reserva una capacidad física máxima en la propia definición; crear nuevos nodos requiere memoria disponible y una política de gestión.

Con tres nodos A, B y C, el dibujo es `inicio → A → B → C → nullptr`. Las letras identifican objetos, no índices de un arreglo. Cambiar el valor de B no cambia la secuencia de enlaces. Reemplazar `B.siguiente` puede cambiar el recorrido aunque los valores de los objetos permanezcan iguales.

### Recorrer sin perder el comienzo

```cpp
Nodo* buscarLista(Nodo* inicio, int valor) {
    Nodo* actual = inicio;
    while (actual != nullptr && actual->dato != valor) {
        actual = actual->siguiente;
    }
    return actual;
}

void mostrarLista(const Nodo* inicio) {
    for (const Nodo* p = inicio; p != nullptr; p = p->siguiente) {
        std::cout << p->dato << ' ';
    }
    std::cout << '\n';
}
```

La búsqueda usa `actual`, una copia de la dirección inicial. Cada avance sigue `actual->siguiente`. El operador `->` permite acceder a un campo del objeto apuntado: `actual->dato` corresponde a `(*actual).dato`. Antes de usarlo debemos saber que el puntero identifica un nodo vivo.

El recorrido de impresión no modifica enlaces. Si recorriéramos asignando al único puntero propietario del llamador, podríamos perder el comienzo de la estructura. Un parámetro por valor permite mover la copia local, pero conviene dar nombres que hagan visible la diferencia entre comienzo y cursor.

### Buscar, modificar y conocer el costo

`buscarLista` devuelve una dirección o `nullptr`. Para cambiar el dato encontrado, primero comprobamos que el resultado no sea nulo. Si la lista tiene un invariante de orden, modificar una clave en el lugar puede romperlo: quizás necesitemos retirar y reinsertar el nodo. Cambiar un campo informativo sin afectar la clave no plantea el mismo problema.

Buscar por valor requiere recorrer hasta el hallazgo o el final; el peor caso es lineal. Saber que el dato está en «posición 50» no ofrece acceso directo como en un arreglo: necesitamos seguir enlaces. Por eso no se traslada automáticamente la eficiencia de búsqueda binaria de arreglos a listas simples.

### Comprobar una representación

Antes de cualquier operación, revisá lista vacía, un nodo y varios nodos. Para la representación lineal de esta sección, un ciclo accidental rompe el recorrido hasta `nullptr` y puede provocar un bucle infinito. Las listas circulares de capítulos posteriores usan otro contrato; no son una variante que se pueda mezclar sin cambiar condiciones de terminación.

1. **Con ayuda:** ¿qué significa `inicio == nullptr`? **Respuesta:** no hay primer nodo en esta representación.
2. **Con pista:** ¿buscar y devolver `nullptr` significa que el entero encontrado vale cero? **Respuesta:** no; representa ausencia de nodo, mientras cero puede ser un dato válido.
3. **Autónomo:** explicá por qué una lista no es «un arreglo de punteros». **Respuesta:** su secuencia se construye mediante nodos y enlaces; no necesita un arreglo de posiciones para existir ni garantiza acceso por índice constante.

### Hoja de consulta del capítulo 23

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Lineal vacía | inicio == nullptr. | El último de una no vacía tiene siguiente nulo. |
| Recorrido | actual = actual->siguiente. | Usar cursor y conservar comienzo; comprobar nulo antes de campos. |
| Costo | Búsqueda por valor O(n) en peor caso. | No hay acceso directo al nodo i como en un arreglo. |

## 24. Insertar en listas: preparar el nodo antes de conectarlo

La inserción agrega un nodo y reorganiza enlaces. Comparada con un arreglo, no exige desplazar todos los datos posteriores, pero puede exigir recorrer para localizar el lugar. Es necesario distinguir el costo de encontrar una posición del costo de conectar una vez que ya la conocemos.

### Inserción al principio

```cpp
void insertarInicio(Nodo*& inicio, int valor) {
    Nodo* nuevo = new Nodo{valor, inicio};
    inicio = nuevo;
}
```

Primero el nodo nuevo apunta al antiguo comienzo; después `inicio` pasa a apuntar al nuevo. Si invirtiéramos estas dos decisiones sin conservar el comienzo anterior, podríamos perder la lista. Con `inicio == nullptr`, el mismo esquema crea un nodo cuyo siguiente es nulo, por lo que también resuelve la lista vacía.

Insertar 2 y después 7 al principio genera `[7, 2]`: la sucesión queda en orden inverso al de carga. No es un defecto del algoritmo, sino su efecto. Si la consigna exige conservar el orden de entrada, debemos elegir otro punto de inserción.

### Inserción al final

```cpp
void insertarFinal(Nodo*& inicio, int valor) {
    Nodo* nuevo = new Nodo{valor, nullptr};
    if (inicio == nullptr) {
        inicio = nuevo;
        return;
    }
    Nodo* ultimo = inicio;
    while (ultimo->siguiente != nullptr) ultimo = ultimo->siguiente;
    ultimo->siguiente = nuevo;
}
```

Si está vacía, el nodo nuevo se convierte en el primero. Si no, recorremos hasta que el campo siguiente sea nulo y conectamos allí. La función utiliza `inicio` por referencia porque puede modificarlo en el caso vacío. Con sólo el puntero de comienzo, buscar el final cuesta O(n). Si mantuviéramos también un puntero al último y sus invariantes, podríamos evitar ese recorrido, pero tendríamos otro dato que actualizar en bajas y vaciados.

### Inserción ordenada

```cpp
void insertarOrdenado(Nodo*& inicio, int valor) {
    Nodo* anterior = nullptr;
    Nodo* actual = inicio;
    while (actual != nullptr && actual->dato < valor) {
        anterior = actual;
        actual = actual->siguiente;
    }
    Nodo* nuevo = new Nodo{valor, actual};
    if (anterior == nullptr) inicio = nuevo;
    else anterior->siguiente = nuevo;
}
```

`anterior` y `actual` delimitan el lugar. Avanzamos mientras el dato actual es menor; al detenernos, insertamos entre ambos. Si `anterior` sigue nulo, corresponde reemplazar el comienzo. Si `actual` es nulo, el nuevo queda al final. El mismo procedimiento contempla medio, principio y final sin perder enlaces.

La comparación estricta hace que el nuevo valor se coloque antes de sus iguales. Si el contrato exige después, hay que avanzar sobre los iguales. Si exige rechazarlos, necesitamos comprobarlo y devolver un resultado que informe el rechazo. El código mostrado admite repetidos y requiere que la lista estuviera ordenada antes de llamarlo.

### Traza y pruebas

Para insertar 5 en `[2, 8]`, inicialmente anterior es nulo y actual apunta a 2. Avanzamos una vez: anterior apunta a 2 y actual a 8. El nuevo nodo apunta a 8; el siguiente de 2 apunta al nuevo. El comienzo sigue siendo 2. No se copió un arreglo ni se movió físicamente el 8.

1. **Con ayuda:** insertá 1 en `[2, 8]`. **Respuesta:** no se avanza; el nuevo apunta al antiguo primero y se actualiza inicio.
2. **Con pista:** insertá 9 en esa lista. **Respuesta:** actual llega a nulo y anterior al último; se enlaza un nuevo último con siguiente nulo.
3. **Autónomo:** explicá por qué insertar al principio es O(1) pero insertar ordenado no siempre. **Respuesta:** conectar delante requiere pocos enlaces; encontrar el punto ordenado puede recorrer toda la lista.

### Hoja de consulta del capítulo 24

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Insertar delante | nuevo->siguiente = antiguo inicio; inicio = nuevo. | Preparar enlace antes de reemplazar la única referencia al comienzo. |
| Ordenado | Anterior y actual delimitan la inserción. | Definir política de iguales; precondición de orden. |
| Costos | Delante O(1); final sólo con inicio O(n). | Localizar y conectar son tareas distintas. |

## 25. Eliminar nodos: desenlazar antes de perder la información

Eliminar un nodo requiere dos tareas diferentes: retirar su enlace del recorrido y liberar el objeto si la lista es su propietaria. Hacer sólo la primera deja memoria sin liberar. Hacer sólo la segunda deja enlaces hacia un objeto muerto. La secuencia importa porque después de `delete` ya no podemos consultar los campos de la víctima.

### Una eliminación acompañada

```cpp
bool eliminarLista(Nodo*& inicio, int valor) {
    Nodo* anterior = nullptr;
    Nodo* actual = inicio;
    while (actual != nullptr && actual->dato != valor) {
        anterior = actual;
        actual = actual->siguiente;
    }
    if (actual == nullptr) return false;
    if (anterior == nullptr) inicio = actual->siguiente;
    else anterior->siguiente = actual->siguiente;
    delete actual;
    return true;
}
```

Buscamos conservando anterior y actual. Si actual termina nulo, no hay coincidencia y nada cambia. Si encontramos el primero, actualizamos `inicio` con su siguiente. En otro lugar, el siguiente del anterior salta la víctima. Recién después liberamos actual. Ninguna instrucción posterior vuelve a consultar el nodo destruido.

Con `[3, 6, 9]` y objetivo 6, anterior apunta a 3 y actual a 6. El siguiente de 3 pasa a apuntar a 9; liberamos 6. Si el objetivo fuera 3, el comienzo pasa a 6. Si hubiera un único nodo y coincidiera, su siguiente nulo se convierte en el nuevo comienzo.

### Eliminar todas sin perder duplicados consecutivos

```cpp
int eliminarTodasLista(Nodo*& inicio, int valor) {
    int eliminadas = 0;
    Nodo* anterior = nullptr;
    Nodo* actual = inicio;
    while (actual != nullptr) {
        if (actual->dato == valor) {
            Nodo* victima = actual;
            actual = actual->siguiente;
            if (anterior == nullptr) inicio = actual;
            else anterior->siguiente = actual;
            delete victima;
            ++eliminadas;
        } else {
            anterior = actual;
            actual = actual->siguiente;
        }
    }
    return eliminadas;
}

void destruirLista(Nodo*& inicio) {
    while (inicio != nullptr) {
        Nodo* victima = inicio;
        inicio = inicio->siguiente;
        delete victima;
    }
}
```

Cuando borramos, actual avanza usando el siguiente que todavía era válido antes de destruir la víctima. Anterior no avanza: sigue siendo el nodo conservado que precede al próximo candidato. Si la víctima era el primero, anterior permanece nulo y podemos borrar también los siguientes repetidos del comienzo.

Cuando no borramos, ambos cursores avanzan. Así cada nodo se considera una sola vez. Aplicar repetidamente una búsqueda desde el comienzo puede ser correcto con otra implementación, pero hacer recorridos adicionales; aquí el contrato del ejercicio pide una sola pasada.

### Destruir una lista completa

`destruirLista` conserva la víctima, adelanta el comienzo y luego destruye. Al finalizar deja `inicio == nullptr`. Esto permite distinguir un estado vacío válido de una variable que todavía conserva una dirección liberada. Si otros punteros observaban nodos, quedan inválidos y no deben usarse; el vaciado no recorre todas las variables del programa para limpiarlas.

Un error típico es escribir `delete actual; actual = actual->siguiente;`: la segunda instrucción lee memoria después de liberarla. Otro es mover anterior al nodo que acabamos de destruir. En ambos casos el problema existe aunque una prueba pequeña parezca producir el resultado deseado.

1. **Con ayuda:** eliminá todas las apariciones de 2 en `[2, 2, 5, 2]`. **Respuesta:** los dos primeros cambian inicio, el último cambia el siguiente de 5 y queda `[5]`.
2. **Con pista:** ¿por qué anterior no avanza tras borrar? **Respuesta:** debe seguir enlazando con el siguiente candidato; la víctima ya no pertenece a la lista y no sirve como anterior.
3. **Autónomo:** proponé pruebas. **Respuesta:** vacío, ausente, primero, último, único, varios consecutivos, todos iguales y ninguno igual; comprobar contenido, terminación y puntero inicial.

![El enlace se repara antes de liberar la víctima.](/planos-de-estudio/images/pi/baja.svg)

*Esquema original. El enlace se repara antes de liberar la víctima.*

### Hoja de consulta del capítulo 25

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Baja | Desenlazar y después liberar. | No leer siguiente después de delete. |
| Repetidos | Al borrar, anterior permanece; actual toma el siguiente conservado. | Así no se saltan consecutivos y se recorre una sola vez. |
| Destrucción | Al terminar, inicio queda nulo. | Los demás alias a nodos liberados no se vuelven válidos. |

## 26. Dividir y fusionar listas: transferir nodos con un contrato de propiedad

Cuando una consigna pide generar listas nuevas, necesitamos preguntar si se copian datos o se reutilizan nodos. En una copia, las estructuras pueden tener objetos independientes. En una transformación destructiva, los mismos nodos cambian de dueño y las listas de origen deben quedar en un estado definido. Mezclar ambos modelos produce dobles liberaciones, fugas o alias inesperados.

### Separar manteniendo el orden relativo

La función siguiente recibe una lista lineal de enteros y dos salidas **inicialmente vacías**. Reutiliza cada nodo, envía pares a una salida e impares a otra y deja el origen vacío. Las tres listas deben ser disjuntas antes de operar; no se admite pasar el mismo puntero de lista como origen y salida.

```cpp
void anexarNodo(Nodo*& primero, Nodo*& ultimo, Nodo* nodo) {
    nodo->siguiente = nullptr;
    if (primero == nullptr) primero = nodo;
    else ultimo->siguiente = nodo;
    ultimo = nodo;
}

void separar(Nodo*& origen, Nodo*& pares, Nodo*& impares) {
    Nodo* finPar = nullptr;
    Nodo* finImpar = nullptr;
    while (origen != nullptr) {
        Nodo* nodo = origen;
        origen = origen->siguiente;
        if (nodo->dato % 2 == 0) anexarNodo(pares, finPar, nodo);
        else anexarNodo(impares, finImpar, nodo);
    }
}
```

Con `[3, 2, 5, 4, 0]`, retiramos 3 del origen y lo anexamos a impares; 2 va a pares; 5 después de 3; 4 después de 2; 0 después de 4. El resultado es pares `[2, 4, 0]` e impares `[3, 5]`. No decimos que pares queda ordenada numéricamente: conserva el orden relativo original. El helper corta el enlace viejo del nodo antes de anexarlo y mantiene el último de cada salida para no recorrerla de nuevo.

### Fusionar dos secuencias ordenadas

```cpp
Nodo* fusionar(Nodo*& a, Nodo*& b) {
    Nodo* resultado = nullptr;
    Nodo* ultimo = nullptr;
    while (a != nullptr && b != nullptr) {
        Nodo* elegido;
        if (a->dato <= b->dato) {
            elegido = a;
            a = a->siguiente;
        } else {
            elegido = b;
            b = b->siguiente;
        }
        anexarNodo(resultado, ultimo, elegido);
    }
    Nodo* resto = a != nullptr ? a : b;
    if (resultado == nullptr) resultado = resto;
    else ultimo->siguiente = resto;
    a = nullptr;
    b = nullptr;
    return resultado;
}
```

Las entradas deben estar ordenadas ascendentemente, ser lineales, disjuntas y de propiedad transferible. Comparamos los primeros pendientes y anexamos el menor. Cuando una entrada se agota, el resto de la otra ya está ordenado y se conecta completo. Los punteros de entrada quedan nulos para expresar la transferencia; los nodos no se destruyeron.

Con A `[1, 4]` y B `[2, 3]`, elegimos 1 de A, luego 2 y 3 de B y conectamos el resto `[4]`. Se conservan cuatro nodos y el resultado es `[1, 2, 3, 4]`. Con claves iguales, `<=` elige primero la entrada A. Esta política evita una ambigüedad en el orden de empates entre listas.

### Unión no siempre significa eliminar repetidos

«Unir», «concatenar», «fusionar» y «unión como conjunto» pueden describir tareas diferentes. Concatenar coloca una lista detrás de otra; fusionar ordenadas intercala conservando el orden; una unión de conjuntos puede exigir quitar duplicados. El programa utiliza operaciones de combinación y el TP diferencia versiones destructivas. Antes de implementar, escribí qué debe ocurrir con iguales y qué queda en las entradas.

El costo de la fusión mostrada es O(n + m) en el peor caso y su espacio auxiliar es constante para esta versión iterativa. No reserva nuevos nodos. Eso no permite seguir tratando a las listas originales como dueñas: destruirlas por sus viejas direcciones y luego destruir el resultado sería intentar liberar objetos compartidos dos veces.

1. **Con ayuda:** fusioná `[1, 3]` y `[1, 2]`. **Respuesta:** `[1, 1, 2, 3]`, con el primer 1 de A antes del de B.
2. **Con pista:** ¿qué ocurre si una entrada está vacía? **Respuesta:** el resultado toma la otra secuencia y las entradas quedan vacías por transferencia.
3. **Autónomo:** explicá por qué `copia = inicio` no implementa una copia profunda. **Respuesta:** sólo copia la dirección del comienzo; ambas variables llegan a los mismos nodos y comparten sus modificaciones y duración.

### Hoja de consulta del capítulo 26

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Transferencia | Reutilizar nodos cambia quién los administra. | Entradas y salidas disjuntas; no liberar por los viejos comienzos. |
| Separación estable | Conservar orden relativo dentro de cada salida. | Salidas vacías al entrar; origen vacío al terminar. |
| Fusión | Elegir menor de dos frentes ordenados; O(n+m). | Entradas ordenadas y disjuntas, duplicados según política explícita. |

## 27. Listas de registros: aplicar el mismo enlace a datos más ricos

Un nodo no necesita contener sólo un entero. Puede contener un registro con varios campos. El mecanismo de recorrido permanece: lo que cambia es el tipo del dato, las claves de comparación y las reglas de validación. La estructura de almacenamiento debe servir al problema sin ocultar cómo se llega a cada campo.

### Un modelo trabajado

Supongamos un registro `Lectura` con código de dispositivo, sector y valor medido. Un `NodoLectura` puede contener `Lectura dato` y `NodoLectura* siguiente`. Para acceder al sector de la lectura apuntada por `p`, escribimos `p->dato.sector`: primero atravesamos el puntero al nodo y después accedemos al campo del registro. Si `dato` fuera a su vez un puntero, la expresión y las responsabilidades de propiedad serían diferentes.

Este modelo evita arreglos paralelos que pueden perder sincronización. Sin embargo, copiar un nodo completo indiscriminadamente también puede copiar su enlace. Cuando queremos actualizar sólo el registro, modificamos `p->dato`; no reemplazamos el siguiente accidentalmente con el de otra estructura.

### Ordenar por más de una clave

Queremos ordenar por dispositivo y, para el mismo dispositivo, por sector. Definimos un criterio: A precede a B si su dispositivo es menor, o si los dispositivos son iguales y su sector es menor. Esa misma comparación debe usarse cuando buscamos el punto de inserción. Si en una operación comparamos sólo sector y en otra sólo dispositivo, no conservamos un orden coherente.

Para insertar podemos reutilizar el esquema anterior/actual del capítulo 24, reemplazando la comparación entre enteros por la comparación entre registros. Creamos el nodo completo después de validar campos y antes de conectarlo. Para eliminar por una clave, aclaramos si se elimina una lectura, todas las de un dispositivo o una combinación exacta.

### Reportes sin mezclar objetivos

Una consulta puede contar lecturas que cumplen un umbral, otra calcular promedio y otra construir una lista por sector. Si se reutilizan nodos para separar sectores, el origen cambia y el contrato debe expresarlo, como en el capítulo 26. Si sólo queremos informar un conteo, no hace falta destruir o dividir la colección para obtenerlo.

En un registro que contiene tres notas, «todas aprobadas» requiere revisar las tres; un promedio no lo sustituye. Si se informa porcentaje de aprobados, primero contamos personas que cumplen y total de personas, y después dividimos cuando el total es positivo. Las reglas del ejemplo son ficticias y no se presentan como un régimen de evaluación universitario.

El siguiente ejemplo completo de tipos y funciones cuenta alumnos de una lista con tres notas al menos iguales a siete. Primero `aproboTodo` revisa un registro; luego `contarAprobados` decide si ese registro contribuye al total. Con notas `[7, 8, 9]` contribuye uno; con `[10, 10, 6]` no contribuye, aunque su promedio supere siete. Las notas deben haberse validado al cargarlas; contar no modifica la lista ni reemplaza esa validación.

```cpp
struct Alumno {
    std::string nombre;
    int notas[3];
};
struct NodoAlumno {
    Alumno dato;
    NodoAlumno* siguiente;
};
bool aproboTodo(const Alumno& alumno) {
    for (int i = 0; i < 3; ++i) {
        if (alumno.notas[i] < 7) return false;
    }
    return true;
}
int contarAprobados(const NodoAlumno* inicio) {
    int cantidad = 0;
    for (const NodoAlumno* p = inicio; p != nullptr; p = p->siguiente) {
        if (aproboTodo(p->dato)) ++cantidad;
    }
    return cantidad;
}
```

### El valor de probar con empates

Prepará dos registros con la misma clave principal y distinta secundaria, otros con clave completa igual si el contrato los admite, y casos donde nombre y código tienen órdenes distintos. Esas entradas descubren comparadores incompletos. Verificá que cada entidad conserve todos sus campos después de las operaciones.

1. **Con ayuda:** interpretá `p->dato.notas[2]`. **Respuesta:** tercera nota del registro contenido en el nodo apuntado por `p`, suponiendo puntero y dimensiones válidos.
2. **Con pista:** ¿por qué copiar `p->siguiente` como si fuera parte de un cambio de nombre es peligroso? **Respuesta:** modifica el enlace y puede perder o incorporar una secuencia ajena.
3. **Autónomo:** diseñá el contrato para separar lecturas por sector reutilizando nodos. **Respuesta orientativa:** entradas y salidas disjuntas, salidas vacías, preservación de datos y orden relativo, origen vacío y una única responsabilidad de liberación por nodo en las salidas.

### Hoja de consulta del capítulo 27

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Dato de registro | p->dato.campo atraviesa nodo y luego registro. | No modificar siguiente como si fuera un campo informativo. |
| Orden compuesto | Comparar clave principal y después secundaria si empatan. | Mantener todos los campos asociados a la entidad. |
| Reportes | Contar, promediar y separar nodos son operaciones diferentes. | No destruir la colección para una consulta que sólo necesita leer. |

## 28. Lista circular con puntero al último: cambiar la condición de final

En una lista circular no hay un último enlace nulo: el último nodo enlaza con el primero. Esta decisión permite volver al comienzo, pero obliga a cambiar los recorridos. Un `while(p != nullptr)` pensado para una lista lineal puede no terminar nunca. Primero se define la representación; después se reutilizan ideas, no condiciones a ciegas.

### El contrato de representación

Usaremos un único puntero externo llamado `ultimo`. Si es nulo, la lista está vacía. Si no, el primer nodo es `ultimo->siguiente`. Con un solo nodo, su siguiente apunta a sí mismo y ese nodo es también el último. Con varios, seguir exactamente una vuelta desde el primero vuelve al primero, sin encontrar nulo.

La expresión «último» se refiere al orden lógico de presentación. En una circular no hay un final físico marcado por ausencia de enlace. Mantener ese puntero permite insertar al principio y al final con pocas modificaciones de enlaces.

### Inserción al principio y al final

```cpp
void circularInicio(Nodo*& ultimo, int valor) {
    Nodo* nuevo = new Nodo{valor, nullptr};
    if (ultimo == nullptr) {
        nuevo->siguiente = nuevo;
        ultimo = nuevo;
    } else {
        nuevo->siguiente = ultimo->siguiente;
        ultimo->siguiente = nuevo;
    }
}

void circularFinal(Nodo*& ultimo, int valor) {
    circularInicio(ultimo, valor);
    ultimo = ultimo->siguiente;
}
```

En vacío, el nuevo se enlaza consigo mismo y se convierte en último. En no vacía, el nuevo apunta al primero anterior y el siguiente del último pasa al nuevo. Eso lo convierte en el primero sin cambiar el último. Para insertar al final, realizamos esa conexión y después movemos `ultimo` al nuevo nodo: el antiguo primero vuelve a ser el primero lógico.

Con `[3, 8]`, insertar 1 al principio conserva último 8 y deja recorrido `[1, 3, 8]`. Insertar 9 al final hace que último sea 9 y el recorrido sea `[1, 3, 8, 9]`. No recorrimos todos los nodos para localizar el final porque el contrato ya nos daba su dirección.

### Recorrer una vuelta

Si está vacía, terminamos inmediatamente. Si no, conservamos el primero y usamos `do / while`: procesamos el nodo actual, avanzamos y continuamos mientras no volvamos al primero. Así el caso de un nodo se procesa exactamente una vez. Hay que comprobar vacío antes de calcular `ultimo->siguiente`.

La actividad adicional del aula utiliza precisamente un puntero al último para una circular ordenada de identificadores. No podemos asumir que cualquier circular mantiene orden: la inserción simple al principio o al final no lo garantiza para valores arbitrarios. El siguiente capítulo agrega esa condición y una política de duplicados.

1. **Con ayuda:** ¿a quién apunta el siguiente en una circular de un nodo? **Respuesta:** al mismo nodo.
2. **Con pista:** ¿por qué no terminar cuando `actual == ultimo` antes de procesar? **Respuesta:** podríamos omitir el último o tratar mal el único; el recorrido de una vuelta debe definir claramente cuándo procesa y cuándo compara.
3. **Autónomo:** compará costo de insertar al final con lista lineal sólo con inicio. **Respuesta:** la circular con último permite conexión O(1); la lineal mostrada debe localizar el final en O(n), salvo que mantenga otro puntero.

![Último permite obtener el primero y reconocer una vuelta completa.](/planos-de-estudio/images/pi/circular.svg)

*Esquema original. Último permite obtener el primero y reconocer una vuelta completa.*

### Hoja de consulta del capítulo 28

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Circular vacía | ultimo == nullptr. | Si no está vacía, primero = ultimo->siguiente. |
| Único nodo | ultimo->siguiente == ultimo. | No se usa nulo como final de vuelta. |
| Inserción final | Insertar delante y mover ultimo al nuevo. | O(1) en esta representación sin imponer orden por valor. |

## 29. Circular ordenada: buscar, eliminar y destruir sin romper el ciclo

Agregamos el invariante de orden ascendente al recorrer desde `ultimo->siguiente` hasta `ultimo`. El enlace del último al primero cierra el ciclo y naturalmente une el mayor con el menor: no exigimos que ese salto también cumpla una comparación ascendente. El punto de corte definido por último es parte del contrato.

### Buscar y decidir duplicados

```cpp
Nodo* circularBuscar(Nodo* ultimo, int valor) {
    if (ultimo == nullptr) return nullptr;
    Nodo* primero = ultimo->siguiente;
    Nodo* actual = primero;
    do {
        if (actual->dato == valor) return actual;
        actual = actual->siguiente;
    } while (actual != primero);
    return nullptr;
}
```

Esta búsqueda general visita como máximo una vuelta. Aunque podríamos aprovechar el orden para un corte adicional, elegimos una versión sencilla que también sirve para otras circulares. Devolver un puntero encontrado no transfiere propiedad ni garantiza que permanezca válido si luego borramos el nodo.

La actividad del aula propone intentar insertar un identificador repetido, pero no explicita completamente la respuesta. Para esta guía adoptamos el contrato **rechazar duplicados y devolver false**. Es una decisión del ejemplo, no una regla universal de todas las listas circulares.

```cpp
bool circularOrdenado(Nodo*& ultimo, int valor) {
    if (circularBuscar(ultimo, valor) != nullptr) return false;
    if (ultimo == nullptr || valor < ultimo->siguiente->dato) {
        circularInicio(ultimo, valor);
    } else if (valor > ultimo->dato) {
        circularFinal(ultimo, valor);
    } else {
        Nodo* anterior = ultimo->siguiente;
        while (anterior->siguiente->dato < valor) {
            anterior = anterior->siguiente;
        }
        anterior->siguiente = new Nodo{valor, anterior->siguiente};
    }
    return true;
}
```

Primero comprobamos duplicado. Después distinguimos vacío o menor que el primero, mayor que el último y caso interior. En este último, las condiciones anteriores garantizan que existe un punto de inserción antes de regresar al comienzo. La búsqueda de duplicado y la localización pueden recorrer la lista: esta inserción ordenada no es O(1) en general.

### Eliminar exige actualizar el último cuando corresponde

```cpp
bool circularEliminar(Nodo*& ultimo, int valor) {
    if (ultimo == nullptr) return false;
    Nodo* anterior = ultimo;
    Nodo* actual = ultimo->siguiente;
    Nodo* primero = actual;
    do {
        if (actual->dato == valor) {
            if (actual == anterior) ultimo = nullptr;
            else {
                anterior->siguiente = actual->siguiente;
                if (actual == ultimo) ultimo = anterior;
            }
            delete actual;
            return true;
        }
        anterior = actual;
        actual = actual->siguiente;
    } while (actual != primero);
    return false;
}

void destruirCircular(Nodo*& ultimo) {
    if (ultimo == nullptr) return;
    Nodo* inicio = ultimo->siguiente;
    ultimo->siguiente = nullptr;
    ultimo = nullptr;
    destruirLista(inicio);
}
```

Mantenemos anterior y actual empezando con anterior en último y actual en primero. Si son el mismo nodo, la lista tenía uno solo y al eliminar queda vacía. Si borramos otro, enlazamos anterior con el siguiente de actual. Si actual era último, actualizamos último a anterior antes de liberar. El caso del primer nodo también funciona porque anterior comenzó en último.

### Destruir y volver a una representación conocida

Para destruir una circular no usamos directamente el destructor lineal mientras el ciclo siga cerrado. La función toma el primero, corta el siguiente del último con nulo, deja el puntero externo nulo y destruye la secuencia ahora lineal. Cada nodo se libera una vez. Después de ese proceso no debe usarse ningún alias a los antiguos nodos.

Caso guiado: insertamos 14, 3, 21 y 8, obteniendo `[3, 8, 14, 21]`. Rechazamos otro 8. Eliminamos 3: el primero pasa a 8 y el último sigue en 21. Eliminamos 21: último pasa a 14. Queda `[8, 14]`. Eliminar ambos debe terminar con último nulo; no con un enlace a una dirección destruida.

1. **Con ayuda:** ¿qué cambia al eliminar el primero de varios nodos? **Respuesta:** el siguiente del último salta al segundo; último conserva su dirección.
2. **Con pista:** ¿qué pasa al eliminar un ausente? **Respuesta:** se completa una vuelta y se devuelve false sin modificar enlaces.
3. **Autónomo:** proponé una batería de pruebas. **Respuesta:** vacío, único, principio, interior, último, ausente, duplicado rechazado y destrucción; verificar contenido ordenado, una sola vuelta y coherencia entre último y primero tras cada cambio.

### Hoja de consulta del capítulo 29

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Una vuelta | Guardar primero y terminar al regresar a él. | Comprobar vacío antes del do/while. |
| Baja circular | Si se borra ultimo, actualizarlo; si es único, dejar nulo. | Desenlazar antes de destruir y preservar el cierre. |
| Orden y duplicados | Ascendente de primero a último; esta guía rechaza claves repetidas. | El salto último→primero no es una comparación ascendente adicional. |


## Hoja de consulta de la unidad 3: Punteros y listas

Reconstruí los capítulos 20–29 antes de usar esta recopilación como repaso. Por cada fila, explicá el contrato y trazá un caso pequeño.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Dirección / contenido | p identifica un objeto; *p accede a él si sigue vivo. | No desreferenciar nulo, indeterminado o colgante. |
| Propiedad | Quien administra un objeto debe garantizar una liberación válida. | Los alias no deben destruirlo de nuevo. |
| Puntero por valor | Copia la dirección, puede llegar al mismo objeto. | Reasignar el parámetro no reemplaza el puntero del llamador. |
| Lineal vacía | inicio == nullptr. | El último de una no vacía tiene siguiente nulo. |
| Insertar delante | nuevo->siguiente = antiguo inicio; inicio = nuevo. | Preparar enlace antes de reemplazar la única referencia al comienzo. |
| Baja | Desenlazar y después liberar. | No leer siguiente después de delete. |
| Transferencia | Reutilizar nodos cambia quién los administra. | Entradas y salidas disjuntas; no liberar por los viejos comienzos. |
| Dato de registro | p->dato.campo atraviesa nodo y luego registro. | No modificar siguiente como si fuera un campo informativo. |
| Circular vacía | ultimo == nullptr. | Si no está vacía, primero = ultimo->siguiente. |
| Una vuelta | Guardar primero y terminar al regresar a él. | Comprobar vacío antes del do/while. |

**Autoevaluación:** elegí una operación, escribí entrada y resultado esperado, señalá el invariante y justificá la terminación. Después probá un caso de borde. Si la explicación depende de copiar líneas sin entenderlas, volvé al desarrollo de ese capítulo.
## 30. Recursividad: resolver un problema usando uno más pequeño

Una función recursiva se llama a sí misma, directamente o mediante otras funciones. La llamada no es una explicación suficiente: necesitamos identificar qué parte del problema se resuelve ahora, qué parte se delega y por qué esa delegación termina. Empezaremos con una suma, porque permite ver resultados pequeños sin añadir estructuras de memoria nuevas.

### Del significado a la recurrencia

Queremos sumar los enteros desde 1 hasta `n`, para `n >= 0`. Si `n = 0`, la suma del conjunto vacío se define como 0. Para `n > 0`, podemos separar el último término: suma hasta `n` = `n` + suma hasta `n−1`. Hemos descrito un caso base y una reducción del problema.

```cpp
long long sumaRec(int n) {
    if (n == 0) return 0;
    return n + sumaRec(n - 1);
}
```

El `return` del caso base termina esa llamada sin generar otra. En el caso recursivo, la función espera el resultado de `sumaRec(n - 1)` y después suma `n`. El contrato exige que la profundidad sea manejable y que el resultado entre en `long long`; el tipo no convierte el proceso en ilimitado. No se aceptan negativos: con −1 y la misma reducción nos alejaríamos de cero.

### Tres preguntas para diseñar

Primero: ¿cuál es una entrada que ya sé resolver sin otra llamada? Segundo: ¿qué entrada menor puedo pedirle a la misma función? Tercero: ¿cómo combino su respuesta con lo que corresponde a este nivel? Si falta la tercera pregunta, podemos devolver el resultado de un subproblema y olvidar parte del problema original.

Una función puede tener más de un caso base. Por ejemplo, Fibonacci distingue 0 y 1. También puede tener varias llamadas recursivas, pero eso cambia el costo y el árbol de ejecución. No hay que extrapolar que «cada función recursiva hace `n` llamadas».

### Terminación y corrección son diferentes

Un caso base escrito no garantiza que se alcance. Necesitamos una medida que disminuya dentro de un dominio acotado: aquí `n` disminuye de uno en uno y no baja de cero antes de terminar. Tampoco terminar garantiza devolver la suma correcta: `return sumaRec(n - 1)` terminaría, pero omitiría sumar `n`.

Podemos justificar corrección por el mismo razonamiento: el caso 0 cumple la definición; si la llamada menor devuelve la suma correcta hasta `n−1`, agregar `n` produce la suma correcta hasta `n`. Este argumento no sustituye pruebas de implementación, pero explica qué deberían comprobar.

### Iterar no significa llamar funciones distintas

La versión iterativa podría usar un acumulador y un `for` sin crear funciones diferentes. La distinción central es repetición mediante un bucle frente a llamadas que generan nuevos estados de ejecución, no «muchas funciones» frente a «una sola». Ambas técnicas pueden modularizarse y combinarse. Esta precisión evita interpretar una analogía introductoria como una definición del lenguaje.

1. **Con ayuda:** calculá `sumaRec(2)`. **Respuesta:** 2 + sumaRec(1), luego 2 + 1 + sumaRec(0), finalmente 3.
2. **Con pista:** ¿por qué `sumaRec(n + 1)` no sirve como reducción aquí? **Respuesta:** aumenta la medida en lugar de acercarse al caso base cero.
3. **Autónomo:** diseñá la suma de cuadrados hasta `n`. **Respuesta:** base 0 y retorno `n*n + sumaCuadrados(n-1)`, eligiendo tipos y límites que eviten desbordamiento también en el producto intermedio.

### Hoja de consulta del capítulo 30

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Recurrencia | S(0)=0; S(n)=n+S(n−1) para n>0. | Dominio natural, reducción y combinación del resultado. |
| Terminación | Una medida disminuye hacia un caso base alcanzable. | Escribir una base no garantiza alcanzarla. |
| Corrección | Base correcta + paso que conserva el significado. | Terminar y resolver la tarea son propiedades distintas. |

## 31. Pila de llamadas: distinguir descender de retornar

Una llamada recursiva no reemplaza simplemente todas las variables de la anterior. Cada activación tiene sus parámetros y datos locales y conserva el punto al que debe volver. La **pila de llamadas** es el modelo que permite representar esa espera. La llamada más reciente debe completar su tarea antes de que continúe quien la invocó.

### Traza completa de una suma

Para `sumaRec(3)`, la activación de 3 necesita sumar 3 al resultado de la de 2. La de 2 necesita sumar 2 al resultado de la de 1. La de 1 necesita sumar 1 al resultado de la de 0. Hasta aquí bajamos, pero todavía no obtuvimos las sumas pendientes.

| Momento | Activación | Qué falta resolver |
| --- | --- | --- |
| Descenso | n = 3 | 3 + resultado de n = 2 |
| Descenso | n = 2 | 2 + resultado de n = 1 |
| Descenso | n = 1 | 1 + resultado de n = 0 |
| Base | n = 0 | Devuelve 0 |
| Retorno | n = 1 | 1 + 0 = 1 |
| Retorno | n = 2 | 2 + 1 = 3 |
| Retorno | n = 3 | 3 + 3 = 6 |

Cada nivel conserva su propio `n`; cuando retorna la llamada de 0, el `n` de la llamada anterior sigue siendo 1. Esta observación explica por qué no se necesita una variable global para recordar cada valor pendiente.

### Instrucciones antes y después de la llamada

Si una función imprime `n` antes de llamarse con `n−1`, veremos el orden de descenso. Si imprime después, los valores aparecen al retornar, en orden inverso. No debemos describir ambas versiones como equivalentes sólo porque sus llamadas tengan los mismos parámetros. La ubicación de una acción cambia cuándo puede ejecutarse.

Lo mismo ocurre en listas: imprimir el nodo actual y luego el resto produce orden normal; llamar primero por el resto e imprimir después produce orden inverso sin cambiar enlaces. En el segundo caso permanecen activaciones pendientes mientras se llega al final.

### Tiempo y espacio no son la misma cuenta

La suma recursiva hace una cantidad lineal de llamadas y necesita profundidad lineal en este modelo. La suma iterativa puede usar un acumulador y espacio auxiliar constante. No se debe decir que la recursión ocupa espacio constante porque cada activación tenga sólo unas pocas variables: hay muchas activaciones simultáneas.

Una entrada muy grande puede agotar recursos de llamadas antes de producir un resultado, aunque el tipo del resultado sea suficiente. No suponemos una profundidad máxima universal ni una optimización de llamadas finales garantizada. En una materia introductoria conviene probar con entradas pequeñas y justificar la versión elegida.

1. **Con ayuda:** ¿cuántas activaciones de `sumaRec` aparecen desde n = 3 hasta la base? **Respuesta:** cuatro: 3, 2, 1 y 0.
2. **Con pista:** si imprimimos después de llamar con `n−1`, ¿qué ocurre con n = 3? **Respuesta:** una vez alcanzada la base, las impresiones pendientes aparecen como 1, 2 y 3 si la base no imprime.
3. **Autónomo:** explicá por qué una traza que sólo muestra 3 → 2 → 1 → 0 está incompleta para calcular el retorno. **Respuesta:** falta reconstruir las operaciones que cada activación dejó pendientes y sus valores de regreso.

![Cada activación conserva su operación pendiente hasta el retorno.](/planos-de-estudio/images/pi/llamadas.svg)

*Esquema original. Cada activación conserva su operación pendiente hasta el retorno.*

### Hoja de consulta del capítulo 31

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Activación | Cada llamada mantiene parámetros y operaciones pendientes. | Trazar descenso y retorno. |
| Orden de efectos | Imprimir antes / después cambia el orden de salida. | La secuencia de llamadas por sí sola no describe el retorno. |
| Espacio | Profundidad lineal puede requerir O(n) activaciones. | No confundir variables por llamada con memoria total. |

## 32. Recursión numérica: dígitos, potencias y dominio de entrada

Los números permiten reducciones distintas. Restar uno sirve para una potencia con exponente natural; dividir por diez sirve para quitar un dígito decimal. Elegimos una medida que realmente se acerque al caso base y una operación que reconstruya el resultado deseado, sin confundir representación textual con valor numérico.

### Contar e imprimir dígitos

```cpp
int digitosRec(unsigned int n) {
    if (n < 10) return 1;
    return 1 + digitosRec(n / 10);
}

void invertirDigitos(unsigned int n) {
    std::cout << n % 10;
    if (n >= 10) invertirDigitos(n / 10);
}
```

`digitosRec` utiliza enteros sin signo. Si el número es menor que diez, tiene un dígito, incluido el cero. En otro caso cuenta uno más que su versión sin el último dígito. Con 4020: 1 + dígitos de 402; después 1 + 1 + dígitos de 40; luego 1 + 1 + 1 + dígitos de 4; resultado 4.

`invertirDigitos` hace otra tarea: imprime el último dígito y sigue con los restantes. Para 4020 imprime `0204`. Como salida textual puede mostrar el cero inicial de la secuencia invertida. Una función que devolviera un entero invertido retornaría 204 y no conservaría ese cero como dígito inicial del número. Antes de programar hay que decidir si el resultado es impresión, cadena o valor entero.

### Construir una potencia

```cpp
long long potenciaRec(long long base, unsigned int exponente) {
    if (exponente == 0) return 1;
    return base * potenciaRec(base, exponente - 1);
}
```

Para exponente positivo, una potencia es la base multiplicada por la potencia con un exponente menos. La base del algoritmo devuelve 1 para exponente cero. Este contrato adopta también el valor 1 cuando base y exponente son cero como convención computacional de esta función; no pretende resolver todas las convenciones matemáticas de contextos diferentes.

Con base 3 y exponente 3, dejamos pendientes tres multiplicaciones por 3; la base devuelve 1 y al retornar obtenemos 3, 9 y 27. El exponente es sin signo para representar un natural, pero la lectura debe validarse antes de convertir una entrada negativa. Convertir −1 sin comprobar puede producir un valor enorme y no una validación exitosa.

### Rangos y resultados intermedios

El contrato exige que el resultado y las operaciones intermedias entren en el tipo. El desbordamiento de enteros con signo no se corrige simplemente observando un resultado negativo. Tampoco usar `long long` elimina todos los límites. Para estudiar el mecanismo usá bases y exponentes pequeños y comprobá con una cuenta independiente.

La recursión de potencia mostrada realiza una llamada por unidad de exponente: costo y profundidad lineales en él. Hay algoritmos que reducen más rápidamente mediante cuadrados, pero no es necesario introducirlos para comprender esta recurrencia. Si se propone una mejora, deben justificarse sus casos y su costo, no sólo cambiar la fórmula.

1. **Con ayuda:** calculá `digitosRec(0)`. **Respuesta:** devuelve 1 directamente.
2. **Con pista:** ¿qué imprime invertir 650? **Respuesta:** `056`; devolver un entero invertido sería otra tarea y no conservaría ese cero inicial.
3. **Autónomo:** explicá cómo calcular un producto natural mediante sumas. **Respuesta:** para multiplicador cero devolver cero; en otro caso sumar el multiplicando al producto con multiplicador menor en uno, con límites de entrada y resultado explícitos.

### Hoja de consulta del capítulo 32

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Dígitos | D(n)=1 si n<10; D(n)=1+D(n/10) en otro caso. | n sin signo, división entera; cero tiene un dígito. |
| Potencia | P(b,0)=1; P(b,e)=b·P(b,e−1) para e>0. | Convención P(0,0)=1 aquí; todas las operaciones deben caber en el tipo. |
| Representación | Imprimir inversión puede conservar ceros que un entero no conserva. | Definir si se devuelve valor, cadena o se imprime. |

## 33. Recursión sobre cadenas: mirar extremos sin copiar todo

Una palabra es palíndroma cuando se lee igual en los dos sentidos bajo una regla de comparación. La definición parece simple, pero hay decisiones previas: ¿se distinguen mayúsculas?, ¿se ignoran espacios?, ¿qué unidades se comparan? En nuestros ejemplos usamos cadenas ASCII sencillas y comparación exacta, como pide la práctica en su ejemplo de mayúsculas y minúsculas.

### Reducir por ambos extremos

Si los extremos son diferentes, ya sabemos que no es palíndroma. Si coinciden, la palabra completa lo será cuando también lo sea el segmento interior. Una cadena de cero o un elemento es un caso base: no queda ningún par que contradiga la propiedad.

```cpp
bool palindromo(const std::string& texto, int izq, int der) {
    if (izq >= der) return true;
    if (texto[izq] != texto[der]) return false;
    return palindromo(texto, izq + 1, der - 1);
}
```

Llamamos con izquierda 0 y derecha `static_cast<int>(texto.size()) - 1`, bajo el contrato de que la longitud cabe en `int`. Para la cadena vacía, la derecha queda en −1 y la primera condición devuelve true sin acceder. La conversión se hace antes de restar para no realizar una resta sin signo que se desborde en vacío.

### Una traza razonada

Con `"radar"`, primero comparamos r con r; después a con a; finalmente izquierda y derecha coinciden en la d y terminamos. Con `"Radar"`, R y r son diferentes y devolvemos false de inmediato. No hay una transformación automática de mayúsculas ni una regla lingüística oculta en el algoritmo.

La función recibe la cadena por referencia constante y mueve índices. Así evita crear una copia del segmento en cada llamada. Usar `substr` puede ser una forma válida de expresar la reducción y aparece sugerido en la práctica, pero copiar segmentos sucesivamente agrega trabajo y almacenamiento. Debemos distinguir simplicidad de expresión de costo real.

### Invertir una cadena como problema diferente

Para invertir una cadena podemos intercambiar extremos y seguir hacia el interior, o construir otro resultado. En el primer caso la función necesita permiso para modificar y una referencia no constante. En el segundo, debe devolver o actualizar una cadena nueva. No se deduce una implementación correcta de inversión simplemente devolviendo el `bool` del palíndromo: el resultado requerido es de otro tipo.

En texto UTF-8, un carácter visible puede ocupar varios bytes y también hay combinaciones Unicode. `std::string` indexa unidades de su almacenamiento, no garantiza recorrer caracteres humanos completos. Esta guía no pretende resolver procesamiento lingüístico general; para los algoritmos introductorios elegimos un dominio pequeño que hace explícita la comparación.

1. **Con ayuda:** trazá `"abba"`. **Respuesta:** a con a, b con b y luego los índices se cruzan; devuelve true.
2. **Con pista:** ¿por qué el caso base va antes del acceso a extremos? **Respuesta:** en vacío o cuando los índices se cruzaron, no hay un par válido que consultar.
3. **Autónomo:** cambiá el contrato para ignorar espacios. **Respuesta orientativa:** debe definirse una normalización o un avance que salte esos separadores antes de comparar; no alcanza con afirmar que la función actual ya los ignora.

### Hoja de consulta del capítulo 33

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Palíndromo | Comparar extremos y reducir ambos índices. | Base si izquierda ≥ derecha, antes de acceder. |
| Dominio | Comparación exacta de cadenas ASCII en los ejemplos. | No promete normalización de mayúsculas, espacios o Unicode. |
| Copia y referencia | Referencia constante con índices evita copiar cada segmento. | Valorar costo de substr si se elige esa variante. |

## 34. Recursión sobre arreglos: recortar el prefijo o avanzar un índice

Un arreglo puede recorrerse recursivamente de varias maneras. Podemos reducir su dimensión lógica para trabajar sobre prefijos más cortos o mantener la dimensión y avanzar un índice. Ambas estrategias necesitan una medida de progreso, límites válidos y un contrato preciso sobre qué significa «primero».

### Dos funciones con dos reducciones

```cpp
long long sumarPares(const int a[], int n) {
    if (n == 0) return 0;
    const int ultimo = a[n - 1];
    return (ultimo % 2 == 0 ? ultimo : 0) + sumarPares(a, n - 1);
}

int primerImpar(const int a[], int n, int i = 0) {
    if (i == n) return -1;
    if (a[i] % 2 != 0) return i;
    return primerImpar(a, n, i + 1);
}
```

`sumarPares` considera el último del prefijo y delega el resto a `n−1`. Si ese último es par, lo suma; si no, aporta cero. La base vacía devuelve cero. Con `[4, 5, 10, 17, 2, 3]` la suma es 16: contribuyen 4, 10 y 2. El contrato exige resultados dentro de `long long` y `n` válido.

`primerImpar` devuelve **el índice** del primer impar desde la izquierda, no su valor. Empieza con `i = 0`, comprueba fin antes de acceder y avanza de uno en uno. Con `[2, 0, 8, 7, 4, 3]`, devuelve índice 3, cuyo valor es 7. Si no hay, devuelve −1. El índice evita usar como ausencia un valor que podría ser un dato legítimo en otros problemas.

### La ambigüedad del TP 4

El ejercicio 11 de la práctica pide el «primer número impar» y para ese arreglo indica como resultado 3. Si «primero» se interpreta desde el índice 0, el valor sería 7; el valor 3 corresponde al último impar del recorrido usual de izquierda a derecha. Una solución que inspecciona primero el extremo derecho puede producir ese ejemplo, pero responde otra prioridad.

No corregimos silenciosamente el enunciado ni inventamos la interpretación de la cátedra. Esta guía explicita su contrato y permite comparar las alternativas. Para resolver esa actividad concreta, corresponde aclarar con la docente cuál de los dos criterios se pretende. Si necesitás retornar valor, podés usar el índice encontrado tras comprobar que no es −1.

### Máximo o mínimo no tienen la misma base que una suma

La suma vacía tiene una identidad útil, cero. Un mínimo de enteros no tiene un valor universal que podamos devolver como si perteneciera al conjunto vacío. Una función que comienza comparando con `a[0]` necesita `n > 0`, o debe devolver además una señal de ausencia. Copiar la base de la suma sin revisar el significado puede producir un resultado falso.

Para un mínimo no vacío, una recurrencia compara el último elemento con el mínimo del prefijo anterior, y usa `n == 1` como base. Esa versión no admite vacío sin otro contrato. Aprender a formular precondiciones evita acceder a `a[-1]` cuando se reduce una dimensión que ya era cero.

1. **Con ayuda:** primer impar de `[8, 9, 3]`. **Respuesta:** índice 1 y valor 9.
2. **Con pista:** ¿qué devuelve sumar pares en vacío? **Respuesta:** cero, antes de leer `a[n−1]`.
3. **Autónomo:** diseñá una función que cuente apariciones de un valor. **Respuesta:** base vacía cero; comparar el último, sumar uno si coincide y delegar al prefijo menor. Debe recorrer todos, no retornar tras la primera coincidencia.

### Hoja de consulta del capítulo 34

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Prefijo menor | Reducir n y analizar a[n−1] sólo cuando n>0. | Suma vacía admite cero; mínimo requiere otro contrato. |
| Primer impar | Avanzar desde índice 0; retornar índice o −1. | En [2,0,8,7,4,3], índice 3 y valor 7 bajo este contrato. |
| Ambigüedad TP4 | Su ejemplo indica valor 3 pese a pedir primer impar. | Distinguir primer y último; consultar criterio de la actividad. |

## 35. Recursión sobre listas: el resto de la estructura ya es otra lista

Una lista lineal no vacía puede descomponerse en su primer nodo y la secuencia que empieza en su siguiente. Esa forma se adapta naturalmente a una definición recursiva: resolvemos algo sobre el primero y pedimos el resto a la misma función. La base es el puntero nulo. El contrato presupone una lista lineal sin ciclos y nodos vivos.

### Longitud, búsqueda e impresión inversa

```cpp
struct Nodo {
    int dato;
    Nodo* siguiente;
};

int longitudRec(const Nodo* inicio) {
    if (inicio == nullptr) return 0;
    return 1 + longitudRec(inicio->siguiente);
}

void imprimirInversa(const Nodo* inicio) {
    if (inicio == nullptr) return;
    imprimirInversa(inicio->siguiente);
    std::cout << inicio->dato << ' ';
}

const Nodo* buscarRec(const Nodo* inicio, int valor) {
    if (inicio == nullptr || inicio->dato == valor) return inicio;
    return buscarRec(inicio->siguiente, valor);
}
```

La longitud de una lista vacía es cero; de una no vacía, uno más que la longitud del resto. La búsqueda devuelve el nodo actual si está vacío o si coincide; en otro caso busca en el siguiente. El `||` evita leer el campo dato cuando el puntero es nulo.

La impresión inversa llama primero al resto y escribe el dato al retornar. Con `[2, 5, 9]`, espera en 2, espera en 5, espera en 9 y llega al nulo. Luego imprime 9, 5 y 2. Los enlaces no cambian: después de imprimir, la lista sigue empezando en 2. Imprimir al revés no equivale a invertir la estructura.

### Fusionar recursivamente

```cpp
Nodo* mergeRec(Nodo* a, Nodo* b) {
    if (a == nullptr) return b;
    if (b == nullptr) return a;
    if (a->dato <= b->dato) {
        a->siguiente = mergeRec(a->siguiente, b);
        return a;
    }
    b->siguiente = mergeRec(a, b->siguiente);
    return b;
}
```

Si una lista está vacía, devolvemos la otra. Si ambas tienen datos, elegimos el menor primero y enlazamos su siguiente con la fusión del resto correspondiente y la otra entrada. La función reutiliza nodos, no crea copias independientes. Requiere listas ordenadas, disjuntas y transferibles.

En esta versión los punteros se reciben por valor. Después de `resultado = mergeRec(a, b)`, el llamador debe dejar de usar `a` y `b` como listas propietarias separadas, por ejemplo asignándoles nulo. No se debe destruir las viejas entradas por sus antiguos comienzos: ahora sus nodos forman la estructura del resultado. Esa responsabilidad difiere de la versión iterativa del capítulo 26, que recibe referencias y vacía las entradas explícitamente.

### Profundidad y elección

Recorrer recursivamente una lista de `n` nodos exige profundidad lineal en el modelo de llamadas. Una lista muy larga puede hacer preferible la versión iterativa. Una circular no llega a nulo y estas funciones no terminan con ella; para tratar una circular habría que introducir otro criterio de parada o transformar la representación bajo un contrato correcto.

La recursión simplifica ciertas explicaciones estructurales, pero no elimina propiedad, duración ni costo. Antes de llamar, preguntá quién administra los nodos y qué punteros seguirán siendo válidos. Después, verificá contenido y enlaces, no sólo la salida impresa.

1. **Con ayuda:** longitud de `[4, 7]`. **Respuesta:** 1 + (1 + 0) = 2.
2. **Con pista:** ¿la impresión inversa permite después recorrer hacia atrás? **Respuesta:** no; no agrega enlaces anteriores ni invierte los existentes.
3. **Autónomo:** compará merge iterativo y recursivo. **Respuesta:** ambos pueden reutilizar nodos y tener tiempo O(n+m), pero la versión recursiva conserva llamadas pendientes y exige contemplar ese espacio y el contrato de los punteros de entrada.

### Hoja de consulta del capítulo 35

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Lista como subproblema | Primero + lista que empieza en siguiente. | Base nula y precondición sin ciclos. |
| Inversión de impresión | Recurrir primero y mostrar al retornar. | No modifica enlaces ni invierte la estructura. |
| Merge recursivo | Reutiliza nodos; tiempo O(n+m), profundidad hasta O(n+m). | Dejar de administrar las entradas como dueñas separadas. |

## 36. Fibonacci: una definición breve puede repetir mucho trabajo

La sucesión con convenio `F(0)=0`, `F(1)=1` y `F(n)=F(n−1)+F(n−2)` permite estudiar recursión con dos llamadas. Es una buena definición para comprender descomposición, pero su traducción directa recalcula muchos subproblemas. Una función corta no garantiza un algoritmo eficiente.

### Leer el árbol de llamadas

Para F(5), necesitamos F(4) y F(3). F(4) vuelve a pedir F(3) y F(2). Los F(3) separados calculan lo mismo de nuevo. No es la pila la que «recuerda automáticamente» el resultado de una llamada anterior ya terminada; sin una estrategia explícita de conservación, se repite el trabajo.

```cpp
unsigned long long fibonacci(unsigned int n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

unsigned long long fibonacciIter(unsigned int n) {
    unsigned long long anterior = 0;
    unsigned long long actual = 1;
    for (unsigned int i = 0; i < n; ++i) {
        const unsigned long long siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }
    return anterior;
}
```

La primera función coincide con la recurrencia. Sus casos base detienen la reducción para 0 y 1. Para esta demostración la probamos con valores pequeños; aumentar mucho `n` puede hacerla impracticable antes incluso de discutir el rango del tipo entero.

### Una versión iterativa con estado suficiente

La segunda mantiene dos términos consecutivos. Antes de cada avance, `anterior` y `actual` representan una pareja de la sucesión. Calcula el siguiente, desplaza la pareja y repite. Para n = 0 no entra al bucle y devuelve 0; para n = 1 realiza un avance y devuelve 1. Usamos la misma definición y los mismos resultados de control.

El trabajo es lineal en n y el espacio auxiliar constante, dentro del modelo de aritmética de tamaño fijo. No presupongas valores arbitrariamente grandes: incluso `unsigned long long` tiene límite y la versión iterativa calcula también un término siguiente como parte de su avance. El ejemplo se restringe a entradas pequeñas que mantienen todas las operaciones dentro del rango.

### Comparar crecimiento correctamente

La versión recursiva directa tiene una cantidad de llamadas que crece exponencialmente; O(2^n) es una cota superior usual, no una fórmula exacta de llamadas. Su profundidad simultánea es lineal: el número total de activaciones ejecutadas y la cantidad apilada al mismo tiempo son magnitudes diferentes.

La repetición puede reducirse guardando resultados ya calculados, técnica que se estudia como memoización. Mencionarla explica qué faltaba, sin convertirla en contenido obligatorio del programa recuperado. La comparación principal aquí es entre la traducción directa y la solución iterativa que ya podemos comprender.

### Elegir con razones

No concluimos que toda recursión es mala. Un recorrido de lista hace una llamada por nodo y no repite necesariamente el mismo subproblema. Fibonacci muestra que debemos dibujar la estructura de llamadas y contar su trabajo antes de decidir. Un algoritmo iterativo también puede ser ineficiente si repite cálculos innecesarios.

1. **Con ayuda:** escribí F(0) a F(6). **Respuesta:** 0, 1, 1, 2, 3, 5, 8.
2. **Con pista:** identificá un subproblema repetido al calcular F(5). **Respuesta:** F(3) aparece tanto como hijo directo como dentro de F(4), y se repiten otros menores.
3. **Autónomo:** ¿exponencial de llamadas significa profundidad exponencial? **Respuesta:** no; las ramas se ejecutan en distintos momentos, mientras la profundidad máxima sigue una cadena de reducciones y es lineal.

### Hoja de consulta del capítulo 36

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Fibonacci | F(0)=0; F(1)=1; F(n)=F(n−1)+F(n−2). | Convención de índices desde cero; entradas pequeñas. |
| Trabajo repetido | La versión directa repite subproblemas y crece exponencialmente. | Cantidad total de llamadas y profundidad son diferentes. |
| Alternativa iterativa | Dos términos consecutivos, tiempo O(n), espacio O(1). | El rango finito de enteros sigue aplicando a resultados e intermedios. |

## 37. Taller final: explicar, programar, comprobar y elegir

El objetivo del curso no es identificar palabras aisladas como «puntero» o «recursividad». Necesitamos leer un problema, elegir una representación, construir operaciones y justificar sus límites. Este taller ofrece un recorrido original y criterios de autocorrección; no reproduce preguntas de una evaluación del aula.

### Etapa guiada: decidir antes de escribir

Una biblioteca quiere guardar códigos y nombres de ejemplares, buscar por código, registrar disponibilidad y producir reportes. Primero preguntamos cuántos datos habrá y qué cambios son frecuentes. Un arreglo de registros es una elección sencilla si existe una capacidad razonable y necesitamos acceso por índice. Una lista puede permitir crecimiento por nodos y ciertas inserciones, pero buscar seguirá requiriendo recorrido y habrá que administrar memoria.

Segundo, definimos identidad: suponemos código único. Tercero, describimos operaciones: alta, consulta, cambio de disponibilidad y baja. Cuarto, especificamos reglas de fallo: capacidad llena, código duplicado, ausente y dato inválido no deben corromper el estado. Quinto, elegimos pruebas pequeñas y casos límite antes de una carga extensa.

### Etapa con menos ayuda: cambiar la representación

Si pasamos de arreglo a lista, ¿qué conserva sentido y qué cambia? El contrato de buscar un código puede permanecer, pero el resultado puede ser posición o puntero. La dimensión lógica explícita puede reemplazarse por recorrido o por un contador que hay que mantener. La baja con desplazamiento se transforma en desenlace y liberación. No basta con cambiar corchetes por flechas.

Si elegimos una circular con último, debemos revisar todos los finales de recorrido. La función lineal que termina en nulo ya no sirve. Si agregamos orden ascendente, toda modificación de claves debe preservar ese invariante o recolocar nodos. Cada mejora introduce condiciones que otras operaciones deben respetar.

### Un esquema de pruebas útil

- **Vacío:** operaciones de búsqueda y baja; no debe haber accesos a datos inexistentes.
- **Un elemento:** encontrado y ausente; eliminación que deja vacío; circular que se enlaza consigo misma.
- **Varios:** principio, interior y final; claves en orden, invertidas y repetidas según contrato.
- **Fallos previstos:** capacidad llena, posición inválida, duplicado rechazado y cantidad incompatible.
- **Conservación:** orden de datos, campos asociados, nodos transferidos y estado de entradas después de separar o fusionar.
- **Retornos:** valor, índice, puntero y señal de éxito diferenciados; no usar −1 ni nulo como si fueran hallazgos.

Las pruebas automatizadas de los ejemplos comparan búsquedas y ordenamientos con resultados independientes y revisan operaciones de listas, incluidos cambios de último y transferencias de nodos. Una batería que pasa no demuestra corrección universal ni reemplaza una herramienta específica de detección de fugas. La explicación de invariantes y la revisión de duración siguen siendo necesarias.

### Práctica autónoma con criterios de control

1. **Arreglos:** eliminar todas las apariciones de una clave conservando orden. **Control:** dos índices o una estrategia correcta; no saltar consecutivos; dimensión final coherente; no leer fuera del conjunto original.
2. **Búsqueda:** devolver la primera aparición en un arreglo ordenado. **Control:** conservar candidatos a la izquierda ante igualdad, intervalo que se reduce y verificación final de presencia.
3. **Registros:** ordenar por código y consultar datos. **Control:** mover registros completos, clave coherente y política de duplicados explícita.
4. **Listas:** separar pares e impares reutilizando nodos. **Control:** origen vacío, salidas disjuntas, mismos nodos y orden relativo conservado; no asignaciones que pierdan enlaces.
5. **Circular:** eliminar el único, el primero y el último. **Control:** representación válida después de cada caso, actualización del puntero último y liberación exactamente una vez.
6. **Recursión:** calcular longitud e imprimir en orden inverso. **Control:** base nula, avance al siguiente, distinción entre retorno y efecto de impresión, y explicación del espacio de llamadas.

Para cerrar, elegí una solución y explicala sin mirar el código: entrada, contrato, estado que conserva, paso que progresa, resultado y costo. Si una línea sólo puede justificarse con «porque así estaba en el ejemplo», volvé al capítulo que explica su mecanismo. Esa reconstrucción es una mejor señal de aprendizaje que memorizar un archivo completo.

### Hoja de consulta del capítulo 37

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Diseñar | Problema → contrato → representación → operaciones → pruebas. | No elegir una estructura sólo por ser la última estudiada. |
| Comprobar | Contenido, invariantes, fallos previstos y conservación. | Una salida correcta aislada no prueba la estructura completa. |
| Explicar | Entrada, progreso, resultado, límites y costo. | Las pruebas apoyan el razonamiento; no certifican todos los casos posibles. |


## Hoja de consulta de la unidad 4: Recursividad

Reconstruí los capítulos 30–37 antes de usar esta recopilación como repaso. Por cada fila, explicá el contrato y trazá un caso pequeño.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Recurrencia | S(0)=0; S(n)=n+S(n−1) para n>0. | Dominio natural, reducción y combinación del resultado. |
| Activación | Cada llamada mantiene parámetros y operaciones pendientes. | Trazar descenso y retorno. |
| Dígitos | D(n)=1 si n<10; D(n)=1+D(n/10) en otro caso. | n sin signo, división entera; cero tiene un dígito. |
| Palíndromo | Comparar extremos y reducir ambos índices. | Base si izquierda ≥ derecha, antes de acceder. |
| Prefijo menor | Reducir n y analizar a[n−1] sólo cuando n>0. | Suma vacía admite cero; mínimo requiere otro contrato. |
| Lista como subproblema | Primero + lista que empieza en siguiente. | Base nula y precondición sin ciclos. |
| Fibonacci | F(0)=0; F(1)=1; F(n)=F(n−1)+F(n−2). | Convención de índices desde cero; entradas pequeñas. |
| Diseñar | Problema → contrato → representación → operaciones → pruebas. | No elegir una estructura sólo por ser la última estudiada. |

**Autoevaluación:** elegí una operación, escribí entrada y resultado esperado, señalá el invariante y justificá la terminación. Después probá un caso de borde. Si la explicación depende de copiar líneas sin entenderlas, volvé al desarrollo de ese capítulo.

## Consulta general de Programación Imperativa

Esta hoja reúne relaciones y patrones; no reemplaza los ejemplos explicados. Las cantidades de operaciones son modelos de crecimiento, no tiempos exactos. Los índices y direcciones sólo se utilizan bajo los contratos de validez correspondientes.

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| Variable y asignación | Una asignación usa el estado presente; no mantiene una igualdad matemática permanente. | Inicializar antes de leer y distinguir = de ==. |
| Contrato | Entrada, precondición, resultado y modificaciones permitidas. | No exigir a una función garantías que no puede comprobar. |
| Anidamiento | Cada bucle representa una dimensión de la tarea. | Ubicar reinicios y saltos de línea según su responsabilidad. |
| Dimensiones | 0 ≤ n ≤ capacidad; datos válidos en [0,n). | Capacidad fija no significa todos los lugares cargados. |
| Búsqueda | Devuelve posición en [0,n) o −1. | Comprobar ausencia antes de usar el resultado como índice. |
| Insertar | Posición permitida 0 ≤ pos ≤ n; requiere n < capacidad. | Desplazar de derecha a izquierda y luego aumentar n. |
| Compactación | Escritura ≤ lectura; conservar el orden de quienes quedan. | No cambiar el límite original antes de terminar de leer. |
| Coordenadas | m[f][c]: fila f, columna c. | Validar cada dimensión; no intercambiar índices por costumbre. |
| Suma por fila | sumas[f] = suma de m[f][c] para sus columnas válidas. | Reiniciar acumulador al comenzar cada fila. |
| Reserva | Validar coordenadas y disponibilidad antes de modificar. | Un fallo conserva el estado. |
| Secuencial ordenada | Detener al primer dato no menor que el objetivo. | Requiere orden ascendente según la misma clave. |
| Intervalo | [izquierda,derecha) incluye izquierda y excluye derecha. | Comenzar en [0,n); vacío si los extremos coinciden. |
| Selección | Prefijo definitivo; buscar mínimo del resto e intercambiar. | Guardar índice del candidato, no sólo su valor. |
| Burbuja | Una pasada ascendente lleva el mayor al extremo derecho. | Comparar vecinos y reducir el fin pendiente. |
| Inserción | Prefijo ordenado ampliado con una clave guardada. | Desplazar mayores, después colocar la clave; n no cambia. |
| Costo total | Preparación + consultas + mantenimiento. | No omitir ordenar al comparar secuencial con binaria. |
| Tipo / objeto | Producto es tipo; p es un objeto de ese tipo. | Leer p.campo; el nombre del tipo no sustituye la variable. |
| Acceso compuesto | curso[i].notas[j] selecciona entidad y luego dato interno. | Seguir índices y campos de afuera hacia adentro. |
| Inventario | Una operación fallida no altera stock ni identidad. | Validar código, cantidad y disponibilidad antes de escribir. |
| Dirección / contenido | p identifica un objeto; *p accede a él si sigue vivo. | No desreferenciar nulo, indeterminado o colgante. |
| Propiedad | Quien administra un objeto debe garantizar una liberación válida. | Los alias no deben destruirlo de nuevo. |
| Puntero por valor | Copia la dirección, puede llegar al mismo objeto. | Reasignar el parámetro no reemplaza el puntero del llamador. |
| Lineal vacía | inicio == nullptr. | El último de una no vacía tiene siguiente nulo. |
| Insertar delante | nuevo->siguiente = antiguo inicio; inicio = nuevo. | Preparar enlace antes de reemplazar la única referencia al comienzo. |
| Baja | Desenlazar y después liberar. | No leer siguiente después de delete. |
| Transferencia | Reutilizar nodos cambia quién los administra. | Entradas y salidas disjuntas; no liberar por los viejos comienzos. |
| Dato de registro | p->dato.campo atraviesa nodo y luego registro. | No modificar siguiente como si fuera un campo informativo. |
| Circular vacía | ultimo == nullptr. | Si no está vacía, primero = ultimo->siguiente. |
| Una vuelta | Guardar primero y terminar al regresar a él. | Comprobar vacío antes del do/while. |
| Recurrencia | S(0)=0; S(n)=n+S(n−1) para n>0. | Dominio natural, reducción y combinación del resultado. |
| Activación | Cada llamada mantiene parámetros y operaciones pendientes. | Trazar descenso y retorno. |
| Dígitos | D(n)=1 si n<10; D(n)=1+D(n/10) en otro caso. | n sin signo, división entera; cero tiene un dígito. |
| Palíndromo | Comparar extremos y reducir ambos índices. | Base si izquierda ≥ derecha, antes de acceder. |
| Prefijo menor | Reducir n y analizar a[n−1] sólo cuando n>0. | Suma vacía admite cero; mínimo requiere otro contrato. |
| Lista como subproblema | Primero + lista que empieza en siguiente. | Base nula y precondición sin ciclos. |
| Fibonacci | F(0)=0; F(1)=1; F(n)=F(n−1)+F(n−2). | Convención de índices desde cero; entradas pequeñas. |
| Diseñar | Problema → contrato → representación → operaciones → pruebas. | No elegir una estructura sólo por ser la última estudiada. |

### Fórmulas y límites que conviene relacionar

| Relación | Significado o patrón | Condiciones de uso |
| --- | --- | --- |
| 0 ≤ n ≤ capacidad | Dimensión lógica válida de un prefijo contiguo. | Consultar sólo índices desde 0 hasta n−1. |
| h(h+1)/2 | Marcas de un triángulo de alturas 1 a h. | h natural; cálculo matemático sin desbordamiento. |
| F·C | Celdas de un recorrido rectangular completo. | F y C son dimensiones realmente utilizadas. |
| f·C+c | Desplazamiento en elementos dentro de matriz nativa por filas. | Índices válidos y ancho C fijo; no un arreglo arbitrario de punteros. |
| n(n−1)/2 | Comparaciones de selección mostrada o pares fuera de diagonal. | Son problemas distintos que comparten un conteo triangular. |
| O(log(n+1)) | Cota de iteraciones de búsqueda binaria mostrada. | Arreglo ordenado, intervalo que se reduce y acceso directo. |
| O(n+m) | Peor caso de fusión de listas ordenadas. | Entradas válidas y disjuntas; considerar espacio distinto en recursión. |
| 100.0·parte/total | Porcentaje. | total > 0; parte y total del mismo conjunto. |
| D(n)=1+D(n/10) | Reducción del conteo de dígitos. | n ≥ 10 sin signo; base n < 10 devuelve 1. |
| F(n)=F(n−1)+F(n−2) | Recurrencia de Fibonacci. | Base F(0)=0 y F(1)=1; no describe por sí sola un algoritmo eficiente. |

## Glosario para leer código con precisión

| Término | Explicación |
| --- | --- |
| Acumulador | Variable que combina valores ya procesados, con una inicialización acorde a la operación. |
| Alias | Otro acceso al mismo objeto; no es una copia independiente de su contenido. |
| Capacidad | Cantidad de posiciones disponibles en un almacenamiento de tamaño fijo. |
| Caso base | Entrada que una función recursiva resuelve sin otra llamada de esa reducción. |
| Clave | Campo o combinación utilizada para identificar, comparar o localizar entidades. |
| Contrato | Descripción de condiciones de entrada, resultado y efectos permitidos. |
| Dimensión lógica | Número de elementos que el programa considera válidos. |
| Estabilidad | Conservación del orden relativo de elementos con claves iguales al ordenar. |
| Invariante | Propiedad que debe mantenerse a lo largo de un proceso u operación. |
| Nodo | Objeto que contiene datos y enlaces de una estructura. |
| Puntero colgante | Puntero que conserva referencia a un objeto cuya vida terminó. |
| Propiedad | Responsabilidad de administrar la vida y liberación de un recurso. |
| Recursión | Resolución mediante llamadas que plantean subproblemas de la misma forma. |
| Traza | Registro ordenado de estados y decisiones de una ejecución. |

## Fuentes, correspondencia y revisión

### Material de la cátedra recuperado antes de escribir

La base es el aula **Programación Imperativa-00364-2025-2C**, curso 10325. Se descargaron completos los **14 PDF disponibles identificados: 207 páginas físicas**. El programa de seis páginas y el cronograma de dos se obtuvieron desde la secuencia interactiva de inicio. La numeración impresa del programa dice «de 7» en algunos pies, pero el archivo recuperado tiene seis páginas; no se infiere una séptima página inexistente en ese PDF.

| Material disponible | Páginas | Uso y correspondencia |
| --- | --- | --- |
| Programa de PI 2025 | 6 | Objetivos, herramientas y cuatro unidades oficiales. |
| Cronograma para estudiantes | 2 | Distribución de contenidos del ciclo 2025; no se presenta como calendario actual. |
| Unidad 1, teoría | 33 | Control, arreglos, dimensiones y operaciones: capítulos 1–10. |
| Arreglos simples | 10 | Lectura de límites y operaciones; revisión por OCR y páginas originales. |
| TP 1 | 4 | Familias de ejercicios de arreglos y matrices; práctica original relacionada. |
| Unidad 2, teoría | 34 | Búsquedas, tres ordenamientos y struct: capítulos 11–19. |
| Material de clase del 11/9 | 30 | Trazas y ejemplos de búsqueda y ordenamiento; OCR completo y contraste selectivo visual. |
| Material de clase del 25/9 | 6 | Representación y carga de registros; OCR completo y contraste visual. |
| TP 2 | 4 | Búsqueda de primera aparición, ordenamientos y colecciones de registros. |
| Unidad 3, teoría | 42 | Direcciones, memoria, listas, división, combinación y circulares: capítulos 20–29. |
| Actividad sobre lista circular | 2 | Representación mediante último y operaciones sobre circular ordenada. |
| TP 3 | 7 | Alias, bajas, listas de registros y transferencias de nodos. |
| Unidad 4, teoría | 21 | Base, reducción, pila, ejemplos numéricos y estructurales: capítulos 30–37. |
| TP 4 | 6 | Trazas y familias de ejercicios recursivos; ambigüedad del ejercicio 11 señalada. |

Se revisó además la consigna de clase del 4/9 publicada como página del aula, relativa a un arreglo y una matriz. La elaboración del taller de unidad I utiliza un caso original para enseñar esos mecanismos. Los vídeos de clases y complementarios, el Padlet y la totalidad de las interacciones de Genially no fueron auditados. No se iniciaron cuestionarios, entregas ni cambios de comisión; leer recursos puede activar el registro automático de visualización de Moodle.

### Autoría y forma de utilización

Los materiales teóricos se atribuyen al **equipo docente del área de Algoritmos y Estructuras de Datos de UNNOBA**, como consta en los documentos. Los PDF de teoría muestran una licencia de reconocimiento y uso no comercial. Esta página publica una explicación, ejercicios, programas y figuras originales; no redistribuye los PDF ni presenta su bibliografía editorial como si hubiera sido leída en su totalidad.

La referencia técnica complementaria consultada es la [documentación de avisos de GCC](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html), para explicar opciones de compilación. El programa del aula incluye bibliografía de Stroustrup, Josuttis, Lippman/Lajoie/Moo, Prata y Stepanov/McJones, además de referencias del lenguaje. Esas obras completas no forman parte de la auditoría realizada para esta edición.

### Decisiones explícitas de esta guía

- Se usa C++11, arreglos nativos de capacidad constante y nodos manuales para hacer visible el mecanismo que estudia la asignatura.
- Las búsquedas informan ausencia antes de que el llamador utilice posiciones o direcciones.
- La binaria devuelve primera aparición, no una coincidencia arbitraria.
- La circular ordenada rechaza duplicados por contrato del ejemplo; no se atribuye esa decisión como única interpretación de la consigna adicional.
- «Primer impar» se define desde la izquierda y se retorna índice; se explica por separado la discrepancia entre texto y ejemplo del TP 4.
- Las transferencias de nodos exigen listas disjuntas y una responsabilidad de liberación coherente. No se trata una copia de dirección como copia profunda.
- Los ejercicios son docentes: los cálculos usan dominios pequeños sin desbordamiento y las operaciones dinámicas presuponen memoria disponible. No se implementa una política integral de recuperación ante fallos de asignación ni persistencia de datos.

### Qué se verificó y qué queda pendiente

Se verificaron compilación C++11 de los programas originales, búsquedas y ordenamientos frente a resultados independientes, casos límite de arreglos y matrices, conservación de campos de registros, inserciones y bajas de listas, transferencia de direcciones al dividir y fusionar, y cambios de estado de circulares. Los resultados numéricos y las trazas del manual se contrastaron con esas ejecuciones. La página se revisó también en escritorio y móvil para comprobar navegación, tablas, código y figuras.

Estas comprobaciones no equivalen a una demostración formal ni a una ejecución con detector especializado de fugas de memoria. La guía desarrolla las cuatro unidades recuperadas, pero **queda pendiente la revisión académica de la cátedra** y la confrontación con consignas y clases concretas de una cursada. No se presenta una garantía de aprobar una evaluación ni un reemplazo de las lecturas y prácticas docentes.

Edición y consulta de aula: **15 de noviembre de 2026**. Autoría de la guía: **Matias Gabriel Cersosimo**. Contacto: [contacto@matiascersosimo.com](mailto:contacto@matiascersosimo.com).
