import { Component,Input,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { ExpensePage } from '../../pages/expense/expense';



/**
 * Generated class for the AlertDefaultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alert-default',
  templateUrl: 'alert-default.html'
})
export class AlertDefaultComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  categories: Array<any> = [];
  @Input() obj: any;
  public text: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    console.log('Hello AlertDefaultComponent Component');
  }
  emit(data){
    console.log(data);
    
    let ctrl:any = this.navCtrl.push(ExpensePage, data);
    this.viewCtrl.dismiss(data, null, ctrl);
    
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
   
  }

}
