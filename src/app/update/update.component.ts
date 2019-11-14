import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {Card} from '../model/card'
import { FormControl, FormGroup } from '@angular/forms';
import {BusinesscardComponent} from '../businesscard/businesscard.component'
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id ;
  businessCard; 
  test; 

  form = new FormGroup({
  name: new FormControl(), 
  title: new FormControl(), 
  company: new FormControl(), 
  phone: new FormControl(),
  email: new FormControl(),
  web: new FormControl(),  
  address: new FormControl()
  });  

  constructor(private _firestoreService: FireStoreService, private _datasharing : DatasharingService) { }

  ngOnInit() {
    this.id = this._datasharing.getCardId();
    this.businessCard = this._datasharing.getCardObject();
    this.setFormControls();

  }

  onSubmit(){
    this.businessCard = this.createBusinessCard();
    this._firestoreService.update(this.businessCard, this.id);
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

  setFormControls(){
    this.form.controls['name'].setValue(this.businessCard.getName());
    this.form.controls['title'].setValue(this.businessCard.getTitle());
    this.form.controls['company'].setValue(this.businessCard.getCompany());
    this.form.controls['email'].setValue(this.businessCard.getEmail());
    this.form.controls['phone'].setValue(this.businessCard.getPhone());
    this.form.controls['web'].setValue(this.businessCard.getWeb());
    this.form.controls['address'].setValue(this.businessCard.getAddress());
  }

  
}

