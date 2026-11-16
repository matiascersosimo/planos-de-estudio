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
