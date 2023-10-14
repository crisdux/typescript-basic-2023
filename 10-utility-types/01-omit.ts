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
    // Persona - (id, direccion)
    type AuxPersona = Omit<Persona, "id" | "direccion">
    // Direecion - (zona, numPuerta)
    type AuxDireccion = Omit<Direccion, "zona" | "numPuerta">
})();