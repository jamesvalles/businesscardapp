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
      this.authstate =  this._authService.authCheck();
       if(this.authstate){
        return true; 
      }else{
      // alert("You don't have permission to view this page.");
       this.router.navigate(['']);
       return false; 
      }
    }
    }

  
    

  
  

