import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  template:`<ion-list radio-group no-lines>
              <ion-item *ngFor="let c of obj">
                <ion-radio (ionSelect)="emit(c)" value="{{c.name}}"></ion-radio>
                <ion-label>{{c.name}}</ion-label>
                <ion-icon color="{{c.color}}" name="{{c.icon}}" item-start></ion-icon>
              </ion-item>
            </ion-list>`
})

export class Popup implements OnInit{
  public obj:any =[];

  constructor(public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public navCtrl: NavController,
    public viewCtrl: ViewController){
      
    }

    ngOnInit(){
      this.obj = this.navParams.get('data');
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad IncomePage');
    }

    emit(data){
      this.viewCtrl.dismiss(data);
    }

}


@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  public categories:Array<Categorie> = [];
  public categorieName: Categorie;

  public Income:any = {
    'resume' : '',
    'entrada':0,
    'datein':'',
    'name':'' 
  }


formIncome: FormGroup;
constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public popoverCtrl: PopoverController,
            public categorieProvider: CategorieProvider) {

              new Promise(() => {
                this.categorieProvider.getAllCategorie()
                  .then((result) => {
                    this.categories = result;
                    return this.categories;
                }).catch(e =>  console.log(e));
              }).catch(e =>  console.log(e));

          this.formIncome = new FormGroup({
              formMoney: new FormControl(),
              formDate: new FormControl(),
              formNote: new FormControl(),
              formCategorie: new FormControl()
          });
}


  submit(I){
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomePage');
  }

  showCategories(){
    let opt = {
      showBackdrop: true,
      enableBackdropDismiss: true,
      //cssClass:'backdropOpacityPopover'
    }
    let popover = this.popoverCtrl.create(Popup,{data: this.categories}, opt );
    popover.onDidDismiss(data => {
      this.categorieName = data;
    });

    popover.present();
  }

}
