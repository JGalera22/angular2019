import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: LoginDto;

  // Inyección de dependencias
  constructor(private authService: AuthService) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(respuesta => {
        alert('API TOKEN ' + respuesta.token);
    });
  }

}
