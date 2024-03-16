"use strict";

var _impuestos = require("./impuestos.js");
var _cliente = require("./cliente.js");
// Función para calcular el total de impuestos de todos los clientes
function calcularTotalImpuestos(clientes) {
  return clientes.reduce(function (totalImpuestos, cliente) {
    return totalImpuestos + cliente.calcularImpuesto();
  }, 0);
}

// Creación de instancias de Impuestos para cada cliente
var impuestosJuan = new _impuestos.Impuestos(1000000, 100000);
var impuestosPedro = new _impuestos.Impuestos(2000000, 200000);
var impuestosDiego = new _impuestos.Impuestos(3000000, 300000);
var impuestosGaby = new _impuestos.Impuestos(4000000, 400000);
var impuestosIsabel = new _impuestos.Impuestos(5000000, 500000);

// Creación de instancias de Cliente con sus respectivos impuestos
var clienteJuan = new _cliente.Cliente("Juan", impuestosJuan);
var clientePedro = new _cliente.Cliente("Pedro", impuestosPedro);
var clienteDiego = new _cliente.Cliente("Diego", impuestosDiego);
var clienteGaby = new _cliente.Cliente("Gaby", impuestosGaby);
var clienteIsabel = new _cliente.Cliente("Isabel", impuestosIsabel);
console.log("Impuesto de Isabel:", clienteIsabel.calcularImpuesto()); // Imprime el impuesto calculado para el cliente Isabel
console.log("Total de impuestos:", calcularTotalImpuestos([clienteJuan, clientePedro, clienteDiego, clienteGaby, clienteIsabel])); // Imprime el total de impuestos de todos los clientes