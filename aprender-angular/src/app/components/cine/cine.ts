import { Pelicula } from './../../models/pelicula';
import { Component } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cine',
  imports: [FormsModule],
  templateUrl: './cine.html',
  styleUrl: './cine.css'
})
export class Cine {

  public titulo: string;
  public peliculas: Array<Pelicula>

  public peliculasSinDatos: string [] =[];

  //Para trabajar con formularios y binding bidireccional
  public mi_pelicula: string = "";

  constructor(){
    this.titulo= "Modelos";
    this.peliculas = [
      new Pelicula(
        1,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        2,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        3,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        4,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        5,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        6,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        7,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      ),
      new Pelicula(
        8,
        "Toy Story",
        "Aventura",
        "Jhon Laseeter",
        1995,
        "Disney Plus",
        true
      )
    ];
  }
  ngOnInit(){
    console.log(this.peliculas)
    this.peliculas[1].titulo = "SHREK 3"
  }
  ngDoCheck(){
    console.log(this.mi_pelicula);
  }
  showPelicula(){
    alert(this.mi_pelicula)
  }
  addPelicula(){
    //this.peliculasSinDatos.push(this.mi_pelicula)

    let identificador = this.peliculas[this.peliculas.length-1].id + 1;
    let nuevaPelicula = new Pelicula(identificador,this.mi_pelicula);
    console.log(nuevaPelicula)
    this.peliculas.push(
      nuevaPelicula
    );
  }
}
