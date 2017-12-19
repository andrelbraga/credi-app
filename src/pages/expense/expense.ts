import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseProvider, Expense } from '../../providers/expense/expense';


//Providers importeds
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { AlertDefaultComponent } from '../../components/alert-default/alert-default';
import { ListCategoriesPage } from '../list-categories/list-categories';

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
  providers: [ExpenseProvider, AlertDefaultComponent]

})
export class ExpensePage {
  public showCategorie : boolean = false;
  public shouldToggle : boolean = false;
  public categorieName: Categorie;

  public Expense:any = {
        'Note' : '',
        'Price':0,
        'Date':'',
        'Categorie':'',
        'Name':''
      }

  public categories:Array<Categorie> = [];

  formExpense: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private expenseProvider: ExpenseProvider,
    private categorieProvider: CategorieProvider,
    public toastCtrl: ToastController) {
      
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

  submit(E){
    let e = new Expense();
    e.name = E.Name;
    e.status = 1;
    e.resume = E.Note;
    e.entrada = E.Price;
    e.datain = new Date(E.Date);
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


  let opnModal = this.modalCtrl.create(ListCategoriesPage, {data: this.categories});
  opnModal.onDidDismiss(data => {
    this.categorieName = data;
  });
  opnModal.present();
}

  // showCategories(){
  //   if(this.showCategorie)
  //     return this.showCategorie = false;
  //   return this.showCategorie = true;
  // }

}
