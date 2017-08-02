import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ArticlePage } from '../article/article';
import { UserService } from '../../providers/user';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  segment: string = "replies";
  data: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserService,
    public loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '加载中...'
    });
    loading.present();
    this.userService.getUser(this.navParams.get('loginname'))
      .subscribe(data => {
        this.data = data.data
        this.userService.getUserCollect(this.navParams.get('loginname'))
          .subscribe(data => {
            loading.dismiss();
            this.data.collect = data.data
          })
      })
  }
  
  openItem(topic_id) {
    this.navCtrl.push(ArticlePage, {topic_id});
  }

  openUser(loginname: string) {
    this.navCtrl.push(UserPage, {loginname});
    event.stopPropagation();
  }
}
