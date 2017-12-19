import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getReservations();
  }

  reservations: any[];

  getReservations() {
    this.reservations = this.reservationService.getReservations();
  }

}
