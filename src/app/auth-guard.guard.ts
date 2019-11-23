import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../app/authentication.service'
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  authstate;
  constructor(private _authService : AuthenticationService, private router : Router){
    
  }

  ngOnInit() {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // this.authstate =  this._authService.authCheck();
     //console.log("Hello " + this._authService.getLocalStorageUser())
     this.authstate = this._authService.getLocalStorageUser() !== null;
       if(this.authstate){
         console.log("Auth state: true.");
        return true; 
      }else{
      // alert("You don't have permission to view this page.");
      console.log("Auth state: false.");
       this.router.navigate(['/login']);
       return false; 
      }
    }
    }

  
    

  
  

