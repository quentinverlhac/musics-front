import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import config from "../../config";

const headers = new HttpHeaders({'token': localStorage.getItem('token')});
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  me: any;

  getMe() {
    return this.http.get(`${config.back.api}/users/me`, {headers});
  }

  updateUserRights(login, isAdmin, isSubscriber) {
    return this.http.put(`${config.back.api}/users/${login}`, {admin: isAdmin, adherent: isSubscriber},{headers})
  }

  addInstrument(instrumentId) {
    return this.http.post(`${config.back.api}/users/me/instruments`, { instrumentId },{ headers });
  }

  deleteInstrument(instrumentId) {
    return this.http.request('delete', `${config.back.api}/users/me/instruments`, { headers, body: { instrumentId } });
  }

  getUsers() {
    return this.http.get<any[]>(`${config.back.api}/users`, {headers});
  }

  getInstruments() {
    return this.http.get<any[]>(`${config.back.api}/instruments`, { headers });
  }

  updatePhone(telephone) {
    return this.http.put(`${config.back.api}/users/me`, { telephone },  { headers });
  }
}
