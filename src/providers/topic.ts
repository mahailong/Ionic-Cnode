import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from './api';

@Injectable()
export class TopicService {

  constructor(public api: ApiService) {
  }

  getTopics(params?: any): Observable<any[]> {
    return this.api.get('topics', params)
      .map(resp => resp.json().data);
  }
  
  getTopic(id:string, params?: any): Observable<any[]> {
    return this.api.get('topic/'+id, params)
      .map(resp => resp.json().data);
  }

  toggleCollect(is_collect:string, params?: any): Observable<any[]> {
    var port = is_collect?'de_collect':'collect'
    return this.api.post('topic_collect/'+port, params)
      .map(resp => resp.json());
  }

  toggleReplyUps(reply_id: string, params?: any): Observable<any[]> {
    return this.api.post('reply/'+reply_id+'/ups', params)
      .map(resp => resp.json());
  }

  postReply(topic_id: string, params?: any): Observable<any[]> {
    return this.api.post('topic/'+topic_id+'/replies', params)
      .map(resp => resp.json());
  }

  postTopic(params?: any): Observable<any[]> {
    let port = params.topic_id?'/update':''
    return this.api.post('topics'+port, params)
      .map(resp => resp.json());
  }
    
}
