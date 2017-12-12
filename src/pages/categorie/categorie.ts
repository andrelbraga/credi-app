import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';

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

    ionViewCanEnter() {
      this.getAll();
    }

    getAll(){
      this.categorieProvider.getAllCategorie()
      .then((result: any[]) => {
        this.categories = result;
      });
    }

    showPromptRenameCategory(choice){
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


    categorieTarget(isToggled){
        console.log(isToggled);
    }

    showStatus(s:any):boolean{
      return s == 1 ? true : false;
    }

}
