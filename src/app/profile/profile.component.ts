import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email; 
  photo;
  constructor(private _authentication : AuthenticationService) { 
  

   }

  

  ngOnInit() {
       
   this.email =  this._authentication.getUser().email

   if( this._authentication.getUser().photoURL != null){
   this.photo = this._authentication.getUser().photoURL;

  }

}
}
