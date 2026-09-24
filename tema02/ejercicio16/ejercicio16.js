var dividendo = Number(prompt('Dime el dividendo'))
var divisor = Number(prompt('Dime el divisor'))

if (divisor === 0) {
	document.write('No se puede hacer la división')
} else {
	var cociente = Math.trunc(dividendo / divisor)
	var resto = dividendo % divisor

	document.write('El cociente es: ' + cociente + '<br>')
	document.write('El resto es: ' + resto)
}
