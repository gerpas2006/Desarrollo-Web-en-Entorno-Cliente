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

	// Quito los espacios y cuento los caracteres que quedan.
	var caracteresSinEspacios = frase.replace(/\s/g, "").length;
	// Cambio todas las vocales por asteriscos, también las que llevan tilde.
	var vocalesSustituidas = frase.replace(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g, "*");
	var posicion = 0;
	// Con \S ignoro los espacios y cuento solo los caracteres de la frase.
	var elementosParesSustituidos = frase.replace(/\S/g, function (caracter) {
		posicion++;
		return posicion % 2 === 0 ? "_" : caracter;
	});

	console.log("%cAnálisis de la frase", "color: white; background: #1f6feb; padding: 4px 8px; font-weight: bold;");
	console.log("%cCaracteres sin espacios: " + caracteresSinEspacios, "color: #1f6feb; font-weight: bold;");
	console.log("%cVocales sustituidas: " + vocalesSustituidas, "color: #cf222e; font-weight: bold;");
	console.log("%cElementos pares sustituidos: " + elementosParesSustituidos, "color: #2da44e; font-weight: bold;");
}

function ordenarYBuscarPalabras() {
	var palabras = [];

	for (var i = 0; i < 7; i++) {
		palabras.push(prompt("Introduce la palabra " + (i + 1) + " de 7:").trim());
	}

	// Me quedo solo con las palabras que tienen más de cuatro letras.
	var listado = palabras.filter(function (palabra) {
		return palabra.length > 4;
	});
	// Paso las palabras a minúsculas para ordenarlas sin tener en cuenta las mayúsculas.
	listado.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	console.log("Palabras de más de cuatro caracteres:");
	console.log(listado);

	var palabraBuscada = prompt("Introduce una palabra para buscarla:").trim();
	// Miro si la palabra está en la lista, da igual si se escribe en mayúsculas o minúsculas.
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

	// Uno los dos conjuntos y no se repiten los números.
	var union = new Set([...multiplosDeDos, ...multiplosDeTres]);
	// Aquí me quedo con los números que aparecen en los dos conjuntos.
	var interseccion = new Set([...multiplosDeDos].filter(function (numero) {
		return multiplosDeTres.has(numero);
	}));
	// Saco los números del primer conjunto que no aparecen en el segundo.
	var diferenciaPrimero = new Set([...multiplosDeDos].filter(function (numero) {
		return !multiplosDeTres.has(numero);
	}));
	// Saco los números del segundo conjunto que no aparecen en el primero.
	var diferenciaSegundo = new Set([...multiplosDeTres].filter(function (numero) {
		return !multiplosDeDos.has(numero);
	}));
	// Junto las dos diferencias para tener los números que solo están en un conjunto.
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

	// Uso un Map para apuntar cuántas veces sale cada número.
	var frecuencias = new Map();
	numeros.forEach(function (numero) {
		frecuencias.set(numero, (frecuencias.get(numero) || 0) + 1);
	});

	// Me quedo con los números que aparecen una sola vez.
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

	// Limpio el texto: lo paso a minúsculas y quito tildes, espacios y signos.
	var textoLimpio = frase
		.toLowerCase()
		.replace(/[áàäâ]/g, "a")
		.replace(/[éèëê]/g, "e")
		.replace(/[íìïî]/g, "i")
		.replace(/[óòöô]/g, "o")
		.replace(/[úùüû]/g, "u")
		.replace(/[^a-zñ]/g, "");

	// Separo el texto, le doy la vuelta y lo vuelvo a juntar.
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

		switch (opcion) {
			case "1":
				var nombreTarea = prompt("Escribe la tarea a agregar:");
				if (nombreTarea && nombreTarea.trim() !== "") {
					var nombreLimpio = nombreTarea.trim();
					var tareaRepetida = false;

					for (var index = 0; index < tareas.length; index++) {
						if (tareas[index].nombre.toLowerCase() === nombreLimpio.toLowerCase()) {
							tareaRepetida = true;
						}
					}

					if (tareaRepetida) {
						alert("Ya hay una tarea con ese nombre.");
					} else {
						tareas.push({ nombre: nombreLimpio, completada: false });
						alert("Tarea agregada correctamente.");
					}
				} else {
					alert("No se ha añadido ninguna tarea.");
				}
				break;

			case "2":
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
				break;

			case "3":
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
				break;

			case "4":
				if (tareas.length === 0) {
					alert("No hay tareas guardadas.");
				} else {
					var listado = "";
					for (var i = 0; i < tareas.length; i++) {
						listado += (i + 1) + ". " + tareas[i].nombre + " - " + (tareas[i].completada ? "Completada" : "Pendiente") + "\n";
					}
					alert(listado);
				}
				break;

			case "5":
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
				break;

			case "0":
				break;

			default:
				alert("Opción no válida.");
		}
	}
}


