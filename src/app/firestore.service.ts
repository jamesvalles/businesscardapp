import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Card} from './model/card'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService{
  businesscards: Observable<any[]>;

  constructor(private db : AngularFirestore, private router: Router ){
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
    Company: businessCard.company,
    Title: businessCard.title, 
    Web:  businessCard.web,
    Id: businessCard.phone
});
}

 update(businessCard : Card, id: string){
 console.log("Business card updated successfully.")
 try{
 this.db.collection('cards').doc(id).set({
  Name: businessCard.name,
  Phone: businessCard.phone,
  Title: businessCard.title, 
  Web:  businessCard.web,
  Company: businessCard.company,
  Address: businessCard.address,
  Email: businessCard.email,
  Id: id 
})
  this.router.navigate(['/cards']);
  console.log("Navigate to dashboard");
 }catch{
   alert("Update failed. Please try again")
 }

}

 destroy(id : string){
  console.log("Business card removed from Firebase. " + id)
  this.db.collection('cards').doc(id).delete();
}
}