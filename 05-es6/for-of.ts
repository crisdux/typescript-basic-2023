type Perro = {
    nombre:string;
    edad:number;
    isCola: boolean;
};

const boby:Perro= {
    nombre:"boby",
    edad:5,
    isCola:true,
}

const cachu:Perro= {
    nombre:"cachu",
    edad:1,
    isCola:false,
}

const firu:Perro= {
    nombre:"firu",
    edad:3,
    isCola:true,
}


const arrPerros = [boby, cachu, firu];
for (const {nombre} of arrPerros) {
    console.log(nombre)
}