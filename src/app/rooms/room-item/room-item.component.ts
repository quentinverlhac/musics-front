import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomService } from "../room.service";

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  @Input() room: any;
  @Input() admin: boolean;
  @Input() instruments: any[];
  @Input() reservation: boolean;
  @Output() delete = new EventEmitter<Number>();
  @Output() add = new EventEmitter<Number>();
  @Output() reserve = new EventEmitter();


  ngOnInit() {
  }
  
  onInstrumentAdd(instrumentId) {
    this.add.emit(instrumentId);
  }

  onInstrumentDelete(instrumentId) {
    this.delete.emit(instrumentId)
  }

  onReservation() {
    this.reserve.emit()
  }

}
