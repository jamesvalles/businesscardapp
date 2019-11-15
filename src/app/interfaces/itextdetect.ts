import {Card} from '../model/card'

export interface ITextDetect{
    detectText(payload: any) : void; 
    setBusinessCard() : void; 
}