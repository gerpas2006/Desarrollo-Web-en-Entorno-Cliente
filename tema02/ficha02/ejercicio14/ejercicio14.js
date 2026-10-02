var palabras = new Set()
var cantidadPalabras = Number(prompt("¿Cuántas palabras quieres introducir?"))

for (let index = 0; index < cantidadPalabras; index++) {
	var palabra = prompt("Introduce una palabra")
	palabras.add(palabra)
}

document.write("Se han introducido " + palabras.size + " palabras distintas")
