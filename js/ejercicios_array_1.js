'use strict'
var contenido = document.getElementById('contenido');
var contenido_titulos = document.getElementById('contenido_titulos');
/*
document.write('<h1 class="text-center text-primary mt-2">Pruebas de JS</h1>');
document.write('<h5 class="text-center text-primary">Abre la consola</h5>');
*/
contenido_titulos.innerHTML = '<h1 class="text-center text-primary mt-2">Pruebas de JS</h1>';
contenido_titulos.innerHTML += '<h5 class="text-center text-primary">Abre la consola</h5>';

var lenguajes = [];
var size_arreglo = prompt('Tamaño del arreglo');

contenido.innerHTML +=  '<h3>Lenguajes - Arreglo original</h3>';

// Pide un valor para cada indice del arreglo
for (let index = 0; index < size_arreglo; index++) {
    lenguajes.push(prompt('Introduce lenguaje: '));
}
console.log(lenguajes);

// Realiza una lista con los valores del array
contenido.innerHTML += '<ul>';
for (const lenguaje in lenguajes) {
    if (Object.hasOwnProperty.call(lenguajes, lenguaje)) {
        const element = lenguajes[lenguaje];
        contenido.innerHTML += '<li>'+element+'</li>';
    }
}
contenido.innerHTML += '</ul>';
lenguajes.pop();

// Escribe los valores del array ordenados alfabeticamente
contenido.innerHTML += '<h3>Ordenado - Alfabético</h3>';
var lenaguajes_ordenado = lenguajes.sort(); // Ordena el array en orden alfabetico

// Si el array es numerico y queremos ordenarlos de mayor a menor, debemos de usar una funcion de callback
// ↓↓↓↓
//var lenaguajes_ordenado = lenguajes.sort(function(a, b){ return a - b});

contenido.innerHTML += '<ul>';
for (const lenguaje in lenaguajes_ordenado) {
    if (Object.hasOwnProperty.call(lenaguajes_ordenado, lenguaje)) {
        const element = lenaguajes_ordenado[lenguaje];
        contenido.innerHTML += '<li>'+element+'</li>';
    }
}
contenido.innerHTML += '</ul>';

// Escribe los valores del array ordenados de menor a mayor
contenido.innerHTML += '<h3>Ordenado - Menor a Mayor</h3>';
var lenaguajes_ordenado = lenguajes.sort(function(a, b){ return a - b});

document.write('<ul>');
for (const lenguaje in lenaguajes_ordenado) {
    if (Object.hasOwnProperty.call(lenaguajes_ordenado, lenguaje)) {
        const element = lenaguajes_ordenado[lenguaje];
        contenido.innerHTML += '<li>'+element+'</li>';
    }
}
contenido.innerHTML += '</ul>';

contenido.innerHTML += '<h3>Reverse</h3>';
var lenaguajes_reverse = lenaguajes_ordenado.reverse();
contenido.innerHTML += '<ul>';
for (const lenguaje in lenaguajes_reverse) {
    if (Object.hasOwnProperty.call(lenaguajes_reverse, lenguaje)) {
        const element = lenaguajes_reverse[lenguaje];
        contenido.innerHTML += '<li>'+element+'</li>';
    }
}
contenido.innerHTML += '</ul>';

contenido.innerHTML += '<strong>El arreglo tiene: </strong>'+lenguajes.length+' elementos';

var valor_buscar = prompt('¿Que valor buscas?');

var posicion_index = lenguajes.findIndex(numero => numero == valor_buscar);

if (posicion_index && posicion_index != -1) {
    contenido.innerHTML += "<h1>Encontrado</h1>";
    contenido.innerHTML += "<h4>La posicion del valor es: "+posicion_index+"</h4>";
} else {
    contenido.innerHTML += "<h1>No Encontrado</h1>";
}
