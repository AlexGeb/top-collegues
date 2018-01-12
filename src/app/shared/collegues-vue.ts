import { Collegue } from './domain/collegue';
import { ColleguesService } from './services/collegues.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export class ColleguesVue implements OnInit {
  public collegues: Observable<Collegue[]>;

  constructor(private collegueSvc: ColleguesService) {}

  ngOnInit() {
    this.collegues = this.collegueSvc.listerCollegues();
  }

  likeOrHate($event, col) {
    if ($event) {
      this.collegueSvc.aimerUnCollegue(col).subscribe(newCol => {
        console.log('collegue aimé');
      });
    } else {
      this.collegueSvc.detesterUnCollegue(col).subscribe(newCol => {
        console.log('collegue detesté');
      });
    }
  }
}
