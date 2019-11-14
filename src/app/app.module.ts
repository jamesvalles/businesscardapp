import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { NewsbusinesscardComponent } from './newsbusinesscard/newsbusinesscard.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { SearchbusinesscardsComponent } from './searchbusinesscards/searchbusinesscards.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from 'ngx-webcam';
import { ProfileComponent } from './profile/profile.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FireStoreService } from './firestore.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamconnectService } from './webcamconnect.service';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinesscardComponent,
    NewsbusinesscardComponent,
    BusinesscardsComponent,
    SearchbusinesscardsComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
    HomeComponent,
    NavbarComponent,
    TopnavComponent,
    FooterComponent,
    CameraComponent,
    ProfileComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    WebcamModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FireStoreService, WebcamconnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
