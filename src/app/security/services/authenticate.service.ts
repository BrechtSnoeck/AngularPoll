import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gebruiker } from '../models/gebruiker.model';
import { Observable } from 'rxjs';
import { GebruikerLogin } from '../models/gebruiker-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private _httpClient: HttpClient) { }
  authenticate(gebruikerLogin: GebruikerLogin): Observable<Gebruiker> {
    return this._httpClient.post<Gebruiker>("https://localhost:44317/api/Gebruiker/authenticate", gebruikerLogin);
  }
}