
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Response} from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import User from './user.model';

@Injectable()
export class WelcomeService {

  //apiUrl = 'http://localhost:3000';
  registerUserUrl = `/api/register`;
  getUsersUrl = `/api/getUsers`;

  constructor(private http: HttpClient) { }

  registerNewUser(user: User): Observable<any>{
    return this.http.post(`${this.registerUserUrl}`, user);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
