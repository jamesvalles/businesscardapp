import { NgForm } from '@angular/forms';


export interface ILogincomp{
    login(f : NgForm): void; 
    signup(f: NgForm) : void; 
    redirect(): void; 

}


