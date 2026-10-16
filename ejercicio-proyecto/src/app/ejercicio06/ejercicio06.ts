import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio06',
  styleUrl: './ejercicio06.css',
  templateUrl: './ejercicio06.html',
})
export class Ejercicio06 {
  
  nombreInput: string = '';
  descripcionInput: string = '';
  precioInput: number | null = null;

  // Estado del producto que se mostrará en la tarjeta
  productoCreado: { nombre: string; descripcion: string; precio: number } | null = null;

  /**
   * Guarda los datos del formulario y limpia los campos de entrada
   */
  guardarProducto(): void {
    if (!this.nombreInput.trim() || this.precioInput === null) {
      return;
    }

    this.productoCreado = {
      nombre: this.nombreInput,
      descripcion: this.descripcionInput,
      precio: this.precioInput
    };

    // Opcional: resetear formulario tras añadir
    this.nombreInput = '';
    this.descripcionInput = '';
    this.precioInput = null;
  }
}