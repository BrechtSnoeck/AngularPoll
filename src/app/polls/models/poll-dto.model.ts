export class PollDto {
    naam: string;
    opties: string[];
    makerID: number;
    vriendenIDs: number[];

    constructor(naam: string, opties: string[], makerID: number, vriendenIDs: number[]) {
        this.naam = naam;
        this.opties = opties;
        this.makerID = makerID;
        this.vriendenIDs =vriendenIDs;
    }
}
