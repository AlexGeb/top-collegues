import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { ColleguesService } from '../shared/services/collegues.service';
import { ColleguesVue } from '../shared/collegues-vue';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ColleguesVue implements OnInit {
  limite = 100;
  filter: string = null;
  colleguesAsync: Promise<Collegue[]>;
  constructor(collegueSvc: ColleguesService) {
    super(collegueSvc);
    this.colleguesAsync = collegueSvc.listerCollegues();
  }
}
