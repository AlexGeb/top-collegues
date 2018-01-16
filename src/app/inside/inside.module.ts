import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { AimeDetesteButtonsComponent } from './aime-deteste-buttons/aime-deteste-buttons.component';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { HistoriqueComponent } from './historique/historique.component';

import { SharedModule } from '../shared/shared.module';
import { InsideComponent } from './inside/inside.component';

const routes: Routes = [
  {
    path: '',
    component: InsideComponent,
    children: [
      { path: '', redirectTo: 'classique', pathMatch: 'full' },
      { path: 'classique', component: ClassiqueComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tableau', component: TableauComponent },
      { path: 'detail/:pseudo', component: UnCollegueComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    SharedModule
  ],
  declarations: [
    UnCollegueComponent,
    AimeDetesteButtonsComponent,
    ClassiqueComponent,
    TableauComponent,
    CarouselComponent,
    FilterComponent,
    VotreDernierAvisComponent,
    HistoriqueComponent,
    InsideComponent
  ]
})
export class InsideModule {}
