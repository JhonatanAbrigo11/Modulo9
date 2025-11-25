import { Component,OnInit } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";


@Component(
   {
    selector: "mi-producto",
    imports : [Pelicula],
    templateUrl: "./producto.html",
    styleUrl:"./producto.css"
   } 
)

export class Producto {

   public nombre: string;
   public marca: string;
   public precio: number;
   public descripcion: string;

   public mostrar_peliculas: boolean= true;
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

   ngAfterViewInit(){
      console.log("La vista esta cargada !")
   }

   ngDoCheck(){
      console.log('Componente actualizado')
   }


   cambiarNombre(){
      this.nombre= "Laptop ASUS"
   }

   ocultarPeliculas(valor: boolean){
      this.mostrar_peliculas= valor;
   }
}