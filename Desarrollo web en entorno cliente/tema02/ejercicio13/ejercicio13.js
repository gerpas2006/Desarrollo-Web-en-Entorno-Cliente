var numero1 = Number(prompt('Dime un número'))
var numero2 = Number(prompt('Dime otro número'))
var restaSegunUsuario = Number(prompt('Dime cual crees que es la resta de los dos números que me has dicho '+ numero1 +' - '+ numero2))
var sumaSegunUsuario = Number(prompt('Dime cual crees que es la suma de los dos números que me has dicho '+ numero1 +' + '+ numero2))

var restaCorrecta = numero1 - numero2
var sumaCorrecta = numero1 + numero2

if(restaSegunUsuario === restaCorrecta && sumaSegunUsuario === sumaCorrecta){
    document.write('Los resultados que has dicho son correctos')
}else{
    document.write('Los resultados que me has dicho son incorrectos el de la suma es '+sumaCorrecta+' y el de la resta es '+restaCorrecta)
}