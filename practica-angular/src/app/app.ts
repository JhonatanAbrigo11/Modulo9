import { Transacciones } from './components/transacciones/transacciones';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Perfil } from "./components/perfil/mi-perfil";
import { Prestamos } from './components/prestamos/prestamos';
import { Cuenta } from "./components/cuenta/cuenta";


@Component({
  selector: 'app-root',
  imports: [Prestamos, Transacciones, Cuenta, Perfil, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi nuevo proyecto de práctica');
}
