import {Card} from '../model/card'

export interface ITextDetect{
    detectText(payload: any, image : string) : void; 
    setBusinessCard() : void; 
}