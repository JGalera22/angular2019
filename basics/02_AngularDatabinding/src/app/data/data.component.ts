import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  placeholderOp1 = 'Operando 1';
  placeholderOp2 = 'Operando 2';
  resultado = 0;
  correoElectronico = '';
  mostrarImagen = true;

  constructor() { }

  ngOnInit() {
  }

  calcularSuma(op1: number, op2: number) {
    this.resultado = op1 + op2;
  }

}
