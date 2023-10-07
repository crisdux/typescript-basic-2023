const numeros:number[] = [1,2,3,4,5];
console.log(numeros);

const nombres:string[] = ["Carlos", "Juan", "Pedro"];
nombres.forEach((nombre, index) => { // nombre: string e index:number | no es necesario poner el tipo de dato, typescript lo infiere
    console.log(`El nombre es ${nombre} y su index es ${index}`);
});

const arr:(number | string)[] = [1,2,3, "Hola"];
arr.forEach((item, index) => {
    if(typeof item === "string"){
        console.log(`El item ${item} esta en el index ${index}`)
    }
})