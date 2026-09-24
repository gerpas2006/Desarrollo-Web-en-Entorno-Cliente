var numero1 = Number(prompt('Dime el primer número'))
var numero2 = Number(prompt('Dime el segundo número'))
var resultadoSuma = numero1 + numero2
if(resultadoSuma >0){
    document.write(`El resultado es ${resultadoSuma} y ese número es positivo`)
}else{
    document.write(`El resultado es ${resultadoSuma} y ese número es negativo`)

}