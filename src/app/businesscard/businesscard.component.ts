import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import { Router } from '@angular/router';
import { DatasharingService } from '../datasharing.service';
import {Card} from '../model/card'

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {
  @Input() name ;
  @Input() title ;
  @Input() web ;
  @Input() address ;
  @Input() phone ;
  @Input() email ;
  @Input() company;

  id : string; 
  businessCard : Card; 
  

  constructor(private _firestore : FireStoreService, private router: Router, private _datasharing : DatasharingService) { }

  ngOnInit() {
  }

  delete(phone : string){
    console.log("Delete business card button pressed. " + phone)
   this._firestore.destroy(phone);
  }

  update(phone : string){
    this.createCard(); 
    console.log("Update button pressed.")
    this._datasharing.setCardId(phone, this.businessCard);
    this.router.navigate(['/update']);
  }


  createCard(){
    this.businessCard = new Card()
    this.businessCard.setName(this.name);
    this.businessCard.setTitle(this.title);
    this.businessCard.setCompany(this.company);
    this.businessCard.setEmail(this.email);
    this.businessCard.setPhone(this.phone);
    this.businessCard.setWeb(this.web);
    this.businessCard.setAddress(this.address);
  }
}
