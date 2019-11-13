import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authstate : boolean; 
  returned : boolean; 

  constructor(private _fbauthstate : AuthenticationService) { 
  
  }

  ngOnInit() {
    
  }

  ngOnDestory(){
   
  }

  logout(){
   this._fbauthstate.logout();
   this.authstate = this._fbauthstate.authCheck(); 
   //console.log("Logout requested. Current state: " + this.authstate);
   
}
}