import { Component, OnInit, Input } from '@angular/core';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { StemDto } from '../models/stem-dto.model';

@Component({
  selector: 'app-stem-op-poll',
  templateUrl: './stem-op-poll.component.html',
  styleUrls: ['./stem-op-poll.component.scss']
})
export class StemOpPollComponent implements OnInit {
  pollGebruiker: PollGebruiker;
  stemForm : FormGroup;
  submitted: boolean;
  stemDto: StemDto;

  constructor(private _pollService: PollService, private fb: FormBuilder, private router: Router) {
    this._pollService.gekozenPollGebruiker.subscribe(e=> {
          //console.log(e);
          this.pollGebruiker = e;
          if (this.pollGebruiker.gebruikerID == 0) {
            this.router.navigate(["polls"]);
          }
      })
   }

   // Als er iets verandert in de checkboxes voeg deze dan toe aan de antwoordIDS formArray
   onCheckChange(event) {
    const formArray: FormArray = this.stemForm.get('antwoordIDs') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

  // Als het form gesubmit wordt dan vul ik het stemDto op en verstuur ik het naar de APi
  onSubmit() {
    this.submitted = true;    
    this.stemDto = this.stemForm.value;
    this.stemDto.pollGebruikerID = this.pollGebruiker.pollGebruikerID;
    this.stemDto.gebruikerID = parseInt(localStorage.getItem("id"));
    //console.log(this.stemDto);
    this._pollService.addStem(this.stemDto).subscribe(result => {
      //console.log(result);
      this.router.navigate(["polls"]);
    }, error =>  {
      alert(error);
    });
  }

  // Initialiseer het stemForm
  ngOnInit() {
    this.stemForm = this.fb.group({
      antwoordIDs: new FormArray([], Validators.required)
    })
  }

}
