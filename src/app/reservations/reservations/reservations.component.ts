import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservation.service";
import { UsersService } from "../../users/users.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private reservationService: ReservationService, private usersService: UsersService) { }

  reservations: Observable<any>;
  me$: Observable<any>;

  ngOnInit() {
    this.reservations = this.reservationService.getReservations();
    this.me$ = this.usersService.getMe();
  }

  deleteReservation(reservationId) {
    this.reservationService.deleteReservation(reservationId).subscribe(() => this.reservations = this.reservationService.getReservations())
  }

}
