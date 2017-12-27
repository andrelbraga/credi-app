import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ListExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
    <ion-list>
      <ion-list-header>Ordenar</ion-list-header>
      <button ion-item (click)="close()">Alfabético</button>
      <button ion-item (click)="close()">Dias</button>
      <button ion-item (click)="close()">Categorias</button>
      <button ion-item (click)="close()">Todos</button>
    </ion-list>`
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController,
              public data: NavParams) {
                  this.data.get('ev');
                  console.log(this.data.get('ev'));
              }

  close() {
    this.viewCtrl.dismiss({ev:"DATA"});
  }
}
