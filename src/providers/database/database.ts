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

  constructor(private sqlite: SQLite, public toastCtrl: ToastController) { }

public iniDb(){
  return this.sqlite.create({
    name: 'credi.db',
    location: 'default'
  });
}

public delDb(){
  return this.sqlite.deleteDatabase({
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
      db.sqlBatch([ //Type Expense / Regulares
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Comida','md-restaurant','flame','true','E',1]],          
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Luz','md-flash','globe','true','E',1]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Agua','ios-water-outline','primary','true','E',1]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Telefone','md-call','call','true','E',1]],
        //Necessárias
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Roupas','md-shirt','card','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Carro','md-car','car','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Onibus','md-bus','car','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Gasolina','md-flame','flame','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Contas Diversas','md-document','document','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Tv','md-desktop','desktop','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Internet','md-at','primary','true','E',2]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Mercado','md-cart','primary','true','E',2]],
        //Recreativas
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Café','md-cafe','cafe','true','E',3]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Lazer','md-glasses','glasses','true','E',3]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Jogos','md-game-controller-b','primary','true','E',3]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Fast-Food','md-pizza','flame','true','E',3]],
        //Extraordinárias
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Casa','md-home','home','true','E',4]],     
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Dinheiro','md-cash','cash','true','E',4]],      
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Pessoal','md-contacts','contacts','true','E',4]],         
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Lazer','md-football','dark','true','E',4]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Cartão de Crédito','md-card','card','true','E',4]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Material Construção','md-hammer','cafe','true','E',4]],    
        //Type Income
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Crédito','md-card','card','true','I',6]],
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Dinheiro','md-cash','cash','true','I',5]],          
        ['INSERT INTO categorie (name,icon,color,status,type,complexity) VALUES (?,?,?,?,?,?)',['Rendimentos','md-trending-up','primary','true','I',5]],                    
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
        ['INSERT INTO month (id,name) VALUES (?,?)',[12,'Dezembro']],
        //Types Categorie
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[1,'Despesa Regulares','Ex:(Agua, Luz, Comida)']],
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[2,'Despesa Necessárias','Ex:(Roupa, Locomoção, Telefone)']],
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[3,'Despesa Recreativas','Ex:(Cinema, Fastfood)']],
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[4,'Despesa Extraordinárias','Ex:(Comprar casa, roupa, televisão e/ou Carro)']],
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[5,'Renda Fixa','Ex:(Sálario empresa, Pensão Alimenticia)']],
        ['INSERT INTO types_categories (id,name,resume) VALUES (?,?,?)',[6,'Renda Váriavel','Ex:(Proventos, Investimentos, Capitalização)']],
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
  ['CREATE TABLE IF NOT EXISTS categorie (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, icon TEXT, color TEXT, status TEXT, type TEXT, complexity INTEGER)'],
  ['CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT, datein TEXT, dateout TEXT, dateput TEXT, categorie_id INTEGER, FOREIGN KEY(categorie_id) REFERENCES categorie(id))'],
  ['CREATE TABLE IF NOT EXISTS income (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, status NUMERIC, entrada REAL, saida REAL, resume TEXT, datein TEXT, dateout TEXT, dateput TEXT, categorie_id INTEGER, FOREIGN KEY(categorie_id) REFERENCES categorie(id))'],
  ['CREATE TABLE IF NOT EXISTS graphic (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'],
  ['CREATE TABLE IF NOT EXISTS month (id INTEGER PRIMARY KEY, name TEXT)'],
  ['CREATE TABLE IF NOT EXISTS month_has_expense (id INTEGER PRIMARY KEY AUTOINCREMENT, expense_id INTEGER, month_id INTEGER, year_in INTEGER, FOREIGN KEY(expense_id) REFERENCES expense(id), FOREIGN KEY(month_id) REFERENCES month(id))'],
  ['CREATE TABLE IF NOT EXISTS month_has_income (id INTEGER PRIMARY KEY AUTOINCREMENT, income_id INTEGER, month_id INTEGER, year_in INTEGER, FOREIGN KEY(income_id) REFERENCES income(id), FOREIGN KEY(month_id) REFERENCES month(id))'],
  //Analytics
  ['CREATE TABLE IF NOT EXISTS types_categories (id INTEGER PRIMARY KEY, name TEXT, resume TEXT)']
]).then(() => {
  console.info('Create DBs!');
}).catch(e => {
  console.error(e);
});

}

}
