import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservations = this.reservationService.getMyReservations();
  }

  reservations: Observable<any[]>;
}
