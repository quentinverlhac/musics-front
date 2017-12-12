import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() {
    const now = new Date();
    console.log(new Date().toString())
  }

  @Input() data: any;

  ngOnInit() {
  }

}
