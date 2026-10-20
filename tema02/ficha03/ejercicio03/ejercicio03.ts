interface Punto2D {
	x: number;
	y: number;
}

interface Punto3D {
	x: number;
	y: number;
	z: number;
}

function calcularDistancia2D(primerPunto: Punto2D, segundoPunto: Punto2D): number {
	return Math.hypot(
		segundoPunto.x - primerPunto.x,
		segundoPunto.y - primerPunto.y
	);
}

function calcularDistancia3D(primerPunto: Punto3D, segundoPunto: Punto3D): number {
	return Math.hypot(
		segundoPunto.x - primerPunto.x,
		segundoPunto.y - primerPunto.y,
		segundoPunto.z - primerPunto.z
	);
}

const puntoA: Punto2D = { x: 0, y: 0 };
const puntoB: Punto2D = { x: 3, y: 4 };

const puntoC: Punto3D = { x: 0, y: 0, z: 0 };
const puntoD: Punto3D = { x: 2, y: 3, z: 6 };

console.log("Distancia en 2D:", calcularDistancia2D(puntoA, puntoB));
console.log("Distancia en 3D:", calcularDistancia3D(puntoC, puntoD));
