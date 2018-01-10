import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { AimeDetesteButtonsComponent } from './aime-deteste-buttons/aime-deteste-buttons.component';

import { ColleguesService } from './shared/services/collegues.service';

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    AimeDetesteButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ColleguesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
