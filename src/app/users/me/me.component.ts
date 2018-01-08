import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  me$: Observable<any>;
  instruments$: Observable<any[]>;

  ngOnInit() {
    this.me$ = this.usersService.getMe();
    this.instruments$ = this.usersService.getInstruments();
  }

  onInstrumentAdd(instrumentId) {
    this.usersService.addInstrument(instrumentId).subscribe(() => this.me$ = this.usersService.getMe())
  }

}
