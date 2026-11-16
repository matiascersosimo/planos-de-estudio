import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Vector;

public class Catalogo {
    private final Vector<Libro> libros = new Vector<Libro>();

    public boolean agregar(Libro libro) {
        Objects.requireNonNull(libro);
        if (libros.contains(libro)) return false;
        libros.add(libro);
        return true;
    }

    public Libro buscar(String codigo) {
        Objects.requireNonNull(codigo);
        for (Libro libro : libros) {
            if (libro.getCodigo().equals(codigo)) return libro;
        }
        return null;
    }

    public int cantidad() { return libros.size(); }
    public boolean quitar(Libro libro) { return libros.remove(libro); }

    public List<Libro> listar() {
        return Collections.unmodifiableList(new ArrayList<Libro>(libros));
    }
}
