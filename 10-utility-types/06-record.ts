(()=> {
    type Colors = Record<string, string>;
    const colors:Colors = {
        white: "#fff",
        black: "#000",
        grey: "#ccc",
    }

    
    interface Fruta {
        type: string;
        name:string;
    }

    type typesFood = "fruit" | "vegetable";

    type FrutasCompletas = Record<typesFood, Fruta[]>;

    const res:FrutasCompletas = {
        "fruit": [
          { type: "fruit", name: "apple" },
          { type: "fruit", name: "banana" },
        ],
        "vegetable": [
          { type: "vegetable", name: "carrot" },
          { type: "vegetable", name: "potato" },
        ],

      }

    //Record sirve apra tipar objetos de una mnaera mas concreta y especifica 



})();