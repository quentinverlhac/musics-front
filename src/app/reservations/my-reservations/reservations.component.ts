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
    this.getMyReservations();
  }

  reservations: any[];

  getMyReservations() {
    this.reservations = this.reservationService.getMyReservations();
  }

  deleteReservation(id) {
    this.reservationService.deleteReservation(id);
  }
}
