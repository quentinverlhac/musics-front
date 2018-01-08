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

  getUsers() {
    return this.http.get(`${config.back.api}/users`, {headers});
  }

}
