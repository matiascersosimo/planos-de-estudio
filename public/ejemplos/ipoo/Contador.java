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
