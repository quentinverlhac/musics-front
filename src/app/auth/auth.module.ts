import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./auth.service";
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { LogoutComponent } from '../auth/logout/logout.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: [LoginComponent, CallbackComponent, LogoutComponent]
})
export class AuthModule { }
