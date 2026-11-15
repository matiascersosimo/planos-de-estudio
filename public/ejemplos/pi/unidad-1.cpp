// Guia original: Matias Gabriel Cersosimo. C++11.
#include <iostream>
#include <string>

// BEGIN opcion
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
// END opcion

// BEGIN leerCantidad
bool leerCantidad(int& n, int capacidad) {
    do {
        std::cout << "Cantidad entre 0 y " << capacidad << ": ";
        if (!(std::cin >> n)) return false;
    } while (n < 0 || n > capacidad);
    return true;
}
// END leerCantidad

// BEGIN triangulo
void triangulo(int altura, char marca) {
    for (int fila = 1; fila <= altura; ++fila) {
        for (int columna = 0; columna < fila; ++columna) {
            std::cout << marca;
        }
        std::cout << '\n';
    }
}
// END triangulo

// BEGIN buscar
int buscar(const int a[], int n, int valor) {
    int i = 0;
    while (i < n && a[i] != valor) {
        ++i;
    }
    return i < n ? i : -1;
}
// END buscar

// BEGIN insertar
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
// END insertar

// BEGIN eliminarPos
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
// END eliminarPos

// BEGIN eliminarTodas
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
// END eliminarTodas

// BEGIN resumen
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
// END resumen

// BEGIN histograma
void registrarDigitos(unsigned int numero, int frecuencias[10]) {
    do {
        const unsigned int digito = numero % 10;
        ++frecuencias[digito];
        numero /= 10;
    } while (numero != 0);
}
// END histograma

// BEGIN matrices
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
// END matrices

// BEGIN reservar
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
// END reservar

#ifndef PI_SIN_MAIN
int main() {
    int a[8] = {4, 9, 4};
    int n = 3;
    insertar(a, n, 8, 1, 7);
    std::cout << "Eliminados: " << eliminarTodas(a, n, 4) << '\n';
    for (int i = 0; i < n; ++i) std::cout << a[i] << ' ';
    std::cout << '\n';
    bool sala[2][COLUMNAS] = {};
    std::cout << "Reserva: " << reservar(sala, 2, 1, 3) << '\n';
}
#endif
