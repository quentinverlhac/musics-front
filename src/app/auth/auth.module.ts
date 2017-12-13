import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, CallbackComponent]
})
export class AuthModule { }
