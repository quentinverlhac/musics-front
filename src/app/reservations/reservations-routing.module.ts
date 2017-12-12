import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReservationsComponent } from "./my-reservations/my-reservations.component";

const reservationsRoutes: Routes = [
  { path: 'me/reservations', component: MyReservationsComponent }
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