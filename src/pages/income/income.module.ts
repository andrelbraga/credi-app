import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncomePage } from './income';
import { IncomeProvider } from '../../providers/income/income';

@NgModule({
  declarations: [
    IncomePage,
  ],
  imports: [
    IonicPageModule.forChild(IncomePage),
  ],
  providers: [ IncomeProvider ]
})
export class IncomePageModule {}
