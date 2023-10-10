"use strict";
(() => {
    class Vehiculo {
        constructor(color, numPuertas) {
            this.numPuertas = 4;
            this.color = color;
            this.numPuertas = numPuertas;
        }
    }
    class Bicicleta extends Vehiculo {
        constructor(color, numPuertas, isMontanera) {
            super(color, numPuertas);
            this.isMontanera = isMontanera;
        }
        get getColor() {
            return `La bicicleta es de color ${this.color}`;
        }
        set setColor(color) {
            this.color = color;
        }
    }
    const santosa = new Bicicleta("negra", 0, true);
    console.log(santosa.getColor);
    santosa.setColor = "rojo";
    console.log(santosa.getColor);
})();
