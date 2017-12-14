import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';



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
public categories:any = [ 
                          {  name: 'Banco', icon: 'md-football' }, 
                          {  name: 'Lanche', icon:'md-glasses'  },
                          {  name: 'Roupas', icon:'md-cash'     } 
                        ];
public choice: any = { categorie:"", date:"" };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController ) {
  }



  ionViewDidLoad() {
    console.log(this.categories);
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
          }
        }
      ]
    });
    prompt.present();
  }








}
