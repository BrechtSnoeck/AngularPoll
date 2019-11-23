import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './security/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login: boolean;
  wie: string;
  title = 'PollAngular';

  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
     
  constructor(private _authenticateService : AuthenticateService, private router: Router) {
    this._authenticateService.checkLogin();
    this._authenticateService.isLoggedin.subscribe(e=> {
        this.login = !e.valueOf();
        this.wie = this._authenticateService.wieIsLoggedIn;
        //console.log(this._authenticateService.wieIsLoggedIn);
        
    })
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("naam");
    this._authenticateService.isLoggedin.next(this.login ? true : false);
    this.router.navigate(["home"]);
  }

}
