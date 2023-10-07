enum VolumenLevel {
    min=1,
    midium = 5,
    max = 10,
};

console.log(VolumenLevel.min);

enum Dias {
    lunes = "lunes",
    martes = "martes",
    miercoles = "miercoles",
    jueves ="jueves",
    viernes = "viernes",
    sabado = "sabado",
    domingo = "domingo",
};

console.log(Dias.domingo);
const finde:Dias[] = [Dias.sabado, Dias.domingo];
finde.forEach((dia) => {
    console.log(dia.toUpperCase());
})