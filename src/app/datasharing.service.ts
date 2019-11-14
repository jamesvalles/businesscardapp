import { Injectable } from '@angular/core';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  id : string;
  businessCard: Card; 

  constructor() { }

  setCardId(id : string, businessCard : Card){
    this.id = id;
    this.businessCard = businessCard; 

  }

  getCardId(){
    return this.id;
  }

  getCardObject(){
    return this.businessCard;
  }
}
