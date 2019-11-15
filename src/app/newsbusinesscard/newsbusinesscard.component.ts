import { Component, OnInit } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {Card} from '../model/card'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsbusinesscard',
  templateUrl: './newsbusinesscard.component.html',
  styleUrls: ['./newsbusinesscard.component.css']
})
export class NewsbusinesscardComponent implements OnInit {
  form = new FormGroup({
  name: new FormControl(), 
  title: new FormControl(), 
  company: new FormControl(), 
  phone: new FormControl(),
  email: new FormControl(),
  web: new FormControl(),  
  address: new FormControl()
  });  

  constructor(private _firestoreService: FireStoreService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const businessCard = this.createBusinessCard();
    console.log(businessCard);
    this._firestoreService.create(businessCard);
    this.router.navigate(['/cards']);
    this.form.reset();
  }

  

  createBusinessCard(){
    var businessCard  = new Card();
    businessCard.setName(this.form.controls['name'].value);
    businessCard.setTitle(this.form.controls['title'].value);
    businessCard.setCompany(this.form.controls['company'].value);
    businessCard.setEmail(this.form.controls['email'].value);
    businessCard.setPhone(this.form.controls['phone'].value);
    businessCard.setWeb(this.form.controls['web'].value);
    businessCard.setAddress(this.form.controls['address'].value);
    return businessCard;
  }

  
}
