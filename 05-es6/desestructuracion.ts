type Avenger = {
    natasha: string;
    nick: string;
    steve: string;
    active: boolean;
}

const avenger:Avenger = {
    natasha: "Scarlet Jhohanson",
    nick: "Samuel L. Jackson",
    steve: "Chris Evans",
    active: true,
}

const {nick, steve} = avenger;
console.log(nick);

const getSteve = (avenger:Avenger):string => {
    return `${avenger.steve} | Estado: ${avenger.active}`;
}

console.log(getSteve(avenger));

const getNatasha = ({natasha, active}:Avenger):string => {
    return `${natasha} | Estado: ${active}`;
}
console.log(getNatasha(avenger));

const amigos: Array<string> = ["Pedro", "Juan", "Roberto"];
const { [2]: mejorAmigoDeNuevo } = amigos;

console.log(mejorAmigoDeNuevo);