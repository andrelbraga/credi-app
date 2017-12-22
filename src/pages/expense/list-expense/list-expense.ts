import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseProvider, Expense } from '../../../providers/expense/expense';
import { ExpensePage } from '../expense';


/**
 * Generated class for the ListExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-expense',
  templateUrl: 'list-expense.html',
  providers:[ ExpenseProvider ]
})
export class ListExpensePage implements OnInit{
public expense: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public expenseProvider: ExpenseProvider) {
  }

  ngOnInit(){
    this.getAll();
  }

  ionViewDidLoad() {
    this.getAll();
  }

  ionViewWillEnter() {
    this.getAll();
  }

  getAll(){
    this.expenseProvider.getAllEpense(1, true).then((result) => {
      if(result.length > 0){
        this.expense = [];
        for(var i=0;i < result.length; i++ ){
          this.expense.push(result[i]);
        }
        return this.expense;
      }
    })

    this.expenseProvider.getAllbyMothEspense("01").then((result) =>{
      console.log(result);
    })

    //return this.expense = this.mock;
  }

  public mock = [
    {name:"First", c_name:"First", resume:"AAAAAAAAAAAAAA", entrada:"1250", color:"cash", icon:"md-cash", datain:new Date()},
    {name:"Second", c_name:"Second", resume:"BBBBBBBBBBBBBBBB", entrada:"1500", color:"contacts", icon:"md-apps", datain:new Date()},
    {name:"Three", c_name:"Three", resume:"CCCCCCCCCCCCCC", entrada:"1900", color:"flame", icon:"md-archive", datain:new Date()},
    {name:"Four", c_name:"Four", resume:"DDDDDDDDDDDDD", entrada:"1800", color:"car", icon:"md-arrow-round-forward", datain:new Date()},
  ]

}
