import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  me: any;
  ngOnInit() {
    this.me = this.usersService.getMe()
  }

}
