import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseProvider, Expense } from '../../providers/expense/expense';


//Providers importeds
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { AlertDefaultComponent } from '../../components/alert-default/alert-default';

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
  public categorieName : string = "";

  public arrayObj:any;

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

      this.categorieName = this.navParams.data.name; 

      console.log(this.navParams.data);

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
    e.categorie_id = this.navParams.data.id;
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
    if(this.showCategorie)
      return this.showCategorie = false;
    return this.showCategorie = true;
  }

}
