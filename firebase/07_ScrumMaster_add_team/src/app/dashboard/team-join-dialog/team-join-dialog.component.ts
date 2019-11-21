import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-team-join-dialog',
  templateUrl: './team-join-dialog.component.html',
  styleUrls: ['./team-join-dialog.component.scss']
})
export class TeamJoinDialogComponent implements OnInit {
  codigo: string = '';

  constructor(private teamService: TeamService, public dialogRef: MatDialogRef<TeamJoinDialogComponent>) { }

  ngOnInit() {
  }

  cancelClick() {
    this.dialogRef.close();
  }

  validateForm() {
    return (this.codigo == '')? true : false;
  }

  unirseEquipo() {
    
  }

}
