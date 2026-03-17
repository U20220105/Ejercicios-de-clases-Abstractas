import * as readline from "readline";

abstract class Figura {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;

  mostrarResultados(): void {
    console.log(`\n📐 Área: ${this.calcularArea().toFixed(2)} unidades²`);
    console.log(`📏 Perímetro: ${this.calcularPerimetro().toFixed(2)} unidades`);
  }
}

class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }

  calcularPerimetro(): number {
    return this.lado * 4;
  }
}

class Rectangulo extends Figura {
  constructor(private base: number, private altura: number) {
    super();
  }

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════════╗");
console.log("║  EJERCICIO 3: FIGURAS GEOMÉTRICAS         ║");
console.log("╚════════════════════════════════════════════╝\n");

console.log("Seleccione la figura:");
console.log("1. Cuadrado");
console.log("2. Rectángulo");
console.log("3. Círculo");

rl.question("\nOpción: ", (opcion: string) => {
  if (opcion === "1") {
    rl.question("Ingrese el lado del cuadrado: ", (lado: string) => {
      const cuadrado = new Cuadrado(parseFloat(lado));
      cuadrado.mostrarResultados();
      rl.close();
    });
  } else if (opcion === "2") {
    rl.question("Ingrese la base del rectángulo: ", (base: string) => {
      rl.question("Ingrese la altura del rectángulo: ", (altura: string) => {
        const rectangulo = new Rectangulo(parseFloat(base), parseFloat(altura));
        rectangulo.mostrarResultados();
        rl.close();
      });
    });
  } else if (opcion === "3") {
    rl.question("Ingrese el radio del círculo: ", (radio: string) => {
      const circulo = new Circulo(parseFloat(radio));
      circulo.mostrarResultados();
      rl.close();
    });
  } else {
    console.log("\n❌ Opción inválida");
    rl.close();
  }
});