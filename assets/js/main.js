// no funciona si hago esto: import { Impuestos } from  "./impuestos.module.js"!!!!
// pero de alguna forma se encuentra enlazado al type="module"
// ya que si lo elimino falla el codigo.

import { Impuestos } from "./impuestos.js"
import { Cliente } from "./cliente.js"

// Función para calcular el total de impuestos de todos los clientes
function calcularTotalImpuestos(clientes) {
    return clientes.reduce((totalImpuestos, cliente) => totalImpuestos + cliente.calcularImpuesto(), 0);
}

// Creación de instancias de Impuestos para cada cliente
const impuestosJuan = new Impuestos(1000000, 100000);
const impuestosPedro = new Impuestos(2000000, 200000);
const impuestosDiego = new Impuestos(3000000, 300000);
const impuestosGaby = new Impuestos(4000000, 400000);
const impuestosIsabel = new Impuestos(5000000, 500000);

// Creación de instancias de Cliente con sus respectivos impuestos
const clienteJuan = new Cliente("Juan", impuestosJuan);
const clientePedro = new Cliente("Pedro", impuestosPedro);
const clienteDiego = new Cliente("Diego", impuestosDiego);
const clienteGaby = new Cliente("Gaby", impuestosGaby);
const clienteIsabel = new Cliente("Isabel", impuestosIsabel);

console.log("Impuesto de Isabel:", clienteIsabel.calcularImpuesto()) // Imprime el impuesto calculado para el cliente Isabel
console.log("Total de impuestos:", calcularTotalImpuestos([clienteJuan, clientePedro, clienteDiego, clienteGaby, clienteIsabel])) // Imprime el total de impuestos de todos los clientes