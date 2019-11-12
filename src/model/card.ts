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

    setemail(email : string){
        this.email = email; 
    }

    setAddress(address : string){
        this.address = address; 
    }

    setName(name : string){
        this.name = name
    }

    setPhone(phone: string){
        this.phone = phone
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