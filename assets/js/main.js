import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuestos.js";

// Instanciado
// Creación de un array de clientes con diferentes valores de impuestos
const clientes = [
    new Cliente("Cliente Pedro", new Impuestos(1000000, 100000)),
    new Cliente("Cliente Juan", new Impuestos(2000000, 200000)),
    new Cliente("Cliente Diego", new Impuestos(3000000, 300000)),
    new Cliente("Cliente Fernanda", new Impuestos(4000000, 400000)),
    new Cliente("Cliente5 Isabel", new Impuestos(5000000, 500000))
];

// Iteración sobre el array de clientes
clientes.forEach((cliente, index) => {
    // Impresión del nombre del cliente y el impuesto a pagar
    console.log(`Cliente ${index + 1}:`);
    console.log("Nombre:", cliente.nombre);
    console.log("Impuesto a pagar:", cliente.calcularImpuesto());
    console.log();
});