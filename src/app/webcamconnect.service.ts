import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/catch';
import {Card} from '../app/model/card';
import { FireStoreService } from './firestore.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import {ITextDetect} from '../app/interfaces/itextdetect';

@Injectable()
export class WebcamconnectService implements ITextDetect {
  url: string;
  businesscard: Card;
  constructor(private http: HttpClient, private _firestoreservice : FireStoreService, private router : Router ) {
    this.url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.googleApi}`;
    this.businesscard = new Card();
  }

  detectText(payload: any) {

    this.setBusinessCard(); 
    console.log("Detect text started.")
    this.http.post(this.url, payload).pluck('responses', '0', 'textAnnotations').subscribe(
        (value: [any]) => {
          const restString = [];
          value.forEach(
            result => {
              const temp = result.description;
              // verify email
              const email = (temp.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))(.*)$/) || [''])[0];
              if (email !== '') {
                this.businesscard.setEmail(email);
                return;
              }     
              // verify phone
              const phone = (temp.match('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}(.*)$') || [''])[0];
              if (phone !== '') {
                this.businesscard.setPhone(phone);
                return;
              }
              // verify name
              const fullname = (temp.match(/\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/) || [''])[0];
              if (fullname !== '') {
                const fn = fullname.split(' ')[0];
                const ln = fullname.split(' ')[1];
                this.businesscard.setName(fn + " " + ln);         
                return;
              }

              //company
              const address = (temp.match(/\d+(\s+\w+){1,}\s+(?:st(?:\.|reet)?|dr(?:\.|ive)?|pl(?:\.|ace)?|ave(?:\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/) || [''])[0];
              if (address !== '') {
               // const fn = address.split(' ')[2];
               // const ln = address.split(' ')[3];
                this.businesscard.setAddress(address);         
                return;
              }

              //verify web 
              const web = (temp.match('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})') || [''])[0];
              if (web !== '') {
                this.businesscard.setWeb(web);
                return;
              }
            }
          );console.log(this.businesscard);
          this._firestoreservice.create(this.businesscard);
          this.router.navigate(['cards'])
        }
      );    
  }

  setBusinessCard(){
    this.businesscard.setName("NA");
    this.businesscard.setPhone(Math.random().toString(36).substring(3,9));
    this.businesscard.setEmail("NA");
    this.businesscard.setWeb("NA");
    this.businesscard.setTitle("NA");
    this.businesscard.setAddress("NA");
    this.businesscard.setCompany("NA");
  }
}