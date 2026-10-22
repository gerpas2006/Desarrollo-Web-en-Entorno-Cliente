import { Component, signal } from '@angular/core';
import { FechaHoraComponent } from './fecha-hora-component/fecha-hora-component';
import { NumeroAleatorioComponent } from './numero-aleatorio-component/numero-aleatorio-component';
import { Ejercicio03 } from './ejercicio03/ejercicio03';
import { Ejercicio04 } from './ejercicio04/ejercicio04';

@Component({
  imports: [FechaHoraComponent, NumeroAleatorioComponent, Ejercicio03, Ejercicio04],
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
