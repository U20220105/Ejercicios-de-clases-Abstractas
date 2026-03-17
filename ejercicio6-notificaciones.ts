import * as readline from "readline";

abstract class Notificacion {
  constructor(public destinatario: string, public mensaje: string) {}

  abstract enviar(): void;
}

class NotificacionEmail extends Notificacion {
  enviar(): void {
    console.log(`\n📧 Enviando email a: ${this.destinatario}`);
    console.log(`   Mensaje: ${this.mensaje}`);
    console.log("✅ Email enviado correctamente");
  }
}

class NotificacionSMS extends Notificacion {
  enviar(): void {
    console.log(`\n📱 Enviando SMS a: ${this.destinatario}`);
    console.log(`   Mensaje: ${this.mensaje}`);
    console.log("✅ SMS enviado correctamente");
  }
}

class NotificacionWhatsApp extends Notificacion {
  enviar(): void {
    console.log(`\n💬 Enviando WhatsApp a: ${this.destinatario}`);
    console.log(`   Mensaje: ${this.mensaje}`);
    console.log("✅ WhatsApp enviado correctamente");
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("╔═════════════════════════════════════════════╗");
console.log("║  EJERCICIO 6: SISTEMA DE NOTIFICACIONES    ║");
console.log("╚═════════════════════════════════════════════╝\n");

rl.question("Ingrese el destinatario: ", (destinatario: string) => {
  rl.question("Ingrese el mensaje: ", (mensaje: string) => {
    console.log("\nSeleccione el tipo de notificación:");
    console.log("1. Email");
    console.log("2. SMS");
    console.log("3. WhatsApp");

    rl.question("\nOpción: ", (opcion: string) => {
      let notificacion: Notificacion;

      switch (opcion) {
        case "1":
          notificacion = new NotificacionEmail(destinatario, mensaje);
          break;
        case "2":
          notificacion = new NotificacionSMS(destinatario, mensaje);
          break;
        case "3":
          notificacion = new NotificacionWhatsApp(destinatario, mensaje);
          break;
        default:
          console.log("\n❌ Opción inválida");
          rl.close();
          return;
      }

      notificacion.enviar();
      rl.close();
    });
  });
});