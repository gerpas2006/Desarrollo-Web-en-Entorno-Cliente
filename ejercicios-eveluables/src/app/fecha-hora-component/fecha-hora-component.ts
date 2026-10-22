import { Component, OnDestroy, OnInit } from '@angular/core';

interface Ciudad {
  nombre: string;
  zonaHoraria: string;
}

@Component({
  imports: [],
  selector: 'app-fecha-hora-component',
  styleUrl: './fecha-hora-component.css',
  templateUrl: './fecha-hora-component.html',
})
export class FechaHoraComponent implements OnInit, OnDestroy {
  // Guardamos la fecha en una variable para poder actualizarla desde el intervalo.
  fechaActual = new Date();
  // Empieza activado porque suele ser el formato más fácil de leer.
  formato24Horas = true;
  // Londres es la ciudad que aparece seleccionada al abrir el ejercicio.
  ciudadSeleccionada = 'Europe/London';
  intervalo?: ReturnType<typeof setInterval>;

  ciudades: Ciudad[] = [
    { nombre: 'Londres', zonaHoraria: 'Europe/London' },
    { nombre: 'Nueva York', zonaHoraria: 'America/New_York' },
    { nombre: 'Tokio', zonaHoraria: 'Asia/Tokyo' },
  ];

  ngOnInit(): void {
    // Cada segundo creamos una fecha nueva para que el reloj no se quede parado.
    this.intervalo = setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Al cerrar el componente paramos el intervalo para que no siga ejecutándose.
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  cambiarFormato(): void {
    // El símbolo ! cambia true por false y false por true.
    this.formato24Horas = !this.formato24Horas;
  }

  cambiarCiudad(evento: Event): void {
    // Del evento del select sacamos el valor de la zona horaria elegida.
    const select = evento.target as HTMLSelectElement;
    this.ciudadSeleccionada = select.value;
  }

  mostrarHora(fecha: Date, zonaHoraria?: string): string {
    // Estas opciones dejan la fecha con el formato que pide el ejercicio.
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: !this.formato24Horas,
    };

    if (zonaHoraria) {
      // Si llega una zona horaria, mostramos la hora de esa ciudad.
      opciones.timeZone = zonaHoraria;
    }

    // Intl se encarga de poner los números y el formato de 12 o 24 horas.
    return new Intl.DateTimeFormat('es-ES', opciones)
      .format(fecha)
      .replace(',', '');
  }

  nombreCiudadSeleccionada(): string {
    // Buscamos el nombre para enseñar "Londres" y no solo su código horario.
    return this.ciudades.find(
      (ciudad) => ciudad.zonaHoraria === this.ciudadSeleccionada,
    )?.nombre ?? '';
  }
}

