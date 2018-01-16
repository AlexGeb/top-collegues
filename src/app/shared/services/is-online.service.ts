import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class IsOnlineService {
  private _isOnline = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline = this._isOnline.asObservable();

  constructor(private http: HttpClient) {
    Observable.interval(10000)
      .map(() => navigator.onLine)
      .subscribe(val => {
        if (val) {
          this.tryToConnectToServer().subscribe(
            resp => {
              this._isOnline.next(true);
            },
            err => {
              this._isOnline.next(false);
            }
          );
        } else {
          this._isOnline.next(false);
        }
      });
  }

  tryToConnectToServer(): Observable<any> {
    return this.http.get(environment.endpoint + 'collegues/ping');
  }
}
