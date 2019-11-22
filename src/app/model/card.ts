import { ICard } from '../interfaces/icard';
import { runInThisContext } from 'vm';

  export class Card implements ICard{
   
    name: string; 
    title: string;
    company:string;
    phone : string; 
    email: string; 
    web: string; 
    address : string; 
    image: string;
   
    constructor(){
    }

    setEmail(email : string){
        this.email = email;
       
    }

    setAddress(address : string){
        this.address = address; 
    }

    setName(name : string){
        this.name = name
       
    }

    setCompany(company : string){
        this.company = company; 
    }

    setPhone(phone: string){
        this.phone = phone
      
    }

    setTitle(title: string){
        this.title = title;
    }

    setWeb(web: string){
        this.web = web;
    }

    setImage(image : string){
        this.image = image; 
    }

    getAddress(){
       return this.address; 
    }

    getEmail(){
        return this.email; 
    }

    getCompany(){
        return this.company; 
    }

    getName(){
       return this.name; 
    }

    getPhone(){
        return this.phone; 
    }

    getTitle(){
        return this.title; 
    }

    getWeb(){
       return this.web;
    }


    getImage(){
        return this.image; 
    }
}