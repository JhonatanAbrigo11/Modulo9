import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/producto';
import { cambiaLetrasPipe } from '../../pipes/cambiaLetras';


@Component({
  selector: 'app-usuario',
  imports: [cambiaLetrasPipe, Ventas, Producto, LowerCasePipe, UpperCasePipe, DatePipe, TitleCasePipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {
  web = "https://amazon.com";
  redirigir= true;
  marcasAutos = [
    {id:1, nombre:"Toyota"},
    {id:2, nombre:"Kia"},
    {id:3, nombre:"Chevrolet"},
    {id:4, nombre:"Nissan"},
    {id:5, nombre:"Mazda"},
  ];

  usuario = {
    id:1,
    nombre: "Carlos Palacios",
    nick: "CarlosDev",
    rol: "otra cosa"
  }
  
  fecha = new Date(2030,12,25);

  ngOnInit(){
    this.marcasAutos = []
  }
  
cambioRedireccion (){
  if(this.redirigir == false){
    this.redirigir = true
  } else {
    this.redirigir=  false;
  }
    
}
}
