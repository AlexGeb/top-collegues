import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aime-deteste-buttons',
  templateUrl: './aime-deteste-buttons.component.html',
  styleUrls: ['./aime-deteste-buttons.component.css']
})
export class AimeDetesteButtonsComponent implements OnInit {
  @Output() aimerOuDetester: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  jaime() {
    this.aimerOuDetester.emit(true);
  }
  jedeteste() {
    this.aimerOuDetester.emit(false);
  }
}
