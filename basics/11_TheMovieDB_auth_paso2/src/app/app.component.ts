import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioPeliculas';

  constructor(private authService: AuthService) {}

  public requestToken() {
    const token: string = localStorage.getItem('token');
    
      this.authService.getTokenRequest().subscribe(resp => {
        localStorage.setItem('token',resp.request_token);

        // Navegar para que el usuario se autentice y autorice a nuestra app
        // https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://localhost:4200/populares
        window.location.href='https://www.themoviedb.org/authenticate/'+ resp.request_token +'?redirect_to=http://localhost:4200/populares';
      });
 
  }

}
