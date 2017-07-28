webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(131);
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
        this.tabEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TopicService.prototype.getTopics = function (params) {
        return this.api.get('/topics', params)
            .map(function (resp) { return resp.json().data; });
    };
    return TopicService;
}());
TopicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api__["a" /* ApiService */]])
], TopicService);

//# sourceMappingURL=topic.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(123);
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

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_article__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publish_publish__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_topic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_util__ = __webpack_require__(260);
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
        this.topicService.tabEvent.subscribe(function (tab) {
            _this.params.tab = tab;
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
    HomePage.prototype.openItem = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__article_article__["a" /* ArticlePage */], { id: id });
    };
    HomePage.prototype.openUserPage = function (loginname, event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */], { loginname: loginname });
        event.stopPropagation();
    };
    HomePage.prototype.openPublish = function () {
        if (this.user) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__publish_publish__["a" /* PublishPage */]);
        }
        else {
            this.utilService.toast('请登录后发帖');
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CNode社区</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="下拉刷新" refreshingSpinner="circles" refreshingText="正在刷新...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="openPublish()"><ion-icon name="create"></ion-icon></button>\n  </ion-fab>\n  <ion-list>\n    <div class="item" *ngFor="let topic of topics" (click)="openItem(topic.id)">\n      <div class="title">\n        <span *ngIf="topic.top" class="top">置顶</span>\n        <span *ngIf="!topic.top">{{tabObj[topic.tab] || \'全部\'}}</span>\n        {{topic.title}}\n      </div>\n      <img *ngIf="topic.good" class="isgood" src=\'assets/img/tab_ic_good.png\' alt=""/>\n      <div class="content clearfix">\n        <span (click)="openUserPage(topic.author.loginname, $event)" class="avatar">\n          <img [src]="topic.author.avatar_url"/>\n        </span>\n        <span class="right">\n          <div>\n            <span class="name">{{topic.author.loginname}}</span>\n            <span class="float-r">\n              <span class="reply">{{topic.reply_count}}</span>/\n              <span>{{topic.visit_count}}</span>\n            </span>\n          </div>\n          <div>\n             <span>创建于：{{topic.create_at | date:"yyyy-MM-dd hh:mm:ss"}}</span> \n            <span class="float-r">{{topic.last_reply_at | amAgoTime}}</span>\n          </div>\n        </span>\n      </div>\n    </div>\n  </ion-list> \n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="正在加载...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_topic__["a" /* TopicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_topic__["a" /* TopicService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__providers_util__["a" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_util__["a" /* UtilService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the ArticlePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ArticlePage = (function () {
    function ArticlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    return ArticlePage;
}());
ArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-article',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\article\article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>article</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\article\article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ArticlePage);

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings__ = __webpack_require__(132);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="logo-wrapper">\n    <img src="assets/img/login_header_bg.png" class="bg"/>\n    <img src="assets/img/logo.png" class="logo"/>\n  </div>\n  <form (submit)="doLogin()">\n    <ion-input type="password" placeholder="Access Token" [(ngModel)]="user.accesstoken" name="accesstoken"></ion-input>\n    <button ion-button color="primary" block>登录</button>\n    <div class="type-group">\n      <div class="type" (click)="arcodeScannerLogin()">\n        <ion-icon name="barcode"></ion-icon>扫码登录 \n      </div>\n      <div class="type">\n        <ion-icon name="logo-github"></ion-icon>GitHub登录 \n      </div>\n    </div>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_util__["a" /* UtilService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(251);
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
    UserService.prototype.getUser = function (loginname) {
        return this.api.get("user/" + loginname)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.login = function (accesstoken) {
        return this.api.post('accesstoken', { accesstoken: accesstoken })
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiService */]])
], UserService);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(123);
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
    function UtilService(toastCtrl, storage) {
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    UtilService.prototype.getTabs = function () {
        return [{
                key: 'all',
                value: '全部',
                icon: 'home'
            },
            {
                key: 'good',
                value: '精华',
                icon: 'star'
            },
            {
                key: 'share',
                value: '分享',
                icon: 'share'
            },
            {
                key: 'ask',
                value: '问答',
                icon: 'chatbubbles'
            },
            {
                key: 'job',
                value: '招聘',
                icon: 'briefcase'
            },
            {
                key: 'dev',
                value: '客户端测试',
                icon: 'bug'
            }];
    };
    UtilService.prototype.toast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'top'
        }).present();
    };
    UtilService.prototype.getLoginStatus = function () {
        return this.storage.get('user').then(function (val) {
            return val;
        });
    };
    UtilService.prototype.getHtmlText = function (str) {
        return str.replace(/<[^>]+>/g, '');
    };
    return UtilService;
}());
UtilService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UtilService);

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
        selector: 'page-about',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\about\about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>setting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return MessagePage;
}());
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\message\message.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\message\message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_article_article__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_message_message__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_topic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_user__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_settings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_util__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipe___ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_17__providers_settings__["a" /* Settings */](storage, {
        user: {
            loginname: '',
            avatar_url: '',
            accesstoken: ''
        },
        themeDark: false
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
            __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__["a" /* PublishPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_19__pipe___["a" /* AmAgoTimePipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipe___["b" /* LinkPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_article_article__["a" /* ArticlePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_publish_publish__["a" /* PublishPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__providers_api__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_18__providers_util__["a" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_topic__["a" /* TopicService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_user__["a" /* UserService */],
            { provide: __WEBPACK_IMPORTED_MODULE_17__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_message_message__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_topic__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_settings__ = __webpack_require__(132);
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
    function MyApp(topicService, settings, platform, events, statusBar, splashScreen) {
        var _this = this;
        this.topicService = topicService;
        this.settings = settings;
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
        events.subscribe('themeDark', function (themeDark) { return _this.themeDark = themeDark; });
        this.initializeApp();
        this.tabs = [
            { key: "all", title: "全部", icon: "browsers" },
            { key: "good", title: "精选", icon: "ribbon" },
            { key: "job", title: "招聘", icon: "briefcase" },
            { key: "ask", title: "问答", icon: "bulb" },
            { key: "share", title: "分享", icon: "share" }
        ];
        this.pages = {
            'home': __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            'login': __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            'message': __WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */],
            'setting': __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
            'about': __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]
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
        this.topicService.tabEvent.emit(key);
    };
    MyApp.prototype.OtherPage = function (page) {
        this.nav.push(this.pages[page]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\app\app.html"*/'<div [class.themeDark]="themeDark">\n    <ion-menu [content]="content">\n        <button class="theme-button" (click)="toggleTheme()">\n            <ion-icon *ngIf="!themeDark" name="moon"></ion-icon>\n            <ion-icon *ngIf="themeDark" name="sunny"></ion-icon>\n        </button>\n        <div class="info">\n            <img *ngIf="!themeDark" src="assets/img/main_nav_header_bg.png" class="bg-img"/>\n            <div class="avatar" menuClose>\n                <img *ngIf="user.avatar_url" [src]=\'user.avatar_url\' (click)="openPage(\'user\')"/>\n                <img *ngIf="!user.avatar_url" src=\'assets/img/image_placeholder.png\' (click)="OtherPage(\'login\')"/>\n            </div>\n            <div class="loginname" menuClose>{{user.loginname || "点击头像登录"}}</div>\n            <span *ngIf="user.loginname" class="logout" (click)="logout()">注销</span>\n        </div>\n        <div class="list">\n            <button menuClose ion-item \n                *ngFor="let tab of tabs" \n                (click)="tabChange(tab.key)"\n                [class.active]="tab.key==currentTab">\n                <ion-icon [name]="tab.icon"></ion-icon>\n                <span>{{tab.title}}</span>\n            </button>\n        </div>\n        <div class="list">\n            <button menuClose ion-item (click)="OtherPage(\'message\')">\n                <ion-icon name="notifications"></ion-icon>\n                <span>消息</span>\n            </button>\n            <button menuClose ion-item (click)="OtherPage(\'setting\')">\n                <ion-icon name="settings"></ion-icon>\n                <span>设置</span>\n            </button>\n            <button menuClose ion-item (click)="OtherPage(\'about\')">\n                <ion-icon name="information-circle"></ion-icon>\n                <span>关于</span>\n            </button>\n        </div>\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>'/*ion-inline-end:"D:\www\Ionic-Cnode\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_topic__["a" /* TopicService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the PublishPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PublishPage = (function () {
    function PublishPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PublishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublishPage');
    };
    return PublishPage;
}());
PublishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-publish',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\publish\publish.html"*/'<!--\n  Generated template for the PublishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>publish</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\publish\publish.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PublishPage);

//# sourceMappingURL=publish.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
 * Generated class for the UserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"D:\www\Ionic-Cnode\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\Ionic-Cnode\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], UserPage);

//# sourceMappingURL=user.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
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

/***/ })

},[264]);
//# sourceMappingURL=main.js.map