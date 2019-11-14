import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario.interface';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.scss']
})
export class UsuariosListadoComponent implements OnInit {
  listadoUsuarios: Usuario[];
  displayedColumns: string[] = ['nombre', 'email', 'github', 'es_admin'];

  constructor(private usuariosService: UsuariosService) {
  }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuariosService.getUsuarios().subscribe(resp => {
      this.listadoUsuarios = resp;
    });
  }

}
