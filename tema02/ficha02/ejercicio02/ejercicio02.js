var listaNombres = []
var numeroVeces = 5

for (let i = 0; i < numeroVeces; i++) {
    var nombreGuardado = String(prompt("Introduce un nombre"))
    listaNombres.push(nombreGuardado)
}

document.write("Estos son todos los nombres que has introducido" + listaNombres)
document.write("<br>Estos son los nombres que has introducido ordenados alfabeticamente " + listaNombres.sort())
document.write("<br>Estos son los nombre ordenados inversamente" + listaNombres.reverse())