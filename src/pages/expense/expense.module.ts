import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage } from './expense';
import { ExpenseProvider } from '../../providers/expense/expense';


@NgModule({
  declarations: [ ExpensePage ],
  imports: [ 
    IonicPageModule.forChild(ExpensePage) 
  ],
  exports: [],
  providers: [ 
    ExpenseProvider 
  ],
  entryComponents:[
   
  ]
})
export class ExpensePageModule {}
