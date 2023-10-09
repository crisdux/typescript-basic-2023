"use strict";
(() => {
    //forma larga 
    // class Avenger {
    //     public name:string;
    //     public edad: number;
    //     constructor(name:string, edad:number){
    //         this.name = name;
    //         this.edad = edad;
    //     }
    // }
    // const ironman:Avenger = new Avenger("ironman", 45);
    // console.log(ironman.name);
    //forma corta
    class Avenger {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }
    const capitan = new Avenger("Steve", 90);
    console.log(capitan.nombre);
})();
