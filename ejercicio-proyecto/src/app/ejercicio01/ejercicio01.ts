import { Component, Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ejercicio01',
  styleUrl: './ejercicio01.css',
  templateUrl: './ejercicio01.html',
})
export class Ejercicio01 {
  @Input() nombre = '';
  
}
