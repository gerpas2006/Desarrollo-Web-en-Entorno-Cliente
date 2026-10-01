var listaNumeros = []
var numeroVeces = 10

for (let i = 0; i < numeroVeces; i++) {
	let numero

	do {
		numero = Number(prompt(`Introduce el número`))
	} while (!Number.isFinite(numero))

	listaNumeros.push(numero)
}

var mayor = Math.max(...listaNumeros)
var menor = Math.min(...listaNumeros)
var media = listaNumeros.reduce((suma, numero) => suma + numero, 0) / listaNumeros.length

document.write (`
	Números introducidos: ${listaNumeros.join(', ')}
	Mayor: ${mayor}
	Menor: ${menor}
	Media: ${media}
`)
