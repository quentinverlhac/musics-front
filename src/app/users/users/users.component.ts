import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users$: Observable<any[]>;
  me$: Observable<any>;

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
    this.me$ = this.usersService.getMe();
  }

}
