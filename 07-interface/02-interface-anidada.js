"use strict";
(() => {
    ;
    const persona1 = {
        nombre: "Cris",
        edad: 27,
        direccion: {
            avenida: "Tomas Monje",
            numero: 26,
            pasaje: "A",
            zona: "Obrajes"
        }
    };
    const { nombre, edad, direccion: { avenida, zona, pasaje } } = persona1;
    console.log({ nombre, edad, avenida, zona, pasaje });
})();
