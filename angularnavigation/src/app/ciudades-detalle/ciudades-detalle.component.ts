import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-ciudades-detalle',
  templateUrl: './ciudades-detalle.component.html',
  styleUrls: ['./ciudades-detalle.component.css']
})
export class CiudadesDetalleComponent implements OnInit {
  @Input() ciudad: Ciudad;

  constructor() { }

  ngOnInit() {
  }

}
