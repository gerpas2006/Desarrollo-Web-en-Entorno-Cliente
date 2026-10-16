import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio05',
  styleUrl: './ejercicio05.css',
  templateUrl: './ejercicio05.html',
})
export class Ejercicio05 {

numero1: number | null = null;
  numero2: number | null = null;

  // Resultado de la operación y mensajes de error
  resultado: number | null = null;
  mensajeError: string = '';

  // Suma simple
  sumar(): void {
    if (this.validarCampos(false)) {
      this.resultado = Number(this.numero1) + Number(this.numero2);
    }
  }

  // Operaciones adicionales
  restar(): void {
    if (this.validarCampos(false)) {
      this.resultado = Number(this.numero1) - Number(this.numero2);
    }
  }

  multiplicar(): void {
    if (this.validarCampos(false)) {
      this.resultado = Number(this.numero1) * Number(this.numero2);
    }
  }

  dividir(): void {
    if (this.validarCampos(false)) {
      if (Number(this.numero2) === 0) {
        this.mensajeError = 'No se puede dividir entre cero.';
        this.resultado = null;
        return;
      }
      this.resultado = Number(this.numero1) / Number(this.numero2);
    }
  }

  raizCuadrada(): void {
    if (this.validarCampos(true)) {
      const num = Number(this.numero1);
      if (num < 0) {
        this.mensajeError = 'No se puede calcular la raíz cuadrada de un número negativo.';
        this.resultado = null;
        return;
      }
      this.resultado = Math.sqrt(num);
    }
  }

  /**
   * Valida la presencia de datos en las entradas.
   * @param soloPrimerNumero Si es true, ignora el segundo campo (para la raíz cuadrada).
   */
  private validarCampos(soloPrimerNumero: boolean): boolean {
    this.mensajeError = '';

    if (this.numero1 === null || this.numero1 === undefined) {
      this.mensajeError = 'Introduce el primer número.';
      this.resultado = null;
      return false;
    }

    if (!soloPrimerNumero && (this.numero2 === null || this.numero2 === undefined)) {
      this.mensajeError = 'Introduce el segundo número.';
      this.resultado = null;
      return false;
    }

    return true;
  }
}
