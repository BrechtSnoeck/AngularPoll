import { Poll } from './poll.model';

export class Antwoord {
    antwoordID: number;
    optie: string;
    pollID: number;
    poll: Poll;
    stemmen: any[];
    

    constructor(antwoordID: number, optie: string, pollID: number, stemmen: any[]) {
        this.antwoordID = antwoordID;
        this.optie = optie;
        this.pollID = pollID;
        this.stemmen = stemmen;
    }
}
