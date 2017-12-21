import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListIncomePage } from './list-income';

@NgModule({
  declarations: [
    ListIncomePage,
  ],
  imports: [
    IonicPageModule.forChild(ListIncomePage),
  ],
})
export class ListIncomePageModule {}
