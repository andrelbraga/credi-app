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
  //public aExpense: Array<Expense> = [];
  public aExpense: any = [];

  constructor(public dbProvider: DatabaseProvider) {
    console.log('Hello ExpenseProvider Provider');
  }

  getAllEpense(status: number = 1, lazy: boolean = false){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "SELECT expense.*, categorie.icon, categorie.color, categorie.name as c_name FROM expense";
      if(lazy){
        sql += " INNER JOIN categorie ON expense.categorie_id = categorie.id";
      }       
      sql += " WHERE expense.status = ?";
      let data = [status];
      return db.executeSql(sql,data).then((data) => {
        this.aExpense = [];
        for(var i=0; i < data.rows.length; i++){
          let item = data.rows.item(i);
          let expense: any = item;

          this.aExpense.push(expense);
        }
        console.log(this.aExpense);
        return this.aExpense;
      });
    })
  }

  getAllbyMothEspense(month){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "SELECT expense.*, categorie.icon, categorie.color, month.name as m_name, categorie.name as c_name";
          sql += " FROM month_has_expense";
          sql += " INNER JOIN expense ON month_has_expense.expense_id = expense.id";
          sql += " INNER JOIN categorie ON expense.categorie_id = categorie.id";
          sql += " INNER JOIN month ON month.id = month_has_expense.month_id"   
          sql += " WHERE expense.status = 1 AND month_has_expense.month_id = ?";
      let data = [month];
      return db.executeSql(sql,data).then((data) => {
        this.aExpense = [];
        for(var i=0; i < data.rows.length; i++){
          let item = data.rows.item(i);
          let expense: any = item;
          this.aExpense.push(expense);
        }
        console.log(this.aExpense);
        return this.aExpense;
      });
    })
  }


  insertExpense(e){
    //e.datain = e.datain.toLocaleString('pt-BR',{month:'2-digit', day:'2-digit', year:'numeric'});
  return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql1 = "INSERT INTO expense (name,status,entrada,resume,datain,categorie_id) VALUES (?,?,?,?,?,?)";
      let query1 = [e.name, e.status, e.entrada, e.resume, e.datain, e.categorie_id];
        let m = new Date(e.datain);
        let mReal = m.getMonth() + 1;
        db.executeSql(sql1,query1).then((res) => {
          let sql2 = "INSERT INTO month_has_expense (expense_id, month_id) VALUES (?,?)";
          let query2 = [res.insertId, mReal];
          return db.executeSql(sql2,query2);
        }); 
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
  
  constructor(data) {
    this.dataout = new Date() || data.dataout;
    this.datain = new Date() || data.datain;
    this.dataput = new Date() || data.datain;
    this.id = data.id;
    this.name = data.name;
    this.status = 1 || data.status;
    this.entrada = data.entrada;
    this.saida = data.saida;
    this.resume = data.resume;
    this.categorie_id = data.categorie_id; 
  }

  id: number;
  name: string;
  status: number;
  entrada: number;
  saida: number;
  resume: string;
  datain: string;
  dataout: string;
  dataput: string;
  categorie_id: number;
}