import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/models/usuario.dto';
import { MatDialogRef } from '@angular/material';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-nuevo-dialog',
  templateUrl: './usuarios-nuevo-dialog.component.html',
  styleUrls: ['./usuarios-nuevo-dialog.component.scss']
})
export class UsuariosNuevoDialogComponent implements OnInit {
  usuarioDto: UsuarioDto;

  constructor(
    public dialogRef: MatDialogRef<UsuariosNuevoDialogComponent>,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuarioDto = new UsuarioDto('','','', false);
  }

  guardarUsuario() {
    this.usuariosService.createUsuario(this.usuarioDto).then(respCorrecta => {
      this.dialogRef.close(true);
    }).catch(respError => {
      this.dialogRef.close(false);
    });
  }

  cerrar() {
    this.dialogRef.close();
  }

}
