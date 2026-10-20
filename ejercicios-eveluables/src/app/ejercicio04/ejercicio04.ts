import { Component, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ejercicio04',
  styleUrl: './ejercicio04.css',
  templateUrl: './ejercicio04.html',
})
export class Ejercicio04 implements OnDestroy {
  // Guardamos la referencia para poder mover y cerrar la ventana después.
  ventanaHija: Window | null = null;
  mensajeError = '';
  // Este intervalo sirve para enterarnos si el usuario cierra la ventana a mano.
  comprobarVentana?: ReturnType<typeof setInterval>;

  abrirVentana(): void {
    this.mensajeError = '';

    // Si ya hay una ventana abierta, no creamos otra.
    if (this.ventanaHija && !this.ventanaHija.closed) {
      return;
    }

    // Abrimos una ventana vacía con el tamaño que pide el ejercicio.
    this.ventanaHija = window.open(
      '',
      'ventana-ejercicio-04',
      'width=400,height=400',
    );

    if (!this.ventanaHija) {
      this.mensajeError = 'El navegador ha bloqueado la ventana hija.';
      return;
    }

    // Comprobamos cada poco tiempo si el usuario la ha cerrado directamente.
    this.comprobarVentana = setInterval(() => {
      if (this.ventanaHija?.closed) {
        this.ventanaHija = null;
        this.pararComprobacion();
      }
    }, 250);
  }

  moverVentana(direccion: 'arriba' | 'abajo' | 'izquierda' | 'derecha'): void {
    // No intentamos mover una ventana que se haya cerrado.
    if (!this.ventanaHija || this.ventanaHija.closed) {
      return;
    }

    const movimientos = {
      arriba: [0, -100],
      abajo: [0, 100],
      izquierda: [-100, 0],
      derecha: [100, 0],
    } as const;
    // Cada dirección indica cuánto movernos en horizontal y en vertical.
    const [horizontal, vertical] = movimientos[direccion];

    // moveBy desplaza la ventana desde la posición en la que se encuentra.
    this.ventanaHija.moveBy(horizontal, vertical);
    this.ventanaHija.focus();
  }

  cerrarVentana(): void {
    // Cerramos la ventana desde el botón y quitamos su referencia.
    if (this.ventanaHija && !this.ventanaHija.closed) {
      this.ventanaHija.close();
    }

    this.ventanaHija = null;
    this.pararComprobacion();
  }

  ngOnDestroy(): void {
    // Al salir del ejercicio también dejamos todo limpio.
    this.cerrarVentana();
  }

  private pararComprobacion(): void {
    if (this.comprobarVentana) {
      // Paramos el intervalo para que no siga ejecutándose sin necesidad.
      clearInterval(this.comprobarVentana);
      this.comprobarVentana = undefined;
    }
  }
}
