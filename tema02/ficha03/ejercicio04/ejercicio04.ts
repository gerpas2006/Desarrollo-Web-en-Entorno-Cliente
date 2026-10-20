interface Usuario2 {
    nombre: string;
	correo: string;
    estado:boolean;
}

const listaUsuarios : Usuario2[] = [
    { nombre: "Ana", correo: "ana@ejemplo.com", estado: true },
    { nombre: "Luis", correo: "luis@ejemplo.com", estado: false },
    { nombre: "Marta", correo: "marta@ejemplo.com", estado: true }
];

function obtenerUsuariosActivos(usuarios: Usuario2[]): Usuario2[] {
    return usuarios.filter((usuario) => usuario.estado);
}

console.log(obtenerUsuariosActivos(listaUsuarios));

