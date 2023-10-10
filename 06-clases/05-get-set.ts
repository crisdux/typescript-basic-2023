
(() => {
    class Vehiculo {
        protected color:string;
        protected numPuertas:number = 4;

        constructor(color:string, numPuertas:number){
            this.color = color;
            this.numPuertas = numPuertas;
        }
    }

    class Bicicleta extends Vehiculo {
        private isMontanera:boolean;

        constructor(color:string, numPuertas:number, isMontanera:boolean){
            super(color, numPuertas);
            this.isMontanera = isMontanera;
        }

        get getColor(){
            return `La bicicleta es de color ${this.color}`;
        }

        set setColor(color:string){
            this.color = color;
        }
    }

    const santosa:Bicicleta = new Bicicleta("negra", 0, true);
    console.log(santosa.getColor);
    santosa.setColor = "rojo";
    console.log(santosa.getColor);


})();