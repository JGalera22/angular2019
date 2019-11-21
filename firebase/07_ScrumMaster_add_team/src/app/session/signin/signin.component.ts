import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { UserDto } from 'src/app/models/user.dto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    
  }

  googleSignIn() {
    this.authService.googleLogin().then(resp => {
      this.usersService.getUser(resp.user.uid).subscribe(usuario => {
        
        if(usuario) {
          console.log('entra en if');
          console.log(usuario);
          this.authService.setLocalData(
            resp.user.uid,
            resp.user.displayName,
            resp.user.email,
            resp.user.photoURL,
            usuario.teamId
          );

          this.router.navigate(['/stories']);
        } else {
          let userDto = new UserDto(
            resp.user.displayName,
            resp.user.email,
            resp.user.photoURL,
            '' // teamId vacio porque es el primer login
          );

          this.usersService.createUser(resp.user.uid, userDto).then(usuarioCreado =>  {
            this.authService.setLocalData(
              resp.user.uid,
              resp.user.displayName,
              resp.user.email,
              resp.user.photoURL,
              ''
            );

            this.router.navigate(['/stories']);
          }).catch(error => {
            // TODO ha habido un error al insertar al usuario
          });
        }
       
      });

      

    }).catch(error => {
      //TODO snakcbar mostrando error
    });
  }
}
