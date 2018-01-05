import { Component, NgZone, OnInit } from '@angular/core';
import { IonicPage, NavController, Events, PopoverController, ModalController } from 'ionic-angular';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';
import { CategoriePage } from '../categorie/categorie';


@Component({
  template:`<ion-header>
              <ion-navbar>
                <ion-title>Notificações</ion-title>
                <ion-buttons end>
                <button ion-button icon-only (click)="exitModal()">
                <ion-icon name="md-close"></ion-icon>
                </button>
            </ion-buttons>
              </ion-navbar>
          </ion-header>
          <ion-content padding>
          </ion-content>
          `
})
export class Popup{
  
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {    
  }

  exitModal(){
     this.navCtrl.pop();
  }

}

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{
  overlayHidden: boolean = false;


 //Begin Doughnut data
 public doughnutChartLabels: Array<string> = [];
 public doughnutChartData: Array<number> = [];
 public doughnutChartType: string = 'doughnut';
//End data

//Begin Line Chart
public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
];
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
public lineChartOptions:any = {
  responsive: true
};
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';
public fabButtonOpened: any;
//End Line Chart

//Constructor HomePage
constructor(public navCtrl: NavController, public events: Events, 
  public zone: NgZone, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter() {
   
  }

  public hideOverlay() {
    this.overlayHidden = true;
}

  ngOnInit() {
    this.fabButtonOpened = false;
  }

  slideChanged(){
    
  }


  //Begin Functions Chart
  // Chart events
  public chartClicked(e:any):void{
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }
  //End Functions Chart




  //Begin Functions Fab
  
  penFabButton(){
    if(this.fabButtonOpened==false){
        this.fabButtonOpened=true;
    }else{
        this.fabButtonOpened=false;
    }
  }

  openCategorie(event){
    this.navCtrl.push(CategoriePage);
    console.log('Categoria');
  }

  openExpense(event){
    this.navCtrl.push(ExpensePage);
    console.log('Gastos');
  }

  openIncome(event){
    this.navCtrl.push(IncomePage);
    console.log('Rendas');
  }
  
  openGraphic(event){

  }
  //End Functions Fab


  //Begin Methods

  opnNotification(){
    let opnPopup = this.modalCtrl.create(Popup);
    opnPopup.present();
  }

  
  //End Methods


}
