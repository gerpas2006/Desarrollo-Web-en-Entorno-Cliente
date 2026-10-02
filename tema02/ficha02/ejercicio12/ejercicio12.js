var numMax = 50;
var numMin = 1;
var numeroGenerar = 10;

var listaNumeros = Array.from(
    { length: numeroGenerar },
    () => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin
);

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

var listaFiltrada = listaNumeros.filter(numero => esPrimo(numero))

document.write("Esta es la lista que se ha quedado eliminando los que no son primo "+listaFiltrada)
