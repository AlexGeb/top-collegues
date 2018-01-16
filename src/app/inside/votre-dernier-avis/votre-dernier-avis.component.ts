import { Component, OnInit } from '@angular/core';
import { ColleguesService } from '../../shared/services/collegues.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
  avis: { type: string; msg: string } = null;
  constructor(private colleguesSvc: ColleguesService) {}

  ngOnInit() {
    this.colleguesSvc.avis.subscribe(action => {
      if (!action) {
        this.avis = { type: 'secondary', msg: 'Aucun vote' };
      } else if (action.action === 'aimer') {
        this.avis = {
          type: 'primary',
          msg: `J'aime ${action.collegue.pseudo}`
        };
      } else {
        this.avis = {
          type: 'danger',
          msg: `Je déteste ${action.collegue.pseudo}`
        };
      }
    });
  }
}
