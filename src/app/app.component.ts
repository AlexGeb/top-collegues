import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { ColleguesService } from './shared/services/collegues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private colleguesSvc: ColleguesService) {}
  collegues: Collegue[];
  displayAlert: boolean;
  alert: { type: string; msg: string };
  ngOnInit() {
    this.colleguesSvc.listerCollegues().then(collegues => {
      this.collegues = collegues;
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
        .then(col => {
          this.alert = {
            type: 'success',
            msg: `Le collègue ${pseudo.value} a été ajouté avec succés`
          };
          this.collegues.unshift(col);
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
