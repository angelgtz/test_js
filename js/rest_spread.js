'use strict'

// Parametros tipo REST
/**
 * 
 * @param {*} fruta1 
 * @param {*} fruta2 
 * @param  {...any} restoFrutas 
 */
function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log(fruta1);
    console.log(fruta2);
    console.log(restoFrutas);
}

listadoFrutas('Manzana', 'Jicama', 'Melon', 'Sandia', 'Pera');

// Parametros tipo SPREAD
/**
 * Se puede pasar un arreglo de como primer parametro, pero con los "..." asiganara los datos del array segun su posicion a los argunmentos de la funcion
 */
console.log('*************************************');

/**
 * 
 * @param {*} auto1 
 * @param {*} auto2 
 * @param  {...any} restoAutos 
 */
function listaAutos(auto1, auto2, ...restoAutos) {
    console.log(auto1);
    console.log(auto2);
    console.log(restoAutos);
}
var arr_autos = ['VW','BMW','Sonic','Tesla','Crs','Ferrari'];
listaAutos(...arr_autos, 'Bent', 'Pors');