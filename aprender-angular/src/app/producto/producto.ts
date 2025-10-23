import { Component,OnInit } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";

@Component(
   {
    selector: "mi-producto",
    imports : [Pelicula,Usuario,Ventas],
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

   ngOnInit(){
      console.log("El componente esta inicializado")
   }

   ngDoCheck(){
      console.log('Componente actualizado')
   }

   cambiarNombre(){
      this.nombre= "Laptop ASUS"
   }
}