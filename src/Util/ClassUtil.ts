import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class ClassUtil{

  /**
   *
   */
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) { }





   presentLoading(ctrl:any, active){
     var loader = this.loadingCtrl.create({
       content: "Please wait..."
     });
     loader.present();
   setTimeout(() => {
       loader.dismiss();
      if(active){
        this.navCtrl.push(ctrl);
      }
     }, 3000);
 }


   public template: string =
  "<div class='alert-content'>"
  +"<div class='alert-head'>"
  +"<div class='alert-title'>"
  +"<div class='alert-sub-title'>"
  +"<div class='alert-body'>"
  +"<div class='alert-footer'"
  +"<div class=''>"
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +""
  +"";

alert(e){
document.getElementById('alert').innerHTML = '<div>A</div>';
}


}
