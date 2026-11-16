public final class Configuracion {
    private final String modo = "demostracion";
    private Configuracion() { }

    private static class Holder {
        private static final Configuracion INSTANCIA = new Configuracion();
    }

    public static Configuracion instancia() { return Holder.INSTANCIA; }
    public String getModo() { return modo; }
}
