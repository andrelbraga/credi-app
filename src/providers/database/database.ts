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
          //Month
          ['INSERT INTO month (id,name) VALUES (?,?)',[1,'Janeiro']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[2,'Feveiro']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[3,'Março']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[4,'Abril']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[5,'Maio']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[6,'Junho']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[7,'Julho']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[8,'Agosto']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[9,'Setembro']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[10,'Outubro']],
          ['INSERT INTO month (id,name) VALUES (?,?)',[11,'Novembro',]],
          ['INSERT INTO month (id,name) VALUES (?,?)',[12,'Dezembro']]
      ]).then(()=>{
        console.info('Insert Categorie with Month Conclude!');
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
  ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT)'],
  ['CREATE TABLE IF NOT EXISTS graphic (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'],
  ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT, datain TEXT, dataout TEXT, dataput TEXT, categorie_id INTEGER, FOREIGN KEY(categorie_id) REFERENCES categorie(id))'],
  ['CREATE TABLE IF NOT EXISTS month (id INTEGER PRIMARY KEY, name TEXT)'],
  ['CREATE TABLE IF NOT EXISTS month_has_expense (id INTEGER PRIMARY KEY AUTOINCREMENT, expense_id INTEGER, month_id INTEGER, FOREIGN KEY(expense_id) REFERENCES expense(id), FOREIGN KEY(month_id) REFERENCES month(id))']
]).then(() => {
  console.info('Create DBs!');
}).catch(e => {
  console.error(e);
});

}

}
