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
    this.authService.getTokenRequest().subscribe(resp => {
      localStorage.setItem('token',resp.request_token);
    });
  }

}
