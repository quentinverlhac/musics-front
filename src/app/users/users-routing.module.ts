import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from "./me/me.component";
import { UsersComponent } from "./users/users.component";

const usersRoutes: Routes = [
  { path: 'me', component: MeComponent },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }