(() => {
    // las tres interfaces x se heredan automaticamente
    interface X {
        nombre: string;
    } 

    interface X {
        edad:number;
    }

    interface X {
        isSoltero: boolean;
    }

    const obj:X = {
        nombre:"Cris",
        edad:27,
        isSoltero: true,
    }
    // error, esto no se puede hacer con types
    // type Y = {
    //     nombre:string;
    // }

    // type Y = {
    //     edad: number;
    // }
})();