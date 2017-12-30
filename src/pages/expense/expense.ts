import { Component, OnInit } from '@angular/core';
import { IonicPage, PopoverController, ViewController, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseProvider, Expense } from '../../providers/expense/expense';
import * as moment from 'moment';
import 'moment/locale/pt-br';


//Providers importeds
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';

/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template:`<ion-list radio-group no-lines>
              <ion-item *ngFor="let c of obj">
                <ion-radio (ionSelect)="emit(c)" value="{{c.name}}"></ion-radio>
                <ion-label>{{c.name}}</ion-label>
                <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>
              </ion-item>
            </ion-list>`
})

export class Popup implements OnInit{
  public obj:any =[];

  constructor(public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public viewCtrl: ViewController){
      
    }

    ngOnInit(){
      this.obj = this.navParams.get('data');
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad IncomePage');
    }

    emit(data){
      this.viewCtrl.dismiss(data);
    }

}

@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
  providers: [ ExpenseProvider ]
})

export class ExpensePage {
  public showCategorie : boolean = false;
  public shouldToggle : boolean = false;
  public categorieName: Categorie;

  public Expense:any = {
        'resume' : '',
        'entrada':0,
        'datein':'',
        'name':''
      }

  public categories:Array<Categorie> = [];

  formExpense: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private expenseProvider: ExpenseProvider,
    private categorieProvider: CategorieProvider,
    public toastCtrl: ToastController,
    public popoverCtrl: PopoverController) {

    new Promise(() => {
      this.categorieProvider.getAllCategorie()
        .then((result) => {
          this.categories = result;
          return this.categories;
      }).catch(e =>  console.log(e));
    }).catch(e =>  console.log(e));

    this.formExpense = new FormGroup({
      formMoney: new FormControl(),
      formDate: new FormControl(),
      formNote: new FormControl(),
      formCategorie: new FormControl(),
      formName: new FormControl()
    });

  }

  submit(data){
    let e = new Expense(data);
        //e.datain = data.datain.toLocaleDateString('pt-BR',{month:'2-digit', day:'2-digit', year:'numeric'});
        e.datain =  moment(data.datain).format();
        e.categorie_id = this.categorieName.id;
    this.expenseProvider.insertExpense(e).then( e => {
          console.log(e);
          let msg = this.toastCtrl.create({message:'Ok!', duration: 3000, position: 'top'});
          msg.present();
        }).catch( e => {
      console.log(e);
      let msg = this.toastCtrl.create({message:'Not Ok!', duration: 3000, position: 'top'});
      msg.present();
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');
  }

showCategories(){
  let opt = {
    showBackdrop: true,
    enableBackdropDismiss: true,
    //cssClass:'backdropOpacityPopover'
  }

  let opnModal = this.popoverCtrl.create(Popup, {data: this.categories}, opt);
  opnModal.onDidDismiss(data => {
    this.categorieName = data;
  });
  opnModal.present();
}



}
