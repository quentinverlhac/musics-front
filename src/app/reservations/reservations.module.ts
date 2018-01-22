import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation-item/reservation.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ReservationsRoutingModule } from "./reservations-routing.module";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { ReservationService } from './reservation.service';
import { ReservationsComponent } from './reservations/reservations.component';
import { SearchRoomsComponent } from "./search-rooms/search-rooms.component";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RoomService} from './shared/rooms.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from "../users/users.service";

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    ReservationsRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    ReservationComponent,
    MyReservationsComponent,
    ReservationsComponent,
    SearchRoomsComponent
  ],
  providers: [ReservationService, RoomService, UsersService]
})
export class ReservationsModule { }