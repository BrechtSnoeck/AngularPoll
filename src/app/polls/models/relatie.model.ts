export class Relatie {
    relatieID: number;
    gebruikerID_1: number;
    gebruikerID_2: number;
    status: boolean;

    constructor(relatieID: number, gebruikerID_1: number, gebruikerID_2: number, status: boolean) {
        this.relatieID = relatieID;
        this.gebruikerID_1 = gebruikerID_1;
        this.gebruikerID_2 = gebruikerID_2;
        this.status = status;
    }
}
