import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ArticlePage } from '../pages/article/article';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { PublishPage } from '../pages/publish/publish';
import { ReplyPage } from '../pages/reply/reply';
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';

import { ApiService } from '../providers/api';
import { TopicService } from '../providers/topic';
import { UserService} from '../providers/user';
import { Settings } from '../providers/settings';
import { UtilService } from '../providers/util';

import { AmAgoTimePipe, LinkPipe } from '../pipe/'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

export function provideSettings(storage: Storage) {
  return new Settings (storage, {
    user: {
      loginname: '',
      avatar_url:  '',
      accesstoken : ''
    },
    themeDark: false,
    tail_on: false,
    tail_text: ''
  });
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ArticlePage,
    HomePage,
    LoginPage,
    MessagePage,
    ReplyPage,
    PublishPage,
    UserPage,
    SettingPage,
    AmAgoTimePipe,
    LinkPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ArticlePage,
    HomePage,
    LoginPage,
    MessagePage,
    PublishPage,
    ReplyPage,
    UserPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    AppVersion,
    BarcodeScanner,
    SplashScreen,
    ApiService,
    UtilService,
    TopicService,
    UserService,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
