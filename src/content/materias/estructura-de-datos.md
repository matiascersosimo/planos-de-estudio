---
nombre: "Estructura de Datos"
code: "01477"
resumen: "Análisis de algoritmos, TAD, estructuras lineales, recursión, ABB, AVL, árboles B, grafos y tablas hash, con ejemplos en Go."
---

## Recorrido y alcance

El [aula 2026](https://plataformaed.unnoba.edu.ar/course/view.php?id=11078) organiza el contenido en análisis de algoritmos, estructuras lineales, árboles y grafos-hash. Sus descripciones confirman un manual de Go, recursión, ABB, AVL y árboles B. Este documento desarrolla esos ejes con ejemplos originales. La lectura integral de los PDF y la correspondencia exacta con los trabajos prácticos quedan pendientes: es un **borrador de estudio**, no material oficial de la cátedra.

Estudiar una estructura implica comprender su contrato, representación, invariantes, operaciones y costos. Memorizar que una pila usa LIFO no alcanza si no se puede explicar cómo insertar, cómo quitar, qué sucede cuando está vacía y cuánto cuesta cada operación.

La elección depende del problema. Para una cola de solicitudes importa atender en orden de llegada; para buscar claves ordenadas puede convenir un árbol; para comprobar pertenencia puede servir una tabla hash. Ninguna estructura es la mejor para todos los usos.

## Tipos abstractos, representaciones e invariantes

Un tipo abstracto de datos se define por valores y operaciones observables. La representación es una forma de implementar ese contrato. Una pila puede implementarse con un arreglo o una lista enlazada y seguir ofreciendo apilar, desapilar y consultar tope.

El invariante expresa una propiedad que debe conservarse después de cada operación válida. En una lista simplemente enlazada sin ciclos, avanzar desde la cabeza termina en una referencia nula. Si se mantiene una longitud, debe coincidir con la cantidad de nodos alcanzables. En una cola con punteros a frente y final, ambos deben ser nulos cuando está vacía.

Una precondición indica qué debe cumplirse antes de operar; una postcondición describe el resultado. Desapilar una pila vacía requiere una política explícita: devolver un indicador de ausencia, un error o aplicar una precondición. Usar un valor especial del tipo, como cero, es ambiguo si cero también puede ser un elemento legítimo.

### Ejemplo de contrato

Para una cola, `Encolar(x)` incorpora x al final. `Desencolar()` devuelve y elimina el elemento que lleva más tiempo, si existe. La operación no promete cómo se organiza la memoria. Ese aislamiento permite reemplazar una representación ineficiente sin cambiar el código que usa el contrato.

## Análisis de algoritmos

El análisis estudia cómo varían los recursos con el tamaño de entrada. Primero se define n: cantidad de elementos, vértices, aristas o longitud de una cadena. Después se elige una operación representativa y se cuenta cuántas veces se ejecuta. Sin definir n, una expresión de costo puede resultar engañosa.

La notación O expresa una cota superior asintótica; Ω, una inferior; Θ, una cota ajustada. Decir O(n²) no significa necesariamente que el algoritmo tarde exactamente un tiempo proporcional a n². Un algoritmo lineal también satisface una cota superior cuadrática, aunque esa descripción sea poco informativa.

El caso peor, el mejor y el promedio son análisis distintos. El promedio necesita una hipótesis sobre la distribución de entradas; no se obtiene sumando mejor y peor y dividiendo por dos. El análisis amortizado distribuye el costo de una secuencia de operaciones y tampoco es sinónimo de promedio probabilístico.

### Conteos resueltos

Un recorrido que visita cada elemento una vez cuesta Θ(n) si el trabajo por elemento es constante. Dos recorridos consecutivos suman 2n visitas y conservan Θ(n). Dos bucles anidados de n iteraciones cada uno producen n² combinaciones y costo Θ(n²).

Si el bucle interno recorre desde cero hasta i, el total es 1 + 2 + ... + n = n(n+1)/2, también Θ(n²). Que el límite interno cambie no implica automáticamente complejidad cúbica ni lineal.

En búsqueda binaria, cada paso reduce el intervalo aproximadamente a la mitad. Tras k pasos queda alrededor de n/2^k; para llegar a un elemento se necesita k del orden de log₂ n. El costo es O(log n) cuando acceder al elemento central cuesta O(1). En una lista enlazada, buscar el centro exige recorridos y ese supuesto deja de ser válido.

| Operación o patrón | Costo típico bajo los supuestos indicados |
|---|---|
| Acceso por índice a un arreglo | O(1) |
| Búsqueda secuencial | O(n) en peor caso |
| Búsqueda binaria en arreglo ordenado | O(log n) |
| Comparar todos los pares | O(n²) |
| Ordenamiento eficiente por comparaciones | O(n log n) en implementaciones apropiadas |

No basta mirar el número de bucles: si una operación interior copia una secuencia, su costo debe contarse. También conviene diferenciar memoria de entrada, salida y memoria auxiliar.

## Go: arreglos, slices y referencias

Un arreglo en Go tiene longitud que forma parte de su tipo. Un slice describe una vista sobre un arreglo subyacente mediante longitud y capacidad. Dos slices pueden compartir almacenamiento; modificar un elemento a través de uno puede observarse desde el otro. Esa diferencia importa al implementar estructuras y al razonar sobre copias.

`append` puede usar el almacenamiento existente o asignar otro. No se debe construir un contrato que dependa de que siempre ocurra una de esas dos alternativas. Copiar el descriptor de un slice no copia todos sus elementos.

Un `struct` agrupa campos y un puntero permite referirse a un valor. En estructuras enlazadas, los punteros representan conexiones entre nodos. La recolección automática de memoria no corrige errores lógicos: mantener referencias innecesarias puede conservar objetos alcanzables aunque ya no formen parte de la estructura abstracta.

```go
type Nodo struct {
    Valor     int
    Siguiente *Nodo
}

func InsertarInicio(cabeza *Nodo, valor int) *Nodo {
    return &Nodo{Valor: valor, Siguiente: cabeza}
}

func Contiene(cabeza *Nodo, buscado int) bool {
    for actual := cabeza; actual != nil; actual = actual.Siguiente {
        if actual.Valor == buscado {
            return true
        }
    }
    return false
}
```

Insertar al inicio cuesta O(1). Buscar cuesta O(n) en el peor caso. La función devuelve la nueva cabeza porque modificar una variable local que recibió una copia del puntero no actualiza automáticamente la variable del llamador.

## Listas enlazadas

Una lista simplemente enlazada almacena un enlace al siguiente nodo. Facilita insertar al comienzo y modificar enlaces cuando se conoce el predecesor. Acceder al elemento de posición i requiere recorrer desde una referencia disponible: no ofrece acceso por índice constante como un arreglo.

Para eliminar el primer nodo basta cambiar la cabeza al siguiente. Para eliminar otro nodo hay que hacer que su predecesor apunte al sucesor. La búsqueda del nodo y la modificación de enlaces tienen costos distintos: modificar un enlace puede ser O(1), pero encontrar dónde hacerlo puede costar O(n).

En una lista doblemente enlazada cada nodo conserva referencias al anterior y al siguiente. Permite eliminar un nodo conocido sin buscar su predecesor, a cambio de memoria y más invariantes. En una lista circular, el último enlaza con el primero; la condición de final del recorrido cambia y usar solamente `actual != nil` podría producir un bucle infinito.

### Traza de eliminación

Lista inicial: 4 → 7 → 9. Se quiere eliminar 7. Se conserva referencia al nodo 4 y al nodo 7; después se cambia el siguiente de 4 para que apunte a 9. Resultado: 4 → 9. Si primero se pierde la referencia al sucesor y no se la conservó en otro lugar, puede resultar imposible reconstruir correctamente el enlace.

Los casos borde son lista vacía, un único nodo, eliminación de cabeza, eliminación de cola y elemento inexistente. Si hay puntero a cola y contador, cada operación debe mantenerlos coherentes.

## Pilas, colas y deques

La pila usa el último elemento incorporado como próximo elemento a retirar. Una representación con slice puede usar el extremo final como tope. El crecimiento de la capacidad puede requerir copiar elementos, por lo que apilar tiene costo amortizado constante bajo una estrategia de crecimiento apropiada; no se debe afirmar que toda llamada cuesta exactamente O(1).

```go
type Pila struct {
    datos []int
}

func (p *Pila) Apilar(x int) {
    p.datos = append(p.datos, x)
}

func (p *Pila) Desapilar() (int, bool) {
    n := len(p.datos)
    if n == 0 {
        return 0, false
    }
    x := p.datos[n-1]
    p.datos = p.datos[:n-1]
    return x, true
}
```

El booleano distingue ausencia de un cero almacenado. En estructuras que guardan referencias puede convenir limpiar la posición retirada antes de reducir la longitud para no retener referencias en el arreglo subyacente.

La cola retira en orden de llegada. Una implementación enlazada con frente y final permite encolar y desencolar en O(1). Si al retirar el último nodo se actualiza solo el frente, el final queda apuntando a un nodo que ya no pertenece a la cola; el estado vacío debe tratarse expresamente.

Un buffer circular implementa una cola con arreglo e índices. Debe distinguir lleno de vacío mediante contador o una convención de capacidad. Al avanzar un índice se aplica una operación modular. Es importante explicar cuántas posiciones son utilizables y qué ocurre si se intenta agregar cuando está lleno.

Un deque admite inserción y retiro en ambos extremos. No equivale a una cola de prioridad: una cola de prioridad retira según una prioridad y no simplemente según el extremo elegido.

## Recursión y análisis de llamadas

Una solución recursiva reduce un problema a instancias más pequeñas. Necesita casos base y una medida que avance hacia ellos. Tener un caso base en el código no garantiza alcanzarlo: la llamada debe reducir la medida en el dominio permitido.

Para el factorial de n no negativo, el caso base es 0! = 1 y el paso usa n! = n(n−1)!. En una implementación con enteros de tamaño fijo también hay que considerar desbordamiento. La corrección matemática de la recurrencia no garantiza que cualquier entrada quepa en el tipo elegido.

Una búsqueda recursiva en una lista llama sobre el siguiente nodo. Su tiempo es O(n) y la profundidad puede ser O(n). La versión iterativa evita esa profundidad auxiliar. En árboles, la recursión suele reflejar de manera natural la estructura, pero la memoria depende de la altura y del patrón de recorrido.

### Recurrencias de costo

Si T(n) = T(n−1) + c, el costo es Θ(n). Si T(n) = T(n/2) + c, resulta Θ(log n) bajo un caso base constante. Si T(n) = 2T(n/2) + cn, aparece Θ(n log n). No hay que aplicar una regla sin comprobar que la recurrencia representa el algoritmo real.

El Fibonacci recursivo directo recalcula subproblemas. El árbol de llamadas crece exponencialmente aunque la profundidad sea lineal. Memorizar resultados cambia el tiempo a lineal para calcular los primeros n estados, con memoria adicional. Tiempo, profundidad y cantidad total de llamadas son magnitudes distintas.

## Árboles binarios y recorridos

Un árbol tiene una raíz y subárboles sin ciclos. Un árbol binario permite hasta dos hijos por nodo, distinguidos como izquierdo y derecho. La altura debe definirse: algunas convenciones cuentan aristas y otras nodos. Un cálculo debe usar la misma convención de principio a fin.

En preorden se visita raíz, izquierda, derecha. En inorden, izquierda, raíz, derecha. En postorden, izquierda, derecha, raíz. Un recorrido por niveles emplea una cola. Todos visitan cada nodo una vez y cuestan O(n), pero su memoria auxiliar difiere.

Considerá raíz 8, hijo izquierdo 3 y derecho 10; 3 tiene hijos 1 y 6. El preorden es 8, 3, 1, 6, 10. El inorden es 1, 3, 6, 8, 10. El postorden es 1, 6, 3, 10, 8. El recorrido por niveles es 8, 3, 10, 1, 6.

El inorden no produce una secuencia ordenada en cualquier árbol binario. Esa propiedad requiere además el invariante de búsqueda.

## Árboles binarios de búsqueda

En un ABB, las claves del subárbol izquierdo son menores que la clave del nodo y las del derecho mayores, según una política definida para duplicados. La propiedad debe cumplirse para todos los descendientes, no solo para los hijos inmediatos.

Buscar compara la clave y elige un subárbol. Insertar sigue el mismo camino hasta encontrar una posición. El costo depende de la altura h: O(h). En un árbol equilibrado h es O(log n); en una cadena puede ser O(n). Insertar claves ya ordenadas en un ABB sin balanceo puede generar esa cadena.

Para borrar una hoja se retira el enlace. Si tiene un hijo, se conecta su padre con ese hijo. Si tiene dos hijos, se puede sustituir la clave por el sucesor en inorden y luego eliminar ese sucesor de su posición original. También existe una estrategia con el predecesor.

### Ejemplo resuelto

Insertar 8, 3, 10, 1, 6 produce el árbol anterior. Buscar 6 visita 8, luego 3, luego 6. Borrar 3 requiere tratar dos hijos: su sucesor es 6. Se coloca 6 en la posición de 3 y se elimina el nodo original de 6, conservando a 1 como hijo izquierdo. Si los nodos almacenan datos asociados a la clave, no debe copiarse solo la clave dejando un valor que pertenecía a otra ocurrencia.

## Árboles AVL

Un AVL mantiene un ABB con diferencia de alturas acotada en cada nodo. Una convención frecuente define factor de balance como altura izquierda menos altura derecha; otra usa el signo contrario. La interpretación de los casos debe ser coherente con la convención elegida.

Después de insertar o borrar se actualizan alturas y se detectan desequilibrios en el camino afectado. Las rotaciones reorganizan enlaces conservando el orden de búsqueda. Una rotación no ordena arbitrariamente nodos: transforma la estructura sin alterar la secuencia del recorrido inorden.

Insertar 30, 20, 10 produce un caso izquierdo-izquierdo y se corrige con una rotación derecha sobre 30: 20 queda raíz, 10 a la izquierda y 30 a la derecha. Insertar 30, 10, 20 produce un caso izquierdo-derecho y requiere primero rotación izquierda en el hijo y luego derecha en el nodo desequilibrado.

Los casos simétricos son derecho-derecho y derecho-izquierdo. Tras una eliminación puede ser necesario revisar varios ancestros. No conviene memorizar únicamente ejemplos de inserción y asumir que el mantenimiento posterior a un borrado es idéntico.

Las operaciones de búsqueda, inserción y eliminación tienen costo O(log n) bajo el invariante AVL. Ese beneficio exige mantener alturas, enlaces y balance correctamente.

## Árboles B

Un árbol B permite varias claves y varios hijos por nodo, conserva las claves ordenadas y mantiene todas las hojas a la misma profundidad. Su organización reduce la altura y resulta útil cuando acceder a bloques tiene un costo importante.

Las convenciones sobre «orden» varían. Para evitar contradicciones, hay que declarar si el parámetro indica máximo de hijos, máximo de claves o grado mínimo. Con grado mínimo t, una convención habitual permite hasta 2t−1 claves por nodo y exige al menos t−1 en nodos no raíz. Estas cotas no deben trasladarse sin conversión a una guía que use otra definición de orden.

En inserción, un nodo lleno puede dividirse y promover una clave al padre. Si se divide la raíz, aumenta la altura. En eliminación, un nodo puede necesitar recibir una clave mediante redistribución o fusionarse con un hermano. El objetivo es restaurar ocupación y orden, además de quitar la clave.

No debe confundirse árbol B con árbol binario ni con B+. En B+ la ubicación de registros y la organización de hojas siguen reglas específicas. Esa comparación es complementaria; el alcance confirmado del aula incluye árboles B.

## Grafos y representaciones

Un grafo reúne vértices y aristas. Puede ser dirigido o no dirigido, ponderado o no ponderado. Antes de elegir un algoritmo hay que definir si se permiten lazos, aristas paralelas y pesos negativos, porque esas propiedades afectan representación y corrección.

Una matriz de adyacencia usa O(V²) espacio y permite consultar una conexión entre dos vértices en O(1). Una lista de adyacencia usa O(V+E) espacio y facilita recorrer vecinos, especialmente en grafos dispersos. En un grafo no dirigido una arista suele registrarse en ambas listas.

BFS utiliza una cola y explora por niveles. En grafos sin pesos, determina distancias mínimas en cantidad de aristas desde un origen. DFS profundiza antes de retroceder y puede implementarse con recursión o una pila. Con listas de adyacencia, ambos cuestan O(V+E) al recorrer el grafo completo.

### Traza de BFS

Grafo: A conecta con B y C; B conecta con D; C también conecta con D. Desde A, se marca A y se encola. Al retirarlo se descubren B y C y se los marca al encolar. Después B descubre D. Cuando C lo encuentra, D ya está marcado y no se vuelve a incorporar. Las distancias son A=0, B=C=1 y D=2.

Marcar al encolar evita incorporar varias veces un vértice antes de procesarlo. El orden concreto entre B y C depende del orden de sus listas; la distancia mínima no depende de esa elección. Para recorrer componentes desconectadas hay que iniciar nuevas exploraciones desde vértices no visitados.

## Tablas hash

Una función hash transforma una clave en un valor que ayuda a seleccionar una posición. Claves distintas pueden colisionar. La corrección exige comparar también la clave real: igualdad del hash no implica igualdad de claves.

En encadenamiento, cada posición conserva una colección de entradas. En direccionamiento abierto, las entradas ocupan posiciones de la tabla y una secuencia de sondeo busca alternativas. Borrar en direccionamiento abierto requiere cuidado: vaciar sin más una posición puede cortar el camino de búsqueda de otras claves. Por eso puede usarse una marca de borrado con reglas específicas.

El factor de carga relaciona entradas y capacidad. Su significado y límites prácticos dependen de la representación. Las operaciones pueden tener costo esperado constante bajo supuestos apropiados, pero el peor caso puede ser lineal. No se debe prometer O(1) incondicional.

Si se cambia la capacidad, normalmente hay que redistribuir las entradas con el nuevo cálculo de posiciones. Copiar cada casilla al mismo índice no realiza correctamente ese proceso. Además, las claves deben respetar una política de igualdad estable mientras están almacenadas.

## Elección de estructura y práctica integradora

Para procesar solicitudes en orden de llegada, elegí una cola. Para deshacer operaciones, una pila. Para mantener claves en orden con búsquedas acotadas, un árbol balanceado. Para pertenencia y búsqueda por clave sin orden, una tabla hash puede ser apropiada. Si se necesitan rangos ordenados, el orden de un árbol tiene valor que una tabla hash no ofrece directamente.

Diseñá un gestor de tareas con identificador único, prioridad, estado y dependencias. Proponé una estructura para buscar por ID, otra para las tareas listas y un grafo para las dependencias. Explicá cómo se mantienen coherentes cuando se cancela una tarea. No supongas que una estructura debe resolver todos los accesos.

### Autoevaluación con respuestas

**1. ¿Insertar en una lista siempre cuesta O(1)?** No. Cambiar enlaces en una posición conocida puede costar O(1), pero localizarla puede requerir O(n).

**2. ¿Un ABB siempre busca en O(log n)?** No. Su costo depende de la altura y puede ser lineal si se degenera.

**3. ¿Recursión implica costo exponencial?** No. Depende de la cantidad y el tamaño de los subproblemas. Un recorrido recursivo de lista puede ser lineal.

**4. ¿BFS encuentra el camino de menor peso?** Encuentra el de menor cantidad de aristas en un grafo sin pesos, o con pesos iguales. Pesos arbitrarios requieren otro análisis.

**5. ¿Una colisión hash es un error?** No. Es un fenómeno esperado que la representación debe resolver correctamente.

**6. ¿Qué conserva una rotación AVL?** El orden de búsqueda; reorganiza enlaces y después deben actualizarse las alturas correspondientes.

**7. ¿Puede un programa producir la salida correcta y romper una estructura?** Sí. Un puntero a cola desactualizado puede no afectar la salida inmediata, pero provocar fallas en operaciones posteriores. Por eso se revisan invariantes y secuencias de operaciones.

## Fuentes y validación pendiente

Se consultaron las descripciones de [análisis](https://plataformaed.unnoba.edu.ar/course/view.php?id=11078&section=1#tabs-tree-start), [estructuras lineales](https://plataformaed.unnoba.edu.ar/course/view.php?id=11078&section=2#tabs-tree-start), [árboles](https://plataformaed.unnoba.edu.ar/course/view.php?id=11078&section=3#tabs-tree-start) y [grafos-hash](https://plataformaed.unnoba.edu.ar/course/view.php?id=11078&section=4#tabs-tree-start). Se confirmó el uso de Go y los temas enumerados en el recorrido inicial.

Pendiente: contrastar convenciones de altura y orden, interfaces de TAD, algoritmos específicos y ejercicios con las presentaciones completas. Los fragmentos de Go son ejemplos didácticos; no se ha ejecutado un compilador de Go para validarlos en esta entrega.
