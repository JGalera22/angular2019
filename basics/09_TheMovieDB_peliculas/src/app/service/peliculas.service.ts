import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaResponse } from '../models/pelicula-response.interface';
import { PeliculaLatest } from '../models/peliculalatest';
import { Pelicula } from '../models/pelicula';

const peliculasURL = 'https://api.themoviedb.org/3/movie';
const apiKey = '255c81c8df0343a97dec2dafcd89a1c0';

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor(private http: HttpClient) {
  }

  public getPelicula(idPelicula: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(
      peliculasURL + '/popular?api_key=' + apiKey,
    );
  }

  public getPeliculas(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
      peliculasURL + '/popular?api_key=' + apiKey,
    );
  }
  public getPeliculasTopRated(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
      peliculasURL + '/top_rated?api_key=' + apiKey,
    );
  }
  public getPeliculasLatest(): Observable<PeliculaLatest> {
    return this.http.get<PeliculaLatest>(
      peliculasURL + '/latest?api_key=' + apiKey,
    );
  }
}