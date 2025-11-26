import { FormsModule } from '@angular/forms';
import { cambiaAsciiPipe } from '../../pipes/cambiarAssci';
import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe,TitleCasePipe,DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { Transacciones } from "../transacciones/transacciones";
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-prestamos',
  imports: [cambiaAsciiPipe,NgClass, Transacciones,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,FormsModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class Prestamos {
  fechaActual=new Date()
  web = "https://open.spotify.com"
  redirigir = false;
  public  monto:number=0;
  public estado:string=""

  prestamosList=[
    {id:1, monto:232,estado:"Aprobado"},
    {id:2, monto:2022,estado:"Pendiente"},
    {id:3, monto:4222,estado:"Aprobado"},
    {id:4, monto:1222,estado:"Pendiente"},
    {id:5, monto:1422,estado:"Aprobado"},
    {id:6, monto:3422,estado:"Pendiente"}
  ];

  prestamo={
    id: 1,
    tipo:"otro",
    interes: 10,
  } 

  deletePrestamo(indice:number){
    this.prestamosList.splice(indice,1)
  }

  addPrestamo(){
    let identificador = this.prestamosList[this.prestamosList.length - 1].id + 1
    let nuevoPrestamo = {
        id: identificador,
        monto: this.monto,
        estado: this.estado  
    };
    this.prestamosList.push(nuevoPrestamo)
  }

}
