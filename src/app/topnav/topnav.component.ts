import { Component, OnInit } from '@angular/core';
import {ITopnav} from '../interfaces/itopnav'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, ITopnav {

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log("Search button pressed.")
    alert("This functionality not yet available. Coming soon.");
    
  }

}
