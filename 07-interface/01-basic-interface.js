"use strict";
(() => {
    ;
    //creamos 2 perros
    const boby = {
        nombre: "boby",
        edad: 5,
        isCola: true,
        bigotes: false,
        sonido() {
            return this.nombre;
        }
    };
    const cachu = {
        nombre: "cachu",
        edad: 4,
        isCola: true,
        sonido() {
            return "Hola";
        }
    };
})();
