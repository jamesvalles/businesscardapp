

export interface ICard{
    setEmail(email : string) : void; 
    setAddress(address : string): void;  
    setName(name : string) : void;
    setCompany(company : string) : void; 
    setPhone(phone: string) : void; 
    setTitle(title: string) : void; 
    setWeb(web: string) : void; 
    getAddress(): string; 
    getEmail(): string; 
    getCompany(): string; 
    getName() : string;
    getPhone(): string; 
    getTitle(): string; 
    getWeb() : string; 
}