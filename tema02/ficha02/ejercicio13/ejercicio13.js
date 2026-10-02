var setNumeros = new Set()
var numPedidos = 15

for (let index = 0; index < numPedidos; index++) {
    var numero = Number(prompt("Introduce un número"))
    setNumeros.add(numero)    
}

var listaNumeros = Array.from(setNumeros)

document.write("Esta es la lista que se ha quedado "+listaNumeros)
