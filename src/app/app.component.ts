import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues: Collegue[];
  displayAlert: boolean;
  alert: { type: string; msg: string };
  ngOnInit() {
    this.collegues = [];
    this.collegues.push(
      new Collegue(
        'Thien Ban',
        'https://avatars3.githubusercontent.com/u/28274942?s=400&v=4',
        10
      )
    );
    this.collegues.push(
      new Collegue(
        'MoMo',
        'https://avatars3.githubusercontent.com/u/16020356?s=400&v=4',
        10
      )
    );
    this.collegues.push(
      new Collegue(
        'Asia',
        'https://avatars0.githubusercontent.com/u/33550160?s=400&v=4',
        10
      )
    );
    this.collegues.push(
      new Collegue(
        'Clem',
        'https://avatars2.githubusercontent.com/u/2669889?s=400&v=4',
        10
      )
    );
    this.collegues.push(
      new Collegue(
        'Melo',
        'https://avatars2.githubusercontent.com/u/2998230?s=400&v=4',
        10
      )
    );
  }
  addCollegue(prenom: HTMLInputElement, urlImage: HTMLInputElement) {
    if (!prenom.value || !urlImage.value) {
      this.alert = {
        type: 'danger',
        msg: '<strong>Erreur</strong>! Il manque des informations !'
      };
    } else {
      this.collegues.unshift(new Collegue(prenom.value, urlImage.value));
      this.alert = {
        type: 'success',
        msg: 'Le collègue a été ajouté avec succés'
      };
    }
    setTimeout(() => {
      this.alert = null;
    }, 2000);
  }
}
