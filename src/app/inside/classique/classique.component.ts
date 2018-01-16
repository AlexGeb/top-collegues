import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../../shared/domain/collegue';
import { ColleguesService } from '../../shared/services/collegues.service';
import { ColleguesVue } from '../../shared/collegues-vue';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends ColleguesVue implements OnInit {
  limite = 100;
  filter: string = null;
  constructor(collegueSvc: ColleguesService) {
    super(collegueSvc);
  }
}
