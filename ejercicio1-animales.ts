import * as readline from "readline";

abstract class Animal {
  constructor(public nombre: string) {}

  abstract hacerSonido(): void;
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log(`\n🐕 ${this.nombre} dice: ¡Guau guau!`);
  }
}

class Gato extends Animal {
  hacerSonido(): void {
    console.log(`\n🐱 ${this.nombre} dice: ¡Miau miau!`);
  }
}

class Vaca extends Animal {
  hacerSonido(): void {
    console.log(`\n🐮 ${this.nombre} dice: ¡Muuu!`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════╗");
console.log("║   EJERCICIO 1: SISTEMA DE ANIMALES    ║");
console.log("╚════════════════════════════════════════╝\n");

rl.question("Ingrese el nombre del animal: ", (nombre: string) => {
  console.log("\nSeleccione el tipo de animal:");
  console.log("1. Perro");
  console.log("2. Gato");
  console.log("3. Vaca");

  rl.question("\nOpción: ", (opcion: string) => {
    let animal: Animal;

    switch (opcion) {
      case "1":
        animal = new Perro(nombre);
        break;
      case "2":
        animal = new Gato(nombre);
        break;
      case "3":
        animal = new Vaca(nombre);
        break;
      default:
        console.log("\n❌ Opción inválida");
        rl.close();
        return;
    }

    animal.hacerSonido();
    rl.close();
  });
});