import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvoicePage } from '../invoice/invoice';
import { IncomePage } from '../income/income';
import { ExpensePage } from '../expense/expense';
import { CategoriePage } from '../categorie/categorie';
import { ExpenseProvider } from '../../providers/expense/expense';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ ExpenseProvider ]
})
export class HomePage implements AfterViewInit{


 /// Doughnut data
 public doughnutChartLabels: Array<string> = [];
 public doughnutChartData: Array<number> = [];
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

  constructor(public navCtrl: NavController, public expenseProvider: ExpenseProvider) {
    this.expenseProvider.getAllEpense().then(( result ) => {
      if(result.length > 0){
        for(var i=0;i < result.length; i++ ){
          this.doughnutChartData.push(result[i].entrada);
          this.doughnutChartLabels.push(result[i].name);
        }
      }

    });

    this.fabButtonOpened = false;
  }




  // Chart events
  public chartClicked(e:any):void{
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

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }


}
