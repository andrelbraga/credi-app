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





}
