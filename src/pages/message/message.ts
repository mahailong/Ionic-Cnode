import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user';

import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  msgs: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserService
  ) {
  }

  ionViewDidLoad() {
    this._getMessage()
  }

  _getMessage() {
    this.userService.getMessage({...this.navParams.data})
      .subscribe(res => {
        this.msgs = [...res.data.has_read_messages, ...res.data.hasnot_read_messages]
      })
  }

  markALL=()=>{
    this.userService.postMessageMarkAll({...this.navParams.data})
      .subscribe(res => {
        if(res.success){
          this._getMessage()
        }
      })
  }

  markOne=(item)=>{
    if(!item.has_read){
      this.userService.postMessageMarkOne(item.id,{...this.navParams.data})
        .subscribe(res => {
          if(res.success){
            this._getMessage()
          }
        })
    }
  }

  openArticle(topic_id) {
    this.navCtrl.push(ArticlePage, {topic_id});
  }

}
