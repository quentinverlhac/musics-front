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
  @Output() delete = new EventEmitter<Number>();
  @Output() add = new EventEmitter<Number>();


  ngOnInit() {
  }
  
  onInstrumentAdd(instrumentId) {
    this.add.emit(instrumentId);
  }

  onInstrumentDelete(instrumentId) {
    this.delete.emit(instrumentId)
  }

}
