"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Super;
    (function (Super) {
        Super[Super["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        Super[Super["fuerzaBatman"] = 1] = "fuerzaBatman";
        Super[Super["fuerzaFlash"] = 5] = "fuerzaFlash";
        Super[Super["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(Super || (Super = {}));
    const acuaman = Super.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    poder;
    const largoDelPoder = poder.length;
    largoDelPoder;
    console.log(largoDelPoder);
})();
