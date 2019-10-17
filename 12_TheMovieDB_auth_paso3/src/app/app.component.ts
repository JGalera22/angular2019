import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicioPeliculas';
  sessionId: string = localStorage.getItem('sessionId');

  constructor(private authService: AuthService) {}

  ngOnInit() {
   this.obtenerSesionUsuario(); 
  }

  public requestToken() {
    const token: string = localStorage.getItem('token');
      this.authService.getTokenRequest().subscribe(resp => {
        localStorage.setItem('token',resp.request_token);

        // Navegar para que el usuario se autentice y autorice a nuestra app
        // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://localhost:4200/populares
        window.location.href='https://www.themoviedb.org/authenticate/'+ resp.request_token +'?redirect_to=http://localhost:4200/populares';
      });
  }

  obtenerSesionUsuario() {
    console.log('entra en método obtener session usuario');

    const token = localStorage.getItem('token');
    const sessionId = localStorage.getItem('sessionId');

    if(token !== '' && sessionId === null) {
      this.authService.getSessionId().subscribe(resp => {
        localStorage.setItem('sessionId', resp.session_id);
        this.sessionId = resp.session_id;
      });
    }
  }

}
