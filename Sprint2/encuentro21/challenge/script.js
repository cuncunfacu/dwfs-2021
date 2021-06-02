// #2 Promedio

/**
 * Funcion que calcula el promedio de 5 numeros
 * @param {*} n1 
 * @param {*} n2 
 * @param {*} n3 
 * @param {*} n4 
 * @param {*} n5 
 * Devuelve el valor promedio
 */

let numero2 = Number(prompt("Ingrese número 2: "))
let numero3 = Number(prompt("Ingrese número 3: "))
let numero4 = Number(prompt("Ingrese número 4: "))
let numero1 = Number(prompt("Ingrese número 1: "))
let numero5 = Number(prompt("Ingrese número 5: "))



function promedio (n1, n2, n3, n4, n5) {
    alert((n1 + n2 + n3 + n4 + n5)/5)
}

promedio(numero1, numero2, numero3, numero4, numero5)
