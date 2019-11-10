import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { NewsbusinesscardComponent } from './newsbusinesscard/newsbusinesscard.component';
import { WebcamComponent } from './webcam/webcam.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { SearchbusinesscardsComponent } from './searchbusinesscards/searchbusinesscards.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinesscardComponent,
    NewsbusinesscardComponent,
    WebcamComponent,
    BusinesscardsComponent,
    SearchbusinesscardsComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
