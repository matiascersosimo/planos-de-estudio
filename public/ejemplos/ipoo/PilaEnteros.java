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
