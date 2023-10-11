"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
}
exports.default = Animal;
