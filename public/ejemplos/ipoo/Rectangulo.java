public class Rectangulo extends Figura {
    private final double base;
    private final double altura;

    public Rectangulo(double base, double altura) {
        super("Rectangulo");
        validarMedida(base);
        validarMedida(altura);
        this.base = base;
        this.altura = altura;
    }

    @Override
    public double area() { return base * altura; }
}
