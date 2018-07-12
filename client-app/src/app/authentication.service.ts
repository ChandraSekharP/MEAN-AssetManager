import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

export interface User {
  username: string;
  email: string;
  loginName: string;
  password: string;
}

interface TokenResponse {
  token: string;
}

@Injectable()
export class AuthenticationService {

  //apiUrl = 'http://localhost:3000'
  registerUserUrl = `/api/auth/register`;
  loginUserUrl = `/api/auth/login`;

  constructor(private http: HttpClient) {}

  registerNewUser(username, email, loginName, password) {
    const user = {
      username: username,
      email: email,
      loginName: loginName,
      password: password
    };
    return this.http.post(`${this.registerUserUrl}`, user);
  }

  loginExistingUser(user) {
   return this.http.post(`${this.loginUserUrl}`, user)
    .map((data: TokenResponse) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
      } else {
        return false;
      }
    })
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
  }
}
