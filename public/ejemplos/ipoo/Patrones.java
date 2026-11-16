import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public final class Patrones {
    private Patrones() { }

    // BEGIN observer
    public interface Observador { void actualizar(int valor); }
    public static class Sensor {
        private final List<Observador> observadores = new ArrayList<Observador>();
        private int valor;
        public void suscribir(Observador observador) {
            Objects.requireNonNull(observador);
            if (!observadores.contains(observador)) observadores.add(observador);
        }
        public void retirar(Observador observador) { observadores.remove(observador); }
        public int getValor() { return valor; }
        public void medir(int nuevo) {
            valor = nuevo;
            for (Observador observador : new ArrayList<Observador>(observadores)) {
                observador.actualizar(nuevo);
            }
        }
    }
    // END observer

    // BEGIN composite
    public interface Elemento { long peso(); }
    public static class Hoja implements Elemento {
        private final long valor;
        public Hoja(long valor) {
            if (valor < 0) throw new IllegalArgumentException("Peso negativo");
            this.valor = valor;
        }
        @Override public long peso() { return valor; }
    }
    public static class Grupo implements Elemento {
        private final List<Elemento> hijos = new ArrayList<Elemento>();
        public void agregar(Elemento elemento) {
            if (elemento == this) throw new IllegalArgumentException("Autociclo");
            hijos.add(Objects.requireNonNull(elemento));
        }
        @Override public long peso() {
            long total = 0;
            for (Elemento hijo : hijos) total = Math.addExact(total, hijo.peso());
            return total;
        }
    }
    // END composite

    // BEGIN adapter
    public interface Dibujable { String dibujar(); }
    public static class FotoAntigua {
        public String mostrar(int calidad) { return "foto calidad " + calidad; }
    }
    public static class AdaptadorFoto implements Dibujable {
        private final FotoAntigua foto;
        public AdaptadorFoto(FotoAntigua foto) { this.foto = Objects.requireNonNull(foto); }
        @Override public String dibujar() { return foto.mostrar(80); }
    }
    // END adapter

    // BEGIN state
    private interface Estado {
        boolean pagar(Pedido pedido);
        boolean enviar(Pedido pedido);
        String nombre();
    }
    private static class Pendiente implements Estado {
        public boolean pagar(Pedido p) { p.estado = new Pagado(); return true; }
        public boolean enviar(Pedido p) { return false; }
        public String nombre() { return "pendiente"; }
    }
    private static class Pagado implements Estado {
        public boolean pagar(Pedido p) { return false; }
        public boolean enviar(Pedido p) { p.estado = new Enviado(); return true; }
        public String nombre() { return "pagado"; }
    }
    private static class Enviado implements Estado {
        public boolean pagar(Pedido p) { return false; }
        public boolean enviar(Pedido p) { return false; }
        public String nombre() { return "enviado"; }
    }
    public static class Pedido {
        private Estado estado = new Pendiente();
        public boolean pagar() { return estado.pagar(this); }
        public boolean enviar() { return estado.enviar(this); }
        public String estadoActual() { return estado.nombre(); }
    }
    // END state
}
