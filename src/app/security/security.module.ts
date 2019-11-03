import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GebruikerService } from './services/gebruiker.service';
import { MustMatchDirective } from './helpers/must-match.directive';


@NgModule({
  declarations: [SecurityComponent, RegisterComponent, MustMatchDirective],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GebruikerService]
})
export class SecurityModule { }
