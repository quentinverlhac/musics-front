import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from "./my-reservations/reservations.component";

const reservationsRoutes: Routes = [
  { path: 'me/reservations', component: ReservationsComponent }
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