import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  constructor() {}

  ngOnInit() {}

  aimerOuDetester($event) {
    if ($event) {
      this.collegue.score += 10;
      this.state = 'like';
    } else {
      this.collegue.score -= 5;
      this.state = 'hate';
    }
    setTimeout(() => {
      this.state = 'normal';
    }, 100);
  }
}
