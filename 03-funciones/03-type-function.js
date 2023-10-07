"use strict";
const filterNombres = (nombres) => {
    return nombres.filter((nombre) => nombre !== "Maria");
};
// debe cumplir si o si esta firma de funcion para que funcione
let salida;
salida = filterNombres;
console.log(salida(["Carlos", "Pedro", "Maria", "Roberto"]));
