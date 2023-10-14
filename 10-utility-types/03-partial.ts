(() => {
    interface Persona {
        id:number;
        nombre:string;
        edad: number;
        isSoltero:boolean;
        amigos:string[];
    }
    
    interface Direccion {
        calle:number | string;
        avenida: string;
        numPuerta: number;
        zona:string;
        condominio?:string;
        pasaje?:string;
    }
    // todas las opcines de Direccion seran opcionales
    type DirectionOptional = Partial<Direccion>

    const createPerson = (person: Partial<Persona>):Persona => {
        return {
            id:2,
            nombre:"Cris",
            edad:25,
            isSoltero:true,
            amigos:["Pedro", "Juan"],
            ...person
        }
    }

    const res = createPerson({id:5})
    console.log(res);
})();