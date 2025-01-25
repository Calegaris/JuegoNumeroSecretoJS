// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'juego del numero secreto'

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingresa un numero del 1 y 10'

let numeroSecreto = 0;
let intentos = 0
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto); //para ver el numero secreto en la consola y confirmar que funciona


function asignarTextoElemento(elemento, texto) { //pasamos a una funcion generica para reutilizar el codigo
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(typeof (numeroDeUsuario));
    // console.log(numeroDeUsuario);
    // console.log(typeof (numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(`Intento numero: ${intentos}`);
    //console.log(numeroDeUsuario === numeroSecreto) //para ver si el numero es doble igual tanto en valor como en tipo
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no adivino el numero
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');

        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random() * 10) + 1; se puede tener numeroSecreto como variable de bloque y como variable global
    //ya que no se esta reasignando el valor de la variable porque su alcance es solo dentro de la funcion.

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //aca lo hacemos directamente en el return sin necesidad de la variable
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se sortearon todos los numeros posibles');
    } else {
        //el numero generado esta incluido en la lista?
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }

    }



}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //reiniciar mensaje de reglas del juego
    condicionesIniciales();
    //generar un nuevo numero secreto aleatorio
    //reiniciar los intentos

    //desabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();
// asignarTextoElemento('h1', 'Juego del numero secreto');
// asignarTextoElemento('p', 'Ingresa un numero del 1 al 10');