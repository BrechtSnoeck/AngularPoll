import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { GebruikerLogin } from '../models/gebruiker-login.model';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  submitted: boolean = false;
  gebruikerLogin: GebruikerLogin = new GebruikerLogin("", "")

  constructor(private _authenticateService: AuthenticateService, private router: Router) { }

  // Post de gebruikerlogin naar de API als de gebruikerLogin correct is slaag dan de gegevens op in Localstorage
  onSubmit() {
    this._authenticateService.authenticate(this.gebruikerLogin).subscribe(result => {
        //console.log(result);
        this._authenticateService.wieIsLoggedIn = result.gebruikersnaam;
        this._authenticateService.isLoggedin.next(result.token ? true : false);
        

        localStorage.setItem("token", result.token);
        localStorage.setItem("naam", result.gebruikersnaam);
        localStorage.setItem( "id", result.gebruikerID +"");
        this.submitted = true;
        this.router.navigate(["polls"]);

      }, error => {
        alert(error);
      });
  }

  ngOnInit() {
  }

}
