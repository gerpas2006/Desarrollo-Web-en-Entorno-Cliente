var contador = 5
var listaNumeros = []

for (let index = 0; index < contador; index++) {
    var numeroPedido = Number(prompt("Dime un número"))   
    listaNumeros.push(numeroPedido) 
}

document.write("De los números que has introducido estos son los positivos "+ listaNumeros.filter(numero => numero > 0) + 
"<br> estos son los negativos" + listaNumeros.filter(numero => numero < 0)+
"<br> y estos son los que son igual a 0: " + listaNumeros.filter(numero => numero === 0))