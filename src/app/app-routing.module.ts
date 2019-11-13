import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraComponent } from './camera/camera.component';
import { NewsbusinesscardComponent } from './newsbusinesscard/newsbusinesscard.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'camera', component: CameraComponent},
  {path: 'new', component: NewsbusinesscardComponent},
  {path: 'cards', component: BusinesscardsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
