import { Component } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-prestamos',
  imports: [NgClass],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {
  web = "https://open.spotify.com"
  redirigir = false;

  prestamosList=[
    {id:1, monto:232,estado:"Aprobado"},
    {id:2, monto:2022,estado:"Pendiente"},
    {id:3, monto:4222,estado:"Aprobado"},
    {id:4, monto:1222,estado:"Pendiente"},
    {id:5, monto:1422,estado:"Aprobado"},
    {id:6, monto:3422,estado:"Pendiente"}
  ]
}
