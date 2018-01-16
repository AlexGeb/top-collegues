import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IsOnlineService } from '../../shared/services/is-online.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-aime-deteste-buttons',
  templateUrl: './aime-deteste-buttons.component.html',
  styleUrls: ['./aime-deteste-buttons.component.css']
})
export class AimeDetesteButtonsComponent implements OnInit {
  @Output() aimerOuDetester: EventEmitter<boolean> = new EventEmitter();
  constructor(public isOnlineSvc: IsOnlineService) {}

  ngOnInit() {}
  jaime() {
    this.aimerOuDetester.emit(true);
  }
  jedeteste() {
    this.aimerOuDetester.emit(false);
  }
}
