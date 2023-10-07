const filterNombres = (nombres:string[]):string[] => {
    return nombres.filter((nombre) => nombre !== "Maria");
}

// debe cumplir si o si esta firma de funcion para que funcione
let salida:(nombres:string[]) => string[];

salida = filterNombres;
console.log(salida(["Carlos", "Pedro", "Maria", "Roberto"]))

