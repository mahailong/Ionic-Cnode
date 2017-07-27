import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(public api: ApiService) {
  }
  getUser(loginname: string): Observable<any> {
    return this.api.get(`user/${loginname}`)
      .map(res => res.json());
  }
  login(accesstoken : string): Observable<any>{
    return this.api.post('accesstoken', {accesstoken})
      .map(res => res.json())
  }
}
