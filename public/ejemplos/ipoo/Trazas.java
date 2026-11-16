public final class Trazas {
    private Trazas() { }
    public static class Base {
        public int valor() { return 2; }
        public int calcular() { return this.valor() + 1; }
    }
    public static class Derivada extends Base {
        @Override public int valor() { return 7; }
        @Override public int calcular() { return 20; }
        public int desdeBase() { return super.calcular(); }
    }
    public static String etiqueta(Object dato) { return "objeto"; }
    public static String etiqueta(String dato) { return "texto"; }
}
