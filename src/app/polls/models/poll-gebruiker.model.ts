import { Poll } from './poll.model';
import { Gebruiker } from 'src/app/security/models/gebruiker.model';

export class PollGebruiker {
    pollGebruikerID: number;
    pollID: number;
    gebruikerID: number;
    gestemd: boolean;
    isAdmin: boolean;
    isActief: boolean;
    poll: Poll;
    gebruiker: Gebruiker;

    constructor(pollGebruikerID: number, pollID: number, gebruikerID: number, poll: Poll, gebruiker: Gebruiker, gestemd: boolean, isAdmin: boolean,isActief: boolean ) {
        this.pollGebruikerID = pollGebruikerID;
        this.pollID = pollID;
        this.gebruikerID = gebruikerID;
        this.gestemd = gestemd;
        this.isAdmin = isAdmin;
        this.poll = poll;
        this.gebruiker = gebruiker;
        this.isActief = isActief;
    }
}
