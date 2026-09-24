var numero = Number(prompt('Dime un Número'))

if(numero == 0){
    document.write('El numero que has introducido es igual a 0')
}else if(numero != 0 && Number.isFinite(numero)){
    document.write('El número que has introducido es: '+numero)
}else if (!Number.isFinite(numero)){
    document.write('El numero que has introducido no es válido')
}