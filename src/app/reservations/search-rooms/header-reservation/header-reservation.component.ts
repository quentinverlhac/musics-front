
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-header-reservation',
  templateUrl: './header-reservation.component.html',
  styleUrls: ['./header-reservation.component.css']
})
export class HeaderReservationComponent implements OnInit {

@ViewChild('f') signupForm: NgForm;

defaultHour = new Date().getHours();
defaultMinute = new Date().getMinutes() - (new Date().getMinutes() % 10 ) ;
defaultDuration = "0.3";

Hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
Minutes = [0,10,20,30,40,50];
Durations = [0.3,1,1.3,2,2.3,3,3.3];

SD = {
  heure: 0,
  minute : 0,
  duration : 0
}

ED = {
  heure: 0,
  minute : 0,
}
  
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  FinalSubmitted = false;
  
  onSubmit()
  {
    this.submitted = true;
    
    // random qui simile le serveur de dispo
    this.SD.heure = this.signupForm.value.hour;
    this.SD.minute = this.signupForm.value.minute;
    this.SD.duration = this.signupForm.value.duration;

    switch(this.SD.duration) 
    
    {
      case 0.3:
      this.SD.minute =  this.SD.minute +  30;
          break;
      case 1:
      this.SD.minute =  this.SD.minute +  60;
          break;
      case 1.3:
      this.SD.minute =  this.SD.minute +  90;
          break;
      case 2:
      this.SD.minute =  this.SD.minute +  120;
          break;
      case 2.3:
      this.SD.minute =  this.SD.minute +  150;
          break;
      case 3:
      this.SD.minute =  this.SD.minute +  180;
          break;
      case 3.3:
      this.SD.minute =  this.SD.minute +  210;
          break;
    } 
    
    //var d = new Date(99,18,-5,11,33,-5,0);
    var d = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDay(),this.SD.heure,this.SD.minute,0,0);    

    this.ED.heure = d.getHours();
    this.ED.minute = d.getMinutes();
  }

  simulServ()
  {
    return Math.random() < 0.5
  }
  onFinalSubmit()
  {
    this.submitted = false; 
  }

  constructor() { }

  ngOnInit() {
  }



}
