interface Producto {
	nombre: string;
	precio: number;
}

const productos: Producto[] = [
	{ nombre: "Ana", precio: 28 },
	{ nombre: "Carlos", precio: 34 }
];

function calcularTotal(productos: Producto[]): number {
	return productos.reduce((total, producto) => total + producto.precio, 0);
}

const nombresProductos = productos.map((producto) => producto.nombre);
const precioTotal = calcularTotal(productos);

console.log("Productos:", nombresProductos.join(", "));
console.log("Precio total:", precioTotal, "€");