// funcion que regrese el max de una lista de numeros

const getMaximo = (...numeros:number[]):number => {
    return Math.max(...numeros);
}

console.log(getMaximo(1,5,9,3,8))

