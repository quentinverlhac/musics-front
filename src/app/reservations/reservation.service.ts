import { Injectable } from '@angular/core';

@Injectable()
export class ReservationService {

  constructor() { }

  data = {
    name: 'EF110',
    beginDate: '15h00', 
    duration: '2h',
    description: 'Bonjour je suis une description'
  }

  getMyReservations() {
    return [this.data]
  }

}
