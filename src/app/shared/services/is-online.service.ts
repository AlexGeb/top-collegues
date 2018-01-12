import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class IsOnlineService {
  private _isOnline = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline = this._isOnline.asObservable();

  constructor() {
    Observable.interval(2000)
      .map(() => navigator.onLine)
      .subscribe(val => {
        this._isOnline.next(val);
      });
  }
}
