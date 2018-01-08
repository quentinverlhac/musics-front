import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import config from "../../config";

const headers = new HttpHeaders({'token': localStorage.getItem('token')});

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) { }

  data = {
    id: 1,
    name: 'EF110',
    beginDate: '15h00', 
    duration: '2h',
    description: 'Bonjour je suis une description'
  }

  getMyReservations() {
    return this.http.get<any[]>(`${config.back.api}/users/me/reservations`, { headers });
  }

  getReservations() {
    return this.http.get<any[]>(`${config.back.api}/reservations`, { headers });
  }

  deleteReservation(id) {
    return this.http.delete(`${config.back.api}/reservations/${id}`, { headers });
  }

}