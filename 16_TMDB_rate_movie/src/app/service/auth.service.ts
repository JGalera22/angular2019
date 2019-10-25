import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/token-response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionResponse } from '../models/session-response.interface';
import { SessionNewDto } from '../models/session-new.dto';

const authUrl = 'https://api.themoviedb.org/3/authentication';
const apiKey = '433d2c486572afb242c6fe7c1ddc6771';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getTokenRequest(): Observable<TokenResponse> {
      return this.http.get<TokenResponse>(authUrl + '/token/new?api_key=' + apiKey);
  }

  getSessionId(): Observable<SessionResponse> {
    const sessionNewDto = new SessionNewDto(localStorage.getItem('token'));

    return this.http.post<SessionResponse>(
      authUrl + '/session/new?api_key=' + apiKey,
      sessionNewDto,
      httpOptions
    );
  }
}
