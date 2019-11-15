import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { UsuariosNuevoDialogComponent } from '../usuarios-nuevo-dialog/usuarios-nuevo-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.scss']
})
export class UsuariosListadoComponent implements OnInit {
  listadoUsuarios: Usuario[];
  displayedColumns: string[] = ['nombre', 'email', 'github', 'es_admin'];

  constructor(private usuariosService: UsuariosService, public dialog: MatDialog) {
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
  }

}
