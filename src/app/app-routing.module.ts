import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraComponent } from './camera/camera.component';
import { NewsbusinesscardComponent } from './newsbusinesscard/newsbusinesscard.component';
import { BusinesscardsComponent } from './businesscards/businesscards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AuthGuardGuard} from '../app/auth-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import {UpdateComponent} from './update/update.component'
import { SearchbusinesscardsComponent } from './searchbusinesscards/searchbusinesscards.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: 'camera', component: CameraComponent, canActivate:[AuthGuardGuard]},
  {path: 'newCard', component: NewsbusinesscardComponent, canActivate:[AuthGuardGuard]},
  {path: 'userProfile', component: ProfileComponent, canActivate:[AuthGuardGuard]},
  {path: 'businessCards', component: BusinesscardsComponent, canActivate:[AuthGuardGuard]},
  {path: 'update', component: UpdateComponent, canActivate:[AuthGuardGuard]},
  {path: 'search', component: SearchbusinesscardsComponent,  pathMatch: 'full' }, 
  {path: 'notFound', component: NotfoundComponent,  pathMatch: 'full' }, 
  {path: '**', component: NotfoundComponent,  pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
