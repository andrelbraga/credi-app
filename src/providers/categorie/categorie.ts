import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the CategorieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategorieProvider {
  public aCategorie = Array<Categorie>();

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello CategorieProvider Provider');
  }

  getAllCategorie(){
     return this.dbProvider.iniDb()
     .then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM categorie',{})
      .then( data =>{
         for(var i=0; i < data.rows.length;i++){
           let item = data.rows.item(i);
           let categorie = new Categorie();
           categorie.id = item.id;
           categorie.name = item.name;
           categorie.color = item.color;
           categorie.icon = item.icon;
           categorie.status = item.status;
           this.aCategorie.push(categorie);
         }
         console.table(this.aCategorie);
      return this.aCategorie;
      });
    })
  }

  removeCategorie(categorie: Categorie){

  }

  insertCategorie(categorie: Categorie){

  }

  updateCategorie(categorie: Categorie){

  }

}

export class Categorie{
  id: number;
  name: string;
  icon: string;
  color: string;
  status: string;
}
