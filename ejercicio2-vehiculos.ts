import * as readline from "readline";

abstract class Vehiculo {
  constructor(public marca: string) {}

  abstract mover(): void;
}

class Carro extends Vehiculo {
  mover(): void {
    console.log(`\n🚗 El carro ${this.marca} se mueve con motor a gasolina por la carretera`);
  }
}

class Bicicleta extends Vehiculo {
  mover(): void {
    console.log(`\n🚴 La bicicleta ${this.marca} se mueve pedaleando por la ciclovía`);
  }
}

class Motocicleta extends Vehiculo {
  mover(): void {
    console.log(`\n🏍️ La motocicleta ${this.marca} se mueve con motor entre el tráfico`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════╗");
console.log("║  EJERCICIO 2: SISTEMA DE VEHÍCULOS    ║");
console.log("╚════════════════════════════════════════╝\n");

rl.question("Ingrese la marca del vehículo: ", (marca: string) => {
  console.log("\nSeleccione el tipo de vehículo:");
  console.log("1. Carro");
  console.log("2. Bicicleta");
  console.log("3. Motocicleta");

  rl.question("\nOpción: ", (opcion: string) => {
    let vehiculo: Vehiculo;

    switch (opcion) {
      case "1":
        vehiculo = new Carro(marca);
        break;
      case "2":
        vehiculo = new Bicicleta(marca);
        break;
      case "3":
        vehiculo = new Motocicleta(marca);
        break;
      default:
        console.log("\n❌ Opción inválida");
        rl.close();
        return;
    }

    vehiculo.mover();
    rl.close();
  });
});