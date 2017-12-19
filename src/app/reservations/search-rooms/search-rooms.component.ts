/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-rooms',
  templateUrl: './search-rooms.component.html',
  styleUrls: ['./search-rooms.component.css']
})
export class SearchRoomsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, OnInit } from '@angular/core';
import {RoomService} from '../shared/rooms.service';
@Component({
  selector: 'app-search-rooms',
  templateUrl: './search-rooms.component.html',
  styleUrls: ['./search-rooms.component.css']
})
export class SearchRoomsComponent implements OnInit {
  
 
  images: any[];
  imagesFound : boolean = false;
  searching : boolean = false;

  handleSuccess(data){
    this.imagesFound =true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _imageService : RoomService) { }

  searchImages(query:string){

    this.searching = true;
    return this._imageService.getImage(query).subscribe(

      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching =false
    )
  }

  ngOnInit() {
  }

}

