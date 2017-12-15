import { Component, OnInit, NgZone } from '@angular/core';
import { ToastController, Events } from 'ionic-angular';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { ClassUtil } from '../../util/classutil';

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


export class CategoriePage implements OnInit{
  public categories: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private categorieProvider: CategorieProvider,
    public toastCtrl: ToastController,
    public util: ClassUtil,
    public zone: NgZone,
    public events: Events
   ) {
     //Before OnInit
     this.events.subscribe('updateScreen',()=>{
      this.zone.run((e)=>{
        this.getAll();
      })
     });

    }

    ngOnInit(){
      //After constructor
      this.getAll();
    }



    //ionViewCanEnter() {
    //   this.getAll();
    //}

    getAll(){
      this.categories = [];
      this.categorieProvider.getAllCategorie()
      .then((result: any[]) => {
        this.categories = result;
        return this.categories;
      });
    }

    RenameCategory(c){
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
              let categorie  = new Categorie();
              categorie.name = data.Categorie;
              categorie.id   = c.id;
              categorie.status = c.status;
              this.categorieProvider.updateCategorie(categorie).then(() => {
                //this.util.presentLoading(CategoriePage, false);
                this.events.publish('updateScreen');
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


    statusCategory(c){
      let categorie  = new Categorie();
      categorie.name = c.name;
      categorie.id   = c.id;
      categorie.status = c.status;
      this.categorieProvider.updateCategorie(categorie).then(() => {
        //this.util.presentLoading(CategoriePage, false);
        this.events.publish('updateScreen');
      });
    }

}

