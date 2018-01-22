import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

const roomsRoutes: Routes = [
  { path: 'rooms', component: RoomsComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(roomsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoomsRoutingModule { }