import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css'
})
export class Pelicula {
  ngOnInit(){
    console.log("El componente de película esta arrancado")
  }

  ngOnDestroy(){
    console.log('El componente de película ha sido eliminado')
  }
}
