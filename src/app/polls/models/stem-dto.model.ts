export class StemDto {
    gebruikerID: number;
    pollGebruikerID: number;
    antwoordIDs: number[];

    constructor(gebruikerID: number,antwoordIDs: number[], pollGebruikerID: number) {
        this.gebruikerID = gebruikerID;
        this.antwoordIDs = antwoordIDs;
        this.pollGebruikerID = pollGebruikerID;
    }
}
