import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gebruiker } from '../models/gebruiker.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { GebruikerLogin } from '../models/gebruiker-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private _httpClient: HttpClient) { }
  isLoggedin = new BehaviorSubject(false);
  wieIsLoggedIn: string;
  authenticate(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>("https://localhost:44317/api/Gebruiker/authenticate", gebruikerLogin);
  }

  checkLogin() {
    if (localStorage.getItem("token")) {
      this.isLoggedin.next(true);
      this.wieIsLoggedIn = localStorage.getItem("naam");
    }
  }
}