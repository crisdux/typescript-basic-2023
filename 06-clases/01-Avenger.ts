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
        constructor(public nombre:string, public edad:number){

        }
    }

    const capitan:Avenger = new Avenger("Steve", 90);
    console.log(capitan.nombre);
})();