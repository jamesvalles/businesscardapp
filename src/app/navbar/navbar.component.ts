import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService} from '../authentication.service'
import {LoginComponent} from '../login/login.component'
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import {AuthGuardGuard} from '../auth-guard.guard'
import { DatasharingService } from '../datasharing.service';
import { INavbar } from '../interfaces/inavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, INavbar {
  loggedIn : boolean; 
  

  

  constructor(private _fbauthstate : AuthenticationService, private router: Router, private _datashare : DatasharingService, private _authguard : AuthGuardGuard) { 
   this.loggedIn = _fbauthstate.isLoggedIn();
    console.log("ngOnIt auth state: " + this.loggedIn);
  }

  ngOnInit() {
     }

  ngOnDestory(){
   
  }

  logout(){
     this._fbauthstate.logout().then(function() {
     console.log("Logout successful.")
     localStorage.removeItem('user');
     //this._datashare.setauthstate(false);
     this.router.navigate(['/login']);
   }).catch(function(error) {
     console.log("Logout unsuccessful.")
   });   

}

  
}