import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ColleguesService } from '../shared/services/collegues.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css'],
  animations: [
    trigger('scoreChanged', [
      state(
        'like',
        style({
          color: 'green',
          transform: 'rotate(-70deg) scale(1.5)'
        })
      ),
      state(
        'hate',
        style({
          color: 'red',
          transform: 'rotate(70deg) scale(1.5)'
        })
      ),
      state(
        'normal',
        style({
          transform: 'scale(1)'
        })
      ),
      transition('like => *', animate('800ms ease-in')),
      transition('normal => *', animate('100ms ease-out')),
      transition('hate => *', animate('800ms ease-out'))
    ])
  ]
})
export class UnCollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  state = 'normal';
  private sub: any;
  constructor(
    private collegueSvc: ColleguesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (!this.collegue) {
      this.collegueSvc
        .getCollegueByPseudo(this.route.snapshot.params['pseudo'])
        .subscribe(collegue => {
          this.collegue = collegue;
        });
    }
  }

  aimerOuDetester($event) {
    if ($event) {
      this.collegueSvc.aimerUnCollegue(this.collegue).subscribe(collegue => {
        this.collegue = collegue;
        this.state = 'like';
        this.backToNormal();
      });
    } else {
      this.collegueSvc.detesterUnCollegue(this.collegue).subscribe(collegue => {
        this.collegue = collegue;
        this.state = 'hate';
        this.backToNormal();
      });
    }
  }

  backToNormal() {
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
  }
}
