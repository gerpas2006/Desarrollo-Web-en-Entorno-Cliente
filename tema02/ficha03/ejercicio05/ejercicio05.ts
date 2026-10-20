function procesarDato(dato: number | string): number | string {
	if (typeof dato === "number") {
		return dato * dato;
	}

	return dato.toUpperCase();
}

console.log(procesarDato(5));
console.log(procesarDato("hola mundo"));
