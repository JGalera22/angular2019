import { Component, OnInit } from '@angular/core';
import { CIUDADES } from '../models/mock-ciudades';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-ciudades-listado',
  templateUrl: './ciudades-listado.component.html',
  styleUrls: ['./ciudades-listado.component.css']
})
export class CiudadesListadoComponent implements OnInit {
  ciudades = CIUDADES;
  ciudadSeleccionada: Ciudad;

  constructor() { }

  ngOnInit() {
  }

  onSelectCiudad(ciudad: Ciudad) {
    this.ciudadSeleccionada = ciudad;
  }

}
