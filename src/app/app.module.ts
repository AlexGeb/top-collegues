import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ColleguesService } from './shared/services/collegues.service';
import { VoteService } from './shared/services/vote.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './shared/services/auth.service';
import { IsOnlineService } from './shared/services/is-online.service';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: './inside/inside.module#InsideModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        whitelistedDomains: [environment.endpoint, 'localhost:8080'],
        throwNoTokenError: false
      }
    })
  ],
  providers: [
    ColleguesService,
    IsOnlineService,
    VoteService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
