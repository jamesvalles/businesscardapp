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

  constructor(private angularFireAuth : AngularFireModule, private router : Router) {
    firebase.initializeApp(environment.firebase);
   }

   ngOnInit(){
     //this.authstate = new Observable(observer) =>{

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
    let user = firebase.auth().currentUser
    if(user != null){
      console.log("User is logged in!" + user);
      //this.authstate = true;
      return true;
    }else{
     // this.authstate = false; 
      console.log("User is not logged in!" + user );
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
