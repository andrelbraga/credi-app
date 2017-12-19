webpackJsonp([1],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the ListCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListCategoriesPage = (function () {
    function ListCategoriesPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.obj = [];
        console.log(this.navParams);
        this.obj = this.navParams.get('data');
    }
    ListCategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListCategoriesPage');
    };
    ListCategoriesPage.prototype.emit = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ListCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-categories',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\list-categories\list-categories.html"*/'<!--\n  Generated template for the ListCategoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list-categories</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group>\n    <ion-item *ngFor="let c of obj">\n        <ion-radio (ionSelect)="emit(c)" value="{{c.name}}"></ion-radio>\n        <ion-label>{{c.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\list-categories\list-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ListCategoriesPage);
    return ListCategoriesPage;
}());

//# sourceMappingURL=list-categories.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categorie/categorie.module": [
		212
	],
	"../pages/expense/expense.module": [
		169
	],
	"../pages/income/income.module": [
		215
	],
	"../pages/invoice/invoice.module": [
		218
	],
	"../pages/list-categories/list-categories.module": [
		471,
		0
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function() { return ExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_default_alert_default__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_categories_list_categories__ = __webpack_require__(113);
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
                __WEBPACK_IMPORTED_MODULE_6__list_categories_list_categories__["a" /* ListCategoriesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */])
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__components_alert_default_alert_default__["a" /* AlertDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_6__list_categories_list_categories__["a" /* ListCategoriesPage */]
            ]
        })
    ], ExpensePageModule);
    return ExpensePageModule;
}());

//# sourceMappingURL=expense.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_default_alert_default__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__alert_default_alert_default__["a" /* AlertDefaultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular_module__["a" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_1__alert_default_alert_default__["a" /* AlertDefaultComponent */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__alert_default_alert_default__["a" /* AlertDefaultComponent */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageModule", function() { return CategoriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_classutil__ = __webpack_require__(214);
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
                __WEBPACK_IMPORTED_MODULE_5__util_classutil__["a" /* ClassUtil */]
            ]
        })
    ], CategoriePageModule);
    return CategoriePageModule;
}());

//# sourceMappingURL=categorie.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_classutil__ = __webpack_require__(214);
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
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */], __WEBPACK_IMPORTED_MODULE_3__util_classutil__["a" /* ClassUtil */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__util_classutil__["a" /* ClassUtil */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CategoriePage);
    return CategoriePage;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ClassUtil);
    return ClassUtil;
}());

//# sourceMappingURL=classutil.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_income_income__ = __webpack_require__(407);
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
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_income_income__["a" /* IncomeProvider */]]
        })
    ], IncomePageModule);
    return IncomePageModule;
}());

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
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
        this.Income = {
            'Note': '',
            'Price': 0,
            'Date': '',
            'Categorie': ''
        };
        this.categories = [
            { name: 'Banco', icon: 'md-football' },
            { name: 'Lanche', icon: 'md-glasses' },
            { name: 'Roupas', icon: 'md-cash' }
        ];
        this.formIncome = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            formMoney: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formNote: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formCategorie: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    IncomePage.prototype.submit = function (I) {
        console.log(this.formIncome);
        console.log(I);
    };
    IncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomePage');
    };
    IncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\income.html"*/'<!--\n\n  Generated template for the IncomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Income</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="formIncome">\n\n        <ion-item>\n\n          <ion-label floating>R$</ion-label>\n\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Income.Price" maxlength="10"></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-list>\n\n            <ion-item>\n\n              <ion-label floating>Categories</ion-label>\n\n              <ion-select formControlName="formCategorie" [(ngModel)]="Income.Categorie">\n\n                <ion-option *ngFor="let item of categories" [value]="item">\n\n                    <ion-list>\n\n                        <ion-item>\n\n                            {{item.name}}\n\n                        </ion-item>\n\n                      </ion-list>\n\n                </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n        </ion-list>\n\n        \n\n        <ion-item>\n\n            <ion-label floating>Date</ion-label>\n\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Income.Date"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Note</ion-label>\n\n            <ion-input formControlName="formNote" [(ngModel)]="Income.Note" clearInput></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <button ion-button block color="bluedevider" [disabled]="!formIncome.valid" (click)="submit(Income)" prompt>Submit</button>\n\n        </ion-item>\n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(87);
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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-invoice',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/'<!--\n\n  Generated template for the InvoicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>invoice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label>Categoria</ion-label>\n\n          <ion-select [(ngModel)]="choice.categorie">\n\n            <ion-option *ngFor="let item of categories" [value]="item">\n\n                <ion-list>\n\n                    <ion-item>\n\n                      <ion-icon name="item.icon" item-start></ion-icon>\n\n                        {{item.name}}\n\n                    </ion-item>\n\n                  </ion-list>\n\n            </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n      \n\n      <ion-item>\n\n          <ion-label>Data</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="choice.date"></ion-datetime>\n\n      </ion-item>\n\n\n\n\n\n      <ion-content padding>\n\n        <button ion-button color="positive" block (click)="showPromptSaveExpense(choice)">Save Expense</button>\n\n      </ion-content>\n\n      \n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\invoice\invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__income_income__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorie_categorie__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_expense_expense__ = __webpack_require__(52);
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
    function HomePage(navCtrl, expenseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.expenseProvider = expenseProvider;
        /// Doughnut data
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
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
        this.expenseProvider.getAllEpense().then(function (result) {
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    _this.doughnutChartData.push(result[i].entrada);
                    _this.doughnutChartLabels.push(result[i].name);
                }
            }
        });
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
        console.log('Rendas');
    };
    HomePage.prototype.openGraphic = function (event) {
    };
    HomePage.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only>\n\n            <ion-icon name="md-notifications">\n\n            <ion-badge id="notifications-badge">5</ion-badge>\n\n            </ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-slides pager [ngClass]="{\'ListBackdrop\': fabButtonOpened == true }">\n\n\n\n        <ion-slide>\n\n                <!-- <div *ngIf="doughnutChartData.length == 0"> -->\n\n                <div>\n\n                    <p style="color:darkgray">"You not data in view page add new expesense\n\n                            for generate dynamic chart"</p>\n\n                   <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n                </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n              <div *ngIf="doughnutChartData.length == 0">\n\n                  <p style="color:darkgray">"You not data in view page add new expesense\n\n                          for generate dynamic chart"</p>\n\n                <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n              </div>\n\n\n\n              <div *ngIf="doughnutChartData.length > 0" style="display: block">\n\n                  <canvas     baseChart height="350"\n\n                              [data]="doughnutChartData"\n\n                              [labels]="doughnutChartLabels"\n\n                              [chartType]="doughnutChartType"\n\n                              (chartHover)="chartHovered($event)"\n\n                              (chartClick)="chartClicked($event)" id="chartjs"></canvas>\n\n              </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n                <!-- <div style="display: block;">\n\n                        <canvas baseChart width="400" height="400"\n\n                                    [datasets]="lineChartData"\n\n                                    [labels]="lineChartLabels"\n\n                                    [options]="lineChartOptions"\n\n                                    [colors]="lineChartColors"\n\n                                    [legend]="lineChartLegend"\n\n                                    [chartType]="lineChartType"\n\n                                    (chartHover)="chartHovered($event)"\n\n                                    (chartClick)="chartClicked($event)"></canvas>\n\n                        </div> -->\n\n                <div style="display: block;">\n\n                    <canvas baseChart width="400" height="400"\n\n                        [datasets]="lineChartData"\n\n                        [labels]="lineChartLabels"\n\n                        [options]="lineChartOptions"\n\n                        [legend]="lineChartLegend"\n\n                        [chartType]="lineChartType"\n\n                        (chartHover)="chartHovered($event)"\n\n                        (chartClick)="chartClicked($event)"></canvas>\n\n                 </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n              <p style="color:darkgray">Not list expenses.</p>\n\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n          </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab color="positive" (click)="penFabButton()"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n            <ion-label class="graphic">Graphics</ion-label>\n\n            <ion-label class="income">Incomes</ion-label>\n\n            <ion-label class="categorie">Categories</ion-label>\n\n            <ion-label class="expense">Expenses</ion-label>\n\n            <button ion-fab style="color:#32db64" (click)="openIncome($event)"><ion-icon name="md-arrow-dropup"></ion-icon></button>\n\n            <button ion-fab style="color:#f53d3d" (click)="openExpense($event)"><ion-icon name="md-arrow-dropdown"></ion-icon></button>\n\n            <button ion-fab style="color:#488aff" (click)="openCategorie($event)"><ion-icon name="md-list"></ion-icon></button>\n\n            <button ion-fab style="color:#565656" (click)="openGraphic($event)"><ion-icon name="md-pie"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n<!-- {{today | date:\'dd/MM/yyyy\'}} -->\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_expense_expense__["b" /* ExpenseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_expense_expense__["b" /* ExpenseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_invoice_invoice_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_income_income_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_expense_expense_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_categorie_categorie_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_database_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_expense_expense__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_invoice_invoice__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_components_module__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//my components




//implementig




//import { CategorieProvider } from '../providers/categorie/categorie';

//import { IncomeProvider } from '../providers/income/income';

//Components Module

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
                __WEBPACK_IMPORTED_MODULE_15__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-categories/list-categories.module#ListCategoriesPageModule', name: 'ListCategoriesPage', segment: 'list-categories', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_database_database__["a" /* DatabaseProvider */],
                //CategorieProvider,
                __WEBPACK_IMPORTED_MODULE_13__providers_expense_expense__["b" /* ExpenseProvider */],
                //IncomeProvider,
                __WEBPACK_IMPORTED_MODULE_14__providers_invoice_invoice__["a" /* InvoiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(217);
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

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 225,
	"./af.js": 225,
	"./ar": 226,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 226,
	"./az": 233,
	"./az.js": 233,
	"./be": 234,
	"./be.js": 234,
	"./bg": 235,
	"./bg.js": 235,
	"./bn": 236,
	"./bn.js": 236,
	"./bo": 237,
	"./bo.js": 237,
	"./br": 238,
	"./br.js": 238,
	"./bs": 239,
	"./bs.js": 239,
	"./ca": 240,
	"./ca.js": 240,
	"./cs": 241,
	"./cs.js": 241,
	"./cv": 242,
	"./cv.js": 242,
	"./cy": 243,
	"./cy.js": 243,
	"./da": 244,
	"./da.js": 244,
	"./de": 245,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 245,
	"./dv": 248,
	"./dv.js": 248,
	"./el": 249,
	"./el.js": 249,
	"./en-au": 250,
	"./en-au.js": 250,
	"./en-ca": 251,
	"./en-ca.js": 251,
	"./en-gb": 252,
	"./en-gb.js": 252,
	"./en-ie": 253,
	"./en-ie.js": 253,
	"./en-nz": 254,
	"./en-nz.js": 254,
	"./eo": 255,
	"./eo.js": 255,
	"./es": 256,
	"./es-do": 257,
	"./es-do.js": 257,
	"./es.js": 256,
	"./et": 258,
	"./et.js": 258,
	"./eu": 259,
	"./eu.js": 259,
	"./fa": 260,
	"./fa.js": 260,
	"./fi": 261,
	"./fi.js": 261,
	"./fo": 262,
	"./fo.js": 262,
	"./fr": 263,
	"./fr-ca": 264,
	"./fr-ca.js": 264,
	"./fr-ch": 265,
	"./fr-ch.js": 265,
	"./fr.js": 263,
	"./fy": 266,
	"./fy.js": 266,
	"./gd": 267,
	"./gd.js": 267,
	"./gl": 268,
	"./gl.js": 268,
	"./gom-latn": 269,
	"./gom-latn.js": 269,
	"./he": 270,
	"./he.js": 270,
	"./hi": 271,
	"./hi.js": 271,
	"./hr": 272,
	"./hr.js": 272,
	"./hu": 273,
	"./hu.js": 273,
	"./hy-am": 274,
	"./hy-am.js": 274,
	"./id": 275,
	"./id.js": 275,
	"./is": 276,
	"./is.js": 276,
	"./it": 277,
	"./it.js": 277,
	"./ja": 278,
	"./ja.js": 278,
	"./jv": 279,
	"./jv.js": 279,
	"./ka": 280,
	"./ka.js": 280,
	"./kk": 281,
	"./kk.js": 281,
	"./km": 282,
	"./km.js": 282,
	"./kn": 283,
	"./kn.js": 283,
	"./ko": 284,
	"./ko.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mr": 294,
	"./mr.js": 294,
	"./ms": 295,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 295,
	"./my": 297,
	"./my.js": 297,
	"./nb": 298,
	"./nb.js": 298,
	"./ne": 299,
	"./ne.js": 299,
	"./nl": 300,
	"./nl-be": 301,
	"./nl-be.js": 301,
	"./nl.js": 300,
	"./nn": 302,
	"./nn.js": 302,
	"./pa-in": 303,
	"./pa-in.js": 303,
	"./pl": 304,
	"./pl.js": 304,
	"./pt": 305,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 305,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 308,
	"./ru.js": 308,
	"./sd": 309,
	"./sd.js": 309,
	"./se": 310,
	"./se.js": 310,
	"./si": 311,
	"./si.js": 311,
	"./sk": 312,
	"./sk.js": 312,
	"./sl": 313,
	"./sl.js": 313,
	"./sq": 314,
	"./sq.js": 314,
	"./sr": 315,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 315,
	"./ss": 317,
	"./ss.js": 317,
	"./sv": 318,
	"./sv.js": 318,
	"./sw": 319,
	"./sw.js": 319,
	"./ta": 320,
	"./ta.js": 320,
	"./te": 321,
	"./te.js": 321,
	"./tet": 322,
	"./tet.js": 322,
	"./th": 323,
	"./th.js": 323,
	"./tl-ph": 324,
	"./tl-ph.js": 324,
	"./tlh": 325,
	"./tlh.js": 325,
	"./tr": 326,
	"./tr.js": 326,
	"./tzl": 327,
	"./tzl.js": 327,
	"./tzm": 328,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 328,
	"./uk": 330,
	"./uk.js": 330,
	"./ur": 331,
	"./ur.js": 331,
	"./uz": 332,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 332,
	"./vi": 334,
	"./vi.js": 334,
	"./x-pseudo": 335,
	"./x-pseudo.js": 335,
	"./yo": 336,
	"./yo.js": 336,
	"./zh-cn": 337,
	"./zh-cn.js": 337,
	"./zh-hk": 338,
	"./zh-hk.js": 338,
	"./zh-tw": 339,
	"./zh-tw.js": 339
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
webpackContext.id = 451;

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_database_database__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projetos\credi-app\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <!-- <ion-list>\n        <button ion-item (click)="openPage(homePage)">\n          Home\n        </button>\n        <button ion-item (click)="openPage(friendsPage)">\n          Friends\n        </button>\n        <button ion-item (click)="openPage(eventsPage)">\n          Events\n        </button>\n        <button ion-item (click)="closeMenu()">\n          Close Menu\n        </button>\n      </ion-list> -->\n    </ion-content>\n  </ion-menu>\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(217);
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpenseProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expense; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(53);
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
    function ExpenseProvider(dbProvider) {
        this.dbProvider = dbProvider;
        this.aExpense = Array();
        console.log('Hello ExpenseProvider Provider');
    }
    ExpenseProvider.prototype.getAllEpense = function () {
        var _this = this;
        return this.dbProvider.iniDb()
            .then(function (db) {
            return db.executeSql('SELECT * FROM expense', {}).then(function (data) {
                _this.aExpense = [];
                for (var i = 0; i < data.rows.length; i++) {
                    var item = data.rows.item(i);
                    var expense = new Expense();
                    expense.id = item.id;
                    expense.name = item.name;
                    expense.status = item.status;
                    expense.entrada = item.entrada;
                    expense.saida = item.saida;
                    expense.resume = item.resume;
                    expense.datain = item.datain;
                    expense.dataout = item.dataout;
                    expense.dataput = item.dataput;
                    expense.categorie_id = item.categorie_id;
                }
                console.log(_this.aExpense);
                return _this.aExpense;
            });
        });
    };
    ExpenseProvider.prototype.insertExpense = function (e) {
        return this.dbProvider.iniDb()
            .then(function (db) {
            var sql = "INSERT INTO expense (name,status,entrada,resume,datain,categorie_id) values(?,?,?,?,?,?)";
            var query = [e.name, e.status, e.entrada, e.resume, e.datain, e.categorie_id];
            return db.executeSql(sql, query);
        });
    };
    ExpenseProvider.prototype.removeExpense = function (e) {
        return this.dbProvider.iniDb()
            .then(function (db) {
            var sql = "DELETE FROM expense WHERE id = ?";
            var query = [e.id];
            return db.executeSql(sql, query).then(function (e) { return console.log(e); });
        });
    };
    ExpenseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */]])
    ], ExpenseProvider);
    return ExpenseProvider;
}());

var Expense = (function () {
    function Expense() {
        this.dataout = new Date();
        this.datain = new Date();
        this.dataput = new Date();
    }
    return Expense;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
                    //Categories Income
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
            ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT, datain DATETIME, dataout DATETIME, dataput DATETIME, categorie_id INTEGER, FOREIGN KEY(categorie_id) REFERENCES categorie(id))']
        ]).then(function () {
            console.info('Create DBs!');
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_default_alert_default__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_categories_list_categories__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Providers importeds



/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExpensePage = (function () {
    function ExpensePage(navCtrl, navParams, modalCtrl, expenseProvider, categorieProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.expenseProvider = expenseProvider;
        this.categorieProvider = categorieProvider;
        this.toastCtrl = toastCtrl;
        this.showCategorie = false;
        this.shouldToggle = false;
        this.categorieName = "";
        this.Expense = {
            'Note': '',
            'Price': 0,
            'Date': '',
            'Categorie': '',
            'Name': ''
        };
        this.categories = [];
        this.categorieName = this.navParams.data.name;
        console.log(this.navParams.data);
        new Promise(function () {
            _this.categorieProvider.getAllCategorie()
                .then(function (result) {
                _this.categories = result;
                return _this.categories;
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
        this.formExpense = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            formMoney: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formNote: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formCategorie: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    ExpensePage.prototype.submit = function (E) {
        var _this = this;
        var e = new __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["a" /* Expense */]();
        e.name = E.Name;
        e.status = 1;
        e.resume = E.Note;
        e.entrada = E.Price;
        e.datain = new Date(E.Date);
        e.categorie_id = this.navParams.data.id;
        this.expenseProvider.insertExpense(e).then(function (e) {
            console.log(e);
            var msg = _this.toastCtrl.create({ message: 'Ok!', duration: 3000, position: 'top' });
            msg.present();
        }).catch(function (e) {
            console.log(e);
            var msg = _this.toastCtrl.create({ message: 'Not Ok!', duration: 3000, position: 'top' });
            msg.present();
        });
    };
    ExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExpensePage');
    };
    ExpensePage.prototype.showCategories = function () {
        var d = [
            { name: 'Andre' },
            { name: 'Braga' },
            { name: 'Candido' }
        ];
        var opnModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__list_categories_list_categories__["a" /* ListCategoriesPage */], { data: d });
        opnModal.onDidDismiss(function (data) {
            console.log(data);
        });
        opnModal.present();
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/'<!--\n  Generated template for the ExpensePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Expenses</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="formExpense">\n      <alert-default [obj]="categories" *ngIf="showCategorie" id="category"></alert-default>\n      <ion-item>\n        <ion-label floating>Name Expense</ion-label>\n          <ion-input formControlName="formName" [(ngModel)]="Expense.Name" clearInput></ion-input>\n      </ion-item>\n        <ion-item>\n          <ion-label floating>R$</ion-label>\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Expense.Price" maxlength="10"></ion-input>\n        </ion-item>\n\n        <!-- <ion-list>\n            <ion-item>\n              <ion-label floating>Categories</ion-label>\n              <ion-select formControlName="formCategorie" [(ngModel)]="Expense.Categorie">\n                <ion-option *ngFor="let item of categories" [value]="item">\n                    <ion-list>\n                        <ion-item>\n                            {{item.name}}\n                        </ion-item>\n                      </ion-list>\n                </ion-option>\n              </ion-select>\n            </ion-item>\n        </ion-list> -->\n        <ion-item *ngIf="categorieName != \'\'">\n            <ion-label>{{categorieName}}</ion-label>\n        </ion-item>\n        <ion-item>\n            <button ion-button block color="bluedevider" (click)="showCategories()" prompt>Categories</button>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Expense.Date"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Note</ion-label>\n            <ion-textarea rows="3" maxLength="500" formControlName="formNote" [(ngModel)]="Expense.Note"></ion-textarea>\n        </ion-item>\n\n\n        <ion-item>\n          <button ion-button block color="bluedevider" [disabled]="!formExpense.valid" (click)="submit(Expense)" prompt>Submit</button>\n        </ion-item>\n      </form>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */], __WEBPACK_IMPORTED_MODULE_5__components_alert_default_alert_default__["a" /* AlertDefaultComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorieProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categorie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(53);
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

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_expense_expense__ = __webpack_require__(86);
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
 * Generated class for the AlertDefaultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AlertDefaultComponent = (function () {
    function AlertDefaultComponent(viewCtrl, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.categories = [];
        console.log('Hello AlertDefaultComponent Component');
    }
    AlertDefaultComponent.prototype.emit = function (data) {
        console.log(data);
        var ctrl = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_expense_expense__["a" /* ExpensePage */], data);
        this.viewCtrl.dismiss(data, null, ctrl);
    };
    AlertDefaultComponent.prototype.ngOnChanges = function () {
        console.log('ngOnChanges');
    };
    AlertDefaultComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    AlertDefaultComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    AlertDefaultComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    AlertDefaultComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    AlertDefaultComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    AlertDefaultComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    AlertDefaultComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlertDefaultComponent.prototype, "obj", void 0);
    AlertDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert-default',template:/*ion-inline-start:"C:\Projetos\credi-app\src\components\alert-default\alert-default.html"*/'          <div class="alert-body">\n\n            <ion-content padding>\n\n                <ion-list radio-group>\n\n                  <ion-item *ngFor="let c of obj">\n\n                      <ion-radio (ionSelect)="emit(c)" value="{{c.name}}"></ion-radio>\n\n                      <ion-label>{{c.name}}</ion-label>\n\n                  </ion-item>\n\n                </ion-list>\n\n          </ion-content>\n\n        </div>'/*ion-inline-end:"C:\Projetos\credi-app\src\components\alert-default\alert-default.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AlertDefaultComponent);
    return AlertDefaultComponent;
}());

//# sourceMappingURL=alert-default.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map