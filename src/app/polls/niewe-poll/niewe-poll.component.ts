import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { PollService } from '../poll.service';
import { PollDto } from '../models/poll-dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niewe-poll',
  templateUrl: './niewe-poll.component.html',
  styleUrls: ['./niewe-poll.component.scss']
})
export class NiewePollComponent implements OnInit {
  pollForm : FormGroup;
  vrienden: any;
  submitted: boolean;
  pollDto: PollDto;
  naam: string;

  constructor(private _pollService: PollService, private fb: FormBuilder,private router: Router) {
    //Alle vrienden ophalen van de huidige gebruiker
    this._pollService.getVriendschapverzoekenVanGebruiker().subscribe(result => {
      this.vrienden = result;
      //console.log(this.vrienden);
    });
     this.naam = localStorage.getItem("naam");
   }

  ngOnInit() {
    /* Initiate the form structure */
    this.pollForm = this.fb.group({
      naam: ["",Validators.required],
      opties: this.fb.array([this.fb.group({optie:['', Validators.required]})]),
      vriendenIDs: new FormArray([], Validators.required)
    })
  }
// Bij het submitten van het form wordt het pollDto ingevuld  en doorgestuurd naar de service om weg te schrijven
  onSubmit() {
    this.submitted = true;    
    this.pollDto = this.pollForm.value;
    this.pollDto.makerID = parseInt(localStorage.getItem("id"));
    //console.log(this.pollDto);
    this._pollService.addPoll(this.pollDto).subscribe(result => {
      //console.log(result);
      this.router.navigate(["polls"]);
    }, error =>  {
      alert(error);
    });
    }

    // Als er iets verandert bij de checkboxes voeg deze dan toe in de vriendenIds form array
  onCheckChange(event) {
    const formArray: FormArray = this.pollForm.get('vriendenIDs') as FormArray;
  
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

  /// Opties methodes ///
  get opties() {
    return this.pollForm.get('opties') as FormArray;
  }

  addOpties() {
    this.opties.push(this.fb.group({optie:''}));
  }

  deleteOpties(index) {
    this.opties.removeAt(index);
  }
  ///----->
}
