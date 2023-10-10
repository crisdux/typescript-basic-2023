(() => {
    interface Perro {
        nombre:string;
        edad:number;
        isCola:boolean;
        bigotes?:boolean;
        sonido: () => string;
    };

    //creamos 2 perros

    const boby:Perro = {
        nombre: "boby",
        edad:5,
        isCola:true,
        bigotes:false,
        sonido(){
            return this.nombre;
        }
    };

    const cachu:Perro = {
        nombre:"cachu",
        edad:4,
        isCola: true,
        sonido(){
            return "Hola"
        }
    }
})();