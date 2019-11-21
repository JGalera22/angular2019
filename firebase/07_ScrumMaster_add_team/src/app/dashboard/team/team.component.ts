import { Component, OnInit } from '@angular/core';
import { FirestoreResponse } from 'src/app/models/firestore-response.interface';
import { TeamService } from 'src/app/services/team.service';
import { Miembro } from 'src/app/models/miembro.interface';
import { TeamNewDialogComponent } from '../team-new-dialog/team-new-dialog.component';
import { TeamJoinDialogComponent } from '../team-join-dialog/team-join-dialog.component';
import { MatDialog } from '@angular/material';
import { Team } from 'src/app/models/team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'acciones'];
  listadoMiembros: FirestoreResponse<Miembro>[];
  teamId = '';
  team: Team;

  constructor(private teamService: TeamService, public dialog: MatDialog) { }

  ngOnInit() {
    this.teamId = localStorage.getItem('teamId');
    if(this.teamId !== '' && this.teamId !== null) {
      this.loadTeam();
      this.loadMiembros();
    } else {
      this.teamId = '';
    }
  }

  loadTeam() {
    this.teamService.getTeam(this.teamId).subscribe(resp => {
      this.team = resp;
    });
  }

  loadMiembros() {
    this.teamService.getMiembros(this.teamId).subscribe(resp => {
      this.listadoMiembros = [];
      
      resp.forEach((story: any) => {
        this.listadoMiembros.push({ 
          id: story.payload.doc.id, 
          data: story.payload.doc.data() as Miembro 
        });
      });
    });
  }

  dialogCrearEquipo() {
    let dialogRef = this.dialog.open(TeamNewDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(resp => {
      this.teamId = localStorage.getItem('teamId');
      this.loadTeam();
      this.loadMiembros();
    });
  }

  dialogUnirseEquipo() {
    let dialogRef = this.dialog.open(TeamJoinDialogComponent, {
      width: '400px',
    });
  }

}
