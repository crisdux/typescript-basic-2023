(() => {
    interface Perro {
        nombre:string;
        edad:number;
        isCola:boolean;
        bigotes?:boolean;
        sonido: () => string;
        getNombre(nombre:string): string;
    };

    //creamos 2 perros

    const boby:Perro = {
        nombre: "boby",
        edad:5,
        isCola:true,
        bigotes:false,
        sonido(){
            return this.nombre;
        },
        getNombre(nombre:string) {
            return nombre;
        },        
    };

    console.log(boby.getNombre("boby"))



//     const cachu:Perro = {
//         nombre:"cachu",
//         edad:4,
//         isCola: true,
//         sonido(){
//             return "Hola"
//         }
//     }
 })();