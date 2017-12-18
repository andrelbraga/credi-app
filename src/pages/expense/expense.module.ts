import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage } from './expense';
import { ExpenseProvider } from '../../providers/expense/expense';

import { ComponentsModule } from '../../components/components.module';
import { AlertDefaultComponent } from '../../components/alert-default/alert-default';


@NgModule({
  declarations: [ ExpensePage ],
  imports: [ 
    ComponentsModule,
    IonicPageModule.forChild(ExpensePage) 
  ],
  exports: [],
  providers: [ 
    ExpenseProvider 
  ],
  entryComponents:[
    AlertDefaultComponent
  ]
})
export class ExpensePageModule {}
