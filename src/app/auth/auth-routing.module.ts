import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CallbackComponent } from "./callback/callback.component";
import { LogoutComponent } from "./logout/logout.component";

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'callback', component: CallbackComponent},
  {path: 'logout', component: LogoutComponent}
]
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
