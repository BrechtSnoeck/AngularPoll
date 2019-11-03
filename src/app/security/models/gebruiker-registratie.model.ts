export class GebruikerRegistratie {
    gebruikerID: number;
    email: string;
    gebruikersnaam: string;
    wachtwoord: string;
    wachtwoordConfirmatie: string;

    constructor(gebruikerID: number,  email: string, gebruikersnaam: string, wachtwoord: string, wachtwoordConfirmatie: string) {
        this.gebruikerID =gebruikerID;
        this.email = email;
        this.gebruikersnaam = gebruikersnaam;
        this.wachtwoord = wachtwoord;
        this.wachtwoordConfirmatie = wachtwoordConfirmatie;
    }
}
