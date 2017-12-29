import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListExpensePage, Popup } from './list-expense';


@NgModule({
  declarations: [
    ListExpensePage,
    Popup
  ],
  imports: [
    IonicPageModule.forChild(ListExpensePage),
  ],
  providers:[
  ],
  entryComponents:[
    ListExpensePage,
    Popup
  ]
})
export class ListExpensePageModule {}
