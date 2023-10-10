"use strict";
(() => {
    class Animal {
        constructor(nombre) {
            this.nombre = nombre;
        }
    }
    class Perro extends Animal {
        constructor(nombre, color, tamanio) {
            super(nombre); // llama al contructor de la clase Animal
            this.color = color;
            this.tamanio = tamanio;
        }
    }
    const miPerro = new Perro("Fido", "Marrón", "Grande");
    console.log(miPerro.nombre);
})();
