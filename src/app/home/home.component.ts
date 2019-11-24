import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GebruikerService } from '../security/services/gebruiker.service';
import { Gebruiker } from '../security/models/gebruiker.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gebruikers: Gebruiker[];

  // Interval zetten voor de carousel
  constructor(config: NgbCarouselConfig, private _gebruikerService: GebruikerService) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;


  }
  // Inladen van leuke data voor op de homepagina
  ngOnInit() {
    this._gebruikerService.getGebruikers().subscribe(result => {
      this.gebruikers = result;
      //console.log(this.gebruikers);
    });
  }

}
