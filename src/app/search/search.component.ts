import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../reservations/reservation.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  search = { date: "", beginning: "", end: ""};
  rooms$: Observable<any[]>;

  ngOnInit() {
  }

  parseDate(date, time) {
    let d = new Date(this.search.date);
    let hours = parseInt(time.split(':')[0]);
    let minutes = parseInt(time.split(':')[1]);
    d.setHours(d.getHours() + hours);
    d.setMinutes(d.getMinutes() + minutes);
    return d
  }

  onSubmit() {
    this.rooms$ = this.reservationService.searchRooms(this.parseDate(this.search.date,this.search.beginning), this.parseDate(this.search.date,this.search.end));
  }

  onReservation(roomId) {
    this.reservationService.getRoom(roomId, this.parseDate(this.search.date,this.search.beginning), this.parseDate(this.search.date,this.search.end))
      .subscribe(() => {
        this.rooms$ = undefined;
      })
  }

}
