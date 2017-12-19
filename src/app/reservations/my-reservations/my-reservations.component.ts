import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getMyReservations();
  }

  reservations: any[];

  getMyReservations() {
    this.reservations = this.reservationService.getMyReservations();
  }
}
