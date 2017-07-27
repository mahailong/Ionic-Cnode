import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { UserService } from '../../providers/user';
import { UtilService } from '../../providers/util';
import { StorageService } from '../../providers/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private storageService: StorageService, 
    private events: Events,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private userService: UserService,
    private utilService: UtilService
  ) {
    this.user = {
      loginname: '',
      avatar_url: '',
      accesstoken: ''
    }
  }

  arcodeScannerLogin() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.user.accesstoken = barcodeData.text;
      this.doLogin()
    })
  }
  

  doLogin() {
    this.userService.login(this.user.accessToken).subscribe((data) => {
        if (data.success) {
          this.user.loginname = data.loginname;
          this.user.avatar_url = data.avatar_url;
          this.events.publish('user', this.user);
          this.storageService.setValue('user', this.user);
          this.navCtrl.pop();
        }
        else {
          this.utilService.toast('登录失败');
        }
    }, (err) => {
        this.utilService.toast('登录失败');
    });
  }

}
