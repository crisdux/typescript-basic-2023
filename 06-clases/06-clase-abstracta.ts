(() => {
    abstract class Escritor { //no es posible instanciar una clase abstracta
        protected nombre:string;
        constructor(nombre:string){
            this.nombre = nombre;
        }
        //todas las clases que herenden de Escritor deben tener si o si este metodo getNombre
        abstract getNombre():string;
    }

    class Novelista extends Escritor {
        public cantidadNovelas:number;
        constructor(nombre:string, cantidadNovelas:number){
            super(nombre);
            this.cantidadNovelas = cantidadNovelas;
        }

        getNombre(): string {
            return this.nombre;
        }
    }

    const novelista1 = new Novelista("Alex", 4);
    console.log(novelista1.getNombre())
})();