(() => {

    interface Persona {
        nombre:string;
        edad: number;
        direccion: Direccion;
    };

    interface Direccion {
        avenida:string;
        numero: number;
        pasaje?: string;
        zona: string;
    }


    const persona1:Persona = {
        nombre:"Cris",
        edad:27,
        direccion: {
            avenida: "Tomas Monje",
            numero: 26,
            pasaje: "A",
            zona: "Obrajes"
        }
    }

    const {nombre, edad, direccion:{avenida, zona, pasaje}} = persona1;

    console.log({nombre, edad, avenida, zona, pasaje});



})();