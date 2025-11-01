import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'app-usuario',
  imports: [Ventas],
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
