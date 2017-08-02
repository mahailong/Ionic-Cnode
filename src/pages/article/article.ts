import { Component } from '@angular/core';
import { NavController, ModalController ,NavParams, Events, LoadingController } from 'ionic-angular';

import { TopicService } from '../../providers/topic';
import { Settings } from '../../providers/settings';
import { UtilService } from '../../providers/util';

import { ReplyPage } from '../reply/reply';
import { LoginPage } from '../login/login';
import { PublishPage } from '../publish/publish'

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  data: any;
  user: any;
  tabObj: Object;

  
  constructor(
    public events: Events,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public utilService: UtilService,
    public navParams: NavParams,
    public topicService: TopicService,
    public settings: Settings
  ) {
    this.tabObj = { good:"精选", job:"招聘", ask:"问答", share:"分享" }
    events.subscribe('reply', () => {
      this._getTopic()
    });
  }

  ionViewDidLoad() {
    this.settings.getValue('user').then(user=>{
      this.user = user;
      this._getTopic()
    });
  }

  openPublish(topic_id) {
    this.navCtrl.push(PublishPage, {topic_id})
  }
  _getTopic() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '加载中...'
    });
    loading.present();
    this.topicService.getTopic(this.navParams.get('topic_id'), { accesstoken: this.user.accesstoken })
      .subscribe(data => {
        loading.dismiss();
        this.data = data
        this.data['replies'].map(reply => {
          if(reply.reply_id) {
            data['replies'].forEach((item, index) => {
              if(item.id === reply.reply_id) {
                reply.reply_index = index
                return
              }
            })
          }
          return reply
        })
      });
  } 

  toggleCollect() {
    this.utilService.checkLogin(()=>{
      this.topicService.toggleCollect(this.data.is_collect, {
        accesstoken: this.user.accesstoken,
        topic_id: this.navParams.get('topic_id')
      }).subscribe(success => {
          if (success)
            this.data.is_collect=!this.data.is_collect
        })
      },() => this.navCtrl.push(LoginPage))
  }

  toggleReplyUps(reply_id: string, i: number) {
    this.utilService.checkLogin(()=>{
        this.topicService.toggleReplyUps(reply_id, {
          accesstoken: this.user.accesstoken
        }).subscribe(success => {
            if (success)
              var _reply = this.data.replies[i];
              _reply.is_uped=!_reply.is_uped
          },
          )
      },() => this.navCtrl.push(LoginPage))
  }

  presentModal(reply_id) {
    this.utilService.checkLogin(()=>{
      let modal = this.modalCtrl.create(ReplyPage,{
        topic_id: this.navParams.get('topic_id'),
        accesstoken: this.user.accesstoken,
        reply_id
      });
      modal.present();
      },() => this.navCtrl.push(LoginPage))
  }
}