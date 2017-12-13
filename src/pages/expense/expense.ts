import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public Note:any;
  public Price:any;

  formExpense: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formExpense = new FormGroup({
      formMoney: new FormControl(),
      formDate: new FormControl(),
      formNote: new FormControl()
    });
  }

  submit(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');
  }

}
