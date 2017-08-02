import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import 'rxjs/Rx'

import { ArticlePage } from '../article/article';
import { PublishPage } from '../publish/publish';
import { UserPage } from '../user/user';
import { LoginPage } from '../login/login';

import { TopicService } from '../../providers/topic';
import { UtilService } from '../../providers/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: Object;
  params: any;
  topics: any[];
  tabObj: Object;
  constructor(
    public navCtrl: NavController,
    public events: Events,
    public topicService: TopicService, 
    public utilService: UtilService,
    public modalCtrl: ModalController
  ) {
    events.subscribe('user', user=> {
      if(user.loginname) this.user = user
    });
    this.tabObj = { good:"精选", job:"招聘", ask:"问答", share:"分享" }
    this.params = { page: 1, tab: '' }
  }

  ionViewDidLoad() {
    this.topicService.getTopics(this.params).subscribe(data => this.topics = data);
    this.events.subscribe('tab', kay => {
      this.params.tab = kay
      this.topicService.getTopics(this.params).subscribe(data => this.topics = data);
    }
    )
  }

  doRefresh(refresher) {
    this.params.page = 1;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(data => {
        this.topics = data;
        refresher.complete();
      })
    }, 50000);
  }

  doInfinite(infiniteScroll) {
    this.params.page++;
    setTimeout(() => {
      this.topicService.getTopics(this.params).subscribe(data => {
          if (data) {
            this.topics.push(...data);
            infiniteScroll.complete();
          }
          else {
            infiniteScroll.enable(false);
          }
      })
    }, 500);
  }

  openItem(topic_id) {
    this.navCtrl.push(ArticlePage, {topic_id});
  }

  openUser(loginname: string ,event) {
    this.navCtrl.push(UserPage, {loginname});
    event.stopPropagation();
  }

  openPublish() {
    this.utilService.checkLogin(
      () => this.navCtrl.push(PublishPage),
      () => this.navCtrl.push(LoginPage)
    );
  }
}
