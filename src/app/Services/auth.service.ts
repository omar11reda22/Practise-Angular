import { Injectable } from '@angular/core';
import { ILogin } from '../Model/ilogin';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRegister } from '../Model/iregister';
import { jwtDecode } from 'jwt-decode';
import { Jwtpayload } from '../Model/jwtpayload';
import { Authresponse } from '../Model/authresponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclient: HttpClient) {}
  Login(item: ILogin): Observable<Authresponse> {
    return this.httpclient.post<Authresponse>(
      'https://localhost:44336/api/Account/Login',
      item
    );
  }
  Register(item: IRegister): Observable<Authresponse> {
    return this.httpclient.post<Authresponse>(
      'https://localhost:44336/api/Account/Register',
      item
    );
  }
  // to checking if user logged or not
  isauth(): boolean {
    if (sessionStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }
  getuserdata(): Jwtpayload | null {
    const token = sessionStorage.getItem('token');
    let ll: Jwtpayload | null = null;

    if (token) {
      ll = jwtDecode<Jwtpayload>(token);
    }

    return ll;
  }
}
