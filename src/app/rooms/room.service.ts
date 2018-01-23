import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import config from "../../config";

const headers = new HttpHeaders({'token': localStorage.getItem('token')});

@Injectable()
export class RoomService {

  constructor(private http: HttpClient) { }

  getRooms() {
    return this.http.get<any[]>(`${config.back.api}/rooms`, { headers });
  }

  updateRoom(roomId, isAdmin, isSubscriber) {
    return this.http.put(`${config.back.api}/rooms/${roomId}`, {admin: isAdmin, adherent: isSubscriber},{headers})
  }

  addRoomInstrument(roomId, instrumentId) {
    return this.http.post(`${config.back.api}/rooms/${roomId}/instruments`, { instrumentId },{ headers });
  }

  deleteRoomInstrument(roomId, instrumentId) {
    return this.http.request('delete', `${config.back.api}/rooms/${roomId}/instruments`, { headers, body: { instrumentId } });
  }

  getInstruments() {
    return this.http.get<any[]>(`${config.back.api}/instruments`, { headers });
  }

}
