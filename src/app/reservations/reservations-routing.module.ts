import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReservationsComponent } from "./my-reservations/my-reservations.component";
import { ReservationsComponent } from "./reservations/reservations.component";
import { SearchRoomsComponent } from "./search-rooms/search-rooms.component";

const reservationsRoutes: Routes = [
  { path: 'reservations/me', component: MyReservationsComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'search', component: SearchRoomsComponent }
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