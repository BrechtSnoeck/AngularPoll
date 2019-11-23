import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bekijk-poll',
  templateUrl: './bekijk-poll.component.html',
  styleUrls: ['./bekijk-poll.component.scss']
})
export class BekijkPollComponent implements OnInit {
  poll: Poll;
  doughnutChartLabels = [];
  doughnutChartType = 'doughnut';
  doughnutChartData = []
  
  constructor(private _pollService: PollService, private router: Router) { 
    this._pollService.gekozenPoll.subscribe(e=> {
      console.log(e);
      this.poll = e;
      if (this.poll.pollID == 0) {
        this.router.navigate(["polls"]);
      }
      this.poll.antwoorden.forEach(a => {
        this.doughnutChartLabels.push(a.optie);
        this.doughnutChartData.push(a.stemmen.length);
      });
      
  })
  }

  ngOnInit() {
    
  }

}
