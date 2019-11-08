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
  polls: Poll[];

  constructor(private _pollService: PollService) {
      this._pollService.getPolls().subscribe(result => {
       this.polls = result;
       console.log(this.polls);
     });
     
   }

  ngOnInit() {
  }

}
