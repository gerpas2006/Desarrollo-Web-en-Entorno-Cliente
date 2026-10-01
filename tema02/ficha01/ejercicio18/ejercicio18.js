var numero1 = Number(prompt('Dime el primer número'))
var numero2 = Number(prompt('Dime el segundo número'))
var numero3 = Number(prompt('Dime el tercer número'))

var numeros = [numero1, numero2, numero3]
numeros.sort(function (a, b) {
	return a - b
})

document.write('Los números ordenados de forma creciente son: ' + numeros[0] + ', ' + numeros[1] + ' y ' + numeros[2])
