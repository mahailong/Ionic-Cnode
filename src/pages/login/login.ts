import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { UserService } from '../../providers/user';
import { UtilService } from '../../providers/util';
import { Settings } from '../../providers/settings';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: any;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private settings: Settings, 
    private events: Events,
    private navCtrl: NavController,
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
    }, (err) => {
        this.utilService.toast('请在手机中运行');
    })
  }
  
  doLogin() {
    this.userService.login(this.user.accesstoken).subscribe((data) => {
        if (data.success) {
          this.user.loginname = data.loginname;
          this.user.avatar_url = data.avatar_url;
          this.events.publish('user', this.user);
          this.settings.setValue('user',this.user);
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
