import { Component, OnInit, Inject } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DatosEntradaDialog {
  peliculaVotar: Pelicula;
  texto: string;
}

@Component({
  selector: 'app-pelicula-votar-dialog',
  templateUrl: './pelicula-votar-dialog.component.html',
  styleUrls: ['./pelicula-votar-dialog.component.css']
})
export class PeliculaVotarDialogComponent implements OnInit {
  titulo: string;
  votacion: number;

  constructor(
    public dialogRef: MatDialogRef<PeliculaVotarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DatosEntradaDialog
  ) { }

  ngOnInit() {
    this.titulo = this.data.texto + this.data.peliculaVotar.title;
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

}
