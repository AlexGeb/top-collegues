import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { AimeDetesteButtonsComponent } from './aime-deteste-buttons/aime-deteste-buttons.component';

import { ColleguesService } from './shared/services/collegues.service';
import { VoteService } from './shared/services/vote.service';
import { IsOnlineService } from './shared/services/is-online.service';
import { ScorePipe } from './shared/pipe/score.pipe';

import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';
import { FilterByPseudoPipe } from './shared/pipe/filter-by-pseudo.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';
import { IsOnlineComponent } from './is-online/is-online.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ActionPipe } from './shared/pipes/action.pipe';

const routes: Routes = [
  { path: 'classique', component: ClassiqueComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'detail/:pseudo', component: UnCollegueComponent },
  { path: '', redirectTo: 'classique', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    AimeDetesteButtonsComponent,
    ClassiqueComponent,
    TableauComponent,
    CarouselComponent,
    ScorePipe,
    FilterComponent,
    FilterByPseudoPipe,
    VotreDernierAvisComponent,
    IsOnlineComponent,
    HistoriqueComponent,
    ActionPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [ColleguesService, IsOnlineService, VoteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
