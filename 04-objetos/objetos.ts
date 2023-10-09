(() => {
    type Persona = { // para objetos se puede crear un type y poner toda la firma del objeto
        nombre: string;
        edad: number;
        amigos: string[];
        isSoltero: boolean;
        getNombre?: () => string;
    }
    const persona1:Persona = {
        nombre: "Cris",
        edad: 27,
        amigos: ["Ruben", "Miki", "Wishas"],
        isSoltero: true,
        getNombre(){
            return this.nombre;
        }
    }

    const persona2: Persona = {
        nombre: "mish",
        edad:24,
        amigos: ["PEdro", "juan"],
        isSoltero: false
    }
    
})();