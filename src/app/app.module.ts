import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//my components

import { InvoicePageModule } from '../pages/invoice/invoice.module';
import { IncomePageModule } from '../pages/income/income.module';
import { ExpensePageModule } from '../pages/expense/expense.module';
import { CategoriePageModule } from '../pages/categorie/categorie.module';

//implementig
import { ChartsModule } from 'ng2-charts';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';
//import { CategorieProvider } from '../providers/categorie/categorie';
import { ExpenseProvider } from '../providers/expense/expense';
//import { IncomeProvider } from '../providers/income/income';
import { InvoiceProvider } from '../providers/invoice/invoice';
//Components Module
import { ComponentsModule } from '../components/components.module';



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
    ComponentsModule,
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
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    //CategorieProvider,
    ExpenseProvider,
    //IncomeProvider,
    InvoiceProvider
  ]
})
export class AppModule {}
