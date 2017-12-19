import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the ExpenseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpenseProvider {
  public aExpense = Array<Expense>()

  constructor(public dbProvider: DatabaseProvider) {
    console.log('Hello ExpenseProvider Provider');
  }

  getAllEpense(){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM expense',{}).then((data) => {
        this.aExpense = [];
        for(var i=0; i < data.rows.length; i++){
          let item = data.rows.item(i);
          let expense = new Expense();
          expense.id = item.id;
          expense.name = item.name;
          expense.status = item.status;
          expense.entrada = item.entrada;
          expense.saida = item.saida;
          expense.resume = item.resume;
          expense.datain = item.datain;
          expense.dataout = item.dataout;
          expense.dataput = item.dataput;
          expense.categorie_id = item.categorie_id;
          this.aExpense.push(expense);
        }
        console.log(this.aExpense);
        return this.aExpense;
      });
    })
  }


  insertExpense(e){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "INSERT INTO expense (name,status,entrada,resume,datain,categorie_id) values(?,?,?,?,?,?)";
      let query = [e.name, e.status, e.entrada, e.resume, e.datain, e.categorie_id];
      return db.executeSql(sql,query);
    });
  }


  removeExpense(e){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "DELETE FROM expense WHERE id = ?";
      let query = [e.id];
      return db.executeSql(sql, query).then(e => console.log(e));
    })
  }


}
export class Expense{
  
  constructor() {
    this.dataout = new Date();
    this.datain = new Date();
    this.dataput = new Date(); 
  }

  id: number;
  name: string;
  status: number;
  entrada: number;
  saida: number;
  resume: string;
  datain: Date;
  dataout: Date;
  dataput: Date;
  categorie_id: number;
}