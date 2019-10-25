import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaResponse } from '../models/pelicula-response.interface';
import { PeliculaLatest } from '../models/peliculalatest';
import { Pelicula } from '../models/pelicula';
import { RateMovieDto } from '../models/rate-movie.dto';
import { RateMovieResponse } from '../models/rate-movie-response.interface';

const peliculasURL = 'https://api.themoviedb.org/3/movie';
const apiKey = '433d2c486572afb242c6fe7c1ddc6771';

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

  public rateMovie(idPelicula: string, rate: number) {
    const votacionDto = new RateMovieDto(rate);
    const sessionId = localStorage.getItem('sessionId');



    return this.http.post<RateMovieResponse>(
      peliculasURL + '/'+ idPelicula + '/rating?api_key=' + apiKey + '&session_id=' + sessionId,
      votacionDto,
      requestOptions
    );
  }
}