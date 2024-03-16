export class Cliente {
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

    get impuestos() {
        return this.#impuestos;
    }

    set impuestos(nuevosImpuestos) {
        this.#impuestos = nuevosImpuestos;
    }

    calcularImpuesto() {
        return this.#impuestos.calcularImpuesto();
    }
}
