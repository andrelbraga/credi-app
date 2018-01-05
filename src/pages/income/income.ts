import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';


//Providers importeds
import { CategorieProvider, Categorie } from '../../providers/categorie/categorie';
import { IncomeProvider, Income } from '../../providers/income/income';
import * as moment from 'moment';
import 'moment/locale/pt-br';

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
  providers: [ IncomeProvider ]
})
export class IncomePage {
  public categories:Array<Categorie> = [];
  public categorieName: Categorie;

  public income:any = {
    'resume' : '',
    'entrada':0,
    'datein':'',
    'name':'' 
  }


formIncome: FormGroup;
constructor(public navCtrl: NavController, 
            public navParams: NavParams, 
            public popoverCtrl: PopoverController,
            public categorieProvider: CategorieProvider,
            public incomeProvider: IncomeProvider,
            public toastCtrl: ToastController) {

            new Promise(() => {
                this.categorieProvider.getAllCategorie()
                  .then((result) => {
                    this.categories = result.filter((c: Categorie) => c.type === 'I');
                    return this.categories;
                }).catch(e =>  console.log(e));
              }).catch(e =>  console.log(e));

          this.formIncome = new FormGroup({
              formName: new FormControl(),
              formMoney: new FormControl(),
              formDate: new FormControl(),
              formNote: new FormControl(),
              formCategorie: new FormControl()
          });
}


  submit(data){
   let i = new Income(data);
       i.datein = moment(data.datein).format();
       i.categorie_id = this.categorieName.id;
    this.incomeProvider.insertIncome(i).then( e => {
      console.log(e);
      let msg = this.toastCtrl.create({message:'Ok!', duration: 3000, position: 'top'});
      msg.present();
    }).catch( e => {
      console.log(e);
      let msg = this.toastCtrl.create({message:'Not Ok!', duration: 3000, position: 'top'});
      msg.present();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomePage');
  }

  showCategories(){
    let opt = {
      showBackdrop: true,
      enableBackdropDismiss: true
    }
    let opnModal = this.popoverCtrl.create(Popup,{data: this.categories}, opt );
    opnModal.onDidDismiss(data => {
      this.categorieName = data;
    });
    opnModal.present();
  }

}
