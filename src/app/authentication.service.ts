import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authstate : Observable<any>; 
  user;

  constructor(private angularFireAuth : AngularFireModule, private router : Router) {
    firebase.initializeApp(environment.firebase);

   }

   ngOnInit(){
    
   this.user =  firebase.auth().currentUser;
     }

   
     getUser(){
       return firebase.auth().currentUser;
     }

   signIn(email: string, password: string) {
     console.log("Authenticated has started.")
   return firebase.auth().signInWithEmailAndPassword(email, password);
  }


  createAccount(email: string, password: string) {
    console.log("Create account has started.");
   firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(res => {
       console.log('Account successfully created!');
       alert("Account sucessfully created, please sign-in!")
     })
     .catch(err => {
       console.log('Account creation unsuccessful! ',err.message);
       alert(err.message)
     });
 }

  authCheck(): boolean{
    this.user =  firebase.auth().currentUser;
    if(this.user != null){
      console.log("User is logged in!" + this.user);
      //this.authstate = true;
      return true;
    }else{
     // this.authstate = false; 
      console.log("User is not logged in!" + this.user );
      return false;
    }
  }

  logout(){
    return firebase.auth().signOut();
  }


setAuthState(value : boolean){
 // this.authstate = value; 
}

getAuthState(){
  return this.authstate; 
}

}
