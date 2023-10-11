(() => {
    interface Celular {
        marca:string;
        anio:number;
        megapixeles: number;
        bateria: number;
        isType: "adroid" | "iphone";
        getSaludo(saludo:string): string;
    }

    class Telefono implements Celular {
        public marca:string;
        public anio: number;
        public megapixeles: number;
        public bateria:number;
        public isType: "adroid" | "iphone";

        constructor(marca:string, 
            anio:number, 
            megapixeles:number, 
            bateria:number, 
            isType:"adroid" | "iphone"){
                this.marca = marca;
                this.anio = anio;
                this.megapixeles = megapixeles;
                this.bateria = bateria;
                this.isType = isType;
            }

            getSaludo(saludo: string): string {
                return "Hola, soy un celular";
            }
    }

    const mi_telefono:Telefono = new Telefono("Sansumg", 2015, 50, 5000, "adroid");
    console.log(mi_telefono);
})();