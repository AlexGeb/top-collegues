import { Collegue } from './domain/collegue';
import { ColleguesService } from './services/collegues.service';
import { OnInit } from '@angular/core';

export class ColleguesVue implements OnInit {
  public collegues: Collegue[];

  constructor(private collegueSvc: ColleguesService) {}

  ngOnInit() {
    this.collegueSvc.listerCollegues().then(collegues => {
      this.collegues = collegues;
    });
  }

  likeOrHate($event, col) {
    console.log('likeOrHate : ', $event, col);
    if ($event) {
      this.collegueSvc.aimerUnCollegue(col).then(newCol => {
        console.log('collegue aimé');
        this.updateCollegue(newCol);
      });
    } else {
      this.collegueSvc.detesterUnCollegue(col).then(newCol => {
        console.log('collegue detesté');
        this.updateCollegue(newCol);
      });
    }
  }

  updateCollegue(newCol: Collegue) {
    this.collegues.find(col => col.pseudo === newCol.pseudo).score =
      newCol.score;
  }
}
