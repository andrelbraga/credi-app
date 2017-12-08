import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoicePage } from './invoice';
import { SQLite } from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    InvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(InvoicePage)
  ],
  entryComponents: [
    InvoicePage,
  ],
  providers: [
    SQLite
  ]
})
export class InvoicePageModule {}
