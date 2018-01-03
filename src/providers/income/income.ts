import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

/*
  Generated class for the IncomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IncomeProvider {
  public aIncome: any = [];

  constructor(public dbProvider: DatabaseProvider) {
    console.log('Hello IncomeProvider Provider');
  }

  getAllIncome(status: number = 1, lazy: boolean = true){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "SELECT income.*, categorie.icon, categorie.color, cateorie.name as c_name FROM income";
      if(lazy){
        sql += " INNER JOIN categorie ON income.categorie_id = categorie.id";
      }
      sql += " WHERE income.status = ?";
      let query = [status];
      db.executeSql(sql, query).then((data)=>{
        this.aIncome = [];
        for(var i=0; i < data.rows.length; i++){
          let item = data.rows.item(i);
          let income: any = item;
          this.aIncome.push(income);
        }
        console.log(this.aIncome);
        return this.aIncome;
      });
    });
  }

  insertIncome(i){
    return this.dbProvider.iniDb()
     .then((db: SQLiteObject) => {
      let sql1 = "INSERT INTO income (name,status,entrada,resume,datein,categorie_id) VALUES (?,?,?,?,?,?)" 
      let query1 = [i.name, i.status, i.entrada, i.resume, i.datein, i.categorie_id];
       let m = new Date(i.datein);
       let mReal = m.getMonth() + 1;
       let yReal = m.getFullYear();
       db.executeSql(sql1, query1).then((res) => {
        let sql2 = "INSERT INTO month_has_income (income_id,month_id,year_in) VALUES (?,?,?)";
        let query2 = [res.insertId, mReal, yReal];
        return db.executeSql(sql2, query2);
       }).catch(e => console.log(e));
     });

  }

  getAllbyMothIncome(month){
    return this.dbProvider.iniDb()
    .then((db: SQLiteObject) => {
      let sql = "SELECT income.*, categorie.icon, categorie.color, month.name as m_name, categorie.name as c_name";
          sql += " FROM month_has_income";
          sql += " INNER JOIN income ON month_has_income.income_id = income.id";
          sql += " INNER JOIN categorie ON income.categorie_id = categorie.id";
          sql += " INNER JOIN month ON month.id = month_has_income.month_id";   
          sql += " WHERE income.status = 1 AND month_has_income.month_id = ?";
      let data = [month];
      return db.executeSql(sql,data).then((data) => {
        this.aIncome = [];
        for(var i=0; i < data.rows.length; i++){
          let item = data.rows.item(i);
          let income: any = item;
          this.aIncome.push(income);
        }
        console.log(this.aIncome);
        return this.aIncome;
      });
    })
  }

}

export class Income{
  constructor(data) {
    this.dateout = new Date() || data.dateout;
    this.datein = new Date() || data.datein;
    this.dateput = new Date() || data.datein;
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
  datein: string;
  dateout: string;
  dateput: string;
  categorie_id: number;
}
