"use strict";
(() => {
    let variable = 123; // cualquier valor, no hay intellicence
    variable = "Cris";
    // inferencia de tipo
    console.log(variable.toUpperCase()); // sin errores, pero esta mal
})();
