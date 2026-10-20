import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio03',
  styleUrl: './ejercicio03.css',
  templateUrl: './ejercicio03.html',
})
export class Ejercicio03 {
  colores = [
    { nombre: 'Azul', valor: '#bde0fe' },
    { nombre: 'Verde', valor: '#caffbf' },
    { nombre: 'Amarillo', valor: '#fdffb6' },
    { nombre: 'Rosa', valor: '#ffc6ff' },
  ];
  // Este color se recupera para que no vuelva al primero al recargar la página.
  colorActual = localStorage.getItem('ejercicio03-color') ?? this.colores[0].valor;
  // Indica cuántos pasos queremos movernos cuando usamos el botón de retroceder.
  numeroCambios = 1;
  // Guardamos el total de colores que se han ido eligiendo.
  cambiosRegistrados = 0;
  // Esta posición empieza en cero y va aumentando con cada color nuevo.
  posicionActual = 0;
  mensajeError = '';

  constructor() {
    // Si ya existe un estado del ejercicio, recuperamos el color de esa posición.
    const estado = history.state;

    if (estado?.ejercicio03) {
      this.colorActual = estado.color;
      this.cambiosRegistrados = estado.cambiosRegistrados;
      this.posicionActual = estado.posicionActual;
      this.numeroCambios = 1;
    } else {
      // La primera posición se prepara para que los siguientes colores se puedan guardar.
      history.replaceState(
        this.crearEstado(0, 0),
        '',
        window.location.href,
      );
    }

    localStorage.setItem('ejercicio03-color', this.colorActual);
  }

  cambiarColor(): void {
    // Al elegir otro color, avanzamos una posición en el historial.
    this.mensajeError = '';
    const posicion = this.posicionActual + 1;

    // Cada color nuevo se guarda como una entrada más del historial.
    history.pushState(
      this.crearEstado(posicion, posicion),
      '',
      window.location.href,
    );
    this.posicionActual = posicion;
    this.cambiosRegistrados = posicion;
    this.guardarColor();
  }

  volverAtras(): void {
    // Antes de movernos comprobamos que exista una posición anterior suficiente.
    if (this.numeroCambios > this.posicionActual) {
      this.mensajeError = 'No se puede retroceder tantos cambios.';
      return;
    }

    this.mensajeError = '';
    // history.go hace que también funcione la navegación real del navegador.
    history.go(-this.numeroCambios);
  }

  irAdelante(): void {
    // No dejamos avanzar más allá del último cambio guardado.
    if (this.posicionActual + this.numeroCambios > this.cambiosRegistrados) {
      this.mensajeError = 'No hay tantos cambios posteriores.';
      return;
    }

    this.mensajeError = '';
  // Un número positivo avanza y uno negativo retrocede en el historial.
    history.go(this.numeroCambios);
  }

  @HostListener('window:popstate', ['$event'])
  actualizarDesdeHistorial(evento: PopStateEvent): void {
    // Este evento también se dispara al usar las flechas del navegador.
    const estado = evento.state;

    if (!estado?.ejercicio03) {
      return;
    }

    this.colorActual = estado.color;
    this.cambiosRegistrados = estado.cambiosRegistrados;
    this.posicionActual = estado.posicionActual;
    this.mensajeError = '';
    // Guardamos también el color recuperado al movernos con el navegador.
    this.guardarColor();
  }

  private crearEstado(posicion: number, cambiosRegistrados: number) {
    return {
      ejercicio03: true,
      color: this.colorActual,
      posicionActual: posicion,
      cambiosRegistrados,
    };
  }

  private guardarColor(): void {
    // localStorage mantiene el último color incluso después de recargar.
    localStorage.setItem('ejercicio03-color', this.colorActual);
  }
}
