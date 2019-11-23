import { PollGebruiker } from './poll-gebruiker.model';
import { Antwoord } from './antwoord.model';

export class Poll {
    pollID: number;
    naam: string;
    pollGebruikers: PollGebruiker[];
    antwoorden: Antwoord[];

    constructor(pollID: number, naam: string, pollGebruikers: PollGebruiker[], antwoorden: Antwoord[]) {
        this.pollID = pollID;
        this.naam = naam;
        this.pollGebruikers = pollGebruikers;
        this.antwoorden = antwoorden;
    }
}
