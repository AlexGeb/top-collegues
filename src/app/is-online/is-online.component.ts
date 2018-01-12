import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { isObject } from 'util';
import { IsOnlineService } from '../shared/services/is-online.service';

@Component({
  selector: 'app-is-online',
  templateUrl: './is-online.component.html',
  styleUrls: ['./is-online.component.css']
})
export class IsOnlineComponent implements OnInit {
  isOnline = true;
  message = 'En ligne';
  constructor(private isOnlineSvc: IsOnlineService) {}

  ngOnInit() {
    this.isOnlineSvc.isOnline.subscribe(online => {
      this.isOnline = online;
      this.message = online ? 'En ligne' : 'Hors ligne';
    });
  }
}
