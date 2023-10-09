"use strict";
const boby = {
    nombre: "boby",
    edad: 5,
    isCola: true,
};
const cachu = {
    nombre: "cachu",
    edad: 1,
    isCola: false,
};
const firu = {
    nombre: "firu",
    edad: 3,
    isCola: true,
};
const arrPerros = [boby, cachu, firu];
for (const { nombre } of arrPerros) {
    console.log(nombre);
}
