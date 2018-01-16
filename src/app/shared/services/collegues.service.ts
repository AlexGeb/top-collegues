import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../domain/collegue';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { IsOnlineService } from './is-online.service';

@Injectable()
export class ColleguesService {
  private ENDPOINT = environment.endpoint;

  private _colleguesSubject: BehaviorSubject<Collegue[]> = new BehaviorSubject(
    null
  );
  public collegues = this._colleguesSubject.asObservable();

  private _avisSubject: BehaviorSubject<{
    action: string;
    collegue: Collegue;
  }> = new BehaviorSubject(null);
  public avis = this._avisSubject.asObservable();
  constructor(private http: HttpClient, isOnlineSvc: IsOnlineService) {
    isOnlineSvc.isOnline.distinctUntilChanged().subscribe(status => {
      if (status) {
        this.fetchColleguesFromServer().subscribe();
      }
    });
  }

  listerCollegues(): Observable<Collegue[]> {
    return this._colleguesSubject.getValue()
      ? this.collegues
      : this.fetchColleguesFromServer();
  }

  fetchColleguesFromServer(): Observable<Collegue[]> {
    return this.http
      .get<Collegue[]>(this.ENDPOINT + 'collegues')
      .do(collegues => {
        this._colleguesSubject.next(collegues);
        console.log('collegues fetched ok', collegues);
      });
  }

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    return this.http
      .post<Collegue>(this.ENDPOINT + 'collegues', newCollegue)
      .do(collegue => {
        const currentCollegues = this._colleguesSubject.getValue();
        currentCollegues.unshift(collegue);
        this._colleguesSubject.next(currentCollegues);
      });
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.patchActionCollegue(unCollegue.pseudo, 'aimer');
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    return this.patchActionCollegue(unCollegue.pseudo, 'detester');
  }

  getCollegueByPseudo(pseudo: string): Observable<Collegue> {
    return this.listerCollegues().map(collegues => {
      return collegues.find(col => col.pseudo === pseudo);
    });
  }

  private patchActionCollegue(
    pseudo: string,
    action: string
  ): Observable<Collegue> {
    return this.http
      .patch<Collegue>(this.ENDPOINT + `collegues/${pseudo}`, {
        action
      })
      .do(collegue => {
        const currentCollegues = this._colleguesSubject.getValue();
        const collegueToUpdate = currentCollegues.find(
          col => col.pseudo === collegue.pseudo
        );
        collegueToUpdate.score = collegue.score;
        this._colleguesSubject.next(currentCollegues);
        this._avisSubject.next({ action, collegue });
      });
  }
}
