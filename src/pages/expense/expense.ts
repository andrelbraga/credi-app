import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

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
  
})
export class ExpensePage {
  public Expense:any = {
        'Note' : '',
        'Price':0,
        'Date':'',
        'Categorie':'' 
      }
  public categories:any = [ 
    {  name: 'Banco', icon: 'md-football' }, 
    {  name: 'Lanche', icon:'md-glasses'  },
    {  name: 'Roupas', icon:'md-cash'     } 
  ];

  formExpense: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.formExpense = new FormGroup({
      formMoney: new FormControl(),
      formDate: new FormControl(),
      formNote: new FormControl(),
      formCategorie: new FormControl()
    });
  }

  submit(E){
  
    console.log(this.formExpense);
    console.log(E);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');
  }

}
