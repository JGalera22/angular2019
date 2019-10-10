import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  valoracion: number;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    return this.valoracion >= 50 ? 'green' : 'red';
  }

}
