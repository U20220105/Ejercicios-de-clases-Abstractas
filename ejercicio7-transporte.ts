import * as readline from "readline";

abstract class Transporte {
  constructor(public distancia: number) {}

  abstract calcularCosto(): number;

  mostrarCosto(): void {
    console.log(`\n💵 Costo del viaje: $${this.calcularCosto().toFixed(2)}`);
    console.log(`📏 Distancia recorrida: ${this.distancia} km`);
  }
}

class Taxi extends Transporte {
  private tarifaBase: number = 2.5;
  private tarifaPorKm: number = 1.5;

  calcularCosto(): number {
    return this.tarifaBase + this.distancia * this.tarifaPorKm;
  }
}

class Autobus extends Transporte {
  private tarifaFija: number = 0.75;

  calcularCosto(): number {
    return this.tarifaFija;
  }
}

class Uber extends Transporte {
  private tarifaBase: number = 1.5;
  private tarifaPorKm: number = 1.2;

  calcularCosto(): number {
    return this.tarifaBase + this.distancia * this.tarifaPorKm;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════╗");
console.log("║  EJERCICIO 7: SISTEMA DE TRANSPORTE   ║");
console.log("╚════════════════════════════════════════╝\n");

console.log("Seleccione el tipo de transporte:");
console.log("1. Taxi");
console.log("2. Autobús");
console.log("3. Uber");

rl.question("\nOpción: ", (opcion: string) => {
  rl.question("Ingrese la distancia en km: ", (distancia: string) => {
    const dist = parseFloat(distancia);
    let transporte: Transporte;

    switch (opcion) {
      case "1":
        transporte = new Taxi(dist);
        console.log("\n🚕 Taxi seleccionado");
        break;
      case "2":
        transporte = new Autobus(dist);
        console.log("\n🚌 Autobús seleccionado");
        break;
      case "3":
        transporte = new Uber(dist);
        console.log("\n🚗 Uber seleccionado");
        break;
      default:
        console.log("\n❌ Opción inválida");
        rl.close();
        return;
    }

    transporte.mostrarCosto();
    rl.close();
  });
});