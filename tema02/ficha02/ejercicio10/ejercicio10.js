var numMax = 100;
var numMin = 1;
var numeroGenerar = 20;

var listaNumeros = Array.from(
    { length: numeroGenerar },
    () => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin
);

var listaFiltrada = listaNumeros.filter(numero => numero % 3 !== 0)

document.write("Estos son todos los números que han quedado despues de eliminar los multiplos de 3: "
    +listaFiltrada
)