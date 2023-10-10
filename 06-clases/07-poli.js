"use strict";
(() => {
    class Animal {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        hacerSonido() {
            return "Sonido generico";
        }
    }
    class Perro extends Animal {
        constructor(nombre, edad, isCola = true) {
            super(nombre, edad);
            this.isCola = true;
            this.isCola = isCola;
        }
        hacerSonido() {
            return "Guau Guau";
        }
    }
    class Gato extends Animal {
        constructor(nombre, edad, color) {
            super(nombre, edad);
            this.color = color;
        }
        hacerSonido() {
            return "miau miau";
        }
    }
    const miPerro = new Perro("boby", 5);
    console.log(miPerro);
    console.log(miPerro.hacerSonido());
    const miGato = new Gato("michi", 3, "cafe");
    console.log(miGato.hacerSonido());
    
    
    
})();
