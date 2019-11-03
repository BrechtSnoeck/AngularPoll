import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  submitted: boolean = false;
  gebruikerLogin: GebruikerLogin = new GebruikerLogin("", "")

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  onSubmit() {
    this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      this.submitted = true;
      this.router.navigate(["polls"]);
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
