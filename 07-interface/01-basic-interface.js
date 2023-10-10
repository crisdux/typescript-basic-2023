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
        },
        getNombre(nombre) {
            return nombre;
        },
    };
    console.log(boby.getNombre("boby"));
    //     const cachu:Perro = {
    //         nombre:"cachu",
    //         edad:4,
    //         isCola: true,
    //         sonido(){
    //             return "Hola"
    //         }
    //     }
})();
