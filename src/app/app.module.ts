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
import { UserPage } from '../pages/user/user';
import { SettingPage } from '../pages/setting/setting';

import { ApiService } from '../providers/api';
import { TopicService } from '../providers/topic';
import { StorageService } from '../providers/storage';
import { UserService } from '../providers/user';
import { UtilService } from '../providers/util';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ArticlePage,
    HomePage,
    LoginPage,
    MessagePage,
    PublishPage,
    UserPage,
    SettingPage
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
    StorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
