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
  public aCategorie = Array<Categorie>();
  constructor(private dbProvider: DatabaseProvider, private sqlite: SQLite, public toastCtrl: ToastController) {
    console.log('Hello CategorieProvider Provider');
  }

  createTbl(){
  }

  getDb(){
     this.dbProvider.iniDb().then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM category',{})
      .then( data =>{
         for(var i=1; i < data.rows.length;i++){
           let item = data.rows.item(i);
           let categorie = new Categorie();
           categorie.id = item.id;
           categorie.name = item.name;
           categorie.status = item.status;
           this.aCategorie.push(categorie);
         }
      return this.aCategorie;
      });
    })
  }

  delDb(){

  }

  insertDb(){

  }

}

export class Categorie{
  id: number;
  name: string;
  status: number;
}
