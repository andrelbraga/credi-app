import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage } from './expense';
import { ListExpensePageModule } from './list-expense/list-expense.module';
import { EditExpensePageModule } from './edit-expense/edit-expense.module';
import { ListCategoriesPageModule } from './list-categories/list-categories.module';



@NgModule({
  declarations: [
    ExpensePage
  ],
  imports: [
    ListExpensePageModule,
    EditExpensePageModule,
    ListCategoriesPageModule,
    IonicPageModule.forChild(ExpensePage)
  ],
  exports: [],
  providers: [
    
  ],
  entryComponents:[
    ExpensePage
  ]
})
export class ExpensePageModule {}
