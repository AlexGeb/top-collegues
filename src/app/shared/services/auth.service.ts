import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private jwtHelper: JwtHelperService, private http: HttpClient) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    console.log(token ? !this.jwtHelper.isTokenExpired(token) : false);
    // Check whether the token is expired and return
    // true or false
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  login(credentials: { username: string; password: string }) {
    return this.http
      .post(environment.endpoint + '/login', credentials)
      .do(resp => {
        console.log('login resp', resp);
      });
  }
}
