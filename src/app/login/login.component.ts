import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { DatasharingService } from '../datasharing.service';
import { ILogincomp } from '../interfaces/ilogincomp';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ILogincomp{
  loggedIn;
  constructor(private _authservice : AuthenticationService, private router : Router, private _datashare : DatasharingService) {

   }

  ngOnInit() {
  
  }

  login(f : NgForm){ 
    console.log("Sign-in button pressed.");
    this._authservice.signIn(f.controls['email'].value, f.controls['password'].value)
    .then(res => {
      console.log('Successfully signed in! Redirecting.');
      if(res){
      this._datashare.setauthstate(true);
      this.router.navigate(['/businessCards']);
      }
    })
    .catch(err => {

      console.log('Something is wrong:',err.message);
      alert(err.message)
    });
    f.reset();
  }


  signup(f: NgForm){
    console.log("Sign-up button pressed.")
    this._authservice.createAccount(f.controls['email'].value, f.controls['password'].value);
  }

  redirect(){
    if(this.loggedIn){
    console.log("User logged in. Redirecting to dashboard")
    this.router.navigate(['/businesscards']);
    }
  }

  
}

