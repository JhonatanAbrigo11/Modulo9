import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  imports: [NgClass,NgStyle],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css'
})
export class Transacciones {
  public mostrar:string= "si"
  misEstilos={
    'background-color': 'brown',
    'padding': '10px',
    'font-weight': 'bold',
    'font-style': 'italic'
  };
}
