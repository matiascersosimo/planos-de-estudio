import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.Vector;

public final class Colecciones {
    private Colecciones() { }

    public static int quitarPares(Vector<Integer> datos) {
        int cantidad = 0;
        Iterator<Integer> iterador = datos.iterator();
        while (iterador.hasNext()) {
            int valor = iterador.next();
            if (valor % 2 == 0) {
                iterador.remove();
                cantidad++;
            }
        }
        return cantidad;
    }

    public static Set<String> diferentes(Vector<String> datos) {
        return new HashSet<String>(datos);
    }

    public static Map<String, Integer> frecuencias(Vector<String> datos) {
        Map<String, Integer> resultado = new HashMap<String, Integer>();
        for (String valor : datos) {
            resultado.put(valor, resultado.getOrDefault(valor, 0) + 1);
        }
        return resultado;
    }
}
