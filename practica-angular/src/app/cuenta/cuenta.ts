import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css'
})
export class Cuenta {
  ngOnInit(){
    console.log("El componente de película esta arrancado")
  }

  ngOnDestroy(){
    console.log('El componente de película ha sido eliminado')
  }
}
