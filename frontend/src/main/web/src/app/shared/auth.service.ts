import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "@models/user";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import {
  LOGIN_URL,
  PASSWORD_RECOVERY_URL,
  REGISTRATION_SPECIAL_USER_URL,
  REGISTRATION_URL
} from "@environments/environment";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn: boolean;
  username: BehaviorSubject<string> = new BehaviorSubject(this.currentUsername);

  constructor(private http: HttpClient) {
    this.signedIn = (this.token != null);
    this.username.next(this.currentUsername);
  }

  login(loginPayload) {
    var formatedPayload = "userName=" + encodeURIComponent(loginPayload.username) +
      "&password=" + encodeURIComponent(loginPayload.password) +
      "&grant_type=password";

    console.log(formatedPayload)

    return this.http.post<any>(`${LOGIN_URL}`, formatedPayload, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).pipe(
      map(data => {
        if (data) {
          console.log(data);
          localStorage.setItem('current_user', JSON.stringify(data.access_token));
          localStorage.setItem('username', JSON.stringify(data.username));
          localStorage.setItem('email', JSON.stringify(data.email));
          this.setTokenExpirationDate(+JSON.stringify(data.expires_in));
          localStorage.setItem('id', JSON.stringify(data.id));

          console.log('----');
          console.log(localStorage.getItem('current_user'));
          console.log(localStorage.getItem('username'));
          console.log(localStorage.getItem('email'));
          console.log(localStorage.getItem('expiration_date'));
          console.log(localStorage.getItem('id'));
          console.log('----');

          this.signedIn = true;
          this.username.next(this.currentUsername);
        }
        return data;
      }));
  };

  logout() {
    console.log('WTF')
    // remove user from local storage to log user out
    localStorage.removeItem('current_user');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('expiration_date');
    localStorage.removeItem('id');
    this.signedIn = false;
  }

  registration(registrationPayload) {
    return this.http.post<any>(`${REGISTRATION_URL}`, registrationPayload).pipe(
      map(data => {
        return data;
      }
      ));
  }

  registrationSpecUser(registrationPayload) {
    return this.http.post<any>(`${REGISTRATION_SPECIAL_USER_URL}`, registrationPayload).pipe(
      map(data => {
        return data;
      }
      ));
  }

  recoveryPassword(recoveryPasswordPayload) {
    return this.http.get<any>(`${PASSWORD_RECOVERY_URL}?email=` + recoveryPasswordPayload).pipe(
      map(data => {
        return data;
      }
      ));
  }

  public get currentId() {
    if (this.token) {
      console.log(localStorage.getItem('id'));
      return localStorage.getItem('id');
    } else return null
  }

  public get currentUsername() {
    if (this.token) {
      console.log(localStorage.getItem('username'));
      return localStorage.getItem('username');
    } else return null
  }

  public get currentEmail() {
    if (this.token) {
      console.log(localStorage.getItem('email'));
      return localStorage.getItem('email');
    } else return null
  }

  public get isSignedIn() : boolean {
    return this.signedIn;
  }

  public get token() {
    // localStorage.removeItem('currentUser');
    console.log(localStorage.getItem('current_user'));
    return localStorage.getItem('current_user');
  }

  private setTokenExpirationDate(expires_in: number) {
    console.log(Date.now() / 60);
    var expiration_date = expires_in + Date.now() / 60;
    console.log(expiration_date)
    localStorage.setItem('expiration_date', expiration_date.toString());
    console.log(localStorage.getItem('expiration_date'))
  }

  getTokenExpirationDate(token: string): Date {
    if (this.token) {
      var expiration_date = +localStorage.getItem('expiration_date') ;
      return new Date(expiration_date * 60)
    } else return null
  }

  isTokenExpired(): boolean {
    const date = this.getTokenExpirationDate(this.token);
    if (date === undefined || date == null) return true;
    return (date.valueOf() <= new Date().valueOf());
  }
}
