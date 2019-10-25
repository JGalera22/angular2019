import { Component, OnInit } from '@angular/core';
//import { PELICULAS } from '../models/mock-peliculas';
import { Pelicula } from "../models/pelicula";
import {PeliculasService} from "../service/peliculas.service"
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { PeliculaVotarDialogComponent } from '../pelicula-votar-dialog/pelicula-votar-dialog.component';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas: Pelicula[];
  enlace: string = 'https://image.tmdb.org/t/p/w500';
  
  constructor(
    private peliculasService : PeliculasService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

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
    this.peliculasService.getPeliculas().subscribe(resp => {
      this.peliculas = resp.results;
    });
  }

  openVotacionDialog(pelicula: Pelicula) {
    const dialogRef = this.dialog.open(PeliculaVotarDialogComponent, {
      data: {peliculaVotar: pelicula, texto: 'Votar '}
    });

    dialogRef.afterClosed().subscribe(resp => {
      // en la variable "resp" recibimos la valoración
      this.peliculasService.rateMovie(pelicula.id.toString(), resp).subscribe(respRate => {
        alert("Se ha realizado la valoración correctamente");
      });
    });

  }
}
