import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false; 
  constructor(private _authservice : AuthenticationService, private router : Router) {

   }

  ngOnInit() {
  
  }

  login(f : NgForm){ 
    console.log("Sign-in button pressed.");
    this._authservice.signIn(f.controls['email'].value, f.controls['password'].value)
    .then(res => {
      console.log('Successfully signed in! Redirecting.');
      this.router.navigate['/cards'];
  
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

