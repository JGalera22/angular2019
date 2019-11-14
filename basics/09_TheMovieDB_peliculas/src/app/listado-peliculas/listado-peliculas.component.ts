import { Component, OnInit } from '@angular/core';
//import { PELICULAS } from '../models/mock-peliculas';
import { Pelicula } from "../models/pelicula";
import {PeliculasService} from "../service/peliculas.service"

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  enlace: string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(private peliculaspopulares : PeliculasService) { }

  ngOnInit() {
    this.loadPeliculasPopulares();
  }
  
  ponerColorPorPuntuacion(valoracion: number){
    valoracion=valoracion*10
    if(valoracion<50){
      return 'red';
    }else if(valoracion>=50&&valoracion<70){
      return 'orange'
    }else{
      return 'green'
    }
  }
  calcularLongitudDescripcion(descripcion: String){
    return descripcion.length;
  }
  
  loadPeliculasPopulares(){
    this.peliculaspopulares.getPeliculas().subscribe(resp => {
      this.peliculas = resp.results;
    });
  }
}
