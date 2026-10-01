var numMax = 100;
var numMin = 1;
var numeroGenerar = 20;

var listaNumeros = Array.from(
    { length: numeroGenerar },
    () => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin
);

var listaSinPares = listaNumeros.filter(numero => numero % 2 !== 0);

document.write("La lista de números generados ha quedado así eliminando los pares: " + listaSinPares);
