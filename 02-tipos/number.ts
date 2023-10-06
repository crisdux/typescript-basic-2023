let avengers:number = 50; // nombreVariable: tipo_dato = valor;
let villanos:number = 30;

if(avengers < villanos){
    console.log("estamos en problemas");
}else {
    console.log("estamos salvados");
}

avengers = Number("20f"); //NaN -> pero NaN es de tipo number para js, por ello no hay error
console.log(avengers);
