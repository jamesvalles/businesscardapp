import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/catch';
import {Card} from '../app/model/card';
import { FireStoreService } from './firestore.service';

@Injectable()
export class WebcamconnectService {
  url: string;
  businesscard: Card;
  constructor(private http: HttpClient, private _firestoreservice : FireStoreService ) {
    this.url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.googleApi}`;
    this.businesscard = new Card();
  }

  detectText(payload: any) {
    console.log("Detect text started.")
    this.http.post(this.url, payload).pluck('responses', '0', 'textAnnotations')
      .subscribe(
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
              // const fullname = (temp.match('^\\p{L}+[\\p{L}\\p{Z}\\p{P}]{0,}') || [''])[0];
              const fullname = (temp.match(/\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \']{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\']{1}[A-Z]{1}[a-z]{1,30}){2,5}/) || [''])[0];
              if (fullname !== '') {
                const fn = fullname.split(' ')[0];
                const ln = fullname.split(' ')[1];
                this.businesscard.setName(fn + " " + ln);
                
                return;
              }
            
              console.log(this.businesscard);
              debugger
            }
          );
        }
      );
  }
}