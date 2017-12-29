import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseProvider, Expense } from '../../providers/expense/expense';
import * as moment from 'moment';
import 'moment/locale/pt-br';


//Providers importeds
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { ListCategoriesPage } from './list-categories/list-categories';

/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    cssClass:'backdropOpacityPopover'
  }

  let opnModal = this.popoverCtrl.create(ListCategoriesPage, {data: this.categories}, opt);
  opnModal.onDidDismiss(data => {
    this.categorieName = data;
  });
  opnModal.present();
}



}
