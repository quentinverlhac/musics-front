import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReservationsComponent } from "./my-reservations/my-reservations.component";
import { ReservationsComponent } from "./reservations/reservations.component";

const reservationsRoutes: Routes = [
  { path: 'me/reservations', component: MyReservationsComponent },
  { path: 'reservations', component: ReservationsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(reservationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReservationsRoutingModule { }