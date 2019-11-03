import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { SharedModule } from '../shared/shared.module';
import { PollService } from './poll.service';



@NgModule({
  declarations: [PollsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    PollService
  ],
  exports: [
    PollsComponent
  ]
})
export class PollsModule { }
