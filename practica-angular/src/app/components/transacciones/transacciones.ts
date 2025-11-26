import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Transaccion } from '../../models/Transaccion';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-transacciones',
  imports: [NgClass,NgStyle,DatePipe, FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css'
})
export class Transacciones {
  public transaccionesList : Array<Transaccion>;
  public transaccion_1: string = "";
  constructor(){
  this.transaccionesList = [
      new Transaccion(1, new Date("2025-11-25"), "cobro", 20, "ingreso"),
      new Transaccion(2, new Date("2025-11-26"), "pago servicio de luz", 35, "egreso"),
      new Transaccion(3, new Date("2025-11-27"), "depósito bancario", 150, "ingreso"),
      new Transaccion(4, new Date("2025-11-28"), "compra víveres", 45.50, "egreso"),
      new Transaccion(5, new Date("2025-11-29"), "transferencia recibida", 80, "ingreso"),
      new Transaccion(6, new Date("2025-11-30"), "pago internet", 25, "egreso")
  ]
  }
  public mostrar:string= "si"
  misEstilos={
    'background-color': 'brown',
    'padding': '10px',
    'font-weight': 'bold',
    'font-style': 'italic'
  };

  ngDoCheck(){
    console.log(this.transaccion_1)
  }
}
