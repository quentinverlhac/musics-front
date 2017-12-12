import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation-item/reservation.component';
import { ReservationsComponent } from './my-reservations/reservations.component';
import { ReservationsRoutingModule } from "./reservations-routing.module";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReservationsRoutingModule,
  ],
  declarations: [
    ReservationComponent,
    ReservationsComponent
  ]
})
export class ReservationsModule { }