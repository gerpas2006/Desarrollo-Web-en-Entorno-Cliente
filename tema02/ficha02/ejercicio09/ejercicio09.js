var listaPalabras = []
var numVeces = 5
var palabraMasGrande = ""
var palabraMasChica = "" 

for (let index = 0; index < numVeces; index++) {
    var palabraPedida = String(prompt("Dime una palabra"))
    listaPalabras.push(palabraPedida)
}

palabraMasChica = listaPalabras[0]

for (let index = 0; index < listaPalabras.length; index++) {
    if(listaPalabras[index].length > palabraMasGrande.length){
        palabraMasGrande = listaPalabras[index]
    }
}

for (let index = 0; index < listaPalabras.length; index++) {
    if(listaPalabras[index].length < palabraMasChica.length){
        palabraMasChica = listaPalabras[index]
    }
}

document.write("La palabra mas grande de las que me has dicho es "
    +palabraMasGrande+" y la mas chica es "+palabraMasChica)
