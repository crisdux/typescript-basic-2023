"use strict";
var VolumenLevel;
(function (VolumenLevel) {
    VolumenLevel[VolumenLevel["min"] = 1] = "min";
    VolumenLevel[VolumenLevel["midium"] = 5] = "midium";
    VolumenLevel[VolumenLevel["max"] = 10] = "max";
})(VolumenLevel || (VolumenLevel = {}));
;
console.log(VolumenLevel.min);
var Dias;
(function (Dias) {
    Dias["lunes"] = "lunes";
    Dias["martes"] = "martes";
    Dias["miercoles"] = "miercoles";
    Dias["jueves"] = "jueves";
    Dias["viernes"] = "viernes";
    Dias["sabado"] = "sabado";
    Dias["domingo"] = "domingo";
})(Dias || (Dias = {}));
;
console.log(Dias.domingo);
const finde = [Dias.sabado, Dias.domingo];
finde.forEach((dia) => {
    console.log(dia.toUpperCase());
});
