import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stlye-bind',
  templateUrl: './stlye-bind.component.html',
  styleUrls: ['./stlye-bind.component.css']
})
export class StlyeBindComponent implements OnInit {

  public isError = true;

  public allStyles = {
    color: 'green',
    fontSize: '25PX',
    fontWeight: 'bold'
  };

  constructor() { }

  ngOnInit() {
  }

}
