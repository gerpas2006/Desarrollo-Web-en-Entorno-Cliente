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

function operacionesConConjuntos() {
	var multiplosDeDos = new Set();
	var multiplosDeTres = new Set();

	for (var i = 0; i <= 30; i += 2) {
		multiplosDeDos.add(i);
	}

	for (var j = 0; j <= 30; j += 3) {
		multiplosDeTres.add(j);
	}

	// Estas operaciones combinan los conjuntos sin repetir valores.
	var union = new Set([...multiplosDeDos, ...multiplosDeTres]);
	var interseccion = new Set([...multiplosDeDos].filter(function (numero) {
		return multiplosDeTres.has(numero);
	}));
	var diferenciaPrimero = new Set([...multiplosDeDos].filter(function (numero) {
		return !multiplosDeTres.has(numero);
	}));
	var diferenciaSegundo = new Set([...multiplosDeTres].filter(function (numero) {
		return !multiplosDeDos.has(numero);
	}));
	var diferenciaSimetrica = new Set([
		...diferenciaPrimero,
		...diferenciaSegundo
	]);

	console.log("Mira el log para ver el resultado");
	console.log("%cUnión: " + Array.from(union).join(", "), "color: white; background: #1f6feb; padding: 2px 6px;");
	console.log("%cIntersección: " + Array.from(interseccion).join(", "), "color: white; background: #2da44e; padding: 2px 6px;");
	console.log("%cDiferencia del primero menos el segundo: " + Array.from(diferenciaPrimero).join(", "), "color: white; background: #d29922; padding: 2px 6px;");
	console.log("%cDiferencia del segundo menos el primero: " + Array.from(diferenciaSegundo).join(", "), "color: white; background: #cf222e; padding: 2px 6px;");
	console.log("%cDiferencia simétrica: " + Array.from(diferenciaSimetrica).join(", "), "color: white; background: #8250df; padding: 2px 6px;");
	alert("Mira el log para ver el resultado");
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
	var valores;
	var sonTodosNumericos = false;

	do {
		valores = prompt("Introduce una serie de números separados por comas:");
		valores = valores ? valores.split(",").map(function (valor) {
			return valor.trim();
		}) : [];

		sonTodosNumericos = valores.length > 0 && valores.every(function (valor) {
			return valor !== "" && !Number.isNaN(Number(valor));
		});

		if (!sonTodosNumericos) {
			alert("Debes introducir solo números separados por comas.");
		}
	} while (!sonTodosNumericos);

	var numeros = valores.map(function (valor) {
		return Number(valor);
	});

	// Contamos cuántas veces aparece cada número para quedarnos solo con los que salen una vez.
	var frecuencias = new Map();
	numeros.forEach(function (numero) {
		frecuencias.set(numero, (frecuencias.get(numero) || 0) + 1);
	});

	var valoresUnicos = numeros.filter(function (numero, indice, array) {
		return frecuencias.get(numero) === 1 && array.indexOf(numero) === indice;
	});

	if (valoresUnicos.length === 0) {
		alert("No hay valores que aparezcan solo una vez.");
		return;
	}

	var suma = valoresUnicos.reduce(function (acumulado, numero) {
		return acumulado + numero;
	}, 0);
	var media = suma / valoresUnicos.length;

	alert("Valores que aparecen una sola vez: " + valoresUnicos.join(", ") + "\nMedia de esos valores: " + media);
}

function detectarPalindromo() {
	var frase = prompt("Introduce una palabra o frase:");

	if (frase === null) {
		return;
	}

	// Quitamos tildes, espacios y signos para comparar solo letras.
	var textoLimpio = frase
		.toLowerCase()
		.replace(/[áàäâ]/g, "a")
		.replace(/[éèëê]/g, "e")
		.replace(/[íìïî]/g, "i")
		.replace(/[óòöô]/g, "o")
		.replace(/[úùüû]/g, "u")
		.replace(/[^a-zñ]/g, "");

	var textoInvertido = textoLimpio.split("").reverse().join("");

	if (textoLimpio === textoInvertido) {
		alert("Sí es un palíndromo.");
	} else {
		alert("No es un palíndromo.");
	}
}

function gestorListaTareas() {
	var tareas = [];
	var opcion = "";

	while (opcion !== "0") {
		opcion = prompt(
			"Gestor de tareas\n" +
			"1. Agregar tarea\n" +
			"2. Completar tarea\n" +
			"3. Eliminar tarea\n" +
			"4. Mostrar lista\n" +
			"5. Mostrar pendientes\n" +
			"0. Salir"
		);

		if (opcion === null) {
			return;
		}

		if (opcion === "1") {
			var nombreTarea = prompt("Escribe la tarea a agregar:");
			if (nombreTarea && nombreTarea.trim() !== "") {
				// Cada tarea se guarda con nombre y estado para poder marcarla después.
				tareas.push({ nombre: nombreTarea.trim(), completada: false });
				alert("Tarea agregada correctamente.");
			} else {
				alert("No se ha añadido ninguna tarea.");
			}
		} else if (opcion === "2") {
			if (tareas.length === 0) {
				alert("No hay tareas para completar.");
			} else {
				var indiceCompletar = Number(prompt("Introduce el número de la tarea que quieres completar (1-" + tareas.length + ")"));
				if (indiceCompletar >= 1 && indiceCompletar <= tareas.length) {
					tareas[indiceCompletar - 1].completada = true;
					alert("Tarea completada.");
				} else {
					alert("Número de tarea no válido.");
				}
			}
		} else if (opcion === "3") {
			if (tareas.length === 0) {
				alert("No hay tareas para eliminar.");
			} else {
				var indiceEliminar = Number(prompt("Introduce el número de la tarea que quieres eliminar (1-" + tareas.length + ")"));
				if (indiceEliminar >= 1 && indiceEliminar <= tareas.length) {
					tareas.splice(indiceEliminar - 1, 1);
					alert("Tarea eliminada.");
				} else {
					alert("Número de tarea no válido.");
				}
			}
		} else if (opcion === "4") {
			if (tareas.length === 0) {
				alert("No hay tareas guardadas.");
			} else {
				var listado = "";
				for (var i = 0; i < tareas.length; i++) {
					listado += (i + 1) + ". " + tareas[i].nombre + " - " + (tareas[i].completada ? "Completada" : "Pendiente") + "\n";
				}
				alert(listado);
			}
		} else if (opcion === "5") {
			var pendientes = "";
			for (var j = 0; j < tareas.length; j++) {
				if (!tareas[j].completada) {
					pendientes += (j + 1) + ". " + tareas[j].nombre + "\n";
				}
			}

			if (pendientes === "") {
				alert("No hay tareas pendientes.");
			} else {
				alert("Tareas pendientes:\n" + pendientes);
			}
		} else if (opcion !== "0") {
			alert("Opción no válida.");
		}
	}
}


