import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import config from "../../config";

const headers = new HttpHeaders({'token': localStorage.getItem('token')});
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  me: any;

  getMe() {
    if (this.me) {
      return Promise.resolve(this.me)
    } else {
      return this.http.get(config.back.api+'/user/me', {headers}).toPromise().then(user => {
        this.me = user;
        return this.me;
      })
    }
  }

}
