// ANgular library imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Module imports
import { AppRoutingModule } from './app-routing.module';
import { PollsModule } from './polls/polls.module';
import { SecurityModule } from './security/security.module';
import { SecurityInterceptor } from './security/security.interceptor';
import { SharedModule } from './shared/shared.module';


//Component imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { PollsComponent } from './polls/polls/polls.component';
import { SecurityComponent } from './security/security/security.component';
import { RegisterComponent } from './security/register/register.component';




const appRoutes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'security', component: SecurityComponent},
  { path: 'login', component: SecurityComponent},
  { path: 'register', component: RegisterComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HelpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    PollsModule,
    MatSidenavModule,
    MatListModule,
    SecurityModule,
    HttpClientModule,
    SharedModule,
    NgbModule 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
