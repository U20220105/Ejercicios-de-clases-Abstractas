import * as readline from "readline";

abstract class Pago {
  constructor(public monto: number) {}

  abstract procesarPago(): void;
}

class PagoEfectivo extends Pago {
  procesarPago(): void {
    console.log(`\n💵 Procesando pago en efectivo por $${this.monto.toFixed(2)}`);
    console.log("✅ Pago en efectivo recibido correctamente");
  }
}

class PagoTarjeta extends Pago {
  constructor(monto: number, private numeroTarjeta: string) {
    super(monto);
  }

  procesarPago(): void {
    console.log(`\n💳 Procesando pago con tarjeta por $${this.monto.toFixed(2)}`);
    console.log(`   Tarjeta: **** **** **** ${this.numeroTarjeta.slice(-4)}`);
    console.log("✅ Pago con tarjeta aprobado");
  }
}

class PagoTransferencia extends Pago {
  constructor(monto: number, private numeroCuenta: string) {
    super(monto);
  }

  procesarPago(): void {
    console.log(`\n🏦 Procesando transferencia bancaria por $${this.monto.toFixed(2)}`);
    console.log(`   Cuenta destino: ${this.numeroCuenta}`);
    console.log("✅ Transferencia realizada exitosamente");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔════════════════════════════════════════╗");
console.log("║   EJERCICIO 5: SISTEMA DE PAGOS       ║");
console.log("╚════════════════════════════════════════╝\n");

rl.question("Ingrese el monto a pagar: $", (monto: string) => {
  console.log("\nSeleccione el método de pago:");
  console.log("1. Efectivo");
  console.log("2. Tarjeta");
  console.log("3. Transferencia bancaria");

  rl.question("\nOpción: ", (opcion: string) => {
    const montoNum = parseFloat(monto);

    if (opcion === "1") {
      const pago = new PagoEfectivo(montoNum);
      pago.procesarPago();
      rl.close();
    } else if (opcion === "2") {
      rl.question("Ingrese el número de tarjeta: ", (tarjeta: string) => {
        const pago = new PagoTarjeta(montoNum, tarjeta);
        pago.procesarPago();
        rl.close();
      });
    } else if (opcion === "3") {
      rl.question("Ingrese el número de cuenta: ", (cuenta: string) => {
        const pago = new PagoTransferencia(montoNum, cuenta);
        pago.procesarPago();
        rl.close();
      });
    } else {
      console.log("\n❌ Opción inválida");
      rl.close();
    }
  });
});