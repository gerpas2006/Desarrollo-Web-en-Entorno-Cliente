var listaNumPares = []

for (let i = 1; listaNumPares.length < 20; i++) {
    if (i % 2 === 0) {
        listaNumPares.push(i);
    }
}

document.write("Estos son los 20 primeros pares que hay "+ listaNumPares)