(() => {
    interface Persona {
        id:number;
        nombre:string;
        edad: number;
        isSoltero:boolean;
        amigos:string[];
    }

    type PersonaReadonly = Readonly<Persona>;
    // covierte a todos los atributos en readonly


    // type PersonaReadonly = {
    //     readonly id: number;
    //     readonly nombre: string;
    //     readonly edad: number;
    //     readonly isSoltero: boolean;
    //     readonly amigos: string[];
    // }
})();