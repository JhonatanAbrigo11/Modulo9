import { Component } from '@angular/core';
import { Cuenta } from "../cuenta/cuenta";
import { Transacciones } from "../transacciones/transacciones";


@Component({
    selector:"mi-perfil",
    templateUrl:"./mi-perfil.html",
    styleUrl: "./mi-perfil.css",
    imports: [Cuenta, Transacciones]
})

export class Perfil{
    nombreCLiente: string = 'Juan Perez'
    mensajeRecibido:string='';
    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;
    public mostrar_cuenta:boolean;
    constructor(){
        this.nombre="Jhonatan Abrigo",
        this.edad = 18;
        this.ocupacion= "Desarrollador de Software"
        this.direccion = "Cuenca-Ecuador"
        this.telefono= "09999999999"
        this.mostrar_cuenta= true;
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

    ngAfterViewInit(){
      console.log("La vista esta cargada !")
    }

    ocultarCuenta(valor:boolean){
        this.mostrar_cuenta=valor;
    }
    recibirMensaje(mensaje:string){
       this.mensajeRecibido = mensaje
    }
}

