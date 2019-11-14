import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../authentication.service'
import {LoginComponent} from '../login/login.component'
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() loggedIn : boolean; 
  

  constructor(private _fbauthstate : AuthenticationService, private router: Router) { 
  
  }

  ngOnInit() {
    
  }

  ngOnDestory(){
   
  }

  logout(){
   this._fbauthstate.logout().then(function() {
     console.log("Logout successful.")
   //  this.router.navigate['/login'];
   }).catch(function(error) {
     console.log("Logout unsuccessful.")
   });   
   this.loggedIn = false;
}
}