var a = Number(prompt('Dime el valor de a'))
var b = Number(prompt('Dime el valor de b'))
var c = Number(prompt('Dime el valor de c'))

var discriminante = b * b - 4 * a * c

if (a === 0) {
	document.write('No es una ecuación cuadrática')
} else if (discriminante < 0) {
	document.write('No tiene solución real')
} else {
	var raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a)
	var raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a)

	document.write('La primera raíz es: ' + raiz1 + '<br>')
	document.write('La segunda raíz es: ' + raiz2)
}
