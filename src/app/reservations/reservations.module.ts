import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation-item/reservation.component';
import { ReservationsComponent } from './my-reservations/reservations.component';
import { ReservationsRoutingModule } from "./reservations-routing.module";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { ReservationService } from './reservation.service';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    ReservationsRoutingModule,
  ],
  declarations: [
    ReservationComponent,
    ReservationsComponent
  ],
  providers: [ReservationService]
})
export class ReservationsModule { }