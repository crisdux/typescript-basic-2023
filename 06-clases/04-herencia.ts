(() => {
    class Animal {
        public nombre:string;
        constructor(nombre:string){
            this.nombre = nombre;
        }
    }

    class Perro extends Animal {
        public color:string;
        public tamanio:string;
        constructor(nombre:string, color:string, tamanio:string){
            super(nombre); // llama al contructor de la clase Animal
            this.color = color;
            this.tamanio = tamanio;
        }
    }

    const miPerro = new Perro("Fido", "Marrón", "Grande");
    console.log(miPerro.nombre);
})();