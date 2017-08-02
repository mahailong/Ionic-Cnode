import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

import { ArticlePage } from '../article/article';
import { TopicService } from '../../providers/topic';
import { Settings } from '../../providers/settings';

@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})

export class PublishPage {

  accesstoken: string;
  topic_title: string;
  topic_tab: string;
  topic_content: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public topicService: TopicService,
    public events: Events,
    public settings: Settings
  ) {
    this.settings.getValue('user').then(user=>{
      this.accesstoken = user.accesstoken;
    });
  }

  ionViewDidLoad() {
    let topic_id = this.navParams.get('topic_id');
    if(topic_id) {
      this.topicService.getTopic(topic_id)
        .subscribe(data => {
          this.topic_tab = data['tab'],
          this.topic_title = data['title'],
          this.topic_content = data['content']
        });
    }
  }

  submit() {
    this.topicService.postTopic({
      ...this.navParams.data,
      accesstoken: this.accesstoken,
      tab: this.topic_tab,
      title: this.topic_title,
      content: this.topic_content
    }).subscribe(res => {
        console.log()
        this.navCtrl.push(ArticlePage, {topic_id:res['topic_id']})
      })
  }
}
