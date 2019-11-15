import { Observable } from 'rxjs';

export interface IAuth{
    getUser(): object; 
    signIn(email: string, password: string) : Promise<firebase.auth.UserCredential>;
    createAccount(email: string, password: string) : void; 
    authCheck(): boolean;
    logout() : void; 
    setAuthState(value : boolean): void; 
    getAuthState():  Observable<any>; 
 
}