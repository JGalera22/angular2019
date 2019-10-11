import { Component, OnInit } from '@angular/core';
import { ALUMNOS } from '../models/mock-alumnos';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent implements OnInit {
  listadoAlumnos = ALUMNOS;
  columnsToDisplay = ['nombre', 'nota','resultado'];
  
  constructor() { }

  ngOnInit() {
  }

}
