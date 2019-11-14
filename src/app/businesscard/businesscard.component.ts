import { Component, OnInit, Input } from '@angular/core';
import {FireStoreService} from '../firestore.service';
import { Router } from '@angular/router';
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
  

  constructor(private _firestore : FireStoreService, private router: Router) { }

  ngOnInit() {
  }

  delete(phone : string){
    console.log("Delete business card button pressed. " + phone)
   this._firestore.destroy(phone);
  }

  update(phone : string){
    
    console.log("Update button pressed.")
    this.router.navigate(['/update']);
  }
}
