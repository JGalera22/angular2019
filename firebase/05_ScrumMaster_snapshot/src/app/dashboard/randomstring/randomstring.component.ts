
import { Component, OnInit } from '@angular/core';

// Librería: https://www.npmjs.com/package/random-string-generator
declare var require: any;
var random = require('random-string-generator');

@Component({
  selector: 'app-randomstring',
  templateUrl: './randomstring.component.html',
  styleUrls: ['./randomstring.component.scss']
})
export class RandomstringComponent implements OnInit {
  stringAleatorio: string = '';

  constructor() { }

  ngOnInit() {
    this.stringAleatorio = random(8);
  }

}
