import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the CategorieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategorieProvider {
public
  constructor(private dbProvider: DatabaseProvider, private sqlite: SQLite, public toastCtrl: ToastController) {
    console.log('Hello CategorieProvider Provider');
  }

  createTbl(){
    this.toastCtrl.create({message:'Insert Categorie Conclude!', duration: 2000, position: 'top'});
  }

  getDb(){
    // this.dbProvider.initizalizeDb().then((db: SQLiteObject) => {
    //   db.executeSql('SELECT * FROM categorie',{}).then((data) =>{
    //       return data;
    //   });
    // })
  }

  delDb(){

}

  insertDb(){

}

}
