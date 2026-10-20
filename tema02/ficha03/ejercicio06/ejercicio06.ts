interface Tarea{
    titulo: string;
    descripcion: string;
    duracionEstimada: number;
    estado:boolean;
}

const listaTareas : Tarea[] = [
    { titulo: "Tarea 1", descripcion: "Descripción de la tarea 1", duracionEstimada: 2, estado: true },
    { titulo: "Tarea 2", descripcion: "Descripción de la tarea 2", duracionEstimada: 3, estado: false },
    { titulo: "Tarea 3", descripcion: "Descripción de la tarea 3", duracionEstimada: 1, estado: true }
];

function agregarTarea(tareas: Tarea[], nuevaTarea: Tarea): Tarea[] {
    if (tareas.some((tarea) => tarea.titulo === nuevaTarea.titulo)) {
        return tareas;
    }
    return [...tareas, nuevaTarea];
}

function eliminarTarea(tareas: Tarea[], titulo: string): Tarea[] {
    return tareas.filter((tarea) => tarea.titulo !== titulo);
}

function modificarTarea(tareas: Tarea[], titulo: string, cambios: Tarea): Tarea[] {
    return tareas.map((tarea) => tarea.titulo === titulo ? cambios : tarea);
}


