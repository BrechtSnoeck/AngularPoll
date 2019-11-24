import { Component, OnInit } from '@angular/core';
import { GebruikerService } from '../services/gebruiker.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { GebruikerRegistratie} from '../models/gebruiker-registratie.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  
  gebruiker: GebruikerRegistratie = new GebruikerRegistratie(0, "", "", "", "");
 
  constructor(private _gebruikerService: GebruikerService, private router: Router) { }

  //Als het form valide is post dan de gebruiker naar de API
  onSubmit() {
    this._gebruikerService.addGebruiker(this.gebruiker).subscribe(result => {
      this.submitted = true;
      this.router.navigate(["login"]);
      //console.log(result);
      
    }, error => {
      alert(error);}
      );
  }

  ngOnInit() {
  }

}
