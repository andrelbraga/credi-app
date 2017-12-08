import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { InvoicePageModule } from '../pages/invoice/invoice.module';
import { IncomePageModule } from '../pages/income/income.module';
import { ExpensePageModule } from '../pages/expense/expense.module';
import { CategoriePageModule } from '../pages/categorie/categorie.module';

//implementig
import { ChartsModule } from 'ng2-charts';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    InvoicePageModule,
    IncomePageModule,
    ExpensePageModule,
    CategoriePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
