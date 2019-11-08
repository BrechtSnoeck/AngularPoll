import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
        this._authenticateService.wieIsLoggedIn = result.gebruikersnaam;
        this._authenticateService.isLoggedin.next(result.token ? true : false);


        localStorage.setItem("token", result.token);
        localStorage.setItem("naam", result.gebruikersnaam);
        this.submitted = true;
        this.router.navigate(["polls"]);

      }, error => {
        alert(error);
      });
  }

  ngOnInit() {
  }

}
