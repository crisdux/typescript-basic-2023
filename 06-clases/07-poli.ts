


(() => {
    class Animal {
        protected nombre:string;
        protected edad:number;

        constructor(nombre:string, edad:number){
            this.nombre = nombre;
            this.edad = edad;
        }

        hacerSonido(): string{ // este medodo se debe sobreescribir
            return "Sonido generico";
        }
    }

    class Perro extends Animal {
        public isCola:boolean = true;
        constructor(nombre:string, edad:number, isCola:boolean = true){
            super(nombre, edad);
            this.isCola = isCola;
        }
        
        hacerSonido(): string { // aca el metodo hace algo
            return "Guau Guau";
        }
    }

    class Gato extends Animal {
        private color:string;
        constructor(nombre:string, edad:number, color:string){
            super(nombre, edad);
            this.color = color;
        }

        hacerSonido(): string { // aca el mismo metodo hace otra cosa
            return "miau miau";
        }
    }


    const miPerro = new Perro("boby", 5);
    console.log(miPerro);
    console.log(miPerro.hacerSonido())

    const miGato = new Gato("michi", 3, "cafe");
    console.log(miGato.hacerSonido());
})();