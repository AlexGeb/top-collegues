import { Component, OnInit } from '@angular/core';
import { VoteService } from '../shared/services/vote.service';
import { Observable } from 'rxjs/Observable';
import { Vote } from '../shared/domain/vote';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  constructor(private voteSvc: VoteService) {}
  votes: Vote[];
  votesToHide: number[] = [];
  ngOnInit() {
    this.voteSvc.votes.subscribe(votes => {
      this.votes = votes
        .filter(v => !this.votesToHide.includes(v.id))
        .sort((v1, v2) => {
          const t1 = new Date(v1.date).getTime();
          const t2 = new Date(v2.date).getTime();
          return t1 === t2 ? 0 : t1 > t2 ? -1 : 1;
        });
    });
  }
  hideThisVote(vote) {
    this.votesToHide.push(vote.id);
    this.votes = this.votes.filter(v => !this.votesToHide.includes(v.id));
  }
}
