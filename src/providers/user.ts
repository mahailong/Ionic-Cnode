import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(public api: ApiService) {
  }
  
  login(accesstoken : string): Observable<any>{
    return this.api.post('accesstoken', {accesstoken})
      .map(res => res.json())
  }

  getUser(loginname: string): Observable<any> {
    return this.api.get(`user/${loginname}`)
      .map(res => res.json());
  }

  getUserCollect(loginname: string): Observable<any> {
    return this.api.get(`topic_collect/${loginname}`)
      .map(res => res.json());
  }

  getMessageCount(params?: any): Observable<any> {
    return this.api.get(`messages/count`, params)
      .map(res => res.json());
  }

  getMessage(params?: any): Observable<any> {
    return this.api.get(`messages`, params)
      .map(res => res.json());
  }

  postMessageMarkAll(params?: any): Observable<any> {
    return this.api.post(`message/mark_all`, params)
      .map(res => res.json());
  }

  postMessageMarkOne(msg_id: string, params?: any): Observable<any> {
    return this.api.post(`message/mark_one/${msg_id}`, params)
      .map(res => res.json());
  }
    
}
