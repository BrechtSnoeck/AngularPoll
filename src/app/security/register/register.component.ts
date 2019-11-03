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
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  gebruiker: GebruikerRegistratie = new GebruikerRegistratie(0, "", "", "", "");
 
  constructor(private _gebruikerService: GebruikerService, private router: Router) { }

  onSubmit() {
    this._gebruikerService.addGebruiker(this.gebruiker).subscribe(result => {
      if  (result == null) {
        alert("Dit emailadres is al in gebruik")
      } else {
        this.submitted = true;
      this.router.navigate(["login"]);
      console.log(result);
      }
    });
  }

  ngOnInit() {
  }

}
