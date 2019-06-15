import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log('onClick called.');
  }

  onClickWithEvent(event) {
    console.log('onClickWithEvent called with event.');
    console.log(event);
    console.log(event.type);
    console.log(event.timeStamp);
  }
}
