import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InvoicePage } from '../invoice/invoice';


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

  constructor(public navCtrl: NavController) {
    this.today = new Date(); 
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


}
