import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ReservationsModule } from './reservations/reservations.module'
import { UsersModule } from "./users/users.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";


import { SearchRoomsComponent } from './reservations/search-rooms/search-rooms.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RoomService} from './reservations/shared/rooms.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SearchRoomsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    UsersModule,
    ReservationsModule,
    AuthModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

