import { NumericLiteral } from "typescript";

(() => {
    class Avenger {
        public nombre: string;
        private edad:number;
        private isActive: boolean;
        public static altura:number=30;

        constructor(nombre:string, edad:number, isActive:boolean){
            this.nombre = nombre;
            this.edad = edad;
            this.isActive = isActive;
        }

    }

    const thor:Avenger = new Avenger("Thor", 500, true);
    console.log(thor.nombre);
    console.log(Avenger.altura);
})();