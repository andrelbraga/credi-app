import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategorieProvider } from '../../providers/categorie/categorie';
import { ClassUtil } from '../../Util/ClassUtil';

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
  providers:[CategorieProvider, ClassUtil]
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
    public toastCtrl: ToastController,
    public util: ClassUtil
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
        title: choice,
        message: "Enter a new name for this new categorie.",
        inputs: [
          {
            name: 'Categorie',
            placeholder: 'Categorie name...'
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
              this.util.presentLoading(CategoriePage, false);
            }
          }
        ]
      });
      prompt.present();
    }


    saveCategorie(e){
      console.log(e);
    }


    categorieTarget(isToggled){
        console.log(isToggled);
    }

}

