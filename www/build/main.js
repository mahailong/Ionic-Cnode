webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'https://cnodejs.org/api/v1';
    }
    ApiService.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + '/' + endpoint, options);
    };
    ApiService.prototype.post = function (endpoint, body, options) {
        return this.http.post(this.url + '/' + endpoint, body, options);
    };
    ApiService.prototype.put = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    ApiService.prototype.delete = function (endpoint, options) {
        return this.http.delete(this.url + '/' + endpoint, options);
    };
    ApiService.prototype.patch = function (endpoint, body, options) {
        return this.http.put(this.url + '/' + endpoint, body, options);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiService);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings__ = __webpack_require__(42);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublishPage = (function () {
    function PublishPage(navCtrl, navParams, viewCtrl, topicService, events, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.topicService = topicService;
        this.events = events;
        this.settings = settings;
        this.settings.getValue('user').then(function (user) {
            _this.accesstoken = user.accesstoken;
        });
    }
    PublishPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var topic_id = this.navParams.get('topic_id');
        if (topic_id) {
            this.topicService.getTopic(topic_id)
                .subscribe(function (data) {
                _this.topic_tab = data['tab'],
                    _this.topic_title = data['title'],
                    _this.topic_content = data['content'];
            });
        }
    };
    PublishPage.prototype.submit = function () {
        var _this = this;
        this.topicService.postTopic(__assign({}, this.navParams.data, { accesstoken: this.accesstoken, tab: this.topic_tab, title: this.topic_title, content: this.topic_content })).subscribe(function (res) {
            console.log();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], { topic_id: res['topic_id'] });
        });
    };
    return PublishPage;
}());
PublishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-publish',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\publish\publish.html"*/'<!--\n  Generated template for the PublishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发布</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (submit)="submit()">\n    <ion-item>\n      <ion-input type="text" placeholder="请输入标题" [(ngModel)]="topic_title" name="titel"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>请选择分类</ion-label>\n      <ion-select [(ngModel)]="topic_tab" name="tab">\n        <ion-option value="good">精选</ion-option>\n        <ion-option value="job">招聘</ion-option>\n        <ion-option value="ask">问答</ion-option>\n        <ion-option value="share">分享</ion-option>\n        <ion-option value="dev">测试</ion-option>\n      </ion-select>\n    </ion-item>\n    <textarea type="text" placeholder="请输入内容" [(ngModel)]="topic_content" name="content" class="theme-background"></textarea>\n    <button ion-button color="primary" block>提交</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\publish\publish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__providers_settings__["a" /* Settings */]])
], PublishPage);

//# sourceMappingURL=publish.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPage = UserPage_1 = (function () {
    function UserPage(navCtrl, navParams, userService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.segment = "replies";
    }
    UserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '加载中...'
        });
        loading.present();
        this.userService.getUser(this.navParams.get('loginname'))
            .subscribe(function (data) {
            _this.data = data.data;
            _this.userService.getUserCollect(_this.navParams.get('loginname'))
                .subscribe(function (data) {
                loading.dismiss();
                _this.data.collect = data.data;
            });
        });
    };
    UserPage.prototype.openItem = function (topic_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], { topic_id: topic_id });
    };
    UserPage.prototype.openUser = function (loginname) {
        this.navCtrl.push(UserPage_1, { loginname: loginname });
        event.stopPropagation();
    };
    return UserPage;
}());
UserPage = UserPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\user\user.html"*/'\n<ion-content>\n  <ion-navbar></ion-navbar>\n  <img src="assets/img/user_detail_header_bg.png" class="bg"/>\n  <div class="user-detail" *ngIf="data">\n    <div class="avatar">\n        <img [src]="data.avatar_url" alt=""/>\n    </div>\n    <div class="loginname">{{data.loginname}}</div>\n    <div class="githubname">{{data.githubUsername}}@github.com</div>\n    <div class="foot">\n        <span>注册时间：{{data.create_at | date:"yyyy-MM-dd"}}</span>\n        <span class="score">积分：{{data.score}}</span>\n    </div>\n  </div>\n  <ion-segment [(ngModel)]="segment">\n    <ion-segment-button value="replies">\n      最近回复\n    </ion-segment-button>\n    <ion-segment-button value="topics">\n      最新发布\n    </ion-segment-button>\n    <ion-segment-button value="collect">\n      话题收藏\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-scroll scrollY="true" *ngIf="data">\n    <div [ngSwitch]="segment">\n      <div *ngSwitchCase="\'replies\'">\n        <div class="_item theme-border theme-font clearfix" *ngFor="let item of data.recent_replies" (click)="openItem(item.id)">\n          <span (click)="openUser(item.author.loginname)" class="avatar">\n              <img [src]="item.author.avatar_url"/>\n          </span>\n          <span class="right">\n              <div class="title">{{item.title}}</div>\n              <div class="name">\n                  <span>{{item.author.loginname}}</span>\n                  <span class="float-r">{{item.last_reply_at | amAgoTime}}</span>\n              </div>\n          </span>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'topics\'">\n        <div class="_item theme-border theme-font clearfix" *ngFor="let item of data.recent_topics" (click)="openItem(item.id)">\n          <span (click)="openUser(item.author.loginname)" class="avatar">\n              <img [src]="item.author.avatar_url"/>\n          </span>\n          <span class="right">\n              <div class="title">{{item.title}}</div>\n              <div class="name">\n                  <span>{{item.author.loginname}}</span>\n                  <span class="float-r">{{item.last_reply_at | amAgoTime}}</span>\n              </div>\n          </span>\n        </div>\n      </div>\n      <div *ngSwitchCase="\'collect\'">\n        <div class="_item theme-border theme-font clearfix" *ngFor="let item of data.collect" (click)="openItem(item.id)">\n          <span (click)="openUser(item.author.loginname)" class="avatar">\n              <img [src]="item.author.avatar_url"/>\n          </span>\n          <span class="right">\n              <div class="title">{{item.title}}</div>\n              <div class="name">\n                  <span>{{item.author.loginname}}</span>\n                  <span class="float-r">{{item.last_reply_at | amAgoTime}}</span>\n              </div>\n          </span>\n        </div>\n      </div>\n    </div>\n  </ion-scroll>\n</ion-content>\n\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], UserPage);

var UserPage_1;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publish_publish__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, events, topicService, utilService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.topicService = topicService;
        this.utilService = utilService;
        this.modalCtrl = modalCtrl;
        events.subscribe('user', function (user) {
            if (user.loginname)
                _this.user = user;
        });
        this.tabObj = { good: "精选", job: "招聘", ask: "问答", share: "分享" };
        this.params = { page: 1, tab: '' };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.topicService.getTopics(this.params).subscribe(function (data) { return _this.topics = data; });
        this.events.subscribe('tab', function (kay) {
            _this.params.tab = kay;
            _this.topicService.getTopics(_this.params).subscribe(function (data) { return _this.topics = data; });
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.params.page = 1;
        setTimeout(function () {
            _this.topicService.getTopics(_this.params).subscribe(function (data) {
                _this.topics = data;
                refresher.complete();
            });
        }, 50000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.params.page++;
        setTimeout(function () {
            _this.topicService.getTopics(_this.params).subscribe(function (data) {
                if (data) {
                    (_a = _this.topics).push.apply(_a, data);
                    infiniteScroll.complete();
                }
                else {
                    infiniteScroll.enable(false);
                }
                var _a;
            });
        }, 500);
    };
    HomePage.prototype.openItem = function (topic_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], { topic_id: topic_id });
    };
    HomePage.prototype.openUser = function (loginname, event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */], { loginname: loginname });
        event.stopPropagation();
    };
    HomePage.prototype.openPublish = function () {
        var _this = this;
        this.utilService.checkLogin(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__publish_publish__["a" /* PublishPage */]); }, function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CNode社区</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-fab right bottom>\n    <button ion-fab color="#80bd01" (click)="openPublish()"><ion-icon name="create"></ion-icon></button>\n  </ion-fab>\n  <ion-list>\n    <div class="item" *ngFor="let topic of topics" (click)="openItem(topic.id)">\n      <div class="title">\n        <span *ngIf="topic.top" class="top">置顶</span>\n        <span *ngIf="!topic.top">{{tabObj[topic.tab] || \'全部\'}}</span>\n        {{topic.title}}\n      </div>\n      <img *ngIf="topic.good" class="isgood" src=\'assets/img/tab_ic_good.png\' alt=""/>\n      <div class="content clearfix">\n        <span (click)="openUser(topic.author.loginname,$event)" class="avatar">\n          <img [src]="topic.author.avatar_url"/>\n        </span>\n        <span class="right">\n          <div>\n            <span class="name">{{topic.author.loginname}}</span>\n            <span class="float-r">\n              <span class="reply">{{topic.reply_count}}</span>/\n              <span>{{topic.visit_count}}</span>\n            </span>\n          </div>\n          <div>\n            <span>创建于：{{topic.create_at | date:"yyyy-MM-dd hh:mm:ss"}}</span> \n            <span class="float-r">{{topic.last_reply_at | amAgoTime}}</span>\n          </div>\n        </span>\n      </div>\n    </div>\n  </ion-list> \n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="正在加载...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_util__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(42);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReplyPage = (function () {
    function ReplyPage(navCtrl, navParams, settings, viewCtrl, topicService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.viewCtrl = viewCtrl;
        this.topicService = topicService;
        this.events = events;
        this.themeDark = false;
        settings.getValue('themeDark').then(function (themeDark) { return _this.themeDark = themeDark; });
    }
    ReplyPage.prototype.ionViewDidLoad = function () {
    };
    ReplyPage.prototype.dismiss = function () {
    };
    ReplyPage.prototype.submit = function () {
        var _this = this;
        this.topicService.postReply(this.navParams.get('topic_id'), __assign({}, this.navParams.data, { content: this.content })).subscribe(function (res) {
            if (res['success'])
                _this.viewCtrl.dismiss();
            _this.events.publish('reply');
        });
    };
    return ReplyPage;
}());
ReplyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reply',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\reply\reply.html"*/'<div class="reply-wrapper" [class.themeDark]="themeDark">\n  <ion-header>\n\n    <ion-navbar>\n      <ion-title>评论</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n    <form (submit)="submit()">\n      <textarea type="text" placeholder="请输入评论内容" [(ngModel)]="content" name="content" class="theme-background"></textarea>\n      <button ion-button color="primary" block>提交</button>\n    </form>\n  </ion-content>\n</div>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\reply\reply.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], ReplyPage);

//# sourceMappingURL=reply.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>关于</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="logo-wrapper">\n    <img src="assets/img/about_header_bg.png" class="bg"/>\n  </div>\n  <div class="about-list">\n    <ion-item>\n      <h2>当前版本</h2>\n      <p>1.0.0</p>\n    </ion-item>\n    <ion-item>\n      <h2>项目开源主页</h2>\n      <p>https://coding.net/u/mahailong/p/cnode-dva/git</p>\n    </ion-item>\n  </div>\n  <div class="about-list">\n    <ion-item>\n      <h2>关于CNODE社区</h2>\n      <p>https://cnodejs.org/about</p>\n    </ion-item>\n    <ion-item>\n      <h2>作者博客</h2>\n      <p>https://mahailong.github.io/</p>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, settings, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.events = events;
        this.themeDark = false;
        this.tail_on = false;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settings.getValue('themeDark').then(function (themeDark) { return _this.themeDark = themeDark; });
        this.settings.getValue('tail_on').then(function (tail_on) { return _this.tail_on = tail_on; });
        this.settings.getValue('tail_text').then(function (tail_text) { return _this.tail_text = tail_text; });
    };
    SettingPage.prototype.setting = function () {
        this.events.publish('themeDark');
        this.settings.setValue('tail_on', this.tail_on);
        this.settings.setValue('tail_text', this.tail_text);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\setting\setting.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>设置</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form (submit)="setting()">\n    <ion-list>\n      <p class="title">通知</p>\n      <ion-item>\n        <ion-label>接收消息推送</ion-label>\n        <ion-toggle [(ngModel)]="push" name="push"></ion-toggle>\n        <p>暂不可用，敬请期待</p>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <p class="title">主题</p>\n      <ion-item>\n        <ion-label>夜间模式</ion-label>\n        <ion-toggle [(ngModel)]="themeDark" name="themeDark"></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <p class="title">话题</p>\n      <ion-item>\n        <ion-label>开启话题小尾巴</ion-label>\n        <ion-toggle [(ngModel)]="tail_on" name="tail_on"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>设置小尾巴</ion-label> \n        <ion-input [(ngModel)]="tail_text" name="tail_text" class="theme-font"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="primary" block (click)="submit">保存</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(81);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.markALL = function () {
            _this.userService.postMessageMarkAll(__assign({}, _this.navParams.data))
                .subscribe(function (res) {
                if (res.success) {
                    _this._getMessage();
                }
            });
        };
        this.markOne = function (item) {
            if (!item.has_read) {
                _this.userService.postMessageMarkOne(item.id, __assign({}, _this.navParams.data))
                    .subscribe(function (res) {
                    if (res.success) {
                        _this._getMessage();
                    }
                });
            }
        };
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this._getMessage();
    };
    MessagePage.prototype._getMessage = function () {
        var _this = this;
        this.userService.getMessage(__assign({}, this.navParams.data))
            .subscribe(function (res) {
            _this.msgs = res.data.has_read_messages.concat(res.data.hasnot_read_messages);
        });
    };
    MessagePage.prototype.openArticle = function (topic_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], { topic_id: topic_id });
    };
    return MessagePage;
}());
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\message\message.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>消息</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="markALL()">\n        <ion-icon name="done-all"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="_item" *ngFor="let item of msgs" (click)="markOne(item)"> \n    <div class="item-info clearfix">\n        <span (click)="openUser(item.author.loginname)" class="avatar">\n            <img [src]="item.author.avatar_url" class="full-img"/>\n        </span>\n        <span (click)="openArticle(item.topic.id)" class="right">\n            <div>\n                <span class="name">{{item.author.loginname}}</span>\n                    <span class="float-r" [class.primary]="!item.has_read">\n                        <span class="dot" *ngIf="!item.has_read"></span>\n                        {{item.reply.create_at | date:"yyyy-MM-dd hh:mm:ss"}}\n                    </span>\n            </div>\n            <div>{{item.type==\'at\'? \'在回复中@了你\': \'回复了您的话题\'}}</div>\n        </span>\n    </div>\n    <div class="content">\n      <div [innerHtml]="item.reply.content"></div>\n    </div>\n    <span (click)="openArticle(item.topic.id)" class="topic">\n        话题：{{item.topic.title}}\n    </span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\message\message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserService */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_article_article__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_message_message__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reply_reply__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_api__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_settings__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipe___ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_app_version__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_18__providers_settings__["a" /* Settings */](storage, {
        user: {
            loginname: '',
            avatar_url: '',
            accesstoken: ''
        },
        themeDark: false,
        tail_on: false,
        tail_text: ''
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_article_article__["a" /* ArticlePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reply_reply__["a" /* ReplyPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__["a" /* PublishPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_20__pipe___["a" /* AmAgoTimePipe */],
            __WEBPACK_IMPORTED_MODULE_20__pipe___["b" /* LinkPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_article_article__["a" /* ArticlePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__["a" /* PublishPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_reply_reply__["a" /* ReplyPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__providers_api__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_19__providers_util__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_topic__["a" /* TopicService */],
            __WEBPACK_IMPORTED_MODULE_17__providers_user__["a" /* UserService */],
            { provide: __WEBPACK_IMPORTED_MODULE_18__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_message__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_settings__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util__ = __webpack_require__(56);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(topicService, settings, utilService, platform, events, statusBar, splashScreen) {
        var _this = this;
        this.topicService = topicService;
        this.settings = settings;
        this.utilService = utilService;
        this.platform = platform;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.currentTab = "all";
        this.themeDark = false;
        this._defaultUser = { loginname: '', avatar_url: '', accesstoken: '' };
        this.user = this._defaultUser;
        settings.getValue('user').then(function (user) { _this.events.publish('user', user); });
        events.subscribe('user', function (user) { return _this.user = user; });
        settings.getValue('themeDark').then(function (themeDark) { return _this.themeDark = themeDark; });
        events.subscribe('themeDark', function (themeDark) { return _this.toggleTheme(); });
        this.initializeApp();
        this.tabs = [
            { key: "all", title: "全部", icon: "browsers" },
            { key: "good", title: "精选", icon: "ribbon" },
            { key: "job", title: "招聘", icon: "briefcase" },
            { key: "ask", title: "问答", icon: "bulb" },
            { key: "share", title: "分享", icon: "share" }
        ];
        this.pages = {
            'login': __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            'setting': __WEBPACK_IMPORTED_MODULE_8__pages_setting_setting__["a" /* SettingPage */],
            'about': __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
        };
    }
    MyApp.prototype.logout = function () {
        this.user = this._defaultUser;
        this.settings.setValue('user', this.user);
    };
    MyApp.prototype.toggleTheme = function () {
        this.themeDark = !this.themeDark;
        this.settings.setValue('themeDark', this.themeDark);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.tabChange = function (key) {
        this.currentTab = key;
        this.events.publish('tab', key);
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(this.pages[page]);
    };
    MyApp.prototype.openUser = function (loginname) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */], { loginname: loginname });
    };
    MyApp.prototype.openMessage = function () {
        var _this = this;
        this.utilService.checkLogin(function () { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */], __assign({}, _this.user)); }, function () { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]); });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\app\app.html"*/'<div [class.themeDark]="themeDark">\n    <ion-menu [content]="content">\n        <button class="theme-button" (click)="toggleTheme()">\n            <ion-icon *ngIf="!themeDark" name="moon"></ion-icon>\n            <ion-icon *ngIf="themeDark" name="sunny"></ion-icon>\n        </button>\n        <div class="info">\n            <img *ngIf="!themeDark" src="assets/img/main_nav_header_bg.png" class="bg-img"/>\n            <div class="avatar" menuClose>\n                <img *ngIf="user.avatar_url" [src]=\'user.avatar_url\' (click)="openUser(user.loginname)"/>\n                <img *ngIf="!user.avatar_url" src=\'assets/img/image_placeholder.png\' (click)="openPage(\'login\')"/>\n            </div>\n            <div class="loginname" menuClose>{{user.loginname || "点击头像登录"}}</div>\n            <span *ngIf="user.loginname" class="logout" (click)="logout()">注销</span>\n        </div>\n        <div class="list">\n            <button menuClose ion-item \n                *ngFor="let tab of tabs" \n                (click)="tabChange(tab.key)"\n                [class.active]="tab.key==currentTab">\n                <ion-icon [name]="tab.icon"></ion-icon>\n                <span>{{tab.title}}</span>\n            </button>\n        </div>\n        <div class="list">\n            <button menuClose ion-item (click)="openMessage()">\n                <ion-icon name="notifications"></ion-icon>\n                <span>消息</span>\n            </button>\n            <button menuClose ion-item (click)="openPage(\'setting\')">\n                <ion-icon name="settings"></ion-icon>\n                <span>设置</span>\n            </button>\n            <button menuClose ion-item (click)="openPage(\'about\')">\n                <ion-icon name="information-circle"></ion-icon>\n                <span>关于</span>\n            </button>\n        </div>\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>'/*ion-inline-end:"D:\www\Ionic-Cnode\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_11__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_12__providers_util__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this.settings = this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Settings.prototype.getAllSettings = function () {
        return this.settings;
    };
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicService = (function () {
    function TopicService(api) {
        this.api = api;
    }
    TopicService.prototype.getTopics = function (params) {
        return this.api.get('topics', params)
            .map(function (resp) { return resp.json().data; });
    };
    TopicService.prototype.getTopic = function (id, params) {
        return this.api.get('topic/' + id, params)
            .map(function (resp) { return resp.json().data; });
    };
    TopicService.prototype.toggleCollect = function (is_collect, params) {
        var port = is_collect ? 'de_collect' : 'collect';
        return this.api.post('topic_collect/' + port, params)
            .map(function (resp) { return resp.json(); });
    };
    TopicService.prototype.toggleReplyUps = function (reply_id, params) {
        return this.api.post('reply/' + reply_id + '/ups', params)
            .map(function (resp) { return resp.json(); });
    };
    TopicService.prototype.postReply = function (topic_id, params) {
        return this.api.post('topic/' + topic_id + '/replies', params)
            .map(function (resp) { return resp.json(); });
    };
    TopicService.prototype.postTopic = function (params) {
        var port = params.topic_id ? '/update' : '';
        return this.api.post('topics' + port, params)
            .map(function (resp) { return resp.json(); });
    };
    return TopicService;
}());
TopicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api__["a" /* ApiService */]])
], TopicService);

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = (function () {
    function UtilService(toastCtrl, alertCtrl, settings) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.settings = settings;
    }
    UtilService.prototype.toast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'top'
        }).present();
    };
    UtilService.prototype.checkLogin = function (callback1, callback2) {
        var _this = this;
        this.settings.getValue('user').then(function (user) {
            if (user.loginname) {
                callback1();
            }
            else {
                var confirm_1 = _this.alertCtrl.create({
                    title: '',
                    message: '该操作需要登录账户。是否现在登录?',
                    buttons: [
                        {
                            text: '取消'
                        },
                        {
                            text: '登录',
                            handler: function () {
                                callback2();
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        });
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_settings__["a" /* Settings */]])
], UtilService);

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__amAgoTime_pipe__ = __webpack_require__(584);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__amAgoTime_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_pipe__ = __webpack_require__(585);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__link_pipe__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmAgoTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AmAgoTimePipe = (function () {
    function AmAgoTimePipe() {
    }
    AmAgoTimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value) {
            return this.getDateDiff(value);
        }
    };
    AmAgoTimePipe.prototype.getDateDiff = function (pTime) {
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var year = day * 365;
        var now = new Date().getTime();
        var old = new Date(pTime).getTime();
        var diffValue = now - old;
        var yearC = diffValue / year;
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (yearC >= 1) {
            return Math.round(monthC) + "年前";
        }
        else if (monthC >= 1) {
            return Math.round(monthC) + "个月前";
        }
        else if (weekC >= 1) {
            return Math.round(weekC) + "周前";
        }
        else if (dayC >= 1) {
            return Math.round(dayC) + "天前";
        }
        else if (hourC >= 1) {
            return Math.round(hourC) + "小时前";
        }
        else if (minC >= 1) {
            return Math.round(minC) + "分钟前";
        }
        else {
            return "刚刚";
        }
    };
    return AmAgoTimePipe;
}());
AmAgoTimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'amAgoTime'
    })
], AmAgoTimePipe);

//# sourceMappingURL=amAgoTime.pipe.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkPipe = (function () {
    function LinkPipe(sanitize) {
        this.sanitize = sanitize;
    }
    LinkPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && typeof value === 'string') {
            var topicFullLinkRegex = /href="([\S]+)\/topic\/([\S]+)"/gi;
            var userFullLinkRegex = /href="([\S]+)\/user\/([\S]+)"/gi;
            var userLinkRegex = /href="\/user\/([\S]+)"/gi;
            var noProtocolSrcRegex = /src="\/\/([\S]+)"/gi;
            var externalLinkRegex = /href="((?!#\/(user|home)\/))([\S]+)"/gi;
            var ret = value
                .replace(topicFullLinkRegex, 'href="#/home/$2"')
                .replace(userFullLinkRegex, 'href="#/user/$2"')
                .replace(userLinkRegex, 'href="#/user/$1"')
                .replace(noProtocolSrcRegex, 'src="https://$1"')
                .replace(externalLinkRegex, "onClick=\"window.open('$3', '_blank', 'location=no')\"");
            return this.sanitize.bypassSecurityTrustHtml(ret);
        }
    };
    return LinkPipe;
}());
LinkPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'link'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], LinkPipe);

//# sourceMappingURL=link.pipe.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_topic__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reply_reply__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__publish_publish__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ArticlePage = (function () {
    function ArticlePage(events, loadingCtrl, modalCtrl, navCtrl, utilService, navParams, topicService, settings) {
        var _this = this;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.utilService = utilService;
        this.navParams = navParams;
        this.topicService = topicService;
        this.settings = settings;
        this.tabObj = { good: "精选", job: "招聘", ask: "问答", share: "分享" };
        events.subscribe('reply', function () {
            _this._getTopic();
        });
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settings.getValue('user').then(function (user) {
            _this.user = user;
            _this._getTopic();
        });
    };
    ArticlePage.prototype.openPublish = function (topic_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__publish_publish__["a" /* PublishPage */], { topic_id: topic_id });
    };
    ArticlePage.prototype._getTopic = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: '加载中...'
        });
        loading.present();
        this.topicService.getTopic(this.navParams.get('topic_id'), { accesstoken: this.user.accesstoken })
            .subscribe(function (data) {
            loading.dismiss();
            _this.data = data;
            _this.data['replies'].map(function (reply) {
                if (reply.reply_id) {
                    data['replies'].forEach(function (item, index) {
                        if (item.id === reply.reply_id) {
                            reply.reply_index = index;
                            return;
                        }
                    });
                }
                return reply;
            });
        });
    };
    ArticlePage.prototype.toggleCollect = function () {
        var _this = this;
        this.utilService.checkLogin(function () {
            _this.topicService.toggleCollect(_this.data.is_collect, {
                accesstoken: _this.user.accesstoken,
                topic_id: _this.navParams.get('topic_id')
            }).subscribe(function (success) {
                if (success)
                    _this.data.is_collect = !_this.data.is_collect;
            });
        }, function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); });
    };
    ArticlePage.prototype.toggleReplyUps = function (reply_id, i) {
        var _this = this;
        this.utilService.checkLogin(function () {
            _this.topicService.toggleReplyUps(reply_id, {
                accesstoken: _this.user.accesstoken
            }).subscribe(function (success) {
                if (success)
                    var _reply = _this.data.replies[i];
                _reply.is_uped = !_reply.is_uped;
            });
        }, function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); });
    };
    ArticlePage.prototype.presentModal = function (reply_id) {
        var _this = this;
        this.utilService.checkLogin(function () {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__reply_reply__["a" /* ReplyPage */], {
                topic_id: _this.navParams.get('topic_id'),
                accesstoken: _this.user.accesstoken,
                reply_id: reply_id
            });
            modal.present();
        }, function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]); });
    };
    return ArticlePage;
}());
ArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\article\article.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>话题</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div *ngIf="data">\n    <div class="head">\n      <div class="title theme-font">{{data.title}}</div>\n      <img *ngIf="data.good" class="isgood" src=\'assets/img/tab_ic_good.png\'/>\n      <div class="content clearfix">\n        <span class="avatar" (click)="openUserPage(data.author.loginname)">\n          <img src={{data.author.avatar_url}}/>\n        </span>\n        <div class="right">\n          <div class="name">\n            <span *ngIf="data.top" class="top">置顶</span>\n            <span *ngIf="!data.top">{{tabObj[data.tab] || \'全部\'}}</span>\n            {{data.author.loginname}}\n          </div>\n          <div>\n            <span>{{data.create_at | amAgoTime}}创建</span>·\n            <span class="count">{{data.visit_count}}次浏览</span>\n          </div>\n        </div>\n        <span (click)="openPublish(data.id)" class="publish" *ngIf="user.loginname == data.author.loginname">\n          <ion-icon name="create"></ion-icon>\n        </span>\n        <span (click)="toggleCollect()" class="collect">\n          <ion-icon [name]="data.is_collect?\'heart\':\'heart-outline\'"></ion-icon>\n        </span>\n      </div>\n    </div>\n    <div class="body theme-border">\n        <div [innerHtml]="data.content"></div>\n    </div>\n    <div class="foot theme-border">\n        <div class="count theme-border">{{data.reply_count}}条回复</div>\n        <div class="reply-list">\n            <div class="reply-item theme-border" *ngFor="let reply of data.replies; let i=index">\n              <div class="content clearfix">\n                <span class="avatar" (click)="openUserPage(reply.author.loginname)">\n                    <img [src]="reply.author.avatar_url" class="full-img"/>\n                </span>\n                <div class="right">\n                    <div class="name">{{reply.author.loginname}}</div>\n                    <div>\n                        <span class="index">{{i+1}}楼</span>·\n                        <span>{{reply.create_at | amAgoTime}}</span>\n                    </div>\n                </div>\n                <div class="icon-group">\n                  <span (click)="toggleReplyUps(reply.id,i)">\n                    <ion-icon name="thumbs-up" [class.active]="reply.is_uped"></ion-icon>\n                  </span>\n                  <span class="length">{{reply.ups.length}}</span>\n                  <span (click)="presentModal(reply.id,reply.author.loginname)">\n                    <ion-icon name="redo"></ion-icon>\n                  </span>\n                </div>\n              </div> \n              <div class="reply-index" *ngIf="reply.reply_index">回复：{{reply.reply_index}}楼</div>  \n              <div class="title" [innerHtml]="reply.content"></div>\n            </div>\n        </div>\n    </div>\n    <ion-fab right bottom>\n      <button ion-fab color="#80bd01" (click)="presentModal()"><ion-icon name="redo"></ion-icon></button>\n    </ion-fab>\n  </div>\n</ion-content> \n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\article\article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util__["a" /* UtilService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */]])
], ArticlePage);

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(barcodeScanner, settings, events, navCtrl, userService, utilService) {
        this.barcodeScanner = barcodeScanner;
        this.settings = settings;
        this.events = events;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.utilService = utilService;
        this.user = {
            loginname: '',
            avatar_url: '',
            accesstoken: ''
        };
    }
    LoginPage.prototype.arcodeScannerLogin = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.user.accesstoken = barcodeData.text;
            _this.doLogin();
        }, function (err) {
            _this.utilService.toast('请在手机中运行');
        });
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.userService.login(this.user.accesstoken).subscribe(function (data) {
            if (data.success) {
                _this.user.loginname = data.loginname;
                _this.user.avatar_url = data.avatar_url;
                _this.events.publish('user', _this.user);
                _this.settings.setValue('user', _this.user);
                _this.navCtrl.pop();
            }
            else {
                _this.utilService.toast('登录失败');
            }
        }, function (err) {
            _this.utilService.toast('登录失败');
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="logo-wrapper">\n    <img src="assets/img/login_header_bg.png" class="bg"/>\n    <img src="assets/img/logo.png" class="logo"/>\n  </div>\n  <form (submit)="doLogin()" class="theme-background">\n    <ion-input type="password" placeholder="Access Token" [(ngModel)]="user.accesstoken" name="accesstoken" class=" theme-font"></ion-input>\n    <button ion-button color="primary" block>登录</button>\n    <div class="type-group theme-font">\n      <div class="type" (click)="arcodeScannerLogin()">\n        <ion-icon name="barcode"></ion-icon>扫码登录 \n      </div>\n      <div class="type">\n        <ion-icon name="logo-github"></ion-icon>GitHub登录 \n      </div>\n    </div>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util__["a" /* UtilService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.login = function (accesstoken) {
        return this.api.post('accesstoken', { accesstoken: accesstoken })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (loginname) {
        return this.api.get("user/" + loginname)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserCollect = function (loginname) {
        return this.api.get("topic_collect/" + loginname)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getMessageCount = function (params) {
        return this.api.get("messages/count", params)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getMessage = function (params) {
        return this.api.get("messages", params)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.postMessageMarkAll = function (params) {
        return this.api.post("message/mark_all", params)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.postMessageMarkOne = function (msg_id, params) {
        return this.api.post("message/mark_one/" + msg_id, params)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiService */]])
], UserService);

//# sourceMappingURL=user.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map