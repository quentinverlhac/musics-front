import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MeComponent } from './me/me.component';
import { UsersService } from './users.service';
import { UsersRoutingModule } from "./users-routing.module";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, MeComponent],
  providers: [UsersService]
})
export class UsersModule { }
