import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RelatieDto } from '../models/relatie-dto.model';
import { Relatie } from '../models/relatie.model';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  polls: PollGebruiker[];
  gefilterd: boolean;
  selectedPollGebruiker: PollGebruiker = null;
  vriendForm: FormGroup;
  submitted: boolean;
  relatieDto: RelatieDto;
  vriendschapsverzoeken: any;
  relatie: Relatie;
  naam: string;
  pollGebruiker: PollGebruiker;

  constructor(private _pollService: PollService, private router: Router, private fb: FormBuilder) {
    // Alle polls waar de gebruiker deel van uit maakt
    this.getPollsVanGebruiker();
    // Alle vrienden/ verzoeken voor de huidige gebruiker
    this.getVriendSchapsVerzoeken();
    this.naam = localStorage.getItem("naam");
  }

  //Haalt alle vriendschapsverzoeken/vrienden binnen van de huidige gebruiker
  getVriendSchapsVerzoeken() {
    this._pollService.getVriendschapverzoekenVanGebruiker().subscribe(result => {
      this.vriendschapsverzoeken = result;
      //console.log(this.vriendschapsverzoeken);
    });
  }

  // Haalt alle polls binnen van de huidige gebruiker
  getPollsVanGebruiker() {
    this._pollService.getPollsVanGebruiker().subscribe(result => {
      this.polls = result;
      //console.log(this.polls);
    });
  }

  //Togglet de table filter voor gestemd of niet gestemd
  toggleFilter() {
    this.gefilterd = !this.gefilterd;
  }

  // Slaagt de gekozen poll om op te stemmen op. En navigeert naar de stemOpPollComponent
  geefStem(p: PollGebruiker) {
    this._pollService.gekozenPollGebruiker.next(p);
    this.router.navigate(["stemOpPoll"]);
  }

  // Slaagt de gekozen poll in de pollService. Navigeert vervolgens naar de bekijkPollComponent
  bekijkPoll(poll: Poll) {
    //console.log(poll);
    this._pollService.gekozenPoll.next(poll);
    this.router.navigate(["bekijkPoll"]);
  }

  // Neemt de geselecteerde poll en ID. Dit is de POllgebruiker, dus als de gebruiker deze archiveert zal hij niet meer zichtbaar zijn in de lijst van ZIJN polls
  // Niet voor iedereen, elke gebruiker kan kiezen of hij een poll archiveert
  archiveerPoll(pollGebruikerID: number, pollGebruiker: PollGebruiker) {
    this.pollGebruiker = pollGebruiker;
    this.pollGebruiker.isActief = false;
    if (confirm("Wil je deze poll archiveren?")) {
      this._pollService.archiveerPoll(pollGebruikerID, this.pollGebruiker).subscribe(result => {
        this.getPollsVanGebruiker();
      }, error => {
        alert(error);
      });
    }
  }

  // Neemt het vriendschapsverzoek en accepteert dit 
  Bevestig(relatieId: number, gebruikersID: number) {
    this.relatie = new Relatie(relatieId, gebruikersID, parseInt(localStorage.getItem("id")), true);
    //console.log(this.relatie);
    this._pollService.accepteerVerzoek(relatieId, this.relatie).subscribe(result => {
      this.getVriendSchapsVerzoeken();
    }, error => {
      alert(error);
    });
  }

  // Neemt het vriendschapsverzoek en delete het
  Delete(relatieId: number) {
    //console.log(relatieId);
    this._pollService.deleteVerzoek(relatieId).subscribe(result => {
      //console.log(result);
      this.getVriendSchapsVerzoeken();
    }, error => {
      alert(error);
    });
  }

  // Initialiseer het vriendForm
  ngOnInit() {
    this.vriendForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })
  }
  get f() { return this.vriendForm.controls; }

  // Als ik een vriend toevoeg controleer of het valide is, Stuur daarna het verzoek
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.vriendForm.invalid) {
      return;
    }
    this.relatieDto = this.vriendForm.value;
    this.relatieDto.zenderID = parseInt(localStorage.getItem("id"));
    //console.log(this.relatieDto);

    this._pollService.addRelatie(this.relatieDto).subscribe(result => {
      //console.log(result);
      alert("Toegevoegd, wacht nu tot het verzoek geacepteerd is!");
      this.getVriendSchapsVerzoeken();
    }, error => {
      alert(error);
    });
  }
}
