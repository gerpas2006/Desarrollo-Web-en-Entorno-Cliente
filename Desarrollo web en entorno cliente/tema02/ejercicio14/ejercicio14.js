var numero = Number(prompt('Dime un número que crees que corresponde a algun mes'))

if (numero >= 1 && numero <= 12){
    document.write('Correcto')
}else{
    document.write('No correcto')
}