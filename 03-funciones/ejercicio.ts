(() => {

// Objetos
const batimovil:Batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };

  type Batimovil= {
    carroceria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
  };
  
  const bumblebee:Bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };

type Bumblebee = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
}

  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:Villanos[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];

  type Villanos = {
    nombre:string;
    edad?:number;
    mutante:boolean;
  }
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  const charles:Charles = {
    poder:"psiquico",
    estatura: 1.78
  };

  type Charles = {
    poder:string;
    estatura: number;
  }
  
  const apocalipsis:Apocalisis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }

  type Apocalisis = {
    lider: boolean;
    miembros: string[];
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique:Charles | Apocalisis;
  
  mystique = charles;
  mystique = apocalipsis;
  
})();