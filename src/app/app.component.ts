import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';
import { MessagePage } from '../pages/message/message';

import { TopicService } from '../providers/topic';
import { Settings } from '../providers/settings';
import { UtilService } from '../providers/util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Object;
  tabs: Object[];
  user: Object;
  currentTab: string = "all";
  themeDark: boolean = false;
  _defaultUser: Object = {loginname: '',avatar_url:  '',accesstoken : ''}

  constructor(
    public topicService: TopicService,
    public settings: Settings,
    public utilService: UtilService,
    public platform: Platform,
    public events: Events,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.user = this._defaultUser

    settings.getValue('user').then(user=>{this.events.publish('user', user)});
    events.subscribe('user', user=>this.user = user);
    
    settings.getValue('themeDark').then(themeDark=>this.themeDark = themeDark);
    events.subscribe('themeDark', themeDark => this.toggleTheme());

    this.initializeApp();

    this.tabs = [
      { key: "all", title: "全部", icon: "browsers" },
      { key: "good", title: "精选", icon: "ribbon" },
      { key: "job", title: "招聘", icon: "briefcase" },
      { key: "ask", title: "问答", icon: "bulb" },
      { key: "share" ,title: "分享", icon: "share" }
    ]

    this.pages = {
      'login': LoginPage,
      'setting': SettingPage,
      'about': AboutPage,
    }
  }

  logout() {
    this.user = this._defaultUser
    this.settings.setValue('user', this.user)
  }

  toggleTheme() {
    this.themeDark = !this.themeDark;
    this.settings.setValue('themeDark', this.themeDark)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  tabChange(key) {
    this.currentTab = key
    this.events.publish('tab', key)
  }

  openPage(page) {
    this.nav.push(this.pages[page]);
  }

  openUser(loginname) {
    this.nav.push(UserPage, {loginname});
  }

  openMessage(){
    this.utilService.checkLogin(
      () => this.nav.push(MessagePage, {...this.user}),
      () => this.nav.push(LoginPage)
    );
  }
}
