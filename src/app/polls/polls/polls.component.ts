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
  selectedPollGebruiker: PollGebruiker =null;
  vriendForm : FormGroup;
  submitted: boolean;
  relatieDto: RelatieDto;
  vriendschapsverzoeken: any;
  relatie: Relatie;
  naam: string;

  constructor(private _pollService: PollService, private router: Router, private fb: FormBuilder) {
      this._pollService.getPollsVanGebruiker().subscribe(result => {
      this.polls = result;
     // console.log(this.polls);
     });
    this.getVriendSchapsVerzoeken();
     this.naam = localStorage.getItem("naam");
   }

   getVriendSchapsVerzoeken() {
    this._pollService.getVriendschapverzoekenVanGebruiker().subscribe(result => {
      this.vriendschapsverzoeken = result;
      //console.log(this.vriendschapsverzoeken);
    });
   }

   toggleFilter() {
      this.gefilterd = !this.gefilterd;
   }

   geefStem(p: PollGebruiker) {
    this._pollService.gekozenPollGebruiker.next(p);
    this.router.navigate(["stemOpPoll"]);
   }

   bekijkPoll(poll: Poll) {
     //console.log(poll);
    this._pollService.gekozenPoll.next(poll);
    this.router.navigate(["bekijkPoll"]);
   }

   Bevestig(relatieId: number, gebruikersID: number) {
     this.relatie = new Relatie(relatieId,gebruikersID,parseInt(localStorage.getItem("id")), true);
     //console.log(this.relatie);
     this._pollService.accepteerVerzoek(relatieId, this.relatie).subscribe(result => {
      this.getVriendSchapsVerzoeken();
    }, error =>  {
      alert(error);
    });
   }

   Delete(relatieId: number) {
    //console.log(relatieId);
    this._pollService.deleteVerzoek(relatieId).subscribe(result => {
     //console.log(result);
   }, error =>  {
     alert(error);
   });
   }

  ngOnInit() {
    this.vriendForm = this.fb.group({
      email: ["",[Validators.required, Validators.email]]
    })
  }
  get f() {return this.vriendForm.controls; }

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
    }, error =>  {
      alert(error);
    });
}
}
