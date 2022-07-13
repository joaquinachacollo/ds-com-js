//////////////////// EJERCICIO 1 /////////////////////
let numero1  
let numero2 
let resultado  
let condicion 

do {
    numero1 = parseInt(prompt("ingrese su primer numero:"))
    numero2 = parseInt(prompt("ingrese su segundo numero:"))
    resultado = numero1 + numero2
    alert("el resultado es " + resultado)
    condicion = prompt("¿quiere continuar sumando?")
} while (condicion != "no");

alert("fin del programa")


//////////////////// EJERCICIO 2 /////////////////////
let texto = prompt("ingrese su texto:")
let valor = prompt("ingrese su numero:")
let union = texto + " " + valor
alert(union)
let pregunta = prompt("¿quiere seguir con el programa?")
while (pregunta != "no") {
    texto = prompt("ingrese su texto:")
    valor = prompt("ingrese su numero:")
    union = texto + " " + valor
    alert(union)
    pregunta = prompt("¿quiere seguir con el programa?")
}

alert("fin del programa")


////////////////// ejercicio 3 ///////////////////////

let numero = prompt("ingrese la cantidad de veces que sea repetir el mensaje:")

for (let i = 0; i < numero; i++) {
    console.log("hola")
}