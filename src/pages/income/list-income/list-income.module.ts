import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListIncomePage, Popup } from './list-income';

@NgModule({
  declarations: [
    ListIncomePage,
    Popup
  ],
  imports: [
    IonicPageModule.forChild(ListIncomePage),
  ],
  entryComponents:[
    ListIncomePage,
    Popup
  ]
})
export class ListIncomePageModule {}
