(() => {
    class Gato {
        constructor(public color:string, public patas:number = 4){

        }

        public saludarGato():string{
            return "Te saluda el gato de color" + this.color;
        }

        public static despedirGato(): string {
            return `El gato se despide`;
        }
    }

    const michi = new Gato("negro", 3);
    console.log(michi.saludarGato())
    console.log(Gato.despedirGato())
})()