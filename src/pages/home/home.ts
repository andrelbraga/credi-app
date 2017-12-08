import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvoicePage } from '../invoice/invoice';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';
import { CategoriePage } from '../categorie/categorie';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

 /// Doughnut data
 public doughnutChartLabels: Array<string> = [];
 public doughnutChartData: Array<number> = [];
 public doughnutChartType: string = 'doughnut';
 public today: any;
 public fabButtonOpened: any;
  constructor(public navCtrl: NavController) {
    
      this.today = new Date();
      this.fabButtonOpened = false; 
  }
  



  // Chart events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }

  public addInvoice():void{
    this.navCtrl.push(InvoicePage);
    console.log('Add Invoice');
  }

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
    console.log('Income');    
  }


}
