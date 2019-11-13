import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
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
  

  constructor(private _firestore : FireStoreService) { }

  ngOnInit() {
  }

  delete(phone : string){
    console.log("Delete business card button pressed. " + phone)
   this._firestore.destroy(phone);
  }
}
