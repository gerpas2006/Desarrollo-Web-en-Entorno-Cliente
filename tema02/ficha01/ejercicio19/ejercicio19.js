var base1 = Number(prompt('Dime la base del primer triángulo'))
var altura1 = Number(prompt('Dime la altura del primer triángulo'))
var base2 = Number(prompt('Dime la base del segundo triángulo'))
var altura2 = Number(prompt('Dime la altura del segundo triángulo'))
var base3 = Number(prompt('Dime la base del tercer triángulo'))
var altura3 = Number(prompt('Dime la altura del tercer triángulo'))

var area1 = base1 * altura1 / 2
var area2 = base2 * altura2 / 2
var area3 = base3 * altura3 / 2

var baseMayor = base1
var alturaMayor = altura1
var areaMayor = area1

if (area2 > areaMayor) {
	baseMayor = base2
	alturaMayor = altura2
	areaMayor = area2
}

if (area3 > areaMayor) {
	baseMayor = base3
	alturaMayor = altura3
	areaMayor = area3
}

document.write('El triángulo con mayor superficie tiene una base de ' + baseMayor + ', una altura de ' + alturaMayor + ' y un área de ' + areaMayor)
