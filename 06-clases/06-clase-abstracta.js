"use strict";
(() => {
    class Escritor {
        constructor(nombre) {
            this.nombre = nombre;
        }
    }
    class Novelista extends Escritor {
        constructor(nombre, cantidadNovelas) {
            super(nombre);
            this.cantidadNovelas = cantidadNovelas;
        }
        getNombre() {
            return this.nombre;
        }
    }
    const novelista1 = new Novelista("Alex", 4);
    console.log(novelista1.getNombre());
})();
