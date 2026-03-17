import * as readline from "readline";

abstract class Empleado {
  constructor(public nombre: string) {}

  abstract calcularSalario(): number;

  mostrarSalario(): void {
    console.log(`\n💰 Salario de ${this.nombre}: $${this.calcularSalario().toFixed(2)}`);
  }
}

class EmpleadoPorHoras extends Empleado {
  constructor(nombre: string, private horasTrabajadas: number, private tarifaPorHora: number) {
    super(nombre);
  }

  calcularSalario(): number {
    return this.horasTrabajadas * this.tarifaPorHora;
  }
}

class EmpleadoFijo extends Empleado {
  constructor(nombre: string, private salarioMensual: number) {
    super(nombre);
  }

  calcularSalario(): number {
    return this.salarioMensual;
  }
}

class EmpleadoPorComision extends Empleado {
  constructor(
    nombre: string,
    private salarioBase: number,
    private ventasRealizadas: number,
    private porcentajeComision: number
  ) {
    super(nombre);
  }

  calcularSalario(): number {
    const comision = this.ventasRealizadas * (this.porcentajeComision / 100);
    return this.salarioBase + comision;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════╗");
console.log("║  EJERCICIO 4: SISTEMA DE EMPLEADOS    ║");
console.log("╚════════════════════════════════════════╝\n");

rl.question("Ingrese el nombre del empleado: ", (nombre: string) => {
  console.log("\nSeleccione el tipo de empleado:");
  console.log("1. Empleado por horas");
  console.log("2. Empleado fijo");
  console.log("3. Empleado por comisión");

  rl.question("\nOpción: ", (opcion: string) => {
    if (opcion === "1") {
      rl.question("Ingrese las horas trabajadas: ", (horas: string) => {
        rl.question("Ingrese la tarifa por hora: $", (tarifa: string) => {
          const empleado = new EmpleadoPorHoras(
            nombre,
            parseFloat(horas),
            parseFloat(tarifa)
          );
          empleado.mostrarSalario();
          rl.close();
        });
      });
    } else if (opcion === "2") {
      rl.question("Ingrese el salario mensual: $", (salario: string) => {
        const empleado = new EmpleadoFijo(nombre, parseFloat(salario));
        empleado.mostrarSalario();
        rl.close();
      });
    } else if (opcion === "3") {
      rl.question("Ingrese el salario base: $", (base: string) => {
        rl.question("Ingrese el total de ventas: $", (ventas: string) => {
          rl.question("Ingrese el porcentaje de comisión: ", (porcentaje: string) => {
            const empleado = new EmpleadoPorComision(
              nombre,
              parseFloat(base),
              parseFloat(ventas),
              parseFloat(porcentaje)
            );
            empleado.mostrarSalario();
            rl.close();
          });
        });
      });
    } else {
      console.log("\n❌ Opción inválida");
      rl.close();
    }
  });
});