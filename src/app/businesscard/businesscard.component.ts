import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import { Router } from '@angular/router';
import { DatasharingService } from '../datasharing.service';
import {Card} from '../model/card'
import { IBuscardcomp } from '../interfaces/ibuscardcomp';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit, IBuscardcomp {
  @Input() name ;
  @Input() title ;
  @Input() web ;
  @Input() address ;
  @Input() phone ;
  @Input() email ;
  @Input() company;
  @Input() image;
  @Input() id; 

  
  businessCard : Card; 
  

  constructor(private _firestore : FireStoreService, private router: Router, private _datasharing : DatasharingService) { 

  }

  ngOnInit() {
  }

  delete(id : string){
    console.log("Delete business card button pressed. " + this.id)
   this._firestore.destroy(this.id);
  }

  update(id : string){
    this.createCard(); 
    console.log("Update button pressed. " + this.id)
    this._datasharing.setCardId(this.id, this.businessCard);
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
    this.businessCard.setImage(this.image);
    this.businessCard.setId(this.id);

  }
}
