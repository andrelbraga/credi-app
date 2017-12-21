webpackJsonp([0],{

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categorie/categorie.module": [
		166
	],
	"../pages/expense/edit-expense/edit-expense.module": [
		170
	],
	"../pages/expense/expense.module": [
		171
	],
	"../pages/expense/list-categories/list-categories.module": [
		89
	],
	"../pages/expense/list-expense/list-expense.module": [
		174
	],
	"../pages/income/edit-income/edit-income.module": [
		176
	],
	"../pages/income/income.module": [
		177
	],
	"../pages/income/list-income/list-income.module": [
		179
	],
	"../pages/root/root.module": [
		181
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageModule", function() { return CategoriePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(168);
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
            ]
        })
    ], CategoriePageModule);
    return CategoriePageModule;
}());

//# sourceMappingURL=categorie.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__ = __webpack_require__(85);
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
    function CategoriePage(navCtrl, navParams, alertCtrl, loadingCtrl, categorieProvider, toastCtrl, zone, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.categorieProvider = categorieProvider;
        this.toastCtrl = toastCtrl;
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
                        var categorie = new __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* Categorie */](data);
                        categorie.name = data.Categorie;
                        categorie.id = c.id;
                        categorie.status = c.status;
                        _this.categorieProvider.updateCategorie(categorie).then(function () {
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
    CategoriePage.prototype.statusCategory = function (data) {
        var _this = this;
        var categorie = new __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["a" /* Categorie */](data);
        this.categorieProvider.updateCategorie(categorie).then(function () {
            //this.util.presentLoading(CategoriePage, false);
            _this.events.publish('updateScreen');
        });
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorie',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/'<!--\n\n  Generated template for the CategoriePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Categories</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list no-border no-lines *ngFor="let c of categories">\n\n\n\n      <button ion-item (click)="RenameCategory(c)">\n\n          <ion-toggle [(ngModel)]="c.status" (ionChange)="statusCategory(c)" checked="c.status"></ion-toggle>\n\n          <ion-label>{{c.name}}</ion-label>\n\n          <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n\n      </button>\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab color="positive"><ion-icon name="md-settings"></ion-icon></button>\n\n         <ion-fab-list side="top">\n\n           <ion-label class="save">Save</ion-label>\n\n           <button ion-fab style="color:#488aff" (click)="saveCategorie($event)"><ion-icon name="md-thumbs-up"></ion-icon></button>\n\n         </ion-fab-list>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], CategoriePage);
    return CategoriePage;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpensePageModule", function() { return EditExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_expense__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditExpensePageModule = (function () {
    function EditExpensePageModule() {
    }
    EditExpensePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_expense__["a" /* EditExpensePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_expense__["a" /* EditExpensePage */]),
            ],
        })
    ], EditExpensePageModule);
    return EditExpensePageModule;
}());

//# sourceMappingURL=edit-expense.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function() { return ExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_expense_list_expense_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_expense_edit_expense_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_categories_list_categories_module__ = __webpack_require__(89);
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
                __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__list_expense_list_expense_module__["ListExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__edit_expense_edit_expense_module__["EditExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_5__list_categories_list_categories_module__["ListCategoriesPageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */])
            ],
            exports: [],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */]
            ]
        })
    ], ExpensePageModule);
    return ExpensePageModule;
}());

//# sourceMappingURL=expense.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categorie_categorie__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_categories_list_categories__ = __webpack_require__(173);
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
        this.Expense = {
            'resume': '',
            'entrada': 0,
            'datein': '',
            'name': ''
        };
        this.categories = [];
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
    ExpensePage.prototype.submit = function (data) {
        var _this = this;
        var e = new __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["a" /* Expense */](data);
        e.datain = new Date(data.datain);
        e.categorie_id = this.categorieName.id;
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
        var _this = this;
        var opnModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__list_categories_list_categories__["a" /* ListCategoriesPage */], { data: this.categories });
        opnModal.onDidDismiss(function (data) {
            _this.categorieName = data;
        });
        opnModal.present();
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/'<!--\n\n  Generated template for the ExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Expenses</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="formExpense">\n\n      <!-- <alert-default [obj]="categories" *ngIf="showCategorie" id="category"></alert-default> -->\n\n        \n\n        <ion-item>\n\n          <ion-label floating>Name Expense</ion-label>\n\n          <ion-input formControlName="formName" [(ngModel)]="Expense.name" clearInput></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label floating>R$</ion-label>\n\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Expense.entrada" maxlength="10"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Date</ion-label>\n\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Expense.datain"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Note</ion-label>\n\n            <ion-textarea rows="3" maxLength="500" formControlName="formNote" [(ngModel)]="Expense.resume"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <button ion-item block (click)="showCategories()">\n\n          <ion-label>{{ categorieName != null ? categorieName.name : \'Add Categories\'}}</ion-label>\n\n          <ion-icon color="{{categorieName != null ? categorieName.color : \'primary\'}}" name="{{categorieName != null ? categorieName.icon : \'md-add\'}}" item-start></ion-icon>\n\n        </button>\n\n\n\n        <p>Conclusion expense.</p>\n\n        <ion-item>\n\n          <button ion-button block color="bluedevider" [disabled]="!formExpense.valid" (click)="submit(Expense)" prompt>Submit</button>\n\n        </ion-item>\n\n      </form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */]]
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    }
    ListCategoriesPage.prototype.ngOnInit = function () {
        this.obj = this.navParams.get('data');
    };
    ListCategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListCategoriesPage');
    };
    ListCategoriesPage.prototype.emit = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ListCategoriesPage.prototype.close = function (data) {
        data = null;
        this.viewCtrl.dismiss(data);
    };
    ListCategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-categories',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\list-categories\list-categories.html"*/'<!--\n\n  Generated template for the ListCategoriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Categories</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close(data)">\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list radio-group>\n\n    <ion-item *ngFor="let c of obj">\n\n        <ion-radio (ionSelect)="emit(c)" value="{{c.name}}"></ion-radio>\n\n        <ion-label>{{c.name}}</ion-label>\n\n        <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\list-categories\list-categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ListCategoriesPage);
    return ListCategoriesPage;
}());

//# sourceMappingURL=list-categories.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExpensePageModule", function() { return ListExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_expense__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListExpensePageModule = (function () {
    function ListExpensePageModule() {
    }
    ListExpensePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_expense__["a" /* ListExpensePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_expense__["a" /* ListExpensePage */]),
            ],
        })
    ], ListExpensePageModule);
    return ListExpensePageModule;
}());

//# sourceMappingURL=list-expense.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_expense_expense__ = __webpack_require__(88);
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
 * Generated class for the ListExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListExpensePage = (function () {
    function ListExpensePage(navCtrl, navParams, expenseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.expenseProvider = expenseProvider;
        this.expense = [];
    }
    ListExpensePage.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListExpensePage.prototype.ionViewDidLoad = function () {
        this.getAll();
    };
    ListExpensePage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    ListExpensePage.prototype.getAll = function () {
        var _this = this;
        this.expenseProvider.getAllEpense(1, true).then(function (result) {
            if (result.length > 0) {
                _this.expense = [];
                for (var i = 0; i < result.length; i++) {
                    _this.expense.push(result[i]);
                }
                return _this.expense;
            }
        });
    };
    ListExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\list-expense\list-expense.html"*/'<!--\n  Generated template for the ListExpensePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>List Expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngFor="let e of expense">\n\n        <ion-item>\n          <ion-avatar item-start>\n           <ion-icon color="{{e.color}}" name="{{e.icon}}" style="zoom:2.0;"></ion-icon>\n          </ion-avatar>\n          <h2>{{e.name}}</h2>\n          <p>{{e.c_name}}</p>\n        </ion-item>\n      \n        <ion-card-content>\n          <p>{{e.resume}}</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>Paid</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>Edit</div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <ion-note>\n              {{e.datain}}\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\list-expense\list-expense.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_expense_expense__["b" /* ExpenseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_expense_expense__["b" /* ExpenseProvider */]])
    ], ListExpensePage);
    return ListExpensePage;
}());

//# sourceMappingURL=list-expense.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIncomePageModule", function() { return EditIncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_income__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditIncomePageModule = (function () {
    function EditIncomePageModule() {
    }
    EditIncomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_income__["a" /* EditIncomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_income__["a" /* EditIncomePage */]),
            ],
        })
    ], EditIncomePageModule);
    return EditIncomePageModule;
}());

//# sourceMappingURL=edit-income.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_income_list_income_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_income_edit_income_module__ = __webpack_require__(176);
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
                __WEBPACK_IMPORTED_MODULE_3__list_income_list_income_module__["ListIncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__edit_income_edit_income_module__["EditIncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */]),
            ],
            providers: []
        })
    ], IncomePageModule);
    return IncomePageModule;
}());

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\income.html"*/'<!--\n  Generated template for the IncomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Income</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <form [formGroup]="formIncome">\n        <ion-item>\n          <ion-label floating>R$</ion-label>\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Income.Price" maxlength="10"></ion-input>\n        </ion-item>\n        \n        <ion-list>\n            <ion-item>\n              <ion-label floating>Categories</ion-label>\n              <ion-select formControlName="formCategorie" [(ngModel)]="Income.Categorie">\n                <ion-option *ngFor="let item of categories" [value]="item">\n                    <ion-list>\n                        <ion-item>\n                            {{item.name}}\n                        </ion-item>\n                      </ion-list>\n                </ion-option>\n              </ion-select>\n            </ion-item>\n        </ion-list>\n        \n        <ion-item>\n            <ion-label floating>Date</ion-label>\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Income.Date"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Note</ion-label>\n            <ion-input formControlName="formNote" [(ngModel)]="Income.Note" clearInput></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button block color="bluedevider" [disabled]="!formIncome.valid" (click)="submit(Income)" prompt>Submit</button>\n        </ion-item>\n      </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIncomePageModule", function() { return ListIncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_income__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListIncomePageModule = (function () {
    function ListIncomePageModule() {
    }
    ListIncomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_income__["a" /* ListIncomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_income__["a" /* ListIncomePage */]),
            ],
        })
    ], ListIncomePageModule);
    return ListIncomePageModule;
}());

//# sourceMappingURL=list-income.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListIncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the ListIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListIncomePage = (function () {
    function ListIncomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListIncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListIncomePage');
    };
    ListIncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\list-income\list-income.html"*/'<!--\n  Generated template for the ListIncomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>list-income</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\list-income\list-income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListIncomePage);
    return ListIncomePage;
}());

//# sourceMappingURL=list-income.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPageModule", function() { return RootPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RootPageModule = (function () {
    function RootPageModule() {
    }
    RootPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__root__["a" /* RootPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__root__["a" /* RootPage */]),
            ],
        })
    ], RootPageModule);
    return RootPageModule;
}());

//# sourceMappingURL=root.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expense_list_expense_list_expense__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_list_income_list_income__ = __webpack_require__(180);
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
 * Generated class for the RootPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RootPage = (function () {
    function RootPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabHome = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tabExpense = __WEBPACK_IMPORTED_MODULE_3__expense_list_expense_list_expense__["a" /* ListExpensePage */];
        this.tabInvoice = __WEBPACK_IMPORTED_MODULE_4__income_list_income_list_income__["a" /* ListIncomePage */];
    }
    RootPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RootPage');
    };
    RootPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-root',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\root\root.html"*/'<!--\n  Generated template for the RootPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs>\n  <ion-tab tabIcon="md-home" [root]="tabHome" tabBadgeStyle="primary"></ion-tab>\n  <!-- <ion-tab tabIcon="md-thumbs-up" [root]="tabInvoice" tabBadge="14" tabBadgeStyle="danger"></ion-tab> -->\n  <ion-tab tabIcon="md-thumbs-up" [root]="tabInvoice" tabBadge="0" tabBadgeStyle="secondary"></ion-tab>\n  <ion-tab tabIcon="md-thumbs-down" [root]="tabExpense" tabBadge="0" tabBadgeStyle="danger"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\root\root.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=root.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_income__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expense_expense__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorie_categorie__ = __webpack_require__(167);
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
    //End Line Chart
    //Constructor HomePage
    function HomePage(navCtrl, events, zone) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.zone = zone;
        //Begin Doughnut data
        this.doughnutChartLabels = [];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        //End data
        //Begin Line Chart
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
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.ngOnInit = function () {
        this.fabButtonOpened = false;
    };
    HomePage.prototype.slideChanged = function () {
    };
    //Begin Functions Chart
    // Chart events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    // Chart events
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    //End Functions Chart
    //Begin Functions Fab
    HomePage.prototype.penFabButton = function () {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        }
        else {
            this.fabButtonOpened = false;
        }
    };
    HomePage.prototype.openCategorie = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__categorie_categorie__["a" /* CategoriePage */]);
        console.log('Categoria');
    };
    HomePage.prototype.openExpense = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__expense_expense__["a" /* ExpensePage */]);
        console.log('Gastos');
    };
    HomePage.prototype.openIncome = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__income_income__["a" /* IncomePage */]);
        console.log('Rendas');
    };
    HomePage.prototype.openGraphic = function (event) {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only>\n\n            <ion-icon name="md-notifications" tabBadge="0">\n\n            <ion-badge id="notifications-badge">5</ion-badge>\n\n            </ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-slides pager [ngClass]="{\'ListBackdrop\': fabButtonOpened == true }" (ionSlideDidChange)="slideChanged()">\n\n\n\n        <ion-slide>\n\n                <!-- <div *ngIf="doughnutChartData.length == 0"> -->\n\n                <div>\n\n                    <p style="color:darkgray">"You not data in view page add new expesense\n\n                            for generate dynamic chart"</p>\n\n                   <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n                </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n              <div *ngIf="doughnutChartData.length == 0">\n\n                  <p style="color:darkgray">"You not data in view page add new expesense\n\n                          for generate dynamic chart"</p>\n\n                <img src="assets/imgs/404.png" class="slide-image"/>\n\n              </div>\n\n\n\n              <div *ngIf="doughnutChartData.length > 0" style="display: block">\n\n                  <canvas     baseChart height="350"\n\n                              [data]="doughnutChartData"\n\n                              [labels]="doughnutChartLabels"\n\n                              [chartType]="doughnutChartType"\n\n                              (chartHover)="chartHovered($event)"\n\n                              (chartClick)="chartClicked($event)" id="chartjs"></canvas>\n\n              </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n                <!-- <div style="display: block;">\n\n                        <canvas baseChart width="400" height="400"\n\n                                    [datasets]="lineChartData"\n\n                                    [labels]="lineChartLabels"\n\n                                    [options]="lineChartOptions"\n\n                                    [colors]="lineChartColors"\n\n                                    [legend]="lineChartLegend"\n\n                                    [chartType]="lineChartType"\n\n                                    (chartHover)="chartHovered($event)"\n\n                                    (chartClick)="chartClicked($event)"></canvas>\n\n                        </div> -->\n\n                <div style="display: block;">\n\n                    <canvas baseChart width="400" height="400"\n\n                        [datasets]="lineChartData"\n\n                        [labels]="lineChartLabels"\n\n                        [options]="lineChartOptions"\n\n                        [legend]="lineChartLegend"\n\n                        [chartType]="lineChartType"\n\n                        (chartHover)="chartHovered($event)"\n\n                        (chartClick)="chartClicked($event)"></canvas>\n\n                 </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n              <p style="color:darkgray">Not list expenses.</p>\n\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n          </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n\n\n\n\n    <ion-fab right bottom #fab>\n\n        <button ion-fab color="positive" (click)="penFabButton()"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n            <ion-label class="graphic">Graphics</ion-label>\n\n            <ion-label class="income">Incomes</ion-label>\n\n            <ion-label class="categorie">Categories</ion-label>\n\n            <ion-label class="expense">Expenses</ion-label>\n\n            <button ion-fab style="color:#32db64" (click)="openIncome($event)"><ion-icon name="md-arrow-dropup"></ion-icon></button>\n\n            <button ion-fab style="color:#f53d3d" (click)="openExpense($event)"><ion-icon name="md-arrow-dropdown"></ion-icon></button>\n\n            <button ion-fab style="color:#488aff" (click)="openCategorie($event)"><ion-icon name="md-list"></ion-icon></button>\n\n            <button ion-fab style="color:#565656" (click)="openGraphic($event)"><ion-icon name="md-pie"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie_categorie__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__income_income__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_invoice__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProvidersModule = (function () {
    function ProvidersModule() {
    }
    ProvidersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__categorie_categorie__["b" /* CategorieProvider */],
                __WEBPACK_IMPORTED_MODULE_3__database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_4__expense_expense__["b" /* ExpenseProvider */],
                __WEBPACK_IMPORTED_MODULE_5__income_income__["a" /* IncomeProvider */],
                __WEBPACK_IMPORTED_MODULE_6__invoice_invoice__["a" /* InvoiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], ProvidersModule);
    return ProvidersModule;
}());

//# sourceMappingURL=providers.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pages_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Feature Pages


//Plugin

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_9__providers_providers_module__["a" /* ProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/edit-expense/edit-expense.module#EditExpensePageModule', name: 'EditExpensePage', segment: 'edit-expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/list-categories/list-categories.module#ListCategoriesPageModule', name: 'ListCategoriesPage', segment: 'list-categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/list-expense/list-expense.module#ListExpensePageModule', name: 'ListExpensePage', segment: 'list-expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/edit-income/edit-income.module#EditIncomePageModule', name: 'EditIncomePage', segment: 'edit-income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/income/list-income/list-income.module#ListIncomePageModule', name: 'ListIncomePage', segment: 'list-income', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/root/root.module#RootPageModule', name: 'RootPage', segment: 'root', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the EditExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditExpensePage = (function () {
    function EditExpensePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditExpensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditExpensePage');
    };
    EditExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\edit-expense\edit-expense.html"*/'<!--\n  Generated template for the EditExpensePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-expense</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\edit-expense\edit-expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditExpensePage);
    return EditExpensePage;
}());

//# sourceMappingURL=edit-expense.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
 * Generated class for the EditIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditIncomePage = (function () {
    function EditIncomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditIncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditIncomePage');
    };
    EditIncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\edit-income\edit-income.html"*/'<!--\n  Generated template for the EditIncomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-income</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\edit-income\edit-income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditIncomePage);
    return EditIncomePage;
}());

//# sourceMappingURL=edit-income.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_root_root__ = __webpack_require__(182);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_root_root__["a" /* RootPage */];
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projetos\credi-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n      <!-- <ion-list>\n\n        <button ion-item (click)="openPage(homePage)">\n\n          Home\n\n        </button>\n\n        <button ion-item (click)="openPage(friendsPage)">\n\n          Friends\n\n        </button>\n\n        <button ion-item (click)="openPage(eventsPage)">\n\n          Events\n\n        </button>\n\n        <button ion-item (click)="closeMenu()">\n\n          Close Menu\n\n        </button>\n\n      </ion-list> -->\n\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Projetos\credi-app\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_income_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expense_expense_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorie_categorie_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expense_list_categories_list_categories_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_root_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_providers_module__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Not use
//import { PagesComponent } from '../pages/pages.component';
//Modules Pages






//Modules Providers

var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__income_income_module__["IncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_3__expense_expense_module__["ExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__categorie_categorie_module__["CategoriePageModule"],
                __WEBPACK_IMPORTED_MODULE_5__expense_list_categories_list_categories_module__["ListCategoriesPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__providers_providers_module__["a" /* ProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_6__root_root_module__["RootPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 229,
	"./af.js": 229,
	"./ar": 230,
	"./ar-dz": 231,
	"./ar-dz.js": 231,
	"./ar-kw": 232,
	"./ar-kw.js": 232,
	"./ar-ly": 233,
	"./ar-ly.js": 233,
	"./ar-ma": 234,
	"./ar-ma.js": 234,
	"./ar-sa": 235,
	"./ar-sa.js": 235,
	"./ar-tn": 236,
	"./ar-tn.js": 236,
	"./ar.js": 230,
	"./az": 237,
	"./az.js": 237,
	"./be": 238,
	"./be.js": 238,
	"./bg": 239,
	"./bg.js": 239,
	"./bn": 240,
	"./bn.js": 240,
	"./bo": 241,
	"./bo.js": 241,
	"./br": 242,
	"./br.js": 242,
	"./bs": 243,
	"./bs.js": 243,
	"./ca": 244,
	"./ca.js": 244,
	"./cs": 245,
	"./cs.js": 245,
	"./cv": 246,
	"./cv.js": 246,
	"./cy": 247,
	"./cy.js": 247,
	"./da": 248,
	"./da.js": 248,
	"./de": 249,
	"./de-at": 250,
	"./de-at.js": 250,
	"./de-ch": 251,
	"./de-ch.js": 251,
	"./de.js": 249,
	"./dv": 252,
	"./dv.js": 252,
	"./el": 253,
	"./el.js": 253,
	"./en-au": 254,
	"./en-au.js": 254,
	"./en-ca": 255,
	"./en-ca.js": 255,
	"./en-gb": 256,
	"./en-gb.js": 256,
	"./en-ie": 257,
	"./en-ie.js": 257,
	"./en-nz": 258,
	"./en-nz.js": 258,
	"./eo": 259,
	"./eo.js": 259,
	"./es": 260,
	"./es-do": 261,
	"./es-do.js": 261,
	"./es.js": 260,
	"./et": 262,
	"./et.js": 262,
	"./eu": 263,
	"./eu.js": 263,
	"./fa": 264,
	"./fa.js": 264,
	"./fi": 265,
	"./fi.js": 265,
	"./fo": 266,
	"./fo.js": 266,
	"./fr": 267,
	"./fr-ca": 268,
	"./fr-ca.js": 268,
	"./fr-ch": 269,
	"./fr-ch.js": 269,
	"./fr.js": 267,
	"./fy": 270,
	"./fy.js": 270,
	"./gd": 271,
	"./gd.js": 271,
	"./gl": 272,
	"./gl.js": 272,
	"./gom-latn": 273,
	"./gom-latn.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it.js": 281,
	"./ja": 282,
	"./ja.js": 282,
	"./jv": 283,
	"./jv.js": 283,
	"./ka": 284,
	"./ka.js": 284,
	"./kk": 285,
	"./kk.js": 285,
	"./km": 286,
	"./km.js": 286,
	"./kn": 287,
	"./kn.js": 287,
	"./ko": 288,
	"./ko.js": 288,
	"./ky": 289,
	"./ky.js": 289,
	"./lb": 290,
	"./lb.js": 290,
	"./lo": 291,
	"./lo.js": 291,
	"./lt": 292,
	"./lt.js": 292,
	"./lv": 293,
	"./lv.js": 293,
	"./me": 294,
	"./me.js": 294,
	"./mi": 295,
	"./mi.js": 295,
	"./mk": 296,
	"./mk.js": 296,
	"./ml": 297,
	"./ml.js": 297,
	"./mr": 298,
	"./mr.js": 298,
	"./ms": 299,
	"./ms-my": 300,
	"./ms-my.js": 300,
	"./ms.js": 299,
	"./my": 301,
	"./my.js": 301,
	"./nb": 302,
	"./nb.js": 302,
	"./ne": 303,
	"./ne.js": 303,
	"./nl": 304,
	"./nl-be": 305,
	"./nl-be.js": 305,
	"./nl.js": 304,
	"./nn": 306,
	"./nn.js": 306,
	"./pa-in": 307,
	"./pa-in.js": 307,
	"./pl": 308,
	"./pl.js": 308,
	"./pt": 309,
	"./pt-br": 310,
	"./pt-br.js": 310,
	"./pt.js": 309,
	"./ro": 311,
	"./ro.js": 311,
	"./ru": 312,
	"./ru.js": 312,
	"./sd": 313,
	"./sd.js": 313,
	"./se": 314,
	"./se.js": 314,
	"./si": 315,
	"./si.js": 315,
	"./sk": 316,
	"./sk.js": 316,
	"./sl": 317,
	"./sl.js": 317,
	"./sq": 318,
	"./sq.js": 318,
	"./sr": 319,
	"./sr-cyrl": 320,
	"./sr-cyrl.js": 320,
	"./sr.js": 319,
	"./ss": 321,
	"./ss.js": 321,
	"./sv": 322,
	"./sv.js": 322,
	"./sw": 323,
	"./sw.js": 323,
	"./ta": 324,
	"./ta.js": 324,
	"./te": 325,
	"./te.js": 325,
	"./tet": 326,
	"./tet.js": 326,
	"./th": 327,
	"./th.js": 327,
	"./tl-ph": 328,
	"./tl-ph.js": 328,
	"./tlh": 329,
	"./tlh.js": 329,
	"./tr": 330,
	"./tr.js": 330,
	"./tzl": 331,
	"./tzl.js": 331,
	"./tzm": 332,
	"./tzm-latn": 333,
	"./tzm-latn.js": 333,
	"./tzm.js": 332,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
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
webpackContext.id = 454;

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(345);
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

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(345);
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorieProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categorie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(46);
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
                    var categorie = new Categorie(item);
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
    function Categorie(data) {
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
        this.color = data.color;
        this.status = data.status;
    }
    return Categorie;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExpenseProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Expense; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(46);
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
        //public aExpense: Array<Expense> = [];
        this.aExpense = [];
        console.log('Hello ExpenseProvider Provider');
    }
    ExpenseProvider.prototype.getAllEpense = function (status, lazy) {
        var _this = this;
        if (status === void 0) { status = 1; }
        if (lazy === void 0) { lazy = false; }
        return this.dbProvider.iniDb()
            .then(function (db) {
            var sql = "SELECT expense.*, categorie.icon, categorie.color, categorie.name as c_name FROM expense";
            if (lazy) {
                sql += " INNER JOIN categorie ON expense.categorie_id = categorie.id";
            }
            sql += " WHERE expense.status = ?";
            var data = [status];
            return db.executeSql(sql, data).then(function (data) {
                _this.aExpense = [];
                for (var i = 0; i < data.rows.length; i++) {
                    var item = data.rows.item(i);
                    var expense = item;
                    _this.aExpense.push(expense);
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
    function Expense(data) {
        this.dataout = new Date() || data.dataout;
        this.datain = new Date() || data.datain;
        this.dataput = new Date() || data.datain;
        this.id = data.id;
        this.name = data.name;
        this.status = 1 || data.status;
        this.entrada = data.entrada;
        this.saida = data.saida;
        this.resume = data.resume;
        this.categorie_id = data.categorie_id;
    }
    return Expense;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriesPageModule", function() { return ListCategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_categories__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListCategoriesPageModule = (function () {
    function ListCategoriesPageModule() {
    }
    ListCategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_categories__["a" /* ListCategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_categories__["a" /* ListCategoriesPage */]),
            ],
        })
    ], ListCategoriesPageModule);
    return ListCategoriesPageModule;
}());

//# sourceMappingURL=list-categories.module.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map