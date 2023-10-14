(() => {
    interface Persona {
        id:number;
        nombre:string;
        edad: number;
        isSoltero:boolean;
        amigos:string[];
        direccion: Direccion;
    }
    
    interface Direccion {
        calle:number | string;
        avenida: string;
        numPuerta: number;
        zona:string;
        condominio?:string;
        pasaje?:string;
    }

    // PersonaBasica = solo nombre y edad, el resto se elimina
    type PersonaBasica = Pick<Persona, "nombre" | "edad">
    //solo tiene calle y zona
    type DireccionBasica = Pick<Direccion, "calle" | "zona">

    // Pick es como un Selection, elegimos que proiedades queremos
    // Omit es lo contrario, elegimos las propiedades que no queremos


    //queremos is soltero, amigos, pero no id en Persona:
    type InterfaceResultado = Pick<Persona, "isSoltero" | "amigos">
    type InterfaceResultado2 = Omit<Persona, "edad" | "nombre" | "direccion" | "id" >

})();