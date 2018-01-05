import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomePage, Popup } from './income';
import { ListIncomePageModule } from './list-income/list-income.module';
import { EditIncomePageModule } from './edit-income/edit-income.module';


@NgModule({
  declarations: [
    IncomePage,
    Popup
  ],
  imports: [
    ListIncomePageModule,
    EditIncomePageModule,
    IonicPageModule.forChild(IncomePage),
  ],
  providers: [ 
   ],
  entryComponents: [
    IncomePage,
    Popup
  ]
})
export class IncomePageModule {}
