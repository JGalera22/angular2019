import { Component, OnInit } from '@angular/core';
import { TeamDto } from 'src/app/models/team.dto';
import { TeamService } from 'src/app/services/team.service';
import { MatDialogRef } from '@angular/material';

declare var require: any;
var random = require('random-string-generator');

@Component({
  selector: 'app-team-new-dialog',
  templateUrl: './team-new-dialog.component.html',
  styleUrls: ['./team-new-dialog.component.scss']
})
export class TeamNewDialogComponent implements OnInit {
  nombre: string = '';
  suscripcion;

  constructor(private teamService: TeamService, public dialogRef: MatDialogRef<TeamNewDialogComponent>) { }

  ngOnInit() {
  }

  cancelClick() {
    this.dialogRef.close();
  }

  validateForm() {
    return (this.nombre == '')? true : false;
  }

  crearEquipo() {
    let codigoAleatorio = random(8);
    this.suscripcion = this.teamService.checkCodigoAcceso(codigoAleatorio).subscribe(resp => {

      // Si la colección tiene longitud 0 significa que no hay ningún equipo con ese código de acceso
      if (resp.length === 0) {
        this._createTeam(codigoAleatorio);
      } else {
        // en otro caso, genero un código nuevo
        this.crearEquipo();
      }
    }, error => {
      console.log(error);
    });
  }

  _createTeam(codigoAleatorio: string) {
    this.suscripcion.unsubscribe();
    this.teamService.createTeam(this.nombre, codigoAleatorio).then(resp =>  {
          this.dialogRef.close();
    });
  }
}
