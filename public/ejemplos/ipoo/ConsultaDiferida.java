import java.util.Objects;
import java.util.function.Supplier;

// Ejemplo para uso secuencial, sin acceso concurrente.
public class ConsultaDiferida {
    private final Supplier<String> calcular;
    private String valor;
    private boolean inicializada;

    public ConsultaDiferida(Supplier<String> calcular) {
        this.calcular = Objects.requireNonNull(calcular);
    }

    public String obtener() {
        if (!inicializada) {
            valor = Objects.requireNonNull(calcular.get());
            inicializada = true;
        }
        return valor;
    }
}
