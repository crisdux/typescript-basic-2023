"use strict";
(() => {
    class Avenger {
        constructor(nombre, edad, isActive) {
            this.nombre = nombre;
            this.edad = edad;
            this.isActive = isActive;
        }
    }
    Avenger.altura = 30;
    const thor = new Avenger("Thor", 500, true);
    console.log(thor.nombre);
    console.log(Avenger.altura);
    // console.log(saludarAvenger("thor"));
})();
