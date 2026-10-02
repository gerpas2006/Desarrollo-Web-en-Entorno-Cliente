var listaNombres = []
var numNombresPedidos = 5
const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

for (let index = 0; index < numNombresPedidos; index++) {
    var nombrePedido = String(prompt("Dime un nombre"))
    listaNombres.push(nombrePedido)
}

var listaFiltrada = listaNombres.filter(nombre => vocales.includes(nombre[0]))

document.write("Estos son los nombres que empiezan por vocal "+listaFiltrada)