import { Component, OnInit } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import {BusinesscardComponent} from '../businesscard/businesscard.component'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-searchbusinesscards',
  templateUrl: './searchbusinesscards.component.html',
  styleUrls: ['./searchbusinesscards.component.css']
})
export class SearchbusinesscardsComponent implements OnInit {
  businessCards;

mySubscription: any;
  constructor(private _firestore: FireStoreService, private router: Router) {
    this.businessCards = _firestore.returnSearch();
    console.log(this.businessCards);
    console.log("Constructor running.")


    
this.router.routeReuseStrategy.shouldReuseRoute = function () {
  return false;
};
this.mySubscription = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
    // Trick the Router into believing it's last link wasn't previously loaded
    this.router.navigated = false;
  }
});
   }

  ngOnInit() {
    console.log("Ngonit running.")
  }


ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}
}
