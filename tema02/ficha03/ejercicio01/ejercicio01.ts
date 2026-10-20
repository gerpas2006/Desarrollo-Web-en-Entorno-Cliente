interface Usuario {
	nombre: string;
	edad: number;
}

function saludarUsuario(usuario: Usuario): string {
	return `Hola, ${usuario.nombre}. Tienes ${usuario.edad} años.`;
}

console.log(saludarUsuario({nombre:"Pepe",edad:23}))