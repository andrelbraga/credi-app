import { Component, OnInit, NgZone } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, Events, PopoverController } from 'ionic-angular';
import { ExpenseProvider } from '../../../providers/expense/expense';
import { PopoverPage } from './popover/popover';


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
  providers:[ ExpenseProvider ],
})
export class ListExpensePage implements OnInit{
public mock = [
    {name:"First", c_name:"First", resume:"AAAAAAAAAAAAAA", entrada:"1250", color:"cash", icon:"md-cash", datain:new Date()},
    {name:"Second", c_name:"Second", resume:"BBBBBBBBBBBBBBBB", entrada:"1500", color:"contacts", icon:"md-apps", datain:new Date()},
    {name:"Three", c_name:"Three", resume:"CCCCCCCCCCCCCC", entrada:"1900", color:"flame", icon:"md-archive", datain:new Date()},
    {name:"Four", c_name:"Four", resume:"DDDDDDDDDDDDD", entrada:"1800", color:"car", icon:"md-arrow-round-forward", datain:new Date()},
  ]

public expense: any = [];
public month: any = [
  {name:'Janeiro', id:1},
  {name:'Fevereiro', id:2},
  {name:'Março', id:3},
  {name:'Abril', id:4},
  {name:'Maio', id:5},
  {name:'Junho', id:6},
  {name:'Julho', id:7},
  {name:'Agosto', id:8},
  {name:'Setembro', id:9},
  {name:'Outubro', id:10},
  {name:'Novembro', id:11},
  {name:'Dezembro', id:12},
];
public currentMonth: any;
public amountExpense: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public expenseProvider: ExpenseProvider,
    public zone: NgZone,
    public events: Events,
    public popover: PopoverController) {

      this.events.subscribe('updateScreen',()=>{
        this.zone.run((e)=>{
          this.expense = [];
          this.amountExpense = 0;
          this.getAll(this.currentMonth.id);
        })
       });
  
  }


  ngOnInit(){
    this.currentMonthFn();   
    this.getAll(this.realMonth());
  }

  ionViewDidLoad() {
    this.currentMonthFn();
    this.getAll(this.realMonth());
  }

  ionViewWillEnter() {
   this.currentMonthFn();
   this.getAll(this.realMonth());
  }

  getAll(e){
    this.expenseProvider.getAllbyMothEspense(e).then((result) =>{
      if(result.length > 0){
        this.expense = [];
        this.amountExpense = 0;
        for(var i=0;i < result.length; i++ ){
            this.amountExpense += result[i].entrada;
            this.expense.push(result[i]);
          }
        return this.expense;
      }
    })
  }

  beforeMonth(){
    if(new Date().getMonth() <= 11 ){
      let m = this.month.indexOf(this.currentMonth);
      --m;
      if(m <= 11 && m >= 0){
        this.currentMonth = this.month[m];
        this.events.publish('updateScreen');        
      }
    } else {
      let a = this.month.indexOf(this.currentMonth);
      this.currentMonth = this.month[a]; 
      this.events.publish('updateScreen');
    }
    
  }

  afterMonth(){
    if(new Date().getMonth() >= 0 ){
      let m = this.month.indexOf(this.currentMonth);
      m++;
      if(m >= 0 && m <= 11){
        this.currentMonth = this.month[m];
        this.events.publish('updateScreen');  
      }
    } else {
      let a = this.month.indexOf(this.currentMonth);
      this.currentMonth = this.month[a]; 
      this.events.publish('updateScreen');  
    }
  }


  realMonth(): number{
    let m = new Date();
    let mReal = m.getMonth() + 1;
    return mReal;
  }

  currentMonthFn(){
    let n = new Date().getMonth();
    this.currentMonth = this.month[n];  
  }


  showMenuPopup(){
    let p = this.popover.create(PopoverPage, {ev: 'DADOS'});
    p.present();
  }


}
