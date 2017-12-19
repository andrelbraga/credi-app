import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ListCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-categories',
  templateUrl: 'list-categories.html',
})
export class ListCategoriesPage {
public obj:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams);
    this.obj = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCategoriesPage');
  }

  emit(data){
    this.viewCtrl.dismiss(data);
  }

}
