import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';



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
export class AlertDefaultComponent implements OnInit{

  @Input() nomeObj:string;
  @Input() iconObj:string;
  a;
  html: string;
  constructor(public view: ViewController) {  this.view._destroy;  }

  ngOnInit(){
    console.log(this.nomeObj);
  }

  saveCategorie(e){
    console.log(e);
    this.a;
  }






}

