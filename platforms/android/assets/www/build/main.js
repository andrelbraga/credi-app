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
	"../pages/expense/list-expense/list-expense.module": [
		291
	],
	"../pages/income/edit-income/edit-income.module": [
		293
	],
	"../pages/income/income.module": [
		294
	],
	"../pages/income/list-income/list-income.module": [
		296
	],
	"../pages/root/root.module": [
		298
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__ = __webpack_require__(53);
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
    CategoriePage.prototype.ionViewCanEnter = function () {
        this.getAll();
    };
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
            _this.events.publish('updateScreen');
        });
    };
    CategoriePage.prototype.addCategories = function () {
        console.log();
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categorie',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/'<!--\n\n  Generated template for the CategoriePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Categorias</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list no-border no-lines *ngFor="let c of categories">\n\n        <div class="expense-back">\n\n            <button ion-item (click)="RenameCategory(c)">\n\n                <ion-toggle [(ngModel)]="c.status" (ionChange)="statusCategory(c)" checked="c.status"></ion-toggle>\n\n                <ion-label>{{c.name}}</ion-label>\n\n                <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n\n            </button>\n\n        </div>\n\n        <!--<div *ngIf="c.type == \'I\'" class="income-back">\n\n            <button ion-item (click)="RenameCategory(c)">\n\n                <ion-toggle [(ngModel)]="c.status" (ionChange)="statusCategory(c)" checked="c.status"></ion-toggle>\n\n                <ion-label>{{c.name}}</ion-label>\n\n                <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>\n\n            </button>\n\n        </div> -->\n\n    </ion-list>\n\n\n\n    <ion-fab top right edge>\n\n      <button ion-fab color="vibrant" mini><ion-icon name="add"></ion-icon></button>\n\n      <ion-fab-list>\n\n          <button ion-fab [style.background-color]="color">\n\n              <ion-icon name="md-arrow-dropup" color="secondary"></ion-icon>\n\n              <div style="color:#32db64;" class="label" dir="rtl">Rendas</div>\n\n          </button>\n\n          \n\n          <button ion-fab [style.background-color]="color">\n\n              <ion-icon name="md-arrow-dropdown" color="danger"></ion-icon>\n\n              <div style="color:#f53d3d;" class="label" dir="rtl">Despesas</div>\n\n          </button>\n\n\n\n      </ion-fab-list>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\categorie\categorie.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_expense__ = __webpack_require__(403);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_expense_list_expense_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_expense_edit_expense_module__ = __webpack_require__(170);
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
                __WEBPACK_IMPORTED_MODULE_2__expense__["b" /* Popup */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__list_expense_list_expense_module__["ListExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__edit_expense_edit_expense_module__["EditExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */])
            ],
            exports: [],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__expense__["a" /* ExpensePage */],
                __WEBPACK_IMPORTED_MODULE_2__expense__["b" /* Popup */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_locale_pt_br__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_categorie_categorie__ = __webpack_require__(53);
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
var Popup = (function () {
    function Popup(navParams, popoverCtrl, navCtrl, viewCtrl) {
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.obj = [];
    }
    Popup.prototype.ngOnInit = function () {
        this.obj = this.navParams.get('data');
    };
    Popup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomePage');
    };
    Popup.prototype.emit = function (data) {
        this.viewCtrl.dismiss(data);
    };
    Popup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-list radio-group no-lines>\n              <ion-item *ngFor=\"let c of obj\">\n                <ion-radio (ionSelect)=\"emit(c)\" value=\"{{c.name}}\"></ion-radio>\n                <ion-label>{{c.name}}</ion-label>\n                <ion-icon color=\"{{c.color}}\" name=\"{{c.icon}}\" item-start></ion-icon>\n              </ion-item>\n            </ion-list>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Popup);
    return Popup;
}());

var ExpensePage = (function () {
    function ExpensePage(navCtrl, navParams, modalCtrl, expenseProvider, categorieProvider, toastCtrl, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.expenseProvider = expenseProvider;
        this.categorieProvider = categorieProvider;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
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
        //e.datain = data.datain.toLocaleDateString('pt-BR',{month:'2-digit', day:'2-digit', year:'numeric'});
        e.datain = __WEBPACK_IMPORTED_MODULE_4_moment__(data.datain).format();
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
        var opt = {
            showBackdrop: true,
            enableBackdropDismiss: true,
        };
        var opnModal = this.popoverCtrl.create(Popup, { data: this.categories }, opt);
        opnModal.onDidDismiss(function (data) {
            _this.categorieName = data;
        });
        opnModal.present();
    };
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/'<!--\n\n  Generated template for the ExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Expenses</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <form [formGroup]="formExpense">\n\n      <!-- <alert-default [obj]="categories" *ngIf="showCategorie" id="category"></alert-default> -->\n\n        \n\n        <ion-item>\n\n          <ion-label floating>Despesa</ion-label>\n\n          <ion-input formControlName="formName" [(ngModel)]="Expense.name" clearInput></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label floating>R$</ion-label>\n\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Expense.entrada" maxlength="10"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Data</ion-label>\n\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Expense.datain"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Nota</ion-label>\n\n            <ion-textarea rows="3" maxLength="500" formControlName="formNote" [(ngModel)]="Expense.resume"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <button ion-item block (click)="showCategories()">\n\n          <ion-label>{{ categorieName != null ? categorieName.name : \'Add Categories\'}}</ion-label>\n\n          <ion-icon color="{{categorieName != null ? categorieName.color : \'primary\'}}" name="{{categorieName != null ? categorieName.icon : \'md-add\'}}" item-start></ion-icon>\n\n        </button>\n\n\n\n        <ion-item>\n\n          <button ion-button block color="bluedevider" [disabled]="!formExpense.valid" (click)="submit(Expense)" prompt>Submit</button>\n\n        </ion-item>\n\n      </form>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\expense.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_expense_expense__["b" /* ExpenseProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_categorie_categorie__["b" /* CategorieProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListExpensePageModule", function() { return ListExpensePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_expense__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_2__list_expense__["b" /* Popup */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_expense__["a" /* ListExpensePage */]),
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__list_expense__["a" /* ListExpensePage */],
                __WEBPACK_IMPORTED_MODULE_2__list_expense__["b" /* Popup */]
            ]
        })
    ], ListExpensePageModule);
    return ListExpensePageModule;
}());

//# sourceMappingURL=list-expense.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Popup; });
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
var Popup = (function () {
    function Popup() {
    }
    Popup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <ion-list-header>Ordenar</ion-list-header>\n      <button ion-item (click)=\"close()\">Alfab\u00E9tico</button>\n      <button ion-item (click)=\"close()\">Dias</button>\n      <button ion-item (click)=\"close()\">Categorias</button>\n      <button ion-item (click)=\"close()\">Todos</button>\n      <button ion-item (click)=\"close()\">Alfab\u00E9tico</button>\n      <button ion-item (click)=\"close()\">Dias</button>\n      <button ion-item (click)=\"close()\">Categorias</button>\n      <button ion-item (click)=\"close()\">Todos</button>\n      <button ion-item (click)=\"close()\">Alfab\u00E9tico</button>\n      <button ion-item (click)=\"close()\">Dias</button>\n      <button ion-item (click)=\"close()\">Categorias</button>\n      <button ion-item (click)=\"close()\">Todos</button>\n    </ion-list>"
        }),
        __metadata("design:paramtypes", [])
    ], Popup);
    return Popup;
}());

var ListExpensePage = (function () {
    function ListExpensePage(navCtrl, navParams, expenseProvider, zone, events, popoverCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.expenseProvider = expenseProvider;
        this.zone = zone;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.mock = [
            { name: "First", c_name: "First", resume: "AAAAAAAAAAAAAA", entrada: "1250", color: "cash", icon: "md-cash", datain: new Date() },
            { name: "Second", c_name: "Second", resume: "BBBBBBBBBBBBBBBB", entrada: "1500", color: "contacts", icon: "md-apps", datain: new Date() },
            { name: "Three", c_name: "Three", resume: "CCCCCCCCCCCCCC", entrada: "1900", color: "flame", icon: "md-archive", datain: new Date() },
            { name: "Four", c_name: "Four", resume: "DDDDDDDDDDDDD", entrada: "1800", color: "car", icon: "md-arrow-round-forward", datain: new Date() },
        ];
        this.expense = [];
        this.month = [
            { name: 'Janeiro', id: 1 },
            { name: 'Fevereiro', id: 2 },
            { name: 'Março', id: 3 },
            { name: 'Abril', id: 4 },
            { name: 'Maio', id: 5 },
            { name: 'Junho', id: 6 },
            { name: 'Julho', id: 7 },
            { name: 'Agosto', id: 8 },
            { name: 'Setembro', id: 9 },
            { name: 'Outubro', id: 10 },
            { name: 'Novembro', id: 11 },
            { name: 'Dezembro', id: 12 },
        ];
        this.events.subscribe('updateScreen', function () {
            _this.zone.run(function (e) {
                _this.expense = [];
                _this.amountExpense = 0;
                _this.getAll(_this.currentMonth.id);
            });
        });
    }
    ListExpensePage.prototype.ngOnInit = function () {
        this.currentMonthFn();
        this.getAll(this.realMonth());
    };
    ListExpensePage.prototype.ionViewDidLoad = function () {
        this.currentMonthFn();
        this.getAll(this.realMonth());
    };
    ListExpensePage.prototype.ionViewWillEnter = function () {
        this.currentMonthFn();
        this.getAll(this.realMonth());
    };
    ListExpensePage.prototype.getAll = function (e) {
        var _this = this;
        this.expenseProvider.getAllbyMothEspense(e).then(function (result) {
            if (result.length > 0) {
                _this.expense = [];
                _this.amountExpense = 0;
                for (var i = 0; i < result.length; i++) {
                    _this.amountExpense += result[i].entrada;
                    _this.expense.push(result[i]);
                }
                return _this.expense;
            }
        });
    };
    ListExpensePage.prototype.beforeMonth = function () {
        if (new Date().getMonth() <= 11) {
            var m = this.month.indexOf(this.currentMonth);
            --m;
            if (m <= 11 && m >= 0) {
                this.currentMonth = this.month[m];
                this.events.publish('updateScreen');
            }
        }
        else {
            var a = this.month.indexOf(this.currentMonth);
            this.currentMonth = this.month[a];
            this.events.publish('updateScreen');
        }
    };
    ListExpensePage.prototype.afterMonth = function () {
        if (new Date().getMonth() >= 0) {
            var m = this.month.indexOf(this.currentMonth);
            m++;
            if (m >= 0 && m <= 11) {
                this.currentMonth = this.month[m];
                this.events.publish('updateScreen');
            }
        }
        else {
            var a = this.month.indexOf(this.currentMonth);
            this.currentMonth = this.month[a];
            this.events.publish('updateScreen');
        }
    };
    ListExpensePage.prototype.realMonth = function () {
        var m = new Date();
        var mReal = m.getMonth() + 1;
        return mReal;
    };
    ListExpensePage.prototype.currentMonthFn = function () {
        var n = new Date().getMonth();
        this.currentMonth = this.month[n];
    };
    ListExpensePage.prototype.showMenuPopup = function () {
        var opt = {
            showBackdrop: true,
            enableBackdropDismiss: true,
            cssClass: 'backdropOpacityPopover'
        };
        var p = this.popoverCtrl.create(Popup, { ev: 'DADOS' }, opt);
        p.onDidDismiss(function (data) {
            console.log(data);
        });
        p.present();
    };
    ListExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\list-expense\list-expense.html"*/'<!--\n\n  Generated template for the ListExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List Expense</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="showMenuPopup()">\n\n            <ion-icon name="md-funnel"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only (click)="beforeMonth()">\n\n              <ion-icon name="md-arrow-dropleft"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n      <div style="text-align:center; color:white; font-size:20px;">\n\n        {{currentMonth.name}} - {{(amountExpense | currency:\'BRL\':true:\'2.2-2\') || \'R$0,00\' }}\n\n      </div>\n\n      <ion-buttons right>\n\n          <button ion-button icon-only (click)="afterMonth()">\n\n              <ion-icon name="md-arrow-dropright"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <!-- <div *ngIf="expense.length == 0">\n\n      <img src="assets/imgs/404.png" />\n\n    </div> -->\n\n\n\n    <ion-card *ngFor="let e of expense"> \n\n\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n           <ion-icon color="{{e.color}}" name="{{e.icon}}" style="zoom:2.0;"></ion-icon>\n\n          </ion-avatar>\n\n          <h2>{{e.name}}</h2>\n\n          <p>{{e.c_name}}</p>\n\n        </ion-item>\n\n      \n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col align-self-start col-6>\n\n          <p>{{e.resume}}</p>\n\n               </ion-col>\n\n               <ion-col align-self-end col-6>\n\n                <span style="font-size:20px;">{{e.entrada | currency:\'BRL\':true:\'2.2-2\'}}</span>\n\n               </ion-col>\n\n          </ion-row>\n\n        \n\n        </ion-card-content>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>Pago</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>Editar</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col center text-center>\n\n            <ion-note>\n\n              {{e.datain | date:\'dd/MM/yyyy\'}}\n\n            </ion-note>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\list-expense\list-expense.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_expense_expense__["b" /* ExpenseProvider */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_expense_expense__["b" /* ExpenseProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], ListExpensePage);
    return ListExpensePage;
}());

//# sourceMappingURL=list-expense.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIncomePageModule", function() { return EditIncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_income__ = __webpack_require__(406);
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_income_list_income_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_income_edit_income_module__ = __webpack_require__(293);
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
                __WEBPACK_IMPORTED_MODULE_2__income__["b" /* Popup */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__list_income_list_income_module__["ListIncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__edit_income_edit_income_module__["EditIncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */]),
            ],
            providers: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */],
                __WEBPACK_IMPORTED_MODULE_2__income__["b" /* Popup */]
            ]
        })
    ], IncomePageModule);
    return IncomePageModule;
}());

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Popup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_categorie_categorie__ = __webpack_require__(53);
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
var Popup = (function () {
    function Popup(navParams, popoverCtrl, navCtrl, viewCtrl) {
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.obj = [];
    }
    Popup.prototype.ngOnInit = function () {
        this.obj = this.navParams.get('data');
    };
    Popup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomePage');
    };
    Popup.prototype.emit = function (data) {
        this.viewCtrl.dismiss(data);
    };
    Popup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-list radio-group no-lines>\n              <ion-item *ngFor=\"let c of obj\">\n                <ion-radio (ionSelect)=\"emit(c)\" value=\"{{c.name}}\"></ion-radio>\n                <ion-label>{{c.name}}</ion-label>\n                <ion-icon color=\"{{c.color}}\" name=\"{{c.icon}}\" item-start></ion-icon>\n              </ion-item>\n            </ion-list>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Popup);
    return Popup;
}());

var IncomePage = (function () {
    function IncomePage(navCtrl, navParams, popoverCtrl, categorieProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.categorieProvider = categorieProvider;
        this.categories = [];
        this.Income = {
            'resume': '',
            'entrada': 0,
            'datein': '',
            'name': ''
        };
        new Promise(function () {
            _this.categorieProvider.getAllCategorie()
                .then(function (result) {
                _this.categories = result;
                return _this.categories;
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
        this.formIncome = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            formMoney: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formNote: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            formCategorie: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    IncomePage.prototype.submit = function (I) {
    };
    IncomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IncomePage');
    };
    IncomePage.prototype.showCategories = function () {
        var _this = this;
        var opt = {
            showBackdrop: true,
            enableBackdropDismiss: true,
        };
        var popover = this.popoverCtrl.create(Popup, { data: this.categories }, opt);
        popover.onDidDismiss(function (data) {
            _this.categorieName = data;
        });
        popover.present();
    };
    IncomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\income.html"*/'<!--\n\n  Generated template for the IncomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Rendas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="formIncome">\n\n        <ion-item>\n\n          <ion-label floating>R$</ion-label>\n\n          <ion-input type="number" formControlName="formMoney"  [(ngModel)]="Income.entrada" maxlength="10"></ion-input>\n\n        </ion-item>\n\n       \n\n        <ion-item>\n\n            <ion-label floating>Data</ion-label>\n\n            <ion-datetime formControlName="formDate" displayFormat="DD/MM/YYYY" [(ngModel)]="Income.datain"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Nota</ion-label>\n\n            <ion-input formControlName="formNote" [(ngModel)]="Income.resume" clearInput></ion-input>\n\n        </ion-item>\n\n\n\n        <button ion-item block (click)="showCategories()">\n\n          <ion-label>{{ categorieName != null ? categorieName.name : \'Add Categories\'}}</ion-label>\n\n          <ion-icon color="{{categorieName != null ? categorieName.color : \'primary\'}}" name="{{categorieName != null ? categorieName.icon : \'md-add\'}}" item-start></ion-icon>\n\n        </button>\n\n\n\n        <ion-item>\n\n          <button ion-button block color="bluedevider" [disabled]="!formIncome.valid" (click)="submit(Income)" prompt>Submit</button>\n\n        </ion-item>\n\n      </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_categorie_categorie__["b" /* CategorieProvider */]])
    ], IncomePage);
    return IncomePage;
}());

//# sourceMappingURL=income.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIncomePageModule", function() { return ListIncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_income__ = __webpack_require__(297);
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

/***/ 297:
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
            selector: 'page-list-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\list-income\list-income.html"*/'<!--\n\n  Generated template for the ListIncomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>list-income</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\list-income\list-income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListIncomePage);
    return ListIncomePage;
}());

//# sourceMappingURL=list-income.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPageModule", function() { return RootPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__root__ = __webpack_require__(299);
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

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expense_list_expense_list_expense__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__income_list_income_list_income__ = __webpack_require__(297);
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
            selector: 'page-root',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\root\root.html"*/'<!--\n\n  Generated template for the RootPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-tabs>\n\n  <ion-tab tabIcon="md-home" [root]="tabHome" tabBadgeStyle="primary"></ion-tab>\n\n  <!-- <ion-tab tabIcon="md-thumbs-up" [root]="tabInvoice" tabBadge="14" tabBadgeStyle="danger"></ion-tab> -->\n\n  <ion-tab tabIcon="md-thumbs-up" [root]="tabInvoice"></ion-tab>\n\n  <ion-tab tabIcon="md-thumbs-down" [root]="tabExpense"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\root\root.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RootPage);
    return RootPage;
}());

//# sourceMappingURL=root.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_income__ = __webpack_require__(295);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only>\n\n            <ion-icon name="md-notifications" tabBadge="0">\n\n            <ion-badge id="notifications-badge">5</ion-badge>\n\n            </ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-slides pager [ngClass]="{\'ListBackdrop\': fabButtonOpened == true }" (ionSlideDidChange)="slideChanged()">\n\n\n\n        <ion-slide>\n\n                <!-- <div *ngIf="doughnutChartData.length == 0"> -->\n\n                <div>\n\n                    <p style="color:darkgray">"You not data in view page add new expesense\n\n                            for generate dynamic chart"</p>\n\n                   <img src="assets/imgs/ica-slidebox-img-1.png" class="slide-image"/>\n\n                </div>\n\n        </ion-slide>\n\n        <ion-slide>\n\n              <div *ngIf="doughnutChartData.length == 0">\n\n                  <p style="color:darkgray">"You not data in view page add new expesense\n\n                          for generate dynamic chart"</p>\n\n                <img src="assets/imgs/404.png" class="slide-image"/>\n\n              </div>\n\n\n\n              <div *ngIf="doughnutChartData.length > 0" style="display: block">\n\n                  <canvas     baseChart height="350"\n\n                              [data]="doughnutChartData"\n\n                              [labels]="doughnutChartLabels"\n\n                              [chartType]="doughnutChartType"\n\n                              (chartHover)="chartHovered($event)"\n\n                              (chartClick)="chartClicked($event)" id="chartjs"></canvas>\n\n              </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n                <!-- <div style="display: block;">\n\n                        <canvas baseChart width="400" height="400"\n\n                                    [datasets]="lineChartData"\n\n                                    [labels]="lineChartLabels"\n\n                                    [options]="lineChartOptions"\n\n                                    [colors]="lineChartColors"\n\n                                    [legend]="lineChartLegend"\n\n                                    [chartType]="lineChartType"\n\n                                    (chartHover)="chartHovered($event)"\n\n                                    (chartClick)="chartClicked($event)"></canvas>\n\n                        </div> -->\n\n                <div style="display: block;">\n\n                    <canvas baseChart width="400" height="400"\n\n                        [datasets]="lineChartData"\n\n                        [labels]="lineChartLabels"\n\n                        [options]="lineChartOptions"\n\n                        [legend]="lineChartLegend"\n\n                        [chartType]="lineChartType"\n\n                        (chartHover)="chartHovered($event)"\n\n                        (chartClick)="chartClicked($event)"></canvas>\n\n                 </div>\n\n          </ion-slide>\n\n          <ion-slide>\n\n              <p style="color:darkgray">Not list expenses.</p>\n\n            <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n\n          </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="positive" (click)="penFabButton()"><ion-icon name="add"></ion-icon></button>\n\n        <ion-fab-list side="top">\n\n            <button ion-fab [style.background-color]="color" (click)="openGraphic($event)">\n\n                    <ion-icon name="md-pie" color="dark"></ion-icon>\n\n                    <div style="color:#565656;" class="label" dir="rtl">Gráficos</div>\n\n            </button>\n\n\n\n            <button ion-fab [style.background-color]="color" (click)="openIncome($event)">\n\n                    <ion-icon name="md-arrow-dropup" color="secondary"></ion-icon>\n\n                    <div style="color:#32db64;" class="label" dir="rtl">Rendas</div>\n\n            </button>\n\n\n\n            <button ion-fab [style.background-color]="color" (click)="openCategorie($event)">\n\n                    <ion-icon name="md-list" color="primary"></ion-icon>\n\n                    <div style="color:#488aff" class="label" dir="rtl">Categorias</div>\n\n            </button>\n\n\n\n            <button ion-fab [style.background-color]="color" (click)="openExpense($event)">\n\n                    <ion-icon name="md-arrow-dropdown" color="danger"></ion-icon>\n\n                    <div style="color:#f53d3d;" class="label" dir="rtl">Despesas</div>\n\n            </button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvidersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie_categorie__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__income_income__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_invoice__ = __webpack_require__(481);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_locales_pt__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pages_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







Object(__WEBPACK_IMPORTED_MODULE_5__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_6__angular_common_locales_pt__["a" /* default */]);



//Feature Pages


//Plugin

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers_module__["a" /* ProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorie/categorie.module#CategoriePageModule', name: 'CategoriePage', segment: 'categorie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/edit-expense/edit-expense.module#EditExpensePageModule', name: 'EditExpensePage', segment: 'edit-expense', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/expense/expense.module#ExpensePageModule', name: 'ExpensePage', segment: 'expense', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
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
            selector: 'page-edit-expense',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\expense\edit-expense\edit-expense.html"*/'<!--\n\n  Generated template for the EditExpensePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>edit-expense</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\expense\edit-expense\edit-expense.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditExpensePage);
    return EditExpensePage;
}());

//# sourceMappingURL=edit-expense.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 173,
	"./af.js": 173,
	"./ar": 174,
	"./ar-dz": 175,
	"./ar-dz.js": 175,
	"./ar-kw": 176,
	"./ar-kw.js": 176,
	"./ar-ly": 177,
	"./ar-ly.js": 177,
	"./ar-ma": 178,
	"./ar-ma.js": 178,
	"./ar-sa": 179,
	"./ar-sa.js": 179,
	"./ar-tn": 180,
	"./ar-tn.js": 180,
	"./ar.js": 174,
	"./az": 181,
	"./az.js": 181,
	"./be": 182,
	"./be.js": 182,
	"./bg": 183,
	"./bg.js": 183,
	"./bm": 184,
	"./bm.js": 184,
	"./bn": 185,
	"./bn.js": 185,
	"./bo": 186,
	"./bo.js": 186,
	"./br": 187,
	"./br.js": 187,
	"./bs": 188,
	"./bs.js": 188,
	"./ca": 189,
	"./ca.js": 189,
	"./cs": 190,
	"./cs.js": 190,
	"./cv": 191,
	"./cv.js": 191,
	"./cy": 192,
	"./cy.js": 192,
	"./da": 193,
	"./da.js": 193,
	"./de": 194,
	"./de-at": 195,
	"./de-at.js": 195,
	"./de-ch": 196,
	"./de-ch.js": 196,
	"./de.js": 194,
	"./dv": 197,
	"./dv.js": 197,
	"./el": 198,
	"./el.js": 198,
	"./en-au": 199,
	"./en-au.js": 199,
	"./en-ca": 200,
	"./en-ca.js": 200,
	"./en-gb": 201,
	"./en-gb.js": 201,
	"./en-ie": 202,
	"./en-ie.js": 202,
	"./en-nz": 203,
	"./en-nz.js": 203,
	"./eo": 204,
	"./eo.js": 204,
	"./es": 205,
	"./es-do": 206,
	"./es-do.js": 206,
	"./es-us": 207,
	"./es-us.js": 207,
	"./es.js": 205,
	"./et": 208,
	"./et.js": 208,
	"./eu": 209,
	"./eu.js": 209,
	"./fa": 210,
	"./fa.js": 210,
	"./fi": 211,
	"./fi.js": 211,
	"./fo": 212,
	"./fo.js": 212,
	"./fr": 213,
	"./fr-ca": 214,
	"./fr-ca.js": 214,
	"./fr-ch": 215,
	"./fr-ch.js": 215,
	"./fr.js": 213,
	"./fy": 216,
	"./fy.js": 216,
	"./gd": 217,
	"./gd.js": 217,
	"./gl": 218,
	"./gl.js": 218,
	"./gom-latn": 219,
	"./gom-latn.js": 219,
	"./gu": 220,
	"./gu.js": 220,
	"./he": 221,
	"./he.js": 221,
	"./hi": 222,
	"./hi.js": 222,
	"./hr": 223,
	"./hr.js": 223,
	"./hu": 224,
	"./hu.js": 224,
	"./hy-am": 225,
	"./hy-am.js": 225,
	"./id": 226,
	"./id.js": 226,
	"./is": 227,
	"./is.js": 227,
	"./it": 228,
	"./it.js": 228,
	"./ja": 229,
	"./ja.js": 229,
	"./jv": 230,
	"./jv.js": 230,
	"./ka": 231,
	"./ka.js": 231,
	"./kk": 232,
	"./kk.js": 232,
	"./km": 233,
	"./km.js": 233,
	"./kn": 234,
	"./kn.js": 234,
	"./ko": 235,
	"./ko.js": 235,
	"./ky": 236,
	"./ky.js": 236,
	"./lb": 237,
	"./lb.js": 237,
	"./lo": 238,
	"./lo.js": 238,
	"./lt": 239,
	"./lt.js": 239,
	"./lv": 240,
	"./lv.js": 240,
	"./me": 241,
	"./me.js": 241,
	"./mi": 242,
	"./mi.js": 242,
	"./mk": 243,
	"./mk.js": 243,
	"./ml": 244,
	"./ml.js": 244,
	"./mr": 245,
	"./mr.js": 245,
	"./ms": 246,
	"./ms-my": 247,
	"./ms-my.js": 247,
	"./ms.js": 246,
	"./mt": 248,
	"./mt.js": 248,
	"./my": 249,
	"./my.js": 249,
	"./nb": 250,
	"./nb.js": 250,
	"./ne": 251,
	"./ne.js": 251,
	"./nl": 252,
	"./nl-be": 253,
	"./nl-be.js": 253,
	"./nl.js": 252,
	"./nn": 254,
	"./nn.js": 254,
	"./pa-in": 255,
	"./pa-in.js": 255,
	"./pl": 256,
	"./pl.js": 256,
	"./pt": 257,
	"./pt-br": 89,
	"./pt-br.js": 89,
	"./pt.js": 257,
	"./ro": 258,
	"./ro.js": 258,
	"./ru": 259,
	"./ru.js": 259,
	"./sd": 260,
	"./sd.js": 260,
	"./se": 261,
	"./se.js": 261,
	"./si": 262,
	"./si.js": 262,
	"./sk": 263,
	"./sk.js": 263,
	"./sl": 264,
	"./sl.js": 264,
	"./sq": 265,
	"./sq.js": 265,
	"./sr": 266,
	"./sr-cyrl": 267,
	"./sr-cyrl.js": 267,
	"./sr.js": 266,
	"./ss": 268,
	"./ss.js": 268,
	"./sv": 269,
	"./sv.js": 269,
	"./sw": 270,
	"./sw.js": 270,
	"./ta": 271,
	"./ta.js": 271,
	"./te": 272,
	"./te.js": 272,
	"./tet": 273,
	"./tet.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./uk": 281,
	"./uk.js": 281,
	"./ur": 282,
	"./ur.js": 282,
	"./uz": 283,
	"./uz-latn": 284,
	"./uz-latn.js": 284,
	"./uz.js": 283,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./yo": 287,
	"./yo.js": 287,
	"./zh-cn": 288,
	"./zh-cn.js": 288,
	"./zh-hk": 289,
	"./zh-hk.js": 289,
	"./zh-tw": 290,
	"./zh-tw.js": 290
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
webpackContext.id = 405;

/***/ }),

/***/ 406:
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
            selector: 'page-edit-income',template:/*ion-inline-start:"C:\Projetos\credi-app\src\pages\income\edit-income\edit-income.html"*/'<!--\n\n  Generated template for the EditIncomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>edit-income</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Projetos\credi-app\src\pages\income\edit-income\edit-income.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], EditIncomePage);
    return EditIncomePage;
}());

//# sourceMappingURL=edit-income.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_root_root__ = __webpack_require__(299);
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

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income_income_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expense_expense_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorie_categorie_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_root_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers_module__ = __webpack_require__(346);
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
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__income_income_module__["IncomePageModule"],
                __WEBPACK_IMPORTED_MODULE_3__expense_expense_module__["ExpensePageModule"],
                __WEBPACK_IMPORTED_MODULE_4__categorie_categorie_module__["CategoriePageModule"],
                __WEBPACK_IMPORTED_MODULE_7__providers_providers_module__["a" /* ProvidersModule */],
                __WEBPACK_IMPORTED_MODULE_5__root_root_module__["RootPageModule"]
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
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Comida', 'md-restaurant', 'flame', 'true', 'E', 1]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Luz', 'md-flash', 'globe', 'true', 'E', 1]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Agua', 'ios-water-outline', 'primary', 'true', 'E', 1]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Telefone', 'md-call', 'call', 'true', 'E', 1]],
                    //Necessárias
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Roupas', 'md-shirt', 'card', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Carro', 'md-car', 'car', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Onibus', 'md-bus', 'car', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Gasolina', 'md-flame', 'flame', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Contas Diversas', 'md-document', 'document', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Tv', 'md-desktop', 'desktop', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Internet', 'md-at', 'primary', 'true', 'E', 2]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Mercado', 'md-cart', 'primary', 'true', 'E', 2]],
                    //Recreativas
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Café', 'md-cafe', 'cafe', 'true', 'E', 3]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Lazer', 'md-glasses', 'glasses', 'true', 'E', 3]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Jogos', 'md-game-controller-b', 'primary', 'true', 'E', 3]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Fast-Food', 'md-pizza', 'flame', 'true', 'E', 3]],
                    //Extraordinárias
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Casa', 'md-home', 'home', 'true', 'E', 4]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Dinheiro', 'md-cash', 'cash', 'true', 'E', 4]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Pessoal', 'md-contacts', 'contacts', 'true', 'E', 4]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Lazer', 'md-football', 'dark', 'true', 'E', 4]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Cartão de Crédito', 'md-card', 'card', 'true', 'E', 4]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Material Construção', 'md-hammer', 'cafe', 'true', 'E', 4]],
                    //Type Income
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Crédito', 'md-card', 'card', 'true', 'I', 6]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Dinheiro', 'md-cash', 'cash', 'true', 'I', 5]],
                    ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)', ['Rendimentos', 'md-trending-up', 'primary', 'true', 'I', 5]],
                    //Month
                    ['INSERT INTO month (id,name) VALUES (?,?)', [1, 'Janeiro']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [2, 'Feveiro']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [3, 'Março']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [4, 'Abril']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [5, 'Maio']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [6, 'Junho']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [7, 'Julho']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [8, 'Agosto']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [9, 'Setembro']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [10, 'Outubro']],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [11, 'Novembro',]],
                    ['INSERT INTO month (id,name) VALUES (?,?)', [12, 'Dezembro']],
                    //Types Categorie
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [1, 'Despesa Regulares', 'Ex:(Agua, Luz, Comida)']],
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [2, 'Despesa Necessárias', 'Ex:(Roupa, Locomoção, Telefone)']],
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [3, 'Despesa Recreativas', 'Ex:(Cinema, Fastfood)']],
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [4, 'Despesa Extraordinárias', 'Ex:(Comprar casa, roupa, televisão e/ou Carro)']],
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [5, 'Renda Fixa', 'Ex:(Sálario empresa, Pensão Alimenticia)']],
                    ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)', [6, 'Renda Váriavel', 'Ex:(Proventos, Investimentos, Capitalização)']],
                ]).then(function () {
                    console.info('Insert Categorie with Month Conclude!');
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
            ['CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, icon TEXT, color TEXT, status TEXT, type TEXT, complexity INTEGER)'],
            ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT)'],
            ['CREATE TABLE IF NOT EXISTS graphic (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT, datain TEXT, dataout TEXT, dataput TEXT, categorie_id INTEGER, FOREIGN KEY(categorie_id) REFERENCES categorie(id))'],
            ['CREATE TABLE IF NOT EXISTS month (id INTEGER PRIMARY KEY, name TEXT)'],
            ['CREATE TABLE IF NOT EXISTS month_has_expense (id INTEGER PRIMARY KEY AUTOINCREMENT, expense_id INTEGER, month_id INTEGER, year_in INTEGER, FOREIGN KEY(expense_id) REFERENCES expense(id), FOREIGN KEY(month_id) REFERENCES month(id))'],
            //Analytics
            ['CREATE TABLE IF NOT EXISTS types_categories (id INTEGER PRIMARY KEY, name TEXT, resume TEXT)']
        ]).then(function () {
            console.info('Create DBs!');
        }).catch(function (e) {
            console.error(e);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(347);
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(347);
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

/***/ 53:
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
    ExpenseProvider.prototype.getAllbyMothEspense = function (month) {
        var _this = this;
        return this.dbProvider.iniDb()
            .then(function (db) {
            var sql = "SELECT expense.*, categorie.icon, categorie.color, month.name as m_name, categorie.name as c_name";
            sql += " FROM month_has_expense";
            sql += " INNER JOIN expense ON month_has_expense.expense_id = expense.id";
            sql += " INNER JOIN categorie ON expense.categorie_id = categorie.id";
            sql += " INNER JOIN month ON month.id = month_has_expense.month_id";
            sql += " WHERE expense.status = 1 AND month_has_expense.month_id = ?";
            var data = [month];
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
        //e.datain = e.datain.toLocaleString('pt-BR',{month:'2-digit', day:'2-digit', year:'numeric'});
        return this.dbProvider.iniDb()
            .then(function (db) {
            var sql1 = "INSERT INTO expense (name,status,entrada,resume,datain,categorie_id) VALUES (?,?,?,?,?,?)";
            var query1 = [e.name, e.status, e.entrada, e.resume, e.datain, e.categorie_id];
            var m = new Date(e.datain);
            var mReal = m.getMonth() + 1;
            var yReal = m.getFullYear();
            db.executeSql(sql1, query1).then(function (res) {
                var sql2 = "INSERT INTO month_has_expense (expense_id,month_id,year_in) VALUES (?,?,?)";
                var query2 = [res.insertId, mReal, yReal];
                return db.executeSql(sql2, query2);
            });
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

/***/ })

},[348]);
//# sourceMappingURL=main.js.map