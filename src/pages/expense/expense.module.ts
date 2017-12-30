import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage, Popup } from './expense';
import { ListExpensePageModule } from './list-expense/list-expense.module';
import { EditExpensePageModule } from './edit-expense/edit-expense.module';



@NgModule({
  declarations: [
    ExpensePage,
    Popup
  ],
  imports: [
    ListExpensePageModule,
    EditExpensePageModule,
    IonicPageModule.forChild(ExpensePage)
  ],
  exports: [],
  providers: [
    
  ],
  entryComponents:[
    ExpensePage,
    Popup
  ]
})
export class ExpensePageModule {}
