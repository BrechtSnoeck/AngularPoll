import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { SharedModule } from '../shared/shared.module';
import { PollService } from './poll.service';
import { NiewePollComponent } from './niewe-poll/niewe-poll.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StemOpPollComponent } from './stem-op-poll/stem-op-poll.component';
import { BekijkPollComponent } from './bekijk-poll/bekijk-poll.component';
import { ChartsModule} from 'ng2-charts';

const appRoutes: Routes = [
  { path: 'nieuwePoll', component: NiewePollComponent},
  { path: 'stemOpPoll', component: StemOpPollComponent},
  { path: 'bekijkPoll', component: BekijkPollComponent}
  ];

@NgModule({
  declarations: [PollsComponent, NiewePollComponent, StemOpPollComponent, BekijkPollComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    PollService
  ],
  exports: [
    PollsComponent
  ]
})
export class PollsModule { }
