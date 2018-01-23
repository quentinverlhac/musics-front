import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomItemComponent } from './room-item/room-item.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { RoomService } from './room.service';
import { HttpClientModule } from '@angular/common/http';
import { RoomsRoutingModule } from "./rooms-routing.module";
import { UsersService } from "../users/users.service";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    RoomsRoutingModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [RoomsComponent, RoomItemComponent],
  providers: [RoomService, UsersService]
})
export class RoomsModule { }
