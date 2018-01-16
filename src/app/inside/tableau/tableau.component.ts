import { Component, OnInit } from '@angular/core';
import { ColleguesVue } from '../../shared/collegues-vue';
import { ColleguesService } from '../../shared/services/collegues.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends ColleguesVue implements OnInit {
  constructor(collegueSvc: ColleguesService) {
    super(collegueSvc);
  }
}
