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

}
