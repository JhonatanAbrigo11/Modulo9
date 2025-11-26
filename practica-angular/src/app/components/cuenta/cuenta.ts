import { Component,Input } from '@angular/core';
import { Cliente } from '../../models/Cliente';
@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css'
})
export class Cuenta {
  @Input() nombreCliente = 'Jhonatan';
  public cliente : Cliente;
  constructor (){
    this.cliente = new Cliente(1,"Jhonatan","Abrigo","jhonatan@gmail.com",200)
  }
  ngOnInit(){
    console.log("El componente de película esta arrancado")
  }

  ngOnDestroy(){
    console.log('El componente de película ha sido eliminado')
  }
}
