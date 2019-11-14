import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {Card} from '../model/card'
import { FormControl, FormGroup } from '@angular/forms';
import {BusinesscardComponent} from '../businesscard/businesscard.component'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() id ;
 

  form = new FormGroup({
  name: new FormControl(), 
  title: new FormControl(), 
  company: new FormControl(), 
  phone: new FormControl(),
  email: new FormControl(),
  web: new FormControl(),  
  address: new FormControl()
  });  

  constructor(private _firestoreService: FireStoreService) { }

  ngOnInit() {
  }

  onSubmit(){
    const businessCard = this.createBusinessCard();
    console.log(businessCard);
    this._firestoreService.create(businessCard);
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

