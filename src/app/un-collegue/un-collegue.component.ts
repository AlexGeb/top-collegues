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
          transform: 'rotate(-90deg) scale(1.5)'
        })
      ),
      state(
        'hate',
        style({
          color: 'red',
          transform: 'rotate(90deg) scale(1.5)'
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
  constructor(private collegueSvc: ColleguesService) {}

  ngOnInit() {}

  aimerOuDetester($event) {
    if ($event) {
      this.collegueSvc.aimerUnCollegue(this.collegue).then(collegue => {
        this.collegue = collegue;
        this.state = 'like';
        this.backToNormal();
      });
    } else {
      this.collegueSvc.detesterUnCollegue(this.collegue).then(collegue => {
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
