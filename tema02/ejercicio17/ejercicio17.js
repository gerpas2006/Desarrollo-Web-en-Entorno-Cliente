var base = Number(prompt('Dime la base'))
var exponente = Number(prompt('Dime el exponente'))

if (exponente === 0) {
	document.write('El resultado es: 1')
} else {
	var resultado = Math.pow(base, exponente)

	document.write('El resultado es: ' + resultado)
}
