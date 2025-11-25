
import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula'; 
@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css'
})
export class Cine {

  public titulo: string;
  public peliculas: Array<Pelicula>

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
}
