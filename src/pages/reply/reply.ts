import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

import { TopicService } from '../../providers/topic';

import { Settings } from '../../providers/settings';

@Component({
  selector: 'page-reply',
  templateUrl: 'reply.html',
})
export class ReplyPage {

  content: string;
  themeDark: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public settings: Settings,
    public viewCtrl: ViewController,
    public topicService: TopicService,
    public events: Events,
  ) {
    settings.getValue('themeDark').then(themeDark=>this.themeDark = themeDark);
  }

  ionViewDidLoad() {
  }

  dismiss() {
    
  }

  submit() {
    this.topicService.postReply(this.navParams.get('topic_id'), {
      ...this.navParams.data,
      content: this.content
    }).subscribe(res => {
        if(res['success'])
        this.viewCtrl.dismiss();
        this.events.publish('reply');
      })
  }
}
