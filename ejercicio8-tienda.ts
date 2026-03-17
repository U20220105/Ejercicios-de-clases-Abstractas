import * as readline from "readline";

abstract class Producto {
  constructor(
    public nombre: string,
    public precioBase: number
  ) {}

  abstract calcularPrecioFinal(): number;

  mostrarInformacion(): void {
    console.log("\n╔════════════════════════════════════════╗");
    console.log(`║ Producto: ${this.nombre.padEnd(27)}║`);
    console.log(`║ Precio base: $${this.precioBase.toFixed(2).padEnd(22)}║`);
    console.log(`║ Precio final: $${this.calcularPrecioFinal().toFixed(2).padEnd(21)}║`);
    console.log("╚════════════════════════════════════════╝");
  }
}

class ProductoElectronico extends Producto {
  private impuesto: number = 0.15; // 15%
  private garantiaExtendida: number = 50;

  calcularPrecioFinal(): number {
    const conImpuesto = this.precioBase * (1 + this.impuesto);
    return conImpuesto + this.garantiaExtendida;
  }
}

class ProductoRopa extends Producto {
  private descuento: number = 0.10; // 10%

  calcularPrecioFinal(): number {
    return this.precioBase * (1 - this.descuento);
  }
}

class ProductoAlimento extends Producto {
  private impuestoReducido: number = 0.05; // 5%

  calcularPrecioFinal(): number {
    return this.precioBase * (1 + this.impuestoReducido);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════════╗");
console.log("║  EJERCICIO 8: SISTEMA DE TIENDA           ║");
console.log("╚════════════════════════════════════════════╝\n");

rl.question("Ingrese el nombre del producto: ", (nombre: string) => {
  rl.question("Ingrese el precio base: $", (precio: string) => {
    console.log("\nSeleccione la categoría del producto:");
    console.log("1. Electrónico (Impuesto 15% + Garantía $50)");
    console.log("2. Ropa (Descuento 10%)");
    console.log("3. Alimento (Impuesto 5%)");

    rl.question("\nOpción: ", (opcion: string) => {
      const precioNum = parseFloat(precio);
      let producto: Producto;

      switch (opcion) {
        case "1":
          producto = new ProductoElectronico(nombre, precioNum);
          break;
        case "2":
          producto = new ProductoRopa(nombre, precioNum);
          break;
        case "3":
          producto = new ProductoAlimento(nombre, precioNum);
          break;
        default:
          console.log("\n❌ Opción inválida");
          rl.close();
          return;
      }

      producto.mostrarInformacion();
      rl.close();
    });
  });
});