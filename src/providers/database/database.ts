import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite, public toastCtrl: ToastController) {

  }

public initizalizeDb(){
  return this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });
}

public createDb(){
return this.initizalizeDb()
.then((db: SQLiteObject) => {
  this.createTables(db);
  this.insertDataDefaultTableCategorie(db);
}).catch(()=>{
  let toast = this.toastCtrl.create({message:'Not create Tables!', duration: 2000, position: 'top'});
  toast.present();
})

}

public insertDataDefaultTableCategorie(db: SQLiteObject){
  db.executeSql('SELECT COUNT(id) as qtd FROM categorie', {})
  .then((data: any) => {
    if(data.rows.item(0).qtd == 0){
      db.sqlBatch([
          ['INSERT INTO categorie (name, status) values (?,?)',['Market',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Fuel',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Game',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Income',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Cash',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Coffee',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Telephone',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Car',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Glasse',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Contact',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Tv',1]],
          ['INSERT INTO categorie (name, status) values (?,?)',['Football',1]]
      ]).then(()=>{
        let toast = this.toastCtrl.create({message:'Insert Categorie Conclude!', duration: 2000, position: 'top'});
        toast.present();
      })
        .catch(()=>{
          let toast = this.toastCtrl.create({message:'Not! Insert Categorie.', duration: 2000, position: 'top'});
          toast.present();
      });
    }
  }).catch(()=>{
    let toast = this.toastCtrl.create({message:'Not!! Select Categorie.', duration: 2000, position: 'top'});
    toast.present();
  });
}

public createTables(db: SQLiteObject){
db.sqlBatch([
  ['CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), status NUMERIC)'],
  ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), status NUMERIC, entrada VARCHAR(8), saida VARCHAR(8), resume VARCHAR(150))'],
  ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), status NUMERIC, entrada VARCHAR(8), saida VARCHAR(8), resume VARCHAR(150))']
]).then(() => {
  let toast = this.toastCtrl.create({message:'Create DBs!', duration: 2000, position: 'top'});
  toast.present();
}).catch(()=>{
  let toast = this.toastCtrl.create({message:'Not Create DBs!', duration: 2000, position: 'top'});
  toast.present();
});

}

}
