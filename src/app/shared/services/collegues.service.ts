import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../domain/collegue';
import { environment } from '../../../environments/environment';

interface ColleguesResponse {
  results: string[];
}

@Injectable()
export class ColleguesService {
  private ENDPOINT = environment.endpoint;
  constructor(private http: HttpClient) {}

  listerCollegues(): Promise<Collegue[]> {
    return this.http.get<Collegue[]>(this.ENDPOINT + 'collegues').toPromise();
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

  private patchActionCollegue(
    pseudo: String,
    action: String
  ): Promise<Collegue> {
    return this.http
      .patch<Collegue>(this.ENDPOINT + `collegues/${pseudo}`, { action })
      .toPromise();
  }
}
