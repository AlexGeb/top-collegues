import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../domain/collegue';
import { environment } from '../../../environments/environment';

@Injectable()
export class ColleguesService {
  private ENDPOINT = environment.endpoint;

  private collegues: Collegue[];
  constructor(private http: HttpClient) {}

  listerCollegues(): Promise<Collegue[]> {
    return this.collegues
      ? Promise.resolve(this.collegues)
      : this.http
          .get<Collegue[]>(this.ENDPOINT + 'collegues')
          .toPromise()
          .then(collegues => {
            this.collegues = collegues;
            return this.collegues;
          });
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    return this.http
      .post<Collegue>(this.ENDPOINT + 'collegues', newCollegue)
      .toPromise();
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.patchActionCollegue(unCollegue.pseudo, 'aimer');
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    return this.patchActionCollegue(unCollegue.pseudo, 'detester');
  }

  getCollegueByPseudo(pseudo: String): Promise<Collegue> {
    return this.listerCollegues().then(collegues => {
      return collegues.find(col => col.pseudo === pseudo);
    });
  }

  private patchActionCollegue(
    pseudo: String,
    action: String
  ): Promise<Collegue> {
    return this.http
      .patch<Collegue>(this.ENDPOINT + `collegues/${pseudo}`, { action })
      .toPromise();
  }
}
