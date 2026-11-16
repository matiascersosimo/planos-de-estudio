public class Circulo extends Figura {
    private final double radio;

    public Circulo(double radio) {
        super("Circulo");
        validarMedida(radio);
        this.radio = radio;
    }

    @Override
    public double area() { return Math.PI * radio * radio; }
}
