import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FilmResponse } from '../models/film-response.interface';
import { Observable } from 'rxjs';

const authURL = 'https://swapi.co/api/films';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {

  }

  getFilms(): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
       authURL,
       requestOptions
    );
 }
}
