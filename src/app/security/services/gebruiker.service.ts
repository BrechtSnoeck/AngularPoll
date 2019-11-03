import { Injectable } from '@angular/core';
import { Gebruiker } from '../models/gebruiker.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GebruikerRegistratie } from '../models/gebruiker-registratie.model';

@Injectable()

export class GebruikerService {

  constructor(private http: HttpClient) { }

  addGebruiker(gebruiker: GebruikerRegistratie) {
    return this.http.post<Gebruiker>("https://localhost:44317/api/gebruiker", gebruiker);
  }
}
