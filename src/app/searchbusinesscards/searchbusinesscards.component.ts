import { Component, OnInit } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {BusinesscardComponent} from '../businesscard/businesscard.component'

@Component({
  selector: 'app-searchbusinesscards',
  templateUrl: './searchbusinesscards.component.html',
  styleUrls: ['./searchbusinesscards.component.css']
})
export class SearchbusinesscardsComponent implements OnInit {
  businessCards;
  constructor(private _firestore: FireStoreService) {
    this.businessCards = _firestore.returnSearch();
    console.log(this.businessCards);
   }

  ngOnInit() {
  }

}
