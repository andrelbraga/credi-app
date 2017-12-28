import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListExpensePage } from './list-expense';
import { PopoverPageModule } from './popover/popover.module';


@NgModule({
  declarations: [
    ListExpensePage
  ],
  imports: [
    PopoverPageModule,
    IonicPageModule.forChild(ListExpensePage),
  ],
  providers:[
  ],
  entryComponents:[
  ]
})
export class ListExpensePageModule {}
