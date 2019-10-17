import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/token-response.interface';
import { HttpClient } from '@angular/common/http';

const authUrl = 'https://api.themoviedb.org/3/authentication';
const apiKey = '433d2c486572afb242c6fe7c1ddc6771';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getTokenRequest(): Observable<TokenResponse> {
      return this.http.get<TokenResponse>(authUrl + '/token/new?api_key=' + apiKey);
  }
}
