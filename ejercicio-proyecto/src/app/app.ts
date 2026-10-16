import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ejercicio01 } from './ejercicio01/ejercicio01';
import { Ejercicio03 } from './ejercicio03/ejercicio03';
import { Ejercicio06 } from './ejercicio06/ejercicio06';
import { Ejercicio05 } from './ejercicio07/ejercicio05';

@Component({
  imports: [FormsModule, Ejercicio01, Ejercicio03, Ejercicio06, Ejercicio05],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ejercicio-proyecto');
  protected mostrarEjercicio01 = false;
  protected nombre = '';
  protected mostrarEjercicio03 = false;
  protected mostrarEjercicio06 = false;
  protected Ejercicio07 = false;

}
