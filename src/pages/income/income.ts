import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  public Income:any = {
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

formIncome: FormGroup;
constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.formIncome = new FormGroup({
      formMoney: new FormControl(),
      formDate: new FormControl(),
      formNote: new FormControl(),
      formCategorie: new FormControl()
  });
}


submit(I){
  
    console.log(this.formIncome);
    console.log(I);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomePage');
  }

}
