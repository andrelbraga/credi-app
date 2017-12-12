import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { ClassUtil } from '../../util/ClassUtil';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private categorieProvider: CategorieProvider,
    public toastCtrl: ToastController,
    public util: ClassUtil
   ) {
      this.getAll();
    }

    // ionViewCanEnter() {
    //   this.getAll();
    // }

    getAll(){
      this.categorieProvider.getAllCategorie()
      .then((result: any[]) => {
        this.categories = result;
        return this.categories;
      });
    }

    showPromptRenameCategory(c){
      let prompt = this.alertCtrl.create({
        title: c.name,
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
              let rename = new Categorie();
              rename.name = data.Categorie;
              rename.id = c.id;
              this.categorieProvider.updateCategorie(rename).then(() => {
                this.util.presentLoading(CategoriePage, false);
              });
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

