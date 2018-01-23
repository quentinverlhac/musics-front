import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from "./home/home.component";
import { ReservationsModule } from './reservations/reservations.module'
import { UsersModule } from "./users/users.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";
import { RoomsModule } from "./rooms/rooms.module";
import { ReservationService } from "./reservations/reservation.service";

import { HeaderReservationComponent } from './reservations/search-rooms/header-reservation/header-reservation.component';
//import { PropositionReservationComponent } from './reservations/search-rooms/proposition-reservation/proposition-reservation.component';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchComponent,
    HomeComponent,
    HeaderReservationComponent,
    //PropositionReservationComponent
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
    RoomsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

