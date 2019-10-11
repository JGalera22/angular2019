import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from '../models/interface/planet.interface';
import { PlanetResponse } from '../models/interface/planets-response.interface';


const authURL = 'https://swapi.co/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {  
  }

  public getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      authURL,
      requestOptions
    );
  }
}
