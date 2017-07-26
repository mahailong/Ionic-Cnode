import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { ArticlePage } from '../article/article';
import { PublishPage } from '../publish/publish';

import { Topic } from '../../providers/topic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  topics: Observable<any[]>;
  constructor(
    public navCtrl: NavController, 
    public topicService: Topic, 
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    this.topics = this.topicService.getTopics()
        this.topicService.tabEvent.subscribe(
      params => this.topics = this.topicService.getTopics(params)
    )
  }

  openItem(id) {
    this.navCtrl.push(ArticlePage, {});
  }
}
