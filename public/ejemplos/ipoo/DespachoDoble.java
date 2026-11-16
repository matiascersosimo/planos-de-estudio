public final class DespachoDoble {
    private DespachoDoble() { }
    public interface Forma { String mostrarEn(Salida salida); }
    public interface Salida {
        String mostrar(Redonda forma);
        String mostrar(Rectangular forma);
    }
    public static class Redonda implements Forma {
        @Override public String mostrarEn(Salida salida) { return salida.mostrar(this); }
    }
    public static class Rectangular implements Forma {
        @Override public String mostrarEn(Salida salida) { return salida.mostrar(this); }
    }
    public static class Pantalla implements Salida {
        public String mostrar(Redonda f) { return "pantalla:redonda"; }
        public String mostrar(Rectangular f) { return "pantalla:rectangular"; }
    }
    public static class Impresora implements Salida {
        public String mostrar(Redonda f) { return "impresora:redonda"; }
        public String mostrar(Rectangular f) { return "impresora:rectangular"; }
    }
}
