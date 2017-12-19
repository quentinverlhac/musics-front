import { Injectable } from '@angular/core';

@Injectable()
export class ReservationService {

  constructor() { }

  data = {
    id: 1,
    name: 'EF110',
    beginDate: '15h00', 
    duration: '2h',
    description: 'Bonjour je suis une description'
  }

  getMyReservations() {
    return [this.data]
  }

  getReservations() {
    return [this.data]
  }

  deleteReservation(id) {
    console.log(`reservation ${id} deleted`)
  }

}