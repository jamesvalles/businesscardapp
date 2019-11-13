import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn; 
  constructor(private _authservice : AuthenticationService) {

   }

  ngOnInit() {
    this.loggedIn = this._authservice.authCheck(); 
  }

  login(f : NgForm){ 
    console.log("Sign-in button pressed.");
    console.log("Credentials: " + f.controls['email'].value +", " + f.controls['password'].value);
    this._authservice.signIn(f.controls['email'].value, f.controls['password'].value);
    f.reset();
  }

  
  signup(){
    console.log("Sign-up button pressed.")
  }

  
}

