import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent implements OnInit {

  constructor() { }

  @Input() room: any;
  @Input() admin: boolean;

  ngOnInit() {
  }

}
