import { Component, OnInit } from '@angular/core';
import { RoomService } from "../room.service";
import { Observable } from 'rxjs/Rx';
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomService: RoomService, private usersService: UsersService) { }

  rooms$: Observable<any[]>;
  me$: Observable<any>;
  instruments$: Observable<any[]>;

  ngOnInit() {
    this.rooms$ = this.roomService.getRooms();
    this.me$ = this.usersService.getMe();
    this.instruments$ = this.roomService.getInstruments();

  }

  onInstrumentAdd(instrumentId, roomId) {
    this.roomService.addRoomInstrument(roomId, instrumentId).subscribe(() => this.me$ = this.usersService.getMe());

  }

  onInstrumentDelete(instrumentId, roomId) {
    this.roomService.deleteRoomInstrument(roomId, instrumentId).subscribe(() => this.me$ = this.usersService.getMe());

  }
  

}
