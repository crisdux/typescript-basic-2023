(() => {
    let variable:any = 123; // cualquier valor, no hay intellicence
    variable = "Cris"
    // inferencia de tipo
    console.log((variable as string).toUpperCase()); // sin errores, pero esta mal
    
})();