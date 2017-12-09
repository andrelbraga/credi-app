import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

/**
 * Generated class for the CategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {
  public categories: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sqlite: SQLite, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriePage');
  }

  showPromptSaveExpense(choice) {
    let prompt = this.alertCtrl.create({
      title: 'Categorie',
      message: "Enter a name for this new categorie.",
      inputs: [
        {
          name: 'Categorie',
          placeholder: 'Categorie name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            console.log(data);
            this.categories.push(data);
            console.log(choice);
            console.log('Saved clicked');
            this.presentLoading();
          }
        }
      ]
    });
    prompt.present();
  }

  presentLoading() {
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
      //duration: 3000
    });
    loader.present();

    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.push(CategoriePage);
    }, 3000);

  }


  addCategorie(){

  }

}
