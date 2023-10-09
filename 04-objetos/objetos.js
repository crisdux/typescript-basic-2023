"use strict";
(() => {
    const persona1 = {
        nombre: "Cris",
        edad: 27,
        amigos: ["Ruben", "Miki", "Wishas"],
        isSoltero: true,
        getNombre() {
            return this.nombre;
        }
    };
    const persona2 = {
        nombre: "mish",
        edad: 24,
        amigos: ["PEdro", "juan"],
        isSoltero: false
    };
})();
