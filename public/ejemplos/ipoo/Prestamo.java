import java.time.LocalDate;
import java.util.Objects;

public class Prestamo {
    private final Libro libro;
    private final LocalDate inicio;
    private final LocalDate vencimiento;
    private boolean devuelto;

    public Prestamo(Libro libro, LocalDate inicio, int dias) {
        if (dias <= 0) throw new IllegalArgumentException("Plazo invalido");
        this.libro = Objects.requireNonNull(libro);
        this.inicio = Objects.requireNonNull(inicio);
        this.vencimiento = inicio.plusDays(dias);
    }

    public Libro getLibro() { return libro; }
    public LocalDate getInicio() { return inicio; }
    public LocalDate getVencimiento() { return vencimiento; }
    public void devolver() { devuelto = true; }
    public boolean estaVencido(LocalDate fecha) {
        Objects.requireNonNull(fecha);
        return !devuelto && fecha.isAfter(vencimiento);
    }
}
