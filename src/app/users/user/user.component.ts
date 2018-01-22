import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  @Input() user: any;
  @Input() admin: boolean;
  isAdmin: boolean;
  isSubscriber: boolean;

  ngOnInit() {
    this.isAdmin = this.user.admin;
    this.isSubscriber = this.user.adherent;
  }

  updateUserRights() {
    this.usersService.updateUserRights(this.user.login, this.isAdmin, this.isSubscriber).subscribe(user => this.user = user);
  }

}
