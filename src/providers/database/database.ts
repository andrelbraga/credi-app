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

public iniDb(){
  return this.sqlite.create({
    name: 'data.db',
    location: 'default'
  });
}

public createDb(){
return this.iniDb()
.then((db: SQLiteObject) => {
  this.createTables(db);
  this.insertDataDefaultTableCategorie(db);
}).catch(e => {
  console.error(e);
})

}

public insertDataDefaultTableCategorie(db: SQLiteObject){
  db.executeSql('SELECT COUNT(id) as qtd FROM categorie', {})
  .then((data: any) => {
    if(data.rows.item(0).qtd == 0){
      db.sqlBatch([
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Market','md-home','home','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Fuel','md-flame','flame','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Game','md-game-controller-b','primary','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Income','md-document','document','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Cash','md-cash','cash','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Coffee','md-cafe','cafe','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Telephone','md-call','call','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Car','md-car','car','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Glasse','md-glasses','glasses','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Contact','md-contacts','contacts','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Tv','md-desktop','desktop','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['Football','md-football','football','true']],
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['CreditCard','md-card','card','true']],
          //Categories Income
          ['INSERT INTO categorie (name,icon,color,status) VALUES (?,?,?,?)',['CreditCard','md-card','card','true']]
          
      ]).then(()=>{
        console.info('Insert Categorie Conclude!');
      })
      .catch(e => {
        console.error(e);
      })
    }
  }).catch(e => {
    console.error(e)
  });
}

public createTables(db: SQLiteObject){
db.sqlBatch([
  ['CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, icon TEXT, color TEXT, status TEXT)'],
  ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada TEXT, saida TEXT, resume TEXT)'],
  ['CREATE TABLE IF NOT EXISTS graphic (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'],
  ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada TEXT, saida TEXT, resume TEXT)']
]).then(() => {
  console.info('Create DBs!');
}).catch(e => {
  console.error(e);
});

}

}
