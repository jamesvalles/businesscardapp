import { Component } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { AuthenticationService } from './authentication.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'businesscard-app';

  constructor(private _authService : AuthenticationService){
    
  }

  ngOnInit() {
    
  }

}



