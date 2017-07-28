import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { ArticlePage } from '../article/article';
import { PublishPage } from '../publish/publish';
import { UserPage } from '../user/user'

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
    this.topicService.tabEvent.subscribe(tab => {
      this.params.tab = tab
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

  openItem(id) {
    this.navCtrl.push(ArticlePage, {id});
  }

  openUserPage(loginname: string, event) {
    this.navCtrl.push(UserPage, {loginname});
    event.stopPropagation();
  }

  openPublish() {
    if (this.user) {
      this.navCtrl.push(PublishPage);
    }
    else {
      this.utilService.toast('请登录后发帖');
    }
  }
}
