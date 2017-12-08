import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';


/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
public categories: Array<string> = ['Banco','Lanche','Roupas'];
public choice: any = { categories:"", date:"" };
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private sqlite: SQLite, public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }


  showInputCategories(){
    
  }
 
  showPromptSaveExpense(choice) {
    let prompt = this.alertCtrl.create({
      title: 'Expenses',
      message: "Enter a name for this new expense.",
      inputs: [
        {
          name: 'Expense',
          placeholder: 'Expense name'
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
      this.navCtrl.popToRoot()
    }, 3000);

  }






}
