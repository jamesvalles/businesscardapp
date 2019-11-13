import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAuth : AngularFireModule) {
    firebase.initializeApp(environment.firebase);
   }

   signIn(email: string, password: string) {
     console.log("Authenticated has started.")
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  authCheck(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       console.log("User is logged in!");
       return true;
      } else {
        console.log("User is not logged in")
        return false;
      }
      });
  }
}
