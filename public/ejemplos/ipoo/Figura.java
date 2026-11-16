public abstract class Figura {
    private final String nombre;

    protected Figura(String nombre) { this.nombre = nombre; }
    public abstract double area();

    public final String describir() {
        return nombre + ": area=" + area();
    }

    protected static void validarMedida(double valor) {
        if (!Double.isFinite(valor) || valor <= 0) {
            throw new IllegalArgumentException("Medida invalida");
        }
    }
}
