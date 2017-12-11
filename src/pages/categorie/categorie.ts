import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategorieProvider } from '../../providers/categorie/categorie';

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
  providers:[CategorieProvider]
})


export class CategoriePage {
  public categories: Array<any> = [];
  public isToogledMarket: boolean;
  public isToogledFuel: boolean;
  public isToogledGame: boolean;
  public isToogledCreditCard: boolean;
  public isToogledFootball: boolean;
  public isToogledIncomes: boolean;
  public isToogledCash: boolean;
  public isToogledBus: boolean;
  public isToogledCoffee: boolean;
  public isToogledTelephone: boolean;
  public isToogledCar: boolean;
  public isToogledTv: boolean;
  public isToogledGlasses: boolean;
  public isToogledContacts: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private categorieProvider: CategorieProvider,
    public toastCtrl: ToastController
   ) {

    }

  ionViewDidLoad() {
    // this.categorieProvider.getDb().then((data: any) =>{
// let data = this.categorieProvider.getDb();
//     for(var i=0; i < data.length; i++){
//         this.categories.push({id: data.rows.item(i).id,
//                               name: data.rows.item(i).name,
//                               status: data.rows.item(i).status});
//     }

    // }).catch(() =>{
    //   let toast = this.toastCtrl.create({message:'Te arranca!', duration: 3000, position: 'top'});
    //   toast.present();
    // });
    console.log('ionViewDidLoad CategoriePage');
  }

  showPromptSaveExpense(choice){
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

  presentLoading(){
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

  settingCategorie(){
  }


categorieMarket(isToggled){
    console.log(isToggled);
}

}
