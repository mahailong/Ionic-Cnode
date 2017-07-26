import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Api } from './api';

@Injectable()
export class Topic {

  tabEvent: EventEmitter<any> = new EventEmitter();

  constructor(public http: Http, public api: Api) {
  }

  getTopics(params?: any): Observable<any[]> {
    return this.api.get('/topics', params)
      .map(resp => resp.json().data);
  }

}
