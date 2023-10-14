(() => {
    interface Persona {
        id:number;
        nombre?:string;
        edad?: number;
        isSoltero?:boolean;
        amigos?:string[];
    }

    const cris:Persona = {
        id:1
    };
    // todos los atributos son requeridos
    type PersonaRequired = Required<Persona>

        //error, necesita de todos los atributos para funcionar bien
    const diego:PersonaRequired = {
        id:1
    };

    // Omit -> Pick 
    // Partial -> Required


})();