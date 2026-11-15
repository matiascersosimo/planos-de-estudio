// Guia original: Matias Gabriel Cersosimo. C++11.
#include <iostream>
#include <initializer_list>
#include <string>

// BEGIN nodo
struct Nodo {
    int dato;
    Nodo* siguiente;
};
// END nodo

// BEGIN insertarInicio
void insertarInicio(Nodo*& inicio, int valor) {
    Nodo* nuevo = new Nodo{valor, inicio};
    inicio = nuevo;
}
// END insertarInicio

// BEGIN buscarLista
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
// END buscarLista

// BEGIN insertarFinal
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
// END insertarFinal

// BEGIN insertarOrdenado
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
// END insertarOrdenado

// BEGIN eliminarLista
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
// END eliminarLista

// BEGIN eliminarTodasLista
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
// END eliminarTodasLista

// BEGIN separar
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
// END separar

// BEGIN fusionar
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
// END fusionar

// BEGIN registroLista
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
// END registroLista

// BEGIN circularInsertar
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
// END circularInsertar

// BEGIN circularBuscar
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
// END circularBuscar

// BEGIN circularOrdenado
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
// END circularOrdenado

// BEGIN circularEliminar
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
// END circularEliminar

#ifndef PI_SIN_MAIN
int main() {
    Nodo* lista = nullptr;
    for (int valor : {6, 2, 6, 9}) insertarFinal(lista, valor);
    eliminarTodasLista(lista, 6);
    mostrarLista(lista);
    destruirLista(lista);
    Nodo* ultimo = nullptr;
    for (int valor : {14, 3, 21, 8}) circularOrdenado(ultimo, valor);
    circularEliminar(ultimo, 3);
    circularEliminar(ultimo, 21);
    std::cout << ultimo->siguiente->dato << ' ' << ultimo->dato << '\n';
    destruirCircular(ultimo);
}
#endif
