import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Theme = 'claro' | 'oscuro';

interface UserData {
  nombre: string;
  visitas: number;
  ultimaVisita: string;
  tema?: Theme;
}

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio05',
  styleUrl: './ejercicio05.css',
  templateUrl: './ejercicio05.html',
})
export class Ejercicio05 implements OnInit {
  // Datos que se muestran y se guardan mediante cookies.
  nombreCookies = '';
  visitasCookies = 0;
  ultimaVisitaCookies = '';
  temaCookies: Theme | '' = '';

  // Datos que se muestran y se guardan mediante localStorage.
  nombreLocalStorage = '';
  visitasLocalStorage = 0;
  ultimaVisitaLocalStorage = '';
  temaLocalStorage: Theme | '' = '';

  // Usamos claves diferentes para que cada almacenamiento sea independiente.
  private readonly cookieKey = 'ejercicio05-cookies';
  private readonly localStorageKey = 'ejercicio05-local-storage';

  ngOnInit(): void {
    // Recuperamos los datos antes de aumentar el número de visitas.
    const cookieData = this.readCookieData();
    const localStorageData = this.readLocalStorageData();
    const now = new Date().toLocaleString();

    this.nombreCookies = cookieData?.nombre ?? this.askForName();
    this.visitasCookies = (cookieData?.visitas ?? 0) + 1;
    this.ultimaVisitaCookies = cookieData?.ultimaVisita ?? 'Primera visita';
    this.temaCookies = cookieData?.tema ?? '';

    this.nombreLocalStorage = localStorageData?.nombre ?? this.askForName();
    this.visitasLocalStorage = (localStorageData?.visitas ?? 0) + 1;
    this.ultimaVisitaLocalStorage = localStorageData?.ultimaVisita ?? 'Primera visita';
    this.temaLocalStorage = localStorageData?.tema ?? '';

    // Guardamos la visita actual después de conservar la fecha de la anterior.
    this.saveCookieData({
      nombre: this.nombreCookies,
      visitas: this.visitasCookies,
      ultimaVisita: now,
      tema: this.temaCookies || undefined,
    });
    this.saveLocalStorageData({
      nombre: this.nombreLocalStorage,
      visitas: this.visitasLocalStorage,
      ultimaVisita: now,
      tema: this.temaLocalStorage || undefined,
    });

    this.applyTheme();
  }

  cambiarTemaCookies(): void {
    // Actualizamos la preferencia elegida en la cookie y aplicamos el tema.
    this.saveCookieData({
      nombre: this.nombreCookies,
      visitas: this.visitasCookies,
      ultimaVisita: new Date().toLocaleString(),
      tema: this.temaCookies || undefined,
    });
    this.applyTheme();
  }

  cambiarTemaLocalStorage(): void {
    // La preferencia de localStorage tendrá prioridad en toda la aplicación.
    this.saveLocalStorageData({
      nombre: this.nombreLocalStorage,
      visitas: this.visitasLocalStorage,
      ultimaVisita: new Date().toLocaleString(),
      tema: this.temaLocalStorage || undefined,
    });
    this.applyTheme();
  }

  borrarCookies(): void {
    // Una fecha pasada elimina la cookie del navegador.
    document.cookie = `${this.cookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    this.nombreCookies = '';
    this.visitasCookies = 0;
    this.ultimaVisitaCookies = '';
    this.temaCookies = '';
    this.applyTheme();
  }

  borrarLocalStorage(): void {
    // Eliminamos todos los datos mostrados y almacenados del componente.
    localStorage.removeItem(this.localStorageKey);
    this.nombreLocalStorage = '';
    this.visitasLocalStorage = 0;
    this.ultimaVisitaLocalStorage = '';
    this.temaLocalStorage = '';
    this.applyTheme();
  }

  private askForName(): string {
    // Solo llegamos aquí cuando el almacenamiento todavía no tiene un nombre.
    const name = window.prompt('¿Cuál es tu nombre?');
    return name?.trim() || 'Usuario';
  }

  private readCookieData(): UserData | null {
    // Las cookies se guardan como texto, por eso hay que decodificarlas y parsearlas.
    const cookie = document.cookie
      .split('; ')
      .find((item) => item.startsWith(`${this.cookieKey}=`));

    if (!cookie) {
      return null;
    }

    try {
      return JSON.parse(decodeURIComponent(cookie.split('=').slice(1).join('='))) as UserData;
    } catch {
      return null;
    }
  }

  private readLocalStorageData(): UserData | null {
    // Si el contenido no es JSON válido, empezamos con un estado vacío.
    const storedData = localStorage.getItem(this.localStorageKey);

    if (!storedData) {
      return null;
    }

    try {
      return JSON.parse(storedData) as UserData;
    } catch {
      return null;
    }
  }

  private saveCookieData(data: UserData): void {
    // La cookie caduca exactamente un día después de guardarse.
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${this.cookieKey}=${encodeURIComponent(JSON.stringify(data))}; expires=${expires}; path=/`;
  }

  private saveLocalStorageData(data: UserData): void {
    // localStorage no caduca, así que conserva los datos hasta que se borren.
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  private applyTheme(): void {
    // La elección de localStorage gana cuando existe; la cookie actúa como alternativa.
    const theme = this.temaLocalStorage || this.temaCookies;
    document.documentElement.dataset['theme'] = theme || 'claro';
  }
}
