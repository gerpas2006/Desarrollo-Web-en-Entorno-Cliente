import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio03',
  styleUrl: './ejercicio03.css',
  templateUrl: './ejercicio03.html',
})
export class Ejercicio03 {
  protected nuevaTarea = '';
  protected tareas: string[] = [];

  protected agregarTarea(): void {
    const tarea = this.nuevaTarea.trim();

    if (!tarea) {
      return;
    }

    this.tareas.push(tarea);
    this.nuevaTarea = '';
  }
}
