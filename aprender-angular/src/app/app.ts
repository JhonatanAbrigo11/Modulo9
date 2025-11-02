import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from "./producto/producto";
import { Usuario } from './usuario/usuario';
import { Ventas } from "./ventas/ventas";

@Component({
  selector: 'app-root',
  imports: [Usuario, Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Este es mi primer Proyecto Angular');
}
