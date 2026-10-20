import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio02',
  styleUrl: './ejercicio02.css',
  templateUrl: './ejercicio02.html',
})
export class Ejercicio02 {
  minimo = 1;
  maximo = 10;
  cantidad = 5;
  permitirRepetidos = false;
  numeros: number[] = [];
  mensajeError = '';

  generarNumeros(): void {
    // Cada vez que pulsamos el botón empezamos una lista nueva.
    this.numeros = [];
    this.mensajeError = '';

    // Primero comprobamos que los valores introducidos tengan sentido.
    if (this.minimo > this.maximo) {
      this.mensajeError = 'El mínimo no puede ser mayor que el máximo.';
      return;
    }

    if (this.cantidad < 1) {
      this.mensajeError = 'La cantidad debe ser como mínimo 1.';
      return;
    }

    // Sumamos uno porque tanto el mínimo como el máximo también cuentan.
    const numerosDisponibles = this.maximo - this.minimo + 1;
    if (!this.permitirRepetidos && this.cantidad > numerosDisponibles) {
      this.mensajeError = 'No hay suficientes números para generarlos sin repetir.';
      return;
    }

    // Seguimos generando números hasta completar la cantidad que se ha pedido.
    while (this.numeros.length < this.cantidad) {
      // Math.random da un número entre 0 y 1, y con esta cuenta lo llevamos al rango elegido.
      const numero = Math.floor(Math.random() * numerosDisponibles) + this.minimo;

      // Si no se permiten repetidos, solo guardamos el número si todavía no estaba.
      if (this.permitirRepetidos || !this.numeros.includes(numero)) {
        this.numeros.push(numero);
      }
    }
  }
}
