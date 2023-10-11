"use strict";
(() => {
    class Telefono {
        constructor(marca, anio, megapixeles, bateria, isType) {
            this.marca = marca;
            this.anio = anio;
            this.megapixeles = megapixeles;
            this.bateria = bateria;
            this.isType = isType;
        }
        getSaludo(saludo) {
            return "Hola, soy un celular";
        }
    }
    const mi_telefono = new Telefono("Sansumg", 2015, 50, 5000, "adroid");
    console.log(mi_telefono);
})();
