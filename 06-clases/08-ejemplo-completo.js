"use strict";
(() => {
    class MedioComunicacion {
        constructor(nombre) {
            this.nombre = nombre;
        }
    }
    class Periodico extends MedioComunicacion {
        constructor(nombre, sectorSocial, sectorDeportivo) {
            super(nombre);
            this.sectorSocial = sectorSocial;
            this.sectorDeportivo = sectorDeportivo;
        }
        presentacion(nombre) {
            return `Bienvenidos al periodico ${nombre}`;
        }
        get getNombrePeriodico() {
            return this.nombre;
        }
        set setNombrePeriodico(nombre) {
            this.nombre = nombre;
        }
        get getSectorSocial() {
            return this.sectorSocial;
        }
        set setSectorSocial(sectorSocial) {
            this.sectorSocial = sectorSocial;
        }
        get getSectorDeportivo() {
            return this.sectorDeportivo;
        }
        set setSectorDeportivo(sectorDeportivo) {
            this.sectorDeportivo = sectorDeportivo;
        }
    }
    class Radio extends MedioComunicacion {
        constructor(nombre, dial, programas) {
            super(nombre);
            this.dial = dial;
            this.programas = programas;
        }
        presentacion(nombre) {
            return `Bienvenidos a la radio ${nombre}`;
        }
        get getNombreRadio() {
            return this.nombre;
        }
        set setNombreRadio(nombre) {
            this.nombre = nombre;
        }
        get getDial() {
            return this.dial;
        }
        set setDial(dial) {
            this.dial = dial;
        }
        get getProgramas() {
            return this.programas;
        }
        set setProgramas(programas) {
            this.programas = programas;
        }
        programasUpperCase(programas) {
            return programas.map((programa) => programa.toUpperCase());
        }
        filterProgramasJuveniles(programas) {
            return programas.filter((programa) => programa === "Gravedad 0");
        }
    }
    Radio.presidente = "Carlos Romero";
    const mi_periodico = new Periodico("La Razón", "Cosas", "La Cancha");
    console.log(mi_periodico.presentacion("La Razón"));
    console.log(`El nombre del peridico es ${mi_periodico.getNombrePeriodico}`);
    mi_periodico.setNombrePeriodico = "El Diario";
    console.log(`Lo sentimos, ahora el nombre del periodico es: ${mi_periodico.getNombrePeriodico}`);
    console.log(`El periodico ${mi_periodico.getNombrePeriodico} 
                cuenta con 2 secciones llamadas: 1) ${mi_periodico.getSectorSocial} y 2) ${mi_periodico.getSectorDeportivo}`);
    mi_periodico.setSectorDeportivo = "El Equipo Deportivo";
    console.log(`El sector de deportes cambio de nombre a ${mi_periodico.getSectorDeportivo}`);
    console.log("-".repeat(20));
    const mi_radio = new Radio("Stereo 97", "97.3", ["Gravedad 0", "Rock en español", "Baladas del ayer"]);
    console.log(mi_radio.presentacion("Stereo 97"));
    console.log(`El presi de la radio es: ${Radio.presidente}`);
    console.log(`El nombre de la radio es ${mi_radio.getNombreRadio} y el dial es ${mi_radio.getDial}`);
    mi_radio.setDial = "97.9";
    console.log(`El nuevo dial de la radio es: ${mi_radio.getDial}`);
    console.log("Los programas que tenemos son:" + " " + mi_radio.getProgramas);
    console.log(`Los programas juveniles que tenemos son: ${mi_radio.filterProgramasJuveniles(mi_radio.getProgramas)}`);
})();
