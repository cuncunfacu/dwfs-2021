// #5 pares e impares

var atempts = parseInt(prompt("Cuantos números desea ingresar?"));
var inputNum;
var npares = 0;
var nimpares = 0;


for (let index = 0; index < atempts; index++) {
    inputNum = parseInt(prompt("Ingrese un número: "));
    console.log("Numero ingresado: " + inputNum);

    if (inputNum % 2 == 0){
        npares = npares + 1;
    } else {
        nimpares = nimpares + 1;
    }
    console.log("Pares: " + npares + "---Impares: "+ nimpares);
}

if (npares > nimpares){
    alert("Mas pares");
} else {
    alert("Mas impares");
}