import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraComponent } from './camera/camera.component';
import { NewsbusinesscardComponent } from './newsbusinesscard/newsbusinesscard.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import {AuthGuardGuard} from '../app/auth-guard.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: 'camera', component: CameraComponent, canActivate:[AuthGuardGuard]},
  {path: 'new', component: NewsbusinesscardComponent, canActivate:[AuthGuardGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuardGuard]},
  {path: 'cards', component: BusinesscardsComponent, canActivate:[AuthGuardGuard]},
  {path: '**', component: NotfoundComponent,  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
