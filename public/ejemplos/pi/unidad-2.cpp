// Guia original: Matias Gabriel Cersosimo. C++11.
#include <iostream>
#include <string>

// BEGIN secuencialOrdenada
int secuencialOrdenada(const int a[], int n, int valor) {
    int i = 0;
    while (i < n && a[i] < valor) ++i;
    return i < n && a[i] == valor ? i : -1;
}
// END secuencialOrdenada

// BEGIN primeraBinaria
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
// END primeraBinaria

// BEGIN seleccion
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
// END seleccion

// BEGIN burbuja
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
// END burbuja

// BEGIN insercion
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
// END insercion

// BEGIN producto
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
// END producto

// BEGIN ordenarProductos
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
// END ordenarProductos

#ifndef PI_SIN_MAIN
int main() {
    int datos[] = {8, 3, 3, 1};
    insercion(datos, 4);
    std::cout << "Primera posicion del 3: " << primeraBinaria(datos, 4, 3) << '\n';
    Producto productos[3] = {{20,"cuaderno",5},{7,"regla",2},{12,"lapiz",9}};
    ordenarProductos(productos, 3);
    retirar(productos, 3, 12, 2);
    for (int i = 0; i < 3; ++i) {
        std::cout << productos[i].codigo << ' ' << productos[i].nombre << ' ' << productos[i].stock << '\n';
    }
}
#endif
