import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  onHover() {
    this.trigger.openMenu();
  }

}
