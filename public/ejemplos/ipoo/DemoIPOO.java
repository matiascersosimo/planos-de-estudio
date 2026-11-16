import java.time.LocalDate;

public class DemoIPOO {
    public static void main(String[] args) {
        Deposito deposito = new Deposito(10);
        deposito.cargar(7);
        deposito.retirar(2);
        System.out.println("Cantidad: " + deposito.getCantidad());
        Figura figura = new Rectangulo(3, 4);
        System.out.println(figura.describir());
        Catalogo catalogo = new Catalogo();
        Libro libro = new Libro("L1", "Mapas del cielo");
        catalogo.agregar(libro);
        Prestamo prestamo = new Prestamo(libro, LocalDate.of(2026, 11, 16), 7);
        System.out.println("Vence: " + prestamo.getVencimiento());
        Patrones.Pedido pedido = new Patrones.Pedido();
        pedido.pagar();
        pedido.enviar();
        System.out.println("Pedido: " + pedido.estadoActual());
        DespachoDoble.Forma forma = new DespachoDoble.Redonda();
        System.out.println(forma.mostrarEn(new DespachoDoble.Pantalla()));
    }
}
