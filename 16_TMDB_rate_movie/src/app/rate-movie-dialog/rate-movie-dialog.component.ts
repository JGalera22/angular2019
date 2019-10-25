import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pelicula } from '../models/pelicula';

export interface DialogData {
  peliculaSeleccionada: Pelicula;
}

@Component({
  selector: 'app-rate-movie-dialog',
  templateUrl: './rate-movie-dialog.component.html',
  styleUrls: ['./rate-movie-dialog.component.css']
})
export class RateMovieDialogComponent implements OnInit {
  pelicula: Pelicula;
  votacion: number;

  constructor(public dialogRef: MatDialogRef<RateMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.pelicula = this.data.peliculaSeleccionada;
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
