import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { ColleguesService } from './shared/services/collegues.service';
import { Observable } from 'rxjs/Observable';
import { IsOnlineService } from './shared/services/is-online.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private colleguesSvc: ColleguesService,
    public isOnlineSvc: IsOnlineService
  ) {}
  collegues: Observable<Collegue[]>;
  displayAlert: boolean;
  alert: { type: string; msg: string };
  ngOnInit() {
    this.collegues = this.colleguesSvc.collegues;
    this.colleguesSvc.listerCollegues().subscribe(collegues => {
      console.log('collegues fetched ok');
    });
  }
  addCollegue(pseudo: HTMLInputElement, urlImage: HTMLInputElement) {
    if (!pseudo.value || !urlImage.value) {
      this.alert = {
        type: 'danger',
        msg: '<strong>Erreur !</strong> Il manque des informations !'
      };
      this.dismissAlertAfter2Seconds();
    } else {
      console.log(JSON.stringify(new Collegue(pseudo.value, urlImage.value)));
      this.colleguesSvc
        .sauvegarder(new Collegue(pseudo.value, urlImage.value))
        .subscribe(col => {
          this.alert = {
            type: 'success',
            msg: `Le collègue ${pseudo.value} a été ajouté avec succés`
          };
          this.dismissAlertAfter2Seconds();
        });
    }
  }
  dismissAlertAfter2Seconds() {
    setTimeout(() => {
      this.alert = null;
    }, 2000);
  }
}
