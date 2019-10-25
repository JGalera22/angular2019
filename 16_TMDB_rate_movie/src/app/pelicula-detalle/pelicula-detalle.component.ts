import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../service/peliculas.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  idPelicula: string;
  pelicula: Pelicula;

  constructor(
    private route: ActivatedRoute, // Este objeto me permite acceder a la URL actual
    private peliculasService: PeliculasService
  ) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.idPelicula = params.get("idP");
  
        this.peliculasService.getPelicula(this.idPelicula).subscribe(resp => {
          this.pelicula = resp;
        });
      
      }); 
    }

}
