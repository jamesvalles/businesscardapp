  export class Card {
   
    name: string; 
    title: string;
    company:string;
    phone : string; 
    email: string; 
    web: string; 
    address : string; 
   
    constructor(){
    }

    setEmail(email : string){
        this.email = email;
        debugger 
    }

    setAddress(address : string){
        this.address = address; 
    }

    setName(name : string){
        this.name = name
        debugger
    }

    setCompany(company : string){
        this.company = company; 
    }

    setPhone(phone: string){
        this.phone = phone
        debugger
    }

    setTitle(title: string){
        this.title = title;
    }

    setWeb(web: string){
        this.web= web;
    }

    getAddress(){
       return this.address; 
    }

    getEmail(){
        return this.email; 
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


}