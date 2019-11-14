import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.interface';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-films-listado',
  templateUrl: './films-listado.component.html',
  styleUrls: ['./films-listado.component.css']
})
export class FilmsListadoComponent implements OnInit {

  listadoFilms:Film[];
  columnsToDisplay = ['title','episode_id','director','producer','release_date','created'];

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe(resp => {
      this.listadoFilms = resp.results;
    });
  }

}
