import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() {
  }

  @Input() data: any;
  @Output() delete = new EventEmitter();

  ngOnInit() {
    this.data.beginning = new Date(this.data.beginning).toLocaleDateString();
    this.data.duration = this.data.duration/3600;
  }

  onDelete() {
    this.delete.emit();
  }

}
