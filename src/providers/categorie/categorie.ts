import { Injectable } from '@angular/core';
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
        this.aCategorie = [];
         for(var i=0; i < data.rows.length;i++){
           let item = data.rows.item(i);
           let categorie = new Categorie(item);
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
    return this.dbProvider.iniDb()
      .then((db: SQLiteObject) => {
        let qry = 'UPDATE categorie SET name = ?, status = ? WHERE id = ?';
        let data = [categorie.name, categorie.status, categorie.id];
        return db.executeSql(qry,data).catch(e => console.error(e) );      
      }).catch(e => console.error(e) );
  }

}

export class Categorie{
  
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.color = data.color;
    this.status = data.status;
    this.type = data.type;
    this.complexity = data.complexity;  
  }

  id: number;
  name: string;
  icon: string;
  color: string;
  status: string;
  type: string;
  complexity: string;
}
