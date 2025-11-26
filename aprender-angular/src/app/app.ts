import { Padre } from './components/padre/padre';
import { Usuario } from './components/usuario/usuario';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Ventas } from "./components/ventas/ventas";
import { config } from './models/config';
import { Cine } from './components/cine/cine';

@Component({
  selector: 'app-root',
  imports: [Cine,Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer Proyecto Angular');

  titulo = config.title
  description = config.description
}
