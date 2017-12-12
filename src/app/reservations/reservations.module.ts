import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationsComponent } from './reservations.component';
import { ReservationsRoutingModule } from "./reservations-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ],
  declarations: [
    ReservationComponent,
    ReservationsComponent
  ]
})
export class ReservationsModule { }