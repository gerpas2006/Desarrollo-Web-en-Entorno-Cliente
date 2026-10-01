const frase = prompt("Introduce una frase:");
const palabras = frase.split(" ");
const contador = {};

for (let i of palabras) {
    if (contador[i]) {
        contador[i]++;
    } else {
        contador[i] = 1;
    }
}

for (let palabra in contador) {
    document.write("La palabra '" + palabra + "' aparece " + contador[palabra] + " veces.<br>");
}