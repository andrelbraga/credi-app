import { Component, OnInit, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, PopoverController } from 'ionic-angular';
import { IncomeProvider } from '../../../providers/income/income';
/**
 * Generated class for the ListIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  template: `
    <ion-list>
      <ion-list-header>Ordenar</ion-list-header>
      <button ion-item (click)="close()">Alfabético</button>
      <button ion-item (click)="close()">Dias</button>
      <button ion-item (click)="close()">Categorias</button>
    </ion-list>`
})
export class Popup{

  constructor(){}

} 

@IonicPage()
@Component({
  selector: 'page-list-income',
  templateUrl: 'list-income.html',
  providers: [ IncomeProvider ]
})
export class ListIncomePage implements OnInit{

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
  public amountIncome: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public zone: NgZone, public events: Events,
              public popoverCtrl: PopoverController) {
              
  }

  ngOnInit(){
    this.currentMonthFn();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListIncomePage');
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
    let opt = {
      showBackdrop: true,
      enableBackdropDismiss: true
    }
    let p = this.popoverCtrl.create(Popup, {ev: 'DADOS'}, opt);
        p.onDidDismiss(data => {
          console.log(data);
        });
    p.present();
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

}
