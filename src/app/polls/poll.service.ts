import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Poll } from './models/poll.model';
import { PollGebruiker } from './models/poll-gebruiker.model';
import { PollDto } from './models/poll-dto.model';
import { StemDto } from './models/stem-dto.model';
import { RelatieDto } from './models/relatie-dto.model';
import { Relatie } from './models/relatie.model';

@Injectable()
export class PollService {
  gekozenPollGebruiker = new BehaviorSubject(new PollGebruiker(0, 0, 0, null, null, false, false,true));
  gekozenPoll = new BehaviorSubject( new Poll(0,"",null,null));
  
  constructor(private http: HttpClient) { }

  getPollsVanGebruiker(): Observable<PollGebruiker[]> {
    return this.http.get<PollGebruiker[]>("https://localhost:44317/api/PollGebruiker/" + localStorage.getItem("id"));
  }

  getVriendenVanGebruiker(): Observable<any[]> {
    return this.http.get<any[]>("https://localhost:44317/api/Relatie/" + localStorage.getItem("id"));
  }

  getVriendschapverzoekenVanGebruiker(): Observable<any[]> {
    return this.http.get<any[]>("https://localhost:44317/api/Relatie/GetRelatieVerzoeken/" + localStorage.getItem("id"))
  }

  addPoll(pollDto: PollDto) {
    return this.http.post<PollDto>("https://localhost:44317/api/Poll/", pollDto);
  }

  addStem(stemDto: StemDto) {
    return this.http.post<StemDto>("https://localhost:44317/api/Stem/", stemDto);
  }

  addRelatie(relatieDto: RelatieDto) {
    return this.http.post<StemDto>("https://localhost:44317/api/Relatie/", relatieDto);
  }

  accepteerVerzoek(id: number, relatie: Relatie) {
    return this.http.put<Relatie>("https://localhost:44317/api/Relatie/action/" +  id, relatie);
  }

  archiveerPoll(id: number, pollGebruiker: PollGebruiker) {
    return this.http.put<PollGebruiker>("https://localhost:44317/api/PollGebruiker/" +  id, pollGebruiker);
  }

  deleteVerzoek(relatieID: number) {
    return this.http.delete<Relatie>("https://localhost:44317/api/Relatie/" + relatieID);
  }
}
