export class Gebruiker {
    gebruikerID: number;
    email: string;
    gebruikersnaam: string;
    wachtwoord: string;
    token: string;

    constructor(gebruikerID: number,  email: string, gebruikersnaam: string, wachtwoord: string, token: string) {
        this.gebruikerID =gebruikerID;
        this.email = email;
        this.gebruikersnaam = gebruikersnaam;
        this.wachtwoord = wachtwoord;
        this.token = token;
    }
}
