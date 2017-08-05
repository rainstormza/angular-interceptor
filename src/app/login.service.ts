import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get(`https://api.github.com/users/rainstormza`)
  }

  login2(): Observable<any> {
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body)
  }

}
