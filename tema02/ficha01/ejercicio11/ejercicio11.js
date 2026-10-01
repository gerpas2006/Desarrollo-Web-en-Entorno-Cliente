var numero1 = Number(prompt('Dime el primer número'))
var numero2 = Number(prompt('Dime el segundo número'))

var suma = numero1 + numero2
var multiplicacion = numero1 * numero2

if(suma>10 && multiplicacion> 50){
    document.write('Estos sí')
}else{
    document.write(`El resultado de la suma es ${suma} y el de la multiplicacion es  ${multiplicacion}`)
}
