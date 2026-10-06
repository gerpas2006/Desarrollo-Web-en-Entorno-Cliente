/*
Nombre: Germán Pastor Molero
Ciclo: DAW
Curso: 2
Módulo: Desarrollo Web en Entorno Cliente
*/

function analizarFrase() {
	var frase;
	var palabras;

	do {
		frase = prompt("Introduce una frase de al menos cinco palabras:");
		palabras = frase ? frase.trim().split(/\s+/) : [];

		if (palabras.length < 5) {
			alert("La frase debe tener al menos cinco palabras.");
		}
	} while (palabras.length < 5);

	var caracteresSinEspacios = frase.replace(/\s/g, "").length;
	var vocalesSustituidas = frase.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, "*");
	var posicion = 0;
	var elementosParesSustituidos = frase.replace(/\S/g, function (caracter) {
		posicion++;
		return posicion % 2 === 0 ? "_" : caracter;
	});

	console.log("Análisis de la frase");
	console.log("Caracteres sin espacios: " + caracteresSinEspacios);
	console.log("Vocales sustituidas: " + vocalesSustituidas);
	console.log("Elementos pares sustituidos: " + elementosParesSustituidos);
}

function ordenarYBuscarPalabras() {
	var palabras = [];

	for (var i = 0; i < 7; i++) {
		palabras.push(prompt("Introduce la palabra " + (i + 1) + " de 7:").trim());
	}

	var listado = palabras.filter(function (palabra) {
		return palabra.length > 4;
	});
	listado.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	console.log("Palabras de más de cuatro caracteres:");
	console.log(listado);

	var palabraBuscada = prompt("Introduce una palabra para buscarla:").trim();
	var estaEnLaLista = listado.some(function (palabra) {
		return palabra.toLowerCase() === palabraBuscada.toLowerCase();
	});

	if (estaEnLaLista) {
		console.info("La palabra está en el listado.");
	} else {
		listado.push(palabraBuscada);
		listado.sort(function (a, b) {
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
		console.log("La palabra no estaba en el listado. Listado actualizado:");
		console.log(listado);
	}
}

function notasAlumnos(){
    var alumnosNotas = new Map([
        ["Ana García", 8.50],
        ["Carlos Pérez", 6.25],
        ["María López", 9.75],
        ["Juan Torres", 4.00]
        ]);
    
    var nombre = prompt("Introduce el nombre del estudiante:")

    if(alumnosNotas.has(nombre)){
        var notaExistente = alumnosNotas.get(nombre);
        alert("La nota del alumnos con el nombre "+nombre+ " es: "+ notaExistente)
    }else{
        alert("El alumno con el nombre "+nombre+ " no esta registrado pero nos puedes decir su nota para introducirlo")
        var notaNueva = Number(prompt("Dime la nota del nuevo alumno con el nombre "+nombre))
        while (notaNueva < 0 || notaNueva > 10 || notaNueva === "") {
            notaNueva = prompt("Nota incorrecta. Introduce una nota entre 0 y 10:");
        } 
        alumnosNotas.set(nombre, Number(notaNueva));
        alert("Alumno registrado con éxito.");
    }

    var suma = 0;
    alumnosNotas.forEach(function(nota) {
    suma = suma + nota;
    });
    var media = suma / alumnosNotas.size;
    console.info("INFO: La nota media de la clase es: " + media.toFixed(2));
    var nombresOrdenados = Array.from(alumnosNotas.keys()).sort();
    alert("Alumnos ordenados alfabéticamente:\n" + nombresOrdenados.join(", "));  
}

function valoresUnicos(){
    var numerosSet = new Set();
    var numVeces = 5;

    for (let index = 0; index < numVeces; index++) {
        var numero = Number(prompt("Dime un número"))
        if(Number.isFinite(numero)){
            alert("Lo que has introducido no es un número")
        }else{
            numerosSet.add(numero)
        }
    }

    var media;
    var suma = 0;
    for (let index = 0; index < numerosSet.length; index++) {
        suma += index      
    }
    var media = suma / numerosSet.size
    alert("La media de todos los números es: "+media+ " y estos son todos los números que hay "+Array.from(notasAlumnos))
}


