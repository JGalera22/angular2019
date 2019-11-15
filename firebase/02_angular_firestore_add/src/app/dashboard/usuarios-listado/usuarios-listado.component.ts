import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosNuevoDialogComponent } from '../usuarios-nuevo-dialog/usuarios-nuevo-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.scss']
})
export class UsuariosListadoComponent implements OnInit {
  listadoUsuarios: Usuario[];
  displayedColumns: string[] = ['nombre', 'email', 'github', 'es_admin', 'acciones'];

  constructor(
    private usuariosService: UsuariosService, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuariosService.getUsuarios().subscribe(resp => {
      this.listadoUsuarios = resp;
    });
  }

  dialogNuevoUsuario() {
    let dialogRef = this.dialog.open(UsuariosNuevoDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(resp => {
      if(resp != null) {
        if(resp) {
          this.snackBar.open("Usuario creado correctamente", );
        } else {
          this.snackBar.open("Error al crear usuario");
        }
      }
    });
  }

  dialogEditUsuario(usuarioToEdit: Usuario) {
    alert("Quieres editar el usuario: " + usuarioToEdit.nombre);
  }

}
