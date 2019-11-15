import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(){
    console.log("Search button pressed.")
    alert("This functionality not yet available. Coming soon.");
    
  }

}
