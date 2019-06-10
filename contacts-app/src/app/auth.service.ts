import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {User} from './User';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  public token: string;
  //private baseUrl = "http://localhost:8080/api/users/";
  baseUrl = '/api/users/';

  constructor(private httpClient: HttpClient) {
    this.login();
  }

  login(): Observable<boolean> {
    const loginData:any = JSON.parse(localStorage.getItem('user'))
   
    if(loginData){
      this.isLoggedIn = true;
      this.token = loginData.token;
      return Observable.of(true);
    }
  }

  public authenticate(loginInfo:any){
    
    return this.httpClient.post(`${this.baseUrl}/auth`, loginInfo,
      { headers:  this.getDefaultHeader(), observe: 'response', responseType: 'json' })
      .map((response: HttpResponse<any>) => {
        
        let token = response.body.token;

        if (token) {
          this.token = token;
          localStorage.setItem('user', JSON.stringify({ username: "username", token: token }));
          this.isLoggedIn = true;
          return true;
        } else {
          return false;
        }
      });
  }

  register(user:User):Observable<boolean>{
    return this.httpClient.post(`${this.baseUrl}/register`, user,
      { headers: this.getDefaultHeader(), observe: 'response', responseType: 'json' })
      .map((response: HttpResponse<any>) => {
        if(response.ok){
          return true;
        }
        return false;
      });
  }

  logout(): void {
    this.isLoggedIn=false;
    localStorage.removeItem('user');
  }

  getDefaultHeader():HttpHeaders{
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
}