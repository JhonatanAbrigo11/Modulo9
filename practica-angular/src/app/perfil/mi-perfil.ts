import { Component } from '@angular/core';
import { Cuenta } from "../cuenta/cuenta";
import { Prestamos } from "../prestamos/prestamos";
import { Transacciones } from "../transacciones/transacciones";

@Component({
    selector:"mi-perfil",
    templateUrl:"./mi-perfil.html",
    styleUrl: "./mi-perfil.css",
    imports: [Cuenta, Prestamos, Transacciones]
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

    ngDoCheck(){
        console.log('Compoenete Actualizado')
    }

    cambiarEdad(){
        this.edad= 43
    }
    cambiarDireccion(){
        this.direccion= 'Nueva dirección'
    }
}

