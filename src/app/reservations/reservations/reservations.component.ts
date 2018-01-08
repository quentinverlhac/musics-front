import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
  }

  reservations: Observable<any>;

}
