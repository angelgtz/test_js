'use strict'

function sumar() {
    let num1 = 5;
    let num2 = 10;
    let suma = num1 + num2;

    return suma;
}

var boton = document.getElementById('btn_prueba');
var div = document.getElementById('div_principal');

boton.addEventListener('click', function() {
    var suma = sumar();
    div.innerText('La suma es: '+suma);
   alert('Saludos');
   console.log('Saludos');
});

console.log(sumar());