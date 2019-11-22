import { Component, OnInit } from '@angular/core';
import {ITopnav} from '../interfaces/itopnav'
import {FireStoreService} from '../firestore.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, ITopnav {
  searchQuery : string;
  constructor(private db : FireStoreService, private router : Router) { }

  ngOnInit() {
  }

  search(searchQuery : string){
    this.db.search(searchQuery); 
    console.log("Search button pressed. Term: " + searchQuery);
    this.searchQuery = "";
  }

    
}
