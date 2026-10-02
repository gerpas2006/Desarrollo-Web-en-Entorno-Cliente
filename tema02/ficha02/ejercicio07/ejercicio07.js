var listaNotas = []
var numNotasPedidas = 10
var suma = 0

for (let index = 0; index < numNotasPedidas; index++) {
    var notasPedida = Number(prompt("Dime la primera nota"))
    listaNotas.push(notasPedida)
}

for (let index = 0; index < listaNotas.length; index++) {
    suma += listaNotas[index]
}

var mediaNotas = suma / listaNotas.length
var notaMasGrande = Math.max(...listaNotas)
var notaMasChica = Math.min(...listaNotas)

document.write("La media de todas las notas es "+ mediaNotas+ 
    " la nota más alta es "+ notaMasGrande+ " y la nota mas baja es "+notaMasChica)
