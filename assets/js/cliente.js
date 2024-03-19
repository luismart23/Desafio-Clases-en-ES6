export class Cliente {
    // Propiedades privadas para el nombre y los impuestos
    #nombre;
    #impuestos;

    constructor(nombre, impuestos) {

        this.#nombre = nombre;
        this.#impuestos = impuestos;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    // Método para calcular el impuesto a pagar
    calcularImpuesto() {
        return (this.#impuestos.montoBrutoAnual - this.#impuestos.deducciones) * 0.21;
    }
}