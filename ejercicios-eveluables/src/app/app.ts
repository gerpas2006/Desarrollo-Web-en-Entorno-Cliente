import { Component, signal } from '@angular/core';
import { Ejercicio01 } from './ejercicio01/ejercicio01';
import { Ejercicio02 } from './ejercicio02/ejercicio02';
import { Ejercicio03 } from './ejercicio03/ejercicio03';
import { Ejercicio04 } from './ejercicio04/ejercicio04';

@Component({
  imports: [Ejercicio01, Ejercicio02, Ejercicio03, Ejercicio04],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ejercicios-eveluables');
  mostrarEjercicio01 = false;
  mostrarEjercicio02 = false;
  mostrarEjercicio03 = false;
  mostrarEjercicio04 = false;

  abrirEjercicio01(): void {
    this.mostrarEjercicio01 = true;
  }
}
