import { Component, OnInit } from '@angular/core';
import { isError } from 'util';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css']
})
export class ClassBindComponent implements OnInit {

  public golddiv = 'golddiv';
  public bluediv = 'bluediv';

  public isError = false;
  public isBigFont = false;
  public isBold = false;


  public messagetype = {
    errordiv: this.isError,
    successdiv: !this.isError,
    bigFontDiv: this.isBigFont,
    boldDiv: this.isBold
  }

  constructor() { }

  ngOnInit() {
  }

}
