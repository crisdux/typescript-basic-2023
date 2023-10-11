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
        private marca:string;
        private anio: number;
        private megapixeles: number;
        private bateria:number;
        private isType: "adroid" | "iphone";

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