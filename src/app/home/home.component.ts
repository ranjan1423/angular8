import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name = 'Chetu';
  public siteurl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  public showName() {
    return this.name;
  }
}
