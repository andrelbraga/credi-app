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
 public doughnutChartLabels: Array<string> = ['A','B','C'];
 public doughnutChartData: Array<number> = [100, 200, 400];
 public doughnutChartType: string = 'doughnut';
 
// Line Chart
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
  constructor(public navCtrl: NavController) {
      this.fabButtonOpened = false; 
  }
  



  // Chart events
  public chartClicked(e:any):void{
    var d = document.getElementById('chartjs').getAttribute('ng-reflect-labels');
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
    console.log('Rendas');    
  }

  
  openGraphic(event){

  }


}
