import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
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
