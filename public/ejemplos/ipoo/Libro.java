import java.util.Objects;

public final class Libro {
    private final String codigo;
    private final String titulo;

    public Libro(String codigo, String titulo) {
        this.codigo = Objects.requireNonNull(codigo);
        this.titulo = Objects.requireNonNull(titulo);
        if (codigo.trim().isEmpty() || titulo.trim().isEmpty()) {
            throw new IllegalArgumentException("Texto vacio");
        }
    }

    public String getCodigo() { return codigo; }
    public String getTitulo() { return titulo; }

    @Override
    public boolean equals(Object otro) {
        if (this == otro) return true;
        if (!(otro instanceof Libro)) return false;
        Libro libro = (Libro) otro;
        return codigo.equals(libro.codigo);
    }

    @Override
    public int hashCode() { return codigo.hashCode(); }
}
