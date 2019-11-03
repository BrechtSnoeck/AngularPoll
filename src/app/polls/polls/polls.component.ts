import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  polls: Observable<Poll[]>;

  constructor(private _pollService: PollService) {
     this.polls = this._pollService.getPolls();
   }

  ngOnInit() {
  }

}
