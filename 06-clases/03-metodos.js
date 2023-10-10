"use strict";
(() => {
    class Gato {
        constructor(color, patas = 4) {
            this.color = color;
            this.patas = patas;
        }
        saludarGato() {
            return "Te saluda el gato de color" + this.color;
        }
        static despedirGato() {
            return `El gato se despide`;
        }
    }
    const michi = new Gato("negro", 3);
    console.log(michi.saludarGato());
    console.log(Gato.despedirGato());
})();
