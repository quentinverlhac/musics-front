import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import config from "../../config";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return false;
  }

  getToken() {
    return "";
  }

  login() {
    if (!this.isLoggedIn()) {
      const state: string = Math.floor(Math.random()*100000).toString();
      localStorage.setItem('state', state);
      window.location.href =
      config.oauth.authorize +
      "?client_id=" +
      config.oauth.client_id +
      "&redirect_uri=" +
      config.oauth.redirect_uri +
      '&response_type=code&state='+
      state;

    }
  }

  callback(code, state) {
    console.log('callback')
    const registeredState = localStorage.getItem('state');
    if (typeof code === 'undefined' || typeof state === 'undefined' || typeof registeredState === 'undefined' || state !== registeredState) {
      throw 'Login error'
    } else {
      return this.http.post(config.back.auth, {
        code
      }).toPromise().then(data => {
        console.log('do things')
      })
    }
  }

  logout() {

  }
}
