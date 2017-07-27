import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from './api';

@Injectable()
export class TopicService {

  tabEvent: EventEmitter<any> = new EventEmitter();

  constructor(public api: ApiService) {
  }

  getTopics(params?: any): Observable<any[]> {
    return this.api.get('/topics', params)
      .map(resp => resp.json().data);
  }

}
