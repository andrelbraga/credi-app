webpackJsonp([0],{

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert/alert.module": [
		165
	],
	"../pages/categorie/categorie.module": [
		167
	],
	"../pages/expense/expense.module": [
		172
	],
	"../pages/income/income.module": [
		174
	],
	"../pages/invoice/invoice.module": [
		176
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertPageModule = (function () {
    function AlertPageModule() {
    }
    AlertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */]),
            ],
        })
    ], AlertPageModule);
    return AlertPageModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertPage = (function () {
    function AlertPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\alert\alert.html"*/'<!--\n\n  Generated template for the ExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<div class="ion-alert">\n\n    <!-- <ion-header>\n\n          <ion-navbar>\n\n            <ion-title>T</ion-title>\n\n          </ion-navbar>    \n\n    </ion-header>\n\n        \n\n        \n\n    <ion-content padding>\n\n            C\n\n    </ion-content> -->\n\n</div>\n\n        \n\n<!-- <ion-footer>\n\n          <ion-toolbar>\n\n  {{today | date:\'dd/MM/yyyy\'}}\n\n    </ion-toolbar>\n\n</ion-footer> -->\n\n        '/*ion-inline-end:"C:\Projetos\credi-app\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageModule", function() { return CategoriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_ClassUtil__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CategoriePageModule = (function () {
    function CategoriePageModule() {
    }
    CategoriePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorie__["a" /* CategoriePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorie__["a" /* CategoriePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__["b" /* CategorieProvider */],
                __WEBPACK_IMPORTED_MODULE_5__util_ClassUtil__["a" /* ClassUtil */]
            ]
        })
    ], CategoriePageModule);
    return CategoriePageModule;
}());

//# sourceMappingURL=categorie.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_ClassUtil__ = __webpack_require__(171);
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
 * Generated class for the CategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriePage = (function () {
    function CategoriePage(navCtrl, navParams, alertCtrl, loadingCtrl, categorieProvider, toastCtrl, util, zone, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.categorieProvider = categorieProvider;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.zone = zone;
        this.events = events;
        this.categories = [];
        //Before OnInit
        this.events.subscribe('updateScreen', function () {
            _this.zone.run(function (e) {
                _this.getAll();
            });
        });
    }
    CategoriePage.prototype.ngOnInit = function () {
        //After constructor
        this.getAll();
    };
    //ionViewCanEnter() {
    //   this.getAll();
    //}
    CategoriePage.prototype.getAll = function () {
        var _this = this;
        this.categories = [];
        this.categorieProvider.getAllCategorie()
            .then(function (result) {
            _this.categories = result;
            return _this.categories;
        });
    };
    CategoriePage.prototype.RenameCategory = function (c) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: c.name,
            message: "Enter a new name for this new categorie.",
            inputs: [
                {
                    name: 'Categorie',
                    placeholder: 'Categorie name...'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var categorie = new __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* Categorie */]();
                        categorie.name = data.Categorie;
                        categorie.id = c.id;
                        categorie.status = c.status;
                        _this.categorieProvider.updateCategorie(categorie).then(function () {
                            //this.util.presentLoading(CategoriePage, false);
                            _this.events.publish('updateScreen');
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    CategoriePage.prototype.saveCategorie = function (e) {
        console.log(e);
    };
    CategoriePage.prototype.statusCategory = function (c) {
        var _this = this;
        var categorie = new __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* Categorie */]();
        categorie.name = c.name;
        categorie.id = c.id;
        categorie.status = c.status;
        this.categorieProvider.updateCategorie(categorie).then(function () {
            //this.util.presentLoading(CategoriePage, false);
            _this.events.publish('updateScreen');
        });
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorie',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/'<!--\n\n  Generated template for the CategoriePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list no-border no-lines *ngFor="let c of categories">\n\n\n\n      <button ion-item (click)="RenameCategory(c)">\n\n          <ion-toggle [(ngModel)]="c.status" (ionChange)="statusCategory(c)" checked="c.status"></ion-toggle>\n\n          <ion-label>{{c.name}}</ion-label>\n\n          <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n\n      </button>\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab color="positive"><ion-icon name="md-settings"></ion-icon></button>\n\n         <ion-fab-list side="top">\n\n           <ion-label class="save">Save</ion-label>\n\n           <button ion-fab style="color:#488aff" (click)="saveCategorie($event)"><ion-icon name="md-thumbs-up"></ion-icon></button>\n\n         </ion-fab-list>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n\n\n<!-- <ion-footer>\n\n    <ion-toolbar>\n\n {{today | date:\'dd/MM/yyyy\'}}\n\n    </ion-toolbar>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */], __WEBPACK_IMPORTED_MODULE_3__util_ClassUtil__["a" /* ClassUtil */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__util_ClassUtil__["a" /* ClassUtil */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CategoriePage);
    return CategoriePage;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorieProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categorie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CategorieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategorieProvider = (function () {
    function CategorieProvider(dbProvider) {
        this.dbProvider = dbProvider;
        this.aCategorie = Array();
        console.log('Hello CategorieProvider Provider');
    }
    CategorieProvider.prototype.getAllCategorie = function () {
        var _this = this;
        return this.dbProvider.iniDb()
            .then(function (db) {
            return db.executeSql('SELECT * FROM categorie', {})
                .then(function (data) {
                _this.aCategorie = [];
                for (var i = 0; i < data.rows.length; i++) {
                    var item = data.rows.item(i);
                    var categorie = new Categorie();
                    categorie.id = item.id;
                    categorie.name = item.name;
                    categorie.color = item.color;
                    categorie.icon = item.icon;
                    categorie.status = item.status;
                    _this.aCategorie.push(categorie);
                }
                console.table(_this.aCategorie);
                return _this.aCategorie;
            });
        });
    };
    CategorieProvider.prototype.removeCategorie = function (categorie) {
    };
    CategorieProvider.prototype.insertCategorie = function (categorie) {
    };
    CategorieProvider.prototype.updateCategorie = function (categorie) {
        return this.dbProvider.iniDb()
            .then(function (db) {
            var qry = 'UPDATE categorie SET name = ?, status = ? WHERE id = ?';
            var data = [categorie.name, categorie.status, categorie.id];
            return db.executeSql(qry, data).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    CategorieProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], CategorieProvider);
    return CategorieProvider;
}());

var Categorie = (function () {
    function Categorie() {
    }
    return Categorie;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassUtil = (function () {
    /**
     *
     */
    function ClassUtil(navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    ClassUtil.prototype.presentLoading = function (ctrl, active) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            if (active) {
                _this.navCtrl.push(ctrl);
            }
        }, 3000);
    };
    ClassUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ClassUtil);
    return ClassUtil;
}());

//# sourceMappingURL=ClassUtil.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function() { return ExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpensePageModule = (function () {
    function ExpensePageModule() {
    }
    ExpensePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */]),
            ],
        })
    ], ExpensePageModule);
    return ExpensePageModule;
}());

//# sourceMappingURL=expense.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(166);
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
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpensePage = (function () {
    function ExpensePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formExpense = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            formMoney: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formNote: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    ExpensePage.prototype.submit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */]);
    };
    ExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpensePage');
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/'<!--\n\n  Generated template for the ExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Expenses</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="formExpense">\n\n        <ion-item>\n\n          <ion-label floating>R$</ion-label>\n\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Price" maxlength="10" ></ion-input>\n\n        </ion-item> \n\n      \n\n        <ion-item>\n\n          <ion-label floating>Note</ion-label>\n\n          <ion-input type="text" formControlName="formNote" [(ngModel)]="Note"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <button ion-button block color="bluedevider" [disabled]="!formExpense.valid" (click)="submit()" >Submit</button>\n\n        </ion-item>\n\n      </form>\n\n\n\n</ion-content>\n\n\n\n<!-- <ion-footer>\n\n    <ion-toolbar>\n\n {{today | date:\'dd/MM/yyyy\'}}\n\n    </ion-toolbar>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IncomePageModule = (function () {
    function IncomePageModule() {
    }
    IncomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */]),
            ],
        })
    ], IncomePageModule);
    return IncomePageModule;
}());

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomePage = (function () {
    function IncomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomePage');
    };
    IncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\income.html"*/'<!--\n  Generated template for the IncomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>income</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InvoicePageModule = (function () {
    function InvoicePageModule() {
    }
    InvoicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]
            ]
        })
    ], InvoicePageModule);
    return InvoicePageModule;
}());

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvoicePage = (function () {
    function InvoicePage(navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.categories = [
            { name: 'Banco', icon: 'md-football' },
            { name: 'Lanche', icon: 'md-glasses' },
            { name: 'Roupas', icon: 'md-cash' }
        ];
        this.choice = { categorie: "", date: "" };
    }
    InvoicePage.prototype.ionViewDidLoad = function () {
        console.log(this.categories);
        console.log('ionViewDidLoad InvoicePage');
    };
    InvoicePage.prototype.showInputCategories = function () {
    };
    InvoicePage.prototype.showPromptSaveExpense = function (choice) {
        var prompt = this.alertCtrl.create({
            title: 'Expenses',
            message: "Enter a name for this new expense.",
            inputs: [
                {
                    name: 'Expense',
                    placeholder: 'Expense name'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data);
                        console.log(choice);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-invoice',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/'<!--\n  Generated template for the InvoicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>invoice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label>Categoria</ion-label>\n          <ion-select [(ngModel)]="choice.categorie">\n            <ion-option *ngFor="let item of categories" [value]="item">\n                <ion-list>\n                    <ion-item>\n                      <ion-icon name="item.icon" item-start></ion-icon>\n                        {{item.name}}\n                    </ion-item>\n                  </ion-list>\n            </ion-option>\n          </ion-select>\n        </ion-item>\n    </ion-list>\n      \n      <ion-item>\n          <ion-label>Data</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="choice.date"></ion-datetime>\n      </ion-item>\n\n\n      <ion-content padding>\n        <button ion-button color="positive" block (click)="showPromptSaveExpense(choice)">Save Expense</button>\n      </ion-content>\n      \n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__income_income__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorie_categorie__ = __webpack_require__(168);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        /// Doughnut data
        this.doughnutChartLabels = ['A', 'B', 'C'];
        this.doughnutChartData = [100, 200, 400];
        this.doughnutChartType = 'doughnut';
        // Line Chart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.fabButtonOpened = false;
    }
    // Chart events
    HomePage.prototype.chartClicked = function (e) {
        var d = document.getElementById('chartjs').getAttribute('ng-reflect-labels');
        console.log(e);
    };
    // Chart events
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage.prototype.addInvoice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__invoice_invoice__["a" /* InvoicePage */]);
        console.log('Add Invoice');
    };
    HomePage.prototype.penFabButton = function () {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        }
        else {
            this.fabButtonOpened = false;
        }
    };
    HomePage.prototype.openCategorie = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__categorie_categorie__["a" /* CategoriePage */]);
        console.log('Categoria');
    };
    HomePage.prototype.openExpense = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__expense_expense__["a" /* ExpensePage */]);
        console.log('Gastos');
    };
    HomePage.prototype.openIncome = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__income_income__["a" /* IncomePage */]);
        console.log('Rendas');
    };
    HomePage.prototype.openGraphic = function (event) {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only>\n\n            <ion-icon name="md-notifications">\n\n            <ion-badge id="notifications-badge">5</ion-badge>\n\n            </ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-slides pager [ngClass]="{\'ListBackdrop\': fabButtonOpened == true }">\n\n\n\n        <ion-slide>\n\n                <!-- <div *ngIf="doughnutChartData.length == 0"> -->\n\n                <div>\n\n                    <p style="color:darkgray">"You not data in view page add new expesense\n\n                            for generate dynamic chart"</p>\n\n                   <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n                </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n              <div *ngIf="doughnutChartData.length == 0">\n\n                  <p style="color:darkgray">"You not data in view page add new expesense\n\n                          for generate dynamic chart"</p>\n\n                <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n              </div>\n\n\n\n              <div *ngIf="doughnutChartData.length > 0" style="display: block">\n\n                  <canvas     baseChart height="350"\n\n                              [data]="doughnutChartData"\n\n                              [labels]="doughnutChartLabels"\n\n                              [chartType]="doughnutChartType"\n\n                              (chartHover)="chartHovered($event)"\n\n                              (chartClick)="chartClicked($event)" id="chartjs"></canvas>\n\n              </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n                <!-- <div style="display: block;">\n\n                        <canvas baseChart width="400" height="400"\n\n                                    [datasets]="lineChartData"\n\n                                    [labels]="lineChartLabels"\n\n                                    [options]="lineChartOptions"\n\n                                    [colors]="lineChartColors"\n\n                                    [legend]="lineChartLegend"\n\n                                    [chartType]="lineChartType"\n\n                                    (chartHover)="chartHovered($event)"\n\n                                    (chartClick)="chartClicked($event)"></canvas>\n\n                        </div> -->\n\n                <div style="display: block;">\n\n                    <canvas baseChart width="400" height="400"\n\n                        [datasets]="lineChartData"\n\n                        [labels]="lineChartLabels"\n\n                        [options]="lineChartOptions"\n\n                        [legend]="lineChartLegend"\n\n                        [chartType]="lineChartType"\n\n                        (chartHover)="chartHovered($event)"\n\n                        (chartClick)="chartClicked($event)"></canvas>\n\n                 </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n              <p style="color:darkgray">Not list expenses.</p>\n\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n          </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab color="positive" (click)="penFabButton()"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n            <ion-label class="graphic">Graphics</ion-label>\n\n            <ion-label class="income">Incomes</ion-label>\n\n            <ion-label class="categorie">Categories</ion-label>\n\n            <ion-label class="expense">Expenses</ion-label>\n\n            <button ion-fab style="color:#32db64" (click)="openIncome($event)"><ion-icon name="md-arrow-dropup"></ion-icon></button>\n\n            <button ion-fab style="color:#f53d3d" (click)="openExpense($event)"><ion-icon name="md-arrow-dropdown"></ion-icon></button>\n\n            <button ion-fab style="color:#488aff" (click)="openCategorie($event)"><ion-icon name="md-list"></ion-icon></button>\n\n            <button ion-fab style="color:#565656" (click)="openGraphic($event)"><ion-icon name="md-pie"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n<!-- {{today | date:\'dd/MM/yyyy\'}} -->\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invoice_invoice_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_income_income_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_expense_expense_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_categorie_categorie_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_database_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_expense_expense__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_income_income__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_invoice_invoice__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//implementig




//import { CategorieProvider } from '../providers/categorie/categorie';



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_invoice_invoice_module__["InvoicePageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_income_income_module__["IncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_expense_expense_module__["ExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_categorie_categorie_module__["CategoriePageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert_module__["AlertPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_database_database__["a" /* DatabaseProvider */],
                //CategorieProvider,
                __WEBPACK_IMPORTED_MODULE_14__providers_expense_expense__["a" /* ExpenseProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_income_income__["a" /* IncomeProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_invoice_invoice__["a" /* InvoiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 222,
	"./af.js": 222,
	"./ar": 223,
	"./ar-dz": 224,
	"./ar-dz.js": 224,
	"./ar-kw": 225,
	"./ar-kw.js": 225,
	"./ar-ly": 226,
	"./ar-ly.js": 226,
	"./ar-ma": 227,
	"./ar-ma.js": 227,
	"./ar-sa": 228,
	"./ar-sa.js": 228,
	"./ar-tn": 229,
	"./ar-tn.js": 229,
	"./ar.js": 223,
	"./az": 230,
	"./az.js": 230,
	"./be": 231,
	"./be.js": 231,
	"./bg": 232,
	"./bg.js": 232,
	"./bn": 233,
	"./bn.js": 233,
	"./bo": 234,
	"./bo.js": 234,
	"./br": 235,
	"./br.js": 235,
	"./bs": 236,
	"./bs.js": 236,
	"./ca": 237,
	"./ca.js": 237,
	"./cs": 238,
	"./cs.js": 238,
	"./cv": 239,
	"./cv.js": 239,
	"./cy": 240,
	"./cy.js": 240,
	"./da": 241,
	"./da.js": 241,
	"./de": 242,
	"./de-at": 243,
	"./de-at.js": 243,
	"./de-ch": 244,
	"./de-ch.js": 244,
	"./de.js": 242,
	"./dv": 245,
	"./dv.js": 245,
	"./el": 246,
	"./el.js": 246,
	"./en-au": 247,
	"./en-au.js": 247,
	"./en-ca": 248,
	"./en-ca.js": 248,
	"./en-gb": 249,
	"./en-gb.js": 249,
	"./en-ie": 250,
	"./en-ie.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./eo": 252,
	"./eo.js": 252,
	"./es": 253,
	"./es-do": 254,
	"./es-do.js": 254,
	"./es.js": 253,
	"./et": 255,
	"./et.js": 255,
	"./eu": 256,
	"./eu.js": 256,
	"./fa": 257,
	"./fa.js": 257,
	"./fi": 258,
	"./fi.js": 258,
	"./fo": 259,
	"./fo.js": 259,
	"./fr": 260,
	"./fr-ca": 261,
	"./fr-ca.js": 261,
	"./fr-ch": 262,
	"./fr-ch.js": 262,
	"./fr.js": 260,
	"./fy": 263,
	"./fy.js": 263,
	"./gd": 264,
	"./gd.js": 264,
	"./gl": 265,
	"./gl.js": 265,
	"./gom-latn": 266,
	"./gom-latn.js": 266,
	"./he": 267,
	"./he.js": 267,
	"./hi": 268,
	"./hi.js": 268,
	"./hr": 269,
	"./hr.js": 269,
	"./hu": 270,
	"./hu.js": 270,
	"./hy-am": 271,
	"./hy-am.js": 271,
	"./id": 272,
	"./id.js": 272,
	"./is": 273,
	"./is.js": 273,
	"./it": 274,
	"./it.js": 274,
	"./ja": 275,
	"./ja.js": 275,
	"./jv": 276,
	"./jv.js": 276,
	"./ka": 277,
	"./ka.js": 277,
	"./kk": 278,
	"./kk.js": 278,
	"./km": 279,
	"./km.js": 279,
	"./kn": 280,
	"./kn.js": 280,
	"./ko": 281,
	"./ko.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mr": 291,
	"./mr.js": 291,
	"./ms": 292,
	"./ms-my": 293,
	"./ms-my.js": 293,
	"./ms.js": 292,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./th": 320,
	"./th.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 329,
	"./uz-latn": 330,
	"./uz-latn.js": 330,
	"./uz.js": 329,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 443;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(84);
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
    function MyApp(platform, statusBar, splashScreen, dbProvider) {
        var _this = this;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //Cria o banco no momento da inicialiação
            dbProvider.createDb().then(function () {
                _this.openHomePage(splashScreen);
            }).catch(function () {
                _this.openHomePage(splashScreen);
            });
            //this.openHomePage(splashScreen);
        });
    }
    MyApp.prototype.openHomePage = function (splashScreen) {
        splashScreen.hide();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projetos\credi-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <!-- <ion-list>\n\n        <button ion-item (click)="openPage(homePage)">\n\n          Home\n\n        </button>\n\n        <button ion-item (click)="openPage(friendsPage)">\n\n          Friends\n\n        </button>\n\n        <button ion-item (click)="openPage(eventsPage)">\n\n          Events\n\n        </button>\n\n        <button ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list> -->\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpenseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ExpenseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExpenseProvider = (function () {
    function ExpenseProvider(http) {
        this.http = http;
        console.log('Hello ExpenseProvider Provider');
    }
    ExpenseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ExpenseProvider);
    return ExpenseProvider;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the IncomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IncomeProvider = (function () {
    function IncomeProvider(http) {
        this.http = http;
        console.log('Hello IncomeProvider Provider');
    }
    IncomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], IncomeProvider);
    return IncomeProvider;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InvoiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InvoiceProvider = (function () {
    function InvoiceProvider(http) {
        this.http = http;
        console.log('Hello InvoiceProvider Provider');
    }
    InvoiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InvoiceProvider);
    return InvoiceProvider;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite, toastCtrl) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
    }
    DatabaseProvider.prototype.iniDb = function () {
        return this.sqlite.create({
            name: 'data.db',
            location: 'default'
        });
    };
    DatabaseProvider.prototype.createDb = function () {
        var _this = this;
        return this.iniDb()
            .then(function (db) {
            _this.createTables(db);
            _this.insertDataDefaultTableCategorie(db);
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider.prototype.insertDataDefaultTableCategorie = function (db) {
        db.executeSql('SELECT COUNT(id) as qtd FROM categorie', {})
            .then(function (data) {
            if (data.rows.item(0).qtd == 0) {
                db.sqlBatch([
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Market', 'md-home', 'home', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Fuel', 'md-flame', 'flame', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Game', 'md-game-controller-b', 'primary', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Income', 'md-document', 'document', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Cash', 'md-cash', 'cash', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Coffee', 'md-cafe', 'cafe', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Telephone', 'md-call', 'call', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Car', 'md-car', 'car', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Glasse', 'md-glasses', 'glasses', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Contact', 'md-contacts', 'contacts', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Tv', 'md-desktop', 'desktop', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['Football', 'md-football', 'football', 'true']],
                    ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)', ['CreditCard', 'md-card', 'card', 'true']]
                ]).then(function () {
                    console.info('Insert Categorie Conclude!');
                })
                    .catch(function (e) {
                    console.error(e);
                });
            }
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, icon TEXT, color TEXT, status TEXT)'],
            ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada TEXT, saida TEXT, resume TEXT)'],
            ['CREATE TABLE IF NOT EXISTS graphic (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada TEXT, saida TEXT, resume TEXT)']
        ]).then(function () {
            console.info('Create DBs!');
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map