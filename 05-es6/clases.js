class Avenger {
    nombre;
    poder;
    constructor(nombre, poder){
        this.nombre = nombre;
        this.poder = poder;
    }
}

const thor = new Avenger("Thor", 9000);
console.log(thor.nombre);

class AvengerVolador extends Avenger {
    volar;
    constructor(nombre, poder){
        super(nombre, poder)
        this.volar = true;
    }
}

const falcon = new AvengerVolador("falcon", 50)
console.log(falcon.nombre);