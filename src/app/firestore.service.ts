import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Card} from './model/card'

@Injectable({
  providedIn: 'root'
})
export class FireStoreService{
  businesscards: Observable<any[]>;

  constructor(private db : AngularFirestore){
   this.businesscards = db.collection('cards').valueChanges();   
   }
  
   read() : Observable<any[]>{
    return this.businesscards;
   }

  create(businessCard : Card){
   console.log("Object in service: " + businessCard.name);
  console.log("Pushed card to database.")
  this.db.collection('cards').doc(businessCard.phone).set({
    Address: businessCard.address,
    Email: businessCard.email,
    Name: businessCard.name,
    Phone: businessCard.phone,
    Title: businessCard.title, 
    Web:  businessCard.web,
});
}

 update(businessCard : Card){
 console.log("Business card updated successfully.")
 this.db.collection('cards').doc(businessCard.phone).set({
  Name: businessCard.name,
  Phone: businessCard.phone,
  Title: businessCard.title, 
  Web:  businessCard.web,
  Address: businessCard.address,
  Email: businessCard.email
})
}

 destroy(id : string){
  console.log("Business card removed from Firebase. " + id)
  this.db.collection('cards').doc(id).delete();
}
}