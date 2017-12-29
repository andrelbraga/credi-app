import { Component, OnInit } from '@angular/core';
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
export class ListCategoriesPage implements OnInit {
public obj:any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ngOnInit(){
    this.obj = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListCategoriesPage');
  }

  emit(data){
    this.viewCtrl.dismiss(data);
  }

  close(data){
    data = null;
    this.viewCtrl.dismiss(data);
  }

  
}
