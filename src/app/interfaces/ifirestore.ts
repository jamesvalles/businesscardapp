import { Card } from "../model/card";
import { Observable } from 'rxjs';

export interface IFirestore{
    read() : Observable<any[]>;
    create(businessCard : Card) : void; 
    update(businessCard : Card, id: string): void; 
    destroy(id : string): void; 
}