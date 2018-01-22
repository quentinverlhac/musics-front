import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MeComponent } from './me/me.component';
import { UsersService } from './users.service';
import { UsersRoutingModule } from "./users-routing.module";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from '../users/user/user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    UsersRoutingModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: [UsersComponent, MeComponent, UserComponent],
  providers: [UsersService]
})
export class UsersModule { }
