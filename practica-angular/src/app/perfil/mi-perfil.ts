import { Component } from '@angular/core';

@Component({
    selector:"mi-perfil",
    templateUrl:"./mi-perfil.html",
    styleUrl: "./mi-perfil.css"
})

export class Perfil{
    constructor(){
        alert("¡Bienvenido al perfil, estás dentro de la aplicación!")
        console.log("Se cargó el componente de perfil correctamente.")
        
    }
}

