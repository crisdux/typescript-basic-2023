"use strict";
const avenger = {
    natasha: "Scarlet Jhohanson",
    nick: "Samuel L. Jackson",
    steve: "Chris Evans",
    active: true,
};
const { nick, steve } = avenger;
console.log(nick);
const getSteve = (avenger) => {
    return `${avenger.steve} | Estado: ${avenger.active}`;
};
console.log(getSteve(avenger));
const getNatasha = ({ natasha, active }) => {
    return `${natasha} | Estado: ${active}`;
};
console.log(getNatasha(avenger));
const amigos = ["Pedro", "Juan", "Roberto"];
const { [2]: mejorAmigoDeNuevo } = amigos;
console.log(mejorAmigoDeNuevo);
