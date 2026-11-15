// Guia original: Matias Gabriel Cersosimo. C++11.
#include <iostream>
#include <string>

// BEGIN sumaRec
long long sumaRec(int n) {
    if (n == 0) return 0;
    return n + sumaRec(n - 1);
}
// END sumaRec

// BEGIN digitosRec
int digitosRec(unsigned int n) {
    if (n < 10) return 1;
    return 1 + digitosRec(n / 10);
}

void invertirDigitos(unsigned int n) {
    std::cout << n % 10;
    if (n >= 10) invertirDigitos(n / 10);
}
// END digitosRec

// BEGIN potenciaRec
long long potenciaRec(long long base, unsigned int exponente) {
    if (exponente == 0) return 1;
    return base * potenciaRec(base, exponente - 1);
}
// END potenciaRec

// BEGIN palindromo
bool palindromo(const std::string& texto, int izq, int der) {
    if (izq >= der) return true;
    if (texto[izq] != texto[der]) return false;
    return palindromo(texto, izq + 1, der - 1);
}
// END palindromo

// BEGIN arreglosRec
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
// END arreglosRec

// BEGIN fibonacci
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
// END fibonacci

// BEGIN listasRec
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
// END listasRec

// BEGIN mergeRec
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
// END mergeRec

#ifndef PI_SIN_MAIN
int main() {
    std::cout << sumaRec(4) << ' ' << digitosRec(4020) << '\n';
    invertirDigitos(4020);
    std::cout << '\n';
    const std::string palabra = "reconocer";
    std::cout << palindromo(palabra, 0, static_cast<int>(palabra.size()) - 1) << '\n';
    int valores[] = {2, 0, 8, 7, 4, 3};
    std::cout << primerImpar(valores, 6) << ' ' << sumarPares(valores, 6) << '\n';
}
#endif
