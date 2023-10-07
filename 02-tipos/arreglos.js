"use strict";
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const nombres = ["Carlos", "Juan", "Pedro"];
nombres.forEach((nombre, index) => {
    console.log(`El nombre es ${nombre} y su index es ${index}`);
});
const arr = [1, 2, 3, "Hola"];
arr.forEach((item, index) => {
    if (typeof item === "string") {
        console.log(`El item ${item} esta en el index ${index}`);
    }
});
