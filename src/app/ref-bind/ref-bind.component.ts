import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-bind',
  templateUrl: './ref-bind.component.html',
  styleUrls: ['./ref-bind.component.css']
})
export class RefBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickCatchRef(value) {
    console.log(value);
  }
}
