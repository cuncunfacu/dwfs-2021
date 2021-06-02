var dial = Number(prompt("Ingrese un dial"));
respuesta = "El dial no es una radio."

if (dial % 2 != 0 && dial >= 89.9 && dial < 107.9 && !isNaN(dial)) {
    respuesta = "El dial es una radio."
}
alert(respuesta)


















// --------------

// const CONSUMO = 15;
// const VOLUMEN = 45;

// var distancia = Number(prompt("Ingres km a recorrer..."));
// var respuesta = null

// if (isNaN(distancia)){
//     respuesta = "El valor ingresado no es válido";
// } else {
//     if(distancia/CONSUMO >= VOLUMEN) {
//         respuesta = "Deberá cargar Nafta."
//     } else {
//         respuesta = "LLegará sin cargar nafta"
//     }
// }
// alert(respuesta)
