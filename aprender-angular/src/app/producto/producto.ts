import { Component } from "@angular/core";

@Component(
   {
    selector: "mi-producto",
    templateUrl: "./producto.html",
    styleUrl:"./producto.css"
   } 
)

export class Producto {

   public nombre: string;
   public marca: string;
   public precio: number;
   public descripcion: string;

   constructor(){
      this.nombre = "PC PORTATIL 1"
      this.marca = "ASUS 1"
      this.precio = 457
      this.descripcion = "Este computador es muy potente 1"
      console.log('SE HA CARGADO EL COMPONENTE DEL PRODUCTO')

   }
}