import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListExpensePage } from './list-expense';

@NgModule({
  declarations: [
    ListExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(ListExpensePage),
  ],
  providers:[
    //{provide: LOCALE_ID, useValue: 'pt-BR'},
  ]
})
export class ListExpensePageModule {}
