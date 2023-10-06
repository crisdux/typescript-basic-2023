(() => {
    const nombre:string = "Cris";
    console.log(nombre);
    console.log(nombre[0]);
    console.log(nombre[10]?.toUpperCase()  ?? `No existe la posición 10 en nombre`);
    // .? optional chaning -> 
        /*
            si nombre[10] es nullish (null o undefined), entonces: undefined.toUpperCase(), esto genera un error
            si nombre[10] es nullish (null o undefined), entonces: undefined?.toUpperCase(), esto regresa undefined y no un error

        */
    // ?? nullish coalesing 
        /*
            si nombre[10]?.toUpperCase() es nullish, entonces regreso "No existe la posición 10 en nombre"
            si nombre[10]?.toUpperCase() NO es nullish, entonces regreso el valor que regresa nombre[10]?.toUpperCase()
        */
})();