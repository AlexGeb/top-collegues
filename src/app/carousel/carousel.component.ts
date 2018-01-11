import { Component, OnInit } from '@angular/core';
import { ColleguesVue } from '../shared/collegues-vue';
import { ColleguesService } from '../shared/services/collegues.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent extends ColleguesVue implements OnInit {
  constructor(collegueSvc: ColleguesService, config: NgbCarouselConfig) {
    super(collegueSvc);
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = true;
  }
}
