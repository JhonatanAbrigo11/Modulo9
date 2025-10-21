import { Component } from '@angular/core';

@Component({
    selector:"mi-perfil",
    templateUrl:"./mi-perfil.html",
    styleUrl: "./mi-perfil.css"
})

export class Perfil{
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;
    constructor(){
        this.nombre="Jhonatan Abrigo",
        this.edad = 18;
        this.ocupacion= "Desarrollador de Software"
        this.direccion = "Cuenca-Ecuador"
        this.telefono= "09999999999"
        console.log("Se cargó el componente de perfil correctamente.")
        
    }
}

