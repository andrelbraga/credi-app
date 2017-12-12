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
	"../pages/categorie/categorie.module": [
		165
	],
	"../pages/expense/expense.module": [
		170
	],
	"../pages/income/income.module": [
		172
	],
	"../pages/invoice/invoice.module": [
		174
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageModule", function() { return CategoriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Util_ClassUtil__ = __webpack_require__(169);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorie__["a" /* CategoriePage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__["a" /* CategorieProvider */],
                __WEBPACK_IMPORTED_MODULE_5__Util_ClassUtil__["a" /* ClassUtil */]
            ]
        })
    ], CategoriePageModule);
    return CategoriePageModule;
}());

//# sourceMappingURL=categorie.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util_ClassUtil__ = __webpack_require__(169);
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
    function CategoriePage(navCtrl, navParams, alertCtrl, loadingCtrl, categorieProvider, toastCtrl, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.categorieProvider = categorieProvider;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.categories = [];
    }
    CategoriePage_1 = CategoriePage;
    CategoriePage.prototype.ionViewCanEnter = function () {
        this.getAll();
    };
    CategoriePage.prototype.getAll = function () {
        var _this = this;
        this.categorieProvider.getAllCategorie()
            .then(function (result) {
            _this.categories = result;
        });
    };
    CategoriePage.prototype.showPromptRenameCategory = function (choice) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: choice,
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
                        console.log(data);
                        console.log(choice);
                        console.log('Saved clicked');
                        _this.util.presentLoading(CategoriePage_1, false);
                    }
                }
            ]
        });
        prompt.present();
    };
    CategoriePage.prototype.saveCategorie = function (e) {
        console.log(e);
    };
    CategoriePage.prototype.categorieTarget = function (isToggled) {
        console.log(isToggled);
    };
    CategoriePage = CategoriePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorie',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/'<!--\n  Generated template for the CategoriePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Categories</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-border no-lines *ngFor="let c of categories">\n\n      <button ion-item (click)="showPromptRenameCategory(c.name)">\n          <ion-toggle [(ngModel)]="c.status" (ionChange)="categorieTarget(c)" checked="c.status"></ion-toggle>\n          <ion-label>{{c.name}}</ion-label>\n          <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n      </button>\n\n    </ion-list>\n\n\n    <ion-fab right bottom #fab>\n        <button ion-fab color="positive"><ion-icon name="md-settings"></ion-icon></button>\n         <ion-fab-list side="top">\n           <ion-label class="save">Save</ion-label>\n           <button ion-fab style="color:#488aff" (click)="saveCategorie($event)"><ion-icon name="md-thumbs-up"></ion-icon></button>\n         </ion-fab-list>\n    </ion-fab>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n<!-- {{today | date:\'dd/MM/yyyy\'}} -->\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* CategorieProvider */], __WEBPACK_IMPORTED_MODULE_3__Util_ClassUtil__["a" /* ClassUtil */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__Util_ClassUtil__["a" /* ClassUtil */]])
    ], CategoriePage);
    return CategoriePage;
    var CategoriePage_1;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorieProvider; });
/* unused harmony export Categorie */
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ClassUtil);
    return ClassUtil;
}());

//# sourceMappingURL=ClassUtil.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function() { return ExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense__ = __webpack_require__(171);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */]),
            ],
        })
    ], ExpensePageModule);
    return ExpensePageModule;
}());

//# sourceMappingURL=expense.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    }
    ExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpensePage');
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/'<!--\n\n  Generated template for the ExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>expense</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(173);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */]),
            ],
        })
    ], IncomePageModule);
    return IncomePageModule;
}());

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\income.html"*/'<!--\n\n  Generated template for the IncomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>income</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(175);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoice__["a" /* InvoicePage */])
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        this.categories = ['Banco', 'Lanche', 'Roupas'];
        this.choice = { categories: "", date: "" };
    }
    InvoicePage.prototype.ionViewDidLoad = function () {
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
            selector: 'page-invoice',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/'<!--\n\n  Generated template for the InvoicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>invoice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label>Categoria</ion-label>\n\n          <ion-select [(ngModel)]="choice.categories">\n\n            <ion-option *ngFor="let item of categories" [value]="item">{{item}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n      \n\n      <ion-item>\n\n          <ion-label>Data</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="choice.date"></ion-datetime>\n\n      </ion-item>\n\n\n\n\n\n      <ion-content padding>\n\n        <button ion-button color="positive" block (click)="showPromptSaveExpense(choice)">Save Expense</button>\n\n      </ion-content>\n\n      \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__income_income__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorie_categorie__ = __webpack_require__(166);
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
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.today = new Date();
        this.fabButtonOpened = false;
    }
    // Chart events
    HomePage.prototype.chartClicked = function (e) {
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
        console.log('Income');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only>\n            <ion-icon name="md-notifications">\n            <ion-badge id="notifications-badge">5</ion-badge>\n            </ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-slides pager [ngClass]="{\'ListBackdrop\': fabButtonOpened == true }">\n\n          <ion-slide>\n\n              <div *ngIf="doughnutChartData.length == 0">\n                  <p style="color:darkgray">"You not data in view page add new expesense\n                          for generate dynamic chart"</p>\n                <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n              </div>\n              <div *ngIf="doughnutChartData.length > 0" style="display: block">\n                  <canvas baseChart height="350"\n                              [data]="doughnutChartData"\n                              [labels]="doughnutChartLabels"\n                              [chartType]="doughnutChartType"\n                              (chartHover)="chartHovered($event)"\n                              (chartClick)="chartClicked($event)"></canvas>\n              </div>\n\n          </ion-slide>\n\n          <ion-slide>\n              <p style="color:darkgray">Not list expenses.</p>\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n          </ion-slide>\n\n    </ion-slides>\n\n\n\n\n\n\n    <ion-fab right bottom #fab>\n        <button ion-fab color="positive" (click)="penFabButton()"><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list side="top">\n            <ion-label class="income">Income</ion-label>\n            <ion-label class="categorie">Categories</ion-label>\n            <ion-label class="expense">Expense</ion-label>\n            <button ion-fab style="color:#32db64" (click)="openIncome($event)"><ion-icon name="md-arrow-round-up"></ion-icon></button>\n            <button ion-fab style="color:#f53d3d" (click)="openExpense($event)"><ion-icon name="md-arrow-round-down"></ion-icon></button>\n            <button ion-fab style="color:#488aff" (click)="openCategorie($event)"><ion-icon name="md-list"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n<!-- {{today | date:\'dd/MM/yyyy\'}} -->\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invoice_invoice_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_income_income_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_expense_expense_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_categorie_categorie_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_expense_expense__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_income_income__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_invoice_invoice__ = __webpack_require__(467);
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
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_invoice_invoice_module__["InvoicePageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_income_income_module__["IncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_expense_expense_module__["ExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_categorie_categorie_module__["CategoriePageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */],
                //CategorieProvider,
                __WEBPACK_IMPORTED_MODULE_13__providers_expense_expense__["a" /* ExpenseProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_income_income__["a" /* IncomeProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_invoice_invoice__["a" /* InvoiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es.js": 251,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
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
webpackContext.id = 441;

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(335);
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
                console.info('Create Tables !!!');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projetos\credi-app\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <!-- <ion-list>\n        <button ion-item (click)="openPage(homePage)">\n          Home\n        </button>\n        <button ion-item (click)="openPage(friendsPage)">\n          Friends\n        </button>\n        <button ion-item (click)="openPage(eventsPage)">\n          Events\n        </button>\n        <button ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list> -->\n    </ion-content>\n  </ion-menu>\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 460:
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

/***/ 466:
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

/***/ 467:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
            ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada TEXT, saida TEXT, resume TEXT)']
        ]).then(function () {
            console.info('Create DBs!');
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[336]);
//# sourceMappingURL=main.js.map