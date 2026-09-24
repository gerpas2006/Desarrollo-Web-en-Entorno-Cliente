var radio = Number(prompt('Dame el radio del círculo'))
var pi = 3.14;
function calcularAreaCirculo(pi,radio){
    return pi * radio ** 2
}

document.write('El área del círculo es ' + calcularAreaCirculo(pi,radio))