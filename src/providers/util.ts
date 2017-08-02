import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

import { Settings } from '../providers/settings';

@Injectable()
export class UtilService {

  constructor(
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController,
    private settings: Settings,
  ) { }

  toast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'top'
    }).present();
  }

  checkLogin(callback1:any, callback2:any) {
    this.settings.getValue('user').then(user=>{
      if(user.loginname){
        callback1()
      }else{
        let confirm = this.alertCtrl.create({
          title: '',
          message: '该操作需要登录账户。是否现在登录?',
          buttons: [
            {
              text: '取消'
            },
            {
              text: '登录',
              handler: () => {
                callback2()
              }
            }
          ]
        });
        confirm.present();
      }
    });
  }
}