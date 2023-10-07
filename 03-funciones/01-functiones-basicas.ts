(() => {
    const getNombre = (nombre:string):string => {
        return `mi nombre es ${nombre}`;
    }
    
    /*
        los parametros van con su respectivo tipo de dato
        el retorno de la funcion tb va con su tipo de dato
    */
    
    console.log(getNombre("Cris"))
    // ambos parametros son obligatorios
    const getNombreCompleto = (nombre:string, apellido: string):string => {
        return `${nombre}, ${apellido}`;
    }
    
    console.log(getNombreCompleto("Cris", "Villca"));
    // para ponder parametros opcinales, basta con usar el operador ?
    // es importante validar depsues el dato opcional
    const getPersonaCompleta = (nombre:string, apellido:string, edad?:number):string => {
        return `${nombre} ${apellido} ${edad ?? "no tiene edad"}`;
    }
    
    const res = getPersonaCompleta;
    console.log(res("Cris", "Villca", 27));
    console.log(res("Cris", "Villca"));

    //parametros por defecto
    const getPerro = (nombre:string, raza?: string, isCola:boolean = true):string => {
       if(isCola){
            return `${nombre} ${raza} ${isCola}`.toUpperCase();
       }else{
            return `${nombre} ${raza} ${isCola}`;
       }
    }
    console.log(getPerro("Boby", "cooker", false))
    
})();