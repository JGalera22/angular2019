import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PlanetResponse } from '../models/planets-response.interface';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.interface';

const planetaURL = 'https://swapi.co/api/planets/';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { 

  }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      planetaURL
    );
 }

 getPlanet(idPlaneta: string): Observable<Planet> {
  return this.http.get<Planet>(
     planetaURL + idPlaneta
  );
}

}
