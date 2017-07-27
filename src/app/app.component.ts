import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';
import { MessagePage } from '../pages/message/message';

import { TopicService } from '../providers/topic';

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

  constructor(
    public topicService: TopicService, 
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    
    this.initializeApp();

    this.tabs = [
      { key: "all", title: "全部", icon: "browsers" },
      { key: "good", title: "精选", icon: "ribbon" },
      { key: "job", title: "招聘", icon: "briefcase" },
      { key: "ask", title: "问答", icon: "bulb" },
      { key: "share" ,title: "分享", icon: "share" }
    ]

    this.pages = {
      'home': HomePage,
      'login': LoginPage,
      'message': MessagePage,
      'setting': SettingPage,
      'about': AboutPage
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  tabChange(key) {
    this.currentTab = key
    this.topicService.tabEvent.emit({tab: key})
  }
  OtherPage(page) {
    this.nav.push(this.pages[page]);
  }
}
