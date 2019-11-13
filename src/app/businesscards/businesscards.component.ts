import { Component, OnInit } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {BusinesscardComponent} from '../businesscard/businesscard.component'

@Component({
  selector: 'app-businesscards',
  templateUrl: './businesscards.component.html',
  styleUrls: ['./businesscards.component.css']
})
export class BusinesscardsComponent implements OnInit {
  businessCards;
  constructor(private _firestore: FireStoreService) {
    this.businessCards = _firestore.read();
   }

  ngOnInit() {
  }

}
